import{A as a}from"./sign.C9vOT0h0.js";import{f as r}from"./fetchWithTimeout.CNcYUjn_.js";async function i(e){return await fetch(`${a}/boxes`,{method:"GET",headers:{Authorization:`Bearer ${e}`}})}async function c(e,t){const o=new URL(`${a}/boxes/boundary?bbox=${e}`);return await r(o,{method:"GET",headers:{Accept:"application/json"}},t)}async function h(e,t){return await fetch(`${a}/boxes/${e}`,{method:"GET",headers:{Authorization:`Bearer ${t}`}})}async function u(e,t,o){return await fetch(`${a}/boxes/${t}/places/${o}`,{method:"PUT",headers:{Authorization:`Bearer ${e}`}})}export{h as a,c as b,i as g,u as p};