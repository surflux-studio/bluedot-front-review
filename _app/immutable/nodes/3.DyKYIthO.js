import{g as i}from"../chunks/sign.Dxief6xf.js";import{g as d}from"../chunks/entry.BLOyG78Q.js";import{a as l}from"../chunks/boxRequest.3S7lFbbW.js";import{s as u}from"../chunks/store.CZDBRdAx.js";import{L as _}from"../chunks/layout.bdCeigEY.js";const c=async({params:t})=>{const o=t.idx==="-1",e=i();if(e===null&&o)return d("/boxes");if(o)return{data:null};const a=await l(t.idx,e);if(!a.ok)return{data:null,error:"Failed to fetch box data"};const r=await a.json();return u.update(s=>s.map(n=>n.idx===t.idx?r.data.box:n)),{data:r.data}},b=Object.freeze(Object.defineProperty({__proto__:null,load:c},Symbol.toStringTag,{value:"Module"}));export{_ as component,b as universal};
