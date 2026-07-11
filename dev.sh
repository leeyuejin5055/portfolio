#!/usr/bin/env bash
set -euo pipefail

ROOT="$(cd "$(dirname "$0")" && pwd)"
NODE_BIN="$ROOT/.tools/node/bin"

if [[ ! -x "$NODE_BIN/node" ]]; then
  echo "Node가 없습니다. 아래를 먼저 실행하세요:"
  echo "  cd \"$ROOT\""
  echo "  mkdir -p .tools && curl -fsSL https://nodejs.org/dist/v22.14.0/node-v22.14.0-darwin-arm64.tar.gz -o .tools/node.tar.gz"
  echo "  tar -xzf .tools/node.tar.gz -C .tools && mv .tools/node-v22.14.0-darwin-arm64 .tools/node && rm .tools/node.tar.gz"
  exit 1
fi

export PATH="$NODE_BIN:$PATH"
cd "$ROOT/web"

if [[ ! -d node_modules ]]; then
  npm install
fi

npm run dev
