const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["../chunks/web.CohnrHEP.js","../chunks/device.CFvo2wwc.js","../chunks/preload-helper.D6kgxu3v.js","../chunks/entry.DIA2gAip.js","../chunks/scheduler.cMGevFK0.js"])))=>i.map(i=>d[i]);
import{h as Fe,e as De,f as Ze,i as Ue,r as Ae,g as Oe,j as je}from"../chunks/sign.3vAERsXi.js";import{r as Pe}from"../chunks/index.Bi08Y9hB.js";import{c as ze,C as Ne,r as We}from"../chunks/device.CFvo2wwc.js";import{s as Q,D as K,i as S,f as m,k as fe,Q as oe,e as H,t as we,a as T,c as I,b as _,d as ke,g as L,v as r,h,A as ue,K as Re,j as xe,n as Y,z as le,S as qe,F as Je,w as Ke,x as Ye,y as ve,B as be,q as k,r as x,m as Qe,G as Xe,u as et,o as tt,p as it}from"../chunks/scheduler.cMGevFK0.js";import{S as X,i as ee,g as Te,e as Le,t as B,a as F,o as rt,b as lt,c as P,d as z,m as N,f as W}from"../chunks/index.DSosqu5f.js";import{f as nt,b as at,c as st,a as ot}from"../chunks/ActionSheetReport.svelte_svelte_type_style_lang.DOuuCOSp.js";import{e as ye,u as ft,a as ut}from"../chunks/each.BUpLmwGX.js";import{w as ct,i as dt,g as pt}from"../chunks/entry.DIA2gAip.js";import{f as mt}from"../chunks/clickOutside.1DwxSaNp.js";import{e as G}from"../chunks/emitter.E5P-NQ8u.js";import{S as Z,n as ht,f as Ee,A as _t,d as $e}from"../chunks/store.CGvrHMmq.js";import{p as gt,n as Ct}from"../chunks/stores.DqM6WIWo.js";/* empty css                                                             *//* empty css                                                          */import"../chunks/ActionSheet.svelte_svelte_type_style_lang.3WPtczT5.js";import"../chunks/index.4BQPDaLN.js";/* empty css                                                   */import"../chunks/index.DKDTG-9z.js";/* empty css                                                            *//* empty css                                                   *//* empty css                                                   */import"../chunks/picker.DO1g6OCe.js";import{a as vt}from"../chunks/link_preview.DfKqbwsY.js";import"../chunks/map.hI-n5vJ5.js";import"../chunks/proj.DXH8zrwl.js";/* empty css                                                    */import"../chunks/ImageShaper.DEAJmI5j.js";import{M as bt}from"../chunks/Modal.CgbAA1XD.js";import{H as wt}from"../chunks/Header.DSKviwpU.js";import{_ as kt}from"../chunks/preload-helper.D6kgxu3v.js";import{F as xt}from"../chunks/FormattedModal.D3eCUMZ6.js";const yt=!1,Et="auto";ze();const $t=async({route:f,url:e})=>{if(console.warn("e.route.id on load",f.id),await Fe(e),e.pathname=="/")return Pe(302,"/viewer")},V1=Object.freeze(Object.defineProperty({__proto__:null,load:$t,prerender:Et,ssr:yt},Symbol.toStringTag,{value:"Module"}));function Me(f,e,i){const t=f.slice();return t[5]=e[i],t[7]=i,t}function Se(f,e){let i,t,l,n=e[5].message+"",u,o,a,s=(e[5].buttonText||Ce)+"",c,d,v,b,y,E,V=Y,g,p,w;return{key:f,first:null,c(){i=H("div"),t=H("div"),l=H("div"),u=we(n),o=T(),a=H("div"),c=we(s),v=T(),this.h()},l(C){i=I(C,"DIV",{class:!0,style:!0});var $=_(i);t=I($,"DIV",{class:!0,style:!0});var M=_(t);l=I(M,"DIV",{class:!0});var U=_(l);u=ke(U,n),U.forEach(m),o=L(M),a=I(M,"DIV",{class:!0});var D=_(a);c=ke(D,s),D.forEach(m),M.forEach(m),v=L($),$.forEach(m),this.h()},h(){r(l,"class","text-white flex-grow"),r(a,"class","text-primary-300"),r(t,"class","flex bg-black p-[1.125rem]"),r(t,"style",d=`transform: scale(${1-.05*e[7]})`),r(i,"class","fixed bottom-24 w-full p-4"),r(i,"style",b=`z-index: ${80-e[7]}; transform: translateY(${-.3*e[7]}rem);`),this.first=i},m(C,$){S(C,i,$),h(i,t),h(t,l),h(l,u),h(t,o),h(t,a),h(a,c),h(i,v),g=!0,p||(w=ue(a,"click",function(){Re(e[5].callback)&&e[5].callback.apply(this,arguments)}),p=!0)},p(C,$){e=C,(!g||$&1)&&n!==(n=e[5].message+"")&&xe(u,n),(!g||$&1)&&s!==(s=(e[5].buttonText||Ce)+"")&&xe(c,s),(!g||$&1&&d!==(d=`transform: scale(${1-.05*e[7]})`))&&r(t,"style",d),(!g||$&1&&b!==(b=`z-index: ${80-e[7]}; transform: translateY(${-.3*e[7]}rem);`))&&r(i,"style",b)},r(){E=i.getBoundingClientRect()},f(){nt(i),V(),at(i,E)},a(){V(),V=st(i,E,ot,{})},i(C){g||(y&&y.end(1),g=!0)},o(C){C&&(y=rt(i,mt,{duration:300})),g=!1},d(C){C&&m(i),C&&y&&y.end(),p=!1,w()}}}function Mt(f){let e=[],i=new Map,t,l,n=ye(f[0]);const u=o=>o[5].uuid;for(let o=0;o<n.length;o+=1){let a=Me(f,n,o),s=u(a);i.set(s,e[o]=Se(s,a))}return{c(){for(let o=0;o<e.length;o+=1)e[o].c();t=K()},l(o){for(let a=0;a<e.length;a+=1)e[a].l(o);t=K()},m(o,a){for(let s=0;s<e.length;s+=1)e[s]&&e[s].m(o,a);S(o,t,a),l=!0},p(o,[a]){if(a&1){n=ye(o[0]),Te();for(let s=0;s<e.length;s+=1)e[s].r();e=ft(e,a,u,1,o,n,i,t.parentNode,ut,Se,t,Me);for(let s=0;s<e.length;s+=1)e[s].a();Le()}},i(o){if(!l){for(let a=0;a<n.length;a+=1)B(e[a]);l=!0}},o(o){for(let a=0;a<e.length;a+=1)F(e[a]);l=!1},d(o){o&&m(t);for(let a=0;a<e.length;a+=1)e[a].d(o)}}}const St=5e3,Vt=!1,Ce="닫기";function Ht(f,e,i){let t;const l=()=>{clearTimeout(u),oe(n,t=t.slice(1),t)},n=ct([]);fe(f,n,a=>i(0,t=a));let u;G.on("pushSnackbar",o);function o(a){if(t.some(c=>c.uuid===a.uuid))return;const s={uuid:a.uuid||crypto.randomUUID(),message:a.message,urgent:a.urgent,keep:a.keep||Vt,duration:a.duration||St,buttonText:a.buttonText||Ce,callback:()=>{l();try{a.callback()}catch{}}};if(a.urgent){clearTimeout(u),oe(n,t=[s,...t],t);return}oe(n,t=[...t,s],t)}return f.$$.update=()=>{if(f.$$.dirty&5&&t.length>0){const{duration:a,keep:s}=t[0];clearTimeout(u),s||i(2,u=setTimeout(()=>{oe(n,t=t.slice(1),t)},a))}},[t,n,u]}class It extends X{constructor(e){super(),ee(this,e,Ht,Mt,Q,{})}}function Ge(){const f=window.innerWidth<=Z.MobileS?Z.MobileS:window.innerWidth<=Z.MobileM?Z.MobileM:window.innerWidth<=Z.MobileL?Z.MobileL:window.innerWidth<=Z.Tablet?Z.Tablet:window.innerWidth<=Z.Laptop?Z.Laptop:window.innerWidth<=Z.LaptopL?Z.LaptopL:Z.FourK;ht.set(f)}window.onresize=Ge;const Ut="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'?%3e%3csvg%20width='31px'%20height='44px'%20viewBox='0%200%2031%2044'%20version='1.1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%3e%3c!--%20Generator:%20Sketch%2061%20(89581)%20-%20https://sketch.com%20--%3e%3ctitle%3eLeft%20Black%20Logo%20Medium%3c/title%3e%3cdesc%3eCreated%20with%20Sketch.%3c/desc%3e%3cg%20id='Left-Black-Logo-Medium'%20stroke='none'%20stroke-width='1'%20fill='none'%20fill-rule='evenodd'%3e%3crect%20id='Rectangle'%20fill='none'%20x='0'%20y='0'%20width='31'%20height='44'%3e%3c/rect%3e%3cpath%20d='M15.7099491,14.8846154%20C16.5675461,14.8846154%2017.642562,14.3048315%2018.28274,13.5317864%20C18.8625238,12.8312142%2019.2852829,11.852829%2019.2852829,10.8744437%20C19.2852829,10.7415766%2019.2732041,10.6087095%2019.2490464,10.5%20C18.2948188,10.5362365%2017.1473299,11.140178%2016.4588366,11.9494596%20C15.9152893,12.56548%2015.4200572,13.5317864%2015.4200572,14.5222505%20C15.4200572,14.6671964%2015.4442149,14.8121424%2015.4562937,14.8604577%20C15.5166879,14.8725366%2015.6133185,14.8846154%2015.7099491,14.8846154%20Z%20M12.6902416,29.5%20C13.8618881,29.5%2014.3812778,28.714876%2015.8428163,28.714876%20C17.3285124,28.714876%2017.6546408,29.4758423%2018.9591545,29.4758423%20C20.2395105,29.4758423%2021.0971074,28.292117%2021.9063891,27.1325493%20C22.8123013,25.8038779%2023.1867451,24.4993643%2023.2109027,24.4389701%20C23.1263509,24.4148125%2020.6743484,23.4122695%2020.6743484,20.5979021%20C20.6743484,18.1579784%2022.6069612,17.0588048%2022.7156707,16.974253%20C21.4353147,15.1382708%2019.490623,15.0899555%2018.9591545,15.0899555%20C17.5217737,15.0899555%2016.3501271,15.9596313%2015.6133185,15.9596313%20C14.8161157,15.9596313%2013.7652575,15.1382708%2012.521138,15.1382708%20C10.1536872,15.1382708%207.75,17.0950413%207.75,20.7911634%20C7.75,23.0861411%208.64383344,25.513986%209.74300699,27.0842339%20C10.6851558,28.4129053%2011.5065162,29.5%2012.6902416,29.5%20Z'%20id=''%20fill='%23000000'%20fill-rule='nonzero'%3e%3c/path%3e%3c/g%3e%3c/svg%3e";function Tt(f){let e,i=`<img src="${Ut}" alt="Apple Logo"/> <p class="absolute inset-0 flex items-center justify-center font-medium text-sm text-black tracking-[-0.5%]">Apple로 계속하기</p>`,t,l;return{c(){e=H("button"),e.innerHTML=i,this.h()},l(n){e=I(n,"BUTTON",{class:!0,"data-svelte-h":!0}),le(e)!=="svelte-1u6ehon"&&(e.innerHTML=i),this.h()},h(){r(e,"class","relative w-full bg-white px-2.5 border border-[#4D4D4D] rounded-[200px] ")},m(n,u){S(n,e,u),t||(l=ue(e,"click",f[7]),t=!0)},p:Y,d(n){n&&m(e),t=!1,l()}}}function Lt(f){let e,i,t="로그인이 필요합니다",l,n,u,o='<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none"><mask id="mask0_1580_11030" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="0" y="0" width="20" height="20"><path d="M20 0H0V20H20V0Z" fill="white"></path></mask><g mask="url(#mask0_1580_11030)"><path d="M19.6 10.2271C19.6 9.51804 19.5364 8.83624 19.4182 8.18164H10V12.0498H15.3818C15.15 13.2998 14.4455 14.3589 13.3864 15.068V17.5771H16.6182C18.5091 15.8362 19.6 13.2725 19.6 10.2271Z" fill="#4285F4"></path><path d="M9.99988 20.0004C12.6999 20.0004 14.9635 19.1049 16.6181 17.5777L13.3863 15.0686C12.4908 15.6686 11.3453 16.0231 9.99988 16.0231C7.39528 16.0231 5.19078 14.264 4.40438 11.9004H1.06348V14.4913C2.70898 17.7595 6.09078 20.0004 9.99988 20.0004Z" fill="#34A853"></path><path d="M4.4045 11.8997C4.2045 11.2997 4.0909 10.6588 4.0909 9.99969C4.0909 9.34059 4.2045 8.69969 4.4045 8.09969V5.50879H1.0636C0.386401 6.85879 0 8.38609 0 9.99969C0 11.6133 0.386401 13.1406 1.0636 14.4906L4.4045 11.8997Z" fill="#FBBC04"></path><path d="M9.99988 3.9773C11.4681 3.9773 12.7862 4.4818 13.8226 5.4727L16.6908 2.6045C14.959 0.9909 12.6953 0 9.99988 0C6.09078 0 2.70898 2.2409 1.06348 5.5091L4.40438 8.1C5.19078 5.7364 7.39528 3.9773 9.99988 3.9773Z" fill="#E94235"></path></g></svg> <p class="absolute inset-0 flex items-center justify-center font-medium text-[#E3E3E3] text-sm tracking-[-0.5%]">Google로 계속하기</p>',a,s,c,d,v,b,y="로그인 상태 유지",E,V,g='<p class="text-xs text-[#757D86] text-start">계속 진행하면 서비스 약관 및 개인정보 처리방침에 동의하게 됩니다</p>',p,w,C=f[1]==="ios"&&Tt(f);return{c(){e=H("div"),i=H("h2"),i.textContent=t,l=T(),n=H("div"),u=H("button"),u.innerHTML=o,a=T(),C&&C.c(),s=T(),c=H("div"),d=H("input"),v=T(),b=H("label"),b.textContent=y,E=T(),V=H("div"),V.innerHTML=g,this.h()},l($){e=I($,"DIV",{class:!0});var M=_(e);i=I(M,"H2",{class:!0,"data-svelte-h":!0}),le(i)!=="svelte-t6adr0"&&(i.textContent=t),l=L(M),n=I(M,"DIV",{class:!0});var U=_(n);u=I(U,"BUTTON",{class:!0,"data-svelte-h":!0}),le(u)!=="svelte-29akwj"&&(u.innerHTML=o),a=L(U),C&&C.l(U),U.forEach(m),s=L(M),c=I(M,"DIV",{class:!0});var D=_(c);d=I(D,"INPUT",{class:!0,type:!0,id:!0,name:!0}),v=L(D),b=I(D,"LABEL",{for:!0,class:!0,"data-svelte-h":!0}),le(b)!=="svelte-379dsu"&&(b.textContent=y),D.forEach(m),E=L(M),V=I(M,"DIV",{class:!0,"data-svelte-h":!0}),le(V)!=="svelte-6p88iz"&&(V.innerHTML=g),M.forEach(m),this.h()},h(){r(i,"class","text-center text-xl font-semibold text-white mt-7"),r(u,"class","relative w-full bg-[#131314] px-4 py-3 border border-[#8E918F] rounded-[3.75rem] "),r(n,"class","mt-5 flex flex-col gap-3"),r(d,"class","w-[1.125rem] h-[1.125rem] bg-transparent"),r(d,"type","checkbox"),r(d,"id","save-sign-state"),r(d,"name","save-sign-state"),d.__value="save-sign-state",qe(d,d.__value),r(b,"for","save-sign-state"),r(b,"class","text-sm text-[#757D86] leading-4"),r(c,"class","mt-[19px] self-start flex gap-2"),r(V,"class","mt-2.5"),r(e,"class","w-full")},m($,M){S($,e,M),h(e,i),h(e,l),h(e,n),h(n,u),h(n,a),C&&C.m(n,null),h(e,s),h(e,c),h(c,d),d.checked=f[0],h(c,v),h(c,b),h(e,E),h(e,V),p||(w=[ue(u,"click",f[6]),ue(d,"change",f[8])],p=!0)},p($,[M]){$[1]==="ios"&&C.p($,M),M&1&&(d.checked=$[0])},i:Y,o:Y,d($){$&&m(e),C&&C.d(),p=!1,Je(w)}}}function Gt(f,e,i){let{hide:t}=e,{invalidateUrl:l=void 0}=e,{callback:n=void 0}=e;const u=Ne.getPlatform();let o=!1;async function a(v){if(v==="google")await De(o);else if(v==="apple"){if(u!=="ios")return;await Ze(o)}Ue()&&(l&&(dt(l),i(3,l=void 0)),n&&(n(),i(4,n=void 0)),t())}const s=()=>a("google"),c=()=>a("apple");function d(){o=this.checked,i(0,o)}return f.$$set=v=>{"hide"in v&&i(5,t=v.hide),"invalidateUrl"in v&&i(3,l=v.invalidateUrl),"callback"in v&&i(4,n=v.callback)},[o,u,a,l,n,t,s,c,d]}class Be extends X{constructor(e){super(),ee(this,e,Gt,Lt,Q,{hide:5,invalidateUrl:3,callback:4})}}function Bt(f){let e,i;return e=new Be({props:{hide:f[3],callback:f[2]}}),{c(){P(e.$$.fragment)},l(t){z(e.$$.fragment,t)},m(t,l){N(e,t,l),i=!0},p(t,l){const n={};l&4&&(n.callback=t[2]),e.$set(n)},i(t){i||(B(e.$$.fragment,t),i=!0)},o(t){F(e.$$.fragment,t),i=!1},d(t){W(e,t)}}}function Ft(f){let e,i,t;function l(u){f[5](u)}let n={removable:f[1],$$slots:{default:[Bt]},$$scope:{ctx:f}};return f[0]!==void 0&&(n.modalVisible=f[0]),e=new bt({props:n}),Ke.push(()=>lt(e,"modalVisible",l)),{c(){P(e.$$.fragment)},l(u){z(e.$$.fragment,u)},m(u,o){N(e,u,o),t=!0},p(u,[o]){const a={};o&2&&(a.removable=u[1]),o&132&&(a.$$scope={dirty:o,ctx:u}),!i&&o&1&&(i=!0,a.modalVisible=u[0],Ye(()=>i=!1)),e.$set(a)},i(u){t||(B(e.$$.fragment,u),t=!0)},o(u){F(e.$$.fragment,u),t=!1},d(u){W(e,u)}}}function Dt(f,e,i){let{global:t=!1}=e,{modalVisible:l=!1}=e,{removable:n=!0}=e,u;ve(()=>{t&&(G.on("showSignInModal",o),G.on("hideSignInModal",a))}),be(()=>{t&&(G.off("showSignInModal",o),G.off("hideSignInModal",a))});const o=c=>{i(0,l=!0),i(1,n=(c==null?void 0:c.removable)??!0),i(2,u=c==null?void 0:c.callback)},a=()=>{i(0,l=!1),i(1,n=!0)};function s(c){l=c,i(0,l)}return f.$$set=c=>{"global"in c&&i(4,t=c.global),"modalVisible"in c&&i(0,l=c.modalVisible),"removable"in c&&i(1,n=c.removable)},[l,n,u,a,t,s]}class Zt extends X{constructor(e){super(),ee(this,e,Dt,Ft,Q,{global:4,modalVisible:0,removable:1})}}function At(f){let e,i,t,l,n,u,o,a,s,c,d,v,b,y,E,V,g,p,w,C,$,M,U,D,te,A,ne,ie,O,ae,re,se;return{c(){e=k("svg"),i=k("g"),t=k("path"),l=k("path"),n=k("path"),u=k("path"),o=k("path"),a=k("path"),s=k("path"),c=k("defs"),d=k("linearGradient"),v=k("stop"),b=k("stop"),y=k("linearGradient"),E=k("stop"),V=k("stop"),g=k("linearGradient"),p=k("stop"),w=k("stop"),C=k("linearGradient"),$=k("stop"),M=k("stop"),U=k("linearGradient"),D=k("stop"),te=k("stop"),A=k("linearGradient"),ne=k("stop"),ie=k("stop"),O=k("linearGradient"),ae=k("stop"),re=k("stop"),this.h()},l(j){e=x(j,"svg",{width:!0,height:!0,viewBox:!0,fill:!0,xmlns:!0});var R=_(e);i=x(R,"g",{id:!0});var q=_(i);t=x(q,"path",{d:!0,fill:!0}),_(t).forEach(m),l=x(q,"path",{d:!0,fill:!0}),_(l).forEach(m),n=x(q,"path",{d:!0,fill:!0}),_(n).forEach(m),u=x(q,"path",{d:!0,fill:!0}),_(u).forEach(m),o=x(q,"path",{d:!0,fill:!0}),_(o).forEach(m),a=x(q,"path",{d:!0,fill:!0}),_(a).forEach(m),s=x(q,"path",{d:!0,fill:!0}),_(s).forEach(m),q.forEach(m),c=x(R,"defs",{});var J=_(c);d=x(J,"linearGradient",{id:!0,x1:!0,y1:!0,x2:!0,y2:!0,gradientUnits:!0});var ce=_(d);v=x(ce,"stop",{"stop-color":!0}),_(v).forEach(m),b=x(ce,"stop",{offset:!0,"stop-color":!0}),_(b).forEach(m),ce.forEach(m),y=x(J,"linearGradient",{id:!0,x1:!0,y1:!0,x2:!0,y2:!0,gradientUnits:!0});var de=_(y);E=x(de,"stop",{"stop-color":!0}),_(E).forEach(m),V=x(de,"stop",{offset:!0,"stop-color":!0}),_(V).forEach(m),de.forEach(m),g=x(J,"linearGradient",{id:!0,x1:!0,y1:!0,x2:!0,y2:!0,gradientUnits:!0});var pe=_(g);p=x(pe,"stop",{"stop-color":!0}),_(p).forEach(m),w=x(pe,"stop",{offset:!0,"stop-color":!0}),_(w).forEach(m),pe.forEach(m),C=x(J,"linearGradient",{id:!0,x1:!0,y1:!0,x2:!0,y2:!0,gradientUnits:!0});var me=_(C);$=x(me,"stop",{"stop-color":!0}),_($).forEach(m),M=x(me,"stop",{offset:!0,"stop-color":!0}),_(M).forEach(m),me.forEach(m),U=x(J,"linearGradient",{id:!0,x1:!0,y1:!0,x2:!0,y2:!0,gradientUnits:!0});var he=_(U);D=x(he,"stop",{"stop-color":!0}),_(D).forEach(m),te=x(he,"stop",{offset:!0,"stop-color":!0}),_(te).forEach(m),he.forEach(m),A=x(J,"linearGradient",{id:!0,x1:!0,y1:!0,x2:!0,y2:!0,gradientUnits:!0});var _e=_(A);ne=x(_e,"stop",{"stop-color":!0}),_(ne).forEach(m),ie=x(_e,"stop",{offset:!0,"stop-color":!0}),_(ie).forEach(m),_e.forEach(m),O=x(J,"linearGradient",{id:!0,x1:!0,y1:!0,x2:!0,y2:!0,gradientUnits:!0});var ge=_(O);ae=x(ge,"stop",{"stop-color":!0}),_(ae).forEach(m),re=x(ge,"stop",{offset:!0,"stop-color":!0}),_(re).forEach(m),ge.forEach(m),J.forEach(m),R.forEach(m),this.h()},h(){r(t,"d","M0.650879 19.7018V0H7.86589C9.26399 0 10.4216 0.23088 11.3387 0.692641C12.2558 1.14799 12.942 1.76688 13.3974 2.5493C13.8527 3.32532 14.0804 4.20074 14.0804 5.17556C14.0804 5.99647 13.9297 6.68911 13.6283 7.25349C13.3268 7.81145 12.9228 8.26038 12.4161 8.60029C11.9159 8.93378 11.3644 9.17749 10.7615 9.33141V9.52381C11.4157 9.55588 12.0538 9.76752 12.6759 10.1587C13.3044 10.5435 13.8239 11.0919 14.2343 11.8038C14.6448 12.5156 14.85 13.3814 14.85 14.4012C14.85 15.408 14.6127 16.3123 14.1381 17.114C13.67 17.9093 12.9453 18.541 11.964 19.0091C10.9828 19.4709 9.72896 19.7018 8.20259 19.7018H0.650879ZM3.62346 17.1525H7.91399C9.33775 17.1525 10.3575 16.8767 10.9731 16.3252C11.5888 15.7736 11.8967 15.0842 11.8967 14.2569C11.8967 13.6348 11.7395 13.064 11.4253 12.5445C11.111 12.025 10.6621 11.6114 10.0785 11.3035C9.50129 10.9957 8.81506 10.8418 8.01981 10.8418H3.62346V17.1525ZM3.62346 8.52333H7.60615C8.27313 8.52333 8.87278 8.39506 9.40509 8.13853C9.94381 7.88199 10.3703 7.52285 10.6845 7.06109C11.0052 6.59291 11.1655 6.04137 11.1655 5.40645C11.1655 4.59195 10.8802 3.90893 10.3094 3.35738C9.73858 2.80584 8.86316 2.53006 7.68311 2.53006H3.62346V8.52333Z"),r(t,"fill","url(#paint0_linear_1434_17952)"),r(l,"d","M21.0212 0V19.7018H18.1449V0H21.0212Z"),r(l,"fill","url(#paint1_linear_1434_17952)"),r(n,"d","M34.2512 13.5738V4.92545H37.1372V19.7018H34.3089V17.1429H34.155C33.8151 17.9317 33.2699 18.5891 32.5196 19.115C31.7756 19.6344 30.8489 19.8942 29.7394 19.8942C28.7902 19.8942 27.9501 19.6857 27.2189 19.2689C26.4942 18.8456 25.9234 18.2203 25.5066 17.393C25.0961 16.5657 24.8909 15.5427 24.8909 14.3242V4.92545H27.7673V13.9779C27.7673 14.9848 28.0463 15.7864 28.6042 16.3829C29.1622 16.9793 29.8869 17.2775 30.7783 17.2775C31.3171 17.2775 31.8526 17.1429 32.3849 16.8735C32.9236 16.6041 33.3693 16.1969 33.7221 15.6518C34.0812 15.1066 34.2576 14.414 34.2512 13.5738Z"),r(n,"fill","url(#paint2_linear_1434_17952)"),r(u,"d","M47.3704 20C45.9146 20 44.6608 19.689 43.609 19.0669C42.5637 18.4384 41.7556 17.5565 41.1848 16.4214C40.6204 15.2798 40.3382 13.9426 40.3382 12.4098C40.3382 10.8963 40.6204 9.56229 41.1848 8.40789C41.7556 7.25349 42.5508 6.35241 43.5705 5.70467C44.5967 5.05692 45.796 4.73305 47.1684 4.73305C48.0022 4.73305 48.8102 4.87093 49.5927 5.14671C50.3751 5.42248 51.0774 5.85538 51.6995 6.44541C52.3215 7.03543 52.8122 7.80183 53.1713 8.74459C53.5305 9.68094 53.71 10.8193 53.71 12.1597V13.1794H41.964V11.0245H50.8914C50.8914 10.2678 50.7375 9.59756 50.4296 9.01395C50.1218 8.42392 49.6889 7.95895 49.1309 7.61905C48.5794 7.27914 47.9316 7.10919 47.1877 7.10919C46.3796 7.10919 45.6741 7.308 45.0713 7.70563C44.4748 8.09684 44.0131 8.60991 43.686 9.24483C43.3653 9.87334 43.205 10.5564 43.205 11.2939V12.9774C43.205 13.965 43.3781 14.8052 43.7245 15.4978C44.0772 16.1905 44.5678 16.7196 45.1963 17.0851C45.8248 17.4443 46.5592 17.6239 47.3993 17.6239C47.9444 17.6239 48.4415 17.5469 48.8904 17.393C49.3393 17.2326 49.7274 16.9954 50.0544 16.6811C50.3815 16.3668 50.6316 15.9788 50.8048 15.5171L53.5273 16.0077C53.3092 16.8094 52.918 17.5116 52.3536 18.1145C51.7957 18.7109 51.0934 19.1759 50.2468 19.5094C49.4067 19.8365 48.4479 20 47.3704 20Z"),r(u,"fill","url(#paint3_linear_1434_17952)"),r(o,"d","M62.433 19.9904C61.2401 19.9904 60.1755 19.6857 59.2391 19.0765C58.3092 18.4608 57.5781 17.5854 57.0458 16.4502C56.5199 15.3086 56.2569 13.9394 56.2569 12.3425C56.2569 10.7456 56.5231 9.37951 57.0554 8.24435C57.5941 7.10919 58.3316 6.24018 59.268 5.63733C60.2043 5.03447 61.2658 4.73305 62.4522 4.73305C63.3693 4.73305 64.1069 4.88697 64.6648 5.19481C65.2292 5.49623 65.6653 5.84897 65.9731 6.25301C66.2874 6.65705 66.5311 7.01299 66.7043 7.32083H66.8774V0H69.7538V19.7018H66.9448V17.4026H66.7043C66.5311 17.7169 66.281 18.076 65.9539 18.48C65.6332 18.8841 65.1907 19.2368 64.6263 19.5382C64.062 19.8397 63.3308 19.9904 62.433 19.9904ZM63.0679 17.5373C63.8952 17.5373 64.5943 17.3192 65.1651 16.8831C65.7423 16.4406 66.1784 15.8281 66.4734 15.0457C66.7748 14.2633 66.9255 13.3526 66.9255 12.3136C66.9255 11.2875 66.778 10.3896 66.483 9.62001C66.188 8.85041 65.7551 8.25076 65.1843 7.82107C64.6135 7.39137 63.9081 7.17653 63.0679 7.17653C62.2021 7.17653 61.4806 7.40099 60.9034 7.84993C60.3262 8.29886 59.8901 8.91134 59.5951 9.68735C59.3065 10.4634 59.1622 11.3388 59.1622 12.3136C59.1622 13.3013 59.3097 14.1895 59.6047 14.9784C59.8997 15.7672 60.3358 16.3925 60.913 16.8543C61.4966 17.3096 62.2149 17.5373 63.0679 17.5373Z"),r(o,"fill","url(#paint4_linear_1434_17952)"),r(a,"d","M80.0833 20C78.698 20 77.4891 19.6825 76.4565 19.0476C75.424 18.4127 74.6223 17.5245 74.0516 16.3829C73.4808 15.2413 73.1954 13.9073 73.1954 12.381C73.1954 10.8482 73.4808 9.50778 74.0516 8.35979C74.6223 7.2118 75.424 6.32035 76.4565 5.68543C77.4891 5.05051 78.698 4.73305 80.0833 4.73305C81.4686 4.73305 82.6775 5.05051 83.71 5.68543C84.7426 6.32035 85.5443 7.2118 86.115 8.35979C86.6858 9.50778 86.9712 10.8482 86.9712 12.381C86.9712 13.9073 86.6858 15.2413 86.115 16.3829C85.5443 17.5245 84.7426 18.4127 83.71 19.0476C82.6775 19.6825 81.4686 20 80.0833 20ZM80.0929 17.5854C80.9908 17.5854 81.7347 17.3481 82.3248 16.8735C82.9148 16.3989 83.3509 15.7672 83.6331 14.9784C83.9217 14.1895 84.066 13.3205 84.066 12.3713C84.066 11.4286 83.9217 10.5628 83.6331 9.77393C83.3509 8.97868 82.9148 8.34055 82.3248 7.85955C81.7347 7.37855 80.9908 7.13805 80.0929 7.13805C79.1886 7.13805 78.4383 7.37855 77.8418 7.85955C77.2518 8.34055 76.8125 8.97868 76.5239 9.77393C76.2417 10.5628 76.1006 11.4286 76.1006 12.3713C76.1006 13.3205 76.2417 14.1895 76.5239 14.9784C76.8125 15.7672 77.2518 16.3989 77.8418 16.8735C78.4383 17.3481 79.1886 17.5854 80.0929 17.5854Z"),r(a,"fill","url(#paint5_linear_1434_17952)"),r(s,"d","M97.0794 4.92545V7.23425H89.0083V4.92545H97.0794ZM91.1728 1.38528H94.0491V15.3632C94.0491 15.9211 94.1325 16.3412 94.2993 16.6234C94.466 16.8992 94.6808 17.0883 94.9438 17.191C95.2132 17.2872 95.505 17.3353 95.8192 17.3353C96.0501 17.3353 96.2521 17.3192 96.4253 17.2872C96.5984 17.2551 96.7331 17.2294 96.8293 17.2102L97.3488 19.5863C97.1821 19.6505 96.9448 19.7146 96.6369 19.7787C96.3291 19.8493 95.9443 19.8878 95.4825 19.8942C94.7257 19.907 94.0203 19.7723 93.3661 19.4901C92.712 19.208 92.1829 18.7718 91.7788 18.1818C91.3748 17.5918 91.1728 16.851 91.1728 15.9596V1.38528Z"),r(s,"fill","url(#paint6_linear_1434_17952)"),r(i,"id","Bluedot"),r(v,"stop-color","#0066FF"),r(b,"offset","0.915"),r(b,"stop-color","#00ECB3"),r(d,"id","paint0_linear_1434_17952"),r(d,"x1","102.14"),r(d,"y1","19.5827"),r(d,"x2","76.5377"),r(d,"y2","-91.812"),r(d,"gradientUnits","userSpaceOnUse"),r(E,"stop-color","#0066FF"),r(V,"offset","0.915"),r(V,"stop-color","#00ECB3"),r(y,"id","paint1_linear_1434_17952"),r(y,"x1","102.14"),r(y,"y1","19.5827"),r(y,"x2","76.5377"),r(y,"y2","-91.812"),r(y,"gradientUnits","userSpaceOnUse"),r(p,"stop-color","#0066FF"),r(w,"offset","0.915"),r(w,"stop-color","#00ECB3"),r(g,"id","paint2_linear_1434_17952"),r(g,"x1","102.14"),r(g,"y1","19.5827"),r(g,"x2","76.5377"),r(g,"y2","-91.812"),r(g,"gradientUnits","userSpaceOnUse"),r($,"stop-color","#0066FF"),r(M,"offset","0.915"),r(M,"stop-color","#00ECB3"),r(C,"id","paint3_linear_1434_17952"),r(C,"x1","102.14"),r(C,"y1","19.5827"),r(C,"x2","76.5377"),r(C,"y2","-91.812"),r(C,"gradientUnits","userSpaceOnUse"),r(D,"stop-color","#0066FF"),r(te,"offset","0.915"),r(te,"stop-color","#00ECB3"),r(U,"id","paint4_linear_1434_17952"),r(U,"x1","102.14"),r(U,"y1","19.5827"),r(U,"x2","76.5377"),r(U,"y2","-91.812"),r(U,"gradientUnits","userSpaceOnUse"),r(ne,"stop-color","#0066FF"),r(ie,"offset","0.915"),r(ie,"stop-color","#00ECB3"),r(A,"id","paint5_linear_1434_17952"),r(A,"x1","102.14"),r(A,"y1","19.5827"),r(A,"x2","76.5377"),r(A,"y2","-91.812"),r(A,"gradientUnits","userSpaceOnUse"),r(ae,"stop-color","#0066FF"),r(re,"offset","0.915"),r(re,"stop-color","#00ECB3"),r(O,"id","paint6_linear_1434_17952"),r(O,"x1","102.14"),r(O,"y1","19.5827"),r(O,"x2","76.5377"),r(O,"y2","-91.812"),r(O,"gradientUnits","userSpaceOnUse"),r(e,"width",f[0]),r(e,"height",f[1]),r(e,"viewBox",se=`0 0 ${f[0]} ${f[1]}`),r(e,"fill","none"),r(e,"xmlns","http://www.w3.org/2000/svg")},m(j,R){S(j,e,R),h(e,i),h(i,t),h(i,l),h(i,n),h(i,u),h(i,o),h(i,a),h(i,s),h(e,c),h(c,d),h(d,v),h(d,b),h(c,y),h(y,E),h(y,V),h(c,g),h(g,p),h(g,w),h(c,C),h(C,$),h(C,M),h(c,U),h(U,D),h(U,te),h(c,A),h(A,ne),h(A,ie),h(c,O),h(O,ae),h(O,re)},p(j,[R]){R&1&&r(e,"width",j[0]),R&2&&r(e,"height",j[1]),R&3&&se!==(se=`0 0 ${j[0]} ${j[1]}`)&&r(e,"viewBox",se)},i:Y,o:Y,d(j){j&&m(e)}}}function Ot(f,e,i){let{width:t="98"}=e,{height:l="20"}=e;return f.$$set=n=>{"width"in n&&i(0,t=n.width),"height"in n&&i(1,l=n.height)},[t,l]}class jt extends X{constructor(e){super(),ee(this,e,Ot,At,Q,{width:0,height:1})}}function Ve(f){let e,i,t,l,n,u,o,a;return i=new wt({props:{position:"fixed",leftBack:"white"}}),n=new jt({}),o=new Be({props:{hide:f[2],invalidateUrl:f[1]}}),{c(){e=H("div"),P(i.$$.fragment),t=T(),l=H("div"),P(n.$$.fragment),u=T(),P(o.$$.fragment),this.h()},l(s){e=I(s,"DIV",{class:!0});var c=_(e);z(i.$$.fragment,c),t=L(c),l=I(c,"DIV",{class:!0});var d=_(l);z(n.$$.fragment,d),u=L(d),z(o.$$.fragment,d),d.forEach(m),c.forEach(m),this.h()},h(){r(l,"class","px-12 relative left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-96 flex flex-col items-center justify-center"),r(e,"class","fixed left-0 top-0 w-full h-full bg-black z-40")},m(s,c){S(s,e,c),N(i,e,null),h(e,t),h(e,l),N(n,l,null),h(l,u),N(o,l,null),a=!0},p(s,c){const d={};c&2&&(d.invalidateUrl=s[1]),o.$set(d)},i(s){a||(B(i.$$.fragment,s),B(n.$$.fragment,s),B(o.$$.fragment,s),a=!0)},o(s){F(i.$$.fragment,s),F(n.$$.fragment,s),F(o.$$.fragment,s),a=!1},d(s){s&&m(e),W(i),W(n),W(o)}}}function Pt(f){let e,i,t=f[0]===!0&&Ve(f);return{c(){t&&t.c(),e=K()},l(l){t&&t.l(l),e=K()},m(l,n){t&&t.m(l,n),S(l,e,n),i=!0},p(l,[n]){l[0]===!0?t?(t.p(l,n),n&1&&B(t,1)):(t=Ve(l),t.c(),B(t,1),t.m(e.parentNode,e)):t&&(Te(),F(t,1,1,()=>{t=null}),Le())},i(l){i||(B(t),i=!0)},o(l){F(t),i=!1},d(l){l&&m(e),t&&t.d(l)}}}function zt(f,e,i){let t=!1,l;ve(()=>{G.on("showSignInFull",n),G.on("hideSignInFull",u)}),be(()=>{G.off("showSignInFull",n),G.off("hideSignInFull",u)});const n=o=>{i(1,l=o==null?void 0:o.invalidateUrl),i(0,t=!0)},u=()=>{i(0,t=!1)};return[t,l,u]}class Nt extends X{constructor(e){super(),ee(this,e,zt,Pt,Q,{})}}function He(f){let e,i='<div class="flex flex-col items-center justify-center p-6"><div class="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div></div>';return{c(){e=H("div"),e.innerHTML=i,this.h()},l(t){e=I(t,"DIV",{class:!0,"data-svelte-h":!0}),le(e)!=="svelte-1beljzy"&&(e.innerHTML=i),this.h()},h(){r(e,"class","fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-[61]")},m(t,l){S(t,e,l)},d(t){t&&m(e)}}}function Wt(f){let e,i=f[0]&&He();return{c(){i&&i.c(),e=K()},l(t){i&&i.l(t),e=K()},m(t,l){i&&i.m(t,l),S(t,e,l)},p(t,[l]){t[0]?i||(i=He(),i.c(),i.m(e.parentNode,e)):i&&(i.d(1),i=null)},i:Y,o:Y,d(t){t&&m(e),i&&i.d(t)}}}function Rt(f,e,i){let t=!1;return G.on("loading",l=>{i(0,t=l)}),[t]}class qt extends X{constructor(e){super(),ee(this,e,Rt,Wt,Q,{})}}const Jt=We("SplashScreen",{web:()=>kt(()=>import("../chunks/web.CohnrHEP.js"),__vite__mapDeps([0,1,2,3,4]),import.meta.url).then(f=>new f.SplashScreenWeb)});function Ie(f){let e,i,t,l,n,u,o,a;return{c(){e=T(),i=H("meta"),t=T(),l=H("meta"),n=T(),u=H("meta"),o=T(),a=H("meta"),this.h()},l(s){e=L(s),i=I(s,"META",{property:!0,content:!0}),t=L(s),l=I(s,"META",{property:!0,content:!0}),n=L(s),u=I(s,"META",{property:!0,content:!0}),o=L(s),a=I(s,"META",{property:!0,content:!0}),this.h()},h(){document.title="블루닷 - 사람과 장소 그리고 순간을 의미 있게 만들다",r(i,"property","og:title"),r(i,"content","블루닷"),r(l,"property","og:description"),r(l,"content","사람과 장소 그리고 순간을 의미 있게 만들다"),r(u,"property","og:image"),r(u,"content",vt),r(a,"property","og:image:alt"),r(a,"content","bluedot logo")},m(s,c){S(s,e,c),S(s,i,c),S(s,t,c),S(s,l,c),S(s,n,c),S(s,u,c),S(s,o,c),S(s,a,c)},d(s){s&&(m(e),m(i),m(t),m(l),m(n),m(u),m(o),m(a))}}}function Kt(f){let e,i,t,l,n,u,o,a,s,c,d,v,b,y,E=!f[0]&&Ie();t=new It({});const V=f[5].default,g=Qe(V,f,f[4],null);return o=new Zt({props:{global:!0}}),s=new Nt({}),d=new qt({}),b=new xt({}),{c(){E&&E.c(),e=K(),i=T(),P(t.$$.fragment),l=T(),n=H("main"),g&&g.c(),u=T(),P(o.$$.fragment),a=T(),P(s.$$.fragment),c=T(),P(d.$$.fragment),v=T(),P(b.$$.fragment),this.h()},l(p){const w=Xe("svelte-1ynclgi",document.head);E&&E.l(w),e=K(),w.forEach(m),i=L(p),z(t.$$.fragment,p),l=L(p),n=I(p,"MAIN",{id:!0,class:!0});var C=_(n);g&&g.l(C),C.forEach(m),u=L(p),z(o.$$.fragment,p),a=L(p),z(s.$$.fragment,p),c=L(p),z(d.$$.fragment,p),v=L(p),z(b.$$.fragment,p),this.h()},h(){r(n,"id","page-container"),r(n,"class","w-full h-full overflow-visible")},m(p,w){E&&E.m(document.head,null),h(document.head,e),S(p,i,w),N(t,p,w),S(p,l,w),S(p,n,w),g&&g.m(n,null),S(p,u,w),N(o,p,w),S(p,a,w),N(s,p,w),S(p,c,w),N(d,p,w),S(p,v,w),N(b,p,w),y=!0},p(p,[w]){p[0]?E&&(E.d(1),E=null):E||(E=Ie(),E.c(),E.m(e.parentNode,e)),g&&g.p&&(!y||w&16)&&et(g,V,p,p[4],y?it(V,p[4],w,null):tt(p[4]),null)},i(p){y||(B(t.$$.fragment,p),B(g,p),B(o.$$.fragment,p),B(s.$$.fragment,p),B(d.$$.fragment,p),B(b.$$.fragment,p),y=!0)},o(p){F(t.$$.fragment,p),F(g,p),F(o.$$.fragment,p),F(s.$$.fragment,p),F(d.$$.fragment,p),F(b.$$.fragment,p),y=!1},d(p){p&&(m(i),m(l),m(n),m(u),m(a),m(c),m(v)),E&&E.d(p),m(e),W(t,p),g&&g.d(p),W(o,p),W(s,p),W(d,p),W(b,p)}}}function Yt(f,e,i){let t,l,n;fe(f,gt,d=>i(2,t=d)),fe(f,Ct,d=>i(3,l=d)),fe(f,$e,d=>i(0,n=d));let{$$slots:u={},$$scope:o}=e;const a={myinfo:"app:user",boxes:"app:boxes"};let s=!1;Ee.subscribe(async d=>{d&&(Ee.set(!1),await Ae()&&(G.emit("hideSignInFull"),G.emit("hideSignInModal"),await pt(t.url.href,{replaceState:!0,invalidateAll:!0})))}),ve(async()=>{await Jt.hide(),i(1,s=!0),Ge(),je()}),be(()=>{i(1,s=!1)}),G.on("setReaction",c);async function c(d){const v=Oe();if(!(await fetch(`${_t}/vote/reactions`,{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${v}`},body:JSON.stringify({type:d.reaction,targetTable:d.target,targetId:d.targetId})})).ok)return G.emit("pushSnackbar",{message:"이모지 선택 실패"});d.callback&&d.callback()}return f.$$set=d=>{"$$scope"in d&&i(4,o=d.$$scope)},f.$$.update=()=>{if(f.$$.dirty&8&&l&&$e.set(!1),f.$$.dirty&6&&s&&t){const d=window.location.pathname,v=d.startsWith("/users/0"),b=d==="/boxes";if(Ue()===!1&&(v||b)){const y=v?a.myinfo:a.boxes;G.emit("showSignInFull",{invalidateUrl:y})}else G.emit("hideSignInFull")}},[n,s,t,l,o,u]}class H1 extends X{constructor(e){super(),ee(this,e,Yt,Kt,Q,{})}}export{H1 as component,V1 as universal};
