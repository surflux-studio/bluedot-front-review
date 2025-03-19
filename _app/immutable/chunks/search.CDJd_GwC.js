import{A as d}from"./store.CJmM3jzm.js";import{f as i}from"./fetchWithTimeout.Dfpvm03F.js";async function g({value:c,type:t,typesOr:o,offset:e=0,limit:r=10,abortController:s}){const a=d,n=new URL(`${a}/embeddings/search`);n.searchParams.append("value",c),t&&n.searchParams.append("type",t),o&&n.searchParams.append("typesOr",o),e&&n.searchParams.append("offset",String(e)),r&&n.searchParams.append("limit",String(r));try{return(await(await i(n,{},s)).json()).data}catch(p){return console.error(p),[]}}async function b({query:c,location:t,abortController:o,offset:e=0,limit:r=24}){const s=d,a=new URL(`${s}/places`);a.searchParams.append("query",c),a.searchParams.append("location",t),e&&a.searchParams.append("offset",String(e)),r&&a.searchParams.append("limit",String(r));try{return(await(await i(a,{},o||void 0)).json()).data}catch(n){return console.error(n),[]}}async function y({tags:c,bbox:t,abortController:o,offset:e=0,limit:r=100}){const s=d,a=new URL(`${s}/embeddings/explore`);a.searchParams.append("tags",c),a.searchParams.append("bbox",t),e&&a.searchParams.append("offset",String(e)),r&&a.searchParams.append("limit",String(r));try{return(await(await i(a,{},o||void 0)).json()).data}catch(n){return n!=="new request"&&console.error(n),[]}}async function f({uniqueName:c,abortController:t,offset:o=0,limit:e=10}){const r=d,s=new URL(`${r}/embeddings/search/users`);s.searchParams.append("uniqueName",c),o&&s.searchParams.append("offset",String(o)),e&&s.searchParams.append("limit",String(e));try{return(await(await i(s,{},t)).json()).data}catch(a){return console.error(a),[]}}async function P({boxName:c,abortController:t}){const o=d,e=new URL(`${o}/embeddings/search/boxes`);e.searchParams.append("boxName",c);try{return(await(await i(e,{},t)).json()).data}catch(r){return console.error(r),[]}}async function l({value:c,offset:t=0,limit:o=12,abortController:e}){const r=d,s=new URL(`${r}/embeddings/search/tags`);s.searchParams.append("value",c),t&&s.searchParams.append("offset",String(t)),o&&s.searchParams.append("limit",String(o));try{return(await(await i(s,{},e)).json()).data}catch(a){return console.error(a),[]}}export{g as a,l as b,b as c,P as d,f as e,y as g};
