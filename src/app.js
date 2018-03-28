const $ = window.$ = window.jQuery = require('jquery');

// Sticky nav
$(window).scroll(function(){

let fromTop = $(this).scrollTop();

if(fromTop > 130) {

		$('.mainHeader').addClass('header-top');
	} else {

		$('.mainHeader').removeClass('header-top');
	}

	if(fromTop > 140) {

		$('.mainHeader').addClass('fixed-header');
	} else {

		$('.mainHeader').removeClass('fixed-header');
	}
});

// Popup window
$(function () {

	$('.plan__button').on('click', function () {
		$('#popup').removeClass('display_hidden').addClass('display_visible');
	});

	$('.popup__exit').on('click', function () {
		$('#popup').removeClass('display_visible').addClass('display_hidden');
	});

	$('.popup_background').on('click', function(){
		$('#popup').removeClass('display_visible').addClass('display_hidden');
	});

});
