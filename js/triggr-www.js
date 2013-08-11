$(document).ready(function() {

});

function fadeInAndSlide(obj, direction) {
    var o = $(obj);

    var pos = o.position();
	
	if(direction === 'right') {
		o.css({'opacity': '0', 'left': (pos.left - 120) + "px"});

		$(obj).animate({
			opacity: 1,
			left: "+=120"
		}, 1200, function() {
			//Animation complete
		});
	} else {
		o.css({'opacity': '0', 'left': (pos.left + 120) + "px"});

		$(obj).animate({
			opacity: 1,
			left: "-=120"
		}, 1200, function() {
			//Animation complete
		});
	}
}