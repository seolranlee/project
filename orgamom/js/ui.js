$(document).ready(function(){

    $('.tab_type li a').click(function(){
        var idx = $(this).parent().index();

        $('.tab_content li').hide();
        $('.tab_content li:eq('+idx+')').show()

        $('.tab_type li a').parent().removeClass('active')
        $(this).parent().addClass('active')
    })


});




