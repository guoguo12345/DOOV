//验证码
var check=["1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var arr = ["_01","_02","_03","_04","_05","_06","_07","_08","_09","max_01","max_02","max_03","max_04","max_05","max_06","max_07","max_08","max_09","max_10","max_11","max_12","max_13","max_14","max_15","max_16","max_17","max_18","max_19","max_20","max_21","max_22","max_23","max_24","max_25","max_26","min_01","min_02","min_03","min_04","min_05","min_06","min_07","min_08","min_09","min_10","min_11","min_12","min_13","min_14","min_15","min_16","min_17","min_18","min_19","min_20","min_21","min_22","min_23","min_24","min_25","min_26"];
var code="";
function getCheckCode(){
	code="";
	for(var i=0;i<4;i++){
		//随机产生的下标
		var str=parseInt(Math.random()*arr.length);
		$("#imgId0"+(i+1))[0].src="imgs/"+arr[str]+".jpg";
		code += check[str];	
	}
}


$(function(){
	//验证码
	var code2 = "1aH7";
	$("#testImg").click(function(){
		getCheckCode();
		code2 = code;
		console.log(code);
	});
	$("#checkCode").blur(function(){
		if($("#checkCode").val()==code2){
			$("#test").html("√");
			$("#test").css("color","mediumseagreen");
	
		}else{
			$("#test").html("×");
			$("#test").css("color","red");
		}
	});
//header以及右侧绝对定位的显示和隐藏
	$(window).scroll(function(){
	//	console.log($(this).scrollTop());
		var top = $(this).scrollTop();
		if(top>180){
			$("header").fadeOut("slow");
			$(".fixDiv").fadeIn("slow");
		}else{
			$("header").fadeIn("slow");
			$(".fixDiv").fadeOut("slow");
		}
	});
	//登录判断用户名是否存在
	$(".submit").click(function(){
		$.post("../login.php",{"userName":$(".text").val(),"userPass":$(".pass").val()},function(data){
			console.log(data);
			if(data.indexOf("1")>-1){
				$.cookie( "userName" , $(".text").val(),{ path: '/', expires: 7 });
				location.href="index.html";
			}else{
				alert("用户名不存在/密码错误");
			}
		});
		
	});

});
