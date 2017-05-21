$(document).ready(function() {
	var submenu = $('.sub_menu');
	$('.reservation').on('click',function(event){
		event.preventDefault();
		if($(this).hasClass('on')){
			TweenLite.to( submenu, .5, { opacity:0, height:0, ease:Power3.easeInOut } );
			$(this).removeClass('on');
		}else{
			TweenLite.to( submenu, .5, { opacity:1, height:642, ease:Power3.easeInOut } );
			$(this).addClass('on')
		}
	});

	$('.submenu_close').on('click',function(event){
		event.preventDefault();
		TweenLite.to( submenu, .5, { opacity:0, height:0, ease:Power3.easeInOut } );
		$('.reservation').removeClass('on')
	});

});
// smooth change