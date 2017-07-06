/*! 作者:阿伟 */
/*! git:https://github.com/aweiu/JsLibs.git */
/*! 推荐sealoader模块加载器:https://www.npmjs.com/package/sealoader */
/*! 最后修改于 2016-04-18 11:35:42 */
function PlaceHolder(){var a=function(a){var c=window.getComputedStyle(a),d=function(){var d=a.parentNode.mySuperWrapper,e=b(a,a.parentNode),f={l:e.left,t:e.top};return"fixed"==c.position?f:(e=b(d,d.parentNode),{l:f.l-e.left,t:f.t-e.top})}(),e=a.getBoundingClientRect(),f=e.bottom-e.top;a.myPlaceHolder.style.cssText="color:#aca899;white-space:nowrap;width:auto;text-align:left;font-weight:normal;position:absolute;;font-family:"+c.fontFamily+";font-size:"+c.fontSize+";;padding-left:"+c.paddingLeft+";padding-top:"+c.paddingTop+";padding-bottom:"+c.paddingBottom+";border-top-width:"+c.borderTopWidth+";border-bottom-width:"+c.borderBottomWidth+";border-left-width:"+c.borderLeftWidth+";line-height:"+(isNaN(parseInt(c.lineHeight))?f+"px":c.lineHeight)+";text-indent:"+c.textIndent+";left:"+d.l+"px;top:"+d.t+"px;height:"+(e.bottom-e.top)+"px",a.myPlaceHolder.innerHTML=a.getAttribute("placeholder")},b=function(a,b){var c=a.getBoundingClientRect(),d=b.getBoundingClientRect();return{left:c.left-d.left,top:c.top-d.top}},c=function(a){var b=getComputedStyle(a);if(""==a.value&&a.getAttribute("placeholder")&&"hidden"!=a.type&&"none"!=b.display&&"hidden"!=b.visibility){var c=a.style.cssText;a.style.height="10px";var d=a.getBoundingClientRect();return a.style.cssText=c,d.right-d.left==0&&d.bottom-d.top==0}return!0},d=function(a){var b=a.mySuperWrapper;return b||(b=document.createElement("mySuperWrapper"),a.mySuperWrapper=b,b.style.cssText="position:relative;float:left;"),a.insertBefore(b,a.firstChild),b};HTMLInputElement.prototype.addPlaceHolder=function(){var b=this.getAttribute("placeholder");if(b){var e=this;if(this.myPlaceHolder)return this.myPlaceHolder.innerHTML=b,void a(this);var f=function(){e.myPlaceHolder.style.display="none"};this.myPlaceHolder=document.createElement("placeholdernode"),this.myPlaceHolder.setAttribute("notTipNext","true"),this.myPlaceHolder.style.cssText="display:none;position:absolute;";var g=getComputedStyle(this).position;if("absolute"==g||"fixed"==g)this.parentNode.insertBefore(this.myPlaceHolder,this.nextSibling);else{var h=d(this.parentNode);h.appendChild(this.myPlaceHolder)}var i=function(){c(e)||(e.myPlaceHolder.style.display="block",a(e))};this.addEventListener("blur",i);var j=function(){""==e.value?i():f()};this.addEventListener("propertychange",function(a){"value"==a.propertyName&&j()}),this.addEventListener("focus",j),this.myPlaceHolder.addEventListener("mousedown",function(){e.focus()}),i()}},HTMLInputElement.prototype.removePlaceHolder=function(){this.myPlaceHolder&&(this.parentNode.mySuperWrapper.removeChild(this.myPlaceHolder),delete this.myPlaceHolder)},HTMLTextAreaElement.prototype.addPlaceHolder=HTMLInputElement.prototype.addPlaceHolder,this.main=function(a){["input","textarea"].forEach(function(b){for(var c=a.getElementsByTagName(b),d=0,e=c.length;e>d;d++)c[d].addPlaceHolder()})}}var myPlaceHolder=new PlaceHolder;window.addEventListener("load",function(){myPlaceHolder.main(document)});