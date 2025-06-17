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
DATA.forEach(item => {
  const marker = L.marker([item.lat, item.lng]).bindPopup(`
    <strong>${item.NAME}</strong><br>
    ${item.ADR}<br>
    <a href="${item.WEB}" target="_blank">Website</a><br>
    Kategorie: ${item.KATE}
  `);

  const KATE = item.KATE.toLowerCase();
  if (KATE === "bar") {
    marker.addTo(overlays.bars);
  } else if (KATE === "restaurant") {
    marker.addTo(overlays.resto);
  }
});


