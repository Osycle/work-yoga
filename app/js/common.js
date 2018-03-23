$(function() {


	$('.main-banner-slide').owlCarousel({
	    nav: false,
	    items:1,
	    animateOut: 'fadeOut',
    	animateIn: 'fadeIn',
    	loop: true,
    	autoplay: true,
	});

	owlOurClass = $('.our-class-slide').owlCarousel({
	    loop:true,
	    margin:0,
	    responsiveClass:true,
    	//autoplay: true,
    	nav: true,
	    responsive:{
	        0:{
	            items:1,
	            nav:true
	        },
	        600:{
	            items:1,
	            nav:false
	        },
	        1000:{
	            items:2,
	            nav:false
	        },
	        1200:{
	            items:3,
	            nav:true,
	            loop:false
	        },

	    }
	});



  $(".toggleMenu").on("click", function() {
	$(".sandwich").toggleClass("active");
	    $('.main-menu').slideToggle();
	});


	$(".our-class-review-nav").on( "click", ".prev", function () {
	    owlOurClass.trigger('prev.owl.carousel');
	});

	$(".our-class-review-nav").on( "click", ".next", function () {
	    owlOurClass.trigger('next.owl.carousel');
	});


	new WOW({
    offset: 200,          // distance to the element when triggering the animation (default is 0)
  }).init();


	$(".main-menu li a").each(function() {
		if ($(this).next().length > 0) {
			$(this).addClass("parent");
		};
	})
	
	$("document.body").on( "click", ".toggle_menu", function(e) {
		e.preventDefault();
		$(".sandwich").toggleClass("active");
		$(this).toggleClass("active");
		$(".main-menu").toggle();
	});


$("document.body").hide().prev().on( "click", ".accordeon .acc_content", function() {
  $(this).parents(".accordeon").find(".acc_content").not(this).slideUp().parents('.accordion_in').removeClass("active");
  $(this).next().not(":visible").slideDown().parents('.accordion_in').addClass("active");
});
$(".accordeon .accordion_in.active").find(".acc_content").show();


	 $(function() {
		if ($('body').width() < 1200) {
			$(".main-menu li").off('mouseenter mouseleave');
			$(".main-menu li a.parent").off('click').on('click', function(e) {
				// Необходимоо привязать к элементу ссылки для предотвращения "всплывания"
				e.preventDefault();
				$(this).parent("li").toggleClass("hover");
			});
		} 
		if ($('body').width() > 1200) {
			$(".main-menu li").removeClass("hover");
			$(".main-menu li a").off('click');
			$(".main-menu li").off('mouseenter mouseleave').on('mouseenter mouseleave', function() {
			 	// Необходимо привязать к элементу li для предотвращения запуска события mouseleave при перемещении курсора мыши над подменю
			 	$(this).toggleClass('hover');
			});
		}
	});


	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};



	owlReview = $('.feedback-carousel').owlCarousel({
	    loop:true,
	    items:1,
	    animateOut: 'fadeOut',
	    animateIn: 'fadeIn',
	    autoHeight: true,
	});

	
	$(".feedback-review-nav-wrap").on( "click", ".feedback-review-nav .prev", function () {
	    owlReview.trigger('prev.owl.carousel');
	});
	$(".feedback-review-nav-wrap").on( "click", ".feedback-review-nav .next", function () {
	    owlReview.trigger('next.owl.carousel');
	});


	
	if( $('.head-bar').length )
	var sticky = new Waypoint.Sticky({
	  element:  $('.head-bar')[0],
	  offset: -110
	})

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	$("document.body").on("dragstart", "img, a", function(event) { event.preventDefault(); });
	

$(window).on("load", function() {

	$(".loader_inner").fadeOut();
	$(".loader").delay(400).fadeOut("slow");

});


//additional

	//	ACCORDION
	accFaq();
	function accFaq(){
		var acc_faq = $(".faq-section .accordion") || null;
		if( !acc_faq )
			return;

		acc_faq.accordion({
			animate: 600,
			header: "h3",
			collapsible: true
		});

		$( "body" ).on("click", ".faq-section .accordion h3", function(){
			$(this).siblings("h3").find("i").css("transform", "");
			$(this).find("i").css("transform", "rotate(90deg)");
		});
	}

	//	GALLERY
	$('.fancybox').fancybox({
		helpers: {
			overlay: {
				locked: false
			}
		}
	});
// ./end additional
});

