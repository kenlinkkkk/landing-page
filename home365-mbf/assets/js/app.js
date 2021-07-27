$(document).ready(function () {
    $(window).on('hashchange', function(e){
        history.replaceState("", document.title, e.originalEvent.oldURL);
    });

    $(window).scroll(function(e) {
        if ($(this).scrollTop()) {
            $("header nav").addClass("fixed-top");
            $("header nav").addClass("bg-white");
        } else {
            $("header nav").removeClass("fixed-top");
            $("header nav").removeClass("bg-white");
        }
    });
});