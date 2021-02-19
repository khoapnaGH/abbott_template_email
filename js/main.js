(function($){
	"use strict";
	jQuery(document).on('ready', function () {
		
		// Mean Menu
		jQuery('.mean-menu').meanmenu({
			meanScreenWidth: "767"
		});

        $('#btnUploadFIle').on('click', function () {
            
        });

		//// Header Sticky
		//$(window).on('scroll',function() {
  //          if ($(this).scrollTop() > 120){  
  //              $('.elkevent-nav').addClass("is-sticky");
  //          }
  //          else{
  //              $('.elkevent-nav').removeClass("is-sticky");
  //          }
  //      });
        
        // Home Slides
		$('.home-slides').owlCarousel({
			loop: true,
			nav: true,
			dots: false,
			autoplayHoverPause: true,
            autoplay: true,
            items: 1,
            navText: [
                "<i class='icofont-rounded-left'></i>",
                "<i class='icofont-rounded-right'></i>"
            ],
        });
        $(".home-slides").on("translate.owl.carousel", function(){
            $(".home-slides p").removeClass("animated fadeInDown").css("opacity", "0");
            $(".home-slides h1").removeClass("animated fadeInUp").css("opacity", "0");
            $(".home-slides ul").removeClass("animated zoomIn").css("opacity", "0");
            $(".home-slides .btn, .home-slides .video-btn").removeClass("animated fadeInDown").css("opacity", "0");
        });
        $(".home-slides").on("translated.owl.carousel", function(){
            $(".home-slides p").addClass("animated fadeInDown").css("opacity", "1");
            $(".home-slides h1").addClass("animated fadeInUp").css("opacity", "1");
            $(".home-slides ul").addClass("animated zoomIn").css("opacity", "1");
            $(".home-slides .btn, .home-slides .video-btn").addClass("animated fadeInDown").css("opacity", "1");
        });

		// Popup Video
		$('.popup-youtube').magnificPopup({
			disableOn: 320,
			type: 'iframe',
			mainClass: 'mfp-fade',
			removalDelay: 160,
			preloader: false,
			fixedContentPos: false
		});

        $('.popup-image').magnificPopup({ type: 'image' });

		// Count Time 
        function makeTimer() {
            var endTime = new Date("06/08/2019 08:00:00");	
            var endTime = (Date.parse(endTime)) / 1000;
            
            var now = new Date();
            var now = (Date.parse(now) / 1000);
            var timeLeft = endTime - now;
            var days = Math.floor(timeLeft / 86400); 
            var hours = Math.floor((timeLeft - (days * 86400)) / 3600);
            var minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600 )) / 60);
            var seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));
            if (hours < "10") { hours = "0" + hours; }
            if (minutes < "10") { minutes = "0" + minutes; }
            if (seconds < "10") { seconds = "0" + seconds; }
            $("#days").html(days + "<span>Days</span>");
            $("#hours").html(hours + "<span>Hours</span>");
            $("#minutes").html(minutes + "<span>Minutes</span>");
            $("#seconds").html(seconds + "<span>Seconds</span>");	
        }
        setInterval(function() { makeTimer(); }, 1000);


        function readURL(input) {
            if (input.files && input.files[0]) {
                var reader = new FileReader();

                reader.onload = function (e) {
                    $('#imageShow')
                        .attr('src', e.target.result)
                        .width(150)
                        .height(200);
                };

                reader.readAsDataURL(input.files[0]);
            }
        }

        // Tabs
        (function ($) {
            $('.tab ul.tabs').addClass('active').find('> li:eq(0)').addClass('current');
            $('.tab ul.tabs li a').on('click', function (g) {
                var tab = $(this).closest('.tab'), 
                index = $(this).closest('li').index();
                tab.find('ul.tabs > li').removeClass('current');
                $(this).closest('li').addClass('current');
                tab.find('.tab_content').find('div.tabs_item').not('div.tabs_item:eq(' + index + ')').slideUp();
                tab.find('.tab_content').find('div.tabs_item:eq(' + index + ')').slideDown();
                g.preventDefault();
            });
        })(jQuery);

        // Tooltip JS
        $(function () {
            $('[data-toggle="tooltip"]').tooltip()
        });

        // Platinum Partner Slides
		$('.platinum-partner-slides').owlCarousel({
			loop: true,
			nav: false,
			dots: false,
			autoplayHoverPause: true,
			autoplay: true,
            navText: [
                "<i class='icofont-rounded-left'></i>",
                "<i class='icofont-rounded-right'></i>"
            ],
			responsive: {
                0: {
                    items:2,
                },
                768: {
                    items:3,
                },
                1200: {
                    items:5,
				}
            }
        });
        
        // Gold Partner Slides
		$('.gold-partner-slides').owlCarousel({
			loop: true,
			nav: false,
			dots: false,
			autoplayHoverPause: true,
			autoplay: true,
            navText: [
                "<i class='icofont-rounded-left'></i>",
                "<i class='icofont-rounded-right'></i>"
            ],
			responsive:{
                0: {
                    items:2,
                },
                768: {
                    items:3,
                },
                1200: {
                    items:5,
				}
            }
        });
        
        // Blog Slides
		$('.blog-slides').owlCarousel({
			loop: true,
			nav: false,
			dots: true,
			autoplayHoverPause: true,
			autoplay: true,
            navText: [
                "<i class='icofont-rounded-left'></i>",
                "<i class='icofont-rounded-right'></i>"
            ],
			responsive:{
                0: {
                    items:1,
                },
                768: {
                    items:2,
                },
                1200: {
                    items:3,
				}
            }
        });
        
        // Schedule Slides
		$('.schedule-slides').owlCarousel({
			loop: true,
			nav: true,
			dots: false,
			autoplayHoverPause: true,
            autoplay: true,
            items: 1,
            navText: [
                "<i class='icofont-rounded-left'></i>",
                "<i class='icofont-rounded-right'></i>"
            ],
        });
        
        // Check distance to top and display back-to-top.
        jQuery( window ).on('scroll', function() {
            if ( $( this ).scrollTop() > 800 ) {
                $( '.back-to-top' ).addClass( 'show-back-to-top' );
            } else {
                $( '.back-to-top' ).removeClass( 'show-back-to-top' );
            }
        });
        $('.back-to-top').on('click', function() {
            $("html, body").animate({ scrollTop: "0" },  500);
        });

        // Subscribe form
		$(".newsletter-form").validator().on("submit", function (event) {
			if (event.isDefaultPrevented()) {
			// handle the invalid form...
				formErrorSub();
				submitMSGSub(false, "Please enter your email correctly.");
			} else {
				// everything looks good!
				event.preventDefault();
			}
		});
		function callbackFunction (resp) {
			if (resp.result === "success") {
				formSuccessSub();
			}
			else {
				formErrorSub();
			}
		}
		function formSuccessSub(){
			$(".newsletter-form")[0].reset();
			submitMSGSub(true, "Thank you for subscribing!");
			setTimeout(function() {
				$("#validator-newsletter").addClass('hide');
			}, 4000)
		}
		function formErrorSub(){
			$(".newsletter-form").addClass("animated shake");
			setTimeout(function() {
				$(".newsletter-form").removeClass("animated shake");
			}, 1000)
		}
		function submitMSGSub(valid, msg){
			if(valid){
				var msgClasses = "validation-success";
			} else {
				var msgClasses = "validation-danger";
			}
			$("#validator-newsletter").removeClass().addClass(msgClasses).text(msg);
		}
		// AJAX MailChimp
		$(".newsletter-form").ajaxChimp({
			url: "https://envytheme.us20.list-manage.com/subscribe/post?u=60e1ffe2e8a68ce1204cd39a5&amp;id=42d6d188d9", // Your url MailChimp
			callback: callbackFunction
		});
        
        $('.scroll-down-aes ').on('click', function () {
            $("html, body").animate({ scrollTop: 500 }, 500);
        });
	});

	//// Lax JS
	//window.onload = function() {
	//	lax.setup() // init
	//	const updateLax = () => {
	//		lax.update(window.scrollY)
	//		window.requestAnimationFrame(updateLax)
	//	}
	//	window.requestAnimationFrame(updateLax)
 //   }

    // Odometer JS
    $('.odometer').appear(function(e) {
        var odo = $(".odometer");
        odo.each(function() {
            var countNumber = $(this).attr("data-count");
            $(this).html(countNumber);
        });
    });

	// WOW JS
	$(window).on ('load', function (){
        if ($(".wow").length) { 
            var wow = new WOW({
            boxClass:     'wow',      // animated element css class (default is wow)
            animateClass: 'animated', // animation css class (default is animated)
            offset:       20,          // distance to the element when triggering the animation (default is 0)
            mobile:       true,       // trigger animations on mobile devices (default is true)
            live:         true,       // act on asynchronously loaded content (default is true)
          });
          wow.init();
        }
	});
	
	// Preloader Area
	jQuery(window).on('load', function() {
	    $('.preloader').fadeOut();
    });
}(jQuery));