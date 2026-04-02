from unfold.admin import ModelAdmin
from django.contrib import admin
from .models import User

# Register your models here.
@admin.register(User)
class UserAdmin(ModelAdmin):
    list_display = ("email", "first_name","last_name", "role", "invite_status", "is_active")
    list_filter = ("role", "invite_status", "is_active")
    search_fields = ("email", "name")

    def invite_status_display(self, obj):
        return obj.get_invite_status_display()