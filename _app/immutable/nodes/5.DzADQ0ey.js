import{s as Se,I as pe,J as ge,b as x,f as m,q as r,i as G,h as a,n as de,C as Ue,e as v,a as H,c as _,g as N,O as Ye,W as Ve,D as je,M as Re,k as Ce,X as Qe,A as ze,B as Ze,E as he,v as q,t as te,d as le,H as ve,G as me,w as _e,j as se,y as Te,z as Ee}from"../chunks/scheduler.Ds8JjPaX.js";import{S as He,i as Ne,e as Pe,c as ne,b as re,m as ae,t as Q,f as Ae,a as Z,d as ie,g as we}from"../chunks/index.ucgEq-dW.js";import{e as Ie}from"../chunks/each.BmbOg1ua.js";import{g as Be}from"../chunks/entry.CayY3Lwj.js";import{H as qe}from"../chunks/Header.BTUMY7Je.js";import{F as Ke}from"../chunks/Field.CPsJTGgc.js";import{s as We}from"../chunks/search.BhpZG1Ux.js";import{g as Je,s as xe,k as ee,i as Ge,e as ke}from"../chunks/sign.B9B4Tbt1.js";import{M as et}from"../chunks/Mask.suCk4J4Y.js";import{H as tt}from"../chunks/HexImage.24YKsBn6.js";import{N as lt}from"../chunks/NavigationBar.eVZpDVah.js";import{A as st}from"../chunks/constants.B40lR-wj.js";import{s as Fe}from"../chunks/s32cloudfront.yu0ljD8J.js";import{B as ot}from"../chunks/BottomNavigationPadder.lFXP-Uph.js";const ye="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADFSURBVHgB7dfbCYNAEIXh2ZAq8pQ0kNSRilOHFcQn21AEFZH1ugOHgf97UxT27Ow1tW9rLbCbBUcANQKoEUCNAGoEUCOA2t08/f5mj+f2N01t9n2ZF98K7DX+6Dcn+FZg9En595X/1SNdvtB4N2Yt9I7wkzhFv1KWz4HSoXRx6IzYByZne9JpEeAokdX37ryHl8+OqIAaAdTYB7KWe0LhbruFCkwqzZmwvAL9FVHx7yD8cZplVI0AagRQI4AaAdQIoBY+QAecIyKJbyjm6wAAAABJRU5ErkJggg==",De="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEhSURBVHgB7dmxasJQGAXgY+kjFDt1aJ+lnRQc2qHdWotLKU6KCA5ZRScHF1FXBxdBJ30LQXBRwUnxHTQZMrgI3v/KUTjfGBLIyX/vf2+SROo9u8cNu8ONUwA2BWBTADYFYFMANgVgu4dRp1lFMvkAF9vtDtm/EizMFXC9eeu1MXMFYumP37POH/bb8EFz4Nwn75vaaCT38wUWU4DHsIs06gEyqVewOM+Bl+cnVIr/XlqhhVOATPoNue/Po2On2uIlJ7rbENpfz6ckpwoMRhNMZ/OjIcRqp86TeLFcoxzUsFitwWTqQptwM5YvBGFFxmDxsg60uj2waCWO2qevnaUL7UZjrCqYKxC9FjKujSX0h4ZMAdgUgE0B2BSATQHYFIDtAJj3PWal2lrSAAAAAElFTkSuQmCC",nt="data:image/svg+xml,%3csvg%20width='14'%20height='15'%20viewBox='0%200%2014%2015'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M7%2014.3426L3.28767%2010.6303C2.55345%209.89603%202.05344%208.96057%201.85087%207.94217C1.64831%206.92377%201.75228%205.86817%202.14964%204.90887C2.547%203.94956%203.21991%203.12962%204.08327%202.55275C4.94662%201.97587%205.96165%201.66797%207%201.66797C8.03835%201.66797%209.05338%201.97587%209.91674%202.55275C10.7801%203.12962%2011.453%203.94956%2011.8504%204.90887C12.2477%205.86817%2012.3517%206.92377%2012.1491%207.94217C11.9466%208.96057%2011.4466%209.89603%2010.7123%2010.6303L7%2014.3426ZM9.8875%209.80542C10.4585%209.23434%2010.8474%208.50676%2011.0049%207.71468C11.1624%206.92261%2011.0815%206.1016%2010.7725%205.3555C10.4634%204.60939%209.94003%203.97169%209.26854%203.52302C8.59705%203.07436%207.80759%202.83488%207%202.83488C6.19241%202.83488%205.40296%203.07436%204.73147%203.52302C4.05998%203.97169%203.5366%204.60939%203.22753%205.3555C2.91846%206.1016%202.83758%206.92261%202.9951%207.71468C3.15262%208.50676%203.54148%209.23434%204.1125%209.80542L7%2012.6929L9.8875%209.80542ZM7%208.08459C6.69058%208.08459%206.39384%207.96167%206.17505%207.74288C5.95625%207.52409%205.83334%207.22734%205.83334%206.91792C5.83334%206.6085%205.95625%206.31176%206.17505%206.09297C6.39384%205.87417%206.69058%205.75126%207%205.75126C7.30942%205.75126%207.60617%205.87417%207.82496%206.09297C8.04375%206.31176%208.16667%206.6085%208.16667%206.91792C8.16667%207.22734%208.04375%207.52409%207.82496%207.74288C7.60617%207.96167%207.30942%208.08459%207%208.08459Z'%20fill='%239DA5B4'%20/%3e%3c/svg%3e";function rt(l){let e,t,n,o,i;return{c(){e=pe("svg"),t=pe("circle"),o=pe("path"),this.h()},l(c){e=ge(c,"svg",{width:!0,height:!0,viewBox:!0,fill:!0,xmlns:!0});var h=x(e);t=ge(h,"circle",{cx:!0,cy:!0,r:!0,fill:!0}),x(t).forEach(m),o=ge(h,"path",{"fill-rule":!0,"clip-rule":!0,d:!0,fill:!0}),x(o).forEach(m),h.forEach(m),this.h()},h(){r(t,"cx","8"),r(t,"cy","8"),r(t,"r","8"),r(t,"fill",n=l[0]==="owner"?"#FFF5F0":"#EAFFF4"),r(o,"fill-rule","evenodd"),r(o,"clip-rule","evenodd"),r(o,"d","M7.62492 3.76955C7.81242 3.39453 8.18742 3.39453 8.37492 3.7695L10.313 7.11708C10.3274 7.1071 10.3426 7.09811 10.3584 7.09019L12.5656 5.98663C12.8444 5.84721 13.1617 6.08913 13.1011 6.39494L12.1578 11.1549C12.123 11.3305 11.969 11.457 11.79 11.457H9.88001C9.87831 11.457 9.87662 11.457 9.87492 11.457L6.76851 11.457C6.76656 11.457 6.76461 11.457 6.76266 11.457H4.2098C4.0308 11.457 3.87675 11.3305 3.84196 11.1549L2.89863 6.39494C2.83803 6.08913 3.15534 5.84721 3.43418 5.98663L5.64131 7.09019C5.65547 7.09727 5.59175 7.06541 5.68216 7.11394C5.70599 7.09019 5.6972 7.11394 6.10108 6.41719C6.08531 6.43899 6.1158 6.39538 6.10108 6.41719C6.12971 6.37762 6.15859 6.33772 6.18227 6.29624L7.62492 3.76955Z"),r(o,"fill",i=l[0]==="owner"?"#FF7A00":"#1FCA70"),r(e,"width","16"),r(e,"height","16"),r(e,"viewBox","0 0 16 16"),r(e,"fill","none"),r(e,"xmlns","http://www.w3.org/2000/svg")},m(c,h){G(c,e,h),a(e,t),a(e,o)},p(c,[h]){h&1&&n!==(n=c[0]==="owner"?"#FFF5F0":"#EAFFF4")&&r(t,"fill",n),h&1&&i!==(i=c[0]==="owner"?"#FF7A00":"#1FCA70")&&r(o,"fill",i)},i:de,o:de,d(c){c&&m(e)}}}function at(l,e,t){let{type:n="owner"}=e;return l.$$set=o=>{"type"in o&&t(0,n=o.type)},[n]}class it extends He{constructor(e){super(),Ne(this,e,at,rt,Se,{type:0})}}function $e(l,e,t){const n=l.slice();return n[36]=e[t],n[38]=t,n}function ct(l){let e,t="박스";return{c(){e=v("div"),e.textContent=t,this.h()},l(n){e=_(n,"DIV",{class:!0,"data-svelte-h":!0}),he(e)!=="svelte-oldnbc"&&(e.textContent=t),this.h()},h(){r(e,"class","text-[21242C] typo-h3")},m(n,o){G(n,e,o)},p:de,d(n){n&&m(e)}}}function Xe(l){let e,t,n="아직 생성된 박스가 없습니다.<br/>지금 새로운 박스를 만들어보세요!",o,i,c="새 박스 만들기",h,p;return{c(){e=v("div"),t=v("p"),t.innerHTML=n,o=H(),i=v("button"),i.textContent=c,this.h()},l(I){e=_(I,"DIV",{class:!0});var k=x(e);t=_(k,"P",{class:!0,"data-svelte-h":!0}),he(t)!=="svelte-92hfch"&&(t.innerHTML=n),o=N(k),i=_(k,"BUTTON",{class:!0,"data-svelte-h":!0}),he(i)!=="svelte-yawy92"&&(i.textContent=c),k.forEach(m),this.h()},h(){r(t,"class","typo-body3 text-gray-500 text-center"),r(i,"class","px-3.5 py-1.5 w-fit rounded-3xl border border-gray-200 typo-body3 text-gray-700"),r(e,"class","flex flex-col gap-3.5 px-4 items-center")},m(I,k){G(I,e,k),a(e,t),a(e,o),a(e,i),h||(p=q(i,"click",l[9]),h=!0)},p:de,d(I){I&&m(e),h=!1,p()}}}function Le(l){let e,t,n;return t=new it({props:{type:l[36].role}}),{c(){e=v("div"),ne(t.$$.fragment),this.h()},l(o){e=_(o,"DIV",{class:!0});var i=x(e);re(t.$$.fragment,i),i.forEach(m),this.h()},h(){r(e,"class","absolute bottom-0 right-0.5")},m(o,i){G(o,e,i),ae(t,e,null),n=!0},p(o,i){const c={};i[0]&4&&(c.type=o[36].role),t.$set(c)},i(o){n||(Q(t.$$.fragment,o),n=!0)},o(o){Z(t.$$.fragment,o),n=!1},d(o){o&&m(e),ie(t)}}}function Me(l){let e,t,n,o,i,c,h,p,I,k,V,X,F,D=l[36].place_count+"",T,O,A,U,L=l[36].name+"",B,y,f,Y,g,s,u,w,b,E;o=new tt({props:{src:Fe(l[36].image??"",500),width:300,height:300}});let C=(l[36].role==="owner"||l[36].role==="manager")&&Le(l);function j(){return l[21](l[38],l[36])}function R(...S){return l[22](l[36],...S)}function K(){return l[23](l[36])}return{c(){e=v("div"),t=v("div"),n=v("div"),ne(o.$$.fragment),i=H(),C&&C.c(),c=H(),h=v("div"),p=v("div"),I=v("div"),k=v("img"),X=H(),F=v("div"),T=te(D),O=H(),A=v("div"),U=v("div"),B=te(L),y=H(),f=v("button"),Y=v("img"),this.h()},l(S){e=_(S,"DIV",{class:!0,"aria-hidden":!0});var $=x(e);t=_($,"DIV",{class:!0});var P=x(t);n=_(P,"DIV",{class:!0});var W=x(n);re(o.$$.fragment,W),W.forEach(m),i=N(P),C&&C.l(P),P.forEach(m),c=N($),h=_($,"DIV",{class:!0});var J=x(h);p=_(J,"DIV",{class:!0});var d=x(p);I=_(d,"DIV",{class:!0});var M=x(I);k=_(M,"IMG",{src:!0,alt:!0}),X=N(M),F=_(M,"DIV",{class:!0});var z=x(F);T=le(z,D),z.forEach(m),M.forEach(m),d.forEach(m),O=N(J),A=_(J,"DIV",{class:!0});var ce=x(A);U=_(ce,"DIV",{class:!0});var ue=x(U);B=le(ue,L),ue.forEach(m),ce.forEach(m),J.forEach(m),y=N($),f=_($,"BUTTON",{class:!0});var fe=x(f);Y=_(fe,"IMG",{src:!0,alt:!0}),fe.forEach(m),$.forEach(m),this.h()},h(){r(n,"class","w-12 h-12"),r(t,"class","flex-none w-12 h-12 relative"),ve(k.src,V=nt)||r(k,"src",V),r(k,"alt","place-icon"),r(F,"class","typo-caption2"),r(I,"class","flex flex-row gap-0.5"),r(p,"class","flex flex-row gap-1 text-gray-400"),r(U,"class","typo-body1 text-black truncate"),r(A,"class","w-full flex flex-row gap-2"),r(h,"class","flex-auto min-w-0 flex flex-col items-start gap-0.5"),ve(Y.src,g=l[36].role==="owner"?ye:De)||r(Y,"src",g),r(Y,"alt",s=l[36].role==="owner"?"박스 삭제":"박스 나가기"),r(f,"class","absolute -right-12"),r(e,"class",u=`flex flex-row items-center px-4 gap-2.5 h-12 w-screen ${l[3]===l[36].idx&&!l[6]?"":"transition-transform"}`),r(e,"aria-hidden",""),me(e,"transform",`translateX(${l[3]===l[36].idx?l[4]?-oe+l[5]:l[5]:0}px)`)},m(S,$){G(S,e,$),a(e,t),a(t,n),ae(o,n,null),a(t,i),C&&C.m(t,null),a(e,c),a(e,h),a(h,p),a(p,I),a(I,k),a(I,X),a(I,F),a(F,T),a(h,O),a(h,A),a(A,U),a(U,B),a(e,y),a(e,f),a(f,Y),w=!0,b||(E=[q(f,"click",_e(j)),q(e,"touchstart",R),q(e,"touchmove",l[12]),q(e,"touchend",l[13]),q(e,"transitionend",l[14]),q(e,"click",K)],b=!0)},p(S,$){l=S;const P={};$[0]&4&&(P.src=Fe(l[36].image??"",500)),o.$set(P),l[36].role==="owner"||l[36].role==="manager"?C?(C.p(l,$),$[0]&4&&Q(C,1)):(C=Le(l),C.c(),Q(C,1),C.m(t,null)):C&&(we(),Z(C,1,1,()=>{C=null}),Ae()),(!w||$[0]&4)&&D!==(D=l[36].place_count+"")&&se(T,D),(!w||$[0]&4)&&L!==(L=l[36].name+"")&&se(B,L),(!w||$[0]&4&&!ve(Y.src,g=l[36].role==="owner"?ye:De))&&r(Y,"src",g),(!w||$[0]&4&&s!==(s=l[36].role==="owner"?"박스 삭제":"박스 나가기"))&&r(Y,"alt",s),(!w||$[0]&76&&u!==(u=`flex flex-row items-center px-4 gap-2.5 h-12 w-screen ${l[3]===l[36].idx&&!l[6]?"":"transition-transform"}`))&&r(e,"class",u),$[0]&60&&me(e,"transform",`translateX(${l[3]===l[36].idx?l[4]?-oe+l[5]:l[5]:0}px)`)},i(S){w||(Q(o.$$.fragment,S),Q(C),w=!0)},o(S){Z(o.$$.fragment,S),Z(C),w=!1},d(S){S&&m(e),ie(o),C&&C.d(),b=!1,Te(E)}}}function Oe(l){let e,t,n,o,i;return t=new et({props:{onMask:!0,position:"sticky",closeOnClick:!0,$$slots:{default:[ut]},$$scope:{ctx:l}}}),{c(){e=v("div"),ne(t.$$.fragment),this.h()},l(c){e=_(c,"DIV",{class:!0});var h=x(e);re(t.$$.fragment,h),h.forEach(m),this.h()},h(){r(e,"class","box-modal-container w-full fixed left-0 top-0 z-40"),me(e,"height",`${l[7]??0}px`)},m(c,h){G(c,e,h),ae(t,e,null),n=!0,o||(i=q(e,"touchend",l[16],{passive:!0}),o=!0)},p(c,h){const p={};h[0]&260|h[1]&256&&(p.$$scope={dirty:h,ctx:c}),t.$set(p),h[0]&128&&me(e,"height",`${c[7]??0}px`)},i(c){n||(Q(t.$$.fragment,c),n=!0)},o(c){Z(t.$$.fragment,c),n=!1},d(c){c&&m(e),ie(t),o=!1,i()}}}function ut(l){var C;let e,t,n,o,i=((C=l[2][l[8].listIdx])==null?void 0:C.name)+"",c,h,p,I=l[8].stage==="delete"?"박스를 삭제할까요?":"박스에서 나갈까요?",k,V,X,F=l[8].stage==="delete"?"이 박스를 삭제하면 모든 데이터가 영구적으로 삭제되며,":"박스를 나가면 박스 팔로우가 취소되고,",D,T,O,A,U=l[8].stage==="delete"?"다른 사용자도 더 이상 접근할 수 없습니다.":"새로운 소식에 대한 업데이트를 받을 수 없습니다.",L,B,y,f,Y="아니오",g,s,u=l[8].stage==="delete"?"삭제":"나가기",w,b,E;return{c(){e=v("section"),t=v("div"),n=v("div"),o=v("p"),c=te(i),h=H(),p=v("p"),k=te(I),V=H(),X=v("p"),D=te(F),T=H(),O=v("br"),A=H(),L=te(U),B=H(),y=v("div"),f=v("button"),f.textContent=Y,g=H(),s=v("button"),w=te(u),this.h()},l(j){e=_(j,"SECTION",{class:!0});var R=x(e);t=_(R,"DIV",{class:!0});var K=x(t);n=_(K,"DIV",{class:!0});var S=x(n);o=_(S,"P",{class:!0});var $=x(o);c=le($,i),$.forEach(m),h=N(S),p=_(S,"P",{class:!0});var P=x(p);k=le(P,I),P.forEach(m),S.forEach(m),V=N(K),X=_(K,"P",{class:!0});var W=x(X);D=le(W,F),T=N(W),O=_(W,"BR",{}),A=N(W),L=le(W,U),W.forEach(m),K.forEach(m),B=N(R),y=_(R,"DIV",{class:!0});var J=x(y);f=_(J,"BUTTON",{class:!0,"data-svelte-h":!0}),he(f)!=="svelte-15cnivs"&&(f.textContent=Y),g=N(J),s=_(J,"BUTTON",{class:!0});var d=x(s);w=le(d,u),d.forEach(m),J.forEach(m),R.forEach(m),this.h()},h(){r(o,"class","typo-h3 truncate"),r(p,"class","typo-h3 flex-none"),r(n,"class","w-full flex flex-row justify-center gap-1 typo-h3"),r(X,"class","typo-body4 text-center"),r(t,"class","box-modal-body flex flex-col justify-center items-center gap-2.5 w-full"),r(f,"class","bg-gray-300 rounded-md w-full h-14"),r(s,"class","bg-primary-500 rounded-md w-full h-14"),r(y,"class","box-modal-footer w-full flex flex-row gap-2.5 justify-center text-white text-lg font-semibold"),r(e,"class","box-modal flex flex-col items-start px-4 py-10 gap-7 absolute bottom-0 bg-white rounded-t-3xl w-screen z-40")},m(j,R){G(j,e,R),a(e,t),a(t,n),a(n,o),a(o,c),a(n,h),a(n,p),a(p,k),a(t,V),a(t,X),a(X,D),a(X,T),a(X,O),a(X,A),a(X,L),a(e,B),a(e,y),a(y,f),a(y,g),a(y,s),a(s,w),b||(E=[q(f,"click",l[16]),q(s,"click",l[17]),q(e,"touchstart",_e(l[18])),q(e,"touchend",_e(l[19]))],b=!0)},p(j,R){var K;R[0]&260&&i!==(i=((K=j[2][j[8].listIdx])==null?void 0:K.name)+"")&&se(c,i),R[0]&256&&I!==(I=j[8].stage==="delete"?"박스를 삭제할까요?":"박스에서 나갈까요?")&&se(k,I),R[0]&256&&F!==(F=j[8].stage==="delete"?"이 박스를 삭제하면 모든 데이터가 영구적으로 삭제되며,":"박스를 나가면 박스 팔로우가 취소되고,")&&se(D,F),R[0]&256&&U!==(U=j[8].stage==="delete"?"다른 사용자도 더 이상 접근할 수 없습니다.":"새로운 소식에 대한 업데이트를 받을 수 없습니다.")&&se(L,U),R[0]&256&&u!==(u=j[8].stage==="delete"?"삭제":"나가기")&&se(w,u)},d(j){j&&m(e),b=!1,Te(E)}}}function ft(l){let e,t,n,o,i,c,h,p,I,k,V,X,F,D,T,O,A;t=new qe({props:{position:"sticky",leftBack:"black",rightBoxAdd:"#1F5AFF",backgroundColor:"bg-white",rightSearch:"black",$$slots:{default:[ct]},$$scope:{ctx:l}}});function U(s){l[20](s)}let L={round:!0,placeholder:"검색하세요",prefixIcon:We,prefixPointer:!0,clear:!0,backgroundColor:"bg-gray-50",onInput:l[10]};l[1]!==void 0&&(L.value=l[1]),i=new Ke({props:L}),Ue.push(()=>Pe(i,"value",U));let B=l[0].length===0&&Xe(l),y=Ie(l[2]),f=[];for(let s=0;s<y.length;s+=1)f[s]=Me($e(l,y,s));const Y=s=>Z(f[s],1,1,()=>{f[s]=null});V=new ot({props:{heightPx:72}});let g=l[8]&&Oe(l);return O=new lt({}),{c(){e=v("div"),ne(t.$$.fragment),n=H(),o=v("section"),ne(i.$$.fragment),h=H(),p=v("section"),B&&B.c(),I=H();for(let s=0;s<f.length;s+=1)f[s].c();k=H(),ne(V.$$.fragment),F=H(),g&&g.c(),T=H(),ne(O.$$.fragment),this.h()},l(s){e=_(s,"DIV",{class:!0});var u=x(e);re(t.$$.fragment,u),n=N(u),o=_(u,"SECTION",{class:!0});var w=x(o);re(i.$$.fragment,w),w.forEach(m),h=N(u),p=_(u,"SECTION",{class:!0});var b=x(p);B&&B.l(b),I=N(b);for(let E=0;E<f.length;E+=1)f[E].l(b);k=N(b),re(V.$$.fragment,b),b.forEach(m),F=N(u),g&&g.l(u),u.forEach(m),T=N(s),re(O.$$.fragment,s),this.h()},h(){r(o,"class","box-search sticky p-4 top-[100px] z-10 bg-white"),r(p,"class",X=`box-contents flex flex-col ${l[2].length===0?"justify-center":"justify-start"} items-center gap-6 my-2 overflow-x-hidden flex-auto`),r(e,"class","box flex flex-col min-h-full"),Ye(()=>l[24].call(e))},m(s,u){G(s,e,u),ae(t,e,null),a(e,n),a(e,o),ae(i,o,null),a(e,h),a(e,p),B&&B.m(p,null),a(p,I);for(let w=0;w<f.length;w+=1)f[w]&&f[w].m(p,null);a(p,k),ae(V,p,null),a(e,F),g&&g.m(e,null),D=Ve(e,l[24].bind(e)),G(s,T,u),ae(O,s,u),A=!0},p(s,u){const w={};u[1]&256&&(w.$$scope={dirty:u,ctx:s}),t.$set(w);const b={};if(!c&&u[0]&2&&(c=!0,b.value=s[1],je(()=>c=!1)),i.$set(b),s[0].length===0?B?B.p(s,u):(B=Xe(s),B.c(),B.m(p,I)):B&&(B.d(1),B=null),u[0]&63612){y=Ie(s[2]);let E;for(E=0;E<y.length;E+=1){const C=$e(s,y,E);f[E]?(f[E].p(C,u),Q(f[E],1)):(f[E]=Me(C),f[E].c(),Q(f[E],1),f[E].m(p,k))}for(we(),E=y.length;E<f.length;E+=1)Y(E);Ae()}(!A||u[0]&4&&X!==(X=`box-contents flex flex-col ${s[2].length===0?"justify-center":"justify-start"} items-center gap-6 my-2 overflow-x-hidden flex-auto`))&&r(p,"class",X),s[8]?g?(g.p(s,u),u[0]&256&&Q(g,1)):(g=Oe(s),g.c(),Q(g,1),g.m(e,null)):g&&(we(),Z(g,1,1,()=>{g=null}),Ae())},i(s){if(!A){Q(t.$$.fragment,s),Q(i.$$.fragment,s);for(let u=0;u<y.length;u+=1)Q(f[u]);Q(V.$$.fragment,s),Q(g),Q(O.$$.fragment,s),A=!0}},o(s){Z(t.$$.fragment,s),Z(i.$$.fragment,s),f=f.filter(Boolean);for(let u=0;u<f.length;u+=1)Z(f[u]);Z(V.$$.fragment,s),Z(g),Z(O.$$.fragment,s),A=!1},d(s){s&&(m(e),m(T)),ie(t),ie(i),B&&B.d(),Re(f,s),ie(V),g&&g.d(),D(),ie(O,s)}}}let oe=48;function dt(l,e,t){let n,o;Ce(l,xe,d=>t(0,n=d)),Ce(l,ee,d=>t(29,o=d));const i=Qe();let c="",h=[],p=Je();function I(){Ge()?Be("/boxes/-1/setting"):ke.emit("showSignInModal",{removable:!0})}let k;function V(d){clearTimeout(k),k=setTimeout(X,300)}function X(){return c?n.filter(d=>d.name.includes(c)):n}let F,D=!1,T=-1,O=-1,A;function U(d,M){A=void 0,t(5,L=0),t(6,y=!1),ee.set(!0),T=d.touches[0].clientX,O=d.touches[0].clientY,F!==void 0&&F!==M&&t(4,D=!1),t(3,F=M)}let L=0;function B(d){if(F===void 0)return;let z=d.touches[0].clientX-T,ue=d.touches[0].clientY-O;if(A===void 0&&(A=Math.abs(z)-Math.abs(ue)>=0,!D&&A&&z>0))return t(3,F=void 0),t(5,L=0),ee.set(!1);if(A){const fe=D?oe:0,be=D?0:-oe;t(5,L=z>fe?fe:z<be?be:z)}}let y=!1;function f(d){if(F!==void 0)if(A){t(6,y=!0);let M=d.changedTouches[0].clientX-T;(L===0||Math.abs(L)===oe)&&(d.stopPropagation(),Y()),M>=oe/2?t(4,D=!1):M<=-oe/2&&t(4,D=!0),t(5,L=0)}else ee.set(!1)}function Y(){t(6,y=!1),ee.set(!1)}function g(d){o||b||(t(3,F=void 0),t(4,D=!1),A=void 0,t(5,L=0),ee.set(!0),T=d.touches[0].clientX,O=d.touches[0].clientY)}function s(d){if(A||b)return;let z=d.touches[0].clientX-T,ue=d.touches[0].clientY-O;A===void 0&&(A=Math.abs(z)-Math.abs(ue)>=0),A&&ee.set(!1)}function u(d){b||(A||i("stopSwipe",{stop:!0,toDefault:!0}),ee.set(!1),i("stopSwipe",{stop:!1}))}ze(()=>{document.addEventListener("touchstart",g),document.addEventListener("touchmove",s),document.addEventListener("touchend",u)}),Ze(()=>{document.removeEventListener("touchstart",g),document.removeEventListener("touchmove",s),document.removeEventListener("touchend",u)});let w,b;function E(d,M,z){t(8,b={listIdx:d,idx:M,stage:z==="owner"?"delete":"leave"}),i("stopSwipe",{stop:!0,toHiddenScroll:!0})}function C(){t(8,b=void 0),t(3,F=void 0),t(4,D=!1),i("stopSwipe",{stop:!1,toHiddenScroll:!1})}function j(){if(!b)return;b.stage==="delete"&&fetch(`${st}/boxes/${b.idx}`,{method:"DELETE",headers:{"Content-Type":"application/json",Authorization:`Bearer ${p}`}});const M=n[b.listIdx];xe.update(z=>z=z.filter(ce=>ce.idx!==b.idx)),ke.emit("pushSnackbar",{message:`${M.name} 박스를 삭제했습니다.`}),C()}function R(d){Ee.call(this,l,d)}function K(d){Ee.call(this,l,d)}function S(d){c=d,t(1,c)}const $=(d,M)=>E(d,M.idx,M.role),P=(d,M)=>U(M,d.idx),W=d=>Be(`/boxes/${d.idx}`);function J(){w=this.clientHeight,t(7,w)}return l.$$.update=()=>{l.$$.dirty[0]&1&&n&&t(2,h=X())},[n,c,h,F,D,L,y,w,b,I,V,U,B,f,Y,E,C,j,R,K,S,$,P,W,J]}class kt extends He{constructor(e){super(),Ne(this,e,dt,ft,Se,{},null,[-1,-1])}}export{kt as component};
