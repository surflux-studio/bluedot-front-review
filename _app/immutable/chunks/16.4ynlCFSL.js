import{s as M,n as g,r as F}from"./scheduler.CXyaNWAn.js";import{S,i as T,e as u,s as v,c as _,D as w,f as $,a as L,d as p,u as V,g as d,h as x,A as H,k as y,l as b,m as C,n as P,o as j,p as k}from"./index.-W5z6DxS.js";import{H as O}from"./Header.ISqd6XT9.js";import{g as I}from"./entry.D3v9nGDh.js";import{F as Q}from"./Footer.Cv_nxPZO.js";function q(o){let e,i='<img src="thumb5.jpeg" class="w-screen h-screen object-cover"/>',s,n,a,l="@user777",t,r,f="@place777",h,D;return{c(){e=u("div"),e.innerHTML=i,s=v(),n=u("div"),a=u("div"),a.textContent=l,t=v(),r=u("div"),r.textContent=f,this.h()},l(c){e=_(c,"DIV",{class:!0,"data-svelte-h":!0}),w(e)!=="svelte-1e0edmu"&&(e.innerHTML=i),s=$(c),n=_(c,"DIV",{class:!0});var m=L(n);a=_(m,"DIV",{"data-svelte-h":!0}),w(a)!=="svelte-15b9ax"&&(a.textContent=l),t=$(m),r=_(m,"DIV",{"data-svelte-h":!0}),w(r)!=="svelte-1randjr"&&(r.textContent=f),m.forEach(p),this.h()},h(){V(e,"class","w-screen h-screen gradient-overlay svelte-vn9684"),V(n,"class","fixed bottom-0 px-4 pb-16 text-white text-lg")},m(c,m){d(c,e,m),d(c,s,m),d(c,n,m),x(n,a),x(n,t),x(n,r),h||(D=[H(a,"click",o[1]),H(r,"click",o[2])],h=!0)},p:g,i:g,o:g,d(c){c&&(p(e),p(s),p(n)),h=!1,F(D)}}}function z(o,e,i){let{posts:s}=e;const n=()=>I("/users/777"),a=()=>I("/places/777");return o.$$set=l=>{"posts"in l&&i(0,s=l.posts)},[s,n,a]}class A extends S{constructor(e){super(),T(this,e,z,q,M,{posts:0})}}function B(o){let e,i,s,n,a,l;return e=new O({props:{position:"fixed",leftMap:"white",rightUser:"white",rightBox:"white"}}),s=new A({props:{posts:o[0].posts}}),a=new Q({props:{position:"fixed"}}),{c(){y(e.$$.fragment),i=v(),y(s.$$.fragment),n=v(),y(a.$$.fragment)},l(t){b(e.$$.fragment,t),i=$(t),b(s.$$.fragment,t),n=$(t),b(a.$$.fragment,t)},m(t,r){C(e,t,r),d(t,i,r),C(s,t,r),d(t,n,r),C(a,t,r),l=!0},p(t,[r]){const f={};r&1&&(f.posts=t[0].posts),s.$set(f)},i(t){l||(P(e.$$.fragment,t),P(s.$$.fragment,t),P(a.$$.fragment,t),l=!0)},o(t){j(e.$$.fragment,t),j(s.$$.fragment,t),j(a.$$.fragment,t),l=!1},d(t){t&&(p(i),p(n)),k(e,t),k(s,t),k(a,t)}}}function U(o,e,i){let{data:s}=e;return o.$$set=n=>{"data"in n&&i(0,s=n.data)},[s]}class R extends S{constructor(e){super(),T(this,e,U,B,M,{data:0})}}new TextEncoder;const W=({params:o})=>({posts:E}),E=[{title:"Post 1",content:"Content 1",media:[{type:"image",src:"https://via.placeholder.com/150",alt:"Placeholder image"},{type:"video",src:"https://www.youtube.com/watch?v=dQw4w9WgXcQ"}]}],Y=Object.freeze(Object.defineProperty({__proto__:null,_dummyPosts:E,load:W},Symbol.toStringTag,{value:"Module"}));export{R as P,E as _,Y as a};