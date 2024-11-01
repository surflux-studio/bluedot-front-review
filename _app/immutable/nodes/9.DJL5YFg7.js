import{A as Ee}from"../chunks/constants.bFPGP2yY.js";import{s as le,m as $,t as K,p as ee,b as D,d as R,f as p,l as b,i as S,h as k,j as J,n as Q,e as I,a as T,c as E,g as M,z as X,v as ye,K as xe,x as De,H,M as Se,o as Ve,N as je,q as Y,F as ze}from"../chunks/scheduler.DVlEcQ2N.js";import{S as ie,i as ne,f as Te,c as O,a as B,m as F,t as x,b as z,e as U,d as L,g as A}from"../chunks/index.sqOQyxVq.js";import{e as Z,u as re,o as Ie,d as Me}from"../chunks/each.CmPsRZo8.js";import{r as Pe,H as Ne}from"../chunks/Header.CAKNrIZA.js";import{F as qe}from"../chunks/Field.b-LuykxF.js";import{a as Oe,b as Be}from"../chunks/search.x7sEnQCQ.js";/* empty css                                                   */import{B as Fe}from"../chunks/Button.6MCKN2sf.js";import{g as Le}from"../chunks/entry.CsoEoU9b.js";import{c as te,a as Ze,m as Ge}from"../chunks/map.CQX1Vm4n.js";import{a as ae,s as He,g as Ue}from"../chunks/searchParams.DFWRVFRJ.js";import{N as Ae}from"../chunks/NavigationBar.CNbSy3W0.js";function We(i){let e,l,a,n;return{c(){e=$("svg"),l=$("title"),a=K(i[1]),n=$("path"),this.h()},l(o){e=ee(o,"svg",{xmlns:!0,viewBox:!0,width:!0,height:!0,fill:!0});var t=D(e);l=ee(t,"title",{});var f=D(l);a=R(f,i[1]),f.forEach(p),n=ee(t,"path",{d:!0}),D(n).forEach(p),t.forEach(p),this.h()},h(){b(n,"d","m600-120-240-84-186 72q-20 8-37-4.5T120-170v-560q0-13 7.5-23t20.5-15l212-72 240 84 186-72q20-8 37 4.5t17 33.5v560q0 13-7.5 23T812-192l-212 72Zm-40-98v-468l-160-56v468l160 56Zm80 0 120-40v-474l-120 46v468Zm-440-10 120-46v-468l-120 40v474Zm440-458v468-468Zm-320-56v468-468Z"),b(e,"xmlns","http://www.w3.org/2000/svg"),b(e,"viewBox","0 -960 960 960"),b(e,"width",i[2]),b(e,"height",i[2]),b(e,"fill",i[0])},m(o,t){S(o,e,t),k(e,l),k(l,a),k(e,n)},p(o,[t]){t&2&&J(a,o[1]),t&4&&b(e,"width",o[2]),t&4&&b(e,"height",o[2]),t&1&&b(e,"fill",o[0])},i:Q,o:Q,d(o){o&&p(e)}}}function Ke(i,e,l){let a,{fill:n="#5f6368"}=e,{length:o="1.75"}=e,{alt:t="Map"}=e;return i.$$set=f=>{"fill"in f&&l(0,n=f.fill),"length"in f&&l(3,o=f.length),"alt"in f&&l(1,t=f.alt)},i.$$.update=()=>{i.$$.dirty&8&&l(2,a=Pe(o))},[n,t,a,o]}class Re extends ie{constructor(e){super(),ne(this,e,Ke,We,le,{fill:0,length:3,alt:1})}}const Je="data:image/svg+xml,%3csvg%20width='20'%20height='20'%20viewBox='0%200%2020%2020'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M9.18154%2010L13%2014.6669L11.9092%2016L7%2010L11.9092%204L13%205.33312L9.18154%2010Z'%20fill='%234B5362'/%3e%3c/svg%3e",Qe=async({fetch:i,url:e})=>{if(e.searchParams.get("type")!=="post"){const n=(await(await i(`${Ee}/embeddings/tags`)).json()).data;return console.log(n),{recommendationTags:n}}},_t=Object.freeze(Object.defineProperty({__proto__:null,load:Qe},Symbol.toStringTag,{value:"Module"}));function se(i){let e,l;return{c(){e=I("div"),l=K(i[4]),this.h()},l(a){e=E(a,"DIV",{class:!0});var n=D(e);l=R(n,i[4]),n.forEach(p),this.h()},h(){b(e,"class","chip-prefix svelte-zun98y")},m(a,n){S(a,e,n),k(e,l)},p(a,n){n&16&&J(l,a[4])},d(a){a&&p(e)}}}function fe(i){let e,l,a;return{c(){e=I("div"),l=K(i[5]),this.h()},l(n){e=E(n,"DIV",{class:!0});var o=D(e);l=R(o,i[5]),o.forEach(p),this.h()},h(){b(e,"class",a=X(`chip-value ${i[6]}`)+" svelte-zun98y")},m(n,o){S(n,e,o),k(e,l)},p(n,o){o&32&&J(l,n[5]),o&64&&a!==(a=X(`chip-value ${n[6]}`)+" svelte-zun98y")&&b(e,"class",a)},d(n){n&&p(e)}}}function Xe(i){let e,l,a,n,o,t,f=i[4]&&se(i),h=i[5]&&fe(i);return{c(){e=I("div"),l=I("div"),f&&f.c(),a=T(),h&&h.c(),this.h()},l(u){e=E(u,"DIV",{class:!0});var c=D(e);l=E(c,"DIV",{class:!0});var s=D(l);f&&f.l(s),a=M(s),h&&h.l(s),s.forEach(p),c.forEach(p),this.h()},h(){b(l,"class","flex items-start justify-center gap-[0.3125rem]"),b(e,"class",n=X(`chip ${i[7]} ${i[0]} ${i[1]} ${i[2]} ${i[8]} ${i[3]} ${i[9]}`)+" svelte-zun98y")},m(u,c){S(u,e,c),k(e,l),f&&f.m(l,null),k(l,a),h&&h.m(l,null),o||(t=ye(e,"click",i[11]),o=!0)},p(u,[c]){u[4]?f?f.p(u,c):(f=se(u),f.c(),f.m(l,a)):f&&(f.d(1),f=null),u[5]?h?h.p(u,c):(h=fe(u),h.c(),h.m(l,null)):h&&(h.d(1),h=null),c&911&&n!==(n=X(`chip ${u[7]} ${u[0]} ${u[1]} ${u[2]} ${u[8]} ${u[3]} ${u[9]}`)+" svelte-zun98y")&&b(e,"class",n)},i:Q,o:Q,d(u){u&&p(e),f&&f.d(),h&&h.d(),o=!1,t()}}}function Ye(i,e,l){let{prefix:a=""}=e,{value:n=""}=e,{textSize:o="typo-body3"}=e,{textColor:t="text-gray-600"}=e,{backgroundColor:f="bg-gray-100"}=e,{borderColor:h="border-gray-100"}=e,{backgrounGradient:u=!1}=e,{shadow:c=!1}=e,{border:s=!1}=e,{pointer:r=!1}=e,{padding:d="px-[0.875rem] py-[0.375rem]"}=e;function w(m){xe.call(this,i,m)}return i.$$set=m=>{"prefix"in m&&l(4,a=m.prefix),"value"in m&&l(5,n=m.value),"textSize"in m&&l(10,o=m.textSize),"textColor"in m&&l(6,t=m.textColor),"backgroundColor"in m&&l(7,f=m.backgroundColor),"borderColor"in m&&l(8,h=m.borderColor),"backgrounGradient"in m&&l(0,u=m.backgrounGradient),"shadow"in m&&l(1,c=m.shadow),"border"in m&&l(2,s=m.border),"pointer"in m&&l(3,r=m.pointer),"padding"in m&&l(9,d=m.padding)},i.$$.update=()=>{i.$$.dirty&8&&l(3,r=r===!0||r==="true"?"cursor-pointer":"cursor-default"),i.$$.dirty&1&&l(0,u=u===!0||u==="true"?"bg-gradient-to-l from-[#00DEEC] to-[#0066FF]":""),i.$$.dirty&2&&l(1,c=c===!0||c==="true"?"custom-shadow":""),i.$$.dirty&4&&l(2,s=s===!0||s==="true"?"border":"")},[u,c,s,r,a,n,t,f,h,d,o,w]}class oe extends ie{constructor(e){super(),ne(this,e,Ye,Xe,le,{prefix:4,value:5,textSize:10,textColor:6,backgroundColor:7,borderColor:8,backgrounGradient:0,shadow:1,border:2,pointer:3,padding:9})}}function ce(i,e,l){const a=i.slice();return a[18]=e[l],a}function ue(i,e,l){const a=i.slice();return a[21]=e[l],a}function he(i,e,l){const a=i.slice();return a[21]=e[l],a}function de(i,e,l){const a=i.slice();return a[21]=e[l],a}function $e(i){let e,l="어디?";return{c(){e=I("div"),e.textContent=l,this.h()},l(a){e=E(a,"DIV",{class:!0,"data-svelte-h":!0}),H(e)!=="svelte-1rtquuf"&&(e.textContent=l),this.h()},h(){b(e,"class","text-4xl text-white -mb-5")},m(a,n){S(a,e,n)},d(a){a&&p(e)}}}function me(i){let e,l,a="선택된 태그",n,o,t,f,h,u=Z(i[1]),c=[];for(let r=0;r<u.length;r+=1)c[r]=ge(de(i,u,r));const s=r=>z(c[r],1,1,()=>{c[r]=null});return f=new Fe({props:{backgroundColor:"bg-primary-500",border:"",$$slots:{default:[et]},$$scope:{ctx:i}}}),f.$on("click",i[9]),{c(){e=I("section"),l=I("div"),l.textContent=a,n=T(),o=I("div");for(let r=0;r<c.length;r+=1)c[r].c();t=T(),O(f.$$.fragment),this.h()},l(r){e=E(r,"SECTION",{class:!0});var d=D(e);l=E(d,"DIV",{class:!0,"data-svelte-h":!0}),H(l)!=="svelte-11jci7b"&&(l.textContent=a),n=M(d),o=E(d,"DIV",{class:!0});var w=D(o);for(let m=0;m<c.length;m+=1)c[m].l(w);w.forEach(p),t=M(d),B(f.$$.fragment,d),d.forEach(p),this.h()},h(){b(l,"class","typo-sub-h4 text-white"),b(o,"class","flex flex-wrap gap-3"),b(e,"class","flex flex-col gap-3")},m(r,d){S(r,e,d),k(e,l),k(e,n),k(e,o);for(let w=0;w<c.length;w+=1)c[w]&&c[w].m(o,null);k(e,t),F(f,e,null),h=!0},p(r,d){if(d&258){u=Z(r[1]);let m;for(m=0;m<u.length;m+=1){const N=de(r,u,m);c[m]?(c[m].p(N,d),x(c[m],1)):(c[m]=ge(N),c[m].c(),x(c[m],1),c[m].m(o,null))}for(A(),m=u.length;m<c.length;m+=1)s(m);U()}const w={};d&268435456&&(w.$$scope={dirty:d,ctx:r}),f.$set(w)},i(r){if(!h){for(let d=0;d<u.length;d+=1)x(c[d]);x(f.$$.fragment,r),h=!0}},o(r){c=c.filter(Boolean);for(let d=0;d<c.length;d+=1)z(c[d]);z(f.$$.fragment,r),h=!1},d(r){r&&p(e),je(c,r),L(f)}}}function ge(i){let e,l;function a(){return i[13](i[21])}return e=new oe({props:{prefix:i[21].icon,value:i[21].value,padding:"py-1.5 px-3.5",textSize:"typo-caption2",backgroundColor:i[8](i[21].value)?"bg-primary-500":"bg-white",textColor:i[8](i[21].value)?"text-white":"text-gray-700"}}),e.$on("click",a),{c(){O(e.$$.fragment)},l(n){B(e.$$.fragment,n)},m(n,o){F(e,n,o),l=!0},p(n,o){i=n;const t={};o&2&&(t.prefix=i[21].icon),o&2&&(t.value=i[21].value),o&2&&(t.backgroundColor=i[8](i[21].value)?"bg-primary-500":"bg-white"),o&2&&(t.textColor=i[8](i[21].value)?"text-white":"text-gray-700"),e.$set(t)},i(n){l||(x(e.$$.fragment,n),l=!0)},o(n){z(e.$$.fragment,n),l=!1},d(n){L(e,n)}}}function et(i){let e,l="태그로 탐색하기",a,n,o;return n=new Re({props:{fill:"white"}}),{c(){e=I("div"),e.textContent=l,a=T(),O(n.$$.fragment),this.h()},l(t){e=E(t,"DIV",{class:!0,"data-svelte-h":!0}),H(e)!=="svelte-1hgt161"&&(e.textContent=l),a=M(t),B(n.$$.fragment,t),this.h()},h(){b(e,"class","text-white text-sm")},m(t,f){S(t,e,f),S(t,a,f),F(n,t,f),o=!0},p:Q,i(t){o||(x(n.$$.fragment,t),o=!0)},o(t){z(n.$$.fragment,t),o=!1},d(t){t&&(p(e),p(a)),L(n,t)}}}function _e(i){let e,l,a="추천 태그",n,o,t=[],f=new Map,h,u=Z(i[2]);const c=s=>s[21].idx;for(let s=0;s<u.length;s+=1){let r=he(i,u,s),d=c(r);f.set(d,t[s]=ve(d,r))}return{c(){e=I("section"),l=I("div"),l.textContent=a,n=T(),o=I("div");for(let s=0;s<t.length;s+=1)t[s].c();this.h()},l(s){e=E(s,"SECTION",{class:!0});var r=D(e);l=E(r,"DIV",{class:!0,"data-svelte-h":!0}),H(l)!=="svelte-vx3wei"&&(l.textContent=a),n=M(r),o=E(r,"DIV",{class:!0});var d=D(o);for(let w=0;w<t.length;w+=1)t[w].l(d);d.forEach(p),r.forEach(p),this.h()},h(){b(l,"class","typo-sub-h4 text-white"),b(o,"class","flex flex-wrap gap-3"),b(e,"class","flex flex-col gap-3")},m(s,r){S(s,e,r),k(e,l),k(e,n),k(e,o);for(let d=0;d<t.length;d+=1)t[d]&&t[d].m(o,null);h=!0},p(s,r){r&7&&(u=Z(s[2]),A(),t=re(t,r,c,1,s,u,f,o,Ie,ve,null,he),U())},i(s){if(!h){for(let r=0;r<u.length;r+=1)x(t[r]);h=!0}},o(s){for(let r=0;r<t.length;r+=1)z(t[r]);h=!1},d(s){s&&p(e);for(let r=0;r<t.length;r+=1)t[r].d()}}}function ve(i,e){let l,a,n;function o(){return e[14](e[21])}return a=new oe({props:{prefix:e[21].iconEmoji,value:e[21].name,padding:"py-1.5 px-3.5",textSize:"typo-caption2",backgroundColor:"bg-white",textColor:"text-gray-700"}}),a.$on("click",o),{key:i,first:null,c(){l=Y(),O(a.$$.fragment),this.h()},l(t){l=Y(),B(a.$$.fragment,t),this.h()},h(){this.first=l},m(t,f){S(t,l,f),F(a,t,f),n=!0},p(t,f){e=t;const h={};f&4&&(h.prefix=e[21].iconEmoji),f&4&&(h.value=e[21].name),a.$set(h)},i(t){n||(x(a.$$.fragment,t),n=!0)},o(t){z(a.$$.fragment,t),n=!1},d(t){t&&p(l),L(a,t)}}}function pe(i){let e,l,a="연관 태그",n,o,t=[],f=new Map,h,u=Z(i[3]);const c=s=>s[21].idx;for(let s=0;s<u.length;s+=1){let r=ue(i,u,s),d=c(r);f.set(d,t[s]=be(d,r))}return{c(){e=I("section"),l=I("div"),l.textContent=a,n=T(),o=I("div");for(let s=0;s<t.length;s+=1)t[s].c();this.h()},l(s){e=E(s,"SECTION",{class:!0});var r=D(e);l=E(r,"DIV",{class:!0,"data-svelte-h":!0}),H(l)!=="svelte-v5vczm"&&(l.textContent=a),n=M(r),o=E(r,"DIV",{class:!0});var d=D(o);for(let w=0;w<t.length;w+=1)t[w].l(d);d.forEach(p),r.forEach(p),this.h()},h(){b(l,"class","typo-sub-h4 text-white"),b(o,"class","flex flex-wrap gap-3"),b(e,"class","flex flex-col gap-3")},m(s,r){S(s,e,r),k(e,l),k(e,n),k(e,o);for(let d=0;d<t.length;d+=1)t[d]&&t[d].m(o,null);h=!0},p(s,r){r&11&&(u=Z(s[3]),A(),t=re(t,r,c,1,s,u,f,o,Ie,be,null,ue),U())},i(s){if(!h){for(let r=0;r<u.length;r+=1)x(t[r]);h=!0}},o(s){for(let r=0;r<t.length;r+=1)z(t[r]);h=!1},d(s){s&&p(e);for(let r=0;r<t.length;r+=1)t[r].d()}}}function be(i,e){let l,a,n;function o(){return e[15](e[21])}return a=new oe({props:{prefix:e[21].icon||"",value:e[21].value,padding:"py-1.5 px-3",backgroundColor:"bg-white",border:!0,textSize:"typo-caption2",textColor:"text-gray-700"}}),a.$on("click",o),{key:i,first:null,c(){l=Y(),O(a.$$.fragment),this.h()},l(t){l=Y(),B(a.$$.fragment,t),this.h()},h(){this.first=l},m(t,f){S(t,l,f),F(a,t,f),n=!0},p(t,f){e=t;const h={};f&8&&(h.prefix=e[21].icon||""),f&8&&(h.value=e[21].value),a.$set(h)},i(t){n||(x(a.$$.fragment,t),n=!0)},o(t){z(a.$$.fragment,t),n=!1},d(t){t&&p(l),L(a,t)}}}function ke(i){let e,l,a="바로 가기",n,o,t=[],f=new Map,h=Z(i[4]);const u=c=>c[18].idx;for(let c=0;c<h.length;c+=1){let s=ce(i,h,c),r=u(s);f.set(r,t[c]=we(r,s))}return{c(){e=I("section"),l=I("div"),l.textContent=a,n=T(),o=I("div");for(let c=0;c<t.length;c+=1)t[c].c();this.h()},l(c){e=E(c,"SECTION",{class:!0});var s=D(e);l=E(s,"DIV",{class:!0,"data-svelte-h":!0}),H(l)!=="svelte-1pj31g6"&&(l.textContent=a),n=M(s),o=E(s,"DIV",{class:!0});var r=D(o);for(let d=0;d<t.length;d+=1)t[d].l(r);r.forEach(p),s.forEach(p),this.h()},h(){b(l,"class","typo-sub-h4 text-white"),b(o,"class","grid grid-cols-4 gap-3"),b(e,"class","flex flex-col gap-3")},m(c,s){S(c,e,s),k(e,l),k(e,n),k(e,o);for(let r=0;r<t.length;r+=1)t[r]&&t[r].m(o,null)},p(c,s){s&112&&(h=Z(c[4]),t=re(t,s,u,1,c,h,f,o,Me,we,null,ce))},d(c){c&&p(e);for(let s=0;s<t.length;s+=1)t[s].d()}}}function we(i,e){let l,a,n,o,t,f,h=e[18].name+"",u,c,s,r=(e[18].distance?Ce(e[18].distance):"")+"",d,w,m,N;function q(){return e[16](e[18])}return{key:i,first:null,c(){l=I("div"),a=I("div"),n=I("img"),t=T(),f=I("div"),u=K(h),c=T(),s=I("div"),d=K(r),w=T(),this.h()},l(V){l=E(V,"DIV",{class:!0});var P=D(l);a=E(P,"DIV",{class:!0});var G=D(a);n=E(G,"IMG",{src:!0,alt:!0}),G.forEach(p),t=M(P),f=E(P,"DIV",{class:!0});var g=D(f);u=R(g,h),g.forEach(p),c=M(P),s=E(P,"DIV",{class:!0});var v=D(s);d=R(v,r),v.forEach(p),w=M(P),P.forEach(p),this.h()},h(){ze(n.src,o=e[5].at(Math.floor(Math.random()*3)))||b(n,"src",o),b(n,"alt","icon"),b(a,"class","w-16 h-16"),b(f,"class","w-20 text-nowrap overflow-hidden overflow-ellipsis text-center text-xs"),b(s,"class","w-20 text-nowrap overflow-hidden overflow-ellipsis text-center text-[10px]"),b(l,"class","flex flex-col justify-center items-center text-white gap-2"),this.first=l},m(V,P){S(V,l,P),k(l,a),k(a,n),k(l,t),k(l,f),k(f,u),k(l,c),k(l,s),k(s,d),k(l,w),m||(N=ye(l,"click",q),m=!0)},p(V,P){e=V,P&16&&h!==(h=e[18].name+"")&&J(u,h),P&16&&r!==(r=(e[18].distance?Ce(e[18].distance):"")+"")&&J(d,r)},d(V){V&&p(l),m=!1,N()}}}function tt(i){let e,l='<img src="/search-bg.png" alt="background" class="w-full h-full"/>',a,n,o,t,f,h,u,c,s,r,d,w,m,N,q;n=new Ne({});let V=(i[6]==="post"||i[6]==="box")&&$e();function P(_){i[12](_)}let G={round:!0,placeholder:"태그, 장소, 박스, 사용자 검색",prefixIcon:Je,prefixPointer:!0,onPrefixClick:i[11],clear:!0,backgroundColor:"bg-white/75",onInput:i[7]};i[0]!==void 0&&(G.value=i[0]),u=new qe({props:G}),De.push(()=>Te(u,"value",P));let g=i[1].length>0&&me(i),v=i[0].length==0&&i[6]!=="post"&&i[6]!=="box"&&_e(i),C=i[3].length>0&&i[6]!=="post"&&i[6]!=="box"&&pe(i),j=i[4].length>0&&ke(i);return N=new Ae({}),{c(){e=I("div"),e.innerHTML=l,a=T(),O(n.$$.fragment),o=T(),t=I("div"),V&&V.c(),f=T(),h=I("section"),O(u.$$.fragment),s=T(),g&&g.c(),r=T(),v&&v.c(),d=T(),C&&C.c(),w=T(),j&&j.c(),m=T(),O(N.$$.fragment),this.h()},l(_){e=E(_,"DIV",{class:!0,"data-svelte-h":!0}),H(e)!=="svelte-16yqrji"&&(e.innerHTML=l),a=M(_),B(n.$$.fragment,_),o=M(_),t=E(_,"DIV",{class:!0});var y=D(t);V&&V.l(y),f=M(y),h=E(y,"SECTION",{class:!0});var W=D(h);B(u.$$.fragment,W),W.forEach(p),s=M(y),g&&g.l(y),r=M(y),v&&v.l(y),d=M(y),C&&C.l(y),w=M(y),j&&j.l(y),y.forEach(p),m=M(_),B(N.$$.fragment,_),this.h()},h(){b(e,"class","fixed left-0 top-0 w-screen h-screen -z-50"),b(h,"class","flex gap-4"),b(t,"class","px-6 flex flex-col gap-10")},m(_,y){S(_,e,y),S(_,a,y),F(n,_,y),S(_,o,y),S(_,t,y),V&&V.m(t,null),k(t,f),k(t,h),F(u,h,null),k(t,s),g&&g.m(t,null),k(t,r),v&&v.m(t,null),k(t,d),C&&C.m(t,null),k(t,w),j&&j.m(t,null),S(_,m,y),F(N,_,y),q=!0},p(_,[y]){const W={};!c&&y&1&&(c=!0,W.value=_[0],Se(()=>c=!1)),u.$set(W),_[1].length>0?g?(g.p(_,y),y&2&&x(g,1)):(g=me(_),g.c(),x(g,1),g.m(t,r)):g&&(A(),z(g,1,1,()=>{g=null}),U()),_[0].length==0&&_[6]!=="post"&&_[6]!=="box"?v?(v.p(_,y),y&1&&x(v,1)):(v=_e(_),v.c(),x(v,1),v.m(t,d)):v&&(A(),z(v,1,1,()=>{v=null}),U()),_[3].length>0&&_[6]!=="post"&&_[6]!=="box"?C?(C.p(_,y),y&8&&x(C,1)):(C=pe(_),C.c(),x(C,1),C.m(t,w)):C&&(A(),z(C,1,1,()=>{C=null}),U()),_[4].length>0?j?j.p(_,y):(j=ke(_),j.c(),j.m(t,null)):j&&(j.d(1),j=null)},i(_){q||(x(n.$$.fragment,_),x(u.$$.fragment,_),x(g),x(v),x(C),x(N.$$.fragment,_),q=!0)},o(_){z(n.$$.fragment,_),z(u.$$.fragment,_),z(g),z(v),z(C),z(N.$$.fragment,_),q=!1},d(_){_&&(p(e),p(a),p(o),p(t),p(m)),L(n,_),V&&V.d(),L(u),g&&g.d(),v&&v.d(),C&&C.d(),j&&j.d(),L(N,_)}}}function Ce(i){const e=new Intl.NumberFormat("en-US",{maximumFractionDigits:1});return i>=1e3?`${e.format(i/1e3)} km`:`${e.format(i)} m`}function lt(i,e,l){let{data:a}=e,n="",o=[],t=a.recommendationTags,f=[],h=[],u=[],c=ae("type");Ve(async()=>{u.push(await te("/eul.jpg")),u.push(await te("/dosisool.jpg")),u.push(await te("/oilh.jpg")),u.push(await Ze("/j.jpg",608));const g=ae("value");g&&(l(0,n=g),r())});let s;function r(g){clearTimeout(s),s=setTimeout(async()=>{var v;n&&(Oe({value:n,typesOr:"category,tag,option"}).then(C=>{l(3,f=(C==null?void 0:C.filter(j=>!o.map(_=>_.value).includes(j.value)))||[]),console.log("Tags:",f)}).catch(C=>{console.error("Error fetching tags:",C)}),Be({query:n,location:(v=Ge.getView().getCenter())==null?void 0:v.join(",")}).then(C=>{l(4,h=C||[]),console.log("Icons:",h)}).catch(C=>{console.error("Error fetching icons:",C)}),He({value:n}))},300)}function d(g){return o.map(v=>v.value).includes(g)}function w(){const g=`/map?${o.length>0?`tags=${o.map(v=>v.value).join(",")}`:""}`;Le(g)}const m=()=>window.history.back();function N(g){n=g,l(0,n)}const q=g=>{l(1,o=o.filter(v=>v!==g))},V=g=>{if(o.includes(g.name)){l(1,o=o.filter(v=>v!==g.name));return}l(1,o=[...o,{value:g.name,icon:g.iconEmoji}]),l(2,t=t.filter(v=>v.name!==g.name)),l(0,n="")},P=g=>{if(o.includes(g.name)){l(1,o=o.filter(v=>v!==g.name));return}l(1,o=[...o,{value:g.value,icon:g.iconEmoji}]),l(3,f=f.filter(v=>v.value!==g.value)),l(0,n="")},G=g=>{Ue(`/map?${c?`type=${c}`:""}&location=${g.longitude},${g.latitude}&placeIdx=${g.idx}&placeName=${g.name}`)};return i.$$set=g=>{"data"in g&&l(10,a=g.data)},[n,o,t,f,h,u,c,r,d,w,a,m,N,q,V,P,G]}class vt extends ie{constructor(e){super(),ne(this,e,lt,tt,le,{data:10})}}export{vt as component,_t as universal};
