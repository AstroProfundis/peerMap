<?php

$db = new mysqli('localhost','root','passwd','peerMapWeb');

if($db->connect_errno){
  die('Unable to connect to database [' . $db->connect_error . ']');
}

$sql = 'SELECT * FROM `pplonline`';

if($result = $db->query($sql)){

  $objects = array();

  while($row = $result->fetch_assoc()){

    $objects[] = array('longitude' => $row['longitude'], 'latitude' => $row['latitude']);
  }

  echo json_encode($objects);
  $result->free();
}
else{
  die('There was an error running the query [' . $db->error . ']');
}

$db->close();
?>
