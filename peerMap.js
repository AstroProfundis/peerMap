var map;
var ip;
var allMarkers = [];
function initialize() {
  var mapOptions = {
    zoom: 5,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };
  map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
  var tempPos = new google.maps.LatLng(1,100);
  map.setCenter(tempPos);
  if(navigator.geolocation){//html5 location supported
    navigator.geolocation.getCurrentPosition(function(position) {
      var pos = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
      ip = $('#ip').val();
      $.ajax({
        url: "webInsertLocation.php",
        type: "POST",
        data: {
               'ip' : ip,
               'long': pos.lng(),
               'lat' : pos.lat()
        },
      }).done(function(){
          console.log("inserted! cool!");
        });
      $.ajax({
        url: "webGetAll.php",
        type: "GET",
        dataType: "json"
      }).done(function(data){
          addMarker(data);
         });
      setInterval(function(){
        console.log("update markers");
        $.ajax({
          url: "webGetAll.php",
          type: "GET",
          dataType: "json"
        }).done(function(data){
            addMarker(data);
           });
      },5000);
      map.setCenter(pos);
  });
  } else{
      alert("html5 geolocation is not supported by your browser");
  }
}

function addMarker(data){
  for(var i = 0; i < allMarkers.length; i++){
    allMarkers[i].setMap(null);
  }
  allMarkers=[];
  for(var i = 0; i < data.length; i++){
    var object = data[i];
    var pos = new google.maps.LatLng(object.latitude, object.longitude);
    var marker = new google.maps.Marker({
      map: map,
      position:pos
    });
    allMarkers.push(marker);
  }
}
$(document).ready(initialize);
$(window).on('beforeunload',function (){
  $.ajax({
    url: "webDeleteLocation.php",
    type: "POST",
    data: {'ipaddr': ip.toString()}
  });
});
