import $ from 'jquery';
// Animate-css
	// Header
$('.mainHeader').addClass('animated fadeInDown');
$('.mainHeader__background').addClass('animated fadeInDown');

$('.mainHeader__button_join').addClass('animated zoomIn');
$('.mainHeader__button_join span').addClass('animated fadeInUp');

$('.mainHeader__button_signIn').addClass('animated zoomIn');
$('.mainHeader__button_signIn span').addClass('animated fadeInUp');

	// Home
$('.home__description').addClass('animated fadeInUp');
$('.home__video').addClass('animated zoomIn');
$('.home__screen').addClass('animated fadeInUp');
$('.home__play').addClass('animated zoomIn');
$('.home__play_btn').addClass('animated pulse');
$('.inner-block').addClass('animated fadeInDown');
$('.home__background').addClass('animated fadeInDown');

	//Tech-analize
let $techAnalizeButton = $('.techAnalize__button .button').css("opacity", "0");

$techAnalizeButton.waypoint(function () {
	($techAnalizeButton).addClass('animated zoomIn').css("opacity", "1");
}, { offset: '80%' });

	//Perks
let $perksRowTop = $('.perks__row_top').css("opacity", "0");
let $perksRowBottom = $('.perks__row_bottom').css("opacity", "0");

$perksRowTop.waypoint(function (dir) {
	if (dir == 'down') {
		($perksRowTop).addClass('animated fadeInUp').css("opacity", "1");
	} else {
		($perksRowTop).removeClass('animated fadeInUp').css("opacity", "0");
	}
}, { offset: '80%' });

$perksRowBottom.waypoint(function (dir) {
	if (dir == 'down') {
		($perksRowBottom).addClass('animated fadeInUp').css("opacity", "1");
	} else {
		($perksRowBottom).removeClass('animated fadeInUp').css("opacity", "0");
	}
}, { offset: '80%' });

	// Join
let $joinCommunity = $('.join__community').css("opacity", "0");

$joinCommunity.waypoint(function () {
	($joinCommunity).addClass('animated fadeInUp').css("opacity", "1");
}, { offset: '80%' });

let $joinGains = $('.join__gains').css("opacity", "0");

$joinGains.waypoint(function () {
	($joinGains).addClass('animated fadeInUp').css("opacity", "1");
}, { offset: '80%' });