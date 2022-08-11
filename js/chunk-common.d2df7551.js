"use strict";(self["webpackChunkkeydrop"]=self["webpackChunkkeydrop"]||[]).push([[64],{3985:(e,t,i)=>{i.d(t,{Z:()=>o});i(71);const s=function(e,t,i,o){if(0==e.length||i==o&&0!=t.localeCompare(e[i].substring(0,t.length)))return{start:-1,end:-1,words:[],letters:new Set};let n=Math.round((i+o)/2);if(0==t.localeCompare(e[n].substring(0,t.length))){let i=n,s=n,o=n-1,l=new Set,r=new Set;l.add(e[n]),e[n].length>t.length&&r.add(e[n][t.length]);while(o>=0&&0==t.localeCompare(e[o].substring(0,t.length)))l.add(e[o]),e[o].length>t.length&&r.add(e[o][t.length]),o--;i=o+1,o=n+1;while(o<e.length&&0==t.localeCompare(e[o].substring(0,t.length)))l.add(e[o]),e[o].length>t.length&&r.add(e[o][t.length]),o++;return s=o-1,{start:i,end:s,words:l,letters:r}}return t.localeCompare(e[n].substring(0,t.length))<0?s(e,t,i,n-1):s(e,t,n,o)},o={findNext:s}},9112:(e,t,i)=>{i.d(t,{Z:()=>w});var s=i(3673),o=i(2323);const n={class:"kb-row",style:{}},l=["value"],r=["value"],a=["value"],h=["onMousedown","onMouseup","onMouseleave","onTouchstart","onTouchend","onTouchcancel"];function c(e,t,i,c,d,k){return(0,s.wg)(),(0,s.iD)("div",null,[(0,s._)("div",n,[(0,s._)("input",{class:"",style:{"background-color":"transparent","box-shadow":"none",border:"0"},type:"button",value:e.leftWord,onClick:t[0]||(t[0]=t=>e.insertWord(e.leftWord))},null,8,l),(0,s._)("input",{class:"",style:{"background-color":"transparent","box-shadow":"none",border:"0"},type:"button",value:e.inp,onClick:t[1]||(t[1]=()=>{e.$emit("wordpressed",e.inp),e.insertWord(e.inp)})},null,8,r),(0,s._)("input",{class:"",style:{"background-color":"transparent","box-shadow":"none",border:"0"},type:"button",value:e.rightWord,onClick:t[2]||(t[2]=t=>e.insertWord(e.rightWord))},null,8,a)]),((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(e.boardView,(t=>((0,s.wg)(),(0,s.iD)("div",{key:t,class:"kb-row"},[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(t,(t=>((0,s.wg)(),(0,s.iD)("div",{key:t,class:(0,o.C_)(["btn",[t.class,{original:t.original_show}]]),style:(0,o.j5)([{position:"relative"},t.style]),onMousedown:i=>e.original_mousedown(t),onMouseup:i=>e.original_mouseup(t),onMouseleave:i=>e.original_mouseleave(t),onTouchstart:i=>e.original_touchstart(t),onTouchend:i=>e.original_touchend(t),onTouchcancel:i=>e.original_touchcancel(t)},[(0,s.Uk)((0,o.zw)(t.original_label.toUpperCase())+" ",1),(0,s._)("div",{class:"btn-original",style:(0,o.j5)({display:t.key==t.original_key?"none":"block"})},(0,o.zw)(t.original_show?t.original_label.toUpperCase():t.label.toUpperCase()),5)],46,h)))),128))])))),128))])}i(7386),i(71),i(7070);var d=i(3985);const k=i(52),y=(0,s.aZ)({name:"KeydropKeyboard",props:{modelValue:String},components:{},setup(){return{}},watch:{modelValue(e){let t=e.lastIndexOf(" "),i=(e.lastIndexOf("."),e.lastIndexOf(","),e.lastIndexOf("\n")),s=Math.max(i,t);-1==s?(this.internal_text="",this.internal_inp=e):s==e.length-1?(this.internal_text=e,this.internal_inp=""):(this.internal_text=e.substring(0,s+1),this.internal_inp=e.substring(s+1,e.length)),this.updateBoard()}},data(){return{internal_inp:"",words1:[],words2:[],words3:[],words4:[],wordsx:[],charmap1:[],charmap2:[],charmap3:[],charmap4:[],charmap5:[],internal_text:"",leftWord:"",rightWord:"",keys:{},boardView:[],tree:{},key_timeouts:{}}},computed:{fullText:{get(){return this.modelValue},set(e){this.$emit("update:modelValue",e)}},text:{get(){return this.internal_text},set(e){this.internal_text=e,this.fullText=this.internal_text+this.inp}},inp:{get(){return this.internal_inp},set(e){this.internal_inp=e,this.fullText=this.text+this.internal_inp}},words:function(){return void 0==this.inp||0==this.inp.length?this.words1:1==this.inp.length?this.words2:2==this.inp.length?this.words3:3==this.inp.length?this.words4:this.wordsx},row0:function(){return Object.fromEntries(Object.entries(this.keys).filter((([e,t])=>0==t.row)))},row1:function(){return Object.fromEntries(Object.entries(this.keys).filter((([e,t])=>1==t.row)))},row2:function(){return Object.fromEntries(Object.entries(this.keys).filter((([e,t])=>2==t.row)))},row3:function(){return Object.fromEntries(Object.entries(this.keys).filter((([e,t])=>3==t.row)))},wordsLeft:function(){if(this.inp.length<1)return new Set;let e=d.Z.findNext(this.words,this.inp,0,this.words.length);return e.words},lettersLeft:function(){const e=(e,t)=>{let i=e[t];return void 0==i||0==i.length?new Set:new Set(i)},t=t=>void 0==t||0==t.length?"q,w,e,r,t,y,u,i,o,p,l,k,j,h,g,f,d,s,a,z,x,c,v,b,n,m".split(","):1==t.length?e(this.charmap1,t):2==t.length?e(this.charmap2,t):3==t.length?e(this.charmap3,t):4==t.length?e(this.charmap4,t):5==t.length?e(this.charmap5,t):void console.log("No more");if(this.inp.length<1)return new Set;if(this.inp.length<4&&void 0!=this.words)return t(this.inp);if(void 0!=this.words){let e=d.Z.findNext(this.words,this.inp,0,this.words.length);return e.letters}return console.log("ERROR: something went wrong."),new Set}},created(){const e=(e,t)=>{k.get(t).then((t=>{Object.assign(e,t.data.split("\n")),this.updateBoard()}))},t=(e,t)=>{k.get(t).then((t=>{Object.assign(e,t.data),this.updateBoard()}))};t(this.charmap1,"mm1.json"),t(this.charmap2,"mm2.json"),t(this.charmap3,"mm3.json"),e(this.wordsx,"unigram_words_gt5.txt");this.board=[[{key:void 0},{key:void 0},{key:void 0},{key:void 0},{key:void 0},{key:void 0},{key:void 0},{key:void 0},{key:void 0},{key:void 0}],[{key:void 0},{key:void 0},{key:void 0},{key:void 0},{key:void 0},{key:void 0},{key:void 0},{key:void 0},{key:void 0}],[{key:void 0},{key:void 0},{key:void 0},{key:void 0},{key:void 0},{key:void 0},{key:void 0},{key:void 0},{key:void 0}],[{key:void 0},{key:void 0},{key:void 0},{key:void 0},{key:void 0},{key:void 0}]],this.key_positions={q:{row:0,col:0},w:{row:0,col:1},e:{row:0,col:2},r:{row:0,col:3},t:{row:0,col:4},y:{row:0,col:5},u:{row:0,col:6},i:{row:0,col:7},o:{row:0,col:8},p:{row:0,col:9},a:{row:1,col:0},s:{row:1,col:1},d:{row:1,col:2},f:{row:1,col:3},g:{row:1,col:4},h:{row:1,col:5},j:{row:1,col:6},k:{row:1,col:7},l:{row:1,col:8},shift:{row:2,col:0},z:{row:2,col:1},x:{row:2,col:2},c:{row:2,col:3},v:{row:2,col:4},b:{row:2,col:5},n:{row:2,col:6},m:{row:2,col:7},backspace:{row:2,col:8},numeric:{row:3,col:0},comma:{row:3,col:1},emoji:{row:3,col:2},space:{row:3,col:3},dot:{row:3,col:4},enter:{row:3,col:5}},this.key_neighbors={q:["w","a"],w:["q","a","s","e"],e:["w","s","d","r"],r:["e","d","f","t"],t:["r","f","g","y"],y:["t","g","h","u"],u:["y","h","j","i"],i:["u","j","k","o"],o:["i","k","l","p"],p:["o","l"],a:["q","w","s"],s:["a","w","e","d","z"],d:["s","e","r","f","x"],f:["d","r","t","g","c"],g:["f","t","y","h","v"],h:["g","y","u","j","b"],j:["h","u","i","k","n"],k:["j","i","o","l","m"],l:["k","o","p"],shift:[],z:["s","x"],x:["z","d","c"],c:["x","f","v"],v:["c","g","b"],b:["v","h","n"],n:["b","j","m"],m:["n","k"],backspace:[],numeric:[],comma:[],emoji:[],space:[],dot:[],enter:[]},this.key_style={q:{class:"btn-row1",style:""},w:{class:"btn-row1",style:""},e:{class:"btn-row1",style:""},r:{class:"btn-row1",style:""},t:{class:"btn-row1",style:""},y:{class:"btn-row1",style:""},u:{class:"btn-row1",style:""},i:{class:"btn-row1",style:""},o:{class:"btn-row1",style:""},p:{class:"btn-row1",style:""},a:{class:"btn-row2",style:"margin-left: 10pt;"},s:{class:"btn-row2",style:""},d:{class:"btn-row2",style:""},f:{class:"btn-row2",style:""},g:{class:"btn-row2",style:""},h:{class:"btn-row2",style:""},j:{class:"btn-row2",style:""},k:{class:"btn-row2",style:""},l:{class:"btn-row2",style:"margin-right: 10pt;"},shift:{class:"btn-shift",style:""},z:{class:"btn-row3",style:""},x:{class:"btn-row3",style:""},c:{class:"btn-row3",style:""},v:{class:"btn-row3",style:""},b:{class:"btn-row3",style:""},n:{class:"btn-row3",style:""},m:{class:"btn-row3",style:""},backspace:{class:"btn-shift",style:""},numeric:{class:"btn-shift",style:""},comma:{class:"btn-row4",style:""},emoji:{class:"btn-row4",style:""},space:{class:"btn-space",style:""},dot:{class:"btn-row4",style:""},enter:{class:"btn-shift",style:""}},this.key_labels={q:"q",w:"w",e:"e",r:"r",t:"t",y:"y",u:"u",i:"i",o:"o",p:"p",a:"a",s:"s",d:"d",f:"f",g:"g",h:"h",j:"j",k:"k",l:"l",shift:"⇧",z:"z",x:"x",c:"c",v:"v",b:"b",n:"n",m:"m",backspace:"⌫",numeric:"",comma:",",emoji:"🙂",space:"_",dot:".",enter:"⏎"},this.key_actions={q:this.keyFunWraper(this.keyClicked),w:this.keyFunWraper(this.keyClicked),e:this.keyFunWraper(this.keyClicked),r:this.keyFunWraper(this.keyClicked),t:this.keyFunWraper(this.keyClicked),y:this.keyFunWraper(this.keyClicked),u:this.keyFunWraper(this.keyClicked),i:this.keyFunWraper(this.keyClicked),o:this.keyFunWraper(this.keyClicked),p:this.keyFunWraper(this.keyClicked),a:this.keyFunWraper(this.keyClicked),s:this.keyFunWraper(this.keyClicked),d:this.keyFunWraper(this.keyClicked),f:this.keyFunWraper(this.keyClicked),g:this.keyFunWraper(this.keyClicked),h:this.keyFunWraper(this.keyClicked),j:this.keyFunWraper(this.keyClicked),k:this.keyFunWraper(this.keyClicked),l:this.keyFunWraper(this.keyClicked),shift:this.keyFunWraper(this.shiftClicked),z:this.keyFunWraper(this.keyClicked),x:this.keyFunWraper(this.keyClicked),c:this.keyFunWraper(this.keyClicked),v:this.keyFunWraper(this.keyClicked),b:this.keyFunWraper(this.keyClicked),n:this.keyFunWraper(this.keyClicked),m:this.keyFunWraper(this.keyClicked),backspace:this.keyFunWraper(this.backspaceClicked),numeric:this.keyFunWraper(this.numClicked),comma:this.keyFunWraper(this.commaClicked),emoji:this.keyFunWraper(this.keyClicked),space:this.keyFunWraper(this.spaceClicked),dot:this.keyFunWraper(this.dotClicked),enter:this.keyFunWraper(this.enterClicked)},this.standard_keys=["shift","backspace","numeric","comma","emoji","space","dot","enter"]},mounted(){this.updateBoard()},methods:{original_leave:function(e){e.original_show=!1,clearTimeout(this.key_timeouts[e])},original_down:function(e){e.key!=e.original_key?this.key_timeouts[e]=setTimeout((()=>{e.original_show=!0}),500):"backspace"==e.key&&(this.key_timeouts[e]=setTimeout((()=>{this.key_timeouts[e]=setInterval((()=>{this.backspaceClicked(e)}),50)}),500))},original_up:function(e){e.original_show?e.original_action(Object.assign(Object.assign({},e),{label:e.original_label,key:e.original_key,action:e.original_action})):("backspace"==e.key&&clearTimeout(this.key_timeouts[e]),e.action(e))},original_mouseleave:function(e){if(this.$q.platform.is.mobile)return!1;this.original_leave(e)},original_mousedown:function(e){if(this.$q.platform.is.mobile)return!1;this.original_down(e)},original_mouseup:function(e){if(this.$q.platform.is.mobile)return!1;this.original_up(e)},original_touchstart:function(e){this.original_down(e)},original_touchend:function(e){this.original_up(e)},original_touchcancel:function(e){this.original_leave(e)},showNotSupported:function(){this.$q.notify({type:"info",timeout:100,message:"Not supported"})},shiftClicked:function(e){this.showNotSupported()},numClicked:function(e){this.showNotSupported()},spaceClicked:function(e){this.insertWord(this.inp)},dotClicked:function(e){this.insertWord(this.inp+".")},commaClicked:function(e){this.insertWord(this.inp+",")},enterClicked:function(e){this.insertWord(this.inp,"\n")},keyFunWraper:function(e){return t=>{e(t),this.$emit("keypressed",t)}},backspaceClicked:function(e){if(this.inp.length>0)this.inp=this.inp.substring(0,this.inp.length-1),this.updateBoard();else{" "!=this.text[this.text.length-1]&&"."!=this.text[this.text.length-1]&&","!=this.text[this.text.length-1]&&"\n"!=this.text[this.text.length-1]||(this.text=this.text.substring(0,this.text.length-1));let e=this.text.split(" "),t=e.length;this.text=t>1?e.slice(0,t-1).join(" ")+" ":"",this.inp=e[t-1]}},keyClicked:function(e){this.inp=this.inp+e.label,this.updateBoard()},insertWord:function(e,t=" "){this.text+=e+t,this.inp="",this.rightWord="",this.leftWord="",this.updateBoard()},updateBoard:function(){let e=(e,t)=>{for(let i in this.key_positions){let s=this.key_positions[i].row,o=this.key_positions[i].col;if(s==e&&o==t)return i}throw"ERROR: cannot find"},t=Array.from(this.lettersLeft).concat(this.standard_keys);this.lettersLeft.size<1?t=Object.keys(this.key_neighbors):1==this.lettersLeft.size&&console.log(JSON.stringify(t));let i=this.map_keys(t).reverse(),s=this.board.map((e=>[...e]));while(i.length>0){let e=i.pop(),t=e.neigh.map((t=>({row:this.key_positions[t].row,col:this.key_positions[t].col,original_key:t,original_label:this.key_labels[t],original_action:this.key_actions[t],key:e.key,label:e.label,neigh:this.key_neighbors[t],style:this.key_style[t].style,class:this.key_style[t].class,action:this.key_actions[t]})));if(console.log(e.key,e.original_key),void 0==s[e.row][e.col].key){let o=this.key_positions[e.original_key],n=this.key_positions[e.key],l=Math.sqrt(Math.pow(o.row-n.row,2)+Math.pow(o.col-n.col,2));if(l<2){let o=i.filter((t=>t.label==e.label&&Math.sqrt(Math.pow(e.row-t.row,2)+Math.pow(e.col-t.col,2))<=Math.sqrt(2))).length+[].concat(...s).filter((t=>t.label==e.label&&Math.sqrt(Math.pow(e.row-t.row,2)+Math.pow(e.col-t.col,2))<=Math.sqrt(2))).length;console.log("liczba na kolejce itp.: ",o),(o>1||e.label==e.original_label)&&(s[e.row][e.col]={row:e.row,col:e.col,original_key:e.original_key,original_label:e.original_label,original_action:e.original_action,key:e.key,label:e.label,style:e.style,class:e.class,action:e.action},console.log("dodaje sasiadow: ",t.reverse().map((e=>[e.key,e.original_key]))),i.unshift(...t.reverse()))}}}for(let h=0;h<s.length;h++)for(let t=0;t<s[h].length;t++){let i=s[h][t];if(void 0==i||void 0==i.key||void 0==i.label){let i=e(h,t);s[h][t]={row:h,col:t,original_key:i,original_label:this.key_labels[i],original_action:this.key_actions[i],key:i,label:this.key_labels[i],style:this.key_style[i].style,class:this.key_style[i].class,action:this.key_actions[i]}}}let o=["#ffe0de","#defffe","#e6ffde","#fffede","#f3e8ff","#fff4e8","#fae4ef","#f5ebc1","#f5aff7","#fcd666","#ffe6fa","#f7bea6","#fabaf5","#f4ccf8","#ccf5c5","#e5e4cb","#c02750","#f9166d","#e4f22c","#c68065","#40df8d","#68ce12","#9f7ab8","#945883","#8d9a11","#2af87e","#b58f6f","#5f35a3","#0ea4fb","#a8b289","#a17289","#fae4ef","#7497aa","#c5af37","#0cd666","#8f864a","#f7bea6","#9aba15","#647c58","#8c35b5","#45e49b","#c02750","#f9166d","#e4f22c","#c68065","#40df8d","#68ce12","#9f7ab8","#945883","#8d9a11","#2af87e","#b58f6f"],n=0,l=t.map((e=>{let t=[].concat(...s);return t.map((t=>t.key==e)).reduce(((e,t)=>e+t))})),r=l.map((e=>e>1&&o[n++])),a=this.zip(t,r);for(let h of s)for(let e of h)a[e.key]&&(e.style=`${e.style}; background-color: ${a[e.key]}`);Object.assign(this.boardView,s)},zip:function(e,t,i={}){return e.map(((e,s)=>{i[e]=t[s]})),i},reset:function(){this.inp="",this.text=""},map_keys:function(e){return e.filter((e=>Object.keys(this.key_neighbors).includes(e))).map((e=>({row:this.key_positions[e].row,col:this.key_positions[e].col,original_key:e,original_label:this.key_labels[e],original_action:this.key_actions[e],key:e,label:this.key_labels[e],neigh:this.key_neighbors[e],style:this.key_style[e].style,class:this.key_style[e].class,action:this.key_actions[e]})))},findSimilar:function(e){let t=this.wordsLeft;this.lettersLeft;t.size>0?this.leftWord=t[0]:this.leftWord="",t.size>1?this.rightWord=t[1]:this.rightWord=""}}});var u=i(2452),p=i(7518),f=i.n(p);y.render=c;const w=y;f()(y,"components",{QBtn:u.Z})}}]);