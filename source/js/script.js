
$(function () {

    $('nav').affix({
        offset: {
            top: $('header').height()
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
        if($( "#navbar-top" ).hasClass( "affix" )){
            var offset = $(hash).offset().top;
        }else{
            var offset = $(hash).offset().top-71;
        }
        console.log("abc",$(hash).offset().top);
        $('html, body').animate({
            scrollTop: offset
        }, 300, function(){
            window.location.hash = hash;
        });
    });
});