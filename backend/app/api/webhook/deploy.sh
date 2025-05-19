#!/bin/bash

cd ~/PBS-IF22DX-MMC

echo "[Webhook] Pulling latest changes..."
git pull origin master  # sesuaikan branch

echo "[Webhook] Installing dependencies..."
npm install

echo "[Webhook] Restarting PM2..."
pm2 restart next-dev  # sesuaikan nama PM2 process
