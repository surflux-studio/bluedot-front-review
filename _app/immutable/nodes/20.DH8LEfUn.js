import{h as se,j as z,A as C}from"../chunks/sign.BxCoe6p8.js";import"../chunks/index.BqcJK9xU.js";import{s as U,e as N,c as y,b as A,f as g,V as L,i as w,y as M,G as D,H as oe,D as re,I as G,a as T,A as H,g as V,k as O,q as ne,r as ae,x as B,h as q,n as x}from"../chunks/scheduler.B69fKoFa.js";import{S as Q,i as W,c as j,b as E,m as S,t as $,a as b,d as P,f as F,g as J}from"../chunks/index.dtT_z20O.js";import{H as ie,I as le}from"../chunks/Header.CWwfNqbM.js";import{V as ce}from"../chunks/Viewer.Dwkllv0T.js";import{g as fe}from"../chunks/entry.rxoMCqBw.js";/* empty css                                                   */import"../chunks/heic2any.DdjaI_5d.js";/* empty css                                                     */import{p as me}from"../chunks/stores.B0I4f_9d.js";import{N as ue}from"../chunks/NavigationBar.BMkIKPiw.js";import"../chunks/ActionSheet.of5Fe97F.js";/* empty css                                                   */import{M as pe}from"../chunks/Mask.CP4fIvGT.js";import{P as he}from"../chunks/picker.DO1g6OCe.js";import{I as de}from"../chunks/IconAlarmLine.C-ayk0mr.js";function _e(n){let e,o,s;return{c(){e=N("emoji-picker"),this.h()},l(t){e=y(t,"EMOJI-PICKER",{"aria-hidden":!0,class:!0}),A(e).forEach(g),this.h()},h(){L(e,"aria-hidden",""),L(e,"class",n[0])},m(t,a){w(t,e,a),o||(s=[M(e,"emoji-click",D(oe(n[2]))),M(e,"touchstart",D(n[4])),M(e,"touchend",D(n[5]))],o=!0)},p(t,a){a&1&&L(e,"class",t[0])},d(t){t&&g(e),o=!1,re(s)}}}function ge(n){let e,o;return e=new pe({props:{onMask:!0,position:"absolute",onTouch:n[6],$$slots:{default:[_e]},$$scope:{ctx:n}}}),{c(){j(e.$$.fragment)},l(s){E(e.$$.fragment,s)},m(s,t){S(e,s,t),o=!0},p(s,[t]){const a={};t&2&&(a.onTouch=s[6]),t&257&&(a.$$scope={dirty:t,ctx:s}),e.$set(a)},i(s){o||($(e.$$.fragment,s),o=!0)},o(s){b(e.$$.fragment,s),o=!1},d(s){P(e,s)}}}function $e(n,e,o){let{classList:s}=e,{onSelect:t}=e,{close:a}=e;function i(l){t(l.detail.unicode)}new he({emojiVersion:15});function p(l){G.call(this,n,l)}function h(l){G.call(this,n,l)}const c=()=>{a()};return n.$$set=l=>{"classList"in l&&o(0,s=l.classList),"onSelect"in l&&o(3,t=l.onSelect),"close"in l&&o(1,a=l.close)},[s,a,i,t,p,h,c]}class be extends Q{constructor(e){super(),W(this,e,$e,ge,U,{classList:0,onSelect:3,close:1})}}function ke(n){let e,o,s,t,a,i,p,h;return o=new de({props:{length:"1.5",fill:"white"}}),a=new le({props:{fill:"white",alt:"search"}}),{c(){e=N("div"),j(o.$$.fragment),s=T(),t=N("button"),j(a.$$.fragment),this.h()},l(c){e=y(c,"DIV",{slot:!0,class:!0});var l=A(e);E(o.$$.fragment,l),s=V(l),t=y(l,"BUTTON",{});var d=A(t);E(a.$$.fragment,d),d.forEach(g),l.forEach(g),this.h()},h(){B(e,"slot","right"),B(e,"class","flex items-center gap-2")},m(c,l){w(c,e,l),S(o,e,null),q(e,s),q(e,t),S(a,t,null),i=!0,p||(h=M(t,"click",n[8]),p=!0)},p:x,i(c){i||($(o.$$.fragment,c),$(a.$$.fragment,c),i=!0)},o(c){b(o.$$.fragment,c),b(a.$$.fragment,c),i=!1},d(c){c&&g(e),P(o),P(a),p=!1,h()}}}function Ie(n){let e,o,s;return o=new ce({props:{posts:n[0].posts,index:n[0].index,selectedReaction:n[1]}}),{c(){e=N("div"),j(o.$$.fragment),this.h()},l(t){e=y(t,"DIV",{class:!0});var a=A(e);E(o.$$.fragment,a),a.forEach(g),this.h()},h(){B(e,"class","fixed top-0 left-0 w-full h-full")},m(t,a){w(t,e,a),S(o,e,null),s=!0},p(t,a){const i={};a&1&&(i.posts=t[0].posts),a&1&&(i.index=t[0].index),a&2&&(i.selectedReaction=t[1]),o.$set(i)},i(t){s||($(o.$$.fragment,t),s=!0)},o(t){b(o.$$.fragment,t),s=!1},d(t){t&&g(e),P(o)}}}function we(n){let e;return{c(){e=N("div"),this.h()},l(o){e=y(o,"DIV",{class:!0}),A(e).forEach(g),this.h()},h(){B(e,"class","bg-black w-screen h-screen")},m(o,s){w(o,e,s)},p:x,i:x,o:x,d(o){o&&g(e)}}}function K(n){let e,o;return e=new be({props:{classList:"absolute bottom-24 right-0 px-4 z-50",onSelect:n[4],close:n[9]}}),{c(){j(e.$$.fragment)},l(s){E(e.$$.fragment,s)},m(s,t){S(e,s,t),o=!0},p:x,i(s){o||($(e.$$.fragment,s),o=!0)},o(s){b(e.$$.fragment,s),o=!1},d(s){P(e,s)}}}function je(n){let e,o,s,t,a,i,p,h,c;e=new ie({props:{position:"fixed",leftBack:n[2]?"":"white",$$slots:{right:[ke]},$$scope:{ctx:n}}});const l=[we,Ie],d=[];function k(r,m){return r[0].posts.length===0?0:1}s=k(n),t=d[s]=l[s](n),i=new ue({});let f=n[3]&&K(n);return{c(){j(e.$$.fragment),o=T(),t.c(),a=T(),j(i.$$.fragment),p=T(),f&&f.c(),h=H()},l(r){E(e.$$.fragment,r),o=V(r),t.l(r),a=V(r),E(i.$$.fragment,r),p=V(r),f&&f.l(r),h=H()},m(r,m){S(e,r,m),w(r,o,m),d[s].m(r,m),w(r,a,m),S(i,r,m),w(r,p,m),f&&f.m(r,m),w(r,h,m),c=!0},p(r,[m]){const u={};m&4&&(u.leftBack=r[2]?"":"white"),m&8192&&(u.$$scope={dirty:m,ctx:r}),e.$set(u);let I=s;s=k(r),s===I?d[s].p(r,m):(J(),b(d[I],1,1,()=>{d[I]=null}),F(),t=d[s],t?t.p(r,m):(t=d[s]=l[s](r),t.c()),$(t,1),t.m(a.parentNode,a)),r[3]?f?(f.p(r,m),m&8&&$(f,1)):(f=K(r),f.c(),$(f,1),f.m(h.parentNode,h)):f&&(J(),b(f,1,1,()=>{f=null}),F())},i(r){c||($(e.$$.fragment,r),$(t),$(i.$$.fragment,r),$(f),c=!0)},o(r){b(e.$$.fragment,r),b(t),b(i.$$.fragment,r),b(f),c=!1},d(r){r&&(g(o),g(a),g(p),g(h)),P(e,r),d[s].d(r),P(i,r),f&&f.d(r)}}}function Ee(n,e,o){let s,t,a,i,p,h;O(n,me,u=>o(7,i=u)),O(n,se,u=>o(11,p=u)),O(n,z,u=>o(3,h=u));let c={posts:[],index:0};const l=sessionStorage.getItem("jwt");let d,k;ne(async()=>{const u=Number(i.url.searchParams.get("postIdx")||0),I=Number(i.url.searchParams.get("mediaIdx")||0),X=0,Y=30,Z=`&offset=${X}`,ee=`&limit=${Y}`;let v=[];(t||s)&&p.length>0?(v=p.map(_=>_.idx===u?{..._,mediaIdx:I}:{..._,mediaIdx:0}),o(0,c.index=v.findIndex(_=>_.idx===String(u)),c)):(k=new AbortController,u&&(v=[await fetch(`${C}/posts/${u}`,{method:"GET",headers:{Authorization:"Bearer "+l},signal:k.signal}).then(_=>_.json()).then(_=>_.data)]),v=[...v,...await fetch(`${C}/posts?${Z}${ee}`,{method:"GET",headers:{Authorization:"Bearer "+l},signal:k.signal}).then(_=>_.json()).then(_=>{var R;return(R=_.data)==null?void 0:R.posts.filter(te=>te.idx!==String(u))})||[]]),o(0,c.posts=v,c)}),ae(()=>{k&&k.abort()});async function f(u){const I=i.url.searchParams.get("postIdx");I&&o(1,d={postIdx:I,reaction:u})}const r=async()=>{await fe("/search")},m=()=>{z.set(!1)};return n.$$.update=()=>{n.$$.dirty&128&&o(5,s=i.url.searchParams.get("placeIdx")),n.$$.dirty&128&&o(6,t=i.url.searchParams.get("userIdx")),n.$$.dirty&96&&o(2,a=!s&&!t)},[c,d,a,h,f,s,t,i,r,m]}class Ge extends Q{constructor(e){super(),W(this,e,Ee,je,U,{})}}const He=Object.freeze(Object.defineProperty({__proto__:null},Symbol.toStringTag,{value:"Module"}));export{Ge as component,He as universal};
