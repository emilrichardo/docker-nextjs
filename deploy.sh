#!/bin/bash

echo "[DEPLOY] Entrando a /projects/keys/web"
cd /projects/keys/web || exit 1
#!/bin/bash
cd /projects/keys/web || exit 1
git pull origin main || exit 1

cd /projects/keys || exit 1
docker compose --env-file .env build --no-cache || exit 1
docker compose --env-file .env up -d || exit 1
