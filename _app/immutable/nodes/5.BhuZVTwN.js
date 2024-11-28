import{g as ve,A as ge,e as be}from"../chunks/units.DvlLNOex.js";import{g as ie}from"../chunks/entry.BSZcKorA.js";import{s as we,e as w,a as O,t as Z,x as ce,c as $,b as y,f as u,g as B,d as J,q as d,H as q,Q as fe,i as C,h as c,r as ue,L as $e,w as ye,o as xe,l as Ie,n as pe,v as ke}from"../chunks/scheduler.De904EWn.js";import{S as Ee,i as je,c as Y,a as ee,m as te,t as A,b as G,f as De,d as se,g as Te}from"../chunks/index.w_cQNxYZ.js";import{e as de}from"../chunks/each.BGisq09C.js";import{H as Ve}from"../chunks/Header.BidE0PdF.js";import{M as Oe}from"../chunks/Map.DEE_ekbj.js";import{F as Be}from"../chunks/Footer.FzYpKrPx.js";import{a as F,v as Me}from"../chunks/map.XhCtemUh.js";import{f as Ne}from"../chunks/proj.DXH8zrwl.js";const Se=async({params:l,fetch:e})=>{const a=ve();if(a===null)return ie("/boxes");const t=await e(`${ge}/boxes/${l.idx}`,{method:"GET",headers:{Authorization:`Bearer ${a}`}});return t.ok?(await t.json()).data:ie("/boxes")},Qe=Object.freeze(Object.defineProperty({__proto__:null,load:Se},Symbol.toStringTag,{value:"Module"}));function me(l,e,a){const t=l.slice();return t[10]=e[a],t}function Pe(l){let e,a=l[1].name+"",t;return{c(){e=w("div"),t=Z(a),this.h()},l(o){e=$(o,"DIV",{class:!0});var m=y(e);t=J(m,a),m.forEach(u),this.h()},h(){d(e,"class","typo-sub-h3 text-gray-900")},m(o,m){C(o,e,m),c(e,t)},p:pe,d(o){o&&u(e)}}}function qe(l){let e,a;return{c(){e=w("img"),this.h()},l(t){e=$(t,"IMG",{class:!0,alt:!0,src:!0}),this.h()},h(){var t,o;d(e,"class","w-full h-full object-cover"),d(e,"alt","장소 사진"),ke(e.src,a=(o=(t=l[10])==null?void 0:t.media)==null?void 0:o.at(0))||d(e,"src",a)},m(t,o){C(t,e,o)},p:pe,d(t){t&&u(e)}}}function he(l){var E,x;let e,a=(x=(E=l[10])==null?void 0:E.media)==null?void 0:x.at(0),t,o,m=l[10].name+"",p,v,h=a&&qe(l);return{c(){e=w("div"),h&&h.c(),t=O(),o=w("div"),p=Z(m),v=O(),this.h()},l(f){e=$(f,"DIV",{class:!0});var g=y(e);h&&h.l(g),t=B(g),o=$(g,"DIV",{class:!0});var r=y(o);p=J(r,m),r.forEach(u),v=B(g),g.forEach(u),this.h()},h(){d(o,"class","absolute bottom-0 p-2.5 typo-caption1 text-white text-shadow svelte-sygcjw"),d(e,"class","bg-gray-50 h-36 relative")},m(f,g){C(f,e,g),h&&h.m(e,null),c(e,t),c(e,o),c(o,p),c(e,v)},p(f,g){a&&h.p(f,g)},d(f){f&&u(e),h&&h.d()}}}function _e(l){let e,a;return e=new Be({props:{position:"fixed",leftReposition:!0}}),{c(){Y(e.$$.fragment)},l(t){ee(e.$$.fragment,t)},m(t,o){te(e,t,o),a=!0},i(t){a||(A(e.$$.fragment,t),a=!0)},o(t){G(e.$$.fragment,t),a=!1},d(t){se(e,t)}}}function Ae(l){let e,a,t,o,m,p,v,h,E,x,f,g,r,M,N,I,j,Q,D,H,L,S,T,K,ae;t=new Ve({props:{position:"static",leftBack:!0,rightBoxSetting:l[1].role==="owner"?" ":"",slotPosition:"justify-start",$$slots:{default:[Pe]},$$scope:{ctx:l}}}),j=new Oe({});let P=de(l[2]),_=[];for(let s=0;s<P.length;s+=1)_[s]=he(me(l,P,s));let i=l[0]==="map"&&_e();return{c(){e=w("div"),a=w("div"),Y(t.$$.fragment),o=O(),m=w("div"),p=w("div"),v=w("button"),h=Z("지도"),x=O(),f=w("button"),g=Z("리스트"),M=O(),N=w("div"),I=w("div"),Y(j.$$.fragment),Q=O(),D=w("div");for(let s=0;s<_.length;s+=1)_[s].c();L=O(),i&&i.c(),S=ce(),this.h()},l(s){e=$(s,"DIV",{class:!0});var n=y(e);a=$(n,"DIV",{class:!0});var k=y(a);ee(t.$$.fragment,k),k.forEach(u),o=B(n),m=$(n,"DIV",{class:!0});var b=y(m);p=$(b,"DIV",{class:!0});var V=y(p);v=$(V,"BUTTON",{class:!0});var le=y(v);h=J(le,"지도"),le.forEach(u),x=B(V),f=$(V,"BUTTON",{class:!0});var oe=y(f);g=J(oe,"리스트"),oe.forEach(u),V.forEach(u),b.forEach(u),M=B(n),N=$(n,"DIV",{class:!0});var re=y(N);I=$(re,"DIV",{class:!0});var z=y(I);ee(j.$$.fragment,z),Q=B(z),D=$(z,"DIV",{class:!0});var ne=y(D);for(let W=0;W<_.length;W+=1)_[W].l(ne);ne.forEach(u),z.forEach(u),re.forEach(u),n.forEach(u),L=B(s),i&&i.l(s),S=ce(),this.h()},h(){d(a,"class","flex-none"),d(v,"class",E=q(`tab-map w-full px-8 py-2.5 ${l[0]==="map"?R:U}`)+" svelte-sygcjw"),d(f,"class",r=q(`tab-list w-full px-8 py-2.5 ${l[0]==="list"?R:U}`)+" svelte-sygcjw"),d(p,"class","tab-category w-full flex flex-row text-center"),d(m,"class","tab flex-none w-full px-4 pt-2.5 pb-0.5"),d(D,"class","absolute left-full w-screen grid grid-cols-3 gap-1"),d(I,"class","h-full w-full transition-transform"),fe(I,"transform",`translateX(${l[0]==="map"?0:-100}%)`),d(N,"class","content flex-auto"),d(e,"class",H=q(`flex flex-col w-dvw h-dvh overflow-x-hidden ${l[0]==="list"?"":"overflow-y-hidden"}`)+" svelte-sygcjw")},m(s,n){C(s,e,n),c(e,a),te(t,a,null),c(e,o),c(e,m),c(m,p),c(p,v),c(v,h),c(p,x),c(p,f),c(f,g),c(e,M),c(e,N),c(N,I),te(j,I,null),c(I,Q),c(I,D);for(let k=0;k<_.length;k+=1)_[k]&&_[k].m(D,null);C(s,L,n),i&&i.m(s,n),C(s,S,n),T=!0,K||(ae=[ue(v,"click",l[4]),ue(f,"click",l[5])],K=!0)},p(s,[n]){const k={};if(n&8192&&(k.$$scope={dirty:n,ctx:s}),t.$set(k),(!T||n&1&&E!==(E=q(`tab-map w-full px-8 py-2.5 ${s[0]==="map"?R:U}`)+" svelte-sygcjw"))&&d(v,"class",E),(!T||n&1&&r!==(r=q(`tab-list w-full px-8 py-2.5 ${s[0]==="list"?R:U}`)+" svelte-sygcjw"))&&d(f,"class",r),n&4){P=de(s[2]);let b;for(b=0;b<P.length;b+=1){const V=me(s,P,b);_[b]?_[b].p(V,n):(_[b]=he(V),_[b].c(),_[b].m(D,null))}for(;b<_.length;b+=1)_[b].d(1);_.length=P.length}n&1&&fe(I,"transform",`translateX(${s[0]==="map"?0:-100}%)`),(!T||n&1&&H!==(H=q(`flex flex-col w-dvw h-dvh overflow-x-hidden ${s[0]==="list"?"":"overflow-y-hidden"}`)+" svelte-sygcjw"))&&d(e,"class",H),s[0]==="map"?i?n&1&&A(i,1):(i=_e(),i.c(),A(i,1),i.m(S.parentNode,S)):i&&(Te(),G(i,1,1,()=>{i=null}),De())},i(s){T||(A(t.$$.fragment,s),A(j.$$.fragment,s),A(i),T=!0)},o(s){G(t.$$.fragment,s),G(j.$$.fragment,s),G(i),T=!1},d(s){s&&(u(e),u(L),u(S)),se(t),se(j),$e(_,s),i&&i.d(s),K=!1,ye(ae)}}}let R="text-gray-900 typo-sub-h2 border-b-[2.5px] border-gray-900",U="text-gray-500 typo-sub-h5";const X=60;function Ce(l,e,a){let{data:t}=e,o=t.box,m=t.places;xe(async()=>{E()}),Ie(()=>{F.un("change",x)});let p="map";const v=[];let h=[];function E(){h=m.filter(r=>!r.longitude||!r.latitude||v.includes(r.idx)?!1:(v.push(r.idx),!0)),F.on("change",x),h.forEach(r=>{var M;be.emit("addIcon",{idx:Number(r.idx),coordinate:Ne([r.longitude,r.latitude]),image:((M=r==null?void 0:r.media)==null?void 0:M.at(0))??"",shape:"waterdrop",type:"place",link:`/places/${r.idx}`,rank:1,name:r.name,width:56,height:61})})}function x(){if(F.getFeatures().length!==h.length)return;F.un("change",x);const r=F.getExtent();Me.fit(r,{padding:[X,X,X,X],duration:500,maxZoom:16})}const f=()=>a(0,p="map"),g=()=>a(0,p="list");return l.$$set=r=>{"data"in r&&a(3,t=r.data)},[p,o,m,t,f,g]}class Ke extends Ee{constructor(e){super(),je(this,e,Ce,Ae,we,{data:3})}}export{Ke as component,Qe as universal};
