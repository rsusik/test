"use strict";(self["webpackChunkkeydrop"]=self["webpackChunkkeydrop"]||[]).push([[976],{2976:(e,t,l)=>{l.r(t),l.d(t,{default:()=>R});var a=l(3673),o=l(2323);const n=(0,a.Uk)("Menu"),s=(0,a._)("div",{style:{"margin-top":"10pt"}},null,-1),r=(0,a.Uk)(" This app is designated for a phone device. You are currently using a different device. We encourage you to open this link on your phone and install this (PWA) application. "),d=(0,a.Uk)("Introduction"),i=(0,a.Uk)("Demo "),m=(0,a.Uk)("Demo2 "),u=(0,a.Uk)("Test (keydrop)"),c=(0,a.Uk)("Test (normal)"),g=(0,a.Uk)("Feedback"),p=(0,a.Uk)("GET DATA"),k={key:4},w=(0,a._)("div",{class:"results"},"Results",-1),h={class:"ranking",style:{}},_=(0,a._)("thead",null,[(0,a._)("tr",null,[(0,a._)("th",null,"Date"),(0,a._)("th",null,"Mode"),(0,a._)("th",null,"Time")])],-1),f=["innerHTML"],y=(0,a._)("div",{id:"overlay"},null,-1);function v(e,t,l,v,b,q){const C=(0,a.up)("q-toolbar-title"),W=(0,a.up)("q-toolbar"),T=(0,a.up)("q-header"),D=(0,a.up)("q-icon"),S=(0,a.up)("q-banner"),x=(0,a.up)("router-link"),I=(0,a.up)("q-separator"),Z=(0,a.up)("q-page-container"),Q=(0,a.up)("q-footer"),U=(0,a.up)("q-layout");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a.Wm)(U,{view:"hHh lpR fFf"},{default:(0,a.w5)((()=>[(0,a.Wm)(T,{elevated:"",class:"bg-primary text-white","height-hint":"98"},{default:(0,a.w5)((()=>[(0,a.Wm)(W,{class:"bg-primary text-white shadow-2"},{default:(0,a.w5)((()=>[(0,a.Wm)(C,{class:"text-center text-bold"},{default:(0,a.w5)((()=>[n])),_:1})])),_:1})])),_:1}),(0,a.Wm)(Z,{class:"q-pa-md"},{default:(0,a.w5)((()=>[s,e.$q.platform.is.mobile?(0,a.kq)("",!0):((0,a.wg)(),(0,a.j4)(S,{key:0,class:"text-white bg-red q-ma-md",cclass:"text-center",rounded:""},{avatar:(0,a.w5)((()=>[(0,a.Wm)(D,{name:"warning",color:"white",class:""})])),default:(0,a.w5)((()=>[r])),_:1})),(0,a.Wm)(x,{class:"menu-item intro",to:"/intro",onClick:t[0]||(t[0]=t=>e.introRead=!0)},{default:(0,a.w5)((()=>[d])),_:1}),(0,a.Wm)(x,{class:(0,o.C_)(["menu-item",{"link-disabled":!e.introRead}]),to:"/demo",onClick:t[1]||(t[1]=t=>e.demoCompleted=!0)},{default:(0,a.w5)((()=>[i])),_:1},8,["class"]),(0,a.Wm)(x,{class:(0,o.C_)(["menu-item",{"link-disabled":!e.introRead}]),to:"/demo2",onClick:t[2]||(t[2]=t=>e.demoCompleted=!0)},{default:(0,a.w5)((()=>[m])),_:1},8,["class"]),(0,a.Wm)(x,{class:(0,o.C_)(["menu-item",{"link-disabled":!e.demoCompleted}]),to:"/test/keydrop"},{default:(0,a.w5)((()=>[u])),_:1},8,["class"]),(0,a.Wm)(x,{class:(0,o.C_)(["menu-item",{"link-disabled":!e.demoCompleted}]),to:"/test/normal"},{default:(0,a.w5)((()=>[c])),_:1},8,["class"]),e.games.length>0?((0,a.wg)(),(0,a.j4)(x,{key:1,class:"menu-item",to:"/feedback"},{default:(0,a.w5)((()=>[g])),_:1})):(0,a.kq)("",!0),e.games.length>0&&e.canDownload?((0,a.wg)(),(0,a.j4)(x,{key:2,class:"menu-item",to:"/getdata"},{default:(0,a.w5)((()=>[p])),_:1})):(0,a.kq)("",!0),e.games.length>0?((0,a.wg)(),(0,a.j4)(I,{key:3,inset:"",class:"q-my-md"})):(0,a.kq)("",!0),e.games.length>0?((0,a.wg)(),(0,a.iD)("div",k,[w,(0,a._)("table",h,[_,(0,a._)("tbody",null,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.games,((e,t)=>((0,a.wg)(),(0,a.iD)("tr",{key:t},[(0,a._)("td",{style:{"font-size":"12pt"},innerHTML:e.date},null,8,f),(0,a._)("td",null,(0,o.zw)(e.mode),1),(0,a._)("td",null,(0,o.zw)(e.score.overall)+"s",1)])))),128))])])])):(0,a.kq)("",!0)])),_:1}),(0,a.Wm)(Q,{class:"footer"},{default:(0,a.w5)((()=>[(0,a.Wm)(W,null,{default:(0,a.w5)((()=>[(0,a.Wm)(C,{class:"text-center"},{default:(0,a.w5)((()=>[(0,a.Wm)(D,{name:"img:logo.svg#icon-1|0 0 80 380",style:{height:"24px",width:"114px"}})])),_:1})])),_:1})])),_:1})])),_:1}),y],64)}l(7070),l(7098),l(3985),l(7345);l(52);const b=(0,a.aZ)({name:"MainLayout",components:{},setup(){return{}},data(){return{}},computed:{demoCompleted:{get(){var e;return null!==(e=localStorage.getItem("demoCompleted"))&&void 0!==e&&e},set(e){localStorage.setItem("demoCompleted",e)}},introRead:{get(){var e;return null!==(e=localStorage.getItem("introRead"))&&void 0!==e&&e},set(e){localStorage.setItem("introRead",e)}},games:function(){let e=localStorage.getItem("tests");return void 0==e?[]:(e=JSON.parse(e),console.log(e),e=e.map((e=>{console.log(e);let t=((e.endTime-e.startTime)/1e3).toFixed(1),l=new Date(e.startTime);return{mode:e.mode,date:`${l.getFullYear()}-${l.getMonth()+1}-${l.getDate()}<br />${l.getHours()}:${String(l.getMinutes()).padStart(2,"0")}`,score:{overall:t}}})),e.sort(((e,t)=>t.score.overall-e.score.overall)).reverse())}},created(){this.canDownload=!!localStorage.getItem("rating")&&!!localStorage.getItem("speed")&&!!localStorage.getItem("typos")},mounted(){},methods:{}});var q=l(3066),C=l(3812),W=l(9570),T=l(3747),D=l(2652),S=l(5607),x=l(4554),I=l(5869),Z=l(1762),Q=l(7518),U=l.n(Q);b.render=v;const R=b;U()(b,"components",{QLayout:q.Z,QHeader:C.Z,QToolbar:W.Z,QToolbarTitle:T.Z,QPageContainer:D.Z,QBanner:S.Z,QIcon:x.Z,QSeparator:I.Z,QFooter:Z.Z})}}]);