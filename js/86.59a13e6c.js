"use strict";(self["webpackChunkkeydrop"]=self["webpackChunkkeydrop"]||[]).push([[86],{86:(t,e,a)=>{a.r(e),a.d(e,{default:()=>g});var l=a(3673);const n=(0,l.Uk)(" Type text using below keyboard ");function o(t,e,a,o,s,r){const u=(0,l.up)("q-btn"),d=(0,l.up)("q-toolbar"),i=(0,l.up)("q-card-section"),p=(0,l.up)("q-card"),c=(0,l.up)("q-page-container"),x=(0,l.up)("Keyboard2"),f=(0,l.up)("q-toolbar-title"),m=(0,l.up)("q-footer"),h=(0,l.up)("q-layout");return(0,l.wg)(),(0,l.j4)(h,{view:"hHh lpR fFf"},{default:(0,l.w5)((()=>[(0,l.Wm)(d,{class:"text-primary"},{default:(0,l.w5)((()=>[(0,l.Wm)(u,{flat:"",dense:"",icon:"arrow_back",label:"Back",to:"/"})])),_:1}),(0,l.Wm)(c,{class:"q-pa-md"},{default:(0,l.w5)((()=>[(0,l.Wm)(p,{flat:"",bordered:""},{default:(0,l.w5)((()=>[""==t.text?((0,l.wg)(),(0,l.j4)(i,{key:0,class:"text-grey"},{default:(0,l.w5)((()=>[n])),_:1})):(0,l.kq)("",!0),t.displayText.length>0?((0,l.wg)(),(0,l.j4)(i,{key:1,innerHTML:t.displayText},null,8,["innerHTML"])):(0,l.kq)("",!0)])),_:1})])),_:1}),(0,l.Wm)(m,{class:"footer"},{default:(0,l.w5)((()=>[(0,l.Wm)(d,null,{default:(0,l.w5)((()=>[(0,l.Wm)(f,null,{default:(0,l.w5)((()=>[(0,l.Wm)(x,{modelValue:t.text,"onUpdate:modelValue":e[0]||(e[0]=e=>t.text=e)},null,8,["modelValue"])])),_:1})])),_:1})])),_:1})])),_:1})}a(5363),a(3985);var s=a(5827);a(52);const r=(0,l.aZ)({name:"MainLayout",components:{Keyboard2:s.Z},setup(){return{}},data(){return{text:""}},computed:{displayText:function(){console.log(this.text);let t=this.text.lastIndexOf(" "),e=(this.text.lastIndexOf("."),this.text.lastIndexOf(","),this.text.lastIndexOf("\n")),a=Math.max(e,t),l="",n="";return a==this.text.length-1?l=this.text:(l=this.text.substring(0,a+1),n=this.text.substring(a+1,this.text.length)),l=l.replace(/ /g,"<wbr>&nbsp;"),l=l.replace(/\n/g,"<br/>"),l=l+"<u>"+n+"</u>",this.text.length>0&&(l+='<span style="color:blue; font-size: 1rem; font-weight:900;" class="blink">|</span>'),l}},created(){},mounted(){localStorage.setItem("demoCompleted",!0)},methods:{}});var u=a(3066),d=a(9570),i=a(2452),p=a(2652),c=a(151),x=a(5589),f=a(1762),m=a(3747),h=a(7518),b=a.n(h);r.render=o;const g=r;b()(r,"components",{QLayout:u.Z,QToolbar:d.Z,QBtn:i.Z,QPageContainer:p.Z,QCard:c.Z,QCardSection:x.Z,QFooter:f.Z,QToolbarTitle:m.Z})}}]);