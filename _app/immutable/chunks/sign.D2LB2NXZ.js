import{w as m,g as O}from"./entry.72j06AYb.js";import{_ as le}from"./preload-helper.D6kgxu3v.js";import{l as de}from"./scheduler.DobTUrUU.js";/*! Capacitor: https://capacitorjs.com/ - MIT License */const ue=t=>{const e=new Map;e.set("web",{name:"web"});const s=t.CapacitorPlatforms||{currentPlatform:{name:"web"},platforms:e},o=(r,i)=>{s.platforms.set(r,i)},n=r=>{s.platforms.has(r)&&(s.currentPlatform=s.platforms.get(r))};return s.addPlatform=o,s.setPlatform=n,s},fe=t=>t.CapacitorPlatforms=ue(t),J=fe(typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});J.addPlatform;J.setPlatform;var j;(function(t){t.Unimplemented="UNIMPLEMENTED",t.Unavailable="UNAVAILABLE"})(j||(j={}));class M extends Error{constructor(e,s,o){super(e),this.message=e,this.code=s,this.data=o}}const ge=t=>{var e,s;return t!=null&&t.androidBridge?"android":!((s=(e=t==null?void 0:t.webkit)===null||e===void 0?void 0:e.messageHandlers)===null||s===void 0)&&s.bridge?"ios":"web"},pe=t=>{var e,s,o,n,r;const i=t.CapacitorCustomPlatform||null,a=t.Capacitor||{},f=a.Plugins=a.Plugins||{},c=t.CapacitorPlatforms,A=()=>i!==null?i.name:ge(t),P=((e=c==null?void 0:c.currentPlatform)===null||e===void 0?void 0:e.getPlatform)||A,k=()=>P()!=="web",Y=((s=c==null?void 0:c.currentPlatform)===null||s===void 0?void 0:s.isNativePlatform)||k,N=l=>{const d=U.get(l);return!!(d!=null&&d.platforms.has(P())||q(l))},ee=((o=c==null?void 0:c.currentPlatform)===null||o===void 0?void 0:o.isPluginAvailable)||N,te=l=>{var d;return(d=a.PluginHeaders)===null||d===void 0?void 0:d.find(L=>L.name===l)},q=((n=c==null?void 0:c.currentPlatform)===null||n===void 0?void 0:n.getPluginHeader)||te,se=l=>t.console.error(l),oe=(l,d,L)=>Promise.reject(`${L} does not have an implementation of "${d}".`),U=new Map,re=(l,d={})=>{const L=U.get(l);if(L)return console.warn(`Capacitor plugin "${l}" already registered. Cannot register plugins twice.`),L.proxy;const y=P(),_=q(l);let w;const ae=async()=>(!w&&y in d?w=typeof d[y]=="function"?w=await d[y]():w=d[y]:i!==null&&!w&&"web"in d&&(w=typeof d.web=="function"?w=await d.web():w=d.web),w),ie=(u,g)=>{var h,b;if(_){const v=_==null?void 0:_.methods.find(p=>g===p.name);if(v)return v.rtype==="promise"?p=>a.nativePromise(l,g.toString(),p):(p,I)=>a.nativeCallback(l,g.toString(),p,I);if(u)return(h=u[g])===null||h===void 0?void 0:h.bind(u)}else{if(u)return(b=u[g])===null||b===void 0?void 0:b.bind(u);throw new M(`"${l}" plugin is not implemented on ${y}`,j.Unimplemented)}},C=u=>{let g;const h=(...b)=>{const v=ae().then(p=>{const I=ie(p,u);if(I){const $=I(...b);return g=$==null?void 0:$.remove,$}else throw new M(`"${l}.${u}()" is not implemented on ${y}`,j.Unimplemented)});return u==="addListener"&&(v.remove=async()=>g()),v};return h.toString=()=>`${u.toString()}() { [capacitor code] }`,Object.defineProperty(h,"name",{value:u,writable:!1,configurable:!1}),h},G=C("addListener"),H=C("removeListener"),ce=(u,g)=>{const h=G({eventName:u},g),b=async()=>{const p=await h;H({eventName:u,callbackId:p},g)},v=new Promise(p=>h.then(()=>p({remove:b})));return v.remove=async()=>{console.warn("Using addListener() without 'await' is deprecated."),await b()},v},x=new Proxy({},{get(u,g){switch(g){case"$$typeof":return;case"toJSON":return()=>({});case"addListener":return _?ce:G;case"removeListener":return H;default:return C(g)}}});return f[l]=x,U.set(l,{name:l,proxy:x,platforms:new Set([...Object.keys(d),..._?[y]:[]])}),x},ne=((r=c==null?void 0:c.currentPlatform)===null||r===void 0?void 0:r.registerPlugin)||re;return a.convertFileSrc||(a.convertFileSrc=l=>l),a.getPlatform=P,a.handleError=se,a.isNativePlatform=Y,a.isPluginAvailable=ee,a.pluginMethodNoop=oe,a.registerPlugin=ne,a.Exception=M,a.DEBUG=!!a.DEBUG,a.isLoggingEnabled=!!a.isLoggingEnabled,a.platform=a.getPlatform(),a.isNative=a.isNativePlatform(),a},me=t=>t.Capacitor=pe(t),S=me(typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{}),E=S.registerPlugin;S.Plugins;class K{constructor(e){this.listeners={},this.retainedEventArguments={},this.windowListeners={},e&&(console.warn(`Capacitor WebPlugin "${e.name}" config object was deprecated in v3 and will be removed in v4.`),this.config=e)}addListener(e,s){let o=!1;this.listeners[e]||(this.listeners[e]=[],o=!0),this.listeners[e].push(s);const r=this.windowListeners[e];r&&!r.registered&&this.addWindowListener(r),o&&this.sendRetainedArgumentsForEvent(e);const i=async()=>this.removeListener(e,s);return Promise.resolve({remove:i})}async removeAllListeners(){this.listeners={};for(const e in this.windowListeners)this.removeWindowListener(this.windowListeners[e]);this.windowListeners={}}notifyListeners(e,s,o){const n=this.listeners[e];if(!n){if(o){let r=this.retainedEventArguments[e];r||(r=[]),r.push(s),this.retainedEventArguments[e]=r}return}n.forEach(r=>r(s))}hasListeners(e){return!!this.listeners[e].length}registerWindowListener(e,s){this.windowListeners[s]={registered:!1,windowEventName:e,pluginEventName:s,handler:o=>{this.notifyListeners(s,o)}}}unimplemented(e="not implemented"){return new S.Exception(e,j.Unimplemented)}unavailable(e="not available"){return new S.Exception(e,j.Unavailable)}async removeListener(e,s){const o=this.listeners[e];if(!o)return;const n=o.indexOf(s);this.listeners[e].splice(n,1),this.listeners[e].length||this.removeWindowListener(this.windowListeners[e])}addWindowListener(e){window.addEventListener(e.windowEventName,e.handler),e.registered=!0}removeWindowListener(e){e&&(window.removeEventListener(e.windowEventName,e.handler),e.registered=!1)}sendRetainedArgumentsForEvent(e){const s=this.retainedEventArguments[e];s&&(delete this.retainedEventArguments[e],s.forEach(o=>{this.notifyListeners(e,o)}))}}const z=t=>encodeURIComponent(t).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape),R=t=>t.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent);class he extends K{async getCookies(){const e=document.cookie,s={};return e.split(";").forEach(o=>{if(o.length<=0)return;let[n,r]=o.replace(/=/,"CAP_COOKIE").split("CAP_COOKIE");n=R(n).trim(),r=R(r).trim(),s[n]=r}),s}async setCookie(e){try{const s=z(e.key),o=z(e.value),n=`; expires=${(e.expires||"").replace("expires=","")}`,r=(e.path||"/").replace("path=",""),i=e.url!=null&&e.url.length>0?`domain=${e.url}`:"";document.cookie=`${s}=${o||""}${n}; path=${r}; ${i};`}catch(s){return Promise.reject(s)}}async deleteCookie(e){try{document.cookie=`${e.key}=; Max-Age=0`}catch(s){return Promise.reject(s)}}async clearCookies(){try{const e=document.cookie.split(";")||[];for(const s of e)document.cookie=s.replace(/^ +/,"").replace(/=.*/,`=;expires=${new Date().toUTCString()};path=/`)}catch(e){return Promise.reject(e)}}async clearAllCookies(){try{await this.clearCookies()}catch(e){return Promise.reject(e)}}}E("CapacitorCookies",{web:()=>new he});const we=async t=>new Promise((e,s)=>{const o=new FileReader;o.onload=()=>{const n=o.result;e(n.indexOf(",")>=0?n.split(",")[1]:n)},o.onerror=n=>s(n),o.readAsDataURL(t)}),be=(t={})=>{const e=Object.keys(t);return Object.keys(t).map(n=>n.toLocaleLowerCase()).reduce((n,r,i)=>(n[r]=t[e[i]],n),{})},ve=(t,e=!0)=>t?Object.entries(t).reduce((o,n)=>{const[r,i]=n;let a,f;return Array.isArray(i)?(f="",i.forEach(c=>{a=e?encodeURIComponent(c):c,f+=`${r}=${a}&`}),f.slice(0,-1)):(a=e?encodeURIComponent(i):i,f=`${r}=${a}`),`${o}&${f}`},"").substr(1):null,ye=(t,e={})=>{const s=Object.assign({method:t.method||"GET",headers:t.headers},e),n=be(t.headers)["content-type"]||"";if(typeof t.data=="string")s.body=t.data;else if(n.includes("application/x-www-form-urlencoded")){const r=new URLSearchParams;for(const[i,a]of Object.entries(t.data||{}))r.set(i,a);s.body=r.toString()}else if(n.includes("multipart/form-data")||t.data instanceof FormData){const r=new FormData;if(t.data instanceof FormData)t.data.forEach((a,f)=>{r.append(f,a)});else for(const a of Object.keys(t.data))r.append(a,t.data[a]);s.body=r;const i=new Headers(s.headers);i.delete("content-type"),s.headers=i}else(n.includes("application/json")||typeof t.data=="object")&&(s.body=JSON.stringify(t.data));return s};class Pe extends K{async request(e){const s=ye(e,e.webFetchExtra),o=ve(e.params,e.shouldEncodeUrlParams),n=o?`${e.url}?${o}`:e.url,r=await fetch(n,s),i=r.headers.get("content-type")||"";let{responseType:a="text"}=r.ok?e:{};i.includes("application/json")&&(a="json");let f,c;switch(a){case"arraybuffer":case"blob":c=await r.blob(),f=await we(c);break;case"json":f=await r.json();break;case"document":case"text":default:f=await r.text()}const A={};return r.headers.forEach((P,k)=>{A[k]=P}),{data:f,headers:A,status:r.status,url:r.url}}async get(e){return this.request(Object.assign(Object.assign({},e),{method:"GET"}))}async post(e){return this.request(Object.assign(Object.assign({},e),{method:"POST"}))}async put(e){return this.request(Object.assign(Object.assign({},e),{method:"PUT"}))}async patch(e){return this.request(Object.assign(Object.assign({},e),{method:"PATCH"}))}async delete(e){return this.request(Object.assign(Object.assign({},e),{method:"DELETE"}))}}E("CapacitorHttp",{web:()=>new Pe});const V=E("SocialLogin",{web:()=>le(()=>import("./web.DCPuTb7B.js"),[],import.meta.url).then(t=>new t.SocialLoginWeb)}),Q="https://basemap.surflux.studio/geoserver",$e=`${Q}/gwc/service/tms/1.0.0/bluedot:base_administrative@EPSG%3A900913@pbf/{z}/{x}/{-y}.pbf`,Oe=`${Q}/gwc/service/tms/1.0.0/bluedot:base_building@EPSG%3A900913@pbf/{z}/{x}/{-y}.pbf`,ke="https://bluedot-subway.s3.ap-northeast-2.amazonaws.com/base_subway_railway_900913_241127.json",Ue="https://bluedot-subway.s3.ap-northeast-2.amazonaws.com/base_subway_station_900913_241127.json",Ce="https://bluedot-subway.s3.ap-northeast-2.amazonaws.com/base_subway_entrance_900913_241127.json";var X=(t=>(t[t.MobileS=320]="MobileS",t[t.MobileM=375]="MobileM",t[t.MobileL=425]="MobileL",t[t.Tablet=768]="Tablet",t[t.Laptop=1024]="Laptop",t[t.LaptopL=1440]="LaptopL",t[t.FourK=2560]="FourK",t))(X||{});const B="https://api.bluedot.land",xe="https://d1egcbbnpo4gtd.cloudfront.net",Me={public:"공개",follower:"팔로워 공개",private:"비공개"};function Le(t){return{all:t=t||new Map,on:function(e,s){var o=t.get(e);o?o.push(s):t.set(e,[s])},off:function(e,s){var o=t.get(e);o&&(s?o.splice(o.indexOf(s)>>>0,1):t.set(e,[]))},emit:function(e,s){var o=t.get(e);o&&o.slice().map(function(n){n(s)}),(o=t.get("*"))&&o.slice().map(function(n){n(e,s)})}}}const _e=Le(),We=m(void 0),Be=m(X.MobileM),De=m(!1),Ee=m([]),Fe=m(!1),Te=m([]),qe=m([]),D=m(!1),Ge=m(!1),He=m([]),ze=m(!1),W=S.getPlatform();async function Re(){V.initialize({google:{iOSClientId:"298551622119-6r1e3ji2e6vdioqarf2pg3g6brvd47od.apps.googleusercontent.com",webClientId:"298551622119-gg1fqk381om4384l71ju7ip4857cqbh1.apps.googleusercontent.com"}})}async function Je(){var t;if(W==="ios"||W==="android"){const s=(await V.login({provider:"google",options:{scopes:["email","profile"]}})).result,n=await(await fetch(`${B}/auth/oauth/google/user`,{method:"POST",body:JSON.stringify({name:s.profile.name,email:s.profile.email,picture:s.profile.imageUrl})})).json();if(!((t=n==null?void 0:n.data)!=null&&t.access))throw _e.emit("pushSnackbar",{message:"로그인에 실패했습니다."}),Error("Failed to sign in");const r=n.data.access;Z(r)}else if(W==="web"){const e="298551622119-gg1fqk381om4384l71ju7ip4857cqbh1.apps.googleusercontent.com",s=`${B}/auth/oauth/google`,o="email profile",n="code",r=window.location.href,i=`https://accounts.google.com/o/oauth2/v2/auth?response_type=${n}&client_id=${e}&redirect_uri=${s}&scope=${o}&state=${r}`;location.replace(i)}else throw Error("Not supported platform")}function Ke(){localStorage.removeItem("jwt"),localStorage.removeItem("saveSignLocal"),sessionStorage.removeItem("jwt")}function F(){try{const t=sessionStorage.getItem("jwt")||localStorage.getItem("jwt")||null;if(!t)throw new Error("jwt not found");if(de(D)===!0&&!window.location.pathname.startsWith("/users/sign-up/")&&!window.location.pathname.startsWith("/tp/"))return console.log("A"),O("/users/sign-up/agreement"),null;const e=T(t);if(e.exp&&Math.floor(Date.now()/1e3)>e.exp)throw new Error("jwt expired");return e.sig===!1&&!window.location.pathname.startsWith("/users/sign-up")&&!window.location.pathname.startsWith("/tp")?(D.set(!0),console.log("B"),O("/users/sign-up/agreement"),null):t}catch(t){return console.warn(t),localStorage.removeItem("jwt"),sessionStorage.removeItem("jwt"),null}}function je(){const t=F();return t?T(t):null}function Ve(){const t=je();return t?BigInt(t.sub):null}function Z(t){localStorage.getItem("saveSignLocal")=="true"&&localStorage.setItem("jwt",t),sessionStorage.setItem("jwt",t)}async function Qe(t){const e=t.searchParams.get("access");if(e){Z(e);const s=T(e).sig;if(t.searchParams.delete("access"),t.searchParams.delete("refresh"),s===!1){D.set(!0),await O("/users/sign-up/agreement");return}await O(t.toString(),{replaceState:!0,invalidateAll:!1})}}function T(t){const s=t.split(".")[1].replace(/-/g,"+").replace(/_/g,"/"),o=decodeURIComponent(atob(s).split("").map(function(n){return"%"+("00"+n.charCodeAt(0).toString(16)).slice(-2)}).join(""));return JSON.parse(o)}function Xe(){return F()!==null}async function Ze(t){return(await(await fetch(`${B}/auth/users/${t}`,{headers:{Authorization:`Bearer ${F()}`}})).json()).data}export{B as A,ke as B,S as C,Ue as D,Ce as E,Oe as F,Q as G,$e as P,X as S,K as W,He as a,Ve as b,Ze as c,D as d,_e as e,Ge as f,F as g,Z as h,Xe as i,Te as j,ze as k,xe as l,Ke as m,De as n,je as o,Ee as p,Me as q,E as r,qe as s,M as t,Fe as u,Qe as v,Be as w,Je as x,Re as y,We as z};
