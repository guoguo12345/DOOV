<?php
	header("content-type","text/html;charset=utf-8");
	//接收数据
	$goodsName = $_REQUEST['goodsName'];
	$goodsCounts = $_REQUEST['goodsCounts'];
//	echo $goodsName;
//	echo $goodsCounts;
	//连接数据库
	$conn = mysql_connect("localhost","root","qianfeng");
	//选择数据库
	mysql_select_db("shoppingcenter",$conn);
	//执行SQL语句
	//查询商品列表的表
	$sqlstr = "select * from goodsinfo where goodsName='".$goodsName."'";
	//结果集
	$result = mysql_query($sqlstr,$conn);
	//查询行数
	$query_cols = mysql_num_fields($result);
	$query_num = mysql_num_rows($result);
	$query_row = mysql_fetch_array($result);
	//查询购物车的表
	$sqlstr2 = "select * from shoppingcar where goodsName='".$goodsName."'";
	//结果集
	$result2 = mysql_query($sqlstr2,$conn);
	//查询行数
	$query_cols2 = mysql_num_fields($result2);
	$query_num2 = mysql_num_rows($result2);
	$query_row2 = mysql_fetch_array($result2);
	if($query_num2==0){
		//3传输数据
		$str = 'insert into shoppingcar(goodsId,goodsName,goodsPrice,goodsCounts,goodsImg) values("'.$query_row[0].'","'.$query_row[1].'","'.$query_row[2].'","'.$goodsCounts.'","'.$query_row[4].'");';
	}else{
		$str = 'update shoppingcar set goodsCounts = "'.(($query_row2[4]+$goodsCounts)*1).'" where goodsName = "'.$goodsName.'";';
	}
	mysql_query($str,$conn);
	echo $query_num2;
	//关闭数据库
//	echo $query_num;
	mysql_close($conn);
//	if($query_num==0){
//		echo "0"; 
//	}else{
//		echo "1";
//	}
	
?>