import{h as Be,e as Ge,f as Fe,i as Ve,r as De,g as Ze,j as Oe}from"../chunks/sign.BRV78EHi.js";import{r as je}from"../chunks/index.BqZAe2KY.js";import{c as Ae,e as V,C as ze}from"../chunks/emitter.PJNP4wAS.js";import{s as K,D as ne,i as U,f as p,k as Ue,U as oe,e as M,t as be,a as G,c as S,b as g,d as we,g as F,v as r,h,y as fe,S as Ne,j as ke,n as Y,x as re,R as Re,F as We,z as Pe,A as qe,w as Ce,B as ve,q as b,r as w,m as Je,u as Ye,o as Ke,p as Qe}from"../chunks/scheduler.DH3jNSXp.js";import{S as Q,i as X,g as He,d as Ie,t as H,a as D,o as Xe,f as et,c as N,b as R,m as W,e as P}from"../chunks/index.DhGy8j-A.js";import{f as tt,b as it,c as rt,a as nt}from"../chunks/ActionSheetReport.svelte_svelte_type_style_lang.C7Oujwle.js";import{e as xe,u as lt,a as at}from"../chunks/each.CFpgwcA3.js";import{w as st,i as ot,g as ft}from"../chunks/entry.DYdHKLY6.js";import{f as ut}from"../chunks/index.81EKFG4c.js";import{S as B,n as ct,i as ye,A as dt}from"../chunks/store.kGqWah2j.js";import{p as pt}from"../chunks/stores.BDyTB2hx.js";import"../chunks/IconSearch.DvAOu5w9.js";/* empty css                                                   *//* empty css                                                          */import"../chunks/ActionSheet.svelte_svelte_type_style_lang.D8gc_1bm.js";import"../chunks/index.Bd9ABwMu.js";/* empty css                                                            *//* empty css                                                   *//* empty css                                                   */import"../chunks/index.DsEjgKPx.js";import"../chunks/map.B_Tw2_5D.js";import"../chunks/proj.DXH8zrwl.js";/* empty css                                                    */import"../chunks/ImageShaper.DEAJmI5j.js";import{M as ht}from"../chunks/Modal.C3DfWj8g.js";import{H as mt}from"../chunks/Header.BryJQSZL.js";const gt=!1,_t="auto";Ae();const Ct=async({route:f,url:e})=>{if(console.warn("e.route.id on load",f.id),await Be(e),e.pathname=="/")return je(302,"/viewer")},m1=Object.freeze(Object.defineProperty({__proto__:null,load:Ct,prerender:_t,ssr:gt},Symbol.toStringTag,{value:"Module"}));function Ee(f,e,i){const t=f.slice();return t[5]=e[i],t[7]=i,t}function $e(f,e){let i,t,n,l=e[5].message+"",u,s,a,o=(e[5].buttonText||_e)+"",c,m,_,d,C,I,$=Y,y,L,Z;return{key:f,first:null,c(){i=M("div"),t=M("div"),n=M("div"),u=be(l),s=G(),a=M("div"),c=be(o),_=G(),this.h()},l(v){i=S(v,"DIV",{class:!0,style:!0});var k=g(i);t=S(k,"DIV",{class:!0,style:!0});var x=g(t);n=S(x,"DIV",{class:!0});var E=g(n);u=we(E,l),E.forEach(p),s=F(x),a=S(x,"DIV",{class:!0});var T=g(a);c=we(T,o),T.forEach(p),x.forEach(p),_=F(k),k.forEach(p),this.h()},h(){r(n,"class","text-white flex-grow"),r(a,"class","text-primary-300"),r(t,"class","flex bg-black p-[1.125rem]"),r(t,"style",m=`transform: scale(${1-.05*e[7]})`),r(i,"class","fixed bottom-24 w-full p-4"),r(i,"style",d=`z-index: ${80-e[7]}; transform: translateY(${-.3*e[7]}rem);`),this.first=i},m(v,k){U(v,i,k),h(i,t),h(t,n),h(n,u),h(t,s),h(t,a),h(a,c),h(i,_),y=!0,L||(Z=fe(a,"click",function(){Ne(e[5].callback)&&e[5].callback.apply(this,arguments)}),L=!0)},p(v,k){e=v,(!y||k&1)&&l!==(l=e[5].message+"")&&ke(u,l),(!y||k&1)&&o!==(o=(e[5].buttonText||_e)+"")&&ke(c,o),(!y||k&1&&m!==(m=`transform: scale(${1-.05*e[7]})`))&&r(t,"style",m),(!y||k&1&&d!==(d=`z-index: ${80-e[7]}; transform: translateY(${-.3*e[7]}rem);`))&&r(i,"style",d)},r(){I=i.getBoundingClientRect()},f(){tt(i),$(),it(i,I)},a(){$(),$=rt(i,I,nt,{})},i(v){y||(C&&C.end(1),y=!0)},o(v){v&&(C=Xe(i,ut,{duration:300})),y=!1},d(v){v&&p(i),v&&C&&C.end(),L=!1,Z()}}}function vt(f){let e=[],i=new Map,t,n,l=xe(f[0]);const u=s=>s[5].uuid;for(let s=0;s<l.length;s+=1){let a=Ee(f,l,s),o=u(a);i.set(o,e[s]=$e(o,a))}return{c(){for(let s=0;s<e.length;s+=1)e[s].c();t=ne()},l(s){for(let a=0;a<e.length;a+=1)e[a].l(s);t=ne()},m(s,a){for(let o=0;o<e.length;o+=1)e[o]&&e[o].m(s,a);U(s,t,a),n=!0},p(s,[a]){if(a&1){l=xe(s[0]),He();for(let o=0;o<e.length;o+=1)e[o].r();e=lt(e,a,u,1,s,l,i,t.parentNode,at,$e,t,Ee);for(let o=0;o<e.length;o+=1)e[o].a();Ie()}},i(s){if(!n){for(let a=0;a<l.length;a+=1)H(e[a]);n=!0}},o(s){for(let a=0;a<e.length;a+=1)D(e[a]);n=!1},d(s){s&&p(t);for(let a=0;a<e.length;a+=1)e[a].d(s)}}}const bt=5e3,wt=!1,_e="닫기";function kt(f,e,i){let t;const n=()=>{clearTimeout(u),oe(l,t=t.slice(1),t)},l=st([]);Ue(f,l,a=>i(0,t=a));let u;V.on("pushSnackbar",s);function s(a){if(t.some(c=>c.uuid===a.uuid))return;const o={uuid:a.uuid||crypto.randomUUID(),message:a.message,urgent:a.urgent,keep:a.keep||wt,duration:a.duration||bt,buttonText:a.buttonText||_e,callback:()=>{n();try{a.callback()}catch{}}};if(a.urgent){clearTimeout(u),oe(l,t=[o,...t],t);return}oe(l,t=[...t,o],t)}return f.$$.update=()=>{if(f.$$.dirty&5&&t.length>0){const{duration:a,keep:o}=t[0];clearTimeout(u),o||i(2,u=setTimeout(()=>{oe(l,t=t.slice(1),t)},a))}},[t,l,u]}class xt extends Q{constructor(e){super(),X(this,e,kt,vt,K,{})}}function Le(){const f=window.innerWidth<=B.MobileS?B.MobileS:window.innerWidth<=B.MobileM?B.MobileM:window.innerWidth<=B.MobileL?B.MobileL:window.innerWidth<=B.Tablet?B.Tablet:window.innerWidth<=B.Laptop?B.Laptop:window.innerWidth<=B.LaptopL?B.LaptopL:B.FourK;ct.set(f)}window.onresize=Le;const yt="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'?%3e%3csvg%20width='31px'%20height='44px'%20viewBox='0%200%2031%2044'%20version='1.1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%3e%3c!--%20Generator:%20Sketch%2061%20(89581)%20-%20https://sketch.com%20--%3e%3ctitle%3eLeft%20Black%20Logo%20Medium%3c/title%3e%3cdesc%3eCreated%20with%20Sketch.%3c/desc%3e%3cg%20id='Left-Black-Logo-Medium'%20stroke='none'%20stroke-width='1'%20fill='none'%20fill-rule='evenodd'%3e%3crect%20id='Rectangle'%20fill='none'%20x='0'%20y='0'%20width='31'%20height='44'%3e%3c/rect%3e%3cpath%20d='M15.7099491,14.8846154%20C16.5675461,14.8846154%2017.642562,14.3048315%2018.28274,13.5317864%20C18.8625238,12.8312142%2019.2852829,11.852829%2019.2852829,10.8744437%20C19.2852829,10.7415766%2019.2732041,10.6087095%2019.2490464,10.5%20C18.2948188,10.5362365%2017.1473299,11.140178%2016.4588366,11.9494596%20C15.9152893,12.56548%2015.4200572,13.5317864%2015.4200572,14.5222505%20C15.4200572,14.6671964%2015.4442149,14.8121424%2015.4562937,14.8604577%20C15.5166879,14.8725366%2015.6133185,14.8846154%2015.7099491,14.8846154%20Z%20M12.6902416,29.5%20C13.8618881,29.5%2014.3812778,28.714876%2015.8428163,28.714876%20C17.3285124,28.714876%2017.6546408,29.4758423%2018.9591545,29.4758423%20C20.2395105,29.4758423%2021.0971074,28.292117%2021.9063891,27.1325493%20C22.8123013,25.8038779%2023.1867451,24.4993643%2023.2109027,24.4389701%20C23.1263509,24.4148125%2020.6743484,23.4122695%2020.6743484,20.5979021%20C20.6743484,18.1579784%2022.6069612,17.0588048%2022.7156707,16.974253%20C21.4353147,15.1382708%2019.490623,15.0899555%2018.9591545,15.0899555%20C17.5217737,15.0899555%2016.3501271,15.9596313%2015.6133185,15.9596313%20C14.8161157,15.9596313%2013.7652575,15.1382708%2012.521138,15.1382708%20C10.1536872,15.1382708%207.75,17.0950413%207.75,20.7911634%20C7.75,23.0861411%208.64383344,25.513986%209.74300699,27.0842339%20C10.6851558,28.4129053%2011.5065162,29.5%2012.6902416,29.5%20Z'%20id=''%20fill='%23000000'%20fill-rule='nonzero'%3e%3c/path%3e%3c/g%3e%3c/svg%3e";function Et(f){let e,i=`<img src="${yt}" alt="Apple Logo"/> <p class="absolute inset-0 flex items-center justify-center font-medium text-sm text-black tracking-[-0.5%]">Apple로 계속하기</p>`,t,n;return{c(){e=M("button"),e.innerHTML=i,this.h()},l(l){e=S(l,"BUTTON",{class:!0,"data-svelte-h":!0}),re(e)!=="svelte-1u6ehon"&&(e.innerHTML=i),this.h()},h(){r(e,"class","relative w-full bg-white px-2.5 border border-[#4D4D4D] rounded-[200px] ")},m(l,u){U(l,e,u),t||(n=fe(e,"click",f[7]),t=!0)},p:Y,d(l){l&&p(e),t=!1,n()}}}function $t(f){let e,i,t="로그인이 필요합니다",n,l,u,s='<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none"><mask id="mask0_1580_11030" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="0" y="0" width="20" height="20"><path d="M20 0H0V20H20V0Z" fill="white"></path></mask><g mask="url(#mask0_1580_11030)"><path d="M19.6 10.2271C19.6 9.51804 19.5364 8.83624 19.4182 8.18164H10V12.0498H15.3818C15.15 13.2998 14.4455 14.3589 13.3864 15.068V17.5771H16.6182C18.5091 15.8362 19.6 13.2725 19.6 10.2271Z" fill="#4285F4"></path><path d="M9.99988 20.0004C12.6999 20.0004 14.9635 19.1049 16.6181 17.5777L13.3863 15.0686C12.4908 15.6686 11.3453 16.0231 9.99988 16.0231C7.39528 16.0231 5.19078 14.264 4.40438 11.9004H1.06348V14.4913C2.70898 17.7595 6.09078 20.0004 9.99988 20.0004Z" fill="#34A853"></path><path d="M4.4045 11.8997C4.2045 11.2997 4.0909 10.6588 4.0909 9.99969C4.0909 9.34059 4.2045 8.69969 4.4045 8.09969V5.50879H1.0636C0.386401 6.85879 0 8.38609 0 9.99969C0 11.6133 0.386401 13.1406 1.0636 14.4906L4.4045 11.8997Z" fill="#FBBC04"></path><path d="M9.99988 3.9773C11.4681 3.9773 12.7862 4.4818 13.8226 5.4727L16.6908 2.6045C14.959 0.9909 12.6953 0 9.99988 0C6.09078 0 2.70898 2.2409 1.06348 5.5091L4.40438 8.1C5.19078 5.7364 7.39528 3.9773 9.99988 3.9773Z" fill="#E94235"></path></g></svg> <p class="absolute inset-0 flex items-center justify-center font-medium text-[#E3E3E3] text-sm tracking-[-0.5%]">Google로 계속하기</p>',a,o,c,m,_,d,C="로그인 상태 유지",I,$,y='<p class="text-xs text-[#757D86] text-start">계속 진행하면 서비스 약관 및 개인정보 처리방침에 동의하게 됩니다</p>',L,Z,v=f[1]==="ios"&&Et(f);return{c(){e=M("div"),i=M("h2"),i.textContent=t,n=G(),l=M("div"),u=M("button"),u.innerHTML=s,a=G(),v&&v.c(),o=G(),c=M("div"),m=M("input"),_=G(),d=M("label"),d.textContent=C,I=G(),$=M("div"),$.innerHTML=y,this.h()},l(k){e=S(k,"DIV",{class:!0});var x=g(e);i=S(x,"H2",{class:!0,"data-svelte-h":!0}),re(i)!=="svelte-t6adr0"&&(i.textContent=t),n=F(x),l=S(x,"DIV",{class:!0});var E=g(l);u=S(E,"BUTTON",{class:!0,"data-svelte-h":!0}),re(u)!=="svelte-29akwj"&&(u.innerHTML=s),a=F(E),v&&v.l(E),E.forEach(p),o=F(x),c=S(x,"DIV",{class:!0});var T=g(c);m=S(T,"INPUT",{class:!0,type:!0,id:!0,name:!0}),_=F(T),d=S(T,"LABEL",{for:!0,class:!0,"data-svelte-h":!0}),re(d)!=="svelte-379dsu"&&(d.textContent=C),T.forEach(p),I=F(x),$=S(x,"DIV",{class:!0,"data-svelte-h":!0}),re($)!=="svelte-6p88iz"&&($.innerHTML=y),x.forEach(p),this.h()},h(){r(i,"class","text-center text-xl font-semibold text-white mt-7"),r(u,"class","relative w-full bg-[#131314] px-4 py-3 border border-[#8E918F] rounded-[3.75rem] "),r(l,"class","mt-5 flex flex-col gap-3"),r(m,"class","w-[1.125rem] h-[1.125rem] bg-transparent"),r(m,"type","checkbox"),r(m,"id","save-sign-state"),r(m,"name","save-sign-state"),m.__value="save-sign-state",Re(m,m.__value),r(d,"for","save-sign-state"),r(d,"class","text-sm text-[#757D86] leading-4"),r(c,"class","mt-[19px] self-start flex gap-2"),r($,"class","mt-2.5"),r(e,"class","w-full")},m(k,x){U(k,e,x),h(e,i),h(e,n),h(e,l),h(l,u),h(l,a),v&&v.m(l,null),h(e,o),h(e,c),h(c,m),m.checked=f[0],h(c,_),h(c,d),h(e,I),h(e,$),L||(Z=[fe(u,"click",f[6]),fe(m,"change",f[8])],L=!0)},p(k,[x]){k[1]==="ios"&&v.p(k,x),x&1&&(m.checked=k[0])},i:Y,o:Y,d(k){k&&p(e),v&&v.d(),L=!1,We(Z)}}}function Mt(f,e,i){let{hide:t}=e,{invalidateUrl:n=void 0}=e,{callback:l=void 0}=e;const u=ze.getPlatform();let s=!1;async function a(_){if(_==="google")await Ge(s);else if(_==="apple"){if(u!=="ios")return;await Fe(s)}Ve()&&(n&&(ot(n),i(3,n=void 0)),l&&(l(),i(4,l=void 0)),t())}const o=()=>a("google"),c=()=>a("apple");function m(){s=this.checked,i(0,s)}return f.$$set=_=>{"hide"in _&&i(5,t=_.hide),"invalidateUrl"in _&&i(3,n=_.invalidateUrl),"callback"in _&&i(4,l=_.callback)},[s,u,a,n,l,t,o,c,m]}class Te extends Q{constructor(e){super(),X(this,e,Mt,$t,K,{hide:5,invalidateUrl:3,callback:4})}}function St(f){let e,i;return e=new Te({props:{hide:f[3],callback:f[2]}}),{c(){N(e.$$.fragment)},l(t){R(e.$$.fragment,t)},m(t,n){W(e,t,n),i=!0},p(t,n){const l={};n&4&&(l.callback=t[2]),e.$set(l)},i(t){i||(H(e.$$.fragment,t),i=!0)},o(t){D(e.$$.fragment,t),i=!1},d(t){P(e,t)}}}function Vt(f){let e,i,t;function n(u){f[5](u)}let l={removable:f[1],$$slots:{default:[St]},$$scope:{ctx:f}};return f[0]!==void 0&&(l.modalVisible=f[0]),e=new ht({props:l}),Pe.push(()=>et(e,"modalVisible",n)),{c(){N(e.$$.fragment)},l(u){R(e.$$.fragment,u)},m(u,s){W(e,u,s),t=!0},p(u,[s]){const a={};s&2&&(a.removable=u[1]),s&132&&(a.$$scope={dirty:s,ctx:u}),!i&&s&1&&(i=!0,a.modalVisible=u[0],qe(()=>i=!1)),e.$set(a)},i(u){t||(H(e.$$.fragment,u),t=!0)},o(u){D(e.$$.fragment,u),t=!1},d(u){P(e,u)}}}function Ut(f,e,i){let{global:t=!1}=e,{modalVisible:n=!1}=e,{removable:l=!0}=e,u;Ce(()=>{t&&(V.on("showSignInModal",s),V.on("hideSignInModal",a))}),ve(()=>{t&&(V.off("showSignInModal",s),V.off("hideSignInModal",a))});const s=c=>{i(0,n=!0),i(1,l=(c==null?void 0:c.removable)??!0),i(2,u=c==null?void 0:c.callback)},a=()=>{i(0,n=!1),i(1,l=!0)};function o(c){n=c,i(0,n)}return f.$$set=c=>{"global"in c&&i(4,t=c.global),"modalVisible"in c&&i(0,n=c.modalVisible),"removable"in c&&i(1,l=c.removable)},[n,l,u,a,t,o]}class Ht extends Q{constructor(e){super(),X(this,e,Ut,Vt,K,{global:4,modalVisible:0,removable:1})}}function It(f){let e,i,t,n,l,u,s,a,o,c,m,_,d,C,I,$,y,L,Z,v,k,x,E,T,ee,O,le,te,j,ae,ie,se;return{c(){e=b("svg"),i=b("g"),t=b("path"),n=b("path"),l=b("path"),u=b("path"),s=b("path"),a=b("path"),o=b("path"),c=b("defs"),m=b("linearGradient"),_=b("stop"),d=b("stop"),C=b("linearGradient"),I=b("stop"),$=b("stop"),y=b("linearGradient"),L=b("stop"),Z=b("stop"),v=b("linearGradient"),k=b("stop"),x=b("stop"),E=b("linearGradient"),T=b("stop"),ee=b("stop"),O=b("linearGradient"),le=b("stop"),te=b("stop"),j=b("linearGradient"),ae=b("stop"),ie=b("stop"),this.h()},l(A){e=w(A,"svg",{width:!0,height:!0,viewBox:!0,fill:!0,xmlns:!0});var z=g(e);i=w(z,"g",{id:!0});var q=g(i);t=w(q,"path",{d:!0,fill:!0}),g(t).forEach(p),n=w(q,"path",{d:!0,fill:!0}),g(n).forEach(p),l=w(q,"path",{d:!0,fill:!0}),g(l).forEach(p),u=w(q,"path",{d:!0,fill:!0}),g(u).forEach(p),s=w(q,"path",{d:!0,fill:!0}),g(s).forEach(p),a=w(q,"path",{d:!0,fill:!0}),g(a).forEach(p),o=w(q,"path",{d:!0,fill:!0}),g(o).forEach(p),q.forEach(p),c=w(z,"defs",{});var J=g(c);m=w(J,"linearGradient",{id:!0,x1:!0,y1:!0,x2:!0,y2:!0,gradientUnits:!0});var ue=g(m);_=w(ue,"stop",{"stop-color":!0}),g(_).forEach(p),d=w(ue,"stop",{offset:!0,"stop-color":!0}),g(d).forEach(p),ue.forEach(p),C=w(J,"linearGradient",{id:!0,x1:!0,y1:!0,x2:!0,y2:!0,gradientUnits:!0});var ce=g(C);I=w(ce,"stop",{"stop-color":!0}),g(I).forEach(p),$=w(ce,"stop",{offset:!0,"stop-color":!0}),g($).forEach(p),ce.forEach(p),y=w(J,"linearGradient",{id:!0,x1:!0,y1:!0,x2:!0,y2:!0,gradientUnits:!0});var de=g(y);L=w(de,"stop",{"stop-color":!0}),g(L).forEach(p),Z=w(de,"stop",{offset:!0,"stop-color":!0}),g(Z).forEach(p),de.forEach(p),v=w(J,"linearGradient",{id:!0,x1:!0,y1:!0,x2:!0,y2:!0,gradientUnits:!0});var pe=g(v);k=w(pe,"stop",{"stop-color":!0}),g(k).forEach(p),x=w(pe,"stop",{offset:!0,"stop-color":!0}),g(x).forEach(p),pe.forEach(p),E=w(J,"linearGradient",{id:!0,x1:!0,y1:!0,x2:!0,y2:!0,gradientUnits:!0});var he=g(E);T=w(he,"stop",{"stop-color":!0}),g(T).forEach(p),ee=w(he,"stop",{offset:!0,"stop-color":!0}),g(ee).forEach(p),he.forEach(p),O=w(J,"linearGradient",{id:!0,x1:!0,y1:!0,x2:!0,y2:!0,gradientUnits:!0});var me=g(O);le=w(me,"stop",{"stop-color":!0}),g(le).forEach(p),te=w(me,"stop",{offset:!0,"stop-color":!0}),g(te).forEach(p),me.forEach(p),j=w(J,"linearGradient",{id:!0,x1:!0,y1:!0,x2:!0,y2:!0,gradientUnits:!0});var ge=g(j);ae=w(ge,"stop",{"stop-color":!0}),g(ae).forEach(p),ie=w(ge,"stop",{offset:!0,"stop-color":!0}),g(ie).forEach(p),ge.forEach(p),J.forEach(p),z.forEach(p),this.h()},h(){r(t,"d","M0.650879 19.7018V0H7.86589C9.26399 0 10.4216 0.23088 11.3387 0.692641C12.2558 1.14799 12.942 1.76688 13.3974 2.5493C13.8527 3.32532 14.0804 4.20074 14.0804 5.17556C14.0804 5.99647 13.9297 6.68911 13.6283 7.25349C13.3268 7.81145 12.9228 8.26038 12.4161 8.60029C11.9159 8.93378 11.3644 9.17749 10.7615 9.33141V9.52381C11.4157 9.55588 12.0538 9.76752 12.6759 10.1587C13.3044 10.5435 13.8239 11.0919 14.2343 11.8038C14.6448 12.5156 14.85 13.3814 14.85 14.4012C14.85 15.408 14.6127 16.3123 14.1381 17.114C13.67 17.9093 12.9453 18.541 11.964 19.0091C10.9828 19.4709 9.72896 19.7018 8.20259 19.7018H0.650879ZM3.62346 17.1525H7.91399C9.33775 17.1525 10.3575 16.8767 10.9731 16.3252C11.5888 15.7736 11.8967 15.0842 11.8967 14.2569C11.8967 13.6348 11.7395 13.064 11.4253 12.5445C11.111 12.025 10.6621 11.6114 10.0785 11.3035C9.50129 10.9957 8.81506 10.8418 8.01981 10.8418H3.62346V17.1525ZM3.62346 8.52333H7.60615C8.27313 8.52333 8.87278 8.39506 9.40509 8.13853C9.94381 7.88199 10.3703 7.52285 10.6845 7.06109C11.0052 6.59291 11.1655 6.04137 11.1655 5.40645C11.1655 4.59195 10.8802 3.90893 10.3094 3.35738C9.73858 2.80584 8.86316 2.53006 7.68311 2.53006H3.62346V8.52333Z"),r(t,"fill","url(#paint0_linear_1434_17952)"),r(n,"d","M21.0212 0V19.7018H18.1449V0H21.0212Z"),r(n,"fill","url(#paint1_linear_1434_17952)"),r(l,"d","M34.2512 13.5738V4.92545H37.1372V19.7018H34.3089V17.1429H34.155C33.8151 17.9317 33.2699 18.5891 32.5196 19.115C31.7756 19.6344 30.8489 19.8942 29.7394 19.8942C28.7902 19.8942 27.9501 19.6857 27.2189 19.2689C26.4942 18.8456 25.9234 18.2203 25.5066 17.393C25.0961 16.5657 24.8909 15.5427 24.8909 14.3242V4.92545H27.7673V13.9779C27.7673 14.9848 28.0463 15.7864 28.6042 16.3829C29.1622 16.9793 29.8869 17.2775 30.7783 17.2775C31.3171 17.2775 31.8526 17.1429 32.3849 16.8735C32.9236 16.6041 33.3693 16.1969 33.7221 15.6518C34.0812 15.1066 34.2576 14.414 34.2512 13.5738Z"),r(l,"fill","url(#paint2_linear_1434_17952)"),r(u,"d","M47.3704 20C45.9146 20 44.6608 19.689 43.609 19.0669C42.5637 18.4384 41.7556 17.5565 41.1848 16.4214C40.6204 15.2798 40.3382 13.9426 40.3382 12.4098C40.3382 10.8963 40.6204 9.56229 41.1848 8.40789C41.7556 7.25349 42.5508 6.35241 43.5705 5.70467C44.5967 5.05692 45.796 4.73305 47.1684 4.73305C48.0022 4.73305 48.8102 4.87093 49.5927 5.14671C50.3751 5.42248 51.0774 5.85538 51.6995 6.44541C52.3215 7.03543 52.8122 7.80183 53.1713 8.74459C53.5305 9.68094 53.71 10.8193 53.71 12.1597V13.1794H41.964V11.0245H50.8914C50.8914 10.2678 50.7375 9.59756 50.4296 9.01395C50.1218 8.42392 49.6889 7.95895 49.1309 7.61905C48.5794 7.27914 47.9316 7.10919 47.1877 7.10919C46.3796 7.10919 45.6741 7.308 45.0713 7.70563C44.4748 8.09684 44.0131 8.60991 43.686 9.24483C43.3653 9.87334 43.205 10.5564 43.205 11.2939V12.9774C43.205 13.965 43.3781 14.8052 43.7245 15.4978C44.0772 16.1905 44.5678 16.7196 45.1963 17.0851C45.8248 17.4443 46.5592 17.6239 47.3993 17.6239C47.9444 17.6239 48.4415 17.5469 48.8904 17.393C49.3393 17.2326 49.7274 16.9954 50.0544 16.6811C50.3815 16.3668 50.6316 15.9788 50.8048 15.5171L53.5273 16.0077C53.3092 16.8094 52.918 17.5116 52.3536 18.1145C51.7957 18.7109 51.0934 19.1759 50.2468 19.5094C49.4067 19.8365 48.4479 20 47.3704 20Z"),r(u,"fill","url(#paint3_linear_1434_17952)"),r(s,"d","M62.433 19.9904C61.2401 19.9904 60.1755 19.6857 59.2391 19.0765C58.3092 18.4608 57.5781 17.5854 57.0458 16.4502C56.5199 15.3086 56.2569 13.9394 56.2569 12.3425C56.2569 10.7456 56.5231 9.37951 57.0554 8.24435C57.5941 7.10919 58.3316 6.24018 59.268 5.63733C60.2043 5.03447 61.2658 4.73305 62.4522 4.73305C63.3693 4.73305 64.1069 4.88697 64.6648 5.19481C65.2292 5.49623 65.6653 5.84897 65.9731 6.25301C66.2874 6.65705 66.5311 7.01299 66.7043 7.32083H66.8774V0H69.7538V19.7018H66.9448V17.4026H66.7043C66.5311 17.7169 66.281 18.076 65.9539 18.48C65.6332 18.8841 65.1907 19.2368 64.6263 19.5382C64.062 19.8397 63.3308 19.9904 62.433 19.9904ZM63.0679 17.5373C63.8952 17.5373 64.5943 17.3192 65.1651 16.8831C65.7423 16.4406 66.1784 15.8281 66.4734 15.0457C66.7748 14.2633 66.9255 13.3526 66.9255 12.3136C66.9255 11.2875 66.778 10.3896 66.483 9.62001C66.188 8.85041 65.7551 8.25076 65.1843 7.82107C64.6135 7.39137 63.9081 7.17653 63.0679 7.17653C62.2021 7.17653 61.4806 7.40099 60.9034 7.84993C60.3262 8.29886 59.8901 8.91134 59.5951 9.68735C59.3065 10.4634 59.1622 11.3388 59.1622 12.3136C59.1622 13.3013 59.3097 14.1895 59.6047 14.9784C59.8997 15.7672 60.3358 16.3925 60.913 16.8543C61.4966 17.3096 62.2149 17.5373 63.0679 17.5373Z"),r(s,"fill","url(#paint4_linear_1434_17952)"),r(a,"d","M80.0833 20C78.698 20 77.4891 19.6825 76.4565 19.0476C75.424 18.4127 74.6223 17.5245 74.0516 16.3829C73.4808 15.2413 73.1954 13.9073 73.1954 12.381C73.1954 10.8482 73.4808 9.50778 74.0516 8.35979C74.6223 7.2118 75.424 6.32035 76.4565 5.68543C77.4891 5.05051 78.698 4.73305 80.0833 4.73305C81.4686 4.73305 82.6775 5.05051 83.71 5.68543C84.7426 6.32035 85.5443 7.2118 86.115 8.35979C86.6858 9.50778 86.9712 10.8482 86.9712 12.381C86.9712 13.9073 86.6858 15.2413 86.115 16.3829C85.5443 17.5245 84.7426 18.4127 83.71 19.0476C82.6775 19.6825 81.4686 20 80.0833 20ZM80.0929 17.5854C80.9908 17.5854 81.7347 17.3481 82.3248 16.8735C82.9148 16.3989 83.3509 15.7672 83.6331 14.9784C83.9217 14.1895 84.066 13.3205 84.066 12.3713C84.066 11.4286 83.9217 10.5628 83.6331 9.77393C83.3509 8.97868 82.9148 8.34055 82.3248 7.85955C81.7347 7.37855 80.9908 7.13805 80.0929 7.13805C79.1886 7.13805 78.4383 7.37855 77.8418 7.85955C77.2518 8.34055 76.8125 8.97868 76.5239 9.77393C76.2417 10.5628 76.1006 11.4286 76.1006 12.3713C76.1006 13.3205 76.2417 14.1895 76.5239 14.9784C76.8125 15.7672 77.2518 16.3989 77.8418 16.8735C78.4383 17.3481 79.1886 17.5854 80.0929 17.5854Z"),r(a,"fill","url(#paint5_linear_1434_17952)"),r(o,"d","M97.0794 4.92545V7.23425H89.0083V4.92545H97.0794ZM91.1728 1.38528H94.0491V15.3632C94.0491 15.9211 94.1325 16.3412 94.2993 16.6234C94.466 16.8992 94.6808 17.0883 94.9438 17.191C95.2132 17.2872 95.505 17.3353 95.8192 17.3353C96.0501 17.3353 96.2521 17.3192 96.4253 17.2872C96.5984 17.2551 96.7331 17.2294 96.8293 17.2102L97.3488 19.5863C97.1821 19.6505 96.9448 19.7146 96.6369 19.7787C96.3291 19.8493 95.9443 19.8878 95.4825 19.8942C94.7257 19.907 94.0203 19.7723 93.3661 19.4901C92.712 19.208 92.1829 18.7718 91.7788 18.1818C91.3748 17.5918 91.1728 16.851 91.1728 15.9596V1.38528Z"),r(o,"fill","url(#paint6_linear_1434_17952)"),r(i,"id","Bluedot"),r(_,"stop-color","#0066FF"),r(d,"offset","0.915"),r(d,"stop-color","#00ECB3"),r(m,"id","paint0_linear_1434_17952"),r(m,"x1","102.14"),r(m,"y1","19.5827"),r(m,"x2","76.5377"),r(m,"y2","-91.812"),r(m,"gradientUnits","userSpaceOnUse"),r(I,"stop-color","#0066FF"),r($,"offset","0.915"),r($,"stop-color","#00ECB3"),r(C,"id","paint1_linear_1434_17952"),r(C,"x1","102.14"),r(C,"y1","19.5827"),r(C,"x2","76.5377"),r(C,"y2","-91.812"),r(C,"gradientUnits","userSpaceOnUse"),r(L,"stop-color","#0066FF"),r(Z,"offset","0.915"),r(Z,"stop-color","#00ECB3"),r(y,"id","paint2_linear_1434_17952"),r(y,"x1","102.14"),r(y,"y1","19.5827"),r(y,"x2","76.5377"),r(y,"y2","-91.812"),r(y,"gradientUnits","userSpaceOnUse"),r(k,"stop-color","#0066FF"),r(x,"offset","0.915"),r(x,"stop-color","#00ECB3"),r(v,"id","paint3_linear_1434_17952"),r(v,"x1","102.14"),r(v,"y1","19.5827"),r(v,"x2","76.5377"),r(v,"y2","-91.812"),r(v,"gradientUnits","userSpaceOnUse"),r(T,"stop-color","#0066FF"),r(ee,"offset","0.915"),r(ee,"stop-color","#00ECB3"),r(E,"id","paint4_linear_1434_17952"),r(E,"x1","102.14"),r(E,"y1","19.5827"),r(E,"x2","76.5377"),r(E,"y2","-91.812"),r(E,"gradientUnits","userSpaceOnUse"),r(le,"stop-color","#0066FF"),r(te,"offset","0.915"),r(te,"stop-color","#00ECB3"),r(O,"id","paint5_linear_1434_17952"),r(O,"x1","102.14"),r(O,"y1","19.5827"),r(O,"x2","76.5377"),r(O,"y2","-91.812"),r(O,"gradientUnits","userSpaceOnUse"),r(ae,"stop-color","#0066FF"),r(ie,"offset","0.915"),r(ie,"stop-color","#00ECB3"),r(j,"id","paint6_linear_1434_17952"),r(j,"x1","102.14"),r(j,"y1","19.5827"),r(j,"x2","76.5377"),r(j,"y2","-91.812"),r(j,"gradientUnits","userSpaceOnUse"),r(e,"width",f[0]),r(e,"height",f[1]),r(e,"viewBox",se=`0 0 ${f[0]} ${f[1]}`),r(e,"fill","none"),r(e,"xmlns","http://www.w3.org/2000/svg")},m(A,z){U(A,e,z),h(e,i),h(i,t),h(i,n),h(i,l),h(i,u),h(i,s),h(i,a),h(i,o),h(e,c),h(c,m),h(m,_),h(m,d),h(c,C),h(C,I),h(C,$),h(c,y),h(y,L),h(y,Z),h(c,v),h(v,k),h(v,x),h(c,E),h(E,T),h(E,ee),h(c,O),h(O,le),h(O,te),h(c,j),h(j,ae),h(j,ie)},p(A,[z]){z&1&&r(e,"width",A[0]),z&2&&r(e,"height",A[1]),z&3&&se!==(se=`0 0 ${A[0]} ${A[1]}`)&&r(e,"viewBox",se)},i:Y,o:Y,d(A){A&&p(e)}}}function Lt(f,e,i){let{width:t="98"}=e,{height:n="20"}=e;return f.$$set=l=>{"width"in l&&i(0,t=l.width),"height"in l&&i(1,n=l.height)},[t,n]}class Tt extends Q{constructor(e){super(),X(this,e,Lt,It,K,{width:0,height:1})}}function Me(f){let e,i,t,n,l,u,s,a;return i=new mt({props:{position:"fixed",leftBack:"white"}}),l=new Tt({}),s=new Te({props:{hide:f[2],invalidateUrl:f[1]}}),{c(){e=M("div"),N(i.$$.fragment),t=G(),n=M("div"),N(l.$$.fragment),u=G(),N(s.$$.fragment),this.h()},l(o){e=S(o,"DIV",{class:!0});var c=g(e);R(i.$$.fragment,c),t=F(c),n=S(c,"DIV",{class:!0});var m=g(n);R(l.$$.fragment,m),u=F(m),R(s.$$.fragment,m),m.forEach(p),c.forEach(p),this.h()},h(){r(n,"class","px-12 relative left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-96 flex flex-col items-center justify-center"),r(e,"class","fixed left-0 top-0 w-full h-full bg-black z-40")},m(o,c){U(o,e,c),W(i,e,null),h(e,t),h(e,n),W(l,n,null),h(n,u),W(s,n,null),a=!0},p(o,c){const m={};c&2&&(m.invalidateUrl=o[1]),s.$set(m)},i(o){a||(H(i.$$.fragment,o),H(l.$$.fragment,o),H(s.$$.fragment,o),a=!0)},o(o){D(i.$$.fragment,o),D(l.$$.fragment,o),D(s.$$.fragment,o),a=!1},d(o){o&&p(e),P(i),P(l),P(s)}}}function Bt(f){let e,i,t=f[0]===!0&&Me(f);return{c(){t&&t.c(),e=ne()},l(n){t&&t.l(n),e=ne()},m(n,l){t&&t.m(n,l),U(n,e,l),i=!0},p(n,[l]){n[0]===!0?t?(t.p(n,l),l&1&&H(t,1)):(t=Me(n),t.c(),H(t,1),t.m(e.parentNode,e)):t&&(He(),D(t,1,1,()=>{t=null}),Ie())},i(n){i||(H(t),i=!0)},o(n){D(t),i=!1},d(n){n&&p(e),t&&t.d(n)}}}function Gt(f,e,i){let t=!1,n;Ce(()=>{V.on("showSignInFull",l),V.on("hideSignInFull",u)}),ve(()=>{V.off("showSignInFull",l),V.off("hideSignInFull",u)});const l=s=>{i(1,n=s==null?void 0:s.invalidateUrl),i(0,t=!0)},u=()=>{i(0,t=!1)};return[t,n,u]}class Ft extends Q{constructor(e){super(),X(this,e,Gt,Bt,K,{})}}function Se(f){let e,i='<div class="flex flex-col items-center justify-center p-6"><div class="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div></div>';return{c(){e=M("div"),e.innerHTML=i,this.h()},l(t){e=S(t,"DIV",{class:!0,"data-svelte-h":!0}),re(e)!=="svelte-1beljzy"&&(e.innerHTML=i),this.h()},h(){r(e,"class","fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-[61]")},m(t,n){U(t,e,n)},d(t){t&&p(e)}}}function Dt(f){let e,i=f[0]&&Se();return{c(){i&&i.c(),e=ne()},l(t){i&&i.l(t),e=ne()},m(t,n){i&&i.m(t,n),U(t,e,n)},p(t,[n]){t[0]?i||(i=Se(),i.c(),i.m(e.parentNode,e)):i&&(i.d(1),i=null)},i:Y,o:Y,d(t){t&&p(e),i&&i.d(t)}}}function Zt(f,e,i){let t=!1;return V.on("loading",n=>{i(0,t=n)}),[t]}class Ot extends Q{constructor(e){super(),X(this,e,Zt,Dt,K,{})}}function jt(f){let e,i,t,n,l,u,s,a,o,c;e=new xt({});const m=f[3].default,_=Je(m,f,f[2],null);return l=new Ht({props:{global:!0}}),s=new Ft({}),o=new Ot({}),{c(){N(e.$$.fragment),i=G(),t=M("main"),_&&_.c(),n=G(),N(l.$$.fragment),u=G(),N(s.$$.fragment),a=G(),N(o.$$.fragment),this.h()},l(d){R(e.$$.fragment,d),i=F(d),t=S(d,"MAIN",{id:!0,class:!0});var C=g(t);_&&_.l(C),C.forEach(p),n=F(d),R(l.$$.fragment,d),u=F(d),R(s.$$.fragment,d),a=F(d),R(o.$$.fragment,d),this.h()},h(){r(t,"id","page-container"),r(t,"class","w-full h-full overflow-visible")},m(d,C){W(e,d,C),U(d,i,C),U(d,t,C),_&&_.m(t,null),U(d,n,C),W(l,d,C),U(d,u,C),W(s,d,C),U(d,a,C),W(o,d,C),c=!0},p(d,[C]){_&&_.p&&(!c||C&4)&&Ye(_,m,d,d[2],c?Qe(m,d[2],C,null):Ke(d[2]),null)},i(d){c||(H(e.$$.fragment,d),H(_,d),H(l.$$.fragment,d),H(s.$$.fragment,d),H(o.$$.fragment,d),c=!0)},o(d){D(e.$$.fragment,d),D(_,d),D(l.$$.fragment,d),D(s.$$.fragment,d),D(o.$$.fragment,d),c=!1},d(d){d&&(p(i),p(t),p(n),p(u),p(a)),P(e,d),_&&_.d(d),P(l,d),P(s,d),P(o,d)}}}function At(f,e,i){let t;Ue(f,pt,o=>i(1,t=o));let{$$slots:n={},$$scope:l}=e;const u={myinfo:"app:user",boxes:"app:boxes"};let s=!1;ye.subscribe(async o=>{o&&(ye.set(!1),await De()&&(V.emit("hideSignInFull"),V.emit("hideSignInModal"),await ft(t.url.href,{replaceState:!0,invalidateAll:!0})))}),Ce(()=>{i(0,s=!0),Le(),Oe()}),ve(()=>{i(0,s=!1)}),V.on("setReaction",a);async function a(o){const c=Ze();if(!(await fetch(`${dt}/vote/reactions`,{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${c}`},body:JSON.stringify({type:o.reaction,targetTable:o.target,targetId:o.targetId})})).ok)return V.emit("pushSnackbar",{message:"이모지 선택 실패"});o.callback&&o.callback()}return f.$$set=o=>{"$$scope"in o&&i(2,l=o.$$scope)},f.$$.update=()=>{if(f.$$.dirty&3&&s&&t){const o=window.location.pathname,c=o.startsWith("/users/0"),m=o==="/boxes";if(Ve()===!1&&(c||m)){const _=c?u.myinfo:u.boxes;V.emit("showSignInFull",{invalidateUrl:_})}else V.emit("hideSignInFull")}},[s,t,l,n]}class g1 extends Q{constructor(e){super(),X(this,e,At,jt,K,{})}}export{g1 as component,m1 as universal};
