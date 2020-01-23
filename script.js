var input1 = document.getElementById('pick-up');
var autocomplete1 = new google.maps.places.Autocomplete(input1);
var input2 = document.getElementById('drop');
var autocomplete2 = new google.maps.places.Autocomplete(input2);
// Note: This example requires that you consent to location sharing when
// prompted by your browser. If you see the error "The Geolocation service
// failed.", it means you probably did not give permission for the browser to
// locate you.

var map, infoWindow;
function initMap() {
map = new google.maps.Map(document.getElementById('map'), {
  center: {lat: 28.7118383, lng: 77.0851576},
  zoom: 6
});

infoWindow = new google.maps.InfoWindow;

// Try HTML5 geolocation.
if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(function(position) {
    var pos = {
      lat: position.coords.latitude,
      lng: position.coords.longitude
    };

    //infoWindow.setPosition(pos);
    //infoWindow.setContent('You are here!');
    infoWindow.open(map);
    var marker = new google.maps.Marker({
      position: pos,
      icon:'marker.png'
    });
    marker.setMap(map);
    smoothZoom(map, 20, map.getZoom());
    map.setCenter(pos);
  }, function() {
    handleLocationError(true, infoWindow, map.getCenter());
  });
} else {
  // Browser doesn't support Geolocation
  handleLocationError(false, infoWindow, map.getCenter());
}
}

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
infoWindow.setPosition(pos);
infoWindow.setContent(browserHasGeolocation ?
                      'Error: The Geolocation service failed.' :
                      'Error: Your browser doesn\'t support geolocation.');
infoWindow.open(map);
}

// the smooth zoom function
function smoothZoom (map, max, cnt) {
    if (cnt >= max) {
        return;
    }
    else {
        z = google.maps.event.addListener(map, 'zoom_changed', function(event){
            google.maps.event.removeListener(z);
            smoothZoom(map, max, cnt + 1);
        });
        setTimeout(function(){map.setZoom(cnt)}, 5); // 80ms is what I found to work well on my system -- it might not work well on all systems
    }
}

// Continue Action
function selectType() {
   document.getElementById('types').style.opacity = "100%";
}