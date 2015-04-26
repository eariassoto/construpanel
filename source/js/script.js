
$(function () {

    $('#nav').affix({
        offset: {
            top: $('#inicio').height()
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
    $('.navbar-brand').click(function(){
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
        if($( "#nav" ).hasClass( "affix" )){
            var offset = $(hash).offset().top;
        }else{
            var offset = $(hash).offset().top-72;
        }
        $('html, body').animate({
            scrollTop: offset
        }, 300, function(){
            window.location.hash = hash;
        });
    });
    $('.navbar-brand').click(function (e) {
        e.preventDefault();
        var hash = this.hash;
        if($( "#nav" ).hasClass( "affix" )){
            var offset = $(hash).offset().top;
        }else{
            var offset = $(hash).offset().top-72;
        }
        $('html, body').animate({
            scrollTop: offset
        }, 300, function(){
            window.location.hash = hash;
        });
    });

});