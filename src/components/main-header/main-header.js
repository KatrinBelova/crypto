import $ from 'jquery';

// Clickble nav
let lastId,
    menu = $(".nav"),
    menuHeight = menu.outerHeight()+140, 
    menuItems = menu.find("a"), 
    scrollItems = menuItems.map(function(){    
        let item = $($(this).attr("href"));
        if (item.length) { return item }
    });

// Scroll NAV 
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

// Scroll to Section Plan

$('a[href*="#plan"]').on('click', function (e) {
	e.preventDefault();

	let position = $($(this).attr("href")).offset().top;

	$('html, body').animate({
		scrollTop: position
	}, 1000, 'linear');
});

// Video on click

$('.home__video').on('click', function () {
	$('.home__video').append('<iframe id="ytplayer" type="text/html" width="590" height="331.875" src="https://www.youtube.com/embed/nLCJA4PipIg?autoplay=1&enablejsapi=1&modestbranding=1&rel=0" frameborder="0" allowfullscreen>');
	$('.home__screen').addClass('display_hidden');
	$('.home__control').addClass('display_hidden');
	$('.home__play').addClass('display_hidden');
	
});
