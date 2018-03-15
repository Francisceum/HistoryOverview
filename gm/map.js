function initMap() {
    // ID des ausgewählten Gebäudes
    var selectedId = "";

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
            // Farbe des Gebäudes
            color: "blue",
            // HTML-Beschreibung des Gebäudes (wird in der Sidebar angezeit)
            description: '<div class="list-group">' +
            '<h1 id="firstHeading" class="firstHeading list-group-item list-group-item-active">N-Gebäude</h1>' +
            '<p class="list-group-item">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>' +
            '<a href="seite.html" class="read-more list-group-item">Mehr lesen</a> </div></div>',
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
                    },
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
                                        12.090959814529419,
                                        51.968657290340985
                                    ],
                                    [
                                        12.090864246406555,
                                        51.96858623326939
                                    ],
                                    [
                                        12.091015001037598,
                                        51.96843089881353
                                    ],
                                    [
                                        12.091190251369476,
                                        51.96849204116359
                                    ],
                                    [
                                        12.090959814529419,
                                        51.968657290340985
                                    ]
                                ]
                            ]
                        }
                    }
                ]
            }
        }
    ];

    function findBuilding(id) {
        for (var i = 0; i < buildings.length; i++) {
            if (buildings[i].id == id) {
                return buildings[i];
            }
        }
        return undefined;
    }

    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 19,
        mapTypeId: 'satellite',
        center: center
    });

    for (var i = 0; i < buildings.length; i++) {
        var building = buildings[i];
        // Marker für das aktuelle Gebäude
        var marker = new MarkerWithLabel({
            position: building.pos,
            title: building.title,
            labelContent: building.title,
            labelClass: "labels label-" + building.id,
            map: map,
            opacity: 0
        });

        // IDs der GeoJSON-Features, die zum Gebäude gehoren
        building.featureIds = [];
        for (var j = 0; j < building.geoJson.features.length; j++) {
            // ID und Farbe in GeoJSON einfügen
            building.geoJson.features[j].properties["id"] = building.id;
            building.geoJson.features[j].properties["color"] = building.color;
            building.featureIds.push(j);
        }
        map.data.addGeoJson(building.geoJson);

        marker.addListener('click', function (event) {
            selectedId = building.id
            $('#sidebar').html(building.description)
        });

        map.data.addListener('mouseover', function(event){
            $('#sidebar').html(findBuilding(building.id).description);
        });

        map.data.addListener('mouseout', function(event){
            if (selectedId == ""){
                $('#sidebar').html('');
            }
        });
    }

    map.data.addListener('click', function(event) {
        selectedId = event.feature.getProperty("id");
        $('#sidebar').html(findBuilding(event.feature.getProperty("id")).description)
    });

    map.data.addListener('mouseover', function(event){
        var building = findBuilding(event.feature.getProperty("id"));
        $('#sidebar').html(building.description);
        map.data.revertStyle();
        map.data.overrideStyle(event.feature, {strokeWeight: 3});
    });

    map.data.addListener('mouseout', function(event){
        if (selectedId == ""){
            $('#sidebar').html('');
        }
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
}
initMap();