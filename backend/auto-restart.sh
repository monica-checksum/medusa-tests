#!/bin/bash
set -e

# This script will start up medusa and automatically restart it anytime it dies
while true
do
  echo "Starting up Medusa"
  medusa start
  echo "Medusa backend has died. Automatically restarting the medusa backend."
done
