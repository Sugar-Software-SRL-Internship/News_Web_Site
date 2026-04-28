from celery import shared_task
from django.db.models import F
from .models import Content

@shared_task()
def increment_view_count (id_content):

    Content.objects.filter(pk=id_content).update(views=F('views') + 1)