


jQuery(document).ready(function(){


    /*animate menu*/
    jQuery('ul.main-nav > li').hover(function(){
        jQuery(this).find('ul').stop(true,true).fadeIn(600);

    },
      function () {
        jQuery(this).find('ul').stop(true,true).fadeOut(600);
      });

    $(".selectStyle").fakeSelect({
        default_index: 0
    });

    
    /* some custom settings */
    $('.iosSliderSmal').iosSlider({
        desktopClickDrag: true,
        snapToChildren: true,
        infiniteSlider: true,
        navNextSelector: '.nextSm',
        navPrevSelector: '.prevSm'
    });
    $('.iosSlider').iosSlider({
        desktopClickDrag: true,
        snapToChildren: true,
        infiniteSlider: true,
        navNextSelector: '.next',
        navPrevSelector: '.prev'
    });

    //3dots
    $('.addDots_9row').ThreeDots({max_rows:9});
    $('.addDots_4row').ThreeDots({max_rows:4});
    $('.addDots_3row').ThreeDots({max_rows:3});
    $('.addDots_5row').ThreeDots({max_rows:5});

    //tooltip
    $("a.read-more").hover(function () {
        $(this).append('<span class="tooltip">You can read this full recommendation in my profile on Linkedin <br/> (Don&#8217;t forget that to view profile you should be authorized) </span>');
      }, function () {
        $("span.tooltip").remove();
      });

    // hide #back-top first
    $("#back-top").hide();
    
    // fade in #back-top
    $(function () {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 100) {
                $('#back-top').fadeIn();
            } else {
                $('#back-top').fadeOut();
            }
        });

        // scroll body to 0px on click
        $('#back-top a').click(function () {
            $('body,html').animate({
                scrollTop: 0
            }, 800);
            return false;
        });
    });

    $('#ei-slider').eislideshow({
        easing      : 'easeOutExpo',
        titleeasing : 'easeOutExpo',
        titlespeed  : 1200,
        autoplay : 'true'
    });

    $('#tab-container').easytabs({
        animate : 'false',
        defaultTab : 'li#tab-2',
        transitionIn : 'slideDown'
    });


    //google map

    function initialize() {
        var map_canvas = document.getElementById('map_canvas');
        var map_options = {
          center: new google.maps.LatLng(50.442047, 30.626659),
          zoom: 12,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        }
        var map = new google.maps.Map(map_canvas, map_options)
        }
        google.maps.event.addDomListener(window, 'load', initialize);




});    




