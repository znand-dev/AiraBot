#!/bin/bash

# Installer dependencies for Puppeteer Chromium (WhatsApp Bot)
echo "Installing Chromium dependencies..."
sudo apt update
sudo apt install -y \
  libnss3 \
  libatk1.0-0 \
  libatk-bridge2.0-0 \
  libcups2 \
  libdrm2 \
  libxcomposite1 \
  libxdamage1 \
  libxrandr2 \
  libgbm1 \
  libasound2 \
  libpangocairo-1.0-0 \
  libpango-1.0-0 \
  libgtk-3-0 \
  libxss1 \
  libx11-xcb1 \
  libxcb-dri3-0 \
  libxtst6
