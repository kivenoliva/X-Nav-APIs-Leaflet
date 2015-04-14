$(document).ready(function() {

    var map = L.map('map');

    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
        maxZoom: 18
    }).addTo(map);

    map.locate({setView: true, maxZoom: 16});
    
    function onLocationFound(e) {
        var radius = e.accuracy / 2;

        L.marker(e.latlng).addTo(map).bindPopup("You are within " + radius + " meters from this point").openPopup();

        L.circle(e.latlng, radius).addTo(map);
    }

    map.on('locationfound', onLocationFound);

    //Ademas le añado un popup en el aulario 3 como en los ejemplos anteriores y que donde pulses del mapa te de sus coordenadas
    L.marker([40.2838, -3.8215]).addTo(map).bindPopup('AULARIO 3').openPopup();
    
    var popup = L.popup();

    function onMapClick(e) {
        popup.setLatLng(e.latlng).setContent("You clicked the map at " + e.latlng.toString()).openOn(map);
    }

    map.on('click', onMapClick);
    
});
