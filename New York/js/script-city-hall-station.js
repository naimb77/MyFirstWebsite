let cityHallStationMap = L.map('city-hall-station-map').setView([40.713662, -74.006688], 17);


L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoiZW1ldmFlbHgiLCJhIjoiY2tpdDI1Z3NmMTM4NTJ0bDNjaGExaW04eSJ9.Sako6S_gKXIEvJXYmkTlBw'
}).addTo(cityHallStationMap);

let contactMarker = L.marker([40.713662, -74.006688]).addTo(cityHallStationMap);
contactMarker.bindPopup("Hier ligt <br>City Hall Station");