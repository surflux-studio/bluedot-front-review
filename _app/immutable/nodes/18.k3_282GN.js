import{a as P,A as E,c as fe,C as pe}from"../chunks/units.BMbtY17E.js";import{e as S}from"../chunks/index.DRxYzM98.js";import{T as de,s as R,e as Z,c as Q,b as X,f as g,q as _e,U as me,i as $,V as H,r as x,n as N,w as ge,o as ee,t as M,d as Y,J as U,h as be,j as he,E as ye,W as ke,m as B,a as j,g as F,p as O,k as T,l as $e,x as V}from"../chunks/scheduler.BjRrIjTN.js";import{s as te,a as we}from"../chunks/store.gkSKwQRQ.js";import{S as oe,i as se,e as L,c as w,a as C,m as v,t as y,b as k,d as I,g as Ce,f as ve}from"../chunks/index.BlBwh9YZ.js";import{H as Ie}from"../chunks/Header.CwtuFZld.js";import{V as Ae}from"../chunks/Viewer.CCnPqn87.js";import{F as Se}from"../chunks/Footer.DDQF2AWi.js";import{B as ae}from"../chunks/Button.CQNVmGQC.js";import{e as q,u as Pe,d as Te}from"../chunks/each.CPxOT6Eo.js";import{g as G}from"../chunks/entry.BV8Inj_p.js";import{p as De}from"../chunks/stores.CoQzwfwp.js";const Ee=async({fetch:s,url:e})=>{console.warn("viewer/edit/+page.ts load");const t=e.searchParams.get("type");if(t===null||!["post","patch"].includes(t))return S(400,"Bad Request");if(t==="post")return{posts:[{user_idx:P().idx,display_name:P().display_name,profile_image_url:P().profile_image_url,place_idx:e.searchParams.get("placeIdx"),place_name:e.searchParams.get("placeName"),media:de(te),mediaIdx:0,text:""}]};if(t==="patch"){const o=e.searchParams.get("postIdx");o||S(404,"Not Found");const a=await s(`${E}/posts/${o}`,{method:"GET",headers:{Authorization:"Bearer "+sessionStorage.getItem("jwt")}}).then(n=>n.json()).then(n=>n.data);return a.error&&S(404,"Not Found"),{posts:[{...a,mediaIdx:0}]}}return S(404,"Not Found")},et=Object.freeze(Object.defineProperty({__proto__:null,load:Ee},Symbol.toStringTag,{value:"Module"}));function J(s,e,t){const o=s.slice();return o[5]=e[t],o[7]=t,o}function W(s,e){let t,o=e[5]+"",a,n;return{key:s,first:null,c(){t=Z("option"),a=M(o),this.h()},l(c){t=Q(c,"OPTION",{});var u=X(t);a=Y(u,o),u.forEach(g),this.h()},h(){t.__value=n=e[5],U(t,t.__value),this.first=t},m(c,u){$(c,t,u),be(t,a)},p(c,u){e=c,u&2&&o!==(o=e[5]+"")&&he(a,o),u&2&&n!==(n=e[5])&&(t.__value=n,U(t,t.__value))},d(c){c&&g(t)}}}function Ne(s){let e,t=[],o=new Map,a,n,c=q(s[1]);const u=r=>r[7];for(let r=0;r<c.length;r+=1){let f=J(s,c,r),p=u(f);o.set(p,t[r]=W(p,f))}return{c(){e=Z("select");for(let r=0;r<t.length;r+=1)t[r].c();this.h()},l(r){e=Q(r,"SELECT",{class:!0});var f=X(e);for(let p=0;p<t.length;p+=1)t[p].l(f);f.forEach(g),this.h()},h(){_e(e,"class","border border-gray-200 rounded-[4.75rem] py-[0.38rem] px-[0.88rem] typo-body3 text-gray-900 bg-gray-100"),e.disabled=s[2],s[0]===void 0&&me(()=>s[4].call(e))},m(r,f){$(r,e,f);for(let p=0;p<t.length;p+=1)t[p]&&t[p].m(e,null);H(e,s[0],!0),a||(n=[x(e,"change",s[4]),x(e,"change",s[3])],a=!0)},p(r,[f]){f&2&&(c=q(r[1]),t=Pe(t,f,u,1,r,c,o,e,Te,W,null,J)),f&4&&(e.disabled=r[2]),f&3&&H(e,r[0])},i:N,o:N,d(r){r&&g(e);for(let f=0;f<t.length;f+=1)t[f].d();a=!1,ge(n)}}}function Be(s,e,t){let{selected:o=""}=e,{options:a=[]}=e,{disabled:n=!1}=e;ee(()=>{a.length>0&&t(0,o=a[0])});function c(r){ye.call(this,s,r)}function u(){o=ke(this),t(0,o),t(1,a)}return s.$$set=r=>{"selected"in r&&t(0,o=r.selected),"options"in r&&t(1,a=r.options),"disabled"in r&&t(2,n=r.disabled)},[o,a,n,c,u]}class je extends oe{constructor(e){super(),se(this,e,Be,Ne,R,{selected:0,options:1,disabled:2})}}var z;(function(s){s.Dark="DARK",s.Light="LIGHT",s.Default="DEFAULT"})(z||(z={}));var K;(function(s){s.Body="body",s.Ionic="ionic",s.Native="native",s.None="none"})(K||(K={}));const D=fe("Keyboard");function Fe(s){let e,t;return e=new ae({props:{backgroundColor:"bg-gray-800",textColor:"text-white",border:"border-none",$$slots:{default:[Le]},$$scope:{ctx:s}}}),{c(){w(e.$$.fragment)},l(o){C(e.$$.fragment,o)},m(o,a){v(e,o,a),t=!0},p(o,a){const n={};a&1048576&&(n.$$scope={dirty:a,ctx:o}),e.$set(n)},i(o){t||(y(e.$$.fragment,o),t=!0)},o(o){k(e.$$.fragment,o),t=!1},d(o){I(e,o)}}}function Oe(s){let e,t;return e=new ae({props:{backgroundColor:"bg-primary-500",textColor:"text-white",border:"border-none",$$slots:{default:[Me]},$$scope:{ctx:s}}}),e.$on("click",s[13]),{c(){w(e.$$.fragment)},l(o){C(e.$$.fragment,o)},m(o,a){v(e,o,a),t=!0},p(o,a){const n={};a&1048576&&(n.$$scope={dirty:a,ctx:o}),e.$set(n)},i(o){t||(y(e.$$.fragment,o),t=!0)},o(o){k(e.$$.fragment,o),t=!1},d(o){I(e,o)}}}function Le(s){let e;return{c(){e=M("사진 업로드중")},l(t){e=Y(t,"사진 업로드중")},m(t,o){$(t,e,o)},d(t){t&&g(e)}}}function Me(s){let e;return{c(){e=M(s[5])},l(t){e=Y(t,s[5])},m(t,o){$(t,e,o)},p:N,d(t){t&&g(e)}}}function Ye(s){let e,t,o,a,n,c,u;function r(l){s[12](l)}let f={options:["전체 공개","팔로워 공개","비공개"],disabled:!0};s[0]!==void 0&&(f.selected=s[0]),e=new je({props:f}),B.push(()=>L(e,"selected",r));const p=[Oe,Fe],_=[];function i(l,m){return l[3]===!0?0:1}return a=i(s),n=_[a]=p[a](s),{c(){w(e.$$.fragment),o=j(),n.c(),c=V()},l(l){C(e.$$.fragment,l),o=F(l),n.l(l),c=V()},m(l,m){v(e,l,m),$(l,o,m),_[a].m(l,m),$(l,c,m),u=!0},p(l,m){const h={};!t&&m&1&&(t=!0,h.selected=l[0],O(()=>t=!1)),e.$set(h);let b=a;a=i(l),a===b?_[a].p(l,m):(Ce(),k(_[b],1,1,()=>{_[b]=null}),ve(),n=_[a],n?n.p(l,m):(n=_[a]=p[a](l),n.c()),y(n,1),n.m(c.parentNode,c))},i(l){u||(y(e.$$.fragment,l),y(n),u=!0)},o(l){k(e.$$.fragment,l),k(n),u=!1},d(l){l&&(g(o),g(c)),I(e,l),_[a].d(l)}}}function He(s){let e,t,o,a,n,c,u,r;e=new Ie({props:{position:"fixed",leftBack:"white"}});function f(i){s[10](i)}function p(i){s[11](i)}let _={dontMoveVetically:!0};return s[2]!==void 0&&(_.posts=s[2]),s[1]!==void 0&&(_.keyboardY=s[1]),o=new Ae({props:_}),B.push(()=>L(o,"posts",f)),B.push(()=>L(o,"keyboardY",p)),u=new Se({props:{position:"fixed",bottom:"2rem",$$slots:{default:[Ye]},$$scope:{ctx:s}}}),{c(){w(e.$$.fragment),t=j(),w(o.$$.fragment),c=j(),w(u.$$.fragment)},l(i){C(e.$$.fragment,i),t=F(i),C(o.$$.fragment,i),c=F(i),C(u.$$.fragment,i)},m(i,l){v(e,i,l),$(i,t,l),v(o,i,l),$(i,c,l),v(u,i,l),r=!0},p(i,[l]){const m={};!a&&l&4&&(a=!0,m.posts=i[2],O(()=>a=!1)),!n&&l&2&&(n=!0,m.keyboardY=i[1],O(()=>n=!1)),o.$set(m);const h={};l&1048585&&(h.$$scope={dirty:l,ctx:i}),u.$set(h)},i(i){r||(y(e.$$.fragment,i),y(o.$$.fragment,i),y(u.$$.fragment,i),r=!0)},o(i){k(e.$$.fragment,i),k(o.$$.fragment,i),k(u.$$.fragment,i),r=!1},d(i){i&&(g(t),g(c)),I(e,i),I(o,i),I(u,i)}}}function xe(s,e,t){let o,a,n,c,u;T(s,De,d=>t(15,n=d)),T(s,te,d=>t(9,c=d)),T(s,we,d=>t(3,u=d));const r=pe.getPlatform()!=="web",f=n.url.searchParams.get("type"),p=f==="post"?"게시하기":"수정하기";let{data:_}=e,i;const l={"전체 공개":"public","팔로워 공개":"follower",비공개:"private"};async function m(){var A;(await fetch(`${E}/posts`,{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${sessionStorage.getItem("jwt")}`},body:JSON.stringify({placeIdx:n.url.searchParams.get("placeIdx"),text:((A=a.at(0))==null?void 0:A.text)||"",media:o,permission:l[i]})})).ok&&await G("/users/0",{replaceState:!0,invalidateAll:!0})}async function h(){var A;(await fetch(`${E}/posts/${n.url.searchParams.get("postIdx")}`,{method:"PATCH",headers:{"Content-Type":"application/json",Authorization:`Bearer ${sessionStorage.getItem("jwt")}`},body:JSON.stringify({text:((A=a.at(0))==null?void 0:A.text)||""})})).ok&&await G("/users/0",{replaceState:!0,invalidateAll:!0})}let b=0;function ne(){D.addListener("keyboardWillShow",d=>{t(1,b=d.keyboardHeight*-1)}),D.addListener("keyboardWillHide",()=>{t(1,b=0)})}function re(){D.removeAllListeners()}ee(()=>{r&&ne()}),$e(()=>{r&&re()});function ie(d){a=d,t(2,a),t(8,_)}function le(d){b=d,t(1,b)}function ce(d){i=d,t(0,i)}const ue=()=>{f==="post"?m():f==="patch"&&h()};return s.$$set=d=>{"data"in d&&t(8,_=d.data)},s.$$.update=()=>{s.$$.dirty&512&&(o=c),s.$$.dirty&256&&t(2,a=_.posts)},[i,b,a,u,f,p,m,h,_,c,ie,le,ce,ue]}class tt extends oe{constructor(e){super(),se(this,e,xe,He,R,{data:8})}}export{tt as component,et as universal};
