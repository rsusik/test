if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let n=Promise.resolve();return s[e]||(n=new Promise((async n=>{if("document"in self){const s=document.createElement("script");s.src=e,document.head.appendChild(s),s.onload=n}else importScripts(e),n()}))),n.then((()=>{if(!s[e])throw new Error(`Module ${e} didn’t register its module`);return s[e]}))},n=(n,s)=>{Promise.all(n.map(e)).then((e=>s(1===e.length?e[0]:e)))},s={require:Promise.resolve(n)};self.define=(n,i,c)=>{s[n]||(s[n]=Promise.resolve().then((()=>{let s={};const r={uri:location.origin+n.slice(1)};return Promise.all(i.map((n=>{switch(n){case"exports":return s;case"module":return r;default:return e(n)}}))).then((e=>{const n=c(...e);return s.default||(s.default=n),s}))})))}}define("./service-worker.js",["./workbox-2fb64657"],(function(e){"use strict";e.setCacheNameDetails({prefix:"keydrop"}),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"css/213.b4d9e5b2.css",revision:null},{url:"css/361.b26e2264.css",revision:null},{url:"css/678.4a8dc215.css",revision:null},{url:"css/718.aa420d0b.css",revision:null},{url:"css/828.b26e2264.css",revision:null},{url:"css/832.aa420d0b.css",revision:null},{url:"css/875.5b6f034f.css",revision:null},{url:"css/app.b4215a0d.css",revision:null},{url:"css/vendor.4b65e42a.css",revision:null},{url:"favicon.ico",revision:"dadc258a8cce3edeecdb4808b68b8369"},{url:"fonts/KFOkCnqEu92Fr1MmgVxIIzQ.9391e6e2.woff",revision:null},{url:"fonts/KFOlCnqEu92Fr1MmEU9fBBc-.ddd11dab.woff",revision:null},{url:"fonts/KFOlCnqEu92Fr1MmSU5fBBc-.877b9231.woff",revision:null},{url:"fonts/KFOlCnqEu92Fr1MmWUlfBBc-.0344cc3c.woff",revision:null},{url:"fonts/KFOlCnqEu92Fr1MmYUtfBBc-.b555d228.woff",revision:null},{url:"fonts/KFOmCnqEu92Fr1Mu4mxM.9b78ea3b.woff",revision:null},{url:"fonts/flUhRq6tzZclQEJ-Vdg-IuiaDsNa.81048c6d.woff",revision:null},{url:"fonts/flUhRq6tzZclQEJ-Vdg-IuiaDsNcIhQ8tQ.12730e02.woff2",revision:null},{url:"game.png",revision:"ecafeb1799e9699a40d5554830399e2c"},{url:"game2.png",revision:"be9fca4b78f3706b595e568ba7c73435"},{url:"icons/48.png",revision:"159e635a05ed92656ce0da25d6a5ea7c"},{url:"icons/apple-icon-120x120.png",revision:"7d92c1705e7c861b85a216af4b7206f9"},{url:"icons/apple-icon-152x152.png",revision:"f022712599712ec035d365eee4d5c3c4"},{url:"icons/apple-icon-167x167.png",revision:"0356b90523e7974cb1550fbfee89ad32"},{url:"icons/apple-icon-180x180.png",revision:"19e5622353659539bf580e6dcc2065ca"},{url:"icons/favicon-128x128.png",revision:"2cb11a7d51f68c7c4debcfc2d9577411"},{url:"icons/favicon-16x16.png",revision:"bbe2489d5ca0cd2bbb97e9269c7c7d73"},{url:"icons/favicon-32x32.png",revision:"7340df706d8852fdba0f07c71ccabe68"},{url:"icons/favicon-96x96.png",revision:"eef3fbdb71c348fe5eeb7f284bed9b2e"},{url:"icons/icon-128x128.png",revision:"2cb11a7d51f68c7c4debcfc2d9577411"},{url:"icons/icon-192x192.png",revision:"d6c68e37236b9d9e656c2756e14ec8c1"},{url:"icons/icon-256x256.png",revision:"9629e9c86d91c3ac87cd3c39aa49d8ee"},{url:"icons/icon-384x384.png",revision:"1f6f6286ac92fe605ededd5cfe975fcc"},{url:"icons/icon-512x512.png",revision:"d77ffd43ce1fe74e7851f060979e6b33"},{url:"icons/ms-icon-144x144.png",revision:"0d0115c70abba8eed02fa18f389dc70a"},{url:"icons/safari-pinned-tab.svg",revision:"19bf1ddd84016da43a1c356c997e4e0d"},{url:"index.html",revision:"63921cf28d0ca0e276a7154d024c0014"},{url:"introjs.min.css",revision:"22ac67eb7e0f64e03e6ab6794f06d440"},{url:"js/193.efc51b7d.js",revision:null},{url:"js/213.a80df209.js",revision:null},{url:"js/361.1894f425.js",revision:null},{url:"js/678.c5894d63.js",revision:null},{url:"js/718.2d89abc4.js",revision:null},{url:"js/828.995addce.js",revision:null},{url:"js/832.b075608c.js",revision:null},{url:"js/875.64356155.js",revision:null},{url:"js/app.6e5bd9c0.js",revision:null},{url:"js/chunk-common.c4a652b3.js",revision:null},{url:"js/vendor.515b886c.js",revision:null},{url:"keyboard_thi_col.png",revision:"b30f404707083cb8065b407a0dd6f445"},{url:"logo.svg",revision:"ec4b46ed4d5dc7f1c3f88e27f491fcfb"},{url:"manifest.json",revision:"c9af4a48d70cb8f8ce5a69cc9019b654"},{url:"mm1.json",revision:"93d23cc9e284fcf90752affc02a8a930"},{url:"mm2.json",revision:"b8f596b7458a87ab714bb1f7be1a6557"},{url:"mm3.json",revision:"8524ffde2c8af733f1a7e18991935cbb"}],{}),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html"),{denylist:[/service-worker\.js$/,/workbox-(.)*\.js$/]}))}));
