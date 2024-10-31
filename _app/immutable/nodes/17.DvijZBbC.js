import{s as E,e as F,c as P,b as T,f as p,o as D,w as L,i as _,x as y,y as S,n as B,r as U,q as G,t as j,d as z,z as I,h as K,j as Q,A as R,B as W,v as J,a as v,g as w,C as M}from"../chunks/scheduler.zPBk7LGW.js";import{S as q,i as H,e as V,c as m,a as d,m as g,t as h,b as $,d as b}from"../chunks/index.C4C7kEja.js";import{H as X}from"../chunks/Header.D715OeCp.js";import{V as Y}from"../chunks/Viewer.BHxAZdLM.js";import{F as Z}from"../chunks/Footer.CG7FwboT.js";import{B as ee}from"../chunks/Button.BMvKJZ6i.js";import{e as A,u as te,d as se}from"../chunks/each.BBNuS97K.js";import{a as O}from"../chunks/searchParams.BCVjfre3.js";import{g as ne}from"../chunks/entry.BLI9612Y.js";function N(r,t,e){const o=r.slice();return o[4]=t[e],o[6]=e,o}function x(r,t){let e,o=t[4]+"",a,f;return{key:r,first:null,c(){e=F("option"),a=j(o),this.h()},l(i){e=P(i,"OPTION",{});var c=T(e);a=z(c,o),c.forEach(p),this.h()},h(){e.__value=f=t[4],I(e,e.__value),this.first=e},m(i,c){_(i,e,c),K(e,a)},p(i,c){t=i,c&2&&o!==(o=t[4]+"")&&Q(a,o),c&2&&f!==(f=t[4])&&(e.__value=f,I(e,e.__value))},d(i){i&&p(e)}}}function oe(r){let t,e=[],o=new Map,a,f,i=A(r[1]);const c=n=>n[6];for(let n=0;n<i.length;n+=1){let l=N(r,i,n),s=c(l);o.set(s,e[n]=x(s,l))}return{c(){t=F("select");for(let n=0;n<e.length;n+=1)e[n].c();this.h()},l(n){t=P(n,"SELECT",{class:!0});var l=T(t);for(let s=0;s<e.length;s+=1)e[s].l(l);l.forEach(p),this.h()},h(){D(t,"class","border border-gray-200 rounded-[4.75rem] py-[0.38rem] px-[0.88rem] typo-body3 text-gray-900 bg-gray-100"),r[0]===void 0&&L(()=>r[3].call(t))},m(n,l){_(n,t,l);for(let s=0;s<e.length;s+=1)e[s]&&e[s].m(t,null);y(t,r[0],!0),a||(f=[S(t,"change",r[3]),S(t,"change",r[2])],a=!0)},p(n,[l]){l&2&&(i=A(n[1]),e=te(e,l,c,1,n,i,o,t,se,x,null,N)),l&3&&y(t,n[0])},i:B,o:B,d(n){n&&p(t);for(let l=0;l<e.length;l+=1)e[l].d();a=!1,U(f)}}}function ae(r,t,e){let{selected:o=""}=t,{options:a=[]}=t;G(()=>{a.length>0&&e(0,o=a[0])});function f(c){R.call(this,r,c)}function i(){o=W(this),e(0,o),e(1,a)}return r.$$set=c=>{"selected"in c&&e(0,o=c.selected),"options"in c&&e(1,a=c.options)},[o,a,f,i]}class re extends q{constructor(t){super(),H(this,t,ae,oe,E,{selected:0,options:1})}}function le(r){let t;return{c(){t=j("게시하기")},l(e){t=z(e,"게시하기")},m(e,o){_(e,t,o)},d(e){e&&p(t)}}}function ie(r){let t,e,o,a,f;function i(n){r[4](n)}let c={options:["전체 공개","팔로워 공개","비공개"]};return r[1]!==void 0&&(c.selected=r[1]),t=new re({props:c}),J.push(()=>V(t,"selected",i)),a=new ee({props:{backgroundColor:"bg-primary-500",textColor:"text-white",border:"border-none",$$slots:{default:[le]},$$scope:{ctx:r}}}),a.$on("click",r[2]),{c(){m(t.$$.fragment),o=v(),m(a.$$.fragment)},l(n){d(t.$$.fragment,n),o=w(n),d(a.$$.fragment,n)},m(n,l){g(t,n,l),_(n,o,l),g(a,n,l),f=!0},p(n,l){const s={};!e&&l&2&&(e=!0,s.selected=n[1],M(()=>e=!1)),t.$set(s);const u={};l&128&&(u.$$scope={dirty:l,ctx:n}),a.$set(u)},i(n){f||(h(t.$$.fragment,n),h(a.$$.fragment,n),f=!0)},o(n){$(t.$$.fragment,n),$(a.$$.fragment,n),f=!1},d(n){n&&p(o),b(t,n),b(a,n)}}}function ce(r){let t,e,o,a,f,i,c;t=new X({props:{position:"fixed",leftBack:"white"}});function n(s){r[3](s)}let l={};return r[0]!==void 0&&(l.posts=r[0]),o=new Y({props:l}),J.push(()=>V(o,"posts",n)),i=new Z({props:{position:"fixed",$$slots:{default:[ie]},$$scope:{ctx:r}}}),{c(){m(t.$$.fragment),e=v(),m(o.$$.fragment),f=v(),m(i.$$.fragment)},l(s){d(t.$$.fragment,s),e=w(s),d(o.$$.fragment,s),f=w(s),d(i.$$.fragment,s)},m(s,u){g(t,s,u),_(s,e,u),g(o,s,u),_(s,f,u),g(i,s,u),c=!0},p(s,[u]){const C={};!a&&u&1&&(a=!0,C.posts=s[0],M(()=>a=!1)),o.$set(C);const k={};u&130&&(k.$$scope={dirty:u,ctx:s}),i.$set(k)},i(s){c||(h(t.$$.fragment,s),h(o.$$.fragment,s),h(i.$$.fragment,s),c=!0)},o(s){$(t.$$.fragment,s),$(o.$$.fragment,s),$(i.$$.fragment,s),c=!1},d(s){s&&(p(e),p(f)),b(t,s),b(o,s),b(i,s)}}}function fe(r,t,e){const o=JSON.parse(sessionStorage.getItem("postMedia")||"[]");let a=[{user_idx:null,display_name:JSON.parse(sessionStorage.getItem("user")).display_name,place_idx:null,place_name:O("placeName"),media:o,mediaIdx:0,text:""}],f;const i={"전체 공개":"public","팔로워 공개":"follower",비공개:"private"};async function c(){var u;(await fetch("https://azit.surflux.studio/posts",{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${sessionStorage.getItem("jwt")}`},body:JSON.stringify({placeIdx:O("placeIdx"),text:((u=a.at(0))==null?void 0:u.text)||"",media:o,permission:i[f]})})).ok&&ne("/viewer")}function n(s){a=s,e(0,a)}function l(s){f=s,e(1,f)}return[a,f,c,n,l]}class ve extends q{constructor(t){super(),H(this,t,fe,ce,E,{})}}export{ve as component};