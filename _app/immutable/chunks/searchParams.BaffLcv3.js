import{g as i}from"./entry.BThmTqOk.js";async function d(e,t){const n=m();for(const s in e)e[s]?n.searchParams.set(s,e[s]):n.searchParams.delete(s);const a=decodeURIComponent(n.toString());await i(a,{replaceState:t.replaceState,invalidateAll:t.invalidateAll})}function m(){const e=window.location.href,t=e.indexOf("?");if(t===-1)return new URL(e);const n=e.substring(0,t+1);let a=e.substring(t+1);a=a.replace(/\?/g,"&");const s=n+a;return new URL(s)}function U(e,t,n){const a=new URL(window.location.href),[s,o]=e.split("?");if(o){const r=new URLSearchParams(o);for(const[l,f]of r.entries())a.searchParams.set(l,f||"true")}for(const r in t)t[r]?a.searchParams.set(r,t[r]):a.searchParams.delete(r);const c=decodeURIComponent(`${s}?${a.searchParams.toString()}`);i(c,n)}export{U as g,d as s};
