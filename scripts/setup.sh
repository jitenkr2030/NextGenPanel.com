#!/bin/bash

# setup.sh

# Exit on any error
set -e

# Variables
PROJECT_NAME="nextgenpanel"
DB_USER="root"
DB_PASSWORD=""
DB_NAME="nextgenpanel"
DB_HOST="localhost"
DB_PORT=3306

# Functions
install_dependencies() {
    echo "Installing dependencies..."
    npm install
}

setup_database() {
    echo "Setting up the database..."
    mysql -u $DB_USER -p$DB_PASSWORD -e "CREATE DATABASE IF NOT EXISTS $DB_NAME;"
    mysql -u $DB_USER -p$DB_PASSWORD $DB_NAME < ./scripts/db_init.sql
}

copy_env_file() {
    echo "Copying .env.example to .env..."
    cp .env.example .env
}

initialize_project() {
    echo "Initializing the project..."
    install_dependencies
    setup_database
    copy_env_file
}

# Main script
initialize_project

echo "Setup completed successfully!"
