/*! 作者:阿伟 */
/*! git:https://github.com/aweiu/JsLibs.git */
/*! 推荐sealoader模块加载器:https://www.npmjs.com/package/sealoader */
/*! 最后修改于 2016-12-05 10:58:58 */
!function(){window.console=window.console||function(){var a={};return a.log=a.warn=a.debug=a.info=a.error=a.time=a.dir=a.profile=a.clear=a.exception=a.trace=a.assert=function(){},a}(),Array.prototype.indexOf=Array.prototype.indexOf||function(a){var b=this.length>>>0,c=Number(arguments[1])||0;for(c=c<0?Math.ceil(c):Math.floor(c),c<0&&(c+=b);c<b;c++)if(c in this&&this[c]===a)return c;return-1},Array.prototype.forEach=Array.prototype.forEach||function(a){if("function"!=typeof a)throw new TypeError;for(var b=arguments[1],c=0,d=this.length;c<d;c++)a.call(b,this[c],c,this)},window.HTMLElement=window.HTMLElement||Element,window.HTMLDocument=window.HTMLDocument||Document;var a={add:function(a,b,c){var d=!1;this.hasOwnProperty(a)||(this[a]={}),this[a].hasOwnProperty(b)||(this[a][b]=[],d=!0);var e=this[a][b];return e.indexOf(c)==-1&&e.push(c),d},remove:function(a,b,c){try{var d=this[a][b];d.splice(d.indexOf(c),1),0==d.length&&delete this[a][b]}catch(e){}},get:function(a,b){try{return this[a][b].slice()}catch(c){return[]}},contain:function(a,b,c){try{return this[a][b].indexOf(c)!=-1}catch(d){return!1}}},b={add:function(a,b,c,d){if(this.hasOwnProperty(a)||(this[a]={}),this[a].hasOwnProperty(b)||(this[a][b]={}),this[a][b].hasOwnProperty(c)||(this[a][b][c]=[]),0==this[a][b][c].length)return this[a][b][c].push(d),!0},get:function(a,b,c){try{return this[a][b][c]}catch(d){}},remove:function(a,b,c){try{delete this[a][b][c]}catch(d){}}},c={input:["focusin",function(a){return document.activeElement==a.srcElement}],blur:["focusout",function(a){return document.activeElement!=a.srcElement}],focus:["focusin",function(a){return document.activeElement==a.srcElement}],get:function(a){return this.hasOwnProperty(a)?this[a]:[]}},d=!1;HTMLElement.prototype.addEventListener=HTMLElement.prototype.addEventListener||function(e,f){if("function"==typeof f){var g=this,h=c.get(e),i=h[0]||e,j=f,k=h[1];if("input"==e){var l=function(a){var c=a.srcElement;b.get(g,"input",f)?"value"!=a.propertyName&&"selectedIndex"!=a.propertyName||(d?setTimeout(function(){d=!1},0):f.call(c,a)):c.removeEventListener("propertychange",l)};if(j=function(a){var b=a.srcElement;null!=b.value&&(b.addEventListener("propertychange",l),Object.defineProperty(b,"value",{set:function(a){d=!0,this.setAttribute("value",a)},get:function(){return this.getAttribute("value")}}))},!b.add(this,"input",f,["focusin",j]))return}a.add(this,i,j)&&this.attachEvent("on"+i,function(b){k&&!k(b)||a.get(g,i).forEach(function(c){a.contain(g,i,c)&&c.call(g,b)})})}},HTMLDocument.prototype.addEventListener=HTMLDocument.prototype.addEventListener||HTMLElement.prototype.addEventListener,window.addEventListener=window.addEventListener||HTMLElement.prototype.addEventListener,HTMLElement.prototype.removeEventListener=HTMLElement.prototype.removeEventListener||function(d,e){if("function"==typeof e){var f=c.get(d)[0]||d,g=b.get(this,d,e)||e;"function"==typeof g?a.remove(this,f,g):(g.forEach(function(b){a.remove(this,b[0],b[1])}),b.remove(this,d,e))}},HTMLDocument.prototype.removeEventListener=HTMLDocument.prototype.removeEventListener||HTMLElement.prototype.removeEventListener,window.removeEventListener=window.removeEventListener||HTMLElement.prototype.removeEventListener,Event.prototype.preventDefault=Event.prototype.preventDefault||function(){this.returnValue=!1},Event.prototype.stopPropagation=Event.prototype.stopPropagation||function(){this.cancelBubble=!0},HTMLElement.prototype.getComputedStyle=HTMLElement.prototype.getComputedStyle||function(){return this.currentStyle};var e=HTMLElement.prototype.getBoundingClientRect;HTMLElement.prototype.getBoundingClientRect=function(){e.call(document.body);var a=e.call(this);return{left:a.left,right:a.right,top:a.top,bottom:a.bottom,width:a.right-a.left,height:a.bottom-a.top}},window.getComputedStyle=window.getComputedStyle||function(a){var b={getPropertyValue:function(a){return this[a]}};for(var c in a.currentStyle)try{b[c]=a.currentStyle[c]}catch(d){}return b},HTMLElement.prototype.hasOwnProperty=Object.prototype.hasOwnProperty}();