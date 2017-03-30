var map;
var latlngbounds = new google.maps.LatLngBounds();
var distance = document.getElementById("journey");


function getUserPosition()
{
	function itWorks(position) 
	{
		var latitude = position.coords.latitude;
		var longitude = position.coords.longitude;
     	console.log('latitude: '+latitude);
     	console.log('longitude: '+longitude);
		var userLatLng = new google.maps.LatLng({lat: latitude, lng: longitude});
		showMap(userLatLng);
		addMarker(userLatLng,"You");
		var latLng = new google.maps.LatLng({lat: 53.642867, lng: -1.784435});
		addMarker(latLng,"Bar Maroc");
		var distance = google.maps.geometry.spherical.computeDistanceBetween(userLatLng,latLng);
		document.getElementById("journey").innerHTML =(distance/1000+" km from Bar Maroc");
 	}

 	function itDoesntWork(error) 
 	{
      	console.log('There is an error '+error);
 	}
    navigator.geolocation.getCurrentPosition(itWorks, itDoesntWork);
}

function init(){
	getUserPosition()
}

window.addEventListener("load",init,false);

function showMap(latLng){
    map = new google.maps.Map(document.getElementById('map'), 
        {
          center: latLng,
          mapTypeId: google.maps.MapTypeId.MAP,
          zoom: 15,
		  zoomControl: true,
		  streetViewControl: true,
          streetViewControlOptions: {
              position: google.maps.ControlPosition.LEFT_TOP
          },
		  fullscreenControl: true
           });
}

function addMarker(latLng, label){
    var marker = new google.maps.Marker({
            position: latLng,
            map: map,
            label:label
          });
    latlngbounds.extend(latLng);
    map.setCenter(latlngbounds.getCenter());
    map.fitBounds(latlngbounds);
}