import{s as R,z as B,a as I,g as A,i as P,A as C,f as l,k as y,w as E,e as G,t as H,c as S,b as T,d as U,v as j,h as q,n as z}from"../chunks/scheduler.DH3jNSXp.js";import{S as L,i as O,f as M,c as $,b as h,m as x,t as k,a as N,e as w}from"../chunks/index.DhGy8j-A.js";import{H as W}from"../chunks/Header.z4duFi8V.js";import{M as v}from"../chunks/Map.tJon-GKP.js";import{p as D}from"../chunks/stores.CXxRfoGC.js";import{U as F}from"../chunks/UpperBoxes.CJ2gxej5.js";import{g as J}from"../chunks/entry.BdYgJ81T.js";import{A as K}from"../chunks/sign.smWRy2_s.js";function Q(a){let t,r;return{c(){t=G("p"),r=H(a[3]),this.h()},l(n){t=S(n,"P",{class:!0});var o=T(t);r=U(o,a[3]),o.forEach(l),this.h()},h(){j(t,"class","font-semibold text-[15px] leading-[18px] text-black")},m(n,o){P(n,t,o),q(t,r)},p:z,d(n){n&&l(t)}}}function V(a){let t,r,n,o,m,i,f,u;function _(e){a[5](e)}let c={position:"fixed",leftBack:"black",$$slots:{default:[Q]},$$scope:{ctx:a}};a[0]!==void 0&&(c.header=a[0]),t=new W({props:c}),B.push(()=>M(t,"header",_)),o=new v({});function d(e){a[6](e)}let s={boxes:a[1],onBoxClick:a[4]};return a[2]!==void 0&&(s.top=a[2]),i=new F({props:s}),B.push(()=>M(i,"top",d)),{c(){$(t.$$.fragment),n=I(),$(o.$$.fragment),m=I(),$(i.$$.fragment)},l(e){h(t.$$.fragment,e),n=A(e),h(o.$$.fragment,e),m=A(e),h(i.$$.fragment,e)},m(e,p){x(t,e,p),P(e,n,p),x(o,e,p),P(e,m,p),x(i,e,p),u=!0},p(e,[p]){const b={};p&512&&(b.$$scope={dirty:p,ctx:e}),!r&&p&1&&(r=!0,b.header=e[0],C(()=>r=!1)),t.$set(b);const g={};p&2&&(g.boxes=e[1]),!f&&p&4&&(f=!0,g.top=e[2],C(()=>f=!1)),i.$set(g)},i(e){u||(k(t.$$.fragment,e),k(o.$$.fragment,e),k(i.$$.fragment,e),u=!0)},o(e){N(t.$$.fragment,e),N(o.$$.fragment,e),N(i.$$.fragment,e),u=!1},d(e){e&&(l(n),l(m)),w(t,e),w(o,e),w(i,e)}}}function X(a,t,r){let n,o;y(a,D,s=>r(7,o=s));const m=o.url.searchParams.get("placeName");let i=[],f;async function u(){const s=Number(o.url.searchParams.get("placeIdx"));if(Number.isNaN(s)||!s)return;const e=await fetch(`${K}/places/${s}/boxes`,{method:"GET"});if(!e.ok)return;const p=await e.json();p.data&&r(1,i=p.data)}E(()=>{u()});function _(s){J(`/boxes/${s}`)}function c(s){f=s,r(0,f)}function d(s){n=s,r(2,n),r(0,f)}return a.$$.update=()=>{var s;a.$$.dirty&1&&r(2,n=((s=f==null?void 0:f.getClientRects()[0])==null?void 0:s.height)??0)},[f,i,n,m,_,c,d]}class re extends L{constructor(t){super(),O(this,t,X,V,R,{})}}export{re as component};
