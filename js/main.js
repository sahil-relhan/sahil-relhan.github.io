jQuery(function($) {'use strict',

	//Countdown js
	 $("#countdown").countdown({
			date: "10 july 2014 12:00:00",
			format: "on"
		},

		function() {
			// callback function
		});

		//map_style

		function initMap() {

		var location = new google.maps.LatLng(28.7197, 77.0661);

		var mapCanvas = document.getElementById('map');
		var mapOptions = {
				center: location,
				zoom: 16,
				panControl: false,
				mapTypeId: google.maps.MapTypeId.ROADMAP
		}
		var map = new google.maps.Map(mapCanvas, mapOptions);

		var markerImage = 'marker.png';

		var marker = new google.maps.Marker({
				position: location,
				map: map,
				icon: markerImage
		});

		// var contentString = '<div class="map_description"><h3>Maharaja Agrasen Institute of Technology</h3><p>PSP Area, Plot No. 1, Sector-22, Rohini,<br>Delhi-110086<br></p>Fax: +1 (123) 456 7891</div>';
    //
		// var infowindow = new google.maps.InfoWindow({
		// 		content: contentString,
		// 		maxWidth: 400
		// });
    //
		// marker.addListener('click', function () {
		// 		infowindow.open(map, marker);
		// });


}

google.maps.event.addDomListener(window, 'load', initMap);








	//Scroll Menu

	function menuToggle()
	{
		var windowWidth = $(window).width();

		if(windowWidth > 767 ){
			$(window).on('scroll', function(){
				if( $(window).scrollTop()>405 ){
					$('.main-nav').addClass('fixed-menu animated slideInDown');
				} else {
					$('.main-nav').removeClass('fixed-menu animated slideInDown');
				}
			});
		}else{

			$('.main-nav').addClass('fixed-menu animated slideInDown');

		}
	}

	menuToggle();


	// Carousel Auto Slide Off
	$('#event-carousel, #twitter-feed, #sponsor-carousel ').carousel({
		interval: false
	});


	// Contact form validation
	var form = $('.contact-form');
	form.submit(function () {'use strict',
		$this = $(this);
		$.post($(this).attr('action'), function(data) {
			$this.prev().text(data.message).fadeIn().delay(3000).fadeOut();
		},'json');
		return false;
	});

	$( window ).resize(function() {
		menuToggle();
	});

	$('.main-nav ul').onePageNav({
		currentClass: 'active',
	    changeHash: false,
	    scrollSpeed: 900,
	    scrollOffset: 0,
	    scrollThreshold: 0.3,
	    filter: ':not(.no-scroll)'
	});

});

//
// // Google Map Customization
// // (function(){
// //
// // 	var map;
// //
// // 	map = new GMaps({
// // 		el: '#gmap',
// // 		lat: 28.7197,
// // 		lng:  77.0661,
// // 		scrollwheel:false,
// // 		zoom: 16,
// // 		zoomControl : false,
// // 		panControl : false,
// // 		streetViewControl : false,
// // 		mapTypeControl: false,
// // 		overviewMapControl: false,
// // 		clickable: false
// // 	});
// //
// // 	var image = 'images/map-icon.png';
// // 	map.addMarker({
// // 		lat: 28.7197,
// // 		lng:  77.0661,
// // 		icon: image,
// // 		animation: google.maps.Animation.DROP,
// // 		verticalAlign: 'bottom',
// // 		horizontalAlign: 'center',
// // 		backgroundColor: '#3e8bff',
// // 	});
//
//
// 	var styles = [
//
// 	{
// 		"featureType": "road",
// 		"stylers": [
// 		{ "color": "#b4b4b4" }
// 		]
// 	},{
// 		"featureType": "water",
// 		"stylers": [
// 		{ "color": "#d8d8d8" }
// 		]
// 	},{
// 		"featureType": "landscape",
// 		"stylers": [
// 		{ "color": "#f1f1f1" }
// 		]
// 	},{
// 		"elementType": "labels.text.fill",
// 		"stylers": [
// 		{ "color": "#000000" }
// 		]
// 	},{
// 		"featureType": "poi",
// 		"stylers": [
// 		{ "color": "#d9d9d9" }
// 		]
// 	},{
// 		"elementType": "labels.text",
// 		"stylers": [
// 		{ "saturation": 1 },
// 		{ "weight": 0.1 },
// 		{ "color": "#000000" }
// 		]
// 	}
//
// 	];
//
// 	map.addStyle({
// 		styledMapName:"Styled Map",
// 		styles: styles,
// 		mapTypeId: "map_style"
// 	});
//
// 	map.setStyle("map_style");
// }());

function smooth_scrolling(){
	$('#home_button').on('click',function(){
	$('html, body').animate({scrollTop: $("#home").offset().top},700);
});
$('#explore_button').on('click',function(){
$('html, body').animate({scrollTop: $("#explore").offset().top},700);
});
$('#event_button').on('click',function(){
$('html, body').animate({scrollTop: $("#event").offset().top},700);
});
$('#about_button').on('click',function(){
$('html, body').animate({scrollTop: $("#about").offset().top},700);
});
$('#twitter_button').on('click',function(){
$('html, body').animate({scrollTop: $("#twitter").offset().top},700);
});
$('#contact_button').on('click',function(){
$('html, body').animate({scrollTop: $("#contact").offset().top},700);
});

}
smooth_scrolling();
