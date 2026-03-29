#!/bin/bash

ROOT_DIR="$(pwd)"

read -p "Enter in format <Project-Name>/<SerialNumber>-<VideoName>: " input

# ---------------- VALIDATION ----------------
if [[ ! "$input" =~ ^[^/]+/[0-9]+-.+$ ]]; then
  echo "❌ Invalid format. Expected <Project-Name>/<SerialNumber>-<VideoName>"
  exit 1
fi

# ---------------- PARSE ----------------
project_raw="${input%%/*}"
rest="${input#*/}"

serial="${rest%%-*}"
video_raw="${rest#*-}"

# ---------------- HELPERS ----------------

# lowercase (for public project)
to_lower() {
  echo "$1" | tr '[:upper:]' '[:lower:]'
}

# camelCase (for public video)
to_camel() {
  echo "$1" \
  | sed -E 's/[-_ ]+([a-zA-Z])/\U\1/g' \
  | sed -E 's/^([A-Z])/\l\1/'
}

# PascalCase (NO hyphens) → for src video
to_pascal() {
  echo "$1" \
  | sed -E 's/[-_ ]+([a-zA-Z])/\U\1/g' \
  | sed -E 's/^([a-zA-Z])/\U\1/'
}

# Pascal-Hyphen-Case → for src project
to_pascal_hyphen() {
  # 1. Replace spaces/underscores with hyphens
  # 2. Capitalize the first letter of every "word" separated by a hyphen
  # 3. Ensure the hyphen stays put
  echo "$1" | sed -E 's/[ _]+/-/g' | sed -E 's/([^-]+)/\u\1/g'
}

# ---------------- NORMALIZATION ----------------

# PUBLIC
project_public=$(to_lower "$project_raw")
video_public=$(to_camel "$video_raw")

# SRC
project_src=$(to_pascal_hyphen "$project_raw")   # Project-Name
video_src=$(to_pascal "$video_raw")              # VideoName

# Folder names
folder_public="${serial}-${video_public}"
folder_src="${serial}-${video_src}"

# Base paths
base_public="$ROOT_DIR/public/projects/$project_public"
base_src="$ROOT_DIR/src/Projects/$project_src"

# ---------------- UNIQUE DIR ----------------

create_unique_dir() {
  local base="$1"
  local name="$2"
  local path="$base/$name"
  local count=1

  while [ -d "$path" ]; do
    path="${base}/${name}-${count}"
    ((count++))
  done

  mkdir -p "$path"
  echo "$path"
}

create_unique_file() {
  local dir="$1"
  local filename="$2"
  local path="$dir/$filename"
  local name="${filename%.*}"
  local ext="${filename##*.}"
  local count=1

  while [ -f "$path" ]; do
    path="${dir}/${name}-${count}.${ext}"
    ((count++))
  done

  touch "$path"
}

# ---------------- PUBLIC ----------------

public_dir=$(create_unique_dir "$base_public" "$folder_public")

mkdir -p "$public_dir/audios"
mkdir -p "$public_dir/bitmaps"
mkdir -p "$public_dir/gifs"
mkdir -p "$public_dir/videos"
mkdir -p "$public_dir/svgs"

# ---------------- SRC ----------------

mkdir -p "$base_src"
src_dir=$(create_unique_dir "$base_src" "$folder_src")

mkdir -p "$src_dir/voice-mapping"
create_unique_file "$src_dir" "Scenes-${video_src}-${serial}.tsx"
create_unique_file "$src_dir" "script-${video_src}-${serial}.md"
create_unique_file "$src_dir" "chardata-${video_src}-${serial}.ts"
create_unique_file "$src_dir" "Storyboard-${video_src}-${serial}.tsx"
create_unique_file "$src_dir" "styles-${video_src}-${serial}.ts"

# ---------------- DONE ----------------

echo "==================================="
echo "Structure created successfully ✅"
echo "==================================="
echo "📁 Public: $public_dir"
echo "📁 Src:    $src_dir"
echo "==================================="