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
//密码验证
//密码
function pas(){
	var rpass=/^([0-9]|[A-Z]|[a-z]){6,12}$/;
	var pass=$(".register-left .pass").val();
	var stu=rpass.test(pass);
	console.log(stu);
	if(stu==false){
		$("#testPass").html(" 密码不合法/不能为空");
		$("#testPass").css("color","red");
	}else{
		$("#testPass").html(" 设置成功！");
		$("#testPass").css("color","mediumseagreen");
	}
}
//验证用户名
function user(){
	var ruser = /^(1[3|4|5|7|8]\d{9})|(\w+@\w+\.(com|cn|com.cn))$/;
	var user=$(".register-left .user").val();
	var stu=ruser.test(user);
	$.get("../checkUser.php",{"userName":$(".user").val()},function(data){
		if(stu==false){
			$("#testUser").html(" 用户名不合法/不能为空");
			$("#testUser").css("color","red");
		}else{
			if(data.indexOf("1")>-1){
				$("#testUser").html(" 用户已存在！");
				$("#testUser").css("color","red");			
		
			}else{
				$("#testUser").html(" 设置成功！");
				//1、记录cookie;
				$.cookie( "userName" , $(".user").val()  , { path: '/', expires: 7 });							
				$("#testUser").css("color","mediumseagreen");
			}	
		}
	});
	
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
	//密码验证
	$(".pass").blur(function(){
		pas();
	});
	//手机号码验证及验证用户名是否存在
	$(".user").blur(function(){
		user();
	});
		
	
	//确认密码验证
	$(".pass2").blur(function(){
		var str=$(".pass2").val();
		var pass=$(".pass").val();
		if(str==pass){
			if(str){
				$("#testPass2").html(" 设置成功！");
				$("#testPass2").css("color","mediumseagreen");
			}else{
				$("#testPass2").html(" 不能为空！");
				$("#testPass2").css("color","red");
			}
			
		}else{
			$("#testPass2").html(" 与上次不一致！");
			$("#testPass2").css("color","red");
		}	
	});
//header以及右侧绝对定位的显示和隐藏
	$(window).scroll(function(){
		console.log($(this).scrollTop());
		var top = $(this).scrollTop();
		if(top>320){
			$("header").fadeOut("slow");
			$(".fixDiv").fadeIn("slow");
		}else{
			$("header").fadeIn("slow");
			$(".fixDiv").fadeOut("slow");
		}
	});
});
