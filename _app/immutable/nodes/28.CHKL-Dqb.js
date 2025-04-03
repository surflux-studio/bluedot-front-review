import{b as $e,j as fe,A as ue,c as Ee}from"../chunks/store.C807Sv48.js";import{s as te,m as Oe,e as M,c as C,b as W,f as g,v as k,K as me,i as A,A as N,H as Y,G as be,u as Pe,o as Se,p as je,F as ke,J as ee,$ as Z,w as we,a as J,P as Ae,g as U,h as K,x as Ie,k as x,y as Te,B as Me,D as de,n as Q}from"../chunks/scheduler.CIbz-4tf.js";import{S as ne,i as oe,t as I,a as E,c as V,d as B,m as R,f as D,b as ve,e as pe,g as _e}from"../chunks/index.gvaMc9LH.js";import{H as Ce}from"../chunks/Header.D0Ely6jv.js";import{V as Le}from"../chunks/Viewer.BESh7JNr.js";import{p as ye}from"../chunks/stores.Bxja5V5b.js";import{N as Ne}from"../chunks/NavigationBar.CC2C4HCX.js";import"../chunks/device.ncRycTeL.js";import"../chunks/ActionSheet.svelte_svelte_type_style_lang.CJBwwqYs.js";/* empty css                                                   */import{g as Ve}from"../chunks/entry.BlipmNmQ.js";import{g as Be}from"../chunks/sign.DjOL18JW.js";/* empty css                                                   */import{P as Re}from"../chunks/picker.DO1g6OCe.js";import{I as De}from"../chunks/IconSearch.Deap0mXU.js";import{A as qe}from"../chunks/ActionSheetOpenApp.Hax2RVvs.js";import{s as he}from"../chunks/s32cloudfront.iC-vMcWe.js";import{i as ze}from"../chunks/isVideoFile.DGBlGWVm.js";function Fe(s){let e,n,t,i,l;const c=s[5].default,r=Oe(c,s,s[4],null);return{c(){e=M("div"),r&&r.c(),this.h()},l(a){e=C(a,"DIV",{id:!0,class:!0,"aria-hidden":!0});var m=W(e);r&&r.l(m),m.forEach(g),this.h()},h(){k(e,"id","mask"),k(e,"class",n=me(`${s[0]?"":"hidden"} ${s[1]}`)+" svelte-eerk6g"),k(e,"aria-hidden","")},m(a,m){A(a,e,m),r&&r.m(e,null),t=!0,i||(l=[N(e,"touchstart",Y(be(s[6]))),N(e,"touchend",s[7],{passive:!0}),N(e,"click",s[8])],i=!0)},p(a,[m]){r&&r.p&&(!t||m&16)&&Pe(r,c,a,a[4],t?je(c,a[4],m,null):Se(a[4]),null),(!t||m&3&&n!==(n=me(`${a[0]?"":"hidden"} ${a[1]}`)+" svelte-eerk6g"))&&k(e,"class",n)},i(a){t||(I(r,a),t=!0)},o(a){E(r,a),t=!1},d(a){a&&g(e),r&&r.d(a),i=!1,ke(l)}}}function Ge(s,e,n){let{$$slots:t={},$$scope:i}=e,{onMask:l=!1}=e,{position:c="fixed"}=e,{closeOnClick:r=!1}=e,{onTouch:a=void 0}=e;function m(_){ee.call(this,s,_)}const d=()=>{r?n(0,l=!1):a&&a()},v=()=>{r?n(0,l=!1):a&&a()};return s.$$set=_=>{"onMask"in _&&n(0,l=_.onMask),"position"in _&&n(1,c=_.position),"closeOnClick"in _&&n(2,r=_.closeOnClick),"onTouch"in _&&n(3,a=_.onTouch),"$$scope"in _&&n(4,i=_.$$scope)},[l,c,r,a,i,t,m,d,v]}class He extends ne{constructor(e){super(),oe(this,e,Ge,Fe,te,{onMask:0,position:1,closeOnClick:2,onTouch:3})}}function Je(s){let e,n,t;return{c(){e=M("emoji-picker"),this.h()},l(i){e=C(i,"EMOJI-PICKER",{"aria-hidden":!0,class:!0}),W(e).forEach(g),this.h()},h(){Z(e,"aria-hidden",""),Z(e,"class",s[0])},m(i,l){A(i,e,l),n||(t=[N(e,"emoji-click",Y(be(s[2]))),N(e,"touchstart",Y(s[4])),N(e,"touchend",Y(s[5]))],n=!0)},p(i,l){l&1&&Z(e,"class",i[0])},d(i){i&&g(e),n=!1,ke(t)}}}function Ue(s){let e,n;return e=new He({props:{onMask:!0,position:"absolute",onTouch:s[6],$$slots:{default:[Je]},$$scope:{ctx:s}}}),{c(){V(e.$$.fragment)},l(t){B(e.$$.fragment,t)},m(t,i){R(e,t,i),n=!0},p(t,[i]){const l={};i&2&&(l.onTouch=t[6]),i&257&&(l.$$scope={dirty:i,ctx:t}),e.$set(l)},i(t){n||(I(e.$$.fragment,t),n=!0)},o(t){E(e.$$.fragment,t),n=!1},d(t){D(e,t)}}}function Ke(s,e,n){let{classList:t}=e,{onSelect:i}=e,{close:l}=e;function c(d){i(d.detail.unicode)}new Re({emojiVersion:15});function r(d){ee.call(this,s,d)}function a(d){ee.call(this,s,d)}const m=()=>{l()};return s.$$set=d=>{"classList"in d&&n(0,t=d.classList),"onSelect"in d&&n(3,i=d.onSelect),"close"in d&&n(1,l=d.close)},[t,l,c,i,r,a,m]}class Qe extends ne{constructor(e){super(),oe(this,e,Ke,Ue,te,{classList:0,onSelect:3,close:1})}}function We(s){let e,n,t,i,l,c;return t=new De({props:{width:"24",height:"24"}}),{c(){e=M("div"),n=M("button"),V(t.$$.fragment),this.h()},l(r){e=C(r,"DIV",{class:!0});var a=W(e);n=C(a,"BUTTON",{});var m=W(n);B(t.$$.fragment,m),m.forEach(g),a.forEach(g),this.h()},h(){k(e,"class","flex items-center gap-2")},m(r,a){A(r,e,a),K(e,n),R(t,n,null),i=!0,l||(c=N(n,"click",s[8]),l=!0)},i(r){i||(I(t.$$.fragment,r),i=!0)},o(r){E(t.$$.fragment,r),i=!1},d(r){r&&g(e),D(t),l=!1,c()}}}function Xe(s){let e,n,t=We(s);return{c(){t&&t.c(),e=de()},l(i){t&&t.l(i),e=de()},m(i,l){t&&t.m(i,l),A(i,e,l),n=!0},p:Q,i(i){n||(I(t),n=!0)},o(i){E(t),n=!1},d(i){i&&g(e),t&&t.d(i)}}}function Ye(s){let e,n,t;function i(c){s[10](c)}let l={posts:s[0].posts,selectedReaction:s[2],whenCancelForExternalLink:s[9]};return s[0].index!==void 0&&(l.index=s[0].index),e=new Le({props:l}),we.push(()=>ve(e,"index",i)),{c(){V(e.$$.fragment)},l(c){B(e.$$.fragment,c)},m(c,r){R(e,c,r),t=!0},p(c,r){const a={};r&1&&(a.posts=c[0].posts),r&4&&(a.selectedReaction=c[2]),r&8&&(a.whenCancelForExternalLink=c[9]),!n&&r&1&&(n=!0,a.index=c[0].index,Ie(()=>n=!1)),e.$set(a)},i(c){t||(I(e.$$.fragment,c),t=!0)},o(c){E(e.$$.fragment,c),t=!1},d(c){D(e,c)}}}function Ze(s){let e;return{c(){e=M("div"),this.h()},l(n){e=C(n,"DIV",{class:!0}),W(e).forEach(g),this.h()},h(){k(e,"class","w-full h-full")},m(n,t){A(n,e,t)},p:Q,i:Q,o:Q,d(n){n&&g(e)}}}function xe(s){let e,n;return e=new Ne({}),{c(){V(e.$$.fragment)},l(t){B(e.$$.fragment,t)},m(t,i){R(e,t,i),n=!0},i(t){n||(I(e.$$.fragment,t),n=!0)},o(t){E(e.$$.fragment,t),n=!1},d(t){D(e,t)}}}function ge(s){let e,n;return e=new Qe({props:{classList:"absolute bottom-24 right-0 px-4 z-50",onSelect:s[6],close:s[11]}}),{c(){V(e.$$.fragment)},l(t){B(e.$$.fragment,t)},m(t,i){R(e,t,i),n=!0},p:Q,i(t){n||(I(e.$$.fragment,t),n=!0)},o(t){E(e.$$.fragment,t),n=!1},d(t){D(e,t)}}}function et(s){var T;let e,n,t,i,l,c,r,a,m,d,v,_,b,$,L,q,y,P,F,S;document.title=e=((T=s[1])==null?void 0:T.text)??"블루닷 - 사람과 장소 그리고 순간을 의미 있게 만들다",v=new Ce({props:{position:"fixed",leftLogo:!s[4],leftBack:s[4]?"white":"",$$slots:{right:[Xe]},$$scope:{ctx:s}}});const p=[Ze,Ye],h=[];function j(o,f){return o[0].posts.length===0?0:1}b=j(s),$=h[b]=p[b](s);let w=xe(),u=s[5]&&ge(s);function G(o){s[12](o)}let X={};return s[3]!==void 0&&(X.isOpen=s[3]),P=new qe({props:X}),we.push(()=>ve(P,"isOpen",G)),{c(){n=M("meta"),i=M("meta"),c=M("meta"),a=M("meta"),d=J(),V(v.$$.fragment),_=J(),$.c(),L=J(),w&&w.c(),q=J(),u&&u.c(),y=J(),V(P.$$.fragment),this.h()},l(o){const f=Ae("svelte-1of46d2",document.head);n=C(f,"META",{property:!0,content:!0}),i=C(f,"META",{property:!0,content:!0}),c=C(f,"META",{property:!0,content:!0}),a=C(f,"META",{property:!0,content:!0}),f.forEach(g),d=U(o),B(v.$$.fragment,o),_=U(o),$.l(o),L=U(o),w&&w.l(o),q=U(o),u&&u.l(o),y=U(o),B(P.$$.fragment,o),this.h()},h(){var o,f,O,z,H;k(n,"property","og:title"),k(n,"content",t=`블루닷 - ${((o=s[1])==null?void 0:o.unique_name)??"bluedot"} 님 게시물`),k(i,"property","og:image"),k(i,"content",l=((f=s[1])==null?void 0:f.image)??""),k(c,"property","og:image:alt"),k(c,"content",r=((O=s[1])==null?void 0:O.place_name)??""),k(a,"property","og:description"),k(a,"content",m=((z=s[1])==null?void 0:z.text)??((H=s[1])==null?void 0:H.place_name)??"")},m(o,f){K(document.head,n),K(document.head,i),K(document.head,c),K(document.head,a),A(o,d,f),R(v,o,f),A(o,_,f),h[b].m(o,f),A(o,L,f),w&&w.m(o,f),A(o,q,f),u&&u.m(o,f),A(o,y,f),R(P,o,f),S=!0},p(o,[f]){var se,ie,ae,re,le,ce;(!S||f&2)&&e!==(e=((se=o[1])==null?void 0:se.text)??"블루닷 - 사람과 장소 그리고 순간을 의미 있게 만들다")&&(document.title=e),(!S||f&2&&t!==(t=`블루닷 - ${((ie=o[1])==null?void 0:ie.unique_name)??"bluedot"} 님 게시물`))&&k(n,"content",t),(!S||f&2&&l!==(l=((ae=o[1])==null?void 0:ae.image)??""))&&k(i,"content",l),(!S||f&2&&r!==(r=((re=o[1])==null?void 0:re.place_name)??""))&&k(c,"content",r),(!S||f&2&&m!==(m=((le=o[1])==null?void 0:le.text)??((ce=o[1])==null?void 0:ce.place_name)??""))&&k(a,"content",m);const O={};f&16&&(O.leftLogo=!o[4]),f&16&&(O.leftBack=o[4]?"white":""),f&262144&&(O.$$scope={dirty:f,ctx:o}),v.$set(O);let z=b;b=j(o),b===z?h[b].p(o,f):(_e(),E(h[z],1,1,()=>{h[z]=null}),pe(),$=h[b],$?$.p(o,f):($=h[b]=p[b](o),$.c()),I($,1),$.m(L.parentNode,L)),o[5]?u?(u.p(o,f),f&32&&I(u,1)):(u=ge(o),u.c(),I(u,1),u.m(y.parentNode,y)):u&&(_e(),E(u,1,1,()=>{u=null}),pe());const H={};!F&&f&8&&(F=!0,H.isOpen=o[3],Ie(()=>F=!1)),P.$set(H)},i(o){S||(I(v.$$.fragment,o),I($),I(w),I(u),I(P.$$.fragment,o),S=!0)},o(o){E(v.$$.fragment,o),E($),E(w),E(u),E(P.$$.fragment,o),S=!1},d(o){o&&(g(d),g(_),g(L),g(q),g(y)),g(n),g(i),g(c),g(a),D(v,o),h[b].d(o),w&&w.d(o),u&&u.d(o),D(P,o)}}}function tt(s,e,n){let t,i,l,c,r;x(s,ye,p=>n(7,l=p)),x(s,$e,p=>n(16,c=p)),x(s,fe,p=>n(5,r=p));let a={posts:[],index:0},m,d,v=!1,_=!1,b;Te(async()=>{let p="";try{p=Be()}catch{}const h=new URLSearchParams(window.location.search),j=Number(h.get("postIdx")||0);Number(h.get("mediaIdx")||0);const w=0,u=30,G=`&offset=${w}`,X=`&limit=${u}`;let T=[];(i||t)&&c.length>0?(n(4,_=!0),T=c.map(o=>o.idx===j?{...o,mediaIdx:o.mediaIdx||0}:{...o,mediaIdx:0}),n(0,a.index=T.findIndex(o=>o.idx===String(j)),a)):(b=new AbortController,j&&(T=[await fetch(`${ue}/posts/${j}`,{method:"GET",headers:{Authorization:"Bearer "+p},signal:b.signal}).then(o=>o.json()).then(o=>({...o.data,mediaIdx:o.data.mediaIdx||0}))]),T=[...T,...await fetch(`${ue}/posts?${G}${X}`,{method:"GET",headers:{Authorization:"Bearer "+p},signal:b.signal}).then(o=>o.json()).then(o=>{var f;return(f=o.data)==null?void 0:f.posts.filter(O=>O.idx!==String(j)).map(O=>({...O,mediaIdx:O.mediaIdx||0}))})||[]]),n(0,a.posts=T,a)}),Me(()=>{b&&b.abort()});async function $(p){const h=l.url.searchParams.get("postIdx");h&&n(2,d={postIdx:h,reaction:p})}async function L(p){var j;let h=(j=a.posts)==null?void 0:j.at(p);if(h){let w=h.media[0];if(w){const u=he(w);if(u.includes("youtu"))h.image=u;else{const G=await ze(u);h.image=G?he(w+"-thumbnail"):u}}}n(1,m=h)}const q=async()=>{await Ve("/search")},y=()=>{};function P(p){s.$$.not_equal(a.index,p)&&(a.index=p,n(0,a))}const F=()=>{fe.set(!1)};function S(p){v=p,n(3,v)}return s.$$.update=()=>{s.$$.dirty&128&&(t=l.url.searchParams.get("placeIdx")),s.$$.dirty&128&&(i=l.url.searchParams.get("userIdx")),s.$$.dirty&1&&L(a.index)},[a,m,d,v,_,r,$,l,q,y,P,F,S]}class It extends ne{constructor(e){super(),oe(this,e,tt,et,te,{})}}function nt(){Ee.set(!0)}const vt=Object.freeze(Object.defineProperty({__proto__:null,load:nt},Symbol.toStringTag,{value:"Module"}));export{It as component,vt as universal};
