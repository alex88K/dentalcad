$(function() {
	
	// NAV

	// $(".navbar-toggler").on("click", function() {
	// 	$(".navbar-toggler, .navbar").toggleClass("active");
	// });

	// $(".navbar .close-btn").on("click", function() {
	// 	$(".navbar-toggler, .navbar").removeClass("active");
	// 	$(".navbar-collapse").removeClass("show");
	// });

	$(".aside-title").on("click", function(e) { 
		$(this).toggleClass("opened");
	});

	// Fancybox

	$("[data-fancybox]").fancybox();

	
	// Mask

	$("input[name='phone']").mask("+7 (999) 999-9999");


	// Parallax

	var p = new Parallax('.parallax', {
		offsetYBounds: 100,
		intensity: 50,
		center: 1,
		safeHeight: 0.15
	}).init();


	// Tabs

	$(".nav-tabs").on("click", ".tab-item", function(e) {
		$(".tab-item").removeClass("active");
		var index = $(this).addClass("active").index();
		
		$(".info-box").removeClass("active").eq( index ).addClass("active");
	});


	// Sliders

	var $promoSlider = $('.promo-slider');

	$promoSlider.slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
  		autoplaySpeed: 15000,
		infinity: true,
		arrows: false,
		dots: false,
		fade: true,
		responsive: [{
			breakpoint: 480,
			settings: {
				adaptiveHeight: true
			}
		}]
	});

	$('.best-offers-slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		nextArrow: '<button type="button" class="slick-next"><i class="fa fa-angle-right"></i></button>',
		prevArrow: '<button type="button" class="slick-prev"><i class="fa fa-angle-left"></i></button>',
		dots: false,
		fade: true,
	});

	$('.services-slider').slick({
		slidesToShow: 5,
		slidesToScroll: 1,
		arrows: true,
		nextArrow: '<button type="button" class="slick-next"><i class="fa fa-angle-right"></i></button>',
		prevArrow: '<button type="button" class="slick-prev"><i class="fa fa-angle-left"></i></button>',
		dots: false,
		centerMode: true,
		responsive: [
		{
			breakpoint: 1600,
			settings: {
				slidesToShow: 4,
				slidesToScroll: 1
			}
		},
		{
			breakpoint: 1200,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 1,
			}
		},
		{
			breakpoint: 767,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				centerMode: true
			}
		},
		{
			breakpoint: 480,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				centerMode: false
			}
		}]
	});


	$('.partners-slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		dots: true
	});


	$('.product-slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		dots: false,
		fade: true,
		asNavFor: '.product-slider-nav'
	});

	$('.product-slider-nav').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		asNavFor: '.product-slider',
		dots: false,
		centerMode: false,
		focusOnSelect: true,
		nextArrow: '<button class="arr-right"><i class="fa fa-angle-right"></i></button>',
		prevArrow: '<button class="arr-left"><i class="fa fa-angle-left"></i></button>',
		arrows: true,
		responsive: [
		{
			breakpoint: 767,
			settings: {
				vertical: true
			}
		},
		{
			breakpoint: 575,
			settings: {
				vertical: false
			}
		}]
	});




});