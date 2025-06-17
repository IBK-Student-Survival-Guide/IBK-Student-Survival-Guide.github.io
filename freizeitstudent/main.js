// Innbruck als Ausgangspunkt 
let ibk = {
    lat: 47.267222,
    lng: 11.392778
};

// Bars und Restaurants 
const DATA = [

    {
        "NAME": "Dinzler",
        "lat": 47.26948,
        "lng": 11.39915,
        "ADR": "Kaiserjägerstraße 1, 6020 Innsbruck",
        "WEB": "http://www.dinz.at/",
        "EMAIL": "office@dinz.at",
        "TEL": "/",
        "KATE": "Bar"
    },
    {
        "NAME": "Sixty Twenty",
        "lat": 47.26932,
        "lng": 11.39811,
        "ADR": "Universitätsstraße 15a, 6020 Innsbruck",
        "WEB": "https://sixtytwenty.com/",
        "EMAIL": "office@sixtytwenty.com",
        "TEL": "0043 677 61831330",
        "KATE": "Bar"
    },
    {
        "NAME": "Theater",
        "lat": 47.26886,
        "lng": 11.39687,
        "ADR": "Universitätsstraße 3, 6020 Innsbruck",
        "WEB": "https://www.theatercafe-tirol.at",
        "EMAIL": "/",
        "TEL": "0043 660 7055632",
        "KATE": "Bar"
    },
    {
        "NAME": "PM",
        "lat": 47.26828,
        "lng": 11.38925,
        "ADR": "Mariahilfstraße 24, 6020 Innsbruck",
        "WEB": "https://www.instagram.com/pm_innsbruck/?hl=de",
        "EMAIL": "/",
        "TEL": "/",
        "KATE": "Bar"
    },
    {
        "NAME": "Liquid Diary",
        "lat": 47.26641,
        "lng": 11.39214,
        "ADR": "Adolf-Pichler-Platz 2, 6020 Innsbruck",
        "WEB": "https://www.liquiddiary.com/",
        "EMAIL": "info@liquiddiary.com",
        "TEL": "0043 676 5281470",
        "KATE": "Bar"
    },
    {
        "NAME": "Marktbar",
        "lat": 47.26782,
        "lng": 11.39092,
        "ADR": "Innrain 2, 6020 Innsbruck",
        "WEB": "https://www.marktbar-am-inn.at",
        "EMAIL": "sonne@marktbar-am-inn.at",
        "TEL": "0043 512 319 594",
        "KATE": "Bar"
    },
    {
        "NAME": "Wohnzimmer",
        "lat": 47.26599,
        "lng": 11.38334,
        "ADR": "Fürstenweg 5, 6020 Innsbruck",
        "WEB": "http://www.wohnzimmer-bar.at/",
        "EMAIL": "wohnzimmeribk@gmail.com",
        "TEL": "0043 676 6602444",
        "KATE": "Bar"
    },
    {
        "NAME": "Blaue Brigitte",
        "lat": 47.26766,
        "lng": 11.39353,
        "ADR": "Herzog-Friedrich-Straße 31, 6020 Innsbruck",
        "WEB": "https://www.weisseskreuz.at/de/die-bar/",
        "EMAIL": "/",
        "TEL": "/",
        "KATE": "Bar"
    },
    {
        "NAME": "M+M",
        "lat": 47.27078,
        "lng": 11.39152,
        "ADR": "Innstraße 45, 6020 Innsbruck",
        "WEB": "http://www.mm-bar.at/",
        "EMAIL": "dertreff@chello.at",
        "TEL": "0043 699 15220139",
        "KATE": "Bar"
    },
    {
        "NAME": "Moustache",
        "lat": 47.26915,
        "lng": 11.39293,
        "ADR": "Herzog-Otto-Straße 8, 6020 Innsbruck",
        "WEB": "http://www.cafe-moustache.at/",
        "EMAIL": "/",
        "TEL": "0043 680 2163908",
        "KATE": "Bar"
    },
    {
        "NAME": "Fuchs und Hase",
        "lat": 47.26961,
        "lng": 11.39313,
        "ADR": "Dompl. 3, 6020 Innsbruck",
        "WEB": "https://www.fuchsundhase.bar/",
        "EMAIL": "info@fuchsundhase.bar",
        "TEL": "/",
        "KATE": "Bar"
    },
    {
        "NAME": "Limerick",
        "lat": 47.26651,
        "lng": 11.39405,
        "ADR": "Maria-Theresien-Straße 9, 6020 Innsbruck",
        "WEB": "https://www.facebook.com/100064891575239/info/",
        "EMAIL": "/",
        "TEL": "0043 512 582011",
        "KATE": "Bar"
    },
    {
        "NAME": "Zappa",
        "lat": 47.26193,
        "lng": 11.38308,
        "ADR": "Rechengasse 5, 6020 Innsbruck",
        "WEB": "https://zappa.at",
        "EMAIL": "office@zappa.at",
        "TEL": "0043 699 10105180",
        "KATE": "Bar"
    },
    {
        "NAME": "The Fifth Floor",
        "lat": 47.26615,
        "lng": 11.39223,
        "ADR": "Adolf-Pichler-Platz 3, 6020 Innsbruck",
        "WEB": "https://www.the-penz.com/5th-floor-rooftop-american-bar-innsbruck",
        "EMAIL": "office@thepenz.com",
        "TEL": "0043 512 5756570",
        "KATE": "Bar"
    },
    {
        "NAME": "Uni Cafe",
        "lat": 47.26195,
        "lng": 11.38434,
        "ADR": "Innrain 55, 6020 Innsbruck",
        "WEB": "https://www.uni-cafe.at",
        "EMAIL": "unicafeibk@gmail.com",
        "TEL": "0043 650 2621605",
        "KATE": "Bar"
    },
    {
        "NAME": "TNT Sportsbar",
        "lat": 47.26732,
        "lng": 11.39569,
        "ADR": "Museumsstraße 3, 6020 Innsbruck",
        "WEB": "https://www.tnt-sportsbar.com",
        "EMAIL": "office@tnt-sportsbar.com",
        "TEL": "0043 676 6137466",
        "KATE": "Bar"
    },
    {
        "NAME": "360 Grad",
        "lat": 47.26552,
        "lng": 11.39243,
        "ADR": "Maria-Theresien-Straße 18, 6020 Innsbruck",
        "WEB": "https://www.rathausgalerien.at/kulinarik/cafe-360",
        "EMAIL": "office@360-grad.at",
        "TEL": "0043 512 566550",
        "KATE": "Bar"
    },
    {
        "NAME": "Kater Noster",
        "lat": 47.26156,
        "lng": 11.3952,
        "ADR": "Leopoldstraße 7, 6020 Innsbruck",
        "WEB": "https://www.katernoster.com/",
        "EMAIL": "eri@leopoldsieben.com",
        "TEL": "0043 699 11223383",
        "KATE": "Bar"
    },
    {
        "NAME": "Tribaun",
        "lat": 47.26737,
        "lng": 11.39588,
        "ADR": "Museumstraße 5, 6020 Innsbruck",
        "WEB": "http://www.tribaun.com",
        "EMAIL": "info@tribaun.com",
        "TEL": "/",
        "KATE": "Bar"
    },
    {
        "NAME": "die Franzosen",
        "lat": 47.26759,
        "lng": 11.39356,
        "ADR": "Herzog-Friedrich-Straße 33, 6020 Innsbruck",
        "WEB": "http://www.diefranzosen.at/",
        "EMAIL": "/",
        "TEL": "0043 512 552167",
        "KATE": "Bar"
    },
    {
        "NAME": "Trattoria – Pizzeria Due Sicilie",
        "lat": 47.2691,
        "lng": 11.38936,
        "ADR": "Höttinger G. 15, 6020 Innsbruck",
        "WEB": "https://innspizzerie.at",
        "EMAIL": "",
        "TEL": "0043 512936729",
        "KATE": "Restaurant"
    },
    {
        "NAME": "Weisses Rössl",
        "lat": 47.26765,
        "lng": 11.3924,
        "ADR": "Kiebachgasse 8, 6020 Innsbruck",
        "WEB": "https://www.roessl.at/",
        "EMAIL": "weisses@roessl.at",
        "TEL": "0043 512583057",
        "KATE": "Restaurant"
    },
    {
        "NAME": "Machete – Burrito Kartell",
        "lat": 47.26407,
        "lng": 11.38964,
        "ADR": "Anichstraße 29, 6020 Innsbruck",
        "WEB": "http://www.machete-burritos.com/",
        "EMAIL": "martin@machete-burritos.com",
        "TEL": "0043 512312442",
        "KATE": "Restaurant"
    },
    {
        "NAME": "Das Brahms",
        "lat": 47.2688,
        "lng": 11.39611,
        "ADR": "Universitätsstraße 1, 6020 Innsbruck",
        "WEB": "https://www.dasbrahms.at",
        "EMAIL": "info@dasbrahms.at",
        "TEL": "0043 512552880",
        "KATE": "Restaurant"
    },
    {
        "NAME": "Una Pizza",
        "lat": 47.26884,
        "lng": 11.3967,
        "ADR": "Universitätsstraße 3/Top 1, 6020 Innsbruck",
        "WEB": "https://www.unapizza.at/",
        "EMAIL": "/",
        "TEL": "0043 512556032",
        "KATE": "Restaurant"
    },
    {
        "NAME": "Glorious Bastards",
        "lat": 47.2554,
        "lng": 11.38007,
        "ADR": "Egger-Lienz-Straße 118, 6020 Innsbruck",
        "WEB": "https://glorious-bastards.at",
        "EMAIL": "/",
        "TEL": "0043 512319192",
        "KATE": "Restaurant"
    },
    {
        "NAME": "Stiftskeller",
        "lat": 47.26823,
        "lng": 11.39492,
        "ADR": "Stiftgasse 1/7, 6020 Innsbruck",
        "WEB": "http://www.stiftskeller.eu/",
        "EMAIL": "info@stiftskeller.eu",
        "TEL": "0043 512570706",
        "KATE": "Restaurant"
    },
    {
        "NAME": "Weitsicht",
        "lat": 47.26616,
        "lng": 11.40138,
        "ADR": "Brunecker Str. 1, 6020 Innsbruck",
        "WEB": "https://www.weitsicht-innsbruck.at",
        "EMAIL": "weitsicht@adlers.at",
        "TEL": "0043 512563100",
        "KATE": "Restaurant"
    },
    {
        "NAME": "Nami",
        "lat": 47.26465,
        "lng": 11.3914,
        "ADR": "Anichstraße 18, 6020 Innsbruck",
        "WEB": "https://nami-innsbruck.at/menu/",
        "EMAIL": "/",
        "TEL": "0043 6701855888",
        "KATE": "Restaurant"
    },
    {
        "NAME": "Madhuban",
        "lat": 47.26149,
        "lng": 11.394322,
        "ADR": "Templstraße 2, 6020 Innsbruck",
        "WEB": "http://madhuban.at",
        "EMAIL": "pradhan.a.anup@gmail.com",
        "TEL": "0043 512589157",
        "KATE": "Restaurant"
    },
    {
        "NAME": "Die Pizzerei",
        "lat": 47.26463,
        "lng": 11.39794,
        "ADR": "Bozner Pl. 6, 6020 Innsbruck",
        "WEB": "http://www.diepizzerei.at/",
        "EMAIL": "reservierung@diepizzerei.at",
        "TEL": "0043 512583796",
        "KATE": "Restaurant"
    },
    {
        "NAME": "Sitzwohl",
        "lat": 47.26605,
        "lng": 11.39704,
        "ADR": "Gilmstraße 4, 6020 Innsbruck",
        "WEB": "http://www.restaurantsitzwohl.at/",
        "EMAIL": "info@restaurantsitzwohl.at",
        "TEL": "0043 512562888",
        "KATE": "Restaurant"
    },
    {
        "NAME": "Ludwig",
        "lat": 47.26734,
        "lng": 11.39553,
        "ADR": "Museumstraße 3, 6020 Innsbruck",
        "WEB": "https://www.ludwig-burger.at/innsbruck",
        "EMAIL": "/",
        "TEL": "0043 512319222",
        "KATE": "Restaurant"
    },
    {
        "NAME": "Il Convento",
        "lat": 47.26795,
        "lng": 11.39489,
        "ADR": "Burggraben 29, 6020 Innsbruck",
        "WEB": "http://www.ilconvento.at/",
        "EMAIL": "/",
        "TEL": "0043 512581354",
        "KATE": "Restaurant"
    },
    {
        "NAME": "La Trattoria",
        "lat": 47.2661,
        "lng": 11.39467,
        "ADR": "Sparkassenpl. 5, 6020 Innsbruck",
        "WEB": "http://www.latrattoriainnsbruck.com/",
        "EMAIL": "office@latrattoriainnsbruck.com",
        "TEL": "0043 512556641",
        "KATE": "Restaurant"
    },
    {
        "NAME": "Goldener Adler",
        "lat": 47.26844,
        "lng": 11.39243,
        "ADR": "Herzog-Friedrich-Straße 6, 6020 Innsbruck",
        "WEB": "https://goldeneradler.com/",
        "EMAIL": "office@goldeneradler.com",
        "TEL": "0043 5125711110",
        "KATE": "Restaurant"
    },
    {
        "NAME": "Woosabi",
        "lat": 47.26917,
        "lng": 11.39285,
        "ADR": "Herzog-Otto-Straße 8, 6020 Innsbruck",
        "WEB": "https://www.woosabi.at/",
        "EMAIL": "info@woosabi.at",
        "TEL": "0043 6609004807",
        "KATE": "Restaurant"
    },
    {
        "NAME": "Himal Nepai Kitchen",
        "lat": 47.26897,
        "lng": 11.39795,
        "ADR": "Universitätsstraße 13, 6020 Innsbruck",
        "WEB": "http://www.himal.at/",
        "EMAIL": "info@himal.at",
        "TEL": "0043 512588588",
        "KATE": "Restaurant"
    },
    {
        "NAME": "Posidonas",
        "lat": 47.26505,
        "lng": 11.38818,
        "ADR": "Innrain 38, 6020 Innsbruck",
        "WEB": "https://www.posidonas.at",
        "EMAIL": "poseidon.dergrieche@gmail.com",
        "TEL": "0043 512908204",
        "KATE": "Restaurant"
    },
    {
        "NAME": "New India",
        "lat": 47.27176,
        "lng": 11.39235,
        "ADR": "Innstraße 10, 6020 Innsbruck",
        "WEB": "https://www.newindiainnsbruck.com/",
        "EMAIL": "newindia2@outlook.com",
        "TEL": "0043 512274945",
        "KATE": "Restaurant"
    }



]
// Karte erstellen 
let map = L.map("map").setView([ibk.lat, ibk.lng], 13
);
//LayerGroup erstellen 
let overlays = {
    Bars: L.layerGroup().addTo(map),
    Restaurants: L.layerGroup().addTo(map),

};

