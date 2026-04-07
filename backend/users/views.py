from urllib import request

from django.db.models.fields import return_None
from django.shortcuts import render, get_object_or_404
from invitations.models import Invitation
from django.shortcuts import render, redirect
from users.forms.FormSetPssword import SetPasswordForm
from users.models import *

def accept_invite(request, key):

    invitation = get_object_or_404(Invitation, key=key)
    user = User.objects.get(email=invitation.email)

    if request.method == "POST":
        form = SetPasswordForm(request.POST)
        if form.is_valid():
            user.set_password(form.cleaned_data["password1"])
            user.is_active = True
            user.is_staff = True
            user.invite_status = User.InviteStatus.ACCEPTED
            user.save()
            return redirect("/admin/login/")
    else:
        form = SetPasswordForm()

    return render(request, "set_password.html", {"form": form, "email": user.email})

