/*! 作者:阿伟 */
/*! git:https://github.com/aweiu/JsLibs.git */
/*! 推荐sealoader模块加载器:https://www.npmjs.com/package/sealoader */
/*! 最后修改于 2016-04-18 11:35:42 */
define(function(require,a,b){var c=(require("seajs-validate"),require("seajs-httpClient")),d=require("seajs-waiting"),e={},f=function(a){a.preventDefault(),a.stopPropagation(),a.returnValue=!1},g=new function(){this.enable=function(a){a.disabled=!1},this.disable=function(a,b){if(a.hasOwnProperty("lastAction")||(a.lastAction=a.action),a.lastAction==a.action){if(a.disabled===!0)return f(b),!0}else a.lastAction=a.action;return!1}},h=function(b,h){if(null!=h.getAttribute("actionName"))try{if(!h.validMe()||h.myValid&&!h.myValid())g.enable(h);else{var i=a.getFormData(h);if(""!=i){var j=h.getAttribute("action"),k=h.getAttribute("actionName");null!=j?c.post(j,i,function(b,c){return"enableBtn"==b?void g.enable(h):(0==b.code&&"true"!=h.getAttribute("canReSubmit")||g.enable(h),void(e[k]?e[k](b,c):a.onFormResult&&a.onFormResult(b,k,c)))}):alert("该表单尚未设置提交地址,请检查!")}else alert("该表单尚未绑定任何字段,请检查!")}}catch(l){}finally{f(b)}else g.enable(h),!h.validMe()||h.myValid&&!h.myValid()?f(b):d.show()};document.addEventListener("click",function(a){var b=a.srcElement||a.target;if("submit"==b.type){var c=b.form;if(c){if(g.disable(c,a))return;c.disabled=!0,h(a,c)}}}),document.addEventListener("keydown",function(a){if(13==a.keyCode){var b=a.srcElement||a.target,c=b.form;if(c){var d=c.getAttribute("enterTo");if(null!=d){var e=document.getElementById(d);e&&(f(a),setTimeout(function(){e.click()},0))}else{if(g.disable(c,a))return;c.disabled=!0,h(a,c)}}}}),HTMLFormElement.prototype.mySubmit=function(a){a&&(d.show(),this.removeAttribute("actionName")),this.subBtn||(this.subBtn=document.createElement("button"),this.subBtn.style.display="none",this.appendChild(this.subBtn)),this.subBtn.click()},a.addActionResult=function(a,b){e[a]=b},a.getFormData=function(a){for(var b="",c=["input","textarea","select"],d=0,e=c.length;e>d;d++)for(var f=a.getElementsByTagName(c[d]),g=0,h=f.length;h>g;g++){var i=f[g];("radio"!=i.type||i.checked)&&""!=i.name&&(b+=i.name+"="+i.value+"&")}return b.substring(0,b.length-1)},a.newInstance=function(){return a}});