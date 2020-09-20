#!/bin/bash
set -euo pipefail

buildCommand="webpack"
if getopts ":d" arg; then
  mode="development"
  buildCommand="$buildCommand --watch"
else
  mode="production"
fi

echo "Build for $mode."

if [ -d "./public/scripts" ]; then
  echo "Remove previous build."
  rm -rf ./dist
fi

echo "Build command: $buildCommand"
eval "$buildCommand"
