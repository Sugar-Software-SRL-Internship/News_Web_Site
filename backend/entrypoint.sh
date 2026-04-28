#!/bin/sh
set -e

echo "🔎 GENERATING INITIAL MIGRATIONS..."
python manage.py makemigrations users --noinput
python manage.py makemigrations --noinput

echo "📦 APPLYING MIGRATIONS..."
python manage.py migrate --noinput

echo "👤 CHECKING AND CREATING SUPERUSER..."

# 1. Generate password if it is not found in the environment variables
if [ -z "$ADMIN_PASSWORD" ]; then
    # Generate a random 16-character string
    NEW_PASSWORD=$(tr -dc 'A-Za-z0-9!@#%^&*()_+' < /dev/urandom | head -c 16)
    export ADMIN_PASSWORD=$NEW_PASSWORD

    # Append the new password to the .env file
    echo "" >> .env
    echo "ADMIN_PASSWORD=$NEW_PASSWORD" >> .env
    echo "⚠️ PASSWORD NOT FOUND. GENERATED NEW PASSWORD AND SAVED TO .env: $NEW_PASSWORD"
fi

# 2. Run superuser creation via Django Shell
python manage.py shell <<EOF
import os
from django.contrib.auth import get_user_model
from django.contrib.auth.hashers import make_password

User = get_user_model()
admin_email = os.getenv("ADMIN_EMAIL")
admin_password = os.getenv("ADMIN_PASSWORD")

if admin_email and not User.objects.filter(email=admin_email).exists():
    User.objects.create(
        email=admin_email,
        username="Admin",
        password=make_password(admin_password),
        is_staff=True,
        is_superuser=True,
        is_active=True,
        role=1
    )
    print(f"✅ Administrator {admin_email} created successfully!")
else:
    print("ℹ️ Admin already exists or ADMIN_EMAIL is not set.")
EOF

echo "📂 COLLECTING STATIC FILES..."
python manage.py collectstatic --noinput --clear --no-post-process

echo "🚀 STARTING SERVER..."
exec "$@"