const $ = window.$ = window.jQuery = require('jquery');


// Clickble nav
let lastId,
    menu = $(".nav"),
    menuHeight = menu.outerHeight()+140, 
    menuItems = menu.find("a"), 
    scrollItems = menuItems.map(function(){    
        let item = $($(this).attr("href"));
        if (item.length) { return item }
    });

menuItems.on('click', function (e) {
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

$('.home__video').on('click', function () {
	$('.home__video').append('<iframe id="ytplayer" type="text/html" width="590" height="331.875" src="https://www.youtube.com/embed/nLCJA4PipIg?autoplay=1&enablejsapi=1&modestbranding=1&rel=0" frameborder="0" allowfullscreen>');
	$('.home__screen').addClass('display_hidden')
	
});
