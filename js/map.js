/* Map with marker*/

function initMap() {
  let uluru = {
    lat: -13.000,
    lng: 31.499998
  };
  let map = new google.maps.Map(document.getElementById('map'), {
    zoom: 7,
    center: uluru
  });
  let marker = new google.maps.Marker({
    position: uluru,
    map: map
  });
}
