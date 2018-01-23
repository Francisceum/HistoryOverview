function initMap() {
    /*
    var buildings = {
        nBuilding: {
            pos: {lat: 51.968522, lng: 12.091052},
            descriptionFile: "desc/nBuilding.html"
        }
    };
    */
    // TODO: alle Objekte in buildings als Marker zur Map hinzufügen
    // TODO: für jedes Objekt in buildings per Ajax die Beschreibung laden

    var nBuilding = {lat: 51.968522, lng: 12.091052};
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 20,
        mapTypeId: 'satellite',
        center: nBuilding
    });

    var contentString = '<div id="content">'+
        '<div id="siteNotice">'+
        '</div>'+
        '<h1 id="firstHeading" class="firstHeading">N-Gebäude</h1>'+
        '<div id="bodyContent">'+
        '<p>Text....</p>'+
        '</div>'+
        '</div>';

    var infowindow = new google.maps.InfoWindow({
        content: contentString
    });

    var marker = new google.maps.Marker({
        position: nBuilding,
        map: map,
        title: 'Francisceum Zerbst'
    });
    marker.addListener('click', function() {
        infowindow.open(map, marker);
    });
}