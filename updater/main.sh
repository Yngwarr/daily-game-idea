#!/bin/bash

if [[ $# -lt 2 ]] ; then
    echo "Usage: main.sh next.txt info.json"
    exit 1
fi

THEME_FILE="$1"
INFO_FILE="$2"

THEME=$(head -n1 "$THEME_FILE")
tail -n +2 
