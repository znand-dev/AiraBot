#!/bin/bash

# Spinner function
spinner() {
  local pid=$!
  local delay=0.1
  local spinstr='|/-\'
  while [ "$(ps a | awk '{print $1}' | grep $pid)" ]; do
    local temp=${spinstr#?}
    printf " [%c]  " "$spinstr"
    local spinstr=$temp${spinstr%"$temp"}
    sleep $delay
    printf "\b\b\b\b\b\b"
  done
  printf "    \b\b\b\b"
}

# Function with spinner wrapper
run_with_spinner() {
  echo -n "$1..."
  shift
  ("$@") & spinner
  echo "Done!"
}

echo "INFO: Starting AiraBot dependency installation..."

# Step 1: Update packages
run_with_spinner "Updating package list" sudo apt update -y

# Step 2: Install Chromium dependencies
run_with_spinner "Installing Chromium dependencies" sudo apt install -y \
  libnss3 libatk1.0-0 libatk-bridge2.0-0 libcups2 libdrm2 \
  libxcomposite1 libxdamage1 libxrandr2 libgbm1 libasound2 \
  libpangocairo-1.0-0 libpango-1.0-0 libgtk-3-0 libxss1 \
  libx11-xcb1 libxcb-dri3-0 libxtst6

# Step 3: Install ffmpeg & pip
run_with_spinner "Installing ffmpeg & pip3" sudo apt install -y ffmpeg python3-pip

# Step 4: Install yt-dlp
run_with_spinner "Installing yt-dlp via pip" pip install yt-dlp

echo "INFO: All dependencies installed successfully!"
