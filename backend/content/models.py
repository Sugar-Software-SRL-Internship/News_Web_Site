from django.db import models
from django.db.models.fields import CharField
from ckeditor_uploader.fields import RichTextUploadingField
from ckeditor.fields import RichTextField
from django.utils import timezone

from users.models import User
# Create your models here.




class Category(models.Model):
    name =models.CharField(max_length=100, primary_key=True)

    def __str__(self):
        return self.name

class Tag(models.Model):
    name =models.CharField(max_length=100, primary_key=True)

    def __str__(self):
        return self.name


class Content(models.Model):

    class ContentType(models.IntegerChoices):
        NEWS = 1,'News'
        SHORTS = 2,'Shorts'
        PROMOS = 3,'Promos'
        SHOWS = 4,'Shows'
        TALK_SHOWS = 5,'Talk_Shows'

    class Status(models.IntegerChoices):
        DRAFT = 1,'Draft'
        SENT_TO_APPROVE = 2,'Sent_to_Approve'
        APPROVED = 3,'Approved'
        PUBLISHED = 4,'Published'


    title = models.CharField(max_length=100)
    content_type = models.IntegerField(choices=ContentType.choices,default=ContentType.NEWS)
    status = models.IntegerField(choices=Status.choices,default=Status.DRAFT)
    owner = models.ForeignKey(User,on_delete=models.CASCADE,related_name='content')
    views = models.PositiveIntegerField(default=0)
    publish_date = models.DateTimeField(null=True, blank=True)
    tags=models.ManyToManyField(Tag,blank=True,null=True)
    category = models.ForeignKey(Category, on_delete=models.PROTECT, related_name='content',blank=True,null=True)
    def __str__(self):
        return self.title



class MultiMedia(models.Model):

    class TypeMedia(models.IntegerChoices):
        TEXT = 1,'Text'
        IMAGE = 2,'Image'
        VIDEO = 3,'Video'

    title = CharField(max_length=100,null=True)
    media_type = models.IntegerField(choices=TypeMedia.choices,default=TypeMedia.TEXT)
    file = models.FileField(upload_to='content/%Y/%m/%d/')

    def __str__(self):
        return self.title if self.title else f"Image: {self.file.name.split('/')[-1]}"


class News(models.Model):
   content = models.OneToOneField(Content,on_delete=models.CASCADE,related_name='news')
   headline = models.CharField(max_length=250)
   body = RichTextUploadingField(
       config_name='default',
       extra_plugins=['youtube', 'uploadimage'],
       external_plugin_resources=[(
           'youtube',
           '/static/ckeditor/ckeditor/plugins/youtube/',
           'plugin.js',
       )],
       blank=True,
       null=True
   )
   thumbnail =models.ForeignKey(MultiMedia,on_delete=models.CASCADE,related_name='news_thumbnail',null=True,blank=True)
   fixed_until = models.DateTimeField(null=True, blank=True)
   is_breaking = models.BooleanField(default=False)
   parent = models.ForeignKey('self',on_delete=models.CASCADE,related_name='updates',null=True,blank=True)

   @property
   def is_fixed(self):
       if self.fixed_until:
           return self.fixed_until > timezone.now()
       return False

   def __str__(self):
        return self.headline

#new models


class Guest(models.Model):
    name = models.CharField(max_length=255)
    photo = models.ForeignKey(MultiMedia, on_delete=models.SET_NULL, null=True, blank=True)

    def __str__(self):
        return self.name

class Show(models.Model):
    content = models.OneToOneField(Content, on_delete=models.CASCADE, related_name='shows')
    thumbnail = models.ForeignKey(MultiMedia, on_delete=models.SET_NULL, null=True, blank=True)
    description = RichTextField(null=True, blank=True)

    def __str__(self):
        return self.content.title


class Serie(models.Model):
    title = models.CharField(max_length=150)
    show = models.ForeignKey(Show,on_delete=models.CASCADE,related_name='series')
    media = models.ForeignKey(MultiMedia, on_delete=models.SET_NULL,null=True, blank=True)
    guests = models.ManyToManyField(Guest, blank=True, related_name='series')
    description = RichTextField(null=True, blank=True)
    published_date = models.DateTimeField(null=True, blank=True)

    def __str__(self):
        return f"{self.show.content.title} | {self.title}"

class Promo(models.Model):
    title =models.CharField(max_length=100,null=True,blank=True)
    content = models.OneToOneField(Content, on_delete=models.SET_NULL, related_name='promos',blank=True,null=True)
    video = models.ForeignKey(MultiMedia, on_delete=models.SET_NULL,null=True, blank=True)
    related_content = models.ForeignKey(Show,on_delete=models.SET_NULL,null=True, blank=True,related_name='promo')

    def __str__(self):
        return f"Promo #{self.id}"


