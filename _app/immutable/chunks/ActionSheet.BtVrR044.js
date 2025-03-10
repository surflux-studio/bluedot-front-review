import{X as Ee,R as ht,s as qe,q as Me,r as Se,b as L,f as y,v as C,i as Be,h as T,n as Ce,m as Fe,e as j,a as me,c as K,g as _e,M as v,J as ae,C as $,y as W,O as fe,H as gt,G as Ct,u as Te,o as Oe,p as Le,F as mt,k as _t,w as bt,B as Bt,W as pt,Q as Dt,I as Pe,z as Ht}from"./scheduler.CbwPF6wx.js";import{n as wt,l as vt,S as Ne,i as Ge,t as O,g as Ie,a as q,d as Ye,k as ze,c as yt,b as kt,m as At,e as Et}from"./index.DiLw73rm.js";import{f as We,c as Mt}from"./index.98TglEsW.js";import{w as St}from"./entry.t8cWHZkX.js";import{r as ce}from"./units.BJZU6p1c.js";import{C as Ft}from"./sign.D_LL5_6B.js";import{K as de}from"./ActionSheet.svelte_svelte_type_style_lang.DqG8tL5n.js";function Ve(e){return Object.prototype.toString.call(e)==="[object Date]"}function be(e,t){if(e===t||e!==e)return()=>e;const n=typeof e;if(n!==typeof t||Array.isArray(e)!==Array.isArray(t))throw new Error("Cannot interpolate values of different type");if(Array.isArray(e)){const s=t.map((i,r)=>be(e[r],i));return i=>s.map(r=>r(i))}if(n==="object"){if(!e||!t)throw new Error("Object cannot be null");if(Ve(e)&&Ve(t)){e=e.getTime(),t=t.getTime();const r=t-e;return l=>new Date(e+l*r)}const s=Object.keys(t),i={};return s.forEach(r=>{i[r]=be(e[r],t[r])}),r=>{const l={};return s.forEach(d=>{l[d]=i[d](r)}),l}}if(n==="number"){const s=t-e;return i=>e+i*s}throw new Error(`Cannot interpolate ${n} values`)}function Tt(e,t={}){const n=St(e);let s,i=e;function r(l,d){if(e==null)return n.set(e=l),Promise.resolve();i=l;let B=s,b=!1,{delay:P=0,duration:p=400,easing:S=ht,interpolate:k=be}=Ee(Ee({},t),d);if(p===0)return B&&(B.abort(),B=null),n.set(e=i),Promise.resolve();const a=wt()+P;let A;return s=vt(E=>{if(E<a)return!0;b||(A=k(e,l),typeof p=="function"&&(p=p(e,l)),b=!0),B&&(B.abort(),B=null);const f=E-a;return f>p?(n.set(e=l),!1):(n.set(e=A(S(f/p))),!0)}),s.promise}return{set:r,update:(l,d)=>r(l(i,e),d),subscribe:n.subscribe}}function Ot(e){let t,n;return{c(){t=Me("svg"),n=Me("path"),this.h()},l(s){t=Se(s,"svg",{width:!0,height:!0,viewBox:!0,fill:!0,xmlns:!0});var i=L(t);n=Se(i,"path",{id:!0,d:!0,stroke:!0,"stroke-width":!0,"stroke-linecap":!0}),L(n).forEach(y),i.forEach(y),this.h()},h(){C(n,"id","Vector 27674"),C(n,"d","M2 2H33"),C(n,"stroke","#DADDE0"),C(n,"stroke-width","3"),C(n,"stroke-linecap","round"),C(t,"width","35"),C(t,"height","4"),C(t,"viewBox","0 0 35 4"),C(t,"fill","none"),C(t,"xmlns","http://www.w3.org/2000/svg")},m(s,i){Be(s,t,i),T(t,n)},p:Ce,i:Ce,o:Ce,d(s){s&&y(t)}}}class Lt extends Ne{constructor(t){super(),Ge(this,t,null,Ot,qe,{})}}const Pt=e=>({}),Re=e=>({});function je(e){let t,n,s,i,r;return{c(){t=j("div"),this.h()},l(l){t=K(l,"DIV",{class:!0}),L(t).forEach(y),this.h()},h(){C(t,"class","fixed inset-0 bg-black/20 pointer-events-auto")},m(l,d){Be(l,t,d),s=!0,i||(r=W(t,"click",e[29]),i=!0)},p(l,d){e=l},i(l){s||(l&&pt(()=>{s&&(n||(n=ze(t,We,{duration:200,easing:e[10]},!0)),n.run(1))}),s=!0)},o(l){l&&(n||(n=ze(t,We,{duration:200,easing:e[10]},!1)),n.run(0)),s=!1},d(l){l&&y(t),l&&n&&n.end(),i=!1,r()}}}function Ke(e){let t,n;return t=new Lt({}),{c(){yt(t.$$.fragment)},l(s){kt(t.$$.fragment,s)},m(s,i){At(t,s,i),n=!0},i(s){n||(O(t.$$.fragment,s),n=!0)},o(s){q(t.$$.fragment,s),n=!1},d(s){Et(t,s)}}}function It(e){let t,n,s,i,r,l,d,B,b,P,p,S,k,a,A,E,f=e[0]&&je(e),c=!e[3]&&Ke();const D=e[26].default,w=Fe(D,e,e[25],null),I=e[26].footer,H=Fe(I,e,e[25],Re);return{c(){t=j("div"),f&&f.c(),n=me(),s=j("div"),i=j("div"),r=j("div"),c&&c.c(),l=me(),d=j("div"),w&&w.c(),P=me(),p=j("div"),H&&H.c(),this.h()},l(h){t=K(h,"DIV",{class:!0});var u=L(t);f&&f.l(u),n=_e(u),s=K(u,"DIV",{id:!0,class:!0,style:!0});var N=L(s);i=K(N,"DIV",{class:!0,style:!0});var V=L(i);r=K(V,"DIV",{class:!0});var G=L(r);c&&c.l(G),G.forEach(y),l=_e(V),d=K(V,"DIV",{class:!0});var M=L(d);w&&w.l(M),M.forEach(y),V.forEach(y),N.forEach(y),P=_e(u),p=K(u,"DIV",{class:!0,style:!0});var J=L(p);H&&H.l(J),J.forEach(y),u.forEach(y),this.h()},h(){C(r,"class","flex justify-center items-center h-[1.625rem]"),C(d,"class","content overflow-y-auto transition-transform duration-200 ios-scroll-fix svelte-1vussu5"),v(d,"h-full",e[6]),v(d,"touch-pan-y",!e[4]),C(i,"class",B=ae(`
        sheet absolute 
        min-h-full h-[120vh] w-full ${e[2]}
        rounded-t-[1.25rem]  
        flex flex-col 
        shadow-[0px_7px_16px_rgba(0,0,0,0.08)] backdrop-blur-[10px]
      `)+" svelte-1vussu5"),C(i,"style",b=`
        transform: translateY(${e[9]}px);
      `),C(s,"id","action-sheet--max"),C(s,"class","fixed left-0 right-0 overflow-visible"),$(s,"top",e[11]+"px"),$(s,"height",e[1]+"px"),v(s,"pointer-events-auto",e[0]),v(s,"pointer-events-none",!e[0]),C(p,"class",S="fixed w-full bottom-0 "+e[2]+" svelte-1vussu5"),$(p,"padding-bottom",e[8]+"px"),C(t,"class",k=ae(`fixed inset-0 ${e[5]?"z-50":"z-[60]"}`)+" svelte-1vussu5"),v(t,"pointer-events-none",!e[0]),v(t,"invisible",!e[0])},m(h,u){Be(h,t,u),f&&f.m(t,null),T(t,n),T(t,s),T(s,i),T(i,r),c&&c.m(r,null),T(i,l),T(i,d),w&&w.m(d,null),e[30](d),T(t,P),T(t,p),H&&H.m(p,null),a=!0,A||(E=[W(i,"touchstart",function(){fe(!e[4]&&e[13])&&(!e[4]&&e[13]).apply(this,arguments)},!0),W(i,"touchmove",function(){fe(!e[4]&&e[14])&&(!e[4]&&e[14]).apply(this,arguments)},!0),W(i,"touchend",function(){fe(!e[4]&&e[15])&&(!e[4]&&e[15]).apply(this,arguments)},!0),W(i,"mousedown",function(){fe(!e[4]&&e[16])&&(!e[4]&&e[16]).apply(this,arguments)},!0),W(i,"click",gt(e[28])),W(s,"click",e[31]),W(s,"contextmenu",Ct(e[27]))],A=!0)},p(h,u){e=h,e[0]?f?(f.p(e,u),u[0]&1&&O(f,1)):(f=je(e),f.c(),O(f,1),f.m(t,n)):f&&(Ie(),q(f,1,1,()=>{f=null}),Ye()),e[3]?c&&(Ie(),q(c,1,1,()=>{c=null}),Ye()):c?u[0]&8&&O(c,1):(c=Ke(),c.c(),O(c,1),c.m(r,null)),w&&w.p&&(!a||u[0]&33554432)&&Te(w,D,e,e[25],a?Le(D,e[25],u,null):Oe(e[25]),null),(!a||u[0]&64)&&v(d,"h-full",e[6]),(!a||u[0]&16)&&v(d,"touch-pan-y",!e[4]),(!a||u[0]&4&&B!==(B=ae(`
        sheet absolute 
        min-h-full h-[120vh] w-full ${e[2]}
        rounded-t-[1.25rem]  
        flex flex-col 
        shadow-[0px_7px_16px_rgba(0,0,0,0.08)] backdrop-blur-[10px]
      `)+" svelte-1vussu5"))&&C(i,"class",B),(!a||u[0]&512&&b!==(b=`
        transform: translateY(${e[9]}px);
      `))&&C(i,"style",b),(!a||u[0]&2)&&$(s,"height",e[1]+"px"),(!a||u[0]&1)&&v(s,"pointer-events-auto",e[0]),(!a||u[0]&1)&&v(s,"pointer-events-none",!e[0]),H&&H.p&&(!a||u[0]&33554432)&&Te(H,I,e,e[25],a?Le(I,e[25],u,Pt):Oe(e[25]),Re),(!a||u[0]&4&&S!==(S="fixed w-full bottom-0 "+e[2]+" svelte-1vussu5"))&&C(p,"class",S),(!a||u[0]&256)&&$(p,"padding-bottom",e[8]+"px"),(!a||u[0]&32&&k!==(k=ae(`fixed inset-0 ${e[5]?"z-50":"z-[60]"}`)+" svelte-1vussu5"))&&C(t,"class",k),(!a||u[0]&33)&&v(t,"pointer-events-none",!e[0]),(!a||u[0]&33)&&v(t,"invisible",!e[0])},i(h){a||(O(f),O(c),O(w,h),O(H,h),a=!0)},o(h){q(f),q(c),q(w,h),q(H,h),a=!1},d(h){h&&y(t),f&&f.d(),c&&c.d(),w&&w.d(h),e[30](null),H&&H.d(h),A=!1,mt(E)}}}const ee=50;function Yt(e,t){var n;try{if(console.log("activeElement id:",e==null?void 0:e.id,t),e instanceof HTMLInputElement||e instanceof HTMLTextAreaElement){const s=((n=e==null?void 0:e.value)==null?void 0:n.length)??0;console.log("현재 값:",e.value,"길이:",s),[200].forEach(r=>{setTimeout(()=>{requestAnimationFrame(()=>{try{e.setSelectionRange(0,0),s>0?setTimeout(()=>{e.setSelectionRange(s,s),e.style.caretColor=t},0):e.style.caretColor=t}catch(l){console.log(`시도 실패 (${r}ms):`,l),e.style.caretColor=t}})},r)}),console.log("setCursorPosition - input 요소 시도 시작",s)}else if(e instanceof HTMLElement){e.style.caretColor=t;const s=document.createRange(),i=window.getSelection();s.selectNodeContents(e),s.collapse(!1),i==null||i.removeAllRanges(),i==null||i.addRange(s),console.log("setCursorPosition - contenteditable 요소")}else e.style.caretColor=t}catch(s){e.style.caretColor=t,console.log("커서 위치 설정 실패:",s)}}function zt(e,t,n){let s,i,{$$slots:r={},$$scope:l}=t;const d=Ft.isNativePlatform(),B=Mt;let{isOpen:b=!1}=t,{backdropBackground:P="bg-[#24242424]"}=t,{sheetBackground:p="bg-[#222]"}=t,{noHandle:S=!1}=t,{fixed:k=!1}=t,{onOpen:a=()=>{}}=t,{onClose:A=()=>{}}=t,{bottomNavigation:E=!1}=t,{slotFullHeight:f=!1}=t,c=null,{maxHeight:D=null}=t;const w=ce(2.75),I=ce(1.625);let{useDefaultHeight:H=!1}=t,{defaultHeight:h=null}=t,{keyboardHeight:u=0}=t,N=0;const V=ce(3),G=ce(2.13);let M=!1,J=0,R=0,pe=0;const Y=Tt(0,{duration:0,easing:B});_t(e,Y,o=>n(9,i=o));let he=!1,m,Q,X,te,De,U=!1,oe,ge=!1;function Je(){de.removeAllListeners(),de.addListener("keyboardWillShow",o=>{console.log("keyboardWillShow 이벤트 발생",o),n(17,u=o.keyboardHeight),te=document.activeElement,De=window.getComputedStyle(te).caretColor,te.style.caretColor="transparent",Z("keyboardWillShow"),x("keyboardWillShow"),Yt(te,De)}),de.addListener("keyboardWillHide",()=>{console.log("keyboardWillHide",0),n(17,u=0),Z("keyboardWillHide"),x("keyboardWillHide")})}function Qe(){de.removeAllListeners()}function Z(o){o&&console.log("update window height",o),c=window.innerHeight;let g=w,_=E?G+V:G;u>0?n(1,D=c-g-u):n(1,D=c-g-_);const z=(m?m.scrollHeight:0)+I;H===!1&&(n(18,h=Math.min(z,D)),ue=!1)}function Xe(){document.body.style.overflow="hidden",Z(),ye(),Dt(Y,i=D,i),re("openSheet"),a()}function Ue(){document.body.style.overflow="auto",Y.set(c,{duration:100,easing:B}).finally(()=>{A()})}function He(o,g){if(k)return;M=!0,J=o,pe=i,he=!1;let _=g;for(;_&&_!==document.body;){if(_.classList.contains("touch-pan-y")||_.classList.contains("overflow-y-auto")||_.classList.contains("overflow-y-scroll")){const{scrollHeight:F,clientHeight:z}=_;if(F>z){he=!0,ne=_;break}}_=_.parentElement}}let ne=null,se=!1,ie=!1;function Ze(){m&&(m.addEventListener("scroll",o=>{const g=o.target;if(g&&g!==m){const{scrollTop:_,scrollHeight:F,clientHeight:z}=g;_<0?se=!0:_+z>F?ie=!0:(se=!1,ie=!1)}},{passive:!0,capture:!0}),m.addEventListener("touchend",()=>{setTimeout(()=>{se=!1,ie=!1,ne=null},50)},{passive:!0}))}function we(o,g){if(M){if(R=o-J,he&&ne){const{scrollTop:_,scrollHeight:F,clientHeight:z}=ne;if(F>z){const ct=_<=0,dt=Math.abs(_+z-F)<1;if(!((ct||se)&&R>0)){if(!((dt||ie)&&R<0)){M=!1;return}}}}Math.abs(R)>ee&&g.stopPropagation(),ye()}}function ve(){M&&(M=!1,xe())}function ye(){let o=pe+R;o=Math.min(o,c);const g=D-c;o<g&&(o=g),Y.set(o,{duration:0,easing:B});const _=D-o;if(m){const F=_-I;n(7,m.style.maxHeight=`${F}px`,m)}}function xe(){const o=R;R=0,h===D?$e(o):et(i,o)}let ue=!1;function x(o){ue?le(o):re(o)}function le(o){N=D,ue=!0,Y.set(0,{duration:200,easing:B});const g=D-I;m?n(7,m.style.maxHeight=`${g}px`,m):console.error("contentEl is null"),o&&console.log("setToMaxHeight - done",o)}function re(o){N=h,ue=!1,Y.set(D-h,{duration:200,easing:B});const g=h-I;m?n(7,m.style.maxHeight=`${g}px`,m):console.error("contentEl is null"),o&&console.log("setToDefaultHeight - done",o)}function $e(o){o>ee?(console.log("충분히 아래로 드래그: 시트 닫기"),n(0,b=!1)):(console.log("충분한 드래그 없음: 기본 위치로 복귀"),le())}function et(o,g){try{if(g===0)return;if(o<ee&&g!==0){console.log("케이스 1: 현재 위치가 거의 최대 높이 - 최대 높이로 확장"),le();return}if(g>ee){D===N?(console.log("케이스 2-1: 아래로 드래그 + 최대 높이 상태 - 기본 높이로 축소"),re()):(console.log("케이스 2-2: 아래로 드래그 + 기본 높이 상태 - 시트 닫기"),Y.set(D,{duration:200,easing:B}),n(0,b=!1));return}if(g<-ee){console.log("케이스 3: 위로 드래그 - 최대 높이로 확장"),le();return}console.log("케이스 4: 제자리로 복귀"),x()}catch(_){console.error("handleMultiHeightMode 오류:",_),re()}}function tt(o){He(o.touches[0].clientY,o.target)}function ot(o){we(o.touches[0].clientY,o)}function nt(){ve()}function st(o){o.button===0&&(He(o.clientY,o.target),window.addEventListener("mousemove",ke),window.addEventListener("mouseup",Ae))}function ke(o){we(o.clientY,o)}function Ae(){window.removeEventListener("mousemove",ke),window.removeEventListener("mouseup",Ae),ve()}bt(()=>{n(24,oe=window),d&&!ge&&(ge=!0,Je()),Ze(),m&&Q===void 0&&(Q=new ResizeObserver(()=>{M||(Z(),x("resizeObserver"))}),Q.observe(m)),m&&X===void 0&&(X=new MutationObserver(o=>{M||(Z(),x("contentMutationObserver"))}),X.observe(m,{childList:!0,subtree:!0}))}),Bt(()=>{console.log("컴포넌트 언마운트: 키보드 리스너 제거 중..."),d&&(Qe(),ge=!1),Q&&Q.disconnect(),X&&X.disconnect()});function it(o){Pe.call(this,e,o)}function ut(o){Pe.call(this,e,o)}const lt=()=>n(0,b=!1);function rt(o){Ht[o?"unshift":"push"](()=>{m=o,n(7,m)})}const at=()=>n(0,b=!1);return e.$$set=o=>{"isOpen"in o&&n(0,b=o.isOpen),"backdropBackground"in o&&n(19,P=o.backdropBackground),"sheetBackground"in o&&n(2,p=o.sheetBackground),"noHandle"in o&&n(3,S=o.noHandle),"fixed"in o&&n(4,k=o.fixed),"onOpen"in o&&n(20,a=o.onOpen),"onClose"in o&&n(21,A=o.onClose),"bottomNavigation"in o&&n(5,E=o.bottomNavigation),"slotFullHeight"in o&&n(6,f=o.slotFullHeight),"maxHeight"in o&&n(1,D=o.maxHeight),"useDefaultHeight"in o&&n(22,H=o.useDefaultHeight),"defaultHeight"in o&&n(18,h=o.defaultHeight),"keyboardHeight"in o&&n(17,u=o.keyboardHeight),"$$scope"in o&&n(25,l=o.$$scope)},e.$$.update=()=>{e.$$.dirty[0]&25165825&&(U!==b&&b===!0&&oe!==void 0?(n(23,U=b),Xe()):U!==b&&b===!1&&oe!==void 0&&(n(23,U=b),Ue())),e.$$.dirty[0]&131104&&n(8,s=u>0?u:G+(E?V:0))},[b,D,p,S,k,E,f,m,s,i,B,w,Y,tt,ot,nt,st,u,h,P,a,A,H,U,oe,l,r,it,ut,lt,rt,at]}class Gt extends Ne{constructor(t){super(),Ge(this,t,zt,It,qe,{isOpen:0,backdropBackground:19,sheetBackground:2,noHandle:3,fixed:4,onOpen:20,onClose:21,bottomNavigation:5,slotFullHeight:6,maxHeight:1,useDefaultHeight:22,defaultHeight:18,keyboardHeight:17},null,[-1,-1,-1])}}export{Gt as A};
