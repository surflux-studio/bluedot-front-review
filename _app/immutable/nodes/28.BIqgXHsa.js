import{I as y,b as $e,j as ue,A as me,c as Oe}from"../chunks/store.BzckxxOx.js";import{s as ne,m as Se,e as L,c as M,b as W,f as g,v as k,K as pe,i as T,A as R,H as Z,G as ke,u as Pe,o as Ae,p as Te,F as we,J as te,$ as x,w as Ie,a as K,P as je,g as U,h as X,x as Ee,k as ee,y as Le,B as Me,D as de,n as Q}from"../chunks/scheduler.CIbz-4tf.js";import{S as oe,i as se,t as E,a as $,c as V,d as B,m as D,f as q,b as ve,e as _e,g as he}from"../chunks/index.gvaMc9LH.js";import{H as Ce}from"../chunks/Header.BBN6IUSm.js";import{V as Ne}from"../chunks/Viewer.C4Xgq1-a.js";import{p as ye}from"../chunks/stores.OtNRuzR7.js";import{N as Re}from"../chunks/NavigationBar.DpgCmbT4.js";import"../chunks/device.f1MsHf-I.js";import"../chunks/ActionSheet.svelte_svelte_type_style_lang.BTYINn54.js";/* empty css                                                   */import{g as Ve}from"../chunks/entry.RcmwbxGf.js";import{g as Be}from"../chunks/sign.wYJIuXCh.js";/* empty css                                                   */import{P as De}from"../chunks/picker.DO1g6OCe.js";import{I as qe}from"../chunks/IconSearch.Deap0mXU.js";import{A as ze}from"../chunks/ActionSheetOpenApp.RcN56tno.js";import{s as ge}from"../chunks/s32cloudfront.B2Ym_IS4.js";import{i as Fe}from"../chunks/isVideoFile.DGBlGWVm.js";function Ge(s){let e,n,t,i,l;const c=s[5].default,r=Se(c,s,s[4],null);return{c(){e=L("div"),r&&r.c(),this.h()},l(a){e=M(a,"DIV",{id:!0,class:!0,"aria-hidden":!0});var m=W(e);r&&r.l(m),m.forEach(g),this.h()},h(){k(e,"id","mask"),k(e,"class",n=pe(`${s[0]?"":"hidden"} ${s[1]}`)+" svelte-eerk6g"),k(e,"aria-hidden","")},m(a,m){T(a,e,m),r&&r.m(e,null),t=!0,i||(l=[R(e,"touchstart",Z(ke(s[6]))),R(e,"touchend",s[7],{passive:!0}),R(e,"click",s[8])],i=!0)},p(a,[m]){r&&r.p&&(!t||m&16)&&Pe(r,c,a,a[4],t?Te(c,a[4],m,null):Ae(a[4]),null),(!t||m&3&&n!==(n=pe(`${a[0]?"":"hidden"} ${a[1]}`)+" svelte-eerk6g"))&&k(e,"class",n)},i(a){t||(E(r,a),t=!0)},o(a){$(r,a),t=!1},d(a){a&&g(e),r&&r.d(a),i=!1,we(l)}}}function He(s,e,n){let{$$slots:t={},$$scope:i}=e,{onMask:l=!1}=e,{position:c="fixed"}=e,{closeOnClick:r=!1}=e,{onTouch:a=void 0}=e;function m(_){te.call(this,s,_)}const p=()=>{r?n(0,l=!1):a&&a()},I=()=>{r?n(0,l=!1):a&&a()};return s.$$set=_=>{"onMask"in _&&n(0,l=_.onMask),"position"in _&&n(1,c=_.position),"closeOnClick"in _&&n(2,r=_.closeOnClick),"onTouch"in _&&n(3,a=_.onTouch),"$$scope"in _&&n(4,i=_.$$scope)},[l,c,r,a,i,t,m,p,I]}class Je extends oe{constructor(e){super(),se(this,e,He,Ge,ne,{onMask:0,position:1,closeOnClick:2,onTouch:3})}}function Ke(s){let e,n,t;return{c(){e=L("emoji-picker"),this.h()},l(i){e=M(i,"EMOJI-PICKER",{"aria-hidden":!0,class:!0}),W(e).forEach(g),this.h()},h(){x(e,"aria-hidden",""),x(e,"class",s[0])},m(i,l){T(i,e,l),n||(t=[R(e,"emoji-click",Z(ke(s[2]))),R(e,"touchstart",Z(s[4])),R(e,"touchend",Z(s[5]))],n=!0)},p(i,l){l&1&&x(e,"class",i[0])},d(i){i&&g(e),n=!1,we(t)}}}function Ue(s){let e,n;return e=new Je({props:{onMask:!0,position:"absolute",onTouch:s[6],$$slots:{default:[Ke]},$$scope:{ctx:s}}}),{c(){V(e.$$.fragment)},l(t){B(e.$$.fragment,t)},m(t,i){D(e,t,i),n=!0},p(t,[i]){const l={};i&2&&(l.onTouch=t[6]),i&257&&(l.$$scope={dirty:i,ctx:t}),e.$set(l)},i(t){n||(E(e.$$.fragment,t),n=!0)},o(t){$(e.$$.fragment,t),n=!1},d(t){q(e,t)}}}function Xe(s,e,n){let{classList:t}=e,{onSelect:i}=e,{close:l}=e;function c(p){i(p.detail.unicode)}new De({emojiVersion:15});function r(p){te.call(this,s,p)}function a(p){te.call(this,s,p)}const m=()=>{l()};return s.$$set=p=>{"classList"in p&&n(0,t=p.classList),"onSelect"in p&&n(3,i=p.onSelect),"close"in p&&n(1,l=p.close)},[t,l,c,i,r,a,m]}class Qe extends oe{constructor(e){super(),se(this,e,Xe,Ue,ne,{classList:0,onSelect:3,close:1})}}function We(s){let e,n,t,i,l,c;return t=new qe({props:{width:"24",height:"24"}}),{c(){e=L("div"),n=L("button"),V(t.$$.fragment),this.h()},l(r){e=M(r,"DIV",{class:!0});var a=W(e);n=M(a,"BUTTON",{});var m=W(n);B(t.$$.fragment,m),m.forEach(g),a.forEach(g),this.h()},h(){k(e,"class","flex items-center gap-2")},m(r,a){T(r,e,a),X(e,n),D(t,n,null),i=!0,l||(c=R(n,"click",s[8]),l=!0)},i(r){i||(E(t.$$.fragment,r),i=!0)},o(r){$(t.$$.fragment,r),i=!1},d(r){r&&g(e),q(t),l=!1,c()}}}function Ye(s){let e,n,t=!y&&We(s);return{c(){t&&t.c(),e=de()},l(i){t&&t.l(i),e=de()},m(i,l){t&&t.m(i,l),T(i,e,l),n=!0},p:Q,i(i){n||(E(t),n=!0)},o(i){$(t),n=!1},d(i){i&&g(e),t&&t.d(i)}}}function Ze(s){let e,n,t;function i(c){s[10](c)}let l={posts:s[0].posts,selectedReaction:s[2],whenCancelForExternalLink:s[9]};return s[0].index!==void 0&&(l.index=s[0].index),e=new Ne({props:l}),Ie.push(()=>ve(e,"index",i)),{c(){V(e.$$.fragment)},l(c){B(e.$$.fragment,c)},m(c,r){D(e,c,r),t=!0},p(c,r){const a={};r&1&&(a.posts=c[0].posts),r&4&&(a.selectedReaction=c[2]),r&8&&(a.whenCancelForExternalLink=c[9]),!n&&r&1&&(n=!0,a.index=c[0].index,Ee(()=>n=!1)),e.$set(a)},i(c){t||(E(e.$$.fragment,c),t=!0)},o(c){$(e.$$.fragment,c),t=!1},d(c){q(e,c)}}}function xe(s){let e;return{c(){e=L("div"),this.h()},l(n){e=M(n,"DIV",{class:!0}),W(e).forEach(g),this.h()},h(){k(e,"class","w-full h-full")},m(n,t){T(n,e,t)},p:Q,i:Q,o:Q,d(n){n&&g(e)}}}function et(s){let e,n;return e=new Re({}),{c(){V(e.$$.fragment)},l(t){B(e.$$.fragment,t)},m(t,i){D(e,t,i),n=!0},i(t){n||(E(e.$$.fragment,t),n=!0)},o(t){$(e.$$.fragment,t),n=!1},d(t){q(e,t)}}}function be(s){let e,n;return e=new Qe({props:{classList:"absolute bottom-24 right-0 px-4 z-50",onSelect:s[6],close:s[11]}}),{c(){V(e.$$.fragment)},l(t){B(e.$$.fragment,t)},m(t,i){D(e,t,i),n=!0},p:Q,i(t){n||(E(e.$$.fragment,t),n=!0)},o(t){$(e.$$.fragment,t),n=!1},d(t){q(e,t)}}}function tt(s){var j;let e,n,t,i,l,c,r,a,m,p,I,_,b,v,C,z,N,S,G,P;document.title=e=((j=s[1])==null?void 0:j.text)??"블루닷 - 사람과 장소 그리고 순간을 의미 있게 만들다",I=new Ce({props:{position:"fixed",leftLogo:y||!s[4],leftBack:!y&&s[4]?"white":"",$$slots:{right:[Ye]},$$scope:{ctx:s}}});const d=[xe,Ze],h=[];function A(o,f){return o[0].posts.length===0?0:1}b=A(s),v=h[b]=d[b](s);let w=!y&&et(),u=s[5]&&be(s);function H(o){s[12](o)}let Y={};return s[3]!==void 0&&(Y.isOpen=s[3]),S=new ze({props:Y}),Ie.push(()=>ve(S,"isOpen",H)),{c(){n=L("meta"),i=L("meta"),c=L("meta"),a=L("meta"),p=K(),V(I.$$.fragment),_=K(),v.c(),C=K(),w&&w.c(),z=K(),u&&u.c(),N=K(),V(S.$$.fragment),this.h()},l(o){const f=je("svelte-1of46d2",document.head);n=M(f,"META",{property:!0,content:!0}),i=M(f,"META",{property:!0,content:!0}),c=M(f,"META",{property:!0,content:!0}),a=M(f,"META",{property:!0,content:!0}),f.forEach(g),p=U(o),B(I.$$.fragment,o),_=U(o),v.l(o),C=U(o),w&&w.l(o),z=U(o),u&&u.l(o),N=U(o),B(S.$$.fragment,o),this.h()},h(){var o,f,O,F,J;k(n,"property","og:title"),k(n,"content",t=`블루닷 - ${((o=s[1])==null?void 0:o.unique_name)??"bluedot"} 님 게시물`),k(i,"property","og:image"),k(i,"content",l=((f=s[1])==null?void 0:f.image)??""),k(c,"property","og:image:alt"),k(c,"content",r=((O=s[1])==null?void 0:O.place_name)??""),k(a,"property","og:description"),k(a,"content",m=((F=s[1])==null?void 0:F.text)??((J=s[1])==null?void 0:J.place_name)??"")},m(o,f){X(document.head,n),X(document.head,i),X(document.head,c),X(document.head,a),T(o,p,f),D(I,o,f),T(o,_,f),h[b].m(o,f),T(o,C,f),w&&w.m(o,f),T(o,z,f),u&&u.m(o,f),T(o,N,f),D(S,o,f),P=!0},p(o,[f]){var ie,ae,re,le,ce,fe;(!P||f&2)&&e!==(e=((ie=o[1])==null?void 0:ie.text)??"블루닷 - 사람과 장소 그리고 순간을 의미 있게 만들다")&&(document.title=e),(!P||f&2&&t!==(t=`블루닷 - ${((ae=o[1])==null?void 0:ae.unique_name)??"bluedot"} 님 게시물`))&&k(n,"content",t),(!P||f&2&&l!==(l=((re=o[1])==null?void 0:re.image)??""))&&k(i,"content",l),(!P||f&2&&r!==(r=((le=o[1])==null?void 0:le.place_name)??""))&&k(c,"content",r),(!P||f&2&&m!==(m=((ce=o[1])==null?void 0:ce.text)??((fe=o[1])==null?void 0:fe.place_name)??""))&&k(a,"content",m);const O={};f&16&&(O.leftLogo=y||!o[4]),f&16&&(O.leftBack=!y&&o[4]?"white":""),f&262144&&(O.$$scope={dirty:f,ctx:o}),I.$set(O);let F=b;b=A(o),b===F?h[b].p(o,f):(he(),$(h[F],1,1,()=>{h[F]=null}),_e(),v=h[b],v?v.p(o,f):(v=h[b]=d[b](o),v.c()),E(v,1),v.m(C.parentNode,C)),o[5]?u?(u.p(o,f),f&32&&E(u,1)):(u=be(o),u.c(),E(u,1),u.m(N.parentNode,N)):u&&(he(),$(u,1,1,()=>{u=null}),_e());const J={};!G&&f&8&&(G=!0,J.isOpen=o[3],Ee(()=>G=!1)),S.$set(J)},i(o){P||(E(I.$$.fragment,o),E(v),E(w),E(u),E(S.$$.fragment,o),P=!0)},o(o){$(I.$$.fragment,o),$(v),$(w),$(u),$(S.$$.fragment,o),P=!1},d(o){o&&(g(p),g(_),g(C),g(z),g(N)),g(n),g(i),g(c),g(a),q(I,o),h[b].d(o),w&&w.d(o),u&&u.d(o),q(S,o)}}}function nt(s,e,n){let t,i,l,c,r;ee(s,ye,d=>n(7,l=d)),ee(s,$e,d=>n(16,c=d)),ee(s,ue,d=>n(5,r=d));let a={posts:[],index:0},m,p,I=!1,_=!1,b;Le(async()=>{let d="";try{d=Be()}catch{}const h=new URLSearchParams(window.location.search),A=Number(h.get("postIdx")||0);Number(h.get("mediaIdx")||0);const w=0,u=30,H=`&offset=${w}`,Y=`&limit=${u}`;let j=[];(i||t)&&c.length>0?(n(4,_=!0),j=c.map(o=>o.idx===A?{...o,mediaIdx:o.mediaIdx||0}:{...o,mediaIdx:0}),n(0,a.index=j.findIndex(o=>o.idx===String(A)),a)):(b=new AbortController,A&&(j=[await fetch(`${me}/posts/${A}`,{method:"GET",headers:{Authorization:"Bearer "+d},signal:b.signal}).then(o=>o.json()).then(o=>({...o.data,mediaIdx:o.data.mediaIdx||0}))]),j=[...j,...await fetch(`${me}/posts?${H}${Y}`,{method:"GET",headers:{Authorization:"Bearer "+d},signal:b.signal}).then(o=>o.json()).then(o=>{var f;return(f=o.data)==null?void 0:f.posts.filter(O=>O.idx!==String(A)).map(O=>({...O,mediaIdx:O.mediaIdx||0}))})||[]]),n(0,a.posts=j,a)}),Me(()=>{b&&b.abort()});async function v(d){const h=l.url.searchParams.get("postIdx");h&&n(2,p={postIdx:h,reaction:d})}async function C(d){var A;let h=(A=a.posts)==null?void 0:A.at(d);if(h){let w=h.media[0];if(w){const u=ge(w);if(u.includes("youtu"))h.image=u;else{const H=await Fe(u);h.image=H?ge(w+"-thumbnail"):u}}}n(1,m=h)}const z=async()=>{await Ve("/search")},N=()=>{if(y)return n(3,I=!0)};function S(d){s.$$.not_equal(a.index,d)&&(a.index=d,n(0,a))}const G=()=>{ue.set(!1)};function P(d){I=d,n(3,I)}return s.$$.update=()=>{s.$$.dirty&128&&(t=l.url.searchParams.get("placeIdx")),s.$$.dirty&128&&(i=l.url.searchParams.get("userIdx")),s.$$.dirty&1&&C(a.index)},[a,m,p,I,_,r,v,l,z,N,S,G,P]}class Et extends oe{constructor(e){super(),se(this,e,nt,tt,ne,{})}}function ot(){Oe.set(!0)}const vt=Object.freeze(Object.defineProperty({__proto__:null,load:ot},Symbol.toStringTag,{value:"Module"}));export{Et as component,vt as universal};
