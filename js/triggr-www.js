$(document).ready(function() {

});

function fadeInAndSlide(obj) {
    var o = $(obj);

    var pos = o.position();
    o.css({'opacity': '0', 'left': (pos.left + 120) + "px"});

    $(obj).animate({
        opacity: 1,
        left: "-=120"
    }, 1000, function() {
        //Animation complete
    });
}