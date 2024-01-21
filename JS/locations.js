let map;

async function initMap() {
  // The location of Uluru
  //45.745445428957446, -87.07909329557702
  let positions = [];
  //Escanaba Location
  positions.push({ lat: 45.745, lng: -87.079 });
  //Grand Rapids Location
  positions.push({lat: 42.978, lng: -85.671});
  //Chicago Location 41.885914898149274, -87.62769069845365
  positions.push({lat: 41.886, lng: -87.627});
  // Request needed libraries.
  //@ts-ignore
  const { Map } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");
  //42.97751978451968, -85.67076822638352
  // The map, centered at Uluru
  
  let lat = 0;
  let lng = 0;
  positions.forEach(function(position) {
    lat += position.lat;
    lng += position.lng;
  });
  lat /= positions.length;
  lng /= positions.length;
  let center = {lat:lat, lng: lng};

  map = new Map(document.getElementById("map"), {
    zoom: 6,
    center: center,
    mapId: "DEMO_MAP_ID",
  });
  positions.forEach(function(position) {
    const marker = new AdvancedMarkerElement({
      map: map,
      position: position,
      title: "Restaurant Location",
    });
  })
  
}

initMap();