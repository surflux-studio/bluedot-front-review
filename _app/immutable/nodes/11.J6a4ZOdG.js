import{A as we}from"../chunks/constants.bFPGP2yY.js";import{s as _e,e as I,a as j,c as E,b as S,g as z,f as b,m as y,C as R,i as T,h as k,w as pe,n as X,t as W,d as Z,j as J,y as Ce,q as ye,P as G,A as Ie,o as Ee,O as xe,l as K,R as De}from"../chunks/scheduler.B36p9E6k.js";import{S as ve,i as be,e as Se,c as N,a as F,m as q,t as D,b as V,f as H,d as B,g as A}from"../chunks/index.K404SoRv.js";import{e as M,u as Y,o as ke,d as Ve}from"../chunks/each.CPGC1t5D.js";import{H as je,a as ze}from"../chunks/Header.TgeaIWhT.js";import{F as Te}from"../chunks/Field.Cbd6pcBb.js";import{b as Oe,c as Pe,m as Me}from"../chunks/search.Cqc5Rt1Y.js";import{B as Le}from"../chunks/Button.DPP8rmSJ.js";import{g as Ne}from"../chunks/entry.CSULzzio.js";import{c as Q,a as Fe}from"../chunks/ImageShaper.Ehtc9I8a.js";import{a as ee,s as qe,g as Be}from"../chunks/searchParams.BqjF-M4P.js";const Ge="data:image/svg+xml,%3csvg%20width='20'%20height='20'%20viewBox='0%200%2020%2020'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M9.18154%2010L13%2014.6669L11.9092%2016L7%2010L11.9092%204L13%205.33312L9.18154%2010Z'%20fill='%234B5362'/%3e%3c/svg%3e",He=async({fetch:i,url:e})=>{if(e.searchParams.get("type")!=="post"){const r=(await(await i(`${we}/embeddings/tags`)).json()).data;return console.log(r),{recommendationTags:r}}},ot=Object.freeze(Object.defineProperty({__proto__:null,load:He},Symbol.toStringTag,{value:"Module"}));function te(i){let e,t;return{c(){e=I("div"),t=W(i[4]),this.h()},l(o){e=E(o,"DIV",{class:!0});var r=S(e);t=Z(r,i[4]),r.forEach(b),this.h()},h(){y(e,"class","chip-prefix svelte-zun98y")},m(o,r){T(o,e,r),k(e,t)},p(o,r){r&16&&J(t,o[4])},d(o){o&&b(e)}}}function le(i){let e,t,o;return{c(){e=I("div"),t=W(i[5]),this.h()},l(r){e=E(r,"DIV",{class:!0});var a=S(e);t=Z(a,i[5]),a.forEach(b),this.h()},h(){y(e,"class",o=R(`chip-value ${i[6]}`)+" svelte-zun98y")},m(r,a){T(r,e,a),k(e,t)},p(r,a){a&32&&J(t,r[5]),a&64&&o!==(o=R(`chip-value ${r[6]}`)+" svelte-zun98y")&&y(e,"class",o)},d(r){r&&b(e)}}}function Ae(i){let e,t,o,r,a,l,f=i[4]&&te(i),h=i[5]&&le(i);return{c(){e=I("div"),t=I("div"),f&&f.c(),o=j(),h&&h.c(),this.h()},l(u){e=E(u,"DIV",{class:!0});var c=S(e);t=E(c,"DIV",{class:!0});var s=S(t);f&&f.l(s),o=z(s),h&&h.l(s),s.forEach(b),c.forEach(b),this.h()},h(){y(t,"class","flex items-start justify-center gap-[0.3125rem]"),y(e,"class",r=R(`chip ${i[7]} ${i[0]} ${i[1]} ${i[2]} ${i[8]} ${i[3]} ${i[9]}`)+" svelte-zun98y")},m(u,c){T(u,e,c),k(e,t),f&&f.m(t,null),k(t,o),h&&h.m(t,null),a||(l=pe(e,"click",i[11]),a=!0)},p(u,[c]){u[4]?f?f.p(u,c):(f=te(u),f.c(),f.m(t,o)):f&&(f.d(1),f=null),u[5]?h?h.p(u,c):(h=le(u),h.c(),h.m(t,null)):h&&(h.d(1),h=null),c&911&&r!==(r=R(`chip ${u[7]} ${u[0]} ${u[1]} ${u[2]} ${u[8]} ${u[3]} ${u[9]}`)+" svelte-zun98y")&&y(e,"class",r)},i:X,o:X,d(u){u&&b(e),f&&f.d(),h&&h.d(),a=!1,l()}}}function Ue(i,e,t){let{prefix:o=""}=e,{value:r=""}=e,{textSize:a="typo-body3"}=e,{textColor:l="text-gray-600"}=e,{backgroundColor:f="bg-gray-100"}=e,{borderColor:h="border-gray-100"}=e,{backgrounGradient:u=!1}=e,{shadow:c=!1}=e,{border:s=!1}=e,{pointer:n=!1}=e,{padding:d="px-[0.875rem] py-[0.375rem]"}=e;function w(m){Ce.call(this,i,m)}return i.$$set=m=>{"prefix"in m&&t(4,o=m.prefix),"value"in m&&t(5,r=m.value),"textSize"in m&&t(10,a=m.textSize),"textColor"in m&&t(6,l=m.textColor),"backgroundColor"in m&&t(7,f=m.backgroundColor),"borderColor"in m&&t(8,h=m.borderColor),"backgrounGradient"in m&&t(0,u=m.backgrounGradient),"shadow"in m&&t(1,c=m.shadow),"border"in m&&t(2,s=m.border),"pointer"in m&&t(3,n=m.pointer),"padding"in m&&t(9,d=m.padding)},i.$$.update=()=>{i.$$.dirty&8&&t(3,n=n===!0||n==="true"?"cursor-pointer":"cursor-default"),i.$$.dirty&1&&t(0,u=u===!0||u==="true"?"bg-gradient-to-l from-[#00DEEC] to-[#0066FF]":""),i.$$.dirty&2&&t(1,c=c===!0||c==="true"?"custom-shadow":""),i.$$.dirty&4&&t(2,s=s===!0||s==="true"?"border":"")},[u,c,s,n,o,r,l,f,h,d,a,w]}class $ extends ve{constructor(e){super(),be(this,e,Ue,Ae,_e,{prefix:4,value:5,textSize:10,textColor:6,backgroundColor:7,borderColor:8,backgrounGradient:0,shadow:1,border:2,pointer:3,padding:9})}}function ne(i,e,t){const o=i.slice();return o[18]=e[t],o}function ie(i,e,t){const o=i.slice();return o[21]=e[t],o}function re(i,e,t){const o=i.slice();return o[21]=e[t],o}function oe(i,e,t){const o=i.slice();return o[21]=e[t],o}function Re(i){let e,t="어디?";return{c(){e=I("div"),e.textContent=t,this.h()},l(o){e=E(o,"DIV",{class:!0,"data-svelte-h":!0}),G(e)!=="svelte-1rtquuf"&&(e.textContent=t),this.h()},h(){y(e,"class","text-4xl text-white -mb-5")},m(o,r){T(o,e,r)},d(o){o&&b(e)}}}function ae(i){let e,t,o="선택된 태그",r,a,l,f,h,u=M(i[1]),c=[];for(let n=0;n<u.length;n+=1)c[n]=se(oe(i,u,n));const s=n=>V(c[n],1,1,()=>{c[n]=null});return f=new Le({props:{backgroundColor:"bg-primary-500",border:"",$$slots:{default:[We]},$$scope:{ctx:i}}}),f.$on("click",i[9]),{c(){e=I("section"),t=I("div"),t.textContent=o,r=j(),a=I("div");for(let n=0;n<c.length;n+=1)c[n].c();l=j(),N(f.$$.fragment),this.h()},l(n){e=E(n,"SECTION",{class:!0});var d=S(e);t=E(d,"DIV",{class:!0,"data-svelte-h":!0}),G(t)!=="svelte-11jci7b"&&(t.textContent=o),r=z(d),a=E(d,"DIV",{class:!0});var w=S(a);for(let m=0;m<c.length;m+=1)c[m].l(w);w.forEach(b),l=z(d),F(f.$$.fragment,d),d.forEach(b),this.h()},h(){y(t,"class","typo-sub-h4 text-white"),y(a,"class","flex flex-wrap gap-3"),y(e,"class","flex flex-col gap-3")},m(n,d){T(n,e,d),k(e,t),k(e,r),k(e,a);for(let w=0;w<c.length;w+=1)c[w]&&c[w].m(a,null);k(e,l),q(f,e,null),h=!0},p(n,d){if(d&258){u=M(n[1]);let m;for(m=0;m<u.length;m+=1){const O=oe(n,u,m);c[m]?(c[m].p(O,d),D(c[m],1)):(c[m]=se(O),c[m].c(),D(c[m],1),c[m].m(a,null))}for(A(),m=u.length;m<c.length;m+=1)s(m);H()}const w={};d&268435456&&(w.$$scope={dirty:d,ctx:n}),f.$set(w)},i(n){if(!h){for(let d=0;d<u.length;d+=1)D(c[d]);D(f.$$.fragment,n),h=!0}},o(n){c=c.filter(Boolean);for(let d=0;d<c.length;d+=1)V(c[d]);V(f.$$.fragment,n),h=!1},d(n){n&&b(e),xe(c,n),B(f)}}}function se(i){let e,t;function o(){return i[13](i[21])}return e=new $({props:{prefix:i[21].icon,value:i[21].value,padding:"py-1.5 px-3.5",textSize:"typo-caption2",backgroundColor:i[8](i[21].value)?"bg-primary-500":"bg-white",textColor:i[8](i[21].value)?"text-white":"text-gray-700"}}),e.$on("click",o),{c(){N(e.$$.fragment)},l(r){F(e.$$.fragment,r)},m(r,a){q(e,r,a),t=!0},p(r,a){i=r;const l={};a&2&&(l.prefix=i[21].icon),a&2&&(l.value=i[21].value),a&2&&(l.backgroundColor=i[8](i[21].value)?"bg-primary-500":"bg-white"),a&2&&(l.textColor=i[8](i[21].value)?"text-white":"text-gray-700"),e.$set(l)},i(r){t||(D(e.$$.fragment,r),t=!0)},o(r){V(e.$$.fragment,r),t=!1},d(r){B(e,r)}}}function We(i){let e,t="태그로 탐색하기",o,r,a;return r=new ze({props:{fill:"white"}}),{c(){e=I("div"),e.textContent=t,o=j(),N(r.$$.fragment),this.h()},l(l){e=E(l,"DIV",{class:!0,"data-svelte-h":!0}),G(e)!=="svelte-1hgt161"&&(e.textContent=t),o=z(l),F(r.$$.fragment,l),this.h()},h(){y(e,"class","text-white text-sm")},m(l,f){T(l,e,f),T(l,o,f),q(r,l,f),a=!0},p:X,i(l){a||(D(r.$$.fragment,l),a=!0)},o(l){V(r.$$.fragment,l),a=!1},d(l){l&&(b(e),b(o)),B(r,l)}}}function ce(i){let e,t,o="추천 태그",r,a,l=[],f=new Map,h,u=M(i[2]);const c=s=>s[21].idx;for(let s=0;s<u.length;s+=1){let n=re(i,u,s),d=c(n);f.set(d,l[s]=fe(d,n))}return{c(){e=I("section"),t=I("div"),t.textContent=o,r=j(),a=I("div");for(let s=0;s<l.length;s+=1)l[s].c();this.h()},l(s){e=E(s,"SECTION",{class:!0});var n=S(e);t=E(n,"DIV",{class:!0,"data-svelte-h":!0}),G(t)!=="svelte-vx3wei"&&(t.textContent=o),r=z(n),a=E(n,"DIV",{class:!0});var d=S(a);for(let w=0;w<l.length;w+=1)l[w].l(d);d.forEach(b),n.forEach(b),this.h()},h(){y(t,"class","typo-sub-h4 text-white"),y(a,"class","flex flex-wrap gap-3"),y(e,"class","flex flex-col gap-3")},m(s,n){T(s,e,n),k(e,t),k(e,r),k(e,a);for(let d=0;d<l.length;d+=1)l[d]&&l[d].m(a,null);h=!0},p(s,n){n&7&&(u=M(s[2]),A(),l=Y(l,n,c,1,s,u,f,a,ke,fe,null,re),H())},i(s){if(!h){for(let n=0;n<u.length;n+=1)D(l[n]);h=!0}},o(s){for(let n=0;n<l.length;n+=1)V(l[n]);h=!1},d(s){s&&b(e);for(let n=0;n<l.length;n+=1)l[n].d()}}}function fe(i,e){let t,o,r;function a(){return e[14](e[21])}return o=new $({props:{prefix:e[21].iconEmoji,value:e[21].name,padding:"py-1.5 px-3.5",textSize:"typo-caption2",backgroundColor:"bg-white",textColor:"text-gray-700"}}),o.$on("click",a),{key:i,first:null,c(){t=K(),N(o.$$.fragment),this.h()},l(l){t=K(),F(o.$$.fragment,l),this.h()},h(){this.first=t},m(l,f){T(l,t,f),q(o,l,f),r=!0},p(l,f){e=l;const h={};f&4&&(h.prefix=e[21].iconEmoji),f&4&&(h.value=e[21].name),o.$set(h)},i(l){r||(D(o.$$.fragment,l),r=!0)},o(l){V(o.$$.fragment,l),r=!1},d(l){l&&b(t),B(o,l)}}}function ue(i){let e,t,o="연관 태그",r,a,l=[],f=new Map,h,u=M(i[3]);const c=s=>s[21].idx;for(let s=0;s<u.length;s+=1){let n=ie(i,u,s),d=c(n);f.set(d,l[s]=he(d,n))}return{c(){e=I("section"),t=I("div"),t.textContent=o,r=j(),a=I("div");for(let s=0;s<l.length;s+=1)l[s].c();this.h()},l(s){e=E(s,"SECTION",{class:!0});var n=S(e);t=E(n,"DIV",{class:!0,"data-svelte-h":!0}),G(t)!=="svelte-v5vczm"&&(t.textContent=o),r=z(n),a=E(n,"DIV",{class:!0});var d=S(a);for(let w=0;w<l.length;w+=1)l[w].l(d);d.forEach(b),n.forEach(b),this.h()},h(){y(t,"class","typo-sub-h4 text-white"),y(a,"class","flex flex-wrap gap-3"),y(e,"class","flex flex-col gap-3")},m(s,n){T(s,e,n),k(e,t),k(e,r),k(e,a);for(let d=0;d<l.length;d+=1)l[d]&&l[d].m(a,null);h=!0},p(s,n){n&11&&(u=M(s[3]),A(),l=Y(l,n,c,1,s,u,f,a,ke,he,null,ie),H())},i(s){if(!h){for(let n=0;n<u.length;n+=1)D(l[n]);h=!0}},o(s){for(let n=0;n<l.length;n+=1)V(l[n]);h=!1},d(s){s&&b(e);for(let n=0;n<l.length;n+=1)l[n].d()}}}function he(i,e){let t,o,r;function a(){return e[15](e[21])}return o=new $({props:{prefix:e[21].icon||"",value:e[21].value,padding:"py-1.5 px-3",backgroundColor:"bg-white",border:!0,textSize:"typo-caption2",textColor:"text-gray-700"}}),o.$on("click",a),{key:i,first:null,c(){t=K(),N(o.$$.fragment),this.h()},l(l){t=K(),F(o.$$.fragment,l),this.h()},h(){this.first=t},m(l,f){T(l,t,f),q(o,l,f),r=!0},p(l,f){e=l;const h={};f&8&&(h.prefix=e[21].icon||""),f&8&&(h.value=e[21].value),o.$set(h)},i(l){r||(D(o.$$.fragment,l),r=!0)},o(l){V(o.$$.fragment,l),r=!1},d(l){l&&b(t),B(o,l)}}}function de(i){let e,t,o="바로 가기",r,a,l=[],f=new Map,h=M(i[4]);const u=c=>c[18].idx;for(let c=0;c<h.length;c+=1){let s=ne(i,h,c),n=u(s);f.set(n,l[c]=me(n,s))}return{c(){e=I("section"),t=I("div"),t.textContent=o,r=j(),a=I("div");for(let c=0;c<l.length;c+=1)l[c].c();this.h()},l(c){e=E(c,"SECTION",{class:!0});var s=S(e);t=E(s,"DIV",{class:!0,"data-svelte-h":!0}),G(t)!=="svelte-1pj31g6"&&(t.textContent=o),r=z(s),a=E(s,"DIV",{class:!0});var n=S(a);for(let d=0;d<l.length;d+=1)l[d].l(n);n.forEach(b),s.forEach(b),this.h()},h(){y(t,"class","typo-sub-h4 text-white"),y(a,"class","grid grid-cols-4 gap-3"),y(e,"class","flex flex-col gap-3")},m(c,s){T(c,e,s),k(e,t),k(e,r),k(e,a);for(let n=0;n<l.length;n+=1)l[n]&&l[n].m(a,null)},p(c,s){s&112&&(h=M(c[4]),l=Y(l,s,u,1,c,h,f,a,Ve,me,null,ne))},d(c){c&&b(e);for(let s=0;s<l.length;s+=1)l[s].d()}}}function me(i,e){let t,o,r,a,l,f,h=e[18].name+"",u,c,s,n=(e[18].distance?ge(e[18].distance):"")+"",d,w,m,O;function U(){return e[16](e[18])}return{key:i,first:null,c(){t=I("div"),o=I("div"),r=I("img"),l=j(),f=I("div"),u=W(h),c=j(),s=I("div"),d=W(n),w=j(),this.h()},l(P){t=E(P,"DIV",{class:!0});var v=S(t);o=E(v,"DIV",{class:!0});var x=S(o);r=E(x,"IMG",{src:!0,alt:!0}),x.forEach(b),l=z(v),f=E(v,"DIV",{class:!0});var g=S(f);u=Z(g,h),g.forEach(b),c=z(v),s=E(v,"DIV",{class:!0});var p=S(s);d=Z(p,n),p.forEach(b),w=z(v),v.forEach(b),this.h()},h(){De(r.src,a=e[5].at(Math.floor(Math.random()*3)))||y(r,"src",a),y(r,"alt","icon"),y(o,"class","w-16 h-16"),y(f,"class","w-20 text-nowrap overflow-hidden overflow-ellipsis text-center text-xs"),y(s,"class","w-20 text-nowrap overflow-hidden overflow-ellipsis text-center text-[10px]"),y(t,"class","flex flex-col justify-center items-center text-white gap-2"),this.first=t},m(P,v){T(P,t,v),k(t,o),k(o,r),k(t,l),k(t,f),k(f,u),k(t,c),k(t,s),k(s,d),k(t,w),m||(O=pe(t,"click",U),m=!0)},p(P,v){e=P,v&16&&h!==(h=e[18].name+"")&&J(u,h),v&16&&n!==(n=(e[18].distance?ge(e[18].distance):"")+"")&&J(d,n)},d(P){P&&b(t),m=!1,O()}}}function Ze(i){let e,t='<img src="/search-bg.png" alt="background" class="w-full h-full"/>',o,r,a,l,f,h,u,c,s,n,d,w,m;r=new je({});let O=i[6]==="post"&&Re();function U(_){i[12](_)}let P={round:!0,placeholder:"태그, 장소, 박스, 사용자 검색",prefixIcon:Ge,prefixPointer:!0,onPrefixClick:i[11],clear:!0,backgroundColor:"bg-white/75",onInput:i[7]};i[0]!==void 0&&(P.value=i[0]),u=new Te({props:P}),ye.push(()=>Se(u,"value",U));let v=i[1].length>0&&ae(i),x=i[0].length==0&&i[6]!=="post"&&ce(i),g=i[3].length>0&&i[6]!=="post"&&ue(i),p=i[4].length>0&&de(i);return{c(){e=I("div"),e.innerHTML=t,o=j(),N(r.$$.fragment),a=j(),l=I("div"),O&&O.c(),f=j(),h=I("section"),N(u.$$.fragment),s=j(),v&&v.c(),n=j(),x&&x.c(),d=j(),g&&g.c(),w=j(),p&&p.c(),this.h()},l(_){e=E(_,"DIV",{class:!0,"data-svelte-h":!0}),G(e)!=="svelte-16yqrji"&&(e.innerHTML=t),o=z(_),F(r.$$.fragment,_),a=z(_),l=E(_,"DIV",{class:!0});var C=S(l);O&&O.l(C),f=z(C),h=E(C,"SECTION",{class:!0});var L=S(h);F(u.$$.fragment,L),L.forEach(b),s=z(C),v&&v.l(C),n=z(C),x&&x.l(C),d=z(C),g&&g.l(C),w=z(C),p&&p.l(C),C.forEach(b),this.h()},h(){y(e,"class","fixed left-0 top-0 w-screen h-screen -z-50"),y(h,"class","flex gap-4"),y(l,"class","px-6 flex flex-col gap-10")},m(_,C){T(_,e,C),T(_,o,C),q(r,_,C),T(_,a,C),T(_,l,C),O&&O.m(l,null),k(l,f),k(l,h),q(u,h,null),k(l,s),v&&v.m(l,null),k(l,n),x&&x.m(l,null),k(l,d),g&&g.m(l,null),k(l,w),p&&p.m(l,null),m=!0},p(_,[C]){const L={};!c&&C&1&&(c=!0,L.value=_[0],Ie(()=>c=!1)),u.$set(L),_[1].length>0?v?(v.p(_,C),C&2&&D(v,1)):(v=ae(_),v.c(),D(v,1),v.m(l,n)):v&&(A(),V(v,1,1,()=>{v=null}),H()),_[0].length==0&&_[6]!=="post"?x?(x.p(_,C),C&1&&D(x,1)):(x=ce(_),x.c(),D(x,1),x.m(l,d)):x&&(A(),V(x,1,1,()=>{x=null}),H()),_[3].length>0&&_[6]!=="post"?g?(g.p(_,C),C&8&&D(g,1)):(g=ue(_),g.c(),D(g,1),g.m(l,w)):g&&(A(),V(g,1,1,()=>{g=null}),H()),_[4].length>0?p?p.p(_,C):(p=de(_),p.c(),p.m(l,null)):p&&(p.d(1),p=null)},i(_){m||(D(r.$$.fragment,_),D(u.$$.fragment,_),D(v),D(x),D(g),m=!0)},o(_){V(r.$$.fragment,_),V(u.$$.fragment,_),V(v),V(x),V(g),m=!1},d(_){_&&(b(e),b(o),b(a),b(l)),B(r,_),O&&O.d(),B(u),v&&v.d(),x&&x.d(),g&&g.d(),p&&p.d()}}}function ge(i){const e=new Intl.NumberFormat("en-US",{maximumFractionDigits:1});return i>=1e3?`${e.format(i/1e3)} km`:`${e.format(i)} m`}function Je(i,e,t){let{data:o}=e,r="",a=[],l=o.recommendationTags,f=[],h=[],u=[],c=ee("type");Ee(async()=>{u.push(await Q("/eul.jpg")),u.push(await Q("/dosisool.jpg")),u.push(await Q("/oilh.jpg")),u.push(await Fe("/j.jpg",608));const g=ee("value");g&&(t(0,r=g),n())});let s;function n(g){clearTimeout(s),s=setTimeout(async()=>{var p;r&&(Oe({value:r,typesOr:"category,tag,option"}).then(_=>{t(3,f=(_==null?void 0:_.filter(C=>!a.map(L=>L.value).includes(C.value)))||[]),console.log("Tags:",f)}).catch(_=>{console.error("Error fetching tags:",_)}),Pe({query:r,location:(p=Me.getView().getCenter())==null?void 0:p.join(",")}).then(_=>{t(4,h=_||[]),console.log("Icons:",h)}).catch(_=>{console.error("Error fetching icons:",_)}),qe({value:r}))},300)}function d(g){return a.map(p=>p.value).includes(g)}function w(){const g=`/map?${a.length>0?`tags=${a.map(p=>p.value).join(",")}`:""}`;Ne(g)}const m=()=>window.history.back();function O(g){r=g,t(0,r)}const U=g=>{t(1,a=a.filter(p=>p!==g))},P=g=>{if(a.includes(g.name)){t(1,a=a.filter(p=>p!==g.name));return}t(1,a=[...a,{value:g.name,icon:g.iconEmoji}]),t(2,l=l.filter(p=>p.name!==g.name)),t(0,r="")},v=g=>{if(a.includes(g.name)){t(1,a=a.filter(p=>p!==g.name));return}t(1,a=[...a,{value:g.value,icon:g.iconEmoji}]),t(3,f=f.filter(p=>p.value!==g.value)),t(0,r="")},x=g=>{Be(`/map?${c==="post"?"type=post":""}&location=${g.longitude},${g.latitude}&placeIdx=${g.idx}&placeName=${g.name}`)};return i.$$set=g=>{"data"in g&&t(10,o=g.data)},[r,a,l,f,h,u,c,n,d,w,o,m,O,U,P,v,x]}class at extends ve{constructor(e){super(),be(this,e,Je,Ze,_e,{data:10})}}export{at as component,ot as universal};
