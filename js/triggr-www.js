$(document).ready(function() {

});

function fadeInAndSlide(obj, direction) {
    var o = $(obj);

    var pos = o.position();
	var time = 1100;
	var offset = 120;
	
	if(direction === 'right') {
		o.css({'opacity': '0', 'left': (pos.left - offset) + "px"});

		$(obj).animate({
			opacity: 1,
			left: "+=" + offset
		}, time, function() {
			//Animation complete
		});
	} else {
		o.css({'opacity': '0', 'left': (pos.left + offset) + "px"});

		$(obj).animate({
			opacity: 1,
			left: "-=" + offset
		}, time, function() {
			//Animation complete
		});
	}
}