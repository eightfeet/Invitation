window.onorientationchange=function(){
	if(window.orientation!=0){
		$('#tips_bg').show();
	}else {
		$('#tips_bg').hide();
	}
}
	var video = document.getElementById('video');
	var indexpage = $('#indexpage');
	var videobox = document.getElementById('videobox');
	var bg_voice =  document.getElementById('bg_voice');
	var v_r_t = true;
    var u = navigator.userAgent; 
    var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端 
    var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
	var otherIOS = u.indexOf('537.51.2') >-1 ;
    // 给ios终端设置播放器高度
    if (isiOS) {
         $('#video').css({height: window.innerHeight + 60});
    }

    videobox.onclick = function(){
		indexpage.hide();
		video.play();
		window.setTimeout(function(){

			$.fn.parallax.animClear('page0');
		},5000)
		if(isiOS && (!otherIOS)){
			var bg_voice = document.getElementById('bg_voice');
			bg_voice.play();
			bg_voice.pause();
		}
    }
    
    video.onended = function() {
		$('#wrapper').addClass('wrapperFIN');
		$('#videobox').hide();
		//$('#videoEnd').removeClass('noanimate');
		//animShow();
		$('#videoEnd').show();
		$.fn.parallax.animShow('page0');
		bg_voice.play();
		$('#music').addClass('musicAct');
		

    };

    video.ontimeupdate = function() {
        if (this.currentTime > 14.5 && v_r_t) {
			v_r_t = false;
			$('#wrapper').addClass('wrapperFIN');
			$('#videobox').hide();
			$('#videoEnd').show();

        }
	}
	
	$('#music').on('click',function(){
		if ($(this).hasClass('musicAct')) {
			bg_voice.pause();
			$(this).removeClass('musicAct');
		} else {
			bg_voice.play();
			$(this).addClass('musicAct');
		}
	})

	if(isiOS && otherIOS){
    $('#page0').on('touchstart',function(){
        bg_voice.play();
        $('#music').addClass('musicAct');
    })
}

    $('.pages').parallax({
		direction: 'vertical', 	// horizontal (水平翻页)
		swipeAnim: 'cover', 	// cover (切换效果)
		drag:      true,		// 是否允许拖拽 (若 false 则只有在 touchend 之后才会翻页)
		loading:   true,		// 有无加载页
		indicator: false,		// 有无指示点
		arrow:     true,		// 有无指示箭头
		/*
		 * 翻页后立即执行
		 * {int} 		index: 第几页
		 * {DOMElement} element: 当前页节点
		 * {String}		directation: forward(前翻)、backward(后翻)、stay(保持原页)
		 */
		onchange: function(index, element, direction) {
			// code here...
			// console.log(index, element, direction);
			if (index === 6) {
				window.initGame();
			}
			
		},
		/*
		 * 横竖屏检测
		 * {String}		orientation: landscape、protrait
		 */
		orientationchange: function(orientation) {
			// console.log(orientation);
			if(window.orientation!=0){
				$('#tips_bg').show();
			}else {
				$('#tips_bg').hide();
			}
		}
	});
	

	