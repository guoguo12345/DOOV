//结算框的计算
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
//	console.log("selectCheck="+selectCheck);
	if(selectCheck == tr.length){
		for(var j=0;j<$(".check-all").length;j++){
			$(".check-all").eq(j).prop("checked",true);
		}	
	}
	allPrice=allPrice.toFixed(2);
	$(".selectCounts").html(selectCounts);
	$(".allPrice").html(allPrice);
}
$(function(){
	//console.log($(".check"));
	//点击改变购物车数量及单行价格
	
	$("table tbody tr td .increase").click(function(){
		var counts = parseInt($(this).parent().find("input").val());
		counts++;
		var price = parseFloat($(this).parent().prev().find(".price").html());
		var totalPrice = (price*counts).toFixed(2);
		$(this).parent().siblings().find(".totalPrice").html(totalPrice);
		$(this).parent().find("input").val(counts);
		getTotal();
	});
	$("table tbody tr td .decrease").click(function(){
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
	
	//点击全选所有的复选框都全选
	
	$(".check").each(function(){
		$(".check").click(function(){

			if($(this).hasClass("check-all")){
				if(this.checked){
					$(".check").prop("checked",true);
					
				}else{
					$(".check").prop("checked",false);
				}
			}
			if(this.checked==false){
				$(".check-all").each(function(){
					$(".check-all").prop("checked",false);
				});
			}	
			getTotal();	
		});		
	});
		
		
	//header以及右侧绝对定位的显示和隐藏
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
	//点击删除商品
	$(".del").click(function(){
		var con = confirm("确定要删除吗");
		var index = $(this).index(".del");
		console.log(index);
		if(con){
			var that = $(this);
			$(this).parent().parent().remove();
		}
		getTotal();
	});
	$(".delete-all").click(function(){
		var tr = $("table tbody tr");
		console.log($(".selectCounts").html());
		if($(".selectCounts").html()!=0){
			var con = confirm("确定要删除吗");
			if(con){
				for(var i=0;i<tr.length;i++){
					if(tr.eq(i).children().eq(0).find(".check").prop("checked")==true){
						tr.eq(i).remove();
						i--;
					}
				}
			}
			getTotal();
		}else{
			alert("请选择商品！");
		}
	});
});
