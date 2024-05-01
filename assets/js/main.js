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
$.exists = function (selector) {
    return $(selector).length > 0;
  };

$(window).on('load', function () {
    preloader()
})

$(function(){
mainNav()
stickyHeader()
dynamicBackground()
paralaxSwiperSLider()

if ($.exists('.wow')) {
    new WOW().init();
  }
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
3. sticky header
----------------------------------------------------*/
function stickyHeader () {
    let $window = $(window)
    let lastScrollTop = 0
    let $header = $('.cs_sticky_header') 
    let $headerHeight = $header.outerHeight() + 30;
    
    $window.scroll(function () {
        // console.log('headerHeight '+ $headerHeight);
        // console.log('before' + lastScrollTop);
        let windowTop = $window.scrollTop();
        // console.log(' windoTop',windowTop);
        // console.log("after" + lastScrollTop);

        if(windowTop >= $headerHeight){
            $header.addClass('cs_gescout_header')
        }else{
            $header.removeClass('cs_gescout_header')
            $header.removeClass('cs_gescout_show')
        }
        
        if ($header.hasClass('cs_gescout_header')) {
            // console.log('lastScrollTop' + lastScrollTop);
            if (windowTop < lastScrollTop) {
                // console.log('lastScrollTop' + lastScrollTop);
              $header.addClass('cs_gescout_show');
            } else {
              $header.removeClass('cs_gescout_show');
            }
          }
       

        lastScrollTop = windowTop
    })

}

/*--------------------------------------------------
4. dynamic Background
----------------------------------------------------*/
function dynamicBackground () {
    $('[data-src]').each(function(){
        let src = $(this).attr('data-src')
        // console.log(src);
        $(this).css({
            'background-image': `url('${src}')`
        })
    })
}

/*--------------------------------------------------
5. slick slider
----------------------------------------------------*/

function slickInit() {
    $('.responsive').slick({
        dots: true,
        infinite: false,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ]
      });
}
/*--------------------------------------------------
5. swiper slider
----------------------------------------------------*/

function paralaxSwiperSLider(){
    var swiper = new Swiper(".mySwiper", {
        loop: true,
        speed: 1000,
        navigation: {
          nextEl: ".cs_swiper_button_next",
          prevEl: ".cs_swiper_button_prev",
        },
    })
   
}


})(jQuery)