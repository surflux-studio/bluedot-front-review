import{g as ve,A as ge,e as be}from"../chunks/units.CgGDbivZ.js";import{g as ie}from"../chunks/entry.BUpUrWeW.js";import{s as we,e as w,a as O,t as J,v as ce,c as $,b as y,f as u,g as B,d as K,m as d,H as P,I as fe,i as A,h as c,r as ue,D as $e,u as ye,E as xe,G as Ie,n as pe,q as ke}from"../chunks/scheduler.Bw1HVZ4I.js";import{S as Ee,i as je,c as Y,a as ee,m as te,t as q,b as F,f as De,d as se,g as Te}from"../chunks/index.B-tLs4nj.js";import{e as de}from"../chunks/each.Nm2dZFLC.js";import{H as Ve}from"../chunks/Header.rVSwxb6d.js";import{M as Oe}from"../chunks/Map.D6gSS_Qm.js";import{F as Be}from"../chunks/Footer.Cepkatz8.js";import{a as C,v as Me}from"../chunks/Chip.svelte_svelte_type_style_lang.BBfr2pbM.js";const Se=async({params:l,fetch:e})=>{const a=ve();if(a===null)return ie("/boxes");const t=await e(`${ge}/boxes/${l.idx}`,{method:"GET",headers:{Authorization:`Bearer ${a}`}});return t.ok?(await t.json()).data:ie("/boxes")},Je=Object.freeze(Object.defineProperty({__proto__:null,load:Se},Symbol.toStringTag,{value:"Module"}));function me(l,e,a){const t=l.slice();return t[10]=e[a],t}function Ge(l){let e,a=l[1].name+"",t;return{c(){e=w("div"),t=J(a),this.h()},l(o){e=$(o,"DIV",{class:!0});var m=y(e);t=K(m,a),m.forEach(u),this.h()},h(){d(e,"class","typo-sub-h3 text-gray-900")},m(o,m){A(o,e,m),c(e,t)},p:pe,d(o){o&&u(e)}}}function Ne(l){let e,a;return{c(){e=w("img"),this.h()},l(t){e=$(t,"IMG",{class:!0,alt:!0,src:!0}),this.h()},h(){var t,o;d(e,"class","w-full h-full object-cover"),d(e,"alt","장소 사진"),ke(e.src,a=(o=(t=l[10])==null?void 0:t.media)==null?void 0:o.at(0))||d(e,"src",a)},m(t,o){A(t,e,o)},p:pe,d(t){t&&u(e)}}}function he(l){var E,x;let e,a=(x=(E=l[10])==null?void 0:E.media)==null?void 0:x.at(0),t,o,m=l[10].name+"",p,v,h=a&&Ne(l);return{c(){e=w("div"),h&&h.c(),t=O(),o=w("div"),p=J(m),v=O(),this.h()},l(f){e=$(f,"DIV",{class:!0});var g=y(e);h&&h.l(g),t=B(g),o=$(g,"DIV",{class:!0});var r=y(o);p=K(r,m),r.forEach(u),v=B(g),g.forEach(u),this.h()},h(){d(o,"class","absolute bottom-0 p-2.5 typo-caption1 text-white text-shadow svelte-sygcjw"),d(e,"class","bg-gray-50 h-36 relative")},m(f,g){A(f,e,g),h&&h.m(e,null),c(e,t),c(e,o),c(o,p),c(e,v)},p(f,g){a&&h.p(f,g)},d(f){f&&u(e),h&&h.d()}}}function _e(l){let e,a;return e=new Be({props:{position:"fixed",leftReposition:!0}}),{c(){Y(e.$$.fragment)},l(t){ee(e.$$.fragment,t)},m(t,o){te(e,t,o),a=!0},i(t){a||(q(e.$$.fragment,t),a=!0)},o(t){F(e.$$.fragment,t),a=!1},d(t){se(e,t)}}}function Pe(l){let e,a,t,o,m,p,v,h,E,x,f,g,r,M,S,I,j,L,D,H,z,G,T,Q,ae;t=new Ve({props:{position:"static",leftBack:!0,rightBoxSetting:l[1].role==="owner"?" ":"",slotPosition:"justify-start",$$slots:{default:[Ge]},$$scope:{ctx:l}}}),j=new Oe({});let N=de(l[2]),_=[];for(let s=0;s<N.length;s+=1)_[s]=he(me(l,N,s));let i=l[0]==="map"&&_e();return{c(){e=w("div"),a=w("div"),Y(t.$$.fragment),o=O(),m=w("div"),p=w("div"),v=w("button"),h=J("지도"),x=O(),f=w("button"),g=J("리스트"),M=O(),S=w("div"),I=w("div"),Y(j.$$.fragment),L=O(),D=w("div");for(let s=0;s<_.length;s+=1)_[s].c();z=O(),i&&i.c(),G=ce(),this.h()},l(s){e=$(s,"DIV",{class:!0});var n=y(e);a=$(n,"DIV",{class:!0});var k=y(a);ee(t.$$.fragment,k),k.forEach(u),o=B(n),m=$(n,"DIV",{class:!0});var b=y(m);p=$(b,"DIV",{class:!0});var V=y(p);v=$(V,"BUTTON",{class:!0});var le=y(v);h=K(le,"지도"),le.forEach(u),x=B(V),f=$(V,"BUTTON",{class:!0});var oe=y(f);g=K(oe,"리스트"),oe.forEach(u),V.forEach(u),b.forEach(u),M=B(n),S=$(n,"DIV",{class:!0});var re=y(S);I=$(re,"DIV",{class:!0});var R=y(I);ee(j.$$.fragment,R),L=B(R),D=$(R,"DIV",{class:!0});var ne=y(D);for(let W=0;W<_.length;W+=1)_[W].l(ne);ne.forEach(u),R.forEach(u),re.forEach(u),n.forEach(u),z=B(s),i&&i.l(s),G=ce(),this.h()},h(){d(a,"class","flex-none"),d(v,"class",E=P(`tab-map w-full px-8 py-2.5 ${l[0]==="map"?U:X}`)+" svelte-sygcjw"),d(f,"class",r=P(`tab-list w-full px-8 py-2.5 ${l[0]==="list"?U:X}`)+" svelte-sygcjw"),d(p,"class","tab-category w-full flex flex-row text-center"),d(m,"class","tab flex-none w-full px-4 pt-2.5 pb-0.5"),d(D,"class","absolute left-full w-screen grid grid-cols-3 gap-1"),d(I,"class","h-full w-full transition-transform"),fe(I,"transform",`translateX(${l[0]==="map"?0:-100}%)`),d(S,"class","content flex-auto"),d(e,"class",H=P(`flex flex-col w-dvw h-dvh overflow-x-hidden ${l[0]==="list"?"":"overflow-y-hidden"}`)+" svelte-sygcjw")},m(s,n){A(s,e,n),c(e,a),te(t,a,null),c(e,o),c(e,m),c(m,p),c(p,v),c(v,h),c(p,x),c(p,f),c(f,g),c(e,M),c(e,S),c(S,I),te(j,I,null),c(I,L),c(I,D);for(let k=0;k<_.length;k+=1)_[k]&&_[k].m(D,null);A(s,z,n),i&&i.m(s,n),A(s,G,n),T=!0,Q||(ae=[ue(v,"click",l[4]),ue(f,"click",l[5])],Q=!0)},p(s,[n]){const k={};if(n&8192&&(k.$$scope={dirty:n,ctx:s}),t.$set(k),(!T||n&1&&E!==(E=P(`tab-map w-full px-8 py-2.5 ${s[0]==="map"?U:X}`)+" svelte-sygcjw"))&&d(v,"class",E),(!T||n&1&&r!==(r=P(`tab-list w-full px-8 py-2.5 ${s[0]==="list"?U:X}`)+" svelte-sygcjw"))&&d(f,"class",r),n&4){N=de(s[2]);let b;for(b=0;b<N.length;b+=1){const V=me(s,N,b);_[b]?_[b].p(V,n):(_[b]=he(V),_[b].c(),_[b].m(D,null))}for(;b<_.length;b+=1)_[b].d(1);_.length=N.length}n&1&&fe(I,"transform",`translateX(${s[0]==="map"?0:-100}%)`),(!T||n&1&&H!==(H=P(`flex flex-col w-dvw h-dvh overflow-x-hidden ${s[0]==="list"?"":"overflow-y-hidden"}`)+" svelte-sygcjw"))&&d(e,"class",H),s[0]==="map"?i?n&1&&q(i,1):(i=_e(),i.c(),q(i,1),i.m(G.parentNode,G)):i&&(Te(),F(i,1,1,()=>{i=null}),De())},i(s){T||(q(t.$$.fragment,s),q(j.$$.fragment,s),q(i),T=!0)},o(s){F(t.$$.fragment,s),F(j.$$.fragment,s),F(i),T=!1},d(s){s&&(u(e),u(z),u(G)),se(t),se(j),$e(_,s),i&&i.d(s),Q=!1,ye(ae)}}}let U="text-gray-900 typo-sub-h2 border-b-[2.5px] border-gray-900",X="text-gray-500 typo-sub-h5";const Z=60;function qe(l,e,a){let{data:t}=e,o=t.box,m=t.places;xe(async()=>{E()}),Ie(()=>{C.un("change",x)});let p="map";const v=[];let h=[];function E(){h=m.filter(r=>!r.longitude||!r.latitude||v.includes(r.idx)?!1:(v.push(r.idx),!0)),C.on("change",x),h.forEach(r=>{var M;be.emit("addIcon",{coordinate:[r.longitude,r.latitude],image:((M=r==null?void 0:r.media)==null?void 0:M.at(0))??"",shape:"waterdrop",type:"place",link:`/places/${r.idx}`,rank:1,name:r.name,width:56,height:61})})}function x(){if(C.getFeatures().length!==h.length)return;C.un("change",x);const r=C.getExtent();Me.fit(r,{padding:[Z,Z,Z,Z],duration:500,maxZoom:16})}const f=()=>a(0,p="map"),g=()=>a(0,p="list");return l.$$set=r=>{"data"in r&&a(3,t=r.data)},[p,o,m,t,f,g]}class Ke extends Ee{constructor(e){super(),je(this,e,qe,Pe,we,{data:3})}}export{Ke as component,Je as universal};
