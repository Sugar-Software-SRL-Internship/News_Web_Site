from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import *

router = DefaultRouter()
router.register(r'news', NewsViewSet, basename='news')
router.register(r'contents',ContentViewSet, basename='contents')
router.register(r'shows',ShowViewSet, basename='shows')
router.register(r'tags',TagViewSet, basename='tags')
router.register(r'categories',CategoryViewSet, basename='categories')

urlpatterns =[
    path('', include(router.urls)),
]