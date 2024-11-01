import{s as M,e as N,c as P,b as T,f as p,l as q,I as D,i as _,J as y,w as S,n as B,r as K,o as U,t as j,d as x,B as I,h as G,j as Q,K as R,L as W,y as J,a as w,g as v,M as z}from"../chunks/scheduler.BFzxWJSn.js";import{S as H,i as L,f as V,c as m,a as d,m as g,t as h,b as $,d as b}from"../chunks/index.DXXOSJvz.js";import{H as X}from"../chunks/Header.BhYnMaQV.js";import{V as Y}from"../chunks/Viewer.BNq9VUB8.js";import{F as Z}from"../chunks/Footer.2wDX0mpp.js";import{B as ee}from"../chunks/Button.CVc57-hS.js";import{e as A,u as te,d as se}from"../chunks/each.Bd302JEX.js";import{a as O}from"../chunks/searchParams.D3rUa8Ub.js";import{g as ne}from"../chunks/entry.qFSQKAKR.js";function E(r,t,e){const o=r.slice();return o[4]=t[e],o[6]=e,o}function F(r,t){let e,o=t[4]+"",a,c;return{key:r,first:null,c(){e=N("option"),a=j(o),this.h()},l(i){e=P(i,"OPTION",{});var f=T(e);a=x(f,o),f.forEach(p),this.h()},h(){e.__value=c=t[4],I(e,e.__value),this.first=e},m(i,f){_(i,e,f),G(e,a)},p(i,f){t=i,f&2&&o!==(o=t[4]+"")&&Q(a,o),f&2&&c!==(c=t[4])&&(e.__value=c,I(e,e.__value))},d(i){i&&p(e)}}}function oe(r){let t,e=[],o=new Map,a,c,i=A(r[1]);const f=n=>n[6];for(let n=0;n<i.length;n+=1){let l=E(r,i,n),s=f(l);o.set(s,e[n]=F(s,l))}return{c(){t=N("select");for(let n=0;n<e.length;n+=1)e[n].c();this.h()},l(n){t=P(n,"SELECT",{class:!0});var l=T(t);for(let s=0;s<e.length;s+=1)e[s].l(l);l.forEach(p),this.h()},h(){q(t,"class","border border-gray-200 rounded-[4.75rem] py-[0.38rem] px-[0.88rem] typo-body3 text-gray-900 bg-gray-100"),r[0]===void 0&&D(()=>r[3].call(t))},m(n,l){_(n,t,l);for(let s=0;s<e.length;s+=1)e[s]&&e[s].m(t,null);y(t,r[0],!0),a||(c=[S(t,"change",r[3]),S(t,"change",r[2])],a=!0)},p(n,[l]){l&2&&(i=A(n[1]),e=te(e,l,f,1,n,i,o,t,se,F,null,E)),l&3&&y(t,n[0])},i:B,o:B,d(n){n&&p(t);for(let l=0;l<e.length;l+=1)e[l].d();a=!1,K(c)}}}function ae(r,t,e){let{selected:o=""}=t,{options:a=[]}=t;U(()=>{a.length>0&&e(0,o=a[0])});function c(f){R.call(this,r,f)}function i(){o=W(this),e(0,o),e(1,a)}return r.$$set=f=>{"selected"in f&&e(0,o=f.selected),"options"in f&&e(1,a=f.options)},[o,a,c,i]}class re extends H{constructor(t){super(),L(this,t,ae,oe,M,{selected:0,options:1})}}function le(r){let t;return{c(){t=j("게시하기")},l(e){t=x(e,"게시하기")},m(e,o){_(e,t,o)},d(e){e&&p(t)}}}function ie(r){let t,e,o,a,c;function i(n){r[4](n)}let f={options:["전체 공개","팔로워 공개","비공개"]};return r[1]!==void 0&&(f.selected=r[1]),t=new re({props:f}),J.push(()=>V(t,"selected",i)),a=new ee({props:{backgroundColor:"bg-primary-500",textColor:"text-white",border:"border-none",$$slots:{default:[le]},$$scope:{ctx:r}}}),a.$on("click",r[2]),{c(){m(t.$$.fragment),o=w(),m(a.$$.fragment)},l(n){d(t.$$.fragment,n),o=v(n),d(a.$$.fragment,n)},m(n,l){g(t,n,l),_(n,o,l),g(a,n,l),c=!0},p(n,l){const s={};!e&&l&2&&(e=!0,s.selected=n[1],z(()=>e=!1)),t.$set(s);const u={};l&128&&(u.$$scope={dirty:l,ctx:n}),a.$set(u)},i(n){c||(h(t.$$.fragment,n),h(a.$$.fragment,n),c=!0)},o(n){$(t.$$.fragment,n),$(a.$$.fragment,n),c=!1},d(n){n&&p(o),b(t,n),b(a,n)}}}function fe(r){let t,e,o,a,c,i,f;t=new X({props:{position:"fixed",leftBack:"white"}});function n(s){r[3](s)}let l={};return r[0]!==void 0&&(l.posts=r[0]),o=new Y({props:l}),J.push(()=>V(o,"posts",n)),i=new Z({props:{position:"fixed",bottom:"2rem",$$slots:{default:[ie]},$$scope:{ctx:r}}}),{c(){m(t.$$.fragment),e=w(),m(o.$$.fragment),c=w(),m(i.$$.fragment)},l(s){d(t.$$.fragment,s),e=v(s),d(o.$$.fragment,s),c=v(s),d(i.$$.fragment,s)},m(s,u){g(t,s,u),_(s,e,u),g(o,s,u),_(s,c,u),g(i,s,u),f=!0},p(s,[u]){const C={};!a&&u&1&&(a=!0,C.posts=s[0],z(()=>a=!1)),o.$set(C);const k={};u&130&&(k.$$scope={dirty:u,ctx:s}),i.$set(k)},i(s){f||(h(t.$$.fragment,s),h(o.$$.fragment,s),h(i.$$.fragment,s),f=!0)},o(s){$(t.$$.fragment,s),$(o.$$.fragment,s),$(i.$$.fragment,s),f=!1},d(s){s&&(p(e),p(c)),b(t,s),b(o,s),b(i,s)}}}function ce(r,t,e){const o=JSON.parse(sessionStorage.getItem("postMedia")||"[]");let a=[{user_idx:null,display_name:"test",place_idx:null,place_name:O("placeName"),media:o,mediaIdx:0,text:""}],c;const i={"전체 공개":"public","팔로워 공개":"follower",비공개:"private"};async function f(){var u;(await fetch("https://azit.surflux.studio/posts",{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${sessionStorage.getItem("jwt")}`},body:JSON.stringify({placeIdx:O("placeIdx"),text:((u=a.at(0))==null?void 0:u.text)||"",media:o,permission:i[c]})})).ok&&ne("/viewer")}function n(s){a=s,e(0,a)}function l(s){c=s,e(1,c)}return[a,c,f,n,l]}class we extends H{constructor(t){super(),L(this,t,ce,fe,M,{})}}export{we as component};
