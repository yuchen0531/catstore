(function(t){function e(e){for(var n,o,c=e[0],s=e[1],u=e[2],l=0,d=[];l<c.length;l++)o=c[l],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&d.push(i[o][0]),i[o]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n]);p&&p(e);while(d.length)d.shift()();return a.push.apply(a,u||[]),r()}function r(){for(var t,e=0;e<a.length;e++){for(var r=a[e],n=!0,o=1;o<r.length;o++){var s=r[o];0!==i[s]&&(n=!1)}n&&(a.splice(e--,1),t=c(c.s=r[0]))}return t}var n={},i={app:0},a=[];function o(t){return c.p+"js/"+({about:"about"}[t]||t)+"."+{about:"d87eb3fa"}[t]+".js"}function c(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,c),r.l=!0,r.exports}c.e=function(t){var e=[],r=i[t];if(0!==r)if(r)e.push(r[2]);else{var n=new Promise((function(e,n){r=i[t]=[e,n]}));e.push(r[2]=n);var a,s=document.createElement("script");s.charset="utf-8",s.timeout=120,c.nc&&s.setAttribute("nonce",c.nc),s.src=o(t);var u=new Error;a=function(e){s.onerror=s.onload=null,clearTimeout(l);var r=i[t];if(0!==r){if(r){var n=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src;u.message="Loading chunk "+t+" failed.\n("+n+": "+a+")",u.name="ChunkLoadError",u.type=n,u.request=a,r[1](u)}i[t]=void 0}};var l=setTimeout((function(){a({type:"timeout",target:s})}),12e4);s.onerror=s.onload=a,document.head.appendChild(s)}return Promise.all(e)},c.m=t,c.c=n,c.d=function(t,e,r){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(c.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)c.d(r,n,function(e){return t[e]}.bind(null,n));return r},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/",c.oe=function(t){throw console.error(t),t};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],u=s.push.bind(s);s.push=e,s=s.slice();for(var l=0;l<s.length;l++)e(s[l]);var p=u;a.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"034f":function(t,e,r){"use strict";var n=r("85ec"),i=r.n(n);i.a},"41b6":function(t,e,r){t.exports=r.p+"img/storename.4c0986d2.png"},5496:function(t,e,r){t.exports=r.p+"img/product2.e0aae4ab.jpg"},"56d7":function(t,e,r){"use strict";r.r(e);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("router-view")],1)},a=[],o=(r("034f"),r("2877")),c={},s=Object(o["a"])(c,i,a,!1,null,null,null),u=s.exports,l=(r("d3b7"),r("8c4f")),p=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"index container"},[r("Header"),r("div",{staticClass:"banner"}),r("div",{staticClass:"searchbar justify-content-around d-flex mt-3"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.searchproduct,expression:"searchproduct"}],attrs:{type:"text",placeholder:"search..."},domProps:{value:t.searchproduct},on:{input:function(e){e.target.composing||(t.searchproduct=e.target.value)}}})]),r("div",{staticClass:"product p-2 bg-dark-gray d-flex flex-wrap justify-content-around"},t._l(t.filterSearch,(function(e,n){return r("div",{key:n,staticClass:"product mx-2 mt-4"},[r("img",{attrs:{src:e.image,alt:"",width:"120px"}}),r("p",{staticClass:"text-center mb-0 h4"},[t._v(t._s(e.title))]),r("p",{staticClass:"text-center my-0 h5"},[t._v(t._s("$"+e.price))])])})),0)],1)},d=[],f=(r("4de4"),r("ac1f"),r("466d"),function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),m=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"header"},[n("div",{staticClass:"d-flex border-bottom border-dark p-3 text-gray justify-content-between"},[n("div",{staticClass:"account-circle align-self-start justify-content-center d-flex align-items-center"},[t._v(" Wu ")]),n("div",{staticClass:"logo "},[n("img",{attrs:{src:r("41b6"),alt:"",height:"35px"}})]),n("div",{staticClass:"d-flex align-items-center"},[n("img",{attrs:{src:r("57a2"),alt:"",height:"35px"}})])])])}],h={},g=Object(o["a"])(h,f,m,!1,null,null,null),v=g.exports,b={name:"Home",components:{Header:v},data:function(){return{title:"for SEO",searchproduct:"",productlist:[{image:r("847d"),title:"t-shirt1",price:190},{image:r("5496"),title:"t-shirt2",price:159},{image:r("79fd"),title:"t-shirt3",price:299},{image:r("d1f7"),title:"t-shirt4",price:399},{image:r("9c96"),title:"t-shirt5",price:199},{image:r("847d"),title:"t-shirt6",price:299},{image:r("5496"),title:"t-shirt7",price:299},{image:r("79fd"),title:"t-shirt8",price:299},{image:r("d1f7"),title:"t-shirt9",price:299},{image:r("9c96"),title:"t-shirt10",price:299}]}},computed:{filterSearch:function(){var t=this;return this.productlist.filter((function(e){return e.title.match(t.searchproduct)}))}}},x=b,y=Object(o["a"])(x,p,d,!1,null,null,null),j=y.exports;n["a"].use(l["a"]);var w=[{path:"/",name:"Home",component:j},{path:"/about",name:"About",component:function(){return r.e("about").then(r.bind(null,"f820"))}}],_=new l["a"]({mode:"history",base:"/",routes:w}),O=_,C=r("2f62");n["a"].use(C["a"]);var P=new C["a"].Store({state:{},mutations:{},actions:{},modules:{}});r("4989"),r("ab8b"),r("90bf");n["a"].config.productionTip=!1,new n["a"]({router:O,store:P,render:function(t){return t(u)}}).$mount("#app")},"57a2":function(t,e,r){t.exports=r.p+"img/purchace.0f7d6f72.jpg"},"79fd":function(t,e,r){t.exports=r.p+"img/product3.6b157f7d.jpg"},"847d":function(t,e,r){t.exports=r.p+"img/product1.6ac68b66.jpg"},"85ec":function(t,e,r){},"90bf":function(t,e,r){},"9c96":function(t,e,r){t.exports=r.p+"img/product5.cd43c99f.jpg"},d1f7:function(t,e,r){t.exports=r.p+"img/product4.caedeac7.jpg"}});
//# sourceMappingURL=app.f5106cfa.js.map