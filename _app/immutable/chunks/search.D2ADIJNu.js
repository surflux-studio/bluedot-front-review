import{A as i}from"./units.D6cS1jHK.js";async function d(t,s={},o,a){const r=o||new AbortController;let n;try{return await fetch(t,{...s,signal:r.signal})}catch(e){throw e.name==="AbortError"&&console.error("Request timed out"),e}}async function m({value:t,type:s,typesOr:o,limit:a=10}){const r=i,n=new URL(`${r}/embeddings/search`);n.searchParams.append("value",t),s&&n.searchParams.append("type",s),o&&n.searchParams.append("typesOr",o),a&&n.searchParams.append("limit",String(a));try{const e=await d(n,{credentials:"include",headers:{Accept:"application/json","Content-Type":"application/json"}});console.log(e);const c=await e.json();return console.log(c),c.data}catch(e){return console.error(e),[]}}async function h({query:t,location:s}){const o=i,a=new URL(`${o}/places`);a.searchParams.append("query",t),a.searchParams.append("location",s);try{return(await(await d(a)).json()).data}catch(r){return console.error(r),[]}}async function u({tags:t,bbox:s,abortController:o,offset:a=0,limit:r=100}){const n=i,e=new URL(`${n}/embeddings/explore`);e.searchParams.append("tags",t),e.searchParams.append("bbox",s),a&&e.searchParams.append("offset",String(a)),r&&e.searchParams.append("limit",String(r));try{return(await(await d(e,{},o||void 0)).json()).data}catch(c){return c!=="new request"&&console.error(c),[]}}export{m as a,h as b,d as f,u as g};
