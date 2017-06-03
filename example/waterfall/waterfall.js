$(document).ready(function(){
	waterfall();
	$(window).resize(waterfall);

	var boxData = {"data":[{"src":"31.jpg"},{"src":"32.jpg"},{"src":"33.jpg"},{"src":"34.jpg"},{"src":"35.jpg"},{"src":"36.jpg"}]}
	$(window).scroll(function(){
		if( checkScroll() ){
			$.each(boxData.data,function(index,value){
				var $oBox = $("<div>").addClass("box").appendTo($("#container"));
				var $oInnerBox = $("<div>").addClass("inner-box").appendTo($oBox);
				$("<img>").attr("src","daodao_picture/"+ value.src).appendTo($oInnerBox);
			})
		}
		waterfall();
	});
});

/*图片瀑布流排列*/
function waterfall(){
	var boxW = $(".box").eq(0).outerWidth(); //每张图片盒子的宽度
	var cols = Math.floor( $( window ).width()/boxW); //页面中图片的列数
	$("#container").css({
		"width": boxW*cols,
		"margin": "0 auto"
		})
	var picH = [];  //存储图片每列的高度
	$(".box").each(function(index,ele){
		var boxH = $(ele).outerHeight(); //当前图片盒子的高度
		if(index < cols){
			$(ele).removeAttr("style");
			picH[index] = boxH;
		}else{
			var minH = Math.min.apply( Math , picH );
			var minHIndex = $.inArray( minH , picH );
			$(ele).css({
				"position": "absolute",
				"top": minH + "px",
				"left": $(".box").eq(minHIndex).position().left
			})
			picH[minHIndex] += $(ele).outerHeight();
		}
	})
}

/*判断滚动条是否到底部*/
function checkScroll(){
	var lastBoxTop = $(".box").last().position().top + Math.floor( $(".box").last().outerHeight()/2 ); //最后一个盒子距离页面顶部的高度加上盒子高度的一半
	var scrollTop = $(window).scrollTop();  //页面滚动高度
	var documentH = $(window).height();  //页面的高度
	return (lastBoxTop < scrollTop+documentH) ? true : false ;
}