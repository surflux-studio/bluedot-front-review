import{s as u}from"../chunks/scheduler.BfRTalqA.js";import{S as _,i as $,k as d,s as g,e as h,l as x,f as k,c as v,A as C,m as S,g as c,z as y,n as b,o as E,d as l,p as H,t as R,b as U}from"../chunks/index.CAbO0WFF.js";import{g as q}from"../chunks/entry.D28hRbA_.js";import{H as w}from"../chunks/Header.DbElLbur.js";function z(o){let t;return{c(){t=R("@USER의 박스")},l(s){t=U(s,"@USER의 박스")},m(s,a){c(s,t,a)},d(s){s&&l(t)}}}function A(o){let t,s,a,m="백종원 맛집 지도",r,i,f;return t=new w({props:{position:"sticky",leftBack:!0,$$slots:{default:[z]},$$scope:{ctx:o}}}),{c(){d(t.$$.fragment),s=g(),a=h("div"),a.textContent=m},l(e){x(t.$$.fragment,e),s=k(e),a=v(e,"DIV",{"data-svelte-h":!0}),C(a)!=="svelte-foh6yn"&&(a.textContent=m)},m(e,n){S(t,e,n),c(e,s,n),c(e,a,n),r=!0,i||(f=y(a,"click",o[0]),i=!0)},p(e,[n]){const p={};n&2&&(p.$$scope={dirty:n,ctx:e}),t.$set(p)},i(e){r||(b(t.$$.fragment,e),r=!0)},o(e){E(t.$$.fragment,e),r=!1},d(e){e&&(l(s),l(a)),H(t,e),i=!1,f()}}}function B(o){return[()=>q("/boxes/777/chat")]}class j extends _{constructor(t){super(),$(this,t,B,A,u,{})}}export{j as component};