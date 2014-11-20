(function($) {
    $.fn.bgshifter = function(options) {

        var settings = $.extend({
            'overlay_color' : '#000',
            'base_color' : '#000',
            'bg_class' : '',
            'speed' : 'fast',
            'wrapper_class' : ''
        }, options);
        
        return this.each(function() {
            var element$ = $(this),
                wrapper$,
                parent$ = element$.parent(),
                overlayBg$,
                baseBg,
                w = 0;

            if (! settings.base_color) {
                settings.base_color = element$.css('backgroundColor');
            }

            element$.css({
                backgroundColor:'transparent',
                position: 'relative',
                'z-index' : 5
            });

            w = parseInt(element$.width(), 10) +
                parseInt(element$.css('paddingLeft'), 10) +
                parseInt(element$.css('paddingRight'), 10);

            overlayBg$ = $('<div/>').addClass(settings.bg_class + ' overlay').css({
                position: 'absolute',
                backgroundColor: settings.overlay_color,
                top: '100%',
                height: '100%',
                width: w + 'px',
                'z-index': '2'
            });

            baseBg$ = $('<div/>').addClass(settings.bg_class).css({
                position: 'absolute',
                backgroundColor: settings.base_color,
                top: '0px',
                height: '100%',
                width: w + 'px',
                'z-index': 1
            });

            wrapper$ = $('<div/>')
                       .addClass(settings.wrapper_class)
                       .css({'position':'relative',
                            'overflow': 'hidden'
                       })
                       .append(element$.clone())
                       .append(overlayBg$)
                       .append(baseBg$);

            element$.replaceWith(wrapper$);

            wrapper$.on('mouseover', function(){
                $(this).children('.overlay').stop().animate({top: 0}, settings.speed);
            }).on('mouseout', function(){
                $(this).children('.overlay').stop().animate({top:'100%'}, settings.speed);
            }).css({'backgroundColor' : 'transparent'});
        });
    };
})(jQuery);
