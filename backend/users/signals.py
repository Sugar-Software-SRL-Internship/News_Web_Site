from invitations.signals import invite_accepted
from django.dispatch import receiver

@receiver(invite_accepted)
def handle_invite_accepted(sender, user, email, **kwargs):
    """
    Пользователь завершил регистрацию через инвайт
    """
    user.is_active = True
    user.save()