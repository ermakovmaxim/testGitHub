




echo $PATH
OSNAME=`uname -s`
ART_DATA_PATH=/tmp/applifire/db/S40YWXZQIAA9IWSQU0TQA/art/data
AST_DATA_PATH=/tmp/applifire/db/S40YWXZQIAA9IWSQU0TQA/ast/data
MYSQL=/usr/bin


APPLFIREUSER=root
APPLFIREPASSWORD=root
APPLFIREHOST=localhost

if [ $OSNAME = "Darwin" ]; then
echo "Setting up MYSQL PATH for OS $OSNAME"
MYSQL=/usr/local/mysql/bin/
fi

DB_NAME=mproj10
USER=mproj10
PASSWORD=mproj10
PORT=3306
HOST=localhost


echo ' load ART data starts....'
$MYSQL/mysql --local-infile=1 -h$HOST -p$PORT -u$USER -p$PASSWORD $DB_NAME -e "load data local infile '$ART_DATA_PATH/art_query.csv' into table art_query FIELDS TERMINATED BY '#appfire#' LINES TERMINATED BY '#appfirenewline#' ";

$MYSQL/mysql --local-infile=1 -h$HOST -p$PORT -u$USER -p$PASSWORD $DB_NAME -e "load data local infile '$ART_DATA_PATH/art_report_ui.csv' into table art_report_ui FIELDS TERMINATED BY '#appfire#' LINES TERMINATED BY '#appfirenewline#' ";

$MYSQL/mysql --local-infile=1 -h$HOST -p$PORT -u$USER -p$PASSWORD $DB_NAME -e "load data local infile '$ART_DATA_PATH/art_component_config.csv' into table art_component_config FIELDS TERMINATED BY '#appfire#' LINES TERMINATED BY '#appfirenewline#' ";

$MYSQL/mysql --local-infile=1 -h$HOST -p$PORT -u$USER -p$PASSWORD $DB_NAME -e "load data local infile '$ART_DATA_PATH/art_log_severity_m.csv' into table art_log_severity_m FIELDS TERMINATED BY '#appfire#' LINES TERMINATED BY '#appfirenewline#' ";

$MYSQL/mysql --local-infile=1 -h$HOST -p$PORT -u$USER -p$PASSWORD $DB_NAME -e "load data local infile '$ART_DATA_PATH/art_chart_json.csv' into table art_chart_json FIELDS TERMINATED BY '#appfire#' LINES TERMINATED BY '#appfirenewline#' ";

$MYSQL/mysql --local-infile=1 -h$HOST -p$PORT -u$USER -p$PASSWORD $DB_NAME -e "load data local infile '$ART_DATA_PATH/art_chart_category.csv' into table art_chart_category FIELDS TERMINATED BY '#appfire#' LINES TERMINATED BY '#appfirenewline#' ";

$MYSQL/mysql --local-infile=1 -h$HOST -p$PORT -u$USER -p$PASSWORD $DB_NAME -e "load data local infile '$ART_DATA_PATH/art_chart_type.csv' into table art_chart_type FIELDS TERMINATED BY '#appfire#' LINES TERMINATED BY '#appfirenewline#' ";

$MYSQL/mysql --local-infile=1 -h$HOST -p$PORT -u$USER -p$PASSWORD $DB_NAME -e "load data local infile '$ART_DATA_PATH/art_chart_data_field_json.csv' into table art_chart_data_field_json FIELDS TERMINATED BY '#appfire#' LINES TERMINATED BY '#appfirenewline#' ";

$MYSQL/mysql --local-infile=1 -h$HOST -p$PORT -u$USER -p$PASSWORD $DB_NAME -e "load data local infile '$ART_DATA_PATH/art_lang_master.csv' into table art_lang_master FIELDS TERMINATED BY '#appfire#' LINES TERMINATED BY '#appfirenewline#' ";

$MYSQL/mysql --local-infile=1 -h$HOST -p$PORT -u$USER -p$PASSWORD $DB_NAME -e "load data local infile '$ART_DATA_PATH/art_chart_properties.csv' into table art_chart_properties FIELDS TERMINATED BY '#appfire#' LINES TERMINATED BY '#appfirenewline#' ";

$MYSQL/mysql --local-infile=1 -h$HOST -p$PORT -u$USER -p$PASSWORD $DB_NAME -e "load data local infile '$ART_DATA_PATH/art_chart_prop_language.csv' into table art_chart_prop_language FIELDS TERMINATED BY '#appfire#' LINES TERMINATED BY '#appfirenewline#' ";

