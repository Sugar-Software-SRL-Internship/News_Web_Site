from django.contrib import admin
from .models import  *
from unfold.admin import ModelAdmin

# Register your models here.
@admin.register(Category)
class CategoryAdmin(ModelAdmin):
    pass

@admin.register(Tag)
class TagAdmin(ModelAdmin):
    pass

@admin.register(Content)
class ContentAdmin(ModelAdmin):
    list_display = ["title", "content_type", "status", "owner", "publish_date"]
    list_filter = ["content_type", "status", "category"]
    search_fields = ["title"]


@admin.register(News)
class NewsAdmin(ModelAdmin):
    list_display = ["headline", "is_breaking", "is_fixed"] # is_fixed — это наше @property
    search_fields = ["headline"]