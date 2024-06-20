#!/bin/bash

# backup.sh

# Exit on any error
set -e

# Variables
DB_USER="root"
DB_PASSWORD=""
DB_NAME="nextgenpanel"
DB_HOST="localhost"
BACKUP_DIR="./backups"
TIMESTAMP=$(date +'%Y%m%d%H%M%S')
BACKUP_FILE="$BACKUP_DIR/backup_$TIMESTAMP.sql"

# Functions
create_backup_dir() {
    echo "Creating backup directory..."
    mkdir -p $BACKUP_DIR
}

backup_database() {
    echo "Backing up the database..."
    mysqldump -u $DB_USER -p$DB_PASSWORD -h $DB_HOST $DB_NAME > $BACKUP_FILE
}

backup_files() {
    echo "Backing up application files..."
    tar -czvf $BACKUP_DIR/nextgenpanel_files_$TIMESTAMP.tar.gz . --exclude='node_modules' --exclude='.git' --exclude='backups'
}

# Main script
create_backup_dir
backup_database
backup_files

echo "Backup completed successfully!"
