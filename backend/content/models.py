from django.db import models
from django.db.models.fields import CharField

from backend.users.models import User
# Create your models here.

class Category(models.Model):
    name =models.CharField(max_length=100, primary_key=True)

    def __str__(self):
        return self.name

class Tags(models.Model):
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
    owner = models.ForeignKey(User,on_delete=models.CASCADE)
    publish_date = models.DateTimeField()



class MultiMedia(models.Model):

    class TypeMedia(models.IntegerChoices):
        TEXT = 1,'Text'
        IMAGE = 2,'Image'
        VIDEO = 3,'Video'

    title = CharField(max_length=100,null=True)
    media_type = models.IntegerField(choices=TypeMedia.choices,default=TypeMedia.TEXT)
    content = models.ForeignKey(Content,on_delete=models.CASCADE)
    file = models.FileField(upload_to='content/%Y/%m/%d/')



class News(Content):
   headline = models.CharField(max_length=250)
   category = models.ForeignKey(Category,on_delete=models.CASCADE)
   tags = models.ManyToManyField(Tags)
