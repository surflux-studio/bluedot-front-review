import{s as E,e as I,G as p,c as C,b as f,H as m,f as u,m as t,i as S,h as g,n as j}from"./scheduler.B4Oq0Y6j.js";import{S as A,i as R}from"./index.Dwy94kkp.js";/* empty css                                                  */import{A as _,d as k,e as T}from"./Header.FoXJ-u0t.js";function x(o){let r,a,n,e,i,d,s,c,w,v;return{c(){r=I("div"),a=p("svg"),n=p("defs"),e=p("clipPath"),i=p("circle"),s=p("image"),c=p("circle"),this.h()},l(l){r=C(l,"DIV",{class:!0,style:!0});var h=f(r);a=m(h,"svg",{viewBox:!0,preserveAspectRatio:!0});var b=f(a);n=m(b,"defs",{});var y=f(n);e=m(y,"clipPath",{id:!0});var P=f(e);i=m(P,"circle",{cx:!0,cy:!0,r:!0}),f(i).forEach(u),P.forEach(u),y.forEach(u),s=m(b,"image",{href:!0,width:!0,height:!0,preserveAspectRatio:!0,"clip-path":!0}),f(s).forEach(u),c=m(b,"circle",{cx:!0,cy:!0,r:!0,fill:!0,stroke:!0,"stroke-width":!0}),f(c).forEach(u),b.forEach(u),h.forEach(u),this.h()},h(){t(i,"cx","100"),t(i,"cy","100"),t(i,"r",d=100-o[3]/2),t(e,"id","circle-clip"),t(s,"href",o[1]),t(s,"width","100%"),t(s,"height","100%"),t(s,"preserveAspectRatio","xMidYMid slice"),t(s,"clip-path","url(#circle-clip)"),t(c,"cx","100"),t(c,"cy","100"),t(c,"r",w=100-o[3]/2),t(c,"fill","none"),t(c,"stroke",o[2]),t(c,"stroke-width",o[3]),t(a,"viewBox","0 0 200 200"),t(a,"preserveAspectRatio","xMinYMin slice"),t(r,"class","circle-container svelte-9vih5u"),t(r,"style",v=`width: ${o[0]}`)},m(l,h){S(l,r,h),g(r,a),g(a,n),g(n,e),g(e,i),g(a,s),g(a,c)},p(l,[h]){h&8&&d!==(d=100-l[3]/2)&&t(i,"r",d),h&2&&t(s,"href",l[1]),h&8&&w!==(w=100-l[3]/2)&&t(c,"r",w),h&4&&t(c,"stroke",l[2]),h&8&&t(c,"stroke-width",l[3]),h&1&&v!==(v=`width: ${l[0]}`)&&t(r,"style",v)},i:j,o:j,d(l){l&&u(r)}}}function B(o,r,a){let{width:n="200px"}=r,{src:e="graydot.png"}=r,{strokeColor:i="black"}=r,{strokeWidth:d="10"}=r;return o.$$set=s=>{"width"in s&&a(0,n=s.width),"src"in s&&a(1,e=s.src),"strokeColor"in s&&a(2,i=s.strokeColor),"strokeWidth"in s&&a(3,d=s.strokeWidth)},[n,e,i,d]}class z extends A{constructor(r){super(),R(this,r,B,x,E,{width:0,src:1,strokeColor:2,strokeWidth:3})}}async function F({targetTable:o="users",targetIdx:r,subjectTable:a="users",subjectIdx:n}){const e=new URL(`${_}/auth/followers`);e.searchParams.append("targetTable",o),e.searchParams.append("targetIdx",r.toString()),e.searchParams.append("subjectTable",a),e.searchParams.append("subjectIdx",n.toString());const i=await fetch(e.href,{method:"PUT",headers:{"Content-Type":"application/json",Authorization:`Bearer ${k()}`}});return i.ok||T.emit("pushSnackbar",{message:"팔로우에 실패했습니다."}),await i.json()}async function G({targetTable:o="users",targetIdx:r,subjectTable:a="users",subjectIdx:n}){const e=new URL(`${_}/auth/followers`);e.searchParams.append("targetTable",o),e.searchParams.append("targetIdx",String(r)),e.searchParams.append("subjectTable",a),e.searchParams.append("subjectIdx",String(n));const i=await fetch(e.href,{method:"DELETE",headers:{"Content-Type":"application/json",Authorization:`Bearer ${k()}`}});return i.ok||T.emit("pushSnackbar",{message:"언팔로우에 실패했습니다."}),await i.json()}async function D({targetTable:o="users",targetIdx:r,subjectTable:a="users",subjectIdx:n}){const e=new URL(`${_}/auth/followers`);return e.searchParams.append("targetTable",o),e.searchParams.append("targetIdx",String(r)),e.searchParams.append("subjectTable",a),e.searchParams.append("subjectIdx",String(n)),(await(await fetch(e.href,{method:"GET",headers:{"Content-Type":"application/json",Authorization:`Bearer ${k()}`}})).json()).data.length>0}export{z as C,F as f,D as i,G as u};