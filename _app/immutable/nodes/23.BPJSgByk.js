import{e as Ut}from"../chunks/index.g5YcAAdQ.js";import{b as Dt,A as Ht,g as Vt,o as zt}from"../chunks/sign.B0sGg__T.js";import{s as It,q as ut,r as ht,b as h,f as o,v as l,i as C,h as a,n as W,e as c,a as p,c as u,g as $,B as Q,A as ft,G as Mt,k as Gt}from"../chunks/scheduler.5W7zuegH.js";import{S as Ct,i as Bt,c as d,b as v,m as w,t as _,a as x,d as T}from"../chunks/index.6ch9Ev20.js";import{g as mt}from"../chunks/entry.Db-OMiWN.js";import{p as Rt}from"../chunks/stores.cuRlGAbM.js";import{I as ct}from"../chunks/IconChevronRight.pLgeaofU.js";import{r as Zt}from"../chunks/units.BJZU6p1c.js";import{H as Ft}from"../chunks/Header.BCIZSXVx.js";import{N as Jt}from"../chunks/NavigationBar.CvdQ_uzW.js";/* empty css                                                                     *//* empty css                                                                   *//* empty css                                                             */import{B as Kt}from"../chunks/BottomNavigationPadder.Wp_lhLGQ.js";const Qt=async({params:i,fetch:t,depends:r})=>{if(String(i.idx)!==String(Dt()))throw Ut(403,"Forbidden");if(!(await(await t(`${Ht}/auth/users/${i.idx}`,{headers:{Authorization:`Bearer ${Vt()}`}})).json()).data)throw Ut(404,"User not found")},we=Object.freeze(Object.defineProperty({__proto__:null,load:Qt},Symbol.toStringTag,{value:"Module"}));function Wt(i){let t,r;return{c(){t=ut("svg"),r=ut("path"),this.h()},l(n){t=ht(n,"svg",{xmlns:!0,viewBox:!0,width:!0,height:!0,fill:!0});var s=h(t);r=ht(s,"path",{d:!0}),h(r).forEach(o),s.forEach(o),this.h()},h(){l(r,"d","M480-280q17 0 28.5-11.5T520-320v-160q0-17-11.5-28.5T480-520q-17 0-28.5 11.5T440-480v160q0 17 11.5 28.5T480-280Zm0-320q17 0 28.5-11.5T520-640q0-17-11.5-28.5T480-680q-17 0-28.5 11.5T440-640q0 17 11.5 28.5T480-600Zm0 520q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"),l(t,"xmlns","http://www.w3.org/2000/svg"),l(t,"viewBox","0 -960 960 960"),l(t,"width",i[1]),l(t,"height",i[1]),l(t,"fill",i[0])},m(n,s){C(n,t,s),a(t,r)},p(n,[s]){s&2&&l(t,"width",n[1]),s&2&&l(t,"height",n[1]),s&1&&l(t,"fill",n[0])},i:W,o:W,d(n){n&&o(t)}}}function Xt(i,t,r){let n,{fill:s="#5f6368"}=t,{length:f="1.75"}=t;return i.$$set=g=>{"fill"in g&&r(0,s=g.fill),"length"in g&&r(2,f=g.length)},i.$$.update=()=>{i.$$.dirty&4&&r(1,n=Zt(f))},[s,n,f]}class Et extends Ct{constructor(t){super(),Bt(this,t,Xt,Wt,It,{fill:0,length:2})}}function Yt(i){let t,r;return{c(){t=ut("svg"),r=ut("path"),this.h()},l(n){t=ht(n,"svg",{xmlns:!0,viewBox:!0,width:!0,height:!0,fill:!0});var s=h(t);r=ht(s,"path",{d:!0}),h(r).forEach(o),s.forEach(o),this.h()},h(){l(r,"d","M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h240q17 0 28.5 11.5T480-800q0 17-11.5 28.5T440-760H200v560h240q17 0 28.5 11.5T480-160q0 17-11.5 28.5T440-120H200Zm487-320H400q-17 0-28.5-11.5T360-480q0-17 11.5-28.5T400-520h287l-75-75q-11-11-11-27t11-28q11-12 28-12.5t29 11.5l143 143q12 12 12 28t-12 28L669-309q-12 12-28.5 11.5T612-310q-11-12-10.5-28.5T613-366l74-74Z"),l(t,"xmlns","http://www.w3.org/2000/svg"),l(t,"viewBox","0 -960 960 960"),l(t,"width",i[1]),l(t,"height",i[1]),l(t,"fill",i[0])},m(n,s){C(n,t,s),a(t,r)},p(n,[s]){s&2&&l(t,"width",n[1]),s&2&&l(t,"height",n[1]),s&1&&l(t,"fill",n[0])},i:W,o:W,d(n){n&&o(t)}}}function te(i,t,r){let n,{fill:s="#5f6368"}=t,{length:f="1.75"}=t;return i.$$set=g=>{"fill"in g&&r(0,s=g.fill),"length"in g&&r(2,f=g.length)},i.$$.update=()=>{i.$$.dirty&4&&r(1,n=Zt(f))},[s,n,f]}class ee extends Ct{constructor(t){super(),Bt(this,t,te,Yt,It,{fill:0,length:2})}}function ne(i){let t,r="설정";return{c(){t=c("span"),t.textContent=r,this.h()},l(n){t=u(n,"SPAN",{class:!0,"data-svelte-h":!0}),Q(t)!=="svelte-1mci8xs"&&(t.textContent=r),this.h()},h(){l(t,"class","text-white text-[0.9375rem] font-semibold")},m(n,s){C(n,t,s)},p:W,d(n){n&&o(t)}}}function se(i){let t,r,n,s,f,g,q,b,P,gt,S,kt="로그아웃",pt,A,$t,R,y,B,O,dt,j,Nt="서비스 이용약관",vt,L,wt,F,E,k,U,_t,Z,Pt="개인정보 처리방침",xt,D,Tt,J,I,N,H,qt,V,St="위치기반 서비스 이용약관",bt,z,X,M,Y,G,tt,yt,At;return n=new Ft({props:{position:"static",leftBack:"white",$$slots:{default:[ne]},$$scope:{ctx:i}}}),P=new ee({props:{length:"1.25",fill:"white"}}),A=new ct({props:{length:"1.25",fill:"white"}}),O=new Et({props:{length:"1.25",fill:"white"}}),L=new ct({props:{length:"1.25",fill:"white"}}),U=new Et({props:{length:"1.25",fill:"white"}}),D=new ct({props:{length:"1.25",fill:"white"}}),H=new Et({props:{length:"1.25",fill:"white"}}),z=new ct({props:{length:"1.25",fill:"white"}}),M=new Kt({}),G=new Jt({}),{c(){t=c("div"),r=p(),d(n.$$.fragment),s=p(),f=c("ul"),g=c("li"),q=c("button"),b=c("div"),d(P.$$.fragment),gt=p(),S=c("span"),S.textContent=kt,pt=p(),d(A.$$.fragment),$t=p(),R=c("li"),y=c("button"),B=c("div"),d(O.$$.fragment),dt=p(),j=c("span"),j.textContent=Nt,vt=p(),d(L.$$.fragment),wt=p(),F=c("li"),E=c("button"),k=c("div"),d(U.$$.fragment),_t=p(),Z=c("span"),Z.textContent=Pt,xt=p(),d(D.$$.fragment),Tt=p(),J=c("li"),I=c("button"),N=c("div"),d(H.$$.fragment),qt=p(),V=c("span"),V.textContent=St,bt=p(),d(z.$$.fragment),X=p(),d(M.$$.fragment),Y=p(),d(G.$$.fragment),this.h()},l(e){t=u(e,"DIV",{class:!0}),h(t).forEach(o),r=$(e),v(n.$$.fragment,e),s=$(e),f=u(e,"UL",{class:!0});var m=h(f);g=u(m,"LI",{});var K=h(g);q=u(K,"BUTTON",{class:!0});var et=h(q);b=u(et,"DIV",{class:!0});var nt=h(b);v(P.$$.fragment,nt),gt=$(nt),S=u(nt,"SPAN",{class:!0,"data-svelte-h":!0}),Q(S)!=="svelte-8autsb"&&(S.textContent=kt),nt.forEach(o),pt=$(et),v(A.$$.fragment,et),et.forEach(o),K.forEach(o),$t=$(m),R=u(m,"LI",{});var Ot=h(R);y=u(Ot,"BUTTON",{class:!0});var st=h(y);B=u(st,"DIV",{class:!0});var lt=h(B);v(O.$$.fragment,lt),dt=$(lt),j=u(lt,"SPAN",{class:!0,"data-svelte-h":!0}),Q(j)!=="svelte-1aoh0ti"&&(j.textContent=Nt),lt.forEach(o),vt=$(st),v(L.$$.fragment,st),st.forEach(o),Ot.forEach(o),wt=$(m),F=u(m,"LI",{});var jt=h(F);E=u(jt,"BUTTON",{class:!0});var it=h(E);k=u(it,"DIV",{class:!0});var rt=h(k);v(U.$$.fragment,rt),_t=$(rt),Z=u(rt,"SPAN",{class:!0,"data-svelte-h":!0}),Q(Z)!=="svelte-w9fp1y"&&(Z.textContent=Pt),rt.forEach(o),xt=$(it),v(D.$$.fragment,it),it.forEach(o),jt.forEach(o),Tt=$(m),J=u(m,"LI",{});var Lt=h(J);I=u(Lt,"BUTTON",{class:!0});var at=h(I);N=u(at,"DIV",{class:!0});var ot=h(N);v(H.$$.fragment,ot),qt=$(ot),V=u(ot,"SPAN",{class:!0,"data-svelte-h":!0}),Q(V)!=="svelte-igpjem"&&(V.textContent=St),ot.forEach(o),bt=$(at),v(z.$$.fragment,at),at.forEach(o),Lt.forEach(o),m.forEach(o),X=$(e),v(M.$$.fragment,e),Y=$(e),v(G.$$.fragment,e),this.h()},h(){l(t,"class","fixed w-full h-full bg-black -z-10"),l(S,"class","text-sm font-medium"),l(b,"class","flex items-center gap-2"),l(q,"class","flex items-center justify-between w-full px-5 py-[0.88rem] text-left focus:outline-none"),l(j,"class","text-sm font-medium"),l(B,"class","flex items-center gap-2"),l(y,"class","flex items-center justify-between w-full px-5 py-[0.88rem] text-left focus:outline-none"),l(Z,"class","text-sm font-medium"),l(k,"class","flex items-center gap-2"),l(E,"class","flex items-center justify-between w-full px-5 py-[0.88rem] text-left focus:outline-none"),l(V,"class","text-sm font-medium"),l(N,"class","flex items-center gap-2"),l(I,"class","flex items-center justify-between w-full px-5 py-[0.88rem] text-left focus:outline-none"),l(f,"class","mt-4 text-white")},m(e,m){C(e,t,m),C(e,r,m),w(n,e,m),C(e,s,m),C(e,f,m),a(f,g),a(g,q),a(q,b),w(P,b,null),a(b,gt),a(b,S),a(q,pt),w(A,q,null),a(f,$t),a(f,R),a(R,y),a(y,B),w(O,B,null),a(B,dt),a(B,j),a(y,vt),w(L,y,null),a(f,wt),a(f,F),a(F,E),a(E,k),w(U,k,null),a(k,_t),a(k,Z),a(E,xt),w(D,E,null),a(f,Tt),a(f,J),a(J,I),a(I,N),w(H,N,null),a(N,qt),a(N,V),a(I,bt),w(z,I,null),C(e,X,m),w(M,e,m),C(e,Y,m),w(G,e,m),tt=!0,yt||(At=[ft(q,"click",i[0]),ft(y,"click",i[1]),ft(E,"click",i[2]),ft(I,"click",i[3])],yt=!0)},p(e,[m]){const K={};m&32&&(K.$$scope={dirty:m,ctx:e}),n.$set(K)},i(e){tt||(_(n.$$.fragment,e),_(P.$$.fragment,e),_(A.$$.fragment,e),_(O.$$.fragment,e),_(L.$$.fragment,e),_(U.$$.fragment,e),_(D.$$.fragment,e),_(H.$$.fragment,e),_(z.$$.fragment,e),_(M.$$.fragment,e),_(G.$$.fragment,e),tt=!0)},o(e){x(n.$$.fragment,e),x(P.$$.fragment,e),x(A.$$.fragment,e),x(O.$$.fragment,e),x(L.$$.fragment,e),x(U.$$.fragment,e),x(D.$$.fragment,e),x(H.$$.fragment,e),x(z.$$.fragment,e),x(M.$$.fragment,e),x(G.$$.fragment,e),tt=!1},d(e){e&&(o(t),o(r),o(s),o(f),o(X),o(Y)),T(n,e),T(P),T(A),T(O),T(L),T(U),T(D),T(H),T(z),T(M,e),T(G,e),yt=!1,Mt(At)}}}function le(i,t,r){let n;Gt(i,Rt,b=>r(4,n=b));async function s(){zt(),await mt(n.url.pathname.split("/setting")[0])}return[s,async()=>{await mt("/tp/terms-of-service")},async()=>{await mt("/tp/terms-of-privacy-policy")},async()=>{await mt("/tp/terms-of-location-service")}]}class _e extends Ct{constructor(t){super(),Bt(this,t,le,se,It,{})}}export{_e as component,we as universal};
