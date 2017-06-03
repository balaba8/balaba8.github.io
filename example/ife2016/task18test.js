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

	

//左侧入函数
function leftIn(){
	if(!$("content").value.trim().match(/^\d+$/)){
		alert("请输入整数!");
		$("content").value = "";
		return;
	}
	var oLi = document.createElement("li");
	oLi.innerHTML = $("content").value.trim();
	oUl.insertBefore(oLi,oUl.firstChild);
	$("content").value = "";	
}

//右侧入函数
function rightIn(){
	if(!$("content").value.trim().match(/^\d+$/)){
		alert("请输入整数!");
		$("content").value = "";
		return;
	}
	var oLi = document.createElement("li");
	oLi.innerHTML = $("content").value.trim();
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

//为四个按钮添加事件委托
function buttonEvent(){
	var event = event || window.event;
	var target = event.target || event.srcElement;
	switch(target.id){
		case "left-in":leftIn();break;
		case "right-in":rightIn();break;
		case "left-out":leftOut();break;
		case "right-out":rightOut();break;
	}
}

//点击删除数列,为li添加事件委托
function delLi(){
	var event = event || window.event;
	var target = event.target || event.srcElement;
	oUl.removeChild(target);
}

window.onload = function(){
/*	addEventHandler($("left-in"),"click",leftIn);
	addEventHandler($("right-in"),"click",rightIn);
	addEventHandler($("left-out"),"click",leftOut);
	addEventHandler($("right-out"),"click",rightOut);*/
	addEventHandler($("button"),"click",buttonEvent);
	addEventHandler(oUl,"click",delLi);
}
