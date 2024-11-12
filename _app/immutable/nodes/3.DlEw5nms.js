import{s as xe,L as J,M as ee,b,f as d,m as r,i as K,h as c,n as te,l as Ue,e as C,a as U,c as w,g as V,U as Ve,X as He,o as Ne,D as Re,k as je,Y as Qe,E as ze,G as Ze,p as Ae,r as q,t as oe,d as re,q as _e,I as be,Q as ke,j as ne,u as Oe,C as Fe}from"../chunks/scheduler.Bw1HVZ4I.js";import{S as Be,i as Ie,e as Pe,c as fe,a as de,m as he,t as N,f as Ce,b as z,d as pe,g as we}from"../chunks/index.B-tLs4nj.js";import{e as Le}from"../chunks/each.Nm2dZFLC.js";import{g as Ee}from"../chunks/entry.BXNUqQsT.js";import{H as qe}from"../chunks/Header.Cp1slpPh.js";import{F as Ke}from"../chunks/Field.XJjuVHfz.js";import{s as Ge,M as We,b as Je}from"../chunks/Mask.Bykk99SE.js";import{b as se}from"../chunks/heic2any.C5mk9rbx.js";import{e as ye,f as et}from"../chunks/units.qluQ__4t.js";import{N as tt}from"../chunks/NavigationBar.DmT8hIz5.js";const De="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADFSURBVHgB7dfbCYNAEIXh2ZAq8pQ0kNSRilOHFcQn21AEFZH1ugOHgf97UxT27Ow1tW9rLbCbBUcANQKoEUCNAGoEUCOA2t08/f5mj+f2N01t9n2ZF98K7DX+6Dcn+FZg9En595X/1SNdvtB4N2Yt9I7wkzhFv1KWz4HSoXRx6IzYByZne9JpEeAokdX37ryHl8+OqIAaAdTYB7KWe0LhbruFCkwqzZmwvAL9FVHx7yD8cZplVI0AagRQI4AaAdQIoBY+QAecIyKJbyjm6wAAAABJRU5ErkJggg==",Me="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEhSURBVHgB7dmxasJQGAXgY+kjFDt1aJ+lnRQc2qHdWotLKU6KCA5ZRScHF1FXBxdBJ30LQXBRwUnxHTQZMrgI3v/KUTjfGBLIyX/vf2+SROo9u8cNu8ONUwA2BWBTADYFYFMANgVgu4dRp1lFMvkAF9vtDtm/EizMFXC9eeu1MXMFYumP37POH/bb8EFz4Nwn75vaaCT38wUWU4DHsIs06gEyqVewOM+Bl+cnVIr/XlqhhVOATPoNue/Po2On2uIlJ7rbENpfz6ckpwoMRhNMZ/OjIcRqp86TeLFcoxzUsFitwWTqQptwM5YvBGFFxmDxsg60uj2waCWO2qevnaUL7UZjrCqYKxC9FjKujSX0h4ZMAdgUgE0B2BSATQHYFIDtAJj3PWal2lrSAAAAAElFTkSuQmCC",lt="data:image/svg+xml,%3csvg%20width='14'%20height='15'%20viewBox='0%200%2014%2015'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M7%2014.3426L3.28767%2010.6303C2.55345%209.89603%202.05344%208.96057%201.85087%207.94217C1.64831%206.92377%201.75228%205.86817%202.14964%204.90887C2.547%203.94956%203.21991%203.12962%204.08327%202.55275C4.94662%201.97587%205.96165%201.66797%207%201.66797C8.03835%201.66797%209.05338%201.97587%209.91674%202.55275C10.7801%203.12962%2011.453%203.94956%2011.8504%204.90887C12.2477%205.86817%2012.3517%206.92377%2012.1491%207.94217C11.9466%208.96057%2011.4466%209.89603%2010.7123%2010.6303L7%2014.3426ZM9.8875%209.80542C10.4585%209.23434%2010.8474%208.50676%2011.0049%207.71468C11.1624%206.92261%2011.0815%206.1016%2010.7725%205.3555C10.4634%204.60939%209.94003%203.97169%209.26854%203.52302C8.59705%203.07436%207.80759%202.83488%207%202.83488C6.19241%202.83488%205.40296%203.07436%204.73147%203.52302C4.05998%203.97169%203.5366%204.60939%203.22753%205.3555C2.91846%206.1016%202.83758%206.92261%202.9951%207.71468C3.15262%208.50676%203.54148%209.23434%204.1125%209.80542L7%2012.6929L9.8875%209.80542ZM7%208.08459C6.69058%208.08459%206.39384%207.96167%206.17505%207.74288C5.95625%207.52409%205.83334%207.22734%205.83334%206.91792C5.83334%206.6085%205.95625%206.31176%206.17505%206.09297C6.39384%205.87417%206.69058%205.75126%207%205.75126C7.30942%205.75126%207.60617%205.87417%207.82496%206.09297C8.04375%206.31176%208.16667%206.6085%208.16667%206.91792C8.16667%207.22734%208.04375%207.52409%207.82496%207.74288C7.60617%207.96167%207.30942%208.08459%207%208.08459Z'%20fill='%239DA5B4'%20/%3e%3c/svg%3e";function st(l){let e,t,s,o,a;return{c(){e=J("svg"),t=J("circle"),o=J("path"),this.h()},l(i){e=ee(i,"svg",{width:!0,height:!0,viewBox:!0,fill:!0,xmlns:!0});var u=b(e);t=ee(u,"circle",{cx:!0,cy:!0,r:!0,fill:!0}),b(t).forEach(d),o=ee(u,"path",{"fill-rule":!0,"clip-rule":!0,d:!0,fill:!0}),b(o).forEach(d),u.forEach(d),this.h()},h(){r(t,"cx","8"),r(t,"cy","8"),r(t,"r","8"),r(t,"fill",s=l[0]==="owner"?"#FFF5F0":"#EAFFF4"),r(o,"fill-rule","evenodd"),r(o,"clip-rule","evenodd"),r(o,"d","M7.62492 3.76955C7.81242 3.39453 8.18742 3.39453 8.37492 3.7695L10.313 7.11708C10.3274 7.1071 10.3426 7.09811 10.3584 7.09019L12.5656 5.98663C12.8444 5.84721 13.1617 6.08913 13.1011 6.39494L12.1578 11.1549C12.123 11.3305 11.969 11.457 11.79 11.457H9.88001C9.87831 11.457 9.87662 11.457 9.87492 11.457L6.76851 11.457C6.76656 11.457 6.76461 11.457 6.76266 11.457H4.2098C4.0308 11.457 3.87675 11.3305 3.84196 11.1549L2.89863 6.39494C2.83803 6.08913 3.15534 5.84721 3.43418 5.98663L5.64131 7.09019C5.65547 7.09727 5.59175 7.06541 5.68216 7.11394C5.70599 7.09019 5.6972 7.11394 6.10108 6.41719C6.08531 6.43899 6.1158 6.39538 6.10108 6.41719C6.12971 6.37762 6.15859 6.33772 6.18227 6.29624L7.62492 3.76955Z"),r(o,"fill",a=l[0]==="owner"?"#FF7A00":"#1FCA70"),r(e,"width","16"),r(e,"height","16"),r(e,"viewBox","0 0 16 16"),r(e,"fill","none"),r(e,"xmlns","http://www.w3.org/2000/svg")},m(i,u){K(i,e,u),c(e,t),c(e,o)},p(i,[u]){u&1&&s!==(s=i[0]==="owner"?"#FFF5F0":"#EAFFF4")&&r(t,"fill",s),u&1&&a!==(a=i[0]==="owner"?"#FF7A00":"#1FCA70")&&r(o,"fill",a)},i:te,o:te,d(i){i&&d(e)}}}function ot(l,e,t){let{type:s="owner"}=e;return l.$$set=o=>{"type"in o&&t(0,s=o.type)},[s]}class rt extends Be{constructor(e){super(),Ie(this,e,ot,st,xe,{type:0})}}function nt(l){let e,t,s,o,a,i;return{c(){e=J("svg"),t=J("path"),s=J("defs"),o=J("clipPath"),a=J("path"),i=J("image"),this.h()},l(u){e=ee(u,"svg",{viewBox:!0,preserveAspectRatio:!0});var h=b(e);t=ee(h,"path",{d:!0,stroke:!0}),b(t).forEach(d),s=ee(h,"defs",{});var E=b(s);o=ee(E,"clipPath",{id:!0});var _=b(o);a=ee(_,"path",{d:!0}),b(a).forEach(d),_.forEach(d),E.forEach(d),i=ee(h,"image",{width:!0,height:!0,href:!0,preserveAspectRatio:!0,"clip-path":!0}),b(i).forEach(d),h.forEach(d),this.h()},h(){r(t,"d","M21.2839 0.684838C21.7305 0.438387 22.2695 0.438387 22.7161 0.684838L42.7161 11.7219C43.1974 11.9875 43.5 12.5 43.5 13.0605V34.9395C43.5 35.5 43.1974 36.0125 42.7161 36.2781L22.7161 47.3152C22.2695 47.5616 21.7305 47.5616 21.2839 47.3152L1.28388 36.2781C0.802571 36.0125 0.5 35.5 0.5 34.9395V13.0605C0.5 12.5 0.802571 11.9875 1.28388 11.7219L21.2839 0.684838Z"),r(t,"stroke","#EAEEF5"),r(a,"d","M21.2839 0.684838C21.7305 0.438387 22.2695 0.438387 22.7161 0.684838L42.7161 11.7219C43.1974 11.9875 43.5 12.5 43.5 13.0605V34.9395C43.5 35.5 43.1974 36.0125 42.7161 36.2781L22.7161 47.3152C22.2695 47.5616 21.7305 47.5616 21.2839 47.3152L1.28388 36.2781C0.802571 36.0125 0.5 35.5 0.5 34.9395V13.0605C0.5 12.5 0.802571 11.9875 1.28388 11.7219L21.2839 0.684838Z"),r(o,"id","hex-clip"),r(i,"width","44"),r(i,"height","48"),r(i,"href",l[0]),r(i,"preserveAspectRatio","xMidYMid slice"),r(i,"clip-path","url(#hex-clip)"),r(e,"viewBox","0 0 44 48"),r(e,"preserveAspectRatio","xMinYMin slice")},m(u,h){K(u,e,h),c(e,t),c(e,s),c(s,o),c(o,a),c(e,i)},p(u,[h]){h&1&&r(i,"href",u[0])},i:te,o:te,d(u){u&&d(e)}}}function at(l,e,t){let{src:s="https://picsum.photos/112/116"}=e;return l.$$set=o=>{"src"in o&&t(0,s=o.src)},[s]}class it extends Be{constructor(e){super(),Ie(this,e,at,nt,xe,{src:0})}}function Xe(l,e,t){const s=l.slice();return s[38]=e[t],s[40]=t,s}function ct(l){let e,t="박스";return{c(){e=C("div"),e.textContent=t,this.h()},l(s){e=w(s,"DIV",{class:!0,"data-svelte-h":!0}),Ae(e)!=="svelte-oldnbc"&&(e.textContent=t),this.h()},h(){r(e,"class","text-[21242C] typo-h3")},m(s,o){K(s,e,o)},p:te,d(s){s&&d(e)}}}function $e(l){let e,t,s="아직 생성된 박스가 없습니다.<br/>지금 새로운 박스를 만들어보세요!",o,a,i="새 박스 만들기",u,h;return{c(){e=C("div"),t=C("p"),t.innerHTML=s,o=U(),a=C("button"),a.textContent=i,this.h()},l(E){e=w(E,"DIV",{class:!0});var _=b(e);t=w(_,"P",{class:!0,"data-svelte-h":!0}),Ae(t)!=="svelte-92hfch"&&(t.innerHTML=s),o=V(_),a=w(_,"BUTTON",{class:!0,"data-svelte-h":!0}),Ae(a)!=="svelte-yawy92"&&(a.textContent=i),_.forEach(d),this.h()},h(){r(t,"class","typo-body3 text-gray-500 text-center"),r(a,"class","px-3.5 py-1.5 w-fit rounded-3xl border border-gray-200 typo-body3 text-gray-700"),r(e,"class","flex flex-col gap-3.5 px-4 items-center")},m(E,_){K(E,e,_),c(e,t),c(e,o),c(e,a),u||(h=q(a,"click",l[8]),u=!0)},p:te,d(E){E&&d(e),u=!1,h()}}}function ut(l){let e,t;return{c(){e=C("img"),this.h()},l(s){e=w(s,"IMG",{src:!0,alt:!0}),this.h()},h(){_e(e.src,t=Je)||r(e,"src",t),r(e,"alt","")},m(s,o){K(s,e,o)},p:te,i:te,o:te,d(s){s&&d(e)}}}function ft(l){let e,t;return e=new it({props:{src:l[38].image}}),{c(){fe(e.$$.fragment)},l(s){de(e.$$.fragment,s)},m(s,o){he(e,s,o),t=!0},p(s,o){const a={};o[0]&1&&(a.src=s[38].image),e.$set(a)},i(s){t||(N(e.$$.fragment,s),t=!0)},o(s){z(e.$$.fragment,s),t=!1},d(s){pe(e,s)}}}function Te(l){let e,t,s;return t=new rt({props:{type:l[38].role}}),{c(){e=C("div"),fe(t.$$.fragment),this.h()},l(o){e=w(o,"DIV",{class:!0});var a=b(e);de(t.$$.fragment,a),a.forEach(d),this.h()},h(){r(e,"class","absolute bottom-0 right-0.5")},m(o,a){K(o,e,a),he(t,e,null),s=!0},p(o,a){const i={};a[0]&1&&(i.type=o[38].role),t.$set(i)},i(o){s||(N(t.$$.fragment,o),s=!0)},o(o){z(t.$$.fragment,o),s=!1},d(o){o&&d(e),pe(t)}}}function Se(l){let e,t,s,o,a,i,u,h,E,_,Z,S,M,k=l[38].place_count+"",F,j,Y,p,y=l[38].name+"",m,R,g,n,v,B,X,A,$,H,le;const O=[ft,ut],L=[];function P(T,I){return T[38].image?0:1}s=P(l),o=L[s]=O[s](l);let x=(l[38].role==="owner"||l[38].role==="manager")&&Te(l);function ie(){return l[21](l[40],l[38])}function ce(...T){return l[22](l[38],...T)}function G(){return l[23](l[38])}return{c(){e=C("div"),t=C("div"),o.c(),a=U(),x&&x.c(),i=U(),u=C("div"),h=C("div"),E=C("div"),_=C("img"),S=U(),M=C("div"),F=oe(k),j=U(),Y=C("div"),p=C("div"),m=oe(y),R=U(),g=C("button"),n=C("img"),X=U(),this.h()},l(T){e=w(T,"DIV",{class:!0,"aria-hidden":!0});var I=b(e);t=w(I,"DIV",{class:!0});var W=b(t);o.l(W),a=V(W),x&&x.l(W),W.forEach(d),i=V(I),u=w(I,"DIV",{class:!0});var f=b(u);h=w(f,"DIV",{class:!0});var D=b(h);E=w(D,"DIV",{class:!0});var Q=b(E);_=w(Q,"IMG",{src:!0,alt:!0}),S=V(Q),M=w(Q,"DIV",{class:!0});var ve=b(M);F=re(ve,k),ve.forEach(d),Q.forEach(d),D.forEach(d),j=V(f),Y=w(f,"DIV",{class:!0});var ue=b(Y);p=w(ue,"DIV",{class:!0});var me=b(p);m=re(me,y),me.forEach(d),ue.forEach(d),f.forEach(d),R=V(I),g=w(I,"BUTTON",{class:!0});var ge=b(g);n=w(ge,"IMG",{src:!0,alt:!0}),ge.forEach(d),X=V(I),I.forEach(d),this.h()},h(){r(t,"class","flex-none w-12 h-12 relative"),_e(_.src,Z=lt)||r(_,"src",Z),r(_,"alt","place-icon"),r(M,"class","typo-caption2"),r(E,"class","flex flex-row gap-0.5"),r(h,"class","flex flex-row gap-1 text-gray-400"),r(p,"class","typo-body1 text-black truncate"),r(Y,"class","w-full flex flex-row gap-2"),r(u,"class","flex-auto min-w-0 flex flex-col items-start gap-0.5"),_e(n.src,v=l[38].role==="owner"?De:Me)||r(n,"src",v),r(n,"alt",B=l[38].role==="owner"?"박스 삭제":"박스 나가기"),r(g,"class","absolute -right-12"),r(e,"class",A=`flex flex-row items-center px-4 gap-2.5 h-12 w-screen ${l[2]===l[38].idx&&!l[5]?"":"transition-transform"}`),r(e,"aria-hidden",""),be(e,"transform",`translateX(${l[2]===l[38].idx?l[3]?-ae+l[4]:l[4]:0}px)`)},m(T,I){K(T,e,I),c(e,t),L[s].m(t,null),c(t,a),x&&x.m(t,null),c(e,i),c(e,u),c(u,h),c(h,E),c(E,_),c(E,S),c(E,M),c(M,F),c(u,j),c(u,Y),c(Y,p),c(p,m),c(e,R),c(e,g),c(g,n),c(e,X),$=!0,H||(le=[q(g,"click",ke(ie)),q(e,"touchstart",ce),q(e,"touchmove",l[11]),q(e,"touchend",l[12]),q(e,"transitionend",l[13]),q(e,"click",G)],H=!0)},p(T,I){l=T;let W=s;s=P(l),s===W?L[s].p(l,I):(we(),z(L[W],1,1,()=>{L[W]=null}),Ce(),o=L[s],o?o.p(l,I):(o=L[s]=O[s](l),o.c()),N(o,1),o.m(t,a)),l[38].role==="owner"||l[38].role==="manager"?x?(x.p(l,I),I[0]&1&&N(x,1)):(x=Te(l),x.c(),N(x,1),x.m(t,null)):x&&(we(),z(x,1,1,()=>{x=null}),Ce()),(!$||I[0]&1)&&k!==(k=l[38].place_count+"")&&ne(F,k),(!$||I[0]&1)&&y!==(y=l[38].name+"")&&ne(m,y),(!$||I[0]&1&&!_e(n.src,v=l[38].role==="owner"?De:Me))&&r(n,"src",v),(!$||I[0]&1&&B!==(B=l[38].role==="owner"?"박스 삭제":"박스 나가기"))&&r(n,"alt",B),(!$||I[0]&37&&A!==(A=`flex flex-row items-center px-4 gap-2.5 h-12 w-screen ${l[2]===l[38].idx&&!l[5]?"":"transition-transform"}`))&&r(e,"class",A),I[0]&29&&be(e,"transform",`translateX(${l[2]===l[38].idx?l[3]?-ae+l[4]:l[4]:0}px)`)},i(T){$||(N(o),N(x),$=!0)},o(T){z(o),z(x),$=!1},d(T){T&&d(e),L[s].d(),x&&x.d(),H=!1,Oe(le)}}}function Ye(l){let e,t,s,o,a;return t=new We({props:{onMask:!0,position:"sticky",closeOnClick:!0,$$slots:{default:[dt]},$$scope:{ctx:l}}}),{c(){e=C("div"),fe(t.$$.fragment),this.h()},l(i){e=w(i,"DIV",{class:!0});var u=b(e);de(t.$$.fragment,u),u.forEach(d),this.h()},h(){r(e,"class","box-modal-container w-full fixed left-0 top-0 z-[9999]"),be(e,"height",`${l[6]??0}px`)},m(i,u){K(i,e,u),he(t,e,null),s=!0,o||(a=q(e,"touchend",l[15],{passive:!0}),o=!0)},p(i,u){const h={};u[0]&129|u[1]&1024&&(h.$$scope={dirty:u,ctx:i}),t.$set(h),u[0]&64&&be(e,"height",`${i[6]??0}px`)},i(i){s||(N(t.$$.fragment,i),s=!0)},o(i){z(t.$$.fragment,i),s=!1},d(i){i&&d(e),pe(t),o=!1,a()}}}function dt(l){var le;let e,t,s,o,a=((le=l[0][l[7].listIdx])==null?void 0:le.name)+"",i,u,h,E=l[7].stage==="delete"?"박스를 삭제할까요?":"박스에서 나갈까요?",_,Z,S,M=l[7].stage==="delete"?"이 박스를 삭제하면 모든 데이터가 영구적으로 삭제되며,":"박스를 나가면 박스 팔로우가 취소되고,",k,F,j,Y,p=l[7].stage==="delete"?"다른 사용자도 더 이상 접근할 수 없습니다.":"새로운 소식에 대한 업데이트를 받을 수 없습니다.",y,m,R,g,n="아니오",v,B,X=l[7].stage==="delete"?"삭제":"나가기",A,$,H;return{c(){e=C("section"),t=C("div"),s=C("div"),o=C("p"),i=oe(a),u=U(),h=C("p"),_=oe(E),Z=U(),S=C("p"),k=oe(M),F=U(),j=C("br"),Y=U(),y=oe(p),m=U(),R=C("div"),g=C("button"),g.textContent=n,v=U(),B=C("button"),A=oe(X),this.h()},l(O){e=w(O,"SECTION",{class:!0});var L=b(e);t=w(L,"DIV",{class:!0});var P=b(t);s=w(P,"DIV",{class:!0});var x=b(s);o=w(x,"P",{class:!0});var ie=b(o);i=re(ie,a),ie.forEach(d),u=V(x),h=w(x,"P",{class:!0});var ce=b(h);_=re(ce,E),ce.forEach(d),x.forEach(d),Z=V(P),S=w(P,"P",{class:!0});var G=b(S);k=re(G,M),F=V(G),j=w(G,"BR",{}),Y=V(G),y=re(G,p),G.forEach(d),P.forEach(d),m=V(L),R=w(L,"DIV",{class:!0});var T=b(R);g=w(T,"BUTTON",{class:!0,"data-svelte-h":!0}),Ae(g)!=="svelte-15cnivs"&&(g.textContent=n),v=V(T),B=w(T,"BUTTON",{class:!0});var I=b(B);A=re(I,X),I.forEach(d),T.forEach(d),L.forEach(d),this.h()},h(){r(o,"class","typo-h3 truncate"),r(h,"class","typo-h3 flex-none"),r(s,"class","w-full flex flex-row justify-center gap-1 typo-h3"),r(S,"class","typo-body4 text-center"),r(t,"class","box-modal-body flex flex-col justify-center items-center gap-2.5 w-full"),r(g,"class","bg-gray-300 rounded-md w-full h-14"),r(B,"class","bg-primary-500 rounded-md w-full h-14"),r(R,"class","box-modal-footer w-full flex flex-row gap-2.5 justify-center text-white text-lg font-semibold"),r(e,"class","box-modal flex flex-col items-start px-4 py-10 gap-7 absolute bottom-0 bg-white rounded-t-3xl w-screen z-[9999]")},m(O,L){K(O,e,L),c(e,t),c(t,s),c(s,o),c(o,i),c(s,u),c(s,h),c(h,_),c(t,Z),c(t,S),c(S,k),c(S,F),c(S,j),c(S,Y),c(S,y),c(e,m),c(e,R),c(R,g),c(R,v),c(R,B),c(B,A),$||(H=[q(g,"click",l[15]),q(B,"click",l[16]),q(e,"touchstart",ke(l[17])),q(e,"touchend",ke(l[18]))],$=!0)},p(O,L){var P;L[0]&129&&a!==(a=((P=O[0][O[7].listIdx])==null?void 0:P.name)+"")&&ne(i,a),L[0]&128&&E!==(E=O[7].stage==="delete"?"박스를 삭제할까요?":"박스에서 나갈까요?")&&ne(_,E),L[0]&128&&M!==(M=O[7].stage==="delete"?"이 박스를 삭제하면 모든 데이터가 영구적으로 삭제되며,":"박스를 나가면 박스 팔로우가 취소되고,")&&ne(k,M),L[0]&128&&p!==(p=O[7].stage==="delete"?"다른 사용자도 더 이상 접근할 수 없습니다.":"새로운 소식에 대한 업데이트를 받을 수 없습니다.")&&ne(y,p),L[0]&128&&X!==(X=O[7].stage==="delete"?"삭제":"나가기")&&ne(A,X)},d(O){O&&d(e),$=!1,Oe(H)}}}function ht(l){let e,t,s,o,a,i,u,h,E,_,Z,S,M,k,F;t=new qe({props:{position:"sticky",leftBack:"black",rightBoxAdd:"#1F5AFF",backgroundColor:"bg-white",rightSearch:"black",$$slots:{default:[ct]},$$scope:{ctx:l}}});function j(n){l[20](n)}let Y={round:!0,placeholder:"검색하세요",prefixIcon:Ge,prefixPointer:!0,onPrefixClick:l[19],clear:!0,backgroundColor:"bg-gray-50",onInput:l[9]};l[1]!==void 0&&(Y.value=l[1]),a=new Ke({props:Y}),Ue.push(()=>Pe(a,"value",j));let p=l[0].length===0&&$e(l),y=Le(l[0]),m=[];for(let n=0;n<y.length;n+=1)m[n]=Se(Xe(l,y,n));const R=n=>z(m[n],1,1,()=>{m[n]=null});let g=l[7]&&Ye(l);return k=new tt({}),{c(){e=C("div"),fe(t.$$.fragment),s=U(),o=C("section"),fe(a.$$.fragment),u=U(),h=C("section"),p&&p.c(),E=U();for(let n=0;n<m.length;n+=1)m[n].c();Z=U(),g&&g.c(),M=U(),fe(k.$$.fragment),this.h()},l(n){e=w(n,"DIV",{class:!0});var v=b(e);de(t.$$.fragment,v),s=V(v),o=w(v,"SECTION",{class:!0});var B=b(o);de(a.$$.fragment,B),B.forEach(d),u=V(v),h=w(v,"SECTION",{class:!0});var X=b(h);p&&p.l(X),E=V(X);for(let A=0;A<m.length;A+=1)m[A].l(X);X.forEach(d),Z=V(v),g&&g.l(v),v.forEach(d),M=V(n),de(k.$$.fragment,n),this.h()},h(){r(o,"class","box-search sticky p-4 top-[100px] z-10 bg-white"),r(h,"class",_=`box-contents flex flex-col ${l[0].length===0?"justify-center":"justify-start"} items-center gap-6 my-2 overflow-x-hidden flex-auto`),r(e,"class","box flex flex-col min-h-full"),Ve(()=>l[24].call(e))},m(n,v){K(n,e,v),he(t,e,null),c(e,s),c(e,o),he(a,o,null),c(e,u),c(e,h),p&&p.m(h,null),c(h,E);for(let B=0;B<m.length;B+=1)m[B]&&m[B].m(h,null);c(e,Z),g&&g.m(e,null),S=He(e,l[24].bind(e)),K(n,M,v),he(k,n,v),F=!0},p(n,v){const B={};v[1]&1024&&(B.$$scope={dirty:v,ctx:n}),t.$set(B);const X={};if(!i&&v[0]&2&&(i=!0,X.value=n[1],Ne(()=>i=!1)),a.$set(X),n[0].length===0?p?p.p(n,v):(p=$e(n),p.c(),p.m(h,E)):p&&(p.d(1),p=null),v[0]&31805){y=Le(n[0]);let A;for(A=0;A<y.length;A+=1){const $=Xe(n,y,A);m[A]?(m[A].p($,v),N(m[A],1)):(m[A]=Se($),m[A].c(),N(m[A],1),m[A].m(h,null))}for(we(),A=y.length;A<m.length;A+=1)R(A);Ce()}(!F||v[0]&1&&_!==(_=`box-contents flex flex-col ${n[0].length===0?"justify-center":"justify-start"} items-center gap-6 my-2 overflow-x-hidden flex-auto`))&&r(h,"class",_),n[7]?g?(g.p(n,v),v[0]&128&&N(g,1)):(g=Ye(n),g.c(),N(g,1),g.m(e,null)):g&&(we(),z(g,1,1,()=>{g=null}),Ce())},i(n){if(!F){N(t.$$.fragment,n),N(a.$$.fragment,n);for(let v=0;v<y.length;v+=1)N(m[v]);N(g),N(k.$$.fragment,n),F=!0}},o(n){z(t.$$.fragment,n),z(a.$$.fragment,n),m=m.filter(Boolean);for(let v=0;v<m.length;v+=1)z(m[v]);z(g),z(k.$$.fragment,n),F=!1},d(n){n&&(d(e),d(M)),pe(t),pe(a),p&&p.d(),Re(m,n),g&&g.d(),S(),pe(k,n)}}}let ae=48;function pt(l,e,t){let s;je(l,se,f=>t(30,s=f));const o=Qe();let a=[],i=[],u=sessionStorage.getItem("jwt");async function h(){if(!u)return;const f=await fetch("https://azit.surflux.studio/boxes",{method:"GET",headers:{Authorization:`Bearer ${u}`}});if(!f.ok)return;const D=await f.json();t(0,i=a=D.data)}function E(){u?Ee("/boxes/-1/setting"):ye.emit("pushSnackbar",{message:"로그인이 필요합니다.",uuid:"login-required",buttonText:"로그인",callback:()=>{et(),Ee("/boxes/-1/setting")}})}let _="",Z;function S(f){clearTimeout(Z),Z=setTimeout(M,300)}function M(){t(0,i=_?a.filter(f=>f.name.includes(_)):a)}let k,F=!1,j=-1,Y=-1,p;function y(f,D){p=void 0,t(4,m=0),t(5,g=!1),se.set(!0),j=f.touches[0].clientX,Y=f.touches[0].clientY,k!==void 0&&k!==D&&t(3,F=!1),t(2,k=D)}let m=0;function R(f){if(k===void 0)return;let Q=f.touches[0].clientX-j,ue=f.touches[0].clientY-Y;if(p===void 0&&(p=Math.abs(Q)-Math.abs(ue)>=0,!F&&p&&Q>0))return t(2,k=void 0),t(4,m=0),se.set(!1);if(p){const me=F?ae:0,ge=F?0:-ae;t(4,m=Q>me?me:Q<ge?ge:Q)}}let g=!1;function n(f){if(k!==void 0)if(p){t(5,g=!0);let D=f.changedTouches[0].clientX-j;(m===0||Math.abs(m)===ae)&&(f.stopPropagation(),v()),D>=ae/2?t(3,F=!1):D<=-ae/2&&t(3,F=!0),t(4,m=0)}else se.set(!1)}function v(){t(5,g=!1),se.set(!1)}function B(f){s||H||(t(2,k=void 0),t(3,F=!1),p=void 0,t(4,m=0),se.set(!0),j=f.touches[0].clientX,Y=f.touches[0].clientY)}function X(f){if(p||H)return;let Q=f.touches[0].clientX-j,ue=f.touches[0].clientY-Y;p===void 0&&(p=Math.abs(Q)-Math.abs(ue)>=0),p&&se.set(!1)}function A(f){H||(p||o("stopSwipe",{stop:!0,toDefault:!0}),se.set(!1),o("stopSwipe",{stop:!1}))}ze(()=>{h(),document.addEventListener("touchstart",B),document.addEventListener("touchmove",X),document.addEventListener("touchend",A)}),Ze(()=>{document.removeEventListener("touchstart",B),document.removeEventListener("touchmove",X),document.removeEventListener("touchend",A)});let $,H;function le(f,D,Q){t(7,H={listIdx:f,idx:D,stage:Q==="owner"?"delete":"leave"}),o("stopSwipe",{stop:!0,toHiddenScroll:!0})}function O(){t(7,H=void 0),t(2,k=void 0),t(3,F=!1),o("stopSwipe",{stop:!1,toHiddenScroll:!1})}function L(){if(!H)return;H.stage==="delete"&&fetch(`https://azit.surflux.studio/boxes/${H.idx}`,{method:"DELETE",headers:{"Content-Type":"application/json",Authorization:`Bearer ${u}`}});const D=a.splice(H.listIdx,1)[0];M(),ye.emit("pushSnackbar",{message:`${D.name} 박스를 삭제했습니다.`}),O()}function P(f){Fe.call(this,l,f)}function x(f){Fe.call(this,l,f)}const ie=()=>window.history.back();function ce(f){_=f,t(1,_)}const G=(f,D)=>le(f,D.idx,D.role),T=(f,D)=>y(D,f.idx),I=f=>Ee(`/boxes/${f.idx}/detail`);function W(){$=this.clientHeight,t(6,$)}return[i,_,k,F,m,g,$,H,E,S,y,R,n,v,le,O,L,P,x,ie,ce,G,T,I,W]}class xt extends Be{constructor(e){super(),Ie(this,e,pt,ht,xe,{},null,[-1,-1])}}export{xt as component};
