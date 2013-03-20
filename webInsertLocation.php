<?php
$key = $_POST['ip'];
$longitude = $_POST['long'];
$latitude = $_POST['lat'];
$key = "'".$key."'";
$db = new mysqli('localhost','root','passwd','peerMapWeb');

if($db->connect_errno){
  die('Unable to connect to database [' . $db->connect_error . ']');
}

$values = '(' . $key . "," . $longitude . "," . $latitude . "," . 'NULL)';
$sql = 'INSERT INTO `pplonline` VALUES ' . $values;
$db->query($sql);
echo "Insertion success!";
$db->close();
?>
