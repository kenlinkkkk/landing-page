$(document).ready(function () {
	$(window).on('hashchange', function(e){
		history.replaceState("", document.title, e.originalEvent.oldURL);
	});

	$(window).scroll(function(e) {
		if ($(this).scrollTop()) {
			$("#header nav").addClass("background-gradient-custom");
		} else {
			$("#header nav").removeClass("background-gradient-custom");
		}
	});
});
