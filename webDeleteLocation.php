<?php
$key = $_POST['ipaddr'];
// Replace with your own database infomation
$db = new mysqli('db_host','db_username','db_passwd','db_name');
echo "console.log($key)";
if($db->connect_errno){
        die('Unable to connect to database [' . $db->connect_error . ']');
}
$sql = 'Delete FROM `pplonline` WHERE ipaddr=' . "'" . $key ."'";
$db->query($sql);
$db->close();
?>


