var Main = (function($){

	// 기능들만 모아둔다.

	// 스크롤 기능
	var body_scroll_ = function(){
		var now = $(this).scrollTop();

		if(now>100){
		 	$('header').addClass('fixed');
		}else{
			$('header').removeClass();
		}
		// console.log(now);
	}

	//플로팅버튼 기능
	var floating_btn_click_ = function(){
		$('#floating_area .writecard').addClass('on');
		$('#floating_area .write_btn').addClass('off');
	}

	// 닫기 기능
	var close_click_ = function(e){

		if ($('.writecard').hasClass('on')){
			if (!$('.floating_btn').has(e.target).length) {
				if (!$('.writecard').has(e.target).length) {
					
					$('.writecard').removeClass('on');
					$('.write_btn').removeClass('off');

				};
			};
		};

	}

	// 서치박스 기능
	var search_click_ = function(e){
		e.preventDefault();
		$('.search_box').toggleClass('on');
	}

	// 좋아요 기능
	var like_click_ = function(){

		var likeClass = $(this).find('i').attr('class');
		if(likeClass == 'fa fa-star-o fa-2x'){
			$(this).find('i').removeClass();
			$(this).find('i').addClass('fa fa-star fa-2x');
		}else{
			$(this).find('i').removeClass();
			$(this).find('i').addClass('fa fa-star-o fa-2x');
		}

	}


	return {

		init : function(){

			// 이벤트들만 모아둔다.

			// 스크롤 이벤트
			$(window).on('scroll.body_scroll_',body_scroll_);

			//플로팅버튼 이벤트
			$(document).on('click.floating_btn_click_', '.floating_btn', floating_btn_click_);

			// 닫기 이벤트
			$(document).on('click.close_click_, touchstart.close_touchstart_', 'body', close_click_);

			// 서치박스 이벤트
			$(document).on('click.search_click_', '.ico_search', search_click_);

			// 좋아요 이벤트
			$(document).on('click.like_click_', '.card_bottom .like a', like_click_);

		},
	}

}(jQuery));

$(document).ready(function(){
	Main.init();
});