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


})(jQuery)