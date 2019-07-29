let cityName = "";

//function for submit
function citySubmit() {
        let cityState = $(".city").val()
        let city = cityState.split(',')[0]
        let state = cityState.split(',')[1]

        if (!city || !state) {
            alert('Check city and state formatting')
            return
        }
        cityName = cityState;
        $('.tempTextContainer').empty()
        $(".loader-container").show()
        $(".tempModal").css("display", "flex");
       
        city = city.replace(/\s/g,'').toLowerCase()
        state = state.replace(/\s/g,'').toLowerCase()
        
        let found;

        for (let key in cities) {
            let tempData = cities[key].properties
            let cleanedCity = tempData.name.replace(/\s/g,'').toLowerCase()
            let cleanedState = tempData.admin.replace(/\s/g,'').toLowerCase()

            if (cleanedCity === city && cleanedState === state) {
                found = cities[key]
                break
            }
         }

         if (!found) {
            alert("Couldn't find city")
            $(".loader-container").hide()
            $(".tempModal").hide()
            return
         }

         handleSubmitCity(found.id);
    };
    $(".close").click(function (event) {
        event.preventDefault();
        $(".tempModal").css("display", "none");
    });


//run submit via click
$(".submit").click(function (event) {
    event.preventDefault();
    citySubmit();  
});

//run submit via keypress
$(".city").keypress(function (event) {
    if (event.keyCode == 13) {
        event.preventDefault();
        citySubmit();  
    }
});


//click event for markers
function latLngSubmit(marker) {
    google.maps.event.addListener(marker, "click", function (event) {
        let latitude = event.latLng.lat();
        let longitude = event.latLng.lng();
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

//handle the search term 
function handleSubmitCity (city) {
    fetch(`https://app.climate.azavea.com/api/climate-data/${encodeURIComponent(city)}/RCP85?dataset=LOCA&years=2019,2020,2030,2040,2050,2060,2070,2080,2090,2100`, {
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


//handle the lat, lng
function handleSubmit(lat, lng) {
    fetch(`https://app.climate.azavea.com/api/climate-data/${lat}/${lng}/RCP85?dataset=LOCA&years=2019,2020,2030,2040,2050,2060,2070,2080,2090,2100`, {
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
            alert('error fetching results')
        })
}

//for getting the current day temperature information for all years
function getCurrentDay() {
    let now = new Date();
    let start = new Date(now.getFullYear(), 0, 0);
    let diff = (now - start) + ((start.getTimezoneOffset() - now.getTimezoneOffset()) * 60 * 1000);
    let oneDay = 1000 * 60 * 60 * 24;
    let day = Math.floor(diff / oneDay);
    return day
}    

//display the temperature results in the modal
function displayData(data) {
    let day = getCurrentDay()
    let htmlString = `<p>${cityName}</p>`
    let keys = Object.keys(data.data)
    for (let key of keys) {
        htmlString += `<p>Temperature for ${key} | ${conversion(data.data[key].tasmax[day-1])}°F</p>`
    }
    $(".tempTextContainer").append(htmlString);
};


//kelvin to fahrenheit conversion
function conversion(kelvin) {
    const celsius = kelvin -273;
    let fahrenheit = Math.floor(celsius * (9/5) + 32);
    return fahrenheit
};

//for the google map
function initMap() {
    let coordinates = {
        lat: cities[0].geometry.coordinates[1],
        lng: cities[0].geometry.coordinates[0]
    };
    let map = new google.maps.Map(
        document.getElementById("map"), {
            zoom: 4.2,
            center: {lat: 39, lng: -96}
        });
    for (let city of cities) {
        let marker = new google.maps.Marker({
            position: {
                lat: city.geometry.coordinates[1],
                lng: city.geometry.coordinates[0]
            },
            map: map
        });
        latLngSubmit(marker);
    }

    //for markers on map
    let marker = new google.maps.Marker({
        position: coordinates,
        map: map
    });
};

//initial fetch request
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