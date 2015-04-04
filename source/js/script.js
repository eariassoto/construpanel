$('nav').affix({
    offset: {
        top: $('header').height()
    }
});
$(function () {
    function stripTrailingSlash(str) {
        if(str.substr(-1) == '/') {
            return str.substr(0, str.length - 1);
        }
        return str;
    }

    var url = window.location.pathname;
    var activePage = stripTrailingSlash(url);

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

    $('.li-nav a').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $.smoothScroll({scrollTarget: "#"+target[0].id});
                return false;
            }
        }
    });
});