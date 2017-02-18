<meta charset="utf-8" />
<?php 
	$userName = $_POST["userName"];
	$userPass = $_POST["userPass"];

	//1连接数据库
	$conn = mysql_connect("localhost","root","qianfeng");
	if(!$conn){
		die("连接失败");
	}
	//2选择数据库
	mysql_select_db("shoppingcenter",$conn);
	//执行SQL语句
	$str = "select * from vipinfo where vipName='".$userName."'";
//	echo $str;
	//结果集
	$result = mysql_query($str,$conn);
	//查询行数
	$num = mysql_num_rows($result);
	if($num==0){
		//3传输数据
		$sqlstr = 'insert into vipinfo(vipName,vipPass) values("'.$userName.'","'.$userPass.'");';
		mysql_query($sqlstr,$conn);
		echo "注册成功";
	//	echo header("location: login.html");
	}else{
		echo "注册失败,该用户已存在";
		echo header("location: register.html");
	}
	
	//4关闭数据库
	mysql_close($conn);
	//5.响应内容
//	echo "成功";
//	echo header("location: login.html");
?>