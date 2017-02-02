var Sub = (function($){

	var btn_next_ = function(){

		var num = $(this).parent('p').attr('id').replace('a','');
		var idx = Number(num)+1;
		$('ul.list'+idx).siblings('ul').hide();
		$('ul.list'+idx).show();
	}

	var btn_prev_ = function(){

		var num = $(this).parent('p').attr('id').replace('a','');
		var idx = Number(num)-1;
		$('ul.list'+idx).siblings('ul').hide();
		$('ul.list'+idx).show();
	}


	return {

		init : function(){

			$('i.fa-angle-double-right').on('click.btn_next_', btn_next_);
			$('i.fa-angle-double-left').on('click.btn_prev_', btn_prev_);

		},
	}

}(jQuery));

$(document).ready(function(){
	Sub.init();
});
