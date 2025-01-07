import{H as Ve,k as _e,f as ee,i as je,e as Ie,A as Oe,d as Re}from"../chunks/Header.FoXJ-u0t.js";import{s as He,G as pe,H as ge,b as B,f as m,m as r,i as W,h as a,n as de,B as ze,e as v,a as H,c as _,g as Y,V as Qe,Y as Pe,C as Ze,I as qe,k as xe,Z as Ke,z as Ge,A as Je,D as he,p as q,t as le,d as se,K as ve,J as me,q as Ae,j as oe,x as Ye,y as Be}from"../chunks/scheduler.B4Oq0Y6j.js";import{S as Ne,i as Ue,e as We,c as re,b as ae,m as ie,t as z,f as be,a as P,d as ce,g as we}from"../chunks/index.Dwy94kkp.js";import{e as ke}from"../chunks/each.DoWc_6y-.js";import{g as Fe}from"../chunks/entry.CMhpHdxa.js";import{F as et}from"../chunks/Field.2ZpjzqQB.js";import{s as tt}from"../chunks/search.BhpZG1Ux.js";import{M as lt}from"../chunks/Mask._XERVIre.js";import{H as st}from"../chunks/HexImage.BPmv3jwL.js";import{N as ot}from"../chunks/NavigationBar.BqF2CjS9.js";import{s as ye}from"../chunks/s32cloudfront.bAl2UV-x.js";import{B as nt}from"../chunks/BottomNavigationPadder.DBgHLvJv.js";const $e="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADFSURBVHgB7dfbCYNAEIXh2ZAq8pQ0kNSRilOHFcQn21AEFZH1ugOHgf97UxT27Ow1tW9rLbCbBUcANQKoEUCNAGoEUCOA2t08/f5mj+f2N01t9n2ZF98K7DX+6Dcn+FZg9En595X/1SNdvtB4N2Yt9I7wkzhFv1KWz4HSoXRx6IzYByZne9JpEeAokdX37ryHl8+OqIAaAdTYB7KWe0LhbruFCkwqzZmwvAL9FVHx7yD8cZplVI0AagRQI4AaAdQIoBY+QAecIyKJbyjm6wAAAABJRU5ErkJggg==",De="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEhSURBVHgB7dmxasJQGAXgY+kjFDt1aJ+lnRQc2qHdWotLKU6KCA5ZRScHF1FXBxdBJ30LQXBRwUnxHTQZMrgI3v/KUTjfGBLIyX/vf2+SROo9u8cNu8ONUwA2BWBTADYFYFMANgVgu4dRp1lFMvkAF9vtDtm/EizMFXC9eeu1MXMFYumP37POH/bb8EFz4Nwn75vaaCT38wUWU4DHsIs06gEyqVewOM+Bl+cnVIr/XlqhhVOATPoNue/Po2On2uIlJ7rbENpfz6ckpwoMRhNMZ/OjIcRqp86TeLFcoxzUsFitwWTqQptwM5YvBGFFxmDxsg60uj2waCWO2qevnaUL7UZjrCqYKxC9FjKujSX0h4ZMAdgUgE0B2BSATQHYFIDtAJj3PWal2lrSAAAAAElFTkSuQmCC",rt="data:image/svg+xml,%3csvg%20width='14'%20height='15'%20viewBox='0%200%2014%2015'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M7%2014.3426L3.28767%2010.6303C2.55345%209.89603%202.05344%208.96057%201.85087%207.94217C1.64831%206.92377%201.75228%205.86817%202.14964%204.90887C2.547%203.94956%203.21991%203.12962%204.08327%202.55275C4.94662%201.97587%205.96165%201.66797%207%201.66797C8.03835%201.66797%209.05338%201.97587%209.91674%202.55275C10.7801%203.12962%2011.453%203.94956%2011.8504%204.90887C12.2477%205.86817%2012.3517%206.92377%2012.1491%207.94217C11.9466%208.96057%2011.4466%209.89603%2010.7123%2010.6303L7%2014.3426ZM9.8875%209.80542C10.4585%209.23434%2010.8474%208.50676%2011.0049%207.71468C11.1624%206.92261%2011.0815%206.1016%2010.7725%205.3555C10.4634%204.60939%209.94003%203.97169%209.26854%203.52302C8.59705%203.07436%207.80759%202.83488%207%202.83488C6.19241%202.83488%205.40296%203.07436%204.73147%203.52302C4.05998%203.97169%203.5366%204.60939%203.22753%205.3555C2.91846%206.1016%202.83758%206.92261%202.9951%207.71468C3.15262%208.50676%203.54148%209.23434%204.1125%209.80542L7%2012.6929L9.8875%209.80542ZM7%208.08459C6.69058%208.08459%206.39384%207.96167%206.17505%207.74288C5.95625%207.52409%205.83334%207.22734%205.83334%206.91792C5.83334%206.6085%205.95625%206.31176%206.17505%206.09297C6.39384%205.87417%206.69058%205.75126%207%205.75126C7.30942%205.75126%207.60617%205.87417%207.82496%206.09297C8.04375%206.31176%208.16667%206.6085%208.16667%206.91792C8.16667%207.22734%208.04375%207.52409%207.82496%207.74288C7.60617%207.96167%207.30942%208.08459%207%208.08459Z'%20fill='%239DA5B4'%20/%3e%3c/svg%3e";function at(l){let e,t,n,o,i;return{c(){e=pe("svg"),t=pe("circle"),o=pe("path"),this.h()},l(c){e=ge(c,"svg",{width:!0,height:!0,viewBox:!0,fill:!0,xmlns:!0});var d=B(e);t=ge(d,"circle",{cx:!0,cy:!0,r:!0,fill:!0}),B(t).forEach(m),o=ge(d,"path",{"fill-rule":!0,"clip-rule":!0,d:!0,fill:!0}),B(o).forEach(m),d.forEach(m),this.h()},h(){r(t,"cx","8"),r(t,"cy","8"),r(t,"r","8"),r(t,"fill",n=l[0]==="owner"?"#FFF5F0":"#EAFFF4"),r(o,"fill-rule","evenodd"),r(o,"clip-rule","evenodd"),r(o,"d","M7.62492 3.76955C7.81242 3.39453 8.18742 3.39453 8.37492 3.7695L10.313 7.11708C10.3274 7.1071 10.3426 7.09811 10.3584 7.09019L12.5656 5.98663C12.8444 5.84721 13.1617 6.08913 13.1011 6.39494L12.1578 11.1549C12.123 11.3305 11.969 11.457 11.79 11.457H9.88001C9.87831 11.457 9.87662 11.457 9.87492 11.457L6.76851 11.457C6.76656 11.457 6.76461 11.457 6.76266 11.457H4.2098C4.0308 11.457 3.87675 11.3305 3.84196 11.1549L2.89863 6.39494C2.83803 6.08913 3.15534 5.84721 3.43418 5.98663L5.64131 7.09019C5.65547 7.09727 5.59175 7.06541 5.68216 7.11394C5.70599 7.09019 5.6972 7.11394 6.10108 6.41719C6.08531 6.43899 6.1158 6.39538 6.10108 6.41719C6.12971 6.37762 6.15859 6.33772 6.18227 6.29624L7.62492 3.76955Z"),r(o,"fill",i=l[0]==="owner"?"#FF7A00":"#1FCA70"),r(e,"width","16"),r(e,"height","16"),r(e,"viewBox","0 0 16 16"),r(e,"fill","none"),r(e,"xmlns","http://www.w3.org/2000/svg")},m(c,d){W(c,e,d),a(e,t),a(e,o)},p(c,[d]){d&1&&n!==(n=c[0]==="owner"?"#FFF5F0":"#EAFFF4")&&r(t,"fill",n),d&1&&i!==(i=c[0]==="owner"?"#FF7A00":"#1FCA70")&&r(o,"fill",i)},i:de,o:de,d(c){c&&m(e)}}}function it(l,e,t){let{type:n="owner"}=e;return l.$$set=o=>{"type"in o&&t(0,n=o.type)},[n]}class ct extends Ne{constructor(e){super(),Ue(this,e,it,at,He,{type:0})}}function Xe(l,e,t){const n=l.slice();return n[37]=e[t],n[39]=t,n}function ut(l){let e,t="박스";return{c(){e=v("div"),e.textContent=t,this.h()},l(n){e=_(n,"DIV",{class:!0,"data-svelte-h":!0}),he(e)!=="svelte-oldnbc"&&(e.textContent=t),this.h()},h(){r(e,"class","text-[21242C] typo-h3")},m(n,o){W(n,e,o)},p:de,d(n){n&&m(e)}}}function Le(l){let e,t,n="아직 생성된 박스가 없습니다.<br/>지금 새로운 박스를 만들어보세요!",o,i,c="새 박스 만들기",d,p;return{c(){e=v("div"),t=v("p"),t.innerHTML=n,o=H(),i=v("button"),i.textContent=c,this.h()},l(I){e=_(I,"DIV",{class:!0});var k=B(e);t=_(k,"P",{class:!0,"data-svelte-h":!0}),he(t)!=="svelte-92hfch"&&(t.innerHTML=n),o=Y(k),i=_(k,"BUTTON",{class:!0,"data-svelte-h":!0}),he(i)!=="svelte-yawy92"&&(i.textContent=c),k.forEach(m),this.h()},h(){r(t,"class","typo-body3 text-gray-500 text-center"),r(i,"class","px-3.5 py-1.5 w-fit rounded-3xl border border-gray-200 typo-body3 text-gray-700"),r(e,"class","flex flex-col gap-3.5 px-4 items-center")},m(I,k){W(I,e,k),a(e,t),a(e,o),a(e,i),d||(p=q(i,"click",l[9]),d=!0)},p:de,d(I){I&&m(e),d=!1,p()}}}function Se(l){let e,t,n;return t=new ct({props:{type:l[37].role}}),{c(){e=v("div"),re(t.$$.fragment),this.h()},l(o){e=_(o,"DIV",{class:!0});var i=B(e);ae(t.$$.fragment,i),i.forEach(m),this.h()},h(){r(e,"class","absolute bottom-0 right-0.5")},m(o,i){W(o,e,i),ie(t,e,null),n=!0},p(o,i){const c={};i[0]&4&&(c.type=o[37].role),t.$set(c)},i(o){n||(z(t.$$.fragment,o),n=!0)},o(o){P(t.$$.fragment,o),n=!1},d(o){o&&m(e),ce(t)}}}function Me(l){let e,t,n,o,i,c,d,p,I,k,V,X,F,$=l[37].place_count+"",T,S,A,N,L=l[37].name+"",x,y,f,U,g,s,u,b,w,E;o=new st({props:{src:ye(l[37].image??"",500),width:300,height:300}});let C=(l[37].role==="owner"||l[37].role==="manager")&&Se(l);function j(){return l[22](l[39],l[37])}function R(...M){return l[23](l[37],...M)}function K(){return l[24](l[37])}return{c(){e=v("div"),t=v("div"),n=v("div"),re(o.$$.fragment),i=H(),C&&C.c(),c=H(),d=v("div"),p=v("div"),I=v("div"),k=v("img"),X=H(),F=v("div"),T=le($),S=H(),A=v("div"),N=v("div"),x=le(L),y=H(),f=v("button"),U=v("img"),this.h()},l(M){e=_(M,"DIV",{class:!0,"aria-hidden":!0});var D=B(e);t=_(D,"DIV",{class:!0});var Z=B(t);n=_(Z,"DIV",{class:!0});var G=B(n);ae(o.$$.fragment,G),G.forEach(m),i=Y(Z),C&&C.l(Z),Z.forEach(m),c=Y(D),d=_(D,"DIV",{class:!0});var J=B(d);p=_(J,"DIV",{class:!0});var te=B(p);I=_(te,"DIV",{class:!0});var h=B(I);k=_(h,"IMG",{src:!0,alt:!0}),X=Y(h),F=_(h,"DIV",{class:!0});var O=B(F);T=se(O,$),O.forEach(m),h.forEach(m),te.forEach(m),S=Y(J),A=_(J,"DIV",{class:!0});var Q=B(A);N=_(Q,"DIV",{class:!0});var ue=B(N);x=se(ue,L),ue.forEach(m),Q.forEach(m),J.forEach(m),y=Y(D),f=_(D,"BUTTON",{class:!0});var fe=B(f);U=_(fe,"IMG",{src:!0,alt:!0}),fe.forEach(m),D.forEach(m),this.h()},h(){r(n,"class","w-12 h-12"),r(t,"class","flex-none w-12 h-12 relative"),ve(k.src,V=rt)||r(k,"src",V),r(k,"alt","place-icon"),r(F,"class","typo-caption2"),r(I,"class","flex flex-row gap-0.5"),r(p,"class","flex flex-row gap-1 text-gray-400"),r(N,"class","typo-body1 text-black truncate"),r(A,"class","w-full flex flex-row gap-2"),r(d,"class","flex-auto min-w-0 flex flex-col items-start gap-0.5"),ve(U.src,g=l[37].role==="owner"?$e:De)||r(U,"src",g),r(U,"alt",s=l[37].role==="owner"?"박스 삭제":"박스 나가기"),r(f,"class","absolute -right-12"),r(e,"class",u=`flex flex-row items-center px-4 gap-2.5 h-12 w-screen ${l[3]===l[37].idx&&!l[6]?"":"transition-transform"}`),r(e,"aria-hidden",""),me(e,"transform",`translateX(${l[3]===l[37].idx?l[4]?-ne+l[5]:l[5]:0}px)`)},m(M,D){W(M,e,D),a(e,t),a(t,n),ie(o,n,null),a(t,i),C&&C.m(t,null),a(e,c),a(e,d),a(d,p),a(p,I),a(I,k),a(I,X),a(I,F),a(F,T),a(d,S),a(d,A),a(A,N),a(N,x),a(e,y),a(e,f),a(f,U),b=!0,w||(E=[q(f,"click",Ae(j)),q(e,"touchstart",R),q(e,"touchmove",l[12]),q(e,"touchend",l[13]),q(e,"transitionend",l[14]),q(e,"click",K)],w=!0)},p(M,D){l=M;const Z={};D[0]&4&&(Z.src=ye(l[37].image??"",500)),o.$set(Z),l[37].role==="owner"||l[37].role==="manager"?C?(C.p(l,D),D[0]&4&&z(C,1)):(C=Se(l),C.c(),z(C,1),C.m(t,null)):C&&(we(),P(C,1,1,()=>{C=null}),be()),(!b||D[0]&4)&&$!==($=l[37].place_count+"")&&oe(T,$),(!b||D[0]&4)&&L!==(L=l[37].name+"")&&oe(x,L),(!b||D[0]&4&&!ve(U.src,g=l[37].role==="owner"?$e:De))&&r(U,"src",g),(!b||D[0]&4&&s!==(s=l[37].role==="owner"?"박스 삭제":"박스 나가기"))&&r(U,"alt",s),(!b||D[0]&76&&u!==(u=`flex flex-row items-center px-4 gap-2.5 h-12 w-screen ${l[3]===l[37].idx&&!l[6]?"":"transition-transform"}`))&&r(e,"class",u),D[0]&60&&me(e,"transform",`translateX(${l[3]===l[37].idx?l[4]?-ne+l[5]:l[5]:0}px)`)},i(M){b||(z(o.$$.fragment,M),z(C),b=!0)},o(M){P(o.$$.fragment,M),P(C),b=!1},d(M){M&&m(e),ce(o),C&&C.d(),w=!1,Ye(E)}}}function Te(l){let e,t,n,o,i;return t=new lt({props:{onMask:!0,position:"sticky",closeOnClick:!0,$$slots:{default:[ft]},$$scope:{ctx:l}}}),{c(){e=v("div"),re(t.$$.fragment),this.h()},l(c){e=_(c,"DIV",{class:!0});var d=B(e);ae(t.$$.fragment,d),d.forEach(m),this.h()},h(){r(e,"class","box-modal-container w-full fixed left-0 top-0 z-40"),me(e,"height",`${l[7]??0}px`)},m(c,d){W(c,e,d),ie(t,e,null),n=!0,o||(i=q(e,"touchend",l[16],{passive:!0}),o=!0)},p(c,d){const p={};d[0]&260|d[1]&512&&(p.$$scope={dirty:d,ctx:c}),t.$set(p),d[0]&128&&me(e,"height",`${c[7]??0}px`)},i(c){n||(z(t.$$.fragment,c),n=!0)},o(c){P(t.$$.fragment,c),n=!1},d(c){c&&m(e),ce(t),o=!1,i()}}}function ft(l){var C;let e,t,n,o,i=((C=l[2][l[8].listIdx])==null?void 0:C.name)+"",c,d,p,I=l[8].stage==="delete"?"박스를 삭제할까요?":"박스에서 나갈까요?",k,V,X,F=l[8].stage==="delete"?"이 박스를 삭제하면 모든 데이터가 영구적으로 삭제되며,":"박스를 나가면 박스 팔로우가 취소되고,",$,T,S,A,N=l[8].stage==="delete"?"다른 사용자도 더 이상 접근할 수 없습니다.":"새로운 소식에 대한 업데이트를 받을 수 없습니다.",L,x,y,f,U="아니오",g,s,u=l[8].stage==="delete"?"삭제":"나가기",b,w,E;return{c(){e=v("section"),t=v("div"),n=v("div"),o=v("p"),c=le(i),d=H(),p=v("p"),k=le(I),V=H(),X=v("p"),$=le(F),T=H(),S=v("br"),A=H(),L=le(N),x=H(),y=v("div"),f=v("button"),f.textContent=U,g=H(),s=v("button"),b=le(u),this.h()},l(j){e=_(j,"SECTION",{class:!0});var R=B(e);t=_(R,"DIV",{class:!0});var K=B(t);n=_(K,"DIV",{class:!0});var M=B(n);o=_(M,"P",{class:!0});var D=B(o);c=se(D,i),D.forEach(m),d=Y(M),p=_(M,"P",{class:!0});var Z=B(p);k=se(Z,I),Z.forEach(m),M.forEach(m),V=Y(K),X=_(K,"P",{class:!0});var G=B(X);$=se(G,F),T=Y(G),S=_(G,"BR",{}),A=Y(G),L=se(G,N),G.forEach(m),K.forEach(m),x=Y(R),y=_(R,"DIV",{class:!0});var J=B(y);f=_(J,"BUTTON",{class:!0,"data-svelte-h":!0}),he(f)!=="svelte-15cnivs"&&(f.textContent=U),g=Y(J),s=_(J,"BUTTON",{class:!0});var te=B(s);b=se(te,u),te.forEach(m),J.forEach(m),R.forEach(m),this.h()},h(){r(o,"class","typo-h3 truncate"),r(p,"class","typo-h3 flex-none"),r(n,"class","w-full flex flex-row justify-center gap-1 typo-h3"),r(X,"class","typo-body4 text-center"),r(t,"class","box-modal-body flex flex-col justify-center items-center gap-2.5 w-full"),r(f,"class","bg-gray-300 rounded-md w-full h-14"),r(s,"class","bg-primary-500 rounded-md w-full h-14"),r(y,"class","box-modal-footer w-full flex flex-row gap-2.5 justify-center text-white text-lg font-semibold"),r(e,"class","box-modal flex flex-col items-start px-4 py-10 gap-7 absolute bottom-0 bg-white rounded-t-3xl w-screen z-40")},m(j,R){W(j,e,R),a(e,t),a(t,n),a(n,o),a(o,c),a(n,d),a(n,p),a(p,k),a(t,V),a(t,X),a(X,$),a(X,T),a(X,S),a(X,A),a(X,L),a(e,x),a(e,y),a(y,f),a(y,g),a(y,s),a(s,b),w||(E=[q(f,"click",l[16]),q(s,"click",l[17]),q(e,"touchstart",Ae(l[18])),q(e,"touchend",Ae(l[19]))],w=!0)},p(j,R){var K;R[0]&260&&i!==(i=((K=j[2][j[8].listIdx])==null?void 0:K.name)+"")&&oe(c,i),R[0]&256&&I!==(I=j[8].stage==="delete"?"박스를 삭제할까요?":"박스에서 나갈까요?")&&oe(k,I),R[0]&256&&F!==(F=j[8].stage==="delete"?"이 박스를 삭제하면 모든 데이터가 영구적으로 삭제되며,":"박스를 나가면 박스 팔로우가 취소되고,")&&oe($,F),R[0]&256&&N!==(N=j[8].stage==="delete"?"다른 사용자도 더 이상 접근할 수 없습니다.":"새로운 소식에 대한 업데이트를 받을 수 없습니다.")&&oe(L,N),R[0]&256&&u!==(u=j[8].stage==="delete"?"삭제":"나가기")&&oe(b,u)},d(j){j&&m(e),w=!1,Ye(E)}}}function dt(l){let e,t,n,o,i,c,d,p,I,k,V,X,F,$,T,S,A;t=new Ve({props:{position:"sticky",leftBack:"black",rightBoxAdd:"#1F5AFF",backgroundColor:"bg-white",rightSearch:"black",$$slots:{default:[ut]},$$scope:{ctx:l}}});function N(s){l[21](s)}let L={round:!0,placeholder:"검색하세요",prefixIcon:tt,prefixPointer:!0,onPrefixClick:l[20],clear:!0,backgroundColor:"bg-gray-50",onInput:l[10]};l[1]!==void 0&&(L.value=l[1]),i=new et({props:L}),ze.push(()=>We(i,"value",N));let x=l[0].length===0&&Le(l),y=ke(l[2]),f=[];for(let s=0;s<y.length;s+=1)f[s]=Me(Xe(l,y,s));const U=s=>P(f[s],1,1,()=>{f[s]=null});V=new nt({props:{heightPx:72}});let g=l[8]&&Te(l);return S=new ot({}),{c(){e=v("div"),re(t.$$.fragment),n=H(),o=v("section"),re(i.$$.fragment),d=H(),p=v("section"),x&&x.c(),I=H();for(let s=0;s<f.length;s+=1)f[s].c();k=H(),re(V.$$.fragment),F=H(),g&&g.c(),T=H(),re(S.$$.fragment),this.h()},l(s){e=_(s,"DIV",{class:!0});var u=B(e);ae(t.$$.fragment,u),n=Y(u),o=_(u,"SECTION",{class:!0});var b=B(o);ae(i.$$.fragment,b),b.forEach(m),d=Y(u),p=_(u,"SECTION",{class:!0});var w=B(p);x&&x.l(w),I=Y(w);for(let E=0;E<f.length;E+=1)f[E].l(w);k=Y(w),ae(V.$$.fragment,w),w.forEach(m),F=Y(u),g&&g.l(u),u.forEach(m),T=Y(s),ae(S.$$.fragment,s),this.h()},h(){r(o,"class","box-search sticky p-4 top-[100px] z-10 bg-white"),r(p,"class",X=`box-contents flex flex-col ${l[2].length===0?"justify-center":"justify-start"} items-center gap-6 my-2 overflow-x-hidden flex-auto`),r(e,"class","box flex flex-col min-h-full"),Qe(()=>l[25].call(e))},m(s,u){W(s,e,u),ie(t,e,null),a(e,n),a(e,o),ie(i,o,null),a(e,d),a(e,p),x&&x.m(p,null),a(p,I);for(let b=0;b<f.length;b+=1)f[b]&&f[b].m(p,null);a(p,k),ie(V,p,null),a(e,F),g&&g.m(e,null),$=Pe(e,l[25].bind(e)),W(s,T,u),ie(S,s,u),A=!0},p(s,u){const b={};u[1]&512&&(b.$$scope={dirty:u,ctx:s}),t.$set(b);const w={};if(!c&&u[0]&2&&(c=!0,w.value=s[1],Ze(()=>c=!1)),i.$set(w),s[0].length===0?x?x.p(s,u):(x=Le(s),x.c(),x.m(p,I)):x&&(x.d(1),x=null),u[0]&63612){y=ke(s[2]);let E;for(E=0;E<y.length;E+=1){const C=Xe(s,y,E);f[E]?(f[E].p(C,u),z(f[E],1)):(f[E]=Me(C),f[E].c(),z(f[E],1),f[E].m(p,k))}for(we(),E=y.length;E<f.length;E+=1)U(E);be()}(!A||u[0]&4&&X!==(X=`box-contents flex flex-col ${s[2].length===0?"justify-center":"justify-start"} items-center gap-6 my-2 overflow-x-hidden flex-auto`))&&r(p,"class",X),s[8]?g?(g.p(s,u),u[0]&256&&z(g,1)):(g=Te(s),g.c(),z(g,1),g.m(e,null)):g&&(we(),P(g,1,1,()=>{g=null}),be())},i(s){if(!A){z(t.$$.fragment,s),z(i.$$.fragment,s);for(let u=0;u<y.length;u+=1)z(f[u]);z(V.$$.fragment,s),z(g),z(S.$$.fragment,s),A=!0}},o(s){P(t.$$.fragment,s),P(i.$$.fragment,s),f=f.filter(Boolean);for(let u=0;u<f.length;u+=1)P(f[u]);P(V.$$.fragment,s),P(g),P(S.$$.fragment,s),A=!1},d(s){s&&(m(e),m(T)),ce(t),ce(i),x&&x.d(),qe(f,s),ce(V),g&&g.d(),$(),ce(S,s)}}}let ne=48;function ht(l,e,t){let n,o;xe(l,_e,h=>t(0,n=h)),xe(l,ee,h=>t(30,o=h));const i=Ke();let c="",d=[],p=sessionStorage.getItem("jwt");function I(){je()?Fe("/boxes/-1/setting"):Ie.emit("showSignInModal",{removable:!0})}let k;function V(h){clearTimeout(k),k=setTimeout(X,300)}function X(){return c?n.filter(h=>h.name.includes(c)):n}let F,$=!1,T=-1,S=-1,A;function N(h,O){A=void 0,t(5,L=0),t(6,y=!1),ee.set(!0),T=h.touches[0].clientX,S=h.touches[0].clientY,F!==void 0&&F!==O&&t(4,$=!1),t(3,F=O)}let L=0;function x(h){if(F===void 0)return;let Q=h.touches[0].clientX-T,fe=h.touches[0].clientY-S;if(A===void 0&&(A=Math.abs(Q)-Math.abs(fe)>=0,!$&&A&&Q>0))return t(3,F=void 0),t(5,L=0),ee.set(!1);if(A){const Ce=$?ne:0,Ee=$?0:-ne;t(5,L=Q>Ce?Ce:Q<Ee?Ee:Q)}}let y=!1;function f(h){if(F!==void 0)if(A){t(6,y=!0);let O=h.changedTouches[0].clientX-T;(L===0||Math.abs(L)===ne)&&(h.stopPropagation(),U()),O>=ne/2?t(4,$=!1):O<=-ne/2&&t(4,$=!0),t(5,L=0)}else ee.set(!1)}function U(){t(6,y=!1),ee.set(!1)}function g(h){o||w||(t(3,F=void 0),t(4,$=!1),A=void 0,t(5,L=0),ee.set(!0),T=h.touches[0].clientX,S=h.touches[0].clientY)}function s(h){if(A||w)return;let Q=h.touches[0].clientX-T,fe=h.touches[0].clientY-S;A===void 0&&(A=Math.abs(Q)-Math.abs(fe)>=0),A&&ee.set(!1)}function u(h){w||(A||i("stopSwipe",{stop:!0,toDefault:!0}),ee.set(!1),i("stopSwipe",{stop:!1}))}Ge(()=>{document.addEventListener("touchstart",g),document.addEventListener("touchmove",s),document.addEventListener("touchend",u)}),Je(()=>{document.removeEventListener("touchstart",g),document.removeEventListener("touchmove",s),document.removeEventListener("touchend",u)});let b,w;function E(h,O,Q){t(8,w={listIdx:h,idx:O,stage:Q==="owner"?"delete":"leave"}),i("stopSwipe",{stop:!0,toHiddenScroll:!0})}function C(){t(8,w=void 0),t(3,F=void 0),t(4,$=!1),i("stopSwipe",{stop:!1,toHiddenScroll:!1})}function j(){if(!w)return;w.stage==="delete"&&fetch(`${Oe}/boxes/${w.idx}`,{method:"DELETE",headers:{"Content-Type":"application/json",Authorization:`Bearer ${p}`}});const O=n[w.listIdx];_e.update(Q=>Q=Q.filter(ue=>ue.idx!==w.idx)),Ie.emit("pushSnackbar",{message:`${O.name} 박스를 삭제했습니다.`}),C()}function R(h){Be.call(this,l,h)}function K(h){Be.call(this,l,h)}const M=()=>window.history.back();function D(h){c=h,t(1,c)}const Z=(h,O)=>E(h,O.idx,O.role),G=(h,O)=>N(O,h.idx),J=h=>Fe(`/boxes/${h.idx}/detail`);function te(){b=this.clientHeight,t(7,b)}return l.$$.update=()=>{l.$$.dirty[0]&1&&n&&t(2,d=X())},[n,c,d,F,$,L,y,b,w,I,V,N,x,f,U,E,C,j,R,K,M,D,Z,G,J,te]}class kt extends Ne{constructor(e){super(),Ue(this,e,ht,dt,He,{},null,[-1,-1])}}const mt=async({fetch:l,depends:e})=>{e("app:boxes");const t=Re();if(t===null)return{boxes:[]};const n=await l(`${Oe}/boxes`,{method:"GET",headers:{Authorization:`Bearer ${t}`}});if(!n.ok)return{boxes:[]};const o=await n.json();_e.set(o.data)},Ft=Object.freeze(Object.defineProperty({__proto__:null,load:mt},Symbol.toStringTag,{value:"Module"}));export{kt as component,Ft as universal};