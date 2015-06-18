var colors = ["rgba(52, 152, 219, 0.6)","rgba(0, 26, 34,0.5)","rgba(230, 126, 34,0.5)",
"rgba(52, 152, 45, 0.5)","rgba(155, 200, 182,0.5)","rgba(155, 89, 182,0.5)"]
var arr = []

var ready = function (){
	$(".bigbox").each(function(index) {
		arr.push(this)
	});
	$(".navbar-toggle").click(function(){
		$(".icon-bar").each(function(index){
			if (index === 0) {
				if ($(this).hasClass('xone')){
					$(this).removeClass('xone');
				} else {
					$(this).addClass('xone');	
				}

			} 
			else if (index === 1) {
				if($(this).hasClass('xtwo')) {
					$(this).removeClass('xtwo');
				} else {
					$(this).addClass('xtwo');
				}

			} 
			else if (index === 2) {
				if ($(this).hasClass('xnone')){
					$(this).attr("style", "background-color:white").removeClass('xnone')
				} else {
					$(this).attr("style", "background:none").addClass('xnone')
				}
			};
		});
		$(arr).each(function(index){
			$(this).attr("style","background-color:"+colors[index])
		});
	});
	$(".navbar-toggle").focus(function(){
	});
	$(".bigbox").click(function(){
		$(".navbar-toggle").addClass('collapsed');
		$(".navbar-collapsed").removeClass("in");
		$(".icon-bar").each(function(index){
			if (index === 0) {
				$(this).removeClass('xone');
			} 
			else if (index === 1) {
				$(this).removeClass('xtwo');
			}
			else if (index === 2) {
				$(this).attr("style", "background-color:white").removeClass('xnone')
			} ;
		});
	});
};

$(document).ready(ready);
$(document).on('page:load', ready);