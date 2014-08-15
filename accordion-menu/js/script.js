$(document).on('click', '.messages',function(){
	$('.messages-slide').stop(true,false).slideToggle('fast');
	//****workaround for box shadows glitching in chrome when height is adjusted****//
	var interval = setInterval(function(){
		$('nav').removeClass('shadow');
		$('nav').addClass('shadow-two');
		setTimeout(function(){
			$('nav').removeClass('shadow-two');
			$('nav').addClass('shadow');

		},1);
	},4);
	setTimeout(function(){
		clearInterval(interval);
	},600);
	//****//
});

