"use strict";(self["webpackChunkkeydrop"]=self["webpackChunkkeydrop"]||[]).push([[803],{9803:(e,t,a)=>{a.r(t),a.d(t,{default:()=>P});var o=a(3673),l=a(2323);const n=(0,o.Uk)("Menu"),r=(0,o._)("div",{style:{"margin-top":"10pt"}},null,-1),d=(0,o.Uk)(" This app is designated for a phone device. You are currently using a different device. We encourage you to open this link on your phone and install this (PWA) application. "),s=(0,o.Uk)("Introduction"),m=(0,o.Uk)("Demo "),i=(0,o.Uk)("Test (keydrop)"),u=(0,o.Uk)("Test (normal)"),c=(0,o.Uk)("Feedback"),g=(0,o.Uk)("GET DATA"),w=(0,o.Uk)(" Please read the introduction to continue "),p=(0,o.Uk)(" Please check the demo to continue "),k=(0,o.Uk)(" Please finish test in two modes (keydrop and normal) to continue "),h=(0,o.Uk)(" Please fill in the feedback form to continue "),f=(0,o.Uk)(" Thank you, we appreciate completing the test. Please download and send the results to us. "),y={key:9},_=(0,o._)("div",{class:"results"},"Results",-1),q={class:"ranking",style:{}},b=(0,o._)("thead",null,[(0,o._)("tr",null,[(0,o._)("th",null,"Date"),(0,o._)("th",null,"Mode"),(0,o._)("th",null,"Time")])],-1),v=["innerHTML"],x=(0,o._)("div",{id:"overlay"},null,-1);function W(e,t,a,W,C,T){const D=(0,o.up)("q-toolbar-title"),S=(0,o.up)("q-toolbar"),U=(0,o.up)("q-header"),I=(0,o.up)("q-icon"),Z=(0,o.up)("q-banner"),j=(0,o.up)("router-link"),Q=(0,o.up)("q-separator"),R=(0,o.up)("q-page-container"),H=(0,o.up)("q-footer"),M=(0,o.up)("q-layout");return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o.Wm)(M,{view:"hHh lpR fFf"},{default:(0,o.w5)((()=>[(0,o.Wm)(U,{elevated:"",class:"bg-primary text-white","height-hint":"98"},{default:(0,o.w5)((()=>[(0,o.Wm)(S,{class:"bg-primary text-white shadow-2"},{default:(0,o.w5)((()=>[(0,o.Wm)(D,{class:"text-center text-bold"},{default:(0,o.w5)((()=>[n])),_:1})])),_:1})])),_:1}),(0,o.Wm)(R,{class:"q-pa-md"},{default:(0,o.w5)((()=>[r,e.$q.platform.is.mobile?(0,o.kq)("",!0):((0,o.wg)(),(0,o.j4)(Z,{key:0,class:"text-white bg-red q-ma-md",cclass:"text-center",rounded:""},{avatar:(0,o.w5)((()=>[(0,o.Wm)(I,{name:"warning",color:"white",class:""})])),default:(0,o.w5)((()=>[d])),_:1})),(0,o.Wm)(j,{class:"menu-item intro",to:"/intro",onClick:t[0]||(t[0]=t=>e.introRead=!0)},{default:(0,o.w5)((()=>[s])),_:1}),(0,o.Wm)(j,{class:(0,l.C_)(["menu-item",{"link-disabled":!e.introRead}]),to:"/demo",onClick:t[1]||(t[1]=t=>e.demoCompleted=!0)},{default:(0,o.w5)((()=>[m])),_:1},8,["class"]),(0,o.Wm)(j,{class:(0,l.C_)(["menu-item",{"link-disabled":!e.demoCompleted}]),to:"/test/keydrop"},{default:(0,o.w5)((()=>[i])),_:1},8,["class"]),(0,o.Wm)(j,{class:(0,l.C_)(["menu-item",{"link-disabled":!e.demoCompleted}]),to:"/test/normal"},{default:(0,o.w5)((()=>[u])),_:1},8,["class"]),e.testCompleted?((0,o.wg)(),(0,o.j4)(j,{key:1,class:"menu-item",to:"/feedback"},{default:(0,o.w5)((()=>[c])),_:1})):(0,o.kq)("",!0),e.games.length>0&&e.canDownload?((0,o.wg)(),(0,o.j4)(j,{key:2,class:"menu-item",to:"/getdata"},{default:(0,o.w5)((()=>[g])),_:1})):(0,o.kq)("",!0),e.introRead?(0,o.kq)("",!0):((0,o.wg)(),(0,o.j4)(Z,{key:3,class:"q-mx-xl q-my-md bg-primary text-white rounded-borders"},{avatar:(0,o.w5)((()=>[(0,o.Wm)(I,{name:"info",color:"white"})])),default:(0,o.w5)((()=>[w])),_:1})),!e.demoCompleted&&e.introRead?((0,o.wg)(),(0,o.j4)(Z,{key:4,class:"q-mx-xl q-my-md bg-primary text-white rounded-borders"},{avatar:(0,o.w5)((()=>[(0,o.Wm)(I,{name:"info",color:"white"})])),default:(0,o.w5)((()=>[p])),_:1})):(0,o.kq)("",!0),!e.testCompleted&&e.demoCompleted?((0,o.wg)(),(0,o.j4)(Z,{key:5,class:"q-mx-xl q-my-md bg-primary text-white rounded-borders"},{avatar:(0,o.w5)((()=>[(0,o.Wm)(I,{name:"info",color:"white"})])),default:(0,o.w5)((()=>[k])),_:1})):(0,o.kq)("",!0),!e.canDownload&&e.testCompleted?((0,o.wg)(),(0,o.j4)(Z,{key:6,class:"q-mx-xl q-my-md bg-primary text-white rounded-borders"},{avatar:(0,o.w5)((()=>[(0,o.Wm)(I,{name:"info",color:"white"})])),default:(0,o.w5)((()=>[h])),_:1})):(0,o.kq)("",!0),e.canDownload?((0,o.wg)(),(0,o.j4)(Z,{key:7,class:"q-mx-xl q-my-md bg-primary text-white rounded-borders"},{avatar:(0,o.w5)((()=>[(0,o.Wm)(I,{name:"task_alt",color:"white"})])),default:(0,o.w5)((()=>[f])),_:1})):(0,o.kq)("",!0),e.games.length>0?((0,o.wg)(),(0,o.j4)(Q,{key:8,inset:"",class:"q-my-md"})):(0,o.kq)("",!0),e.games.length>0?((0,o.wg)(),(0,o.iD)("div",y,[_,(0,o._)("table",q,[b,(0,o._)("tbody",null,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(e.games,((e,t)=>((0,o.wg)(),(0,o.iD)("tr",{key:t},[(0,o._)("td",{style:{"font-size":"12pt"},innerHTML:e.date},null,8,v),(0,o._)("td",null,(0,l.zw)(e.mode),1),(0,o._)("td",null,(0,l.zw)(e.score.overall)+"s",1)])))),128))])])])):(0,o.kq)("",!0)])),_:1}),(0,o.Wm)(H,{class:"footer"},{default:(0,o.w5)((()=>[(0,o.Wm)(S,null,{default:(0,o.w5)((()=>[(0,o.Wm)(D,{class:"text-center"},{default:(0,o.w5)((()=>[(0,o.Wm)(I,{name:"img:logo.svg#icon-1|0 0 80 380",style:{height:"24px",width:"114px"}})])),_:1})])),_:1})])),_:1})])),_:1}),x],64)}a(71),a(7070),a(7098),a(3985),a(7345);a(52);const C=(0,o.aZ)({name:"MainLayout",components:{},setup(){return{}},data(){return{}},computed:{testCompleted:function(){return new Set(this.games.map((e=>e.mode))).size>=2},demoCompleted:{get(){var e;return null!==(e=localStorage.getItem("demoCompleted"))&&void 0!==e&&e},set(e){localStorage.setItem("demoCompleted",e)}},introRead:{get(){var e;return null!==(e=localStorage.getItem("introRead"))&&void 0!==e&&e},set(e){localStorage.setItem("introRead",e)}},games:function(){let e=localStorage.getItem("tests");return void 0==e?[]:(e=JSON.parse(e),console.log(e),e=e.map((e=>{console.log(e);let t=((e.endTime-e.startTime)/1e3).toFixed(1),a=new Date(e.startTime);return{mode:e.mode,date:`${a.getFullYear()}-${a.getMonth()+1}-${a.getDate()}<br />${a.getHours()}:${String(a.getMinutes()).padStart(2,"0")}`,score:{overall:t}}})),e.sort(((e,t)=>t.score.overall-e.score.overall)).reverse())}},created(){this.canDownload=!!localStorage.getItem("rating")&&!!localStorage.getItem("speed")&&!!localStorage.getItem("typos")},mounted(){},methods:{}});var T=a(3066),D=a(3812),S=a(9570),U=a(3747),I=a(2652),Z=a(5607),j=a(4554),Q=a(5869),R=a(1762),H=a(7518),M=a.n(H);C.render=W;const P=C;M()(C,"components",{QLayout:T.Z,QHeader:D.Z,QToolbar:S.Z,QToolbarTitle:U.Z,QPageContainer:I.Z,QBanner:Z.Z,QIcon:j.Z,QSeparator:Q.Z,QFooter:R.Z})}}]);