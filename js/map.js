//AIzaSyAsuhYlNhHPTDC1su7suPkPMdgA6Rl07Fg

function initMap() {
	var uluru = {lat: -25.363, lng: 131.044};
	var map = new google.maps.Map(document.getElementById('map'), {
	  zoom: 4,
	  center: uluru
	});
	var marker = new google.maps.Marker({
	  position: uluru,
	  map: map
	});
	var position = {lat: -25.363, lng: 131.044};
	var map2 = new google.maps.Map(document.getElementById('map-mobile'), {
	  zoom: 4,
	  center: position
	});
	var marker2 = new google.maps.Marker({
	  position: position,
	  map: map2
	});
}

