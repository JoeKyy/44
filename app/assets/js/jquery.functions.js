$(function () {
    $('.highlight').slick({
		dots: true,
		arrows: true,
		infinite: true,
		speed: 300,
		slidesToShow: 1,
		slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
		responsive: [
			{
			  breakpoint: 1024,
			  settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
			  }
			},
			{
			  breakpoint: 480,
			  settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			  }
			}
		  ]
	});

    $(".highlight").on("afterChange", function (){
        $('.highlight figure img').removeClass('animated grow');
        $('.highlight figure figcaption').removeClass('animated fadeInUp');
		$('.highlight .slick-active img').addClass('animated grow');
        $('.highlight .slick-active figcaption').addClass('animated fadeInUp');
    });

    $(".highlight").on("beforeChange", function (){
        $('.highlight figure img').removeClass('animated grow');
        $('.highlight figure figcaption').removeClass('animated fadeInUp');
		$('.highlight .slick-active img').addClass('animated grow');
        $('.highlight .slick-active figcaption').addClass('animated fadeInUp');
    });

	$('.nav-button').click(function(){
		if (!$(this).hasClass('is-active')) {
			$(this).addClass('is-active');
			$('body > header nav').addClass('nav-menu--open');
			$('body > header nav').removeClass('nav-menu--close');
		} else {
			$(this).removeClass('is-active');
			$('body > header nav').removeClass('nav-menu--open');
			$('body > header nav').addClass('nav-menu--close');
		}
	});
});