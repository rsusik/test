(()=>{"use strict";var e={8867:(e,t,r)=>{r(71);var n=r(8880),o=r(9592),a=r(3673);function i(e,t,r,n,o,i){const d=(0,a.up)("router-view");return(0,a.wg)(),(0,a.j4)(d)}const d=(0,a.aZ)({name:"App"});d.render=i;const l=d;var s=r(7083),c=r(9582);const u=[{path:"/",component:()=>Promise.all([r.e(736),r.e(64),r.e(807)]).then(r.bind(r,7807))},{path:"/intro",component:()=>Promise.all([r.e(736),r.e(64),r.e(875)]).then(r.bind(r,1875))},{path:"/write",component:()=>Promise.all([r.e(736),r.e(64),r.e(177)]).then(r.bind(r,6177))},{path:"/feedback",component:()=>Promise.all([r.e(736),r.e(92)]).then(r.bind(r,3092))},{path:"/getdata",component:()=>Promise.all([r.e(736),r.e(24)]).then(r.bind(r,5024))},{path:"/test/:mode",component:()=>Promise.all([r.e(736),r.e(64),r.e(312)]).then(r.bind(r,312))},{path:"/:catchAll(.*)*",component:()=>Promise.all([r.e(736),r.e(193)]).then(r.bind(r,2193))}],f=u,p=(0,s.BC)((function(){const e=c.r5,t=(0,c.p7)({scrollBehavior:()=>({left:0,top:0}),routes:f,history:e("")});return t}));async function h(e,t){const r="function"===typeof p?await p({}):p,n=e(l);return n.use(o.Z,t),{app:n,router:r}}var v=r(6417);const m={config:{},plugins:{Notify:v.Z}};var b=r(1413);(0,b.z)("service-worker.js",{ready(){},registered(){},cached(){},updatefound(){},updated(){},offline(){},error(){}}),/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream&&window.navigator.standalone&&r.e(736).then(r.t.bind(r,9501,23));async function g({app:e,router:t}){e.use(t),e.mount("#q-app")}h(n.ri,m).then(g)}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var a=t[n]={exports:{}};return e[n].call(a.exports,a,a.exports,r),a.exports}r.m=e,(()=>{var e=[];r.O=(t,n,o,a)=>{if(!n){var i=1/0;for(c=0;c<e.length;c++){for(var[n,o,a]=e[c],d=!0,l=0;l<n.length;l++)(!1&a||i>=a)&&Object.keys(r.O).every((e=>r.O[e](n[l])))?n.splice(l--,1):(d=!1,a<i&&(i=a));if(d){e.splice(c--,1);var s=o();void 0!==s&&(t=s)}}return t}a=a||0;for(var c=e.length;c>0&&e[c-1][2]>a;c--)e[c]=e[c-1];e[c]=[n,o,a]}})(),(()=>{r.n=e=>{var t=e&&e.__esModule?()=>e["default"]:()=>e;return r.d(t,{a:t}),t}})(),(()=>{var e,t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__;r.t=function(n,o){if(1&o&&(n=this(n)),8&o)return n;if("object"===typeof n&&n){if(4&o&&n.__esModule)return n;if(16&o&&"function"===typeof n.then)return n}var a=Object.create(null);r.r(a);var i={};e=e||[null,t({}),t([]),t(t)];for(var d=2&o&&n;"object"==typeof d&&!~e.indexOf(d);d=t(d))Object.getOwnPropertyNames(d).forEach((e=>i[e]=()=>n[e]));return i["default"]=()=>n,r.d(a,i),a}})(),(()=>{r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}})(),(()=>{r.f={},r.e=e=>Promise.all(Object.keys(r.f).reduce(((t,n)=>(r.f[n](e,t),t)),[]))})(),(()=>{r.u=e=>"js/"+(64===e?"chunk-common":e)+"."+{24:"182f24f6",64:"8ca0fcf4",92:"2ce4ee4f",177:"3f266a82",193:"8392b24a",312:"6629db29",807:"dcec5a7a",875:"7b783786"}[e]+".js"})(),(()=>{r.miniCssF=e=>"css/"+({143:"app",736:"vendor"}[e]||e)+"."+{24:"b26e2264",92:"b26e2264",143:"a025e1cf",177:"aa420d0b",312:"4a8dc215",736:"4b65e42a",807:"b4d9e5b2",875:"5b6f034f"}[e]+".css"})(),(()=>{r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()})(),(()=>{r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t)})(),(()=>{var e={},t="keydrop:";r.l=(n,o,a,i)=>{if(e[n])e[n].push(o);else{var d,l;if(void 0!==a)for(var s=document.getElementsByTagName("script"),c=0;c<s.length;c++){var u=s[c];if(u.getAttribute("src")==n||u.getAttribute("data-webpack")==t+a){d=u;break}}d||(l=!0,d=document.createElement("script"),d.charset="utf-8",d.timeout=120,r.nc&&d.setAttribute("nonce",r.nc),d.setAttribute("data-webpack",t+a),d.src=n),e[n]=[o];var f=(t,r)=>{d.onerror=d.onload=null,clearTimeout(p);var o=e[n];if(delete e[n],d.parentNode&&d.parentNode.removeChild(d),o&&o.forEach((e=>e(r))),t)return t(r)},p=setTimeout(f.bind(null,void 0,{type:"timeout",target:d}),12e4);d.onerror=f.bind(null,d.onerror),d.onload=f.bind(null,d.onload),l&&document.head.appendChild(d)}}})(),(()=>{r.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}})(),(()=>{r.p=""})(),(()=>{var e=(e,t,r,n)=>{var o=document.createElement("link");o.rel="stylesheet",o.type="text/css";var a=a=>{if(o.onerror=o.onload=null,"load"===a.type)r();else{var i=a&&("load"===a.type?"missing":a.type),d=a&&a.target&&a.target.href||t,l=new Error("Loading CSS chunk "+e+" failed.\n("+d+")");l.code="CSS_CHUNK_LOAD_FAILED",l.type=i,l.request=d,o.parentNode.removeChild(o),n(l)}};return o.onerror=o.onload=a,o.href=t,document.head.appendChild(o),o},t=(e,t)=>{for(var r=document.getElementsByTagName("link"),n=0;n<r.length;n++){var o=r[n],a=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(a===e||a===t))return o}var i=document.getElementsByTagName("style");for(n=0;n<i.length;n++){o=i[n],a=o.getAttribute("data-href");if(a===e||a===t)return o}},n=n=>new Promise(((o,a)=>{var i=r.miniCssF(n),d=r.p+i;if(t(i,d))return o();e(n,d,o,a)})),o={143:0};r.f.miniCss=(e,t)=>{var r={24:1,92:1,177:1,312:1,807:1,875:1};o[e]?t.push(o[e]):0!==o[e]&&r[e]&&t.push(o[e]=n(e).then((()=>{o[e]=0}),(t=>{throw delete o[e],t})))}})(),(()=>{var e={143:0};r.f.j=(t,n)=>{var o=r.o(e,t)?e[t]:void 0;if(0!==o)if(o)n.push(o[2]);else{var a=new Promise(((r,n)=>o=e[t]=[r,n]));n.push(o[2]=a);var i=r.p+r.u(t),d=new Error,l=n=>{if(r.o(e,t)&&(o=e[t],0!==o&&(e[t]=void 0),o)){var a=n&&("load"===n.type?"missing":n.type),i=n&&n.target&&n.target.src;d.message="Loading chunk "+t+" failed.\n("+a+": "+i+")",d.name="ChunkLoadError",d.type=a,d.request=i,o[1](d)}};r.l(i,l,"chunk-"+t,t)}},r.O.j=t=>0===e[t];var t=(t,n)=>{var o,a,[i,d,l]=n,s=0;if(i.some((t=>0!==e[t]))){for(o in d)r.o(d,o)&&(r.m[o]=d[o]);if(l)var c=l(r)}for(t&&t(n);s<i.length;s++)a=i[s],r.o(e,a)&&e[a]&&e[a][0](),e[i[s]]=0;return r.O(c)},n=self["webpackChunkkeydrop"]=self["webpackChunkkeydrop"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var n=r.O(void 0,[736],(()=>r(8867)));n=r.O(n)})();