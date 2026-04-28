FROM python:3.11-slim

RUN apt-get update && apt-get install -y \
    ffmpeg \
    libpq-dev \
    gcc \
    && rm -rf /var/lib/apt/lists/*
COPY entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh

WORKDIR /app
RUN mkdir -p /app/static /app/media
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt
COPY . .


ENTRYPOINT ["/entrypoint.sh"]

