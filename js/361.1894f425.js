"use strict";(self["webpackChunkkeydrop"]=self["webpackChunkkeydrop"]||[]).push([[361],{9361:(e,t,o)=>{o.r(t),o.d(t,{default:()=>_});var a=o(3673),l=o(2323),n=o(8880);const r=(0,a._)("h1",{style:{"margin-top":"0"}},"Data",-1),s=(0,a.Uk)(" Please download and send the results back to us "),i=["href"],d=(0,a.Uk)(". "),m={class:"text-center"},c=(0,a.Uk)(" You can see the full data below: "),p={style:{width:"90%",position:"relative",margin:"0 auto"}},u={style:{display:"flex","align-items":"center","justify-content":"center","margin-bottom":"15pt"}};function g(e,t,o,g,h,f){const y=(0,a.up)("q-btn"),v=(0,a.up)("q-toolbar"),w=(0,a.up)("q-page-container"),b=(0,a.up)("q-icon"),I=(0,a.up)("q-toolbar-title"),S=(0,a.up)("q-footer"),k=(0,a.up)("q-layout");return(0,a.wg)(),(0,a.j4)(k,{view:"hHh lpR fFf"},{default:(0,a.w5)((()=>[(0,a.Wm)(v,{class:"text-primary"},{default:(0,a.w5)((()=>[(0,a.Wm)(y,{flat:"",dense:"",icon:"arrow_back",label:"Back",to:"/"})])),_:1}),(0,a.Wm)(w,{class:"q-px-md"},{default:(0,a.w5)((()=>[r,s,(0,a._)("a",{href:`mailto:${e.em}`},(0,l.zw)(e.em),9,i),d,(0,a._)("div",m,[(0,a.Wm)(y,{onClick:e.download,label:"Download data",icon:"download",flat:"",size:"xl",class:"q-my-md",style:{border:"1pt solid black","border-radius":"20pt"}},null,8,["onClick"])]),c,(0,a._)("div",p,[(0,a.Wm)(y,{onClick:t[0]||(t[0]=t=>e.toClipboard(e.data)),label:"Copy",icon:"content_copy",flat:"",class:"",style:{position:"absolute",right:"10pt",top:"20pt"}}),(0,a.wy)((0,a._)("textarea",{readonly:"","onUpdate:modelValue":t[1]||(t[1]=t=>e.data=t),class:"shadow-5 q-pa-md q-ma-md",style:{overflow:"scroll",width:"100%","min-height":"300pt"}},"\n          \n        ",512),[[n.nr,e.data]])]),(0,a._)("div",u,[(0,a.Wm)(y,{rounded:"",color:"red",label:"REMOVE DATA",onClick:e.removeDataConfirm},null,8,["onClick"])])])),_:1}),(0,a.Wm)(S,{class:"footer"},{default:(0,a.w5)((()=>[(0,a.Wm)(v,null,{default:(0,a.w5)((()=>[(0,a.Wm)(I,{class:"text-center"},{default:(0,a.w5)((()=>[(0,a.Wm)(b,{name:"img:logo.svg#icon-1|0 0 80 380",style:{height:"24px",width:"114px"}})])),_:1})])),_:1})])),_:1})])),_:1})}var h=o(1914);const f=(0,a.aZ)({name:"Intro",components:{},setup(){return{}},data(){return{ema:"spcfsu/tvtjlAq/mpe{/qm"}},watch:{},computed:{data:function(){var e=localStorage.getItem("tests"),t=JSON.parse(e),o=JSON.stringify({rating:localStorage.getItem("rating"),speed:localStorage.getItem("speed"),typos:localStorage.getItem("typos"),age:localStorage.getItem("age"),sex:localStorage.getItem("sex"),hand:localStorage.getItem("hand"),phone:localStorage.getItem("phone"),tests:t},null,"  ");return void 0==e?void 0:o},em:function(){return this.ema.split("").map((e=>String.fromCharCode(e.charCodeAt(0)-1))).join("")}},created(){this.rating=localStorage.getItem("rating"),this.speed=localStorage.getItem("speed"),this.typos=localStorage.getItem("typos")},mounted(){},methods:{removeData:function(){localStorage.removeItem("rating"),localStorage.removeItem("speed"),localStorage.removeItem("typos"),localStorage.removeItem("age"),localStorage.removeItem("sex"),localStorage.removeItem("hand"),localStorage.removeItem("phone"),localStorage.removeItem("tests"),this.$router.push("/")},removeDataConfirm:function(){this.$q.dialog({dark:!0,title:"WARNING",message:"WARNING: All results will be removed.",cancel:!0,persistent:!0}).onOk((()=>{this.removeData()}))},download:function(){if(void 0==this.data);else{var e="results.json",t=document.createElement("a");t.setAttribute("href","data:text/plain;charset=utf-8,"+encodeURIComponent(this.data)),t.setAttribute("download",e),t.style.display="none",document.body.appendChild(t),t.click(),document.body.removeChild(t)}},toClipboard:function(e){(0,h.Z)(e).then((()=>{this.$q.notify({type:"info",timeout:1e3,message:"Copied!"})}))}}});var y=o(3066),v=o(9570),w=o(3187),b=o(2652),I=o(1762),S=o(3747),k=o(4554),C=o(7518),q=o.n(C);f.render=g;const _=f;q()(f,"components",{QLayout:y.Z,QToolbar:v.Z,QBtn:w.Z,QPageContainer:b.Z,QFooter:I.Z,QToolbarTitle:S.Z,QIcon:k.Z})}}]);