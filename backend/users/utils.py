from invitations.utils import get_invitation_model
Invitation = get_invitation_model()



def create_invitation(email: str, inviter=None, request=None):

    invite = Invitation.objects.filter(email__iexact=email).last()
    if not invite:
        invite = Invitation.create(email=email, inviter=inviter)

        invite.send_invitation(request=request)
    return invite