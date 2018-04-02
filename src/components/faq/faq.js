import $ from 'jquery';

// F.A.Q. accordion
let allItems = $('.faq__list > .faq__item > p');
let allMinus = $('.faq__list > .faq__item > .faq__minus');
let allPlus = $('.faq__list > .faq__item > .faq__plus');

$('.faq__plus').on('click', function () {

	allItems.slideUp();
	allMinus.hide();
	allPlus.show();

	$(this).prev('p').slideDown();
	$(this).next('.faq__minus').show();
	$(this).hide();
	return false
});

$('.faq__minus').on('click', function () {
	
	allMinus.hide();
	allItems.slideUp();
	allPlus.show();
	return false
});
