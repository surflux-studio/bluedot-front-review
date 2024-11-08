import{s as xe,m as J,o as ee,b as A,f as m,l as r,i as G,h as i,n as te,x as He,e as b,a as H,c as C,g as U,T as Ue,W as $e,z as Ne,O as Re,k as je,X as ze,v as Qe,w as Ze,y as Ae,u as q,t as oe,d as re,H as _e,L as be,R as ke,j as ne,r as Ve,J as Fe}from"../chunks/scheduler.nR6IvPDU.js";import{S as Be,i as Ie,e as Pe,c as he,a as pe,m as me,t as $,f as Ce,b as Q,d as ge,g as we}from"../chunks/index.BYRHYcqC.js";import{e as ye}from"../chunks/each.6FNBhYQl.js";import{g as Ee}from"../chunks/entry.Z5ixVeuu.js";import{H as qe}from"../chunks/Header.DCrI1re2.js";import{F as Ke}from"../chunks/Field.CueS0UwG.js";import{s as We,M as Ge,b as Je}from"../chunks/Mask.Bb3h_73a.js";import{s as se}from"../chunks/store.URyUGjyf.js";import{e as Le,b as et}from"../chunks/emitter.ayfdCPcU.js";const De="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADFSURBVHgB7dfbCYNAEIXh2ZAq8pQ0kNSRilOHFcQn21AEFZH1ugOHgf97UxT27Ow1tW9rLbCbBUcANQKoEUCNAGoEUCOA2t08/f5mj+f2N01t9n2ZF98K7DX+6Dcn+FZg9En595X/1SNdvtB4N2Yt9I7wkzhFv1KWz4HSoXRx6IzYByZne9JpEeAokdX37ryHl8+OqIAaAdTYB7KWe0LhbruFCkwqzZmwvAL9FVHx7yD8cZplVI0AagRQI4AaAdQIoBY+QAecIyKJbyjm6wAAAABJRU5ErkJggg==",Me="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEhSURBVHgB7dmxasJQGAXgY+kjFDt1aJ+lnRQc2qHdWotLKU6KCA5ZRScHF1FXBxdBJ30LQXBRwUnxHTQZMrgI3v/KUTjfGBLIyX/vf2+SROo9u8cNu8ONUwA2BWBTADYFYFMANgVgu4dRp1lFMvkAF9vtDtm/EizMFXC9eeu1MXMFYumP37POH/bb8EFz4Nwn75vaaCT38wUWU4DHsIs06gEyqVewOM+Bl+cnVIr/XlqhhVOATPoNue/Po2On2uIlJ7rbENpfz6ckpwoMRhNMZ/OjIcRqp86TeLFcoxzUsFitwWTqQptwM5YvBGFFxmDxsg60uj2waCWO2qevnaUL7UZjrCqYKxC9FjKujSX0h4ZMAdgUgE0B2BSATQHYFIDtAJj3PWal2lrSAAAAAElFTkSuQmCC",tt="data:image/svg+xml,%3csvg%20width='14'%20height='15'%20viewBox='0%200%2014%2015'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M7%2014.3426L3.28767%2010.6303C2.55345%209.89603%202.05344%208.96057%201.85087%207.94217C1.64831%206.92377%201.75228%205.86817%202.14964%204.90887C2.547%203.94956%203.21991%203.12962%204.08327%202.55275C4.94662%201.97587%205.96165%201.66797%207%201.66797C8.03835%201.66797%209.05338%201.97587%209.91674%202.55275C10.7801%203.12962%2011.453%203.94956%2011.8504%204.90887C12.2477%205.86817%2012.3517%206.92377%2012.1491%207.94217C11.9466%208.96057%2011.4466%209.89603%2010.7123%2010.6303L7%2014.3426ZM9.8875%209.80542C10.4585%209.23434%2010.8474%208.50676%2011.0049%207.71468C11.1624%206.92261%2011.0815%206.1016%2010.7725%205.3555C10.4634%204.60939%209.94003%203.97169%209.26854%203.52302C8.59705%203.07436%207.80759%202.83488%207%202.83488C6.19241%202.83488%205.40296%203.07436%204.73147%203.52302C4.05998%203.97169%203.5366%204.60939%203.22753%205.3555C2.91846%206.1016%202.83758%206.92261%202.9951%207.71468C3.15262%208.50676%203.54148%209.23434%204.1125%209.80542L7%2012.6929L9.8875%209.80542ZM7%208.08459C6.69058%208.08459%206.39384%207.96167%206.17505%207.74288C5.95625%207.52409%205.83334%207.22734%205.83334%206.91792C5.83334%206.6085%205.95625%206.31176%206.17505%206.09297C6.39384%205.87417%206.69058%205.75126%207%205.75126C7.30942%205.75126%207.60617%205.87417%207.82496%206.09297C8.04375%206.31176%208.16667%206.6085%208.16667%206.91792C8.16667%207.22734%208.04375%207.52409%207.82496%207.74288C7.60617%207.96167%207.30942%208.08459%207%208.08459Z'%20fill='%239DA5B4'%20/%3e%3c/svg%3e";function lt(l){let e,t,s,o,n;return{c(){e=J("svg"),t=J("circle"),o=J("path"),this.h()},l(a){e=ee(a,"svg",{width:!0,height:!0,viewBox:!0,fill:!0,xmlns:!0});var u=A(e);t=ee(u,"circle",{cx:!0,cy:!0,r:!0,fill:!0}),A(t).forEach(m),o=ee(u,"path",{"fill-rule":!0,"clip-rule":!0,d:!0,fill:!0}),A(o).forEach(m),u.forEach(m),this.h()},h(){r(t,"cx","8"),r(t,"cy","8"),r(t,"r","8"),r(t,"fill",s=l[0]==="owner"?"#FFF5F0":"#EAFFF4"),r(o,"fill-rule","evenodd"),r(o,"clip-rule","evenodd"),r(o,"d","M7.62492 3.76955C7.81242 3.39453 8.18742 3.39453 8.37492 3.7695L10.313 7.11708C10.3274 7.1071 10.3426 7.09811 10.3584 7.09019L12.5656 5.98663C12.8444 5.84721 13.1617 6.08913 13.1011 6.39494L12.1578 11.1549C12.123 11.3305 11.969 11.457 11.79 11.457H9.88001C9.87831 11.457 9.87662 11.457 9.87492 11.457L6.76851 11.457C6.76656 11.457 6.76461 11.457 6.76266 11.457H4.2098C4.0308 11.457 3.87675 11.3305 3.84196 11.1549L2.89863 6.39494C2.83803 6.08913 3.15534 5.84721 3.43418 5.98663L5.64131 7.09019C5.65547 7.09727 5.59175 7.06541 5.68216 7.11394C5.70599 7.09019 5.6972 7.11394 6.10108 6.41719C6.08531 6.43899 6.1158 6.39538 6.10108 6.41719C6.12971 6.37762 6.15859 6.33772 6.18227 6.29624L7.62492 3.76955Z"),r(o,"fill",n=l[0]==="owner"?"#FF7A00":"#1FCA70"),r(e,"width","16"),r(e,"height","16"),r(e,"viewBox","0 0 16 16"),r(e,"fill","none"),r(e,"xmlns","http://www.w3.org/2000/svg")},m(a,u){G(a,e,u),i(e,t),i(e,o)},p(a,[u]){u&1&&s!==(s=a[0]==="owner"?"#FFF5F0":"#EAFFF4")&&r(t,"fill",s),u&1&&n!==(n=a[0]==="owner"?"#FF7A00":"#1FCA70")&&r(o,"fill",n)},i:te,o:te,d(a){a&&m(e)}}}function st(l,e,t){let{type:s="owner"}=e;return l.$$set=o=>{"type"in o&&t(0,s=o.type)},[s]}class ot extends Be{constructor(e){super(),Ie(this,e,st,lt,xe,{type:0})}}function rt(l){let e,t,s,o,n,a;return{c(){e=J("svg"),t=J("path"),s=J("defs"),o=J("clipPath"),n=J("path"),a=J("image"),this.h()},l(u){e=ee(u,"svg",{viewBox:!0,preserveAspectRatio:!0});var p=A(e);t=ee(p,"path",{d:!0,stroke:!0}),A(t).forEach(m),s=ee(p,"defs",{});var w=A(s);o=ee(w,"clipPath",{id:!0});var _=A(o);n=ee(_,"path",{d:!0}),A(n).forEach(m),_.forEach(m),w.forEach(m),a=ee(p,"image",{width:!0,height:!0,href:!0,preserveAspectRatio:!0,"clip-path":!0}),A(a).forEach(m),p.forEach(m),this.h()},h(){r(t,"d","M21.2839 0.684838C21.7305 0.438387 22.2695 0.438387 22.7161 0.684838L42.7161 11.7219C43.1974 11.9875 43.5 12.5 43.5 13.0605V34.9395C43.5 35.5 43.1974 36.0125 42.7161 36.2781L22.7161 47.3152C22.2695 47.5616 21.7305 47.5616 21.2839 47.3152L1.28388 36.2781C0.802571 36.0125 0.5 35.5 0.5 34.9395V13.0605C0.5 12.5 0.802571 11.9875 1.28388 11.7219L21.2839 0.684838Z"),r(t,"stroke","#EAEEF5"),r(n,"d","M21.2839 0.684838C21.7305 0.438387 22.2695 0.438387 22.7161 0.684838L42.7161 11.7219C43.1974 11.9875 43.5 12.5 43.5 13.0605V34.9395C43.5 35.5 43.1974 36.0125 42.7161 36.2781L22.7161 47.3152C22.2695 47.5616 21.7305 47.5616 21.2839 47.3152L1.28388 36.2781C0.802571 36.0125 0.5 35.5 0.5 34.9395V13.0605C0.5 12.5 0.802571 11.9875 1.28388 11.7219L21.2839 0.684838Z"),r(o,"id","hex-clip"),r(a,"width","44"),r(a,"height","48"),r(a,"href",l[0]),r(a,"preserveAspectRatio","xMidYMid slice"),r(a,"clip-path","url(#hex-clip)"),r(e,"viewBox","0 0 44 48"),r(e,"preserveAspectRatio","xMinYMin slice")},m(u,p){G(u,e,p),i(e,t),i(e,s),i(s,o),i(o,n),i(e,a)},p(u,[p]){p&1&&r(a,"href",u[0])},i:te,o:te,d(u){u&&m(e)}}}function nt(l,e,t){let{src:s="https://picsum.photos/112/116"}=e;return l.$$set=o=>{"src"in o&&t(0,s=o.src)},[s]}class at extends Be{constructor(e){super(),Ie(this,e,nt,rt,xe,{src:0})}}function Xe(l,e,t){const s=l.slice();return s[38]=e[t],s[40]=t,s}function it(l){let e,t="박스";return{c(){e=b("div"),e.textContent=t,this.h()},l(s){e=C(s,"DIV",{class:!0,"data-svelte-h":!0}),Ae(e)!=="svelte-oldnbc"&&(e.textContent=t),this.h()},h(){r(e,"class","text-[21242C] typo-h3")},m(s,o){G(s,e,o)},p:te,d(s){s&&m(e)}}}function Te(l){let e,t,s="아직 생성된 박스가 없습니다.<br/>지금 새로운 박스를 만들어보세요!",o,n,a="새 박스 만들기",u,p;return{c(){e=b("div"),t=b("p"),t.innerHTML=s,o=H(),n=b("button"),n.textContent=a,this.h()},l(w){e=C(w,"DIV",{class:!0});var _=A(e);t=C(_,"P",{class:!0,"data-svelte-h":!0}),Ae(t)!=="svelte-92hfch"&&(t.innerHTML=s),o=U(_),n=C(_,"BUTTON",{class:!0,"data-svelte-h":!0}),Ae(n)!=="svelte-yawy92"&&(n.textContent=a),_.forEach(m),this.h()},h(){r(t,"class","typo-body3 text-gray-500 text-center"),r(n,"class","px-3.5 py-1.5 w-fit rounded-3xl border border-gray-200 typo-body3 text-gray-700"),r(e,"class","flex flex-col gap-3.5 px-4 items-center")},m(w,_){G(w,e,_),i(e,t),i(e,o),i(e,n),u||(p=q(n,"click",l[8]),u=!0)},p:te,d(w){w&&m(e),u=!1,p()}}}function ct(l){let e,t;return{c(){e=b("img"),this.h()},l(s){e=C(s,"IMG",{src:!0,alt:!0}),this.h()},h(){_e(e.src,t=Je)||r(e,"src",t),r(e,"alt","")},m(s,o){G(s,e,o)},p:te,i:te,o:te,d(s){s&&m(e)}}}function ut(l){let e,t;return e=new at({props:{src:l[38].image}}),{c(){he(e.$$.fragment)},l(s){pe(e.$$.fragment,s)},m(s,o){me(e,s,o),t=!0},p(s,o){const n={};o[0]&1&&(n.src=s[38].image),e.$set(n)},i(s){t||($(e.$$.fragment,s),t=!0)},o(s){Q(e.$$.fragment,s),t=!1},d(s){ge(e,s)}}}function Se(l){let e,t,s;return t=new ot({props:{type:l[38].role}}),{c(){e=b("div"),he(t.$$.fragment),this.h()},l(o){e=C(o,"DIV",{class:!0});var n=A(e);pe(t.$$.fragment,n),n.forEach(m),this.h()},h(){r(e,"class","absolute bottom-0 right-0.5")},m(o,n){G(o,e,n),me(t,e,null),s=!0},p(o,n){const a={};n[0]&1&&(a.type=o[38].role),t.$set(a)},i(o){s||($(t.$$.fragment,o),s=!0)},o(o){Q(t.$$.fragment,o),s=!1},d(o){o&&m(e),ge(t)}}}function Oe(l){let e,t,s,o,n,a,u,p,w,_,z,T,L,y=l[38].place_count+"",D,E,I,f,N=l[38].name+"",g,c,d,B,S,v,R,Z,Y,V,le;const O=[ut,ct],F=[];function P(X,x){return X[38].image?0:1}s=P(l),o=F[s]=O[s](l);let k=(l[38].role==="owner"||l[38].role==="manager")&&Se(l);function ie(){return l[21](l[40],l[38])}function ce(...X){return l[22](l[38],...X)}function K(){return l[23](l[38])}return{c(){e=b("div"),t=b("div"),o.c(),n=H(),k&&k.c(),a=H(),u=b("div"),p=b("div"),w=b("div"),_=b("img"),T=H(),L=b("div"),D=oe(y),E=H(),I=b("div"),f=b("div"),g=oe(N),c=H(),d=b("button"),B=b("img"),R=H(),this.h()},l(X){e=C(X,"DIV",{class:!0,"aria-hidden":!0});var x=A(e);t=C(x,"DIV",{class:!0});var W=A(t);o.l(W),n=U(W),k&&k.l(W),W.forEach(m),a=U(x),u=C(x,"DIV",{class:!0});var h=A(u);p=C(h,"DIV",{class:!0});var M=A(p);w=C(M,"DIV",{class:!0});var j=A(w);_=C(j,"IMG",{src:!0,alt:!0}),T=U(j),L=C(j,"DIV",{class:!0});var ve=A(L);D=re(ve,y),ve.forEach(m),j.forEach(m),M.forEach(m),E=U(h),I=C(h,"DIV",{class:!0});var ue=A(I);f=C(ue,"DIV",{class:!0});var fe=A(f);g=re(fe,N),fe.forEach(m),ue.forEach(m),h.forEach(m),c=U(x),d=C(x,"BUTTON",{class:!0});var de=A(d);B=C(de,"IMG",{src:!0,alt:!0}),de.forEach(m),R=U(x),x.forEach(m),this.h()},h(){r(t,"class","flex-none w-12 h-12 relative"),_e(_.src,z=tt)||r(_,"src",z),r(_,"alt","place-icon"),r(L,"class","typo-caption2"),r(w,"class","flex flex-row gap-0.5"),r(p,"class","flex flex-row gap-1 text-gray-400"),r(f,"class","typo-body1 text-black truncate"),r(I,"class","w-full flex flex-row gap-2"),r(u,"class","flex-auto min-w-0 flex flex-col items-start gap-0.5"),_e(B.src,S=l[38].role==="owner"?De:Me)||r(B,"src",S),r(B,"alt",v=l[38].role==="owner"?"박스 삭제":"박스 나가기"),r(d,"class","absolute -right-12"),r(e,"class",Z=`flex flex-row items-center px-4 gap-2.5 h-12 w-screen ${l[2]===l[38].idx&&!l[5]?"":"transition-transform"}`),r(e,"aria-hidden",""),be(e,"transform",`translateX(${l[2]===l[38].idx?l[3]?-ae+l[4]:l[4]:0}px)`)},m(X,x){G(X,e,x),i(e,t),F[s].m(t,null),i(t,n),k&&k.m(t,null),i(e,a),i(e,u),i(u,p),i(p,w),i(w,_),i(w,T),i(w,L),i(L,D),i(u,E),i(u,I),i(I,f),i(f,g),i(e,c),i(e,d),i(d,B),i(e,R),Y=!0,V||(le=[q(d,"click",ke(ie)),q(e,"touchstart",ce),q(e,"touchmove",l[11]),q(e,"touchend",l[12]),q(e,"transitionend",l[13]),q(e,"click",K)],V=!0)},p(X,x){l=X;let W=s;s=P(l),s===W?F[s].p(l,x):(we(),Q(F[W],1,1,()=>{F[W]=null}),Ce(),o=F[s],o?o.p(l,x):(o=F[s]=O[s](l),o.c()),$(o,1),o.m(t,n)),l[38].role==="owner"||l[38].role==="manager"?k?(k.p(l,x),x[0]&1&&$(k,1)):(k=Se(l),k.c(),$(k,1),k.m(t,null)):k&&(we(),Q(k,1,1,()=>{k=null}),Ce()),(!Y||x[0]&1)&&y!==(y=l[38].place_count+"")&&ne(D,y),(!Y||x[0]&1)&&N!==(N=l[38].name+"")&&ne(g,N),(!Y||x[0]&1&&!_e(B.src,S=l[38].role==="owner"?De:Me))&&r(B,"src",S),(!Y||x[0]&1&&v!==(v=l[38].role==="owner"?"박스 삭제":"박스 나가기"))&&r(B,"alt",v),(!Y||x[0]&37&&Z!==(Z=`flex flex-row items-center px-4 gap-2.5 h-12 w-screen ${l[2]===l[38].idx&&!l[5]?"":"transition-transform"}`))&&r(e,"class",Z),x[0]&29&&be(e,"transform",`translateX(${l[2]===l[38].idx?l[3]?-ae+l[4]:l[4]:0}px)`)},i(X){Y||($(o),$(k),Y=!0)},o(X){Q(o),Q(k),Y=!1},d(X){X&&m(e),F[s].d(),k&&k.d(),V=!1,Ve(le)}}}function Ye(l){let e,t,s,o,n;return t=new Ge({props:{onMask:!0,position:"sticky",closeOnClick:!0,$$slots:{default:[ft]},$$scope:{ctx:l}}}),{c(){e=b("div"),he(t.$$.fragment),this.h()},l(a){e=C(a,"DIV",{class:!0});var u=A(e);pe(t.$$.fragment,u),u.forEach(m),this.h()},h(){r(e,"class","box-modal-container w-full fixed left-0 top-0 z-[9999]"),be(e,"height",`${l[6]??0}px`)},m(a,u){G(a,e,u),me(t,e,null),s=!0,o||(n=q(e,"touchend",l[15],{passive:!0}),o=!0)},p(a,u){const p={};u[0]&129|u[1]&1024&&(p.$$scope={dirty:u,ctx:a}),t.$set(p),u[0]&64&&be(e,"height",`${a[6]??0}px`)},i(a){s||($(t.$$.fragment,a),s=!0)},o(a){Q(t.$$.fragment,a),s=!1},d(a){a&&m(e),ge(t),o=!1,n()}}}function ft(l){var le;let e,t,s,o,n=((le=l[0][l[7].listIdx])==null?void 0:le.name)+"",a,u,p,w=l[7].stage==="delete"?"박스를 삭제할까요?":"박스에서 나갈까요?",_,z,T,L=l[7].stage==="delete"?"이 박스를 삭제하면 모든 데이터가 영구적으로 삭제되며,":"박스를 나가면 박스 팔로우가 취소되고,",y,D,E,I,f=l[7].stage==="delete"?"다른 사용자도 더 이상 접근할 수 없습니다.":"새로운 소식에 대한 업데이트를 받을 수 없습니다.",N,g,c,d,B="아니오",S,v,R=l[7].stage==="delete"?"삭제":"나가기",Z,Y,V;return{c(){e=b("section"),t=b("div"),s=b("div"),o=b("p"),a=oe(n),u=H(),p=b("p"),_=oe(w),z=H(),T=b("p"),y=oe(L),D=H(),E=b("br"),I=H(),N=oe(f),g=H(),c=b("div"),d=b("button"),d.textContent=B,S=H(),v=b("button"),Z=oe(R),this.h()},l(O){e=C(O,"SECTION",{class:!0});var F=A(e);t=C(F,"DIV",{class:!0});var P=A(t);s=C(P,"DIV",{class:!0});var k=A(s);o=C(k,"P",{class:!0});var ie=A(o);a=re(ie,n),ie.forEach(m),u=U(k),p=C(k,"P",{class:!0});var ce=A(p);_=re(ce,w),ce.forEach(m),k.forEach(m),z=U(P),T=C(P,"P",{class:!0});var K=A(T);y=re(K,L),D=U(K),E=C(K,"BR",{}),I=U(K),N=re(K,f),K.forEach(m),P.forEach(m),g=U(F),c=C(F,"DIV",{class:!0});var X=A(c);d=C(X,"BUTTON",{class:!0,"data-svelte-h":!0}),Ae(d)!=="svelte-15cnivs"&&(d.textContent=B),S=U(X),v=C(X,"BUTTON",{class:!0});var x=A(v);Z=re(x,R),x.forEach(m),X.forEach(m),F.forEach(m),this.h()},h(){r(o,"class","typo-h3 truncate"),r(p,"class","typo-h3 flex-none"),r(s,"class","w-full flex flex-row justify-center gap-1 typo-h3"),r(T,"class","typo-body4 text-center"),r(t,"class","box-modal-body flex flex-col justify-center items-center gap-2.5 w-full"),r(d,"class","bg-gray-300 rounded-md w-full h-14"),r(v,"class","bg-primary-500 rounded-md w-full h-14"),r(c,"class","box-modal-footer w-full flex flex-row gap-2.5 justify-center text-white text-lg font-semibold"),r(e,"class","box-modal flex flex-col items-start px-4 py-10 gap-7 absolute bottom-0 bg-white rounded-t-3xl w-screen z-[9999]")},m(O,F){G(O,e,F),i(e,t),i(t,s),i(s,o),i(o,a),i(s,u),i(s,p),i(p,_),i(t,z),i(t,T),i(T,y),i(T,D),i(T,E),i(T,I),i(T,N),i(e,g),i(e,c),i(c,d),i(c,S),i(c,v),i(v,Z),Y||(V=[q(d,"click",l[15]),q(v,"click",l[16]),q(e,"touchstart",ke(l[17])),q(e,"touchend",ke(l[18]))],Y=!0)},p(O,F){var P;F[0]&129&&n!==(n=((P=O[0][O[7].listIdx])==null?void 0:P.name)+"")&&ne(a,n),F[0]&128&&w!==(w=O[7].stage==="delete"?"박스를 삭제할까요?":"박스에서 나갈까요?")&&ne(_,w),F[0]&128&&L!==(L=O[7].stage==="delete"?"이 박스를 삭제하면 모든 데이터가 영구적으로 삭제되며,":"박스를 나가면 박스 팔로우가 취소되고,")&&ne(y,L),F[0]&128&&f!==(f=O[7].stage==="delete"?"다른 사용자도 더 이상 접근할 수 없습니다.":"새로운 소식에 대한 업데이트를 받을 수 없습니다.")&&ne(N,f),F[0]&128&&R!==(R=O[7].stage==="delete"?"삭제":"나가기")&&ne(Z,R)},d(O){O&&m(e),Y=!1,Ve(V)}}}function dt(l){let e,t,s,o,n,a,u,p,w,_,z,T,L;t=new qe({props:{position:"sticky",leftBack:"black",rightBoxAdd:"#1F5AFF",backgroundColor:"bg-white",$$slots:{default:[it]},$$scope:{ctx:l}}});function y(c){l[20](c)}let D={round:!0,placeholder:"검색하세요",prefixIcon:We,prefixPointer:!0,onPrefixClick:l[19],clear:!0,backgroundColor:"bg-gray-50",onInput:l[9]};l[1]!==void 0&&(D.value=l[1]),n=new Ke({props:D}),He.push(()=>Pe(n,"value",y));let E=l[0].length===0&&Te(l),I=ye(l[0]),f=[];for(let c=0;c<I.length;c+=1)f[c]=Oe(Xe(l,I,c));const N=c=>Q(f[c],1,1,()=>{f[c]=null});let g=l[7]&&Ye(l);return{c(){e=b("div"),he(t.$$.fragment),s=H(),o=b("section"),he(n.$$.fragment),u=H(),p=b("section"),E&&E.c(),w=H();for(let c=0;c<f.length;c+=1)f[c].c();z=H(),g&&g.c(),this.h()},l(c){e=C(c,"DIV",{class:!0});var d=A(e);pe(t.$$.fragment,d),s=U(d),o=C(d,"SECTION",{class:!0});var B=A(o);pe(n.$$.fragment,B),B.forEach(m),u=U(d),p=C(d,"SECTION",{class:!0});var S=A(p);E&&E.l(S),w=U(S);for(let v=0;v<f.length;v+=1)f[v].l(S);S.forEach(m),z=U(d),g&&g.l(d),d.forEach(m),this.h()},h(){r(o,"class","box-search sticky p-4 top-[100px] z-10 bg-white"),r(p,"class",_=`box-contents flex flex-col ${l[0].length===0?"justify-center":"justify-start"} items-center gap-6 my-2 overflow-x-hidden flex-auto`),r(e,"class","box flex flex-col min-h-full"),Ue(()=>l[24].call(e))},m(c,d){G(c,e,d),me(t,e,null),i(e,s),i(e,o),me(n,o,null),i(e,u),i(e,p),E&&E.m(p,null),i(p,w);for(let B=0;B<f.length;B+=1)f[B]&&f[B].m(p,null);i(e,z),g&&g.m(e,null),T=$e(e,l[24].bind(e)),L=!0},p(c,d){const B={};d[1]&1024&&(B.$$scope={dirty:d,ctx:c}),t.$set(B);const S={};if(!a&&d[0]&2&&(a=!0,S.value=c[1],Ne(()=>a=!1)),n.$set(S),c[0].length===0?E?E.p(c,d):(E=Te(c),E.c(),E.m(p,w)):E&&(E.d(1),E=null),d[0]&31805){I=ye(c[0]);let v;for(v=0;v<I.length;v+=1){const R=Xe(c,I,v);f[v]?(f[v].p(R,d),$(f[v],1)):(f[v]=Oe(R),f[v].c(),$(f[v],1),f[v].m(p,null))}for(we(),v=I.length;v<f.length;v+=1)N(v);Ce()}(!L||d[0]&1&&_!==(_=`box-contents flex flex-col ${c[0].length===0?"justify-center":"justify-start"} items-center gap-6 my-2 overflow-x-hidden flex-auto`))&&r(p,"class",_),c[7]?g?(g.p(c,d),d[0]&128&&$(g,1)):(g=Ye(c),g.c(),$(g,1),g.m(e,null)):g&&(we(),Q(g,1,1,()=>{g=null}),Ce())},i(c){if(!L){$(t.$$.fragment,c),$(n.$$.fragment,c);for(let d=0;d<I.length;d+=1)$(f[d]);$(g),L=!0}},o(c){Q(t.$$.fragment,c),Q(n.$$.fragment,c),f=f.filter(Boolean);for(let d=0;d<f.length;d+=1)Q(f[d]);Q(g),L=!1},d(c){c&&m(e),ge(t),ge(n),E&&E.d(),Re(f,c),g&&g.d(),T()}}}let ae=48;function ht(l,e,t){let s;je(l,se,h=>t(30,s=h));const o=ze();let n=[],a=[],u=sessionStorage.getItem("jwt");async function p(){if(!u)return;const h=await fetch("https://azit.surflux.studio/boxes",{method:"GET",headers:{Authorization:`Bearer ${u}`}});if(!h.ok)return;const M=await h.json();t(0,a=n=M.data)}function w(){u?Ee("/boxes/-1/setting"):Le.emit("pushSnackbar",{message:"로그인이 필요합니다.",uuid:"login-required",buttonText:"로그인",callback:()=>{et(),Ee("/boxes/-1/setting")}})}let _="",z;function T(h){clearTimeout(z),z=setTimeout(L,300)}function L(){t(0,a=_?n.filter(h=>h.name.includes(_)):n)}let y,D=!1,E=-1,I=-1,f;function N(h,M){f=void 0,t(4,g=0),t(5,d=!1),se.set(!0),E=h.touches[0].clientX,I=h.touches[0].clientY,y!==void 0&&y!==M&&t(3,D=!1),t(2,y=M)}let g=0;function c(h){if(y===void 0)return;let j=h.touches[0].clientX-E,ue=h.touches[0].clientY-I;if(f===void 0&&(f=Math.abs(j)-Math.abs(ue)>=0,!D&&f&&j>0))return t(2,y=void 0),t(4,g=0),se.set(!1);if(f){const fe=D?ae:0,de=D?0:-ae;t(4,g=j>fe?fe:j<de?de:j)}}let d=!1;function B(h){if(y!==void 0)if(f){t(5,d=!0);let M=h.changedTouches[0].clientX-E;(g===0||Math.abs(g)===ae)&&(h.stopPropagation(),S()),M>=ae/2?t(3,D=!1):M<=-ae/2&&t(3,D=!0),t(4,g=0)}else se.set(!1)}function S(){t(5,d=!1),se.set(!1)}function v(h){s||V||(t(2,y=void 0),t(3,D=!1),f=void 0,t(4,g=0),se.set(!0),E=h.touches[0].clientX,I=h.touches[0].clientY)}function R(h){if(f||V)return;let j=h.touches[0].clientX-E,ue=h.touches[0].clientY-I;f===void 0&&(f=Math.abs(j)-Math.abs(ue)>=0),f&&se.set(!1)}function Z(h){V||(f||o("stopSwipe",{stop:!0,toDefault:!0}),se.set(!1),o("stopSwipe",{stop:!1}))}Qe(()=>{p(),document.addEventListener("touchstart",v),document.addEventListener("touchmove",R),document.addEventListener("touchend",Z)}),Ze(()=>{document.removeEventListener("touchstart",v),document.removeEventListener("touchmove",R),document.removeEventListener("touchend",Z)});let Y,V;function le(h,M,j){t(7,V={listIdx:h,idx:M,stage:j==="owner"?"delete":"leave"}),o("stopSwipe",{stop:!0,toHiddenScroll:!0})}function O(){t(7,V=void 0),t(2,y=void 0),t(3,D=!1),o("stopSwipe",{stop:!1,toHiddenScroll:!1})}function F(){if(!V)return;V.stage==="delete"&&fetch(`https://azit.surflux.studio/boxes/${V.idx}`,{method:"DELETE",headers:{"Content-Type":"application/json",Authorization:`Bearer ${u}`}});const M=n.splice(V.listIdx,1)[0];L(),Le.emit("pushSnackbar",{message:`${M.name} 박스를 삭제했습니다.`}),O()}function P(h){Fe.call(this,l,h)}function k(h){Fe.call(this,l,h)}const ie=()=>window.history.back();function ce(h){_=h,t(1,_)}const K=(h,M)=>le(h,M.idx,M.role),X=(h,M)=>N(M,h.idx),x=h=>Ee(`/boxes/${h.idx}/detail`);function W(){Y=this.clientHeight,t(6,Y)}return[a,_,y,D,g,d,Y,V,w,T,N,c,B,S,le,O,F,P,k,ie,ce,K,X,x,W]}class Et extends Be{constructor(e){super(),Ie(this,e,ht,dt,xe,{},null,[-1,-1])}}export{Et as component};
