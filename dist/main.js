!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.ajax=t():e.ajax=t()}(window,function(){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=0)}([function(e,t,r){"use strict";function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var o=r(1);e.exports=function(){var e={URLENCODED:"application/x-www-form-urlencoded",FORM:"multipart/form-data",JSON:"application/json; charset=utf-8"},t=function(e){return new Promise(function(t,r){e=a(e);var n=window.XMLHttpRequest?new window.XMLHttpRequest:new window.ActiveXObject("Microsoft.XMLHTTP");for(var o in n.open(e.method,e.url),n.setRequestHeader("X-Requested-With","XMLHttpRequest"),e.headers){var i=e.headers[o];n.setRequestHeader(o,i)}var u=e.ratio;n.upload.addEventListener("progress",function(t){var r=Math.round(t.loaded/t.total*100),n=Math.ceil(r*u/100);e.progress(n)},!1),n.addEventListener("progress",function(t){var r=Math.round(t.loaded/t.total*100),n=Math.ceil(r*(100-u)/100)+u;e.progress(n)},!1),n.onreadystatechange=function(){if(4===n.readyState){var e=n.response;try{e=JSON.parse(e)}catch(e){}200===n.status?t(e):r(e)}},n.send(e.data)})},r=function(e){e=a(e);var r=i(e),n=u(e.data,r);return r!==ajax.contentType.FORM&&(e.headers["content-type"]=r),t({url:e.url,method:"POST",data:n,headers:e.headers,progress:e.progress,ratio:e.ratio})},a=function(t){if(!t.url||"string"!=typeof t.url)throw new Error("Url must be a non-empty string");if(t.method&&"string"!=typeof t.method)throw new Error("`method` must be a string or null");if(t.method=t.method||"GET",t.headers&&"object"!==n(t.headers))throw new Error("`headers` must be an object or null");if(t.headers=t.headers||{},t.type&&"string"!=typeof t.type){var r=!1;for(var o in e)e[o]===t.type&&(r=!0);if(!r)throw new Error("`type` must be taken from module's «contentType» library")}if(t.progress&&"function"!=typeof t.progress)throw new Error("`progress` must be a function or null");if(t.progress=t.progress||function(){},t.ratio&&"number"!=typeof t.ratio)throw new Error("`ratio` must be a number");if(t.ratio<0||t.ratio>100)throw new Error("`ratio` must be in a 0-100 interval");if(t.ratio=t.ratio||90,t.accept&&"string"!=typeof t.accept)throw new Error("`accept` must be a string with a list of allowed mime-types");if(t.accept=t.accept||"*/*",t.multiple&&"boolean"!=typeof t.multiple)throw new Error("`multiple` must be a true or false");if(t.multiple=t.multiple||!1,t.fieldName&&"string"!=typeof t.fieldName)throw new Error("`fieldName` must be a string");return t.fieldName=t.fieldName||"files",t},i=function(){return(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).type||e.URLENCODED},u=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};switch(arguments.length>1?arguments[1]:void 0){case e.URLENCODED:return o.urlEncode(t);case e.JSON:return o.jsonEncode(t);case e.FORM:return o.formEncode(t);default:return t}};return{contentType:e,request:t,get:function(r){r=a(r);var n=u(r.data,e.URLENCODED);return r.url=/\?/.test(r.url)?r.url+"&"+n:r.url+"?"+n,t({url:r.url,method:"GET",headers:r.headers,progress:r.progress,ratio:r.ratio})},post:r,transport:function(t){return t=a(t),o.transport(t).then(function(n){if(t.data)for(var o in t.data){var a=t.data[o];n.append(o,a)}return r({url:"/",type:e.form,data:n,headers:t.headers,progress:t.progress,ratio:t.ratio})})}}}()},function(e,t){function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function n(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}e.exports=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}return function(e,t,r){t&&n(e.prototype,t),r&&n(e,r)}(e,null,[{key:"urlEncode",value:function(e){var t=[];return"object"===r(e)&&Object.keys(e).forEach(function(r){var n=e[r];t.push("".concat(r,"=").concat(n))}),t.join("&")}},{key:"jsonEncode",value:function(e){return JSON.stringify(e)}},{key:"formEncode",value:function(t){if(e.isFormData(t))return t;if(t instanceof HTMLElement&&"FORM"===t.tagName)return new FormData(t);if(t instanceof Object&&Object.keys(t).length){var r=new FormData;for(var n in t)if(t.hasOwnProperty(n)){var o=t[n];r.append(n,o)}return r}throw new Error("`data` must be an instance of Object, FormData or <FORM> HTMLElement")}},{key:"isFormData",value:function(e){return e instanceof FormData}},{key:"transport",value:function(e){return new Promise(function(t,r){var n=document.createElement("INPUT");n.type="file",e.multiple&&n.setAttribute("multiple","multiple"),e.accept&&n.setAttribute("accept",e.accept),n.addEventListener("change",function(r){for(var n=r.target.files,o=new FormData,a=0;a<n.length;a++)o.append(e.fieldName,n[a],n[a].name);t(o)},!1),n.click()})}}]),e}()}])});