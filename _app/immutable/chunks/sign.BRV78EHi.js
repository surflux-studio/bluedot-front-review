const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./web.DsF9O9Wu.js","./emitter.PJNP4wAS.js","./preload-helper.D6kgxu3v.js","./entry.DYdHKLY6.js","./scheduler.DH3jNSXp.js","./web.cwoGwKUy.js"])))=>i.map(i=>d[i]);
import{g as l}from"./entry.DYdHKLY6.js";import{_ as S}from"./preload-helper.D6kgxu3v.js";import{r as y,C as j,e as b}from"./emitter.PJNP4wAS.js";import{b as f,i as I,A as i}from"./store.kGqWah2j.js";import{l as v}from"./scheduler.DH3jNSXp.js";const d=y("SocialLogin",{web:()=>S(()=>import("./web.DsF9O9Wu.js"),__vite__mapDeps([0,1,2,3,4]),import.meta.url).then(e=>new e.SocialLoginWeb)}),m=y("SecureStoragePlugin",{web:()=>S(()=>import("./web.cwoGwKUy.js"),__vite__mapDeps([5,1,2,3,4]),import.meta.url).then(e=>new e.SecureStoragePluginWeb)}),u=j.getPlatform(),p=u==="ios"||u==="android";async function A(){d.initialize({google:{iOSClientId:"298551622119-6r1e3ji2e6vdioqarf2pg3g6brvd47od.apps.googleusercontent.com",webClientId:"298551622119-gg1fqk381om4384l71ju7ip4857cqbh1.apps.googleusercontent.com"},apple:{}})}async function T(e){var t;if(p){const r=(await d.login({provider:"google",options:{scopes:["email","profile"]}})).result,s=await(await fetch(`${i}/auth/social/user`,{method:"POST",body:JSON.stringify({name:r.profile.name,email:r.profile.email,picture:r.profile.imageUrl,provider:"google",keepSignin:e})})).json();if(!((t=s==null?void 0:s.data)!=null&&t.access))throw b.emit("pushSnackbar",{message:"로그인에 실패했습니다."}),Error("Failed to sign in");g(s.data.access,s.data.refresh)}else if(u==="web"){const o="298551622119-gg1fqk381om4384l71ju7ip4857cqbh1.apps.googleusercontent.com",r=`${i}/auth/oauth/google`,n="email profile",s="code",a=new URL(window.location.href);a.searchParams.set("keepSignin",e.toString());const c=encodeURIComponent(a.toString()),_=`https://accounts.google.com/o/oauth2/v2/auth?response_type=${s}&client_id=${o}&redirect_uri=${r}&scope=${n}&state=${c}`;location.replace(_)}else throw Error("Not supported platform")}async function J(e){var c;if(u!=="ios")return;const o=(await d.login({provider:"apple",options:{}})).result;let r=o.profile.givenName??"";o.profile.familyName&&(r+=(r?" ":"")+o.profile.familyName);let n=o.profile.email;const a=await(await fetch(`${i}/auth/social/apple`,{method:"POST",body:JSON.stringify({name:r,email:n,providerId:o.profile.user,keepSignin:e})})).json();if(!((c=a==null?void 0:a.data)!=null&&c.access))throw b.emit("pushSnackbar",{message:"로그인에 실패했습니다."}),Error("Failed to sign in");g(a.data.access,a.data.refresh)}function N(){sessionStorage.removeItem("jwt"),p&&m.clear()}function h(){try{const e=sessionStorage.getItem("jwt")||null;if(!e)throw new Error("jwt not found");if(v(f)===!0&&!window.location.pathname.startsWith("/users/sign-up/")&&!window.location.pathname.startsWith("/tp/"))return console.log("A"),l("/users/sign-up/agreement"),null;const t=w(e);if(t.exp&&Math.floor(Date.now()/1e3)>t.exp)throw I.set(!0),new Error("jwt expired");return t.sig===!1&&!window.location.pathname.startsWith("/users/sign-up")&&!window.location.pathname.startsWith("/tp")?(f.set(!0),l("/users/sign-up/agreement"),null):e}catch(e){return console.warn(e),sessionStorage.removeItem("jwt"),null}}function P(){const e=h();return e?w(e):null}function C(){const e=P();return e?BigInt(e.sub):null}function g(e,t){sessionStorage.setItem("jwt",e),p&&t&&m.set({key:"refresh",value:t})}async function L(){const e={credentials:"include"};if(p)try{const t=await m.get({key:"refresh"});if(!t.value)return!1;e.headers={Authorization:`Bearer ${t.value}`}}catch{return!1}try{const t=await fetch(`${i}/auth/token/refresh`,e);if(!t.ok)throw new Error("Failed to refresh token");const o=await t.json();return g(o.data.access,o.data.refresh),!0}catch{return!1}}async function R(e){const t=e.searchParams.get("access");if(t){g(t);const o=w(t).sig;if(e.searchParams.delete("access"),o===!1){f.set(!0),await l("/users/sign-up/agreement");return}await l(e.toString(),{replaceState:!0,invalidateAll:!1})}}function w(e){const o=e.split(".")[1].replace(/-/g,"+").replace(/_/g,"/"),r=decodeURIComponent(atob(o).split("").map(function(n){return"%"+("00"+n.charCodeAt(0).toString(16)).slice(-2)}).join(""));return JSON.parse(r)}function W(){return h()!==null}async function q(e){return(await(await fetch(`${i}/auth/users/${e}`,{headers:{Authorization:`Bearer ${h()}`}})).json()).data}export{C as a,P as b,q as c,N as d,T as e,J as f,h as g,R as h,W as i,A as j,L as r,g as s};
