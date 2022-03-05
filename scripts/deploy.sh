#!/bin/bash
set -eu

if [ ! -e build ]; then
  echo "Missing build"
  exit 1
fi

ssh-keyscan coreos-2.foreningenbs.no >> ~/.ssh/known_hosts

rsync -avz --delete build/ root@coreos-2.foreningenbs.no:/data/web-1-www/aliases/smaabruket/public/
