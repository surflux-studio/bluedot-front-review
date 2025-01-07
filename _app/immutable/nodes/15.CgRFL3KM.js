import{e as ke}from"../chunks/index.Ca0tKiOI.js";import{g as ae,A as Z,H as we,c as ve}from"../chunks/Header.FoXJ-u0t.js";import{g as ee}from"../chunks/entry.CMhpHdxa.js";import{s as Ie,B as je,a as U,e as E,E as le,g as V,c as T,b as D,D as re,f as p,m as O,L as te,i as j,h as x,p as K,C as Ce,x as ue,k as Ee,t as R,d as J,j as se,n as N,I as pe}from"../chunks/scheduler.B4Oq0Y6j.js";import{S as Te,i as xe,e as Fe,c as z,b as H,m as W,a as C,f as Q,t as v,d as G,g as X}from"../chunks/index.Dwy94kkp.js";import{e as ne}from"../chunks/each.DoWc_6y-.js";import{p as Se}from"../chunks/stores.Bepurxgr.js";import{s as qe}from"../chunks/search.BhpZG1Ux.js";import{u as ce,f as fe,C as he}from"../chunks/follow.D1cMAO8o.js";import{B as ie}from"../chunks/Button.OFmFBar4.js";import{F as ye}from"../chunks/Field.2ZpjzqQB.js";import{s as oe}from"../chunks/s32cloudfront.bAl2UV-x.js";const De=async({params:r,fetch:e,depends:l})=>{l("app:user:followers");const n=String(r.idx),t=String(ae());if(n!==t)throw ke(403,"Forbidden");const u=await e(`${Z}/auth/followers?targetTable=users&targetIdx=${n}&subjectTable=users`).then(c=>c.json()).then(c=>c.data),o=await e(`${Z}/auth/followers?targetTable=users&subjectTable=users&subjectIdx=${n}`).then(c=>c.json()).then(c=>c.data),a=await e(`${Z}/auth/followers?targetTable=users&targetIdx=${ae()}&subjectTable=users`).then(c=>c.json()).then(c=>c.data),s=await e(`${Z}/auth/followers?targetTable=users&subjectTable=users&subjectIdx=${ae()}`).then(c=>c.json()).then(c=>c.data);return{userFollowers:u,userFollowings:o,userIdx:n,signerFollowers:a,signerFollowings:s,signerIdx:t}},ct=Object.freeze(Object.defineProperty({__proto__:null,load:De},Symbol.toStringTag,{value:"Module"}));function _e(r,e,l){const n=r.slice();return n[32]=e[l],n}function de(r,e,l){const n=r.slice();return n[29]=e[l],n}function Ne(r){let e=(r[2].unique_name||"")+"",l;return{c(){l=R(e)},l(n){l=J(n,e)},m(n,t){j(n,l,t)},p(n,t){t[0]&4&&e!==(e=(n[2].unique_name||"")+"")&&se(l,e)},d(n){n&&p(l)}}}function Pe(r){let e,l="팔로잉이 없습니다.";return{c(){e=E("p"),e.textContent=l,this.h()},l(n){e=T(n,"P",{class:!0,"data-svelte-h":!0}),re(e)!=="svelte-1r7q21d"&&(e.textContent=l),this.h()},h(){O(e,"class","p-5 flex w-full justify-center text-gray-400")},m(n,t){j(n,e,t)},p:N,i:N,o:N,d(n){n&&p(e)}}}function Be(r){let e,l,n=ne(r[4]),t=[];for(let o=0;o<n.length;o+=1)t[o]=me(_e(r,n,o));const u=o=>C(t[o],1,1,()=>{t[o]=null});return{c(){e=E("ul");for(let o=0;o<t.length;o+=1)t[o].c()},l(o){e=T(o,"UL",{});var a=D(e);for(let s=0;s<t.length;s+=1)t[s].l(a);a.forEach(p)},m(o,a){j(o,e,a);for(let s=0;s<t.length;s+=1)t[s]&&t[s].m(e,null);l=!0},p(o,a){if(a[0]&530){n=ne(o[4]);let s;for(s=0;s<n.length;s+=1){const c=_e(o,n,s);t[s]?(t[s].p(c,a),v(t[s],1)):(t[s]=me(c),t[s].c(),v(t[s],1),t[s].m(e,null))}for(X(),s=n.length;s<t.length;s+=1)u(s);Q()}},i(o){if(!l){for(let a=0;a<n.length;a+=1)v(t[a]);l=!0}},o(o){t=t.filter(Boolean);for(let a=0;a<t.length;a+=1)C(t[a]);l=!1},d(o){o&&p(e),pe(t,o)}}}function Ue(r){let e,l,n,t;const u=[We,He],o=[];function a(s,c){return s[3]&&s[3].length>0?0:1}return e=a(r),l=o[e]=u[e](r),{c(){l.c(),n=le()},l(s){l.l(s),n=le()},m(s,c){o[e].m(s,c),j(s,n,c),t=!0},p(s,c){let b=e;e=a(s),e===b?o[e].p(s,c):(X(),C(o[b],1,1,()=>{o[b]=null}),Q(),l=o[e],l?l.p(s,c):(l=o[e]=u[e](s),l.c()),v(l,1),l.m(n.parentNode,n))},i(s){t||(v(l),t=!0)},o(s){C(l),t=!1},d(s){s&&p(n),o[e].d(s)}}}function Ve(r){let e,l;function n(){return r[27](r[32])}return e=new ie({props:{backgroundColor:"bg-gradient-to-br from-primary-400 from-0% to-emerald-400 to-80%",textColor:"text-white",border:"border-none",$$slots:{default:[Ae]},$$scope:{ctx:r}}}),e.$on("click",n),{c(){z(e.$$.fragment)},l(t){H(e.$$.fragment,t)},m(t,u){W(e,t,u),l=!0},p(t,u){r=t;const o={};u[1]&16&&(o.$$scope={dirty:u,ctx:r}),e.$set(o)},i(t){l||(v(e.$$.fragment,t),l=!0)},o(t){C(e.$$.fragment,t),l=!1},d(t){G(e,t)}}}function Oe(r){let e,l;function n(){return r[26](r[32])}return e=new ie({props:{$$slots:{default:[ze]},$$scope:{ctx:r}}}),e.$on("click",n),{c(){z(e.$$.fragment)},l(t){H(e.$$.fragment,t)},m(t,u){W(e,t,u),l=!0},p(t,u){r=t;const o={};u[1]&16&&(o.$$scope={dirty:u,ctx:r}),e.$set(o)},i(t){l||(v(e.$$.fragment,t),l=!0)},o(t){C(e.$$.fragment,t),l=!1},d(t){G(e,t)}}}function Le(r){let e;return{c(){e=E("span")},l(l){e=T(l,"SPAN",{}),D(e).forEach(p)},m(l,n){j(l,e,n)},p:N,i:N,o:N,d(l){l&&p(e)}}}function Ae(r){let e;return{c(){e=R("팔로우")},l(l){e=J(l,"팔로우")},m(l,n){j(l,e,n)},d(l){l&&p(e)}}}function ze(r){let e;return{c(){e=R("팔로잉")},l(l){e=J(l,"팔로잉")},m(l,n){j(l,e,n)},d(l){l&&p(e)}}}function me(r){let e,l,n,t,u,o=(r[32].target.unique_name||"(null)")+"",a,s,c,b,k,m,g,$,h,F,y;function L(...f){return r[13](r[32],...f)}n=new he({props:{src:oe(r[32].target.profile_image_url,500),width:"3rem",strokeColor:"white",strokeWidth:"13"}});function A(){return r[24](r[32])}function M(){return r[25](r[32])}const B=[Le,Oe,Ve],w=[];function S(f,i){return i[0]&16&&(b=null),i[0]&18&&(k=null),b==null&&(b=String(f[9])===String(f[32].target.idx)),b?0:(k==null&&(k=!!f[1].some(L)),k?1:2)}return m=S(r,[-1,-1]),g=w[m]=B[m](r),{c(){e=E("li"),l=E("div"),z(n.$$.fragment),t=U(),u=E("div"),a=R(o),s=U(),c=E("div"),g.c(),$=U(),this.h()},l(f){e=T(f,"LI",{class:!0});var i=D(e);l=T(i,"DIV",{});var _=D(l);H(n.$$.fragment,_),_.forEach(p),t=V(i),u=T(i,"DIV",{class:!0});var I=D(u);a=J(I,o),I.forEach(p),s=V(i),c=T(i,"DIV",{});var P=D(c);g.l(P),P.forEach(p),$=V(i),i.forEach(p),this.h()},h(){O(u,"class","flex-grow"),O(e,"class","flex gap-2 items-center px-5 py-2")},m(f,i){j(f,e,i),x(e,l),W(n,l,null),x(e,t),x(e,u),x(u,a),x(e,s),x(e,c),w[m].m(c,null),x(e,$),h=!0,F||(y=[K(l,"click",A),K(u,"click",M)],F=!0)},p(f,i){r=f;const _={};i[0]&16&&(_.src=oe(r[32].target.profile_image_url,500)),n.$set(_),(!h||i[0]&16)&&o!==(o=(r[32].target.unique_name||"(null)")+"")&&se(a,o);let I=m;m=S(r,i),m===I?w[m].p(r,i):(X(),C(w[I],1,1,()=>{w[I]=null}),Q(),g=w[m],g?g.p(r,i):(g=w[m]=B[m](r),g.c()),v(g,1),g.m(c,null))},i(f){h||(v(n.$$.fragment,f),v(g),h=!0)},o(f){C(n.$$.fragment,f),C(g),h=!1},d(f){f&&p(e),G(n),w[m].d(),F=!1,ue(y)}}}function He(r){let e,l="팔로워가 없습니다.";return{c(){e=E("p"),e.textContent=l,this.h()},l(n){e=T(n,"P",{class:!0,"data-svelte-h":!0}),re(e)!=="svelte-187d2ue"&&(e.textContent=l),this.h()},h(){O(e,"class","p-5 flex w-full justify-center text-gray-400")},m(n,t){j(n,e,t)},p:N,i:N,o:N,d(n){n&&p(e)}}}function We(r){let e,l,n=ne(r[3]),t=[];for(let o=0;o<n.length;o+=1)t[o]=ge(de(r,n,o));const u=o=>C(t[o],1,1,()=>{t[o]=null});return{c(){e=E("ul");for(let o=0;o<t.length;o+=1)t[o].c()},l(o){e=T(o,"UL",{});var a=D(e);for(let s=0;s<t.length;s+=1)t[s].l(a);a.forEach(p)},m(o,a){j(o,e,a);for(let s=0;s<t.length;s+=1)t[s]&&t[s].m(e,null);l=!0},p(o,a){if(a[0]&778){n=ne(o[3]);let s;for(s=0;s<n.length;s+=1){const c=de(o,n,s);t[s]?(t[s].p(c,a),v(t[s],1)):(t[s]=ge(c),t[s].c(),v(t[s],1),t[s].m(e,null))}for(X(),s=n.length;s<t.length;s+=1)u(s);Q()}},i(o){if(!l){for(let a=0;a<n.length;a+=1)v(t[a]);l=!0}},o(o){t=t.filter(Boolean);for(let a=0;a<t.length;a+=1)C(t[a]);l=!1},d(o){o&&p(e),pe(t,o)}}}function Ge(r){let e,l;function n(){return r[23](r[29])}return e=new ie({props:{backgroundColor:"bg-gradient-to-br from-primary-400 from-0% to-emerald-400 to-80%",textColor:"text-white",border:"border-none",$$slots:{default:[Je]},$$scope:{ctx:r}}}),e.$on("click",n),{c(){z(e.$$.fragment)},l(t){H(e.$$.fragment,t)},m(t,u){W(e,t,u),l=!0},p(t,u){r=t;const o={};u[0]&8|u[1]&16&&(o.$$scope={dirty:u,ctx:r}),e.$set(o)},i(t){l||(v(e.$$.fragment,t),l=!0)},o(t){C(e.$$.fragment,t),l=!1},d(t){G(e,t)}}}function Me(r){let e,l;function n(){return r[21](r[29])}return e=new ie({props:{$$slots:{default:[Ke]},$$scope:{ctx:r}}}),e.$on("click",n),{c(){z(e.$$.fragment)},l(t){H(e.$$.fragment,t)},m(t,u){W(e,t,u),l=!0},p(t,u){r=t;const o={};u[1]&16&&(o.$$scope={dirty:u,ctx:r}),e.$set(o)},i(t){l||(v(e.$$.fragment,t),l=!0)},o(t){C(e.$$.fragment,t),l=!1},d(t){G(e,t)}}}function Re(r){let e;return{c(){e=E("span")},l(l){e=T(l,"SPAN",{}),D(e).forEach(p)},m(l,n){j(l,e,n)},p:N,i:N,o:N,d(l){l&&p(e)}}}function Je(r){let e=r[8].some(n)?"맞팔로우":"팔로우",l;function n(...t){return r[22](r[29],...t)}return{c(){l=R(e)},l(t){l=J(t,e)},m(t,u){j(t,l,u)},p(t,u){r=t,u[0]&8&&e!==(e=r[8].some(n)?"맞팔로우":"팔로우")&&se(l,e)},d(t){t&&p(l)}}}function Ke(r){let e;return{c(){e=R("팔로잉")},l(l){e=J(l,"팔로잉")},m(l,n){j(l,e,n)},d(l){l&&p(e)}}}function ge(r){let e,l,n,t,u,o=(r[29].subject.unique_name||"(null)")+"",a,s,c,b,k,m,g,$,h,F,y;function L(...f){return r[12](r[29],...f)}n=new he({props:{src:oe(r[29].subject.profile_image_url,500),width:"3rem",strokeColor:"white",strokeWidth:"13"}});function A(){return r[19](r[29])}function M(){return r[20](r[29])}const B=[Re,Me,Ge],w=[];function S(f,i){return i[0]&8&&(b=null),i[0]&10&&(k=null),b==null&&(b=String(f[9])===String(f[29].subject.idx)),b?0:(k==null&&(k=!!f[1].some(L)),k?1:2)}return m=S(r,[-1,-1]),g=w[m]=B[m](r),{c(){e=E("li"),l=E("div"),z(n.$$.fragment),t=U(),u=E("div"),a=R(o),s=U(),c=E("div"),g.c(),$=U(),this.h()},l(f){e=T(f,"LI",{class:!0});var i=D(e);l=T(i,"DIV",{});var _=D(l);H(n.$$.fragment,_),_.forEach(p),t=V(i),u=T(i,"DIV",{class:!0});var I=D(u);a=J(I,o),I.forEach(p),s=V(i),c=T(i,"DIV",{});var P=D(c);g.l(P),P.forEach(p),$=V(i),i.forEach(p),this.h()},h(){O(u,"class","flex-grow"),O(e,"class","flex gap-2 items-center px-5 py-2")},m(f,i){j(f,e,i),x(e,l),W(n,l,null),x(e,t),x(e,u),x(u,a),x(e,s),x(e,c),w[m].m(c,null),x(e,$),h=!0,F||(y=[K(l,"click",A),K(u,"click",M)],F=!0)},p(f,i){r=f;const _={};i[0]&8&&(_.src=oe(r[29].subject.profile_image_url,500)),n.$set(_),(!h||i[0]&8)&&o!==(o=(r[29].subject.unique_name||"(null)")+"")&&se(a,o);let I=m;m=S(r,i),m===I?w[m].p(r,i):(X(),C(w[I],1,1,()=>{w[I]=null}),Q(),g=w[m],g?g.p(r,i):(g=w[m]=B[m](r),g.c()),v(g,1),g.m(c,null))},i(f){h||(v(n.$$.fragment,f),v(g),h=!0)},o(f){C(n.$$.fragment,f),C(g),h=!1},d(f){f&&p(e),G(n),w[m].d(),F=!1,ue(y)}}}function Qe(r){let e,l,n,t,u="팔로워",o,a,s="팔로잉",c,b,k,m,g,$,h,F,y,L,A;e=new we({props:{position:"static",leftBack:"black",$$slots:{default:[Ne]},$$scope:{ctx:r}}});function M(i){r[18](i)}let B={round:!0,placeholder:"검색하세요",prefixIcon:qe,prefixPointer:!0,onPrefixClick:r[16],clear:!0,backgroundColor:"bg-gray-50",onInput:r[17]};r[0]!==void 0&&(B.value=r[0]),k=new ye({props:B}),je.push(()=>Fe(k,"value",M));const w=[Ue,Be,Pe],S=[];function f(i,_){return i[5]==="followers"?0:i[4]&&i[4].length>0?1:2}return $=f(r),h=S[$]=w[$](r),{c(){z(e.$$.fragment),l=U(),n=E("div"),t=E("button"),t.textContent=u,o=U(),a=E("button"),a.textContent=s,c=U(),b=E("section"),z(k.$$.fragment),g=U(),h.c(),F=le(),this.h()},l(i){H(e.$$.fragment,i),l=V(i),n=T(i,"DIV",{class:!0});var _=D(n);t=T(_,"BUTTON",{class:!0,"data-svelte-h":!0}),re(t)!=="svelte-y7r85h"&&(t.textContent=u),o=V(_),a=T(_,"BUTTON",{class:!0,"data-svelte-h":!0}),re(a)!=="svelte-9iavme"&&(a.textContent=s),_.forEach(p),c=V(i),b=T(i,"SECTION",{class:!0});var I=D(b);H(k.$$.fragment,I),I.forEach(p),g=V(i),h.l(i),F=le(),this.h()},h(){O(t,"class","flex-1"),te(t,"font-black",r[5]==="followers"),O(a,"class","flex-1"),te(a,"font-black",r[5]==="followings"),O(n,"class","flex w-full justify-between p-4"),O(b,"class","box-search sticky p-4 top-[100px] z-10 bg-white")},m(i,_){W(e,i,_),j(i,l,_),j(i,n,_),x(n,t),x(n,o),x(n,a),j(i,c,_),j(i,b,_),W(k,b,null),j(i,g,_),S[$].m(i,_),j(i,F,_),y=!0,L||(A=[K(t,"click",r[14]),K(a,"click",r[15])],L=!0)},p(i,_){const I={};_[0]&4|_[1]&16&&(I.$$scope={dirty:_,ctx:i}),e.$set(I),(!y||_[0]&32)&&te(t,"font-black",i[5]==="followers"),(!y||_[0]&32)&&te(a,"font-black",i[5]==="followings");const P={};_[0]&25&&(P.onInput=i[17]),!m&&_[0]&1&&(m=!0,P.value=i[0],Ce(()=>m=!1)),k.$set(P);let Y=$;$=f(i),$===Y?S[$].p(i,_):(X(),C(S[Y],1,1,()=>{S[Y]=null}),Q(),h=S[$],h?h.p(i,_):(h=S[$]=w[$](i),h.c()),v(h,1),h.m(F.parentNode,F))},i(i){y||(v(e.$$.fragment,i),v(k.$$.fragment,i),v(h),y=!0)},o(i){C(e.$$.fragment,i),C(k.$$.fragment,i),C(h),y=!1},d(i){i&&(p(l),p(n),p(c),p(b),p(g),p(F)),G(e,i),G(k),S[$].d(i),L=!1,ue(A)}}}function Xe(r,e,l){let n;Ee(r,Se,d=>l(11,n=d));let{data:t}=e,{userFollowers:u,userFollowings:o,signerFollowers:a,signerFollowings:s,userIdx:c,signerIdx:b}=t,k={},m="",g=u,$=o,h="followers";const F=(d,q)=>q.target.idx===d.subject.idx,y=(d,q)=>q.target.idx===d.target.idx,L=()=>l(5,h="followers"),A=()=>l(5,h="followings"),M=()=>window.history.back(),B=()=>{m===""&&(l(3,g=u),l(4,$=o))};function w(d){m=d,l(0,m)}const S=d=>ee(`/users/${d.subject.idx}`),f=d=>ee(`/users/${d.subject.idx}`),i=async d=>{await ce({targetIdx:d.subject.idx,subjectIdx:b}),l(1,s=s.filter(q=>q.target.idx!==d.subject.idx))},_=(d,q)=>q.subject.idx===d.subject.idx,I=async d=>{await fe({targetIdx:d.subject.idx,subjectIdx:b}),l(1,s=[...s,{target:d.subject}])},P=d=>ee(`/users/${d.target.idx}`),Y=d=>ee(`/users/${d.target.idx}`),be=async d=>{await ce({targetIdx:d.target.idx,subjectIdx:b}),l(1,s=s.filter(q=>q.target.idx!==d.target.idx))},$e=async d=>{await fe({targetIdx:d.target.idx,subjectIdx:b}),l(1,s=[...s,{target:d.target}])};return r.$$set=d=>{"data"in d&&l(10,t=d.data)},r.$$.update=()=>{r.$$.dirty[0]&3072&&t&&ve(n.params.idx).then(d=>{l(2,k=d)}),r.$$.dirty[0]&1&&m&&(l(3,g=u.filter(d=>{const q=d.subject.unique_name;return q?q.includes(m):!1})),l(4,$=o.filter(d=>{const q=d.target.unique_name;return q?q.includes(m):!1})))},[m,s,k,g,$,h,u,o,a,b,t,n,F,y,L,A,M,B,w,S,f,i,_,I,P,Y,be,$e]}class ft extends Te{constructor(e){super(),xe(this,e,Xe,Qe,Ie,{data:10},null,[-1,-1])}}export{ft as component,ct as universal};
