"use strict";(self["webpackChunkkeydrop"]=self["webpackChunkkeydrop"]||[]).push([[894],{894:(e,t,s)=>{s.r(t),s.d(t,{default:()=>H});var a=s(3673),o=s(2323);const l=(0,a._)("h1",{style:{"margin-top":"0"}},"Introduction",-1),r=(0,a._)("h2",null,"Basic info",-1),n=(0,a._)("p",null,"This application is a prototype of a keyboard that adapts to written text.",-1),i=(0,a._)("h2",null,"Keyboard",-1),h=(0,a._)("p",null," The keyboard layout changes dynamically while the user types the text. It removes the letters that are unlikely to appear, so it is less likely that the user mistakenly taps the wrong key. ",-1),p=(0,a._)("p",null,' While the user hits the keys, the letters that are unlinkely to appear next are wiped out from the keys and in their place apper the letters that likely to appear. The user can still type all of the letters (for those keys which letter has changed) by holding the key down. In the below example user typed three characters, "thi", so the keyboard leaves letters {s, r, c, n}, which are likely to appear next, and also {i, o, p, l} which are too far from possible characters changing them does not seem to help in typing. Note: the colours are removed in the keydrop as we find it distracting. ',-1),u={class:"col-6"},d=(0,a._)("i",{class:"block text-center"},"We removed the colours as we believe they distract the user.",-1),c=(0,a._)("h2",null,"Test",-1),m=(0,a._)("p",null," This application tests the speed and correctness of typing using a regular keyboard (similar to gboard) and keydrop. ",-1),f=(0,a.Uk)(" There are two modes (tests) available from the main menu: "),y=(0,a._)("ul",null,[(0,a._)("li",null,"keydrop,"),(0,a._)("li",null,"normal (similar to gboard).")],-1),g=(0,a.Uk)(" If you wish to participate in the tests, please perform them for both modes, then fill in the feedback form, and send the results back to us "),w=["href"],k=(0,a.Uk)(". "),b=(0,a._)("p",null," A test is prepared to evaluate the speed and correctness of typing. The test is a simplified typer game where the words fall from top to bottom of the screen. User should enter the words before they fall. If the word is entered before it falls, the user gets points; otherwise, receives negative points. The user should attempt to write the words as fast as possible. ",-1),x={class:"col-6"},_=(0,a._)("h2",null,"Demo",-1),v=(0,a.Uk)(" Train typing with keydrop in "),T=(0,a.Uk)("this demo"),I=(0,a.Uk)(" before starting the test. ");function W(e,t,s,W,q,Z){const Q=(0,a.up)("q-btn"),U=(0,a.up)("q-toolbar"),C=(0,a.up)("q-img"),O=(0,a.up)("router-link"),j=(0,a.up)("q-page-container"),A=(0,a.up)("q-icon"),B=(0,a.up)("q-toolbar-title"),z=(0,a.up)("q-footer"),F=(0,a.up)("q-layout");return(0,a.wg)(),(0,a.j4)(F,{view:"hHh lpR fFf"},{default:(0,a.w5)((()=>[(0,a.Wm)(U,{class:"text-primary"},{default:(0,a.w5)((()=>[(0,a.Wm)(Q,{flat:"",dense:"",icon:"arrow_back",label:"Back",to:"/"})])),_:1}),(0,a.Wm)(j,{class:"q-px-md"},{default:(0,a.w5)((()=>[l,r,n,i,h,p,(0,a._)("div",u,[(0,a.Wm)(C,{src:"keyboard_thi_col.png","no-native-menu":"",style:{"max-width":"456px"}}),d]),c,m,(0,a._)("p",null,[f,y,g,(0,a._)("a",{href:`mailto:${e.em}`},(0,o.zw)(e.em),9,w),k]),b,(0,a._)("div",x,[(0,a.Wm)(C,{src:"game.png","no-native-menu":"",style:{"max-width":"456px"}})]),_,(0,a._)("p",null,[v,(0,a.Wm)(O,{to:"/write"},{default:(0,a.w5)((()=>[T])),_:1}),I])])),_:1}),(0,a.Wm)(z,{class:"footer"},{default:(0,a.w5)((()=>[(0,a.Wm)(U,null,{default:(0,a.w5)((()=>[(0,a.Wm)(B,{class:"text-center"},{default:(0,a.w5)((()=>[(0,a.Wm)(A,{name:"img:logo.svg#icon-1|0 0 80 380",style:{height:"24px",width:"114px"}})])),_:1})])),_:1})])),_:1})])),_:1})}s(5363),s(3985),s(5827);s(52);const q=(0,a.aZ)({name:"Intro",components:{},setup(){return{}},data(){return{ema:"spcfsu/tvtjlAq/mpe{/qm"}},computed:{em:function(){return this.ema.split("").map((e=>String.fromCharCode(e.charCodeAt(0)-1))).join("")},displayText:function(){console.log(this.text);let e=this.text.lastIndexOf(" "),t=(this.text.lastIndexOf("."),this.text.lastIndexOf(","),this.text.lastIndexOf("\n")),s=Math.max(t,e),a="",o="";return s==this.text.length-1?a=this.text:(a=this.text.substring(0,s+1),o=this.text.substring(s+1,this.text.length)),a=a.replace(/ /g,"<wbr>&nbsp;"),a=a.replace(/\n/g,"<br/>"),a=a+"<u>"+o+"</u>",this.text.length>0&&(a+='<span style="color:blue; font-size: 1rem; font-weight:900;" class="blink">|</span>'),a}},created(){},mounted(){},methods:{}});var Z=s(3066),Q=s(9570),U=s(2452),C=s(2652),O=s(4027),j=s(4554),A=s(9143),B=s(1762),z=s(3747),F=s(7518),D=s.n(F);q.render=W;const H=q;D()(q,"components",{QLayout:Z.Z,QToolbar:Q.Z,QBtn:U.Z,QPageContainer:C.Z,QImg:O.Z,QIcon:j.Z,QTooltip:A.Z,QFooter:B.Z,QToolbarTitle:z.Z})}}]);