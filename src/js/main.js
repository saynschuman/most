(function($) {

	// sliders

	$('#sl-outer').slick({
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  arrows: false,
	  asNavFor: '#sl-inner',
	  fade: true
	});

	$('#sl-inner').slick({
	  slidesToShow: 6,
	  slidesToScroll: 1,
	  asNavFor: '#sl-outer',
	  focusOnSelect: true
	});	

	$('#sl-mid-outer').slick({
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  arrows: false,
	  asNavFor: '#sl-mid-inner',
	  fade: true
	});

	$('#sl-mid-inner').slick({
	  slidesToShow: 4,
	  slidesToScroll: 1,
	  asNavFor: '#sl-mid-outer',
	  focusOnSelect: true
	});		

	// mobile menu

	$('.mobile-but').click(function(){
		$('header.header').fadeIn(200);
	})
	$('.close').click(function(){
		$('header.header').fadeOut(200);
	})

	// tabs 

	$('.nav-tabs li').click(function(){
		$('.nav-tabs li').removeClass('active');
		$(this).toggleClass('active');
		$('.header-body').toggleClass('active');
	})
	

})(jQuery);