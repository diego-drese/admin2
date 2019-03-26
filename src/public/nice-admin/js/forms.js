var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};!function(t){"function"==typeof define&&define.amd?define(["jquery"],t):t(jQuery)}(function(t){function e(t){var e=document.createElement("input"),i="on"+t,a=i in e;return a||(e.setAttribute(i,"return;"),a="function"==typeof e[i]),e=null,a}function i(t){var e="text"==t||"tel"==t;if(!e){var i=document.createElement("input");i.setAttribute("type",t),e="text"===i.type,i=null}return e}function a(e,i,n){var o=n.aliases[e];return!!o&&(o.alias&&a(o.alias,void 0,n),t.extend(!0,n,o),t.extend(!0,n,i),!0)}function n(e){function i(i){function a(t,e,i,a){this.matches=[],this.isGroup=t||!1,this.isOptional=e||!1,this.isQuantifier=i||!1,this.isAlternator=a||!1,this.quantifier={min:1,max:1}}function n(i,a,n){var o=e.definitions[a],r=0==i.matches.length;if(n=void 0!=n?n:i.matches.length,o&&!p){o.placeholder=t.isFunction(o.placeholder)?o.placeholder.call(this,e):o.placeholder;for(var s=o.prevalidator,l=s?s.length:0,u=1;u<o.cardinality;u++){var c=l>=u?s[u-1]:[],d=c.validator,f=c.cardinality;i.matches.splice(n++,0,{fn:d?"string"==typeof d?new RegExp(d):new function(){this.test=d}:new RegExp("."),cardinality:f||1,optionality:i.isOptional,newBlockMarker:r,casing:o.casing,def:o.definitionSymbol||a,placeholder:o.placeholder,mask:a})}i.matches.splice(n++,0,{fn:o.validator?"string"==typeof o.validator?new RegExp(o.validator):new function(){this.test=o.validator}:new RegExp("."),cardinality:o.cardinality,optionality:i.isOptional,newBlockMarker:r,casing:o.casing,def:o.definitionSymbol||a,placeholder:o.placeholder,mask:a})}else i.matches.splice(n++,0,{fn:null,cardinality:0,optionality:i.isOptional,newBlockMarker:r,casing:null,def:a,placeholder:void 0,mask:a}),p=!1}for(var o,r,s,l,u,c,d=/(?:[?*+]|\{[0-9\+\*]+(?:,[0-9\+\*]*)?\})\??|[^.?*+^${[]()|\\]+|./g,p=!1,f=new a,h=[],v=[];o=d.exec(i);)switch(r=o[0],r.charAt(0)){case e.optionalmarker.end:case e.groupmarker.end:if(s=h.pop(),h.length>0){if(l=h[h.length-1],l.matches.push(s),l.isAlternator){u=h.pop();for(var m=0;m<u.matches.length;m++)u.matches[m].isGroup=!1;h.length>0?(l=h[h.length-1],l.matches.push(u)):f.matches.push(u)}}else f.matches.push(s);break;case e.optionalmarker.start:h.push(new a(!1,!0));break;case e.groupmarker.start:h.push(new a(!0));break;case e.quantifiermarker.start:var k=new a(!1,!1,!0);r=r.replace(/[{}]/g,"");var g=r.split(","),y=isNaN(g[0])?g[0]:parseInt(g[0]),b=1==g.length?y:isNaN(g[1])?g[1]:parseInt(g[1]);if(("*"==b||"+"==b)&&(y="*"==b?0:1),k.quantifier={min:y,max:b},h.length>0){var _=h[h.length-1].matches;if(o=_.pop(),!o.isGroup){var P=new a(!0);P.matches.push(o),o=P}_.push(o),_.push(k)}else{if(o=f.matches.pop(),!o.isGroup){var P=new a(!0);P.matches.push(o),o=P}f.matches.push(o),f.matches.push(k)}break;case e.escapeChar:p=!0;break;case e.alternatormarker:h.length>0?(l=h[h.length-1],c=l.matches.pop()):c=f.matches.pop(),c.isAlternator?h.push(c):(u=new a(!1,!1,!1,!0),u.matches.push(c),h.push(u));break;default:if(h.length>0){if(l=h[h.length-1],l.matches.length>0&&(c=l.matches[l.matches.length-1],c.isGroup&&(c.isGroup=!1,n(c,e.groupmarker.start,0),n(c,e.groupmarker.end))),n(l,r),l.isAlternator){u=h.pop();for(var m=0;m<u.matches.length;m++)u.matches[m].isGroup=!1;h.length>0?(l=h[h.length-1],l.matches.push(u)):f.matches.push(u)}}else f.matches.length>0&&(c=f.matches[f.matches.length-1],c.isGroup&&(c.isGroup=!1,n(c,e.groupmarker.start,0),n(c,e.groupmarker.end))),n(f,r)}return f.matches.length>0&&(c=f.matches[f.matches.length-1],c.isGroup&&(c.isGroup=!1,n(c,e.groupmarker.start,0),n(c,e.groupmarker.end)),v.push(f)),v}function a(a,n){if(void 0!=a&&""!=a){if(1==a.length&&0==e.greedy&&0!=e.repeat&&(e.placeholder=""),e.repeat>0||"*"==e.repeat||"+"==e.repeat){var o="*"==e.repeat?0:"+"==e.repeat?1:e.repeat;a=e.groupmarker.start+a+e.groupmarker.end+e.quantifiermarker.start+o+","+e.repeat+e.quantifiermarker.end}return void 0==t.inputmask.masksCache[a]&&(t.inputmask.masksCache[a]={mask:a,maskToken:i(a),validPositions:{},_buffer:void 0,buffer:void 0,tests:{},metadata:n}),t.extend(!0,{},t.inputmask.masksCache[a])}}function n(t){if(t=t.toString(),e.numericInput){t=t.split("").reverse();for(var i=0;i<t.length;i++)t[i]==e.optionalmarker.start?t[i]=e.optionalmarker.end:t[i]==e.optionalmarker.end?t[i]=e.optionalmarker.start:t[i]==e.groupmarker.start?t[i]=e.groupmarker.end:t[i]==e.groupmarker.end&&(t[i]=e.groupmarker.start);t=t.join("")}return t}var o=void 0;if(t.isFunction(e.mask)&&(e.mask=e.mask.call(this,e)),t.isArray(e.mask)){if(e.mask.length>1){e.keepStatic=void 0==e.keepStatic||e.keepStatic;var r="(";return t.each(e.mask,function(e,i){r.length>1&&(r+=")|("),r+=n(void 0==i.mask||t.isFunction(i.mask)?i:i.mask)}),r+=")",a(r,e.mask)}e.mask=e.mask.pop()}return e.mask&&(o=void 0==e.mask.mask||t.isFunction(e.mask.mask)?a(n(e.mask),e.mask):a(n(e.mask.mask),e.mask)),o}function o(a,n,o){function r(t,e,i){e=e||0;var a,n,o,r=[],s=0;do{if(!0===t&&c().validPositions[s]){var l=c().validPositions[s];n=l.match,a=l.locator.slice(),r.push(!0===i?l.input:O(s,n))}else o=v(s,a,s-1),n=o.match,a=o.locator.slice(),r.push(O(s,n));s++}while((void 0==et||et>s-1)&&null!=n.fn||null==n.fn&&""!=n.def||e>=s);return r.pop(),r}function c(){return n}function d(t){var e=c();e.buffer=void 0,e.tests={},!0!==t&&(e._buffer=void 0,e.validPositions={},e.p=0)}function p(t){var e=c(),i=-1,a=e.validPositions;void 0==t&&(t=-1);var n=i,o=i;for(var r in a){var s=parseInt(r);(-1==t||null!=a[s].match.fn)&&(t>=s&&(n=s),s>=t&&(o=s))}return i=-1!=n&&t-n>1||t>o?n:o}function f(e,i,a){if(o.insertMode&&void 0!=c().validPositions[e]&&void 0==a){var n,r=t.extend(!0,{},c().validPositions),s=p();for(n=e;s>=n;n++)delete c().validPositions[n];c().validPositions[e]=i;var l,u=!0;for(n=e;s>=n;n++){var d=r[n];if(void 0!=d){var f=c().validPositions;l=!o.keepStatic&&f[n]&&(void 0!=f[n+1]&&g(n+1,f[n].locator.slice(),n).length>1||void 0!=f[n].alternation)?n+1:S(n),u=k(l,d.match.def)?u&&!1!==C(l,d.input,!0,!0):null==d.match.fn}if(!u)break}if(!u)return c().validPositions=t.extend(!0,{},r),!1}else c().validPositions[e]=i;return!0}function h(t,e,i,a){var n,r=t;for(c().p=t,void 0!=c().validPositions[t]&&c().validPositions[t].input==o.radixPoint&&(e++,r++),n=r;e>n;n++)void 0!=c().validPositions[n]&&(!0===i||0!=o.canClearPosition(c(),n,p(),a,o))&&delete c().validPositions[n];for(d(!0),n=r+1;n<=p();){for(;void 0!=c().validPositions[r];)r++;var s=c().validPositions[r];r>n&&(n=r+1);var l=c().validPositions[n];void 0!=l&&void 0==s?(k(r,l.match.def)&&!1!==C(r,l.input,!0)&&(delete c().validPositions[n],n++),r++):n++}var u=p();u>=t&&void 0!=c().validPositions[u]&&c().validPositions[u].input==o.radixPoint&&delete c().validPositions[u],d(!0)}function v(t,e,i){for(var a,n=g(t,e,i),r=p(),s=c().validPositions[r]||g(0)[0],l=void 0!=s.alternation?s.locator[s.alternation].split(","):[],u=0;u<n.length&&(a=n[u],!(a.match&&(o.greedy&&!0!==a.match.optionalQuantifier||(!1===a.match.optionality||!1===a.match.newBlockMarker)&&!0!==a.match.optionalQuantifier)&&(void 0==s.alternation||void 0!=a.locator[s.alternation]&&E(a.locator[s.alternation].toString().split(","),l))));u++);return a}function m(t){return c().validPositions[t]?c().validPositions[t].match:g(t)[0].match}function k(t,e){for(var i=!1,a=g(t),n=0;n<a.length;n++)if(a[n].match&&a[n].match.def==e){i=!0;break}return i}function g(e,i,a){function n(i,a,o,s){function d(o,s,f){if(r>1e4)return alert("jquery.inputmask: There is probably an error in your mask definition or in the code. Create an issue on github with an example of the mask you are using. "+c().mask),!0;if(r==e&&void 0==o.matches)return l.push({match:o,locator:s.reverse()}),!0;if(void 0!=o.matches){if(o.isGroup&&!0!==f){if(o=d(i.matches[p+1],s))return!0}else if(o.isOptional){var h=o;if(o=n(o,a,s,f)){var v=l[l.length-1].match,m=0==t.inArray(v,h.matches);m&&(u=!0),r=e}}else if(o.isAlternator){var k,g=o,y=[],b=l.slice(),_=s.length,P=a.length>0?a.shift():-1;if(-1==P||"string"==typeof P){var E,C=r,x=a.slice();"string"==typeof P&&(E=P.split(","));for(var A=0;A<g.matches.length;A++){l=[],o=d(g.matches[A],[A].concat(s),f)||o,k=l.slice(),r=C,l=[];for(var S=0;S<x.length;S++)a[S]=x[S];for(var w=0;w<k.length;w++)for(var M=k[w],T=0;T<y.length;T++){var O=y[T];if(M.match.mask==O.match.mask&&("string"!=typeof P||-1!=t.inArray(M.locator[_].toString(),E))){k.splice(w,1),O.locator[_]=O.locator[_]+","+M.locator[_],O.alternation=_;break}}y=y.concat(k)}"string"==typeof P&&(y=t.map(y,function(e,i){if(isFinite(i)){var a=e.locator[_].toString().split(",");e.locator[_]=void 0,e.alternation=void 0;for(var n=0;n<a.length;n++)-1!=t.inArray(a[n],E)&&(void 0!=e.locator[_]?(e.locator[_]+=",",e.alternation=_,e.locator[_]+=a[n]):e.locator[_]=parseInt(a[n]));if(void 0!=e.locator[_])return e}})),l=b.concat(y),u=!0}else o=d(g.matches[P],[P].concat(s),f);if(o)return!0}else if(o.isQuantifier&&!0!==f)for(var D=o,j=a.length>0&&!0!==f?a.shift():0;j<(isNaN(D.quantifier.max)?j+1:D.quantifier.max)&&e>=r;j++){var F=i.matches[t.inArray(D,i.matches)-1];if(o=d(F,[j].concat(s),!0)){var v=l[l.length-1].match;v.optionalQuantifier=j>D.quantifier.min-1;var m=0==t.inArray(v,F.matches);if(m){if(j>D.quantifier.min-1){u=!0,r=e;break}return!0}return!0}}else if(o=n(o,a,s,f))return!0}else r++}for(var p=a.length>0?a.shift():0;p<i.matches.length;p++)if(!0!==i.matches[p].isQuantifier){var f=d(i.matches[p],[p].concat(o),s);if(f&&r==e)return f;if(r>e)break}}var o=c().maskToken,r=i?a:0,s=i||[0],l=[],u=!1;if(void 0==i){for(var d,p=e-1;void 0==(d=c().validPositions[p])&&p>-1;)p--;if(void 0!=d&&p>-1)r=p,s=d.locator.slice();else{for(p=e-1;void 0==(d=c().tests[p])&&p>-1;)p--;void 0!=d&&p>-1&&(r=p,s=d[0].locator.slice())}}for(var f=s.shift();f<o.length;f++){if(n(o[f],s,[f])&&r==e||r>e)break}return(0==l.length||u)&&l.push({match:{fn:null,cardinality:0,optionality:!0,casing:null,def:""},locator:[]}),c().tests[e]=t.extend(!0,[],l),c().tests[e]}function y(){return void 0==c()._buffer&&(c()._buffer=r(!1,1)),c()._buffer}function b(){return void 0==c().buffer&&(c().buffer=r(!0,p(),!0)),c().buffer}function _(t,e,i){if(i=i||b().slice(),!0===t)d(),t=0,e=i.length;else for(var a=t;e>a;a++)delete c().validPositions[a],delete c().tests[a];for(var a=t;e>a;a++)i[a]!=o.skipOptionalPartCharacter&&C(a,i[a],!0,!0)}function P(t,e){switch(e.casing){case"upper":t=t.toUpperCase();break;case"lower":t=t.toLowerCase()}return t}function E(e,i){for(var a=o.greedy?i:i.slice(0,1),n=!1,r=0;r<e.length;r++)if(-1!=t.inArray(e[r],a)){n=!0;break}return n}function C(e,i,a,n){function r(e,i,a,n){var r=!1;return t.each(g(e),function(s,l){for(var u=l.match,v=i?1:0,m="",k=(b(),u.cardinality);k>v;k--)m+=M(e-(k-1));if(i&&(m+=i),!1!==(r=null!=u.fn?u.fn.test(m,c(),e,a,o):(i==u.def||i==o.skipOptionalPartCharacter)&&""!=u.def&&{c:u.def,pos:e})){var g=void 0!=r.c?r.c:i;g=g==o.skipOptionalPartCharacter&&null===u.fn?u.def:g;var y=e;if(void 0!=r.remove&&h(r.remove,r.remove+1,!0),r.refreshFromBuffer){var E=r.refreshFromBuffer;if(a=!0,_(!0===E?E:E.start,E.end),void 0==r.pos&&void 0==r.c)return r.pos=p(),!1;if((y=void 0!=r.pos?r.pos:e)!=e)return r=t.extend(r,C(y,g,!0)),!1}else if(!0!==r&&void 0!=r.pos&&r.pos!=e&&(y=r.pos,_(e,y),y!=e))return r=t.extend(r,C(y,g,!0)),!1;return(1==r||void 0!=r.pos||void 0!=r.c)&&(s>0&&d(!0),f(y,t.extend({},l,{input:P(g,u)}),n)||(r=!1),!1)}}),r}a=!0===a;for(var s=b(),l=e-1;l>-1&&!c().validPositions[l];l--);for(l++;e>l;l++)void 0==c().validPositions[l]&&((!x(l)||s[l]!=O(l))&&g(l).length>1||s[l]==o.radixPoint||"0"==s[l]&&t.inArray(o.radixPoint,s)<l)&&r(l,s[l],!0);var u=e,v=!1,m=t.extend(!0,{},c().validPositions);if(u<A()&&(v=r(u,i,a,n),!a&&!1===v)){var k=c().validPositions[u];if(!k||null!=k.match.fn||k.match.def!=i&&i!=o.skipOptionalPartCharacter){if((o.insertMode||void 0==c().validPositions[S(u)])&&!x(u))for(var y=u+1,w=S(u);w>=y;y++)if(!1!==(v=r(y,i,a,n))){(function(e,i){for(var a=c().validPositions[i],n=a.locator,o=n.length,r=e;i>r;r++)if(!x(r)){var s=g(r),l=s[0],u=-1;t.each(s,function(t,e){for(var i=0;o>i;i++)e.locator[i]&&E(e.locator[i].toString().split(","),n[i].toString().split(","))&&i>u&&(u=i,l=e)}),f(r,t.extend({},l,{input:l.match.def}),!0)}})(u,y),u=y;break}}else v={caret:S(u)}}if(!1===v&&o.keepStatic&&I(s)&&(v=function(e,i,a,n){var r,s,l=t.extend(!0,{},c().validPositions);for(r=p();r>=0;r--)if(c().validPositions[r]&&void 0!=c().validPositions[r].alternation){s=c().validPositions[r].alternation;break}if(void 0!=s)for(var u in c().validPositions)if(parseInt(u)>parseInt(r)&&void 0===c().validPositions[u].alternation){for(var f=c().validPositions[u],h=f.locator[s],v=c().validPositions[r].locator[s].split(","),m=0;m<v.length;m++)if(h<v[m]){for(var k,g,y=u-1;y>=0;y--)if(void 0!=(k=c().validPositions[y])){g=k.locator[s],k.locator[s]=v[m];break}if(h!=k.locator[s]){for(var _=b().slice(),P=u;P<p()+1;P++)delete c().validPositions[P],delete c().tests[P];d(!0),o.keepStatic=!o.keepStatic;for(var P=u;P<_.length;P++)_[P]!=o.skipOptionalPartCharacter&&C(p()+1,_[P],!1,!0);k.locator[s]=g;var E=C(e,i,a,n);if(o.keepStatic=!o.keepStatic,E)return E;d(),c().validPositions=t.extend(!0,{},l)}}break}return!1}(e,i,a,n)),!0===v&&(v={pos:u}),t.isFunction(o.postValidation)&&0!=v&&!a){d(!0);if(!o.postValidation(b(),o))return d(!0),c().validPositions=t.extend(!0,{},m),!1}return v}function x(t){var e=m(t);return null!=e.fn&&e.fn}function A(){var t;-1==(et=tt.prop("maxLength"))&&(et=void 0);var e,i=p(),a=c().validPositions[i],n=void 0!=a?a.locator.slice():void 0;for(e=i+1;void 0==a||null!=a.match.fn||null==a.match.fn&&""!=a.match.def;e++)a=v(e,n,e-1),n=a.locator.slice();return t=e,void 0==et||et>t?t:et}function S(t){var e=A();if(t>=e)return e;for(var i=t;++i<e&&!x(i)&&(!0!==o.nojumps||o.nojumpsThreshold>i););return i}function w(t){var e=t;if(0>=e)return 0;for(;--e>0&&!x(e););return e}function M(t){return void 0==c().validPositions[t]?O(t):c().validPositions[t].input}function T(e,i,a,n,r){if(n&&t.isFunction(o.onBeforeWrite)){var s=o.onBeforeWrite.call(e,n,i,a,o);if(s){if(s.refreshFromBuffer){var l=s.refreshFromBuffer;_(!0===l?l:l.start,l.end,s.buffer),d(!0),i=b()}a=s.caret||a}}e._valueSet(i.join("")),void 0!=a&&$(e,a),!0===r&&(nt=!0,t(e).trigger("input"))}function O(t,e){return e=e||m(t),void 0!=e.placeholder?e.placeholder:null==e.fn?e.def:o.placeholder.charAt(t%o.placeholder.length)}function D(e,i,a,n){function o(){var t=!1,e=y().slice(l,S(l)).join("").indexOf(s);if(-1!=e&&!x(l)){t=!0;for(var i=y().slice(l,l+e),a=0;a<i.length;a++)if(" "!=i[a]){t=!1;break}}return t}var r=void 0!=n?n.slice():e._valueGet().split(""),s="",l=0;d(),c().p=S(-1),i&&e._valueSet("");var u=y().slice(0,S(-1)).join(""),f=r.join("").match(new RegExp(j(u),"g"));f&&f.length>0&&(r.splice(0,f.length*u.length),l=S(l)),t.each(r,function(i,n){var r=t.Event("keypress");r.which=n.charCodeAt(0),s+=n;var u=p(),d=c().validPositions[u],f=v(u+1,d?d.locator.slice():void 0,u);if(!o()||a){var h=a?i:null==f.match.fn&&f.match.optionality&&u+1<c().p?u+1:c().p;W.call(e,r,!0,!1,a,h),l=h+1,s=""}else W.call(e,r,!0,!1,!0,u+1)}),i&&T(e,b(),t(e).is(":focus")?S(p(0)):void 0,t.Event("checkval"))}function j(e){return t.inputmask.escapeRegex.call(this,e)}function F(e){if(e.data("_inputmask")&&!e.hasClass("hasDatepicker")){var i=[],a=c().validPositions;for(var n in a)a[n].match&&null!=a[n].match.fn&&i.push(a[n].input);var r=(it?i.reverse():i).join(""),s=(it?b().slice().reverse():b()).join("");return t.isFunction(o.onUnMask)&&(r=o.onUnMask.call(e,s,r,o)||r),r}return e[0]._valueGet()}function G(t){if(it&&"number"==typeof t&&(!o.greedy||""!=o.placeholder)){t=b().length-t}return t}function $(e,i,a){var n,r=e.jquery&&e.length>0?e[0]:e;if("number"!=typeof i)return r.setSelectionRange?(i=r.selectionStart,a=r.selectionEnd):document.selection&&document.selection.createRange&&(n=document.selection.createRange(),i=0-n.duplicate().moveStart("character",-1e5),a=i+n.text.length),{begin:G(i),end:G(a)};if(i=G(i),a=G(a),a="number"==typeof a?a:i,t(r).is(":visible")){var s=t(r).css("font-size").replace("px","")*a;r.scrollLeft=s>r.scrollWidth?s:0,0==o.insertMode&&i==a&&a++,r.setSelectionRange?(r.selectionStart=i,r.selectionEnd=a):r.createTextRange&&(n=r.createTextRange(),n.collapse(!0),n.moveEnd("character",a),n.moveStart("character",i),n.select())}}function B(e){var i,a,n=b(),o=n.length,r=p(),s={},l=c().validPositions[r],u=void 0!=l?l.locator.slice():void 0;for(i=r+1;i<n.length;i++)a=v(i,u,i-1),u=a.locator.slice(),s[i]=t.extend(!0,{},a);var d=l&&void 0!=l.alternation?l.locator[l.alternation].split(","):[];for(i=o-1;i>r&&(a=s[i].match,(a.optionality||a.optionalQuantifier||l&&void 0!=l.alternation&&void 0!=s[i].locator[l.alternation]&&-1!=t.inArray(s[i].locator[l.alternation].toString(),d))&&n[i]==O(i,a));i--)o--;return e?{l:o,def:s[o]?s[o].match:void 0}:o}function L(t){for(var e=B(),i=t.length-1;i>e&&!x(i);i--);t.splice(e,i+1-e)}function I(e){if(t.isFunction(o.isComplete))return o.isComplete.call(tt,e,o);if("*"!=o.repeat){var i=!1,a=B(!0),n=w(a.l);if(p(),void 0==a.def||a.def.newBlockMarker||a.def.optionalQuantifier){i=!0;for(var r=0;n>=r;r++){var s=x(r),l=m(r);if(s&&void 0==c().validPositions[r]&&!0!==l.optionality&&!0!==l.optionalQuantifier||!s&&e[r]!=O(r)){i=!1;break}}}return i}}function K(t,e){return it?t-e>1||t-e==1&&o.insertMode:e-t>1||e-t==1&&o.insertMode}function R(e){var i=t._data(e).events;t.each(i,function(e,i){t.each(i,function(t,e){if("inputmask"==e.namespace&&"setvalue"!=e.type){var i=e.handler;e.handler=function(t){if(!this.disabled&&(!this.readOnly||"keydown"==t.type&&t.ctrlKey&&67==t.keyCode)){switch(t.type){case"input":if(!0===nt)return nt=!1,t.preventDefault();break;case"keydown":at=!1;break;case"keypress":if(!0===at)return t.preventDefault();at=!0;break;case"compositionstart":break;case"compositionupdate":nt=!0}return i.apply(this,arguments)}t.preventDefault()}}})})}function N(e){function i(){var e=t(this),i=t(this).data("_inputmask");return i?i.opts.autoUnmask?e.inputmask("unmaskedvalue"):n.call(this)!=y().join("")?n.call(this):"":n.call(this)}function a(e){var i=t(this).data("_inputmask");i?(r.call(this,t.isFunction(i.opts.onBeforeMask)?i.opts.onBeforeMask.call(dt,e,i.opts)||e:e),t(this).triggerHandler("setvalue.inputmask")):r.call(this,e)}var n,r;e._valueGet||(Object.getOwnPropertyDescriptor&&Object.getOwnPropertyDescriptor(e,"value"),document.__lookupGetter__&&e.__lookupGetter__("value")?(n=e.__lookupGetter__("value"),r=e.__lookupSetter__("value"),e.__defineGetter__("value",i),e.__defineSetter__("value",a)):(n=function(){return e.value},r=function(t){e.value=t},function(e){if(void 0==t.valHooks[e]||1!=t.valHooks[e].inputmaskpatch){var i=t.valHooks[e]&&t.valHooks[e].get?t.valHooks[e].get:function(t){return t.value},a=t.valHooks[e]&&t.valHooks[e].set?t.valHooks[e].set:function(t,e){return t.value=e,t};t.valHooks[e]={get:function(e){var a=t(e);if(a.data("_inputmask")){if(a.data("_inputmask").opts.autoUnmask)return a.inputmask("unmaskedvalue");var n=i(e),o=a.data("_inputmask"),r=o.maskset,s=r._buffer;return s=s?s.join(""):"",n!=s?n:""}return i(e)},set:function(e,i){var n,o=t(e),r=o.data("_inputmask");return r?(n=a(e,t.isFunction(r.opts.onBeforeMask)?r.opts.onBeforeMask.call(dt,i,r.opts)||i:i),o.triggerHandler("setvalue.inputmask")):n=a(e,i),n},inputmaskpatch:!0}}}(e.type),function(e){t(e).bind("mouseenter.inputmask",function(){var e=t(this),i=this,a=i._valueGet();""!=a&&a!=b().join("")&&(this._valueSet(t.isFunction(o.onBeforeMask)?o.onBeforeMask.call(dt,a,o)||a:a),e.triggerHandler("setvalue.inputmask"))});var i=t._data(e).events,a=i.mouseover;if(a){for(var n=a[a.length-1],r=a.length-1;r>0;r--)a[r]=a[r-1];a[0]=n}}(e)),e._valueGet=function(t){return it&&!0!==t?n.call(this).split("").reverse().join(""):n.call(this)},e._valueSet=function(t){r.call(this,it?t.split("").reverse().join(""):t)})}function U(e,i,a,n){if((o.numericInput||it)&&(i==t.inputmask.keyCode.BACKSPACE?i=t.inputmask.keyCode.DELETE:i==t.inputmask.keyCode.DELETE&&(i=t.inputmask.keyCode.BACKSPACE),it)){var r=a.end;a.end=a.begin,a.begin=r}if(i==t.inputmask.keyCode.BACKSPACE&&(a.end-a.begin<1||0==o.insertMode)?a.begin=w(a.begin):i==t.inputmask.keyCode.DELETE&&a.begin==a.end&&(a.end=x(a.end)?a.end+1:S(a.end)+1),h(a.begin,a.end,!1,n),!0!==n){!function(){if(o.keepStatic){d(!0);var i,a=[];for(i=p();i>=0;i--)if(c().validPositions[i]){if(void 0!=c().validPositions[i].alternation)break;a.push(c().validPositions[i].input),delete c().validPositions[i]}if(i>0)for(;a.length>0;){c().p=S(p());var n=t.Event("keypress");n.which=a.pop().charCodeAt(0),W.call(e,n,!0,!1,!1,c().p)}}}();var s=p(a.begin);s<a.begin?(-1==s&&d(),c().p=S(s)):c().p=a.begin}}function H(i){var a=this,n=t(a),r=i.keyCode,l=$(a);r==t.inputmask.keyCode.BACKSPACE||r==t.inputmask.keyCode.DELETE||s&&127==r||i.ctrlKey&&88==r&&!e("cut")?(i.preventDefault(),88==r&&(Z=b().join("")),U(a,r,l),T(a,b(),c().p,i,Z!=b().join("")),a._valueGet()==y().join("")?n.trigger("cleared"):!0===I(b())&&n.trigger("complete"),o.showTooltip&&n.prop("title",c().mask)):r==t.inputmask.keyCode.END||r==t.inputmask.keyCode.PAGE_DOWN?setTimeout(function(){var t=S(p());o.insertMode||t!=A()||i.shiftKey||t--,$(a,i.shiftKey?l.begin:t,t)},0):r==t.inputmask.keyCode.HOME&&!i.shiftKey||r==t.inputmask.keyCode.PAGE_UP?$(a,0,i.shiftKey?l.begin:0):(o.undoOnEscape&&r==t.inputmask.keyCode.ESCAPE||90==r&&i.ctrlKey)&&!0!==i.altKey?(D(a,!0,!1,Z.split("")),n.click()):r!=t.inputmask.keyCode.INSERT||i.shiftKey||i.ctrlKey?0!=o.insertMode||i.shiftKey||(r==t.inputmask.keyCode.RIGHT?setTimeout(function(){var t=$(a);$(a,t.begin)},0):r==t.inputmask.keyCode.LEFT&&setTimeout(function(){var t=$(a);$(a,it?t.begin+1:t.begin-1)},0)):(o.insertMode=!o.insertMode,$(a,o.insertMode||l.begin!=A()?l.begin:l.begin-1)),o.onKeyDown.call(this,i,b(),$(a).begin,o),ot=-1!=t.inArray(r,o.ignorables)}function W(e,i,a,n,r){var s=this,l=t(s),u=e.which||e.charCode||e.keyCode;if(!(!0===i||e.ctrlKey&&e.altKey)&&(e.ctrlKey||e.metaKey||ot))return!0;if(u){46==u&&0==e.shiftKey&&","==o.radixPoint&&(u=44);var p,h=i?{begin:r,end:r}:$(s),v=String.fromCharCode(u),m=K(h.begin,h.end);m&&(c().undoPositions=t.extend(!0,{},c().validPositions),U(s,t.inputmask.keyCode.DELETE,h,!0),h.begin=c().p,o.insertMode||(o.insertMode=!o.insertMode,f(h.begin,n),o.insertMode=!o.insertMode),m=!o.multi),c().writeOutBuffer=!0;var k=it&&!m?h.end:h.begin,y=C(k,v,n);if(!1!==y){if(!0!==y&&(k=void 0!=y.pos?y.pos:k,v=void 0!=y.c?y.c:v),d(!0),void 0!=y.caret)p=y.caret;else{var P=c().validPositions;p=!o.keepStatic&&(void 0!=P[k+1]&&g(k+1,P[k].locator.slice(),k).length>1||void 0!=P[k].alternation)?k+1:S(k)}c().p=p}if(!1!==a){var E=this;if(setTimeout(function(){o.onKeyValidation.call(E,y,o)},0),c().writeOutBuffer&&!1!==y){var x=b();T(s,x,i?void 0:o.numericInput?w(p):p,e,!0!==i),!0!==i&&setTimeout(function(){!0===I(x)&&l.trigger("complete")},0)}else m&&(c().buffer=void 0,c().validPositions=c().undoPositions)}else m&&(c().buffer=void 0,c().validPositions=c().undoPositions);if(o.showTooltip&&l.prop("title",c().mask),i&&t.isFunction(o.onBeforeWrite)){var A=o.onBeforeWrite.call(this,e,b(),p,o);if(A&&A.refreshFromBuffer){var M=A.refreshFromBuffer;_(!0===M?M:M.start,M.end,A.buffer),d(!0),A.caret&&(c().p=A.caret)}}e.preventDefault()}}function q(e){var i=this,a=t(i),n=i._valueGet(!0),r=$(i);if("propertychange"==e.type&&i._valueGet().length<=A())return!0;if("paste"==e.type){var s=n.substr(0,r.begin),l=n.substr(r.end,n.length);s==y().slice(0,r.begin).join("")&&(s=""),l==y().slice(r.end).join("")&&(l=""),window.clipboardData&&window.clipboardData.getData?n=s+window.clipboardData.getData("Text")+l:e.originalEvent&&e.originalEvent.clipboardData&&e.originalEvent.clipboardData.getData&&(n=s+e.originalEvent.clipboardData.getData("text/plain")+l)}var u=n;if(t.isFunction(o.onBeforePaste)){if(!1===(u=o.onBeforePaste.call(i,n,o)))return e.preventDefault(),!1;u||(u=n)}return D(i,!0,!1,it?u.split("").reverse():u.split("")),a.click(),!0===I(b())&&a.trigger("complete"),!1}function Q(e){var i=this;D(i,!0,!1),!0===I(b())&&t(i).trigger("complete"),e.preventDefault()}function V(t){var e=this;Z=b().join(""),(""==X||0!=t.originalEvent.data.indexOf(X))&&(Y=$(e))}function z(e){var i=this,a=Y||$(i);0==e.originalEvent.data.indexOf(X)&&(d(),a={begin:0,end:0});var n=e.originalEvent.data;$(i,a.begin,a.end);for(var r=0;r<n.length;r++){var s=t.Event("keypress");s.which=n.charCodeAt(r),at=!1,ot=!1,W.call(i,s)}setTimeout(function(){var t=c().p;T(i,b(),o.numericInput?w(t):t)},0),X=e.originalEvent.data}function J(){}var Z,Y,X,tt,et,it=!1,at=!1,nt=!1,ot=!1,rt=!0;if(void 0!=a)switch(a.action){case"isComplete":return tt=t(a.el),n=tt.data("_inputmask").maskset,o=tt.data("_inputmask").opts,I(a.buffer);case"unmaskedvalue":return tt=a.$input,n=tt.data("_inputmask").maskset,o=tt.data("_inputmask").opts,it=a.$input.data("_inputmask").isRTL,F(a.$input);case"mask":Z=b().join(""),function(e){if(tt=t(e),tt.is(":input")&&i(tt.attr("type"))){if(tt.data("_inputmask",{maskset:n,opts:o,isRTL:!1}),o.showTooltip&&tt.prop("title",c().mask),("rtl"==e.dir||o.rightAlign)&&tt.css("text-align","right"),"rtl"==e.dir||o.numericInput){e.dir="ltr",tt.removeAttr("dir");var a=tt.data("_inputmask");a.isRTL=!0,tt.data("_inputmask",a),it=!0}tt.unbind(".inputmask"),tt.closest("form").bind("submit",function(){Z!=b().join("")&&tt.change(),tt[0]._valueGet&&tt[0]._valueGet()==y().join("")&&tt[0]._valueSet(""),o.removeMaskOnSubmit&&tt.inputmask("remove")}).bind("reset",function(){setTimeout(function(){tt.triggerHandler("setvalue.inputmask")},0)}),tt.bind("mouseenter.inputmask",function(){var e=t(this),i=this;!e.is(":focus")&&o.showMaskOnHover&&i._valueGet()!=b().join("")&&T(i,b())}).bind("blur.inputmask",function(e){var i=t(this),a=this;if(i.data("_inputmask")){var n=a._valueGet(),r=b().slice();rt=!0,Z!=r.join("")&&setTimeout(function(){i.change(),Z=r.join("")},0),""!=n&&(o.clearMaskOnLostFocus&&(n==y().join("")?r=[]:L(r)),!1===I(r)&&(i.trigger("incomplete"),o.clearIncomplete&&(d(),r=o.clearMaskOnLostFocus?[]:y().slice())),T(a,r,void 0,e))}}).bind("focus.inputmask",function(){var e=(t(this),this),i=e._valueGet();o.showMaskOnFocus&&(!o.showMaskOnHover||o.showMaskOnHover&&""==i)&&e._valueGet()!=b().join("")&&T(e,b(),S(p())),Z=b().join("")}).bind("mouseleave.inputmask",function(){var e=t(this),i=this;if(o.clearMaskOnLostFocus){var a=b().slice(),n=i._valueGet();e.is(":focus")||n==e.attr("placeholder")||""==n||(n==y().join("")?a=[]:L(a),T(i,a))}}).bind("click.inputmask",function(){var e=t(this),i=this;if(e.is(":focus")){var a=$(i);if(a.begin==a.end)if(o.radixFocus&&""!=o.radixPoint&&-1!=t.inArray(o.radixPoint,b())&&(rt||b().join("")==y().join("")))$(i,t.inArray(o.radixPoint,b())),rt=!1;else{var n=it?G(a.begin):a.begin,r=S(p(n));r>n?$(i,x(n)?n:S(n)):$(i,r)}}}).bind("dblclick.inputmask",function(){var t=this;setTimeout(function(){$(t,0,S(p()))},0)}).bind(u+".inputmask dragdrop.inputmask drop.inputmask",q).bind("setvalue.inputmask",function(){var t=this;D(t,!0,!1),Z=b().join(""),(o.clearMaskOnLostFocus||o.clearIncomplete)&&t._valueGet()==y().join("")&&t._valueSet("")}).bind("cut.inputmask",function(e){nt=!0;var i=this,a=t(i),n=$(i);U(i,t.inputmask.keyCode.DELETE,n),T(i,b(),c().p,e,Z!=b().join("")),i._valueGet()==y().join("")&&a.trigger("cleared"),o.showTooltip&&a.prop("title",c().mask)}).bind("complete.inputmask",o.oncomplete).bind("incomplete.inputmask",o.onincomplete).bind("cleared.inputmask",o.oncleared),tt.bind("keydown.inputmask",H).bind("keypress.inputmask",W),l||tt.bind("compositionstart.inputmask",V).bind("compositionupdate.inputmask",z).bind("compositionend.inputmask",J),"paste"===u&&tt.bind("input.inputmask",Q),N(e);D(e,!0,!1,(t.isFunction(o.onBeforeMask)?o.onBeforeMask.call(e,e._valueGet(),o)||e._valueGet():e._valueGet()).split(""));var r=b().slice();Z=r.join("");var s;try{s=document.activeElement}catch(t){}!1===I(r)&&o.clearIncomplete&&d(),o.clearMaskOnLostFocus&&(r.join("")==y().join("")?r=[]:L(r)),T(e,r),s===e&&$(e,S(p())),R(e)}}(a.el);break;case"format":tt=t({}),tt.data("_inputmask",{maskset:n,opts:o,isRTL:o.numericInput}),o.numericInput&&(it=!0);var st=(t.isFunction(o.onBeforeMask)?o.onBeforeMask.call(tt,a.value,o)||a.value:a.value).split("");return D(tt,!1,!1,it?st.reverse():st),t.isFunction(o.onBeforeWrite)&&o.onBeforeWrite.call(this,void 0,b(),0,o),a.metadata?{value:it?b().slice().reverse().join(""):b().join(""),metadata:tt.inputmask("getmetadata")}:it?b().slice().reverse().join(""):b().join("");case"isValid":tt=t({}),tt.data("_inputmask",{maskset:n,opts:o,isRTL:o.numericInput}),o.numericInput&&(it=!0);var st=a.value.split("");D(tt,!1,!0,it?st.reverse():st);for(var lt=b(),ut=B(),ct=lt.length-1;ct>ut&&!x(ct);ct--);return lt.splice(ut,ct+1-ut),I(lt)&&a.value==lt.join("");case"getemptymask":return tt=t(a.el),n=tt.data("_inputmask").maskset,o=tt.data("_inputmask").opts,y();case"remove":var dt=a.el;tt=t(dt),n=tt.data("_inputmask").maskset,o=tt.data("_inputmask").opts,dt._valueSet(F(tt)),tt.unbind(".inputmask"),tt.removeData("_inputmask");var pt;Object.getOwnPropertyDescriptor&&(pt=Object.getOwnPropertyDescriptor(dt,"value")),pt&&pt.get?dt._valueGet&&Object.defineProperty(dt,"value",{get:dt._valueGet,set:dt._valueSet}):document.__lookupGetter__&&dt.__lookupGetter__("value")&&dt._valueGet&&(dt.__defineGetter__("value",dt._valueGet),dt.__defineSetter__("value",dt._valueSet));try{delete dt._valueGet,delete dt._valueSet}catch(t){dt._valueGet=void 0,dt._valueSet=void 0}break;case"getmetadata":if(tt=t(a.el),n=tt.data("_inputmask").maskset,o=tt.data("_inputmask").opts,t.isArray(n.metadata)){for(var ft,ht=p(),vt=ht;vt>=0;vt--)if(c().validPositions[vt]&&void 0!=c().validPositions[vt].alternation){ft=c().validPositions[vt].alternation;break}return void 0!=ft?n.metadata[c().validPositions[ht].locator[ft]]:n.metadata[0]}return n.metadata}}if(void 0===t.fn.inputmask){var r=navigator.userAgent,s=null!==r.match(new RegExp("iphone","i")),l=(r.match(new RegExp("android.*safari.*","i")),r.match(new RegExp("android.*chrome.*","i")),null!==r.match(new RegExp("android.*firefox.*","i"))),u=(/Kindle/i.test(r)||/Silk/i.test(r)||/KFTT/i.test(r)||/KFOT/i.test(r)||/KFJWA/i.test(r)||/KFJWI/i.test(r)||/KFSOWI/i.test(r)||/KFTHWA/i.test(r)||/KFTHWI/i.test(r)||/KFAPWA/i.test(r)||/KFAPWI/i.test(r),e("paste")?"paste":e("input")?"input":"propertychange");t.inputmask={defaults:{placeholder:"_",optionalmarker:{start:"[",end:"]"},quantifiermarker:{start:"{",end:"}"},groupmarker:{start:"(",end:")"},alternatormarker:"|",escapeChar:"\\",mask:null,oncomplete:t.noop,onincomplete:t.noop,oncleared:t.noop,repeat:0,greedy:!0,autoUnmask:!1,removeMaskOnSubmit:!1,clearMaskOnLostFocus:!0,insertMode:!0,clearIncomplete:!1,aliases:{},alias:null,onKeyDown:t.noop,onBeforeMask:void 0,onBeforePaste:void 0,onBeforeWrite:void 0,onUnMask:void 0,showMaskOnFocus:!0,showMaskOnHover:!0,onKeyValidation:t.noop,skipOptionalPartCharacter:" ",showTooltip:!1,numericInput:!1,rightAlign:!1,undoOnEscape:!0,radixPoint:"",radixFocus:!1,nojumps:!1,nojumpsThreshold:0,keepStatic:void 0,definitions:{9:{validator:"[0-9]",cardinality:1,definitionSymbol:"*"},a:{validator:"[A-Za-zА-яЁёÀ-ÿµ]",cardinality:1,definitionSymbol:"*"},"*":{validator:"[0-9A-Za-zА-яЁёÀ-ÿµ]",cardinality:1}},ignorables:[8,9,13,19,27,33,34,35,36,37,38,39,40,45,46,93,112,113,114,115,116,117,118,119,120,121,122,123],isComplete:void 0,canClearPosition:t.noop,postValidation:void 0},keyCode:{ALT:18,BACKSPACE:8,CAPS_LOCK:20,COMMA:188,COMMAND:91,COMMAND_LEFT:91,COMMAND_RIGHT:93,CONTROL:17,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,INSERT:45,LEFT:37,MENU:93,NUMPAD_ADD:107,NUMPAD_DECIMAL:110,NUMPAD_DIVIDE:111,NUMPAD_ENTER:108,NUMPAD_MULTIPLY:106,NUMPAD_SUBTRACT:109,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SHIFT:16,SPACE:32,TAB:9,UP:38,WINDOWS:91},masksCache:{},escapeRegex:function(t){var e=["/",".","*","+","?","|","(",")","[","]","{","}","\\","$","^"];return t.replace(new RegExp("(\\"+e.join("|\\")+")","gim"),"\\$1")},format:function(e,i,r){var s=t.extend(!0,{},t.inputmask.defaults,i);return a(s.alias,i,s),o({action:"format",
value:e,metadata:r},n(s),s)},isValid:function(e,i){var r=t.extend(!0,{},t.inputmask.defaults,i);return a(r.alias,i,r),o({action:"isValid",value:e},n(r),r)}},t.fn.inputmask=function(e,i){function r(e,i,n){var o=t(e);o.data("inputmask-alias")&&a(o.data("inputmask-alias"),{},i);for(var r in i){var s=o.data("inputmask-"+r.toLowerCase());void 0!=s&&("mask"==r&&0==s.indexOf("[")?(i[r]=s.replace(/[\s[\]]/g,"").split("','"),i[r][0]=i[r][0].replace("'",""),i[r][i[r].length-1]=i[r][i[r].length-1].replace("'","")):i[r]="boolean"==typeof s?s:s.toString(),n&&(n[r]=i[r]))}return i}var s,l=t.extend(!0,{},t.inputmask.defaults,i);if("string"==typeof e)switch(e){case"mask":return a(l.alias,i,l),s=n(l),void 0==s?this:this.each(function(){o({action:"mask",el:this},t.extend(!0,{},s),r(this,l))});case"unmaskedvalue":var u=t(this);return u.data("_inputmask")?o({action:"unmaskedvalue",$input:u}):u.val();case"remove":return this.each(function(){t(this).data("_inputmask")&&o({action:"remove",el:this})});case"getemptymask":return this.data("_inputmask")?o({action:"getemptymask",el:this}):"";case"hasMaskedValue":return!!this.data("_inputmask")&&!this.data("_inputmask").opts.autoUnmask;case"isComplete":return!this.data("_inputmask")||o({action:"isComplete",buffer:this[0]._valueGet().split(""),el:this});case"getmetadata":return this.data("_inputmask")?o({action:"getmetadata",el:this}):void 0;default:return a(l.alias,i,l),a(e,i,l)||(l.mask=e),s=n(l),void 0==s?this:this.each(function(){o({action:"mask",el:this},t.extend(!0,{},s),r(this,l))})}else{if("object"==(void 0===e?"undefined":_typeof(e)))return l=t.extend(!0,{},t.inputmask.defaults,e),a(l.alias,e,l),s=n(l),void 0==s?this:this.each(function(){o({action:"mask",el:this},t.extend(!0,{},s),r(this,l))});if(void 0==e)return this.each(function(){var e=t(this).attr("data-inputmask");if(e&&""!=e)try{e=e.replace(new RegExp("'","g"),'"');var n=t.parseJSON("{"+e+"}");t.extend(!0,n,i),l=t.extend(!0,{},t.inputmask.defaults,n),l=r(this,l),a(l.alias,n,l),l.alias=void 0,t(this).inputmask("mask",l)}catch(t){}if(t(this).attr("data-inputmask-mask")||t(this).attr("data-inputmask-alias")){l=t.extend(!0,{},t.inputmask.defaults,{});var o={};l=r(this,l,o),a(l.alias,o,l),l.alias=void 0,t(this).inputmask("mask",l)}})}}}return t.fn.inputmask}),function(t){"use strict";function e(e){return this.each(function(){var a=t(this),n=a.data("bs.toggle"),o="object"==(void 0===e?"undefined":_typeof(e))&&e;n||a.data("bs.toggle",n=new i(this,o)),"string"==typeof e&&n[e]&&n[e]()})}var i=function(e,i){this.$element=t(e),this.options=t.extend({},this.defaults(),i),this.render()};i.VERSION="2.2.0",i.DEFAULTS={on:"On",off:"Off",onstyle:"primary",offstyle:"default",size:"normal",style:"",width:null,height:null},i.prototype.defaults=function(){return{on:this.$element.attr("data-on")||i.DEFAULTS.on,off:this.$element.attr("data-off")||i.DEFAULTS.off,onstyle:this.$element.attr("data-onstyle")||i.DEFAULTS.onstyle,offstyle:this.$element.attr("data-offstyle")||i.DEFAULTS.offstyle,size:this.$element.attr("data-size")||i.DEFAULTS.size,style:this.$element.attr("data-style")||i.DEFAULTS.style,width:this.$element.attr("data-width")||i.DEFAULTS.width,height:this.$element.attr("data-height")||i.DEFAULTS.height}},i.prototype.render=function(){this._onstyle="btn-"+this.options.onstyle,this._offstyle="btn-"+this.options.offstyle;var e="large"===this.options.size?"btn-lg":"small"===this.options.size?"btn-sm":"mini"===this.options.size?"btn-xs":"",i=t('<label class="btn">').html(this.options.on).addClass(this._onstyle+" "+e),a=t('<label class="btn">').html(this.options.off).addClass(this._offstyle+" "+e+" active"),n=t('<span class="toggle-handle btn btn-default">').addClass(e),o=t('<div class="toggle-group">').append(i,a,n),r=t('<div class="toggle btn" data-toggle="toggle">').addClass(this.$element.prop("checked")?this._onstyle:this._offstyle+" off").addClass(e).addClass(this.options.style);this.$element.wrap(r),t.extend(this,{$toggle:this.$element.parent(),$toggleOn:i,$toggleOff:a,$toggleGroup:o}),this.$toggle.append(o);var s=this.options.width||Math.max(i.outerWidth(),a.outerWidth())+n.outerWidth()/2,l=this.options.height||Math.max(i.outerHeight(),a.outerHeight());i.addClass("toggle-on"),a.addClass("toggle-off"),this.$toggle.css({width:s,height:l}),this.options.height&&(i.css("line-height",i.height()+"px"),a.css("line-height",a.height()+"px")),this.update(!0),this.trigger(!0)},i.prototype.toggle=function(){this.$element.prop("checked")?this.off():this.on()},i.prototype.on=function(t){return!this.$element.prop("disabled")&&(this.$toggle.removeClass(this._offstyle+" off").addClass(this._onstyle),this.$element.prop("checked",!0),void(t||this.trigger()))},i.prototype.off=function(t){return!this.$element.prop("disabled")&&(this.$toggle.removeClass(this._onstyle).addClass(this._offstyle+" off"),this.$element.prop("checked",!1),void(t||this.trigger()))},i.prototype.enable=function(){this.$toggle.removeAttr("disabled"),this.$element.prop("disabled",!1)},i.prototype.disable=function(){this.$toggle.attr("disabled","disabled"),this.$element.prop("disabled",!0)},i.prototype.update=function(t){this.$element.prop("disabled")?this.disable():this.enable(),this.$element.prop("checked")?this.on(t):this.off(t)},i.prototype.trigger=function(e){this.$element.off("change.bs.toggle"),e||this.$element.change(),this.$element.on("change.bs.toggle",t.proxy(function(){this.update()},this))},i.prototype.destroy=function(){this.$element.off("change.bs.toggle"),this.$toggleGroup.remove(),this.$element.removeData("bs.toggle"),this.$element.unwrap()};var a=t.fn.bootstrapToggle;t.fn.bootstrapToggle=e,t.fn.bootstrapToggle.Constructor=i,t.fn.toggle.noConflict=function(){return t.fn.bootstrapToggle=a,this},t(function(){t("input[type=checkbox][data-toggle^=toggle]").bootstrapToggle()}),t(document).on("click.bs.toggle","div[data-toggle^=toggle]",function(e){t(this).find("input[type=checkbox]").bootstrapToggle("toggle"),e.preventDefault()})}(jQuery);
