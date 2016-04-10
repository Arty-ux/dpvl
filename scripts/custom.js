"use strict";

(function($) {
    $(document).ready(function() {

        // Offset for Main Navigation
        $('#nav').affix({
            offset: {
                top: 200
            }
        });

        $('a').each(function(){
        	var $a = $(this);
        	var link = $a.attr('href');

        	if (!link || link.indexOf('#') === 0) {
        		return;
        	}
        	if ( link.indexOf('http') === 0 && link.indexOf('//dpavelescu.com') === -1 ) {
        		$a.attr('target','_blank');
        	}
        });
    });
})(jQuery);
