import{s as N,a as b,g as h,i as x,f,k as I,o as w,e as y,t as B,c as P,b as k,d as v,q as M,h as q,n as A}from"../chunks/scheduler.BnheM4g2.js";import{S as C,i as E,c as $,a as u,m as l,t as _,b as g,d}from"../chunks/index.CP53dWnj.js";import{H as G,A as H}from"../chunks/Header.DTOPxOfb.js";import{M as R}from"../chunks/Map.CW4OgkYu.js";import{p as S}from"../chunks/stores.h1yDrrE5.js";import{U as T}from"../chunks/UpperBoxes.CYCbWDxZ.js";import{g as U}from"../chunks/entry.wtivmaCQ.js";function j(m){let t,r;return{c(){t=y("div"),r=B(m[1]),this.h()},l(a){t=P(a,"DIV",{class:!0});var o=k(t);r=v(o,m[1]),o.forEach(f),this.h()},h(){M(t,"class","typo-sub-h2 text-gray-900")},m(a,o){x(a,t,o),q(t,r)},p:A,d(a){a&&f(t)}}}function D(m){let t,r,a,o,n,p;return t=new G({props:{position:"fixed",leftBack:!0,$$slots:{default:[j]},$$scope:{ctx:m}}}),a=new R({}),n=new T({props:{boxes:m[0],top:"top-[100px]",onBoxClick:m[2]}}),{c(){$(t.$$.fragment),r=b(),$(a.$$.fragment),o=b(),$(n.$$.fragment)},l(e){u(t.$$.fragment,e),r=h(e),u(a.$$.fragment,e),o=h(e),u(n.$$.fragment,e)},m(e,s){l(t,e,s),x(e,r,s),l(a,e,s),x(e,o,s),l(n,e,s),p=!0},p(e,[s]){const i={};s&32&&(i.$$scope={dirty:s,ctx:e}),t.$set(i);const c={};s&1&&(c.boxes=e[0]),n.$set(c)},i(e){p||(_(t.$$.fragment,e),_(a.$$.fragment,e),_(n.$$.fragment,e),p=!0)},o(e){g(t.$$.fragment,e),g(a.$$.fragment,e),g(n.$$.fragment,e),p=!1},d(e){e&&(f(r),f(o)),d(t,e),d(a,e),d(n,e)}}}function L(m,t,r){let a;I(m,S,s=>r(3,a=s));let o=[];const n=a.url.searchParams.get("placeName");async function p(){const s=Number(a.url.searchParams.get("placeIdx"));if(Number.isNaN(s)||!s)return;const i=await fetch(`${H}/places/${s}/boxes`,{method:"GET"});if(!i.ok)return;const c=await i.json();c.data&&r(0,o=c.data)}w(()=>{p()});function e(s){U(`/boxes/${s}/detail`)}return[o,n,e]}class Q extends C{constructor(t){super(),E(this,t,L,D,N,{})}}export{Q as component};
