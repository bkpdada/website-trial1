// adding join-us button in the nav-bar

$(function() {
    var header = $(".join-us-nav");
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        if (scroll >= 350) {
            header.addClass("scrolled");
        } else {
            header.removeClass("scrolled");
        }
    });

});
