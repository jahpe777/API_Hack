function citySubmit() {
    $(".submit").click(function(event) {
        event.preventDefault();
        $(".jamesModal").css("display","flex");
    });
    $(".close").click(function(event) {
        event.preventDefault();
        $(".jamesModal").css("display","none");
    });
}

/*function project() {
    $(".project").click(function(event) {
        location.href = 'https://jahpe777.github.io/Quiz_App/';
    });
}*/

citySubmit();
project();

// Initialize and add the map
function initMap() {
    // The location of Uluru
    var uluru = {lat: -25.344, lng: 131.036};
    // The map, centered at Uluru
    var map = new google.maps.Map(
        document.getElementById('map'), {zoom: 4, center: uluru});
    // The marker, positioned at Uluru
    var marker = new google.maps.Marker({position: uluru, map: map});
  }

/*var map;

  	function initMap() {

        map = new google.maps.Map(document.getElementById('map'), {
          	center: {lat: 45.52 , lng: -122.681944},
         	zoom: 15,
         	zoomControl: true,
    		zoomControlOptions: {
        		position: google.maps.ControlPosition.LEFT_CENTER
    		},
        });
	}

$(document).ready(function(){

	function getLocation(){
		return $('#city').val() + ',' + $('#state').val();
	}

	function getShows(item){
	
		// the parameters we need to pass in our request to Bandsintown's API
		var request = { 
			location: getLocation(),
			app_id: 'supp',
			api_version: '2.0',
			order: 'asc',
			sort: 'datetime',
			limit: 75
		};
		
		 return $.ajax({
			url: "https://api.bandsintown.com/events/search",
			data: request,
			dataType: "jsonp",
			type: "GET"
		}).fail(function(jqXHR, error){ debugger; //this waits for the ajax to return with an error promise object
			nothingToShow();
		});
	};

	function nothingToShow(){
		console.log('failure');
		$('.fail-screen').show();
		$('.content').on('click', '.fail-screen', function(){
			$('#city').val('');
			$('#state').val(''); 
			$(this).hide('fast');
			$('.loading-screen').hide();
			$('.landing').show('fast');
		});
	}

	function compileListings(shows) {

		var listingHTML = '';

		for (var i = 0; i < shows.length; i ++){
			listingHTML += "<li><div class='listing' data-id='" + shows[i].id + "' data-lat='" + shows[i].venue.latitude + "' data-lng='" + shows[i].venue.longitude + "'>";
			if (shows[i].artists.length) {
				listingHTML += "<h3 class='listing-title'>" + shows[i].artists[0].name + " @ " + shows[i].venue.name + "</h3>";
			} else {
				listingHTML += "<h3 class='listing-title'>" + shows[i].venue.name + "</h3>";
			}
			listingHTML += "<h4 class='listing-subheading'>" + moment(shows[i].datetime).format( 'MMM DD, YYYY h:mm a' ) + "</h4>";
			listingHTML += "<div class='otherInfo' id='other" + shows[i].id + "'><h4 class='listing-subheading'><a href='" + shows[i].url + "'>Event Page</a></h4><h4 class='listing-subheading'><a href='" + shows[i].ticket_url + "'>Get Tickets</a></h4></div></div></li>";
		}

		document.getElementById('listings').innerHTML += listingHTML;
	}

	function mapShows(shows) {
	    var bounds = new google.maps.LatLngBounds();

		for (i = 0; i < shows.length; i++) {  

			position = new google.maps.LatLng(shows[i].venue.latitude, shows[i].venue.longitude);
		    marker = new google.maps.Marker({
		        position: position,
		        map: map
		    });

		    bounds.extend(position)
		   	google.maps.event.addListener(marker, 'click', (function(marker, i) {
		       	return function() {
	        		infowindow.setContent('<h3>' + shows[i].artists[0].name + '</h3><h4>' + shows[i].venue.name + '</h4><h4>' + moment(shows[i].datetime).format( "MMM DD, YYYY h:mm a" ) + '</h4>');
		        	infowindow.open(map, marker);
		        }
		    	})(marker, i));
		    }
		map.fitBounds(bounds);

		var infowindow = new google.maps.InfoWindow();

		var marker, i;
	}

	$('.location').on('click', '.submit', function(e){
		e.preventDefault();
		$('.landing').hide('fast');
		$('.loading-screen').show('fast');
		getShows().done(function(results){ //this waits for the ajax to return with a succesful promise object
		 	if (results.errors) {
				nothingToShow(); 
			} else {
				compileListings(results);
				mapShows(results);
				$('.supp-overlay').show('fast');
				$('.loading-screen').hide('fast');
				$('.show-listings').show('fast');
			}
		})
	});

	$('.show-listings').on('click', '.listing', function(){
		$(this).find('.otherInfo').toggle('fast');
		var thisLat = $(this).data('lat');
		var thisLng = $(this).data('lng'); 
		map.setZoom(16);
		map.panTo(new google.maps.LatLng(thisLat, thisLng));
	});
});*/