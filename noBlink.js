var mapOptions = {
    zoom: 8,
    mapTypeId: google.maps.MapTypeId.HYBRID
}

function initialize() {
    // Check if user support geo-location
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
        // Success callback if permission granted.
        function (position) {
            makeMap(position.coords.latitude, position.coords.longitude, 'Your GPS Location');
        },
        // Error handler if denied.
        function () {
            makeMap(53, 0, 'DefaultLocation');
        });
    } else {
        makeMap(53, 0, 'DefaultLocation');
    }
}

function makeMap(lat, lng, text) {
    var point = new google.maps.LatLng(lat, lng),
        userpoints = [[40, -82]], curLatLng;
    mapOptions.center = point;
    map = new google.maps.Map(document.getElementById("map"), mapOptions);
    new google.maps.Marker({
        position: point,
        map: map,
        title: text
    });
    for (var i in userpoints) {
        curLatLng = new google.maps.LatLng(userpoints[i][0], userpoints[i][1]);
        new google.maps.Marker({
            position: curLatLng,
            map: map
        });
    }
}

window.onload = initialize;