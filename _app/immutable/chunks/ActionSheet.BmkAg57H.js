import{a0 as Me,W as gt,s as xe,q as Se,r as Fe,b as W,f as v,v as h,i as we,h as L,n as he,m as Ke,e as z,a as ge,c as j,g as Ce,N as D,K as ce,C as me,E as Ct,A as J,I as te,H as mt,G as bt,u as Oe,o as Te,p as Le,F as _t,k as yt,y as wt,B as kt,O as pt,U as Ht,J as We,w as vt}from"./scheduler.CIbz-4tf.js";import{n as Bt,l as Dt,S as Ge,i as Je,t as Y,g as Ie,a as U,e as Pe,h as Ye,c as At,d as Et,m as Mt,f as St}from"./index.gvaMc9LH.js";import{c as Ft,f as Ve,a as Kt}from"./clickOutside.7_Rbf9DY.js";import{w as Ot}from"./entry.RcmwbxGf.js";import{r as de}from"./units.BJZU6p1c.js";import{i as ke}from"./device.f1MsHf-I.js";import{K as Tt}from"./ActionSheet.svelte_svelte_type_style_lang.BTYINn54.js";function ze(e){return Object.prototype.toString.call(e)==="[object Date]"}function _e(e,t){if(e===t||e!==e)return()=>e;const n=typeof e;if(n!==typeof t||Array.isArray(e)!==Array.isArray(t))throw new Error("Cannot interpolate values of different type");if(Array.isArray(e)){const s=t.map((i,l)=>_e(e[l],i));return i=>s.map(l=>l(i))}if(n==="object"){if(!e||!t)throw new Error("Object cannot be null");if(ze(e)&&ze(t)){e=e.getTime(),t=t.getTime();const l=t-e;return u=>new Date(e+u*l)}const s=Object.keys(t),i={};return s.forEach(l=>{i[l]=_e(e[l],t[l])}),l=>{const u={};return s.forEach(r=>{u[r]=i[r](l)}),u}}if(n==="number"){const s=t-e;return i=>e+i*s}throw new Error(`Cannot interpolate ${n} values`)}function Lt(e,t={}){const n=Ot(e);let s,i=e;function l(u,r){if(e==null)return n.set(e=u),Promise.resolve();i=u;let k=s,I=!1,{delay:B=0,duration:p=400,easing:M=gt,interpolate:S=_e}=Me(Me({},t),r);if(p===0)return k&&(k.abort(),k=null),n.set(e=i),Promise.resolve();const A=Bt()+B;let F;return s=Dt(c=>{if(c<A)return!0;I||(F=S(e,u),typeof p=="function"&&(p=p(e,u)),I=!0),k&&(k.abort(),k=null);const H=c-A;return H>p?(n.set(e=u),!1):(n.set(e=F(M(H/p))),!0)}),s.promise}return{set:l,update:(u,r)=>l(u(i,e),r),subscribe:n.subscribe}}function Wt(e){let t,n;return{c(){t=Se("svg"),n=Se("path"),this.h()},l(s){t=Fe(s,"svg",{width:!0,height:!0,viewBox:!0,fill:!0,xmlns:!0});var i=W(t);n=Fe(i,"path",{id:!0,d:!0,stroke:!0,"stroke-width":!0,"stroke-linecap":!0}),W(n).forEach(v),i.forEach(v),this.h()},h(){h(n,"id","Vector 27674"),h(n,"d","M2 2H33"),h(n,"stroke","#DADDE0"),h(n,"stroke-width","3"),h(n,"stroke-linecap","round"),h(t,"width","35"),h(t,"height","4"),h(t,"viewBox","0 0 35 4"),h(t,"fill","none"),h(t,"xmlns","http://www.w3.org/2000/svg")},m(s,i){we(s,t,i),L(t,n)},p:he,i:he,o:he,d(s){s&&v(t)}}}class It extends Ge{constructor(t){super(),Je(this,t,null,Wt,xe,{})}}const q={listeners:{},addListener:(e,t)=>{if(q.listeners[e]||(q.listeners[e]=[]),q.listeners[e].push(t),!window.mockKeyboard){const n=document.createElement("div");n.setAttribute("data-mock-keyboard",""),n.style.cssText=`
        position: fixed;
        bottom: -300px;
        left: 0;
        right: 0;
        height: 300px;
        background-color: #cccccc;
        transition: bottom 0.3s;
        z-index: 9999;
      `,document.body.appendChild(n),window.mockKeyboard={triggerKeyboardEvent:s=>{const i=document.querySelector("[data-mock-keyboard]"),l=q.listeners[s]||[];s==="keyboardWillShow"&&i?(i.style.bottom="0px",l.forEach(u=>u({keyboardHeight:300}))):s==="keyboardWillHide"&&i&&(i.style.bottom="-300px",l.forEach(u=>u({keyboardHeight:0})))}}}return{remove:()=>{var s;const n=(s=q.listeners[e])==null?void 0:s.indexOf(t);n!==void 0&&n!==-1&&q.listeners[e].splice(n,1)}}},removeAllListeners:()=>{q.listeners={};const e=document.querySelector("[data-mock-keyboard]"),t=document.querySelector("[data-mock-keyboard-controls]");e==null||e.remove(),t==null||t.remove(),delete window.mockKeyboard}},ye=ke?Tt:q;let be=!1;function Ue(e){window.mockKeyboard&&e.metaKey&&e.code==="KeyK"&&(be?(window.mockKeyboard.triggerKeyboardEvent("keyboardWillHide"),be=!1):(window.mockKeyboard.triggerKeyboardEvent("keyboardWillShow"),be=!0))}function Pt(e,t,n){ke||window.addEventListener("keydown",Ue),e(),ye.addListener("keyboardWillShow",s=>{t(s)}),ye.addListener("keyboardWillHide",()=>{n()})}function Yt(){ke||window.removeEventListener("keydown",Ue),ye.removeAllListeners()}const Vt=e=>({}),je=e=>({});function qe(e){let t,n,s;return{c(){t=z("div"),this.h()},l(i){t=j(i,"DIV",{class:!0}),W(t).forEach(v),this.h()},h(){h(t,"class","fixed inset-0 bg-black/20 pointer-events-auto")},m(i,l){we(i,t,l),s=!0},p(i,l){e=i},i(i){s||(i&&pt(()=>{s&&(n||(n=Ye(t,Ve,{duration:200,easing:e[9]},!0)),n.run(1))}),s=!0)},o(i){i&&(n||(n=Ye(t,Ve,{duration:200,easing:e[9]},!1)),n.run(0)),s=!1},d(i){i&&v(t),i&&n&&n.end()}}}function Re(e){let t,n;return t=new It({}),{c(){At(t.$$.fragment)},l(s){Et(t.$$.fragment,s)},m(s,i){Mt(t,s,i),n=!0},i(s){n||(Y(t.$$.fragment,s),n=!0)},o(s){U(t.$$.fragment,s),n=!1},d(s){St(t,s)}}}function zt(e){let t,n,s,i,l,u,r,k,I,B,p,M,S,A,F,c,H,_,g=e[0]&&qe(e),d=!e[3]&&Re();const R=e[26].default,b=Ke(R,e,e[25],null),K=e[26].footer,y=Ke(K,e,e[25],je);return{c(){t=z("div"),g&&g.c(),n=ge(),s=z("div"),i=z("div"),l=z("div"),d&&d.c(),u=ge(),r=z("div"),k=z("div"),b&&b.c(),I=ge(),B=z("div"),y&&y.c(),this.h()},l(w){t=j(w,"DIV",{class:!0});var a=W(t);g&&g.l(a),n=Ce(a),s=j(a,"DIV",{id:!0,class:!0,style:!0});var O=W(s);i=j(O,"DIV",{class:!0,style:!0});var x=W(i);l=j(x,"DIV",{class:!0});var T=W(l);d&&d.l(T),T.forEach(v),u=Ce(x),r=j(x,"DIV",{class:!0});var G=W(r);k=j(G,"DIV",{class:!0});var E=W(k);b&&b.l(E),E.forEach(v),I=Ce(G),B=j(G,"DIV",{class:!0});var Q=W(B);y&&y.l(Q),Q.forEach(v),G.forEach(v),x.forEach(v),O.forEach(v),a.forEach(v),this.h()},h(){h(l,"class","flex justify-center items-center h-[1.625rem]"),h(k,"class","flex-grow overflow-y-auto"),h(B,"class",p="flex-shrink-0 w-full "+e[2]+" svelte-1vussu5"),h(r,"class","content flex flex-col overflow-hidden transition-transform duration-200 ios-scroll-fix svelte-1vussu5"),D(r,"h-full",e[6]),D(r,"touch-pan-y",!e[4]),h(i,"class",M=ce(`
        sheet relative 
        min-h-full h-[120vh] w-full ${e[2]}
        rounded-t-[1.25rem]  
        flex flex-col 
        shadow-[0px_7px_16px_rgba(0,0,0,0.08)] backdrop-blur-[10px]
      `)+" svelte-1vussu5"),h(i,"style",S=`
        transform: translateY(${e[8]}px);
      `),h(s,"id","action-sheet--max"),h(s,"class","fixed left-0 right-0 overflow-visible"),me(s,"top",e[10]+"px"),me(s,"height",e[1]+"px"),D(s,"pointer-events-auto",e[0]),D(s,"pointer-events-none",!e[0]),h(t,"class",F=ce(`fixed inset-0 ${e[5]?"z-50":"z-[60]"}`)+" svelte-1vussu5"),D(t,"pointer-events-none",!e[0]),D(t,"invisible",!e[0])},m(w,a){we(w,t,a),g&&g.m(t,null),L(t,n),L(t,s),L(s,i),L(i,l),d&&d.m(l,null),L(i,u),L(i,r),L(r,k),b&&b.m(k,null),L(r,I),L(r,B),y&&y.m(B,null),e[29](r),c=!0,H||(_=[Ct(A=Ft.call(null,i,{enabled:e[0]})),J(i,"outsideclick",e[30]),J(i,"touchstart",function(){te(!e[4]&&e[12])&&(!e[4]&&e[12]).apply(this,arguments)},!0),J(i,"touchmove",function(){te(!e[4]&&e[13])&&(!e[4]&&e[13]).apply(this,arguments)},!0),J(i,"touchend",function(){te(!e[4]&&e[14])&&(!e[4]&&e[14]).apply(this,arguments)},!0),J(i,"mousedown",function(){te(!e[4]&&e[15])&&(!e[4]&&e[15]).apply(this,arguments)},!0),J(i,"click",mt(e[28])),J(s,"contextmenu",bt(e[27]))],H=!0)},p(w,a){e=w,e[0]?g?(g.p(e,a),a[0]&1&&Y(g,1)):(g=qe(e),g.c(),Y(g,1),g.m(t,n)):g&&(Ie(),U(g,1,1,()=>{g=null}),Pe()),e[3]?d&&(Ie(),U(d,1,1,()=>{d=null}),Pe()):d?a[0]&8&&Y(d,1):(d=Re(),d.c(),Y(d,1),d.m(l,null)),b&&b.p&&(!c||a[0]&33554432)&&Oe(b,R,e,e[25],c?Le(R,e[25],a,null):Te(e[25]),null),y&&y.p&&(!c||a[0]&33554432)&&Oe(y,K,e,e[25],c?Le(K,e[25],a,Vt):Te(e[25]),je),(!c||a[0]&4&&p!==(p="flex-shrink-0 w-full "+e[2]+" svelte-1vussu5"))&&h(B,"class",p),(!c||a[0]&64)&&D(r,"h-full",e[6]),(!c||a[0]&16)&&D(r,"touch-pan-y",!e[4]),(!c||a[0]&4&&M!==(M=ce(`
        sheet relative 
        min-h-full h-[120vh] w-full ${e[2]}
        rounded-t-[1.25rem]  
        flex flex-col 
        shadow-[0px_7px_16px_rgba(0,0,0,0.08)] backdrop-blur-[10px]
      `)+" svelte-1vussu5"))&&h(i,"class",M),(!c||a[0]&256&&S!==(S=`
        transform: translateY(${e[8]}px);
      `))&&h(i,"style",S),A&&te(A.update)&&a[0]&1&&A.update.call(null,{enabled:e[0]}),(!c||a[0]&2)&&me(s,"height",e[1]+"px"),(!c||a[0]&1)&&D(s,"pointer-events-auto",e[0]),(!c||a[0]&1)&&D(s,"pointer-events-none",!e[0]),(!c||a[0]&32&&F!==(F=ce(`fixed inset-0 ${e[5]?"z-50":"z-[60]"}`)+" svelte-1vussu5"))&&h(t,"class",F),(!c||a[0]&33)&&D(t,"pointer-events-none",!e[0]),(!c||a[0]&33)&&D(t,"invisible",!e[0])},i(w){c||(Y(g),Y(d),Y(b,w),Y(y,w),c=!0)},o(w){U(g),U(d),U(b,w),U(y,w),c=!1},d(w){w&&v(t),g&&g.d(),d&&d.d(),b&&b.d(w),y&&y.d(w),e[29](null),H=!1,_t(_)}}}const oe=50;function jt(e,t){var n;try{if(console.log("activeElement id:",e==null?void 0:e.id,t),e instanceof HTMLInputElement||e instanceof HTMLTextAreaElement){const s=((n=e==null?void 0:e.value)==null?void 0:n.length)??0;console.log("현재 값:",e.value,"길이:",s),[200].forEach(l=>{setTimeout(()=>{requestAnimationFrame(()=>{try{e.setSelectionRange(0,0),s>0?setTimeout(()=>{e.setSelectionRange(s,s),e.style.caretColor=t},0):e.style.caretColor=t}catch(u){console.log(`시도 실패 (${l}ms):`,u),e.style.caretColor=t}})},l)}),console.log("setCursorPosition - input 요소 시도 시작",s)}else if(e instanceof HTMLElement){e.style.caretColor=t;const s=document.createRange(),i=window.getSelection();s.selectNodeContents(e),s.collapse(!1),i==null||i.removeAllRanges(),i==null||i.addRange(s),console.log("setCursorPosition - contenteditable 요소")}else e.style.caretColor=t}catch(s){e.style.caretColor=t,console.log("커서 위치 설정 실패:",s)}}function qt(e,t,n){let s,{$$slots:i={},$$scope:l}=t;const u=Kt;let{isOpen:r=!1}=t,{backdropBackground:k="bg-[#24242424]"}=t,{sheetBackground:I="bg-[#222]"}=t,{noHandle:B=!1}=t,{fixed:p=!1}=t,{onOpen:M=()=>{}}=t,{onClose:S=()=>{}}=t,{bottomNavigation:A=!1}=t,{hFull:F=!1}=t,{slotFullHeight:c=!1}=t,H=null,{maxHeight:_=null}=t;const g=de(2.75),d=de(1.625);let{useDefaultHeight:R=!1}=t,{defaultHeight:b=null}=t,{keyboardHeight:K=0}=t,y=0;const w=de(3),a=de(2.13);let O=!1,x=0,T=0,G=0;const E=Lt(0,{duration:0,easing:u});yt(e,E,o=>n(8,s=o));let Q=!1,C,X,Z,ne,pe,N=!1,se;function Qe(o){console.log("keyboardWillShow 이벤트 발생",o),n(16,K=o.keyboardHeight),$("keyboardWillShow"),ee("keyboardWillShow"),ne=document.activeElement;let f=window.getComputedStyle(ne).caretColor;f!=="transparent"&&f!=="rgba(0, 0, 0, 0)"&&(pe=f,ne.style.caretColor="transparent",jt(ne,pe))}function Xe(){console.log("keyboardWillHide",0),n(16,K=0),$("keyboardWillHide"),ee("keyboardWillHide")}function $(o){o&&console.log("update window height",o),H=window.innerHeight;let f=g,m=A?a+w:a;K>0?n(1,_=H-f-m-K):n(1,_=H-f-m);const V=(C?C.scrollHeight:0)+d;R===!1&&(n(17,b=Math.min(V,_)),ue=!1)}function Ze(){document.body.style.overflow="hidden",$(),De(),Ht(E,s=_,s),fe("openSheet"),M()}function Ne(){document.body.style.overflow="auto",E.set(H,{duration:100,easing:u}).finally(()=>{S()})}function He(o,f){if(p)return;O=!0,x=o,G=s,Q=!1;let m=f;for(;m&&m!==document.body;){if(m.classList.contains("touch-pan-y")||m.classList.contains("overflow-y-auto")||m.classList.contains("overflow-y-scroll")){const{scrollHeight:P,clientHeight:V}=m;if(P>V){Q=!0,ie=m;break}}m=m.parentElement}}let ie=null,le=!1,re=!1;function $e(){C&&(C.addEventListener("scroll",o=>{const f=o.target;if(f&&f!==C){const{scrollTop:m,scrollHeight:P,clientHeight:V}=f;m<0?le=!0:m+V>P?re=!0:(le=!1,re=!1)}},{passive:!0,capture:!0}),C.addEventListener("touchend",()=>{setTimeout(()=>{le=!1,re=!1,ie=null},50)},{passive:!0}))}function ve(o,f){if(O){if(T=o-x,Q&&ie){const{scrollTop:m,scrollHeight:P,clientHeight:V}=ie;if(P>V){const dt=m<=0,ht=Math.abs(m+V-P)<1;if(!((dt||le)&&T>0)){if(!((ht||re)&&T<0)){O=!1;return}}}}Math.abs(T)>oe&&f.stopPropagation(),De()}}function Be(){O&&(O=!1,et())}function De(){let o=G+T;o=Math.min(o,H);const f=_-H;o<f&&(o=f),E.set(o,{duration:0,easing:u});const m=_-o;if(C){const P=m-d;n(7,C.style.maxHeight=`${P}px`,C)}}function et(){const o=T;T=0,b===_?tt(o):ot(s,o)}let ue=!1;function ee(o){ue?ae(o):fe(o)}function ae(o){y=_,ue=!0,E.set(0,{duration:200,easing:u});const f=_-d;C?n(7,C.style.maxHeight=`${f}px`,C):console.error("contentEl is null"),o&&console.log("setToMaxHeight - done",o)}function fe(o){y=b,ue=!1,E.set(_-b,{duration:200,easing:u});const f=b-d;C?n(7,C.style.maxHeight=`${f}px`,C):console.error("contentEl is null"),o&&console.log("setToDefaultHeight - done",o)}function tt(o){o>oe?(console.log("충분히 아래로 드래그: 시트 닫기"),n(0,r=!1)):(console.log("충분한 드래그 없음: 기본 위치로 복귀"),ae())}function ot(o,f){try{if(f===0)return;if(o<oe&&f!==0){console.log("케이스 1: 현재 위치가 거의 최대 높이 - 최대 높이로 확장"),ae();return}if(f>oe){_===y?(console.log("케이스 2-1: 아래로 드래그 + 최대 높이 상태 - 기본 높이로 축소"),fe()):(console.log("케이스 2-2: 아래로 드래그 + 기본 높이 상태 - 시트 닫기"),E.set(_,{duration:200,easing:u}),n(0,r=!1));return}if(f<-oe){console.log("케이스 3: 위로 드래그 - 최대 높이로 확장"),ae();return}console.log("케이스 4: 제자리로 복귀"),ee()}catch(m){console.error("handleMultiHeightMode 오류:",m),fe()}}function nt(o){He(o.touches[0].clientY,o.target)}function st(o){ve(o.touches[0].clientY,o)}function it(){Be()}function lt(o){o.button===0&&(He(o.clientY,o.target),window.addEventListener("mousemove",Ae),window.addEventListener("mouseup",Ee))}function Ae(o){ve(o.clientY,o)}function Ee(){window.removeEventListener("mousemove",Ae),window.removeEventListener("mouseup",Ee),Be()}wt(()=>{n(24,se=window),Pt(()=>{},Qe,Xe),$e(),C&&X===void 0&&(X=new ResizeObserver(()=>{O||($(),ee("resizeObserver"))}),X.observe(C)),C&&Z===void 0&&(Z=new MutationObserver(o=>{O||($(),ee("contentMutationObserver"))}),Z.observe(C,{childList:!0,subtree:!0}))}),kt(()=>{Yt(),X&&X.disconnect(),Z&&Z.disconnect()});function rt(o){We.call(this,e,o)}function ut(o){We.call(this,e,o)}function at(o){vt[o?"unshift":"push"](()=>{C=o,n(7,C)})}const ft=()=>n(0,r=!1);return e.$$set=o=>{"isOpen"in o&&n(0,r=o.isOpen),"backdropBackground"in o&&n(18,k=o.backdropBackground),"sheetBackground"in o&&n(2,I=o.sheetBackground),"noHandle"in o&&n(3,B=o.noHandle),"fixed"in o&&n(4,p=o.fixed),"onOpen"in o&&n(19,M=o.onOpen),"onClose"in o&&n(20,S=o.onClose),"bottomNavigation"in o&&n(5,A=o.bottomNavigation),"hFull"in o&&n(6,F=o.hFull),"slotFullHeight"in o&&n(21,c=o.slotFullHeight),"maxHeight"in o&&n(1,_=o.maxHeight),"useDefaultHeight"in o&&n(22,R=o.useDefaultHeight),"defaultHeight"in o&&n(17,b=o.defaultHeight),"keyboardHeight"in o&&n(16,K=o.keyboardHeight),"$$scope"in o&&n(25,l=o.$$scope)},e.$$.update=()=>{e.$$.dirty[0]&25165825&&(N!==r&&r===!0&&se!==void 0?(n(23,N=r),Ze()):N!==r&&r===!1&&se!==void 0&&(n(23,N=r),Ne())),e.$$.dirty[0]&65568},[r,_,I,B,p,A,F,C,s,u,g,E,nt,st,it,lt,K,b,k,M,S,c,R,N,se,l,i,rt,ut,at,ft]}class Zt extends Ge{constructor(t){super(),Je(this,t,qt,zt,xe,{isOpen:0,backdropBackground:18,sheetBackground:2,noHandle:3,fixed:4,onOpen:19,onClose:20,bottomNavigation:5,hFull:6,slotFullHeight:21,maxHeight:1,useDefaultHeight:22,defaultHeight:17,keyboardHeight:16},null,[-1,-1,-1])}}export{Zt as A,Yt as a,Pt as o};