// Kartenlayer 
L.control.layers({
    "OpenStreetMap": L.tileLayer.provider('OpenStreetMap.Mapnik').addTo(map),
    "OpenTopoMap": L.tileLayer.provider('OpenTopoMap'),

}, overlays).addTo(map);

// Maßstab einfügen 
L.control.scale({
    imperial: false,
}).addTo(map);

// Marker-Gruppe initialisieren
let markerGroup = L.layerGroup().addTo(map);

// Marker erstellen to
DATA.forEach(item => {
    let iconHtml;
    if (item.KATE === "Bar") {
        iconHtml = '<i class="fa-solid fa-martini-glass-empty icon-bar"></i>';
    } else if (item.KATE === "Restaurant") {
        iconHtml = '<i class="fa-solid fa-utensils icon-resto"></i>';
    } else {
        iconHtml = '<i class="fa-solid fa-map-marker-alt icon-standa"></i>'; // Standard Icon
    }

    const icon = L.divIcon({
        html: iconHtml,
        className: '',
        iconSize: [24, 24],
        iconAnchor: [12, 24]
    });

    const marker = L.marker([item.lat, item.lng], { icon: icon });
    marker.bindPopup(`
        <h2>${item.NAME}</h2>
        <ul>
            <li><i class="fa-solid fa-address-book"></i> ${item.ADR}</li>
            <li><i class="fa-solid fa-paper-plane"></i> ${item.EMAIL}</li>
            <li><i class="fa-solid fa-phone"></i> ${item.TEL}</li>
            <li><a href="${item.WEB}" target="_blank">Website</a></li>
        </ul>
    `);
    //Zuordnung 
    if (item.KATE === "Bar") {
        marker.addTo(overlays.Bars);
    } else if (item.KATE === "Restaurant") {
        marker.addTo(overlays.Restaurants);
    }
});


