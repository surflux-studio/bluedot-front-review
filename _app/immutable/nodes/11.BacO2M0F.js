import{s as q,w as H,a as N,g as M,i as K,x as V,f as h,k as G,y as J,B as U,e as S,t as X,c as D,b as L,z as Q,d as Z,v as E,h as A,A as ee}from"../chunks/scheduler.cMGevFK0.js";import{S as te,i as ne,b as R,c as I,d as w,m as y,t as P,a as k,f as x}from"../chunks/index.DSosqu5f.js";import{H as oe}from"../chunks/Header.DSKviwpU.js";import{M as ae}from"../chunks/Map.CUHCoTgr.js";import{a as T}from"../chunks/map.hI-n5vJ5.js";import{p as se}from"../chunks/stores.DqM6WIWo.js";import{A as ie,o as re,a as ue}from"../chunks/ActionSheet.CmgiZBYl.js";import{F as le}from"../chunks/Field.D61a2UMt.js";import{I as W,A as pe,b as fe}from"../chunks/store.CGvrHMmq.js";import{e as O}from"../chunks/emitter.E5P-NQ8u.js";import{i as me}from"../chunks/sign.3vAERsXi.js";import{g as ce}from"../chunks/entry.DIA2gAip.js";import{t as de}from"../chunks/proj.DXH8zrwl.js";import{C as Ce}from"../chunks/device.CFvo2wwc.js";import"../chunks/ActionSheet.svelte_svelte_type_style_lang.3WPtczT5.js";import{A as _e}from"../chunks/ActionSheetOpenApp.CqC-qYh5.js";function ge(o){let a,n,f="이 장소를 뭐라고 부를까요?",d,s,r,l,p,m,c,v,C,_,g,e;function u(i){o[8](i)}let b={clear:!0,clearColor:"#757475",padding:"pb-2.5",border:"border-b border-b-[#757475]",fontSize:"font-normal text-sm",fontColor:"text-white",limit:20,useCounter:!1,backgroundColor:"bg-transparent",placeholder:"장소 이름을 입력하세요",placeholderColor:"#757475"};return o[1]!==void 0&&(b.value=o[1]),r=new le({props:b}),H.push(()=>R(r,"value",u)),{c(){a=S("div"),n=S("p"),n.textContent=f,d=N(),s=S("div"),I(r.$$.fragment),p=N(),m=S("div"),c=S("button"),v=X("장소 추가"),this.h()},l(i){a=D(i,"DIV",{class:!0});var t=L(a);n=D(t,"P",{class:!0,"data-svelte-h":!0}),Q(n)!=="svelte-9vo44h"&&(n.textContent=f),d=M(t),s=D(t,"DIV",{class:!0});var $=L(s);w(r.$$.fragment,$),$.forEach(h),p=M(t),m=D(t,"DIV",{class:!0});var F=L(m);c=D(F,"BUTTON",{class:!0});var B=L(c);v=Z(B,"장소 추가"),B.forEach(h),F.forEach(h),t.forEach(h),this.h()},h(){E(n,"class","py-2.5 font-semibold text-sm leading-[17px] text-white"),E(s,"class","box-name flex flex-col gap-4 py-2.5"),E(c,"class","w-full p-2.5 rounded-[50px] font-medium text-sm leading-[17px] bg-[#0C79FE] text-white disabled:bg-[#383838]/70 disabled:text-[#757475]"),c.disabled=C=!o[1].trim(),E(m,"class","py-2.5"),E(a,"class","px-4")},m(i,t){K(i,a,t),A(a,n),A(a,d),A(a,s),y(r,s,null),A(a,p),A(a,m),A(m,c),A(c,v),_=!0,g||(e=ee(c,"click",o[5]),g=!0)},p(i,t){const $={};!l&&t&2&&(l=!0,$.value=i[1],V(()=>l=!1)),r.$set($),(!_||t&2&&C!==(C=!i[1].trim()))&&(c.disabled=C)},i(i){_||(P(r.$$.fragment,i),_=!0)},o(i){k(r.$$.fragment,i),_=!1},d(i){i&&h(a),x(r),g=!1,e()}}}function be(o){let a,n,f,d,s,r,l,p,m,c;a=new oe({props:{position:"fixed",leftBack:"black"}}),f=new ae({props:{onSelect:o[4],mapY:o[2],allowEdit:!W,whenCancelEdit:o[7]}});function v(e){o[9](e)}let C={fixed:!0,noHandle:!0,$$slots:{default:[ge]},$$scope:{ctx:o}};o[0]!==void 0&&(C.isOpen=o[0]),s=new ie({props:C}),H.push(()=>R(s,"isOpen",v));function _(e){o[10](e)}let g={};return o[3]!==void 0&&(g.isOpen=o[3]),p=new _e({props:g}),H.push(()=>R(p,"isOpen",_)),{c(){I(a.$$.fragment),n=N(),I(f.$$.fragment),d=N(),I(s.$$.fragment),l=N(),I(p.$$.fragment)},l(e){w(a.$$.fragment,e),n=M(e),w(f.$$.fragment,e),d=M(e),w(s.$$.fragment,e),l=M(e),w(p.$$.fragment,e)},m(e,u){y(a,e,u),K(e,n,u),y(f,e,u),K(e,d,u),y(s,e,u),K(e,l,u),y(p,e,u),c=!0},p(e,[u]){const b={};u&4&&(b.mapY=e[2]),u&8&&(b.whenCancelEdit=e[7]),f.$set(b);const i={};u&131074&&(i.$$scope={dirty:u,ctx:e}),!r&&u&1&&(r=!0,i.isOpen=e[0],V(()=>r=!1)),s.$set(i);const t={};!m&&u&8&&(m=!0,t.isOpen=e[3],V(()=>m=!1)),p.$set(t)},i(e){c||(P(a.$$.fragment,e),P(f.$$.fragment,e),P(s.$$.fragment,e),P(p.$$.fragment,e),c=!0)},o(e){k(a.$$.fragment,e),k(f.$$.fragment,e),k(s.$$.fragment,e),k(p.$$.fragment,e),c=!1},d(e){e&&(h(n),h(d),h(l)),x(a,e),x(f,e),x(s,e),x(p,e)}}}function he(o,a,n){let f;G(o,se,t=>n(12,f=t)),Ce.isNativePlatform();let d=!1,s="",r=!1,l,p=0,m=!1;function c(t){n(2,p=-200)}function v(){n(2,p=0)}J(()=>{let t=f.url.searchParams.get("location");t&&(f.url.searchParams.delete("location"),n(6,l=t.split(",").map(Number)),ce(f.url.toString(),{replaceState:!0,invalidateAll:!1})),re(()=>{},c,v)}),U(()=>{T.setPosition(void 0),ue()});function C(t){T.setPosition(t),n(0,d=t!==void 0)}function _(t){n(6,l=t),O.emit("flyTo",l)}function g(){if(W)return n(3,m=!0);if(!me())return O.emit("showSignInModal",{removable:!0});if(r)return O.emit("pushSnackbar",{message:"처리중입니다. 잠시 후 다시 시도해주세요"});r=!0;const t=s.trim();if(!t||l===void 0)return;const[$,F]=de(l);fetch(`${pe}/places`,{method:"POST",headers:{"x-api-version":fe.PLACE},body:JSON.stringify([{name:t,location:{lon:Number($.toFixed(6)),lat:Number(F.toFixed(6))}}])}).then(async B=>{var z,j;if(!B.ok)return O.emit("pushSnackbar",{message:"일시적으로 장애가 발생했습니다."});const Y=(j=(z=(await B.json()).data)==null?void 0:z.at(0))==null?void 0:j.idx;n(6,l=void 0),O.emit("pushSnackbar",{message:`'${t}' 장소를 추가했습니다`}),Y&&O.emit("addIconByPlaceIdx",Y)}).catch(B=>{console.log(B),O.emit("pushSnackbar",{message:"일시적으로 장애가 발생했습니다."})}).finally(()=>{r=!1})}const e=()=>{if(W)return n(3,m=!0)};function u(t){s=t,n(1,s),n(0,d)}function b(t){d=t,n(0,d)}function i(t){m=t,n(3,m)}return o.$$.update=()=>{o.$$.dirty&1&&(d||(n(1,s=""),r=!1,T.setPosition(void 0))),o.$$.dirty&64&&C(l)},[d,s,p,m,_,g,l,e,u,b,i]}class Le extends te{constructor(a){super(),ne(this,a,he,be,q,{})}}export{Le as component};
