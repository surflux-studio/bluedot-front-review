import{s as Re,M as ke,N as Me,b as E,f as g,m as r,i as ae,h as s,n as _e,q as qe,e as v,a as V,c as _,g as H,u as Ke,a7 as $e,A as We,O as Ge,k as Je,a8 as e0,o as t0,p as l0,P as de,w as K,t as te,d as le,R as ue,J as Ae,D as Le,j as re,r as Qe,y as He}from"../chunks/scheduler.B36p9E6k.js";import{S as Pe,i as ze,e as s0,c as Ce,a as we,m as be,t as P,f as Fe,b as ee,d as Ee,g as Be}from"../chunks/index.K404SoRv.js";import{e as Oe}from"../chunks/each.CPGC1t5D.js";import{g as o0}from"../chunks/entry.CSULzzio.js";import{H as r0}from"../chunks/Header.TgeaIWhT.js";import{F as a0}from"../chunks/Field.Cbd6pcBb.js";import{d as n0}from"../chunks/ImageShaper.Ehtc9I8a.js";import{s as oe}from"../chunks/store.CEymtcp9.js";import{M as i0}from"../chunks/Mask.DPlicW8Z.js";const c0="data:image/svg+xml,%3csvg%20width='18'%20height='18'%20viewBox='0%200%2018%2018'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_1469_2679)'%3e%3cpath%20d='M13.5233%2012.4628L16.7355%2015.6743L15.6743%2016.7355L12.4628%2013.5233C11.2678%2014.4812%209.7815%2015.0022%208.25%2015C4.524%2015%201.5%2011.976%201.5%208.25C1.5%204.524%204.524%201.5%208.25%201.5C11.976%201.5%2015%204.524%2015%208.25C15.0022%209.7815%2014.4812%2011.2678%2013.5233%2012.4628ZM12.0188%2011.9063C12.9706%2010.9274%2013.5022%209.61532%2013.5%208.25C13.5%205.349%2011.1503%203%208.25%203C5.349%203%203%205.349%203%208.25C3%2011.1503%205.349%2013.5%208.25%2013.5C9.61532%2013.5022%2010.9274%2012.9706%2011.9063%2012.0188L12.0188%2011.9063Z'%20fill='%234B5362'%20/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_1469_2679'%3e%3crect%20width='18'%20height='18'%20fill='white'%20/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e",u0="data:image/svg+xml,%3csvg%20width='48'%20height='48'%20viewBox='0%200%2048%2048'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M23.2839%200.684838C23.7305%200.438387%2024.2695%200.438387%2024.7161%200.684838L44.7161%2011.7219C45.1974%2011.9875%2045.5%2012.5%2045.5%2013.0605V34.9395C45.5%2035.5%2045.1974%2036.0125%2044.7161%2036.2781L24.7161%2047.3152C24.2695%2047.5616%2023.7305%2047.5616%2023.2839%2047.3152L3.28388%2036.2781C2.80257%2036.0125%202.5%2035.5%202.5%2034.9395V13.0605C2.5%2012.5%202.80257%2011.9875%203.28388%2011.7219L23.2839%200.684838Z'%20fill='white'%20stroke='%23EAEEF5'%20/%3e%3cpath%20d='M15%2020.1434V28.3719L24%2033.0005L33%2027.8576V20.1434M15%2020.1434L24%2024.7719L33%2020.1434M15%2020.1434L23.5039%2015.2841C23.8113%2015.1084%2024.1887%2015.1084%2024.4961%2015.2841L33%2020.1434M24%2024.2578L24%2032.4864'%20stroke='%238690A2'%20stroke-width='1.89474'%20stroke-linejoin='round'%20/%3e%3c/svg%3e",Te="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADFSURBVHgB7dfbCYNAEIXh2ZAq8pQ0kNSRilOHFcQn21AEFZH1ugOHgf97UxT27Ow1tW9rLbCbBUcANQKoEUCNAGoEUCOA2t08/f5mj+f2N01t9n2ZF98K7DX+6Dcn+FZg9En595X/1SNdvtB4N2Yt9I7wkzhFv1KWz4HSoXRx6IzYByZne9JpEeAokdX37ryHl8+OqIAaAdTYB7KWe0LhbruFCkwqzZmwvAL9FVHx7yD8cZplVI0AagRQI4AaAdQIoBY+QAecIyKJbyjm6wAAAABJRU5ErkJggg==",Se="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEhSURBVHgB7dmxasJQGAXgY+kjFDt1aJ+lnRQc2qHdWotLKU6KCA5ZRScHF1FXBxdBJ30LQXBRwUnxHTQZMrgI3v/KUTjfGBLIyX/vf2+SROo9u8cNu8ONUwA2BWBTADYFYFMANgVgu4dRp1lFMvkAF9vtDtm/EizMFXC9eeu1MXMFYumP37POH/bb8EFz4Nwn75vaaCT38wUWU4DHsIs06gEyqVewOM+Bl+cnVIr/XlqhhVOATPoNue/Po2On2uIlJ7rbENpfz6ckpwoMRhNMZ/OjIcRqp86TeLFcoxzUsFitwWTqQptwM5YvBGFFxmDxsg60uj2waCWO2qevnaUL7UZjrCqYKxC9FjKujSX0h4ZMAdgUgE0B2BSATQHYFIDtAJj3PWal2lrSAAAAAElFTkSuQmCC",f0="data:image/svg+xml,%3csvg%20width='14'%20height='15'%20viewBox='0%200%2014%2015'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M1.16663%2013.332C1.16663%2012.0944%201.65829%2010.9074%202.53346%2010.0322C3.40863%209.15703%204.59562%208.66536%205.83329%208.66536C7.07097%208.66536%208.25795%209.15703%209.13312%2010.0322C10.0083%2010.9074%2010.5%2012.0944%2010.5%2013.332H9.33329C9.33329%2012.4038%208.96454%2011.5135%208.30817%2010.8572C7.65179%2010.2008%206.76155%209.83203%205.83329%209.83203C4.90503%209.83203%204.0148%2010.2008%203.35842%2010.8572C2.70204%2011.5135%202.33329%2012.4038%202.33329%2013.332H1.16663ZM5.83329%208.08203C3.89954%208.08203%202.33329%206.51578%202.33329%204.58203C2.33329%202.64828%203.89954%201.08203%205.83329%201.08203C7.76704%201.08203%209.33329%202.64828%209.33329%204.58203C9.33329%206.51578%207.76704%208.08203%205.83329%208.08203ZM5.83329%206.91536C7.12246%206.91536%208.16663%205.8712%208.16663%204.58203C8.16663%203.29286%207.12246%202.2487%205.83329%202.2487C4.54413%202.2487%203.49996%203.29286%203.49996%204.58203C3.49996%205.8712%204.54413%206.91536%205.83329%206.91536ZM10.6656%209.07545C11.4854%209.44465%2012.1811%2010.0428%2012.6691%2010.7979C13.1572%2011.553%2013.4167%2012.4329%2013.4166%2013.332H12.25C12.2501%2012.6577%2012.0554%2011.9977%2011.6894%2011.4313C11.3234%2010.8649%2010.8016%2010.4163%2010.1867%2010.1394L10.665%209.07545H10.6656ZM10.2643%202.48961C10.852%202.73187%2011.3545%203.14326%2011.7081%203.67158C12.0616%204.1999%2012.2502%204.82134%2012.25%205.45703C12.2502%206.25756%2011.9511%207.02925%2011.4114%207.62051C10.8718%208.21178%2010.1305%208.57989%209.33329%208.65253V7.47828C9.76551%207.41638%2010.1665%207.21754%2010.4774%206.91096C10.7883%206.60439%2010.9927%206.20622%2011.0606%205.77491C11.1286%205.3436%2011.0564%204.90187%2010.8548%204.51457C10.6533%204.12727%2010.3328%203.8148%209.94054%203.62303L10.2643%202.48961Z'%20fill='%239DA5B4'%20/%3e%3c/svg%3e",d0="data:image/svg+xml,%3csvg%20width='14'%20height='15'%20viewBox='0%200%2014%2015'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M7%2014.3426L3.28767%2010.6303C2.55345%209.89603%202.05344%208.96057%201.85087%207.94217C1.64831%206.92377%201.75228%205.86817%202.14964%204.90887C2.547%203.94956%203.21991%203.12962%204.08327%202.55275C4.94662%201.97587%205.96165%201.66797%207%201.66797C8.03835%201.66797%209.05338%201.97587%209.91674%202.55275C10.7801%203.12962%2011.453%203.94956%2011.8504%204.90887C12.2477%205.86817%2012.3517%206.92377%2012.1491%207.94217C11.9466%208.96057%2011.4466%209.89603%2010.7123%2010.6303L7%2014.3426ZM9.8875%209.80542C10.4585%209.23434%2010.8474%208.50676%2011.0049%207.71468C11.1624%206.92261%2011.0815%206.1016%2010.7725%205.3555C10.4634%204.60939%209.94003%203.97169%209.26854%203.52302C8.59705%203.07436%207.80759%202.83488%207%202.83488C6.19241%202.83488%205.40296%203.07436%204.73147%203.52302C4.05998%203.97169%203.5366%204.60939%203.22753%205.3555C2.91846%206.1016%202.83758%206.92261%202.9951%207.71468C3.15262%208.50676%203.54148%209.23434%204.1125%209.80542L7%2012.6929L9.8875%209.80542ZM7%208.08459C6.69058%208.08459%206.39384%207.96167%206.17505%207.74288C5.95625%207.52409%205.83334%207.22734%205.83334%206.91792C5.83334%206.6085%205.95625%206.31176%206.17505%206.09297C6.39384%205.87417%206.69058%205.75126%207%205.75126C7.30942%205.75126%207.60617%205.87417%207.82496%206.09297C8.04375%206.31176%208.16667%206.6085%208.16667%206.91792C8.16667%207.22734%208.04375%207.52409%207.82496%207.74288C7.60617%207.96167%207.30942%208.08459%207%208.08459Z'%20fill='%239DA5B4'%20/%3e%3c/svg%3e";function h0(l){let e,t,a,o,f;return{c(){e=ke("svg"),t=ke("circle"),o=ke("path"),this.h()},l(c){e=Me(c,"svg",{width:!0,height:!0,viewBox:!0,fill:!0,xmlns:!0});var h=E(e);t=Me(h,"circle",{cx:!0,cy:!0,r:!0,fill:!0}),E(t).forEach(g),o=Me(h,"path",{"fill-rule":!0,"clip-rule":!0,d:!0,fill:!0}),E(o).forEach(g),h.forEach(g),this.h()},h(){r(t,"cx","8"),r(t,"cy","8"),r(t,"r","8"),r(t,"fill",a=l[0]==="owner"?"#FFF5F0":"#EAFFF4"),r(o,"fill-rule","evenodd"),r(o,"clip-rule","evenodd"),r(o,"d","M7.62492 3.76955C7.81242 3.39453 8.18742 3.39453 8.37492 3.7695L10.313 7.11708C10.3274 7.1071 10.3426 7.09811 10.3584 7.09019L12.5656 5.98663C12.8444 5.84721 13.1617 6.08913 13.1011 6.39494L12.1578 11.1549C12.123 11.3305 11.969 11.457 11.79 11.457H9.88001C9.87831 11.457 9.87662 11.457 9.87492 11.457L6.76851 11.457C6.76656 11.457 6.76461 11.457 6.76266 11.457H4.2098C4.0308 11.457 3.87675 11.3305 3.84196 11.1549L2.89863 6.39494C2.83803 6.08913 3.15534 5.84721 3.43418 5.98663L5.64131 7.09019C5.65547 7.09727 5.59175 7.06541 5.68216 7.11394C5.70599 7.09019 5.6972 7.11394 6.10108 6.41719C6.08531 6.43899 6.1158 6.39538 6.10108 6.41719C6.12971 6.37762 6.15859 6.33772 6.18227 6.29624L7.62492 3.76955Z"),r(o,"fill",f=l[0]==="owner"?"#FF7A00":"#1FCA70"),r(e,"width","16"),r(e,"height","16"),r(e,"viewBox","0 0 16 16"),r(e,"fill","none"),r(e,"xmlns","http://www.w3.org/2000/svg")},m(c,h){ae(c,e,h),s(e,t),s(e,o)},p(c,[h]){h&1&&a!==(a=c[0]==="owner"?"#FFF5F0":"#EAFFF4")&&r(t,"fill",a),h&1&&f!==(f=c[0]==="owner"?"#FF7A00":"#1FCA70")&&r(o,"fill",f)},i:_e,o:_e,d(c){c&&g(e)}}}function p0(l,e,t){let{type:a="owner"}=e;return l.$$set=o=>{"type"in o&&t(0,a=o.type)},[a]}class m0 extends Pe{constructor(e){super(),ze(this,e,p0,h0,Re,{type:0})}}function Ue(l,e,t){const a=l.slice();return a[38]=e[t],a}function g0(l){let e,t="박스";return{c(){e=v("div"),e.textContent=t,this.h()},l(a){e=_(a,"DIV",{class:!0,"data-svelte-h":!0}),de(e)!=="svelte-oldnbc"&&(e.textContent=t),this.h()},h(){r(e,"class","text-[21242C] typo-h3")},m(a,o){ae(a,e,o)},p:_e,d(a){a&&g(e)}}}function Ye(l){let e,t,a="아직 생성된 박스가 없습니다.<br/>지금 새로운 박스를 만들어보세요!",o,f,c="새 박스 만들기",h,m;return{c(){e=v("div"),t=v("p"),t.innerHTML=a,o=V(),f=v("button"),f.textContent=c,this.h()},l(C){e=_(C,"DIV",{class:!0});var x=E(e);t=_(x,"P",{class:!0,"data-svelte-h":!0}),de(t)!=="svelte-92hfch"&&(t.innerHTML=a),o=H(x),f=_(x,"BUTTON",{class:!0,"data-svelte-h":!0}),de(f)!=="svelte-1htjjxs"&&(f.textContent=c),x.forEach(g),this.h()},h(){r(t,"class","typo-body3 text-gray-500 text-center"),r(f,"class","px-3.5 py-1.5 w-fit rounded-3xl border border-gray-200 typo-body3 text-gray-700"),r(e,"class","flex flex-col gap-3.5 px-4 items-center")},m(C,x){ae(C,e,x),s(e,t),s(e,o),s(e,f),h||(m=K(f,"click",l[20]),h=!0)},p:_e,d(C){C&&g(e),h=!1,m()}}}function Ne(l){let e,t,a;return t=new m0({props:{type:l[38].role}}),{c(){e=v("div"),Ce(t.$$.fragment),this.h()},l(o){e=_(o,"DIV",{class:!0});var f=E(e);we(t.$$.fragment,f),f.forEach(g),this.h()},h(){r(e,"class","absolute bottom-0 right-0.5")},m(o,f){ae(o,e,f),be(t,e,null),a=!0},p(o,f){const c={};f[0]&1&&(c.type=o[38].role),t.$set(c)},i(o){a||(P(t.$$.fragment,o),a=!0)},o(o){ee(t.$$.fragment,o),a=!1},d(o){o&&g(e),Ee(t)}}}function Ze(l){let e,t,a,o,f,c,h,m,C,x,$,F,k,L=l[38].followers+"",w,y,i,N="･",p,n,u,M,S,A,O=l[38].places+"",Z,z,D,j,B=l[38].name+"",T,G,J,q,U,R,W,se,ie,Q,d,I,b=(l[38].role==="owner"||l[38].role==="manager")&&Ne(l);function xe(){return l[21](l[38])}function fe(...Y){return l[22](l[38],...Y)}function he(){return l[23](l[38])}return{c(){e=v("div"),t=v("div"),a=v("img"),f=V(),b&&b.c(),c=V(),h=v("div"),m=v("div"),C=v("div"),x=v("img"),F=V(),k=v("div"),w=te(L),y=V(),i=v("div"),i.textContent=N,p=V(),n=v("div"),u=v("img"),S=V(),A=v("div"),Z=te(O),z=V(),D=v("div"),j=v("div"),T=te(B),G=te("의 박스"),J=V(),q=v("button"),U=v("img"),se=V(),this.h()},l(Y){e=_(Y,"DIV",{class:!0,"aria-hidden":!0});var X=E(e);t=_(X,"DIV",{class:!0});var pe=E(t);a=_(pe,"IMG",{src:!0,alt:!0}),f=H(pe),b&&b.l(pe),pe.forEach(g),c=H(X),h=_(X,"DIV",{class:!0});var me=E(h);m=_(me,"DIV",{class:!0});var ce=E(m);C=_(ce,"DIV",{class:!0});var ge=E(C);x=_(ge,"IMG",{src:!0,alt:!0}),F=H(ge),k=_(ge,"DIV",{class:!0});var ye=E(k);w=le(ye,L),ye.forEach(g),ge.forEach(g),y=H(ce),i=_(ce,"DIV",{class:!0,"data-svelte-h":!0}),de(i)!=="svelte-1463mnj"&&(i.textContent=N),p=H(ce),n=_(ce,"DIV",{class:!0});var ve=E(n);u=_(ve,"IMG",{src:!0,alt:!0}),S=H(ve),A=_(ve,"DIV",{class:!0});var De=E(A);Z=le(De,O),De.forEach(g),ve.forEach(g),ce.forEach(g),z=H(me),D=_(me,"DIV",{class:!0});var Xe=E(D);j=_(Xe,"DIV",{class:!0});var Ie=E(j);T=le(Ie,B),G=le(Ie,"의 박스"),Ie.forEach(g),Xe.forEach(g),me.forEach(g),J=H(X),q=_(X,"BUTTON",{class:!0});var Ve=E(q);U=_(Ve,"IMG",{src:!0,alt:!0}),Ve.forEach(g),se=H(X),X.forEach(g),this.h()},h(){ue(a.src,o=l[38].image)||r(a,"src",o),r(a,"alt",""),r(t,"class","flex-none w-12 h-12 relative"),ue(x.src,$=f0)||r(x,"src",$),r(x,"alt","group-icon"),r(k,"class","typo-caption2"),r(C,"class","flex flex-row gap-0.5"),r(i,"class","typo-caption2"),ue(u.src,M=d0)||r(u,"src",M),r(u,"alt","place-icon"),r(A,"class","typo-caption2"),r(n,"class","flex flex-row gap-0.5"),r(m,"class","flex flex-row gap-1 text-gray-400"),r(j,"class","typo-body1 text-black truncate"),r(D,"class","w-full flex flex-row gap-2"),r(h,"class","flex-auto min-w-0 flex flex-col items-start gap-0.5"),ue(U.src,R=l[38].role==="owner"?Te:Se)||r(U,"src",R),r(U,"alt",W=l[38].role==="owner"?"박스 삭제":"박스 나가기"),r(q,"class","absolute -right-12"),r(e,"class",ie=`flex flex-row items-center px-4 gap-2.5 h-12 w-screen ${l[2]===l[38].idx&&!l[5]?"":"transition-transform"}`),r(e,"aria-hidden",""),Ae(e,"transform",`translateX(${l[2]===l[38].idx?l[3]?-ne+l[4]:l[4]:0}px)`)},m(Y,X){ae(Y,e,X),s(e,t),s(t,a),s(t,f),b&&b.m(t,null),s(e,c),s(e,h),s(h,m),s(m,C),s(C,x),s(C,F),s(C,k),s(k,w),s(m,y),s(m,i),s(m,p),s(m,n),s(n,u),s(n,S),s(n,A),s(A,Z),s(h,z),s(h,D),s(D,j),s(j,T),s(j,G),s(e,J),s(e,q),s(q,U),s(e,se),Q=!0,d||(I=[K(q,"click",Le(xe)),K(e,"touchstart",fe),K(e,"touchmove",l[10]),K(e,"touchend",l[11]),K(e,"transitionend",l[12]),K(e,"click",he)],d=!0)},p(Y,X){l=Y,(!Q||X[0]&1&&!ue(a.src,o=l[38].image))&&r(a,"src",o),l[38].role==="owner"||l[38].role==="manager"?b?(b.p(l,X),X[0]&1&&P(b,1)):(b=Ne(l),b.c(),P(b,1),b.m(t,null)):b&&(Be(),ee(b,1,1,()=>{b=null}),Fe()),(!Q||X[0]&1)&&L!==(L=l[38].followers+"")&&re(w,L),(!Q||X[0]&1)&&O!==(O=l[38].places+"")&&re(Z,O),(!Q||X[0]&1)&&B!==(B=l[38].name+"")&&re(T,B),(!Q||X[0]&1&&!ue(U.src,R=l[38].role==="owner"?Te:Se))&&r(U,"src",R),(!Q||X[0]&1&&W!==(W=l[38].role==="owner"?"박스 삭제":"박스 나가기"))&&r(U,"alt",W),(!Q||X[0]&37&&ie!==(ie=`flex flex-row items-center px-4 gap-2.5 h-12 w-screen ${l[2]===l[38].idx&&!l[5]?"":"transition-transform"}`))&&r(e,"class",ie),X[0]&29&&Ae(e,"transform",`translateX(${l[2]===l[38].idx?l[3]?-ne+l[4]:l[4]:0}px)`)},i(Y){Q||(P(b),Q=!0)},o(Y){ee(b),Q=!1},d(Y){Y&&g(e),b&&b.d(),d=!1,Qe(I)}}}function je(l){let e,t,a,o,f;return t=new i0({props:{onMask:!0,position:"sticky",closeOnClick:!0,$$slots:{default:[v0]},$$scope:{ctx:l}}}),{c(){e=v("div"),Ce(t.$$.fragment),this.h()},l(c){e=_(c,"DIV",{class:!0});var h=E(e);we(t.$$.fragment,h),h.forEach(g),this.h()},h(){r(e,"class","box-modal-container w-full fixed left-0 top-0 z-[9999]"),Ae(e,"height",`${l[6]??0}px`)},m(c,h){ae(c,e,h),be(t,e,null),a=!0,o||(f=K(e,"touchend",l[14],{passive:!0}),o=!0)},p(c,h){const m={};h[0]&129|h[1]&1024&&(m.$$scope={dirty:h,ctx:c}),t.$set(m),h[0]&64&&Ae(e,"height",`${c[6]??0}px`)},i(c){a||(P(t.$$.fragment,c),a=!0)},o(c){ee(t.$$.fragment,c),a=!1},d(c){c&&g(e),Ee(t),o=!1,f()}}}function v0(l){let e,t,a,o,f=l[0][l[7].idx].name+"",c,h,m,C=l[7].stage==="delete"?"박스를 삭제할까요?":"박스에서 나갈까요?",x,$,F,k=l[7].stage==="delete"?"이 박스를 삭제하면 모든 데이터가 영구적으로 삭제되며,":"박스를 나가면 박스 팔로우가 취소되고,",L,w,y,i,N=l[7].stage==="delete"?"다른 사용자도 더 이상 접근할 수 없습니다.":"새로운 소식에 대한 업데이트를 받을 수 없습니다.",p,n,u,M,S="아니오",A,O,Z=l[7].stage==="delete"?"삭제":"나가기",z,D,j;return{c(){e=v("section"),t=v("div"),a=v("div"),o=v("p"),c=te(f),h=V(),m=v("p"),x=te(C),$=V(),F=v("p"),L=te(k),w=V(),y=v("br"),i=V(),p=te(N),n=V(),u=v("div"),M=v("button"),M.textContent=S,A=V(),O=v("button"),z=te(Z),this.h()},l(B){e=_(B,"SECTION",{class:!0});var T=E(e);t=_(T,"DIV",{class:!0});var G=E(t);a=_(G,"DIV",{class:!0});var J=E(a);o=_(J,"P",{class:!0});var q=E(o);c=le(q,f),q.forEach(g),h=H(J),m=_(J,"P",{class:!0});var U=E(m);x=le(U,C),U.forEach(g),J.forEach(g),$=H(G),F=_(G,"P",{class:!0});var R=E(F);L=le(R,k),w=H(R),y=_(R,"BR",{}),i=H(R),p=le(R,N),R.forEach(g),G.forEach(g),n=H(T),u=_(T,"DIV",{class:!0});var W=E(u);M=_(W,"BUTTON",{class:!0,"data-svelte-h":!0}),de(M)!=="svelte-15cnivs"&&(M.textContent=S),A=H(W),O=_(W,"BUTTON",{class:!0});var se=E(O);z=le(se,Z),se.forEach(g),W.forEach(g),T.forEach(g),this.h()},h(){r(o,"class","typo-h3 truncate"),r(m,"class","typo-h3 flex-none"),r(a,"class","w-full flex flex-row justify-center gap-1 typo-h3"),r(F,"class","typo-body4 text-center"),r(t,"class","box-modal-body flex flex-col justify-center items-center gap-2.5 w-full"),r(M,"class","bg-gray-300 rounded-md w-full h-14"),r(O,"class","bg-primary-500 rounded-md w-full h-14"),r(u,"class","box-modal-footer w-full flex flex-row gap-2.5 justify-center text-white text-lg font-semibold"),r(e,"class","box-modal flex flex-col items-start px-4 py-10 gap-7 absolute bottom-0 bg-white rounded-t-3xl w-screen z-[9999]")},m(B,T){ae(B,e,T),s(e,t),s(t,a),s(a,o),s(o,c),s(a,h),s(a,m),s(m,x),s(t,$),s(t,F),s(F,L),s(F,w),s(F,y),s(F,i),s(F,p),s(e,n),s(e,u),s(u,M),s(u,A),s(u,O),s(O,z),D||(j=[K(M,"click",l[14]),K(O,"click",l[15]),K(e,"touchstart",Le(l[16])),K(e,"touchend",Le(l[17]))],D=!0)},p(B,T){T[0]&129&&f!==(f=B[0][B[7].idx].name+"")&&re(c,f),T[0]&128&&C!==(C=B[7].stage==="delete"?"박스를 삭제할까요?":"박스에서 나갈까요?")&&re(x,C),T[0]&128&&k!==(k=B[7].stage==="delete"?"이 박스를 삭제하면 모든 데이터가 영구적으로 삭제되며,":"박스를 나가면 박스 팔로우가 취소되고,")&&re(L,k),T[0]&128&&N!==(N=B[7].stage==="delete"?"다른 사용자도 더 이상 접근할 수 없습니다.":"새로운 소식에 대한 업데이트를 받을 수 없습니다.")&&re(p,N),T[0]&128&&Z!==(Z=B[7].stage==="delete"?"삭제":"나가기")&&re(z,Z)},d(B){B&&g(e),D=!1,Qe(j)}}}function _0(l){let e,t,a,o,f,c,h,m,C,x,$,F;t=new r0({props:{position:"sticky",leftBack:"black",rightBoxAdd:"#1F5AFF",backgroundColor:"bg-white",$$slots:{default:[g0]},$$scope:{ctx:l}}});function k(n){l[19](n)}let L={round:!0,placeholder:"검색하세요",prefixIcon:c0,prefixPointer:!0,onPrefixClick:l[18],clear:!0,backgroundColor:"bg-gray-50",onInput:l[8]};l[1]!==void 0&&(L.value=l[1]),f=new a0({props:L}),qe.push(()=>s0(f,"value",k));let w=l[0].length===0&&Ye(l),y=Oe(l[0]),i=[];for(let n=0;n<y.length;n+=1)i[n]=Ze(Ue(l,y,n));const N=n=>ee(i[n],1,1,()=>{i[n]=null});let p=l[7]&&je(l);return{c(){e=v("div"),Ce(t.$$.fragment),a=V(),o=v("section"),Ce(f.$$.fragment),h=V(),m=v("section"),w&&w.c(),C=V();for(let n=0;n<i.length;n+=1)i[n].c();x=V(),p&&p.c(),this.h()},l(n){e=_(n,"DIV",{class:!0});var u=E(e);we(t.$$.fragment,u),a=H(u),o=_(u,"SECTION",{class:!0});var M=E(o);we(f.$$.fragment,M),M.forEach(g),h=H(u),m=_(u,"SECTION",{class:!0});var S=E(m);w&&w.l(S),C=H(S);for(let A=0;A<i.length;A+=1)i[A].l(S);S.forEach(g),x=H(u),p&&p.l(u),u.forEach(g),this.h()},h(){r(o,"class","box-search sticky p-4 top-[100px] z-10 bg-white"),r(m,"class","box-contents flex flex-col justify-center items-center gap-6 my-2 overflow-x-hidden flex-auto"),r(e,"class","box flex flex-col min-h-full"),Ke(()=>l[24].call(e))},m(n,u){ae(n,e,u),be(t,e,null),s(e,a),s(e,o),be(f,o,null),s(e,h),s(e,m),w&&w.m(m,null),s(m,C);for(let M=0;M<i.length;M+=1)i[M]&&i[M].m(m,null);s(e,x),p&&p.m(e,null),$=$e(e,l[24].bind(e)),F=!0},p(n,u){const M={};u[1]&1024&&(M.$$scope={dirty:u,ctx:n}),t.$set(M);const S={};if(!c&&u[0]&2&&(c=!0,S.value=n[1],We(()=>c=!1)),f.$set(S),n[0].length===0?w?w.p(n,u):(w=Ye(n),w.c(),w.m(m,C)):w&&(w.d(1),w=null),u[0]&15933){y=Oe(n[0]);let A;for(A=0;A<y.length;A+=1){const O=Ue(n,y,A);i[A]?(i[A].p(O,u),P(i[A],1)):(i[A]=Ze(O),i[A].c(),P(i[A],1),i[A].m(m,null))}for(Be(),A=y.length;A<i.length;A+=1)N(A);Fe()}n[7]?p?(p.p(n,u),u[0]&128&&P(p,1)):(p=je(n),p.c(),P(p,1),p.m(e,null)):p&&(Be(),ee(p,1,1,()=>{p=null}),Fe())},i(n){if(!F){P(t.$$.fragment,n),P(f.$$.fragment,n);for(let u=0;u<y.length;u+=1)P(i[u]);P(p),F=!0}},o(n){ee(t.$$.fragment,n),ee(f.$$.fragment,n),i=i.filter(Boolean);for(let u=0;u<i.length;u+=1)ee(i[u]);ee(p),F=!1},d(n){n&&g(e),Ee(t),Ee(f),w&&w.d(),Ge(i,n),p&&p.d(),$()}}}let ne=48;function A0(l,e,t){let a;Je(l,oe,d=>t(30,a=d));const o=e0();let f=["owner","manager","writer","reader"],c=[],h=[];const m=Array(20).fill(1).map(async(d,I)=>{const b=I%3===0?u0:await n0(`https://picsum.photos/100/100?random=${I}`);return{idx:I,name:`test${I}`.repeat(I+1),image:b,followers:Math.ceil(Math.random()*10)*I,places:Math.ceil(Math.random()*10)*I,message:"",time:"",role:f[Math.floor(Math.random()*4)]}});Promise.allSettled(m).then(d=>{d.forEach(I=>{I.status!=="rejected"&&(c=[...c,I.value])}),t(0,h=c)});let C="",x;function $(d){clearTimeout(x),x=setTimeout(F,300)}function F(){t(0,h=C?c.filter(d=>d.name.includes(C)):c)}let k,L=!1,w=-1,y=-1,i;function N(d,I){i=void 0,t(4,p=0),t(5,u=!1),oe.set(!0),w=d.touches[0].clientX,y=d.touches[0].clientY,k!==void 0&&k!==I&&t(3,L=!1),t(2,k=I)}let p=0;function n(d){if(k===void 0)return;let b=d.touches[0].clientX-w,fe=d.touches[0].clientY-y;if(i===void 0&&(i=Math.abs(b)-Math.abs(fe)>=0,!L&&i&&b>0))return t(2,k=void 0),t(4,p=0),oe.set(!1);if(i){const he=L?ne:0,Y=L?0:-ne;t(4,p=b>he?he:b<Y?Y:b)}}let u=!1;function M(d){if(k!==void 0)if(i){t(5,u=!0);let I=d.changedTouches[0].clientX-w;(p===0||Math.abs(p)===ne)&&(d.stopPropagation(),S()),I>=ne/2?t(3,L=!1):I<=-ne/2&&t(3,L=!0),t(4,p=0)}else oe.set(!1)}function S(){t(5,u=!1),oe.set(!1)}function A(d){a||D||(t(2,k=void 0),t(3,L=!1),i=void 0,t(4,p=0),oe.set(!0),w=d.touches[0].clientX,y=d.touches[0].clientY)}function O(d){if(i||D)return;let b=d.touches[0].clientX-w,fe=d.touches[0].clientY-y;i===void 0&&(i=Math.abs(b)-Math.abs(fe)>=0),i&&oe.set(!1)}function Z(d){D||(i||o("stopSwipe",{stop:!0,toDefault:!0}),oe.set(!1),o("stopSwipe",{stop:!1}))}t0(()=>{document.addEventListener("touchstart",A),document.addEventListener("touchmove",O),document.addEventListener("touchend",Z)}),l0(()=>{document.removeEventListener("touchstart",A),document.removeEventListener("touchmove",O),document.removeEventListener("touchend",Z)});let z,D;function j(d,I){t(7,D={idx:d,stage:I==="owner"?"delete":"leave"}),o("stopSwipe",{stop:!0,toHiddenScroll:!0})}function B(){t(7,D=void 0),t(2,k=void 0),t(3,L=!1),o("stopSwipe",{stop:!1,toHiddenScroll:!1})}function T(){D&&(D.stage,c=c.filter(d=>d.idx!==D.idx),F(),B())}function G(d){He.call(this,l,d)}function J(d){He.call(this,l,d)}const q=()=>window.history.back();function U(d){C=d,t(1,C)}const R=()=>console.log("박스 만들러 가보세"),W=d=>j(d.idx,d.role),se=(d,I)=>N(I,d.idx),ie=d=>o0(`/boxes/${d.idx}/detail`);function Q(){z=this.clientHeight,t(6,z)}return[h,C,k,L,p,u,z,D,$,N,n,M,S,j,B,T,G,J,q,U,R,W,se,ie,Q]}class F0 extends Pe{constructor(e){super(),ze(this,e,A0,_0,Re,{},null,[-1,-1])}}export{F0 as component};
