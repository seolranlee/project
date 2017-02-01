$(document).ready(function(){


	var now_screen = 0;
	$('.intro li').animate({ transform: 'scale(1)', opacity: '1' }, 1000, 'easeOutCubic');

	$('.screen').addClass('active1');
	

	$('.screen1 .text li:nth-child(3)').animate({ bottom : '11px' }, 500);

	$('.screen1 .text li:nth-child(3)').click(function(){
		$('.screen1 .text li').eq(2).css('display','none');
		$('.screen').removeClass('active1');
		$('.screen').addClass('active2');
		$('.screen2').animate({ top : '0' }, 500, function(){
			$('.screen1').addClass('remove');
			$('.screen2').addClass('height');
			$('.screen2 .circle li').animate({ transform: 'scale(1)', opacity: '1' }, 1000, 'easeOutCubic');
			$('.accordion_banner2 div').eq(0).animate({"margin-top" : "9px","opacity" : "1"}, 300, 'easeOutCubic', function(){
				$('.accordion_banner2 div').eq(2).animate({"margin-top" : "5px","opacity" : "1"}, 300, 'easeOutCubic', function(){
					$('.accordion_banner2 div').eq(4).animate({"margin-top" : "5px","opacity" : "1"}, 300, 'easeOutCubic', function(){
						$('.accordion_banner2 div').eq(6).animate({"margin-top" : "5px","opacity" : "1"}, 300, 'easeOutCubic');
					});
				});
			});
		});
	});

	$('.screen1 .menu').click(function(){
		$('.screen1 .text li').eq(2).css('display','none');
		//alert('menu!');
		$('.menu').css('display','none');
		$('.sidebar .film').addClass('active');
		//$('.screen1 .menu').toggleClass('active');
		$('.sidebar .aside').addClass('active');
	});

	$('.sidebar .aside .close').click(function(){
		$('.menu').css('display','block');
		$('.screen1 .text li').eq(2).css('display','block');
		$('.sidebar .film').removeClass('active');
		$('.sidebar .aside').removeClass('active');
	});

	$('.aside .container li:nth-child(7)').click(function(){
		//alert('!');
		$('.screen').removeClass('active1');
		$('.screen').addClass('active2');
		$('.screen2').addClass('remove');
		$('.sidebar .aside').removeClass('active');
		$('.recommend').animate({ left : '0' }, 300, function(){
			$('.recommend .circle').animate({ transform: 'scale(1)', opacity: '1' }, 1000, 'easeOutCubic');
			//$('.recommend .product li:first-child').animate({ top : '85px' }, 500);

			$('.recommend .product li').eq(0).animate({ top : '85px' }, 200, 'easeOutCubic', function(){
				$('.recommend .product li').eq(1).animate({ top : '191px' }, 200, 'easeOutCubic', function(){
					$('.recommend .product li').eq(2).animate({ top : '297px'}, 200, 'easeOutCubic', function(){
						$('.recommend .product li').eq(3).animate({ top : '403px'}, 200, 'easeOutCubic', function(){
							$('.recommend .product li').eq(4).animate({ top : '509px'}, 200, 'easeOutCubic', function(){
								$('.recommend .product li').eq(5).animate({ top : '615px'}, 200, 'easeOutCubic', function(){
									$('.recommend .product li').eq(6).animate({ top : '721px'}, 200, 'easeOutCubic', function(){
										$('.recommend .product li').eq(7).animate({ top : '827px'}, 200, 'easeOutCubic', function(){	
										});
									});
								});
							});
						});
					});
				});
			});

		});
	});

	$('.recommend .product li').eq(2).click(function(){

		$('.film').removeClass('active');
		$('.recommend').addClass('remove');
		$('.screen1').addClass('opacity');
		$('.detail').fadeIn(function(){
			$('.detail .desc li:nth-child(2) img').animate({ transform: 'scale(1)', opacity: '1' }, 500, 'easeOutCubic');
			$('.detail .circle').animate({ transform: 'scale(1)', opacity: '1' }, 1000, 'easeOutCubic');
		});
	});

	$('.product .heart').click(function(){
		$(this).toggleClass('active');
	});



	// 함수(screen_mov) 정의

	function screen_mov(direct) {

		// 스크롤 내릴 때
		if ( direct == 'next' ) {
			now_screen += 1;

			if ( now_screen == 1 ) {

				$('.intro').animate({ top: '-700px' },200, 'easeOutCubic', function(){
					$('.screen1 .circle li').animate({ transform: 'scale(1)', opacity: '1' }, 1000, 'easeOutCubic');
					$('.screen1 .layer li').each(function(index){
						$('.screen1 .layer li').eq(index).delay( 200 * index ).animate({ top: '147px', opacity: '1' }, 400, 'easeOutCubic', function(){
							$('.screen1 .layer li:nth-child(2) div:nth-child(4)').animate({ top: 118 }, 200, 'linear');
						});
					});
				});

			} else if( now_screen == 2 ) {	
				
			}
		}
		// (e)

	}

	

	// screen_mov함수 정의 끝
	


	// 휠이벤트

	$(window).bind('mousewheel DOMMouseScroll', function(e){

		var delta = e.originalEvent.wheelDelta || e.originalEvent.detail*-1;
		
		//마우스 스크롤을 내릴 시

		if ( delta < 0 ) {
			
			screen_mov('next');

		}
		
		//마우스 스크롤을 올릴 시
		
		else if ( delta > 0 ) {

			screen_mov('prev');

		}
	});

	// 휠이벤트 끝



});