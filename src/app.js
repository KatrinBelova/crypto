const $ = window.$ = window.jQuery = require('jquery');


(function($) {


// Clickble nav
let lastId,
    menu = $(".nav"),
    menuHeight = menu.outerHeight()+50, 
    menuItems = menu.find("a"), 
    scrollItems = menuItems.map(function(){    
        let item = $($(this).attr("href"));
        if (item.length) { return item }
    });

menuItems.click(function(e){
    let href = $(this).attr("href"),
        offsetTop = href === "#" ? 0 : $(href).offset().top-menuHeight+1;
    $('html, body').stop().animate({
        scrollTop: offsetTop
    }, 1000);
    e.preventDefault();
});


$(window).scroll(function(){
	// get scroll top
	let fromTop = $(this).scrollTop()+menuHeight;

	let current = scrollItems.map(function(){
	    if ($(this).offset().top < fromTop)
	        return this;
	});
	// get id
	current = current[current.length-1];
	let id = current && current.length ? current[0].id : "";

	if (lastId !== id) {
	    lastId = id;
	 // add/remove active class
	    menuItems
	        .parent().removeClass('active')
	        .end().filter("[href="+'\"'+"#"+id+'\"'+"]").parent().addClass('active');
	}

// Sticky nav
let scrollTop = $(this).scrollTop();

if(scrollTop > 130) {

		$('.mainHeader').addClass('header-top');
	} else {

		$('.mainHeader').removeClass('header-top');
	}

	if(scrollTop > 1) {

		$('.mainHeader').addClass('fixed-header');
	} else {

		$('.mainHeader').removeClass('fixed-header');
	}
});

// Popup window

$('.plan__button').on('click', function (e) {
	$('#popup').removeClass('display_hidden').addClass('display_visible');
});

$('.popup__exit').on('click', function (e) {
	$('#popup').removeClass('display_visible_flex').addClass('display_hidden');
});

$('.popup_background').on('click', function (e) {
	$('#popup').removeClass('display_visible_flex').addClass('display_hidden');
});

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

// Animate Scroll
$(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
});



})(jQuery);
