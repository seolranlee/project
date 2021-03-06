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

	$("div#slide").bind("mouseover",function(event){
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


	/*** bx_slider ****/

	$('.bxslider').bxSlider({
	
		// mode : 'fade'
		speed : 500,
		auto : true,
		autoControls : false,
		controls : true,
		pager : false

	});

	/*** business_field ****/

	$("ul.busin li").hover(function(){

		var index =  $(this).index();

		index++;

		$(this).toggleClass('after' + index);
	});

	/*** grid ****/
	
	$("ul.grid li").mouseenter(function(){

		$(this).find("div.icon").animate({opacity: "0.8"},300);
		$(this).find("div.icon img").animate({bottom: "88px"},300);
	});

	$("ul.grid li").mouseleave(function(){

		$(this).find("div.icon").animate({opacity: "0"},300);
		$(this).find("div.icon img").animate({bottom: "-88px"},300);
	});

	$("ul.grid_2 li").mouseenter(function(){

		$(this).find("div.icon").animate({opacity: "0.8"},300);
		$(this).find("div.icon img").animate({bottom: "88px"},300);
	});

	$("ul.grid_2 li").mouseleave(function(){

		$(this).find("div.icon").animate({opacity: "0"},300);
		$(this).find("div.icon img").animate({bottom: "-88px"},300);
	});

	/*** video_popup_layer ****/

  $('.popup').popup({
    close: function(){
      $(this).find('.embed-container').empty();
    }
  });

  $(document).on('click', '[data-action="watch-video"]', function(e){

    e.preventDefault();

    var plugin = $('#popup-video.popup').data('popup');

    $('#popup-video.popup .embed-container').html(
      '<iframe src="'
      + e.currentTarget.href
      + '?autoplay=1" frameborder="0" allowfullscreen />'
    );

    plugin.open();


  });


	/*** news ****/

	$("div.news_left").mouseenter(function(){
		
		$("div.plus1").children("img").attr("src","images/button_hover.png");
	});

	$("div.news_left").mouseleave(function(){
		
		$("div.plus1").children("img").attr("src","images/button.png");
	});

	$("div.news_right").mouseenter(function(){
		
		$("div.plus2").children("img").attr("src","images/button_hover.png");
	});
	$("div.news_right").mouseleave(function(){
		
		$("div.plus2").children("img").attr("src","images/button.png");
	});

	/*** family_site ****/

	$("div.family_button a").click(function(){
		
		$("div#family").slideToggle();
	});

});