var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};!function(e){"object"===("undefined"==typeof exports?"undefined":_typeof(exports))&&exports&&"object"===("undefined"==typeof module?"undefined":_typeof(module))&&module&&module.exports===exports?e(require("jquery")):"function"==typeof define&&define.amd?define(["jquery"],e):e(jQuery)}(function(e){function i(e){var i=e[0];return i.offsetWidth>0&&i.offsetHeight>0}function t(i){if(i.minTime&&(i.minTime=T(i.minTime)),i.maxTime&&(i.maxTime=T(i.maxTime)),i.durationTime&&"function"!=typeof i.durationTime&&(i.durationTime=T(i.durationTime)),"now"==i.scrollDefault)i.scrollDefault=function(){return i.roundingFunction(T(new Date),i)};else if(i.scrollDefault&&"function"!=typeof i.scrollDefault){var t=i.scrollDefault;i.scrollDefault=function(){return i.roundingFunction(T(t),i)}}else i.minTime&&(i.scrollDefault=function(){return i.roundingFunction(i.minTime,i)});if("string"===e.type(i.timeFormat)&&i.timeFormat.match(/[gh]/)&&(i._twelveHourTime=!0),!1===i.showOnFocus&&-1!=i.showOn.indexOf("focus")&&i.showOn.splice(i.showOn.indexOf("focus"),1),i.disableTimeRanges.length>0){for(var n in i.disableTimeRanges)i.disableTimeRanges[n]=[T(i.disableTimeRanges[n][0]),T(i.disableTimeRanges[n][1])];i.disableTimeRanges=i.disableTimeRanges.sort(function(e,i){return e[0]-i[0]});for(var n=i.disableTimeRanges.length-1;n>0;n--)i.disableTimeRanges[n][0]<=i.disableTimeRanges[n-1][1]&&(i.disableTimeRanges[n-1]=[Math.min(i.disableTimeRanges[n][0],i.disableTimeRanges[n-1][0]),Math.max(i.disableTimeRanges[n][1],i.disableTimeRanges[n-1][1])],i.disableTimeRanges.splice(n,1))}return i}function n(i){var t=i.data("timepicker-settings"),n=i.data("timepicker-list");if(n&&n.length&&(n.remove(),i.data("timepicker-list",!1)),t.useSelect){n=e("<select />",{class:"ui-timepicker-select"}),i.attr("name")&&n.attr("name","ui-timepicker-"+i.attr("name"));var s=n}else{n=e("<ul />",{class:"ui-timepicker-list"});var s=e("<div />",{class:"ui-timepicker-wrapper",tabindex:-1});s.css({display:"none",position:"absolute"}).append(n)}if(t.noneOption)if(!0===t.noneOption&&(t.noneOption=t.useSelect?"Time...":"None"),e.isArray(t.noneOption)){for(var c in t.noneOption)if(parseInt(c,10)==c){var u=r(t.noneOption[c],t.useSelect);n.append(u)}}else{var u=r(t.noneOption,t.useSelect);n.append(u)}if(t.className&&s.addClass(t.className),(null!==t.minTime||null!==t.durationTime)&&t.showDuration){"function"==typeof t.step||t.step;s.addClass("ui-timepicker-with-duration"),s.addClass("ui-timepicker-step-"+t.step)}var p=t.minTime;"function"==typeof t.durationTime?p=T(t.durationTime()):null!==t.durationTime&&(p=t.durationTime);var d=null!==t.minTime?t.minTime:0,f=null!==t.maxTime?t.maxTime:d+b-1;f<d&&(f+=b),f===b-1&&"string"===e.type(t.timeFormat)&&t.show2400&&(f=b);var h=t.disableTimeRanges,w=0,x=h.length,C=t.step;"function"!=typeof C&&(C=function(){return t.step});for(var c=d,S=0;c<=f;S++,c+=60*C(S)){var O=c,D=v(O,t);if(t.useSelect){var R=e("<option />",{value:D});R.text(D)}else{var R=e("<li />");R.addClass(O%b<b/2?"ui-timepicker-am":"ui-timepicker-pm"),R.data("time",y(O,t)),R.text(D)}if((null!==t.minTime||null!==t.durationTime)&&t.showDuration){var M=k(c-p,t.step);if(t.useSelect)R.text(R.text()+" ("+M+")");else{var F=e("<span />",{class:"ui-timepicker-duration"});F.text(" ("+M+")"),R.append(F)}}w<x&&(O>=h[w][1]&&(w+=1),h[w]&&O>=h[w][0]&&O<h[w][1]&&(t.useSelect?R.prop("disabled",!0):R.addClass("ui-timepicker-disabled"))),n.append(R)}if(s.data("timepicker-input",i),i.data("timepicker-list",s),t.useSelect)i.val()&&n.val(a(T(i.val()),t)),n.on("focus",function(){e(this).data("timepicker-input").trigger("showTimepicker")}),n.on("blur",function(){e(this).data("timepicker-input").trigger("hideTimepicker")}),n.on("change",function(){m(i,e(this).val(),"select")}),m(i,n.val(),"initial"),i.hide().after(n);else{var I=t.appendTo;"string"==typeof I?I=e(I):"function"==typeof I&&(I=I(i)),I.append(s),l(i,n),n.on("mousedown click","li",function(t){i.off("focus.timepicker"),i.on("focus.timepicker-ie-hack",function(){i.off("focus.timepicker-ie-hack"),i.on("focus.timepicker",H.show)}),o(i)||i[0].focus(),n.find("li").removeClass("ui-timepicker-selected"),e(this).addClass("ui-timepicker-selected"),g(i)&&(i.trigger("hideTimepicker"),n.on("mouseup.timepicker click.timepicker","li",function(e){n.off("mouseup.timepicker click.timepicker"),s.hide()}))})}}function r(i,t){var n,r,a;return"object"==(void 0===i?"undefined":_typeof(i))?(n=i.label,r=i.className,a=i.value):"string"==typeof i?(n=i,a=""):e.error("Invalid noneOption value"),t?e("<option />",{value:a,class:r,text:n}):e("<li />",{class:r,text:n}).data("time",String(a))}function a(e,i){if(null!==(e=i.roundingFunction(e,i)))return v(e,i)}function s(i){if(i.target!=window){var t=e(i.target);t.closest(".ui-timepicker-input").length||t.closest(".ui-timepicker-wrapper").length||(H.hide(),e(document).unbind(".ui-timepicker"),e(window).unbind(".ui-timepicker"))}}function o(e){var i=e.data("timepicker-settings");return(window.navigator.msMaxTouchPoints||"ontouchstart"in document)&&i.disableTouchKeyboard}function c(i,t,n){if(!n&&0!==n)return!1;var r=i.data("timepicker-settings"),a=!1,n=r.roundingFunction(n,r);return t.find("li").each(function(i,t){var r=e(t);if("number"==typeof r.data("time"))return r.data("time")==n?(a=r,!1):void 0}),a}function l(e,i){i.find("li").removeClass("ui-timepicker-selected");var t=e.data("timepicker-settings"),n=T(p(e),t);if(null!==n){var r=c(e,i,n);if(r){var a=r.offset().top-i.offset().top;(a+r.outerHeight()>i.outerHeight()||a<0)&&i.scrollTop(i.scrollTop()+r.position().top-r.outerHeight()),(t.forceRoundTime||r.data("time")===n)&&r.addClass("ui-timepicker-selected")}}}function u(i,t){if("timepicker"!=t){var n=e(this);if(""===this.value)return void m(n,null,t);if(!n.is(":focus")||i&&"change"==i.type){var r=n.data("timepicker-settings"),a=T(this.value,r);if(null===a)return void n.trigger("timeFormatError");var s=!1;if(null!==r.minTime&&null!==r.maxTime&&(a<r.minTime||a>r.maxTime)&&(s=!0),e.each(r.disableTimeRanges,function(){if(a>=this[0]&&a<this[1])return s=!0,!1}),r.forceRoundTime){var o=r.roundingFunction(a,r);o!=a&&(a=o,t=null)}var c=v(a,r);s?(m(n,c,"error")||i&&"change"==i.type)&&n.trigger("timeRangeError"):m(n,c,t)}}}function p(e){return e.is("input")?e.val():e.data("ui-timepicker-value")}function m(e,i,t){if(e.is("input")){e.val(i);var n=e.data("timepicker-settings");n.useSelect&&"select"!=t&&e.data("timepicker-list")&&e.data("timepicker-list").val(a(T(i),n))}return e.data("ui-timepicker-value")!=i?(e.data("ui-timepicker-value",i),"select"==t?e.trigger("selectTime").trigger("changeTime").trigger("change","timepicker"):-1==["error","initial"].indexOf(t)&&e.trigger("changeTime"),!0):(-1==["error","initial"].indexOf(t)&&e.trigger("selectTime"),!1)}function d(e){switch(e.keyCode){case 13:case 9:return;default:e.preventDefault()}}function f(t){var n=e(this),r=n.data("timepicker-list");if(!r||!i(r)){if(40!=t.keyCode)return!0;H.show.call(n.get(0)),r=n.data("timepicker-list"),o(n)||n.focus()}switch(t.keyCode){case 13:return g(n)&&(u.call(n.get(0),{type:"change"}),H.hide.apply(this)),t.preventDefault(),!1;case 38:var a=r.find(".ui-timepicker-selected");return a.length?a.is(":first-child")||(a.removeClass("ui-timepicker-selected"),a.prev().addClass("ui-timepicker-selected"),a.prev().position().top<a.outerHeight()&&r.scrollTop(r.scrollTop()-a.outerHeight())):(r.find("li").each(function(i,t){if(e(t).position().top>0)return a=e(t),!1}),a.addClass("ui-timepicker-selected")),!1;case 40:return a=r.find(".ui-timepicker-selected"),0===a.length?(r.find("li").each(function(i,t){if(e(t).position().top>0)return a=e(t),!1}),a.addClass("ui-timepicker-selected")):a.is(":last-child")||(a.removeClass("ui-timepicker-selected"),a.next().addClass("ui-timepicker-selected"),a.next().position().top+2*a.outerHeight()>r.outerHeight()&&r.scrollTop(r.scrollTop()+a.outerHeight())),!1;case 27:r.find("li").removeClass("ui-timepicker-selected"),H.hide();break;case 9:H.hide();break;default:return!0}}function h(t){var n=e(this),r=n.data("timepicker-list"),a=n.data("timepicker-settings");if(!r||!i(r)||a.disableTextInput)return!0;if("paste"===t.type||"cut"===t.type)return void setTimeout(function(){a.typeaheadHighlight?l(n,r):r.hide()},0);switch(t.keyCode){case 96:case 97:case 98:case 99:case 100:case 101:case 102:case 103:case 104:case 105:case 48:case 49:case 50:case 51:case 52:case 53:case 54:case 55:case 56:case 57:case 65:case 77:case 80:case 186:case 8:case 46:a.typeaheadHighlight?l(n,r):r.hide()}}function g(e){var i=e.data("timepicker-settings"),t=e.data("timepicker-list"),n=null,r=t.find(".ui-timepicker-selected");return!r.hasClass("ui-timepicker-disabled")&&(r.length&&(n=r.data("time")),null!==n&&("string"!=typeof n&&(n=v(n,i)),m(e,n,"select")),!0)}function k(e,i){e=Math.abs(e);var t,n,r=Math.round(e/60),a=[];return r<60?a=[r,w.mins]:(t=Math.floor(r/60),n=r%60,30==i&&30==n&&(t+=w.decimal+5),a.push(t),a.push(1==t?w.hr:w.hrs),30!=i&&n&&(a.push(n),a.push(w.mins))),a.join(" ")}function v(i,t){if("number"!=typeof i)return null;var n=parseInt(i%60),r=parseInt(i/60%60),a=parseInt(i/3600%24),s=new Date(1970,0,2,a,r,n,0);if(isNaN(s.getTime()))return null;if("function"===e.type(t.timeFormat))return t.timeFormat(s);for(var o,c,l="",u=0;u<t.timeFormat.length;u++)switch(c=t.timeFormat.charAt(u)){case"a":l+=s.getHours()>11?w.pm:w.am;break;case"A":l+=s.getHours()>11?w.PM:w.AM;break;case"g":o=s.getHours()%12,l+=0===o?"12":o;break;case"G":o=s.getHours(),i===b&&(o=t.show2400?24:0),l+=o;break;case"h":o=s.getHours()%12,0!==o&&o<10&&(o="0"+o),l+=0===o?"12":o;break;case"H":o=s.getHours(),i===b&&(o=t.show2400?24:0),l+=o>9?o:"0"+o;break;case"i":var r=s.getMinutes();l+=r>9?r:"0"+r;break;case"s":n=s.getSeconds(),l+=n>9?n:"0"+n;break;case"\\":u++,l+=t.timeFormat.charAt(u);break;default:l+=c}return l}function T(e,i){if(""===e||null===e)return null;if("object"==(void 0===e?"undefined":_typeof(e)))return 3600*e.getHours()+60*e.getMinutes()+e.getSeconds();if("string"!=typeof e)return e;e=e.toLowerCase().replace(/[\s\.]/g,""),"a"!=e.slice(-1)&&"p"!=e.slice(-1)||(e+="m");var t="("+w.am.replace(".","")+"|"+w.pm.replace(".","")+"|"+w.AM.replace(".","")+"|"+w.PM.replace(".","")+")?",n=new RegExp("^"+t+"([0-9]?[0-9])\\W?([0-5][0-9])?\\W?([0-5][0-9])?"+t+"$"),r=e.match(n);if(!r)return null;var a=parseInt(1*r[2],10),s=r[1]||r[5],o=a,c=1*r[3]||0,l=1*r[4]||0;if(a<=12&&s){var u=s==w.pm||s==w.PM;o=12==a?u?12:0:a+(u?12:0)}else if(i){var p=3600*a+60*c+l;if(p>=b+(i.show2400?1:0)){if(!1===i.wrapHours)return null;o=a%24}}var m=3600*o+60*c+l;if(a<12&&!s&&i&&i._twelveHourTime&&i.scrollDefault){var d=m-i.scrollDefault();d<0&&d>=b/-2&&(m=(m+b/2)%b)}return m}function y(e,i){return e==b&&i.show2400?e:e%b}var b=86400,w={am:"am",pm:"pm",AM:"AM",PM:"PM",decimal:".",mins:"mins",hr:"hr",hrs:"hrs"},x={appendTo:"body",className:null,closeOnWindowScroll:!1,disableTextInput:!1,disableTimeRanges:[],disableTouchKeyboard:!1,durationTime:null,forceRoundTime:!1,maxTime:null,minTime:null,noneOption:!1,orientation:"l",roundingFunction:function(e,i){if(null===e)return null;if("number"!=typeof i.step)return e;var t=e%(60*i.step);return t-=(i.minTime||0)%(60*i.step),t>=30*i.step?e+=60*i.step-t:e-=t,y(e,i)},scrollDefault:null,selectOnBlur:!1,show2400:!1,showDuration:!1,showOn:["click","focus"],showOnFocus:!0,step:30,stopScrollPropagation:!1,timeFormat:"g:ia",typeaheadHighlight:!0,useSelect:!1,wrapHours:!0},H={init:function(i){return this.each(function(){var r=e(this),a=[];for(var s in x)r.data(s)&&(a[s]=r.data(s));var o=e.extend({},x,i,a);if(o.lang&&(w=e.extend(w,o.lang)),o=t(o),r.data("timepicker-settings",o),r.addClass("ui-timepicker-input"),o.useSelect)n(r);else{if(r.prop("autocomplete","off"),o.showOn)for(var c in o.showOn)r.on(o.showOn[c]+".timepicker",H.show);r.on("change.timepicker",u),r.on("keydown.timepicker",f),r.on("keyup.timepicker",h),o.disableTextInput&&r.on("keydown.timepicker",d),r.on("cut.timepicker",h),r.on("paste.timepicker",h),u.call(r.get(0),null,"initial")}})},show:function(t){var r=e(this),a=r.data("timepicker-settings");if(t&&t.preventDefault(),a.useSelect)return void r.data("timepicker-list").focus();o(r)&&r.blur();var u=r.data("timepicker-list");if(!r.prop("readonly")&&(u&&0!==u.length&&"function"!=typeof a.durationTime||(n(r),u=r.data("timepicker-list")),!i(u))){r.data("ui-timepicker-value",r.val()),l(r,u),H.hide(),u.show();var m={};a.orientation.match(/r/)?m.left=r.offset().left+r.outerWidth()-u.outerWidth()+parseInt(u.css("marginLeft").replace("px",""),10):m.left=r.offset().left+parseInt(u.css("marginLeft").replace("px",""),10);var d;d=a.orientation.match(/t/)?"t":a.orientation.match(/b/)?"b":r.offset().top+r.outerHeight(!0)+u.outerHeight()>e(window).height()+e(window).scrollTop()?"t":"b","t"==d?(u.addClass("ui-timepicker-positioned-top"),m.top=r.offset().top-u.outerHeight()+parseInt(u.css("marginTop").replace("px",""),10)):(u.removeClass("ui-timepicker-positioned-top"),m.top=r.offset().top+r.outerHeight()+parseInt(u.css("marginTop").replace("px",""),10)),u.offset(m);var f=u.find(".ui-timepicker-selected");if(!f.length){var h=T(p(r));null!==h?f=c(r,u,h):a.scrollDefault&&(f=c(r,u,a.scrollDefault()))}if(f.length&&!f.hasClass("ui-timepicker-disabled")||(f=u.find("li:not(.ui-timepicker-disabled):first")),f&&f.length){var g=u.scrollTop()+f.position().top-f.outerHeight();u.scrollTop(g)}else u.scrollTop(0);return a.stopScrollPropagation&&e(document).on("wheel.ui-timepicker",".ui-timepicker-wrapper",function(i){i.preventDefault();var t=e(this).scrollTop();e(this).scrollTop(t+i.originalEvent.deltaY)}),e(document).on("touchstart.ui-timepicker mousedown.ui-timepicker",s),e(window).on("resize.ui-timepicker",s),a.closeOnWindowScroll&&e(document).on("scroll.ui-timepicker",s),r.trigger("showTimepicker"),this}},hide:function(t){var n=e(this),r=n.data("timepicker-settings");return r&&r.useSelect&&n.blur(),e(".ui-timepicker-wrapper").each(function(){var t=e(this);if(i(t)){var n=t.data("timepicker-input"),r=n.data("timepicker-settings");r&&r.selectOnBlur&&g(n),t.hide(),n.trigger("hideTimepicker")}}),this},option:function(i,r){return"string"==typeof i&&void 0===r?e(this).data("timepicker-settings")[i]:this.each(function(){var a=e(this),s=a.data("timepicker-settings"),o=a.data("timepicker-list");"object"==(void 0===i?"undefined":_typeof(i))?s=e.extend(s,i):"string"==typeof i&&(s[i]=r),s=t(s),a.data("timepicker-settings",s),u.call(a.get(0),{type:"change"},"initial"),o&&(o.remove(),a.data("timepicker-list",!1)),s.useSelect&&n(a)})},getSecondsFromMidnight:function(){return T(p(this))},getTime:function(e){var i=this,t=p(i);if(!t)return null;var n=T(t);if(null===n)return null;e||(e=new Date);var r=new Date(e);return r.setHours(n/3600),r.setMinutes(n%3600/60),r.setSeconds(n%60),r.setMilliseconds(0),r},isVisible:function(){var e=this,t=e.data("timepicker-list");return!(!t||!i(t))},setTime:function(e){var i=this,t=i.data("timepicker-settings");if(t.forceRoundTime)var n=a(T(e),t);else var n=v(T(e),t);return e&&null===n&&t.noneOption&&(n=e),m(i,n,"initial"),u.call(i.get(0),{type:"change"},"initial"),i.data("timepicker-list")&&l(i,i.data("timepicker-list")),this},remove:function(){var e=this;if(e.hasClass("ui-timepicker-input")){var i=e.data("timepicker-settings");return e.removeAttr("autocomplete","off"),e.removeClass("ui-timepicker-input"),e.removeData("timepicker-settings"),e.off(".timepicker"),e.data("timepicker-list")&&e.data("timepicker-list").remove(),i.useSelect&&e.show(),e.removeData("timepicker-list"),this}}};e.fn.timepicker=function(i){return this.length?H[i]?this.hasClass("ui-timepicker-input")?H[i].apply(this,Array.prototype.slice.call(arguments,1)):this:"object"!==(void 0===i?"undefined":_typeof(i))&&i?void e.error("Method "+i+" does not exist on jQuery.timepicker"):H.init.apply(this,arguments):this}});
