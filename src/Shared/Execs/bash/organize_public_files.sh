#!/bin/bash

# Get the current working directory as requested
CWD=$(pwd)
echo "Current Working Directory: $CWD"

# Identify the public directory relative to this script's location
# Path: v3/src/Shared/Execs/bash/organize_public_files.sh
# Public folder is at v3/public
SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )"
PUBLIC_DIR="$(realpath "$SCRIPT_DIR/../../../../public")"

if [ ! -d "$PUBLIC_DIR" ]; then
    echo "Error: Public directory not found at $PUBLIC_DIR"
    exit 1
fi

echo "Targeting Public Directory: $PUBLIC_DIR"
cd "$PUBLIC_DIR" || exit

# List of folders to ensure existence
FOLDERS=("audios" "gifs" "images" "svgs" "videos" "audacity" "lottie")

echo "Checking/Creating folders..."
for folder in "${FOLDERS[@]}"; do
    if [ ! -d "$folder" ]; then
        echo "Creating folder: $folder"
        mkdir -p "$folder"
    else
        echo "Folder exists: $folder"
    fi
done

echo "Organizing loose files in public root..."

# Function to move files safely
move_files() {
    local ext_pattern=$1
    local target_dir=$2
    # Use find to check if files exist to avoid "ls: cannot access..." errors
    if ls $ext_pattern 1> /dev/null 2>&1; then
        echo "Moving $ext_pattern to $target_dir/"
        mv $ext_pattern "$target_dir/"
    fi
}

# Organize based on formats
# Audios
move_files "*.mp3" "audios"
move_files "*.wav" "audios"
move_files "*.m4a" "audios"
move_files "*.flac" "audios"
move_files "*.aac" "audios"

# Gifs
move_files "*.gif" "gifs"

# Images
move_files "*.png" "images"
move_files "*.jpg" "images"
move_files "*.jpeg" "images"
move_files "*.webp" "images"
move_files "*.bmp" "images"

# SVGs
move_files "*.svg" "svgs"

# Videos
move_files "*.mp4" "videos"
move_files "*.mkv" "videos"
move_files "*.mov" "videos"
move_files "*.avi" "videos"
move_files "*.webm" "videos"

# Audacity
move_files "*.aup3" "audacity"

echo "Organization process finished."
