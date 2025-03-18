import{_ as ee}from"./preload-helper.D6kgxu3v.js";/*! Capacitor: https://capacitorjs.com/ - MIT License */const te=t=>{const e=new Map;e.set("web",{name:"web"});const r=t.CapacitorPlatforms||{currentPlatform:{name:"web"},platforms:e},n=(s,a)=>{r.platforms.set(s,a)},i=s=>{r.platforms.has(s)&&(r.currentPlatform=r.platforms.get(s))};return r.addPlatform=n,r.setPlatform=i,r},re=t=>t.CapacitorPlatforms=te(t),F=re(typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});F.addPlatform;F.setPlatform;var E;(function(t){t.Unimplemented="UNIMPLEMENTED",t.Unavailable="UNAVAILABLE"})(E||(E={}));class D extends Error{constructor(e,r,n){super(e),this.message=e,this.code=r,this.data=n}}const ne=t=>{var e,r;return t!=null&&t.androidBridge?"android":!((r=(e=t==null?void 0:t.webkit)===null||e===void 0?void 0:e.messageHandlers)===null||r===void 0)&&r.bridge?"ios":"web"},se=t=>{var e,r,n,i,s;const a=t.CapacitorCustomPlatform||null,o=t.Capacitor||{},f=o.Plugins=o.Plugins||{},l=t.CapacitorPlatforms,O=()=>a!==null?a.name:ne(t),P=((e=l==null?void 0:l.currentPlatform)===null||e===void 0?void 0:e.getPlatform)||O,j=()=>P()!=="web",B=((r=l==null?void 0:l.currentPlatform)===null||r===void 0?void 0:r.isNativePlatform)||j,G=c=>{const d=U.get(c);return!!(d!=null&&d.platforms.has(P())||H(c))},K=((n=l==null?void 0:l.currentPlatform)===null||n===void 0?void 0:n.isPluginAvailable)||G,V=c=>{var d;return(d=o.PluginHeaders)===null||d===void 0?void 0:d.find(y=>y.name===c)},H=((i=l==null?void 0:l.currentPlatform)===null||i===void 0?void 0:i.getPluginHeader)||V,z=c=>t.console.error(c),J=(c,d,y)=>Promise.reject(`${y} does not have an implementation of "${d}".`),U=new Map,Q=(c,d={})=>{const y=U.get(c);if(y)return console.warn(`Capacitor plugin "${c}" already registered. Cannot register plugins twice.`),y.proxy;const b=P(),L=H(c);let v;const Y=async()=>(!v&&b in d?v=typeof d[b]=="function"?v=await d[b]():v=d[b]:a!==null&&!v&&"web"in d&&(v=typeof d.web=="function"?v=await d.web():v=d.web),v),Z=(u,m)=>{var h,p;if(L){const w=L==null?void 0:L.methods.find(g=>m===g.name);if(w)return w.rtype==="promise"?g=>o.nativePromise(c,m.toString(),g):(g,$)=>o.nativeCallback(c,m.toString(),g,$);if(u)return(h=u[m])===null||h===void 0?void 0:h.bind(u)}else{if(u)return(p=u[m])===null||p===void 0?void 0:p.bind(u);throw new D(`"${c}" plugin is not implemented on ${b}`,E.Unimplemented)}},_=u=>{let m;const h=(...p)=>{const w=Y().then(g=>{const $=Z(g,u);if($){const x=$(...p);return m=x==null?void 0:x.remove,x}else throw new D(`"${c}.${u}()" is not implemented on ${b}`,E.Unimplemented)});return u==="addListener"&&(w.remove=async()=>m()),w};return h.toString=()=>`${u.toString()}() { [capacitor code] }`,Object.defineProperty(h,"name",{value:u,writable:!1,configurable:!1}),h},I=_("addListener"),M=_("removeListener"),N=(u,m)=>{const h=I({eventName:u},m),p=async()=>{const g=await h;M({eventName:u,callbackId:g},m)},w=new Promise(g=>h.then(()=>g({remove:p})));return w.remove=async()=>{console.warn("Using addListener() without 'await' is deprecated."),await p()},w},T=new Proxy({},{get(u,m){switch(m){case"$$typeof":return;case"toJSON":return()=>({});case"addListener":return L?N:I;case"removeListener":return M;default:return _(m)}}});return f[c]=T,U.set(c,{name:c,proxy:T,platforms:new Set([...Object.keys(d),...L?[b]:[]])}),T},X=((s=l==null?void 0:l.currentPlatform)===null||s===void 0?void 0:s.registerPlugin)||Q;return o.convertFileSrc||(o.convertFileSrc=c=>c),o.getPlatform=P,o.handleError=z,o.isNativePlatform=B,o.isPluginAvailable=K,o.pluginMethodNoop=J,o.registerPlugin=X,o.Exception=D,o.DEBUG=!!o.DEBUG,o.isLoggingEnabled=!!o.isLoggingEnabled,o.platform=o.getPlatform(),o.isNative=o.isNativePlatform(),o},ie=t=>t.Capacitor=se(t),k=ie(typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{}),S=k.registerPlugin;k.Plugins;class q{constructor(e){this.listeners={},this.retainedEventArguments={},this.windowListeners={},e&&(console.warn(`Capacitor WebPlugin "${e.name}" config object was deprecated in v3 and will be removed in v4.`),this.config=e)}addListener(e,r){let n=!1;this.listeners[e]||(this.listeners[e]=[],n=!0),this.listeners[e].push(r);const s=this.windowListeners[e];s&&!s.registered&&this.addWindowListener(s),n&&this.sendRetainedArgumentsForEvent(e);const a=async()=>this.removeListener(e,r);return Promise.resolve({remove:a})}async removeAllListeners(){this.listeners={};for(const e in this.windowListeners)this.removeWindowListener(this.windowListeners[e]);this.windowListeners={}}notifyListeners(e,r,n){const i=this.listeners[e];if(!i){if(n){let s=this.retainedEventArguments[e];s||(s=[]),s.push(r),this.retainedEventArguments[e]=s}return}i.forEach(s=>s(r))}hasListeners(e){return!!this.listeners[e].length}registerWindowListener(e,r){this.windowListeners[r]={registered:!1,windowEventName:e,pluginEventName:r,handler:n=>{this.notifyListeners(r,n)}}}unimplemented(e="not implemented"){return new k.Exception(e,E.Unimplemented)}unavailable(e="not available"){return new k.Exception(e,E.Unavailable)}async removeListener(e,r){const n=this.listeners[e];if(!n)return;const i=n.indexOf(r);this.listeners[e].splice(i,1),this.listeners[e].length||this.removeWindowListener(this.windowListeners[e])}addWindowListener(e){window.addEventListener(e.windowEventName,e.handler),e.registered=!0}removeWindowListener(e){e&&(window.removeEventListener(e.windowEventName,e.handler),e.registered=!1)}sendRetainedArgumentsForEvent(e){const r=this.retainedEventArguments[e];r&&(delete this.retainedEventArguments[e],r.forEach(n=>{this.notifyListeners(e,n)}))}}const R=t=>encodeURIComponent(t).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape),W=t=>t.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent);class oe extends q{async getCookies(){const e=document.cookie,r={};return e.split(";").forEach(n=>{if(n.length<=0)return;let[i,s]=n.replace(/=/,"CAP_COOKIE").split("CAP_COOKIE");i=W(i).trim(),s=W(s).trim(),r[i]=s}),r}async setCookie(e){try{const r=R(e.key),n=R(e.value),i=`; expires=${(e.expires||"").replace("expires=","")}`,s=(e.path||"/").replace("path=",""),a=e.url!=null&&e.url.length>0?`domain=${e.url}`:"";document.cookie=`${r}=${n||""}${i}; path=${s}; ${a};`}catch(r){return Promise.reject(r)}}async deleteCookie(e){try{document.cookie=`${e.key}=; Max-Age=0`}catch(r){return Promise.reject(r)}}async clearCookies(){try{const e=document.cookie.split(";")||[];for(const r of e)document.cookie=r.replace(/^ +/,"").replace(/=.*/,`=;expires=${new Date().toUTCString()};path=/`)}catch(e){return Promise.reject(e)}}async clearAllCookies(){try{await this.clearCookies()}catch(e){return Promise.reject(e)}}}S("CapacitorCookies",{web:()=>new oe});const ae=async t=>new Promise((e,r)=>{const n=new FileReader;n.onload=()=>{const i=n.result;e(i.indexOf(",")>=0?i.split(",")[1]:i)},n.onerror=i=>r(i),n.readAsDataURL(t)}),le=(t={})=>{const e=Object.keys(t);return Object.keys(t).map(i=>i.toLocaleLowerCase()).reduce((i,s,a)=>(i[s]=t[e[a]],i),{})},ce=(t,e=!0)=>t?Object.entries(t).reduce((n,i)=>{const[s,a]=i;let o,f;return Array.isArray(a)?(f="",a.forEach(l=>{o=e?encodeURIComponent(l):l,f+=`${s}=${o}&`}),f.slice(0,-1)):(o=e?encodeURIComponent(a):a,f=`${s}=${o}`),`${n}&${f}`},"").substr(1):null,de=(t,e={})=>{const r=Object.assign({method:t.method||"GET",headers:t.headers},e),i=le(t.headers)["content-type"]||"";if(typeof t.data=="string")r.body=t.data;else if(i.includes("application/x-www-form-urlencoded")){const s=new URLSearchParams;for(const[a,o]of Object.entries(t.data||{}))s.set(a,o);r.body=s.toString()}else if(i.includes("multipart/form-data")||t.data instanceof FormData){const s=new FormData;if(t.data instanceof FormData)t.data.forEach((o,f)=>{s.append(f,o)});else for(const o of Object.keys(t.data))s.append(o,t.data[o]);r.body=s;const a=new Headers(r.headers);a.delete("content-type"),r.headers=a}else(i.includes("application/json")||typeof t.data=="object")&&(r.body=JSON.stringify(t.data));return r};class ue extends q{async request(e){const r=de(e,e.webFetchExtra),n=ce(e.params,e.shouldEncodeUrlParams),i=n?`${e.url}?${n}`:e.url,s=await fetch(i,r),a=s.headers.get("content-type")||"";let{responseType:o="text"}=s.ok?e:{};a.includes("application/json")&&(o="json");let f,l;switch(o){case"arraybuffer":case"blob":l=await s.blob(),f=await ae(l);break;case"json":f=await s.json();break;case"document":case"text":default:f=await s.text()}const O={};return s.headers.forEach((P,j)=>{O[j]=P}),{data:f,headers:O,status:s.status,url:s.url}}async get(e){return this.request(Object.assign(Object.assign({},e),{method:"GET"}))}async post(e){return this.request(Object.assign(Object.assign({},e),{method:"POST"}))}async put(e){return this.request(Object.assign(Object.assign({},e),{method:"PUT"}))}async patch(e){return this.request(Object.assign(Object.assign({},e),{method:"PATCH"}))}async delete(e){return this.request(Object.assign(Object.assign({},e),{method:"DELETE"}))}}S("CapacitorHttp",{web:()=>new ue});const fe=S("Device",{web:()=>ee(()=>import("./web.CP939ICM.js"),[],import.meta.url).then(t=>new t.DeviceWeb)}),me=k.isNativePlatform();let A;async function ge(){return A||(A=await fe.getInfo(),A)}let C;async function pe(){if(C)return C;if(me)C="mobile";else{const t=await ge();["ios","android"].includes(t.operatingSystem)?C="mobile":C="pc"}return C}function he(t){return{all:t=t||new Map,on:function(e,r){var n=t.get(e);n?n.push(r):t.set(e,[r])},off:function(e,r){var n=t.get(e);n&&(r?n.splice(n.indexOf(r)>>>0,1):t.set(e,[]))},emit:function(e,r){var n=t.get(e);n&&n.slice().map(function(i){i(r)}),(n=t.get("*"))&&n.slice().map(function(i){i(e,r)})}}}const we=he();export{k as C,q as W,D as a,we as e,pe as g,me as i,S as r};
