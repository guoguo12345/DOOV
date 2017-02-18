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
	//轮播图
	var ord = 1;
	var myTimer = null;
	//下一张
	function nextImg(){
		ord++;
		if(ord>4){
			$("#button li").eq(0).addClass("active").siblings().removeClass();
		}
		$("#pic").stop(true,true).animate({"left":-(ord*$("#pic li").outerWidth())+"px"},function(){
			if(ord>4){
				$(this).css("left",-$("#pic li").outerWidth()+"px");
				ord=1;
			}
		});
		$("#button li").eq(ord-1).addClass("active").siblings().removeClass();
	}
	//自动轮播
	myTimer = setInterval(nextImg,4000);
//	放上去停止轮播
	$("#pic").mouseover(function(){
		clearInterval(myTimer);
	});
//	离开自动轮播
	$("#pic").mouseout(function(){
		myTimer = setInterval(nextImg,1000);
	});
//	放上去调到对应图片
	$("#button li").click(function(){
		clearInterval(myTimer);
		ord = $(this).index();
		nextImg();
	});
//banner图上的副导航
	$("#banner .banner .aside .asideLi").mouseover(function(){
		$(this).find("ul").show();
	});
	$("#banner .banner .aside .asideLi").mouseout(function(){
		$(this).find("ul").hide();
	});
	//banner下3个图片
	$("#sort .threePic a").mouseover(
		function(){
			$(this).stop(true,true).animate({"padding-top":"30px"},500);
			$(this).find("img").css({"box-shadow":"7px 6px 0 0 rgba(0,255,255,0.5)"});
		}
	);
	$("#sort .threePic a").mouseout(
		function(){
			$(this).stop(true,true).animate({"padding-top":"40px"},500);
			$(this).find("img").css({"box-shadow":"6px 6px 0 0 rgba(0,0,0,0.2)"});
		}
	);
	//下方APP
	var index = 1; 
	function nextApp(){
		index++;
		$(".pic #outer").stop(true,true).animate({"left":-(index*$("#outer .outer").outerWidth())+"px"},function(){
			if(index>2){
				$(this).css("left",-$("#outer .outer").outerWidth()+"px");
				index=1;
			}
		});
	}
	function prevApp(){
		index--;	
		console.log(index);
		$(".pic #outer").stop(true,true).animate({left:-(index)*$("#outer .outer").outerWidth()+"px"},function(){
			if(index<1){
				$(this).css("left",-(4*$("#outer .outer").outerWidth())+"px");
				index = 2;
			}
		});
	}	
	$(".pic #prev").click(function(){
		prevApp();
	});$(".pic #next").click(function(){
		nextApp();
	});
	//登录后进入欢迎您
	var userName = $.cookie("userName");
	if(userName==null){
		$(".header .right .login").show();
		$(".header .right .register").show();
		$(".header .right .welcome").hide();					
	}else{ 	
		$(".header .right .login").hide();	
		$(".header .right .register").hide();	
		$(".header .right .welcome").show();		
		$(".header .right .welcome").html("欢迎您~"+userName);
		$(".header .right .out").html("退出");
		$(".header .right .out").css("cursor","pointer");
		$(".header .right .out").click(function(){
			$.cookie("userName",null);
			$(".header .right .login").show();
			$(".header .right .register").show();
			$(".header .right .welcome").hide();		
			
		});
	}				

});

