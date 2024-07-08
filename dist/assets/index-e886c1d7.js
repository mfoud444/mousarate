import{c as N,a as f,f as V,b as $,d as w,u as E,e as B,g as _,p as P,h as D,i as O,r as m,w as A,j as u,N as W,T as I,s as L,o as H,k as p,l as k,m as g,n as y,q as h,t as b,v as S,x as z,y as x,z as M,A as v,B as F,F as K}from"./index-14db3457.js";import{u as U,N as q,a as J}from"./Result-40702367.js";const X=N([N("@keyframes spin-rotate",`
 from {
 transform: rotate(0);
 }
 to {
 transform: rotate(360deg);
 }
 `),f("spin-container",`
 position: relative;
 `,[f("spin-body",`
 position: absolute;
 top: 50%;
 left: 50%;
 transform: translateX(-50%) translateY(-50%);
 `,[V()])]),f("spin-body",`
 display: inline-flex;
 align-items: center;
 justify-content: center;
 flex-direction: column;
 `),f("spin",`
 display: inline-flex;
 height: var(--n-size);
 width: var(--n-size);
 font-size: var(--n-size);
 color: var(--n-color);
 `,[$("rotate",`
 animation: spin-rotate 2s linear infinite;
 `)]),f("spin-description",`
 display: inline-block;
 font-size: var(--n-font-size);
 color: var(--n-text-color);
 transition: color .3s var(--n-bezier);
 margin-top: 8px;
 `),f("spin-content",`
 opacity: 1;
 transition: opacity .3s var(--n-bezier);
 pointer-events: all;
 `,[$("spinning",`
 user-select: none;
 -webkit-user-select: none;
 pointer-events: none;
 opacity: var(--n-opacity-spinning);
 `)])]),Y={small:20,medium:18,large:16},G=Object.assign(Object.assign({},B.props),{contentClass:String,contentStyle:[Object,String],description:String,stroke:String,size:{type:[String,Number],default:"medium"},show:{type:Boolean,default:!0},strokeWidth:Number,rotate:{type:Boolean,default:!0},spinning:{type:Boolean,validator:()=>!0,default:void 0},delay:Number}),Q=w({name:"Spin",props:G,setup(a){const{mergedClsPrefixRef:n,inlineThemeDisabled:t}=E(a),e=B("Spin","-spin",X,L,a,n),l=_(()=>{const{size:o}=a,{common:{cubicBezierEaseInOut:i},self:s}=e.value,{opacitySpinning:C,color:T,textColor:j}=s,R=typeof o=="number"?P(o):s[D("size",o)];return{"--n-bezier":i,"--n-opacity-spinning":C,"--n-size":R,"--n-color":T,"--n-text-color":j}}),r=t?O("spin",_(()=>{const{size:o}=a;return typeof o=="number"?String(o):o[0]}),l,a):void 0,d=U(a,["spinning","show"]),c=m(!1);return A(o=>{let i;if(d.value){const{delay:s}=a;if(s){i=window.setTimeout(()=>{c.value=!0},s),o(()=>{clearTimeout(i)});return}}c.value=d.value}),{mergedClsPrefix:n,active:c,mergedStrokeWidth:_(()=>{const{strokeWidth:o}=a;if(o!==void 0)return o;const{size:i}=a;return Y[typeof i=="number"?"medium":i]}),cssVars:t?void 0:l,themeClass:r==null?void 0:r.themeClass,onRender:r==null?void 0:r.onRender}},render(){var a,n;const{$slots:t,mergedClsPrefix:e,description:l}=this,r=t.icon&&this.rotate,d=(l||t.description)&&u("div",{class:`${e}-spin-description`},l||((a=t.description)===null||a===void 0?void 0:a.call(t))),c=t.icon?u("div",{class:[`${e}-spin-body`,this.themeClass]},u("div",{class:[`${e}-spin`,r&&`${e}-spin--rotate`],style:t.default?"":this.cssVars},t.icon()),d):u("div",{class:[`${e}-spin-body`,this.themeClass]},u(W,{clsPrefix:e,style:t.default?"":this.cssVars,stroke:this.stroke,"stroke-width":this.mergedStrokeWidth,class:`${e}-spin`}),d);return(n=this.onRender)===null||n===void 0||n.call(this),t.default?u("div",{class:[`${e}-spin-container`,this.themeClass],style:this.cssVars},u("div",{class:[`${e}-spin-content`,this.active&&`${e}-spin-content--spinning`,this.contentClass],style:this.contentStyle},t),u(I,{name:"fade-in-transition"},{default:()=>this.active?c:null})):c}}),Z={class:"flex flex-col items-center justify-center space-y-2 min-h-[330px]"},ee=w({__name:"Hero",setup(a){const n=m([]),t=m(!0),e=m(!1),l=m(!1),r=m("");async function d(){l.value=!1,r.value="";try{const i=await M({url:"get-rate"});if(!i||i.length===0)throw new Error("No data received");const s=JSON.parse(i[0][0].text);if(!s||s.length===0)throw new Error("No data in response");const C=[{city:"عدن",sar_buy:s[0].A,sar_sell:s[0].B,usd_buy:s[0].C,usd_sell:s[0].D},{city:"صنعاء",sar_buy:s[0].s1,sar_sell:s[0].s2,usd_buy:s[0].s3,usd_sell:s[0].s4},{city:"تعز",sar_buy:s[0].h1,sar_sell:s[0].h2,usd_buy:s[0].h3,usd_sell:s[0].h4},{city:"حضرموت",sar_buy:s[0].t1,sar_sell:s[0].t2,usd_buy:s[0].t3,usd_sell:s[0].t4}];n.value=C,t.value=!1,e.value=!1}catch(i){console.error("Error: ",i.message),r.value=i.message||"An error occurred while fetching data.",i.value=!0,t.value=!1,e.value=!1}}async function c(){e.value=!0,await d()}H(async()=>{await d()});const o=[{title:"مدينة",key:"city"},{title:"سعر الشراء",key:"sar_buy"},{title:"سعر البيع",key:"sar_sell"},{title:"سعر الشراء",key:"usd_buy"},{title:"سعر البيع",key:"usd_sell"}];return(i,s)=>(p(),k("div",Z,[t.value?(p(),g(y(Q),{key:0,size:"large"})):h("",!0),!t.value&&!l.value&&n.value.length!==0?(p(),g(y(z),{key:1,loading:e.value,class:"self-end",type:"primary",onClick:c},{default:b(()=>[S("تحديث")]),_:1},8,["loading"])):h("",!0),!t.value&&!l.value&&n.value.length>0?(p(),g(y(q),{key:2,dir:"rtl",columns:o,data:n.value},null,8,["data"])):h("",!0),!t.value&&(l.value||n.value.length===0)?(p(),g(y(J),{key:3,status:"error",title:"خطاء",description:r.value},{footer:b(()=>[x(y(z),{loading:e.value,type:"primary",onClick:c},{default:b(()=>[S("حاول مرة أخرى")]),_:1},8,["loading"])]),_:1},8,["description"])):h("",!0)]))}}),te={class:"bg-purple-200 dark:bg-rose-400 rounded-lg gap-y-8 place-content-center justify-items-center place-items-center w-full"},se={class:"grid px-8 md:grid-cols-2 gap-y-8 py-3 place-content-center justify-items-center place-items-center w-full"},ne=v("div",{class:"flex flex-col justify-around"},[v("div",{class:"font-bold text-base lg:text-3xl pb-2 gtext"}," أسعار الصرف في اليمن "),v("div",{class:"font-bold text-base"}," قم بتنزيل التطبيق للحصول على أحدث أسعار الصرف في اليمن. توفر لك هذه الخدمة الأسعار المحدثة من مختلف المدن. ")],-1),ae={class:"flex gap-8 justify-center"},ie=w({__name:"ApkLink",setup(a){const n=()=>{const t="/download/app.apk",e=document.createElement("a");e.href=t,e.download="your-app.apk",document.body.appendChild(e),e.click(),document.body.removeChild(e)};return(t,e)=>(p(),k("div",te,[v("div",se,[ne,v("div",ae,[x(y(z),{type:"primary",onClick:n},{default:b(()=>[S("تنزيل التطبيق")]),_:1})])])]))}}),oe={class:"container pb-1 pt-8 dark:bg-violet-950"},re={class:"relative flex min-h-[70vh] flex-col gap-4"},de=w({__name:"index",setup(a){const n=F(),t=_(()=>n.currentStep);return _(()=>n.currentPlants),(e,l)=>(p(),k("div",oe,[v("main",re,[t.value===null?(p(),k(K,{key:0},[x(ee),x(ie)],64)):h("",!0)])]))}});export{de as default};
