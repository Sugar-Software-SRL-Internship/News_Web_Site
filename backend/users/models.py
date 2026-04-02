from random import choices

from django.contrib.auth.base_user import AbstractBaseUser, BaseUserManager
from django.contrib.auth.models import PermissionsMixin
from django.db import models

# Create your models here.


class UserManager(BaseUserManager):


 def create_user(self, email, password=None, **extra_fields):
    if not email:
        raise ValueError('Users must have an email address')
    user = self.model(email=self.normalize_email(email), **extra_fields)
    user.set_password(password)
    user.save(using=self._db)
    return user


class User(AbstractBaseUser,PermissionsMixin):

    class Role(models.IntegerChoices):
        ADMIN =1,'Admin'
        MODERATOR = 2,'Moderator'
        CONTENT_MANAGER = 3,'Content Manager'
    class InviteStatus(models.IntegerChoices):
        PENDING = 1,'Pending'
        ACCEPTED = 2,'Accepted'

    email = models.EmailField(max_length=255, unique=True)
    role= models.IntegerField(choices=Role.choices, default=Role.CONTENT_MANAGER)
    invite_status=models.IntegerField(choices=InviteStatus.choices, default=InviteStatus.PENDING)
    first_name = models.CharField(max_length=255,blank=True)
    last_name = models.CharField(max_length=255,blank=True)
    username = models.CharField(max_length=255,unique=True)
    is_active = models.BooleanField(default=False)
    is_staff = models.BooleanField(default=False)

    USERNAME_FIELD = 'email'
    objects = UserManager()

    def __str__(self):
        return self.email