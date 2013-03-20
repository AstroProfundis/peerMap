<?php
$key = $_POST['ipaddr'];
$db = new mysqli('localhost','root','passwd','peerMapWeb');
echo "console.log($key)";
if($db->connect_errno){
        die('Unable to connect to database [' . $db->connect_error . ']');
}
$sql = 'Delete FROM `pplonline` WHERE ipaddr=' . "'" . $key ."'";
$db->query($sql);
$db->close();
?>


