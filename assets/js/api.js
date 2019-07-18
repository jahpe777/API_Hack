function james() {
    $(".name").click(function(event) {
        event.preventDefault();
        $(".jamesModal").css("display","flex");
    });
    $(".close").click(function(event) {
        event.preventDefault();
        $(".jamesModal").css("display","none");
    });
}

function project() {
    $(".project").click(function(event) {
        location.href = 'https://jahpe777.github.io/Quiz_App/';
    });
}

james();
project();