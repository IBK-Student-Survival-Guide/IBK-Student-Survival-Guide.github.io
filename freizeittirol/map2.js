//Karte 2 mittel

// Innsbruck
let ibk = {
    lat: 47.267222,
    lng: 11.392778
};

//Karte 2 initialisieren
let map2 = L.map("map2").setView([ibk.lat, ibk.lng], 9);

// WMTS Hintergrundlayer der eGrundkarte Tirol
let eGrundkarteTirol = {
    sommer: L.tileLayer("https://wmts.kartetirol.at/gdi_summer/{z}/{x}/{y}.png", {
        attribution: `Datenquelle: <a href="https://www.data.gv.at/katalog/dataset/land-tirol_elektronischekartetirol">eGrundkarte Tirol</a>`
    }),
    ortho: L.tileLayer("https://wmts.kartetirol.at/gdi_ortho/{z}/{x}/{y}.png", {
        attribution: `Datenquelle: <a href="https://www.data.gv.at/katalog/dataset/land-tirol_elektronischekartetirol">eGrundkarte Tirol</a>`
    }
    ),
    nomenklatur: L.tileLayer("https://wmts.kartetirol.at/gdi_nomenklatur/{z}/{x}/{y}.png", {
        attribution: `Datenquelle: <a href="https://www.data.gv.at/katalog/dataset/land-tirol_elektronischekartetirol">eGrundkarte Tirol</a>`,
        pane: "overlayPane",
    })
}

// / Layer control mit eGrundkarte Tirol und Standardlayern
L.control.layers({
    "eGrundkarte Tirol Sommer": L.layerGroup([
        eGrundkarteTirol.sommer,
        eGrundkarteTirol.nomenklatur
    ]).addTo(map2),
    "eGrundkarte Tirol Orthofoto": L.layerGroup([
        eGrundkarteTirol.ortho,
        eGrundkarteTirol.nomenklatur,
    ]),
    "OpenStreetMap": L.tileLayer.provider("OpenStreetMap.Mapnik"),
    "Esri WorldImagery": L.tileLayer.provider("Esri.WorldImagery"),
}).addTo(map2);

// Maßstab
L.control.scale({
    imperial: false,
}).addTo(map2);

//Elevation Map 2

const controlElevation = L.control.elevation({
    theme: "mittel",
    time: false,
    elevationDiv: "#profile2", 
    height: 300, 
    slope: true, 
 }).addTo(map1);
 controlElevation.load("gpx/mittel.gpx");

 //Minimap Map 2

var gkTirol = new L.TileLayer("https://wmts.kartetirol.at/gdi_summer/{z}/{x}/{y}.png"); 
var miniMap = new L.Control.MiniMap(gkTirol,{
    toggleDisplay: true
}).addTo(map2);

//Fullscrean 
map2.addControl(new L.Control.Fullscreen()); 

//Locate controle
    var lc = L.control
        .locate({
            position: "topright",
        })
        .addTo(map2);

