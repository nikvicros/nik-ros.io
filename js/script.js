//////////////////////// Loader /////////////////////
$(window).on('load', function() {
		// Animate loader off screen
		$(".se-pre-con").fadeOut("slow");;
	});

//////////////////////// Global JS /////////////////////
$(document)
  .ready(function () {

   

    // Button Collapse on Nav Menu when resized, adds side nav functionality on
    // smaller screens intead
    $(".button-collapse").sideNav();

    // Tooltip
    $('.tooltipped').tooltip({delay: 50});

    // Staggered List

    var options = [
      {
        selector: '.title-1',
        offset: 0,
        callback: function (el) {
          Materialize.fadeInImage($(el));
        }
      },
      {
        selector: '.title-2',
        offset: 0,
        callback: function (el) {
          Materialize.fadeInImage($(el));
        }
      },
      {
        selector: '.title-3',
        offset: 0,
        callback: function (el) {
          Materialize.fadeInImage($(el));
        }
      },
      {
        selector: '.title-4',
        offset: 0,
        callback: function (el) {
          Materialize.fadeInImage($(el));
        }
      }

    ];

    Materialize.scrollFire(options);

  });