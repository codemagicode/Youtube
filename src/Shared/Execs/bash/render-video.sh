#!/bin/bash

# Usage:
# ./render-video.sh TOTAL_FRAMES [COMPOSITION_ID] [OUT_DIR]

TOTAL_FRAMES=$1
COMP_ID=${2:-video}
OUT_DIR=${3:-chunks}

CHUNK_SIZE=500
CONCURRENCY=3

STATE_FILE="$OUT_DIR/progress.txt"

if [ -z "$TOTAL_FRAMES" ]; then
  echo "❌ Provide total frames"
  exit 1
fi

mkdir -p "$OUT_DIR"

# Generate chunk ranges
RANGES=()
START=0
while [ $START -lt $TOTAL_FRAMES ]; do
  END=$((START + CHUNK_SIZE - 1))
  if [ $END -ge $TOTAL_FRAMES ]; then
    END=$((TOTAL_FRAMES - 1))
  fi
  RANGES+=("$START-$END")
  START=$((END + 1))
done

TOTAL_CHUNKS=${#RANGES[@]}

echo "🎬 Total frames: $TOTAL_FRAMES"
echo "📦 Chunk size: $CHUNK_SIZE"
echo "🧩 Total chunks: $TOTAL_CHUNKS"
echo "📁 Output dir: $OUT_DIR"
echo ""

# Load completed chunks
touch "$STATE_FILE"
COMPLETED=$(cat "$STATE_FILE")

print_progress() {
  echo ""
  echo "📊 Progress:"
  for i in "${!RANGES[@]}"; do
    RANGE=${RANGES[$i]}
    FILE=$(printf "%s/chunk_%03d.mp4" "$OUT_DIR" $i)

    if grep -q "$FILE" "$STATE_FILE"; then
      echo -e "🟢 [$i] $RANGE"
    else
      echo -e "⚪ [$i] $RANGE"
    fi
  done
  echo ""
}

print_progress

# Render loop
for i in "${!RANGES[@]}"; do
  RANGE=${RANGES[$i]}
  FILE=$(printf "%s/chunk_%03d.mp4" "$OUT_DIR" $i)

  # Skip if already done
  if grep -q "$FILE" "$STATE_FILE"; then
    echo "⏭️ Skipping $FILE"
    continue
  fi

  START=$(echo $RANGE | cut -d- -f1)
  END=$(echo $RANGE | cut -d- -f2)

  TEMP_FILE=$(mktemp).mp4

  echo "🚀 Rendering [$i] $START-$END"

  npx remotion render "$COMP_ID" "$TEMP_FILE" \
    --frames=$START-$END \
    --concurrency=$CONCURRENCY \
    --chromium-flag=--disable-dev-shm-usage \
    --chromium-flag=--no-sandbox

  if [ $? -ne 0 ]; then
    echo "❌ Failed at chunk $i"
    exit 1
  fi

  mv "$TEMP_FILE" "$FILE"

  echo "$FILE" >> "$STATE_FILE"

  print_progress
done

# Stitch
echo "🔗 Stitching..."

FILES_TXT="$OUT_DIR/files.txt"
rm -f "$FILES_TXT"

for f in $(ls $OUT_DIR/chunk_*.mp4 | sort); do
  echo "file '$f'" >> "$FILES_TXT"
done

ffmpeg -f concat -safe 0 -i "$FILES_TXT" -c copy "$OUT_DIR/final.mp4"

echo "✅ Done: $OUT_DIR/final.mp4"