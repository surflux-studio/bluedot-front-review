import{A as a}from"./sign.CJj0RIG-.js";import{f as r}from"./fetchWithTimeout.CNcYUjn_.js";async function i(t,e){return await fetch(`${a}/boxes${e?`?userIdx=${e}`:""}`,{method:"GET",headers:{Authorization:`Bearer ${t}`}})}async function c(t,e){const o=new URL(`${a}/boxes/boundary?bbox=${t}`);return await r(o,{method:"GET",headers:{Accept:"application/json"}},e)}async function h(t,e){return await fetch(`${a}/boxes/${t}`,{method:"GET",headers:{Authorization:`Bearer ${e}`}})}async function u(t,e,o){return await fetch(`${a}/boxes/${e}/places/${o}`,{method:"PUT",headers:{Authorization:`Bearer ${t}`}})}export{h as a,c as b,i as g,u as p};
