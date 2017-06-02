//跨浏览器事件绑定
function addEventHandler(ele,event,handler){
	if(ele.addEventListener){
		ele.addEventListener(event,handler,false);
	}else if(ele.attachEvent){
		ele.attachEvent("on"+event,hanlder);
	}else{
		ele["on"+event] = hanlder;
	}
}

//绑定$函数
var $ = function(id){
	return document.getElementById(id);
}

var oUl = document.getElementById('show-content').getElementsByTagName('ul')[0];

//随机生成初始列表
function randomData(){
	oUl.innerHTML = "";
	var initLi = "";
	for (var i = 0; i < 20; i++) {
		var randomX = Math.floor(Math.random()*91+10);
		initLi += "<li title='"+randomX+"' style='height:"+randomX*2+"px;'>"+randomX+"</li>";
		oUl.innerHTML = initLi;
	}
}

	

//左侧入函数
function leftIn(){
	var contentValue = $("content").value.trim();
	if(oUl.getElementsByTagName("li").length >= 60){
		alert("队列已满!");
		return;
	}else if(!contentValue.match(/^\d+$/) || contentValue>100 || contentValue<10){
		alert("请输入10-100的整数!");
		$("content").value = "";
		return;
	}
	var oLi = document.createElement("li");
	oLi.title = contentValue;
	oLi.style.height = contentValue*2 +"px";
	oLi.innerHTML = contentValue;
	oUl.insertBefore(oLi,oUl.firstChild);
	$("content").value = "";	
}

//右侧入函数
function rightIn(){
	var contentValue = $("content").value.trim();
	if(oUl.getElementsByTagName("li").length >= 60){
		alert("队列已满!");
		return;
	}else if(!contentValue.match(/^\d+$/) || contentValue>100 || contentValue<10){
		alert("请输入10-100的整数!");
		$("content").value = "";
		return;
	}
	var oLi = document.createElement("li");
	oLi.title = contentValue;
	oLi.style.height = contentValue*2 +"px";
	oLi.innerHTML = contentValue;
	oUl.appendChild(oLi);
	$("content").value = "";
}

//左侧出函数
function leftOut(){
	if(oUl.childNodes.length ==0){
		alert("数列已为空!");
		return;
	}
	var removeLi = oUl.removeChild(oUl.firstChild).innerHTML;
	alert("你删除的数值为:"+removeLi);
}

//右侧出函数
function rightOut(){
	if(oUl.childNodes.length ==0){
		alert("数列已为空!");
		return;
	}
	var removeLi = oUl.removeChild(oUl.lastChild).innerHTML;
	alert("你删除的数值为:"+removeLi);
}

//冒泡排序
/*function bubbleSort(){
	var oLi = oUl.getElementsByTagName("li");
	for(var i = 0; i < oLi.length -1 ; i++){
    	for(var j = 0; j < oLi.length - i - 1; j++){
	        if(oLi[j].style.height > oLi[j+1].style.height){
	            oUl.insertBefore(oLi[j+1],oLi[j]);
	    	}
    	}
	}
}*/

function bubbleSort(){
	document.getElementById("bubble-sort").disabled = true;
	var oLi = oUl.getElementsByTagName("li");
	var i=0,j=0;
	var timer = setInterval(function(){
		if(i < oLi.length-1){
			if (j < oLi.length-i-1) {
				if(parseInt(oLi[j].style.height) > parseInt(oLi[j+1].style.height)){
	            	oUl.insertBefore(oLi[j+1],oLi[j]);
	            }
	            j++;
			}else{
				i++;
				j=0;
			}
		}else{
			clearInterval(timer);
			document.getElementById("bubble-sort").disabled = false;
			return;
		}
	},50);
}

//为按钮添加事件委托
function buttonEvent(){
	var event = event || window.event;
	var target = event.target || event.srcElement;
	switch(target.id){
		case "left-in":leftIn();break;
		case "right-in":rightIn();break;
		case "left-out":leftOut();break;
		case "right-out":rightOut();break;
		case "bubble-sort":bubbleSort();break;
		case "init-sort":randomData();break;
	}
}

//点击删除数列,为li添加事件委托
function delLi(){
	var event = event || window.event;
	var target = event.target || event.srcElement;
	oUl.removeChild(target);
}

function init(){
/*	addEventHandler($("left-in"),"click",leftIn);
	addEventHandler($("right-in"),"click",rightIn);
	addEventHandler($("left-out"),"click",leftOut);
	addEventHandler($("right-out"),"click",rightOut);*/
	randomData();
	addEventHandler($("button"),"click",buttonEvent);
	addEventHandler(oUl,"click",delLi);
}

init();
