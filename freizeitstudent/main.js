// Innbruck als Ausgangspunkt 
let ibk = {
    lat: 47.267222,
    lng: 11.392778
};
// Karte erstellen 
let map = L.map("map").setView([ibk.lat, ibk.lng], 13
); 

//Overlays definieren 
let overlays = {
    bars: L.featureGroup().addTo(map),
    resto: L.featureGroup().addTo(map),
};

//Layercontrol 
L.control.layers({
    "BasemapAT": L.tileLayer.provider('BasemapAT.basemap').addTo(map),
    "BasemapAT grau": L.tileLayer.provider('BasemapAT.grau'),
    "BasemapAT Oberfläche": L.tileLayer.provider('BasemapAT.surface'),
}, {
    "Bars": overlays.bars,
    "Restaurant": overlays.resto,
}).addTo(map);

// Maßstab einfügen
L.control.scale({
    imperial: false,
}).addTo(map);

// Marker hinzufügen
DATA.forEach(location => {
  const marker = L.marker([location.lat, location.lng]).addTo(map);
  marker.bindPopup(`
    <strong>${location.NAME}</strong><br>
    ${location.ADR}<br>
    <a href="${location.WEB}" target="_blank">Website</a>
  `);
});

