(function() {
    // Innsbruck
    let ibk2 = {
        lat: 47.267222,
        lng: 11.392778
    };

    let map2 = L.map("map2").setView([ibk2.lat, ibk2.lng], 9);

    let eGrundkarteTirol2 = {
        sommer: L.tileLayer("https://wmts.kartetirol.at/gdi_summer/{z}/{x}/{y}.png", {
            attribution: `Datenquelle: <a href="https://www.data.gv.at/katalog/dataset/land-tirol_elektronischekartetirol">eGrundkarte Tirol</a>`
        }),
        ortho: L.tileLayer("https://wmts.kartetirol.at/gdi_ortho/{z}/{x}/{y}.png", {
            attribution: `Datenquelle: <a href="https://www.data.gv.at/katalog/dataset/land-tirol_elektronischekartetirol">eGrundkarte Tirol</a>`
        }),
        nomenklatur: L.tileLayer("https://wmts.kartetirol.at/gdi_nomenklatur/{z}/{x}/{y}.png", {
            attribution: `Datenquelle: <a href="https://www.data.gv.at/katalog/dataset/land-tirol_elektronischekartetirol">eGrundkarte Tirol</a>`,
            pane: "overlayPane",
        })
    };

    L.control.layers({
        "eGrundkarte Tirol Sommer": L.layerGroup([
            eGrundkarteTirol2.sommer,
            eGrundkarteTirol2.nomenklatur
        ]).addTo(map2),
        "eGrundkarte Tirol Orthofoto": L.layerGroup([
            eGrundkarteTirol2.ortho,
            eGrundkarteTirol2.nomenklatur,
        ]),
        "OpenStreetMap": L.tileLayer.provider("OpenStreetMap.Mapnik"),
        "Esri WorldImagery": L.tileLayer.provider("Esri.WorldImagery"),
    }).addTo(map2);

    L.control.scale({
        imperial: false,
    }).addTo(map2);

    const controlElevation2 = L.control.elevation({
        theme: "mittel",
        time: false,
        elevationDiv: "#profile2", 
        height: 300, 
        slope: true, 
    }).addTo(map2);
    controlElevation2.load("gpx/mittel.gpx");

    var gkTirol2 = new L.TileLayer("https://wmts.kartetirol.at/gdi_summer/{z}/{x}/{y}.png"); 
    var miniMap = new L.Control.MiniMap(gkTirol2, {
        toggleDisplay: true
    }).addTo(map2);

    map2.addControl(new L.Control.Fullscreen()); 

    var lc = L.control.locate({
        position: "topright",
    }).addTo(map2);

    // Koordinatenanzeige
L.control.coordinates({
    position: "bottomleft",
    decimals: 5,
    decimalSeperator: ".",
    labelTemplateLat: "Latitude: {y}",
    labelTemplateLng: "Longitude: {x}",
    enableUserInput: true,
    useDMS: false,
    useLatLngOrder: true,
    markerType: L.marker,
    markerProps: {}
}).addTo(map2);
})();
