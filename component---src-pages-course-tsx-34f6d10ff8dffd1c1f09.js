(self.webpackChunklg4ever=self.webpackChunklg4ever||[]).push([[490],{7757:function(t,e,r){t.exports=r(5666)},9464:function(t,e,r){"use strict";function n(t,e,r,n,o,i,a){try{var c=t[i](a),l=c.value}catch(u){return void r(u)}c.done?e(l):Promise.resolve(l).then(n,o)}function o(t){return function(){var e=this,r=arguments;return new Promise((function(o,i){var a=t.apply(e,r);function c(t){n(a,o,i,c,l,"next",t)}function l(t){n(a,o,i,c,l,"throw",t)}c(void 0)}))}}r.r(e),r.d(e,{default:function(){return p}});var i=r(7757),a=r.n(i),c=r(5444),l=r(6633),u=r.n(l),s=r(7294);function f(t){var e=t.title,r=t.context;return s.createElement("div",{className:"main-container"},s.createElement("h1",{className:"main-title"},e),s.createElement("div",{dangerouslySetInnerHTML:{__html:r},className:"rich-text-wrap"}))}var h=r(5783);function p(t){var e=t.location.state,r=(0,s.useState)(s.createElement("div",null)),n=r[0],i=r[1],l=(0,s.useState)(0),p=l[0],v=l[1],y=(0,s.useState)(!1),d=y[0],m=y[1],g=(0,s.useState)([]),w=g[0],x=g[1];(0,s.useEffect)((function(){if(null!=e&&e.list&&0!==e.list.length){x(e.list);var t=parseInt(window.localStorage.getItem(e.id)||"0");v(t)}else(0,c.c4)("/")}),[]),(0,s.useEffect)((function(){null!=e&&e.id&&window.localStorage.setItem(e.id,""+p)}),[p]),(0,s.useEffect)((function(){function t(){return(t=o(a().mark((function t(){var e,r,n;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e=w[p]){t.next=3;break}return t.abrupt("return");case 3:return t.next=5,u().get("docs/"+e.filename);case 5:r=t.sent,n=r.data,i(s.createElement(f,{title:n.title,context:n.context}));case 8:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[p,w]);return s.createElement("div",{className:"flex flex-col w-screen h-screen"},s.createElement("div",{className:"w-full bg-white border-b-2 px-60"},s.createElement(h.Z,{onClick:function(){(0,c.c4)("/")}},"返回"),s.createElement(h.Z,{onClick:function(){m(!d)}},d?"隐藏":"显示","目录")),s.createElement("div",{className:"flex flex-1 w-full justify-center overflow-hidden"},s.createElement("div",{className:"flex 2xl:w-1280 xl:w-1024 lg:w-950 w-full h-full shadow-lg"},d&&s.createElement("div",{className:"lg:w-40 xl:w-60 2xl:w-80 w-0 h-full shadow-lg overflow-y-auto"},s.createElement("header",{className:"container font-semibold text-base p-6 mt-16 sticky top-0 bg-white"},"章节目录"),s.createElement("ul",null,w.map((function(t,e){var r=(e===p?"text-blue-400 ":"")+"text-gray-800 mb-2 overflow-ellipsis border-b-2 p-2 cursor-pointer overflow-hidden hover:text-blue-500";return s.createElement("li",{onClick:function(){return function(t){v(t)}(e)},className:r,key:t.title},t.title)})))),s.createElement("div",{className:"flex-1 h-full lg:p-20 p-5 pt-10 overflow-y-auto context"},n))))}},5666:function(t){var e=function(t){"use strict";var e,r=Object.prototype,n=r.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function l(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(P){l=function(t,e,r){return t[e]=r}}function u(t,e,r,n){var o=e&&e.prototype instanceof d?e:d,i=Object.create(o.prototype),a=new S(n||[]);return i._invoke=function(t,e,r){var n=f;return function(o,i){if(n===p)throw new Error("Generator is already running");if(n===v){if("throw"===o)throw i;return G()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var c=N(a,r);if(c){if(c===y)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===f)throw n=v,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=p;var l=s(t,e,r);if("normal"===l.type){if(n=r.done?v:h,l.arg===y)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(n=v,r.method="throw",r.arg=l.arg)}}}(t,r,a),i}function s(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(P){return{type:"throw",arg:P}}}t.wrap=u;var f="suspendedStart",h="suspendedYield",p="executing",v="completed",y={};function d(){}function m(){}function g(){}var w={};l(w,i,(function(){return this}));var x=Object.getPrototypeOf,E=x&&x(x(O([])));E&&E!==r&&n.call(E,i)&&(w=E);var b=g.prototype=d.prototype=Object.create(w);function L(t){["next","throw","return"].forEach((function(e){l(t,e,(function(t){return this._invoke(e,t)}))}))}function k(t,e){function r(o,i,a,c){var l=s(t[o],t,i);if("throw"!==l.type){var u=l.arg,f=u.value;return f&&"object"==typeof f&&n.call(f,"__await")?e.resolve(f.__await).then((function(t){r("next",t,a,c)}),(function(t){r("throw",t,a,c)})):e.resolve(f).then((function(t){u.value=t,a(u)}),(function(t){return r("throw",t,a,c)}))}c(l.arg)}var o;this._invoke=function(t,n){function i(){return new e((function(e,o){r(t,n,e,o)}))}return o=o?o.then(i,i):i()}}function N(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator.return&&(r.method="return",r.arg=e,N(t,r),"throw"===r.method))return y;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return y}var o=s(n,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,y;var i=o.arg;return i?i.done?(r[t.resultName]=i.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,y):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,y)}function _(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function j(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function S(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(_,this),this.reset(!0)}function O(t){if(t){var r=t[i];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,a=function r(){for(;++o<t.length;)if(n.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=e,r.done=!0,r};return a.next=a}}return{next:G}}function G(){return{value:e,done:!0}}return m.prototype=g,l(b,"constructor",g),l(g,"constructor",m),m.displayName=l(g,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===m||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,l(t,c,"GeneratorFunction")),t.prototype=Object.create(b),t},t.awrap=function(t){return{__await:t}},L(k.prototype),l(k.prototype,a,(function(){return this})),t.AsyncIterator=k,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new k(u(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},L(b),l(b,c,"Generator"),l(b,i,(function(){return this})),l(b,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=O,S.prototype={constructor:S,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(j),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function o(n,o){return c.type="throw",c.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var l=n.call(a,"catchLoc"),u=n.call(a,"finallyLoc");if(l&&u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(l){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,y):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),y},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),j(r),y}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;j(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:O(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),y}},t}(t.exports);try{regeneratorRuntime=e}catch(r){"object"==typeof globalThis?globalThis.regeneratorRuntime=e:Function("r","regeneratorRuntime = r")(e)}}}]);
//# sourceMappingURL=component---src-pages-course-tsx-34f6d10ff8dffd1c1f09.js.map