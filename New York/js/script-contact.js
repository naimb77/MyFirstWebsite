let contactMap = L.map('contact-map').setView([51.182140, 4.367010], 17);



L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoiZW1ldmFlbHgiLCJhIjoiY2tpdDI1Z3NmMTM4NTJ0bDNjaGExaW04eSJ9.Sako6S_gKXIEvJXYmkTlBw'
}).addTo(contactMap);

let contactMarker = L.marker([51.182140, 4.367010]).addTo(contactMap);
contactMarker.bindPopup("Hier zijn wij!");
