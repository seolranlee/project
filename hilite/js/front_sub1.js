$(document).ready(function() {

	/*** top_bar_icon ****/

	$("ul.right li").hover(function(){
		
		$(this).children('div').toggle();

	});

	/*** question ****/
	
	$("ul.right li").mouseenter(function(){
		
		var index = $(this).index();

		index ++;

		$(this).children('img').attr("src","images/header_icon"+index+"_after.png");

	});

	$("ul.right li").mouseleave(function(){
		
		var index = $(this).index();

		index ++;

		$(this).children('img').attr("src","images/header_icon"+index+"_before.png");

		/*** question ****/

	});
	
	
	/*** dropdown_menu ****/

	$("#GnbMenu>li>a").bind("mouseover",function(event){
		var idx = $(this).attr("idx");

		if($(this).hasClass("on")){	
			$("#nav .menu2").hide();
			$("#nav .depth2").hide();
			$(this).removeClass("on");
		}else{			
			$("#GnbMenu>li>a").removeClass("on");
			$("#nav .depth2").hide();	
			$("#nav .menu2").slideDown();	
			$("#subMenu"+idx).show();			
			$(this).addClass("on");
		};		
	});

	$("li.gb1>a").mouseenter(function(){
		$("#nav .menu2").slideDown();	
		$("#subMenu1").show();	
	});

	$("div.parallax-window1").bind("mouseover",function(event){
		$("#nav .menu2").slideUp();
	});
	$("div.top-bar").bind("mouseover",function(event){
		$("#nav .menu2").slideUp();
	});


	/*** drop_down_menu_sub ****/

	$('#subMenu2 li.sm2_2 div.bus_sub').hover(function(){
		
		$(this).siblings().children('p').stop().animate({height:0},150);
		$(this).children('p').stop().animate({height:54},150);

	});

	$('div.bus_sub h2').hover(function(){
			
		var num = $(this).attr('id').replace('tab','');

		$('li.list'+num).show();
		$('li.list'+num).siblings().hide();
		
	});

	/*** navigation ****/
	
	$("ul.navi_right li").click(function(){
		
		var number = $(this).attr('class').replace('dropdown','');
		$("div#navi_submenu"+number).slideToggle(200);
		$("div#navi_submenu"+number).siblings().hide();
	});

	$("div#navi_submenu1 ul li").hover(function(){
	
		$(this).addClass('on');
		$(this).siblings().removeClass('on');
	});

	$("div#navi_submenu2 ul li").hover(function(){
	
		$(this).addClass('on');
		$(this).siblings().removeClass('on');
	});

	/*** parallax ****/

	$('.parallax-window1').parallax({imageSrc: 'images/sub1_slide.jpg'});
	$('.parallax-window2').parallax({imageSrc: 'images/parallax.jpg'});

	/*** family_site ****/

	$("div.family_button a").click(function(){
		
		$("div#family").slideToggle();
	});

});