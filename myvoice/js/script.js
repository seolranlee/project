$(document).ready(function(){


	var swiper = new Swiper('.fine_slide .swiper-container', {
		speed: 800,
		slidesPerView: 1,
		paginationClickable: true,
		spaceBetween: 75,
		mousewheelControl: true,
		keyboardControl: true,
		loop: true,
		nextButton: '.swiper-button-next',
		prevButton: '.swiper-button-prev',
		pagination: '.swiper-pagination',
		paginationType: 'progress',
		onSlideChangeStart: function(swiper){
			var slideIdx = swiper.realIndex;
			$('.track_list ol li').removeClass('active');
			$('.track_list ol li').eq(slideIdx).addClass('active');
			$(".fine_slide .swiper-slide video").trigger("pause");
			$(".fine_slide .swiper-slide-active video").trigger("play");
		}
	});

	$('.track_list ol li a').on('click',function(){
		var trackIdx = $(this).attr('idx');
		swiper.slideTo(trackIdx);	
	});

	$('section').on('mousemove',function(e){

		var posX = e.pageX;
		var posY = e.pageY;

		$('.swiper-slide-active .album_area').css({'right':20-(posX/30), 'bottom':0-(posY/50)});
		$('.swiper-slide-active .tracktitle').css({'left':50-(posX/50), 'margin-top':100-(posY/50)});
	});

	$('.swiper-slide').on('click',function(e){

		var pageIdx = swiper.activeIndex;

		$(location).attr('href','track03.html'); // tmp

		// $(location).attr('href','track0'+pageIdx+'.html');

		if(pageIdx == 0){
			$(location).attr('href','track13.html');
		}
	});



	$('.sub_wrap .visual_area').on('mousemove',function(e){

		var posX = e.pageX;
		var posY = e.pageY;

		$('.visual_inner .album_cover').css({'left':-270-(posX/30), 'bottom':0-(posY/50)});
	});



	var logobox1 = $('.logobox.v1');
	var logobox2 = $('.logobox.v2');
	var logotext = $('.logotext');
	var logotext2 = $('.logotext h2');
	var subtext = $('.logosubtext p');
	var section = $('section');

	TweenLite.to( section, 1, { opacity:1, ease:Power2.easeOut } );
	TweenLite.to( logobox1, .8, { width:450, delay:1.3, ease:Power3.easeOut } );
	TweenLite.to( logobox2, 1.5, { width:450, delay:1.4, ease:Power3.easeOut } );
	TweenLite.to( logobox1, .8, { height:0, delay:2.8, ease:Power3.easeOut } );
	TweenLite.to( logobox2, .8, { height:0, delay:2.8, ease:Power3.easeOut } );
	TweenLite.to( logotext, .8, { marginTop:'-20px', delay:2.8, ease:Power3.easeOut } );
	TweenLite.to( logotext2, .8, { marginTop:0, delay:2.8, ease:Power3.easeOut } );
	TweenLite.to( subtext, .8, { marginTop:0, delay:2.8, ease:Power3.easeOut } );



	$('.bottom>h2').on('mouseover',function(){
		$('.bottom').addClass('active');
	});

	$('.bottom>h2').on('mouseleave',function(){
		$('.bottom').removeClass('active');
	})


});