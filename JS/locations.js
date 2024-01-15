let map;

function initMap() {
 const position = { lat: -25.344, lng: 131.031 };
 map = new google.maps.Map(document.getElementById("map"), {
   zoom: 4,
   center: position,
 });
}

function addPanToMarker(map, markers) {
    markers.forEach(marker => {
      marker.addListener('click', event => {
        const location = { lat: event.latLng.lat(), lng: event.latLng.lng() };
        map.panTo(location);
      });
    });
}