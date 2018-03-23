function initMap(domElement) {
    // Mittelpunkt der Karte
    var center = {
        lat: 51.9689129,
        lng: 12.0914298
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
                lng: 12.090900
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
                        "properties": {},
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        12.090983167290686,
                                        51.96866018219616
                                    ],
                                    [
                                        12.090832963585854,
                                        51.96858995137476
                                    ],
                                    [
                                        12.091013342142105,
                                        51.96843792192553
                                    ],
                                    [
                                        12.091094478964806,
                                        51.96845940437899
                                    ],
                                    [
                                        12.091174945235252,
                                        51.96850650049093
                                    ],
                                    [
                                        12.090983167290686,
                                        51.96866018219616
                                    ]
                                ]
                            ]
                        }
                    }
                ]
            }
        },
        {
            title: "Alumnatskorridor",
            id: "alu",
            pos: {
                lng: 12.09146797657013,
                lat: 51.968953715565514
            },
            link: "/alu",
            color: "orange",
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
                                        12.091508209705353,
                                        51.96913155209623
                                    ],
                                    [
                                        12.091661095619202,
                                        51.96875478706984
                                    ],
                                    [
                                        12.091728150844574,
                                        51.96876470197953
                                    ],
                                    [
                                        12.091575264930725,
                                        51.969139814451665
                                    ],
                                    [
                                        12.091508209705353,
                                        51.96913155209623
                                    ]
                                ]
                            ]
                        }
                    }
                ]
            }
        },
        {
            title: "Astro-Turm",
            id: "astroturm",
            pos: {
                lng: 12.091712057590485,
                lat: 51.969495094294324
            },
            link: "/astroturm",
            color: "lightblue",
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
                                        12.091691605746746,
                                        51.96951946804074
                                    ],
                                    [
                                        12.091678529977798,
                                        51.96951595656962
                                    ],
                                    [
                                        12.0916698127985,
                                        51.96951079264099
                                    ],
                                    [
                                        12.09165908396244,
                                        51.96950397625431
                                    ],
                                    [
                                        12.09165371954441,
                                        51.969495300851555
                                    ],
                                    [
                                        12.091650366783142,
                                        51.96948559266077
                                    ],
                                    [
                                        12.091650031507015,
                                        51.96947361233733
                                    ],
                                    [
                                        12.091656401753426,
                                        51.9694649369287
                                    ],
                                    [
                                        12.091676518321037,
                                        51.969456054960965
                                    ],
                                    [
                                        12.09169764071703,
                                        51.969452336927446
                                    ],
                                    [
                                        12.091720439493656,
                                        51.969452130370044
                                    ],
                                    [
                                        12.091740891337395,
                                        51.96945708774803
                                    ],
                                    [
                                        12.091752290725708,
                                        51.96946225168282
                                    ],
                                    [
                                        12.091763019561768,
                                        51.96947030741994
                                    ],
                                    [
                                        12.091768719255924,
                                        51.96947960249945
                                    ],
                                    [
                                        12.091767713427544,
                                        51.96949302872196
                                    ],
                                    [
                                        12.091760002076626,
                                        51.96950707461203
                                    ],
                                    [
                                        12.09174860268831,
                                        51.96951513034108
                                    ],
                                    [
                                        12.09172748029232,
                                        51.96952174016898
                                    ],
                                    [
                                        12.091710045933723,
                                        51.9695227729545
                                    ],
                                    [
                                        12.091691605746746,
                                        51.96951946804074
                                    ]
                                ]
                            ]
                        }
                    }
                ]
            }
        },
        {
            title: "Denkmal für Fürst Franz",
            id: "denkmalfranz",
            pos: {
                lng: 12.090743780136108,
                lat: 51.96924391999962
            },
            link: "/denkmal",
            color: "yellow",
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
                                        12.09077998995781,
                                        51.969246398700186
                                    ],
                                    [
                                        12.090773954987526,
                                        51.96923648389708
                                    ],
                                    [
                                        12.090786024928093,
                                        51.96922863467638
                                    ],
                                    [
                                        12.090806812047958,
                                        51.96923565766337
                                    ],
                                    [
                                        12.090799435973166,
                                        51.96924722493369
                                    ],
                                    [
                                        12.09077998995781,
                                        51.969246398700186
                                    ]
                                ]
                            ]
                        }
                    }
                ]
            }
        },
        {
            title: "Historische Bibliothek",
            id: "bibliothek",
            pos: {
                lng: 12.09144396213531,
                lat: 51.96876931904602
            },
            link: "/bibliothek",
            color: "green",
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
                                        12.091663777828217,
                                        51.96874156718685
                                    ],
                                    [
                                        12.091645002365112,
                                        51.96878618427636
                                    ],
                                    [
                                        12.09158331155777,
                                        51.9687729644026
                                    ],
                                    [
                                        12.091596722602844,
                                        51.968733304757976
                                    ],
                                    [
                                        12.091663777828217,
                                        51.96874156718685
                                    ]
                                ]
                            ]
                        }
                    }
                ]
            }
        },
        {
            title: "Inschrift am Eingang",
            id: "inschrift",
            pos: {
                lng: 12.090451419353485,
                lat: 51.96927531686345
            },
            link: "/inschrift",
            color: "brown",
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
                                        12.090560048818588,
                                        51.96928357919238
                                    ],
                                    [
                                        12.09056407213211,
                                        51.969267054533006
                                    ],
                                    [
                                        12.090567089617252,
                                        51.969267054533006
                                    ],
                                    [
                                        12.09056206047535,
                                        51.969284198867
                                    ],
                                    [
                                        12.090560048818588,
                                        51.96928357919238
                                    ]
                                ]
                            ]
                        }
                    }
                ]
            }
        },
        {
            title: "Gebäude Jeversche Straße",
            id: "jevstr",
            pos: {
                lng: 12.087873816490172,
                lat: 51.96070976744851
            },
            link: "/jeverschestrasse",
            color: "coral",
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
                                        12.087675333023071,
                                        51.96087504532041
                                    ],
                                    [
                                        12.08766460418701,
                                        51.960420529706404
                                    ],
                                    [
                                        12.08771288394928,
                                        51.96040069619286
                                    ],
                                    [
                                        12.088536322116852,
                                        51.96038086267055
                                    ],
                                    [
                                        12.088525593280792,
                                        51.960493252514325
                                    ],
                                    [
                                        12.088345885276794,
                                        51.96050151646231
                                    ],
                                    [
                                        12.088324427604674,
                                        51.96081223980087
                                    ],
                                    [
                                        12.088123261928558,
                                        51.96084529534843
                                    ],
                                    [
                                        12.088018655776978,
                                        51.96086678144128
                                    ],
                                    [
                                        12.087675333023071,
                                        51.96087504532041
                                    ]
                                ]
                            ]
                        }
                    }
                ]
            }
        },
        {
            title: "Kirchenschiff",
            id: "schiff",
            pos: {
                lng: 12.091615498065947,
                lat: 51.96921921817717
            },
            link: "/kirchenschiff",
            color: "blueviolet",
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
                                        12.091446518898008,
                                        51.96929349398508
                                    ],
                                    [
                                        12.091502845287323,
                                        51.96916294903876
                                    ],
                                    [
                                        12.0918408036232,
                                        51.969207565708764
                                    ],
                                    [
                                        12.091781795024872,
                                        51.96933480559775
                                    ],
                                    [
                                        12.091446518898008,
                                        51.96929349398508
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
                lng: 12.09163226902008,
                lat: 51.9692954872678
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
                                        12.091516256332397,
                                        51.96922243792223
                                    ],
                                    [
                                        12.091800570487976,
                                        51.96926540206673
                                    ],
                                    [
                                        12.091771066188812,
                                        51.969333153133974
                                    ],
                                    [
                                        12.091481387615204,
                                        51.96929184151978
                                    ],
                                    [
                                        12.091516256332397,
                                        51.96922243792223
                                    ]
                                ]
                            ]
                        }
                    }
                ]
            }
        },
        {
            title: "Südhof",
            id: "suedhof",
            pos: {
                lng: 12.09183007478714,
                lat: 51.96854326847374
            },
            link: "/suedhof",
            color: "tomato",
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
                                        12.091524302959442,
                                        51.96859284323428
                                    ],
                                    [
                                        12.09168255329132,
                                        51.96833670638126
                                    ],
                                    [
                                        12.092189490795134,
                                        51.96845899125499
                                    ],
                                    [
                                        12.092103660106657,
                                        51.96858292828658
                                    ],
                                    [
                                        12.092267274856566,
                                        51.96862258806428
                                    ],
                                    [
                                        12.092141211032867,
                                        51.96878948924419
                                    ],
                                    [
                                        12.091883718967438,
                                        51.968729999786
                                    ],
                                    [
                                        12.091923952102661,
                                        51.968657290340985
                                    ],
                                    [
                                        12.091524302959442,
                                        51.96859284323428
                                    ]
                                ]
                            ]
                        }
                    }
                ]
            }
        },
        {
            title: "Westflügel",
            id: "westfluegel",
            pos: {
                lng: 12.09071695804596,
                lat: 51.969070410618656
            },
            link: "/westfluegel",
            color: "yellowgreen",
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
                                        12.091060280799866,
                                        51.96912328973926
                                    ],
                                    [
                                        12.090896666049957,
                                        51.969106765020776
                                    ],
                                    [
                                        12.090885937213898,
                                        51.96911626673464
                                    ],
                                    [
                                        12.09086112678051,
                                        51.969127007800076
                                    ],
                                    [
                                        12.090834975242615,
                                        51.969127007800076
                                    ],
                                    [
                                        12.090808153152466,
                                        51.96912039791396
                                    ],
                                    [
                                        12.090804800391197,
                                        51.96911089620097
                                    ],
                                    [
                                        12.090794742107391,
                                        51.9690951977142
                                    ],
                                    [
                                        12.090644538402557,
                                        51.969073715565514
                                    ],
                                    [
                                        12.090652585029602,
                                        51.96903075123725
                                    ],
                                    [
                                        12.090676724910736,
                                        51.96899770172593
                                    ],
                                    [
                                        12.091084420681,
                                        51.969053885880655
                                    ],
                                    [
                                        12.091060280799866,
                                        51.96912328973926
                                    ]
                                ]
                            ]
                        }
                    }
                ]
            }
        },
        {
            title: "Museum",
            id: "museum",
            pos: {
                lng: 12.090880572795868,
                lat: 51.96911337490888
            },
            link: "/museum",
            color: "teal",
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
                                        12.091033458709717,
                                        51.969121637267676
                                    ],
                                    [
                                        12.090896666049957,
                                        51.969106765020776
                                    ],
                                    [
                                        12.090910077095032,
                                        51.96906545319789
                                    ],
                                    [
                                        12.091049551963806,
                                        51.96908032545853
                                    ],
                                    [
                                        12.091033458709717,
                                        51.969121637267676
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
            location.href = event.properties.link;
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
        }, building);
    }
}
initMap(document.getElementById('map'));