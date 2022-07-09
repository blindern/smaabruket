#!/bin/bash
set -eu

if [ ! -e build ]; then
  echo "Missing build"
  exit 1
fi

ssh-keyscan fcos-3.nrec.foreningenbs.no >> ~/.ssh/known_hosts

rsync -avz --delete build/ root@fcos-3.nrec.foreningenbs.no:/var/mnt/data/web-1-www/aliases/smaabruket/public/
