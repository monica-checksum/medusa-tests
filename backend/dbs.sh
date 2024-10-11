#!/bin/bash
set -e

if [ $# != 2 ]
  then
    echo "2 arguments needed"
    exit
fi

# if [ $1 = "save" ]
# then
#   cp medusa-db.sql dbs/latest/$2.sql
# fi

# if [ $1 = "load" ]
# then
#   cp dbs/latest/$2.sql medusa-db.sql
# fi

if [ $1 = "save" ]
then
  cp medusa-db.sql dbs/seed/$2.sql
fi


if [ $1 = "load" ]
then
  rm medusa-db.sql
  npx medusa seed -f \'data/$2.json\'
  yarn start
fi