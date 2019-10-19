	$(window).on('load resize', function() {
		var windowWidth = $(window).width();
		if (windowWidth > 800) {
			var Pos=3;
			if(windowWidth > 1500){
				var Pos=0.0235*(windowWidth-800)/3+"%";
				if(windowWidth > 1800){
					var Pos=0.027*(windowWidth-800)/3+"%";
				}
			}
		}
		$("#na").css('margin-left',Pos);
		$("#navitop").css('margin-left',Pos);
		$("#navitop2").css('margin-left',Pos);
	});