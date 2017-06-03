function addEventHandler(ele,event,handler){
	if(ele.addEventListener){
		ele.addEventListener(event,handler,false);
	}else if(ele.attachEvent){
		ele.attachEvent("on"+event,handler);
	}else{
		ele["on"+event] = handler;
	}
}//跨浏览器事件绑定;

var content = document.getElementById('content');

var showContent = document.getElementById('show-content');
var newData = [];
var leftInButton = document.getElementById('left-in');
var rightInButton = document.getElementById('right-in');
var leftOutButton = document.getElementById('left-out');
var rightOutButton = document.getElementById('right-out');

//渲染内容框
function renderShowContent(){
	var oSpan = "";
	for (var i = 0; i < newData.length; i++) {
		oSpan += "<span data-index='"+i+"'>"+newData[i]+"</span>";
	}
	showContent.innerHTML = oSpan;
}

//左侧入按钮函数
function leftIn(){
	var inputData = content.value.trim();
	console.log(inputData);
	if(!inputData.match(/^\d+$/)){
		alert("输入的内容必须为整数!");
		return;
	}
	newData.unshift(inputData);
	renderShowContent();
	
}

//右侧入按钮函数
function rightIn(){
	var inputData = content.value.trim();
	if(!inputData.match(/^\d+$/)){
		alert("输入的内容必须为整数!");
		return;
	}
	newData.push(inputData);
	renderShowContent();
	
}

//左侧出按钮函数
function leftOut(){
	if(newData.length !== 0){
		var leftOutNum = newData.shift();
		alert("您删除的数字为:"+leftOutNum);
	}else{
		alert("数组已为空!");
	}
	
	
	renderShowContent();
	
}

//右侧出按钮函数
function rightOut(){
	if(newData.length !== 0){
		var rightOutNum = newData.pop();
		alert("您删除的数字为:"+rightOutNum);
	}else{
		alert("数组已为空!");
	}
	
	
	renderShowContent();
	
}

//点击元素即删除,为span添加事件委托
function delSpan(){
	var event = event || window.event;
	var target = event.target || event.srcElement;
	var x = target.getAttribute("data-index");
	newData.splice(x,1);
	renderShowContent();

}

function init(){
	addEventHandler(leftInButton,"click",leftIn);
	addEventHandler(rightInButton,"click",rightIn);
	addEventHandler(leftOutButton,"click",leftOut);
	addEventHandler(rightOutButton,"click",rightOut);
	addEventHandler(showContent,"click",delSpan);
}
init();