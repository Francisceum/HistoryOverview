function initMap() {
    var clicked = -1;
    var center = {
        lat: 51.9689129,
        lng: 12.0910298
    };

    var buildings = [
        {
            title: "N-Gebäude",
            id: "ngeb",
            pos: {
                lat: 51.968522,
                lng: 12.091052
            },
            description: '<div class="list-group">' +
            '<h1 id="firstHeading" class="firstHeading list-group-item list-group-item-active">N-Gebäude</h1>' +
            '<p class="list-group-item">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>' +
            '<a href="seite.html" class="read-more list-group-item">Mehr lesen</a> </div></div>',
            geoJson: {
                "type": "FeatureCollection",
                "features": [
                    {
                        "type": "Feature",
                        "properties": {
                            "color": "blue",
                            "stroke-width": 2,
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
        }
    ];

    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 19,
        mapTypeId: 'satellite',
        center: center
    });

    for (var i = 0; i < buildings.length; i++) {
        var building = buildings[i];
        var info = new google.maps.InfoWindow({
            content: "<div class='maps-info-body' id='" + building.id + "'>" + building.description + "</div>"

        });
        var marker = new google.maps.Marker({
            position: building.pos,
            title: building.title,
            map: map
        });

        for (var j = 0; i < building.geoJson.features.length; i++) {
            building.geoJson.features[j].properties["id"] = i;
        }
        map.data.addGeoJson(building.geoJson);

        map.data.getCursor = function() {
            return "hand";
        };

        marker.setOpacity(0);

        console.log(info.getContent())//.parentNode.classList.add("google-info-window");

        marker.addListener('click', function () {
            $('#sidebar').html(building.description)
        });

        map.data.addListener('click', function(event) {
            clicked = event.feature.getProperty("id");
            $('#sidebar').html(buildings[event.feature.getProperty("id")].description)
        });

        map.data.addListener('mouseover', function(event){
            $('#sidebar').html(buildings[event.feature.getProperty("id")].description)
        });

        map.data.addListener('mouseout', function(event){
            if (clicked < 0){
                $('#sidebar').html('');
            }
        });

    }

    map.data.setStyle(function(feature) {
        var color = 'gray';
        if (feature.getProperty('color')) {
            color = feature.getProperty('color');
        }
        return /** @type {google.maps.Data.StyleOptions} */({
            fillColor: color,
            strokeColor: color,
            strokeWeight: 2
        });
    });

    map.data.addListener('mouseover', function(event) {
        map.data.revertStyle();
        map.data.overrideStyle(event.feature, {strokeWeight: 4});
    });

    map.data.addListener('mouseout', function(event) {
        map.data.revertStyle();
    });

}

$