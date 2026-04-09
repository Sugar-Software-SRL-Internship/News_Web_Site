from django.contrib import admin
from django.db.models import ForeignKey
from django import forms
from django.http import HttpRequest
from django.urls import reverse
from django.utils.safestring import mark_safe

from .models import  *
from unfold.admin import ModelAdmin,StackedInline
from django.utils.html import format_html
from unfold.decorators import display


class NewsInline(StackedInline):
    model = News
    fk_name = 'content'
    extra = 0
    tab = True

class ShowInline(StackedInline):
    model = Show
    fk_name = 'content'
    extra = 0
    tab = True

class PromosInline(StackedInline):
    model = Promo
    fk_name = 'content'
    extra = 0
    tab = True

class SerieInline(StackedInline):
    model=Serie
    fk_name = 'show'
    tab = True
    extra = 0

class PromoInline(StackedInline):
    model=Promo
    fk_name = 'related_content'
    tab = True

class ShortInline(StackedInline):
    model = Short
    fk_name = 'content'
    extra = 0
    tab = True


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
    inlines = [NewsInline,ShowInline,PromosInline,ShortInline]

@admin.register(MultiMedia)
class MultiMediaAdmin(ModelAdmin):
    list_display = ['title','media_type','display_preview']
    list_filter = ['media_type']
    search_fields = ['title']
    list_per_page = 20

    def display_preview(self, obj):
        if obj.media_type == 2:  # IMAGE

            return format_html(
                '<img src="{}" style="width: 80px; height: 80px; object-fit: cover; border-radius: 8px;" />',
                obj.file.url
            )
        elif obj.media_type == 3:  # VIDEO

            return mark_safe(
                '<div style="width: 80px; height: 80px; background: #000; color: #fff; '
                'display: flex; align-items: center; justify-content: center; '
                'border-radius: 8px; font-size: 10px;">VIDEO</div>'
            )
        return "📄 Text"



@admin.register(News)
class NewsAdmin(ModelAdmin):

    list_display = ["headline",
        "is_active_colored",
        "fixed_until",
        "is_breaking",
        "parent_link",
        "preview"]
    search_fields = ["headline"]
    autocomplete_fields = ['thumbnail']



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
        return mark_safe('<span style="color: #9ca3af;">No Image</span>')

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


@admin.register(Guest)
class GuestAdmin(ModelAdmin):
    list_display = ("name", "photo_preview")


    @display(description="Image")
    def photo_preview(self, obj):
        if obj.photo and obj.photo.file:
            return mark_safe(
                f'<img src="{obj.photo.file.url}" style="width: 40px; height: 40px; border-radius: 50%; object-fit: cover;" />')
        return "—"




@admin.register(Show)
class ShowAdmin(ModelAdmin):
    list_display = ["get_title", "get_status", "count_series"]
    inlines = [SerieInline,PromoInline]

    @display(description="Title")
    def get_title(self, obj):
        return obj.content.title

    @display(description="Status", label=True)
    def get_status(self, obj):
        return obj.content.get_status_display()

    @display(description="Series Count")
    def count_series(self, obj):
        return obj.series.count()


@admin.register(Serie)
class SerieAdmin(ModelAdmin):
    list_display = ['get_title_show','title','published_date']
    list_filter = ("show", "published_date")
    search_fields = ("title", "show__content__title")
    filter_horizontal = ("guests",)

    @display(description="Title_Show")
    def get_title_show(self, obj):
        return obj.show.content.title


@admin.register(Promo)
class PromoAdmin(ModelAdmin):
    list_display = ('title',"get_related_show")

    @display(description="Show")
    def get_related_show(self, obj):
        if obj.related_content:
            return obj.related_content.content.title
        return "—"



@admin.register(Short)
class ShortAdmin(ModelAdmin):
    list_display = [
        "get_title",
        "headline",
        "get_status",
        "get_owner",
        "display_video_preview"
    ]
    list_filter = ["content__status", "content__category"]
    search_fields = ["content__title", "headline"]

    autocomplete_fields = ["video"]

    fieldsets = (
        (None, {
            "fields": ("content", "headline", "video")
        }),
    )

    @display(description="Заголовок")
    def get_title(self, obj):
        return obj.content.title

    @display(description="Статус", label=True)
    def get_status(self, obj):
        return obj.content.get_status_display()

    @display(description="Автор")
    def get_owner(self, obj):
        return obj.content.owner.email if obj.content.owner else "—"

    @display(description="Видео")
    def display_video_preview(self, obj):
        if obj.video and obj.video.file:

            return mark_safe(
                '<div style="background: #000; color: #fff; width: 60px; height: 34px; '
                'display: flex; align-items: center; justify-content: center; '
                'border-radius: 4px; font-size: 10px; font-weight: bold;">VIDEO</div>'
            )

        return "—"

