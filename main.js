function slideAnime(){
	//====左に動くアニメーションここから===
		$('.leftAnime').each(function(){ 
			var elemPos = $(this).offset().top-0;
			var scroll = $(window).scrollTop();
			var windowHeight = $(window).height();
			if (scroll >= elemPos - windowHeight){
				//左から右へ表示するクラスを付与
				//テキスト要素を挟む親要素（左側）とテキスト要素を元位置でアニメーションをおこなう
				$(this).addClass("slideAnimeLeftRight"); //要素を左枠外にへ移動しCSSアニメーションで左から元の位置に移動
				$(this).children(".leftAnimeInner").addClass("slideAnimeRightLeft");  //子要素は親要素のアニメーションに影響されないように逆の指定をし元の位置をキープするアニメーションをおこなう
			}else{
				//左から右へ表示するクラスを取り除く
				$(this).removeClass("slideAnimeLeftRight");
				$(this).children(".leftAnimeInner").removeClass("slideAnimeRightLeft");
				
			}
		});
		
	}
	
	// 画面をスクロールをしたら動かしたい場合の記述
	$(window).scroll(function (){

		slideAnime();/* アニメーション用の関数を呼ぶ*/
	});// ここまで画面をスクロールをしたら動かしたい場合の記述


	function slideAnime2(){
		//====左に動くアニメーションここから===
			$('.leftAnime2').each(function(){ 
				var elemPos = $(this).offset().top-0;
				var scroll = $(window).scrollTop();
				var windowHeight = $(window).height();
				if (scroll >= elemPos - windowHeight){
					//左から右へ表示するクラスを付与
					//テキスト要素を挟む親要素（左側）とテキスト要素を元位置でアニメーションをおこなう
					$(this).addClass("slideAnimeLeftRight2"); //要素を左枠外にへ移動しCSSアニメーションで左から元の位置に移動
					$(this).children(".leftAnimeInner2").addClass("slideAnimeRightLeft2");  //子要素は親要素のアニメーションに影響されないように逆の指定をし元の位置をキープするアニメーションをおこなう
				}else{
					//左から右へ表示するクラスを取り除く
					$(this).removeClass("slideAnimeLeftRight2");
					$(this).children(".leftAnimeInner2").removeClass("slideAnimeRightLeft2");
					
				}
			});
		}
	// 画面が読み込まれたらすぐに動かしたい場合の記述
	$(window).on('load', function(){
		slideAnime2();/* アニメーション用の関数を呼ぶ*/
	});// ここまで画面が読み込まれたらすぐに動かしたい場合の記述

	function slideAnime3(){
		//====左に動くアニメーションここから===
			$('.leftAnime3').each(function(){ 
				var elemPos = $(this).offset().top-0;
				var scroll = $(window).scrollTop();
				var windowHeight = $(window).height();
				if (scroll >= elemPos - windowHeight){
					//左から右へ表示するクラスを付与
					//テキスト要素を挟む親要素（左側）とテキスト要素を元位置でアニメーションをおこなう
					$(this).addClass("slideAnimeLeftRight3"); //要素を左枠外にへ移動しCSSアニメーションで左から元の位置に移動
					$(this).children(".leftAnimeInner3").addClass("slideAnimeRightLeft3");  //子要素は親要素のアニメーションに影響されないように逆の指定をし元の位置をキープするアニメーションをおこなう
				}else{
					//左から右へ表示するクラスを取り除く
					$(this).removeClass("slideAnimeLeftRight3");
					$(this).children(".leftAnimeInner3").removeClass("slideAnimeRightLeft3");
					
				}
			});
		}
	// 画面が読み込まれたらすぐに動かしたい場合の記述
	$(window).on('load', function(){
		slideAnime3();/* アニメーション用の関数を呼ぶ*/
	});// ここまで画面が読み込まれたらすぐに動かしたい場合の記述