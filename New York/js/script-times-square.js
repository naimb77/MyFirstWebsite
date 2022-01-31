let timesSquareMap = L.map('times-square-map').setView([40.758181, -73.985558], 17);



L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoiZW1ldmFlbHgiLCJhIjoiY2tpdDI1Z3NmMTM4NTJ0bDNjaGExaW04eSJ9.Sako6S_gKXIEvJXYmkTlBw'
}).addTo(timesSquareMap);

let contactMarker = L.marker([40.758181, -73.985558]).addTo(timesSquareMap);
contactMarker.bindPopup("Hier ligt <br>Times Square");
