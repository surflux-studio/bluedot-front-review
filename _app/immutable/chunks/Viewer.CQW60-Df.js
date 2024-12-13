import{s as Je,e as Y,c as A,b as H,f as y,q as m,i as Q,r as q,z as Qe,I as ge,k as $e,o as et,N as tt,l as st,w as ve,E as nt,a as Z,t as Se,g as F,d as Te,v as re,h as M,O as we,j as We,D as Re,K as be,P as Ie,y as lt}from"./scheduler.BnheM4g2.js";import{S as rt,i as ot,t as O,g as pe,f as _e,b as J,c as je,a as Oe,m as ze,d as Ce}from"./index.CP53dWnj.js";import{e as oe}from"./each.B4pMeuX4.js";import{A as at,c as me}from"./store.MRPWFVRT.js";import{g as it}from"./entry.BT-YnksK.js";import{u as ct,g as ft}from"./searchParams.Dr3v3mbV.js";import{W as ut}from"./WaterdropImage.B2tgz0zb.js";import{C as dt}from"./CircleImage.B02Dd2sW.js";import{e as ht,r as Ee}from"./Header.CZKMtM4x.js";import{p as mt}from"./stores.CwFfa7fL.js";import"./index.DLxOzGXy.js";import{s as de}from"./s32cloudfront.CIGdx2ef.js";/* empty css                                             */function gt(t){const s=["touchstart","touchmove","touchend","mousedown","mousemove","mouseup","wheel"].map(o=>{const a=e=>e.stopPropagation();return t.addEventListener(o,a),{event:o,handler:a}});return{destroy(){s.forEach(({event:o,handler:a})=>{t.removeEventListener(o,a)})}}}function ye(t,n,s){const o=t.slice();return o[46]=n[s],o[47]=n,o[48]=s,o}function ke(t,n,s){const o=t.slice();return o[49]=n[s],o[51]=s,o}function xe(t,n,s){const o=t.slice();return o[52]=n[s],o}function Me(t){var R,j;let n,s,o,a,e,i,u,l,d,f,h,b,L,V,z=(t[46].place_name||"")+"",G,te,k,ae,se,ne,P,C,K,S=oe(t[46].media),p=[];for(let v=0;v<S.length;v+=1)p[v]=Le(xe(t,S,v));let I=t[46].media.length>1&&De(t),E=(t[7]==="post"||t[7]==="patch"||((j=(R=t[46])==null?void 0:R.text)==null?void 0:j.length)>0)&&Ae(t),_=t[46].user_idx&&Pe(t);b=new ut({props:{src:"/graydot.png",width:"2rem",strokeColor:"white",strokeWidth:"13"}});function le(){return t[21](t[46])}return{c(){n=Y("div"),s=Y("div"),o=Y("div");for(let v=0;v<p.length;v+=1)p[v].c();i=Z(),u=Y("div"),I&&I.c(),l=Z(),E&&E.c(),d=Z(),_&&_.c(),f=Z(),h=Y("div"),je(b.$$.fragment),L=Z(),V=Y("div"),G=Se(z),ae=Z(),this.h()},l(v){n=A(v,"DIV",{class:!0,style:!0});var w=H(n);s=A(w,"DIV",{class:!0});var D=H(s);o=A(D,"DIV",{class:!0,style:!0});var $=H(o);for(let ie=0;ie<p.length;ie+=1)p[ie].l($);$.forEach(y),D.forEach(y),i=F(w),u=A(w,"DIV",{class:!0,style:!0});var g=H(u);I&&I.l(g),l=F(g),E&&E.l(g),d=F(g),_&&_.l(g),f=F(g),h=A(g,"DIV",{class:!0});var B=H(h);Oe(b.$$.fragment,B),L=F(B),V=A(B,"DIV",{});var ue=H(V);G=Te(ue,z),ue.forEach(y),B.forEach(y),g.forEach(y),ae=F(w),w.forEach(y),this.h()},h(){m(o,"class",a=re(`carousel-track transition-transform ${t[3]?"duration-0":""}`)+" svelte-1xgvwrg"),m(o,"style",e=`transform: translateX(${-t[46].mediaIdx*t[6].width+t[5]}px);`),m(s,"class","carousel-container svelte-1xgvwrg"),m(h,"class","text-shadow text-center flex gap-2 justify-center items-center svelte-1xgvwrg"),m(u,"class",te=re(`fixed bottom-0 w-full px-4 text-white text-md flex flex-col items-start gap-2 z-40 
            ${t[2]?"":"pb-24"} 
           transition-transform`)+" svelte-1xgvwrg"),m(u,"style",k=`transform: translateY(${t[2]}px);`),m(n,"class",se=re(`w-full h-full gradient-overlay absolute content-center transition-transform ${t[3]?"duration-0":""}`)+" svelte-1xgvwrg"),m(n,"style",ne=`top: 0; transform: translateY(${(t[48]-t[1])*t[6].height+t[4]}px);`)},m(v,w){Q(v,n,w),M(n,s),M(s,o);for(let D=0;D<p.length;D+=1)p[D]&&p[D].m(o,null);M(n,i),M(n,u),I&&I.m(u,null),M(u,l),E&&E.m(u,null),M(u,d),_&&_.m(u,null),M(u,f),M(u,h),ze(b,h,null),M(h,L),M(h,V),M(V,G),M(n,ae),P=!0,C||(K=[q(o,"transitionend",function(){we(t[46].mediaIdx===t[0][t[1]].mediaIdx?t[9]:void 0)&&(t[46].mediaIdx===t[0][t[1]].mediaIdx?t[9]:void 0).apply(this,arguments)}),q(h,"click",le),q(n,"transitionend",function(){we(t[48]===t[1]?t[9]:void 0)&&(t[48]===t[1]?t[9]:void 0).apply(this,arguments)})],C=!0)},p(v,w){var D,$;if(t=v,w[0]&1){S=oe(t[46].media);let g;for(g=0;g<S.length;g+=1){const B=xe(t,S,g);p[g]?p[g].p(B,w):(p[g]=Le(B),p[g].c(),p[g].m(o,null))}for(;g<p.length;g+=1)p[g].d(1);p.length=S.length}(!P||w[0]&8&&a!==(a=re(`carousel-track transition-transform ${t[3]?"duration-0":""}`)+" svelte-1xgvwrg"))&&m(o,"class",a),(!P||w[0]&97&&e!==(e=`transform: translateX(${-t[46].mediaIdx*t[6].width+t[5]}px);`))&&m(o,"style",e),t[46].media.length>1?I?I.p(t,w):(I=De(t),I.c(),I.m(u,l)):I&&(I.d(1),I=null),t[7]==="post"||t[7]==="patch"||(($=(D=t[46])==null?void 0:D.text)==null?void 0:$.length)>0?E?E.p(t,w):(E=Ae(t),E.c(),E.m(u,d)):E&&(E.d(1),E=null),t[46].user_idx?_?(_.p(t,w),w[0]&1&&O(_,1)):(_=Pe(t),_.c(),O(_,1),_.m(u,f)):_&&(pe(),J(_,1,1,()=>{_=null}),_e()),(!P||w[0]&1)&&z!==(z=(t[46].place_name||"")+"")&&We(G,z),(!P||w[0]&4&&te!==(te=re(`fixed bottom-0 w-full px-4 text-white text-md flex flex-col items-start gap-2 z-40 
            ${t[2]?"":"pb-24"} 
           transition-transform`)+" svelte-1xgvwrg"))&&m(u,"class",te),(!P||w[0]&4&&k!==(k=`transform: translateY(${t[2]}px);`))&&m(u,"style",k),(!P||w[0]&8&&se!==(se=re(`w-full h-full gradient-overlay absolute content-center transition-transform ${t[3]?"duration-0":""}`)+" svelte-1xgvwrg"))&&m(n,"class",se),(!P||w[0]&82&&ne!==(ne=`top: 0; transform: translateY(${(t[48]-t[1])*t[6].height+t[4]}px);`))&&m(n,"style",ne)},i(v){P||(O(_),O(b.$$.fragment,v),P=!0)},o(v){J(_),J(b.$$.fragment,v),P=!1},d(v){v&&y(n),ge(p,v),I&&I.d(),E&&E.d(),_&&_.d(),Ce(b),C=!1,Re(K)}}}function Le(t){let n,s,o,a,e;return{c(){n=Y("div"),s=Y("img"),e=Z(),this.h()},l(i){n=A(i,"DIV",{class:!0});var u=H(n);s=A(u,"IMG",{src:!0,alt:!0,class:!0,draggable:!0}),e=F(u),u.forEach(y),this.h()},h(){be(s.src,o=de(t[52]))||m(s,"src",o),m(s,"alt",a=t[46].place_name),m(s,"class","w-full h-full object-contain svelte-1xgvwrg"),m(s,"draggable","false"),m(n,"class","carousel-slide svelte-1xgvwrg")},m(i,u){Q(i,n,u),M(n,s),M(n,e)},p(i,u){u[0]&1&&!be(s.src,o=de(i[52]))&&m(s,"src",o),u[0]&1&&a!==(a=i[46].place_name)&&m(s,"alt",a)},d(i){i&&y(n)}}}function De(t){let n,s=oe(t[46].media),o=[];for(let a=0;a<s.length;a+=1)o[a]=Ye(ke(t,s,a));return{c(){n=Y("div");for(let a=0;a<o.length;a+=1)o[a].c();this.h()},l(a){n=A(a,"DIV",{class:!0});var e=H(n);for(let i=0;i<o.length;i+=1)o[i].l(e);e.forEach(y),this.h()},h(){m(n,"class","carousel-nav svelte-1xgvwrg")},m(a,e){Q(a,n,e);for(let i=0;i<o.length;i+=1)o[i]&&o[i].m(n,null)},p(a,e){if(e[0]&1){s=oe(a[46].media);let i;for(i=0;i<s.length;i+=1){const u=ke(a,s,i);o[i]?o[i].p(u,e):(o[i]=Ye(u),o[i].c(),o[i].m(n,null))}for(;i<o.length;i+=1)o[i].d(1);o.length=s.length}},d(a){a&&y(n),ge(o,a)}}}function Ye(t){let n,s;return{c(){n=Y("span"),this.h()},l(o){n=A(o,"SPAN",{class:!0}),H(n).forEach(y),this.h()},h(){m(n,"class",s="carousel-dot "+(t[46].mediaIdx===t[51]?"active":"")+" svelte-1xgvwrg")},m(o,a){Q(o,n,a)},p(o,a){a[0]&1&&s!==(s="carousel-dot "+(o[46].mediaIdx===o[51]?"active":"")+" svelte-1xgvwrg")&&m(n,"class",s)},d(o){o&&y(n)}}}function Ae(t){let n,s,o;function a(){t[18].call(n,t[47],t[48])}return{c(){n=Y("textarea"),this.h()},l(e){n=A(e,"TEXTAREA",{class:!0,placeholder:!0}),H(n).forEach(y),this.h()},h(){m(n,"class","w-full h-auto overflow-scroll py-0 px-1 mb-3 outline-0 focus:outline-none focus:ring-0 border-none bg-transparent text-sm text-shadow placeholder:text-white/75 placeholder:text-base box-content read-only:cursor-pointer  svelte-1xgvwrg"),n.readOnly=t[7]!=="post"&&t[7]!=="patch",m(n,"placeholder",t[7]==="post"||t[7]==="patch"?"✎ 텍스트 입력하기":"")},m(e,i){Q(e,n,i),Ie(n,t[46].text),s||(o=[q(n,"input",a),lt(gt.call(null,n)),q(n,"input",t[19]),q(n,"click",t[10]),q(n,"focus",t[11]),q(n,"blur",t[12])],s=!0)},p(e,i){t=e,i[0]&1&&Ie(n,t[46].text)},d(e){e&&y(n),s=!1,Re(o)}}}function Pe(t){let n,s,o,a,e=t[46].display_name+"",i,u,l,d;s=new dt({props:{src:de(t[46].profile_image_url),width:"2rem",strokeColor:"white",strokeWidth:"13"}});function f(){return t[20](t[46])}return{c(){n=Y("div"),je(s.$$.fragment),o=Z(),a=Y("div"),i=Se(e),this.h()},l(h){n=A(h,"DIV",{class:!0});var b=H(n);Oe(s.$$.fragment,b),o=F(b),a=A(b,"DIV",{});var L=H(a);i=Te(L,e),L.forEach(y),b.forEach(y),this.h()},h(){m(n,"class","text-shadow text-center flex gap-2 justify-center items-center svelte-1xgvwrg")},m(h,b){Q(h,n,b),ze(s,n,null),M(n,o),M(n,a),M(a,i),u=!0,l||(d=q(n,"click",f),l=!0)},p(h,b){t=h;const L={};b[0]&1&&(L.src=de(t[46].profile_image_url)),s.$set(L),(!u||b[0]&1)&&e!==(e=t[46].display_name+"")&&We(i,e)},i(h){u||(O(s.$$.fragment,h),u=!0)},o(h){J(s.$$.fragment,h),u=!1},d(h){h&&y(n),Ce(s),l=!1,d()}}}function Xe(t){let n=Math.abs(t[1]-t[48])<=1,s,o,a=n&&Me(t);return{c(){a&&a.c(),s=ve()},l(e){a&&a.l(e),s=ve()},m(e,i){a&&a.m(e,i),Q(e,s,i),o=!0},p(e,i){i[0]&2&&(n=Math.abs(e[1]-e[48])<=1),n?a?(a.p(e,i),i[0]&2&&O(a,1)):(a=Me(e),a.c(),O(a,1),a.m(s.parentNode,s)):a&&(pe(),J(a,1,1,()=>{a=null}),_e())},i(e){o||(O(a),o=!0)},o(e){J(a),o=!1},d(e){e&&y(s),a&&a.d(e)}}}function pt(t){let n,s,o,a,e=oe(t[0]),i=[];for(let l=0;l<e.length;l+=1)i[l]=Xe(ye(t,e,l));const u=l=>J(i[l],1,1,()=>{i[l]=null});return{c(){n=Y("div");for(let l=0;l<i.length;l+=1)i[l].c();this.h()},l(l){n=A(l,"DIV",{class:!0});var d=H(n);for(let f=0;f<i.length;f+=1)i[f].l(d);d.forEach(y),this.h()},h(){m(n,"class","bg-black w-screen h-screen")},m(l,d){Q(l,n,d);for(let f=0;f<i.length;f+=1)i[f]&&i[f].m(n,null);s=!0,o||(a=q(n,"contextmenu",Qe(t[17])),o=!0)},p(l,d){if(d[0]&8191){e=oe(l[0]);let f;for(f=0;f<e.length;f+=1){const h=ye(l,e,f);i[f]?(i[f].p(h,d),O(i[f],1)):(i[f]=Xe(h),i[f].c(),O(i[f],1),i[f].m(n,null))}for(pe(),f=e.length;f<i.length;f+=1)u(f);_e()}},i(l){if(!s){for(let d=0;d<e.length;d+=1)O(i[d]);s=!0}},o(l){i=i.filter(Boolean);for(let d=0;d<i.length;d+=1)J(i[d]);s=!1},d(l){l&&y(n),ge(i,l),o=!1,a()}}}const _t=30,vt=10,He=10,Ve=300;function fe(t){return"touches"in t||"changedTouches"in t}function wt(t,n,s){let o;$e(t,mt,r=>s(16,o=r));let a=o.url.searchParams.get("type"),{posts:e=[]}=n,{dontMoveVertically:i=!1}=n,{keyboardY:u=0}=n,{index:l=0}=n,d=!0,f=!1,h=!1,b=0,L=0,V={width:0,height:0},z=!1,G=!1;async function te(){s(14,z=!0);const r=o.url.searchParams.get("userIdx"),c=o.url.searchParams.get("placeIdx"),x=e.length,T=_t,W=r?`&userIdx=${r}`:"",N=c?`&placeIdx=${c}`:"",ce=`&offset=${x}`,ee=`&limit=${T}`,U=(await fetch(`${at}/posts?${W}${N}${ce}${ee}`).then(X=>X.json()).then(X=>X.data)).map(X=>({...X,mediaIdx:0}));U.length===0&&s(15,G=!0),s(0,e=[...e,...U]),s(14,z=!1)}async function k(){ct({mediaIdx:`${e[l].mediaIdx}`,postIdx:`${e[l].idx}`},{replace:!0})}function ae(r){const c=V.height;if(l===0&&r>0){s(4,b=r*.3);return}if(l===e.length-1&&r<0){s(4,b=r*.3);return}s(4,b=Math.max(Math.min(r,c),-c))}function se(r){document.querySelectorAll("textarea").forEach(T=>{g({target:T})}),s(3,d=!1),V.height;let c=0;fe(r)?c=r.changedTouches[0].clientY-S:c=r.clientY-S;const x=Ee(2);c>x&&l>0?(s(1,l-=1),f=!0,k()):-c>x&&l<e.length-1&&(s(1,l+=1),f=!0,k()),s(4,b=0)}function ne(r){const c=V.width;if(r=Math.max(Math.min(r,c),-c),e[l].mediaIdx===0&&r>0||e[l].mediaIdx===e[l].media.length-1&&r<0){s(5,L=r*.3);return}s(5,L=r)}function P(r){V.width,s(3,d=!1);let c=0;fe(r)?c=r.changedTouches[0].clientX-K:c=r.clientX-K;const x=Ee(2);if(c>x&&e[l].mediaIdx>0){const T=e[l].mediaIdx-1;s(0,e[l]={...e[l],mediaIdx:T},e),s(0,e=[...e]),h=!0,k()}else if(-c>x&&e[l].mediaIdx<e[l].media.length-1){const T=e[l].mediaIdx+1;s(0,e[l]={...e[l],mediaIdx:T},e),s(0,e=[...e]),h=!0,k()}s(5,L=0)}let C=!1,K=-1,S=-1,p,I=!1;ht.on("blockSwipeInViewer",r=>C=r);function E(r){C||f||h||(I=!0,p=void 0,me.set(!0),fe(r)?(K=r.touches[0].clientX,S=r.touches[0].clientY):(K=r.clientX,S=r.clientY,window.addEventListener("mousemove",_,{passive:!1}),window.addEventListener("mouseup",le)))}function _(r){if(C||!I||f||h)return;let c=0,x=0;fe(r)?(c=r.touches[0].clientX,x=r.touches[0].clientY):(c=r.clientX,x=r.clientY);let T=c-K,W=x-S;p===void 0&&(p=Math.abs(W)>=Math.abs(T)?"post":"media"),!i&&p==="post"?ae(W):p==="media"&&ne(T)}function le(r){C||!I||f||h||(I=!1,p==="post"?se(r):p==="media"?P(r):me.set(!1),fe(r)||(window.removeEventListener("mousemove",_),window.removeEventListener("mouseup",le)))}let R=[],j=[];function v(r){if(C||f||h)return;r.preventDefault();const c=Date.now(),x=Math.abs(r.deltaX),T=Math.abs(r.deltaY);if(x>T){if(j.push({deltaX:r.deltaX,timestamp:c}),j=j.filter(W=>c-W.timestamp<=Ve),j.length>=2){const W=j[0],N=j[j.length-1],ce=Math.abs(W.deltaX),ee=Math.abs(N.deltaX),U=ee-ce;if(U<0)return;if(U>=0&&ee>=He){let X=!1;if(N.deltaX>0&&e[l].mediaIdx<e[l].media.length-1){const he=e[l].mediaIdx+1;s(0,e[l]={...e[l],mediaIdx:he},e),s(0,e=[...e]),s(3,d=!1),k(),X=!0}else if(N.deltaX<0&&e[l].mediaIdx>0){const he=e[l].mediaIdx-1;s(0,e[l]={...e[l],mediaIdx:he},e),s(0,e=[...e]),s(3,d=!1),k(),X=!0}j=[],X&&(h=!0)}}}else if(R.push({deltaY:r.deltaY,timestamp:c}),R=R.filter(W=>c-W.timestamp<=Ve),R.length>=2){const W=R[0],N=R[R.length-1],ce=Math.abs(W.deltaY),ee=Math.abs(N.deltaY),U=ee-ce;if(U<0)return;if(U>=0&&ee>=He){let X=!1;N.deltaY>0&&l<e.length-1?(s(3,d=!1),s(1,l+=1),k(),X=!0):N.deltaY<0&&l>0&&(s(3,d=!1),s(1,l-=1),k(),X=!0),R=[],X&&(f=!0)}}}function w(r){if(!(C||f||h))switch(r.key){case"ArrowUp":l>0&&(s(3,d=!1),s(1,l-=1),f=!0,k());break;case"ArrowDown":l<e.length-1&&(s(3,d=!1),s(1,l+=1),f=!0,k());break;case"ArrowLeft":if(e[l].mediaIdx>0){const c=e[l].mediaIdx-1;s(0,e[l]={...e[l],mediaIdx:c},e),s(0,e=[...e]),s(3,d=!1),h=!0,k()}break;case"ArrowRight":if(e[l].mediaIdx<e[l].media.length-1){const c=e[l].mediaIdx+1;s(0,e[l]={...e[l],mediaIdx:c},e),s(0,e=[...e]),s(3,d=!1),h=!0,k()}break}}function D(){s(6,V={width:document.body.clientWidth,height:document.body.clientHeight})}function $(){const r=Number(o.url.searchParams.get("mediaIdx")||0);r&&e[l].media[r]?(s(0,e[l]={...e[l],mediaIdx:r},e),s(0,e=[...e])):(s(0,e[l]={...e[l],mediaIdx:0},e),s(0,e=[...e])),k()}function g(r){if(a!=="post"&&a!=="patch")return;const c=r.target;c.style.height="16px";let x=c.scrollHeight;x>window.innerHeight/3&&(x=window.innerHeight/3),c.style.height=`${x}px`}et(async()=>{D(),window.addEventListener("resize",D),B(),$(),await tt(),document.querySelectorAll("textarea").forEach(r=>{g({target:r})})}),st(()=>{window.removeEventListener("resize",D),ue()});function B(){document.addEventListener("touchstart",E,{passive:!1}),document.addEventListener("touchmove",_,{passive:!1}),document.addEventListener("touchend",le),document.addEventListener("mousedown",E,{passive:!1}),document.addEventListener("wheel",v,{passive:!1}),document.addEventListener("keydown",w)}function ue(){document.removeEventListener("touchstart",E),document.removeEventListener("touchmove",_),document.removeEventListener("touchend",le),document.removeEventListener("mousedown",E),document.removeEventListener("wheel",v),document.removeEventListener("keydown",w)}function ie(){s(3,d=!0),f=!1,h=!1,me.set(!1)}function Ne(r){if(a==="post"||a==="patch")return;const c=r.target;c instanceof HTMLTextAreaElement&&(c.scrollHeight<=c.clientHeight||(c.hasAttribute("open")?(c.style.height="",c.removeAttribute("open")):(c.style.height=`${window.innerHeight/3}px`,c.setAttribute("open",""))))}function qe(r){if(a!=="post"&&a!=="patch")return;const c=r.target;c.hasAttribute("open")||(c.style.height=`${window.innerHeight/3}px`,c.setAttribute("open",""))}function Be(r){if(a!=="post"&&a!=="patch")return;const c=r.target;c.hasAttribute("open")&&(c.style.height="",c.removeAttribute("open"))}function Ge(r){nt.call(this,t,r)}function Ke(r,c){r[c].text=this.value,s(0,e)}const Ue=r=>g(r),Ze=r=>{r.user_idx&&ft(`/users/${r.user_idx}`)},Fe=r=>{r.place_idx&&it(`/places/${r.place_idx}`)};return t.$$set=r=>{"posts"in r&&s(0,e=r.posts),"dontMoveVertically"in r&&s(13,i=r.dontMoveVertically),"keyboardY"in r&&s(2,u=r.keyboardY),"index"in r&&s(1,l=r.index)},t.$$.update=()=>{t.$$.dirty[0]&65536&&o&&k(),t.$$.dirty[0]&49155&&l>=e.length-vt&&!z&&!G&&te()},[e,l,u,d,b,L,V,a,g,ie,Ne,qe,Be,i,z,G,o,Ge,Ke,Ue,Ze,Fe]}class Ht extends rt{constructor(n){super(),ot(this,n,wt,pt,Je,{posts:0,dontMoveVertically:13,keyboardY:2,index:1},null,[-1,-1])}}export{Ht as V};