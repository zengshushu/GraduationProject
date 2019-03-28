//  js Document 

    // Created on : 14/10/2017. 
    // Theme Name : Faster .
    // Description: Faster - App Landing Page.
    // Version    : 1.1.
    // Author     : @creativeGigs.

"use strict";


// Prealoder
 function prealoader () {
   if ($('#loader').length) {
     $('#loader').fadeOut(); // will first fade out the loading animation
     $('#loader-wrapper').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website.
     $('body').delay(350).css({'overflow':'visible'});
  };
 }
//mousewheel
;(function($){var _=["DOMMouseScroll","mousewheel"];if($.event.fixHooks)for(var B=_.length;B;)$.event.fixHooks[_[--B]]=$.event.mouseHooks;$.event.special.mousewheel={setup:function(){if(this.addEventListener){for(var $=_.length;$;)this.addEventListener(_[--$],A,false)}else this.onmousewheel=A},teardown:function(){if(this.removeEventListener){for(var $=_.length;$;)this.removeEventListener(_[--$],A,false)}else this.onmousewheel=null}};$.fn.extend({mousewheel:function($){return $?this.bind("mousewheel",$):this.trigger("mousewheel")},unmousewheel:function($){return this.unbind("mousewheel",$)}});function A(B){var _=B||window.event,A=[].slice.call(arguments,1),D=0,C=true,E=0,F=0;B=$.event.fix(_);B.type="mousewheel";if(_.wheelDelta)D=_.wheelDelta/120;if(_.detail)D=-_.detail/3;F=D;if(_.axis!==undefined&&_.axis===_.HORIZONTAL_AXIS){F=0;E=-1*D}if(_.wheelDeltaY!==undefined)F=_.wheelDeltaY/120;if(_.wheelDeltaX!==undefined)E=-1*_.wheelDeltaX/120;A.unshift(B,D,E,F);return($.event.dispatch||$.event.handle).apply(this,A)}})(jQuery);

// WOW animation 
function wowAnimation () {
  if($('.wow').length) {
    var wow = new WOW(
    {
      boxClass:     'wow',      // animated element css class (default is wow)
      animateClass: 'animated', // animation css class (default is animated)
      offset:       80,          // distance to the element when triggering the animation (default is 0)
      mobile:       true,       // trigger animations on mobile devices (default is true)
      live:         true,       // act on asynchronously loaded content (default is true)
    }
  );
  wow.init();
  }
}

// placeholder remove
function removePlaceholder () {
  if ($("input,textarea").length) {
    $("input,textarea").each(
            function(){
                $(this).data('holder',$(this).attr('placeholder'));
                $(this).on('focusin', function() {
                    $(this).attr('placeholder','');
                });
                $(this).on('focusout', function() {
                    $(this).attr('placeholder',$(this).data('holder'));
                });
                
        });
  }
}


// Scroll to top
function scrollToTop () {
  if ($('.scroll-top').length) {

    //Check to see if the window is top if not then display button
    $(window).on('scroll', function (){
      if ($(this).scrollTop() > 200) {
        $('.scroll-top').fadeIn();
      } else {
        $('.scroll-top').fadeOut();
      }
    });
    
    //Click event to scroll to top
    $('.scroll-top').on('click', function() {
      $('html, body').animate({scrollTop : 0},1500);
      return false;
    });
  }
}



// DOM ready function
jQuery(document).on('ready', function() {
	(function ($) {
	   removePlaceholder ();
     scrollToTop ();
     wowAnimation ();
     hoverTilt ();
     BannerSlider ();
     testimonialSlider ();
     screenshotSlider ();
     contactFormValidation ();
     closeSuccessAlert ();
  })(jQuery);
});


// Window load function
jQuery(window).on('load', function () {
   (function ($) {
      prealoader ();
      particalBGone ();
      particalBGtwo ();
      particalBGthree ()
  })(jQuery);
 });
