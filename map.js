function initMap() {
    var center = {
        lat: 51.968522,
        lng: 12.091052
    };

    var buildings = [
        {
            title: "N-Gebäude",
            pos: {
                lat: 51.968522,
                lng: 12.091052
            },
            description: '<h1 id="firstHeading" class="firstHeading">N-Gebäude</h1>' +
            '<div id="bodyContent"><p>Text....</p></div>'
        }
    ];

    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 20,
        mapTypeId: 'satellite',
        center: center
    });

    for (var i = 0; i < buildings.length; i++) {
        var building = buildings[i];
        var info = new google.maps.InfoWindow({
            content: building.description
        });
        var marker = new google.maps.Marker({
            position: building.pos,
            title: building.title,
            map: map
        });
        marker.addListener('click', function () {
            info.open(map, marker);
        });
    }
}