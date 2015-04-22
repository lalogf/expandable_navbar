var colors = ["rgba(52, 152, 219, 0.6)","rgba(0, 26, 34,0.5)","rgba(230, 126, 34,0.5)",
"rgba(52, 152, 45, 0.5)","rgba(155, 200, 182,0.5)","rgba(155, 89, 182,0.5)"]
var arr = []

var ready = function (){
	$(".bigbox").each(function(index) {
		arr.push(this)
	});
	$(".navbar-toggle").click(function(){
		$(arr).each(function(index){
			$(this).attr("style","background-color:"+colors[index])
		});
	});
	$(".navbar-toggle").focus(function(){
	});
};

$(document).ready(ready);
$(document).on('page:load', ready);