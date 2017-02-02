var Main = (function($){

	var body_scroll_ = function(){
		var now_t = $(this).scrollTop();
		var graph = $('.capacity_graph ul li');
		var g_value = [];

		if(now_t > 100){
			$('#left_visual').addClass('fixed');
		}

		if(now_t > 600){
			$('#header').addClass('fixed_top');
		}

		if(now_t > 1100){
			$('.capacity_graph').addClass('active');
			for(var i = 0; i < graph.length; i++){

				g_value[i] = $('.capacity_graph ul li').eq(i).children('.value').data('value');
				$('.capacity_graph.active ul li').eq(i).children('.graph').children('span').children('em').css('width',g_value[i]+'%');
			}
		}

		if(now_t <= 600){
			$('#header').removeClass('fixed_top');
		}

		if(now_t <= 100){
			$('#left_visual').removeClass('fixed');
		}

	}

	return {

		init : function(){

			$(window).on('scroll.body_scroll_',body_scroll_);

		},
	}

}(jQuery));

$(document).ready(function(){
	Main.init();
});