import"../chunks/index.N_Uo14hS.js";import{b as Ve,A as ie,t as Pe}from"../chunks/sign.DV4XVC12.js";import{g as ae}from"../chunks/entry.CqJ0okqJ.js";import{s as ge,e as j,a as H,t as L,c as E,b as S,g as M,d as z,f as m,v as D,T as ve,Q as K,i as B,h as k,y as re,j as se,n as A,I as qe,m as Ue,u as Ae,o as Oe,p as Le,K as we,D as ue,z as ze,A as Ge,F as he,k as He,x as Ne,P as Be,C as ce}from"../chunks/scheduler.DH3jNSXp.js";import{S as be,i as pe,t as C,g as J,a as I,d as X,c as Y,b as te,m as Z,e as $,f as Me}from"../chunks/index.DhGy8j-A.js";import{e as fe}from"../chunks/each.CFpgwcA3.js";import{p as We}from"../chunks/stores.DA3QfGt8.js";import{H as Ke}from"../chunks/Header.DOQVf6zV.js";import{u as Ce,f as Ie}from"../chunks/follow.DAzAAyFc.js";/* empty css                                                   */import{C as Fe}from"../chunks/CircleImage.Cv_5FGVd.js";import{F as Qe}from"../chunks/Field.BZMlBY_y.js";import{g as _e}from"../chunks/color.C_Jm4JAr.js";import{s as de}from"../chunks/s32cloudfront.BQHVfuPT.js";function Re(r){let e,l,n,t,a,o,i,s,_;return{c(){e=j("div"),l=j("div"),n=j("img"),a=H(),o=j("div"),i=L(r[4]),this.h()},l(u){e=E(u,"DIV",{class:!0});var w=S(e);l=E(w,"DIV",{class:!0});var h=S(l);n=E(h,"IMG",{class:!0,src:!0,alt:!0}),a=M(h),o=E(h,"DIV",{class:!0});var c=S(o);i=z(c,r[4]),c.forEach(m),h.forEach(m),w.forEach(m),this.h()},h(){D(n,"class","icon-img svelte-95444r"),ve(n.src,t=r[3])||D(n,"src",t),D(n,"alt",r[0]),D(o,"class","icon-label svelte-95444r"),K(o,"hidden",!r[4]),K(o,"text-primary-500",r[1]),K(o,"text-gray-400",!r[1]),D(l,"class","icon-container svelte-95444r"),K(l,"cursor-pointer",r[2]),D(e,"class","icon svelte-95444r")},m(u,w){B(u,e,w),k(e,l),k(l,n),k(l,a),k(l,o),k(o,i),s||(_=re(l,"click",r[5]),s=!0)},p(u,[w]){w&8&&!ve(n.src,t=u[3])&&D(n,"src",t),w&1&&D(n,"alt",u[0]),w&16&&se(i,u[4]),w&16&&K(o,"hidden",!u[4]),w&2&&K(o,"text-primary-500",u[1]),w&2&&K(o,"text-gray-400",!u[1]),w&4&&K(l,"cursor-pointer",u[2])},i:A,o:A,d(u){u&&m(e),s=!1,_()}}}function Je(r,e,l){let{src:n=""}=e,{alt:t=""}=e,{active:a=!1}=e,{label:o=""}=e,{pointer:i=!1}=e;function s(_){qe.call(this,r,_)}return r.$$set=_=>{"src"in _&&l(3,n=_.src),"alt"in _&&l(0,t=_.alt),"active"in _&&l(1,a=_.active),"label"in _&&l(4,o=_.label),"pointer"in _&&l(2,i=_.pointer)},r.$$.update=()=>{r.$$.dirty&2&&l(1,a=a===!0||a==="true"),r.$$.dirty&9&&l(0,t=t||n.split("/").pop().split(".")[0]),r.$$.dirty&4&&l(2,i=i===!0||i==="true")},[t,a,i,n,o,s]}class Xe extends be{constructor(e){super(),pe(this,e,Je,Re,ge,{src:3,alt:0,active:1,label:4,pointer:2})}}function je(r){let e,l,n;return l=new Xe({props:{src:r[4]}}),{c(){e=j("div"),Y(l.$$.fragment),this.h()},l(t){e=E(t,"DIV",{class:!0});var a=S(e);te(l.$$.fragment,a),a.forEach(m),this.h()},h(){D(e,"class","w-[1.125rem] h-[1.125rem] flex justify-center items-center")},m(t,a){B(t,e,a),Z(l,e,null),n=!0},p(t,a){const o={};a&16&&(o.src=t[4]),l.$set(o)},i(t){n||(C(l.$$.fragment,t),n=!0)},o(t){I(l.$$.fragment,t),n=!1},d(t){t&&m(e),$(l)}}}function Ee(r){let e,l,n;var t=r[9];function a(o,i){return{props:{fill:o[10]}}}return t&&(e=we(t,a(r))),{c(){e&&Y(e.$$.fragment),l=ue()},l(o){e&&te(e.$$.fragment,o),l=ue()},m(o,i){e&&Z(e,o,i),B(o,l,i),n=!0},p(o,i){if(i&512&&t!==(t=o[9])){if(e){J();const s=e;I(s.$$.fragment,1,0,()=>{$(s,1)}),X()}t?(e=we(t,a(o)),Y(e.$$.fragment),C(e.$$.fragment,1),Z(e,l.parentNode,l)):e=null}else if(t){const s={};i&1024&&(s.fill=o[10]),e.$set(s)}},i(o){n||(e&&C(e.$$.fragment,o),n=!0)},o(o){e&&I(e.$$.fragment,o),n=!1},d(o){o&&m(l),e&&$(e,o)}}}function Ye(r){let e,l,n,t,a,o,i,s,_=r[4]&&je(r),u=r[9]&&Ee(r);const w=r[12].default,h=Ue(w,r,r[11],null);return{c(){e=j("button"),_&&_.c(),l=H(),u&&u.c(),n=H(),t=j("span"),h&&h.c(),this.h()},l(c){e=E(c,"BUTTON",{class:!0});var d=S(e);_&&_.l(d),l=M(d),u&&u.l(d),n=M(d),t=E(d,"SPAN",{class:!0});var y=S(t);h&&h.l(y),y.forEach(m),d.forEach(m),this.h()},h(){D(t,"class","tracking-wider font-medium"),D(e,"class",a=`${r[5]} ${r[0]} ${r[1]} ${r[2]} ${r[3]} ${r[6]} ${r[8]} ${r[7]}`)},m(c,d){B(c,e,d),_&&_.m(e,null),k(e,l),u&&u.m(e,null),k(e,n),k(e,t),h&&h.m(t,null),o=!0,i||(s=re(e,"click",r[13]),i=!0)},p(c,[d]){c[4]?_?(_.p(c,d),d&16&&C(_,1)):(_=je(c),_.c(),C(_,1),_.m(e,l)):_&&(J(),I(_,1,1,()=>{_=null}),X()),c[9]?u?(u.p(c,d),d&512&&C(u,1)):(u=Ee(c),u.c(),C(u,1),u.m(e,n)):u&&(J(),I(u,1,1,()=>{u=null}),X()),h&&h.p&&(!o||d&2048)&&Ae(h,w,c,c[11],o?Le(w,c[11],d,null):Oe(c[11]),null),(!o||d&495&&a!==(a=`${c[5]} ${c[0]} ${c[1]} ${c[2]} ${c[3]} ${c[6]} ${c[8]} ${c[7]}`))&&D(e,"class",a)},i(c){o||(C(_),C(u),C(h,c),o=!0)},o(c){I(_),I(u),I(h,c),o=!1},d(c){c&&m(e),_&&_.d(),u&&u.d(),h&&h.d(c),i=!1,s()}}}function Ze(r,e,l){let{$$slots:n={},$$scope:t}=e,{padding:a="py-[0.38rem] px-[0.88rem]"}=e,{typo:o="typo-body3"}=e,{textColor:i="text-gray-700"}=e,{backgroundColor:s="bg-transparent"}=e,{iconSrc:_=""}=e,{border:u="border border-gray-200"}=e,{rounded:w="rounded-[4.75rem]"}=e,{flex:h="flex justify-center items-center gap-1"}=e,{className:c=""}=e,{iconComponent:d=null}=e,{iconComponentFill:y=""}=e;function F(b){qe.call(this,r,b)}return r.$$set=b=>{"padding"in b&&l(0,a=b.padding),"typo"in b&&l(1,o=b.typo),"textColor"in b&&l(2,i=b.textColor),"backgroundColor"in b&&l(3,s=b.backgroundColor),"iconSrc"in b&&l(4,_=b.iconSrc),"border"in b&&l(5,u=b.border),"rounded"in b&&l(6,w=b.rounded),"flex"in b&&l(7,h=b.flex),"className"in b&&l(8,c=b.className),"iconComponent"in b&&l(9,d=b.iconComponent),"iconComponentFill"in b&&l(10,y=b.iconComponentFill),"$$scope"in b&&l(11,t=b.$$scope)},[a,o,i,s,_,u,w,h,c,d,y,t,n,F]}class me extends be{constructor(e){super(),pe(this,e,Ze,Ye,ge,{padding:0,typo:1,textColor:2,backgroundColor:3,iconSrc:4,border:5,rounded:6,flex:7,className:8,iconComponent:9,iconComponentFill:10})}}const $e=async({params:r,fetch:e,depends:l})=>{l("app:user:followers");const n=String(r.idx),t=Ve(),a=String(t),o=await e(`${ie}/auth/followers?targetTable=users&targetIdx=${n}&subjectTable=users`).then(u=>u.json()).then(u=>u.data),i=await e(`${ie}/auth/followers?targetTable=users&subjectTable=users&subjectIdx=${n}`).then(u=>u.json()).then(u=>u.data),s=t===null?[]:await e(`${ie}/auth/followers?targetTable=users&targetIdx=${t}&subjectTable=users`).then(u=>u.json()).then(u=>u.data),_=t===null?[]:await e(`${ie}/auth/followers?targetTable=users&subjectTable=users&subjectIdx=${t}`).then(u=>u.json()).then(u=>u.data);return{userFollowers:o,userFollowings:i,userIdx:n,signerFollowers:s,signerFollowings:_,signerIdx:a}},Vt=Object.freeze(Object.defineProperty({__proto__:null,load:$e},Symbol.toStringTag,{value:"Module"}));function ye(r,e,l){const n=r.slice();return n[33]=e[l],n}function De(r,e,l){const n=r.slice();return n[30]=e[l],n}function xe(r){let e,l="팔로잉이 없습니다.";return{c(){e=j("p"),e.textContent=l,this.h()},l(n){e=E(n,"P",{class:!0,"data-svelte-h":!0}),Ne(e)!=="svelte-fn1ckl"&&(e.textContent=l),this.h()},h(){D(e,"class","p-5 flex w-full justify-center text-gray-400")},m(n,t){B(n,e,t)},p:A,i:A,o:A,d(n){n&&m(e)}}}function et(r){let e,l,n=fe(r[4]),t=[];for(let o=0;o<n.length;o+=1)t[o]=Se(ye(r,n,o));const a=o=>I(t[o],1,1,()=>{t[o]=null});return{c(){e=j("ul");for(let o=0;o<t.length;o+=1)t[o].c()},l(o){e=E(o,"UL",{});var i=S(e);for(let s=0;s<t.length;s+=1)t[s].l(i);i.forEach(m)},m(o,i){B(o,e,i);for(let s=0;s<t.length;s+=1)t[s]&&t[s].m(e,null);l=!0},p(o,i){if(i[0]&1074){n=fe(o[4]);let s;for(s=0;s<n.length;s+=1){const _=ye(o,n,s);t[s]?(t[s].p(_,i),C(t[s],1)):(t[s]=Se(_),t[s].c(),C(t[s],1),t[s].m(e,null))}for(J(),s=n.length;s<t.length;s+=1)a(s);X()}},i(o){if(!l){for(let i=0;i<n.length;i+=1)C(t[i]);l=!0}},o(o){t=t.filter(Boolean);for(let i=0;i<t.length;i+=1)I(t[i]);l=!1},d(o){o&&m(e),Be(t,o)}}}function tt(r){let e,l,n,t;const a=[ct,ut],o=[];function i(s,_){return s[3]&&s[3].length>0?0:1}return e=i(r),l=o[e]=a[e](r),{c(){l.c(),n=ue()},l(s){l.l(s),n=ue()},m(s,_){o[e].m(s,_),B(s,n,_),t=!0},p(s,_){let u=e;e=i(s),e===u?o[e].p(s,_):(J(),I(o[u],1,1,()=>{o[u]=null}),X(),l=o[e],l?l.p(s,_):(l=o[e]=a[e](s),l.c()),C(l,1),l.m(n.parentNode,n))},i(s){t||(C(l),t=!0)},o(s){I(l),t=!1},d(s){s&&m(n),o[e].d(s)}}}function lt(r){var a;let e,l,n=(((a=r[33].target.unique_name)==null?void 0:a.at(0))??"u")+"",t;return{c(){e=j("div"),l=j("span"),t=L(n),this.h()},l(o){e=E(o,"DIV",{class:!0,style:!0});var i=S(e);l=E(i,"SPAN",{class:!0});var s=S(l);t=z(s,n),s.forEach(m),i.forEach(m),this.h()},h(){D(l,"class","text-base font-semibold text-black"),D(e,"class","w-[2.375rem] h-[2.375rem] flex items-center justify-center rounded-full"),ce(e,"background-color",_e(r[33].target.unique_name))},m(o,i){B(o,e,i),k(e,l),k(l,t)},p(o,i){var s;i[0]&16&&n!==(n=(((s=o[33].target.unique_name)==null?void 0:s.at(0))??"u")+"")&&se(t,n),i[0]&16&&ce(e,"background-color",_e(o[33].target.unique_name))},i:A,o:A,d(o){o&&m(e)}}}function nt(r){let e,l;return e=new Fe({props:{src:de(r[33].target.profile_image_url,500),width:"2.375rem",strokeColor:"white",strokeWidth:"0"}}),{c(){Y(e.$$.fragment)},l(n){te(e.$$.fragment,n)},m(n,t){Z(e,n,t),l=!0},p(n,t){const a={};t[0]&16&&(a.src=de(n[33].target.profile_image_url,500)),e.$set(a)},i(n){l||(C(e.$$.fragment,n),l=!0)},o(n){I(e.$$.fragment,n),l=!1},d(n){$(e,n)}}}function rt(r){let e,l;function n(){return r[28](r[33])}return e=new me({props:{backgroundColor:"bg-[#2C2C2E]",textColor:"text-[#B3B8BD]",typo:"text-sm font-normal",border:"border-none",$$slots:{default:[it]},$$scope:{ctx:r}}}),e.$on("click",n),{c(){Y(e.$$.fragment)},l(t){te(e.$$.fragment,t)},m(t,a){Z(e,t,a),l=!0},p(t,a){r=t;const o={};a[1]&32&&(o.$$scope={dirty:a,ctx:r}),e.$set(o)},i(t){l||(C(e.$$.fragment,t),l=!0)},o(t){I(e.$$.fragment,t),l=!1},d(t){$(e,t)}}}function ot(r){let e,l;function n(){return r[27](r[33])}return e=new me({props:{textColor:"text-[#B3B8BD]",typo:"text-sm font-normal",border:"border border-[#2C2C2E]",$$slots:{default:[at]},$$scope:{ctx:r}}}),e.$on("click",n),{c(){Y(e.$$.fragment)},l(t){te(e.$$.fragment,t)},m(t,a){Z(e,t,a),l=!0},p(t,a){r=t;const o={};a[1]&32&&(o.$$scope={dirty:a,ctx:r}),e.$set(o)},i(t){l||(C(e.$$.fragment,t),l=!0)},o(t){I(e.$$.fragment,t),l=!1},d(t){$(e,t)}}}function st(r){let e;return{c(){e=j("span")},l(l){e=E(l,"SPAN",{}),S(e).forEach(m)},m(l,n){B(l,e,n)},p:A,i:A,o:A,d(l){l&&m(e)}}}function it(r){let e;return{c(){e=L("팔로우")},l(l){e=z(l,"팔로우")},m(l,n){B(l,e,n)},d(l){l&&m(e)}}}function at(r){let e;return{c(){e=L("팔로잉")},l(l){e=z(l,"팔로잉")},m(l,n){B(l,e,n)},d(l){l&&m(e)}}}function Se(r){let e,l,n,t,a,o,i=(r[33].target.unique_name||"(null)")+"",s,_,u,w,h,c,d,y,F,b,Q;function W(...p){return r[14](r[33],...p)}const O=[nt,lt],q=[];function R(p,g){return p[33].target.profile_image_url?0:1}n=R(r),t=q[n]=O[n](r);function V(){return r[25](r[33])}function P(){return r[26](r[33])}const G=[st,ot,rt],N=[];function x(p,g){return g[0]&16&&(w=null),g[0]&18&&(h=null),w==null&&(w=String(p[10])===String(p[33].target.idx)),w?0:(h==null&&(h=!!p[1].some(W)),h?1:2)}return c=x(r,[-1,-1]),d=N[c]=G[c](r),{c(){e=j("li"),l=j("div"),t.c(),a=H(),o=j("div"),s=L(i),_=H(),u=j("div"),d.c(),y=H(),this.h()},l(p){e=E(p,"LI",{class:!0});var g=S(e);l=E(g,"DIV",{});var U=S(l);t.l(U),U.forEach(m),a=M(g),o=E(g,"DIV",{class:!0});var T=S(o);s=z(T,i),T.forEach(m),_=M(g),u=E(g,"DIV",{});var ee=S(u);d.l(ee),ee.forEach(m),y=M(g),g.forEach(m),this.h()},h(){D(o,"class","flex-grow text-sm font-medium leading-[1.0625rem]"),D(e,"class","flex gap-2 items-center py-2.5")},m(p,g){B(p,e,g),k(e,l),q[n].m(l,null),k(e,a),k(e,o),k(o,s),k(e,_),k(e,u),N[c].m(u,null),k(e,y),F=!0,b||(Q=[re(l,"click",V),re(o,"click",P)],b=!0)},p(p,g){r=p;let U=n;n=R(r),n===U?q[n].p(r,g):(J(),I(q[U],1,1,()=>{q[U]=null}),X(),t=q[n],t?t.p(r,g):(t=q[n]=O[n](r),t.c()),C(t,1),t.m(l,null)),(!F||g[0]&16)&&i!==(i=(r[33].target.unique_name||"(null)")+"")&&se(s,i);let T=c;c=x(r,g),c===T?N[c].p(r,g):(J(),I(N[T],1,1,()=>{N[T]=null}),X(),d=N[c],d?d.p(r,g):(d=N[c]=G[c](r),d.c()),C(d,1),d.m(u,null))},i(p){F||(C(t),C(d),F=!0)},o(p){I(t),I(d),F=!1},d(p){p&&m(e),q[n].d(),N[c].d(),b=!1,he(Q)}}}function ut(r){let e,l="팔로워가 없습니다.";return{c(){e=j("p"),e.textContent=l,this.h()},l(n){e=E(n,"P",{class:!0,"data-svelte-h":!0}),Ne(e)!=="svelte-1upuy06"&&(e.textContent=l),this.h()},h(){D(e,"class","p-5 flex w-full justify-center text-gray-400")},m(n,t){B(n,e,t)},p:A,i:A,o:A,d(n){n&&m(e)}}}function ct(r){let e,l,n=fe(r[3]),t=[];for(let o=0;o<n.length;o+=1)t[o]=Te(De(r,n,o));const a=o=>I(t[o],1,1,()=>{t[o]=null});return{c(){e=j("ul");for(let o=0;o<t.length;o+=1)t[o].c()},l(o){e=E(o,"UL",{});var i=S(e);for(let s=0;s<t.length;s+=1)t[s].l(i);i.forEach(m)},m(o,i){B(o,e,i);for(let s=0;s<t.length;s+=1)t[s]&&t[s].m(e,null);l=!0},p(o,i){if(i[0]&1578){n=fe(o[3]);let s;for(s=0;s<n.length;s+=1){const _=De(o,n,s);t[s]?(t[s].p(_,i),C(t[s],1)):(t[s]=Te(_),t[s].c(),C(t[s],1),t[s].m(e,null))}for(J(),s=n.length;s<t.length;s+=1)a(s);X()}},i(o){if(!l){for(let i=0;i<n.length;i+=1)C(t[i]);l=!0}},o(o){t=t.filter(Boolean);for(let i=0;i<t.length;i+=1)I(t[i]);l=!1},d(o){o&&m(e),Be(t,o)}}}function ft(r){var a;let e,l,n=(((a=r[30].subject.unique_name)==null?void 0:a.at(0))??"u")+"",t;return{c(){e=j("div"),l=j("span"),t=L(n),this.h()},l(o){e=E(o,"DIV",{class:!0,style:!0});var i=S(e);l=E(i,"SPAN",{class:!0});var s=S(l);t=z(s,n),s.forEach(m),i.forEach(m),this.h()},h(){D(l,"class","text-base font-semibold text-black"),D(e,"class","w-[2.375rem] h-[2.375rem] flex items-center justify-center rounded-full"),ce(e,"background-color",_e(r[30].subject.unique_name))},m(o,i){B(o,e,i),k(e,l),k(l,t)},p(o,i){var s;i[0]&8&&n!==(n=(((s=o[30].subject.unique_name)==null?void 0:s.at(0))??"u")+"")&&se(t,n),i[0]&8&&ce(e,"background-color",_e(o[30].subject.unique_name))},i:A,o:A,d(o){o&&m(e)}}}function _t(r){let e,l;return e=new Fe({props:{src:de(r[30].subject.profile_image_url,500),width:"2.375rem",strokeColor:"white",strokeWidth:"0"}}),{c(){Y(e.$$.fragment)},l(n){te(e.$$.fragment,n)},m(n,t){Z(e,n,t),l=!0},p(n,t){const a={};t[0]&8&&(a.src=de(n[30].subject.profile_image_url,500)),e.$set(a)},i(n){l||(C(e.$$.fragment,n),l=!0)},o(n){I(e.$$.fragment,n),l=!1},d(n){$(e,n)}}}function dt(r){let e,l;function n(){return r[24](r[30])}return e=new me({props:{backgroundColor:"bg-[#2C2C2E]",textColor:"text-[#B3B8BD]",typo:"text-sm font-normal",border:"border-none",$$slots:{default:[ht]},$$scope:{ctx:r}}}),e.$on("click",n),{c(){Y(e.$$.fragment)},l(t){te(e.$$.fragment,t)},m(t,a){Z(e,t,a),l=!0},p(t,a){r=t;const o={};a[0]&8|a[1]&32&&(o.$$scope={dirty:a,ctx:r}),e.$set(o)},i(t){l||(C(e.$$.fragment,t),l=!0)},o(t){I(e.$$.fragment,t),l=!1},d(t){$(e,t)}}}function mt(r){let e,l;function n(){return r[22](r[30])}return e=new me({props:{textColor:"text-[#B3B8BD]",typo:"text-sm font-normal",border:"border border-[#2C2C2E]",$$slots:{default:[bt]},$$scope:{ctx:r}}}),e.$on("click",n),{c(){Y(e.$$.fragment)},l(t){te(e.$$.fragment,t)},m(t,a){Z(e,t,a),l=!0},p(t,a){r=t;const o={};a[1]&32&&(o.$$scope={dirty:a,ctx:r}),e.$set(o)},i(t){l||(C(e.$$.fragment,t),l=!0)},o(t){I(e.$$.fragment,t),l=!1},d(t){$(e,t)}}}function gt(r){let e;return{c(){e=j("span")},l(l){e=E(l,"SPAN",{}),S(e).forEach(m)},m(l,n){B(l,e,n)},p:A,i:A,o:A,d(l){l&&m(e)}}}function ht(r){let e=r[9].some(n)?"맞팔로우":"팔로우",l;function n(...t){return r[23](r[30],...t)}return{c(){l=L(e)},l(t){l=z(t,e)},m(t,a){B(t,l,a)},p(t,a){r=t,a[0]&8&&e!==(e=r[9].some(n)?"맞팔로우":"팔로우")&&se(l,e)},d(t){t&&m(l)}}}function bt(r){let e;return{c(){e=L("팔로잉")},l(l){e=z(l,"팔로잉")},m(l,n){B(l,e,n)},d(l){l&&m(e)}}}function Te(r){let e,l,n,t,a,o,i=(r[30].subject.unique_name||"(null)")+"",s,_,u,w,h,c,d,y,F,b,Q;function W(...p){return r[13](r[30],...p)}const O=[_t,ft],q=[];function R(p,g){return p[30].subject.profile_image_url?0:1}n=R(r),t=q[n]=O[n](r);function V(){return r[20](r[30])}function P(){return r[21](r[30])}const G=[gt,mt,dt],N=[];function x(p,g){return g[0]&8&&(w=null),g[0]&10&&(h=null),w==null&&(w=String(p[10])===String(p[30].subject.idx)),w?0:(h==null&&(h=!!p[1].some(W)),h?1:2)}return c=x(r,[-1,-1]),d=N[c]=G[c](r),{c(){e=j("li"),l=j("div"),t.c(),a=H(),o=j("div"),s=L(i),_=H(),u=j("div"),d.c(),y=H(),this.h()},l(p){e=E(p,"LI",{class:!0});var g=S(e);l=E(g,"DIV",{});var U=S(l);t.l(U),U.forEach(m),a=M(g),o=E(g,"DIV",{class:!0});var T=S(o);s=z(T,i),T.forEach(m),_=M(g),u=E(g,"DIV",{});var ee=S(u);d.l(ee),ee.forEach(m),y=M(g),g.forEach(m),this.h()},h(){D(o,"class","flex-grow text-sm font-medium leading-[1.0625rem]"),D(e,"class","flex gap-2 items-center py-2.5")},m(p,g){B(p,e,g),k(e,l),q[n].m(l,null),k(e,a),k(e,o),k(o,s),k(e,_),k(e,u),N[c].m(u,null),k(e,y),F=!0,b||(Q=[re(l,"click",V),re(o,"click",P)],b=!0)},p(p,g){r=p;let U=n;n=R(r),n===U?q[n].p(r,g):(J(),I(q[U],1,1,()=>{q[U]=null}),X(),t=q[n],t?t.p(r,g):(t=q[n]=O[n](r),t.c()),C(t,1),t.m(l,null)),(!F||g[0]&8)&&i!==(i=(r[30].subject.unique_name||"(null)")+"")&&se(s,i);let T=c;c=x(r,g),c===T?N[c].p(r,g):(J(),I(N[T],1,1,()=>{N[T]=null}),X(),d=N[c],d?d.p(r,g):(d=N[c]=G[c](r),d.c()),C(d,1),d.m(u,null))},i(p){F||(C(t),C(d),F=!0)},o(p){I(t),I(d),F=!1},d(p){p&&m(e),q[n].d(),N[c].d(),b=!1,he(Q)}}}function pt(r){let e,l,n,t,a,o,i,s,_=r[7].length+"",u,w,h,c,d,y=r[8].length+"",F,b,Q,W,O,q,R,V,P,G,N,x;n=new Ke({props:{position:"static",leftBack:"white",centerTitle:r[2].unique_name}});function p(f){r[19](f)}let g={round:!0,placeholder:"계정 검색",onPrefixClick:r[17],clear:!0,fontSize:"text-sm",fontColor:"text-white",backgroundColor:"bg-[rgba(56,56,56,0.30)]",padding:"px-3.5 py-2.5",onInput:r[18]};r[0]!==void 0&&(g.value=r[0]),O=new Qe({props:g}),ze.push(()=>Me(O,"value",p));const U=[tt,et,xe],T=[];function ee(f,v){return f[6]==="followers"?0:f[4]&&f[4].length>0?1:2}return V=ee(r),P=T[V]=U[V](r),{c(){e=j("div"),l=H(),Y(n.$$.fragment),t=H(),a=j("div"),o=j("section"),i=j("button"),s=L("팔로워("),u=L(_),w=L(")"),h=H(),c=j("button"),d=L("팔로잉("),F=L(y),b=L(")"),Q=H(),W=j("section"),Y(O.$$.fragment),R=H(),P.c(),this.h()},l(f){e=E(f,"DIV",{class:!0}),S(e).forEach(m),l=M(f),te(n.$$.fragment,f),t=M(f),a=E(f,"DIV",{class:!0});var v=S(a);o=E(v,"SECTION",{class:!0});var oe=S(o);i=E(oe,"BUTTON",{class:!0});var le=S(i);s=z(le,"팔로워("),u=z(le,_),w=z(le,")"),le.forEach(m),h=M(oe),c=E(oe,"BUTTON",{class:!0});var ne=S(c);d=z(ne,"팔로잉("),F=z(ne,y),b=z(ne,")"),ne.forEach(m),oe.forEach(m),Q=M(v),W=E(v,"SECTION",{class:!0});var ke=S(W);te(O.$$.fragment,ke),ke.forEach(m),R=M(v),P.l(v),v.forEach(m),this.h()},h(){D(e,"class","fixed w-full h-full bg-black -z-10"),D(i,"class","flex-1 p-2.5"),K(i,"text-white",r[6]==="followers"),D(c,"class","flex-1 p-2.5"),K(c,"text-white",r[6]==="followings"),D(o,"class","flex w-full justify-center text-sm leading-[1.0625rem] font-medium text-[#757D86]"),D(W,"class","py-1.5"),D(a,"class","text-white px-5")},m(f,v){B(f,e,v),B(f,l,v),Z(n,f,v),B(f,t,v),B(f,a,v),k(a,o),k(o,i),k(i,s),k(i,u),k(i,w),k(o,h),k(o,c),k(c,d),k(c,F),k(c,b),k(a,Q),k(a,W),Z(O,W,null),k(a,R),T[V].m(a,null),G=!0,N||(x=[re(i,"click",r[15]),re(c,"click",r[16])],N=!0)},p(f,v){const oe={};v[0]&4&&(oe.centerTitle=f[2].unique_name),n.$set(oe),(!G||v[0]&64)&&K(i,"text-white",f[6]==="followers"),(!G||v[0]&64)&&K(c,"text-white",f[6]==="followings");const le={};v[0]&25&&(le.onInput=f[18]),!q&&v[0]&1&&(q=!0,le.value=f[0],Ge(()=>q=!1)),O.$set(le);let ne=V;V=ee(f),V===ne?T[V].p(f,v):(J(),I(T[ne],1,1,()=>{T[ne]=null}),X(),P=T[V],P?P.p(f,v):(P=T[V]=U[V](f),P.c()),C(P,1),P.m(a,null))},i(f){G||(C(n.$$.fragment,f),C(O.$$.fragment,f),C(P),G=!0)},o(f){I(n.$$.fragment,f),I(O.$$.fragment,f),I(P),G=!1},d(f){f&&(m(e),m(l),m(t),m(a)),$(n,f),$(O),T[V].d(),N=!1,he(x)}}}function kt(r,e,l){let n;He(r,We,f=>l(12,n=f));let{data:t}=e,{userFollowers:a,userFollowings:o,signerFollowers:i,signerFollowings:s,userIdx:_,signerIdx:u}=t,w={},h="",c=a,d=o,y=!1,F=n.url.searchParams.get("tab")||"followers";const b=(f,v)=>v.target.idx===f.subject.idx,Q=(f,v)=>v.target.idx===f.target.idx,W=()=>l(6,F="followers"),O=()=>l(6,F="followings"),q=()=>window.history.back(),R=()=>{h===""&&(l(3,c=a),l(4,d=o))};function V(f){h=f,l(0,h)}const P=f=>ae(`/users/${f.subject.idx}`),G=f=>ae(`/users/${f.subject.idx}`),N=async f=>{y||(l(5,y=!0),await Ce({targetIdx:f.subject.idx,subjectIdx:u}),l(1,s=s.filter(v=>v.target.idx!==f.subject.idx)),l(5,y=!1))},x=(f,v)=>v.subject.idx===f.subject.idx,p=async f=>{y||(l(5,y=!0),await Ie({targetIdx:f.subject.idx,subjectIdx:u}),l(1,s=[...s,{target:f.subject}]),l(5,y=!1))},g=f=>ae(`/users/${f.target.idx}`),U=f=>ae(`/users/${f.target.idx}`),T=async f=>{y||(l(5,y=!0),await Ce({targetIdx:f.target.idx,subjectIdx:u}),l(1,s=s.filter(v=>v.target.idx!==f.target.idx)),l(5,y=!1))},ee=async f=>{y||(l(5,y=!0),await Ie({targetIdx:f.target.idx,subjectIdx:u}),l(1,s=[...s,{target:f.target}]),l(5,y=!1))};return r.$$set=f=>{"data"in f&&l(11,t=f.data)},r.$$.update=()=>{r.$$.dirty[0]&6144&&t&&Pe(n.params.idx).then(f=>{l(2,w=f)}),r.$$.dirty[0]&1&&h&&(l(3,c=a.filter(f=>{const v=f.subject.unique_name;return v?v.includes(h):!1})),l(4,d=o.filter(f=>{const v=f.target.unique_name;return v?v.includes(h):!1})))},[h,s,w,c,d,y,F,a,o,i,u,t,n,b,Q,W,O,q,R,V,P,G,N,x,p,g,U,T,ee]}class Pt extends be{constructor(e){super(),pe(this,e,kt,pt,ge,{data:11},null,[-1,-1])}}export{Pt as component,Vt as universal};
