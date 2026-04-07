from django.db import models
from django.db.models.fields import CharField
from ckeditor_uploader.fields import RichTextUploadingField
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
