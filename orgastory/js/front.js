$(document).ready(function(){
	$("html, body").animate({ scrollTop: 0 }, 1000);
	$('body').addClass('active');
	var now_screen = 0;

	$('#intro > img').animate({ transform: 'scale(1)' });
	$('.contents img:first-child').animate({ top : '100px', opacity: '1'}, 800, 'easeOutCubic', function(){
		$('.contents img:nth-child(2)').animate({ top : '50%', left: '50%', opacity: '1'}, 700, 'easeOutCubic', function(){
			$('.contents img:nth-child(3)').animate({ top : '67%', left: '60%', opacity: '1'}, 700, 'easeOutCubic', function(){
				$('.contents .button').animate({ transform: 'scale(1)', opacity: '1' }, 500 );
			});
		});
	});

	$('.contents .button').click(function(){
		$('.contents img:first-child').animate({ top : '0', opacity: '0'}, 0, 'easeOutCubic', function(){
			$('.contents img:nth-child(2)').animate({ top : '55%', left: '45%', opacity: '0'}, 0, 'easeOutCubic', function(){
				$('.contents img:nth-child(3)').animate({ top : '71%', left: '65%', opacity: '0'}, 0, 'easeOutCubic', function(){
					$('.contents .button').animate({ transform: 'scale(1)', opacity: '0' }, 0 );
				});
			});
		});
		$('#intro').animate( { 'top' : '-100%' }, 400);
		$('li.m2').addClass('current');
		$('li.m2').siblings('li').removeClass('current');
		$('#orga #stripe').css('transform', 'translate3d(0,-30px,0)');
		now_screen = 1;
	});

	// 함수(line) 정의

	function line(direct) {
		
		if ( direct == 'prev' ){

			var h = $(window).scrollTop();

			if ( h <= 870 ) {
				$('li.m4').addClass('current');
				$('li.m4').siblings('li').removeClass('current');
			}

			if ( h <= 75 ){
				$('.step li').eq(0).removeClass('active');
			}

			if ( h <= 200 ) {
				$('.line li:first-child div').removeClass('active');
			}
			if ( h <= 350 ){
				$('.step li').eq(1).removeClass('active');
			}
			if ( h <= 500 ){
				$('.line li:nth-child(2) div').removeClass('active');
			}
			if ( h <= 700 ){
				$('.step li').eq(2).removeClass('active');
			}
			if ( h <= 900 ){
				$('.line li:nth-child(3) div').removeClass('active');
			}

		} else if ( direct == 'next' ) {

			var h = $(window).scrollTop();

			if ( h == 0 ) {
				$('#product').animate( { 'top' : '-100%' }, 400); // 전 섹션 올라가는 거
				$('li.m4').addClass('current');
				$('li.m4').siblings('li').removeClass('current');

			}
			if ( h >= 10 ){
				$('.line li:first-child div').addClass('active');
				$('.step li').eq(0).addClass('active');
			}
			if ( h >= 50 ){
				$('.line li:first-child div').addClass('active');
			}
			if ( h >= 250 ){
				$('.step li').eq(1).addClass('active');
				$('.line li:nth-child(2) div').addClass('active');
			}
			if ( h >= 450 ){
				$('.step li').eq(2).addClass('active');
				$('.line li:nth-child(3) div').addClass('active');
			}
			if ( h >= 870 ){
				$('li.m5').addClass('current');
				$('li.m5').siblings('li').removeClass('current');
			}

		}
	}

	// 함수(process) 정의

	function process() {

		$('.line li:first-child div').addClass('active');
		$('.step li').eq(0).addClass('active');
		$('.line li:first-child div').addClass('active');
		$('.step li').eq(1).addClass('active');
		$('.line li:nth-child(2) div').addClass('active');
		$('.step li').eq(2).addClass('active');
		$('.line li:nth-child(3) div').addClass('active');
	}


	// 함수(screen_mov) 정의

	function screen_mov(direct) {
		
		// (s)

		// 스크롤 올릴 때
		if ( direct == 'prev' ) {
			
			now_screen -= 1;
			console.log(now_screen);

			if ( now_screen < 0 ) {
				now_screen = 0;
				return false;

			} else if ( now_screen == 0 ) {

				$("html, body").animate({ scrollTop: 0 }, 50);
				$('li.m1').addClass('current');
				$('li.m1').siblings('li').removeClass('current');
				$('body').addClass('active');
				$('#intro').animate( { 'top' : '0' }, 400);
				$('.contents img:first-child').animate({ top : '100px', opacity: '1'}, 800, 'easeOutCubic', function(){
					$('.contents img:nth-child(2)').animate({ top : '50%', left: '50%', opacity: '1'}, 700, 'easeOutCubic', function(){
						$('.contents img:nth-child(3)').animate({ top : '67%', left: '60%', opacity: '1'}, 700, 'easeOutCubic', function(){
							$('.contents .button').animate({ transform: 'scale(1)', opacity: '1' }, 500 );
						});
					});
				});
		
			} else if ( now_screen == 1 ) {

				$('#orga #contents1 h2').removeClass('active');
				$('#orga #contents1 .line2').removeClass('active');
				$('#orga #contents1 img').removeClass('active');
				$('#orga #contents1 i').removeClass('active');
				$('#orga #contents1 .desc').removeClass('active');

				$('#orga #stripe').css('transform', 'translate3d(0,-30px,0)');

			} else if ( now_screen == 2 ) {

				$('#orga #contents2 h2').removeClass('active');
				$('#orga #contents2 .title').removeClass('active');
				$('#orga #contents2 i').removeClass('active');
				$('#orga #contents2 .desc').removeClass('active');
				$('#orga #contents2 img').removeClass('active');

				$('#orga #stripe').css('transform', 'translate3d(0px, -50%, 0px) scale(1.3, 1) rotate(0deg)');

				$('#orga #contents1 h2').addClass('active');
				$('#orga #contents1 .line2').addClass('active');
				$('#orga #contents1 img').addClass('active');
				$('#orga #contents1 i').addClass('active');
				$('#orga #contents1 .desc').addClass('active');

			} else if ( now_screen == 3 ) {
				
				$('#orga').animate( { 'top' : '0' }, 400);
				$('#contents1 img').css('display','block');
				$('#orga #contents2 h2').addClass('active');
				$('#orga #contents2 .title').addClass('active');
				$('#orga #contents2 i').addClass('active');
				$('#orga #contents2 .desc').addClass('active');

				$('li.m2').addClass('current');
				$('li.m2').siblings('li').removeClass('current');

			} else if ( now_screen == 4 ) {
	
				
				$('#orga #contents2 h2').removeClass('active');
				$('#orga #contents2 .title').removeClass('active');
				$('#orga #contents2 i').removeClass('active');
				$('#orga #contents2 .desc').removeClass('active');

				$('#product .title h2').eq(0).addClass('active');
				$('#product .title h2').eq(0).siblings('h2').removeClass('active');
				$('#product .checklist p').eq(0).addClass('active');
				$('#product .checklist p').eq(0).siblings('p').removeClass('active');

				$('.product1 .bg2').animate({ top : '-100%' }, 800, 'easeInOutCirc' );

				$('.product1 ul.product li').each(function(index){
					$(this).children('img').attr('src','images/product/obj' + (index) + '.png');

					$('.product1 ul.product li').eq(index).delay( 25 * index ).animate({ left : 0 } , 0 , function(){ 
						$('.product1 ul.product li').eq(index).delay( 100 * index ).animate({ left : 250 * index } , 500 , 'easeOutExpo' );
					});
				});

			} else if ( now_screen == 5 ) {
				
				$('.product1 .bg3').animate({ left : '100%' }, 800, 'easeInOutCirc' );
				$('.product1 ul.product li').each(function(index){
					$(this).children('img').attr('src','images/product/obj' + (index+4) + '.png');
					$('.product1 ul.product li').eq(index).delay( 25 * index ).animate({ top : 200 } , 250 , function(){ 
						$('.product1 ul.product li').eq(index).delay( 25 * index ).animate({ top : 0 }, 500, 'easeOutElastic');
					});
				});

				$('#product .title h2').eq(1).addClass('active');
				$('#product .title h2').eq(1).siblings('h2').removeClass('active');
				$('#product .checklist p').eq(1).addClass('active');
				$('#product .checklist p').eq(1).siblings('p').removeClass('active');

			} else if ( now_screen == 6 ) {

				$("html, body").animate({ scrollTop: 0 }, 50);
				$('body').addClass('active');
				$('#product').animate( { 'top' : '0%' }, 400);

				$('.product1 ul.product li').each(function(index){
					$(this).children('img').attr('src','images/product/obj' + (index+8) + '.png');
					$('.product1 ul.product li').eq(index).delay( 25 * index ).animate({ left : 300 * index } , 250 , function(){ 
						$('.product1 ul.product li').eq(index).delay( 25 * index ).animate({ left : 250 * index }, 500, 'easeOutElastic');
					});
				});
				
				$('li.m3').addClass('current');
				$('li.m3').siblings('li').removeClass('current');
				console.log(now_screen);

			} else if ( now_screen > 6 ){

				var h = $(window).scrollTop();

				if ( h >= 800 && h <= 2133 ) {
					now_screen = 9;
				}
				if ( h >= 7 && h < 900 ) {
					now_screen = 8;
				}

				console.log(h);
				console.log(now_screen);

				line('prev');
			}
		// 스크롤 내릴 때
		} else if ( direct == 'next' ) {
			now_screen += 1;

			console.log(now_screen);

			if ( now_screen == 1 ) {
				$('.contents img:first-child').animate({ top : '0', opacity: '0'}, 0, 'easeOutCubic', function(){
					$('.contents img:nth-child(2)').animate({ top : '55%', left: '45%', opacity: '0'}, 0, 'easeOutCubic', function(){
						$('.contents img:nth-child(3)').animate({ top : '69%', left: '65%', opacity: '0'}, 0, 'easeOutCubic', function(){
							$('.contents .button').animate({ transform: 'scale(1)', opacity: '0' }, 0 );
						});
					});
				});

				$('li.m2').addClass('current');
				$('li.m2').siblings('li').removeClass('current');

				$('#intro').animate( { 'top' : '-100%' }, 400);
				$('#orga #stripe').css('transform', 'translate3d(0,-30px,0)');
			
			} else if( now_screen == 2 ) {
			
				$('#orga #stripe').css('transform', 'translate3d(0px, -50%, 0px) scale(1.3, 1) rotate(0deg)');
				$('#orga #contents1 h2').addClass('active');
				$('#orga #contents1 .line2').addClass('active');
				$('#orga #contents1 img').addClass('active');
				$('#orga #contents1 i').addClass('active');
				$('#orga #contents1 .desc').addClass('active');

			} else if( now_screen == 3 ) {

				$('#orga #contents1 img').removeClass('active');
				$('#orga #contents2 img').addClass('active');

				
				$('#orga #stripe').css('transform', 'translate3d(0px, -50%, 0px) scale(1.3, 1) rotate(-180deg)');

				$('#orga #contents1 h2').removeClass('active');
				$('#orga #contents1 .line2').removeClass('active');
				$('#orga #contents1 i').removeClass('active');
				$('#orga #contents1 .desc').removeClass('active');

				///////////// contents2 ///////////////////////
				$('#orga #contents2 h2').addClass('active');
				$('#orga #contents2 .title').addClass('active');
				$('#orga #contents2 i').addClass('active');
				$('#orga #contents2 .desc').addClass('active');

			} else if( now_screen == 4 ) {

				$('li.m3').addClass('current');
				$('li.m3').siblings('li').removeClass('current');
				$('#orga').animate( { 'top' : '-100%' }, 400);
				$('#contents1 img').css('display','none');

				$('#orga #contents2 h2').removeClass('active');
				$('#orga #contents2 .title').removeClass('active');
				$('#orga #contents2 i').removeClass('active');
				$('#orga #contents2 .desc').removeClass('active');

				$('#product .title h2').eq(0).addClass('active');
				$('#product .title h2').eq(0).siblings('h2').removeClass('active');
				$('#product .checklist p').eq(0).addClass('active');
				$('#product .checklist p').eq(0).siblings('p').removeClass('active');
		
				$('.product1 ul.product li').each(function(index){
					$(this).children('img').attr('src','images/product/obj' + (index) + '.png');

					$('.product1 ul.product li').eq(index).delay( 25 * index ).animate({ left : 0 } , 0 , function(){ 
						$('.product1 ul.product li').eq(index).delay( 100 * index ).animate({ left : 250 * index } , 500 , 'easeOutExpo' );
					});
				});

			} else if( now_screen == 5 ) {
				
				////////////////// PRODUCT 두번째 //////////////////
				$('#product .title h2').eq(1).addClass('active');
				$('#product .title h2').eq(1).siblings('h2').removeClass('active');
				$('#product .checklist p').eq(1).addClass('active');
				$('#product .checklist p').eq(1).siblings('p').removeClass('active');

				$('.product1 .bg2').animate({ top : 0 }, 800, 'easeInOutCirc' );


				$('.product1 ul.product li').each(function(index){
					$(this).children('img').attr('src','images/product/obj' + (index+4) + '.png');
					$(this).children('img').attr('src','images/product/obj' + (index+4) + '.png');
					$('.product1 ul.product li').eq(index).delay( 25 * index ).animate({ top : 200 } , 250 , function(){ 
						$('.product1 ul.product li').eq(index).delay( 25 * index ).animate({ top : 0 }, 500, 'easeOutElastic');
					});
				});

			} else if ( now_screen == 6) {

				////////////////// PRODUCT 세번째 //////////////////
				$('.product1 .bg3').animate({ left : 0 }, 800, 'easeInOutCirc' );

				$('.product1 ul.product li').each(function(index){
					$(this).children('img').attr('src','images/product/obj' + (index+8) + '.png');
					$('.product1 ul.product li').eq(index).delay( 25 * index ).animate({ left : 300 * index } , 250 , function(){ 
						$('.product1 ul.product li').eq(index).delay( 25 * index ).animate({ left : 250 * index }, 500, 'easeOutElastic');
					});
				});

				$('#product .title h2').eq(2).addClass('active');
				$('#product .title h2').eq(2).siblings('h2').removeClass('active');

				$('#product .checklist p').eq(2).addClass('active');
				$('#product .checklist p').eq(2).siblings('p').removeClass('active');

			}

			if (now_screen > 6 ) {

				$('body').removeClass('active');
				var h = $(window).scrollTop();


				if (now_screen == 7 ) {
					$("html, body").animate({ scrollTop: 0 }, 50);
					now_screen = 7;
				}
				if ( h >= 7 && h < 900 ) {
					$('li.m4').addClass('current');
					$('li.m4').siblings('li').removeClass('current');
					now_screen = 8;
				}
				if ( h >= 800 && h <= 2133 ) {
					now_screen = 9;
				}

				line('next');
			}
		}
		// (e)

	}



	// NAVIGATION
	
	var slide = [ '0', '2', '4', '8', '9' ];

	$('.mainmenu .circle-o').click(function(){

		var idx = $(this).parent().index();

		if ( idx == 4 ) {

			process();
			for ( var i=now_screen; i < slide[3]; i++) { 
				screen_mov('next');
			
			}
			now_screen = 9;
			$("html, body").animate({ scrollTop: 1400 }, 500);
			$('li.m5').addClass('current');
			$('li.m5').siblings('li').removeClass('current');

		} else if ( now_screen == 9 ){
			$("html, body").animate({ scrollTop: 0 }, 500, function(){
				$('li.m4').addClass('current');
				$('li.m4').siblings('li').removeClass('current');
				now_screen = 8;
				for ( var i=7; i >= slide[idx]; i--) { 
					screen_mov('prev');
				}
			});

		} else if ( now_screen == 8 ) {

			$("html, body").animate({ scrollTop: 0 }, 500, function(){
				now_screen = 7;
				for ( var i=6; i >= slide[idx]; i--) { 
					screen_mov('prev');
				}
			});

		} else if ( now_screen < slide[idx] ) {
			for ( var i=now_screen; i < slide[idx]; i++) { 
				screen_mov('next');
			}
		} else if ( now_screen > slide[idx] ) {
			for ( var i=now_screen; i > slide[idx]; i--) { 
				screen_mov('prev');
			}
		}		
	});


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


	// miester
	$('#miester ul li').mouseenter(function(){
		$(this).children('div').stop().animate({ transform: 'scale(1)', opacity: '1'}, 400, 'easeOutCubic');
	});
	$('#miester ul li').mouseleave(function(){
		$(this).children('div').stop().animate({ transform: 'scale(0.8)', opacity: '0'}, 400, 'easeOutCubic');
	});


});