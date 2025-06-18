(() => {
  // Koordinaten für map3 (z.B. Innsbruck oder andere Position)
  let ibk3 = {
    lat: 47.267222,
    lng: 11.392778
  };

  // Karte 3 initialisieren
  let map3 = L.map("map3").setView([ibk3.lat, ibk3.lng], 9);

  // WMTS Hintergrundlayer der eGrundkarte Tirol
  let eGrundkarteTirol3 = {
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

  // Layer control mit eGrundkarte Tirol und Standardlayern
  L.control.layers({
    "eGrundkarte Tirol Sommer": L.layerGroup([
      eGrundkarteTirol3.sommer,
      eGrundkarteTirol3.nomenklatur
    ]).addTo(map3),
    "eGrundkarte Tirol Orthofoto": L.layerGroup([
      eGrundkarteTirol3.ortho,
      eGrundkarteTirol3.nomenklatur,
    ]),
    "OpenStreetMap": L.tileLayer.provider("OpenStreetMap.Mapnik"),
    "Esri WorldImagery": L.tileLayer.provider("Esri.WorldImagery"),
  }).addTo(map3);

  // Maßstab
  L.control.scale({
    imperial: false,
  }).addTo(map3);

  // Elevation Map 3
  const controlElevation3 = L.control.elevation({
    theme: "schwer",
    time: false,
    elevationDiv: "#profile3",
    height: 300,
    slope: true,
  }).addTo(map3);
  controlElevation3.load("gpx/schwer.gpx");  

  // Minimap Map 3
  var gkTirol3 = new L.TileLayer("https://wmts.kartetirol.at/gdi_summer/{z}/{x}/{y}.png");
  var miniMap3 = new L.Control.MiniMap(gkTirol3, {
    toggleDisplay: true
  }).addTo(map3);

  // Fullscreen
  map3.addControl(new L.Control.Fullscreen());

  // Locate control
  var lc3 = L.control.locate({
    position: "topright",
  }).addTo(map3);
})();
