import{A as p}from"./Header.RnHYDWDk.js";async function d(c,r={},n,s){const a=n||new AbortController;let o;try{return await fetch(c,{...r,signal:a.signal})}catch(e){throw e.name==="AbortError"&&console.error("Request timed out"),e}}async function m({value:c,type:r,typesOr:n,limit:s=10,abortController:a}){const o=p,e=new URL(`${o}/embeddings/search`);e.searchParams.append("value",c),r&&e.searchParams.append("type",r),n&&e.searchParams.append("typesOr",n),s&&e.searchParams.append("limit",String(s));try{const t=await d(e,{credentials:"include",headers:{Accept:"application/json","Content-Type":"application/json"}},a);console.log(t);const i=await t.json();return console.log(i),i.data}catch(t){return console.error(t),[]}}async function h({query:c,location:r,abortController:n}){const s=p,a=new URL(`${s}/places`);a.searchParams.append("query",c),a.searchParams.append("location",r),a.searchParams.append("offset","0"),a.searchParams.append("limit","24");try{return(await(await d(a,{},n)).json()).data}catch(o){return console.error(o),[]}}async function u({tags:c,bbox:r,abortController:n,offset:s=0,limit:a=100}){const o=p,e=new URL(`${o}/embeddings/explore`);e.searchParams.append("tags",c),e.searchParams.append("bbox",r),s&&e.searchParams.append("offset",String(s)),a&&e.searchParams.append("limit",String(a));try{return(await(await d(e,{},n||void 0)).json()).data}catch(t){return t!=="new request"&&console.error(t),[]}}export{m as a,h as b,d as f,u as g};
