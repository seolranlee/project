$(document).ready(function(){

	var img_array = $('.work_content img');
	var doc_top = $(window).scrollTop();



	var graph = $('.contribute ul li');
	console.log(graph.length);

	var g_value = [];


	// 스크롤이벤트 동작 전

	var graph_h = $('.contribute').offset().top-700;

		// console.log(graph_h);

		if(doc_top >= graph_h){

			$('.contribute').addClass('active');

			for(var i = 0; i < graph.length; i++){

				g_value[i] = $('.contribute ul li').eq(i).children('.value').data('value');
				$('.contribute.active ul li').eq(i).children('.graph').children('span').children('em').css('width',g_value[i]+'%');
			}

		}
		
	for(var i = 0; i<img_array.length; i++){

		var img_pos = $('.work_content img').eq(i);
		if(doc_top >= img_pos.offset().top-700){
			img_pos.addClass('active');

		}

	}

	
	$(window).scroll(function(){

		var win_top = $(this).scrollTop();

		for(var i = 0; i<img_array.length; i++){

			var img_pos = $('.work_content img').eq(i);
			if(win_top >= img_pos.offset().top-700){
				img_pos.addClass('active');

			}else if(win_top < img_pos.offset().top+700){
				img_pos.removeClass('active');

			}

		}
		// for{e}


		var graph_h = $('.contribute').offset().top-700;

			// console.log(graph_h);

			if(win_top >= graph_h){

				$('.contribute').addClass('active');

				for(var i = 0; i < graph.length; i++){

					g_value[i] = $('.contribute ul li').eq(i).children('.value').data('value');
					$('.contribute.active ul li').eq(i).children('.graph').children('span').children('em').css('width',g_value[i]+'%');
				}

			}


	});




});