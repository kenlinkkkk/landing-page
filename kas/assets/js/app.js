$(document).ready(function () {
	if (navigator.userAgent.indexOf("Android") !== -1) {
		$('#mobile').css('display', 'block');
	} else if (navigator.userAgent.indexOf("like Mac") !== -1) {
		$('#ios').css('display', 'block');
	} else {
		$('#pc').css('display', 'block');
	}

	$(window).on('hashchange', function(e){
		history.replaceState("", document.title, e.originalEvent.oldURL);
	});
});
