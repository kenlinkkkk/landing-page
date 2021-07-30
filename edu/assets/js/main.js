/**
*
* --------------------------------------------------------------------
*
* Template : Firecamp - Education WordPress Theme
*
* --------------------------------------------------------------------
*
**/

(function($) {
    "use strict";
    // sticky menu
    var header = $('.menu-sticky');
    var win = $(window);
    var headerinnerHeight = $(".toolbar-area").innerHeight();

    win.on('scroll', function() {
        var scroll = win.scrollTop();
        if (scroll < headerinnerHeight) {
           header.removeClass("sticky");
        } else {
           header.addClass("sticky");
        }
    });

    $(".widget_nav_menu li a").filter(function(){
        return $.trim($(this).html()) == '';
    }).hide();
	
	$(function () {
        if ($('.learn-press-form-login').hasClass('learn-press-form')) {
            $('body').addClass('login-form-body');
        }
    });
    
    //Parallax
    if($('.paroller').length){
      $('.paroller').paroller({
          factor: 0.2,            // multiplier for scrolling speed and offset, +- values for direction control  
          factorLg: 0.4,          // multiplier for scrolling speed and offset if window width is less than 1200px, +- values for direction control  
          type: 'foreground',     // background, foreground  
          direction: 'horizontal' // vertical, horizontal  
      });
    }


    // collapse hidden
    $(function(){ 
        var navMain = $(".navbar-collapse"); // avoid dependency on #id
         // "a:not([data-toggle])" - to avoid issues caused
         // when you have dropdown inside navbar
         navMain.on("click", "a:not([data-toggle])", null, function () {
             navMain.collapse('hide');
        });
     });

    // video 
    if ($('.player').length) {
        $(".player").YTPlayer();
    }
 

    
    /*----------------------------
    Testimonial js active
    ------------------------------ */

    var sliderfor = $('.slider-for');
    if(sliderfor.length){
        $('.slider-for').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            fade: false,
            asNavFor: '.slider-nav',
        });
    }
    var slidernav = $('.slider-nav');
    if(slidernav.length){
        $('.slider-nav').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            asNavFor: '.slider-for',
            dots: false,
            arrows: false,
            loop:true,
            vertical: true,
            centerMode: true,
            centerPadding: '0',
            focusOnSelect: true,
            directionNav: true,
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        vertical: false,
                    }
                }
                // You can unslick at a given breakpoint now by adding:
                // settings: "unslick"
                // instead of a settings object
              ]
        });
    }


    //Phone Number 

    $('.phone_call').on('click', function(event) {        
        $('.phone_num_call').slideToggle('show');
    });

    //search 

    $('.sticky_search').on('click', function(event) {        
        $('.sticky_form').slideToggle('show');
        $( '.sticky_form input' ).focus();
    });



    $('.sticky_search').on('click', function() {
        $('body').removeClass('search-active').removeClass('search-close');
          if ($(this).hasClass('close-full')) {
            $('body').addClass('search-close');
        }
        else {
            $('body').addClass('search-active');
        }
        return false;
    });



    $('.sticky_form_search').on('click', function() {      
        $('body, html').removeClass('rs-search-active').removeClass('rs-search-close');
          if ($(this).hasClass('close-search')) {
          $('body, html').addClass('rs-search-close');

        }
        else {
          $('body, html').addClass('rs-search-active');
        }
        return false;
    });

    // Get a quote popup

    $('.popup-quote').magnificPopup({
        type: 'inline',
        preloader: false,
        focus: '#qname',
        removalDelay: 500, //delay removal by X to allow out-animation
        // When elemened is focused, some mobile browsers in some cases zoom in
        // It looks not nice, so we disable it:
        callbacks: {
            beforeOpen: function() {
                this.st.mainClass = this.st.el.attr('data-effect');
                if($(window).width() < 700) {
                    this.st.focus = false;
                } else {
                    this.st.focus = '#qname';
                }
            }
        }
    });


    // Canvas Menu Js
    $( ".nav-link-container > a" ).off("click").on("click", function(event){
        event.preventDefault();
        $(".nav-link-container").toggleClass("nav-inactive-menu-link-container");
        $(".mobile-menus").toggleClass("nav-active-menu-container");
    });
    
    $(".nav-close-menu-li > a").on('click', function(event){
        $(".mobile-menus").toggleClass("nav-active-menu-container");
        $(".content").toggleClass("inactive-body");
    });


      // Elements Animation
    if ($('.wow').length) {
        var wow = new WOW(
            {
                boxClass: 'wow', // animated element css class (default is wow)
                animateClass: 'animated', // animation css class (default is animated)
                offset: 0, // distance to the element when triggering the animation (default is 0)
                mobile: false, // trigger animations on mobile devices (default is true)
                live: true       // act on asynchronously loaded content (default is true)
            }
        );
        wow.init();
    }

     // team init
    $(".team-carousel").each(function() {
        var options = $(this).data('carousel-options');
        $(this).owlCarousel(options); 
    });

    

        // partner init

    $(".partner-carousel").each(function() {
        var options = $(this).data('carousel-options');
        $(this).owlCarousel(options); 
    });
    
     // partner init

       $('.gallery-slider').slick({
       slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        focusOnSelect: true,
        dots: false,
        centerPadding: '228px',
        arrows: true,
        responsive: [{
            breakpoint: 1200,
            settings: {
                centerPadding: '188px',
            }
        }, {
            breakpoint: 970,
            settings: {
                arrows: true,
                centerPadding: '144px',
            }
        }, {
            breakpoint: 767,
            settings: {
                arrows: true,
                centerPadding: '0px',
            }
        }, {
            breakpoint: 350,
            settings: {
                arrows: false,
                centerPadding: '0px',
                dots: true,
                slidesToShow: 1,
            }
        }, ]
    });
    
    
    // testimonial init   
    $('.testi-carousel').slick({
          centerMode: true,
          centerPadding: '0px',
          slidesToShow: 3,
          focusOnSelect: true,
          responsive: [
            {
              breakpoint: 768,
              settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '0px',
                slidesToShow: 3
              }
            },
            {
              breakpoint: 480,
              settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '0px',
                slidesToShow: 1
              }
            }
          ]
        });
        
    
    $(".testi-item  a.tab").on('click', function(e){
          e.preventDefault();
          slideIndex = $(this).index();
          $( '.testi-carousel' ).slickGoTo( parseInt(slideIndex) );
    });

    // Portfolio Single Carousel
    if ($('.cdev').length) {
         $(".cdev").circlos();
    }

    // Portfolio Single Carousel
    if ($('.portfolio-carousel').length) {
        $('.portfolio-carousel').owlCarousel({
            loop: true,
            nav:true,
            autoHeight:true,
            items:1
        })
    }

    //for potfolio slider
   
    if ($('.portfolio-slider-data').length) {
      var sliderDots = "";
      if(portfolio_data.slider_dots==1){
        sliderDots = true;
      }
      var sliderNav = "";
      if(portfolio_data.nav==1){
        sliderNav = true;
      }

      $(".portfolio-slider-data").each(function() {
        $(".portfolio-slider-data").slick({
            slidesToShow: portfolio_data.col_lg,
            centerMode: false,
            dots: sliderDots,
            arrows: sliderNav,
            autoplay: portfolio_data.autoplay,
            slidesToScroll: 2,
            centerPadding: '15px',
            autoplaySpeed: portfolio_data.autoplaySpeed,
            pauseOnHover: portfolio_data.pauseOnHover,
            prevArrow:"<button type='button' class='slick-prev pull-left'><i class='glyph-icon flaticon-left-arrow' aria-hidden='true'></i></button>",
          nextArrow:"<button type='button' class='slick-next pull-right'><i class='glyph-icon flaticon-right-arrow' aria-hidden='true'></i></button>",
            responsive: [{
                breakpoint: 1400,
                settings: {
                    centerPadding: '15px',
                    slidesToShow: portfolio_data.col_lg,
                    slidesToScroll: 1,
                }
            }, 
            {
                breakpoint: 1200,
                settings: {
                    centerPadding: '15px',
                    slidesToShow: portfolio_data.col_md,
                    slidesToScroll: 1,
                }
            }, 
            {
                breakpoint: 767,
                settings: {
                    centerPadding: '10px',
                    slidesToShow: portfolio_data.col_sm,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    centerPadding: '5px',
                    slidesToShow: portfolio_data.col_xs,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 350,
                settings: {
                    centerPadding: '0px',
                    slidesToShow: portfolio_data.col_mobile,
                    slidesToScroll: 1,
                }
            }, ]
        });
      });
    }


    
    // blog init
    $(".blog-carousel").each(function() {
        var options = $(this).data('carousel-options');
        $(this).owlCarousel(options); 
    });


    $(function(){ 
        $( "ul.children" ).addClass( "sub-menu" );
    });

    $(".rs-products-grid .product-btn .button").addClass("glyph-icon flaticon-shopping-bag");
    
     //Videos popup jQuery activation code
    $('.popup-videos').magnificPopup({
        disableOn: 10,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,

        fixedContentPos: false
    }); 
    //type writer
        $(".rs-banner .cd-words-wrapper p:first-child").addClass("is-visible");


    // collapse hidden
    $(function(){ 
         var navMain = $(".navbar-collapse"); // avoid dependency on #id
         // "a:not([data-toggle])" - to avoid issues caused
         // when you have dropdown inside navbar
         navMain.on("click", "a:not([data-toggle])", null, function () {
             navMain.collapse('hide');
         });

     });


    //CountDown Timer
    var CountTimer = $('.CountDownTimer');
    if(CountTimer.length){       
        $(".CountDownTimer").TimeCircles({
            fg_width: 0.030,
            bg_width: 0.8,
            circle_bg_color: "#ffffff",
           
            time: {
                Days:{
                  text: countdown_data.day_text,                  
                },
                Hours:{
                  text: countdown_data.hour_text,                  
                },
                Minutes:{
                  text: countdown_data.min_text,                 
                },
                Seconds:{
                  text: countdown_data.sec_text,                  
                }
            }
        }); 
    }


    if ($('div').hasClass('openingfoot')) {
        $('body').addClass('openingfootwrap');
    }

    // Sticky Sidebar
    $('.contents-sticky, .sticky-sidebar').theiaStickySidebar({
        additionalMarginTop: 60,
        additionalMarginBottom: 50,
    });



    //CountDown Timer
    var CountTimer = $('.CountDownTimer4');
    if(CountTimer.length){ 
        $(".CountDownTimer4").TimeCircles({}); 
    }

  //preloader
    $(window).on( 'load', function() {
        $("#firecamp-load").delay(1000).fadeOut(500);
        $(".firecamp-loader").delay(1000).fadeOut(500);

	    if($(window).width() < 992) {
	      	$('.rs-menu').css('height', '0');
	      	$('.rs-menu').css('opacity', '0');
	      	$('.rs-menu').css('z-index', '-1');
	      	$('.rs-menu-toggle').on( 'click', function(){
	         	$('.rs-menu').css('opacity', '1');
	         	$('.rs-menu').css('z-index', '1');
	     	});
	    }
    })


     // magnificPopup init
    $('.image-popup').magnificPopup({
        type: 'image',
        callbacks: {
            beforeOpen: function() {
               this.st.image.markup = this.st.image.markup.replace('mfp-figure', 'mfp-figure animated zoomInDown');
            }
        },
        gallery: {
            enabled: true
        }
    });

        
    // Counter Up  
    $('.rs-counter').counterUp({
        delay: 20,
        time: 1500
    });
    
    // scrollTop init
    var win=$(window);
    var totop = $('#scrollUp');    
    win.on('scroll', function() {
        if (win.scrollTop() > 150) {
            totop.fadeIn();
        } else {
            totop.fadeOut();
        }
    });
    totop.on('click', function() {
        $("html,body").animate({
            scrollTop: 0
        }, 500)
    });


    $(function(){ 
        $( "ul.children" ).addClass( "sub-menu" );
    });

    $(".sidenav .menu li").on('click', function() {
        $(this).children("ul.sub-menu").slideToggle();
    }); 
    $( ".comment-body, .comment-respond" ).wrap( "<div class='comment-full'></div>" ); 
    $('.rs-heading .description p:empty').remove();

    //services style js
    $(".rs-services-default a").on({
        mouseenter: function(){
          var title_hover = $(this).data('onhovercolor');           
          $(this).css('color', title_hover);            
      },
      mouseleave: function(){
          var title_color = $(this).data('onleavecolor'); 
          $(this).css('color', title_color);    
      }      
    }, this);

  // Heading 6
  $('.rs-heading.style6 ').each(function( index ){
      var borderColor     = $(this).find(".sub-text").data('border-color');
      $( "<style>.rs-heading.style6 .title-inner .sub-text::after { background: " + borderColor + " }</style>" ).appendTo( "head" );
  });

  // Heading 4
  $('.rs-heading.style4 ').each(function( index ){
      var borderColor     = $(this).find(".sub-text").data('border-color');
      $( "<style>.rs-heading.style4 .title-inner .sub-text:before, .rs-heading.style4 .title-inner .sub-text:after { background: " + borderColor + " }</style>" ).appendTo( "head" );
  });

   // Heading 11
  $('.rs-heading.style11').each(function( index ){
      var borderColor     = $(this).find(".title-inner").data('border-color');
      $( "<style>.rs-heading.style11 .title-inner:before { background: " + borderColor + " }</style>" ).appendTo( "head" );
  });

  // Heading 11 Center
  $('.rs-heading.style11.text-center').each(function( index ){
      var borderColor     = $(this).find(".title-inner").data('border-color');
      $( "<style>.rs-heading.style11.text-center .title-inner:before { background: " + borderColor + " }</style>" ).appendTo( "head" );
  });  

  // Heading 2
  $('.rs-heading.style2').each(function( index ){
      var borderColor     = $(this).find(".title-inner").data('border-color');
      $( "<style>.rs-heading.style2.text-center .title-inner .title:after { background: " + borderColor + " }</style>" ).appendTo( "head" );
  });



  $(".rs-btn a").on({
       mouseenter: function(){
            var btnBg = $(this).data('onhoverbg');                        
            var btnColor = $(this).data('onhovercolor');            
            $(this).css('background-color', btnBg);           
            $(this).css('color', btnColor);
        },
        mouseleave: function(){
            var btnHoverBg = $(this).data('onleavebg');
            var btnHoverColor = $(this).data('onleavecolor');
            $(this).css('background-color', btnHoverBg);
            $(this).css('color', btnHoverColor);   
        }      
  }, this);




  $(".rs-btn2 a").on({
       mouseenter: function(){
            var btnBg = $(this).data('onhoverbg');            
            var btnBorder = $(this).data('onhoverbg');    
                   
            $(this).css('background-color', btnBg);
          
            $(this).css('color', btnColor);
        },
        mouseleave: function(){
            var btnHoverBg = $(this).data('onleavebg');
            
            var btnHoverColor = $(this).data('onleavecolor');

            $(this).css('background-color', btnHoverBg);
            $(this).css('color', btnHoverColor);   
        }      
  }, this);

  $(".rs-cta .button-wrap a").on({
       mouseenter: function(){
            var btnBg = $(this).data('hoverbg');            
            var btnBorder = $(this).data('hoverborder');            
            var btnColor = $(this).data('hovertext');            

            $(this).css('background-color', btnBg);
            $(this).css('border-color', btnBorder);
            $(this).css('color', btnColor);
        },
        mouseleave: function(){
            var btnHoverBg = $(this).data('leavebg');
            var btnBorder = $(this).data('leaveborder');
            var btnHoverColor = $(this).data('leavecolor');

            $(this).css('background-color', btnHoverBg);
            $(this).css('border-color', btnBorder); 
            $(this).css('color', btnHoverColor);   
        }      
  }, this);


  //woocommerce quantity style
    if ( ! String.prototype.getDecimals ) {
          String.prototype.getDecimals = function() {
              var num = this,
                  match = ('' + num).match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);
              if ( ! match ) {
                  return 0;
              }
              return Math.max( 0, ( match[1] ? match[1].length : 0 ) - ( match[2] ? +match[2] : 0 ) );
          }
      }
    // Quantity "plus" and "minus" buttons
    $( document.body ).on( 'click', '.plus, .minus', function() {
        var $qty        = $( this ).closest( '.quantity' ).find( '.qty'),
            currentVal  = parseFloat( $qty.val() ),
            max         = parseFloat( $qty.attr( 'max' ) ),
            min         = parseFloat( $qty.attr( 'min' ) ),
            step        = $qty.attr( 'step' );

        // Format values
        if ( ! currentVal || currentVal === '' || currentVal === 'NaN' ) currentVal = 0;
        if ( max === '' || max === 'NaN' ) max = '';
        if ( min === '' || min === 'NaN' ) min = 0;
        if ( step === 'any' || step === '' || step === undefined || parseFloat( step ) === 'NaN' ) step = 1;

        // Change the value
        if ( $( this ).is( '.plus' ) ) {
            if ( max && ( currentVal >= max ) ) {
                $qty.val( max );
            } else {
                $qty.val( ( currentVal + parseFloat( step )).toFixed( step.getDecimals() ) );
            }
        } else {
            if ( min && ( currentVal <= min ) ) {
                $qty.val( min );
            } else if ( currentVal > 0 ) {
                $qty.val( ( currentVal - parseFloat( step )).toFixed( step.getDecimals() ) );
            }
        }

        // Trigger change event
        $qty.trigger( 'change' );
    });

    $('.rs-course-archive-top .course-icons a').on('click', function() {
        $('body').removeClass('rs-grid-view').removeClass('rs-list-view');

        if ($(this).hasClass('rs-list')) {
        $('body').addClass('rs-list-view');         
        }
        else {
        $('body').addClass('rs-grid-view');      
        }
        return false;
    });


})(jQuery);  