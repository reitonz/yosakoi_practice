$(function() {
    $('#first-btn').click(function(){
        $('.active').removeClass('active');
        $('#oct').addClass('active');
    });

    $('#second-btn').click(function(){
        $('.active').removeClass('active');
        $('#oct2').addClass('active');
    });

    $('input[type=text],textarea').focus(function(){
        $(this).addClass('focus');
    }) .blur(function(){
        $(this).removeClass('focus');
    });
});