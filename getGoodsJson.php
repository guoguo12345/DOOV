<?php
	header("content-type","text/html;charset=utf-8");
	//连接数据库
	$conn=mysql_connect("localhost","root","qianfeng");
	//选择数据ku
	mysql_select_db("shoppingcenter",$conn);
	//3执行SQL语句
	$sqlstr = "select * from goodsinfo";
	$result = mysql_query($sqlstr,$conn);
	$query_cols = mysql_num_fields($result);
	$query_num = mysql_num_rows($result);
	$str = "[";
//	echo "列数".$query_cols;
//	echo "行数".$query_num;
	$query_row = mysql_fetch_array($result);
	while($query_row){
		$str = $str."{'goodsId':'".$query_row[0]."','goodsName':'".$query_row[1]."','goodsPrice':'".$query_row[2]."','goodsNum':'".$query_row[3]."','goodsImg':'".$query_row[4]."','goodsDesc':'".$query_row[5]."'}";
		$query_row = mysql_fetch_array($result);
		if($query_row){
			$str = $str.",";
		}
	}
	$str = $str."]";
	//关闭数据库
	mysql_close($conn);
	echo $str;
?>