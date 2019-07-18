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

/*function project() {
    $(".project").click(function(event) {
        location.href = 'https://jahpe777.github.io/Quiz_App/';
    });
}*/

citySubmit();
project();

function initMap() {
    var uluru = {lat: -25.344, lng: 131.036};
    var map = new google.maps.Map(
        document.getElementById('map'), {zoom: 4, center: uluru});
    var marker = new google.maps.Marker({position: uluru, map: map});
  };