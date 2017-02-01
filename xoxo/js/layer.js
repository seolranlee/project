$(document).ready(function(){
	$('.mfp-close').click(function(){
		alert('test');
		$('.thum li').children('a').attr({href:''});
	});

	$('.parent-container').magnificPopup({
	  delegate: 'a', // child items selector, by clicking on it popup will open
	  type: 'image'
	  
	  // other options
	});
});