var Main = (function($){

	var left_screen_enter_ = function(){

		$('.menu').animate({ opacity: 0 } , 200);
		$('.viewmenu').animate({ opacity: 1 } , 200);
	}

	var left_screen_leave_ = function(){

		$('.menu').animate({ opacity: 1 } , 200);
		$('.viewmenu').animate({ opacity: 0 } , 200);
	}

	var right_screen_enter_ = function(){

		$('.arrow').animate({ opacity: 0 } , 200);
		$('.viewpf').animate({ opacity: 1 } , 200);
	}

	var right_screen_leave_ = function(){

		$('.arrow').animate({ opacity: 1 } , 200);
		$('.viewpf').animate({ opacity: 0 } , 200);
	}

	var img_enter_ = function(){
		$(this).children('div.pf-desc').animate({ opacity: 1 } , 200);
	}

	var img_leave_ = function(){
		$(this).children('div.pf-desc').animate({ opacity: 0 } , 200);
	}


	return {

		init : function(){

			$('.left-screen').on('mouseenter.left_screen_enter_', left_screen_enter_);
			$('.left-screen').on('mouseleave.left_screen_leave_', left_screen_leave_);
			$('.right-screen').on('mouseenter.right_screen_enter_', right_screen_enter_);
			$('.right-screen').on('mouseleave.right_screen_leave_', right_screen_leave_);

			$('#portfolio ul.pf li.img').on('mouseenter.img_enter_', img_enter_);
			$('#portfolio ul.pf li.img').on('mouseleave.img_leave_', img_leave_);
		},
	}

}(jQuery));

$(document).ready(function(){
	Main.init();

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

	/* circle process bar */
	$('.demo').percentcircle({

		animate : true,
		diameter : 100,
		guage: 2,
		coverBg: '#e9e9e9',
		bgColor: '#e9e9e9',
		fillColor: '#222121',
		percentSize: '15px',
		percentWeight: 'normal'

	});

});
