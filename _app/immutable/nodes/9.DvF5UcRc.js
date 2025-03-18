import{g as le}from"../chunks/entry.CqJ0okqJ.js";import{g as Ve,e as U,k as Be,C as Pe,s as Ce,A as je}from"../chunks/sign.DV4XVC12.js";import{s as Le,z as he,e as v,a as I,t as Se,c as $,b as B,g as O,f as h,x as ge,d as Ae,v as _,i as K,h as d,R as Fe,y as ue,A as be,j as ze,F as He,k as Me,n as ce,U as ye}from"../chunks/scheduler.DH3jNSXp.js";import{S as Re,i as Ue,f as _e,c as q,b as J,m as G,a as P,d as qe,t as j,e as W,g as Je}from"../chunks/index.DhGy8j-A.js";import{H as Ge}from"../chunks/Header.DOQVf6zV.js";import{F as We}from"../chunks/Field.BZMlBY_y.js";import{g as Xe,t as Ke}from"../chunks/photo.VEL2KpLQ.js";import{s as De}from"../chunks/s32cloudfront.BQHVfuPT.js";import{C as Qe}from"../chunks/CircleImage.Cv_5FGVd.js";import{V as Ye}from"../chunks/VisibilitySheet.B7MXw2sG.js";import{C as Ze,I as Ee,a as Ie}from"../chunks/IconCamera.D8KiIrkk.js";import{N as et}from"../chunks/NavigationBar.sBDeosij.js";const tt=async({params:n,parent:t})=>{var g;const e=n.idx,i=`/boxes/${e}`,a=e==="-1",u=Ve();if(u===null&&!a)return le(i,{replaceState:!0});if(a)return{box:{idx:"-1",name:"",description:"",image:null,role:null},jwt:u,paramIdx:e};const f=await t();if(f.error||!f.data)return U.emit("pushSnackbar",{message:"접근할 수 없습니다."}),le("/boxes",{replaceState:!0});const l=(g=f.data)==null?void 0:g.box;return(l==null?void 0:l.role)!=="owner"?(U.emit("pushSnackbar",{message:"접근할 수 없습니다."}),le(i,{replaceState:!0})):{box:l,jwt:u,paramIdx:e}},vt=Object.freeze(Object.defineProperty({__proto__:null,load:tt},Symbol.toStringTag,{value:"Module"}));function st(n){let t,e,i,a,u,f;return{c(){t=v("div"),e=v("button"),i=Se("완료"),this.h()},l(l){t=$(l,"DIV",{slot:!0});var g=B(t);e=$(g,"BUTTON",{class:!0});var o=B(e);i=Ae(o,"완료"),o.forEach(h),g.forEach(h),this.h()},h(){_(e,"class","font-medium text-sm leading-[17px] text-white disabled:text-[#3F3F3F] align-text-top"),e.disabled=a=n[0].name.trim()==="",_(t,"slot","right")},m(l,g){K(l,t,g),d(t,e),d(e,i),u||(f=ue(e,"click",n[6]),u=!0)},p(l,g){g&1&&a!==(a=l[0].name.trim()==="")&&(e.disabled=a)},d(l){l&&h(t),u=!1,f()}}}function it(n){let t;return{c(){t=v("div"),this.h()},l(e){t=$(e,"DIV",{class:!0}),B(t).forEach(h),this.h()},h(){_(t,"class","w-full h-full bg-[#D9D9D9] rounded-full")},m(e,i){K(e,t,i)},p:ce,i:ce,o:ce,d(e){e&&h(t)}}}function nt(n){let t,e;return t=new Qe({props:{src:De(n[0].image??"",500),width:"78px",strokeWidth:"0"}}),{c(){q(t.$$.fragment)},l(i){J(t.$$.fragment,i)},m(i,a){G(t,i,a),e=!0},p(i,a){const u={};a&1&&(u.src=De(i[0].image??"",500)),t.$set(u)},i(i){e||(j(t.$$.fragment,i),e=!0)},o(i){P(t.$$.fragment,i),e=!1},d(i){W(t,i)}}}function at(n){let t,e,i;return e=new Ie({props:{fill:"white",length:"1"}}),{c(){t=v("button"),q(e.$$.fragment),this.h()},l(a){t=$(a,"BUTTON",{class:!0});var u=B(t);J(e.$$.fragment,u),u.forEach(h),this.h()},h(){_(t,"class","absolute bottom-0 right-0 bg-[#3F3F3F] w-6 h-6 rounded-[40px] shadow-[1px_1px_6px_rgba(0,0,0,0.1)] flex justify-center items-center")},m(a,u){K(a,t,u),G(e,t,null),i=!0},p:ce,i(a){i||(j(e.$$.fragment,a),i=!0)},o(a){P(e.$$.fragment,a),i=!1},d(a){a&&h(t),W(e)}}}function ot(n){let t,e,i,a,u,f,l,g,o,D,x,k,E,ne="박스 이름",Q,F,Y,X,S,T,ae='<p class="text-[#F1F1F1] text-sm font-semibold leading-[22px] tracking-[-0.6px]">박스 설명</p>',Z,y,ee,r,m,w="공개 여부",b,C,p=Be[n[1]]+"",te,H,M,oe,A,fe,me,se,de,xe;e=new Ge({props:{position:"static",leftBack:!0,centerTitle:n[3]?"박스 추가":"박스 편집",$$slots:{right:[st]},$$scope:{ctx:n}}});const ve=[nt,it],L=[];function $e(s,c){return s[0].image?0:1}f=$e(n),l=L[f]=ve[f](n),o=new Ze({props:{shrink:!1,className:"absolute",ydistance:14,items:n[4],$$slots:{default:[at]},$$scope:{ctx:n}}});function Oe(s){n[8](s)}let ke={padding:"",border:"border-b-[0.5px] border-[#3F3F3F] py-2.5",backgroundColor:"bg-transparent",fontSize:"text-sm font-normal leading-5",fontColor:"text-[#F1F1F1]",limit:20,useCounter:!1};n[0].name!==void 0&&(ke.value=n[0].name),F=new We({props:ke}),he.push(()=>_e(F,"value",Oe)),M=new et({});function Te(s){n[12](s)}function Ne(s){n[13](s)}let pe={onChange:n[11]};return n[2]!==void 0&&(pe.isOpen=n[2]),n[1]!==void 0&&(pe.selectedVisibility=n[1]),A=new Ye({props:pe}),he.push(()=>_e(A,"isOpen",Te)),he.push(()=>_e(A,"selectedVisibility",Ne)),{c(){t=v("div"),q(e.$$.fragment),i=I(),a=v("section"),u=v("div"),l.c(),g=I(),q(o.$$.fragment),D=I(),x=v("section"),k=v("section"),E=v("p"),E.textContent=ne,Q=I(),q(F.$$.fragment),X=I(),S=v("section"),T=v("div"),T.innerHTML=ae,Z=I(),y=v("textarea"),ee=I(),r=v("section"),m=v("p"),m.textContent=w,b=I(),C=v("div"),te=Se(p),H=I(),q(M.$$.fragment),oe=I(),q(A.$$.fragment),this.h()},l(s){t=$(s,"DIV",{class:!0});var c=B(t);J(e.$$.fragment,c),i=O(c),a=$(c,"SECTION",{class:!0});var ie=B(a);u=$(ie,"DIV",{class:!0});var z=B(u);l.l(z),g=O(z),J(o.$$.fragment,z),z.forEach(h),ie.forEach(h),D=O(c),x=$(c,"SECTION",{class:!0});var N=B(x);k=$(N,"SECTION",{class:!0});var R=B(k);E=$(R,"P",{class:!0,"data-svelte-h":!0}),ge(E)!=="svelte-1kbmcgb"&&(E.textContent=ne),Q=O(R),J(F.$$.fragment,R),R.forEach(h),X=O(N),S=$(N,"SECTION",{class:!0});var V=B(S);T=$(V,"DIV",{class:!0,"data-svelte-h":!0}),ge(T)!=="svelte-sqw6c9"&&(T.innerHTML=ae),Z=O(V),y=$(V,"TEXTAREA",{class:!0}),B(y).forEach(h),V.forEach(h),ee=O(N),r=$(N,"SECTION",{class:!0});var re=B(r);m=$(re,"P",{class:!0,"data-svelte-h":!0}),ge(m)!=="svelte-18l855b"&&(m.textContent=w),b=O(re),C=$(re,"DIV",{class:!0,"aria-hidden":!0});var we=B(C);te=Ae(we,p),we.forEach(h),re.forEach(h),N.forEach(h),c.forEach(h),H=O(s),J(M.$$.fragment,s),oe=O(s),J(A.$$.fragment,s),this.h()},h(){_(u,"class","w-[78px] h-[78px] relative"),_(a,"class","box-image relative w-full flex justify-center"),_(E,"class","flex-none text-[#F1F1F1] text-sm font-semibold leading-[22px] tracking-[-0.6px]"),_(k,"class","box-name flex gap-[15px] h-10 items-center"),_(T,"class","flex-none h-10 flex items-center"),_(y,"class","auto-height w-full bg-transparent border-x-0 border-t-0 focus:ring-0 focus:border-[#3F3F3F] border-b-[0.5px] border-[#3F3F3F] py-2.5 px-0 text-sm font-normal leading-5 text-[#F1F1F1] resize-none svelte-oekuck"),_(S,"class","box-description flex gap-[15px] min-h-10 items-start"),_(m,"class","flex-none text-[#F1F1F1] text-sm font-semibold leading-[22px] tracking-[-0.6px]"),_(C,"class","w-full border-b-[0.5px] border-[#3F3F3F] py-2.5 text-xs font-normal leading-4 text-gray-03 svelte-oekuck"),_(C,"aria-hidden",""),_(r,"class","box-name flex gap-[15px] h-10 items-center"),_(x,"class","box-setting p-5 text-white"),_(t,"class","min-h-dvh bg-black")},m(s,c){K(s,t,c),G(e,t,null),d(t,i),d(t,a),d(a,u),L[f].m(u,null),d(u,g),G(o,u,null),d(t,D),d(t,x),d(x,k),d(k,E),d(k,Q),G(F,k,null),d(x,X),d(x,S),d(S,T),d(S,Z),d(S,y),Fe(y,n[0].description),d(x,ee),d(x,r),d(r,m),d(r,b),d(r,C),d(C,te),K(s,H,c),G(M,s,c),K(s,oe,c),G(A,s,c),se=!0,de||(xe=[ue(y,"input",n[9]),ue(y,"input",n[5]),ue(C,"click",n[10])],de=!0)},p(s,[c]){const ie={};c&4194305&&(ie.$$scope={dirty:c,ctx:s}),e.$set(ie);let z=f;f=$e(s),f===z?L[f].p(s,c):(Je(),P(L[z],1,1,()=>{L[z]=null}),qe(),l=L[f],l?l.p(s,c):(l=L[f]=ve[f](s),l.c()),j(l,1),l.m(u,g));const N={};c&4194304&&(N.$$scope={dirty:c,ctx:s}),o.$set(N);const R={};!Y&&c&1&&(Y=!0,R.value=s[0].name,be(()=>Y=!1)),F.$set(R),c&1&&Fe(y,s[0].description),(!se||c&2)&&p!==(p=Be[s[1]]+"")&&ze(te,p);const V={};c&4&&(V.onChange=s[11]),!fe&&c&4&&(fe=!0,V.isOpen=s[2],be(()=>fe=!1)),!me&&c&2&&(me=!0,V.selectedVisibility=s[1],be(()=>me=!1)),A.$set(V)},i(s){se||(j(e.$$.fragment,s),j(l),j(o.$$.fragment,s),j(F.$$.fragment,s),j(M.$$.fragment,s),j(A.$$.fragment,s),se=!0)},o(s){P(e.$$.fragment,s),P(l),P(o.$$.fragment,s),P(F.$$.fragment,s),P(M.$$.fragment,s),P(A.$$.fragment,s),se=!1},d(s){s&&(h(t),h(H),h(oe)),W(e),L[f].d(),W(o),W(F),W(M,s),W(A,s),de=!1,He(xe)}}}const rt=120;function lt(n,t,e){let i;Me(n,Ce,r=>e(15,i=r));let{data:a}=t;const u=`${je}/boxes`,f=a.paramIdx,l=f==="-1";let g=a.jwt,o={...a.box,description:a.box.description??""},D=o.visibility??"follower",x=!1,k=!1;async function E(){var m;const r=await Xe({limit:1});(m=r[0])!=null&&m.file&&F(r[0].file)}async function ne(){var m;const r=await Ke();(m=r[0])!=null&&m.file&&F(r[0].file)}const Q=Pe.isNativePlatform()?[{name:"사진 선택",icon:Ee,onClick:E},{name:"사진 촬영",icon:Ie,onClick:ne}]:[{name:"사진 선택",icon:Ee,onClick:E}];async function F(r){var m;try{const w=new FormData;w.append("image",r);const b=await fetch(`${u}/image`,{method:"POST",body:w,headers:{Authorization:`Bearer ${g}`}});if(!b.ok)return U.emit("pushSnackbar",{message:"일시적인 장애로 사진이 변경되지 않았습니다."});const p=(m=(await b.json()).data)==null?void 0:m.image;if(!p)return U.emit("pushSnackbar",{message:"일시적인 장애로 사진이 변경되지 않았습니다."});if(e(0,o.image=p,o),l)return;X()}catch{}}function Y(){let r=o.description??"",m=0,w=0,b="";for(let C of r){let p=C.charCodeAt(0);if(p===10&&(m++,w=0),m===3)break;let H=p>=4352&&p<=4607||p>=12592&&p<=12687||p>=43360&&p<=43391||p>=44032&&p<=55215||p>=55216&&p<=55295?2:1;if(w+H>rt/3*(3-m))break;w+=H,b+=C}e(0,o.description=b,o)}async function X(){if(e(0,o.name=o.name.trim(),o),!o.name||k)return;k=!0;const{url:r,method:m}=l?{url:u,method:"POST"}:{url:`${u}/${f}`,method:"PATCH"},w=await fetch(r,{method:m,headers:{"Content-Type":"application/json",Authorization:`Bearer ${g}`},body:JSON.stringify({name:o.name,description:o.description,image:o.image,visibility:D})});if(!w.ok)return k=!1,U.emit("pushSnackbar",{message:"일시적으로 장애가 발생했습니다."});if(l){const C=(await w.json()).data;C.role="owner",C.visibility=D,C.is_subcribed=!1,C.place_count="0",C.follower_count="0",ye(Ce,i=[C,...i],i),U.emit("pushSnackbar",{message:"새 박스를 만들었습니다"}),le("/boxes")}else ye(Ce,i=i.map(b=>(b.idx===o.idx&&(b.name=o.name,b.description=o.description,b.image=o.image,b.visibility=D),b)),i),U.emit("pushSnackbar",{message:"박스를 수정했습니다."});k=!1}function S(r){n.$$.not_equal(o.name,r)&&(o.name=r,e(0,o))}function T(){o.description=this.value,e(0,o)}const ae=()=>e(2,x=!0),Z=()=>e(2,x=!1);function y(r){x=r,e(2,x)}function ee(r){D=r,e(1,D)}return n.$$set=r=>{"data"in r&&e(7,a=r.data)},[o,D,x,l,Q,Y,X,a,S,T,ae,Z,y,ee]}class $t extends Re{constructor(t){super(),Ue(this,t,lt,ot,Le,{data:7})}}export{$t as component,vt as universal};
