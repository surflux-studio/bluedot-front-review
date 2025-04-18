import{I as y,c as Se,l as ue,A as me,b as pe,d as Pe}from"../chunks/store.DzamesA2.js";import{s as ne,m as $e,e as L,c as M,b as W,f as g,v as k,K as de,i as A,A as R,G as Z,F as Ie,u as Te,o as Ae,p as je,I as we,J as te,a1 as x,w as Ee,a as K,P as Le,g as U,h as X,x as ve,k as ee,y as Me,B as Ce,D as _e,n as Q}from"../chunks/scheduler.B7IswjaW.js";import{S as oe,i as se,t as E,a as O,c as V,d as B,m as D,f as q,b as Oe,e as he,g as ge}from"../chunks/index.Bhf26fYQ.js";import{H as Ne}from"../chunks/Header.BDgApYbo.js";import{V as ye}from"../chunks/Viewer.Dc1-4BI9.js";import{p as Re}from"../chunks/stores.CSI25ST9.js";import{N as Ve}from"../chunks/NavigationBar.BFXKjZrX.js";import"../chunks/device.Dtp4J0Ng.js";import"../chunks/ActionSheet.svelte_svelte_type_style_lang.BF2rwJlf.js";/* empty css                                                   */import{g as Be}from"../chunks/entry.CtRq8kOV.js";import{g as De}from"../chunks/sign.9qKuSyHg.js";/* empty css                                                   */import{P as qe}from"../chunks/picker.DO1g6OCe.js";import{I as ze}from"../chunks/IconSearch.Huw0uu_o.js";import{A as Fe}from"../chunks/ActionSheetOpenApp.BjqMqDBQ.js";import{s as be}from"../chunks/s32cloudfront.RDEBwLXG.js";import{i as Ge}from"../chunks/isVideoFile.DGBlGWVm.js";function He(s){let e,n,t,i,l;const c=s[5].default,r=$e(c,s,s[4],null);return{c(){e=L("div"),r&&r.c(),this.h()},l(a){e=M(a,"DIV",{id:!0,class:!0,"aria-hidden":!0});var m=W(e);r&&r.l(m),m.forEach(g),this.h()},h(){k(e,"id","mask"),k(e,"class",n=de(`${s[0]?"":"hidden"} ${s[1]}`)+" svelte-eerk6g"),k(e,"aria-hidden","")},m(a,m){A(a,e,m),r&&r.m(e,null),t=!0,i||(l=[R(e,"touchstart",Z(Ie(s[6]))),R(e,"touchend",s[7],{passive:!0}),R(e,"click",s[8])],i=!0)},p(a,[m]){r&&r.p&&(!t||m&16)&&Te(r,c,a,a[4],t?je(c,a[4],m,null):Ae(a[4]),null),(!t||m&3&&n!==(n=de(`${a[0]?"":"hidden"} ${a[1]}`)+" svelte-eerk6g"))&&k(e,"class",n)},i(a){t||(E(r,a),t=!0)},o(a){O(r,a),t=!1},d(a){a&&g(e),r&&r.d(a),i=!1,we(l)}}}function Je(s,e,n){let{$$slots:t={},$$scope:i}=e,{onMask:l=!1}=e,{position:c="fixed"}=e,{closeOnClick:r=!1}=e,{onTouch:a=void 0}=e;function m(_){te.call(this,s,_)}const p=()=>{r?n(0,l=!1):a&&a()},w=()=>{r?n(0,l=!1):a&&a()};return s.$$set=_=>{"onMask"in _&&n(0,l=_.onMask),"position"in _&&n(1,c=_.position),"closeOnClick"in _&&n(2,r=_.closeOnClick),"onTouch"in _&&n(3,a=_.onTouch),"$$scope"in _&&n(4,i=_.$$scope)},[l,c,r,a,i,t,m,p,w]}class Ke extends oe{constructor(e){super(),se(this,e,Je,He,ne,{onMask:0,position:1,closeOnClick:2,onTouch:3})}}function Ue(s){let e,n,t;return{c(){e=L("emoji-picker"),this.h()},l(i){e=M(i,"EMOJI-PICKER",{"aria-hidden":!0,class:!0}),W(e).forEach(g),this.h()},h(){x(e,"aria-hidden",""),x(e,"class",s[0])},m(i,l){A(i,e,l),n||(t=[R(e,"emoji-click",Z(Ie(s[2]))),R(e,"touchstart",Z(s[4])),R(e,"touchend",Z(s[5]))],n=!0)},p(i,l){l&1&&x(e,"class",i[0])},d(i){i&&g(e),n=!1,we(t)}}}function Xe(s){let e,n;return e=new Ke({props:{onMask:!0,position:"absolute",onTouch:s[6],$$slots:{default:[Ue]},$$scope:{ctx:s}}}),{c(){V(e.$$.fragment)},l(t){B(e.$$.fragment,t)},m(t,i){D(e,t,i),n=!0},p(t,[i]){const l={};i&2&&(l.onTouch=t[6]),i&257&&(l.$$scope={dirty:i,ctx:t}),e.$set(l)},i(t){n||(E(e.$$.fragment,t),n=!0)},o(t){O(e.$$.fragment,t),n=!1},d(t){q(e,t)}}}function Qe(s,e,n){let{classList:t}=e,{onSelect:i}=e,{close:l}=e;function c(p){i(p.detail.unicode)}new qe({emojiVersion:15});function r(p){te.call(this,s,p)}function a(p){te.call(this,s,p)}const m=()=>{l()};return s.$$set=p=>{"classList"in p&&n(0,t=p.classList),"onSelect"in p&&n(3,i=p.onSelect),"close"in p&&n(1,l=p.close)},[t,l,c,i,r,a,m]}class We extends oe{constructor(e){super(),se(this,e,Qe,Xe,ne,{classList:0,onSelect:3,close:1})}}function Ye(s){let e,n,t,i,l,c;return t=new ze({props:{width:"24",height:"24"}}),{c(){e=L("div"),n=L("button"),V(t.$$.fragment),this.h()},l(r){e=M(r,"DIV",{class:!0});var a=W(e);n=M(a,"BUTTON",{});var m=W(n);B(t.$$.fragment,m),m.forEach(g),a.forEach(g),this.h()},h(){k(e,"class","flex items-center gap-2")},m(r,a){A(r,e,a),X(e,n),D(t,n,null),i=!0,l||(c=R(n,"click",s[8]),l=!0)},i(r){i||(E(t.$$.fragment,r),i=!0)},o(r){O(t.$$.fragment,r),i=!1},d(r){r&&g(e),q(t),l=!1,c()}}}function Ze(s){let e,n,t=!y&&Ye(s);return{c(){t&&t.c(),e=_e()},l(i){t&&t.l(i),e=_e()},m(i,l){t&&t.m(i,l),A(i,e,l),n=!0},p:Q,i(i){n||(E(t),n=!0)},o(i){O(t),n=!1},d(i){i&&g(e),t&&t.d(i)}}}function xe(s){let e,n,t;function i(c){s[10](c)}let l={posts:s[0].posts,selectedReaction:s[2],whenCancelForExternalLink:s[9]};return s[0].index!==void 0&&(l.index=s[0].index),e=new ye({props:l}),Ee.push(()=>Oe(e,"index",i)),{c(){V(e.$$.fragment)},l(c){B(e.$$.fragment,c)},m(c,r){D(e,c,r),t=!0},p(c,r){const a={};r&1&&(a.posts=c[0].posts),r&4&&(a.selectedReaction=c[2]),r&8&&(a.whenCancelForExternalLink=c[9]),!n&&r&1&&(n=!0,a.index=c[0].index,ve(()=>n=!1)),e.$set(a)},i(c){t||(E(e.$$.fragment,c),t=!0)},o(c){O(e.$$.fragment,c),t=!1},d(c){q(e,c)}}}function et(s){let e;return{c(){e=L("div"),this.h()},l(n){e=M(n,"DIV",{class:!0}),W(e).forEach(g),this.h()},h(){k(e,"class","w-full h-full")},m(n,t){A(n,e,t)},p:Q,i:Q,o:Q,d(n){n&&g(e)}}}function tt(s){let e,n;return e=new Ve({}),{c(){V(e.$$.fragment)},l(t){B(e.$$.fragment,t)},m(t,i){D(e,t,i),n=!0},i(t){n||(E(e.$$.fragment,t),n=!0)},o(t){O(e.$$.fragment,t),n=!1},d(t){q(e,t)}}}function ke(s){let e,n;return e=new We({props:{classList:"absolute bottom-24 right-0 px-4 z-50",onSelect:s[6],close:s[11]}}),{c(){V(e.$$.fragment)},l(t){B(e.$$.fragment,t)},m(t,i){D(e,t,i),n=!0},p:Q,i(t){n||(E(e.$$.fragment,t),n=!0)},o(t){O(e.$$.fragment,t),n=!1},d(t){q(e,t)}}}function nt(s){var j;let e,n,t,i,l,c,r,a,m,p,w,_,b,v,C,z,N,P,G,$;document.title=e=((j=s[1])==null?void 0:j.text)??"블루닷 - 사람과 장소 그리고 순간을 의미 있게 만들다",w=new Ne({props:{position:"fixed",leftLogo:y||!s[4],leftBack:!y&&s[4]?"white":"",$$slots:{right:[Ze]},$$scope:{ctx:s}}});const d=[et,xe],h=[];function T(o,f){return o[0].posts.length===0?0:1}b=T(s),v=h[b]=d[b](s);let I=!y&&tt(),u=s[5]&&ke(s);function H(o){s[12](o)}let Y={};return s[3]!==void 0&&(Y.isOpen=s[3]),P=new Fe({props:Y}),Ee.push(()=>Oe(P,"isOpen",H)),{c(){n=L("meta"),i=L("meta"),c=L("meta"),a=L("meta"),p=K(),V(w.$$.fragment),_=K(),v.c(),C=K(),I&&I.c(),z=K(),u&&u.c(),N=K(),V(P.$$.fragment),this.h()},l(o){const f=Le("svelte-1of46d2",document.head);n=M(f,"META",{property:!0,content:!0}),i=M(f,"META",{property:!0,content:!0}),c=M(f,"META",{property:!0,content:!0}),a=M(f,"META",{property:!0,content:!0}),f.forEach(g),p=U(o),B(w.$$.fragment,o),_=U(o),v.l(o),C=U(o),I&&I.l(o),z=U(o),u&&u.l(o),N=U(o),B(P.$$.fragment,o),this.h()},h(){var o,f,S,F,J;k(n,"property","og:title"),k(n,"content",t=`블루닷 - ${((o=s[1])==null?void 0:o.unique_name)??"bluedot"} 님 게시물`),k(i,"property","og:image"),k(i,"content",l=((f=s[1])==null?void 0:f.image)??""),k(c,"property","og:image:alt"),k(c,"content",r=((S=s[1])==null?void 0:S.place_name)??""),k(a,"property","og:description"),k(a,"content",m=((F=s[1])==null?void 0:F.text)??((J=s[1])==null?void 0:J.place_name)??"")},m(o,f){X(document.head,n),X(document.head,i),X(document.head,c),X(document.head,a),A(o,p,f),D(w,o,f),A(o,_,f),h[b].m(o,f),A(o,C,f),I&&I.m(o,f),A(o,z,f),u&&u.m(o,f),A(o,N,f),D(P,o,f),$=!0},p(o,[f]){var ie,ae,re,le,ce,fe;(!$||f&2)&&e!==(e=((ie=o[1])==null?void 0:ie.text)??"블루닷 - 사람과 장소 그리고 순간을 의미 있게 만들다")&&(document.title=e),(!$||f&2&&t!==(t=`블루닷 - ${((ae=o[1])==null?void 0:ae.unique_name)??"bluedot"} 님 게시물`))&&k(n,"content",t),(!$||f&2&&l!==(l=((re=o[1])==null?void 0:re.image)??""))&&k(i,"content",l),(!$||f&2&&r!==(r=((le=o[1])==null?void 0:le.place_name)??""))&&k(c,"content",r),(!$||f&2&&m!==(m=((ce=o[1])==null?void 0:ce.text)??((fe=o[1])==null?void 0:fe.place_name)??""))&&k(a,"content",m);const S={};f&16&&(S.leftLogo=y||!o[4]),f&16&&(S.leftBack=!y&&o[4]?"white":""),f&262144&&(S.$$scope={dirty:f,ctx:o}),w.$set(S);let F=b;b=T(o),b===F?h[b].p(o,f):(ge(),O(h[F],1,1,()=>{h[F]=null}),he(),v=h[b],v?v.p(o,f):(v=h[b]=d[b](o),v.c()),E(v,1),v.m(C.parentNode,C)),o[5]?u?(u.p(o,f),f&32&&E(u,1)):(u=ke(o),u.c(),E(u,1),u.m(N.parentNode,N)):u&&(ge(),O(u,1,1,()=>{u=null}),he());const J={};!G&&f&8&&(G=!0,J.isOpen=o[3],ve(()=>G=!1)),P.$set(J)},i(o){$||(E(w.$$.fragment,o),E(v),E(I),E(u),E(P.$$.fragment,o),$=!0)},o(o){O(w.$$.fragment,o),O(v),O(I),O(u),O(P.$$.fragment,o),$=!1},d(o){o&&(g(p),g(_),g(C),g(z),g(N)),g(n),g(i),g(c),g(a),q(w,o),h[b].d(o),I&&I.d(o),u&&u.d(o),q(P,o)}}}function ot(s,e,n){let t,i,l,c,r;ee(s,Re,d=>n(7,l=d)),ee(s,Se,d=>n(16,c=d)),ee(s,ue,d=>n(5,r=d));let a={posts:[],index:0},m,p,w=!1,_=!1,b;Me(async()=>{let d="";try{d=De()}catch{}const h=new URLSearchParams(window.location.search),T=Number(h.get("postIdx")||0);Number(h.get("mediaIdx")||0);const I=0,u=30,H=`&offset=${I}`,Y=`&limit=${u}`;let j=[];(i||t)&&c.length>0?(n(4,_=!0),j=c.map(o=>o.idx===T?{...o,mediaIdx:o.mediaIdx||0}:{...o,mediaIdx:0}),n(0,a.index=j.findIndex(o=>o.idx===String(T)),a)):(b=new AbortController,T&&(j=[await fetch(`${me}/posts/${T}`,{method:"GET",headers:{Authorization:"Bearer "+d,"x-api-version":pe.POST},signal:b.signal}).then(o=>o.json()).then(o=>({...o.data,mediaIdx:o.data.mediaIdx||0}))]),j=[...j,...await fetch(`${me}/posts?${H}${Y}`,{method:"GET",headers:{Authorization:"Bearer "+d,"x-api-version":pe.POST},signal:b.signal}).then(o=>o.json()).then(o=>{var f;return(f=o.data)==null?void 0:f.posts.filter(S=>S.idx!==String(T)).map(S=>({...S,mediaIdx:S.mediaIdx||0}))})||[]]),n(0,a.posts=j,a)}),Ce(()=>{b&&b.abort()});async function v(d){const h=l.url.searchParams.get("postIdx");h&&n(2,p={postIdx:h,reaction:d})}async function C(d){var T;let h=(T=a.posts)==null?void 0:T.at(d);if(h){let I=h.media[0];if(I){const u=be(I);if(u.includes("youtu"))h.image=u;else{const H=await Ge(u);h.image=H?be(I+"-thumbnail"):u}}}n(1,m=h)}const z=async()=>{await Be("/search")},N=()=>{if(y)return n(3,w=!0)};function P(d){s.$$.not_equal(a.index,d)&&(a.index=d,n(0,a))}const G=()=>{ue.set(!1)};function $(d){w=d,n(3,w)}return s.$$.update=()=>{s.$$.dirty&128&&(t=l.url.searchParams.get("placeIdx")),s.$$.dirty&128&&(i=l.url.searchParams.get("userIdx")),s.$$.dirty&1&&C(a.index)},[a,m,p,w,_,r,v,l,z,N,P,G,$]}class vt extends oe{constructor(e){super(),se(this,e,ot,nt,ne,{})}}function st(){Pe.set(!0)}const Ot=Object.freeze(Object.defineProperty({__proto__:null,load:st},Symbol.toStringTag,{value:"Module"}));export{vt as component,Ot as universal};
