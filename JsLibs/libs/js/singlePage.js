/*! 作者:阿伟 */
/*! git:https://github.com/aweiu/JsLibs.git */
/*! 推荐sealoader模块加载器:https://www.npmjs.com/package/sealoader */
/*! 最后修改于 2017-06-20 12:08:13 */
!function(){var b=document.scripts,c=function(a){for(var c,d=b.length;c=b[--d];){var e=a(c);if(e)return e}},d=function(){if(document.currentScript)return document.currentScript.src;var b;try{a.b.c()}catch(d){b=d.stack,!b&&window.opera&&(b=(String(d).match(/of linked script \S+/g)||[]).join(" "))}return b?(b=b.split(/[@ ]/g).pop(),b="("===b[0]?b.slice(1,-1):b.replace(/\s/,""),b.replace(/(:\d+)?:\d+$/i,"")):c(function(a){if("interactive"===a.readyState)return a.src})}(),e=function(a){c(function(b){if(a||b.src===d)return b.parentNode.removeChild(b),!a})},f=function(a){var b=d.substr(d.indexOf("?")+1||d.length);if(""!==b){if(history.replaceState)try{window.stop()}catch(e){document.execCommand("stop")}var c=window.XMLHttpRequest?new XMLHttpRequest:new ActiveXObject("Microsoft.XMLHTTP");c.onreadystatechange=function(){if(4==this.readyState){if(200!=this.status)throw Error("获取资源文件"+b+"失败!请检查");a&&a(this.responseText)}},c.open("get",("/"==b.substr(0,1)?"":"/")+b,!0),c.setRequestHeader("Content-type","text/html;charset=utf-8"),c.setRequestHeader("X-Requested-With","httpRequest"),c.send()}},g=function(){for(var a=window.parent.document.getElementsByTagName("iframe"),b=0,c=a.length;b<c;b++)if(a[b].contentWindow.document==document)return a[b]}(),h=function(a,b,c){var d=a.indexOf("<"+b+">");return-1==d?c?"":h(a,b.toUpperCase(),!0):a.substring(d+b.length+2,a.lastIndexOf("</"+b+">"))};g||f(function(a){if(history.replaceState){e(!0);var b=window.location.href;b+=(-1==b.indexOf("?")?"?":"&")+"singlePage="+(new Date).getTime();var c=function(a){var b=a.contentWindow;a.height=Math.max(b.document.body.scrollHeight,b.document.documentElement.scrollHeight),a.fsrc?a.fsrc!=b.location.href?history.replaceState(null,b.document.title,b.location.href):history.replaceState(null,b.document.title,a.fsrc.substring(0,a.fsrc.lastIndexOf("singlePage")-1)):a.fsrc=a.src},d="<iframe src='"+b+"' width='100%' scrolling='no' frameborder='0' onload='("+c+")(this)'></iframe>";document.body.innerHTML=d+"\n"+a;for(var f=document.body.getElementsByTagName("script"),g=0;g<f.length;g++){var i=document.createElement("script");i.innerHTML=f[0].innerHTML,document.body.removeChild(f[0]),document.body.appendChild(i)}}else{e(),html=document.documentElement.outerHTML;var j=h(html,"body");html=html.replace(j,j+"\n"+a),document.write(html)}})}();