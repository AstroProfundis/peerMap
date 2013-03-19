var map;
function initialize() {
  var mapOptions = {
    zoom: 8,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };
  map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
  if(navigator.geolocation){//html5 location supported
    navigator.geolocation.getCurrentPosition(function(position) {
      var pos = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
      map.setCenter(pos);
   var marker = new google.maps.Marker({
     map: map,
     position: map.getCenter()
   });
   var newpos = new google.maps.LatLng(-25.363882,131.044922);
   var marker = new google.maps.Marker({
     map: map,
     position: newpos 
   });
    }, function(){
      console.log("error getting location");
    });
  } else{
      alert("html5 geolocation is not supported by your browser");
  }
}
$(document).ready(initialize);
