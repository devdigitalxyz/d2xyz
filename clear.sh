#!/bin/bash

# Folders
rm -rf ./out
rm -rf ./.build
rm -rf ./node_modules
rm -rf ./playwright-report
rm -rf ./*/*/.next
rm -rf ./*/*/.turbo
rm -rf ./*/*/node_modules
rm -rf ./*/*/storybook-static

# Files
# rm -rf ./yarn.lock
rm -rf ./*/*/yarn-error.log