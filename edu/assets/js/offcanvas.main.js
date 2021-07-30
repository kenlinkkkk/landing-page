(function($) {
	if (jQuery('#open-button2').length) {
	var bodyEl = document.body,
		offwrapcon = document.querySelector( '.offwrap' ),
		closebtn = document.getElementById( 'close-button2' ),
		isOpen = false;

	function init() {
		initEvents();
	}

	function initEvents($) {
		
		openbtn = document.getElementById( 'open-button2' );
		openbtn.addEventListener( 'click', toggleMenu );
		
		if( closebtn ) {
			closebtn.addEventListener( 'click', toggleMenu );
		}

		// close the menu element if the target it´s not the menu element or one of its descendants..
		offwrapcon.addEventListener( 'click', function(ev) {
			var target = ev.target;
			if( isOpen && target !== openbtn ) {
				toggleMenu();
			}
		} );
	}

	function toggleMenu($) {
		if( isOpen ) {
			classie.remove( bodyEl, 'show-offcan' );
		}
		else {
			classie.add( bodyEl, 'show-offcan' );
		}
		isOpen = !isOpen;
	}

	init();
}
})();