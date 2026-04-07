from django.shortcuts import render
from rest_framework import viewsets, response
from .serializers import *
from .tasks import increment_view_count


# Create your views here.


class CategoryViewSet(viewsets.ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer

class TagViewSet(viewsets.ModelViewSet):
    queryset = Tag.objects.all()
    serializer_class = TagSerializer


class ContentViewSet(viewsets.ModelViewSet):
    queryset = Content.objects.all()

    def get_serializer_class(self):
        if self.action == 'list' or self.action == 'retrieve':
            return ContentReadSerializer
        elif self.action == 'create' or self.action == 'update' or self.action == 'partial_update':
            return ContentWriteSerializer



class NewsViewSet(viewsets.ModelViewSet):

    queryset = News.objects.select_related('content', 'thumbnail', 'parent').all()

    def get_serializer_class(self):

        if self.action == 'list' or self.action == 'retrieve':
            return NewsReadSerializer
        elif self.action == 'create' or self.action == 'update' or self.action == 'partial_update':
            return NewsWriteSerializer

    def  retrieve(self, request, *args, **kwargs):
        instance = self.get_object()

        increment_view_count.delay(instance.content.id)
        serializer = self.get_serializer(instance)
        return response.Response(serializer.data)


