$(function(){
	//header里的微信二维码
	$("#header .header .left .weixin").hover(
		function(){
			$(this).find("img").show();
		},
		function(){
			$(this).find("img").hide();
		}
	);
	//图片放大
	$(".goodsDl dl").mouseenter(function(){
		$(this).find("img").stop(true,true).animate({"width":"100%","height":"100%"},200);	
	});
	$(".goodsDl dl").mouseleave(function(){
		$(this).find("img").stop(true,true).animate({"width":"80%","height":"80%"},200);	
	});
});
