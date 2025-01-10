import{g as le}from"../chunks/entry.CCutn2Eo.js";import{g as Me,e as P,s as de,A as Pe}from"../chunks/sign.DjVjr-0H.js";import{s as Ie,e as h,c as C,b as $,f as g,q as d,i as G,n as Z,C as be,a as E,t as ze,g as k,E as F,d as Fe,r as Te,h as u,L as Ae,v as Q,D as _e,y as Ue,k as qe,R as De,V as ve}from"../chunks/scheduler.BfXeYOVV.js";import{S as He,i as Le,e as ye,c as se,b as ae,m as ie,t as X,a as K,d as ne}from"../chunks/index.d8i3XbWJ.js";import{H as Re}from"../chunks/Header.CpDfD0zZ.js";import{F as Ze}from"../chunks/Field.Cn4c8kZh.js";import{g as Ge,c as Je}from"../chunks/photo.BlKWY7DB.js";import{s as Oe}from"../chunks/s32cloudfront._Pg2N3rb.js";import{S as Xe}from"../chunks/Select.BDksyNHc.js";import{A as Ke}from"../chunks/ActionSheet.CCde-6iS.js";const Qe="data:image/svg+xml,%3csvg%20width='18'%20height='18'%20viewBox='0%200%2018%2018'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M7.5339%204.27187L6.1839%205.62187H3.6V13.7219H14.4V5.62187H11.8161L10.4661%204.27187H7.5339ZM6.975%202.92188H11.025L12.375%204.27187H15.075C15.254%204.27187%2015.4257%204.34299%2015.5523%204.46958C15.6789%204.59616%2015.75%204.76785%2015.75%204.94687V14.3969C15.75%2014.5759%2015.6789%2014.7476%2015.5523%2014.8742C15.4257%2015.0008%2015.254%2015.0719%2015.075%2015.0719H2.925C2.74598%2015.0719%202.57429%2015.0008%202.4477%2014.8742C2.32112%2014.7476%202.25%2014.5759%202.25%2014.3969V4.94687C2.25%204.76785%202.32112%204.59616%202.4477%204.46958C2.57429%204.34299%202.74598%204.27187%202.925%204.27187H5.625L6.975%202.92188ZM9%2013.0469C8.01538%2013.0469%207.07109%2012.6557%206.37487%2011.9595C5.67864%2011.2633%205.2875%2010.319%205.2875%209.33437C5.2875%208.34976%205.67864%207.40547%206.37487%206.70924C7.07109%206.01301%208.01538%205.62187%209%205.62187C9.98462%205.62187%2010.9289%206.01301%2011.6251%206.70924C12.3214%207.40547%2012.7125%208.34976%2012.7125%209.33437C12.7125%2010.319%2012.3214%2011.2633%2011.6251%2011.9595C10.9289%2012.6557%209.98462%2013.0469%209%2013.0469ZM9%2011.6969C9.62657%2011.6969%2010.2275%2011.448%2010.6705%2011.0049C11.1136%2010.5619%2011.3625%209.96095%2011.3625%209.33437C11.3625%208.7078%2011.1136%208.10689%2010.6705%207.66384C10.2275%207.22078%209.62657%206.97187%209%206.97187C8.37343%206.97187%207.77251%207.22078%207.32946%207.66384C6.88641%208.10689%206.6375%208.7078%206.6375%209.33437C6.6375%209.96095%206.88641%2010.5619%207.32946%2011.0049C7.77251%2011.448%208.37343%2011.6969%209%2011.6969Z'%20fill='%234B5362'/%3e%3c/svg%3e",We=async({params:a,parent:e})=>{var y;const t=a.idx,s=`/boxes/${t}/detail`,n=t==="-1",m=Me();if(m===null&&!n)return le(s,{replaceState:!0});if(n)return{box:{idx:"-1",name:"",description:"",image:null,role:null},jwt:m,paramIdx:t};const p=await e();if(p.error)return P.emit("pushSnackbar",{message:"접근할 수 없습니다."}),le(s,{replaceState:!0});const b=(y=p.data)==null?void 0:y.box;return(b==null?void 0:b.role)!=="owner"?(P.emit("pushSnackbar",{message:"접근할 수 없습니다."}),le(s,{replaceState:!0})):{box:b,jwt:m,paramIdx:t}},gt=Object.freeze(Object.defineProperty({__proto__:null,load:We},Symbol.toStringTag,{value:"Module"}));function Ye(a){let e;return{c(){e=h("div"),this.h()},l(t){e=C(t,"DIV",{class:!0}),$(e).forEach(g),this.h()},h(){d(e,"class","h-[1px] bg-gray-100")},m(t,s){G(t,e,s)},p:Z,i:Z,o:Z,d(t){t&&g(e)}}}class et extends He{constructor(e){super(),Le(this,e,null,Ye,Ie,{})}}function tt(a){let e,t="설정";return{c(){e=h("div"),e.textContent=t,this.h()},l(s){e=C(s,"DIV",{class:!0,"data-svelte-h":!0}),F(e)!=="svelte-1lcayg1"&&(e.textContent=t),this.h()},h(){d(e,"class","typo-h3 text-gray-900")},m(s,n){G(s,e,n)},p:Z,d(s){s&&g(e)}}}function Se(a){let e,t;return{c(){e=h("img"),this.h()},l(s){e=C(s,"IMG",{class:!0,src:!0,alt:!0}),this.h()},h(){d(e,"class","w-full h-full object-cover"),De(e.src,t=Oe(a[1].image))||d(e,"src",t),d(e,"alt","box_image")},m(s,n){G(s,e,n)},p(s,n){n&2&&!De(e.src,t=Oe(s[1].image))&&d(e,"src",t)},d(s){s&&g(e)}}}function st(a){let e,t='박스 이름 <span class="text-red-500">*</span>';return{c(){e=h("p"),e.innerHTML=t,this.h()},l(s){e=C(s,"P",{class:!0,"data-svelte-h":!0}),F(e)!=="svelte-mxo9hb"&&(e.innerHTML=t),this.h()},h(){d(e,"class","pb-1 typo-sub-h3 text-gray-500")},m(s,n){G(s,e,n)},p:Z,d(s){s&&g(e)}}}function at(a){let e,t,s,n,m="박스 삭제",p,b,y;return t=new et({}),{c(){e=h("section"),se(t.$$.fragment),s=E(),n=h("button"),n.textContent=m,this.h()},l(o){e=C(o,"SECTION",{class:!0});var r=$(e);ae(t.$$.fragment,r),s=k(r),n=C(r,"BUTTON",{class:!0,"data-svelte-h":!0}),F(n)!=="svelte-1u6m5al"&&(n.textContent=m),r.forEach(g),this.h()},h(){d(n,"class","py-3 typo-body3 text-red-500"),d(e,"class","w-full mb-28")},m(o,r){G(o,e,r),ie(t,e,null),u(e,s),u(e,n),p=!0,b||(y=Q(n,"click",a[14]),b=!0)},p:Z,i(o){p||(X(t.$$.fragment,o),p=!0)},o(o){K(t.$$.fragment,o),p=!1},d(o){o&&g(e),ne(t),b=!1,y()}}}function it(a){let e,t,s="박스를 정말 삭제할까요?",n,m,p="확인",b,y;return{c(){e=h("div"),t=h("p"),t.textContent=s,n=E(),m=h("button"),m.textContent=p,this.h()},l(o){e=C(o,"DIV",{class:!0});var r=$(e);t=C(r,"P",{class:!0,"data-svelte-h":!0}),F(t)!=="svelte-gw0nb6"&&(t.textContent=s),n=k(r),m=C(r,"BUTTON",{class:!0,"data-svelte-h":!0}),F(m)!=="svelte-1geai0a"&&(m.textContent=p),r.forEach(g),this.h()},h(){d(t,"class","pb-1 typo-body1 text-gray-300"),d(m,"class","w-full h-14 bg-primary-500 rounded-md text-white disabled:opacity-50"),d(e,"class","px-4")},m(o,r){G(o,e,r),u(e,t),u(e,n),u(e,m),b||(y=Q(m,"click",a[9]),b=!0)},p:Z,d(o){o&&g(e),b=!1,y()}}}function nt(a){let e,t,s,n,m,p,b=`<div class="flex flex-row gap-1 items-center"><img src="${Qe}" alt="camera icon"/> <p class="typo-body3 text-gray-700">사진 변경</p></div>`,y,o,r,i,U,H,T,x,L,oe="박스 설명",W,D,Y,V,j,re='<p class="pb-1 typo-sub-h3 text-gray-500">박스 공개 설정</p>',ee,O,te,f,B,z,v,_,A,me,ue,ce,he,N,Ce,J,ge,we;t=new Re({props:{position:"static",leftBack:"black",$$slots:{default:[tt]},$$scope:{ctx:a}}});let w=a[1].image&&Se(a);function Ve(l){a[11](l)}let xe={clear:!0,padding:"",border:"border-b-[1.5px] border-b-gray-900 pb-2.5",fontSize:"text-lg",limit:20,onInput:a[7],$$slots:{default:[st]},$$scope:{ctx:a}};a[1].name!==void 0&&(xe.value=a[1].name),i=new Ze({props:xe}),be.push(()=>ye(i,"value",Ve));function je(l){a[13](l)}let $e={width:"w-full",options:Object.keys(a[4])};a[0]!==void 0&&($e.selected=a[0]),O=new Xe({props:$e}),be.push(()=>ye(O,"selected",je));let S=!a[5]&&at(a);function Ne(l){a[16](l)}let Be={onClose:a[15],maxHeight:150,defaultHeight:150,$$slots:{default:[it]},$$scope:{ctx:a}};return a[3]!==void 0&&(Be.isOpen=a[3]),N=new Ke({props:Be}),be.push(()=>ye(N,"isOpen",Ne)),{c(){e=h("div"),se(t.$$.fragment),s=E(),n=h("section"),w&&w.c(),m=E(),p=h("button"),p.innerHTML=b,y=E(),o=h("section"),r=h("section"),se(i.$$.fragment),H=E(),T=h("div"),x=h("label"),L=h("p"),L.textContent=oe,W=E(),D=h("textarea"),Y=E(),V=h("div"),j=h("lable"),j.innerHTML=re,ee=E(),se(O.$$.fragment),f=E(),B=h("section"),z=E(),S&&S.c(),v=E(),_=h("div"),A=h("button"),me=ze("저장"),he=E(),se(N.$$.fragment),this.h()},l(l){e=C(l,"DIV",{class:!0});var c=$(e);ae(t.$$.fragment,c),s=k(c),n=C(c,"SECTION",{class:!0});var q=$(n);w&&w.l(q),m=k(q),p=C(q,"BUTTON",{class:!0,"data-svelte-h":!0}),F(p)!=="svelte-o1fuye"&&(p.innerHTML=b),q.forEach(g),y=k(c),o=C(c,"SECTION",{class:!0});var I=$(o);r=C(I,"SECTION",{class:!0});var M=$(r);ae(i.$$.fragment,M),H=k(M),T=C(M,"DIV",{});var R=$(T);x=C(R,"LABEL",{class:!0});var fe=$(x);L=C(fe,"P",{class:!0,"data-svelte-h":!0}),F(L)!=="svelte-1uk7vkf"&&(L.textContent=oe),W=k(fe),D=C(fe,"TEXTAREA",{class:!0}),$(D).forEach(g),fe.forEach(g),R.forEach(g),Y=k(M),V=C(M,"DIV",{});var pe=$(V);j=C(pe,"LABLE",{class:!0,"data-svelte-h":!0}),F(j)!=="svelte-1cgggel"&&(j.innerHTML=re),ee=k(pe),ae(O.$$.fragment,pe),pe.forEach(g),M.forEach(g),f=k(I),B=C(I,"SECTION",{class:!0}),$(B).forEach(g),z=k(I),S&&S.l(I),I.forEach(g),v=k(c),_=C(c,"DIV",{class:!0});var Ee=$(_);A=C(Ee,"BUTTON",{class:!0});var ke=$(A);me=Fe(ke,"저장"),ke.forEach(g),Ee.forEach(g),he=k(c),ae(N.$$.fragment,c),c.forEach(g),this.h()},h(){d(p,"class","absolute bottom-4 right-4 bg-white rounded-3xl px-3.5 py-1.5"),d(n,"class","box-image relative w-full h-52 bg-gray-100"),d(L,"class","pb-1 typo-sub-h3 text-gray-500"),d(D,"class","auto-height w-full py-1 focus:ring-0bg-white text-sm svelte-10zrx5e"),d(x,"class","w-full"),d(j,"class","w-full"),d(r,"class","box-name flex flex-col gap-6 py-6"),d(B,"class","w-full min-h-20"),d(o,"class","box-setting px-4"),d(A,"class",ue=Te(`w-full ${a[2]?"bg-primary-500":"bg-gray-300"} rounded-lg p-[15px] text-white typo-button3`)+" svelte-10zrx5e"),A.disabled=ce=!a[2],d(_,"class","fixed w-full bottom-0 left-0 px-4 pt-3 pb-10 z-10 bg-white upper-box-shadow svelte-10zrx5e"),d(e,"class","min-h-dvh")},m(l,c){G(l,e,c),ie(t,e,null),u(e,s),u(e,n),w&&w.m(n,null),u(n,m),u(n,p),u(e,y),u(e,o),u(o,r),ie(i,r,null),u(r,H),u(r,T),u(T,x),u(x,L),u(x,W),u(x,D),Ae(D,a[1].description),u(r,Y),u(r,V),u(V,j),u(V,ee),ie(O,V,null),u(o,f),u(o,B),u(o,z),S&&S.m(o,null),u(e,v),u(e,_),u(_,A),u(A,me),u(e,he),ie(N,e,null),J=!0,ge||(we=[Q(p,"click",a[6]),Q(D,"input",a[12]),Q(D,"input",a[7]),Q(A,"click",a[8])],ge=!0)},p(l,[c]){const q={};c&16777216&&(q.$$scope={dirty:c,ctx:l}),t.$set(q),l[1].image?w?w.p(l,c):(w=Se(l),w.c(),w.m(n,m)):w&&(w.d(1),w=null);const I={};c&16777216&&(I.$$scope={dirty:c,ctx:l}),!U&&c&2&&(U=!0,I.value=l[1].name,_e(()=>U=!1)),i.$set(I),c&2&&Ae(D,l[1].description);const M={};!te&&c&1&&(te=!0,M.selected=l[0],_e(()=>te=!1)),O.$set(M),l[5]||S.p(l,c),(!J||c&4&&ue!==(ue=Te(`w-full ${l[2]?"bg-primary-500":"bg-gray-300"} rounded-lg p-[15px] text-white typo-button3`)+" svelte-10zrx5e"))&&d(A,"class",ue),(!J||c&4&&ce!==(ce=!l[2]))&&(A.disabled=ce);const R={};c&8&&(R.onClose=l[15]),c&16777216&&(R.$$scope={dirty:c,ctx:l}),!Ce&&c&8&&(Ce=!0,R.isOpen=l[3],_e(()=>Ce=!1)),N.$set(R)},i(l){J||(X(t.$$.fragment,l),X(i.$$.fragment,l),X(O.$$.fragment,l),X(S),X(N.$$.fragment,l),J=!0)},o(l){K(t.$$.fragment,l),K(i.$$.fragment,l),K(O.$$.fragment,l),K(S),K(N.$$.fragment,l),J=!1},d(l){l&&g(e),ne(t),w&&w.d(),ne(i),ne(O),S&&S.d(),ne(N),ge=!1,Ue(we)}}}function lt(a,e,t){let s;qe(a,de,f=>t(19,s=f));const n=`${Pe}/boxes`,m={"전체 공개":"public","팔로워 공개":"follower",비공개:"private"};let{data:p}=e;const b=p.paramIdx,y=b==="-1";let o=p.jwt,r=p.box,i={...r},U="팔로워 공개";if(i.visibility){for(const[f,B]of Object.entries(m))if(i.visibility===B){U=f;break}}let H=U,T=!1,x=!1;function L(f){t(2,T=f!==U)}async function oe(){var f;try{P.emit("loading",!0);const B=await Ge();if(!B.blob)return;const z=await Je(B.blob),v=new FormData;v.append("image",z);const _=await fetch(`${n}/image`,{method:"POST",body:v,headers:{Authorization:`Bearer ${o}`}});if(!_.ok)return P.emit("pushSnackbar",{message:"일시적으로 장애가 발생했습니다."});const A=await _.json();t(1,i.image=((f=A.data)==null?void 0:f.image)??null,i),t(2,T=!0)}catch{}P.emit("loading",!1)}function W(){t(2,T=!0)}async function D(){if(!T||(t(1,i.name=i.name.trim(),i),!i.name))return;for(const[v,_]of Object.entries(m))if(H===v){t(1,i.visibility=_,i);break}const{url:f,method:B}=y?{url:n,method:"POST"}:{url:`${n}/${b}`,method:"PATCH"},z=await fetch(f,{method:B,headers:{"Content-Type":"application/json",Authorization:`Bearer ${o}`},body:JSON.stringify({name:i.name,description:i.description,image:i.image,visibility:i.visibility})});if(!z.ok)return P.emit("pushSnackbar",{message:"일시적으로 장애가 발생했습니다."});y?(z.json().then(v=>{const _=v.data;_.role="owner",_.visibility=i.visibility,_.is_subcribed=!1,_.place_count="0",_.member_count="1",ve(de,s=[_,...s],s)}),P.emit("pushSnackbar",{message:"새 박스를 만들었습니다"}),le("/boxes")):(r.name=i.name,r.description=i.description,r.image=i.image,r.visibility=i.visibility,ve(de,s=s.map(v=>(v.idx===i.idx&&(v.name=i.name,v.description=i.description,v.image=i.image,v.visibility=i.visibility),v)),s),P.emit("pushSnackbar",{message:"박스를 수정했습니다."})),t(2,T=!1)}async function Y(){await fetch(`${n}/${b}`,{method:"DELETE",headers:{"Content-Type":"application/json",Authorization:`Bearer ${o}`}}),ve(de,s=s.filter(f=>f.idx!==i.idx),s),P.emit("pushSnackbar",{message:`${i.name} 박스를 삭제했습니다.`}),le("/boxes")}function V(f){a.$$.not_equal(i.name,f)&&(i.name=f,t(1,i))}function j(){i.description=this.value,t(1,i)}function re(f){H=f,t(0,H)}const ee=()=>t(3,x=!0),O=()=>t(3,x=!1);function te(f){x=f,t(3,x)}return a.$$set=f=>{"data"in f&&t(10,p=f.data)},a.$$.update=()=>{a.$$.dirty&1&&L(H)},[H,i,T,x,m,y,oe,W,D,Y,p,V,j,re,ee,O,te]}class bt extends He{constructor(e){super(),Le(this,e,lt,nt,Ie,{data:10})}}export{bt as component,gt as universal};