import{s as y,F as _,i as k,f as u,m as V,e as b,c as h,b as p,q as v,h as w,I,v as q,u as C,o as D,p as E,y as M}from"./scheduler.CAgUjVVh.js";import{S as O,i as S,t as c,g as j,a as d,f as z}from"./index.BArRcuOw.js";import"./sign.0LSMDjDO.js";import{c as F}from"./clickOutside.DnwsFdy-.js";function g(n){let t,s,e,l,r;const f=n[4].default,i=V(f,n,n[3],null);return{c(){t=b("div"),s=b("div"),i&&i.c(),this.h()},l(a){t=h(a,"DIV",{class:!0});var o=p(t);s=h(o,"DIV",{class:!0});var m=p(s);i&&i.l(m),m.forEach(u),o.forEach(u),this.h()},h(){v(s,"class","bg-white rounded-xl p-6 max-w-96 max-h-[90%] shadow-lg transform transition-all mx-4 overflow-scroll"),v(t,"class","fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[60]")},m(a,o){k(a,t,o),w(t,s),i&&i.m(s,null),e=!0,l||(r=[I(F.call(null,s)),q(s,"outsideclick",n[1])],l=!0)},p(a,o){i&&i.p&&(!e||o&8)&&C(i,f,a,a[3],e?E(f,a[3],o,null):D(a[3]),null)},i(a){e||(c(i,a),e=!0)},o(a){d(i,a),e=!1},d(a){a&&u(t),i&&i.d(a),l=!1,M(r)}}}function N(n){let t,s,e=n[0]&&g(n);return{c(){e&&e.c(),t=_()},l(l){e&&e.l(l),t=_()},m(l,r){e&&e.m(l,r),k(l,t,r),s=!0},p(l,[r]){l[0]?e?(e.p(l,r),r&1&&c(e,1)):(e=g(l),e.c(),c(e,1),e.m(t.parentNode,t)):e&&(j(),d(e,1,1,()=>{e=null}),z())},i(l){s||(c(e),s=!0)},o(l){d(e),s=!1},d(l){l&&u(t),e&&e.d(l)}}}function T(n,t,s){let{$$slots:e={},$$scope:l}=t,{modalVisible:r=!1}=t,{removable:f=!0}=t,i=!0;function a(o){r&&f&&!i&&s(0,r=!1)}return n.$$set=o=>{"modalVisible"in o&&s(0,r=o.modalVisible),"removable"in o&&s(2,f=o.removable),"$$scope"in o&&s(3,l=o.$$scope)},n.$$.update=()=>{n.$$.dirty&1&&r&&(i=!0,setTimeout(()=>{i=!1},50))},[r,a,f,l,e]}class J extends O{constructor(t){super(),S(this,t,T,N,y,{modalVisible:0,removable:2})}}export{J as M};