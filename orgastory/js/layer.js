$(document).ready(function(){

	$('.circle li').click(function(){
		var idx = $(this).index();
		var num = $('.product li').eq(idx).children('img').attr('src').replace('images/product/obj','');
		var num2 = num.replace('.png','');
		$('.layer').addClass('open');
		$('.layer ul').eq(num2).css('display','block');
		$('.layer ul').eq(num2).siblings('ul').css('display','none');
	});
	
	$('.layer .close').click(function(){
		$('.layer').removeClass('open');
	});

});