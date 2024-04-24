(function($){
'use strict'
/*
Template Name : Bizmax
---------------------------------------------------
Table of content:
---------------------------------------------------

1. Preloader
*/

/*--------------------------------------------------
script initialization
-----------------------------------------------------
*/
// $.exists = function (selector) {
//     return $(selector).length > 0
// }

$(window).on('load', function () {
    preloader()
})

$(function(){
mainNav()
stickyHeader()
dynamicBackground()
})



/*------------------------------------------------
1.preloader
--------------------------------------------------*/
function preloader(){
    $('.cs_preloader_in').fadeOut()
    $('.cs_preloader').delay(5550).fadeOut('slow')
    // console.log('hello');
}

/*--------------------------------------------------
2. menu
----------------------------------------------------*/
function mainNav(){

    // search toggle
    $('.cs_header_search_btn').on('click', function(){
        $(this).parents('.cs_header_search_wrap').toggleClass('active')
    })
}
/*--------------------------------------------------
2. sticky header
----------------------------------------------------*/
function stickyHeader () {
    let $window = $(window)
    let lastScrollTop = 0
    let $header = $('.cs_sticky_header') 
    let $headerHeight = $header.outerHeight() + 30;
    
    $window.scroll(function () {
        console.log('headerHeight '+ $headerHeight);
        console.log('before' + lastScrollTop);
        let windowTop = $window.scrollTop();
        console.log(' windoTop',windowTop);
        // console.log("after" + lastScrollTop);

        if(windowTop >= $headerHeight){
            $header.addClass('cs_gescout_header')
        }else{
            $header.removeClass('cs_gescout_header')
            $header.removeClass('cs_gescout_show')
        }
        
        if ($header.hasClass('cs_gescout_header')) {
            console.log('lastScrollTop' + lastScrollTop);
            if (windowTop < lastScrollTop) {
                console.log('lastScrollTop' + lastScrollTop);
              $header.addClass('cs_gescout_show');
            } else {
              $header.removeClass('cs_gescout_show');
            }
          }
       

        lastScrollTop = windowTop
    })

}

/*--------------------------------------------------
2. dynamic Background
----------------------------------------------------*/
function dynamicBackground () {
    $('[data-src]').each(function(){
        let src = $(this).attr('data-src')
        console.log(src);
        $(this).css({
            'background-image': `url('${src}')`
        })
    })
}

})(jQuery)