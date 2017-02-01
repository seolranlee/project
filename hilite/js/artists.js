$(document).ready(function() {
	
	/*** smooth scrolling ***/
	$(function() {
	  $('a[href*=#]:not([href=#])').click(function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
		  var target = $(this.hash);
		  target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
		  if (target.length) {
			$('html,body').animate({
			  scrollTop: target.offset().top
			}, 500);
			return false;
		  }
		}
	  });
	});
	
	
	$('div.menu img').click(function(){

		$('div.category').addClass('open');
	});

	$('img.close_btn').click(function(){

		$('div.category').removeClass('open');
	});

	setInterval(function(){
		$('.scroll-arrow').animate({'top':'5px'});
		$('.scroll-arrow').animate({'top':'0'});
	});

	/*** artist hover  ***/

	$('#artists ul li img').mouseenter(function(){
	
		if ( $(this).hasClass('hover') ) {
			$(this).animate({ opacity: 1 } , 200);
		}
	});

	$('#artists ul li img').mouseleave(function(){
	
		if ( $(this).hasClass('hover') ) {
			$(this).animate({ opacity: 0 } , 200);
		}
	});


  /*** scroll ***/
	
	$(window).on('scroll', function() {
		
		var nowScroll = $(window).scrollTop();
		
		if ( nowScroll >= 1000) {
			
			$('div#bodyborder-bottom p a').stop().fadeIn(100);
		 } else { 

			 $('div#bodyborder-bottom p a').stop().fadeOut(100);
		 }
	});

});