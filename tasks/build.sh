#!/bin/bash
set -euo pipefail

echo "Build for $NODE_ENV."

if [ -d "./public/scripts" ]; then
  echo "Remove previous build."
  rm -rf ./dist
fi

webpack
