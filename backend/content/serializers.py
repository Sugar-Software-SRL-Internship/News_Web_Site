from redis.asyncio.observability.recorder import record_connection_create_time
from rest_framework import serializers
from .models import Content, News, Category, Tag, MultiMedia, Guest, Promo, Show,Serie
from django.db import transaction
from users.models import User

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ['name']

class TagSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tag
        fields = ['name']

class ContentReadSerializer(serializers.ModelSerializer):
    category = CategorySerializer(read_only=True)
    tags = TagSerializer(many=True, read_only=True)

    class Meta:
        model = Content
        fields = ['id','title', 'content_type', 'status', 'views', 'publish_date', 'category', 'tags','owner']

class ContentWriteSerializer(serializers.ModelSerializer):
    owner = serializers.PrimaryKeyRelatedField(read_only=True)
    class Meta:
        model = Content
        fields = ['title', 'content_type', 'status', 'publish_date', 'category', 'tags','owner']


    def create(self, validated_data):
        validated_data['owner'] = self.context['request'].user

        return super().create(validated_data)



class MultiMediaSerializer(serializers.ModelSerializer):
    class Meta:
        model = MultiMedia
        fields = '__all__'

class NewsReadSerializer(serializers.ModelSerializer):
    content = ContentReadSerializer(read_only=True)
    thumbnail = MultiMediaSerializer(read_only=True)
    updates = serializers.StringRelatedField(many=True, read_only=True)

    class Meta:
        model = News
        fields = ['id','content', 'headline', 'thumbnail', 'fixed_until', 'is_breaking', 'parent', 'updates','body']


class NewsWriteSerializer(serializers.ModelSerializer):
    content = ContentWriteSerializer()

    class Meta:
        model = News
        fields = ['content', 'headline', 'thumbnail', 'fixed_until', 'is_breaking', 'parent', 'body']

    def create(self, validated_data):
        content_data = validated_data.pop('content')

        with transaction.atomic():
            # Используем наш умный сериализатор вместо Content.objects.create
            content_serializer = ContentWriteSerializer(data=content_data, context=self.context)
            content_serializer.is_valid(raise_exception=True)
            content_instance = content_serializer.save()


            news_instance = News.objects.create(content=content_instance, **validated_data)
            return news_instance

    def update(self, instance, validated_data):
        content_data = validated_data.pop('content', None)

        with transaction.atomic():
            for attr, value in validated_data.items():
                setattr(instance, attr, value)
            instance.save()

            if content_data:

                content_instance = instance.content
                content_serializer = ContentWriteSerializer(
                    content_instance,
                    data=content_data,
                    context=self.context,
                    partial=True  # Чтобы можно было обновить только одно поле
                )
                content_serializer.is_valid(raise_exception=True)
                content_serializer.save()

            return instance

class GuestSerializer(serializers.ModelSerializer):

    class Meta:
        model = Guest
        fields = '__all__'


class ShowReadSerializer(serializers.ModelSerializer):
    content = ContentReadSerializer(read_only=True)
    thumbnail = MultiMediaSerializer(read_only=True)

    class Meta:
        model = Show
        fields = ['id','content','description','thumbnail']


class ShowWriteSerializer(serializers.ModelSerializer):
    content = ContentWriteSerializer()
    thumbnail = serializers.PrimaryKeyRelatedField(queryset=MultiMedia.objects.all(),required=False,allow_null=True)

    class Meta:
        model = Show
        fields = ['content','description','thumbnail']

    def create(self, validated_data):
        content = validated_data.pop('content')
        with transaction.atomic():
            content_serializer = ContentWriteSerializer(data=content, context=self.context)
            content_serializer.is_valid(raise_exception=True)
            content_instance = content_serializer.save()

            show = Show.objects.create(content=content_instance, **validated_data)
            return show

class SeriesReadSerializer(serializers.ModelSerializer):
    show = ShowReadSerializer(read_only=True)
    media = MultiMediaSerializer(read_only=True)
    guests = GuestSerializer(many=True, read_only=True)

    class Meta:
        model=Serie
        fields = ['id','title','show','media','guests','description','published_date',]

class SeriesWriteSerializer(serializers.ModelSerializer):
    media = serializers.PrimaryKeyRelatedField(queryset=MultiMedia.objects.all(),required=False,allow_null=True)
    guests = serializers.PrimaryKeyRelatedField(queryset=Guest.objects.all(),required=False,allow_null=True,many=True)
    show = serializers.PrimaryKeyRelatedField(queryset=Show.objects.all(),required=False,allow_null=True)

    class Meta:
        model=Serie
        fields = ['title', 'show', 'media', 'guests', 'description', 'published_date']





class PromoReadSerializer(serializers.ModelSerializer):
    content_details = ContentReadSerializer(source='content', read_only=True)
    video = MultiMediaSerializer(read_only=True)

    related_show_title = serializers.CharField(source='related_content.content.title', read_only=True)

    class Meta:
        model = Promo
        fields = [
            'id',
            'title',
            'content_details',
            'video',
            'related_content',
            'related_show_title'
        ]


class PromoWriteSerializer(serializers.ModelSerializer):
    show = serializers.PrimaryKeyRelatedField(queryset=Show.objects.all(),source='related_content',required=False,allow_null=True)
    media = serializers.PrimaryKeyRelatedField(queryset=MultiMedia.objects.all(),source='video',required=False,allow_null=True)
    id_content = serializers.PrimaryKeyRelatedField(queryset=Content.objects.all(),source='content',required=False,allow_null=True)
    new_content = ContentWriteSerializer(allow_null=True,required=False)

    class Meta:
        model = Promo
        fields = ['title', 'show', 'media', 'id_content', 'new_content']


    def create(self, validated_data):

        new_content_data = validated_data.pop('new_content', None)
        with transaction.atomic():
           if new_content_data:
               content_serializer = ContentWriteSerializer(data=new_content_data,context=self.context)
               content_serializer.is_valid(raise_exception=True)

               content = content_serializer.save()
               validated_data['content'] = content


        return super().create(validated_data)

