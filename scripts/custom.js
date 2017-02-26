(function($) {
    "use strict";

    // Offset for Main Navigation
    $('#nav').affix({
        offset: {
            top: 200
        }
    });

    $(".carousel").swipe({
        swipe: function(event, direction, distance, duration, fingerCount, fingerData) {
            if (direction == 'left') $(this).carousel('next');
            if (direction == 'right') $(this).carousel('prev');
        },
        allowPageScroll: "vertical"
    });

    $('.nav-item a').on('click', function(){
        if ($('.navbar-toggle').is(':visible')){
            $('.navbar-toggle').trigger('click');
        }
    });
    
    $('a').each(function() {
        var $a = $(this);
        var link = $a.attr('href');

        if (!link || link.indexOf('#') === 0) {
            return;
        }
        if (link.indexOf('http') === 0 && link.indexOf('//pedalones.com') === -1) {
            $a.attr('target', '_blank');
        }
    });

})(jQuery);
