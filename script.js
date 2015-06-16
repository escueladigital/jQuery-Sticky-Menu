var $nav = $('nav');
var $navTop = $nav.offset().top;
var pegarNav = function () {
    var $scrollTop = $(window).scrollTop();
    if ($scrollTop < $navTop) {
        $nav.removeClass('sticky')
    } else {
        $nav.addClass('sticky')
    }
};

$(window).on('scroll',pegarNav);