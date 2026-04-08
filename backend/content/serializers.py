from rest_framework import serializers
from .models import Content, News, Category, Tag, MultiMedia, Guest, Promo, Show
from django.db import transaction

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ['id','name']

class TagSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tag
        fields = ['id','name']

class ContentReadSerializer(serializers.ModelSerializer):
    category = CategorySerializer(read_only=True)
    tags = TagSerializer(many=True, read_only=True)

    class Meta:
        model = Content
        fields = ['id','title', 'content_type', 'status', 'views', 'publish_date', 'category', 'tags']

class ContentWriteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Content
        fields = ['title', 'content_type', 'status', 'publish_date', 'category', 'tags']

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
        fields = ['content', 'headline', 'thumbnail', 'fixed_until', 'is_breaking', 'parent','body']

    def create(self, validated_data):
        with transaction.atomic():
            content_data = validated_data.pop('content')
            tags_data = content_data.pop('tags', None)
            content_data['owner'] = self.context['request'].user
            content_instance = Content.objects.create(**content_data)

            if tags_data:
                content_instance.tags.set(tags_data)

            news_instance = News.objects.create(content=content_instance, **validated_data)
            return news_instance

    def update(self, instance, validated_data):
        with transaction.atomic():
            content_data = validated_data.pop('content', None)

            for attr, value in validated_data.items():
                setattr(instance, attr, value)
            instance.save()

            if content_data:
                content_instance = instance.content
                tags_data = content_data.pop('tags', None)

                for attr, value in content_data.items():
                    setattr(content_instance, attr, value)
                content_instance.save()

                if tags_data is not None:
                    content_instance.tags.set(tags_data)

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
            content_instance = Content.objects.create(**content)
            show = Show.objects.create(content=content_instance, **validated_data)
            return show

class SeriesReadSerializer(serializers.ModelSerializer):
    show = ShowReadSerializer(read_only=True)






class PromoReadSerializer(serializers.ModelSerializer):
    content = ContentReadSerializer(read_only=True)
    show = ShowReadSerializer(read_only=True)

    class Meta:
        model = Promo
        fields = ['show','title','content',]
