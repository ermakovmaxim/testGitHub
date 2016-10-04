




echo $PATH
OSNAME=`uname -s`
FILE_PATH=/tmp/applifire/db/S40YWXZQIAA9IWSQU0TQA
MYSQL=/usr/bin





DB_PATH=/tmp/applifire/db/S40YWXZQIAA9IWSQU0TQA
DB_NAME=mproj10
USER=mproj10
PASSWORD=mproj10
PORT=3306
HOST=localhost


echo 'create incremental tables starts....'
$MYSQL/mysql --local-infile=1 -h$HOST -p$PORT -u$USER -p$PASSWORD $DB_NAME -e "SOURCE $DB_PATH/incrddl.sql;"
echo 'create incremental tables ends....'


echo 'delete data from incremental tables starts....'
$MYSQL/mysql --local-infile=1 -h$HOST -p$PORT -u$USER -p$PASSWORD $DB_NAME -e "SOURCE $DB_PATH/incrdelete.sql;"
echo 'delete data from incremental tables ends....'


echo 'loading data to incremental table starts....'
sh $DB_PATH/incrloaddata.sh
echo 'loading data to incremental tables ends....'