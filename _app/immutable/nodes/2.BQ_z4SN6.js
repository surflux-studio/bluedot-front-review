import{s as e,g as a}from"../chunks/sign.C9vOT0h0.js";import{g as n}from"../chunks/boxRequest.DVZWwpvB.js";import{l as i}from"../chunks/scheduler.Dd3rEL6m.js";import{L as _}from"../chunks/layout.CXaBdsza.js";const l=async({depends:r})=>{if(r("app:boxes"),i(e).length!==0)return;const o=a();if(!o)return;const t=await n(o);if(!t.ok)return;const s=await t.json();e.set(s.data)},f=Object.freeze(Object.defineProperty({__proto__:null,load:l},Symbol.toStringTag,{value:"Module"}));export{_ as component,f as universal};