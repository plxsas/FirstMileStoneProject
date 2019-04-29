var map;
function initMap() {
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 15,
        center: {
            lat: 51.492809,
            lng: -3.184275
        }
    });

    var labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    var locations = [
        { lat: 51.492809, lng: -3.184275 }
    ];

    var markers = locations.map(function(location, i) {
        return new google.maps.Marker({
            position: location,
            label: labels[i % labels.length]
        });
    });

    var markerCluster = new MarkerClusterer(map, markers, { imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m' });
}



