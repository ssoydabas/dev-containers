#!/bin/bash

OPT_BUILD=""
if [[ "$1" == "up" ]] && [[ "$2" == "rebuild" ]]; then
  OPT_BUILD="--build"
fi

OPT_REMOVE_IMG=""
if [[ "$1" == "down" ]] && [[ "$2" == "del" ]]; then
  OPT_REMOVE_IMG="--rmi local"
fi

if [[ "$1" == "up" ]]; then
## install parent folder packages
npm ci

  ## run development stack
  docker compose -f /workspaces/apps/api/docker-compose.yml up -d --remove-orphans --timestamps $OPT_BUILD

  docker compose -f /workspaces/apps/mobile/docker-compose.yml up -d --remove-orphans --timestamps $OPT_BUILD
elif [[ "$1" == "down" ]]; then
  ## remove all containers
  docker compose -f /workspaces/apps/api/docker-compose.yml down --remove-orphans $OPT_REMOVE_IMG

  docker compose -f /workspaces/apps/mobile/docker-compose.yml down --remove-orphans $OPT_REMOVE_IMG
elif [[ "$1" == "restart" ]]; then
  docker compose -f /workspaces/apps/api/docker-compose.yml restart

  docker compose -f /workspaces/apps/mobile/docker-compose.yml restart
elif [[ "$1" == "logs" ]]; then
  docker compose -f /workspaces/apps/api/docker-compose.yml logs -tf $2

  docker compose -f /workspaces/apps/mobile/docker-compose.yml logs -tf $2
fi