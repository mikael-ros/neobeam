#!/bin/bash

# Iterate over all CSS files in ../css
for theme in ../css/*.css; do
    # Extract the filename and themename (part after the dash and before .css)
    filename=$(basename "$theme")
    themename="${filename#*-}"
    themename="${themename%.css}"

    # Print a message for the current theme
    echo "Creating previews for $themename..."

    # Generate slides (PNG) with Marp, suppressing output
    marp --images png example.md --theme $theme --theme-set ../css/neobeam.css --allow-local-files

    # Make a directory for the theme's previews (if it doesn't already exist)
    mkdir -p "../previews/$themename"

    # Move and rename images to follow the pattern parameter-n.png
    count=0
    for img in example.0*; do
        mv "$img" "../previews/$themename/$themename-$count.png"
        count=$((count + 1))
    done

    # Generate HTML slides, suppressing output
    marp example.md -o ../previews/$themename/$themename.html --theme $theme --theme-set ../css/neobeam.css 
done
