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
	//初始pop蒙层隐藏
	$(".pop").hide();
	$(".glassRight img").eq(0).show().siblings().hide();
	$(".glassRight").hide();
	$(".glass").mouseenter(function(){
		$(".pop").show();
		$(".glassRight").show();
	});
	$(".glass").mouseleave(function(){
		$(".pop").hide();
		$(".glassRight").hide();
	});
	$(".glass .pop").mousemove(function(e){
		var bW = 500;
		var bH = 500;
		var rW = 250;
		var rH = 250;
		var w = 250;
		var h = 250;
		var x = e.clientX - $(".glass").offset().left;
		var y = e.clientY-$(".glass").offset().top;
		//横向判断
		if(x<=w/2){
			x=w/2;
		}else if(x>=bW-w/2){
			x=bW-w/2;
		}else{
			x=e.clientX-$(".glass").offset().left;
		}
		//纵向判断
		if(y<=h/2){
			y=h/2;
		}else if(y>=bH-h/2){
			y=bH-h/2;
		}else{
			y=e.clientY-$(".glass").offset().top;
		}		
		var l=x-w/2;
		var t=y-h/2;
		$(".pop").css({"left":l+"px","top":t+"px"});
		$(".glassRight img").css({"left":-rW*l/w+"px","top":-rH*t/h+"px"});
	});
	//初始边框颜色	
	$("#details .details .details-top .tab img").eq(0).css("border","2px solid #E5006A");
	//鼠标放上去颜色变化
	$("#details .details .details-top .tab img").mouseenter(function(){
		var index = $(this).index();
		$(this).css("border","2px solid #E5006A").siblings().css("border","1px solid #ccc");
		$(".glass img").eq(index).fadeIn("slow").siblings().fadeOut("slow");
		$(".glassRight img").eq(index).show().siblings().hide();
	});
	//详情页面加入购物车数量加减
	var counts = $(".counts").val();
	console.log("counts="+counts);
	$(".increase").click(function(){
		counts++;
		$(".counts").val(counts);
	});
	$(".reduce").click(function(){
		counts--;
		if(counts<1){
			counts=1;
		}
		$(".counts").val(counts);
	});
	//选择手机颜色
	$(".top-right dl").eq(0).find("dd").eq(0).css({"border-color":" rgb(229, 0, 106)","color":" rgb(229, 0, 106)"});
	$(".top-right dl").eq(0).find("dd").click(function(){
		$(".top-right dl").eq(0).find("dd").css({"border-color":" rgb(204, 204, 204)","color":" rgb(102, 102, 102)"});
		$(this).css({"border-color":" rgb(229, 0, 106)","color":" rgb(229, 0, 106)"});
	});
	//选项卡
	$(".details-bottom .tab a").click(function(){
		$(this).css({"background": "rgb(229, 0, 106)", "color": "#fff"}).siblings().css({"background":"rgb(242, 242, 242)","color": "rgb(102, 102, 102)"});
		var index = $(this).index();
		console.log("index="+index);
//		$(".details-bottom .choose").eq(index).show().siblings().find(".choose").hide();	
		$(".details-bottom .choose").hide();	
		$(".details-bottom .choose").eq(index).show();

		
	});
	
});