$MYSQL/mysql --local-infile=1 -h$HOST -p$PORT -u$USER -p$PASSWORD $DB_NAME -e "load data local infile '$ART_DATA_PATH/art_chart_template.csv' into table art_chart_template FIELDS TERMINATED BY '#appfire#' LINES TERMINATED BY '#appfirenewline#' ";

$MYSQL/mysql --local-infile=1 -h$HOST -p$PORT -u$USER -p$PASSWORD $DB_NAME -e "load data local infile '$ART_DATA_PATH/art_report_builder_details.csv' into table art_report_builder_details FIELDS TERMINATED BY '#appfire#' LINES TERMINATED BY '#appfirenewline#' ";

$MYSQL/mysql --local-infile=1 -h$HOST -p$PORT -u$USER -p$PASSWORD $DB_NAME -e "load data local infile '$ART_DATA_PATH/art_log_config_m.csv' into table art_log_config_m FIELDS TERMINATED BY '#appfire#' LINES TERMINATED BY '#appfirenewline#' ";

$MYSQL/mysql --local-infile=1 -h$HOST -p$PORT -u$USER -p$PASSWORD $DB_NAME -e "load data local infile '$ART_DATA_PATH/art_log_config_attributes_m.csv' into table art_log_config_attributes_m FIELDS TERMINATED BY '#appfire#' LINES TERMINATED BY '#appfirenewline#' ";

$MYSQL/mysql --local-infile=1 -h$HOST -p$PORT -u$USER -p$PASSWORD $DB_NAME -e "load data local infile '$ART_DATA_PATH/art_log_connector_m.csv' into table art_log_connector_m FIELDS TERMINATED BY '#appfire#' LINES TERMINATED BY '#appfirenewline#' ";

$MYSQL/mysql --local-infile=1 -h$HOST -p$PORT -u$USER -p$PASSWORD $DB_NAME -e "load data local infile '$ART_DATA_PATH/art_log_connector_attributes_m.csv' into table art_log_connector_attributes_m FIELDS TERMINATED BY '#appfire#' LINES TERMINATED BY '#appfirenewline#' ";

$MYSQL/mysql --local-infile=1 -h$HOST -p$PORT -u$USER -p$PASSWORD $DB_NAME -e "load data local infile '$ART_DATA_PATH/art_password_algorithm.csv' into table art_password_algorithm FIELDS TERMINATED BY '#appfire#' LINES TERMINATED BY '#appfirenewline#' ";

$MYSQL/mysql --local-infile=1 -h$HOST -p$PORT -u$USER -p$PASSWORD $DB_NAME -e "load data local infile '$ART_DATA_PATH/art_password_policy.csv' into table art_password_policy FIELDS TERMINATED BY '#appfire#' LINES TERMINATED BY '#appfirenewline#' ";

$MYSQL/mysql --local-infile=1 -h$HOST -p$PORT -u$USER -p$PASSWORD $DB_NAME -e "load data local infile '$ART_DATA_PATH/art_health_scheduler_config_m.csv' into table art_health_scheduler_config_m FIELDS TERMINATED BY '#appfire#' LINES TERMINATED BY '#appfirenewline#' ";

$MYSQL/mysql --local-infile=1 -h$HOST -p$PORT -u$USER -p$PASSWORD $DB_NAME -e "load data local infile '$ART_DATA_PATH/art_health_status_config_m.csv' into table art_health_status_config_m FIELDS TERMINATED BY '#appfire#' LINES TERMINATED BY '#appfirenewline#' ";

$MYSQL/mysql --local-infile=1 -h$HOST -p$PORT -u$USER -p$PASSWORD $DB_NAME -e "load data local infile '$ART_DATA_PATH/cloud_drive_file_content_type.csv' into table cloud_drive_file_content_type FIELDS TERMINATED BY '#appfire#' LINES TERMINATED BY '#appfirenewline#' ";

$MYSQL/mysql --local-infile=1 -h$HOST -p$PORT -u$USER -p$PASSWORD $DB_NAME -e "load data local infile '$ART_DATA_PATH/cloud_drive_tags.csv' into table cloud_drive_tags FIELDS TERMINATED BY '#appfire#' LINES TERMINATED BY '#appfirenewline#' ";

$MYSQL/mysql --local-infile=1 -h$HOST -p$PORT -u$USER -p$PASSWORD $DB_NAME -e "load data local infile '$ART_DATA_PATH/art_external_integration.csv' into table art_external_integration FIELDS TERMINATED BY '#appfire#' LINES TERMINATED BY '#appfirenewline#' ";

