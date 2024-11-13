import{s as V,l as W,a as C,e as G,g as S,c as J,b as K,f as $,m as L,i as h,o as Q,k as X,n as Y,t as z,d as H}from"../chunks/scheduler.Bw1HVZ4I.js";import{S as Z,i as ee,e as te,c as _,a as g,m as b,b as l,f as re,t as c,d,g as oe}from"../chunks/index.B-tLs4nj.js";import{g as F}from"../chunks/entry.CvT5G2XL.js";import{F as M}from"../chunks/Footer.bMusJYNT.js";import{H as j}from"../chunks/Header.jz9IgoZV.js";import{M as se}from"../chunks/Map.DD8sR9Z9.js";import{N as ne}from"../chunks/NavigationBar.CyG0CIvB.js";import{B as R}from"../chunks/Button.CrulLpn4.js";import{g as ae}from"../chunks/searchParams.By_jWg9S.js";import{e as v}from"../chunks/units.DupG7vLm.js";import{p as ie}from"../chunks/stores.DL5PQeGw.js";import{S as fe}from"../chunks/SearchSheet.DqmSLSZA.js";function ue(a){let e,r;return e=new j({props:{position:"fixed",rightFeed:!0}}),{c(){_(e.$$.fragment)},l(t){g(e.$$.fragment,t)},m(t,n){b(e,t,n),r=!0},i(t){r||(c(e.$$.fragment,t),r=!0)},o(t){l(e.$$.fragment,t),r=!1},d(t){d(e,t)}}}function le(a){let e,r;return e=new j({props:{position:"fixed",leftBack:!0}}),{c(){_(e.$$.fragment)},l(t){g(e.$$.fragment,t)},m(t,n){b(e,t,n),r=!0},i(t){r||(c(e.$$.fragment,t),r=!0)},o(t){l(e.$$.fragment,t),r=!1},d(t){d(e,t)}}}function ce(a){let e,r;return e=new M({props:{position:"fixed",leftReposition:!0,centerSearch:!0,right:"add"}}),{c(){_(e.$$.fragment)},l(t){g(e.$$.fragment,t)},m(t,n){b(e,t,n),r=!0},p:Y,i(t){r||(c(e.$$.fragment,t),r=!0)},o(t){l(e.$$.fragment,t),r=!1},d(t){d(e,t)}}}function me(a){let e,r;return e=new M({props:{position:"fixed",bottom:"2rem",$$slots:{default:[_e]},$$scope:{ctx:a}}}),{c(){_(e.$$.fragment)},l(t){g(e.$$.fragment,t)},m(t,n){b(e,t,n),r=!0},p(t,n){const s={};n&128&&(s.$$scope={dirty:n,ctx:t}),e.$set(s)},i(t){r||(c(e.$$.fragment,t),r=!0)},o(t){l(e.$$.fragment,t),r=!1},d(t){d(e,t)}}}function pe(a){let e;return{c(){e=z("이 장소가 아니예요")},l(r){e=H(r,"이 장소가 아니예요")},m(r,t){h(r,e,t)},d(r){r&&$(e)}}}function $e(a){let e;return{c(){e=z("이 장소가 맞아요")},l(r){e=H(r,"이 장소가 맞아요")},m(r,t){h(r,e,t)},d(r){r&&$(e)}}}function _e(a){let e,r,t,n;return e=new R({props:{backgroundColor:"bg-gray-300",textColor:"text-white",$$slots:{default:[pe]},$$scope:{ctx:a}}}),e.$on("click",a[5]),t=new R({props:{backgroundColor:"bg-primary-500",textColor:"text-white",$$slots:{default:[$e]},$$scope:{ctx:a}}}),t.$on("click",a[3]),{c(){_(e.$$.fragment),r=C(),_(t.$$.fragment)},l(s){g(e.$$.fragment,s),r=S(s),g(t.$$.fragment,s)},m(s,i){b(e,s,i),h(s,r,i),b(t,s,i),n=!0},p(s,i){const p={};i&128&&(p.$$scope={dirty:i,ctx:s}),e.$set(p);const m={};i&128&&(m.$$scope={dirty:i,ctx:s}),t.$set(m)},i(s){n||(c(e.$$.fragment,s),c(t.$$.fragment,s),n=!0)},o(s){l(e.$$.fragment,s),l(t.$$.fragment,s),n=!1},d(s){s&&$(r),d(e,s),d(t,s)}}}function ge(a){let e,r,t,n,s,i,p,m,x,f,y,B,k,N;const D=[le,ue],w=[];function I(o,u){return o[2]==="post"||o[2]==="box"||o[1]?0:1}e=I(a),r=w[e]=D[e](a),s=new se({});const q=[me,ce],O=[];function T(o,u){return o[2]==="post"||o[2]==="box"?0:1}p=T(a),m=O[p]=q[p](a);function U(o){a[6](o)}let A={};return a[0]!==void 0&&(A.isOpen=a[0]),f=new fe({props:A}),W.push(()=>te(f,"isOpen",U)),k=new ne({props:{show:a[2]!=="post"}}),{c(){r.c(),t=C(),n=G("div"),_(s.$$.fragment),i=C(),m.c(),x=C(),_(f.$$.fragment),B=C(),_(k.$$.fragment),this.h()},l(o){r.l(o),t=S(o),n=J(o,"DIV",{class:!0});var u=K(n);g(s.$$.fragment,u),u.forEach($),i=S(o),m.l(o),x=S(o),g(f.$$.fragment,o),B=S(o),g(k.$$.fragment,o),this.h()},h(){L(n,"class","fixed top-0 left-0 w-full h-full")},m(o,u){w[e].m(o,u),h(o,t,u),h(o,n,u),b(s,n,null),h(o,i,u),O[p].m(o,u),h(o,x,u),b(f,o,u),h(o,B,u),b(k,o,u),N=!0},p(o,[u]){let P=e;e=I(o),e!==P&&(oe(),l(w[P],1,1,()=>{w[P]=null}),re(),r=w[e],r||(r=w[e]=D[e](o),r.c()),c(r,1),r.m(t.parentNode,t)),m.p(o,u);const E={};!y&&u&1&&(y=!0,E.isOpen=o[0],Q(()=>y=!1)),f.$set(E)},i(o){N||(c(r),c(s.$$.fragment,o),c(m),c(f.$$.fragment,o),c(k.$$.fragment,o),N=!0)},o(o){l(r),l(s.$$.fragment,o),l(m),l(f.$$.fragment,o),l(k.$$.fragment,o),N=!1},d(o){o&&($(t),$(n),$(i),$(x),$(B)),w[e].d(o),d(s),O[p].d(o),d(f,o),d(k,o)}}}function be(a,e,r){let t,n;X(a,ie,f=>r(4,n=f));const s=n.url.searchParams.get("type");let i=!1;v.on("openSearch",()=>{r(0,i=!0)}),v.on("closeSearch",()=>{r(0,i=!1)});async function p(){if(s==="box"){const f=Number(n.url.searchParams.get("boxIdx"));if(Number.isNaN(f)||!f)return F("/boxes");(await fetch(`https://azit.surflux.studio/boxes/${f}/places/${n.url.searchParams.get("placeIdx")}`,{method:"PUT",headers:{Authorization:`Bearer ${sessionStorage.getItem("jwt")}`}})).ok||v.emit("pushSnackbar",{message:"장소 추가에 실패했습니다."}),F(`/boxes/${f}/detail`)}else s==="post"&&ae("/viewer/edit")}const m=()=>window.history.back();function x(f){i=f,r(0,i)}return a.$$.update=()=>{a.$$.dirty&16&&r(1,t=n.url.searchParams.get("withBack")==="true")},[i,t,s,p,n,m,x]}class ve extends Z{constructor(e){super(),ee(this,e,be,ge,V,{})}}export{ve as component};
