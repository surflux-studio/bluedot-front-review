import{A as i}from"./units.BmAtfPLl.js";async function d(t,o={},s,a=8e3){const n=s||new AbortController,r=setTimeout(()=>n.abort(),a);try{const e=await fetch(t,{...o,signal:n.signal});return clearTimeout(r),e}catch(e){throw clearTimeout(r),e.name==="AbortError"&&console.error("Request timed out"),e}}async function m({value:t,type:o,typesOr:s,limit:a=10}){const n=i,r=new URL(`${n}/embeddings/search`);r.searchParams.append("value",t),o&&r.searchParams.append("type",o),s&&r.searchParams.append("typesOr",s),a&&r.searchParams.append("limit",String(a));try{const e=await d(r,{credentials:"include",headers:{Accept:"application/json","Content-Type":"application/json"}});console.log(e);const c=await e.json();return console.log(c),c.data}catch(e){return console.error(e),[]}}async function u({query:t,location:o}){const s=i,a=new URL(`${s}/places`);a.searchParams.append("query",t),a.searchParams.append("location",o);try{return(await(await d(a)).json()).data}catch(n){return console.error(n),[]}}async function h({tags:t,bbox:o,abortController:s,offset:a=0,limit:n=20}){const r=i,e=new URL(`${r}/embeddings/explore`);e.searchParams.append("tags",t),e.searchParams.append("bbox",o),a&&e.searchParams.append("offset",String(a)),n&&e.searchParams.append("limit",String(n));try{return(await(await d(e,{},s||void 0)).json()).data}catch(c){return console.error(c),[]}}export{m as a,u as b,h as g};
