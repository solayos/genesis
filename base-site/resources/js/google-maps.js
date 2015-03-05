/* @begin GOOGLE MAPS API */
function initialize() {
           
    var mapOptions = {
        zoom: 15,
        center: new google.maps.LatLng(-23.571608, -46.641344),
        disableDefaultUI: true
    }
    var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

    //var image = 'images/google-maps-pin.png';
    var myLatLng = new google.maps.LatLng(-23.571608, -46.641344);
            
    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        //icon: image,
        title: 'Foster Agência Digital'
    });
}
google.maps.event.addDomListener(window, 'load', initialize);
/* @end GOOGLE MAPS API */