import{A as c,b as i}from"./store.CGvrHMmq.js";import{f as d}from"./fetchWithTimeout.Dfpvm03F.js";async function g({value:t,type:o,typesOr:s,offset:r=0,limit:e=10,abortController:a}){const n=new URL(`${c}/embeddings/search`);n.searchParams.append("value",t),o&&n.searchParams.append("type",o),s&&n.searchParams.append("typesOr",s),r&&n.searchParams.append("offset",String(r)),e&&n.searchParams.append("limit",String(e));try{return(await(await d(n,{headers:{"x-api-version":i.EMBEDDING}},a)).json()).data}catch(p){return console.error(p),[]}}async function b({query:t,location:o,abortController:s,offset:r=0,limit:e=24}){const a=new URL(`${c}/places`);a.searchParams.append("query",t),a.searchParams.append("location",o),r&&a.searchParams.append("offset",String(r)),e&&a.searchParams.append("limit",String(e));try{return(await(await d(a,{headers:{"x-api-version":i.PLACE}},s||void 0)).json()).data}catch(n){return console.error(n),[]}}async function y({tags:t,bbox:o,abortController:s,offset:r=0,limit:e=100}){const a=new URL(`${c}/embeddings/explore`);a.searchParams.append("tags",t),a.searchParams.append("bbox",o),r&&a.searchParams.append("offset",String(r)),e&&a.searchParams.append("limit",String(e));try{return(await(await d(a,{headers:{"x-api-version":i.EMBEDDING}},s||void 0)).json()).data}catch(n){return n!=="new request"&&console.error(n),[]}}async function P({uniqueName:t,abortController:o,offset:s=0,limit:r=10}){const e=new URL(`${c}/embeddings/search/users`);e.searchParams.append("uniqueName",t),s&&e.searchParams.append("offset",String(s)),r&&e.searchParams.append("limit",String(r));try{return(await(await d(e,{headers:{"x-api-version":i.EMBEDDING}},o)).json()).data}catch(a){return console.error(a),[]}}async function f({boxName:t,abortController:o}){const s=new URL(`${c}/embeddings/search/boxes`);s.searchParams.append("boxName",t);try{return(await(await d(s,{headers:{"x-api-version":i.EMBEDDING}},o)).json()).data}catch(r){return console.error(r),[]}}async function l({value:t,offset:o=0,limit:s=12,abortController:r}){const e=new URL(`${c}/embeddings/search/tags`);e.searchParams.append("value",t),o&&e.searchParams.append("offset",String(o)),s&&e.searchParams.append("limit",String(s));try{return(await(await d(e,{headers:{"x-api-version":i.EMBEDDING}},r)).json()).data}catch(a){return console.error(a),[]}}export{g as a,l as b,b as c,f as d,P as e,y as g};
