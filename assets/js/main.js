(function ($) {
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

  $(function () {
    mainNav()
    stickyHeader()
    dynamicBackground()
    paralaxSwiperSLider()
    progressBar()
    counterInit()
    slickInit()
    review()

    if ($.exists('.wow')) {
      new WOW().init();
    }
  })



  /*------------------------------------------------
  1.preloader
  --------------------------------------------------*/
  function preloader() {
    $('.cs_preloader_in').fadeOut()
    $('.cs_preloader').delay(5550).fadeOut('slow')
    // console.log('hello');
  }

  /*--------------------------------------------------
  2. menu
  ----------------------------------------------------*/
  function mainNav() {

    // search toggle
    $('.cs_header_search_btn').on('click', function () {
      $(this).parents('.cs_header_search_wrap').toggleClass('active')
    })
  }
  /*--------------------------------------------------
  3. sticky header
  ----------------------------------------------------*/
  function stickyHeader() {
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

      if (windowTop >= $headerHeight) {
        $header.addClass('cs_gescout_header')
      } else {
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
  function dynamicBackground() {
    $('[data-src]').each(function () {
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
    if ($.exists('.cs_project_slider')) {
      $('.cs_project_slider').each(function () {
        // console.log('hello');
        let sliderActive = $(this).find('.cs_slider_activate')

        sliderActive.slick({
          slidesToShow: 4,
          infinite: true,
          slidesToScroll: 1,
          prevArrow: $(this).find('.cs_slider_prev'),
          nextArrow: $(this).find('.cs_slider_next'),
          responsive: [
            {
              breakpoint: 768,
              settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 3
              }
            },
            {
              breakpoint: 480,
              settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 1
              }
            }
          ]
        });
      })
    }
    if($.exists('.cs_testimonial_slider')){
      $('.cs_testimonial_slider').each(function(){
        let activeSlider = $(this).find('.cs_slider_activate')
        activeSlider.slick({
          slidesToShow: 3,
          autoplay: true,
          swipeToSlide: true,
          variableWidth: true,
          autoplaySpeed: 3000,
          infinite: true,
          slidesToScroll: 1,
          prevArrow: $(this).find('.cs_slider_button_prev'),
          nextArrow: $(this).find('.cs_slider_button_next'),
          responsive: [
            {
              breakpoint: 768,
              settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 3
              }
            },
            {
              breakpoint: 480,
              settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 1
              }
            }
          ]
        });
      })
    }
  }
  /*--------------------------------------------------
  5. swiper slider
  ----------------------------------------------------*/

  function paralaxSwiperSLider() {
    var swiper = new Swiper(".mySwiper", {
      loop: true,
      speed: 1000,
      navigation: {
        nextEl: ".cs_swiper_button_next",
        prevEl: ".cs_swiper_button_prev",
      },
    })

  }
  /*--------------------------------------------------
  6.   progress bar
  ---------------------------------------------------*/

  function progressBar() {
    $('.cs_progress').each(function () {
      let data = $(this).attr('data-progress')

      $(this).find('.cs_progress_in').css('width', data + '%')
    })
  }
  /*--------------------------------------------------
  6.   couter animation
  ---------------------------------------------------*/
  function counterInit() {
    if ($.exists('.odometer')) {

      $(window).on('scroll', function () {

        function winScrollPosition() {
          let scrollPos = $(window).scrollTop()
          let winHeight = $(window).height()
          let scrollPosition = Math.round(scrollPos + winHeight / 1.2)

          // console.log('scrollPosition', scrollPosition);
          return scrollPosition
        }

        $('.odometer').each(function () {
          let elementOffset = $(this).offset().top
          // console.log('offset', elementOffset);
          // console.log('scrollpos', winScrollPosition());
          if (elementOffset < winScrollPosition()) {
            $(this).html($(this).attr('data-count-to'))
          }
        })
      })



    }

  }


  
  /*--------------------------------------------------
  7.   review
  ---------------------------------------------------*/

  function review(){
    $('.cs_rating').each(function(){
      let review = $(this).attr('cs-rating')
      let reviewVal = review * 20 + '%';
      console.log(reviewVal);
      $(this).find('.cs_rating_percentage').css('width', reviewVal) 
    })
  }

})(jQuery)