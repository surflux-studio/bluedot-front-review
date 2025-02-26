import{w as p,g as A}from"./entry.B9SH3PBZ.js";import{_ as ce}from"./preload-helper.D6kgxu3v.js";import{l as de}from"./scheduler.CVGJxaOr.js";/*! Capacitor: https://capacitorjs.com/ - MIT License */const ue=t=>{const e=new Map;e.set("web",{name:"web"});const s=t.CapacitorPlatforms||{currentPlatform:{name:"web"},platforms:e},o=(r,i)=>{s.platforms.set(r,i)},n=r=>{s.platforms.has(r)&&(s.currentPlatform=s.platforms.get(r))};return s.addPlatform=o,s.setPlatform=n,s},fe=t=>t.CapacitorPlatforms=ue(t),Q=fe(typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});Q.addPlatform;Q.setPlatform;var _;(function(t){t.Unimplemented="UNIMPLEMENTED",t.Unavailable="UNAVAILABLE"})(_||(_={}));class B extends Error{constructor(e,s,o){super(e),this.message=e,this.code=s,this.data=o}}const ge=t=>{var e,s;return t!=null&&t.androidBridge?"android":!((s=(e=t==null?void 0:t.webkit)===null||e===void 0?void 0:e.messageHandlers)===null||s===void 0)&&s.bridge?"ios":"web"},pe=t=>{var e,s,o,n,r;const i=t.CapacitorCustomPlatform||null,a=t.Capacitor||{},f=a.Plugins=a.Plugins||{},l=t.CapacitorPlatforms,I=()=>i!==null?i.name:ge(t),P=((e=l==null?void 0:l.currentPlatform)===null||e===void 0?void 0:e.getPlatform)||I,C=()=>P()!=="web",N=((s=l==null?void 0:l.currentPlatform)===null||s===void 0?void 0:s.isNativePlatform)||C,Y=c=>{const d=x.get(c);return!!(d!=null&&d.platforms.has(P())||R(c))},ee=((o=l==null?void 0:l.currentPlatform)===null||o===void 0?void 0:o.isPluginAvailable)||Y,te=c=>{var d;return(d=a.PluginHeaders)===null||d===void 0?void 0:d.find(L=>L.name===c)},R=((n=l==null?void 0:l.currentPlatform)===null||n===void 0?void 0:n.getPluginHeader)||te,se=c=>t.console.error(c),oe=(c,d,L)=>Promise.reject(`${L} does not have an implementation of "${d}".`),x=new Map,re=(c,d={})=>{const L=x.get(c);if(L)return console.warn(`Capacitor plugin "${c}" already registered. Cannot register plugins twice.`),L.proxy;const y=P(),j=R(c);let w;const ae=async()=>(!w&&y in d?w=typeof d[y]=="function"?w=await d[y]():w=d[y]:i!==null&&!w&&"web"in d&&(w=typeof d.web=="function"?w=await d.web():w=d.web),w),ie=(u,g)=>{var h,b;if(j){const v=j==null?void 0:j.methods.find(m=>g===m.name);if(v)return v.rtype==="promise"?m=>a.nativePromise(c,g.toString(),m):(m,O)=>a.nativeCallback(c,g.toString(),m,O);if(u)return(h=u[g])===null||h===void 0?void 0:h.bind(u)}else{if(u)return(b=u[g])===null||b===void 0?void 0:b.bind(u);throw new B(`"${c}" plugin is not implemented on ${y}`,_.Unimplemented)}},M=u=>{let g;const h=(...b)=>{const v=ae().then(m=>{const O=ie(m,u);if(O){const $=O(...b);return g=$==null?void 0:$.remove,$}else throw new B(`"${c}.${u}()" is not implemented on ${y}`,_.Unimplemented)});return u==="addListener"&&(v.remove=async()=>g()),v};return h.toString=()=>`${u.toString()}() { [capacitor code] }`,Object.defineProperty(h,"name",{value:u,writable:!1,configurable:!1}),h},z=M("addListener"),J=M("removeListener"),le=(u,g)=>{const h=z({eventName:u},g),b=async()=>{const m=await h;J({eventName:u,callbackId:m},g)},v=new Promise(m=>h.then(()=>m({remove:b})));return v.remove=async()=>{console.warn("Using addListener() without 'await' is deprecated."),await b()},v},W=new Proxy({},{get(u,g){switch(g){case"$$typeof":return;case"toJSON":return()=>({});case"addListener":return j?le:z;case"removeListener":return J;default:return M(g)}}});return f[c]=W,x.set(c,{name:c,proxy:W,platforms:new Set([...Object.keys(d),...j?[y]:[]])}),W},ne=((r=l==null?void 0:l.currentPlatform)===null||r===void 0?void 0:r.registerPlugin)||re;return a.convertFileSrc||(a.convertFileSrc=c=>c),a.getPlatform=P,a.handleError=se,a.isNativePlatform=N,a.isPluginAvailable=ee,a.pluginMethodNoop=oe,a.registerPlugin=ne,a.Exception=B,a.DEBUG=!!a.DEBUG,a.isLoggingEnabled=!!a.isLoggingEnabled,a.platform=a.getPlatform(),a.isNative=a.isNativePlatform(),a},me=t=>t.Capacitor=pe(t),S=me(typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{}),D=S.registerPlugin;S.Plugins;class X{constructor(e){this.listeners={},this.retainedEventArguments={},this.windowListeners={},e&&(console.warn(`Capacitor WebPlugin "${e.name}" config object was deprecated in v3 and will be removed in v4.`),this.config=e)}addListener(e,s){let o=!1;this.listeners[e]||(this.listeners[e]=[],o=!0),this.listeners[e].push(s);const r=this.windowListeners[e];r&&!r.registered&&this.addWindowListener(r),o&&this.sendRetainedArgumentsForEvent(e);const i=async()=>this.removeListener(e,s);return Promise.resolve({remove:i})}async removeAllListeners(){this.listeners={};for(const e in this.windowListeners)this.removeWindowListener(this.windowListeners[e]);this.windowListeners={}}notifyListeners(e,s,o){const n=this.listeners[e];if(!n){if(o){let r=this.retainedEventArguments[e];r||(r=[]),r.push(s),this.retainedEventArguments[e]=r}return}n.forEach(r=>r(s))}hasListeners(e){return!!this.listeners[e].length}registerWindowListener(e,s){this.windowListeners[s]={registered:!1,windowEventName:e,pluginEventName:s,handler:o=>{this.notifyListeners(s,o)}}}unimplemented(e="not implemented"){return new S.Exception(e,_.Unimplemented)}unavailable(e="not available"){return new S.Exception(e,_.Unavailable)}async removeListener(e,s){const o=this.listeners[e];if(!o)return;const n=o.indexOf(s);this.listeners[e].splice(n,1),this.listeners[e].length||this.removeWindowListener(this.windowListeners[e])}addWindowListener(e){window.addEventListener(e.windowEventName,e.handler),e.registered=!0}removeWindowListener(e){e&&(window.removeEventListener(e.windowEventName,e.handler),e.registered=!1)}sendRetainedArgumentsForEvent(e){const s=this.retainedEventArguments[e];s&&(delete this.retainedEventArguments[e],s.forEach(o=>{this.notifyListeners(e,o)}))}}const K=t=>encodeURIComponent(t).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape),V=t=>t.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent);class he extends X{async getCookies(){const e=document.cookie,s={};return e.split(";").forEach(o=>{if(o.length<=0)return;let[n,r]=o.replace(/=/,"CAP_COOKIE").split("CAP_COOKIE");n=V(n).trim(),r=V(r).trim(),s[n]=r}),s}async setCookie(e){try{const s=K(e.key),o=K(e.value),n=`; expires=${(e.expires||"").replace("expires=","")}`,r=(e.path||"/").replace("path=",""),i=e.url!=null&&e.url.length>0?`domain=${e.url}`:"";document.cookie=`${s}=${o||""}${n}; path=${r}; ${i};`}catch(s){return Promise.reject(s)}}async deleteCookie(e){try{document.cookie=`${e.key}=; Max-Age=0`}catch(s){return Promise.reject(s)}}async clearCookies(){try{const e=document.cookie.split(";")||[];for(const s of e)document.cookie=s.replace(/^ +/,"").replace(/=.*/,`=;expires=${new Date().toUTCString()};path=/`)}catch(e){return Promise.reject(e)}}async clearAllCookies(){try{await this.clearCookies()}catch(e){return Promise.reject(e)}}}D("CapacitorCookies",{web:()=>new he});const we=async t=>new Promise((e,s)=>{const o=new FileReader;o.onload=()=>{const n=o.result;e(n.indexOf(",")>=0?n.split(",")[1]:n)},o.onerror=n=>s(n),o.readAsDataURL(t)}),be=(t={})=>{const e=Object.keys(t);return Object.keys(t).map(n=>n.toLocaleLowerCase()).reduce((n,r,i)=>(n[r]=t[e[i]],n),{})},ve=(t,e=!0)=>t?Object.entries(t).reduce((o,n)=>{const[r,i]=n;let a,f;return Array.isArray(i)?(f="",i.forEach(l=>{a=e?encodeURIComponent(l):l,f+=`${r}=${a}&`}),f.slice(0,-1)):(a=e?encodeURIComponent(i):i,f=`${r}=${a}`),`${o}&${f}`},"").substr(1):null,ye=(t,e={})=>{const s=Object.assign({method:t.method||"GET",headers:t.headers},e),n=be(t.headers)["content-type"]||"";if(typeof t.data=="string")s.body=t.data;else if(n.includes("application/x-www-form-urlencoded")){const r=new URLSearchParams;for(const[i,a]of Object.entries(t.data||{}))r.set(i,a);s.body=r.toString()}else if(n.includes("multipart/form-data")||t.data instanceof FormData){const r=new FormData;if(t.data instanceof FormData)t.data.forEach((a,f)=>{r.append(f,a)});else for(const a of Object.keys(t.data))r.append(a,t.data[a]);s.body=r;const i=new Headers(s.headers);i.delete("content-type"),s.headers=i}else(n.includes("application/json")||typeof t.data=="object")&&(s.body=JSON.stringify(t.data));return s};class Pe extends X{async request(e){const s=ye(e,e.webFetchExtra),o=ve(e.params,e.shouldEncodeUrlParams),n=o?`${e.url}?${o}`:e.url,r=await fetch(n,s),i=r.headers.get("content-type")||"";let{responseType:a="text"}=r.ok?e:{};i.includes("application/json")&&(a="json");let f,l;switch(a){case"arraybuffer":case"blob":l=await r.blob(),f=await we(l);break;case"json":f=await r.json();break;case"document":case"text":default:f=await r.text()}const I={};return r.headers.forEach((P,C)=>{I[C]=P}),{data:f,headers:I,status:r.status,url:r.url}}async get(e){return this.request(Object.assign(Object.assign({},e),{method:"GET"}))}async post(e){return this.request(Object.assign(Object.assign({},e),{method:"POST"}))}async put(e){return this.request(Object.assign(Object.assign({},e),{method:"PUT"}))}async patch(e){return this.request(Object.assign(Object.assign({},e),{method:"PATCH"}))}async delete(e){return this.request(Object.assign(Object.assign({},e),{method:"DELETE"}))}}D("CapacitorHttp",{web:()=>new Pe});const E=D("SocialLogin",{web:()=>ce(()=>import("./web.DbQBdXMW.js"),[],import.meta.url).then(t=>new t.SocialLoginWeb)}),Le="https://basemap.surflux.studio/geoserver",$e=`${Le}/gwc/service/tms/1.0.0/bluedot:base_building@EPSG%3A900913@pbf/{z}/{x}/{-y}.pbf`,ke="https://bluedot-subway.s3.ap-northeast-2.amazonaws.com/base_subway_railway_900913_241127.json",Ae="https://bluedot-subway.s3.ap-northeast-2.amazonaws.com/base_subway_station_900913_241127.json",Ue="https://bluedot-subway.s3.ap-northeast-2.amazonaws.com/base_subway_entrance_900913_241127.json";var Z=(t=>(t[t.MobileS=320]="MobileS",t[t.MobileM=375]="MobileM",t[t.MobileL=425]="MobileL",t[t.Tablet=768]="Tablet",t[t.Laptop=1024]="Laptop",t[t.LaptopL=1440]="LaptopL",t[t.FourK=2560]="FourK",t))(Z||{});const U="https://api.bluedot.land",Ce="https://d1egcbbnpo4gtd.cloudfront.net",xe={public:"공개",follower:"팔로워 공개",private:"비공개"},Me={owner:"소유자",manager:"관리 권한",writer:"편집 권한",reader:"읽기 권한",none:"권한 없음"};function je(t){return{all:t=t||new Map,on:function(e,s){var o=t.get(e);o?o.push(s):t.set(e,[s])},off:function(e,s){var o=t.get(e);o&&(s?o.splice(o.indexOf(s)>>>0,1):t.set(e,[]))},emit:function(e,s){var o=t.get(e);o&&o.slice().map(function(n){n(s)}),(o=t.get("*"))&&o.slice().map(function(n){n(e,s)})}}}const F=je(),We=p(void 0),Be=p(Z.MobileM),Fe=p([]),Te=p(""),De=p(""),Ee=p(!1),qe=p([]),He=p([]),T=p(!1),Ge=p(!1),Re=p([]),ze=p(!1),k=S.getPlatform();async function Je(){E.initialize({google:{iOSClientId:"298551622119-6r1e3ji2e6vdioqarf2pg3g6brvd47od.apps.googleusercontent.com",webClientId:"298551622119-gg1fqk381om4384l71ju7ip4857cqbh1.apps.googleusercontent.com"},apple:{}})}async function Ke(){var t;if(k==="ios"||k==="android"){const s=(await E.login({provider:"google",options:{scopes:["email","profile"]}})).result,n=await(await fetch(`${U}/auth/social/user`,{method:"POST",body:JSON.stringify({name:s.profile.name,email:s.profile.email,picture:s.profile.imageUrl,provider:"google"})})).json();if(!((t=n==null?void 0:n.data)!=null&&t.access))throw F.emit("pushSnackbar",{message:"로그인에 실패했습니다."}),Error("Failed to sign in");const r=n.data.access;H(r)}else if(k==="web"){const e="298551622119-gg1fqk381om4384l71ju7ip4857cqbh1.apps.googleusercontent.com",s=`${U}/auth/oauth/google`,o="email profile",n="code",r=encodeURIComponent(window.location.href),i=`https://accounts.google.com/o/oauth2/v2/auth?response_type=${n}&client_id=${e}&redirect_uri=${s}&scope=${o}&state=${r}`;location.replace(i)}else throw Error("Not supported platform")}async function Ve(){var a;if(k!=="ios")return;const e=(await E.login({provider:"apple",options:{}})).result;let s=e.profile.givenName??"";e.profile.familyName&&(s+=(s?" ":"")+e.profile.familyName);let o=e.profile.email;if(!o)return F.emit("pushSnackbar",{message:"로그인에 실패했습니다."});const r=await(await fetch(`${U}/auth/social/user`,{method:"POST",body:JSON.stringify({name:s,email:o,provider:"apple"})})).json();if(!((a=r==null?void 0:r.data)!=null&&a.access))throw F.emit("pushSnackbar",{message:"로그인에 실패했습니다."}),Error("Failed to sign in");const i=r.data.access;H(i)}function Qe(){localStorage.removeItem("jwt"),localStorage.removeItem("saveSignLocal"),sessionStorage.removeItem("jwt")}function q(){try{const t=sessionStorage.getItem("jwt")||localStorage.getItem("jwt")||null;if(!t)throw new Error("jwt not found");if(de(T)===!0&&!window.location.pathname.startsWith("/users/sign-up/")&&!window.location.pathname.startsWith("/tp/"))return console.log("A"),A("/users/sign-up/agreement"),null;const e=G(t);if(e.exp&&Math.floor(Date.now()/1e3)>e.exp)throw new Error("jwt expired");return e.sig===!1&&!window.location.pathname.startsWith("/users/sign-up")&&!window.location.pathname.startsWith("/tp")?(T.set(!0),console.log("B"),A("/users/sign-up/agreement"),null):t}catch(t){return console.warn(t),localStorage.removeItem("jwt"),sessionStorage.removeItem("jwt"),null}}function _e(){const t=q();return t?G(t):null}function Xe(){const t=_e();return t?BigInt(t.sub):null}function H(t){localStorage.getItem("saveSignLocal")==="true"&&localStorage.setItem("jwt",t),sessionStorage.setItem("jwt",t)}async function Ze(t){const e=t.searchParams.get("access");if(e){H(e);const s=G(e).sig;if(t.searchParams.delete("access"),t.searchParams.delete("refresh"),s===!1){T.set(!0),await A("/users/sign-up/agreement");return}await A(t.toString(),{replaceState:!0,invalidateAll:!1})}}function G(t){const s=t.split(".")[1].replace(/-/g,"+").replace(/_/g,"/"),o=decodeURIComponent(atob(s).split("").map(function(n){return"%"+("00"+n.charCodeAt(0).toString(16)).slice(-2)}).join(""));return JSON.parse(o)}function Ne(){return q()!==null}async function Ye(t){return(await(await fetch(`${U}/auth/users/${t}`,{headers:{Authorization:`Bearer ${q()}`}})).json()).data}export{U as A,Ve as B,S as C,Je as D,We as E,ke as F,Ae as G,Ue as H,Le as I,$e as P,Z as S,X as W,Re as a,Xe as b,T as c,Ge as d,F as e,H as f,q as g,qe as h,Ne as i,ze as j,xe as k,_e as l,Fe as m,De as n,Te as o,Ce as p,Me as q,D as r,He as s,Ye as t,Ee as u,Qe as v,B as w,Ze as x,Be as y,Ke as z};
