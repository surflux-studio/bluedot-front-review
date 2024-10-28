import{s as Ae,e as I,l as U,c as S,b as g,m as G,f as h,o as d,i as B,h as p,n as ue,O as de,q as je,N as Te,u as $e,p as he,a as j,t as me,g as T,d as pe,E as F,L as se,z as _e,y as Q,Q as qe,j as ve,r as ze,R as ge}from"./scheduler.CX667Sq5.js";import{S as Re,i as Ye,t as $,g as He,f as Oe,b as J,c as we,a as ke,m as be,d as Ee}from"./index.DOULIwIP.js";import{e as K}from"./each.DWfQ8sIp.js";import{g as Ie}from"./entry.DAh9-b5r.js";import{s as le}from"./store.CIMeJGnc.js";import{a as ae,s as Se}from"./searchParams.D0JwMTav.js";import{C as Ne}from"./CircleImage.QstcIoHA.js";import{e as Xe}from"./emitter.E5P-NQ8u.js";function Be(s){let t,r,i,e,n,l,a,c,C,w;return{c(){t=I("div"),r=U("svg"),i=U("defs"),e=U("clipPath"),n=U("path"),a=U("image"),c=U("path"),this.h()},l(_){t=S(_,"DIV",{class:!0,style:!0});var k=g(t);r=G(k,"svg",{viewBox:!0,preserveAspectRatio:!0});var b=g(r);i=G(b,"defs",{});var y=g(i);e=G(y,"clipPath",{id:!0});var M=g(e);n=G(M,"path",{d:!0}),g(n).forEach(h),M.forEach(h),y.forEach(h),a=G(b,"image",{href:!0,width:!0,height:!0,preserveAspectRatio:!0,"clip-path":!0}),g(a).forEach(h),c=G(b,"path",{d:!0,fill:!0,stroke:!0,"stroke-width":!0}),g(c).forEach(h),b.forEach(h),k.forEach(h),this.h()},h(){d(n,"d",l=ne(s[3])),d(e,"id","waterdrop-clip"),d(a,"href",s[1]),d(a,"width","100%"),d(a,"height","100%"),d(a,"preserveAspectRatio","xMidYMid slice"),d(a,"clip-path","url(#waterdrop-clip)"),d(c,"d",C=ne(s[3])),d(c,"fill","none"),d(c,"stroke",s[2]),d(c,"stroke-width",s[3]),d(r,"viewBox","0 0 204 224.4"),d(r,"preserveAspectRatio","xMinYMin slice"),d(t,"class","waterdrop-container svelte-1ubdx7w"),d(t,"style",w=`width: ${s[0]}`)},m(_,k){B(_,t,k),p(t,r),p(r,i),p(i,e),p(e,n),p(r,a),p(r,c)},p(_,[k]){k&8&&l!==(l=ne(_[3]))&&d(n,"d",l),k&2&&d(a,"href",_[1]),k&8&&C!==(C=ne(_[3]))&&d(c,"d",C),k&4&&d(c,"stroke",_[2]),k&8&&d(c,"stroke-width",_[3]),k&1&&w!==(w=`width: ${_[0]}`)&&d(t,"style",w)},i:ue,o:ue,d(_){_&&h(t)}}}function ne(s){const t=s/2;return`
      M100,${220-t}
      L${32+t},${154-t}
      C${5+t},${128-t} ${-5+t},76 ${29+t/2},${36+t}
      C${63+t/2},${-5+t} ${137-t/2},${-5+t} ${171-t/2},${36+t}
      C${205-t},76 ${195-t},${128-t} ${168-t},${154-t}
      Z
    `}function Ze(s,t,r){let{width:i="204px"}=t,{src:e="https://bluedot-media.s3.ap-northeast-2.amazonaws.com/79535d66-857a-4302-b1be-c97e74c26590"}=t,{strokeColor:n="black"}=t,{strokeWidth:l="10"}=t;return s.$$set=a=>{"width"in a&&r(0,i=a.width),"src"in a&&r(1,e=a.src),"strokeColor"in a&&r(2,n=a.strokeColor),"strokeWidth"in a&&r(3,l=a.strokeWidth)},[i,e,n,l]}class xe extends Re{constructor(t){super(),Ye(this,t,Ze,Be,Ae,{width:0,src:1,strokeColor:2,strokeWidth:3})}}function ye(s,t,r){const i=s.slice();return i[26]=t[r],i[27]=t,i[28]=r,i}function Ve(s,t,r){const i=s.slice();return i[29]=t[r],i[31]=r,i}function De(s,t,r){const i=s.slice();return i[29]=t[r],i}function Ce(s){let t,r,i,e,n,l,a,c,C,w,_,k,b,y=s[26].display_name+"",M,V,L,W,Z,q,z=(s[26].place_name||"???????")+"",x,P,H,A,ee,ie,O=K(s[26].media),o=[];for(let u=0;u<O.length;u+=1)o[u]=Me(De(s,O,u));let f=s[26].media.length>=2&&Le(s);function v(){s[8].call(c,s[27],s[28])}_=new Ne({props:{src:s[26].profile_image_url,width:"2rem",strokeColor:"white",strokeWidth:"13"}});function R(){return s[9](s[26])}W=new xe({props:{src:`https://picsum.photos/50/50/?r=${s[26].place_idx}`,width:"2rem",strokeColor:"white",strokeWidth:"13"}});function re(){return s[10](s[26])}return{c(){t=I("div"),r=I("div"),i=I("div");for(let u=0;u<o.length;u+=1)o[u].c();n=j(),f&&f.c(),l=j(),a=I("div"),c=I("textarea"),C=j(),w=I("div"),we(_.$$.fragment),k=j(),b=I("div"),M=me(y),V=j(),L=I("div"),we(W.$$.fragment),Z=j(),q=I("div"),x=me(z),P=j(),this.h()},l(u){t=S(u,"DIV",{class:!0});var m=g(t);r=S(m,"DIV",{class:!0});var D=g(r);i=S(D,"DIV",{class:!0});var te=g(i);for(let oe=0;oe<o.length;oe+=1)o[oe].l(te);te.forEach(h),n=T(D),f&&f.l(D),D.forEach(h),l=T(m),a=S(m,"DIV",{class:!0});var Y=g(a);c=S(Y,"TEXTAREA",{class:!0,placeholder:!0}),g(c).forEach(h),C=T(Y),w=S(Y,"DIV",{class:!0});var N=g(w);ke(_.$$.fragment,N),k=T(N),b=S(N,"DIV",{});var E=g(b);M=pe(E,y),E.forEach(h),N.forEach(h),V=T(Y),L=S(Y,"DIV",{class:!0});var X=g(L);ke(W.$$.fragment,X),Z=T(X),q=S(X,"DIV",{});var fe=g(q);x=pe(fe,z),fe.forEach(h),X.forEach(h),Y.forEach(h),P=T(m),m.forEach(h),this.h()},h(){var u,m;d(i,"class",e=F(`carousel-track transition-transform ${s[2]?"duration-0":""}`)+" svelte-kcw4fp"),se(i,"transform",`translateX(${-(((u=s[5])==null?void 0:u.width)??document.body.clientWidth)*s[26].mediaIdx+s[4]}px)`),d(r,"class","carousel-container svelte-kcw4fp"),d(c,"class","w-full h-auto overflow-scroll py-0 px-1 mb-3 outline-0 focus:outline-none focus:outline-0 focus:ring-0 border-none bg-transparent text-sm text-shadow placeholder:text-white/75 placeholder:text-base box-content  svelte-kcw4fp"),c.readOnly=s[6]!=="post",d(c,"placeholder",s[6]==="post"?"✎ 텍스트 입력하기":""),d(w,"class","text-shadow text-center flex gap-2 justify-center items-center svelte-kcw4fp"),d(L,"class","text-shadow text-center flex gap-2 justify-center items-center svelte-kcw4fp"),d(a,"class","fixed bottom-0 w-full px-4 pb-16 text-white text-md flex flex-col items-start gap-2 z-[9999]"),d(t,"class",H=F(`w-screen h-screen gradient-overlay absolute content-center transition-transform ${s[2]?"duration-0":""}`)+" svelte-kcw4fp"),se(t,"top",`${s[28]*100}%`),se(t,"transform",`translateY(${-(((m=s[5])==null?void 0:m.height)??document.body.clientHeight)*s[1]+s[3]}px)`)},m(u,m){B(u,t,m),p(t,r),p(r,i);for(let D=0;D<o.length;D+=1)o[D]&&o[D].m(i,null);p(r,n),f&&f.m(r,null),p(t,l),p(t,a),p(a,c),_e(c,s[26].text),p(a,C),p(a,w),be(_,w,null),p(w,k),p(w,b),p(b,M),p(a,V),p(a,L),be(W,L,null),p(L,Z),p(L,q),p(q,x),p(t,P),A=!0,ee||(ie=[Q(i,"transitionend",s[7],{once:!0}),Q(c,"input",v),Q(c,"input",ce),Q(w,"click",R),Q(L,"click",re),Q(t,"transitionend",function(){qe(s[28]===s[1]?s[7]:void 0)&&(s[28]===s[1]?s[7]:void 0).apply(this,arguments)})],ee=!0)},p(u,m){var Y,N;if(s=u,m[0]&1){O=K(s[26].media);let E;for(E=0;E<O.length;E+=1){const X=De(s,O,E);o[E]?o[E].p(X,m):(o[E]=Me(X),o[E].c(),o[E].m(i,null))}for(;E<o.length;E+=1)o[E].d(1);o.length=O.length}(!A||m[0]&4&&e!==(e=F(`carousel-track transition-transform ${s[2]?"duration-0":""}`)+" svelte-kcw4fp"))&&d(i,"class",e),m[0]&49&&se(i,"transform",`translateX(${-(((Y=s[5])==null?void 0:Y.width)??document.body.clientWidth)*s[26].mediaIdx+s[4]}px)`),s[26].media.length>=2?f?f.p(s,m):(f=Le(s),f.c(),f.m(r,null)):f&&(f.d(1),f=null),m[0]&1&&_e(c,s[26].text);const D={};m[0]&1&&(D.src=s[26].profile_image_url),_.$set(D),(!A||m[0]&1)&&y!==(y=s[26].display_name+"")&&ve(M,y);const te={};m[0]&1&&(te.src=`https://picsum.photos/50/50/?r=${s[26].place_idx}`),W.$set(te),(!A||m[0]&1)&&z!==(z=(s[26].place_name||"???????")+"")&&ve(x,z),(!A||m[0]&4&&H!==(H=F(`w-screen h-screen gradient-overlay absolute content-center transition-transform ${s[2]?"duration-0":""}`)+" svelte-kcw4fp"))&&d(t,"class",H),m[0]&42&&se(t,"transform",`translateY(${-(((N=s[5])==null?void 0:N.height)??document.body.clientHeight)*s[1]+s[3]}px)`)},i(u){A||($(_.$$.fragment,u),$(W.$$.fragment,u),A=!0)},o(u){J(_.$$.fragment,u),J(W.$$.fragment,u),A=!1},d(u){u&&h(t),de(o,u),f&&f.d(),Ee(_),Ee(W),ee=!1,ze(ie)}}}function Me(s){let t,r,i,e,n;return{c(){t=I("div"),r=I("img"),n=j(),this.h()},l(l){t=S(l,"DIV",{class:!0});var a=g(t);r=S(a,"IMG",{src:!0,alt:!0,class:!0}),n=T(a),a.forEach(h),this.h()},h(){ge(r.src,i=s[29])||d(r,"src",i),d(r,"alt",e=s[26].place_name),d(r,"class","w-screen h-screen object-contain"),d(t,"class","carousel-slide svelte-kcw4fp")},m(l,a){B(l,t,a),p(t,r),p(t,n)},p(l,a){a[0]&1&&!ge(r.src,i=l[29])&&d(r,"src",i),a[0]&1&&e!==(e=l[26].place_name)&&d(r,"alt",e)},d(l){l&&h(t)}}}function Le(s){let t,r=K(s[26].media),i=[];for(let e=0;e<r.length;e+=1)i[e]=We(Ve(s,r,e));return{c(){t=I("div");for(let e=0;e<i.length;e+=1)i[e].c();this.h()},l(e){t=S(e,"DIV",{class:!0});var n=g(t);for(let l=0;l<i.length;l+=1)i[l].l(n);n.forEach(h),this.h()},h(){d(t,"class","carousel-nav svelte-kcw4fp")},m(e,n){B(e,t,n);for(let l=0;l<i.length;l+=1)i[l]&&i[l].m(t,null)},p(e,n){if(n[0]&3){r=K(e[26].media);let l;for(l=0;l<r.length;l+=1){const a=Ve(e,r,l);i[l]?i[l].p(a,n):(i[l]=We(a),i[l].c(),i[l].m(t,null))}for(;l<i.length;l+=1)i[l].d(1);i.length=r.length}},d(e){e&&h(t),de(i,e)}}}function We(s){let t,r;return{c(){t=I("span"),this.h()},l(i){t=S(i,"SPAN",{class:!0}),g(t).forEach(h),this.h()},h(){d(t,"class",r=F(`carousel-dot ${s[0][s[1]].mediaIdx===s[31]?"active":""}`)+" svelte-kcw4fp")},m(i,e){B(i,t,e)},p(i,e){e[0]&3&&r!==(r=F(`carousel-dot ${i[0][i[1]].mediaIdx===i[31]?"active":""}`)+" svelte-kcw4fp")&&d(t,"class",r)},d(i){i&&h(t)}}}function Pe(s){let t,r,i=s[1]-s[28]<=1&&s[28]-s[1]<=1&&Ce(s);return{c(){i&&i.c(),t=he()},l(e){i&&i.l(e),t=he()},m(e,n){i&&i.m(e,n),B(e,t,n),r=!0},p(e,n){e[1]-e[28]<=1&&e[28]-e[1]<=1?i?(i.p(e,n),n[0]&2&&$(i,1)):(i=Ce(e),i.c(),$(i,1),i.m(t.parentNode,t)):i&&(He(),J(i,1,1,()=>{i=null}),Oe())},i(e){r||($(i),r=!0)},o(e){J(i),r=!1},d(e){e&&h(t),i&&i.d(e)}}}function Ue(s){let t,r,i=K(s[0]),e=[];for(let l=0;l<i.length;l+=1)e[l]=Pe(ye(s,i,l));const n=l=>J(e[l],1,1,()=>{e[l]=null});return{c(){t=I("div");for(let l=0;l<e.length;l+=1)e[l].c();this.h()},l(l){t=S(l,"DIV",{class:!0});var a=g(t);for(let c=0;c<e.length;c+=1)e[c].l(a);a.forEach(h),this.h()},h(){d(t,"class","bg-black w-screen h-screen")},m(l,a){B(l,t,a);for(let c=0;c<e.length;c+=1)e[c]&&e[c].m(t,null);r=!0},p(l,a){if(a[0]&255){i=K(l[0]);let c;for(c=0;c<i.length;c+=1){const C=ye(l,i,c);e[c]?(e[c].p(C,a),$(e[c],1)):(e[c]=Pe(C),e[c].c(),$(e[c],1),e[c].m(t,null))}for(He(),c=i.length;c<e.length;c+=1)n(c);Oe()}},i(l){if(!r){for(let a=0;a<i.length;a+=1)$(e[a]);r=!0}},o(l){e=e.filter(Boolean);for(let a=0;a<e.length;a+=1)J(e[a]);r=!1},d(l){l&&h(t),de(e,l)}}}function ce(s){const t=s.target;t.style.height="16px";let r=t.scrollHeight;r>96&&(r=96),t.style.height=`${r}px`}function Ge(s,t,r){let i=ae("type"),{posts:e=[]}=t,n=0,l=!0,a=0;function c(o,f){if(n===0&&o>0){M=f;return}const v=P.height;r(3,a=o>v?v:o<-v?-v:o)}function C(o){document.querySelectorAll("textarea").forEach(R=>{ce({target:R})});let f=o.changedTouches[0].clientY-M;r(2,l=!1);const v=P.height;f>v/2&&n!==0?r(1,n-=1):-f>v/2&&n!==e.length-1&&(r(1,n+=1),e.length-2),r(3,a=0)}let w=0;function _(o){const f=P.width;o=o>f?f:o<-f?-f:o,o=e[n].mediaIdx===0&&o>0||e[n].mediaIdx===e[n].media.length-1&&o<0?0:o,r(4,w=o)}function k(o){const f=P.width;r(2,l=!1);let v=o.changedTouches[0].clientX-y;v>f/2&&e[n].mediaIdx!==0?r(0,e[n].mediaIdx-=1,e):-v>f/2&&e[n].mediaIdx!==e[n].media.length-1&&r(0,e[n].mediaIdx+=1,e),r(4,w=0)}let b=!1;Xe.on("blockSwipeInViewer",o=>b=o);let y=-1,M=-1,V;function L(o){b||(V=void 0,le.set(!0),y=o.touches[0].clientX,M=o.touches[0].clientY)}function W(o){if(b)return;let v=o.touches[0].clientX-y;const R=o.touches[0].clientY;let re=R-M;if(V===void 0&&Math.abs(re)-Math.abs(v)>=0&&(V="post"),V==="post")c(re,R);else{if(V===void 0){const u=e[n].mediaIdx===0&&v>0,m=e[n].mediaIdx===e[n].media.length-1&&v<0,D=y<20||y>P.width-20;u||m||D?V="else":V="media"}if(V==="else")return le.set(!1);_(v)}}function Z(o){if(!b)return V==="post"?C(o):V==="media"?k(o):le.set(!1)}function q(){document.addEventListener("touchstart",L),document.addEventListener("touchmove",W),document.addEventListener("touchend",Z)}function z(){document.removeEventListener("touchstart",L),document.removeEventListener("touchmove",W),document.removeEventListener("touchend",Z)}function x(){r(2,l=!0),le.set(!1)}let P;function H(){r(5,P={width:document.body.clientWidth,height:document.body.clientHeight})}function A(){const o=ae("pidx"),f=ae("midx"),v=Number(o);o&&v!==n&&e[v]?r(1,n=v):r(1,n=0);const R=Number(f);f&&R!==e[n].mediaIdx&&e[n].media[R]?r(0,e[n].mediaIdx=R,e):r(0,e[n].mediaIdx=0,e),Se({pidx:`${n}`,midx:`${e[n].mediaIdx}`})}je(async()=>{H(),window.addEventListener("resize",H),q(),A(),await Te(),document.querySelectorAll("textarea").forEach(o=>{ce({target:o})})}),$e(()=>{window.removeEventListener("resize",H),z()});function ee(o,f){o[f].text=this.value,r(0,e)}const ie=o=>{o.user_idx&&Ie(`/users/${o.user_idx}`)},O=o=>{o.place_idx&&Ie(`/places/${o.place_idx}`)};return s.$$set=o=>{"posts"in o&&r(0,e=o.posts)},s.$$.update=()=>{s.$$.dirty[0]&3&&(n!==0||e[n].mediaIdx!==0)&&Se({pidx:`${n}`,midx:`${e[n].mediaIdx}`})},[e,n,l,a,w,P,i,x,ee,ie,O]}class rt extends Re{constructor(t){super(),Ye(this,t,Ge,Ue,Ae,{posts:0},null,[-1,-1])}}export{rt as V};
