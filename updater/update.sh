#!/bin/bash

if [[ $# -lt 2 ]] ; then
    echo "Usage: update.sh themes.txt info.json" >&2
    exit 1
fi

THEMES="$1"
INFO="$2"

DAY="$(jq .day < "$INFO")"
DAY="$(( $DAY + 1 ))"
THEME="$(sed "${DAY}q;d" "$THEMES")"

echo "$(jq ". | { day: $DAY, theme: \"$THEME\" }" <<< '{}')" > "$INFO"
