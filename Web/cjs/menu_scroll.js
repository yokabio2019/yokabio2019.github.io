	$(function() {
		var menuHeight = $("#menu-wrap2").height();
		var startPos = 0;
		$(window).scroll(function(){
			var currentPos = $(this).scrollTop();
			if (currentPos > startPos) {
				if($(window).scrollTop() >= 200) {
					$("#menu-wrap2").css("top", "-" + menuHeight + "px");
				}
			} else {
			$("#menu-wrap2").css("top", 0 + "px");
			}
			startPos = currentPos;
		
		})
	});
	
	$(function() {
		//$("#menu-wrap2").css('background','BLACK');
		var scrollTop = $(window).scrollTop();
		if (scrollTop>=5) {
			$("#menu-wrap2").css('background','rgba(0,0,0,.5)');
		}
		$(window).scroll(function(){
			var scrollTop = $(window).scrollTop();
			if (scrollTop<=5) {
				$("#menu-wrap2").css('background','BLACK');
			} else {
				$("#menu-wrap2").css('background','rgba(0,0,0,.5)');
			}		
		})
	});