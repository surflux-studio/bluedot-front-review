import{s as J,w as W,a as x,g as N,i as T,x as Y,f as v,k as U,y as X,B as Q,e as O,t as Z,c as S,b as K,z as ee,d as te,v as D,h as B,A as ne}from"../chunks/scheduler.DAfLlBmd.js";import{S as oe,i as se,b as z,c as E,d as w,m as y,t as k,a as I,f as P}from"../chunks/index.CPgTt4Co.js";import{H as ae}from"../chunks/Header.D6D4iAqE.js";import{M as ie}from"../chunks/Map.CSMsuf8p.js";import{a as H}from"../chunks/map.CABo9SJ6.js";import{p as re}from"../chunks/stores.BAQxrYTs.js";import{A as ue}from"../chunks/ActionSheet.o3dEYWEW.js";import{F as le}from"../chunks/Field.DIgb7Sea.js";import{I as R,A as pe}from"../chunks/store.CJmM3jzm.js";import{e as A}from"../chunks/emitter.E5P-NQ8u.js";import{i as fe}from"../chunks/sign.CAJizXj9.js";import{g as me}from"../chunks/entry.Cn8bzhtR.js";import{t as ce}from"../chunks/proj.DXH8zrwl.js";import{C as de}from"../chunks/device.BndSpbyA.js";import{K as V}from"../chunks/ActionSheet.svelte_svelte_type_style_lang.DKZ-A_zm.js";import{A as Ce}from"../chunks/ActionSheetOpenApp.COuikgUA.js";function _e(s){let a,t,f="이 장소를 뭐라고 부를까요?",C,o,l,d,i,c,r,$,_,b,g,e;function p(u){s[8](u)}let h={clear:!0,clearColor:"#757475",padding:"pb-2.5",border:"border-b border-b-[#757475]",fontSize:"font-normal text-sm",fontColor:"text-white",limit:20,useCounter:!1,backgroundColor:"bg-transparent",placeholder:"장소 이름을 입력하세요",placeholderColor:"#757475"};return s[1]!==void 0&&(h.value=s[1]),l=new le({props:h}),W.push(()=>z(l,"value",p)),{c(){a=O("div"),t=O("p"),t.textContent=f,C=x(),o=O("div"),E(l.$$.fragment),i=x(),c=O("div"),r=O("button"),$=Z("장소 추가"),this.h()},l(u){a=S(u,"DIV",{class:!0});var m=K(a);t=S(m,"P",{class:!0,"data-svelte-h":!0}),ee(t)!=="svelte-9vo44h"&&(t.textContent=f),C=N(m),o=S(m,"DIV",{class:!0});var n=K(o);w(l.$$.fragment,n),n.forEach(v),i=N(m),c=S(m,"DIV",{class:!0});var L=K(c);r=S(L,"BUTTON",{class:!0});var M=K(r);$=te(M,"장소 추가"),M.forEach(v),L.forEach(v),m.forEach(v),this.h()},h(){D(t,"class","py-2.5 font-semibold text-sm leading-[17px] text-white"),D(o,"class","box-name flex flex-col gap-4 py-2.5"),D(r,"class","w-full p-2.5 rounded-[50px] font-medium text-sm leading-[17px] bg-[#0C79FE] text-white disabled:bg-[#383838]/70 disabled:text-[#757475]"),r.disabled=_=!s[1].trim(),D(c,"class","py-2.5"),D(a,"class","px-4")},m(u,m){T(u,a,m),B(a,t),B(a,C),B(a,o),y(l,o,null),B(a,i),B(a,c),B(c,r),B(r,$),b=!0,g||(e=ne(r,"click",s[5]),g=!0)},p(u,m){const n={};!d&&m&2&&(d=!0,n.value=u[1],Y(()=>d=!1)),l.$set(n),(!b||m&2&&_!==(_=!u[1].trim()))&&(r.disabled=_)},i(u){b||(k(l.$$.fragment,u),b=!0)},o(u){I(l.$$.fragment,u),b=!1},d(u){u&&v(a),P(l),g=!1,e()}}}function be(s){let a,t,f,C,o,l,d,i,c,r;a=new ae({props:{position:"fixed",leftBack:"black"}}),f=new ie({props:{onSelect:s[4],mapY:s[2],allowEdit:!R,whenCancelEdit:s[7]}});function $(e){s[9](e)}let _={fixed:!0,noHandle:!0,$$slots:{default:[_e]},$$scope:{ctx:s}};s[0]!==void 0&&(_.isOpen=s[0]),o=new ue({props:_}),W.push(()=>z(o,"isOpen",$));function b(e){s[10](e)}let g={};return s[3]!==void 0&&(g.isOpen=s[3]),i=new Ce({props:g}),W.push(()=>z(i,"isOpen",b)),{c(){E(a.$$.fragment),t=x(),E(f.$$.fragment),C=x(),E(o.$$.fragment),d=x(),E(i.$$.fragment)},l(e){w(a.$$.fragment,e),t=N(e),w(f.$$.fragment,e),C=N(e),w(o.$$.fragment,e),d=N(e),w(i.$$.fragment,e)},m(e,p){y(a,e,p),T(e,t,p),y(f,e,p),T(e,C,p),y(o,e,p),T(e,d,p),y(i,e,p),r=!0},p(e,[p]){const h={};p&4&&(h.mapY=e[2]),p&8&&(h.whenCancelEdit=e[7]),f.$set(h);const u={};p&131074&&(u.$$scope={dirty:p,ctx:e}),!l&&p&1&&(l=!0,u.isOpen=e[0],Y(()=>l=!1)),o.$set(u);const m={};!c&&p&8&&(c=!0,m.isOpen=e[3],Y(()=>c=!1)),i.$set(m)},i(e){r||(k(a.$$.fragment,e),k(f.$$.fragment,e),k(o.$$.fragment,e),k(i.$$.fragment,e),r=!0)},o(e){I(a.$$.fragment,e),I(f.$$.fragment,e),I(o.$$.fragment,e),I(i.$$.fragment,e),r=!1},d(e){e&&(v(t),v(C),v(d)),P(a,e),P(f,e),P(o,e),P(i,e)}}}function ge(s,a,t){let f;U(s,re,n=>t(12,f=n));const C=de.isNativePlatform();let o=!1,l="",d=!1,i,c=0,r=!1;function $(){V.addListener("keyboardWillShow",n=>{t(2,c=-200)}),V.addListener("keyboardWillHide",()=>{t(2,c=0)})}function _(){V.removeAllListeners()}X(()=>{let n=f.url.searchParams.get("location");n&&(f.url.searchParams.delete("location"),t(6,i=n.split(",").map(Number)),me(f.url.toString(),{replaceState:!0,invalidateAll:!1})),C&&$()}),Q(()=>{H.setPosition(void 0),C&&_()});function b(n){H.setPosition(n),t(0,o=n!==void 0)}function g(n){t(6,i=n),A.emit("flyTo",i)}function e(){if(R)return t(3,r=!0);if(!fe())return A.emit("showSignInModal",{removable:!0});if(d)return A.emit("pushSnackbar",{message:"처리중입니다. 잠시 후 다시 시도해주세요"});d=!0;const n=l.trim();if(!n||i===void 0)return;const[L,M]=ce(i);fetch(`${pe}/places`,{method:"POST",body:JSON.stringify([{name:n,location:{lon:Number(L.toFixed(6)),lat:Number(M.toFixed(6))}}])}).then(async F=>{var q,G;if(!F.ok)return A.emit("pushSnackbar",{message:"일시적으로 장애가 발생했습니다."});const j=(G=(q=(await F.json()).data)==null?void 0:q.at(0))==null?void 0:G.idx;t(6,i=void 0),A.emit("pushSnackbar",{message:`'${n}' 장소를 추가했습니다`}),j&&A.emit("addIconByPlaceIdx",j)}).catch(F=>{console.log(F),A.emit("pushSnackbar",{message:"일시적으로 장애가 발생했습니다."})}).finally(()=>{d=!1})}const p=()=>{if(R)return t(3,r=!0)};function h(n){l=n,t(1,l),t(0,o)}function u(n){o=n,t(0,o)}function m(n){r=n,t(3,r)}return s.$$.update=()=>{s.$$.dirty&1&&(o||(t(1,l=""),d=!1,H.setPosition(void 0))),s.$$.dirty&64&&b(i)},[o,l,c,r,g,e,i,p,h,u,m]}class Me extends oe{constructor(a){super(),se(this,a,ge,be,J,{})}}export{Me as component};
