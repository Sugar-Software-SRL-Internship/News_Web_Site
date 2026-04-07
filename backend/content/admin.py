from django.contrib import admin
from django.db.models import ForeignKey
from django.forms import ModelChoiceField
from django.http import HttpRequest
from django.urls import reverse

from .models import  *
from unfold.admin import ModelAdmin,StackedInline
from django.utils.html import format_html
from unfold.decorators import display


@admin.register(Category)
class CategoryAdmin(ModelAdmin):
    pass

@admin.register(Tag)
class TagAdmin(ModelAdmin):
    pass

@admin.register(Content)
class ContentAdmin(ModelAdmin):
    list_display = ["title", "content_type", "status", "owner", "publish_date",'views']
    list_filter = ["content_type", "status", "category"]
    search_fields = ["title"]

@admin.register(MultiMedia)
class MultiMediaAdmin(ModelAdmin):
    list_display = ['title','media_type','file_preview']
    list_filter = ['media_type']
    search_fields = ['title']

    def file_preview(self, obj):
        if obj.media_type == 2 and obj.file:
            return format_html('<img src="{}" style="width: 50px; height: 50px; border-radius: 4px;" />', obj.file.url)
        return  "Video"


class NewsInline(StackedInline):
    model = News
    fk_name = 'content'
    extra = 0
    tab = True


@admin.register(News)
class NewsAdmin(ModelAdmin):
    list_display = ["headline",
        "is_active_colored",
        "fixed_until",
        "is_breaking",
        "parent_link",
        "preview"]
    search_fields = ["headline"]
    raw_id_fields = ['thumbnail']

    @display(description="Fixed Now", boolean=True)
    def is_active_colored(self, obj):
        return obj.is_fixed

    @display(description="Thumbnail")
    def preview(self, obj):
        if obj.thumbnail and obj.thumbnail.file:
            return format_html(
                '<img src="{}" style="width: 44px; height: 44px; border-radius: 6px; object-fit: cover;" />',
                obj.thumbnail.file.url
            )
        return format_html('<span style="color: #9ca3af;">No Image</span>')

    @display(description="Parent News")
    def parent_link(self, obj):
        if obj.parent:
            url = reverse("admin:content_news_change", args=[obj.parent.id])
            return format_html(
                '<a href="{}" style="color: #3b82f6; text-decoration: underline;">{}</a>',
                url,
                obj.parent.headline
            )
        return "—"
