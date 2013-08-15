jQuery(document).ready(function($) {
    $("#container").clickCarousel({
          margin : 5,
          looped : true
        }
    );
    $(function() {
        $(".js__p_start, .js__p_another_start").simplePopup();
    });
	
	if (window.PIE) {
		$('.circle, .reference').each(function() {
            PIE.attach(this);
        });
	}
	
});