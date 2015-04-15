

var gMap = document.querySelector('google-map');
gMap.addEventListener('api-load', function(e) {
  document.querySelector('google-map-directions').map = this.map;
});


var start1 = getElementById("inputs").start;
 var geocoder =  new google.maps.Geocoder();
    geocoder.geocode( { 'address': start1}, function(results, status)
    {
          if (status == google.maps.GeocoderStatus.OK)
          {
            ala1=geometry.location.lat();
            alo1=geometry.location.lng();
          }
    });
