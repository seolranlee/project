$(document).ready(function(){

	// alert($('.capacity_graph .value').data('value'));
	var now_t;
	now_t = $(this).scrollTop();
	if(now_t > 600){
		$('#header').addClass('fixed_top');
		// $('nav .bio').addClass('active');
	}

	var graph = $('.capacity_graph ul li');
	console.log(graph.length);

	var g_value = [];


	if(now_t > 1100){
		// alert('graph!');
		$('.capacity_graph').addClass('active');
		for(var i = 0; i < graph.length; i++){

			g_value[i] = $('.capacity_graph ul li').eq(i).children('.value').data('value');
			$('.capacity_graph.active ul li').eq(i).children('.graph').children('span').children('em').css('width',g_value[i]+'%');

		}
	}



	$(window).scroll(function(){

		now_t = $(this).scrollTop();
		console.log(now_t);
		if(now_t > 100){
			$('#left_visual').addClass('fixed');
		}

		if(now_t > 600){
			$('#header').addClass('fixed_top');
			// $('nav .bio').addClass('active');
		}
		if(now_t <= 600){
			$('#header').removeClass('fixed_top');
		}


		if(now_t <= 100){
			$('#left_visual').removeClass('fixed');
		}

		console.log(now_t);

		if(now_t > 1100){
			$('.capacity_graph').addClass('active');
			for(var i = 0; i < graph.length; i++){

				g_value[i] = $('.capacity_graph ul li').eq(i).children('.value').data('value');
				$('.capacity_graph.active ul li').eq(i).children('.graph').children('span').children('em').css('width',g_value[i]+'%');
			}
		}


	});





});