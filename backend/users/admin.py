# users/admin.py
from django.contrib import admin                # <- обязательно!
from unfold.admin import ModelAdmin
from django.contrib.auth import get_user_model
from .utils import create_invitation
import uuid
from invitations.utils import get_invitation_model

User = get_user_model()
Invitation = get_invitation_model()


@admin.register(User)
class UserAdmin(ModelAdmin):
    list_display = ("email", "first_name", "last_name", "role", "invite_status_display", "is_active")
    list_filter = ("role", "invite_status", "is_active")
    search_fields = ("email", "first_name", "last_name")

    def save_model(self, request, obj, form, change):
        is_new = obj.pk is None

        if is_new:
            obj.is_active = False

        super().save_model(request, obj, form, change)

        if is_new:
            create_invitation(obj.email, inviter=request.user, request=request)

    def invite_status_display(self, obj):
        """
        Отображение статуса инвайта в списке
        """
        try:
            invite = Invitation.objects.get(email=obj.email)
            return "Accepted" if invite.accepted else "Pending"
        except Invitation.DoesNotExist:
            return "Not sent"