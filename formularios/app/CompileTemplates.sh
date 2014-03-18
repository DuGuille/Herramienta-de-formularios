for file in *.mustache; do 
  template="${file%.*}"
  # creates a variable called FormTemplate and assigns the compiled template to it.
  sed -e '1 i\var '$template'= \"\\' -e 's/\"/\\\"/g' -e 's/$/\\/'  -e '$ a\\";' $template.mustache  > $template.js 
done