import{s as E}from"../chunks/sampleData.io6X8Zgw.js";import{s as Y,S as $,A as v,e as F,c as L,b as R,f as y,m as C,i as U,T as V,H as h,B as z,C as H,D as I,u as W,p as G}from"../chunks/scheduler.eX1TEt_S.js";import{S,i as O,t as w,b as g,c as J,a as K,m as N,d as Q}from"../chunks/index.DbIK4CSD.js";import{c as P}from"../chunks/store.DLcfR1sf.js";const X=!1,Z=()=>E,ue=Object.freeze(Object.defineProperty({__proto__:null,load:Z,prerender:X},Symbol.toStringTag,{value:"Module"}));function x(o){let e,s,t,r,a;$(o[8]);const c=o[7].default,l=v(c,o,o[6],null);return{c(){e=F("div"),l&&l.c(),this.h()},l(n){e=L(n,"DIV",{class:!0,id:!0});var u=R(e);l&&l.l(u),u.forEach(y),this.h()},h(){C(e,"class","drawer unselectable flex flex-col svelte-ui0un6"),C(e,"id","bottomDrawer"),$(()=>o[10].call(e))},m(n,u){U(n,e,u),l&&l.m(e,null),o[9](e),s=V(e,o[10].bind(e)),t=!0,r||(a=[h(window,"resize",o[8]),h(e,"pointerdown",o[3]),h(e,"pointerup",o[4])],r=!0)},p(n,[u]){l&&l.p&&(!t||u&64)&&z(l,c,n,n[6],t?I(c,n[6],u,null):H(n[6]),null)},i(n){t||(w(l,n),t=!0)},o(n){g(l,n),t=!1},d(n){n&&y(e),l&&l.d(n),o[9](null),s(),r=!1,W(a)}}}function ee(o,e,s){let t,r,{$$slots:a={},$$scope:c}=e,l=0,n,u,f="80vh",p=!0,d=!1,b=0,m=0;P.subscribe(i=>{i?B():D()});function B(){p||(p=!0,s(5,f="80vh"))}function D(){p&&(p=!1,s(5,f="90vh"),P.set(!1))}function j(i){b=n.getBoundingClientRect().y,m=i.clientY,s(1,n.onpointermove=A,n)}function k(i){d&&(d=!1,D()),m=0,s(1,n.onpointermove=null,n),n.hasPointerCapture(i.pointerId)&&n.releasePointerCapture(i.pointerId)}function A(i){n.hasPointerCapture(i.pointerId)||n.setPointerCapture(i.pointerId);let _=b+i.clientY-m;if(_>=t)return d=!0,s(5,f="90vh");_<r&&(_=r),s(5,f=`${_}px`),d=!1}function M(){s(0,l=window.innerHeight)}function T(i){G[i?"unshift":"push"](()=>{n=i,s(1,n),s(5,f)})}function q(){u=this.clientHeight,s(2,u)}return o.$$set=i=>{"$$scope"in i&&s(6,c=i.$$scope)},o.$$.update=()=>{o.$$.dirty&1&&(t=l-l*.1),o.$$.dirty&34&&n&&s(1,n.style.transform=`translateY(${f})`,n),o.$$.dirty&5&&(r=l-u)},[l,n,u,j,k,f,c,a,M,T,q]}class te extends S{constructor(e){super(),O(this,e,ee,x,Y,{})}}function ne(o){let e;const s=o[0].default,t=v(s,o,o[1],null);return{c(){t&&t.c()},l(r){t&&t.l(r)},m(r,a){t&&t.m(r,a),e=!0},p(r,a){t&&t.p&&(!e||a&2)&&z(t,s,r,r[1],e?I(s,r[1],a,null):H(r[1]),null)},i(r){e||(w(t,r),e=!0)},o(r){g(t,r),e=!1},d(r){t&&t.d(r)}}}function re(o){let e,s;return e=new te({props:{$$slots:{default:[ne]},$$scope:{ctx:o}}}),{c(){J(e.$$.fragment)},l(t){K(e.$$.fragment,t)},m(t,r){N(e,t,r),s=!0},p(t,[r]){const a={};r&2&&(a.$$scope={dirty:r,ctx:t}),e.$set(a)},i(t){s||(w(e.$$.fragment,t),s=!0)},o(t){g(e.$$.fragment,t),s=!1},d(t){Q(e,t)}}}function oe(o,e,s){let{$$slots:t={},$$scope:r}=e;return o.$$set=a=>{"$$scope"in a&&s(1,r=a.$$scope)},[t,r]}class fe extends S{constructor(e){super(),O(this,e,oe,re,Y,{})}}export{fe as component,ue as universal};
