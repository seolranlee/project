$(document).ready(function(){

	/////////// drag스크롤 제어{s} ///////////
	$( "#draggable" ).draggable({
  	scroll: false
	});
	// Getter
	var scroll = $( "#draggable" ).draggable( "option", "scroll" );
	// Setter
	$( "#draggable" ).draggable( "option", "scroll", false );
	/////////// drag스크롤 제어{e} ///////////


	//center -> left
	$( "#draggable" ).draggable();
	$( '.center_left' ).droppable({
		drop: function() {

			$('#center').hide();
			$('h2').text('SIDE#A');
			$('h2').addClass('v1');
			$('#draggable').text('↓');
			$('#draggable').css('background','#67d4ef');
			$('#left2').animate({ left : '0' }, 0, 'easeOutCubic');
			$('#left2').stop().animate({ top : '97%' }, 1000, 'easeOutCubic');
			$('#left').animate({ left : '0' }, 400, 'easeOutCubic');

		}
	});

	// center -> right
	$( '.center_right' ).droppable({
		drop: function() {

			$('#center').hide();
			$('h2').text('SIDE#B');
			$('h2').addClass('v2');
			$('.cl-effect-4 a span').css('background','rgba(255,255,255,1)');
			$('header > h1 a').css('color','rgba(255,255,255,0.9)');
			$('nav a').css('color','rgba(255,255,255,0.9)');
			$('#draggable').text('↓');
			$('#draggable').css('background','#000');
			$('#right2').animate({ left : '0' }, 0, 'easeOutCubic');
			$('#right2').stop().animate({ top : '97%' }, 1000, 'easeOutCubic');
			$('#right').animate({ left : '0' }, 400, 'easeOutCubic');
		}
	});

	// left -> left_bottom
	$( '#left2' ).droppable({
		drop: function() {
			$( "#draggable" ).hide();
			$('h2').hide();
			$('.cl-effect-4 a span').css('background','rgba(255,255,255,1)');
			$('header > h1 a').css('color','rgba(255,255,255,0.9)');
			$('nav a').css('color','rgba(255,255,255,0.9)');
			$(this).animate({ top : '0' }, 800, 'easeOutCubic');
		}
	});

	// right -> right_bottom
	$( '#right2' ).droppable({
		drop: function() {
			$( "#draggable" ).hide();
			$('h2').hide();
			$(this).animate({ top : '0' }, 800, 'easeOutCubic');
		}
	});

	// left -> center
	$( '.left_right' ).droppable({
		drop: function() {

			$('#center').show();
			$('#draggable').text('↔');
			$('#draggable').css('background', '#2b2a29');
			$('h2').text('CHOIYOUJUNG');
			$('h2').removeClass('v1');
			$('#left2').animate({ top : '100%' }, 800, 'easeOutCubic');
			$('#left2').animate({ left : '-100%' }, 0, 'easeOutCubic');
			$('#left').animate({ left : '-100%' }, 800, 'easeOutCubic');

		}
	});

	// right -> center
	$( '.right_left' ).droppable({
		drop: function() {

			$('#center').show();
			$('h2').text('CHOIYOUJUNG');
			$('h2').removeClass('v2');
			$('header > h1 a').css('color','#313131');
			$('nav a').css('color','#313131');
			$('#draggable').text('↔');
			$('#draggable').css('background', '#2b2a29');
			$('#right2').animate({ top : '100%' }, 800, 'easeOutCubic');
			$('#right2').animate({ left : '100%' }, 0, 'easeOutCubic');

			$('#right').animate({ left : '100%' }, 800, 'easeOutCubic');

		}
	});

	// thum{s}

	// 함수의 정의

	var idx = 0;
	var screen = 0;

	// 함수 next 정의
	function next(){

		screen++;
		color();

		$('#left2 .blind1').stop().animate({left:'0'},400,function(){

			$('.thum>li').eq(0).children('a').children('img').attr({src:'images/side_a/thum' + ( 0 + idx ) + '.png'});
			$('.thum>li').eq(1).children('a').children('img').attr({src:'images/side_a/thum' + ( 1 + idx ) + '.png'});
			$('.thum>li').eq(2).children('a').children('img').attr({src:'images/side_a/thum' + ( 2 + idx ) + '.png'});
			$('.thum>li').eq(3).children('a').children('img').attr({src:'images/side_a/thum' + ( 3 + idx ) + '.png'});

			$('#left2 .blind1').stop().animate({left:'100%'},400, function(){
				$('#left2 .blind1').stop().animate({left:'-100%'},0);
			});
		});

	}

	// 함수 _next 정의
	function _next(){

		screen++;
		_color();

		$('#right2 .blind1').stop().animate({left:'0'},400,function(){

			$('#right2 .thum>li').eq(0).children('a').children('img').attr({src:'images/side_b/thum' + ( 0 + idx ) + '.png'});
			$('#right2 .thum>li').eq(1).children('a').children('img').attr({src:'images/side_b/thum' + ( 1 + idx ) + '.png'});
			$('#right2 .thum>li').eq(2).children('a').children('img').attr({src:'images/side_b/thum' + ( 2 + idx ) + '.png'});
			$('#right2 .thum>li').eq(3).children('a').children('img').attr({src:'images/side_b/thum' + ( 3 + idx ) + '.png'});

			$('#right2 .blind1').stop().animate({left:'100%'},400, function(){
				$('#right2 .blind1').stop().animate({left:'-100%'},0);
			});
		});

	}

	// 함수 prev 정의
	function prev(){

		screen--;
		color();

		$('#left2 .blind2').stop().animate({left:'0'},400,function(){

			$('#left2 .thum>li').eq(0).children('a').children('img').attr({src:'images/side_a/thum' + ( 0 + idx ) + '.png'});
			$('#left2 .thum>li').eq(1).children('a').children('img').attr({src:'images/side_a/thum' + ( 1 + idx ) + '.png'});
			$('#left2 .thum>li').eq(2).children('a').children('img').attr({src:'images/side_a/thum' + ( 2 + idx ) + '.png'});
			$('#left2 .thum>li').eq(3).children('a').children('img').attr({src:'images/side_a/thum' + ( 3 + idx ) + '.png'});

			$('#left2 .blind2').stop().animate({left:'-100%'},400, function(){
				$('#left2 .blind2').stop().animate({left:'100%'},0);
			});
		});

	}

	// 함수 _prev 정의
	function _prev(){

		screen--;
		_color();

		$('#right2 .blind2').stop().animate({left:'0'},400,function(){

			$('#right2 .thum>li').eq(0).children('a').children('img').attr({src:'images/side_b/thum' + ( 0 + idx ) + '.png'});
			$('#right2 .thum>li').eq(1).children('a').children('img').attr({src:'images/side_b/thum' + ( 1 + idx ) + '.png'});
			$('#right2 .thum>li').eq(2).children('a').children('img').attr({src:'images/side_b/thum' + ( 2 + idx ) + '.png'});
			$('#right2 .thum>li').eq(3).children('a').children('img').attr({src:'images/side_b/thum' + ( 3 + idx ) + '.png'});

			$('#right2 .blind2').stop().animate({left:'-100%'},400, function(){
				$('#right2 .blind2').stop().animate({left:'100%'},0);
			});
		});

	}

	// 함수 color 정의
	function color(){

		if( screen == 0 ){
			$('#left2 .bg').css('background' , 'rgba(103,212,239,1)');
			$('#left2 .grid .thum>li').css('background' , 'rgba(103,212,239,1)');
			$('#left2 .grid .thum .blind2').css('background' , 'rgba(103,212,239,1)');
			$('#left2 .typo').children('li').eq(0).children('img').attr({src : 'images/typo/l.png'});
			$('#left2 .typo').children('li').eq(1).children('img').attr({src : 'images/typo/o.png'});
			$('#left2 .typo').children('li').eq(2).children('img').attr({src : 'images/typo/v.png'});
			$('#left2 .typo').children('li').eq(3).children('img').attr({src : 'images/typo/e.png'});
			$('#left2 .typo').children('li').eq(4).children('img').attr({src : 'images/typo/l2.png'});
			$('#left2 .typo').children('li').eq(5).children('img').attr({src : 'images/typo/y.png'});
		} if( screen == 1 ){
			$('#left2 .bg').css('background' , 'rgb(240, 142, 142)');
			$('#left2 .grid .thum>li').css('background' , 'rgb(240, 142, 142)');
			$('#left2 .grid .thum .blind1').css('background' , 'rgb(240, 142, 142)');
			$('#left2 .grid .thum .blind2').css('background' , 'rgb(240, 142, 142)');
			$('#left2 .typo').children('li').eq(0).children('img').attr({src : 'images/typo/l_2.png'});
			$('#left2 .typo').children('li').eq(1).children('img').attr({src : 'images/typo/o_2.png'});
			$('#left2 .typo').children('li').eq(2).children('img').attr({src : 'images/typo/v_2.png'});
			$('#left2 .typo').children('li').eq(3).children('img').attr({src : 'images/typo/e_2.png'});
			$('#left2 .typo').children('li').eq(4).children('img').attr({src : 'images/typo/l2_2.png'});
			$('#left2 .typo').children('li').eq(5).children('img').attr({src : 'images/typo/y_2.png'});
		} if( screen == 2 ){
			$('#left2 .bg').css('background' , 'rgb(240, 224, 142)');
			$('#left2 .grid .thum>li').css('background' , 'rgb(240, 224, 142)');
			$('#left2 .grid .thum .blind1').css('background' , 'rgb(240, 224, 142)');
			$('#left2 .grid .thum .blind2').css('background' , 'rgb(240, 224, 142)');
			$('#left2 .typo').children('li').eq(0).children('img').attr({src : 'images/typo/l_3.png'});
			$('#left2 .typo').children('li').eq(1).children('img').attr({src : 'images/typo/o_3.png'});
			$('#left2 .typo').children('li').eq(2).children('img').attr({src : 'images/typo/v_3.png'});
			$('#left2 .typo').children('li').eq(3).children('img').attr({src : 'images/typo/e_3.png'});
			$('#left2 .typo').children('li').eq(4).children('img').attr({src : 'images/typo/l2_3.png'});
			$('#left2 .typo').children('li').eq(5).children('img').attr({src : 'images/typo/y_3.png'});
		} if( screen == 3 ){
			$('#left2 .bg').css('background' , 'rgb(142, 240, 142)');
			$('#left2 .grid .thum>li').css('background' , 'rgb(142, 240, 142)');
			$('#left2 .grid .thum .blind1').css('background' , 'rgb(142, 240, 142)');
			$('#left2 .grid .thum .blind2').css('background' , 'rgb(142, 240, 142)');
			$('#left2 .typo').children('li').eq(0).children('img').attr({src : 'images/typo/l_4.png'});
			$('#left2 .typo').children('li').eq(1).children('img').attr({src : 'images/typo/o_4.png'});
			$('#left2 .typo').children('li').eq(2).children('img').attr({src : 'images/typo/v_4.png'});
			$('#left2 .typo').children('li').eq(3).children('img').attr({src : 'images/typo/e_4.png'});
			$('#left2 .typo').children('li').eq(4).children('img').attr({src : 'images/typo/l2_4.png'});
			$('#left2 .typo').children('li').eq(5).children('img').attr({src : 'images/typo/y_4.png'});
		}

	}

	// 함수 _color 정의
	function _color(){

		if( screen == 0 ){
			$('#right2 .bg').css('background' , 'rgba(0,0,0,1)');
			$('#right2 .grid .thum>li').css('background' , '#000');
			$('#right2 .grid .thum .blind2').css('background' , '#000');
			$('#right2 .typo').children('li').eq(0).children('img').attr({src : 'images/typo/side_b/c_0.png'});
			$('#right2 .typo').children('li').eq(1).children('img').attr({src : 'images/typo/side_b/r_0.png'});
			$('#right2 .typo').children('li').eq(2).children('img').attr({src : 'images/typo/side_b/u_0.png'});
			$('#right2 .typo').children('li').eq(3).children('img').attr({src : 'images/typo/side_b/s_0.png'});
			$('#right2 .typo').children('li').eq(4).children('img').attr({src : 'images/typo/side_b/h_0.png'});
		} if( screen == 1 ){
			$('#right2 .bg').css('background' , '#880015');
			$('#right2 .grid .thum>li').css('background' , '#000');
			$('#right2 .grid .thum .blind1').css('background' , '#880015');
			$('#right2 .grid .thum .blind2').css('background' , '#880015');
			$('#right2 .typo').children('li').eq(0).children('img').attr({src : 'images/typo/side_b/c.png'});
			$('#right2 .typo').children('li').eq(1).children('img').attr({src : 'images/typo/side_b/r.png'});
			$('#right2 .typo').children('li').eq(2).children('img').attr({src : 'images/typo/side_b/u.png'});
			$('#right2 .typo').children('li').eq(3).children('img').attr({src : 'images/typo/side_b/s.png'});
			$('#right2 .typo').children('li').eq(4).children('img').attr({src : 'images/typo/side_b/h.png'});
		} if( screen == 2 ){
			$('#right2 .bg').css('background' , '#141f4a');
			$('#right2 .grid .thum>li').css('background' , '#141f4a');
			$('#right2 .grid .thum .blind1').css('background' , '#141f4a');
			$('#right2 .grid .thum .blind2').css('background' , '#141f4a');
			$('#right2 .typo').children('li').eq(0).children('img').attr({src : 'images/typo/side_b/c_2.png'});
			$('#right2 .typo').children('li').eq(1).children('img').attr({src : 'images/typo/side_b/r_2.png'});
			$('#right2 .typo').children('li').eq(2).children('img').attr({src : 'images/typo/side_b/u_2.png'});
			$('#right2 .typo').children('li').eq(3).children('img').attr({src : 'images/typo/side_b/s_2.png'});
			$('#right2 .typo').children('li').eq(4).children('img').attr({src : 'images/typo/side_b/h_2.png'});
		} if( screen == 3 ){
			$('#right2 .bg').css('background' , '#4e093c');
			$('#right2 .grid .thum>li').css('background' , '#4e093c');
			$('#right2 .grid .thum .blind1').css('background' , '#4e093c');
			$('#right2 .grid .thum .blind2').css('background' , '#4e093c');
			$('#right2 .typo').children('li').eq(0).children('img').attr({src : 'images/typo/side_b/c_3.png'});
			$('#right2 .typo').children('li').eq(1).children('img').attr({src : 'images/typo/side_b/r_3.png'});
			$('#right2 .typo').children('li').eq(2).children('img').attr({src : 'images/typo/side_b/u_3.png'});
			$('#right2 .typo').children('li').eq(3).children('img').attr({src : 'images/typo/side_b/s_3.png'});
			$('#right2 .typo').children('li').eq(4).children('img').attr({src : 'images/typo/side_b/h_3.png'});
		}

	}

	// page함수 실행(left)

	$('#left2 .page li').eq(0).children('a').click(function(){

		if ( idx > 0 ){
			$('.mfp-figure figure').children('img').attr({src:''});
			prev();
			idx = idx-4;
		} if ( idx < 0 ){
			$('.mfp-figure figure').children('img').attr({src:''});
			return false;
			idx = 0;
		}
	});


	$('#left2 .page li').eq(1).children('a').click(function(){

		if ( idx < 9 ){
			next();
			idx = idx + 4;
		} if (idx > 9) {
			return false;
			idx = 8;
		}
	});
	// thum{e}

	// page  함수 실행 (right)
	$('#right2 .page li').eq(0).children('a').click(function(){

		if ( idx > 0 ){
			$('.mfp-figure figure').children('img').attr({src:''});
			_prev();
			idx = idx-4;
		} if ( idx < 0 ){
			$('.mfp-figure figure').children('img').attr({src:''});
			return false;
			idx = 0;
		}
	});


	$('#right2 .page li').eq(1).children('a').click(function(){

		if ( idx < 9 ){
			_next();
			idx = idx + 4;
		} if (idx > 9) {
			return false;
			idx = 8;
		}
	});


	// popup
	$('#left2 .thum>li').click(function(){
		var li_idx = $(this).index();
		var _num = $('#left2 .thum li a').eq(li_idx).children('img').attr('src').replace('images/side_a/thum','');
		var num = _num.replace('.png','');
		// $('.layer').addClass('open');
		// alert(num);

		if ( num == 0 ){
			$('#left2 .thum li').children('a').attr({href:'http://i.imgur.com/hYOeHSx.gif'});
		} else if ( num == 1 ){
			$('#left2 .thum li').children('a').attr({href:'http://i.imgur.com/Pm8XHSI.gif'});
		} else if ( num == 2 ){
			$('#left2 .thum li').children('a').attr({href:'http://i.imgur.com/wSz90BB.gif'});
		} else if ( num == 3 ){
			$('#left2 .thum li').children('a').attr({href:'http://i.imgur.com/Iv0SpvO.gif'});
		} else if ( num == 4 ){
			$('#left2 .thum li').children('a').attr({href:''});
		} else if ( num == 5 ){
			$('#left2 .thum li').children('a').attr({href:''});
		} else if ( num == 6 ){
			$('#left2 .thum li').children('a').attr({href:''});
		} else if ( num == 7 ){
			$('#left2 .thum li').children('a').attr({href:''});
		}
	});

	// hover

	$('.thum>li a').mouseenter(function(){
		$(this).children('img').addClass('hover');
	});
	$('.thum>li a').mouseleave(function(){
		$(this).children('img').removeClass('hover');
	});


	
});