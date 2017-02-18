<?php
	//接受客户端的数据
	$userName = $_GET["userName"];
	//连接数据库
	$conn = mysql_connect("localhost","root","qianfeng");
	//选择数据库
	mysql_select_db("shoppingcenter",$conn);
	//执行SQL语句
	$sqlstr = "select * from vipinfo where vipName='".$userName."'";
	echo $sqlstr;
	//结果集
	$result = mysql_query($sqlstr,$conn);
	//查询行数
	$query_num = mysql_num_rows($result);
	//关闭数据库
	mysql_close($conn);
	//返回
	if($query_num==0){
		echo "0";
	}else{
		echo "1";
	}	
?>