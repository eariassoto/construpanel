
$(function () {

    $('#nav').affix({
        offset: {
            top: $('#myCarousel').height()
        }
    });
    $('.nav li a').click(function(){
        var hrefActual = ($(this).attr('href'));
        $('.li-nav a').each(function(){
            if($(this).attr('href') == hrefActual){
                $(this).parent().addClass('active');
            }
            else{
                $(this).parent().removeClass('active');
            }
        });
    });

    $('.li-nav a').click(function (e) {
        e.preventDefault();
        var hash = this.hash;
        $('html, body').animate({
            scrollTop: offset
        }, 300, function(){
            window.location.hash = hash;
        });
    });
});