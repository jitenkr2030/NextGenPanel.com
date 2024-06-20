#!/bin/bash

# deploy.sh

# Exit on any error
set -e

# Variables
SERVER_USER="deploy_user"
SERVER_HOST="your_server_ip"
PROJECT_DIR="/var/www/nextgenpanel"

# Functions
upload_files() {
    echo "Uploading files to the server..."
    rsync -avz --exclude 'node_modules' --exclude '.git' ./ $SERVER_USER@$SERVER_HOST:$PROJECT_DIR
}

install_dependencies() {
    echo "Installing dependencies on the server..."
    ssh $SERVER_USER@$SERVER_HOST "cd $PROJECT_DIR && npm install"
}

restart_server() {
    echo "Restarting the server..."
    ssh $SERVER_USER@$SERVER_HOST "pm2 restart all"
}

# Main script
upload_files
install_dependencies
restart_server

echo "Deployment completed successfully!"
