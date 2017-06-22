//////////////////////// Loader /////////////////////
$(window)
  .on('load', function () {
    // Animate loader off screen
    $(".se-pre-con").fadeOut("slow");;
  });

//////////////////////// Global JS /////////////////////
$(document).ready(function () {

  // Button Collapse on Nav Menu when resized, adds side nav functionality on
  // smaller screens instead
    $('.button-collapse').sideNav({
      menuWidth: 300, 
      edge: 'left', // menu incoming direction
      closeOnClick: true, 
      draggable: true // Mobile / Touch screen drag. 
    }
  );



  //Image Car
  $('.carousel.carousel-slider').carousel({fullWidth: true});

  // Tooltip
  $('.tooltipped').tooltip({delay: 50});

  // Section Titles Fade in and Staggered list
  var options = [
     {
      selector: '.dropcap',
      offset: 0,
      callback: function (el) {
        Materialize.showStaggeredList($(el));
      }
    },
    {
      selector: '#staggered-list-about',
      offset: 0,
      callback: function (el) {
        Materialize.showStaggeredList($(el));
      }
    }, {
      selector: '.title-0',
      offset: 0,
      callback: function (el) {
        Materialize.fadeInImage($(el));
      }
    }, {
      selector: '.title-1',
      offset: 0,
      callback: function (el) {
        Materialize.fadeInImage($(el));
      }
    }, {
      selector: '.title-2',
      offset: 0,
      callback: function (el) {
        Materialize.fadeInImage($(el));
      }
    }, {
      selector: '.title-3',
      offset: 0,
      callback: function (el) {
        Materialize.fadeInImage($(el));
      }
    }, {
      selector: '.title-4',
      offset: 0,
      callback: function (el) {
        Materialize.fadeInImage($(el));
      }
    }

  ];

  Materialize.scrollFire(options);

});


/*global jQuery */
/*!
* FitText.js 1.2
*
* Copyright 2011, Dave Rupert http://daverupert.com
* Released under the WTFPL license
* http://sam.zoy.org/wtfpl/
*
* Date: Thu May 05 14:23:00 2011 -0600
*/

(function( $ ){

  $.fn.fitText = function( kompressor, options ) {

    // Setup options
    var compressor = kompressor || 1,
        settings = $.extend({
          'minFontSize' : Number.NEGATIVE_INFINITY,
          'maxFontSize' : Number.POSITIVE_INFINITY
        }, options);

    return this.each(function(){

      // Store the object
      var $this = $(this);

      // Resizer() resizes items based on the object width divided by the compressor * 10
      var resizer = function () {
        $this.css('font-size', Math.max(Math.min($this.width() / (compressor*10), parseFloat(settings.maxFontSize)), parseFloat(settings.minFontSize)));
      };

      // Call once to set.
      resizer();

      // Call on resize. Opera debounces their resize by default.
      $(window).on('resize.fittext orientationchange.fittext', resizer);

    });

  };

})( jQuery );


$(".hero-title").fitText(.8, { minFontSize: '50px', maxFontSize: '400px'});