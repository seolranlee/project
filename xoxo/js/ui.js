jQuery(window).load(function(){



    //별점
    // var mv_area = jQuery("span.star_rating_mv");
    // mv_area.bind("mousemove",function(e){
    //     jQuery(".pos").text("x:"+e.pageX+"y:"+e.pageY);
    //     //평점 메기는 부분 x 좌표 끝값이 77이길래, 백분율로 계산할때 이렇게 해줌.
    //     //평점 첫 시작값을 빼줌
    //     console.log(e.pageX);
    //     var result = ((e.pageX-412) * 100 )/74;
    //     jQuery(".star_rating span").css("width",result+"%");
    // });


    //GNB
    $('.btn_category').click(function(){
        $(this).toggleClass('active')
        $('.list_all_menu dd>ul>li>a').removeClass('active')
    })
    $('.list_all_menu dd>ul>li>a').click(function(){
        $('.list_all_menu dd>ul>li>a').removeClass('active')
        $(this).toggleClass('active')
    })
    $('.list_all_menu dd>ul>li>a').bind('keyup mouseenter',function(){
        $('.list_all_menu dd>ul>li>a').removeClass('active')
        $(this).addClass('active')
    })
    $('.list_all_menu dd>ul>li').bind('mouseleave',function(){
        $('.list_all_menu dd>ul>li>a').removeClass('active')
    })

   $('.filter_menu dd ul li>a').click(function(){
        $('.filter_menu dd ul li>a').removeClass('active')
        $(this).toggleClass('active')
        return false;
    })
    $('.brand_area .srch_box input').click(function(){
       $('.srch_pop').show()
    })
    $('.srch_pop .btn_close2').click(function(){
        $('.srch_pop').hide()
    })
    $('.top_banner .btn_top_banner').click(function(){
        $('.top_banner').toggleClass('active')
    })
    $('.list_item>li').bind('mouseenter',function(){
        $('.list_item>li').removeClass('active')
        $('.list_item>li').css('z-index','0');
        $(this).css('z-index','15');
        $(this).addClass('active');
    })
    $('.list_item>li').bind('mouseleave',function(){
        $(this).removeClass('active');
        $(this).css('z-index','15');
    })
    $('.list_item>li .btn_item_close').click(function(e){
        e.preventDefault();
        $('.list_item>li').removeClass('active')
    })
    $('.family_site .select').click(function(e){
        e.preventDefault();
        $(this).parent().toggleClass('active')
    })
    $('.family_site').bind('mouseleave',function(){
        $(this).removeClass('active')
    })

    $('.layerpop  .user_orderer_adr .btn_adr_add').click(function(){
        $('.input_orderer_adr').toggleClass('active')
    })





});

$(document).ready(function(){
    //selexbox
    $('select').selectbox({customList: true});
});


//레이어팝업(s)
function pop_layer_view(layer, st){
	if(st != 'close'){
		$(layer).addClass('open');
	}else{
		$(layer).removeClass('open');
	}
}
$(document).ready(function(){
	$('.layerpop .btn_close3').click(function(e){
		e.preventDefault();
		var layer = $(this).closest('.layerpop').attr('id');
		layer = '#'+layer;
		pop_layer_view(layer,'close');
	});
});
//레이어팝업(e)

