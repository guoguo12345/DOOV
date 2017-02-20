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
	$.ajax({
		type: "post",
		url: "../getGoodsJson.php",			
		success: function(data){
			var	arr = eval("("+data+")");
			console.log(arr);
			for(var i=0;i<arr.length;i++){
				var str = '<dl><dt><a href="details'+arr[i].goodsId+'.html"><img src="../'
				+arr[i].goodsImg+'" /></a></dt><dd><a>'+arr[i].goodsName+
				'</a><a>'+arr[i].goodsDesc+'</a><a>'+
				arr[i].goodsPrice+'</a></dd></dl>';			
				$(".goodsDl").append(str);
			}
		}			
	});	
//图片放大
	$(".goodsDl").on("mouseenter","dl",function(){
		$(this).find("img").stop(true,true).animate({"width":"100%","height":"100%"},200);	
	});
	$(".goodsDl").on("mouseleave","dl",function(){
		$(this).find("img").stop(true,true).animate({"width":"80%","height":"80%"},200);	
	});
			
});
