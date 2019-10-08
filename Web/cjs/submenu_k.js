	$(function(){
		var set = 100;//ウインドウ上部からどれぐらいの位置で変化させるか
		var boxTop = new Array;
		var current = -1;
		//各要素の位置
		$('.section1').each(function(i) {
			boxTop[i] = $(this).offset().top;
		});
		//最初の要素にclass="on"をつける cghangeNavcurrent(0);
		changeBox(0);
		//スクロールした時の処理
		$(window).scroll(function(){
			scrollPosition = $(window).scrollTop();
			//(2)各セクションの位置とスクロール位置を比較して、条件にあったらchangeBoxを実行
			for (var i = boxTop.length - 1 ; i >= 0; i--) {
				if ($(window).scrollTop() > boxTop[i] - set) {
				changeBox(i);
				break;
				}
			};
		});
		//ナビの処理
		function changeBox(secNum) {
			if (secNum != current) {
				current = secNum;
				secNum2 = secNum + 1;//HTML順序用
				$('#navi li').removeClass('on');
				$('#navi li:nth-child(' + secNum2 +')').addClass('on');
				/* 位置によって個別に処理をしたい場合　
				if (current == 0) {
				// 現在地がsection1の場合の処理
				} else if (current == 1) {
				// 現在地がsection2の場合の処理
				} else if (current == 2) {
				// 現在地がsection3の場合の処理
				}*/
			}
		};
	});