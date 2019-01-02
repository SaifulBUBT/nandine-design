$(document).ready(
  (function($) {
    "use strict";

    // WOW Js Active
    new WOW().init();

    // ---- Active
    $(".owl").owlCarousel();
    // Owl Next Privew Change
    //$( ".owl-prev").html('<i class="fa screenshort-arow fa-chevron-left"></i>');
    //$( ".owl-next").html('<i class="fa screenshort-arow fa-chevron-right"></i>');

    // Team
    $(".owl-carousel-team").owlCarousel({
      loop: true,
      margin: 30,
      nav: false,
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 2
        },
        1000: {
          items: 4
        }
      }
    });
    // Testimonial
    $(".owl-carousel-testimonial").owlCarousel({
      loop: true,
      margin: 30,
      nav: false,
      items: 1
    });

	$(document).ready(function(){
	  $('.bxslider').bxSlider();
	});
		
    // For counter
    $(".counter-number").each(function() {
      $(this)
        .prop("Counter", 0)
        .animate(
          {
            Counter: $(this).text()
          },
          {
            duration: 4000,
            easing: "swing",
            step: function(now) {
              $(this).text(Math.ceil(now));
            }
          }
        );
    });

    // Active mix it up
    var mixer = mixitup(".portfolio-content");

    // portfolio pop up
    $(".image-link").magnificPopup({ type: "image" });
  })(jQuery)
);
