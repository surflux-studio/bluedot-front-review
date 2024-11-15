import{s as De,e as I,c as E,b as V,f as p,m as d,i as $,D as ae,k as Ye,E as Me,F as Pe,G as Le,v as ce,a as O,t as ue,g as T,d as fe,H as q,I as Z,h as _,J as de,r as K,K as We,j as he,u as He,q as me}from"./scheduler.Bw1HVZ4I.js";import{S as Ae,i as Ce,t as x,g as Se,f as ze,b as U,c as _e,a as pe,m as ge,d as ve}from"./index.B-tLs4nj.js";import{e as Q}from"./each.Nm2dZFLC.js";import{g as Oe}from"./entry.BUpUrWeW.js";import{b as ie}from"./heic2any.CYmZVgVk.js";import{g as Te,s as qe}from"./searchParams.BvL-fHFp.js";import{W as xe}from"./WaterdropImage.C1WF8pTS.js";import{C as Ne}from"./CircleImage.fE3M2leQ.js";import{e as Re}from"./units.CgGDbivZ.js";import{p as Xe}from"./stores.lzYO7dCz.js";/* empty css                                             */function be(t,l,s){const e=t.slice();return e[30]=l[s],e[31]=l,e[32]=s,e}function we(t,l,s){const e=t.slice();return e[33]=l[s],e[35]=s,e}function ye(t,l,s){const e=t.slice();return e[33]=l[s],e}function ke(t){let l,s,e,i,o,r,u,n,z,j,S,ee,N,P=t[30].display_name+"",B,te,y,k,H,v,A=(t[30].place_name||"")+"",R,X,se,F,D,Y,J,L=Q(t[30].media),m=[];for(let c=0;c<L.length;c+=1)m[c]=Ie(ye(t,L,c));let g=t[30].media.length>=2&&Ee(t);function le(){t[11].call(n,t[31],t[32])}S=new Ne({props:{src:t[30].profile_image_url,width:"2rem",strokeColor:"white",strokeWidth:"13"}});function a(){return t[12](t[30])}k=new xe({props:{src:`https://picsum.photos/50/50/?r=${t[30].place_idx}`,width:"2rem",strokeColor:"white",strokeWidth:"13"}});function h(){return t[13](t[30])}return{c(){l=I("div"),s=I("div"),e=I("div");for(let c=0;c<m.length;c+=1)m[c].c();o=O(),g&&g.c(),r=O(),u=I("div"),n=I("textarea"),z=O(),j=I("div"),_e(S.$$.fragment),ee=O(),N=I("div"),B=ue(P),te=O(),y=I("div"),_e(k.$$.fragment),H=O(),v=I("div"),R=ue(A),se=O(),this.h()},l(c){l=E(c,"DIV",{class:!0});var f=V(l);s=E(f,"DIV",{class:!0});var b=V(s);e=E(b,"DIV",{class:!0});var C=V(e);for(let ne=0;ne<m.length;ne+=1)m[ne].l(C);C.forEach(p),o=T(b),g&&g.l(b),b.forEach(p),r=T(f),u=E(f,"DIV",{class:!0});var M=V(u);n=E(M,"TEXTAREA",{class:!0,placeholder:!0}),V(n).forEach(p),z=T(M),j=E(M,"DIV",{class:!0});var W=V(j);pe(S.$$.fragment,W),ee=T(W),N=E(W,"DIV",{});var w=V(N);B=fe(w,P),w.forEach(p),W.forEach(p),te=T(M),y=E(M,"DIV",{class:!0});var G=V(y);pe(k.$$.fragment,G),H=T(G),v=E(G,"DIV",{});var oe=V(v);R=fe(oe,A),oe.forEach(p),G.forEach(p),M.forEach(p),se=T(f),f.forEach(p),this.h()},h(){var c,f;d(e,"class",i=q(`carousel-track transition-transform ${t[3]?"duration-0":""}`)+" svelte-jyziao"),Z(e,"transform",`translateX(${-(((c=t[6])==null?void 0:c.width)??document.body.clientWidth)*t[30].mediaIdx+t[5]}px)`),d(s,"class","carousel-container svelte-jyziao"),d(n,"class","w-full h-auto overflow-scroll py-0 px-1 mb-3 outline-0 focus:outline-none focus:outline-0 focus:ring-0 border-none bg-transparent text-sm text-shadow placeholder:text-white/75 placeholder:text-base box-content  svelte-jyziao"),n.readOnly=t[7]!=="post"&&t[7]!=="patch",d(n,"placeholder",t[7]==="post"||t[7]==="patch"?"✎ 텍스트 입력하기":""),d(j,"class","text-shadow text-center flex gap-2 justify-center items-center svelte-jyziao"),d(y,"class","text-shadow text-center flex gap-2 justify-center items-center svelte-jyziao"),d(u,"class",X=q(`fixed bottom-0 w-full px-4 text-white text-md flex flex-col items-start gap-2 z-[9999] ${t[1]?"":"pb-24"} transition-transform`)+" svelte-jyziao"),Z(u,"transform",`translateY(${t[1]}px)`),d(l,"class",F=q(`w-screen h-screen gradient-overlay absolute content-center transition-transform ${t[3]?"duration-0":""}`)+" svelte-jyziao"),Z(l,"top",`${t[32]*100}%`),Z(l,"transform",`translateY(${-(((f=t[6])==null?void 0:f.height)??document.body.clientHeight)*t[2]+t[4]}px)`)},m(c,f){$(c,l,f),_(l,s),_(s,e);for(let b=0;b<m.length;b+=1)m[b]&&m[b].m(e,null);_(s,o),g&&g.m(s,null),_(l,r),_(l,u),_(u,n),de(n,t[30].text),_(u,z),_(u,j),ge(S,j,null),_(j,ee),_(j,N),_(N,B),_(u,te),_(u,y),ge(k,y,null),_(y,H),_(y,v),_(v,R),_(l,se),D=!0,Y||(J=[K(e,"transitionend",t[8],{once:!0}),K(n,"input",le),K(n,"input",re),K(j,"click",a),K(y,"click",h),K(l,"transitionend",function(){We(t[32]===t[2]?t[8]:void 0)&&(t[32]===t[2]?t[8]:void 0).apply(this,arguments)})],Y=!0)},p(c,f){var M,W;if(t=c,f[0]&1){L=Q(t[30].media);let w;for(w=0;w<L.length;w+=1){const G=ye(t,L,w);m[w]?m[w].p(G,f):(m[w]=Ie(G),m[w].c(),m[w].m(e,null))}for(;w<m.length;w+=1)m[w].d(1);m.length=L.length}(!D||f[0]&8&&i!==(i=q(`carousel-track transition-transform ${t[3]?"duration-0":""}`)+" svelte-jyziao"))&&d(e,"class",i),f[0]&97&&Z(e,"transform",`translateX(${-(((M=t[6])==null?void 0:M.width)??document.body.clientWidth)*t[30].mediaIdx+t[5]}px)`),t[30].media.length>=2?g?g.p(t,f):(g=Ee(t),g.c(),g.m(s,null)):g&&(g.d(1),g=null),f[0]&1&&de(n,t[30].text);const b={};f[0]&1&&(b.src=t[30].profile_image_url),S.$set(b),(!D||f[0]&1)&&P!==(P=t[30].display_name+"")&&he(B,P);const C={};f[0]&1&&(C.src=`https://picsum.photos/50/50/?r=${t[30].place_idx}`),k.$set(C),(!D||f[0]&1)&&A!==(A=(t[30].place_name||"")+"")&&he(R,A),(!D||f[0]&2&&X!==(X=q(`fixed bottom-0 w-full px-4 text-white text-md flex flex-col items-start gap-2 z-[9999] ${t[1]?"":"pb-24"} transition-transform`)+" svelte-jyziao"))&&d(u,"class",X),f[0]&2&&Z(u,"transform",`translateY(${t[1]}px)`),(!D||f[0]&8&&F!==(F=q(`w-screen h-screen gradient-overlay absolute content-center transition-transform ${t[3]?"duration-0":""}`)+" svelte-jyziao"))&&d(l,"class",F),f[0]&84&&Z(l,"transform",`translateY(${-(((W=t[6])==null?void 0:W.height)??document.body.clientHeight)*t[2]+t[4]}px)`)},i(c){D||(x(S.$$.fragment,c),x(k.$$.fragment,c),D=!0)},o(c){U(S.$$.fragment,c),U(k.$$.fragment,c),D=!1},d(c){c&&p(l),ae(m,c),g&&g.d(),ve(S),ve(k),Y=!1,He(J)}}}function Ie(t){let l,s,e,i,o;return{c(){l=I("div"),s=I("img"),o=O(),this.h()},l(r){l=E(r,"DIV",{class:!0});var u=V(l);s=E(u,"IMG",{src:!0,alt:!0,class:!0}),o=T(u),u.forEach(p),this.h()},h(){me(s.src,e=t[33])||d(s,"src",e),d(s,"alt",i=t[30].place_name),d(s,"class","w-screen h-screen object-contain"),d(l,"class","carousel-slide svelte-jyziao")},m(r,u){$(r,l,u),_(l,s),_(l,o)},p(r,u){u[0]&1&&!me(s.src,e=r[33])&&d(s,"src",e),u[0]&1&&i!==(i=r[30].place_name)&&d(s,"alt",i)},d(r){r&&p(l)}}}function Ee(t){let l,s=Q(t[30].media),e=[];for(let i=0;i<s.length;i+=1)e[i]=je(we(t,s,i));return{c(){l=I("div");for(let i=0;i<e.length;i+=1)e[i].c();this.h()},l(i){l=E(i,"DIV",{class:!0});var o=V(l);for(let r=0;r<e.length;r+=1)e[r].l(o);o.forEach(p),this.h()},h(){d(l,"class","carousel-nav svelte-jyziao")},m(i,o){$(i,l,o);for(let r=0;r<e.length;r+=1)e[r]&&e[r].m(l,null)},p(i,o){if(o[0]&5){s=Q(i[30].media);let r;for(r=0;r<s.length;r+=1){const u=we(i,s,r);e[r]?e[r].p(u,o):(e[r]=je(u),e[r].c(),e[r].m(l,null))}for(;r<e.length;r+=1)e[r].d(1);e.length=s.length}},d(i){i&&p(l),ae(e,i)}}}function je(t){let l,s;return{c(){l=I("span"),this.h()},l(e){l=E(e,"SPAN",{class:!0}),V(l).forEach(p),this.h()},h(){d(l,"class",s=q(`carousel-dot ${t[0][t[2]].mediaIdx===t[35]?"active":""}`)+" svelte-jyziao")},m(e,i){$(e,l,i)},p(e,i){i[0]&5&&s!==(s=q(`carousel-dot ${e[0][e[2]].mediaIdx===e[35]?"active":""}`)+" svelte-jyziao")&&d(l,"class",s)},d(e){e&&p(l)}}}function Ve(t){let l,s,e=t[2]-t[32]<=1&&t[32]-t[2]<=1&&ke(t);return{c(){e&&e.c(),l=ce()},l(i){e&&e.l(i),l=ce()},m(i,o){e&&e.m(i,o),$(i,l,o),s=!0},p(i,o){i[2]-i[32]<=1&&i[32]-i[2]<=1?e?(e.p(i,o),o[0]&4&&x(e,1)):(e=ke(i),e.c(),x(e,1),e.m(l.parentNode,l)):e&&(Se(),U(e,1,1,()=>{e=null}),ze())},i(i){s||(x(e),s=!0)},o(i){U(e),s=!1},d(i){i&&p(l),e&&e.d(i)}}}function Ge(t){let l,s,e=Q(t[0]),i=[];for(let r=0;r<e.length;r+=1)i[r]=Ve(be(t,e,r));const o=r=>U(i[r],1,1,()=>{i[r]=null});return{c(){l=I("div");for(let r=0;r<i.length;r+=1)i[r].c();this.h()},l(r){l=E(r,"DIV",{class:!0});var u=V(l);for(let n=0;n<i.length;n+=1)i[n].l(u);u.forEach(p),this.h()},h(){d(l,"class","bg-black w-screen h-screen")},m(r,u){$(r,l,u);for(let n=0;n<i.length;n+=1)i[n]&&i[n].m(l,null);s=!0},p(r,u){if(u[0]&511){e=Q(r[0]);let n;for(n=0;n<e.length;n+=1){const z=be(r,e,n);i[n]?(i[n].p(z,u),x(i[n],1)):(i[n]=Ve(z),i[n].c(),x(i[n],1),i[n].m(l,null))}for(Se(),n=e.length;n<i.length;n+=1)o(n);ze()}},i(r){if(!s){for(let u=0;u<e.length;u+=1)x(i[u]);s=!0}},o(r){i=i.filter(Boolean);for(let u=0;u<i.length;u+=1)U(i[u]);s=!1},d(r){r&&p(l),ae(i,r)}}}function re(t){const l=t.target;l.style.height="16px";let s=l.scrollHeight;s>96&&(s=96),l.style.height=`${s}px`}function Ze(t,l,s){let e;Ye(t,Xe,a=>s(10,e=a));let i=e.url.searchParams.get("type"),{posts:o=[]}=l,{dontMoveVetically:r=!1}=l,{keyboardY:u=0}=l,n=0,z=!0,j=0;async function S(){qe({pidx:`${n}`,midx:`${o[n].mediaIdx}`},{replaceState:!0,invalidateAll:!1})}function ee(a,h){if(n===0&&a>0){H=h;return}const c=Y.height;s(4,j=a>c?c:a<-c?-c:a)}function N(a){document.querySelectorAll("textarea").forEach(f=>{re({target:f})});let h=a.changedTouches[0].clientY-H;s(3,z=!1);const c=Y.height;h>c/2&&n!==0?(s(2,n-=1),S()):-h>c/2&&n!==o.length-1&&(s(2,n+=1),S(),o.length-2),s(4,j=0)}let P=0;function B(a){const h=Y.width;a=a>h?h:a<-h?-h:a,a=o[n].mediaIdx===0&&a>0||o[n].mediaIdx===o[n].media.length-1&&a<0?0:a,s(5,P=a)}function te(a){const h=Y.width;s(3,z=!1);let c=a.changedTouches[0].clientX-k;c>h/2&&o[n].mediaIdx!==0?s(0,o[n].mediaIdx-=1,o):-c>h/2&&o[n].mediaIdx!==o[n].media.length-1&&s(0,o[n].mediaIdx+=1,o),s(5,P=0)}let y=!1;Re.on("blockSwipeInViewer",a=>y=a);let k=-1,H=-1,v;function A(a){y||(v=void 0,ie.set(!0),k=a.touches[0].clientX,H=a.touches[0].clientY)}function R(a){if(y)return;let c=a.touches[0].clientX-k;const f=a.touches[0].clientY;let b=f-H;if(v===void 0&&Math.abs(b)-Math.abs(c)>=0&&(v="post"),!r&&v==="post")ee(b,f);else{if(v===void 0){const C=o[n].mediaIdx===0&&c>0,M=o[n].mediaIdx===o[n].media.length-1&&c<0,W=k<20||k>Y.width-20;C||M||W?v="else":v="media"}if(v==="else")return ie.set(!1);B(c)}}function X(a){if(!y)return v==="post"?N(a):v==="media"?te(a):ie.set(!1)}function se(){document.addEventListener("touchstart",A),document.addEventListener("touchmove",R),document.addEventListener("touchend",X)}function F(){document.removeEventListener("touchstart",A),document.removeEventListener("touchmove",R),document.removeEventListener("touchend",X)}function D(){s(3,z=!0),ie.set(!1)}let Y;function J(){s(6,Y={width:document.body.clientWidth,height:document.body.clientHeight})}function L(){const a=e.url.searchParams.get("pidx"),h=e.url.searchParams.get("midx"),c=Number(a);a&&c!==n&&o[c]?s(2,n=c):s(2,n=0);const f=Number(h);h&&f!==o[n].mediaIdx&&o[n].media[f]?s(0,o[n].mediaIdx=f,o):s(0,o[n].mediaIdx=0,o),S()}Me(async()=>{J(),window.addEventListener("resize",J),se(),L(),await Pe(),document.querySelectorAll("textarea").forEach(a=>{re({target:a})})}),Le(()=>{window.removeEventListener("resize",J),F()});function m(a,h){a[h].text=this.value,s(0,o)}const g=a=>{a.user_idx&&Te(`/users/${a.user_idx}`)},le=a=>{a.place_idx&&Oe(`/places/${a.place_idx}`)};return t.$$set=a=>{"posts"in a&&s(0,o=a.posts),"dontMoveVetically"in a&&s(9,r=a.dontMoveVetically),"keyboardY"in a&&s(1,u=a.keyboardY)},t.$$.update=()=>{t.$$.dirty[0]&1024&&e.url.searchParams.get("pidx")==0&&e.url.searchParams.get("midx")==0&&L()},[o,u,n,z,j,P,Y,i,D,r,e,m,g,le]}class lt extends Ae{constructor(l){super(),Ce(this,l,Ze,Ge,De,{posts:0,dontMoveVetically:9,keyboardY:1},null,[-1,-1])}}export{lt as V};
