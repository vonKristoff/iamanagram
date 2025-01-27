#!/bin/bash
# make sure you always put $f in double quotes to avoid any nasty surprises i.e. "$f"
# we use "$@" (with double quotes) instead of $* or $@ because
# we want to prevent whitespace problems with filenames. 
FILES="/Users/threejjjs/Development/aurasatz/astro-playground/src/pages/temp/*.astro"
for f in $FILES
do
  # echo "Processing $f file..."
  echo $(basename $f)
  cat copy.template > $(basename $f)
  # rm "$f"
done