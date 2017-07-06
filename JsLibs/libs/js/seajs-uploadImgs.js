/*! 作者:阿伟 */
/*! git:https://github.com/aweiu/JsLibs.git */
/*! 推荐sealoader模块加载器:https://www.npmjs.com/package/sealoader */
/*! 最后修改于 2016-04-18 11:35:42 */
define(function(require,exports,module){var assetsUrl=module.uri;assetsUrl=assetsUrl.substring(0,assetsUrl.lastIndexOf("/js/"))+"/";var config,selectNum=0,ifr_code=0,removeIndex=[],imgArray,getIfrCode=function(){for(;document.getElementsByName("ifr_"+ifr_code).length>0;)ifr_code++;return"ifr_"+ifr_code},clearFile=function(a){try{a.file=null,a.value="",a.select(),document.selection.clear()}catch(b){}finally{return!1}},getOffset=function(a,b){var c=a.getBoundingClientRect(),d=b.getBoundingClientRect();return{left:c.left-d.left,top:c.top-d.top}},createWrapper=function(a){var b=a.mySuperWrapper;return b||(b=document.createElement("mySuperWrapper"),a.mySuperWrapper=b,b.style.cssText="position:relative;float:left;"),a.insertBefore(b,a.firstChild),b},getDw=function(a){var b=a.parentNode.mySuperWrapper,c=getOffset(a,a.parentNode),d={l:c.left,t:c.top};return"fixed"==getComputedStyle(a).position?d:(c=getOffset(b,b.parentNode),{l:d.l-c.left,t:d.t-c.top})},loadStyle=function(a,b){for(var c in b){if(!b.hasOwnProperty(c))break;a.style[c]=b[c]}},addRemoveBtn=function(a,b){var c=a.removeBtn,d=function(){var b=getDw(a),d=a.getBoundingClientRect();c.style.left=b.l-7+d.right-d.left+"px",c.style.top=b.t-7+"px"};if(c)c.style.display="block";else{var e=createWrapper(a.parentNode);c=document.createElement("uploadImgsNode"),a.removeBtn=c,e.appendChild(c),c.innerHTML="×",c.style.cssText="width:14px;height:14px;position:absolute;z-index:99999999999;background-color:#e8464a;color:white;line-height:14px;text-align:center;font-weight:bold;cursor: pointer;border-radius:50%;",loadStyle(c,config.removeBtnStyle),a.addEventListener("load",d),c.addEventListener("click",function(){config.removeFuc&&config.removeFuc(b),a.hideWaiting(),c.style.display="none",a.style.filter="",a.src="",selectNum--,a.dataForm.ifr.hasSubmit=!1,removeIndex.push(b),removeIndex.sort()})}d()},getNextImg=function(){var a=selectNum++;return null!=removeIndex[0]&&(a=removeIndex[0],removeIndex.splice(0,1)),imgArray[a]},checkImg=function(a){var b=function(b){if(a.accept){var c=a.accept.split(",");if(-1==c.indexOf(b))return alert("仅支持"+a.accept+"格式文件"),!1}return!0};try{var c=a.files[0];if(!b(c.type))return!1;var d=config.maxFileSize;return c.size>d?(1024>d?alert("文件大小不能超过"+d+"字节"):1048576>d?(d/=1024,alert("文件大小不能超过"+d.toFixed(2)+"KB")):(d/=1048576,alert("文件大小不能超过"+d.toFixed(2)+"MB")),!1):!0}catch(e){var f=a.value,g="image/"+f.substring(f.lastIndexOf(".")+1).toLowerCase();return!!b(g)}},preImg=function(a,b){showWaiting(a);try{var c=new FileReader;c.readAsDataURL(b),c.onload=function(b){return function(){a.src=this.result,a.showWaiting(),config.hasRemoveBtn!==!1&&addRemoveBtn(a,b)}}(selectNum-1)}catch(d){a.style.filter="progid:DXImageTransform.Microsoft.AlphaImageLoader(src='"+b+"',sizingMethod='scale')",a.showWaiting(),config.hasRemoveBtn!==!1&&addRemoveBtn(a,selectNum-1)}},showWaiting=function(a){var b,c=function(){var c=getDw(a),d=a.getBoundingClientRect();b.style.left=c.l+"px",b.style.top=c.t+"px",b.style.width=d.right-d.left+"px",b.style.height=d.bottom-d.top+"px"};a.showWaiting=function(){if(b=this.waiting_bg)b.style.display="table";else{b=document.createElement("table"),a.waiting_bg=b,b.style.cssText="position:absolute;background-color: rgba(0, 0, 0, .5);filter:progid:DXImageTransform.Microsoft.gradient(startColorstr=#7f000000,endColorstr=#7f000000);z-index:99999999999;",loadStyle(b,config.loadingStyle);var d=document.createElement("td");d.style.cssText="color:white;text-align:center;vertical-align: middle;",d.innerHTML="<img src='"+assetsUrl+"imgs/seajs-uploadImgs-loading.gif'/>",b.appendChild(d);var e=createWrapper(this.parentNode);e.appendChild(b),a.addEventListener("load",c),a.hideWaiting=function(){this.waiting_bg&&(this.waiting_bg.style.display="none",this.removeEventListener("load",c))}}c()}},changeFuc=function(){try{this.select(),this.blur();var filePath=document.selection.createRange().text}catch(e){filePath=this.files[0]}finally{if(!filePath)return;if(!checkImg(this))return clearFile(this);var img=getNextImg();preImg(img,filePath);var dataForm,ifr;if(img.dataForm)dataForm=img.dataForm,ifr=img.dataForm.ifr,dataForm.removeChild(dataForm.lastChild);else{var ifr_name=getIfrCode();dataForm=document.createElement("form"),dataForm.method="post",dataForm.action=config.uploadUrl,dataForm.enctype="multipart/form-data",dataForm.encoding="multipart/form-data",dataForm.encType="multipart/form-data",dataForm.target=ifr_name,dataForm.style.display="none",ifr=document.createElement("iframe"),ifr.name=ifr_name,ifr.style.display="none",ifr.addEventListener("load",function(index){return function(){if(this.hasSubmit){this.hasSubmit=!1,img.uploadImgCode--;var rs=window.frames[this.name].document.body.innerHTML;rs=rs.replace(/<.+?>/gim,"");try{rs=eval("("+rs+")")}catch(e){}finally{config.onUploadFinish&&config.onUploadFinish(rs,index),img.hideWaiting()}}}}(selectNum-1)),document.body.appendChild(dataForm),dataForm.appendChild(ifr),dataForm.ifr=ifr,img.dataForm=dataForm}this.removeEventListener("click",clickFuc),this.removeEventListener("change",changeFuc),delete this.myclick,delete this.mychange,delete this.eventQueue;var fileIpt=this.cloneNode();fileIpt.addEventListener("click",clickFuc),fileIpt.addEventListener("change",changeFuc),this.parentNode.insertBefore(fileIpt,this),this.removeAttribute("id"),this.name=img.name||config.name,dataForm.appendChild(this),ifr.hasSubmit=!0,dataForm.submit(),img.hasOwnProperty("uploadImgCode")?img.uploadImgCode++:img.uploadImgCode=1}},clickFuc=function(a){var b=config.uploadUrl;if(null==b)return console.log("尚未设置提交地址"),void a.preventDefault();var c;imgArray&&(c=imgArray.length,c>0)?selectNum>=c&&(alert("最多可上传"+c+"张图片"),a.preventDefault()):(console.log("请设置正确的图片数组"),a.preventDefault())};exports.isBusy=function(a){return 0==a.uploadImgCode},exports["int"]=function(a){config=a;var b=config.subBtn;if(!b||"file"!=b.type)return void console.log("错误的上传按钮");if(imgArray=config.imgArray,"HTMLCollection"==Object.prototype.toString.call(imgArray).slice(8,-1)){for(var c=[],d=0,e=imgArray.length;e>d;d++)c.push(imgArray[d]);imgArray=c}b.addEventListener("click",clickFuc),b.addEventListener("change",changeFuc)},exports.newInstance=function(fuc){return function(){return fuc+="",-1==fuc.indexOf("\nexports=this;")&&(fuc=("0,("+fuc+")").replace("{","{\nexports=this;")),new(eval(fuc))(require,exports,module)}}(arguments.callee)});