<!DOCTYPE html>
<?php $ip = $_SERVER['REMOTE_ADDR']; ?>
<html>
  <input type="text" id="ip" value="<?php echo ($ip); ?>" />
  <head>
    <title>People on the Page</title>
    <style>
      html, body, #map-canvas {
        margin: 0;
        padding: 0;
        height: 100%;
     }
    </style>
    <script src="https://maps.googleapis.com/maps/api/js?v=3.exp&sensor=false"></script>
    <script type="text/javascript" src="//ajax.aspnetcdn.com/ajax/jquery/jquery-1.9.1.min.js"></script>
    <script type="text/javascript" src="./peerMap.js"></script>
  </head>
  <body>
    <div id="map-canvas"></div>
  </body>
</html>

