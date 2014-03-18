echo "Not showing template errors"
jshint *.js | sed  '/Template/d'

