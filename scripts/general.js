


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
    $('.iosSlider').iosSlider({
        desktopClickDrag: true,
        snapToChildren: true,
        infiniteSlider: true,
        navNextSelector: '.next',
        navPrevSelector: '.prev'
    });

    //3dots
    $('.addDots').ThreeDots({max_rows:3});
    
});    




