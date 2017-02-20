////结算框的计算
function getTotal(){
	var selectCounts= 0;
	var allPrice= 0;
	var selectCheck= 0;
	var tr = $("table tbody tr");
	for(var i=0;i<tr.length;i++){
		if(tr.eq(i).children().eq(0).find(".check").prop("checked")==true){
			selectCounts+=parseInt(tr.eq(i).children().eq(4).find(".counts").val());
			selectCheck+=1;
			allPrice+=parseFloat(tr.eq(i).children().eq(5).find(".totalPrice").html());
		}
	}
////	console.log("selectCheck="+selectCheck);
////如果筛选框全选,全选框也选
	if(selectCheck == tr.length){
		for(var j=0;j<$(".check-all").length;j++){
			$(".check-all").prop("checked",true);
		}	
	}
	allPrice=allPrice.toFixed(2);
	$(".selectCounts").html(selectCounts);
	$(".allPrice").html(allPrice);
}
$(function(){
	$.post("../shoppingCar.php",function(data){
		var data=eval(data);
//		console.log(data);
		var str;
		for(var i=0;i<data.length;i++){
			str = '<tr><td width="80"><input class="check" type="checkbox" /></td><td><img  src="../'
		+data[i].goodsImg+'" /></td><td><a href="details001.html">'
		+data[i].goodsName+'</a><span class="phoneColor">['
		+data[i].goodsColor+']</span></td><td class="priceOut">￥<span class="price">'
		+data[i].goodsPrice+'</span></td><td><button class="decrease">-</button><input class="counts" disabled="disabled" type="text" value="1" /><button class="increase">+</button></td><td class="totalPriceOut">￥<span class="totalPrice">'+data[i].goodsPrice+'</span></td><td><a href="###" class="del">删除</a></td></tr>';
			$("tbody").append(str);
		}
		
	});
//	//console.log($(".check"));
//	//点击改变购物车数量及单行价格
//	//点击加号
//	$("table tbody tr td .increase").click(function(){
//		var counts = parseInt($(this).parent().find("input").val());
//		counts++;
//		var price = parseFloat($(this).parent().prev().find(".price").html());
//		var totalPrice = (price*counts).toFixed(2);
//		$(this).parent().siblings().find(".totalPrice").html(totalPrice);
//		$(this).parent().find("input").val(counts);
//		getTotal();
//	});
	$("tbody").on("click",".increase",function(){
		console.log(1);
		var counts = parseInt($(this).parent().find("input").val());
		counts++;
		var price = parseFloat($(this).parent().prev().find(".price").html());
		var totalPrice = (price*counts).toFixed(2);
		$(this).parent().siblings().find(".totalPrice").html(totalPrice);
		$(this).parent().find("input").val(counts);
		getTotal();
	});
//	//点击减号
////	$("table tbody tr td .decrease").click(function(){
////		var counts = parseInt($(this).parent().find("input").val());
////		counts--;
////		if(counts<1){
////			counts=1;
////		}
////		var price = parseFloat($(this).parent().prev().find(".price").html());
////		var totalPrice = (price*counts).toFixed(2);
////		$(this).parent().siblings().find(".totalPrice").html(totalPrice);
////		$(this).parent().find("input").val(counts);
////		getTotal();
////	});
	$("tbody").on("click",".decrease",function(){
		var counts = parseInt($(this).parent().find("input").val());
		counts--;
		if(counts<1){
			counts=1;
		}
		var price = parseFloat($(this).parent().prev().find(".price").html());
		var totalPrice = (price*counts).toFixed(2);
		$(this).parent().siblings().find(".totalPrice").html(totalPrice);
		$(this).parent().find("input").val(counts);
		getTotal();
	});
//	//点击全选所有的复选框都全选
	$(".check").each(function(){
		$(".shoppingCar").on("click",".check",function(){
			//如果点的是全选
			if($(this).hasClass("check-all")){
				if(this.checked){
					$(".check").prop("checked",true);			
				}else{
					$(".check").prop("checked",false);
				}
			}
			//如果有一个没选
			if(this.checked==false){
					$(".check-all").prop("checked",false);
			}	
			getTotal();	
		});		
////		$(".check").click(function(){
////			//如果点的是全选
////			if($(this).hasClass("check-all")){
////				if(this.checked){
////					$(".check").prop("checked",true);
////					
////				}else{
////					$(".check").prop("checked",false);
////				}
////			}
////			//如果有一个没选
////			if(this.checked==false){
////				$(".check-all").each(function(){
////					$(".check-all").prop("checked",false);
////				});
////			}	
////			getTotal();	
////		});		
	});
//		
//		
//	//header以及右侧绝对定位的显示和隐藏
	$(window).scroll(function(){
//		console.log($(this).scrollTop());
		var top = $(this).scrollTop();
		if(top>180){
			$("header").fadeOut("slow");
			$(".fixDiv").fadeIn("slow");
		}else{
			$("header").fadeIn("slow");
			$(".fixDiv").fadeOut("slow");
		}
	});
//	//单行删除
	$("tbody").on("click",".del",function(){
		var con = confirm("确定要删除吗");
		var index = $(this).index(".del");
		if(con){
			var that = $(this);
			$(this).parent().parent().remove();
		}
		getTotal();
	});
//	//全选删除
	$(".total").on("click",".delete-all",function(){
//		console.log(1);
		var tr = $("tbody tr");
		console.log(tr);
		if($(".selectCounts").html()!=0){
			var con = confirm("确定要删除吗");
			if(con){
				for(var i=0;i<tr.length;i++){
					if(tr.eq(i).children().eq(0).find(".check").prop("checked")==true){
						tr.eq(i).remove();
						console.log(1);
					}
				}
			}
			getTotal();
		}else{
			alert("请选择商品！");
		}
	});
});
