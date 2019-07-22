//click event for submit
function citySubmit() {
    $(".submit").click(function (event) {
        event.preventDefault();
        $(".tempModal").css("display", "flex");
    });
    $(".close").click(function (event) {
        event.preventDefault();
        $(".tempModal").css("display", "none");
    });
}

//click event for markers
function latLngSubmit(marker) {
    google.maps.event.addListener(marker, "click", function (event) {
        var latitude = event.latLng.lat();
        var longitude = event.latLng.lng();
        console.log(latitude)
        console.log(longitude)
        $('.tempTextContainer').empty()
        $(".loader-container").show()
        $(".tempModal").css("display", "flex");
        handleSubmit(latitude, longitude);
    });
    $(".close").click(function (event) {
        event.preventDefault();
        $(".tempModal").css("display", "none");
    });
}


//click event for pins
/*add listener
function pinClick(marker) { 
  //  console.log("clicked")
    google.maps.event.addListener(marker, "click", function(event) { // this needs the marker to listen
        var latitude = event.latLng.lat();
        var longitude = event.latLng.lng();
    //    console.log( latitude + ", " + longitude );
    }); //end addListener
}*/


citySubmit();


//handle the search term and get the lat, lng
function handleSubmit(lat, lng) {
    console.log('handling submit')
    fetch(`https://app.climate.azavea.com/api/climate-data/${lat}/${lng}/RCP85?dataset=LOCA&years=2010,2020,2030,2040,2050:2055`, {
            headers: {
                Authorization: "token 8428d0e3ca7a3f5862681ad13cb428d7e6f77a9d"
            }
        })
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            $(".loader-container").hide()
            displayData(data)
        })
        .catch(error => {
            console.log(error)
            alert('error fetching results')
        })
}

function getCurrentDay() {
    let now = new Date();
    let start = new Date(now.getFullYear(), 0, 0);
    let diff = (now - start) + ((start.getTimezoneOffset() - now.getTimezoneOffset()) * 60 * 1000);
    let oneDay = 1000 * 60 * 60 * 24;
    let day = Math.floor(diff / oneDay);
    return day
}

function displayData(data) {
    let day = getCurrentDay()
    let temp = data.data['2055'].tasmax[day-1]
    $('.tempTextContainer').append(`
        <h1>${temp}</h1>
    `)
}


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
    var coordinates = {
        lat: cities[0].geometry.coordinates[1],
        lng: cities[0].geometry.coordinates[0]
    };
    var map = new google.maps.Map(
        document.getElementById("map"), {
            zoom: 3,
            center: coordinates
        });
    for (let city of cities) {
        //   console.log(city)
        var marker = new google.maps.Marker({
            position: {
                lat: city.geometry.coordinates[1],
                lng: city.geometry.coordinates[0]
            },
            map: map
        });
        //  pinClick(marker); // pass each marker to the pin click function to set the listener
        latLngSubmit(marker);
    }

    var marker = new google.maps.Marker({
        position: coordinates,
        map: map
    });
};


fetch(`https://app.climate.azavea.com/api/climate-data/${cities[0].geometry.coordinates[1]}/${cities[0].geometry.coordinates[0]}/RCP85?dataset=LOCA`, {
        headers: {
            Authorization: "token 8428d0e3ca7a3f5862681ad13cb428d7e6f77a9d"
        }
    })
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);
    });