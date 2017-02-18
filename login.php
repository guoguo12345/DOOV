<?php
	header("content-type","text/html;charset=utf-8");
	//接受客户端的数据
	$userName = $_POST["userName"];
	$userPass = $_POST["userPass"];
	//连接数据库
	$conn = mysql_connect("localhost","root","qianfeng");
	//选择数据库
	mysql_select_db("shoppingcenter",$conn);
	//执行SQL语句
	$sqlstr = "select * from vipinfo where vipName= '".$userName."' and '".$userPass."'";
	//结果集
	$result = mysql_query($sqlstr,$conn);
	//查询行数
	$query_num = mysql_num_rows($result);
	//关闭数据库
	mysql_close($conn);
	if($query_num==0){
		echo "0"; 
	}else{
		echo "1";
	}
	
?>