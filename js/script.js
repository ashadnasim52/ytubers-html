$(document).ready(function () {
	$('.slider').slick({
		centerPadding: '60px',
		autoplay: true,
		arrows: false,
	});
});
$(document).ready(function () {
	$('.top').slick({
		dots: false,
		infinite: true,
		speed: 200,
		slidesToShow: 1,
		autoplay: true,
		arrows: true,
		cssEase: 'linear',
	});
});

$('.youtuber-left ').click(function () {
	$('.slider').slick('slickPrev');
});

$('.youtuber-right').click(function () {
	$('.slider').slick('slickNext');
});

$('.team-left ').click(function () {
	$('.slider').slick('slickPrev');
});

$('.team-right').click(function () {
	$('.slider').slick('slickNext');
});
