import{s as A}from"../chunks/sampleData.io6X8Zgw.js";import{s as z,Q as y,w as Y,e as E,c as F,b as K,f as D,m as C,i as Q,R as T,K as h,x as v,y as I,z as H,L as U,C as V}from"../chunks/scheduler.CrpwKiPD.js";import{S as O,i as S,t as w,b as g,c as W,a as G,m as J,d as N}from"../chunks/index.B4UElESh.js";import{a as P}from"../chunks/store.i_InVmSy.js";const X=!1,Z=()=>A,ue=Object.freeze(Object.defineProperty({__proto__:null,load:Z,prerender:X},Symbol.toStringTag,{value:"Module"}));function x(o){let e,s,t,r,a;y(o[8]);const c=o[7].default,l=Y(c,o,o[6],null);return{c(){e=E("div"),l&&l.c(),this.h()},l(n){e=F(n,"DIV",{class:!0,id:!0});var u=K(e);l&&l.l(u),u.forEach(D),this.h()},h(){C(e,"class","drawer unselectable flex flex-col svelte-ui0un6"),C(e,"id","bottomDrawer"),y(()=>o[10].call(e))},m(n,u){Q(n,e,u),l&&l.m(e,null),o[9](e),s=T(e,o[10].bind(e)),t=!0,r||(a=[h(window,"resize",o[8]),h(e,"pointerdown",o[3]),h(e,"pointerup",o[4])],r=!0)},p(n,[u]){l&&l.p&&(!t||u&64)&&v(l,c,n,n[6],t?H(c,n[6],u,null):I(n[6]),null)},i(n){t||(w(l,n),t=!0)},o(n){g(l,n),t=!1},d(n){n&&D(e),l&&l.d(n),o[9](null),s(),r=!1,U(a)}}}function ee(o,e,s){let t,r,{$$slots:a={},$$scope:c}=e,l=0,n,u,f="80vh",p=!0,d=!1,b=0,m=0;P.subscribe(i=>{i?j():$()});function j(){p||(p=!0,s(5,f="80vh"))}function $(){p&&(p=!1,s(5,f="90vh"),P.set(!1))}function k(i){b=n.getBoundingClientRect().y,m=i.clientY,s(1,n.onpointermove=L,n)}function B(i){d&&(d=!1,$()),m=0,s(1,n.onpointermove=null,n),n.hasPointerCapture(i.pointerId)&&n.releasePointerCapture(i.pointerId)}function L(i){n.hasPointerCapture(i.pointerId)||n.setPointerCapture(i.pointerId);let _=b+i.clientY-m;if(_>=t)return d=!0,s(5,f="90vh");_<r&&(_=r),s(5,f=`${_}px`),d=!1}function M(){s(0,l=window.innerHeight)}function R(i){V[i?"unshift":"push"](()=>{n=i,s(1,n),s(5,f)})}function q(){u=this.clientHeight,s(2,u)}return o.$$set=i=>{"$$scope"in i&&s(6,c=i.$$scope)},o.$$.update=()=>{o.$$.dirty&1&&(t=l-l*.1),o.$$.dirty&34&&n&&s(1,n.style.transform=`translateY(${f})`,n),o.$$.dirty&5&&(r=l-u)},[l,n,u,k,B,f,c,a,M,R,q]}class te extends O{constructor(e){super(),S(this,e,ee,x,z,{})}}function ne(o){let e;const s=o[0].default,t=Y(s,o,o[1],null);return{c(){t&&t.c()},l(r){t&&t.l(r)},m(r,a){t&&t.m(r,a),e=!0},p(r,a){t&&t.p&&(!e||a&2)&&v(t,s,r,r[1],e?H(s,r[1],a,null):I(r[1]),null)},i(r){e||(w(t,r),e=!0)},o(r){g(t,r),e=!1},d(r){t&&t.d(r)}}}function re(o){let e,s;return e=new te({props:{$$slots:{default:[ne]},$$scope:{ctx:o}}}),{c(){W(e.$$.fragment)},l(t){G(e.$$.fragment,t)},m(t,r){J(e,t,r),s=!0},p(t,[r]){const a={};r&2&&(a.$$scope={dirty:r,ctx:t}),e.$set(a)},i(t){s||(w(e.$$.fragment,t),s=!0)},o(t){g(e.$$.fragment,t),s=!1},d(t){N(e,t)}}}function oe(o,e,s){let{$$slots:t={},$$scope:r}=e;return o.$$set=a=>{"$$scope"in a&&s(1,r=a.$$scope)},[t,r]}class fe extends O{constructor(e){super(),S(this,e,oe,re,z,{})}}export{fe as component,ue as universal};
