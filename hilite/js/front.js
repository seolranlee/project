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

	/*** video_popup_layer ****/

  $('.popup').popup({
    close: function(){
      $(this).find('.embed-container').empty();
    }
  });

  $(document).on('click', '[data-action="watch-video"]', function(e){

    e.preventDefault();

    var plugin = $('#popup-video.popup').data('popup');

    $('#popup-video.popup .embed-container').html(
      '<iframe src="'
      + e.currentTarget.href
      + '?autoplay=1" frameborder="0" allowfullscreen />'
    );

    plugin.open();

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