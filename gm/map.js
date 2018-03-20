function initMap(domElement) {
    // Mittelpunkt der Karte
    var center = {
        lat: 51.9689129,
        lng: 12.0910298
    };

    // Alle Gebäude
    var buildings = [
        {
            // Angezeigter Titel
            title: "N-Gebäude",
            // Interne ID (muss einzigartig sein)
            id: "ngeb",
            // Position des Labels
            pos: {
                lat: 51.968575,
                lng: 12.091002
            },
            // Seite des Gebäudes
            link: "/ngeb",
            // Farbe des Gebäudes
            color: "blue",
            // GeoJSON des Gebäudes, z.B. mit geojson.io erstellen
            geoJson: {
                "type": "FeatureCollection",
                "features": [
                    {
                        "type": "Feature",
                        "properties": {
                            "stroke-width": 1,
                            "stroke-opacity": 1,
                            "fill-opacity": 0.5
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        12.090979814529419,
                                        51.968657290340985
                                    ],
                                    [
                                        12.090824246406555,
                                        51.96858623326939
                                    ],
                                    [
                                        12.091012001037598,
                                        51.96843089881353
                                    ],
                                    [
                                        12.091170251369476,
                                        51.96849204116359
                                    ],
                                    [
                                        12.090979814529419,
                                        51.968657290340985
                                    ]
                                ]
                            ]
                        }
                    }
                ]
            }
        },
        {
            title: "Aula",
            id: "aula",
            pos: {
                lat: 51.969288536589,
                lng: 12.091484069824219
            },
            link: "/aula",
            color: "red",
            geoJson: {
                "type": "FeatureCollection",
                "features": [
                    {
                        "type": "Feature",
                        "properties": {},
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        12.091484069824219,
                                        51.969288536589
                                    ],
                                    [
                                        12.091532349586485,
                                        51.969154686687595
                                    ],
                                    [
                                        12.091819345951079,
                                        51.96920921817717
                                    ],
                                    [
                                        12.091781795024872,
                                        51.96932489081418
                                    ],
                                    [
                                        12.091484069824219,
                                        51.969288536589
                                    ]
                                ]
                            ]
                        }
                    }
                ]
            }
        }
    ];

    var map = new google.maps.Map(domElement, {
        zoom: 19,
        mapTypeId: 'satellite',
        center: center
    });

    for (var i = 0; i < buildings.length; i++) {
        // Aktuelles Gebäude
        var building = buildings[i];

        // Marker für das aktuelle Gebäude
        var marker = buildingMarker(building);

        for (var j = 0; j < building.geoJson.features.length; j++) {
            // ID und Farbe in GeoJSON einfügen
            building.geoJson.features[j].properties["id"] = building.id;
            building.geoJson.features[j].properties["color"] = building.color;
        }

        map.data.addGeoJson(building.geoJson);

        marker.addListener('click', function (event) {
            location.href = building.link;
        });
    }

    map.data.addListener('click', function(event) {
        var building = findBuilding(event.feature.getProperty("id"));
        location.href = building.link;
    });

    map.data.addListener('mouseover', function(event){
        map.data.revertStyle();
        map.data.overrideStyle(event.feature, {strokeWeight: 3});
    });

    map.data.addListener('mouseout', function(event){
        map.data.revertStyle();
    });

    map.data.setStyle(function(feature) {
        var color = 'gray';
        if (feature.getProperty('color')) {
            color = feature.getProperty('color');
        }
        return /** @type {google.maps.Data.StyleOptions} */({
            fillColor: color,
            strokeColor: color,
            strokeWeight: 1
        });
    });

    // Findet das Gebäude mit der angegebenen ID
    function findBuilding(id) {
        for (var i = 0; i < buildings.length; i++) {
            if (buildings[i].id == id) {
                return buildings[i];
            }
        }
        return undefined;
    }

    // Gibt einen Marker für das Gebäude zurück
    function buildingMarker(building) {
        return new MarkerWithLabel({
            position: building.pos,
            title: building.title,
            labelContent: building.title,
            labelClass: "labels label-" + building.id,
            map: map,
            opacity: 0
        });
    }
}
initMap(document.getElementById('map'));