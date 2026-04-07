from django.shortcuts import render
from rest_framework import viewsets, response
from .serializers import *
from .tasks import increment_view_count


# Create your views here.


class NewsViewSet(viewsets.ModelViewSet):

    queryset = News.objects.select_related('content', 'thumbnail', 'parent').all()

    def get_serializer_class(self):

        if self.action == 'list' or self.action == 'retrieve':
            return NewsReadSerializer
        return NewsReadSerializer

    def  retrieve(self, request, *args, **kwargs):
        instance = self.get_object()

        increment_view_count.delay(instance.content.id)
        serializer = self.get_serializer(instance)
        return response.Response(serializer.data)


