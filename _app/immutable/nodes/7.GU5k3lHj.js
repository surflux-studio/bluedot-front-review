import{s as se,m as ae,p as ie,a as A,g as E,i as O,n as le,f as _,e as M,c as R,b as T,q as D,h as W,k as he,t as F,d as z,r as ge,j as be}from"../chunks/scheduler.DhPEAp-B.js";import{S as fe,i as ce,e as ue,c as w,a as x,m as v,t as h,b as g,d as y,f as Q,g as X}from"../chunks/index.Cw9AqNvO.js";import{e as Y,u as ke,o as we}from"../chunks/each.Bq6paWiN.js";import{g as Z}from"../chunks/entry.Bjlh07Gh.js";import{F as me}from"../chunks/Footer.D3cgsfy8.js";import{e as H,A as ee,H as pe}from"../chunks/Header.RnHYDWDk.js";import{M as xe}from"../chunks/Map.C5MP36Qd.js";import{N as ve}from"../chunks/NavigationBar.D7q4FK6d.js";import{B as te}from"../chunks/Button.BkvLQWmB.js";import{g as ye}from"../chunks/searchParams.KOFEbbX0.js";import{p as Oe}from"../chunks/stores.CrRDFmtG.js";import"../chunks/Field.0VBDBvUY.js";/* empty css                                                   *//* empty css                                                   */import{a as Be}from"../chunks/map.Z7uDVHHr.js";import"../chunks/ImageShaper.CdWf9Zvj.js";import"../chunks/heic2any.D2cZrCz6.js";import"../chunks/store.ChM1aLWF.js";/* empty css                                                            */import{A as Ce}from"../chunks/ActionSheet.DLwxKGR6.js";import{S as Pe}from"../chunks/Search.CKdWUaK1.js";import{B as Ie}from"../chunks/BottomNavigationPadder.Ij58bCK-.js";import{H as Se}from"../chunks/HexImage.s_xfHgrQ.js";import{f as Ae}from"../chunks/search.G-6zEQgU.js";import{f as Ee}from"../chunks/proj.DXH8zrwl.js";import{s as re}from"../chunks/s32cloudfront.DqWMTG7K.js";const Ne=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global;function De(i){let e,r,t,s;return e=new Pe({}),t=new Ie({props:{heightPx:120}}),{c(){w(e.$$.fragment),r=A(),w(t.$$.fragment)},l(o){x(e.$$.fragment,o),r=E(o),x(t.$$.fragment,o)},m(o,a){v(e,o,a),O(o,r,a),v(t,o,a),s=!0},p:le,i(o){s||(h(e.$$.fragment,o),h(t.$$.fragment,o),s=!0)},o(o){g(e.$$.fragment,o),g(t.$$.fragment,o),s=!1},d(o){o&&_(r),y(e,o),y(t,o)}}}function We(i){let e,r,t;function s(a){i[1](a)}let o={sheetBackground:"bg-[black]/60 backdrop-blur-sm",$$slots:{default:[De]},$$scope:{ctx:i}};return i[0]!==void 0&&(o.isOpen=i[0]),e=new Ce({props:o}),ae.push(()=>ue(e,"isOpen",s)),{c(){w(e.$$.fragment)},l(a){x(e.$$.fragment,a)},m(a,c){v(e,a,c),t=!0},p(a,[c]){const $={};c&4&&($.$$scope={dirty:c,ctx:a}),!r&&c&1&&(r=!0,$.isOpen=a[0],ie(()=>r=!1)),e.$set($)},i(a){t||(h(e.$$.fragment,a),t=!0)},o(a){g(e.$$.fragment,a),t=!1},d(a){y(e,a)}}}function Me(i,e,r){let{isOpen:t=!1}=e;function s(o){t=o,r(0,t)}return i.$$set=o=>{"isOpen"in o&&r(0,t=o.isOpen)},[t,s]}class Re extends fe{constructor(e){super(),ce(this,e,Me,We,se,{isOpen:0})}}const{Map:Te}=Ne;function oe(i,e,r){const t=i.slice();return t[13]=e[r],t}function Ve(i){let e,r;return e=new pe({props:{position:"fixed",rightFeed:!0}}),{c(){w(e.$$.fragment)},l(t){x(e.$$.fragment,t)},m(t,s){v(e,t,s),r=!0},i(t){r||(h(e.$$.fragment,t),r=!0)},o(t){g(e.$$.fragment,t),r=!1},d(t){y(e,t)}}}function je(i){let e,r;return e=new pe({props:{position:"fixed",leftBack:!0}}),{c(){w(e.$$.fragment)},l(t){x(e.$$.fragment,t)},m(t,s){v(e,t,s),r=!0},i(t){r||(h(e.$$.fragment,t),r=!0)},o(t){g(e.$$.fragment,t),r=!1},d(t){y(e,t)}}}function ne(i,e){var I;let r,t,s,o,a,c=e[13].name+"",$,m,C,b,B;s=new Se({props:{src:re(e[13].image),width:300,height:300,onBorder:e[13].idx===((I=e[2])==null?void 0:I.idx)}});function P(){return e[9](e[13])}return{key:i,first:null,c(){r=M("div"),t=M("div"),w(s.$$.fragment),o=A(),a=M("span"),$=F(c),m=A(),this.h()},l(p){r=R(p,"DIV",{class:!0,"aria-hidden":!0});var f=T(r);t=R(f,"DIV",{class:!0});var d=T(t);x(s.$$.fragment,d),d.forEach(_),o=E(f),a=R(f,"SPAN",{class:!0});var u=T(a);$=z(u,c),u.forEach(_),m=E(f),f.forEach(_),this.h()},h(){D(t,"class","w-24 h-24 relative"),D(a,"class","w-24 truncate text-xs text-gray-700"),D(r,"class","flex-shrink-0 flex flex-col items-center space-y-1"),D(r,"aria-hidden",""),this.first=r},m(p,f){O(p,r,f),W(r,t),v(s,t,null),W(r,o),W(r,a),W(a,$),W(r,m),C=!0,b||(B=ge(r,"click",P),b=!0)},p(p,f){var u;e=p;const d={};f&1&&(d.src=re(e[13].image)),f&5&&(d.onBorder=e[13].idx===((u=e[2])==null?void 0:u.idx)),s.$set(d),(!C||f&1)&&c!==(c=e[13].name+"")&&be($,c)},i(p){C||(h(s.$$.fragment,p),C=!0)},o(p){g(s.$$.fragment,p),C=!1},d(p){p&&_(r),y(s),b=!1,B()}}}function He(i){let e,r;return e=new me({props:{position:"fixed",leftReposition:!0,centerSearch:!0,right:"add"}}),{c(){w(e.$$.fragment)},l(t){x(e.$$.fragment,t)},m(t,s){v(e,t,s),r=!0},p:le,i(t){r||(h(e.$$.fragment,t),r=!0)},o(t){g(e.$$.fragment,t),r=!1},d(t){y(e,t)}}}function Le(i){let e,r;return e=new me({props:{position:"fixed",bottom:"2rem",$$slots:{default:[ze]},$$scope:{ctx:i}}}),{c(){w(e.$$.fragment)},l(t){x(e.$$.fragment,t)},m(t,s){v(e,t,s),r=!0},p(t,s){const o={};s&65536&&(o.$$scope={dirty:s,ctx:t}),e.$set(o)},i(t){r||(h(e.$$.fragment,t),r=!0)},o(t){g(e.$$.fragment,t),r=!1},d(t){y(e,t)}}}function qe(i){let e;return{c(){e=F("이 장소가 아니예요")},l(r){e=z(r,"이 장소가 아니예요")},m(r,t){O(r,e,t)},d(r){r&&_(e)}}}function Fe(i){let e;return{c(){e=F("이 장소가 맞아요")},l(r){e=z(r,"이 장소가 맞아요")},m(r,t){O(r,e,t)},d(r){r&&_(e)}}}function ze(i){let e,r,t,s;return e=new te({props:{backgroundColor:"bg-gray-300",textColor:"text-white",$$slots:{default:[qe]},$$scope:{ctx:i}}}),e.$on("click",i[10]),t=new te({props:{backgroundColor:"bg-primary-500",textColor:"text-white",$$slots:{default:[Fe]},$$scope:{ctx:i}}}),t.$on("click",i[5]),{c(){w(e.$$.fragment),r=A(),w(t.$$.fragment)},l(o){x(e.$$.fragment,o),r=E(o),x(t.$$.fragment,o)},m(o,a){v(e,o,a),O(o,r,a),v(t,o,a),s=!0},p(o,a){const c={};a&65536&&(c.$$scope={dirty:a,ctx:o}),e.$set(c);const $={};a&65536&&($.$$scope={dirty:a,ctx:o}),t.$set($)},i(o){s||(h(e.$$.fragment,o),h(t.$$.fragment,o),s=!0)},o(o){g(e.$$.fragment,o),g(t.$$.fragment,o),s=!1},d(o){o&&_(r),y(e,o),y(t,o)}}}function Ge(i){let e,r,t,s,o,a,c,$,m=[],C=new Te,b,B,P,I,p,f,d,u,S;const G=[je,Ve],N=[];function U(n,l){return n[4]==="post"||n[4]==="box"||n[3]?0:1}e=U(i),r=N[e]=G[e](i),o=new xe({props:{onMoveend:i[6]}});let V=Y(i[0]);const J=n=>n[13].idx;for(let n=0;n<V.length;n+=1){let l=oe(i,V,n),k=J(l);C.set(k,m[n]=ne(k,l))}const $e=[Le,He],L=[];function de(n,l){return n[4]==="post"||n[4]==="box"?0:1}B=de(i),P=L[B]=$e[B](i);function _e(n){i[11](n)}let K={};return i[1]!==void 0&&(K.isOpen=i[1]),p=new Re({props:K}),ae.push(()=>ue(p,"isOpen",_e)),u=new ve({props:{show:i[4]!=="post"}}),{c(){r.c(),t=A(),s=M("div"),w(o.$$.fragment),a=A(),c=M("div"),$=M("div");for(let n=0;n<m.length;n+=1)m[n].c();b=A(),P.c(),I=A(),w(p.$$.fragment),d=A(),w(u.$$.fragment),this.h()},l(n){r.l(n),t=E(n),s=R(n,"DIV",{class:!0});var l=T(s);x(o.$$.fragment,l),l.forEach(_),a=E(n),c=R(n,"DIV",{class:!0});var k=T(c);$=R(k,"DIV",{class:!0});var j=T($);for(let q=0;q<m.length;q+=1)m[q].l(j);j.forEach(_),k.forEach(_),b=E(n),P.l(n),I=E(n),x(p.$$.fragment,n),d=E(n),x(u.$$.fragment,n),this.h()},h(){D(s,"class","fixed top-0 left-0 w-full h-full"),D($,"class","flex space-x-4"),D(c,"class","relative top-4 left-0 overflow-x-auto p-4 z-20")},m(n,l){N[e].m(n,l),O(n,t,l),O(n,s,l),v(o,s,null),O(n,a,l),O(n,c,l),W(c,$);for(let k=0;k<m.length;k+=1)m[k]&&m[k].m($,null);O(n,b,l),L[B].m(n,l),O(n,I,l),v(p,n,l),O(n,d,l),v(u,n,l),S=!0},p(n,[l]){let k=e;e=U(n),e!==k&&(X(),g(N[k],1,1,()=>{N[k]=null}),Q(),r=N[e],r||(r=N[e]=G[e](n),r.c()),h(r,1),r.m(t.parentNode,t)),l&133&&(V=Y(n[0]),X(),m=ke(m,l,J,1,n,V,C,$,we,ne,null,oe),Q()),P.p(n,l);const j={};!f&&l&2&&(f=!0,j.isOpen=n[1],ie(()=>f=!1)),p.$set(j)},i(n){if(!S){h(r),h(o.$$.fragment,n);for(let l=0;l<V.length;l+=1)h(m[l]);h(P),h(p.$$.fragment,n),h(u.$$.fragment,n),S=!0}},o(n){g(r),g(o.$$.fragment,n);for(let l=0;l<m.length;l+=1)g(m[l]);g(P),g(p.$$.fragment,n),g(u.$$.fragment,n),S=!1},d(n){n&&(_(t),_(s),_(a),_(c),_(b),_(I),_(d)),N[e].d(n),y(o);for(let l=0;l<m.length;l+=1)m[l].d();L[B].d(n),y(p,n),y(u,n)}}}function Ue(i,e,r){let t,s;he(i,Oe,f=>r(8,s=f));let o=[];const a=s.url.searchParams.get("type");let c=!1;H.on("openSearch",()=>{r(1,c=!0)}),H.on("closeSearch",()=>{r(1,c=!1)});async function $(){if(a==="box"){const f=Number(s.url.searchParams.get("boxIdx"));if(Number.isNaN(f)||!f)return Z("/boxes");(await fetch(`${ee}/boxes/${f}/places/${s.url.searchParams.get("placeIdx")}`,{method:"PUT",headers:{Authorization:`Bearer ${sessionStorage.getItem("jwt")}`}})).ok||H.emit("pushSnackbar",{message:"장소 추가에 실패했습니다."}),Z(`/boxes/${f}/detail`)}else a==="post"&&ye("/viewer/edit")}let m;async function C(f){try{m&&m.abort("new request"),m=new AbortController;const d=new URL(`${ee}/boxes/boundary?bbox=${f}`),u=await Ae(d,{method:"GET",headers:{Accept:"application/json"}},m);if(!u.ok)return;const S=await u.json();r(0,o=S.data)}catch(d){d.name!=="AbortError"&&console.error(d)}}let b;function B(f){const d=o.find(u=>u.idx===f);if(d){if(Be.clear(),b&&b.idx===d.idx)return r(2,b=void 0);r(2,b=d),b.places.forEach(u=>{var S;H.emit("addIcon",{idx:Number(u.idx),coordinate:Ee([u.longitude,u.latitude]),image:((S=u.media)==null?void 0:S.at(0))??"",shape:"waterdrop",type:"place",link:`/places/${u.idx}`,rank:1,name:u.name,width:56,height:61})})}}const P=f=>B(f.idx),I=()=>window.history.back();function p(f){c=f,r(1,c)}return i.$$.update=()=>{i.$$.dirty&256&&r(3,t=s.url.searchParams.get("withBack")==="true")},[o,c,b,t,a,$,C,B,s,P,I,p]}class kt extends fe{constructor(e){super(),ce(this,e,Ue,Ge,se,{})}}export{kt as component};
