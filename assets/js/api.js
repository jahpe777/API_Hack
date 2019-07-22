//click event for submit
function citySubmit() {
    $(".submit").click(function(event) {
        event.preventDefault();
        $(".tempModal").css("display","flex");
    });
    $(".close").click(function(event) {
        event.preventDefault();
        $(".tempModal").css("display","none");
    });
}

//click event for markers
function latLngSubmit(marker) {
    google.maps.event.addListener(marker, "click", function(event) { 
        $(".tempModal").css("display", "flex");
        handleSubmit();
    });
    $(".close").click(function(event) {
        event.preventDefault();
        $(".tempModal").css("display","none");
    });
}


//click event for pins
//add listener
function pinClick(marker) { 
    console.log("clicked")
    google.maps.event.addListener(marker, "click", function(event) { // this needs the marker to listen
        var latitude = event.latLng.lat();
        var longitude = event.latLng.lng();
        console.log( latitude + ", " + longitude );
    }); //end addListener
}


citySubmit();


//handle the search term and get the lat, lng
function handleSubmit() {
    fetch(`https://app.climate.azavea.com/api/climate-data/${cities[0].geometry.coordinates[1]}/${cities[0].geometry.coordinates[0]}/RCP85?dataset=LOCA`, { headers: { Authorization: "token 8428d0e3ca7a3f5862681ad13cb428d7e6f77a9d"}})  
    .then(function(response) {
        return response.json();
      })
      .then(function(data) {
        console.log(cities[0].properties.name);
        })
      };

/*function displayResults(responseJson) {
    console.log(responseJson);
    $("#js-results-list").empty();
      $("#js-results-list").append(
        <h3>${responseJson.data.tasmax}</h3>
      )}; 

      /*


//kelvin to fahrenheit
const kelvin = prompt("What is the Kelvin temperature today?");
const celsius = kelvin -273;

let fahrenheit = Math.floor(celsius * (9/5) + 32);
console.log(`The temperature is ${fahrenheit} degrees fahrenheit.`);*/


function initMap() {
    var coordinates = {lat: cities[0].geometry.coordinates[1], lng: cities[0].geometry.coordinates[0]};
    var map = new google.maps.Map(
        document.getElementById("map"), {zoom: 3, center: coordinates});
    for (let city of cities) {
        console.log(city)
        var marker = new google.maps.Marker({position: {
                                                lat: city.geometry.coordinates[1], 
                                                lng: city.geometry.coordinates[0]}, 
                                                map: map
                                            });
        pinClick(marker); // pass each marker to the pin click function to set the listener
        latLngSubmit(marker);                                     
    }
    
  var marker = new google.maps.Marker({position: coordinates, map: map});
  };


    fetch(`https://app.climate.azavea.com/api/climate-data/${cities[0].geometry.coordinates[1]}/${cities[0].geometry.coordinates[0]}/RCP85?dataset=LOCA`, { headers: { Authorization: "token 8428d0e3ca7a3f5862681ad13cb428d7e6f77a9d"}})  
    .then(function(response) {
        return response.json();
      })
      .then(function(data) {
        console.log(data);
      });