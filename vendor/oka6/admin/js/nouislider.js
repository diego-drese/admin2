var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};!function(t){"function"==typeof define&&define.amd?define([],t):"object"==("undefined"==typeof exports?"undefined":_typeof(exports))?module.exports=t():window.noUiSlider=t()}(function(){"use strict";function t(t){t.parentElement.removeChild(t)}function e(t){return null!=t}function r(t){t.preventDefault()}function n(t){return"number"==typeof t&&!isNaN(t)&&isFinite(t)}function i(t,e,r){0<r&&(l(t,e),setTimeout(function(){u(t,e)},r))}function o(t){return Math.max(Math.min(t,100),0)}function a(t){return Array.isArray(t)?t:[t]}function s(t){var e=(t=String(t)).split(".");return 1<e.length?e[1].length:0}function l(t,e){t.classList?t.classList.add(e):t.className+=" "+e}function u(t,e){t.classList?t.classList.remove(e):t.className=t.className.replace(new RegExp("(^|\\b)"+e.split(" ").join("|")+"(\\b|$)","gi")," ")}function c(t){var e=void 0!==window.pageXOffset,r="CSS1Compat"===(t.compatMode||"");return{x:e?window.pageXOffset:r?t.documentElement.scrollLeft:t.body.scrollLeft,y:e?window.pageYOffset:r?t.documentElement.scrollTop:t.body.scrollTop}}function p(t,e){return 100/(e-t)}function f(t,e){return 100*e/(t[1]-t[0])}function d(t,e){for(var r=1;t>=e[r];)r+=1;return r}function h(t,e,r){if(r>=t.slice(-1)[0])return 100;var n,i,o=d(r,t),a=t[o-1],s=t[o],l=e[o-1],u=e[o];return l+(i=r,f(n=[a,s],n[0]<0?i+Math.abs(n[0]):i-n[0])/p(l,u))}function m(t,e,r,n){if(100===n)return n;var i,o,a=d(n,t),s=t[a-1],l=t[a];return r?(l-s)/2<n-s?l:s:e[a-1]?t[a-1]+(i=n-t[a-1],o=e[a-1],Math.round(i/o)*o):n}function g(t,e,r){var i;if("number"==typeof e&&(e=[e]),!Array.isArray(e))throw new Error("noUiSlider ("+B+"): 'range' contains invalid value.");if(!n(i="min"===t?0:"max"===t?100:parseFloat(t))||!n(e[0]))throw new Error("noUiSlider ("+B+"): 'range' value isn't numeric.");r.xPct.push(i),r.xVal.push(e[0]),i?r.xSteps.push(!isNaN(e[1])&&e[1]):isNaN(e[1])||(r.xSteps[0]=e[1]),r.xHighestCompleteStep.push(0)}function v(t,e,r){if(e)if(r.xVal[t]!==r.xVal[t+1]){r.xSteps[t]=f([r.xVal[t],r.xVal[t+1]],e)/p(r.xPct[t],r.xPct[t+1]);var n=(r.xVal[t+1]-r.xVal[t])/r.xNumSteps[t],i=Math.ceil(Number(n.toFixed(3))-1),o=r.xVal[t]+r.xNumSteps[t]*i;r.xHighestCompleteStep[t]=o}else r.xSteps[t]=r.xHighestCompleteStep[t]=r.xVal[t]}function b(t,e,r){var n;this.xPct=[],this.xVal=[],this.xSteps=[r||!1],this.xNumSteps=[!1],this.xHighestCompleteStep=[],this.snap=e;var i=[];for(n in t)t.hasOwnProperty(n)&&i.push([t[n],n]);for(i.length&&"object"==_typeof(i[0][0])?i.sort(function(t,e){return t[0][0]-e[0][0]}):i.sort(function(t,e){return t[0]-e[0]}),n=0;n<i.length;n++)g(i[n][1],i[n][0],this);for(this.xNumSteps=this.xSteps.slice(0),n=0;n<this.xNumSteps.length;n++)v(n,this.xNumSteps[n],this)}function S(t){if("object"==_typeof(e=t)&&"function"==typeof e.to&&"function"==typeof e.from)return!0;var e;throw new Error("noUiSlider ("+B+"): 'format' requires 'to' and 'from' methods.")}function y(t,e){if(!n(e))throw new Error("noUiSlider ("+B+"): 'step' is not numeric.");t.singleStep=e}function x(t,e){if("object"!=(void 0===e?"undefined":_typeof(e))||Array.isArray(e))throw new Error("noUiSlider ("+B+"): 'range' is not an object.");if(void 0===e.min||void 0===e.max)throw new Error("noUiSlider ("+B+"): Missing 'min' or 'max' in 'range'.");if(e.min===e.max)throw new Error("noUiSlider ("+B+"): 'range' 'min' and 'max' cannot be equal.");t.spectrum=new b(e,t.snap,t.singleStep)}function w(t,e){if(e=a(e),!Array.isArray(e)||!e.length)throw new Error("noUiSlider ("+B+"): 'start' option is incorrect.");t.handles=e.length,t.start=e}function E(t,e){if("boolean"!=typeof(t.snap=e))throw new Error("noUiSlider ("+B+"): 'snap' option must be a boolean.")}function C(t,e){if("boolean"!=typeof(t.animate=e))throw new Error("noUiSlider ("+B+"): 'animate' option must be a boolean.")}function N(t,e){if("number"!=typeof(t.animationDuration=e))throw new Error("noUiSlider ("+B+"): 'animationDuration' option must be a number.")}function U(t,e){var r,n=[!1];if("lower"===e?e=[!0,!1]:"upper"===e&&(e=[!1,!0]),!0===e||!1===e){for(r=1;r<t.handles;r++)n.push(e);n.push(!1)}else{if(!Array.isArray(e)||!e.length||e.length!==t.handles+1)throw new Error("noUiSlider ("+B+"): 'connect' option doesn't match handle count.");n=e}t.connect=n}function k(t,e){switch(e){case"horizontal":t.ort=0;break;case"vertical":t.ort=1;break;default:throw new Error("noUiSlider ("+B+"): 'orientation' option is invalid.")}}function P(t,e){if(!n(e))throw new Error("noUiSlider ("+B+"): 'margin' option must be numeric.");if(0!==e&&(t.margin=t.spectrum.getMargin(e),!t.margin))throw new Error("noUiSlider ("+B+"): 'margin' option is only supported on linear sliders.")}function A(t,e){if(!n(e))throw new Error("noUiSlider ("+B+"): 'limit' option must be numeric.");if(t.limit=t.spectrum.getMargin(e),!t.limit||t.handles<2)throw new Error("noUiSlider ("+B+"): 'limit' option is only supported on linear sliders with 2 or more handles.")}function V(t,e){if(!n(e)&&!Array.isArray(e))throw new Error("noUiSlider ("+B+"): 'padding' option must be numeric or array of exactly 2 numbers.");if(Array.isArray(e)&&2!==e.length&&!n(e[0])&&!n(e[1]))throw new Error("noUiSlider ("+B+"): 'padding' option must be numeric or array of exactly 2 numbers.");if(0!==e){if(Array.isArray(e)||(e=[e,e]),!(t.padding=[t.spectrum.getMargin(e[0]),t.spectrum.getMargin(e[1])])===t.padding[0]||!1===t.padding[1])throw new Error("noUiSlider ("+B+"): 'padding' option is only supported on linear sliders.");if(t.padding[0]<0||t.padding[1]<0)throw new Error("noUiSlider ("+B+"): 'padding' option must be a positive number(s).");if(100<t.padding[0]+t.padding[1])throw new Error("noUiSlider ("+B+"): 'padding' option must not exceed 100% of the range.")}}function M(t,e){switch(e){case"ltr":t.dir=0;break;case"rtl":t.dir=1;break;default:throw new Error("noUiSlider ("+B+"): 'direction' option was not recognized.")}}function O(t,e){if("string"!=typeof e)throw new Error("noUiSlider ("+B+"): 'behaviour' must be a string containing options.");var r=0<=e.indexOf("tap"),n=0<=e.indexOf("drag"),i=0<=e.indexOf("fixed"),o=0<=e.indexOf("snap"),a=0<=e.indexOf("hover"),s=0<=e.indexOf("unconstrained");if(i){if(2!==t.handles)throw new Error("noUiSlider ("+B+"): 'fixed' behaviour must be used with 2 handles");P(t,t.start[1]-t.start[0])}if(s&&(t.margin||t.limit))throw new Error("noUiSlider ("+B+"): 'unconstrained' behaviour cannot be used with margin or limit");t.events={tap:r||o,drag:n,fixed:i,snap:o,hover:a,unconstrained:s}}function L(t,e){if(!1!==e)if(!0===e){t.tooltips=[];for(var r=0;r<t.handles;r++)t.tooltips.push(!0)}else{if(t.tooltips=a(e),t.tooltips.length!==t.handles)throw new Error("noUiSlider ("+B+"): must pass a formatter for all handles.");t.tooltips.forEach(function(t){if("boolean"!=typeof t&&("object"!=(void 0===t?"undefined":_typeof(t))||"function"!=typeof t.to))throw new Error("noUiSlider ("+B+"): 'tooltips' must be passed a formatter or 'false'.")})}}function z(t,e){S(t.ariaFormat=e)}function j(t,e){S(t.format=e)}function H(t,e){if("boolean"!=typeof(t.keyboardSupport=e))throw new Error("noUiSlider ("+B+"): 'keyboardSupport' option must be a boolean.")}function F(t,e){t.documentElement=e}function D(t,e){if("string"!=typeof e&&!1!==e)throw new Error("noUiSlider ("+B+"): 'cssPrefix' must be a string or `false`.");t.cssPrefix=e}function T(t,e){if("object"!=(void 0===e?"undefined":_typeof(e)))throw new Error("noUiSlider ("+B+"): 'cssClasses' must be an object.");if("string"==typeof t.cssPrefix)for(var r in t.cssClasses={},e)e.hasOwnProperty(r)&&(t.cssClasses[r]=t.cssPrefix+e[r]);else t.cssClasses=e}function R(t){var r={margin:0,limit:0,padding:0,animate:!0,animationDuration:300,ariaFormat:q,format:q},n={step:{r:!1,t:y},start:{r:!0,t:w},connect:{r:!0,t:U},direction:{r:!0,t:M},snap:{r:!1,t:E},animate:{r:!1,t:C},animationDuration:{r:!1,t:N},range:{r:!0,t:x},orientation:{r:!1,t:k},margin:{r:!1,t:P},limit:{r:!1,t:A},padding:{r:!1,t:V},behaviour:{r:!0,t:O},ariaFormat:{r:!1,t:z},format:{r:!1,t:j},tooltips:{r:!1,t:L},keyboardSupport:{r:!0,t:H},documentElement:{r:!1,t:F},cssPrefix:{r:!0,t:D},cssClasses:{r:!0,t:T}},i={connect:!1,direction:"ltr",behaviour:"tap",orientation:"horizontal",keyboardSupport:!0,cssPrefix:"noUi-",cssClasses:{target:"target",base:"base",origin:"origin",handle:"handle",handleLower:"handle-lower",handleUpper:"handle-upper",touchArea:"touch-area",horizontal:"horizontal",vertical:"vertical",background:"background",connect:"connect",connects:"connects",ltr:"ltr",rtl:"rtl",draggable:"draggable",drag:"state-drag",tap:"state-tap",active:"active",tooltip:"tooltip",pips:"pips",pipsHorizontal:"pips-horizontal",pipsVertical:"pips-vertical",marker:"marker",markerHorizontal:"marker-horizontal",markerVertical:"marker-vertical",markerNormal:"marker-normal",markerLarge:"marker-large",markerSub:"marker-sub",value:"value",valueHorizontal:"value-horizontal",valueVertical:"value-vertical",valueNormal:"value-normal",valueLarge:"value-large",valueSub:"value-sub"}};t.format&&!t.ariaFormat&&(t.ariaFormat=t.format),Object.keys(n).forEach(function(o){if(!e(t[o])&&void 0===i[o]){if(n[o].r)throw new Error("noUiSlider ("+B+"): '"+o+"' is required.");return!0}n[o].t(r,e(t[o])?t[o]:i[o])}),r.pips=t.pips;var o=document.createElement("div"),a=void 0!==o.style.msTransform,s=void 0!==o.style.transform;return r.transformRule=s?"transform":a?"msTransform":"webkitTransform",r.style=[["left","top"],["right","bottom"]][r.dir][r.ort],r}function _(e,n,s){function p(t,e){var r=ct.createElement("div");return e&&l(r,e),t.appendChild(r),r}function f(t,e){var r=p(t,n.cssClasses.origin),i=p(r,n.cssClasses.handle);return p(i,n.cssClasses.touchArea),i.setAttribute("data-handle",e),n.keyboardSupport&&(i.setAttribute("tabindex","0"),i.addEventListener("keydown",function(t){return function(t,e){if(m()||g(e))return!1;var r=["Left","Right"],i=["Down","Up"];n.dir&&!n.ort?r.reverse():n.ort&&!n.dir&&i.reverse();var o=t.key.replace("Arrow",""),a=o===i[0]||o===r[0],s=o===i[1]||o===r[1];if(!a&&!s)return!0;t.preventDefault();var l=a?0:1,u=I(e)[l];return null!==u&&(!1===u&&(u=it.getDefaultStep(at[e],a,10)),u=Math.max(u,1e-7),u*=a?-1:1,T(e,it.toStepping(ot[e]+u),!0,!0),L("slide",e),L("update",e),L("change",e),L("set",e),!1)}(t,e)})),i.setAttribute("role","slider"),i.setAttribute("aria-orientation",n.ort?"vertical":"horizontal"),0===e?l(i,n.cssClasses.handleLower):e===n.handles-1&&l(i,n.cssClasses.handleUpper),r}function d(t,e){return!!e&&p(t,n.cssClasses.connect)}function h(t,e){return!!n.tooltips[e]&&p(t.firstChild,n.cssClasses.tooltip)}function m(){return nt.hasAttribute("disabled")}function g(t){return $[t].hasAttribute("disabled")}function v(){K&&(O("update.tooltips"),K.forEach(function(e){e&&t(e)}),K=null)}function b(){v(),K=$.map(h),M("update.tooltips",function(t,e,r){if(K[e]){var i=t[e];!0!==n.tooltips[e]&&(i=n.tooltips[e].to(r[e])),K[e].innerHTML=i}})}function S(t,e,r){function i(t,e){var r=e===n.cssClasses.value,i=r?a:s;return e+" "+(r?u:c)[n.ort]+" "+i[t]}var o=ct.createElement("div"),a=[];a[ht]=n.cssClasses.valueNormal,a[mt]=n.cssClasses.valueLarge,a[gt]=n.cssClasses.valueSub;var s=[];s[ht]=n.cssClasses.markerNormal,s[mt]=n.cssClasses.markerLarge,s[gt]=n.cssClasses.markerSub;var u=[n.cssClasses.valueHorizontal,n.cssClasses.valueVertical],c=[n.cssClasses.markerHorizontal,n.cssClasses.markerVertical];return l(o,n.cssClasses.pips),l(o,0===n.ort?n.cssClasses.pipsHorizontal:n.cssClasses.pipsVertical),Object.keys(t).forEach(function(a){!function(t,a,s){if((s=e?e(a,s):s)!==dt){var l=p(o,!1);l.className=i(s,n.cssClasses.marker),l.style[n.style]=t+"%",ht<s&&((l=p(o,!1)).className=i(s,n.cssClasses.value),l.setAttribute("data-value",a),l.style[n.style]=t+"%",l.innerHTML=r.to(a))}}(a,t[a][0],t[a][1])}),o}function y(){J&&(t(J),J=null)}function x(t){y();var e,r,n,i,o,a,s,l,u,c=t.mode,p=t.density||1,f=t.filter||!1,d=function(t,e,r){if("range"===t||"steps"===t)return it.xVal;if("count"===t){if(e<2)throw new Error("noUiSlider ("+B+"): 'values' (>= 2) required for mode 'count'.");var n=e-1,i=100/n;for(e=[];n--;)e[n]=n*i;e.push(100),t="positions"}return"positions"===t?e.map(function(t){return it.fromStepping(r?it.getStep(t):t)}):"values"===t?r?e.map(function(t){return it.fromStepping(it.getStep(it.toStepping(t)))}):e:void 0}(c,t.values||!1,t.stepped||!1),h=(e=p,r=c,n=d,i={},o=it.xVal[0],a=it.xVal[it.xVal.length-1],l=s=!1,u=0,(n=n.slice().sort(function(t,e){return t-e}).filter(function(t){return!this[t]&&(this[t]=!0)},{}))[0]!==o&&(n.unshift(o),s=!0),n[n.length-1]!==a&&(n.push(a),l=!0),n.forEach(function(t,o){var a,c,p,f,d,h,m,g,v,b,S=t,y=n[o+1],x="steps"===r;if(x&&(a=it.xNumSteps[o]),a||(a=y-S),!1!==S&&void 0!==y)for(a=Math.max(a,1e-7),c=S;c<=y;c=(c+a).toFixed(7)/1){for(g=(d=(f=it.toStepping(c))-u)/e,b=d/(v=Math.round(g)),p=1;p<=v;p+=1)i[(h=u+p*b).toFixed(5)]=[it.fromStepping(h),0];m=-1<n.indexOf(c)?mt:x?gt:ht,!o&&s&&(m=0),c===y&&l||(i[f.toFixed(5)]=[c,m]),u=f}}),i),m=t.format||{to:Math.round};return J=nt.appendChild(S(h,f,m))}function w(){var t=W.getBoundingClientRect(),e="offset"+["Width","Height"][n.ort];return 0===n.ort?t.width||W[e]:t.height||W[e]}function E(t,e,r,i){var o=function(o){return!!(o=function(t,e,r){var n,i,o=0===t.type.indexOf("touch"),a=0===t.type.indexOf("mouse"),s=0===t.type.indexOf("pointer");if(0===t.type.indexOf("MSPointer")&&(s=!0),o){var l=function(t){return t.target===r||r.contains(t.target)};if("touchstart"===t.type){var u=Array.prototype.filter.call(t.touches,l);if(1<u.length)return!1;n=u[0].pageX,i=u[0].pageY}else{var p=Array.prototype.find.call(t.changedTouches,l);if(!p)return!1;n=p.pageX,i=p.pageY}}return e=e||c(ct),(a||s)&&(n=t.clientX+e.x,i=t.clientY+e.y),t.pageOffset=e,t.points=[n,i],t.cursor=a||s,t}(o,i.pageOffset,i.target||e))&&!(m()&&!i.doNotReject)&&(a=nt,s=n.cssClasses.tap,!((a.classList?a.classList.contains(s):new RegExp("\\b"+s+"\\b").test(a.className))&&!i.doNotReject)&&!(t===et.start&&void 0!==o.buttons&&1<o.buttons)&&(!i.hover||!o.buttons)&&(rt||o.preventDefault(),o.calcPoint=o.points[n.ort],void r(o,i)));var a,s},a=[];return t.split(" ").forEach(function(t){e.addEventListener(t,o,!!rt&&{passive:!0}),a.push([t,o])}),a}function C(t){var e,r,i,a,s,l,u=100*(t-(e=W,r=n.ort,i=e.getBoundingClientRect(),a=e.ownerDocument,s=a.documentElement,l=c(a),/webkit.*Chrome.*Mobile/i.test(navigator.userAgent)&&(l.x=0),r?i.top+l.y-s.clientTop:i.left+l.x-s.clientLeft))/w();return u=o(u),n.dir?100-u:u}function N(t,e){"mouseout"===t.type&&"HTML"===t.target.nodeName&&null===t.relatedTarget&&k(t,e)}function U(t,e){if(-1===navigator.appVersion.indexOf("MSIE 9")&&0===t.buttons&&0!==e.buttonsProperty)return k(t,e);var r=(n.dir?-1:1)*(t.calcPoint-e.startCalcPoint);H(0<r,100*r/e.baseSize,e.locations,e.handleNumbers)}function k(t,e){e.handle&&(u(e.handle,n.cssClasses.active),lt-=1),e.listeners.forEach(function(t){pt.removeEventListener(t[0],t[1])}),0===lt&&(u(nt,n.cssClasses.drag),D(),t.cursor&&(ft.style.cursor="",ft.removeEventListener("selectstart",r))),e.handleNumbers.forEach(function(t){L("change",t),L("set",t),L("end",t)})}function P(t,e){if(e.handleNumbers.some(g))return!1;var i;1===e.handleNumbers.length&&(i=$[e.handleNumbers[0]].children[0],lt+=1,l(i,n.cssClasses.active)),t.stopPropagation();var o=[],a=E(et.move,pt,U,{target:t.target,handle:i,listeners:o,startCalcPoint:t.calcPoint,baseSize:w(),pageOffset:t.pageOffset,handleNumbers:e.handleNumbers,buttonsProperty:t.buttons,locations:at.slice()}),s=E(et.end,pt,k,{target:t.target,handle:i,listeners:o,doNotReject:!0,handleNumbers:e.handleNumbers}),u=E("mouseout",pt,N,{target:t.target,handle:i,listeners:o,doNotReject:!0,handleNumbers:e.handleNumbers});o.push.apply(o,a.concat(s,u)),t.cursor&&(ft.style.cursor=getComputedStyle(t.target).cursor,1<$.length&&l(nt,n.cssClasses.drag),ft.addEventListener("selectstart",r,!1)),e.handleNumbers.forEach(function(t){L("start",t)})}function A(t){t.stopPropagation();var e,r,o,a=C(t.calcPoint),s=(e=a,o=!(r=100),$.forEach(function(t,n){if(!g(n)){var i=at[n],a=Math.abs(i-e);(a<r||a<=r&&i<e||100===a&&100===r)&&(o=n,r=a)}}),o);if(!1===s)return!1;n.events.snap||i(nt,n.cssClasses.tap,n.animationDuration),T(s,a,!0,!0),D(),L("slide",s,!0),L("update",s,!0),L("change",s,!0),L("set",s,!0),n.events.snap&&P(t,{handleNumbers:[s]})}function V(t){var e=C(t.calcPoint),r=it.getStep(e),n=it.fromStepping(r);Object.keys(ut).forEach(function(t){"hover"===t.split(".")[0]&&ut[t].forEach(function(t){t.call(Q,n)})})}function M(t,e){ut[t]=ut[t]||[],ut[t].push(e),"update"===t.split(".")[0]&&$.forEach(function(t,e){L("update",e)})}function O(t){var e=t&&t.split(".")[0],r=e&&t.substring(e.length);Object.keys(ut).forEach(function(t){var n=t.split(".")[0],i=t.substring(n.length);e&&e!==n||r&&r!==i||delete ut[t]})}function L(t,e,r){Object.keys(ut).forEach(function(i){var o=i.split(".")[0];t===o&&ut[i].forEach(function(t){t.call(Q,ot.map(n.format.to),e,ot.slice(),r||!1,at.slice())})})}function z(t,e,r,i,a,s){return 1<$.length&&!n.events.unconstrained&&(i&&0<e&&(r=Math.max(r,t[e-1]+n.margin)),a&&e<$.length-1&&(r=Math.min(r,t[e+1]-n.margin))),1<$.length&&n.limit&&(i&&0<e&&(r=Math.min(r,t[e-1]+n.limit)),a&&e<$.length-1&&(r=Math.max(r,t[e+1]-n.limit))),n.padding&&(0===e&&(r=Math.max(r,n.padding[0])),e===$.length-1&&(r=Math.min(r,100-n.padding[1]))),!((r=o(r=it.getStep(r)))===t[e]&&!s)&&r}function j(t,e){var r=n.ort;return(r?e:t)+", "+(r?t:e)}function H(t,e,r,n){var i=r.slice(),o=[!t,t],a=[t,!t];n=n.slice(),t&&n.reverse(),1<n.length?n.forEach(function(t,r){var n=z(i,t,i[t]+e,o[r],a[r],!1);!1===n?e=0:(e=n-i[t],i[t]=n)}):o=a=[!0];var s=!1;n.forEach(function(t,n){s=T(t,r[t]+e,o[n],a[n])||s}),s&&n.forEach(function(t){L("update",t),L("slide",t)})}function F(t,e){return n.dir?100-t-e:t}function D(){st.forEach(function(t){var e=50<at[t]?-1:1,r=3+($.length+e*t);$[t].style.zIndex=r})}function T(t,e,r,i){return!1!==(e=z(at,t,e,r,i,!1))&&(function(t,e){at[t]=e,ot[t]=it.fromStepping(e);var r="translate("+j(10*(F(e,0)-vt)+"%","0")+")";$[t].style[n.transformRule]=r,_(t),_(t+1)}(t,e),!0)}function _(t){if(G[t]){var e=0,r=100;0!==t&&(e=at[t-1]),t!==G.length-1&&(r=at[t]);var i=r-e,o="translate("+j(F(e,i)+"%","0")+")",a="scale("+j(i/100,"1")+")";G[t].style[n.transformRule]=o+" "+a}}function q(t,e){return null===t||!1===t||void 0===t?at[e]:("number"==typeof t&&(t=String(t)),t=n.format.from(t),!1===(t=it.toStepping(t))||isNaN(t)?at[e]:t)}function X(t,e){var r=a(t),o=void 0===at[0];e=void 0===e||!!e,n.animate&&!o&&i(nt,n.cssClasses.tap,n.animationDuration),st.forEach(function(t){T(t,q(r[t],t),!0,!1)}),st.forEach(function(t){T(t,at[t],!0,!0)}),D(),st.forEach(function(t){L("update",t),null!==r[t]&&e&&L("set",t)})}function Y(){var t=ot.map(n.format.to);return 1===t.length?t[0]:t}function I(t){var e=at[t],r=it.getNearbySteps(e),i=ot[t],o=r.thisStep.step,a=null;if(n.snap)return[i-r.stepBefore.startValue||null,r.stepAfter.startValue-i||null];!1!==o&&i+o>r.stepAfter.startValue&&(o=r.stepAfter.startValue-i),a=i>r.thisStep.startValue?r.thisStep.step:!1!==r.stepBefore.step&&i-r.stepBefore.highestStep,100===e?o=null:0===e&&(a=null);var s=it.countStepDecimals();return null!==o&&!1!==o&&(o=Number(o.toFixed(s))),null!==a&&!1!==a&&(a=Number(a.toFixed(s))),[a,o]}var W,$,G,J,K,Q,Z,tt,et=window.navigator.pointerEnabled?{start:"pointerdown",move:"pointermove",end:"pointerup"}:window.navigator.msPointerEnabled?{start:"MSPointerDown",move:"MSPointerMove",end:"MSPointerUp"}:{start:"mousedown touchstart",move:"mousemove touchmove",end:"mouseup touchend"},rt=window.CSS&&CSS.supports&&CSS.supports("touch-action","none")&&function(){var t=!1;try{var e=Object.defineProperty({},"passive",{get:function(){t=!0}});window.addEventListener("test",null,e)}catch(t){}return t}(),nt=e,it=n.spectrum,ot=[],at=[],st=[],lt=0,ut={},ct=e.ownerDocument,pt=n.documentElement||ct.documentElement,ft=ct.body,dt=-1,ht=0,mt=1,gt=2,vt="rtl"===ct.dir||1===n.ort?0:100;return l(Z=nt,n.cssClasses.target),0===n.dir?l(Z,n.cssClasses.ltr):l(Z,n.cssClasses.rtl),0===n.ort?l(Z,n.cssClasses.horizontal):l(Z,n.cssClasses.vertical),W=p(Z,n.cssClasses.base),function(t,e){var r=p(e,n.cssClasses.connects);$=[],(G=[]).push(d(r,t[0]));for(var i=0;i<n.handles;i++)$.push(f(e,i)),st[i]=i,G.push(d(r,t[i+1]))}(n.connect,W),(tt=n.events).fixed||$.forEach(function(t,e){E(et.start,t.children[0],P,{handleNumbers:[e]})}),tt.tap&&E(et.start,W,A,{}),tt.hover&&E(et.move,W,V,{hover:!0}),tt.drag&&G.forEach(function(t,e){if(!1!==t&&0!==e&&e!==G.length-1){var r=$[e-1],i=$[e],o=[t];l(t,n.cssClasses.draggable),tt.fixed&&(o.push(r.children[0]),o.push(i.children[0])),o.forEach(function(t){E(et.start,t,P,{handles:[r,i],handleNumbers:[e-1,e]})})}}),X(n.start),n.pips&&x(n.pips),n.tooltips&&b(),M("update",function(t,e,r,i,o){st.forEach(function(t){var e=$[t],i=z(at,t,0,!0,!0,!0),a=z(at,t,100,!0,!0,!0),s=o[t],l=n.ariaFormat.to(r[t]);i=it.fromStepping(i).toFixed(1),a=it.fromStepping(a).toFixed(1),s=it.fromStepping(s).toFixed(1),e.children[0].setAttribute("aria-valuemin",i),e.children[0].setAttribute("aria-valuemax",a),e.children[0].setAttribute("aria-valuenow",s),e.children[0].setAttribute("aria-valuetext",l)})}),Q={destroy:function(){for(var t in n.cssClasses)n.cssClasses.hasOwnProperty(t)&&u(nt,n.cssClasses[t]);for(;nt.firstChild;)nt.removeChild(nt.firstChild);delete nt.noUiSlider},steps:function(){return st.map(I)},on:M,off:O,get:Y,set:X,setHandle:function(t,e,r){if(!(0<=(t=Number(t))&&t<st.length))throw new Error("noUiSlider ("+B+"): invalid handle number, got: "+t);T(t,q(e,t),!0,!0),L("update",t),r&&L("set",t)},reset:function(t){X(n.start,t)},__moveHandles:function(t,e,r){H(t,e,at,r)},options:s,updateOptions:function(t,e){var r=Y(),i=["margin","limit","padding","range","animate","snap","step","format","pips","tooltips"];i.forEach(function(e){void 0!==t[e]&&(s[e]=t[e])});var o=R(s);i.forEach(function(e){void 0!==t[e]&&(n[e]=o[e])}),it=o.spectrum,n.margin=o.margin,n.limit=o.limit,n.padding=o.padding,n.pips?x(n.pips):y(),n.tooltips?b():v(),at=[],X(t.start||r,e)},target:nt,removePips:y,removeTooltips:v,pips:x}}var B="14.0.2";b.prototype.getMargin=function(t){var e=this.xNumSteps[0];if(e&&t/e%1!=0)throw new Error("noUiSlider ("+B+"): 'limit', 'margin' and 'padding' must be divisible by step.");return 2===this.xPct.length&&f(this.xVal,t)},b.prototype.toStepping=function(t){return t=h(this.xVal,this.xPct,t)},b.prototype.fromStepping=function(t){return function(t,e,r){if(100<=r)return t.slice(-1)[0];var n,i=d(r,e),o=t[i-1],a=t[i],s=e[i-1],l=e[i];return n=[o,a],(r-s)*p(s,l)*(n[1]-n[0])/100+n[0]}(this.xVal,this.xPct,t)},b.prototype.getStep=function(t){return t=m(this.xPct,this.xSteps,this.snap,t)},b.prototype.getDefaultStep=function(t,e,r){var n=d(t,this.xPct);return(100===t||e&&t===this.xPct[n-1])&&(n=Math.max(n-1,1)),(this.xVal[n]-this.xVal[n-1])/r},b.prototype.getNearbySteps=function(t){var e=d(t,this.xPct);return{stepBefore:{startValue:this.xVal[e-2],step:this.xNumSteps[e-2],highestStep:this.xHighestCompleteStep[e-2]},thisStep:{startValue:this.xVal[e-1],step:this.xNumSteps[e-1],highestStep:this.xHighestCompleteStep[e-1]},stepAfter:{startValue:this.xVal[e],step:this.xNumSteps[e],highestStep:this.xHighestCompleteStep[e]}}},b.prototype.countStepDecimals=function(){var t=this.xNumSteps.map(s);return Math.max.apply(null,t)},b.prototype.convert=function(t){return this.getStep(this.toStepping(t))};var q={to:function(t){return void 0!==t&&t.toFixed(2)},from:Number};return{__spectrum:b,version:B,create:function(t,e){if(!t||!t.nodeName)throw new Error("noUiSlider ("+B+"): create requires a single element, got: "+t);if(t.noUiSlider)throw new Error("noUiSlider ("+B+"): Slider was already initialized.");var r=_(t,R(e),e);return t.noUiSlider=r}}});