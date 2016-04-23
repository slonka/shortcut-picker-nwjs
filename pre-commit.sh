#!/bin/bash

RED="\033[0;31m"
NORMAL="\033[0m"

# create dir if not existent
mkdir -p .git/hooks
# Install yourself on first execution
if [ ! -f .git/hooks/pre-commit ]; then
  echo "Installing a 'npm test' pre-commit hook..."
  ln -s ../../pre-commit.sh .git/hooks/pre-commit
fi

# Run all tests before every commit
npm test
