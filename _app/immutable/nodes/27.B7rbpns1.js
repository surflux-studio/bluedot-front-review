import{l as U,s as X,e as _,a as I,t as J,c as v,b as k,f as i,g as q,z as L,d as M,v as o,i as D,h as d,N as G,A as Q,j as Y,F as Z,k as ee,Q as te}from"../chunks/scheduler.DAfLlBmd.js";import{b as P,c as se,A as R}from"../chunks/store.CJmM3jzm.js";import{r as ae}from"../chunks/index.CLxPVyZ6.js";import{S as re,i as ne,c as le,d as ie,m as oe,t as ue,a as de,f as ce}from"../chunks/index.CPgTt4Co.js";import{g as me}from"../chunks/entry.Cn8bzhtR.js";import{H as fe}from"../chunks/Header.D6D4iAqE.js";import{a as pe,g as _e,s as K}from"../chunks/sign.CAJizXj9.js";import{e as W}from"../chunks/emitter.E5P-NQ8u.js";const ve=async({})=>{if(U(P)!==!0||U(se)!==!0)throw ae(302,"/")},ke=Object.freeze(Object.defineProperty({__proto__:null,load:ve},Symbol.toStringTag,{value:"Module"}));function he(l){let p,c,u,h,t,n,w="블루닷에서 사용할<br/>이름을 등록해주세요.",B,m,E="설정한 이름은 프로필 편집에서 변경 가능합니다.",$,r,a,f,C,g=(l[0].length>0&&l[1].uniqueName?l[1].uniqueName:"")+"",b,S,y,x,A,j,N,V,T;return u=new fe({props:{leftBack:"white"}}),{c(){p=_("div"),c=I(),le(u.$$.fragment),h=I(),t=_("div"),n=_("div"),n.innerHTML=w,B=I(),m=_("div"),m.textContent=E,$=I(),r=_("div"),a=_("input"),f=I(),C=_("div"),b=J(g),S=I(),y=_("div"),x=_("div"),A=J("등록"),this.h()},l(e){p=v(e,"DIV",{class:!0}),k(p).forEach(i),c=q(e),ie(u.$$.fragment,e),h=q(e),t=v(e,"DIV",{class:!0});var s=k(t);n=v(s,"DIV",{class:!0,"data-svelte-h":!0}),L(n)!=="svelte-11nwzub"&&(n.innerHTML=w),B=q(s),m=v(s,"DIV",{class:!0,"data-svelte-h":!0}),L(m)!=="svelte-1851eu9"&&(m.textContent=E),$=q(s),r=v(s,"DIV",{class:!0});var z=k(r);a=v(z,"INPUT",{type:!0,class:!0,placeholder:!0}),z.forEach(i),f=q(s),C=v(s,"DIV",{class:!0});var H=k(C);b=M(H,g),H.forEach(i),s.forEach(i),S=q(e),y=v(e,"DIV",{class:!0});var F=k(y);x=v(F,"DIV",{class:!0});var O=k(x);A=M(O,"등록"),O.forEach(i),F.forEach(i),this.h()},h(){o(p,"class","fixed w-full h-full bg-black -z-10"),o(n,"class","mt-12 text-2xl leading-[1.95rem] tracking-[-0.003rem] font-bold text-start break-words"),o(m,"class","mt-3 text-sm"),o(a,"type","text"),o(a,"class","flex-grow py-2.5 px-1 bg-black border-0 cursor-not-allowed text-sm read-only:text-[#B3B8BD] border-b border-[#3F3F3F] placeholder:text-[#757475] "),o(a,"placeholder","본명 혹은 닉네임을 입력하세요"),o(r,"class","mt-9 flex flex-col gap-2"),o(C,"class","mt-2 text-xs text-[#757475]"),o(t,"class","flex flex-col px-5 text-white"),o(x,"class",j="w-full py-3.5 px-4 rounded-[62.5rem] text-white text-center font-semibold text-base "+(l[2]?"bg-primary-500":"bg-[#383838CC]")),o(y,"class","fixed bottom-[2.13rem] left-0 right-0 w-full px-5")},m(e,s){D(e,p,s),D(e,c,s),oe(u,e,s),D(e,h,s),D(e,t,s),d(t,n),d(t,B),d(t,m),d(t,$),d(t,r),d(r,a),G(a,l[0]),d(t,f),d(t,C),d(C,b),D(e,S,s),D(e,y,s),d(y,x),d(x,A),N=!0,V||(T=[Q(a,"input",l[4]),Q(x,"click",l[5])],V=!0)},p(e,[s]){s&1&&a.value!==e[0]&&G(a,e[0]),(!N||s&3)&&g!==(g=(e[0].length>0&&e[1].uniqueName?e[1].uniqueName:"")+"")&&Y(b,g),(!N||s&4&&j!==(j="w-full py-3.5 px-4 rounded-[62.5rem] text-white text-center font-semibold text-base "+(e[2]?"bg-primary-500":"bg-[#383838CC]")))&&o(x,"class",j)},i(e){N||(ue(u.$$.fragment,e),N=!0)},o(e){de(u.$$.fragment,e),N=!1},d(e){e&&(i(p),i(c),i(h),i(t),i(S),i(y)),ce(u,e),V=!1,Z(T)}}}function Ce(l,p,c){let u,h;ee(l,P,r=>c(7,h=r));let t="",n={uniqueName:""},w=!1;function B(r){let a=!0;return c(1,n.uniqueName="",n),/^[a-z0-9._]{1,30}$/.test(r)||(c(1,n.uniqueName="영어 소문자, 숫자, ., _ 로 최대 30자 까지만 허용됩니다.",n),a=!1),a}async function m(){if(!B(t)||w)return;w=!0;const r=pe(),a=_e();let f=await fetch(`${R}/auth/users/${r}`,{method:"PATCH",headers:{Authorization:`Bearer ${a}`,"Content-Type":"application/json"},body:JSON.stringify({uniqueName:t})});if(f.ok)K((await f.json()).data.access);else{const g=await f.json(),b=g.error.message;throw console.warn(b),b.includes("users_unique_name_key")?W.emit("pushSnackbar",{message:"중복된 이름입니다."}):W.emit("pushSnackbar",{message:g.error.message}),w=!1,new Error(b)}f=await fetch(`${R}/auth/users/${r}`,{method:"PATCH",headers:{Authorization:`Bearer ${a}`,"Content-Type":"application/json"},body:JSON.stringify({signedUp:!0})});const C=await f.json();K(C.data.access),te(P,h=!1,h),w=!1,await me(`/users/${r}`)}function E(){t=this.value,c(0,t)}const $=()=>{u&&m()};return l.$$.update=()=>{l.$$.dirty&1&&c(2,u=B(t))},[t,n,u,m,E,$]}class qe extends re{constructor(p){super(),ne(this,p,Ce,he,X,{})}}export{qe as component,ke as universal};
