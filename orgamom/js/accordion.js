 $(document).ready(function() {
    $(".accordion_banner1 .accordion_title").click(function() {
      if($(this).next("div").is(":visible")){
        $(this).next("div").slideUp("fast");
      } else {
        $(".accordion_banner1 .accordion_sub").slideUp("fast");
        $(this).next("div").slideToggle("fast");
      }
    });

	 $(".accordion_banner2 .accordion_title").click(function() {
      if($(this).next("div").is(":visible")){
        $(this).next("div").slideUp("fast");
      } else {
        $(".accordion_banner2 .accordion_sub").slideUp("fast");
        $(this).next("div").slideToggle("fast");
      }
    });
  });