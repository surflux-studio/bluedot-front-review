import{_ as q}from"./preload-helper.D6kgxu3v.js";import{g as re}from"./entry.Cn8bzhtR.js";/*! Capacitor: https://capacitorjs.com/ - MIT License */const ne=t=>{const e=new Map;e.set("web",{name:"web"});const r=t.CapacitorPlatforms||{currentPlatform:{name:"web"},platforms:e},o=(n,a)=>{r.platforms.set(n,a)},i=n=>{r.platforms.has(n)&&(r.currentPlatform=r.platforms.get(n))};return r.addPlatform=o,r.setPlatform=i,r},se=t=>t.CapacitorPlatforms=ne(t),B=se(typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});B.addPlatform;B.setPlatform;var k;(function(t){t.Unimplemented="UNIMPLEMENTED",t.Unavailable="UNAVAILABLE"})(k||(k={}));class R extends Error{constructor(e,r,o){super(e),this.message=e,this.code=r,this.data=o}}const oe=t=>{var e,r;return t!=null&&t.androidBridge?"android":!((r=(e=t==null?void 0:t.webkit)===null||e===void 0?void 0:e.messageHandlers)===null||r===void 0)&&r.bridge?"ios":"web"},ie=t=>{var e,r,o,i,n;const a=t.CapacitorCustomPlatform||null,s=t.Capacitor||{},f=s.Plugins=s.Plugins||{},l=t.CapacitorPlatforms,O=()=>a!==null?a.name:oe(t),P=((e=l==null?void 0:l.currentPlatform)===null||e===void 0?void 0:e.getPlatform)||O,j=()=>P()!=="web",K=((r=l==null?void 0:l.currentPlatform)===null||r===void 0?void 0:r.isNativePlatform)||j,V=c=>{const d=T.get(c);return!!(d!=null&&d.platforms.has(P())||I(c))},z=((o=l==null?void 0:l.currentPlatform)===null||o===void 0?void 0:o.isPluginAvailable)||V,J=c=>{var d;return(d=s.PluginHeaders)===null||d===void 0?void 0:d.find(y=>y.name===c)},I=((i=l==null?void 0:l.currentPlatform)===null||i===void 0?void 0:i.getPluginHeader)||J,Q=c=>t.console.error(c),X=(c,d,y)=>Promise.reject(`${y} does not have an implementation of "${d}".`),T=new Map,Y=(c,d={})=>{const y=T.get(c);if(y)return console.warn(`Capacitor plugin "${c}" already registered. Cannot register plugins twice.`),y.proxy;const b=P(),L=I(c);let p;const N=async()=>(!p&&b in d?p=typeof d[b]=="function"?p=await d[b]():p=d[b]:a!==null&&!p&&"web"in d&&(p=typeof d.web=="function"?p=await d.web():p=d.web),p),ee=(u,m)=>{var h,v;if(L){const w=L==null?void 0:L.methods.find(g=>m===g.name);if(w)return w.rtype==="promise"?g=>s.nativePromise(c,m.toString(),g):(g,$)=>s.nativeCallback(c,m.toString(),g,$);if(u)return(h=u[m])===null||h===void 0?void 0:h.bind(u)}else{if(u)return(v=u[m])===null||v===void 0?void 0:v.bind(u);throw new R(`"${c}" plugin is not implemented on ${b}`,k.Unimplemented)}},D=u=>{let m;const h=(...v)=>{const w=N().then(g=>{const $=ee(g,u);if($){const _=$(...v);return m=_==null?void 0:_.remove,_}else throw new R(`"${c}.${u}()" is not implemented on ${b}`,k.Unimplemented)});return u==="addListener"&&(w.remove=async()=>m()),w};return h.toString=()=>`${u.toString()}() { [capacitor code] }`,Object.defineProperty(h,"name",{value:u,writable:!1,configurable:!1}),h},W=D("addListener"),H=D("removeListener"),te=(u,m)=>{const h=W({eventName:u},m),v=async()=>{const g=await h;H({eventName:u,callbackId:g},m)},w=new Promise(g=>h.then(()=>g({remove:v})));return w.remove=async()=>{console.warn("Using addListener() without 'await' is deprecated."),await v()},w},S=new Proxy({},{get(u,m){switch(m){case"$$typeof":return;case"toJSON":return()=>({});case"addListener":return L?te:W;case"removeListener":return H;default:return D(m)}}});return f[c]=S,T.set(c,{name:c,proxy:S,platforms:new Set([...Object.keys(d),...L?[b]:[]])}),S},Z=((n=l==null?void 0:l.currentPlatform)===null||n===void 0?void 0:n.registerPlugin)||Y;return s.convertFileSrc||(s.convertFileSrc=c=>c),s.getPlatform=P,s.handleError=Q,s.isNativePlatform=K,s.isPluginAvailable=z,s.pluginMethodNoop=X,s.registerPlugin=Z,s.Exception=R,s.DEBUG=!!s.DEBUG,s.isLoggingEnabled=!!s.isLoggingEnabled,s.platform=s.getPlatform(),s.isNative=s.isNativePlatform(),s},ae=t=>t.Capacitor=ie(t),A=ae(typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{}),U=A.registerPlugin;A.Plugins;class G{constructor(e){this.listeners={},this.retainedEventArguments={},this.windowListeners={},e&&(console.warn(`Capacitor WebPlugin "${e.name}" config object was deprecated in v3 and will be removed in v4.`),this.config=e)}addListener(e,r){let o=!1;this.listeners[e]||(this.listeners[e]=[],o=!0),this.listeners[e].push(r);const n=this.windowListeners[e];n&&!n.registered&&this.addWindowListener(n),o&&this.sendRetainedArgumentsForEvent(e);const a=async()=>this.removeListener(e,r);return Promise.resolve({remove:a})}async removeAllListeners(){this.listeners={};for(const e in this.windowListeners)this.removeWindowListener(this.windowListeners[e]);this.windowListeners={}}notifyListeners(e,r,o){const i=this.listeners[e];if(!i){if(o){let n=this.retainedEventArguments[e];n||(n=[]),n.push(r),this.retainedEventArguments[e]=n}return}i.forEach(n=>n(r))}hasListeners(e){return!!this.listeners[e].length}registerWindowListener(e,r){this.windowListeners[r]={registered:!1,windowEventName:e,pluginEventName:r,handler:o=>{this.notifyListeners(r,o)}}}unimplemented(e="not implemented"){return new A.Exception(e,k.Unimplemented)}unavailable(e="not available"){return new A.Exception(e,k.Unavailable)}async removeListener(e,r){const o=this.listeners[e];if(!o)return;const i=o.indexOf(r);this.listeners[e].splice(i,1),this.listeners[e].length||this.removeWindowListener(this.windowListeners[e])}addWindowListener(e){window.addEventListener(e.windowEventName,e.handler),e.registered=!0}removeWindowListener(e){e&&(window.removeEventListener(e.windowEventName,e.handler),e.registered=!1)}sendRetainedArgumentsForEvent(e){const r=this.retainedEventArguments[e];r&&(delete this.retainedEventArguments[e],r.forEach(o=>{this.notifyListeners(e,o)}))}}const M=t=>encodeURIComponent(t).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape),F=t=>t.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent);class le extends G{async getCookies(){const e=document.cookie,r={};return e.split(";").forEach(o=>{if(o.length<=0)return;let[i,n]=o.replace(/=/,"CAP_COOKIE").split("CAP_COOKIE");i=F(i).trim(),n=F(n).trim(),r[i]=n}),r}async setCookie(e){try{const r=M(e.key),o=M(e.value),i=`; expires=${(e.expires||"").replace("expires=","")}`,n=(e.path||"/").replace("path=",""),a=e.url!=null&&e.url.length>0?`domain=${e.url}`:"";document.cookie=`${r}=${o||""}${i}; path=${n}; ${a};`}catch(r){return Promise.reject(r)}}async deleteCookie(e){try{document.cookie=`${e.key}=; Max-Age=0`}catch(r){return Promise.reject(r)}}async clearCookies(){try{const e=document.cookie.split(";")||[];for(const r of e)document.cookie=r.replace(/^ +/,"").replace(/=.*/,`=;expires=${new Date().toUTCString()};path=/`)}catch(e){return Promise.reject(e)}}async clearAllCookies(){try{await this.clearCookies()}catch(e){return Promise.reject(e)}}}U("CapacitorCookies",{web:()=>new le});const ce=async t=>new Promise((e,r)=>{const o=new FileReader;o.onload=()=>{const i=o.result;e(i.indexOf(",")>=0?i.split(",")[1]:i)},o.onerror=i=>r(i),o.readAsDataURL(t)}),de=(t={})=>{const e=Object.keys(t);return Object.keys(t).map(i=>i.toLocaleLowerCase()).reduce((i,n,a)=>(i[n]=t[e[a]],i),{})},ue=(t,e=!0)=>t?Object.entries(t).reduce((o,i)=>{const[n,a]=i;let s,f;return Array.isArray(a)?(f="",a.forEach(l=>{s=e?encodeURIComponent(l):l,f+=`${n}=${s}&`}),f.slice(0,-1)):(s=e?encodeURIComponent(a):a,f=`${n}=${s}`),`${o}&${f}`},"").substr(1):null,fe=(t,e={})=>{const r=Object.assign({method:t.method||"GET",headers:t.headers},e),i=de(t.headers)["content-type"]||"";if(typeof t.data=="string")r.body=t.data;else if(i.includes("application/x-www-form-urlencoded")){const n=new URLSearchParams;for(const[a,s]of Object.entries(t.data||{}))n.set(a,s);r.body=n.toString()}else if(i.includes("multipart/form-data")||t.data instanceof FormData){const n=new FormData;if(t.data instanceof FormData)t.data.forEach((s,f)=>{n.append(f,s)});else for(const s of Object.keys(t.data))n.append(s,t.data[s]);r.body=n;const a=new Headers(r.headers);a.delete("content-type"),r.headers=a}else(i.includes("application/json")||typeof t.data=="object")&&(r.body=JSON.stringify(t.data));return r};class me extends G{async request(e){const r=fe(e,e.webFetchExtra),o=ue(e.params,e.shouldEncodeUrlParams),i=o?`${e.url}?${o}`:e.url,n=await fetch(i,r),a=n.headers.get("content-type")||"";let{responseType:s="text"}=n.ok?e:{};a.includes("application/json")&&(s="json");let f,l;switch(s){case"arraybuffer":case"blob":l=await n.blob(),f=await ce(l);break;case"json":f=await n.json();break;case"document":case"text":default:f=await n.text()}const O={};return n.headers.forEach((P,j)=>{O[j]=P}),{data:f,headers:O,status:n.status,url:n.url}}async get(e){return this.request(Object.assign(Object.assign({},e),{method:"GET"}))}async post(e){return this.request(Object.assign(Object.assign({},e),{method:"POST"}))}async put(e){return this.request(Object.assign(Object.assign({},e),{method:"PUT"}))}async patch(e){return this.request(Object.assign(Object.assign({},e),{method:"PATCH"}))}async delete(e){return this.request(Object.assign(Object.assign({},e),{method:"DELETE"}))}}U("CapacitorHttp",{web:()=>new me});const ge=U("Device",{web:()=>q(()=>import("./web.Cb25gGuC.js"),[],import.meta.url).then(t=>new t.DeviceWeb)}),he=U("App",{web:()=>q(()=>import("./web.DSvZNV5a.js"),[],import.meta.url).then(t=>new t.AppWeb)}),pe=A.isNativePlatform();let x;async function ve(){return x||(x=await ge.getInfo(),x)}let C;async function Pe(){if(C)return C;if(pe)C="mobile";else{const t=await ve();["ios","android"].includes(t.operatingSystem)?C="mobile":C="pc"}return C}let E;async function ye(){E||(E=await he.addListener("appUrlOpen",t=>{const e=new URL(t.url),r=`${e.pathname}${e.search}`;re(r,{replaceState:!0,invalidateAll:!0}),E==null||E.remove(),E=void 0}))}export{A as C,G as W,R as a,ye as c,Pe as g,pe as i,U as r};
