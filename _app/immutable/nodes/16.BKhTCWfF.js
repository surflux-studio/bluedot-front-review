import{s as M,n as g,r as q}from"../chunks/scheduler.D1-rurOj.js";import{S,i as T,e as u,s as _,c as v,m as w,f as $,a as E,d as p,w as D,g as d,h as x,o as H,k as y,l as b,n as C,p as j,q as k,r as P}from"../chunks/index.y3pBGFQk.js";import{H as F}from"../chunks/Header.O8DS29zv.js";import{g as I}from"../chunks/entry.CGxj2QtY.js";import{F as L}from"../chunks/Footer.ClN8pM1E.js";new TextEncoder;const O=({params:o})=>({posts:Q}),Q=[{title:"Post 1",content:"Content 1",media:[{type:"image",src:"https://via.placeholder.com/150",alt:"Placeholder image"},{type:"video",src:"https://www.youtube.com/watch?v=dQw4w9WgXcQ"}]}],R=Object.freeze(Object.defineProperty({__proto__:null,load:O},Symbol.toStringTag,{value:"Module"}));function z(o){let e,i='<img src="thumb5.jpeg" class="w-screen h-screen object-cover"/>',s,n,a,l="@user777",t,r,f="@place777",h,V;return{c(){e=u("div"),e.innerHTML=i,s=_(),n=u("div"),a=u("div"),a.textContent=l,t=_(),r=u("div"),r.textContent=f,this.h()},l(c){e=v(c,"DIV",{class:!0,"data-svelte-h":!0}),w(e)!=="svelte-1e0edmu"&&(e.innerHTML=i),s=$(c),n=v(c,"DIV",{class:!0});var m=E(n);a=v(m,"DIV",{"data-svelte-h":!0}),w(a)!=="svelte-15b9ax"&&(a.textContent=l),t=$(m),r=v(m,"DIV",{"data-svelte-h":!0}),w(r)!=="svelte-1randjr"&&(r.textContent=f),m.forEach(p),this.h()},h(){D(e,"class","w-screen h-screen gradient-overlay svelte-vn9684"),D(n,"class","fixed bottom-0 px-4 pb-16 text-white text-lg")},m(c,m){d(c,e,m),d(c,s,m),d(c,n,m),x(n,a),x(n,t),x(n,r),h||(V=[H(a,"click",o[1]),H(r,"click",o[2])],h=!0)},p:g,i:g,o:g,d(c){c&&(p(e),p(s),p(n)),h=!1,q(V)}}}function B(o,e,i){let{posts:s}=e;const n=()=>I("/users/777"),a=()=>I("/places/777");return o.$$set=l=>{"posts"in l&&i(0,s=l.posts)},[s,n,a]}class U extends S{constructor(e){super(),T(this,e,B,z,M,{posts:0})}}function W(o){let e,i,s,n,a,l;return e=new F({props:{position:"fixed",leftMap:"white",rightUser:"white",rightBox:"white"}}),s=new U({props:{posts:o[0].posts}}),a=new L({props:{position:"fixed"}}),{c(){y(e.$$.fragment),i=_(),y(s.$$.fragment),n=_(),y(a.$$.fragment)},l(t){b(e.$$.fragment,t),i=$(t),b(s.$$.fragment,t),n=$(t),b(a.$$.fragment,t)},m(t,r){C(e,t,r),d(t,i,r),C(s,t,r),d(t,n,r),C(a,t,r),l=!0},p(t,[r]){const f={};r&1&&(f.posts=t[0].posts),s.$set(f)},i(t){l||(j(e.$$.fragment,t),j(s.$$.fragment,t),j(a.$$.fragment,t),l=!0)},o(t){k(e.$$.fragment,t),k(s.$$.fragment,t),k(a.$$.fragment,t),l=!1},d(t){t&&(p(i),p(n)),P(e,t),P(s,t),P(a,t)}}}function X(o,e,i){let{data:s}=e;return o.$$set=n=>{"data"in n&&i(0,s=n.data)},[s]}class Y extends S{constructor(e){super(),T(this,e,X,W,M,{data:0})}}export{Y as component,R as universal};