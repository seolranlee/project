var Work = (function($){

	var body_scroll_ = function(){

		var win_top = $(this).scrollTop();
		var img_array = $('.work_content img');
		var graph = $('.contribute ul li');
		var g_value = [];
		var graph_h = $('.contribute').offset().top-700;

		for(var i = 0; i<img_array.length; i++){

			var img_pos = $('.work_content img').eq(i);
			if(win_top >= img_pos.offset().top-700){
				img_pos.addClass('active');

			}else if(win_top < img_pos.offset().top+700){
				img_pos.removeClass('active');

			}

		}

		if(win_top >= graph_h){

			$('.contribute').addClass('active');

			for(var i = 0; i < graph.length; i++){

				g_value[i] = $('.contribute ul li').eq(i).children('.value').data('value');
				$('.contribute.active ul li').eq(i).children('.graph').children('span').children('em').css('width',g_value[i]+'%');
			}

		}
	}

	return {

		init : function(){
			$(window).on('scroll.body_scroll_',body_scroll_);
		},
	}

}(jQuery));

$(document).ready(function(){
	Work.init();
});