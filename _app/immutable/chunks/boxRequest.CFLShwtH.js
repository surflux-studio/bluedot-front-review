import{A as o,b as t}from"./store.yog8tTTa.js";import{f as n}from"./fetchWithTimeout.Dfpvm03F.js";async function c(a,e){return await fetch(`${o}/boxes${e?`?userIdx=${e}`:""}`,{method:"GET",headers:{Authorization:`Bearer ${a}`,"x-api-version":t.BOX}})}async function h(a,e){const r=new URL(`${o}/boxes/boundary?bbox=${a}`);return await n(r,{method:"GET",headers:{Accept:"application/json","x-api-version":t.BOX}},e)}async function u(a,e){return await fetch(`${o}/boxes/${a}`,{method:"GET",headers:{Authorization:`Bearer ${e}`,"x-api-version":t.BOX}})}async function x(a,e,r){return await fetch(`${o}/boxes/${e}/places/${r}`,{method:"PUT",headers:{Authorization:`Bearer ${a}`,"x-api-version":t.BOX}})}export{u as a,h as b,c as g,x as p};
