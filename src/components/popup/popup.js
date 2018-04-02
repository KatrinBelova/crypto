import $ from 'jquery';
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

// Popup change <h2> membership
$('#plan__button_monthly').on('click', function (e) {
		$('.popup__membership').empty();
		$('.popup__membership').text( 'monthly membership' );
});

$('#plan__button_yearly').on('click', function (e) {
		$('.popup__membership').empty();
		$('.popup__membership').text( 'annual membership' );
});

$('#plan__button_lifetime').on('click', function (e) {
		$('.popup__membership').empty();
		$('.popup__membership').text( 'lifetime membership' );
});
