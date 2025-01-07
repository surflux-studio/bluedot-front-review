import{s as st,e as Y,c as A,b as H,f as w,m as h,i as z,p as j,r as lt,I as pe,k as nt,z as rt,O as it,A as ot,E as de,y as at,a as K,t as Ce,g as Z,d as We,o as re,h as L,P as be,j as Oe,x as je,K as Ie,M as xe,F as ct,D as Re}from"./scheduler.B4Oq0Y6j.js";import{S as ut,i as ft,t as q,g as ve,f as we,a as $,c as Ne,b as qe,m as ze,d as Fe}from"./index.Dwy94kkp.js";import{e as ie}from"./each.DoWc_6y-.js";import{e as dt,A as ht,f as ge,g as he,r as ke}from"./Header.FoXJ-u0t.js";import{g as mt}from"./entry.CMhpHdxa.js";import{u as _t,g as gt}from"./searchParams.B7rP42oW.js";import{W as pt}from"./WaterdropImage.S1fplCjZ.js";import{u as vt,f as wt,C as bt}from"./follow.D1cMAO8o.js";import{p as It}from"./stores.Bepurxgr.js";import"./index.P4poKbEW.js";import{s as me}from"./s32cloudfront.bAl2UV-x.js";/* empty css                                             */function xt(t){const s=["touchstart","touchmove","touchend","mousedown","mousemove","mouseup","wheel"].map(r=>{const i=e=>e.stopPropagation();return t.addEventListener(r,i),{event:r,handler:i}});return{destroy(){s.forEach(({event:r,handler:i})=>{t.removeEventListener(r,i)})}}}function ye(t,l,s){const r=t.slice();return r[48]=l[s],r[49]=l,r[50]=s,r}function Ee(t,l,s){const r=t.slice();return r[51]=l[s],r[53]=s,r}function Me(t,l,s){const r=t.slice();return r[54]=l[s],r}function Le(t){var R,N;let l,s,r,i,e,n,f,a,d,u,_,P,F,m,x=(t[48].place_name||"")+"",M,V,k,oe,se,le,S,G,J,C=ie(t[48].media),p=[];for(let b=0;b<C.length;b+=1)p[b]=De(Me(t,C,b));let y=t[48].media.length>1&&Ye(t),E=(t[7]==="post"||t[7]==="patch"||((N=(R=t[48])==null?void 0:R.text)==null?void 0:N.length)>0)&&Pe(t),v=t[48].user_idx&&Ve(t);P=new pt({props:{src:"/graydot.png",width:"2rem",strokeColor:"white",strokeWidth:"13"}});function ne(){return t[23](t[48])}return{c(){l=Y("div"),s=Y("div"),r=Y("div");for(let b=0;b<p.length;b+=1)p[b].c();n=K(),f=Y("div"),y&&y.c(),a=K(),E&&E.c(),d=K(),v&&v.c(),u=K(),_=Y("div"),Ne(P.$$.fragment),F=K(),m=Y("div"),M=Ce(x),oe=K(),this.h()},l(b){l=A(b,"DIV",{class:!0,style:!0});var I=H(l);s=A(I,"DIV",{class:!0});var X=H(s);r=A(X,"DIV",{class:!0,style:!0});var ee=H(r);for(let ae=0;ae<p.length;ae+=1)p[ae].l(ee);ee.forEach(w),X.forEach(w),n=Z(I),f=A(I,"DIV",{class:!0,style:!0});var g=H(f);y&&y.l(g),a=Z(g),E&&E.l(g),d=Z(g),v&&v.l(g),u=Z(g),_=A(g,"DIV",{class:!0});var B=H(_);qe(P.$$.fragment,B),F=Z(B),m=A(B,"DIV",{});var fe=H(m);M=We(fe,x),fe.forEach(w),B.forEach(w),g.forEach(w),oe=Z(I),I.forEach(w),this.h()},h(){h(r,"class",i=re(`carousel-track transition-transform ${t[3]?"duration-0":""}`)+" svelte-1xgvwrg"),h(r,"style",e=`transform: translateX(${-t[48].mediaIdx*t[6].width+t[5]}px);`),h(s,"class","carousel-container svelte-1xgvwrg"),h(_,"class","text-shadow text-center flex gap-2 justify-center items-center svelte-1xgvwrg"),h(f,"class",V=re(`fixed bottom-0 w-full px-4 text-white text-md flex flex-col items-start gap-2 z-40 
            ${t[2]?"":"pb-24"} 
           transition-transform`)+" svelte-1xgvwrg"),h(f,"style",k=`transform: translateY(${t[2]}px);`),h(l,"class",se=re(`w-full h-full gradient-overlay absolute content-center transition-transform ${t[3]?"duration-0":""}`)+" svelte-1xgvwrg"),h(l,"style",le=`top: 0; transform: translateY(${(t[50]-t[1])*t[6].height+t[4]}px);`)},m(b,I){z(b,l,I),L(l,s),L(s,r);for(let X=0;X<p.length;X+=1)p[X]&&p[X].m(r,null);L(l,n),L(l,f),y&&y.m(f,null),L(f,a),E&&E.m(f,null),L(f,d),v&&v.m(f,null),L(f,u),L(f,_),ze(P,_,null),L(_,F),L(_,m),L(m,M),L(l,oe),S=!0,G||(J=[j(r,"transitionend",function(){be(t[48].mediaIdx===t[0][t[1]].mediaIdx?t[9]:void 0)&&(t[48].mediaIdx===t[0][t[1]].mediaIdx?t[9]:void 0).apply(this,arguments)}),j(_,"click",ne),j(l,"transitionend",function(){be(t[50]===t[1]?t[9]:void 0)&&(t[50]===t[1]?t[9]:void 0).apply(this,arguments)})],G=!0)},p(b,I){var X,ee;if(t=b,I[0]&1){C=ie(t[48].media);let g;for(g=0;g<C.length;g+=1){const B=Me(t,C,g);p[g]?p[g].p(B,I):(p[g]=De(B),p[g].c(),p[g].m(r,null))}for(;g<p.length;g+=1)p[g].d(1);p.length=C.length}(!S||I[0]&8&&i!==(i=re(`carousel-track transition-transform ${t[3]?"duration-0":""}`)+" svelte-1xgvwrg"))&&h(r,"class",i),(!S||I[0]&97&&e!==(e=`transform: translateX(${-t[48].mediaIdx*t[6].width+t[5]}px);`))&&h(r,"style",e),t[48].media.length>1?y?y.p(t,I):(y=Ye(t),y.c(),y.m(f,a)):y&&(y.d(1),y=null),t[7]==="post"||t[7]==="patch"||((ee=(X=t[48])==null?void 0:X.text)==null?void 0:ee.length)>0?E?E.p(t,I):(E=Pe(t),E.c(),E.m(f,d)):E&&(E.d(1),E=null),t[48].user_idx?v?(v.p(t,I),I[0]&1&&q(v,1)):(v=Ve(t),v.c(),q(v,1),v.m(f,u)):v&&(ve(),$(v,1,1,()=>{v=null}),we()),(!S||I[0]&1)&&x!==(x=(t[48].place_name||"")+"")&&Oe(M,x),(!S||I[0]&4&&V!==(V=re(`fixed bottom-0 w-full px-4 text-white text-md flex flex-col items-start gap-2 z-40 
            ${t[2]?"":"pb-24"} 
           transition-transform`)+" svelte-1xgvwrg"))&&h(f,"class",V),(!S||I[0]&4&&k!==(k=`transform: translateY(${t[2]}px);`))&&h(f,"style",k),(!S||I[0]&8&&se!==(se=re(`w-full h-full gradient-overlay absolute content-center transition-transform ${t[3]?"duration-0":""}`)+" svelte-1xgvwrg"))&&h(l,"class",se),(!S||I[0]&82&&le!==(le=`top: 0; transform: translateY(${(t[50]-t[1])*t[6].height+t[4]}px);`))&&h(l,"style",le)},i(b){S||(q(v),q(P.$$.fragment,b),S=!0)},o(b){$(v),$(P.$$.fragment,b),S=!1},d(b){b&&w(l),pe(p,b),y&&y.d(),E&&E.d(),v&&v.d(),Fe(P),G=!1,je(J)}}}function De(t){let l,s,r,i,e;return{c(){l=Y("div"),s=Y("img"),e=K(),this.h()},l(n){l=A(n,"DIV",{class:!0});var f=H(l);s=A(f,"IMG",{src:!0,alt:!0,class:!0,draggable:!0}),e=Z(f),f.forEach(w),this.h()},h(){Ie(s.src,r=me(t[54]))||h(s,"src",r),h(s,"alt",i=t[48].place_name),h(s,"class","w-full h-full object-contain svelte-1xgvwrg"),h(s,"draggable","false"),h(l,"class","carousel-slide svelte-1xgvwrg")},m(n,f){z(n,l,f),L(l,s),L(l,e)},p(n,f){f[0]&1&&!Ie(s.src,r=me(n[54]))&&h(s,"src",r),f[0]&1&&i!==(i=n[48].place_name)&&h(s,"alt",i)},d(n){n&&w(l)}}}function Ye(t){let l,s=ie(t[48].media),r=[];for(let i=0;i<s.length;i+=1)r[i]=Ae(Ee(t,s,i));return{c(){l=Y("div");for(let i=0;i<r.length;i+=1)r[i].c();this.h()},l(i){l=A(i,"DIV",{class:!0});var e=H(l);for(let n=0;n<r.length;n+=1)r[n].l(e);e.forEach(w),this.h()},h(){h(l,"class","carousel-nav svelte-1xgvwrg")},m(i,e){z(i,l,e);for(let n=0;n<r.length;n+=1)r[n]&&r[n].m(l,null)},p(i,e){if(e[0]&1){s=ie(i[48].media);let n;for(n=0;n<s.length;n+=1){const f=Ee(i,s,n);r[n]?r[n].p(f,e):(r[n]=Ae(f),r[n].c(),r[n].m(l,null))}for(;n<r.length;n+=1)r[n].d(1);r.length=s.length}},d(i){i&&w(l),pe(r,i)}}}function Ae(t){let l,s;return{c(){l=Y("span"),this.h()},l(r){l=A(r,"SPAN",{class:!0}),H(l).forEach(w),this.h()},h(){h(l,"class",s="carousel-dot "+(t[48].mediaIdx===t[53]?"active":"")+" svelte-1xgvwrg")},m(r,i){z(r,l,i)},p(r,i){i[0]&1&&s!==(s="carousel-dot "+(r[48].mediaIdx===r[53]?"active":"")+" svelte-1xgvwrg")&&h(l,"class",s)},d(r){r&&w(l)}}}function Pe(t){let l,s,r;function i(){t[18].call(l,t[49],t[50])}return{c(){l=Y("textarea"),this.h()},l(e){l=A(e,"TEXTAREA",{class:!0,placeholder:!0}),H(l).forEach(w),this.h()},h(){h(l,"class","w-full h-auto overflow-scroll py-0 px-1 mb-3 outline-0 focus:outline-none focus:ring-0 border-none bg-transparent text-sm text-shadow placeholder:text-white/75 placeholder:text-base box-content read-only:cursor-pointer  svelte-1xgvwrg"),l.readOnly=t[7]!=="post"&&t[7]!=="patch",h(l,"placeholder",t[7]==="post"||t[7]==="patch"?"✎ 텍스트 입력하기":"")},m(e,n){z(e,l,n),xe(l,t[48].text),s||(r=[j(l,"input",i),ct(xt.call(null,l)),j(l,"input",t[19]),j(l,"click",t[10]),j(l,"focus",t[11]),j(l,"blur",t[12])],s=!0)},p(e,n){t=e,n[0]&1&&xe(l,t[48].text)},d(e){e&&w(l),s=!1,je(r)}}}function Ve(t){let l,s,r,i,e,n=t[48].unique_name+"",f,a,d=he()!=t[48].user_idx,u,_,P;r=new bt({props:{src:me(t[48].profile_image_url,500),width:"2rem",strokeColor:"white",strokeWidth:"13"}});function F(){return t[20](t[48])}let m=d&&Xe(t);return{c(){l=Y("div"),s=Y("div"),Ne(r.$$.fragment),i=K(),e=Y("div"),f=Ce(n),a=K(),m&&m.c(),this.h()},l(x){l=A(x,"DIV",{class:!0});var M=H(l);s=A(M,"DIV",{class:!0});var V=H(s);qe(r.$$.fragment,V),i=Z(V),e=A(V,"DIV",{});var k=H(e);f=We(k,n),k.forEach(w),V.forEach(w),a=Z(M),m&&m.l(M),M.forEach(w),this.h()},h(){h(s,"class","text-shadow text-center flex gap-2 justify-center items-center svelte-1xgvwrg"),h(l,"class","flex gap-2 justify-center items-center")},m(x,M){z(x,l,M),L(l,s),ze(r,s,null),L(s,i),L(s,e),L(e,f),L(l,a),m&&m.m(l,null),u=!0,_||(P=j(s,"click",F),_=!0)},p(x,M){t=x;const V={};M[0]&1&&(V.src=me(t[48].profile_image_url,500)),r.$set(V),(!u||M[0]&1)&&n!==(n=t[48].unique_name+"")&&Oe(f,n),M[0]&1&&(d=he()!=t[48].user_idx),d?m?m.p(t,M):(m=Xe(t),m.c(),m.m(l,null)):m&&(m.d(1),m=null)},i(x){u||(q(r.$$.fragment,x),u=!0)},o(x){$(r.$$.fragment,x),u=!1},d(x){x&&w(l),Fe(r),m&&m.d(),_=!1,P()}}}function Xe(t){let l;function s(e,n){return e[48].is_following?yt:kt}let r=s(t),i=r(t);return{c(){i.c(),l=de()},l(e){i.l(e),l=de()},m(e,n){i.m(e,n),z(e,l,n)},p(e,n){r===(r=s(e))&&i?i.p(e,n):(i.d(1),i=r(e),i&&(i.c(),i.m(l.parentNode,l)))},d(e){e&&w(l),i.d(e)}}}function kt(t){let l,s="FOLLOW",r,i;function e(){return t[22](t[48])}return{c(){l=Y("div"),l.textContent=s,this.h()},l(n){l=A(n,"DIV",{class:!0,"data-svelte-h":!0}),Re(l)!=="svelte-c3p5hx"&&(l.textContent=s),this.h()},h(){h(l,"class","text-xs text-white")},m(n,f){z(n,l,f),r||(i=j(l,"click",e),r=!0)},p(n,f){t=n},d(n){n&&w(l),r=!1,i()}}}function yt(t){let l,s="FOLLOWING",r,i;function e(){return t[21](t[48])}return{c(){l=Y("div"),l.textContent=s,this.h()},l(n){l=A(n,"DIV",{class:!0,"data-svelte-h":!0}),Re(l)!=="svelte-1wvslcb"&&(l.textContent=s),this.h()},h(){h(l,"class","text-xs text-gray-400")},m(n,f){z(n,l,f),r||(i=j(l,"click",e),r=!0)},p(n,f){t=n},d(n){n&&w(l),r=!1,i()}}}function He(t){let l=Math.abs(t[1]-t[50])<=1,s,r,i=l&&Le(t);return{c(){i&&i.c(),s=de()},l(e){i&&i.l(e),s=de()},m(e,n){i&&i.m(e,n),z(e,s,n),r=!0},p(e,n){n[0]&2&&(l=Math.abs(e[1]-e[50])<=1),l?i?(i.p(e,n),n[0]&2&&q(i,1)):(i=Le(e),i.c(),q(i,1),i.m(s.parentNode,s)):i&&(ve(),$(i,1,1,()=>{i=null}),we())},i(e){r||(q(i),r=!0)},o(e){$(i),r=!1},d(e){e&&w(s),i&&i.d(e)}}}function Et(t){let l,s,r,i,e=ie(t[0]),n=[];for(let a=0;a<e.length;a+=1)n[a]=He(ye(t,e,a));const f=a=>$(n[a],1,1,()=>{n[a]=null});return{c(){l=Y("div");for(let a=0;a<n.length;a+=1)n[a].c();this.h()},l(a){l=A(a,"DIV",{class:!0});var d=H(l);for(let u=0;u<n.length;u+=1)n[u].l(d);d.forEach(w),this.h()},h(){h(l,"class","bg-black w-screen h-screen")},m(a,d){z(a,l,d);for(let u=0;u<n.length;u+=1)n[u]&&n[u].m(l,null);s=!0,r||(i=j(l,"contextmenu",lt(t[17])),r=!0)},p(a,d){if(d[0]&8191){e=ie(a[0]);let u;for(u=0;u<e.length;u+=1){const _=ye(a,e,u);n[u]?(n[u].p(_,d),q(n[u],1)):(n[u]=He(_),n[u].c(),q(n[u],1),n[u].m(l,null))}for(ve(),u=e.length;u<n.length;u+=1)f(u);we()}},i(a){if(!s){for(let d=0;d<e.length;d+=1)q(n[d]);s=!0}},o(a){n=n.filter(Boolean);for(let d=0;d<n.length;d+=1)$(n[d]);s=!1},d(a){a&&w(l),pe(n,a),r=!1,i()}}}const Mt=30,Lt=10,Se=10,Te=300;function ue(t){return"touches"in t||"changedTouches"in t}function Dt(t,l,s){let r;nt(t,It,o=>s(16,r=o));let i=r.url.searchParams.get("type"),{posts:e=[]}=l,{dontMoveVertically:n=!1}=l,{keyboardY:f=0}=l,{index:a=0}=l,d=!0,u=!1,_=!1,P=0,F=0,m={width:0,height:0},x=!1,M=!1;async function V(){s(14,x=!0);const o=r.url.searchParams.get("userIdx"),c=r.url.searchParams.get("placeIdx"),D=e.length,W=Mt,O=o?`&userIdx=${o}`:"",U=c?`&placeIdx=${c}`:"",ce=`&offset=${D}`,te=`&limit=${W}`,Q=(await fetch(`${ht}/posts?${O}${U}${ce}${te}`).then(T=>T.json()).then(T=>T.data)).map(T=>({...T,mediaIdx:0}));Q.length===0&&s(15,M=!0),s(0,e=[...e,...Q]),s(14,x=!1)}async function k(){_t({mediaIdx:`${e[a].mediaIdx}`,postIdx:`${e[a].idx}`},{replace:!0})}function oe(o){const c=m.height;if(a===0&&o>0){s(4,P=o*.3);return}if(a===e.length-1&&o<0){s(4,P=o*.3);return}s(4,P=Math.max(Math.min(o,c),-c))}function se(o){document.querySelectorAll("textarea").forEach(W=>{g({target:W})}),s(3,d=!1),m.height;let c=0;ue(o)?c=o.changedTouches[0].clientY-C:c=o.clientY-C;const D=ke(2);c>D&&a>0?(s(1,a-=1),u=!0,k()):-c>D&&a<e.length-1&&(s(1,a+=1),u=!0,k()),s(4,P=0)}function le(o){const c=m.width;if(o=Math.max(Math.min(o,c),-c),e[a].mediaIdx===0&&o>0||e[a].mediaIdx===e[a].media.length-1&&o<0){s(5,F=o*.3);return}s(5,F=o)}function S(o){m.width,s(3,d=!1);let c=0;ue(o)?c=o.changedTouches[0].clientX-J:c=o.clientX-J;const D=ke(2);if(c>D&&e[a].mediaIdx>0){const W=e[a].mediaIdx-1;s(0,e[a]={...e[a],mediaIdx:W},e),s(0,e=[...e]),_=!0,k()}else if(-c>D&&e[a].mediaIdx<e[a].media.length-1){const W=e[a].mediaIdx+1;s(0,e[a]={...e[a],mediaIdx:W},e),s(0,e=[...e]),_=!0,k()}s(5,F=0)}let G=!1,J=-1,C=-1,p,y=!1;dt.on("blockSwipeInViewer",o=>G=o);function E(o){G||u||_||(y=!0,p=void 0,ge.set(!0),ue(o)?(J=o.touches[0].clientX,C=o.touches[0].clientY):(J=o.clientX,C=o.clientY,window.addEventListener("mousemove",v,{passive:!1}),window.addEventListener("mouseup",ne)))}function v(o){if(G||!y||u||_)return;let c=0,D=0;ue(o)?(c=o.touches[0].clientX,D=o.touches[0].clientY):(c=o.clientX,D=o.clientY);let W=c-J,O=D-C;p===void 0&&(p=Math.abs(O)>=Math.abs(W)?"post":"media"),!n&&p==="post"?oe(O):p==="media"&&le(W)}function ne(o){G||!y||u||_||(y=!1,p==="post"?se(o):p==="media"?S(o):ge.set(!1),ue(o)||(window.removeEventListener("mousemove",v),window.removeEventListener("mouseup",ne)))}let R=[],N=[];function b(o){if(G||u||_)return;o.preventDefault();const c=Date.now(),D=Math.abs(o.deltaX),W=Math.abs(o.deltaY);if(D>W){if(N.push({deltaX:o.deltaX,timestamp:c}),N=N.filter(O=>c-O.timestamp<=Te),N.length>=2){const O=N[0],U=N[N.length-1],ce=Math.abs(O.deltaX),te=Math.abs(U.deltaX),Q=te-ce;if(Q<0)return;if(Q>=0&&te>=Se){let T=!1;if(U.deltaX>0&&e[a].mediaIdx<e[a].media.length-1){const _e=e[a].mediaIdx+1;s(0,e[a]={...e[a],mediaIdx:_e},e),s(0,e=[...e]),s(3,d=!1),k(),T=!0}else if(U.deltaX<0&&e[a].mediaIdx>0){const _e=e[a].mediaIdx-1;s(0,e[a]={...e[a],mediaIdx:_e},e),s(0,e=[...e]),s(3,d=!1),k(),T=!0}N=[],T&&(_=!0)}}}else if(R.push({deltaY:o.deltaY,timestamp:c}),R=R.filter(O=>c-O.timestamp<=Te),R.length>=2){const O=R[0],U=R[R.length-1],ce=Math.abs(O.deltaY),te=Math.abs(U.deltaY),Q=te-ce;if(Q<0)return;if(Q>=0&&te>=Se){let T=!1;U.deltaY>0&&a<e.length-1?(s(3,d=!1),s(1,a+=1),k(),T=!0):U.deltaY<0&&a>0&&(s(3,d=!1),s(1,a-=1),k(),T=!0),R=[],T&&(u=!0)}}}function I(o){if(!(G||u||_))switch(o.key){case"ArrowUp":a>0&&(s(3,d=!1),s(1,a-=1),u=!0,k());break;case"ArrowDown":a<e.length-1&&(s(3,d=!1),s(1,a+=1),u=!0,k());break;case"ArrowLeft":if(e[a].mediaIdx>0){const c=e[a].mediaIdx-1;s(0,e[a]={...e[a],mediaIdx:c},e),s(0,e=[...e]),s(3,d=!1),_=!0,k()}break;case"ArrowRight":if(e[a].mediaIdx<e[a].media.length-1){const c=e[a].mediaIdx+1;s(0,e[a]={...e[a],mediaIdx:c},e),s(0,e=[...e]),s(3,d=!1),_=!0,k()}break}}function X(){s(6,m={width:document.body.clientWidth,height:document.body.clientHeight})}function ee(){const o=Number(r.url.searchParams.get("mediaIdx")||0);o&&e[a].media[o]?(s(0,e[a]={...e[a],mediaIdx:o},e),s(0,e=[...e])):(s(0,e[a]={...e[a],mediaIdx:0},e),s(0,e=[...e])),k()}function g(o){if(i!=="post"&&i!=="patch")return;const c=o.target;c.style.height="16px";let D=c.scrollHeight;D>window.innerHeight/3&&(D=window.innerHeight/3),c.style.height=`${D}px`}rt(async()=>{X(),window.addEventListener("resize",X),B(),ee(),await it(),document.querySelectorAll("textarea").forEach(o=>{g({target:o})})}),ot(()=>{window.removeEventListener("resize",X),fe()});function B(){document.addEventListener("touchstart",E,{passive:!1}),document.addEventListener("touchmove",v,{passive:!1}),document.addEventListener("touchend",ne),document.addEventListener("mousedown",E,{passive:!1}),document.addEventListener("wheel",b,{passive:!1}),document.addEventListener("keydown",I)}function fe(){document.removeEventListener("touchstart",E),document.removeEventListener("touchmove",v),document.removeEventListener("touchend",ne),document.removeEventListener("mousedown",E),document.removeEventListener("wheel",b),document.removeEventListener("keydown",I)}function ae(){s(3,d=!0),u=!1,_=!1,ge.set(!1)}function Ge(o){if(i==="post"||i==="patch")return;const c=o.target;c instanceof HTMLTextAreaElement&&(c.scrollHeight<=c.clientHeight||(c.hasAttribute("open")?(c.style.height="",c.removeAttribute("open")):(c.style.height=`${window.innerHeight/3}px`,c.setAttribute("open",""))))}function Ue(o){if(i!=="post"&&i!=="patch")return;const c=o.target;c.hasAttribute("open")||(c.style.height=`${window.innerHeight/3}px`,c.setAttribute("open",""))}function Be(o){if(i!=="post"&&i!=="patch")return;const c=o.target;c.hasAttribute("open")&&(c.style.height="",c.removeAttribute("open"))}function Ke(o){at.call(this,t,o)}function Ze(o,c){o[c].text=this.value,s(0,e)}const Je=o=>g(o),Qe=o=>{o.user_idx&&gt(`/users/${o.user_idx}`)},$e=async o=>{await vt({targetIdx:o.user_idx,subjectIdx:he()}),s(0,e=e.map(c=>c.user_idx===o.user_idx?{...c,is_following:!1}:c))},et=async o=>{await wt({targetIdx:o.user_idx,subjectIdx:he()}),s(0,e=e.map(c=>c.user_idx===o.user_idx?{...c,is_following:!0}:c))},tt=o=>{o.place_idx&&mt(`/places/${o.place_idx}`)};return t.$$set=o=>{"posts"in o&&s(0,e=o.posts),"dontMoveVertically"in o&&s(13,n=o.dontMoveVertically),"keyboardY"in o&&s(2,f=o.keyboardY),"index"in o&&s(1,a=o.index)},t.$$.update=()=>{t.$$.dirty[0]&65536&&r&&k(),t.$$.dirty[0]&57347&&!n&&a>=e.length-Lt&&!x&&!M&&V()},[e,a,f,d,P,F,m,i,g,ae,Ge,Ue,Be,n,x,M,r,Ke,Ze,Je,Qe,$e,et,tt]}class Rt extends ut{constructor(l){super(),ft(this,l,Dt,Et,st,{posts:0,dontMoveVertically:13,keyboardY:2,index:1},null,[-1,-1])}}export{Rt as V};
