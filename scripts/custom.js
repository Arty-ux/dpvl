"use strict";

(function($) {
    // console.log('noss');

    $(document).ready(function() {
        // $('.sidebar-collapse').on('mouseenter', function(e){
        // 	console.log('in', e.currentTarget);
        // 	$(e.currentTarget).parents('.level-1').eq(0).addClass('bg-info');

        // }).on('mouseout', function(e){
        // 	console.log('out',e.currentTarget);
        // 	$(e.currentTarget).parents('.level-1').eq(0).removeClass('bg-info');
        // });

        $('#scrollspy').on('activate.bs.scrollspy', function(e) {
            // console.log('spy', e);
        });

        // Offset for Main Navigation
        $('#nav').affix({
            offset: {
                top: 200
            }
        })
    });
})(jQuery);
