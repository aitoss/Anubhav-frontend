#!/bin/sh
npm run build
rm -rf ../Anubhav-backend/public/build/
cp -r build/ ../Anubhav-backend/public/
