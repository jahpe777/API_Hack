
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

function project() {
    $(".project").click(function(event) {
        location.href = 'https://jahpe777.github.io/Quiz_App/';
    });
}

citySubmit();
/*project();*/

function initMap() {
    var uluru = {lat: cities[0].geometry.coordinates[1], lng: cities[0].geometry.coordinates[0]};
    var map = new google.maps.Map(
        document.getElementById('map'), {zoom: 4, center: uluru});
    for (let city of cities) {
        //console.log(city)
        var marker = new google.maps.Marker({position: {
                                                lat: city.geometry.coordinates[1], 
                                                lng: city.geometry.coordinates[0]}, 
                                                map: map
                                            });
    }
  //var marker = new google.maps.Marker({position: uluru, map: map});
  };

  /*
  fetch(`https://app.climate.azavea.com/api/climate-data/${cities[0].geometry.coordinates[1]}/${cities[0].geometry.coordinates[0]}/RCP85?dataset=LOCA`, { headers: { Authorization: 'token 8428d0e3ca7a3f5862681ad13cb428d7e6f77a9d'}})  
    .then(function(response) {
        return response.json();
      })
      .then(function(myJson) {
        console.log(myJson);
      });

  */