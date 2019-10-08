		$(function(){
			var windowWidth = $(window).width();
			var windowHeight = $(window).height();
			if(windowWidth > 1500 && windowHeight > 600){
				$("header video").css('width',windowWidth);
				$("header video").css('height',windowHeight);
			}else{
				$("header video").css('width', '100%');
				$("header video").css('height', 'auto');
			}
		});
		$(window).on('load resize', function() {
			var windowWidth = $(window).width();
			var windowHeight = $(window).height();
			if(windowWidth > 1500 && windowHeight > 600){
				$("header video").css('width',windowWidth);
				$("header video").css('height',windowHeight);
			}else{
				$("header video").css('width', '100%');
				$("header video").css('height', 'auto');
			}
	});