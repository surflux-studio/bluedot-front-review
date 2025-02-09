import{l as F,s as Y,e as _,a as y,t as J,c as h,b as B,f as i,g as N,B as M,d as L,v as o,i as k,h as c,O as G,A as R,j as Z,F as ee,k as te,P as ae}from"../chunks/scheduler.DobTUrUU.js";import{d as E,f as se,A as K,b as Q,g as W,h as X}from"../chunks/sign.D2LB2NXZ.js";import{r as re}from"../chunks/index.g5YcAAdQ.js";import{S as le,i as ne,c as ie,b as oe,m as ue,t as de,a as ce,d as me}from"../chunks/index.BzbOx6Bd.js";import{g as fe}from"../chunks/entry.72j06AYb.js";import{H as pe}from"../chunks/Header.BWVlw1P1.js";const _e=async({})=>{if(F(E)!==!0||F(se)!==!0)throw re(302,"/")},Be=Object.freeze(Object.defineProperty({__proto__:null,load:_e},Symbol.toStringTag,{value:"Module"}));function he(n){let f,m,u,v,t,r,I="블루닷에서 사용할<br/>이름을 등록해주세요.",g,p,D="설정한 이름은 프로필 편집에서 변경 가능합니다.",l,d,s,S,x,q=(n[0].length>0&&n[1].uniqueName?n[1].uniqueName:"")+"",$,A,C,b,V,P,w,j,T;return u=new pe({props:{leftBack:"white"}}),{c(){f=_("div"),m=y(),ie(u.$$.fragment),v=y(),t=_("div"),r=_("div"),r.innerHTML=I,g=y(),p=_("div"),p.textContent=D,l=y(),d=_("div"),s=_("input"),S=y(),x=_("div"),$=J(q),A=y(),C=_("div"),b=_("div"),V=J("등록"),this.h()},l(e){f=h(e,"DIV",{class:!0}),B(f).forEach(i),m=N(e),oe(u.$$.fragment,e),v=N(e),t=h(e,"DIV",{class:!0});var a=B(t);r=h(a,"DIV",{class:!0,"data-svelte-h":!0}),M(r)!=="svelte-11nwzub"&&(r.innerHTML=I),g=N(a),p=h(a,"DIV",{class:!0,"data-svelte-h":!0}),M(p)!=="svelte-1851eu9"&&(p.textContent=D),l=N(a),d=h(a,"DIV",{class:!0});var z=B(d);s=h(z,"INPUT",{type:!0,class:!0,placeholder:!0}),z.forEach(i),S=N(a),x=h(a,"DIV",{class:!0});var H=B(x);$=L(H,q),H.forEach(i),a.forEach(i),A=N(e),C=h(e,"DIV",{class:!0});var O=B(C);b=h(O,"DIV",{class:!0});var U=B(b);V=L(U,"등록"),U.forEach(i),O.forEach(i),this.h()},h(){o(f,"class","fixed w-full h-full bg-black -z-10"),o(r,"class","mt-12 text-2xl leading-[1.95rem] tracking-[-0.003rem] font-bold text-start break-words"),o(p,"class","mt-3 text-sm"),o(s,"type","text"),o(s,"class","flex-grow py-2.5 px-1 bg-black border-0 cursor-not-allowed text-sm read-only:text-[#B3B8BD] border-b border-[#3F3F3F] placeholder:text-[#757475] "),o(s,"placeholder","본명 혹은 닉네임을 입력하세요"),o(d,"class","mt-9 flex flex-col gap-2"),o(x,"class","mt-2 text-xs text-[#757475]"),o(t,"class","flex flex-col px-5 text-white"),o(b,"class",P="w-full py-3.5 px-4 rounded-[62.5rem] text-white text-center font-semibold text-base "+(n[2]?"bg-primary-500":"bg-[#383838CC]")),o(C,"class","fixed bottom-[2.13rem] left-0 right-0 w-full px-5")},m(e,a){k(e,f,a),k(e,m,a),ue(u,e,a),k(e,v,a),k(e,t,a),c(t,r),c(t,g),c(t,p),c(t,l),c(t,d),c(d,s),G(s,n[0]),c(t,S),c(t,x),c(x,$),k(e,A,a),k(e,C,a),c(C,b),c(b,V),w=!0,j||(T=[R(s,"input",n[4]),R(b,"click",n[5])],j=!0)},p(e,[a]){a&1&&s.value!==e[0]&&G(s,e[0]),(!w||a&3)&&q!==(q=(e[0].length>0&&e[1].uniqueName?e[1].uniqueName:"")+"")&&Z($,q),(!w||a&4&&P!==(P="w-full py-3.5 px-4 rounded-[62.5rem] text-white text-center font-semibold text-base "+(e[2]?"bg-primary-500":"bg-[#383838CC]")))&&o(b,"class",P)},i(e){w||(de(u.$$.fragment,e),w=!0)},o(e){ce(u.$$.fragment,e),w=!1},d(e){e&&(i(f),i(m),i(v),i(t),i(A),i(C)),me(u,e),j=!1,ee(T)}}}function ve(n,f,m){let u,v;te(n,E,l=>m(6,v=l));let t="",r={uniqueName:""};function I(l){let d=!0;return m(1,r.uniqueName="",r),/^[a-z0-9._]{1,30}$/.test(l)||(m(1,r.uniqueName="영어 소문자, 숫자, ., _ 로 최대 30자 까지만 허용됩니다.",r),d=!1),d}async function g(){if(!I(t))return;let l=await fetch(`${K}/auth/users/${Q()}`,{method:"PATCH",headers:{Authorization:`Bearer ${W()}`,"Content-Type":"application/json"},body:JSON.stringify({uniqueName:t})});if(l.ok)X((await l.json()).data.access);else{const s=await l.json();console.error(s),emitter.emit("pushSnackbar",{message:s.message})}l=await fetch(`${K}/auth/users/${Q()}`,{method:"PATCH",headers:{Authorization:`Bearer ${W()}`,"Content-Type":"application/json"},body:JSON.stringify({signedUp:!0})});const d=await l.json();X(d.data.access),ae(E,v=!1,v)}function p(){t=this.value,m(0,t)}const D=async()=>{u?(await g(),await fe("/users")):(checked1=!0,checked2=!0,checked3=!0)};return n.$$.update=()=>{n.$$.dirty&1&&m(2,u=I(t))},[t,r,u,g,p,D]}class Ne extends le{constructor(f){super(),ne(this,f,ve,he,Y,{})}}export{Ne as component,Be as universal};