$MYSQL/mysql --local-infile=1 -h$HOST -p$PORT -u$USER -p$PASSWORD $DB_NAME -e "load data local infile '$ART_DATA_PATH/art_job_details.csv' into table art_job_details FIELDS TERMINATED BY '#appfire#' LINES TERMINATED BY '#appfirenewline#' ";

$MYSQL/mysql --local-infile=1 -h$HOST -p$PORT -u$USER -p$PASSWORD $DB_NAME -e "load data local infile '$ART_DATA_PATH/art_scheduler_details.csv' into table art_scheduler_details FIELDS TERMINATED BY '#appfire#' LINES TERMINATED BY '#appfirenewline#' ";

$MYSQL/mysql --local-infile=1 -h$HOST -p$PORT -u$USER -p$PASSWORD $DB_NAME -e "load data local infile '$ART_DATA_PATH/art_schedule_config.csv' into table art_schedule_config FIELDS TERMINATED BY '#appfire#' LINES TERMINATED BY '#appfirenewline#' ";

$MYSQL/mysql --local-infile=1 -h$HOST -p$PORT -u$USER -p$PASSWORD $DB_NAME -e "load data local infile '$ART_DATA_PATH/art_app_notification_template.csv' into table art_app_notification_template FIELDS TERMINATED BY '#appfire#' LINES TERMINATED BY '#appfirenewline#' ";

$MYSQL/mysql --local-infile=1 -h$HOST -p$PORT -u$USER -p$PASSWORD $DB_NAME -e "load data local infile '$ART_DATA_PATH/art_bounded_context.csv' into table art_bounded_context FIELDS TERMINATED BY '#appfire#' LINES TERMINATED BY '#appfirenewline#' ";

$MYSQL/mysql --local-infile=1 -h$HOST -p$PORT -u$USER -p$PASSWORD $DB_NAME -e "load data local infile '$ART_DATA_PATH/art_domain.csv' into table art_domain FIELDS TERMINATED BY '#appfire#' LINES TERMINATED BY '#appfirenewline#' ";

$MYSQL/mysql --local-infile=1 -h$HOST -p$PORT -u$USER -p$PASSWORD $DB_NAME -e "load data local infile '$ART_DATA_PATH/art_log_alarm.csv' into table art_log_alarm FIELDS TERMINATED BY '#appfire#' LINES TERMINATED BY '#appfirenewline#' ";

$MYSQL/mysql --local-infile=1 -h$HOST -p$PORT -u$USER -p$PASSWORD $DB_NAME -e "load data local infile '$ART_DATA_PATH/art_log_architecture_layer_m.csv' into table art_log_architecture_layer_m FIELDS TERMINATED BY '#appfire#' LINES TERMINATED BY '#appfirenewline#' ";

$MYSQL/mysql --local-infile=1 -h$HOST -p$PORT -u$USER -p$PASSWORD $DB_NAME -e "load data local infile '$ART_DATA_PATH/art_log_status_m.csv' into table art_log_status_m FIELDS TERMINATED BY '#appfire#' LINES TERMINATED BY '#appfirenewline#' ";

$MYSQL/mysql --local-infile=1 -h$HOST -p$PORT -u$USER -p$PASSWORD $DB_NAME -e "load data local infile '$ART_DATA_PATH/art_log_event_action_m.csv' into table art_log_event_action_m FIELDS TERMINATED BY '#appfire#' LINES TERMINATED BY '#appfirenewline#' ";

$MYSQL/mysql --local-infile=1 -h$HOST -p$PORT -u$USER -p$PASSWORD $DB_NAME -e "load data local infile '$ART_DATA_PATH/art_log_exception_m.csv' into table art_log_exception_m FIELDS TERMINATED BY '#appfire#' LINES TERMINATED BY '#appfirenewline#' ";

$MYSQL/mysql --local-infile=1 -h$HOST -p$PORT -u$USER -p$PASSWORD $DB_NAME -e "load data local infile '$ART_DATA_PATH/art_document_template.csv' into table art_document_template FIELDS TERMINATED BY '#appfire#' LINES TERMINATED BY '#appfirenewline#' ";

$MYSQL/mysql --local-infile=1 -h$HOST -p$PORT -u$USER -p$PASSWORD $DB_NAME -e "load data local infile '$ART_DATA_PATH/art_SMSConfig_M.csv' into table art_SMSConfig_M FIELDS TERMINATED BY '#appfire#' LINES TERMINATED BY '#appfirenewline#' ";

echo 'load ART data ends....'

