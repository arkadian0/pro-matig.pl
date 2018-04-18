
        src="https://maps.googleapis.com/maps/api/js?sensor=false">
	    var map;
        var lat=52.173931692568;
        var lng=18.8525390625;
        var zoom=6;
 
        function initialize() {
            var myOptions = {
                zoom: zoom,
                center: new google.maps.LatLng(lat, lng),
                mapTypeId: google.maps.MapTypeId.ROADMAP
            };
            map = new google.maps.Map(document.getElementById('moja-mapa'), myOptions);
        }
 
        google.maps.event.addDomListener(window, 'load', initialize);