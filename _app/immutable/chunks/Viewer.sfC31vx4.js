import{s as Ce,e as y,m as G,c as S,b as w,p as J,f as h,l as u,i as Z,h as p,n as he,N as ue,o as Ye,O as He,w as Re,q as fe,a as O,t as me,g as T,d as pe,z as Q,P as ie,A as _e,v as K,B as Oe,j as ve,r as Te,F as ge}from"./scheduler.DVlEcQ2N.js";import{S as Me,i as We,t as q,g as Le,e as Ae,b as x,c as we,a as ke,m as be,d as Ee}from"./index.sqOQyxVq.js";import{e as ee}from"./each.CmPsRZo8.js";import{g as qe}from"./entry.CsoEoU9b.js";import{s as le}from"./store.CW-NvuIB.js";import{a as ae,g as Ne,s as Be}from"./searchParams.DFWRVFRJ.js";/* empty css                                             */import{C as Xe}from"./CircleImage.BXXm6Wdk.js";import{e as $e}from"./emitter.E5P-NQ8u.js";function Ze(i){let t,r,s,e,a,l,o,c,z,E;return{c(){t=y("div"),r=G("svg"),s=G("defs"),e=G("clipPath"),a=G("path"),o=G("image"),c=G("path"),this.h()},l(m){t=S(m,"DIV",{class:!0,style:!0});var b=w(t);r=J(b,"svg",{viewBox:!0,preserveAspectRatio:!0});var P=w(r);s=J(P,"defs",{});var V=w(s);e=J(V,"clipPath",{id:!0});var D=w(e);a=J(D,"path",{d:!0}),w(a).forEach(h),D.forEach(h),V.forEach(h),o=J(P,"image",{href:!0,width:!0,height:!0,preserveAspectRatio:!0,"clip-path":!0}),w(o).forEach(h),c=J(P,"path",{d:!0,fill:!0,stroke:!0,"stroke-width":!0}),w(c).forEach(h),P.forEach(h),b.forEach(h),this.h()},h(){u(a,"d",l=oe(i[3])),u(e,"id","waterdrop-clip"),u(o,"href",i[1]),u(o,"width","100%"),u(o,"height","100%"),u(o,"preserveAspectRatio","xMidYMid slice"),u(o,"clip-path","url(#waterdrop-clip)"),u(c,"d",z=oe(i[3])),u(c,"fill","none"),u(c,"stroke",i[2]),u(c,"stroke-width",i[3]),u(r,"viewBox","0 0 204 224.4"),u(r,"preserveAspectRatio","xMinYMin slice"),u(t,"class","waterdrop-container svelte-1ubdx7w"),u(t,"style",E=`width: ${i[0]}`)},m(m,b){Z(m,t,b),p(t,r),p(r,s),p(s,e),p(e,a),p(r,o),p(r,c)},p(m,[b]){b&8&&l!==(l=oe(m[3]))&&u(a,"d",l),b&2&&u(o,"href",m[1]),b&8&&z!==(z=oe(m[3]))&&u(c,"d",z),b&4&&u(c,"stroke",m[2]),b&8&&u(c,"stroke-width",m[3]),b&1&&E!==(E=`width: ${m[0]}`)&&u(t,"style",E)},i:he,o:he,d(m){m&&h(t)}}}function oe(i){const t=i/2;return`
      M100,${220-t}
      L${32+t},${154-t}
      C${5+t},${128-t} ${-5+t},76 ${29+t/2},${36+t}
      C${63+t/2},${-5+t} ${137-t/2},${-5+t} ${171-t/2},${36+t}
      C${205-t},76 ${195-t},${128-t} ${168-t},${154-t}
      Z
    `}function Ue(i,t,r){let{width:s="204px"}=t,{src:e="https://bluedot-media.s3.ap-northeast-2.amazonaws.com/79535d66-857a-4302-b1be-c97e74c26590"}=t,{strokeColor:a="black"}=t,{strokeWidth:l="10"}=t;return i.$$set=o=>{"width"in o&&r(0,s=o.width),"src"in o&&r(1,e=o.src),"strokeColor"in o&&r(2,a=o.strokeColor),"strokeWidth"in o&&r(3,l=o.strokeWidth)},[s,e,a,l]}class Fe extends Me{constructor(t){super(),We(this,t,Ue,Ze,Ce,{width:0,src:1,strokeColor:2,strokeWidth:3})}}function Ie(i,t,r){const s=i.slice();return s[27]=t[r],s[28]=t,s[29]=r,s}function ye(i,t,r){const s=i.slice();return s[30]=t[r],s[32]=r,s}function Se(i,t,r){const s=i.slice();return s[30]=t[r],s}function je(i){let t,r,s,e,a,l,o,c,z,E,m,b,P,V=i[27].display_name+"",D,Y,v,W,U,H,N=(i[27].place_name||"???????")+"",F,te,C,M,se,re,R=ee(i[27].media),k=[];for(let d=0;d<R.length;d+=1)k[d]=ze(Se(i,R,d));let n=i[27].media.length>=2&&Ve(i);function g(){i[8].call(c,i[28],i[29])}m=new Xe({props:{src:i[27].profile_image_url,width:"2rem",strokeColor:"white",strokeWidth:"13"}});function _(){return i[9](i[27])}W=new Fe({props:{src:`https://picsum.photos/50/50/?r=${i[27].place_idx}`,width:"2rem",strokeColor:"white",strokeWidth:"13"}});function L(){return i[10](i[27])}return{c(){t=y("div"),r=y("div"),s=y("div");for(let d=0;d<k.length;d+=1)k[d].c();a=O(),n&&n.c(),l=O(),o=y("div"),c=y("textarea"),z=O(),E=y("div"),we(m.$$.fragment),b=O(),P=y("div"),D=me(V),Y=O(),v=y("div"),we(W.$$.fragment),U=O(),H=y("div"),F=me(N),te=O(),this.h()},l(d){t=S(d,"DIV",{class:!0});var f=w(t);r=S(f,"DIV",{class:!0});var j=w(r);s=S(j,"DIV",{class:!0});var B=w(s);for(let ne=0;ne<k.length;ne+=1)k[ne].l(B);B.forEach(h),a=T(j),n&&n.l(j),j.forEach(h),l=T(f),o=S(f,"DIV",{class:!0});var A=w(o);c=S(A,"TEXTAREA",{class:!0,placeholder:!0}),w(c).forEach(h),z=T(A),E=S(A,"DIV",{class:!0});var X=w(E);ke(m.$$.fragment,X),b=T(X),P=S(X,"DIV",{});var I=w(P);D=pe(I,V),I.forEach(h),X.forEach(h),Y=T(A),v=S(A,"DIV",{class:!0});var $=w(v);ke(W.$$.fragment,$),U=T($),H=S($,"DIV",{});var de=w(H);F=pe(de,N),de.forEach(h),$.forEach(h),A.forEach(h),te=T(f),f.forEach(h),this.h()},h(){var d,f;u(s,"class",e=Q(`carousel-track transition-transform ${i[2]?"duration-0":""}`)+" svelte-jyziao"),ie(s,"transform",`translateX(${-(((d=i[5])==null?void 0:d.width)??document.body.clientWidth)*i[27].mediaIdx+i[4]}px)`),u(r,"class","carousel-container svelte-jyziao"),u(c,"class","w-full h-auto overflow-scroll py-0 px-1 mb-3 outline-0 focus:outline-none focus:outline-0 focus:ring-0 border-none bg-transparent text-sm text-shadow placeholder:text-white/75 placeholder:text-base box-content  svelte-jyziao"),c.readOnly=i[6]!=="post",u(c,"placeholder",i[6]==="post"?"✎ 텍스트 입력하기":""),u(E,"class","text-shadow text-center flex gap-2 justify-center items-center svelte-jyziao"),u(v,"class","text-shadow text-center flex gap-2 justify-center items-center svelte-jyziao"),u(o,"class","fixed bottom-0 w-full px-4 pb-24 text-white text-md flex flex-col items-start gap-2 z-[9999]"),u(t,"class",C=Q(`w-screen h-screen gradient-overlay absolute content-center transition-transform ${i[2]?"duration-0":""}`)+" svelte-jyziao"),ie(t,"top",`${i[29]*100}%`),ie(t,"transform",`translateY(${-(((f=i[5])==null?void 0:f.height)??document.body.clientHeight)*i[1]+i[3]}px)`)},m(d,f){Z(d,t,f),p(t,r),p(r,s);for(let j=0;j<k.length;j+=1)k[j]&&k[j].m(s,null);p(r,a),n&&n.m(r,null),p(t,l),p(t,o),p(o,c),_e(c,i[27].text),p(o,z),p(o,E),be(m,E,null),p(E,b),p(E,P),p(P,D),p(o,Y),p(o,v),be(W,v,null),p(v,U),p(v,H),p(H,F),p(t,te),M=!0,se||(re=[K(s,"transitionend",i[7],{once:!0}),K(c,"input",g),K(c,"input",ce),K(E,"click",_),K(v,"click",L),K(t,"transitionend",function(){Oe(i[29]===i[1]?i[7]:void 0)&&(i[29]===i[1]?i[7]:void 0).apply(this,arguments)})],se=!0)},p(d,f){var A,X;if(i=d,f[0]&1){R=ee(i[27].media);let I;for(I=0;I<R.length;I+=1){const $=Se(i,R,I);k[I]?k[I].p($,f):(k[I]=ze($),k[I].c(),k[I].m(s,null))}for(;I<k.length;I+=1)k[I].d(1);k.length=R.length}(!M||f[0]&4&&e!==(e=Q(`carousel-track transition-transform ${i[2]?"duration-0":""}`)+" svelte-jyziao"))&&u(s,"class",e),f[0]&49&&ie(s,"transform",`translateX(${-(((A=i[5])==null?void 0:A.width)??document.body.clientWidth)*i[27].mediaIdx+i[4]}px)`),i[27].media.length>=2?n?n.p(i,f):(n=Ve(i),n.c(),n.m(r,null)):n&&(n.d(1),n=null),f[0]&1&&_e(c,i[27].text);const j={};f[0]&1&&(j.src=i[27].profile_image_url),m.$set(j),(!M||f[0]&1)&&V!==(V=i[27].display_name+"")&&ve(D,V);const B={};f[0]&1&&(B.src=`https://picsum.photos/50/50/?r=${i[27].place_idx}`),W.$set(B),(!M||f[0]&1)&&N!==(N=(i[27].place_name||"???????")+"")&&ve(F,N),(!M||f[0]&4&&C!==(C=Q(`w-screen h-screen gradient-overlay absolute content-center transition-transform ${i[2]?"duration-0":""}`)+" svelte-jyziao"))&&u(t,"class",C),f[0]&42&&ie(t,"transform",`translateY(${-(((X=i[5])==null?void 0:X.height)??document.body.clientHeight)*i[1]+i[3]}px)`)},i(d){M||(q(m.$$.fragment,d),q(W.$$.fragment,d),M=!0)},o(d){x(m.$$.fragment,d),x(W.$$.fragment,d),M=!1},d(d){d&&h(t),ue(k,d),n&&n.d(),Ee(m),Ee(W),se=!1,Te(re)}}}function ze(i){let t,r,s,e,a;return{c(){t=y("div"),r=y("img"),a=O(),this.h()},l(l){t=S(l,"DIV",{class:!0});var o=w(t);r=S(o,"IMG",{src:!0,alt:!0,class:!0}),a=T(o),o.forEach(h),this.h()},h(){ge(r.src,s=i[30])||u(r,"src",s),u(r,"alt",e=i[27].place_name),u(r,"class","w-screen h-screen object-contain"),u(t,"class","carousel-slide svelte-jyziao")},m(l,o){Z(l,t,o),p(t,r),p(t,a)},p(l,o){o[0]&1&&!ge(r.src,s=l[30])&&u(r,"src",s),o[0]&1&&e!==(e=l[27].place_name)&&u(r,"alt",e)},d(l){l&&h(t)}}}function Ve(i){let t,r=ee(i[27].media),s=[];for(let e=0;e<r.length;e+=1)s[e]=De(ye(i,r,e));return{c(){t=y("div");for(let e=0;e<s.length;e+=1)s[e].c();this.h()},l(e){t=S(e,"DIV",{class:!0});var a=w(t);for(let l=0;l<s.length;l+=1)s[l].l(a);a.forEach(h),this.h()},h(){u(t,"class","carousel-nav svelte-jyziao")},m(e,a){Z(e,t,a);for(let l=0;l<s.length;l+=1)s[l]&&s[l].m(t,null)},p(e,a){if(a[0]&3){r=ee(e[27].media);let l;for(l=0;l<r.length;l+=1){const o=ye(e,r,l);s[l]?s[l].p(o,a):(s[l]=De(o),s[l].c(),s[l].m(t,null))}for(;l<s.length;l+=1)s[l].d(1);s.length=r.length}},d(e){e&&h(t),ue(s,e)}}}function De(i){let t,r;return{c(){t=y("span"),this.h()},l(s){t=S(s,"SPAN",{class:!0}),w(t).forEach(h),this.h()},h(){u(t,"class",r=Q(`carousel-dot ${i[0][i[1]].mediaIdx===i[32]?"active":""}`)+" svelte-jyziao")},m(s,e){Z(s,t,e)},p(s,e){e[0]&3&&r!==(r=Q(`carousel-dot ${s[0][s[1]].mediaIdx===s[32]?"active":""}`)+" svelte-jyziao")&&u(t,"class",r)},d(s){s&&h(t)}}}function Pe(i){let t,r,s=i[1]-i[29]<=1&&i[29]-i[1]<=1&&je(i);return{c(){s&&s.c(),t=fe()},l(e){s&&s.l(e),t=fe()},m(e,a){s&&s.m(e,a),Z(e,t,a),r=!0},p(e,a){e[1]-e[29]<=1&&e[29]-e[1]<=1?s?(s.p(e,a),a[0]&2&&q(s,1)):(s=je(e),s.c(),q(s,1),s.m(t.parentNode,t)):s&&(Le(),x(s,1,1,()=>{s=null}),Ae())},i(e){r||(q(s),r=!0)},o(e){x(s),r=!1},d(e){e&&h(t),s&&s.d(e)}}}function Ge(i){let t,r,s=ee(i[0]),e=[];for(let l=0;l<s.length;l+=1)e[l]=Pe(Ie(i,s,l));const a=l=>x(e[l],1,1,()=>{e[l]=null});return{c(){t=y("div");for(let l=0;l<e.length;l+=1)e[l].c();this.h()},l(l){t=S(l,"DIV",{class:!0});var o=w(t);for(let c=0;c<e.length;c+=1)e[c].l(o);o.forEach(h),this.h()},h(){u(t,"class","bg-black w-screen h-screen")},m(l,o){Z(l,t,o);for(let c=0;c<e.length;c+=1)e[c]&&e[c].m(t,null);r=!0},p(l,o){if(o[0]&255){s=ee(l[0]);let c;for(c=0;c<s.length;c+=1){const z=Ie(l,s,c);e[c]?(e[c].p(z,o),q(e[c],1)):(e[c]=Pe(z),e[c].c(),q(e[c],1),e[c].m(t,null))}for(Le(),c=s.length;c<e.length;c+=1)a(c);Ae()}},i(l){if(!r){for(let o=0;o<s.length;o+=1)q(e[o]);r=!0}},o(l){e=e.filter(Boolean);for(let o=0;o<e.length;o+=1)x(e[o]);r=!1},d(l){l&&h(t),ue(e,l)}}}function ce(i){const t=i.target;t.style.height="16px";let r=t.scrollHeight;r>96&&(r=96),t.style.height=`${r}px`}function Je(i,t,r){let s=ae("type"),{posts:e=[]}=t,a=0,l=!0,o=0;function c(){Be({pidx:`${a}`,midx:`${e[a].mediaIdx}`})}function z(n,g){if(a===0&&n>0){Y=g;return}const _=C.height;r(3,o=n>_?_:n<-_?-_:n)}function E(n){document.querySelectorAll("textarea").forEach(L=>{ce({target:L})});let g=n.changedTouches[0].clientY-Y;r(2,l=!1);const _=C.height;g>_/2&&a!==0?(r(1,a-=1),c()):-g>_/2&&a!==e.length-1&&(r(1,a+=1),c(),e.length-2),r(3,o=0)}let m=0;function b(n){const g=C.width;n=n>g?g:n<-g?-g:n,n=e[a].mediaIdx===0&&n>0||e[a].mediaIdx===e[a].media.length-1&&n<0?0:n,r(4,m=n)}function P(n){const g=C.width;r(2,l=!1);let _=n.changedTouches[0].clientX-D;_>g/2&&e[a].mediaIdx!==0?r(0,e[a].mediaIdx-=1,e):-_>g/2&&e[a].mediaIdx!==e[a].media.length-1&&r(0,e[a].mediaIdx+=1,e),r(4,m=0)}let V=!1;$e.on("blockSwipeInViewer",n=>V=n);let D=-1,Y=-1,v;function W(n){V||(v=void 0,le.set(!0),D=n.touches[0].clientX,Y=n.touches[0].clientY)}function U(n){if(V)return;let _=n.touches[0].clientX-D;const L=n.touches[0].clientY;let d=L-Y;if(v===void 0&&Math.abs(d)-Math.abs(_)>=0&&(v="post"),v==="post")z(d,L);else{if(v===void 0){const f=e[a].mediaIdx===0&&_>0,j=e[a].mediaIdx===e[a].media.length-1&&_<0,B=D<20||D>C.width-20;f||j||B?v="else":v="media"}if(v==="else")return le.set(!1);b(_)}}function H(n){if(!V)return v==="post"?E(n):v==="media"?P(n):le.set(!1)}function N(){document.addEventListener("touchstart",W),document.addEventListener("touchmove",U),document.addEventListener("touchend",H)}function F(){document.removeEventListener("touchstart",W),document.removeEventListener("touchmove",U),document.removeEventListener("touchend",H)}function te(){r(2,l=!0),le.set(!1)}let C;function M(){r(5,C={width:document.body.clientWidth,height:document.body.clientHeight})}function se(){const n=ae("pidx"),g=ae("midx"),_=Number(n);n&&_!==a&&e[_]?r(1,a=_):r(1,a=0);const L=Number(g);g&&L!==e[a].mediaIdx&&e[a].media[L]?r(0,e[a].mediaIdx=L,e):r(0,e[a].mediaIdx=0,e),c()}Ye(async()=>{M(),window.addEventListener("resize",M),N(),se(),await He(),document.querySelectorAll("textarea").forEach(n=>{ce({target:n})})}),Re(()=>{window.removeEventListener("resize",M),F()});function re(n,g){n[g].text=this.value,r(0,e)}const R=n=>{n.user_idx&&Ne(`/users/${n.user_idx}`)},k=n=>{n.place_idx&&qe(`/places/${n.place_idx}`)};return i.$$set=n=>{"posts"in n&&r(0,e=n.posts)},[e,a,l,o,m,C,s,te,re,R,k]}class ot extends Me{constructor(t){super(),We(this,t,Je,Ge,Ce,{posts:0},null,[-1,-1])}}export{ot as V};
