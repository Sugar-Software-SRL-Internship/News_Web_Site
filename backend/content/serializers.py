from rest_framework import serializers
from .models import Content, News, Category, Tag, MultiMedia
from django.db import transaction

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
        fields = ['title', 'content_type', 'status', 'views', 'publish_date', 'category', 'tags']

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
        fields = ['content', 'headline', 'thumbnail', 'fixed_until', 'is_breaking', 'parent', 'updates']

class NewsWriteSerializer(serializers.ModelSerializer):
    content = ContentWriteSerializer()

    class Meta:
        model = News
        fields = ['content', 'headline', 'thumbnail', 'fixed_until', 'is_breaking', 'parent']

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