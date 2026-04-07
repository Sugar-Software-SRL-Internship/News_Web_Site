from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import *

router = DefaultRouter()
router.register(r'news', NewsViewSet, basename='news')
router.register(r'contents',ContentViewSet, basename='contents')

urlpatterns =[
    path('', include(router.urls)),
]