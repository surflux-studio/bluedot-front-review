import{w as h,g as ce}from"./entry.Cctsocsa.js";import{_ as le}from"./preload-helper.D6kgxu3v.js";/*! Capacitor: https://capacitorjs.com/ - MIT License */const de=t=>{const e=new Map;e.set("web",{name:"web"});const s=t.CapacitorPlatforms||{currentPlatform:{name:"web"},platforms:e},o=(r,i)=>{s.platforms.set(r,i)},n=r=>{s.platforms.has(r)&&(s.currentPlatform=s.platforms.get(r))};return s.addPlatform=o,s.setPlatform=n,s},ue=t=>t.CapacitorPlatforms=de(t),z=ue(typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});z.addPlatform;z.setPlatform;var _;(function(t){t.Unimplemented="UNIMPLEMENTED",t.Unavailable="UNAVAILABLE"})(_||(_={}));class x extends Error{constructor(e,s,o){super(e),this.message=e,this.code=s,this.data=o}}const fe=t=>{var e,s;return t!=null&&t.androidBridge?"android":!((s=(e=t==null?void 0:t.webkit)===null||e===void 0?void 0:e.messageHandlers)===null||s===void 0)&&s.bridge?"ios":"web"},ge=t=>{var e,s,o,n,r;const i=t.CapacitorCustomPlatform||null,a=t.Capacitor||{},f=a.Plugins=a.Plugins||{},c=t.CapacitorPlatforms,I=()=>i!==null?i.name:fe(t),P=((e=c==null?void 0:c.currentPlatform)===null||e===void 0?void 0:e.getPlatform)||I,O=()=>P()!=="web",Z=((s=c==null?void 0:c.currentPlatform)===null||s===void 0?void 0:s.isNativePlatform)||O,Y=l=>{const d=U.get(l);return!!(d!=null&&d.platforms.has(P())||F(l))},N=((o=c==null?void 0:c.currentPlatform)===null||o===void 0?void 0:o.isPluginAvailable)||Y,ee=l=>{var d;return(d=a.PluginHeaders)===null||d===void 0?void 0:d.find(L=>L.name===l)},F=((n=c==null?void 0:c.currentPlatform)===null||n===void 0?void 0:n.getPluginHeader)||ee,te=l=>t.console.error(l),se=(l,d,L)=>Promise.reject(`${L} does not have an implementation of "${d}".`),U=new Map,oe=(l,d={})=>{const L=U.get(l);if(L)return console.warn(`Capacitor plugin "${l}" already registered. Cannot register plugins twice.`),L.proxy;const y=P(),j=F(l);let w;const ne=async()=>(!w&&y in d?w=typeof d[y]=="function"?w=await d[y]():w=d[y]:i!==null&&!w&&"web"in d&&(w=typeof d.web=="function"?w=await d.web():w=d.web),w),ae=(u,g)=>{var m,b;if(j){const v=j==null?void 0:j.methods.find(p=>g===p.name);if(v)return v.rtype==="promise"?p=>a.nativePromise(l,g.toString(),p):(p,A)=>a.nativeCallback(l,g.toString(),p,A);if(u)return(m=u[g])===null||m===void 0?void 0:m.bind(u)}else{if(u)return(b=u[g])===null||b===void 0?void 0:b.bind(u);throw new x(`"${l}" plugin is not implemented on ${y}`,_.Unimplemented)}},k=u=>{let g;const m=(...b)=>{const v=ne().then(p=>{const A=ae(p,u);if(A){const $=A(...b);return g=$==null?void 0:$.remove,$}else throw new x(`"${l}.${u}()" is not implemented on ${y}`,_.Unimplemented)});return u==="addListener"&&(v.remove=async()=>g()),v};return m.toString=()=>`${u.toString()}() { [capacitor code] }`,Object.defineProperty(m,"name",{value:u,writable:!1,configurable:!1}),m},q=k("addListener"),E=k("removeListener"),ie=(u,g)=>{const m=q({eventName:u},g),b=async()=>{const p=await m;E({eventName:u,callbackId:p},g)},v=new Promise(p=>m.then(()=>p({remove:b})));return v.remove=async()=>{console.warn("Using addListener() without 'await' is deprecated."),await b()},v},C=new Proxy({},{get(u,g){switch(g){case"$$typeof":return;case"toJSON":return()=>({});case"addListener":return j?ie:q;case"removeListener":return E;default:return k(g)}}});return f[l]=C,U.set(l,{name:l,proxy:C,platforms:new Set([...Object.keys(d),...j?[y]:[]])}),C},re=((r=c==null?void 0:c.currentPlatform)===null||r===void 0?void 0:r.registerPlugin)||oe;return a.convertFileSrc||(a.convertFileSrc=l=>l),a.getPlatform=P,a.handleError=te,a.isNativePlatform=Z,a.isPluginAvailable=N,a.pluginMethodNoop=se,a.registerPlugin=re,a.Exception=x,a.DEBUG=!!a.DEBUG,a.isLoggingEnabled=!!a.isLoggingEnabled,a.platform=a.getPlatform(),a.isNative=a.isNativePlatform(),a},pe=t=>t.Capacitor=ge(t),S=pe(typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{}),W=S.registerPlugin;S.Plugins;class R{constructor(e){this.listeners={},this.retainedEventArguments={},this.windowListeners={},e&&(console.warn(`Capacitor WebPlugin "${e.name}" config object was deprecated in v3 and will be removed in v4.`),this.config=e)}addListener(e,s){let o=!1;this.listeners[e]||(this.listeners[e]=[],o=!0),this.listeners[e].push(s);const r=this.windowListeners[e];r&&!r.registered&&this.addWindowListener(r),o&&this.sendRetainedArgumentsForEvent(e);const i=async()=>this.removeListener(e,s);return Promise.resolve({remove:i})}async removeAllListeners(){this.listeners={};for(const e in this.windowListeners)this.removeWindowListener(this.windowListeners[e]);this.windowListeners={}}notifyListeners(e,s,o){const n=this.listeners[e];if(!n){if(o){let r=this.retainedEventArguments[e];r||(r=[]),r.push(s),this.retainedEventArguments[e]=r}return}n.forEach(r=>r(s))}hasListeners(e){return!!this.listeners[e].length}registerWindowListener(e,s){this.windowListeners[s]={registered:!1,windowEventName:e,pluginEventName:s,handler:o=>{this.notifyListeners(s,o)}}}unimplemented(e="not implemented"){return new S.Exception(e,_.Unimplemented)}unavailable(e="not available"){return new S.Exception(e,_.Unavailable)}async removeListener(e,s){const o=this.listeners[e];if(!o)return;const n=o.indexOf(s);this.listeners[e].splice(n,1),this.listeners[e].length||this.removeWindowListener(this.windowListeners[e])}addWindowListener(e){window.addEventListener(e.windowEventName,e.handler),e.registered=!0}removeWindowListener(e){e&&(window.removeEventListener(e.windowEventName,e.handler),e.registered=!1)}sendRetainedArgumentsForEvent(e){const s=this.retainedEventArguments[e];s&&(delete this.retainedEventArguments[e],s.forEach(o=>{this.notifyListeners(e,o)}))}}const G=t=>encodeURIComponent(t).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape),H=t=>t.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent);class me extends R{async getCookies(){const e=document.cookie,s={};return e.split(";").forEach(o=>{if(o.length<=0)return;let[n,r]=o.replace(/=/,"CAP_COOKIE").split("CAP_COOKIE");n=H(n).trim(),r=H(r).trim(),s[n]=r}),s}async setCookie(e){try{const s=G(e.key),o=G(e.value),n=`; expires=${(e.expires||"").replace("expires=","")}`,r=(e.path||"/").replace("path=",""),i=e.url!=null&&e.url.length>0?`domain=${e.url}`:"";document.cookie=`${s}=${o||""}${n}; path=${r}; ${i};`}catch(s){return Promise.reject(s)}}async deleteCookie(e){try{document.cookie=`${e.key}=; Max-Age=0`}catch(s){return Promise.reject(s)}}async clearCookies(){try{const e=document.cookie.split(";")||[];for(const s of e)document.cookie=s.replace(/^ +/,"").replace(/=.*/,`=;expires=${new Date().toUTCString()};path=/`)}catch(e){return Promise.reject(e)}}async clearAllCookies(){try{await this.clearCookies()}catch(e){return Promise.reject(e)}}}W("CapacitorCookies",{web:()=>new me});const he=async t=>new Promise((e,s)=>{const o=new FileReader;o.onload=()=>{const n=o.result;e(n.indexOf(",")>=0?n.split(",")[1]:n)},o.onerror=n=>s(n),o.readAsDataURL(t)}),we=(t={})=>{const e=Object.keys(t);return Object.keys(t).map(n=>n.toLocaleLowerCase()).reduce((n,r,i)=>(n[r]=t[e[i]],n),{})},be=(t,e=!0)=>t?Object.entries(t).reduce((o,n)=>{const[r,i]=n;let a,f;return Array.isArray(i)?(f="",i.forEach(c=>{a=e?encodeURIComponent(c):c,f+=`${r}=${a}&`}),f.slice(0,-1)):(a=e?encodeURIComponent(i):i,f=`${r}=${a}`),`${o}&${f}`},"").substr(1):null,ve=(t,e={})=>{const s=Object.assign({method:t.method||"GET",headers:t.headers},e),n=we(t.headers)["content-type"]||"";if(typeof t.data=="string")s.body=t.data;else if(n.includes("application/x-www-form-urlencoded")){const r=new URLSearchParams;for(const[i,a]of Object.entries(t.data||{}))r.set(i,a);s.body=r.toString()}else if(n.includes("multipart/form-data")||t.data instanceof FormData){const r=new FormData;if(t.data instanceof FormData)t.data.forEach((a,f)=>{r.append(f,a)});else for(const a of Object.keys(t.data))r.append(a,t.data[a]);s.body=r;const i=new Headers(s.headers);i.delete("content-type"),s.headers=i}else(n.includes("application/json")||typeof t.data=="object")&&(s.body=JSON.stringify(t.data));return s};class ye extends R{async request(e){const s=ve(e,e.webFetchExtra),o=be(e.params,e.shouldEncodeUrlParams),n=o?`${e.url}?${o}`:e.url,r=await fetch(n,s),i=r.headers.get("content-type")||"";let{responseType:a="text"}=r.ok?e:{};i.includes("application/json")&&(a="json");let f,c;switch(a){case"arraybuffer":case"blob":c=await r.blob(),f=await he(c);break;case"json":f=await r.json();break;case"document":case"text":default:f=await r.text()}const I={};return r.headers.forEach((P,O)=>{I[O]=P}),{data:f,headers:I,status:r.status,url:r.url}}async get(e){return this.request(Object.assign(Object.assign({},e),{method:"GET"}))}async post(e){return this.request(Object.assign(Object.assign({},e),{method:"POST"}))}async put(e){return this.request(Object.assign(Object.assign({},e),{method:"PUT"}))}async patch(e){return this.request(Object.assign(Object.assign({},e),{method:"PATCH"}))}async delete(e){return this.request(Object.assign(Object.assign({},e),{method:"DELETE"}))}}W("CapacitorHttp",{web:()=>new ye});const J=W("SocialLogin",{web:()=>le(()=>import("./web.B0l2cD8f.js"),[],import.meta.url).then(t=>new t.SocialLoginWeb)}),K="https://basemap.surflux.studio/geoserver",Ie=`${K}/gwc/service/tms/1.0.0/bluedot:base_administrative@EPSG%3A900913@pbf/{z}/{x}/{-y}.pbf`,Ae=`${K}/gwc/service/tms/1.0.0/bluedot:base_building@EPSG%3A900913@pbf/{z}/{x}/{-y}.pbf`,$e="https://bluedot-subway.s3.ap-northeast-2.amazonaws.com/base_subway_railway_900913_241127.json",Oe="https://bluedot-subway.s3.ap-northeast-2.amazonaws.com/base_subway_station_900913_241127.json",Ue="https://bluedot-subway.s3.ap-northeast-2.amazonaws.com/base_subway_entrance_900913_241127.json";var V=(t=>(t[t.MobileS=320]="MobileS",t[t.MobileM=375]="MobileM",t[t.MobileL=425]="MobileL",t[t.Tablet=768]="Tablet",t[t.Laptop=1024]="Laptop",t[t.LaptopL=1440]="LaptopL",t[t.FourK=2560]="FourK",t))(V||{});const D="https://api.bluedot.land",ke="https://d1egcbbnpo4gtd.cloudfront.net";function Pe(t){return{all:t=t||new Map,on:function(e,s){var o=t.get(e);o?o.push(s):t.set(e,[s])},off:function(e,s){var o=t.get(e);o&&(s?o.splice(o.indexOf(s)>>>0,1):t.set(e,[]))},emit:function(e,s){var o=t.get(e);o&&o.slice().map(function(n){n(s)}),(o=t.get("*"))&&o.slice().map(function(n){n(e,s)})}}}const Le=Pe(),Ce=h(void 0),xe=h(V.MobileM),Me=h(!1),De=h([]),We=h(!1),Be=h(!1),Te=h([]),Fe=h([]),Q=h(!1),qe=h([]),M=S.getPlatform();async function Ee(){J.initialize({google:{iOSClientId:"298551622119-6r1e3ji2e6vdioqarf2pg3g6brvd47od.apps.googleusercontent.com",webClientId:"298551622119-gg1fqk381om4384l71ju7ip4857cqbh1.apps.googleusercontent.com"}})}async function Ge(){var t;if(M==="ios"||M==="android"){const s=(await J.login({provider:"google",options:{scopes:["email","profile"]}})).result,n=await(await fetch(`${D}/auth/oauth/google/user`,{method:"POST",body:JSON.stringify({name:s.profile.name,email:s.profile.email,picture:s.profile.imageUrl})})).json();if(!((t=n==null?void 0:n.data)!=null&&t.access))throw Le.emit("pushSnackbar",{message:"로그인에 실패했습니다."}),Error("Failed to sign in");const r=n.data.access;X(r)}else if(M==="web"){const e="298551622119-gg1fqk381om4384l71ju7ip4857cqbh1.apps.googleusercontent.com",s=`${D}/auth/oauth/google`,o="email profile",n="code",r=window.location.href,i=`https://accounts.google.com/o/oauth2/v2/auth?response_type=${n}&client_id=${e}&redirect_uri=${s}&scope=${o}&state=${r}`;location.replace(i)}else throw Error("Not supported platform")}function He(){localStorage.removeItem("jwt"),localStorage.removeItem("saveSignLocal"),sessionStorage.removeItem("jwt")}function B(){try{const t=sessionStorage.getItem("jwt")||localStorage.getItem("jwt")||null;if(!t)throw new Error("jwt not found");const e=T(t);if(e.exp&&Math.floor(Date.now()/1e3)>=e.exp)throw new Error("jwt expired");return e.sig===!1&&Q.set(!0),t}catch(t){return console.warn(t),localStorage.removeItem("jwt"),sessionStorage.removeItem("jwt"),null}}function je(){const t=B();return t?T(t):null}function ze(){const t=je();return t?BigInt(t.sub):null}function X(t){localStorage.getItem("saveSignLocal")=="true"&&localStorage.setItem("jwt",t),sessionStorage.setItem("jwt",t)}async function Re(t){const e=t.searchParams.get("access");e&&(T(e).sig===!1&&Q.set(!0),X(e)),t.searchParams.delete("access"),t.searchParams.delete("refresh"),e&&await ce(t.toString(),{replaceState:!0,invalidateAll:!1})}function T(t){const s=t.split(".")[1].replace(/-/g,"+").replace(/_/g,"/"),o=decodeURIComponent(atob(s).split("").map(function(n){return"%"+("00"+n.charCodeAt(0).toString(16)).slice(-2)}).join(""));return JSON.parse(o)}function Je(){return B()!==null}async function Ke(t){return(await(await fetch(`${D}/auth/users/${t}`,{headers:{Authorization:`Bearer ${B()}`}})).json()).data}export{D as A,Ue as B,ke as C,Ae as D,K as G,Ie as P,V as S,R as W,De as a,We as b,qe as c,ze as d,Le as e,Ke as f,B as g,Me as h,Je as i,Te as j,je as k,S as l,He as m,Be as n,x as o,Re as p,xe as q,W as r,Fe as s,Ge as t,Q as u,X as v,Ee as w,Ce as x,$e as y,Oe as z};
