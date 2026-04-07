from rest_framework import serializers
from .models import Content, News, Category, Tag, MultiMedia

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ['name']

class TagSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tag
        fields = ['name']

class ContentSerializer(serializers.ModelSerializer):
    category = CategorySerializer(read_only=True)
    tags = TagSerializer(many=True, read_only=True)
    class Meta:
        model = Content
        fields = ['title', 'content_type', 'status', 'views', 'publish_date', 'category', 'tags']

class MultiMediaSerializer(serializers.ModelSerializer):
    class Meta:
        model = MultiMedia
        fields = '__all__'

class NewsReadSerializer(serializers.ModelSerializer):
    content = ContentSerializer(read_only=True)
    thumbnail = MultiMediaSerializer(read_only=True)
    updates = serializers.StringRelatedField(many=True, read_only=True)

    class Meta:
        model = News
        fields = ['content', 'headline', 'thumbnail', 'fixed_until', 'is_breaking', 'parent', 'updates']


# class NewsWriteSerializer(serializers.ModelSerializer):
#     content = ContentSerializer(read_only=True)
