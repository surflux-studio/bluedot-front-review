import{s as e}from"../chunks/store.kGqWah2j.js";import{g as a}from"../chunks/sign.BRV78EHi.js";import{g as n}from"../chunks/boxRequest.DCJKh3le.js";import{l as i}from"../chunks/scheduler.DH3jNSXp.js";import{L as b}from"../chunks/layout.Bi1MMG4T.js";const m=async({depends:r})=>{if(r("app:boxes"),i(e).length!==0)return;const o=a();if(!o)return;const t=await n(o);if(!t.ok)return;const s=await t.json();e.set(s.data)},u=Object.freeze(Object.defineProperty({__proto__:null,load:m},Symbol.toStringTag,{value:"Module"}));export{b as component,u as universal};
