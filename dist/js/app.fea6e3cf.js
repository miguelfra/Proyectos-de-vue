(function(e){function t(t){for(var r,c,s=t[0],i=t[1],u=t[2],l=0,f=[];l<s.length;l++)c=s[l],Object.prototype.hasOwnProperty.call(a,c)&&a[c]&&f.push(a[c][0]),a[c]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);b&&b(t);while(f.length)f.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,c=1;c<n.length;c++){var i=n[c];0!==a[i]&&(r=!1)}r&&(o.splice(t--,1),e=s(s.s=n[0]))}return e}var r={},a={app:0},o=[];function c(e){return s.p+"js/"+({about:"about","gifs~stickers":"gifs~stickers",gifs:"gifs",stickers:"stickers"}[e]||e)+"."+{about:"33f76bc2","gifs~stickers":"f59b74da",gifs:"ae2a4513",stickers:"1511d741"}[e]+".js"}function s(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n=a[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise((function(t,r){n=a[e]=[t,r]}));t.push(n[2]=r);var o,i=document.createElement("script");i.charset="utf-8",i.timeout=120,s.nc&&i.setAttribute("nonce",s.nc),i.src=c(e);var u=new Error;o=function(t){i.onerror=i.onload=null,clearTimeout(l);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;u.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",u.name="ChunkLoadError",u.type=r,u.request=o,n[1](u)}a[e]=void 0}};var l=setTimeout((function(){o({type:"timeout",target:i})}),12e4);i.onerror=i.onload=o,document.head.appendChild(i)}return Promise.all(t)},s.m=e,s.c=r,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(n,r,function(t){return e[t]}.bind(null,r));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/",s.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],u=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var b=u;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23"),a={id:"nav"};function o(e,t,n,o,c,s){var i=Object(r["z"])("Header"),u=Object(r["z"])("router-view"),l=Object(r["z"])("Footer");return Object(r["s"])(),Object(r["f"])("div",a,[Object(r["j"])(i),Object(r["j"])(u),Object(r["j"])(l)])}var c={class:"footer"},s={class:"text-center bg-dark text-white py-3 bg-gradient"};function i(e,t,n,a,o,i){return Object(r["s"])(),Object(r["f"])("div",c,[Object(r["g"])("footer",s,[Object(r["g"])("h3",null,"© "+Object(r["B"])(i.year)+" - Miguel Valdez",1)])])}var u={data:function(){return{}},computed:{year:function(){return(new Date).getFullYear()}}},l=(n("b8fc"),n("6b0d")),b=n.n(l);const f=b()(u,[["render",i],["__scopeId","data-v-4d9b0ce4"]]);var d=f,v={class:"navbar navbar-expand-lg navbar-dark bg-dark bg-gradient"},p={class:"container-fluid"},g=Object(r["i"])("Gif Router"),j=Object(r["g"])("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"},[Object(r["g"])("span",{class:"navbar-toggler-icon"})],-1),O={class:"collapse navbar-collapse",id:"navbarNav"},h={class:"navbar-nav"},m={class:"nav-item"},y=Object(r["i"])("Home "),k={class:"nav-item"},w=Object(r["i"])("About"),x={class:"nav-item"},_=Object(r["i"])("gifs"),P={class:"nav-item"},F=Object(r["i"])("Stickers");function S(e,t,n,a,o,c){var s=Object(r["z"])("router-link");return Object(r["s"])(),Object(r["f"])("div",null,[Object(r["g"])("nav",v,[Object(r["g"])("div",p,[Object(r["j"])(s,{to:"/",class:"navbar-brand"},{default:Object(r["F"])((function(){return[g]})),_:1}),j,Object(r["g"])("div",O,[Object(r["g"])("ul",h,[Object(r["g"])("li",m,[Object(r["j"])(s,{class:"nav-link active","aria-current":"page",to:"/"},{default:Object(r["F"])((function(){return[y]})),_:1})]),Object(r["g"])("li",k,[Object(r["j"])(s,{class:"nav-link",to:"/about"},{default:Object(r["F"])((function(){return[w]})),_:1})]),Object(r["g"])("li",x,[Object(r["j"])(s,{class:"nav-link",to:"/gifs"},{default:Object(r["F"])((function(){return[_]})),_:1})]),Object(r["g"])("li",P,[Object(r["j"])(s,{class:"nav-link",to:"/stickers"},{default:Object(r["F"])((function(){return[F]})),_:1})])])])])])])}var H={};const z=b()(H,[["render",S]]);var A=z,M={components:{Header:A,Footer:d}};const N=b()(M,[["render",o]]);var E=N,T=n("9483");Object(T["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});n("d3b7"),n("3ca3"),n("ddb0");var C=n("6c02"),G={class:"home"};function q(e,t,n,a,o,c){var s=Object(r["z"])("hello-world");return Object(r["s"])(),Object(r["f"])("div",G,[Object(r["j"])(s)])}var B={class:"container mt-3"},J=Object(r["h"])('<div class="card" style="width:100%;"><div class="card-body"><h5 class="card-title">Gif Router</h5><h6 class="card-subtitle mb-2 text-muted">Hecho por Miguel</h6><p class="card-text" style="text-align:justify;">Esta aplicacion es parte del curso de vue 3 en udemy y estamos aprendiendo a usar bootstrap, a trabajar con rutas y muchas cosas mas. </p></div></div>',1),L=[J];function R(e,t,n,a,o,c){return Object(r["s"])(),Object(r["f"])("div",B,L)}var D={};const I=b()(D,[["render",R]]);var V=I,W={name:"Home",components:{HelloWorld:V}};const Y=b()(W,[["render",q]]);var K=Y,Q=[{path:"/",name:"Home",component:K},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}},{path:"/gifs",name:"Gifs",component:function(){return Promise.all([n.e("gifs~stickers"),n.e("gifs")]).then(n.bind(null,"e7f0"))}},{path:"/stickers",name:"Stickers",component:function(){return Promise.all([n.e("gifs~stickers"),n.e("stickers")]).then(n.bind(null,"ab64"))}}],U=Object(C["a"])({history:Object(C["b"])("/"),routes:Q}),X=U,Z=n("bc3a"),$=n.n(Z),ee=n("130e");Object(r["c"])(E).use(X).use(ee["a"],$.a).mount("#app")},"8eb4":function(e,t,n){},b8fc:function(e,t,n){"use strict";n("8eb4")}});
//# sourceMappingURL=app.fea6e3cf.js.map