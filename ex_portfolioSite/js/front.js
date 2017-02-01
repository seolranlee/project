$(document).ready(function() {
	
	/*** smooth scrolling ***/
	$(function() {
	  $('a[href*=#]:not([href=#])').click(function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
		  var target = $(this.hash);
		  target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
		  if (target.length) {
			$('html,body').animate({
			  scrollTop: target.offset().top
			}, 500);
			return false;
		  }
		}
	  });
	});

	/* left-screen*/
	$('.left-screen').mouseenter(function(){
		
		$('.menu').animate({ opacity: 0 } , 200);
		$('.viewmenu').animate({ opacity: 1 } , 200);
	});
	$('.left-screen').mouseleave(function(){
		
		$('.menu').animate({ opacity: 1 } , 200);
		$('.viewmenu').animate({ opacity: 0 } , 200);
	});

	/* right-screen*/
	$('.right-screen').mouseenter(function(){
		
		$('.arrow').animate({ opacity: 0 } , 200);
		$('.viewpf').animate({ opacity: 1 } , 200);
	});
	$('.right-screen').mouseleave(function(){
		
		$('.arrow').animate({ opacity: 1 } , 200);
		$('.viewpf').animate({ opacity: 0 } , 200);
	});

	/* circle process bar */
	$('.demo').percentcircle({

		animate : true,
		diameter : 100,
		guage: 2,
		coverBg: '#e9e9e9',
		bgColor: '#e9e9e9',
		fillColor: '#222121',
		percentSize: '15px',
		percentWeight: 'normal'

	});

	/* img hover */
	$('#portfolio ul.pf li.img').mouseenter(function(){

		$(this).children('div.pf-desc').animate({ opacity: 1 } , 200);
	});

	$('#portfolio ul.pf li.img').mouseleave(function(){

		
		$(this).children('div.pf-desc').animate({ opacity: 0 } , 200);
	});


	/* button next */

	$('i.fa-angle-double-right').click(function(){
		
		var num = $(this).parent('p').attr('id').replace('a','');

		console.log(num);
		
		var a = Number(num)+1;


		$('ul.list'+a).siblings('ul').hide();
		$('ul.list'+a).show();
	});

	/* button prev */

	$('i.fa-angle-double-left').click(function(){
		
		var num = $(this).parent('p').attr('id').replace('a','');

		console.log(num);
		
		var a = Number(num)-1;


		$('ul.list'+a).siblings('ul').hide();
		$('ul.list'+a).show();
	});

	/* smooth page change */
	// to fade in on page load
    $("body").css("display", "none");
    $("body").fadeIn(400); 
    // to fade out before redirect
    $('.pf li div a').click(function(e){
        redirect = $(this).attr('href');
        e.preventDefault();
        $('body').fadeOut(400, function(){
            document.location.href = redirect
        });
    });

});