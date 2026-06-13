#!/usr/bin/env bash
# Full deploy: build → rsync → start container (if needed) → patch Caddy.
# Usage: ./deploy.sh
# Run from the Communication/ directory.
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
SERVER="serverannah"
SERVER_PATH="/opt/dinnizer-website"
CONTAINER="dinnizer-website"
NETWORK="autoconfig-services"
CADDYFILE="/opt/reverse-proxy/caddy/Caddyfile"

echo "=== 1/4  Syncing source to $SERVER:$SERVER_PATH/ ==="
ssh "$SERVER" "mkdir -p $SERVER_PATH/{site,blog,templates}"
# Sync static site assets
rsync -avz --delete \
  --exclude='blog/'   \
  "$SCRIPT_DIR/site/" "$SERVER:$SERVER_PATH/site/"
# Sync blog Markdown sources and templates
rsync -avz --delete "$SCRIPT_DIR/blog/"      "$SERVER:$SERVER_PATH/blog/"
rsync -avz --delete "$SCRIPT_DIR/templates/" "$SERVER:$SERVER_PATH/templates/"
rsync -az            "$SCRIPT_DIR/build.sh"  "$SERVER:$SERVER_PATH/build.sh"
ssh "$SERVER" chmod +x "$SERVER_PATH/build.sh"

echo "=== 2/4  Building blog on server ==="
ssh "$SERVER" "cd $SERVER_PATH && bash build.sh"

echo "=== 3/4  Ensuring nginx container is running ==="
ssh "$SERVER" bash << REMOTE
set -euo pipefail

if docker ps --format '{{.Names}}' | grep -q "^${CONTAINER}\$"; then
  echo "  container already running — restarting to pick up file changes"
  docker restart ${CONTAINER}
else
  echo "  starting container"
  docker run -d \
    --name ${CONTAINER} \
    --network ${NETWORK} \
    --restart unless-stopped \
    -v ${SERVER_PATH}/site:/usr/share/nginx/html:ro \
    nginx:alpine
fi
REMOTE

echo "=== 4/4  Patching Caddyfile if needed ==="
ssh "$SERVER" bash << REMOTE
set -euo pipefail

NEEDS_PATCH=false

if ! grep -q "^www\.dinnizer\.com" ${CADDYFILE}; then
  NEEDS_PATCH=true
  cat >> ${CADDYFILE} << 'CADDY'

dinnizer.com {
    redir https://www.dinnizer.com{uri} 308
}

www.dinnizer.com {
    reverse_proxy ${CONTAINER}:80
}
CADDY
  echo "  Caddyfile patched"
else
  echo "  Caddyfile already contains www.dinnizer.com — skipping patch"
fi

if \$NEEDS_PATCH; then
  # Caddy admin is disabled; restart the container to reload config
  docker restart server-reverse-proxy
  echo "  Caddy restarted"
fi
REMOTE

echo ""
echo "Deploy complete. Site live at https://www.dinnizer.com"
