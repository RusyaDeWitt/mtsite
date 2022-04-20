
// Initialize and add the map
function initMap() {
    // The location of Uluru
    const uluru = { lat: 51.184393898027864, lng: 71.49038209502989 };
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom:15,
      center: uluru,
    });
    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
      position: uluru,
      map: map,
    });
  }
  
  window.initMap = initMap;