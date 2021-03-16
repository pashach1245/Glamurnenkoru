$(function() {

    $('[data-fancybox]').fancybox({
        protect: true,
        buttons : [
            'zoom',
            'thumbs',
            'close'
        ]
    });
    $(document).ready(function() {
        $('.menu-burger__header').click(function(){
            $('.menu-burger__header').toggleClass('open-menu');
            $('.nav').toggleClass('open-menu');
        });
    });
    $(window).scroll(function(){
        let sticky = $('.header'),
            scroll = $(window).scrollTop(),
            mainHeight = $('.main').height();
    
        if (scroll >= mainHeight) sticky.addClass('fixed');
        else sticky.removeClass('fixed');
    });
    
    $('.pageup').click(function () {
        $('html, body').animate({scrollTop: '0px'}, 300);
    })

});