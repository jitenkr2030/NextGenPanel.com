#!/bin/bash

# monitor.sh

# Exit on any error
set -e

# Variables
ALERT_EMAIL="admin@example.com"
LOG_FILE="/var/log/nextgenpanel.log"
CPU_THRESHOLD=80
MEM_THRESHOLD=80

# Functions
check_cpu_usage() {
    CPU_USAGE=$(top -bn1 | grep "Cpu(s)" | sed "s/.*, *\([0-9.]*\)%* id.*/\1/" | awk '{print 100 - $1"%"}')
    CPU_USAGE=${CPU_USAGE%.*}
    if [ $CPU_USAGE -gt $CPU_THRESHOLD ]; then
        echo "High CPU usage detected: $CPU_USAGE%" | mail -s "CPU Alert: $CPU_USAGE%" $ALERT_EMAIL
    fi
}

check_memory_usage() {
    MEM_USAGE=$(free | grep Mem | awk '{print $3/$2 * 100.0}')
    MEM_USAGE=${MEM_USAGE%.*}
    if [ $MEM_USAGE -gt $MEM_THRESHOLD ]; then
        echo "High memory usage detected: $MEM_USAGE%" | mail -s "Memory Alert: $MEM_USAGE%" $ALERT_EMAIL
    fi
}

check_logs() {
    if grep -i "error" $LOG_FILE; then
        echo "Errors found in log file!" | mail -s "Log Alert: Errors Found" $ALERT_EMAIL
    fi
}

# Main script
check_cpu_usage
check_memory_usage
check_logs

echo "Monitoring completed successfully!"
