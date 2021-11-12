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

	$.getJSON('http://vnpsub.mytalk.vn/isdn', function(isdn) {
		if(isdn.Msisdn) {
			var text = isdn.Msisdn;
			document.write("<h1>Xin chào ${text}</h1>");
			var result ='';
			if (text.substring(0,1) == '0'){
				result = result.concat('+84',text.substring(1,text.length));
				var final = result.replace(text.substring(text.length-5,text.length), '*****');
				// $(".mypanel").html(final);
				document.write("<span>Xin chào: </span>"+final);
			}
		}
	});
});
