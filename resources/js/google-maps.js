/* @begin GOOGLE MAPS API */
function initialize() {
    'use strict';

    var mapOptions = {
            zoom: 15,
            center: new google.maps.LatLng(-23.571608, -46.641344),
            disableDefaultUI: true
        },
        map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions),
        myLatLng = new google.maps.LatLng(-23.571608, -46.641344),
        marker = new google.maps.Marker({
            position: myLatLng,
            map: map,
            //icon: image,
            title: 'Foster Agência Digital'
        });
    //var image = 'images/google-maps-pin.png';
}
google.maps.event.addDomListener(window, 'load', initialize);
/* @end GOOGLE MAPS API */
