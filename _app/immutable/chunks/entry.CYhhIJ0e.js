import{n as gt,s as he,T as pe}from"./scheduler.CbwPF6wx.js";new URL("sveltekit-internal://");function ge(t,n){return t==="/"||n==="ignore"?t:n==="never"?t.endsWith("/")?t.slice(0,-1):t:n==="always"&&!t.endsWith("/")?t+"/":t}function me(t){return t.split("%25").map(decodeURI).join("%25")}function _e(t){for(const n in t)t[n]=decodeURIComponent(t[n]);return t}function mt({href:t}){return t.split("#")[0]}const ye=["href","pathname","search","toString","toJSON"];function we(t,n,e){const r=new URL(t);Object.defineProperty(r,"searchParams",{value:new Proxy(r.searchParams,{get(a,o){if(o==="get"||o==="getAll"||o==="has")return s=>(e(s),a[o](s));n();const i=Reflect.get(a,o);return typeof i=="function"?i.bind(a):i}}),enumerable:!0,configurable:!0});for(const a of ye)Object.defineProperty(r,a,{get(){return n(),t[a]},enumerable:!0,configurable:!0});return r}const ve="/__data.json",be=".html__data.json";function ke(t){return t.endsWith(".html")?t.replace(/\.html$/,be):t.replace(/\/$/,"")+ve}function Ee(...t){let n=5381;for(const e of t)if(typeof e=="string"){let r=e.length;for(;r;)n=n*33^e.charCodeAt(--r)}else if(ArrayBuffer.isView(e)){const r=new Uint8Array(e.buffer,e.byteOffset,e.byteLength);let a=r.length;for(;a;)n=n*33^r[--a]}else throw new TypeError("value must be a string or TypedArray");return(n>>>0).toString(36)}function Se(t){const n=atob(t),e=new Uint8Array(n.length);for(let r=0;r<n.length;r++)e[r]=n.charCodeAt(r);return e.buffer}const zt=window.fetch;window.fetch=(t,n)=>((t instanceof Request?t.method:(n==null?void 0:n.method)||"GET")!=="GET"&&B.delete(Et(t)),zt(t,n));const B=new Map;function Ae(t,n){const e=Et(t,n),r=document.querySelector(e);if(r!=null&&r.textContent){let{body:a,...o}=JSON.parse(r.textContent);const i=r.getAttribute("data-ttl");return i&&B.set(e,{body:a,init:o,ttl:1e3*Number(i)}),r.getAttribute("data-b64")!==null&&(a=Se(a)),Promise.resolve(new Response(a,o))}return window.fetch(t,n)}function Re(t,n,e){if(B.size>0){const r=Et(t,e),a=B.get(r);if(a){if(performance.now()<a.ttl&&["default","force-cache","only-if-cached",void 0].includes(e==null?void 0:e.cache))return new Response(a.body,a.init);B.delete(r)}}return window.fetch(n,e)}function Et(t,n){let r=`script[data-sveltekit-fetched][data-url=${JSON.stringify(t instanceof Request?t.url:t)}]`;if(n!=null&&n.headers||n!=null&&n.body){const a=[];n.headers&&a.push([...new Headers(n.headers)].join(",")),n.body&&(typeof n.body=="string"||ArrayBuffer.isView(n.body))&&a.push(n.body),r+=`[data-hash="${Ee(...a)}"]`}return r}const Ie=/^(\[)?(\.\.\.)?(\w+)(?:=(\w+))?(\])?$/;function Le(t){const n=[];return{pattern:t==="/"?/^\/$/:new RegExp(`^${Te(t).map(r=>{const a=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(r);if(a)return n.push({name:a[1],matcher:a[2],optional:!1,rest:!0,chained:!0}),"(?:/(.*))?";const o=/^\[\[(\w+)(?:=(\w+))?\]\]$/.exec(r);if(o)return n.push({name:o[1],matcher:o[2],optional:!0,rest:!1,chained:!0}),"(?:/([^/]+))?";if(!r)return;const i=r.split(/\[(.+?)\](?!\])/);return"/"+i.map((c,l)=>{if(l%2){if(c.startsWith("x+"))return _t(String.fromCharCode(parseInt(c.slice(2),16)));if(c.startsWith("u+"))return _t(String.fromCharCode(...c.slice(2).split("-").map(f=>parseInt(f,16))));const u=Ie.exec(c),[,h,g,d,_]=u;return n.push({name:d,matcher:_,optional:!!h,rest:!!g,chained:g?l===1&&i[0]==="":!1}),g?"(.*?)":h?"([^/]*)?":"([^/]+?)"}return _t(c)}).join("")}).join("")}/?$`),params:n}}function Pe(t){return!/^\([^)]+\)$/.test(t)}function Te(t){return t.slice(1).split("/").filter(Pe)}function Ue(t,n,e){const r={},a=t.slice(1),o=a.filter(s=>s!==void 0);let i=0;for(let s=0;s<n.length;s+=1){const c=n[s];let l=a[s-i];if(c.chained&&c.rest&&i&&(l=a.slice(s-i,s+1).filter(u=>u).join("/"),i=0),l===void 0){c.rest&&(r[c.name]="");continue}if(!c.matcher||e[c.matcher](l)){r[c.name]=l;const u=n[s+1],h=a[s+1];u&&!u.rest&&u.optional&&h&&c.chained&&(i=0),!u&&!h&&Object.keys(r).length===o.length&&(i=0);continue}if(c.optional&&c.chained){i++;continue}return}if(!i)return r}function _t(t){return t.normalize().replace(/[[\]]/g,"\\$&").replace(/%/g,"%25").replace(/\//g,"%2[Ff]").replace(/\?/g,"%3[Ff]").replace(/#/g,"%23").replace(/[.*+?^${}()|\\]/g,"\\$&")}function xe({nodes:t,server_loads:n,dictionary:e,matchers:r}){const a=new Set(n);return Object.entries(e).map(([s,[c,l,u]])=>{const{pattern:h,params:g}=Le(s),d={id:s,exec:_=>{const f=h.exec(_);if(f)return Ue(f,g,r)},errors:[1,...u||[]].map(_=>t[_]),layouts:[0,...l||[]].map(i),leaf:o(c)};return d.errors.length=d.layouts.length=Math.max(d.errors.length,d.layouts.length),d});function o(s){const c=s<0;return c&&(s=~s),[c,t[s]]}function i(s){return s===void 0?s:[a.has(s),t[s]]}}function Yt(t,n=JSON.parse){try{return n(sessionStorage[t])}catch{}}function Dt(t,n,e=JSON.stringify){const r=e(n);try{sessionStorage[t]=r}catch{}}const $=[];function St(t,n=gt){let e;const r=new Set;function a(s){if(he(t,s)&&(t=s,e)){const c=!$.length;for(const l of r)l[1](),$.push(l,t);if(c){for(let l=0;l<$.length;l+=2)$[l][0]($[l+1]);$.length=0}}}function o(s){a(s(t))}function i(s,c=gt){const l=[s,c];return r.add(l),r.size===1&&(e=n(a,o)||gt),s(t),()=>{r.delete(l),r.size===0&&e&&(e(),e=null)}}return{set:a,update:o,subscribe:i}}var Bt;const P=((Bt=globalThis.__sveltekit_wkn6eu)==null?void 0:Bt.base)??"";var Kt;const Ne=((Kt=globalThis.__sveltekit_wkn6eu)==null?void 0:Kt.assets)??P,Oe="1742276996226",Jt="sveltekit:snapshot",Wt="sveltekit:scroll",ot="sveltekit:states",At="sveltekit:pageurl",U="sveltekit:history",O="sveltekit:navigation",X={tap:1,hover:2,viewport:3,eager:4,off:-1,false:-1},J=location.origin;function st(t){if(t instanceof URL)return t;let n=document.baseURI;if(!n){const e=document.getElementsByTagName("base");n=e.length?e[0].href:document.URL}return new URL(t,n)}function Rt(){return{x:pageXOffset,y:pageYOffset}}function D(t,n){return t.getAttribute(`data-sveltekit-${n}`)}const Ct={...X,"":X.hover};function Xt(t){let n=t.assignedSlot??t.parentNode;return(n==null?void 0:n.nodeType)===11&&(n=n.host),n}function Zt(t,n){for(;t&&t!==n;){if(t.nodeName.toUpperCase()==="A"&&t.hasAttribute("href"))return t;t=Xt(t)}}function vt(t,n){let e;try{e=new URL(t instanceof SVGAElement?t.href.baseVal:t.href,document.baseURI)}catch{}const r=t instanceof SVGAElement?t.target.baseVal:t.target,a=!e||!!r||it(e,n)||(t.getAttribute("rel")||"").split(/\s+/).includes("external"),o=(e==null?void 0:e.origin)===J&&t.hasAttribute("download");return{url:e,external:a,target:r,download:o}}function Z(t){let n=null,e=null,r=null,a=null,o=null,i=null,s=t;for(;s&&s!==document.documentElement;)r===null&&(r=D(s,"preload-code")),a===null&&(a=D(s,"preload-data")),n===null&&(n=D(s,"keepfocus")),e===null&&(e=D(s,"noscroll")),o===null&&(o=D(s,"reload")),i===null&&(i=D(s,"replacestate")),s=Xt(s);function c(l){switch(l){case"":case"true":return!0;case"off":case"false":return!1;default:return}}return{preload_code:Ct[r??"off"],preload_data:Ct[a??"off"],keepfocus:c(n),noscroll:c(e),reload:c(o),replace_state:c(i)}}function Vt(t){const n=St(t);let e=!0;function r(){e=!0,n.update(i=>i)}function a(i){e=!1,n.set(i)}function o(i){let s;return n.subscribe(c=>{(s===void 0||e&&c!==s)&&i(s=c)})}return{notify:r,set:a,subscribe:o}}function je(){const{set:t,subscribe:n}=St(!1);let e;async function r(){clearTimeout(e);try{const a=await fetch(`${Ne}/_app/version.json`,{headers:{pragma:"no-cache","cache-control":"no-cache"}});if(!a.ok)return!1;const i=(await a.json()).version!==Oe;return i&&(t(!0),clearTimeout(e)),i}catch{return!1}}return{subscribe:n,check:r}}function it(t,n){return t.origin!==J||!t.pathname.startsWith(n)}const $e=-1,De=-2,Ce=-3,Ve=-4,Fe=-5,qe=-6;function Ge(t,n){if(typeof t=="number")return a(t,!0);if(!Array.isArray(t)||t.length===0)throw new Error("Invalid input");const e=t,r=Array(e.length);function a(o,i=!1){if(o===$e)return;if(o===Ce)return NaN;if(o===Ve)return 1/0;if(o===Fe)return-1/0;if(o===qe)return-0;if(i)throw new Error("Invalid input");if(o in r)return r[o];const s=e[o];if(!s||typeof s!="object")r[o]=s;else if(Array.isArray(s))if(typeof s[0]=="string"){const c=s[0],l=n==null?void 0:n[c];if(l)return r[o]=l(a(s[1]));switch(c){case"Date":r[o]=new Date(s[1]);break;case"Set":const u=new Set;r[o]=u;for(let d=1;d<s.length;d+=1)u.add(a(s[d]));break;case"Map":const h=new Map;r[o]=h;for(let d=1;d<s.length;d+=2)h.set(a(s[d]),a(s[d+1]));break;case"RegExp":r[o]=new RegExp(s[1],s[2]);break;case"Object":r[o]=Object(s[1]);break;case"BigInt":r[o]=BigInt(s[1]);break;case"null":const g=Object.create(null);r[o]=g;for(let d=1;d<s.length;d+=2)g[s[d]]=a(s[d+1]);break;default:throw new Error(`Unknown type ${c}`)}}else{const c=new Array(s.length);r[o]=c;for(let l=0;l<s.length;l+=1){const u=s[l];u!==De&&(c[l]=a(u))}}else{const c={};r[o]=c;for(const l in s){const u=s[l];c[l]=a(u)}}return r[o]}return a(0)}const Qt=new Set(["load","prerender","csr","ssr","trailingSlash","config"]);[...Qt];const He=new Set([...Qt]);[...He];function Me(t){return t.filter(n=>n!=null)}class ct{constructor(n,e){this.status=n,typeof e=="string"?this.body={message:e}:e?this.body=e:this.body={message:`Error: ${n}`}}toString(){return JSON.stringify(this.body)}}class te{constructor(n,e){this.status=n,this.location=e}}class It extends Error{constructor(n,e,r){super(r),this.status=n,this.text=e}}const Be="x-sveltekit-invalidated",Ke="x-sveltekit-trailing-slash";function Q(t){return t instanceof ct||t instanceof It?t.status:500}function ze(t){return t instanceof It?t.text:"Internal Error"}const j=Yt(Wt)??{},z=Yt(Jt)??{},x={url:Vt({}),page:Vt({}),navigating:St(null),updated:je()};function lt(t){j[t]=Rt()}function ee(t,n){let e=t+1;for(;j[e];)delete j[e],e+=1;for(e=n+1;z[e];)delete z[e],e+=1}function F(t){return location.href=t.href,new Promise(()=>{})}function Ft(){}let ft,bt,tt,T,kt,G;const et=[],nt=[];let L=null;const ne=[],Ye=[];let C=[],y={branch:[],error:null,url:null},Lt=!1,rt=!1,qt=!0,Y=!1,M=!1,Pt=!1,Tt=!1,H,E,R,k,q;const K=new Set;let yt;async function on(t,n,e){var a,o;document.URL!==location.href&&(location.href=location.href),G=t,ft=xe(t),T=document.documentElement,kt=n,bt=t.nodes[0],tt=t.nodes[1],bt(),tt(),E=(a=history.state)==null?void 0:a[U],R=(o=history.state)==null?void 0:o[O],E||(E=R=Date.now(),history.replaceState({...history.state,[U]:E,[O]:R},""));const r=j[E];r&&(history.scrollRestoration="manual",scrollTo(r.x,r.y)),e?await nn(kt,e):tn(location.href,{replaceState:!0}),en()}async function Je(){if(await(yt||(yt=Promise.resolve())),!yt)return;yt=null;const t=dt(y.url,!0);L=null;const n=q={},e=t&&await Ot(t);if(!(!e||n!==q)){if(e.type==="redirect")return Ut(new URL(e.location,y.url).href,{},1,n);e.props.page&&(k=e.props.page),y=e.state,re(),H.$set(e.props)}}function re(){et.length=0,Tt=!1}function ae(t){nt.some(n=>n==null?void 0:n.snapshot)&&(z[t]=nt.map(n=>{var e;return(e=n==null?void 0:n.snapshot)==null?void 0:e.capture()}))}function oe(t){var n;(n=z[t])==null||n.forEach((e,r)=>{var a,o;(o=(a=nt[r])==null?void 0:a.snapshot)==null||o.restore(e)})}function Gt(){lt(E),Dt(Wt,j),ae(R),Dt(Jt,z)}async function Ut(t,n,e,r){return W({type:"goto",url:st(t),keepfocus:n.keepFocus,noscroll:n.noScroll,replace_state:n.replaceState,state:n.state,redirect_count:e,nav_token:r,accept:()=>{n.invalidateAll&&(Tt=!0)}})}async function We(t){if(t.id!==(L==null?void 0:L.id)){const n={};K.add(n),L={id:t.id,token:n,promise:Ot({...t,preload:n}).then(e=>(K.delete(n),e.type==="loaded"&&e.state.error&&(L=null),e))}}return L.promise}async function wt(t){const n=ft.find(e=>e.exec(ie(t)));n&&await Promise.all([...n.layouts,n.leaf].map(e=>e==null?void 0:e[1]()))}function se(t,n,e){var o;y=t.state;const r=document.querySelector("style[data-sveltekit]");r&&r.remove(),k=t.props.page,H=new G.root({target:n,props:{...t.props,stores:x,components:nt},hydrate:e}),oe(R);const a={from:null,to:{params:y.params,route:{id:((o=y.route)==null?void 0:o.id)??null},url:new URL(location.href)},willUnload:!1,type:"enter",complete:Promise.resolve()};C.forEach(i=>i(a)),rt=!0}function at({url:t,params:n,branch:e,status:r,error:a,route:o,form:i}){let s="never";if(P&&(t.pathname===P||t.pathname===P+"/"))s="always";else for(const d of e)(d==null?void 0:d.slash)!==void 0&&(s=d.slash);t.pathname=ge(t.pathname,s),t.search=t.search;const c={type:"loaded",state:{url:t,params:n,branch:e,error:a,route:o},props:{constructors:Me(e).map(d=>d.node.component),page:k}};i!==void 0&&(c.props.form=i);let l={},u=!k,h=0;for(let d=0;d<Math.max(e.length,y.branch.length);d+=1){const _=e[d],f=y.branch[d];(_==null?void 0:_.data)!==(f==null?void 0:f.data)&&(u=!0),_&&(l={...l,..._.data},u&&(c.props[`data_${h}`]=l),h+=1)}return(!y.url||t.href!==y.url.href||y.error!==a||i!==void 0&&i!==k.form||u)&&(c.props.page={error:a,params:n,route:{id:(o==null?void 0:o.id)??null},state:{},status:r,url:new URL(t),form:i??null,data:u?l:k.data}),c}async function xt({loader:t,parent:n,url:e,params:r,route:a,server_data_node:o}){var u,h,g;let i=null,s=!0;const c={dependencies:new Set,params:new Set,parent:!1,route:!1,url:!1,search_params:new Set},l=await t();if((u=l.universal)!=null&&u.load){let d=function(...f){for(const m of f){const{href:b}=new URL(m,e);c.dependencies.add(b)}};const _={route:new Proxy(a,{get:(f,m)=>(s&&(c.route=!0),f[m])}),params:new Proxy(r,{get:(f,m)=>(s&&c.params.add(m),f[m])}),data:(o==null?void 0:o.data)??null,url:we(e,()=>{s&&(c.url=!0)},f=>{s&&c.search_params.add(f)}),async fetch(f,m){let b;f instanceof Request?(b=f.url,m={body:f.method==="GET"||f.method==="HEAD"?void 0:await f.blob(),cache:f.cache,credentials:f.credentials,headers:f.headers,integrity:f.integrity,keepalive:f.keepalive,method:f.method,mode:f.mode,redirect:f.redirect,referrer:f.referrer,referrerPolicy:f.referrerPolicy,signal:f.signal,...m}):b=f;const I=new URL(b,e);return s&&d(I.href),I.origin===e.origin&&(b=I.href.slice(e.origin.length)),rt?Re(b,I.href,m):Ae(b,m)},setHeaders:()=>{},depends:d,parent(){return s&&(c.parent=!0),n()},untrack(f){s=!1;try{return f()}finally{s=!0}}};i=await l.universal.load.call(null,_)??null}return{node:l,loader:t,server:o,universal:(h=l.universal)!=null&&h.load?{type:"data",data:i,uses:c}:null,data:i??(o==null?void 0:o.data)??null,slash:((g=l.universal)==null?void 0:g.trailingSlash)??(o==null?void 0:o.slash)}}function Ht(t,n,e,r,a,o){if(Tt)return!0;if(!a)return!1;if(a.parent&&t||a.route&&n||a.url&&e)return!0;for(const i of a.search_params)if(r.has(i))return!0;for(const i of a.params)if(o[i]!==y.params[i])return!0;for(const i of a.dependencies)if(et.some(s=>s(new URL(i))))return!0;return!1}function Nt(t,n){return(t==null?void 0:t.type)==="data"?t:(t==null?void 0:t.type)==="skip"?n??null:null}function Xe(t,n){if(!t)return new Set(n.searchParams.keys());const e=new Set([...t.searchParams.keys(),...n.searchParams.keys()]);for(const r of e){const a=t.searchParams.getAll(r),o=n.searchParams.getAll(r);a.every(i=>o.includes(i))&&o.every(i=>a.includes(i))&&e.delete(r)}return e}function Mt({error:t,url:n,route:e,params:r}){return{type:"loaded",state:{error:t,url:n,route:e,params:r,branch:[]},props:{page:k,constructors:[]}}}async function Ot({id:t,invalidating:n,url:e,params:r,route:a,preload:o}){if((L==null?void 0:L.id)===t)return K.delete(L.token),L.promise;const{errors:i,layouts:s,leaf:c}=a,l=[...s,c];i.forEach(p=>p==null?void 0:p().catch(()=>{})),l.forEach(p=>p==null?void 0:p[1]().catch(()=>{}));let u=null;const h=y.url?t!==y.url.pathname+y.url.search:!1,g=y.route?a.id!==y.route.id:!1,d=Xe(y.url,e);let _=!1;const f=l.map((p,v)=>{var N;const S=y.branch[v],A=!!(p!=null&&p[0])&&((S==null?void 0:S.loader)!==p[1]||Ht(_,g,h,d,(N=S.server)==null?void 0:N.uses,r));return A&&(_=!0),A});if(f.some(Boolean)){try{u=await fe(e,f)}catch(p){const v=await V(p,{url:e,params:r,route:{id:t}});return K.has(o)?Mt({error:v,url:e,params:r,route:a}):ut({status:Q(p),error:v,url:e,route:a})}if(u.type==="redirect")return u}const m=u==null?void 0:u.nodes;let b=!1;const I=l.map(async(p,v)=>{var ht;if(!p)return;const S=y.branch[v],A=m==null?void 0:m[v];if((!A||A.type==="skip")&&p[1]===(S==null?void 0:S.loader)&&!Ht(b,g,h,d,(ht=S.universal)==null?void 0:ht.uses,r))return S;if(b=!0,(A==null?void 0:A.type)==="error")throw A;return xt({loader:p[1],url:e,params:r,route:a,parent:async()=>{var $t;const jt={};for(let pt=0;pt<v;pt+=1)Object.assign(jt,($t=await I[pt])==null?void 0:$t.data);return jt},server_data_node:Nt(A===void 0&&p[0]?{type:"skip"}:A??null,p[0]?S==null?void 0:S.server:void 0)})});for(const p of I)p.catch(()=>{});const w=[];for(let p=0;p<l.length;p+=1)if(l[p])try{w.push(await I[p])}catch(v){if(v instanceof te)return{type:"redirect",location:v.location};if(K.has(o))return Mt({error:await V(v,{params:r,url:e,route:{id:a.id}}),url:e,params:r,route:a});let S=Q(v),A;if(m!=null&&m.includes(v))S=v.status??S,A=v.error;else if(v instanceof ct)A=v.body;else{if(await x.updated.check())return await F(e);A=await V(v,{params:r,url:e,route:{id:a.id}})}const N=await Ze(p,w,i);return N?at({url:e,params:r,branch:w.slice(0,N.idx).concat(N.node),status:S,error:A,route:a}):await le(e,{id:a.id},A,S)}else w.push(void 0);return at({url:e,params:r,branch:w,status:200,error:null,route:a,form:n?void 0:null})}async function Ze(t,n,e){for(;t--;)if(e[t]){let r=t;for(;!n[r];)r-=1;try{return{idx:r+1,node:{node:await e[t](),loader:e[t],data:{},server:null,universal:null}}}catch{continue}}}async function ut({status:t,error:n,url:e,route:r}){const a={};let o=null;if(G.server_loads[0]===0)try{const l=await fe(e,[!0]);if(l.type!=="data"||l.nodes[0]&&l.nodes[0].type!=="data")throw 0;o=l.nodes[0]??null}catch{(e.origin!==J||e.pathname!==location.pathname||Lt)&&await F(e)}const s=await xt({loader:bt,url:e,params:a,route:r,parent:()=>Promise.resolve({}),server_data_node:Nt(o)}),c={node:await tt(),loader:tt,universal:null,server:null,data:null};return at({url:e,params:a,branch:[s,c],status:t,error:n,route:null})}function dt(t,n){if(!t||it(t,P))return;let e;try{e=G.hooks.reroute({url:new URL(t)})??t.pathname}catch{return}const r=ie(e);for(const a of ft){const o=a.exec(r);if(o)return{id:t.pathname+t.search,invalidating:n,route:a,params:_e(o),url:t}}}function ie(t){return me(t.slice(P.length)||"/")}function ce({url:t,type:n,intent:e,delta:r}){let a=!1;const o=de(y,e,t,n);r!==void 0&&(o.navigation.delta=r);const i={...o.navigation,cancel:()=>{a=!0,o.reject(new Error("navigation cancelled"))}};return Y||ne.forEach(s=>s(i)),a?null:o}async function W({type:t,url:n,popped:e,keepfocus:r,noscroll:a,replace_state:o,state:i={},redirect_count:s=0,nav_token:c={},accept:l=Ft,block:u=Ft}){const h=dt(n,!1),g=ce({url:n,type:t,delta:e==null?void 0:e.delta,intent:h});if(!g){u();return}const d=E,_=R;l(),Y=!0,rt&&x.navigating.set(g.navigation),q=c;let f=h&&await Ot(h);if(!f){if(it(n,P))return await F(n);f=await le(n,{id:null},await V(new It(404,"Not Found",`Not found: ${n.pathname}`),{url:n,params:{},route:{id:null}}),404)}if(n=(h==null?void 0:h.url)||n,q!==c)return g.reject(new Error("navigation aborted")),!1;if(f.type==="redirect")if(s>=20)f=await ut({status:500,error:await V(new Error("Redirect loop"),{url:n,params:{},route:{id:null}}),url:n,route:{id:null}});else return Ut(new URL(f.location,n).href,{},s+1,c),!1;else f.props.page.status>=400&&await x.updated.check()&&await F(n);if(re(),lt(d),ae(_),f.props.page.url.pathname!==n.pathname&&(n.pathname=f.props.page.url.pathname),i=e?e.state:i,!e){const w=o?0:1,p={[U]:E+=w,[O]:R+=w,[ot]:i};(o?history.replaceState:history.pushState).call(history,p,"",n),o||ee(E,R)}if(L=null,f.props.page.state=i,rt){y=f.state,f.props.page&&(f.props.page.url=n);const w=(await Promise.all(Ye.map(p=>p(g.navigation)))).filter(p=>typeof p=="function");if(w.length>0){let p=function(){C=C.filter(v=>!w.includes(v))};w.push(p),C.push(...w)}H.$set(f.props),Pt=!0}else se(f,kt,!1);const{activeElement:m}=document;await pe();const b=e?e.scroll:a?Rt():null;if(qt){const w=n.hash&&document.getElementById(decodeURIComponent(n.hash.slice(1)));b?scrollTo(b.x,b.y):w?w.scrollIntoView():scrollTo(0,0)}const I=document.activeElement!==m&&document.activeElement!==document.body;!r&&!I&&rn(),qt=!0,f.props.page&&(k=f.props.page),Y=!1,t==="popstate"&&oe(R),g.fulfil(void 0),C.forEach(w=>w(g.navigation)),x.navigating.set(null)}async function le(t,n,e,r){return t.origin===J&&t.pathname===location.pathname&&!Lt?await ut({status:r,error:e,url:t,route:n}):await F(t)}function Qe(){let t;T.addEventListener("mousemove",o=>{const i=o.target;clearTimeout(t),t=setTimeout(()=>{r(i,2)},20)});function n(o){r(o.composedPath()[0],1)}T.addEventListener("mousedown",n),T.addEventListener("touchstart",n,{passive:!0});const e=new IntersectionObserver(o=>{for(const i of o)i.isIntersecting&&(wt(i.target.href),e.unobserve(i.target))},{threshold:0});function r(o,i){const s=Zt(o,T);if(!s)return;const{url:c,external:l,download:u}=vt(s,P);if(l||u)return;const h=Z(s);if(!h.reload)if(i<=h.preload_data){const g=dt(c,!1);g&&We(g)}else i<=h.preload_code&&wt(c.pathname)}function a(){e.disconnect();for(const o of T.querySelectorAll("a")){const{url:i,external:s,download:c}=vt(o,P);if(s||c)continue;const l=Z(o);l.reload||(l.preload_code===X.viewport&&e.observe(o),l.preload_code===X.eager&&wt(i.pathname))}}C.push(a),a()}function V(t,n){if(t instanceof ct)return t.body;const e=Q(t),r=ze(t);return G.hooks.handleError({error:t,event:n,status:e,message:r})??{message:r}}function tn(t,n={}){return t=st(t),t.origin!==J?Promise.reject(new Error("goto: invalid URL")):Ut(t,n,0)}function sn(t){if(typeof t=="function")et.push(t);else{const{href:n}=new URL(t,location.href);et.push(e=>e.href===n)}return Je()}function cn(t,n){lt(E);const e={[U]:E+=1,[O]:R,[At]:k.url.href,[ot]:n};history.pushState(e,"",st(t)),Pt=!0,k={...k,state:n},H.$set({page:k}),ee(E,R)}function ln(t,n){const e={[U]:E,[O]:R,[At]:k.url.href,[ot]:n};history.replaceState(e,"",st(t)),k={...k,state:n},H.$set({page:k})}function en(){var n;history.scrollRestoration="manual",addEventListener("beforeunload",e=>{let r=!1;if(Gt(),!Y){const a=de(y,void 0,null,"leave"),o={...a.navigation,cancel:()=>{r=!0,a.reject(new Error("navigation cancelled"))}};ne.forEach(i=>i(o))}r?(e.preventDefault(),e.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{document.visibilityState==="hidden"&&Gt()}),(n=navigator.connection)!=null&&n.saveData||Qe(),T.addEventListener("click",async e=>{var g;if(e.button||e.which!==1||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.defaultPrevented)return;const r=Zt(e.composedPath()[0],T);if(!r)return;const{url:a,external:o,target:i,download:s}=vt(r,P);if(!a)return;if(i==="_parent"||i==="_top"){if(window.parent!==window)return}else if(i&&i!=="_self")return;const c=Z(r);if(!(r instanceof SVGAElement)&&a.protocol!==location.protocol&&!(a.protocol==="https:"||a.protocol==="http:")||s)return;if(o||c.reload){ce({url:a,type:"link"})?Y=!0:e.preventDefault();return}const[u,h]=a.href.split("#");if(h!==void 0&&u===mt(location)){const[,d]=y.url.href.split("#");if(d===h){e.preventDefault(),h===""||h==="top"&&r.ownerDocument.getElementById("top")===null?window.scrollTo({top:0}):(g=r.ownerDocument.getElementById(h))==null||g.scrollIntoView();return}if(M=!0,lt(E),t(a),!c.replace_state)return;M=!1}e.preventDefault(),await new Promise(d=>{requestAnimationFrame(()=>{setTimeout(d,0)}),setTimeout(d,100)}),W({type:"link",url:a,keepfocus:c.keepfocus,noscroll:c.noscroll,replace_state:c.replace_state??a.href===location.href})}),T.addEventListener("submit",e=>{if(e.defaultPrevented)return;const r=HTMLFormElement.prototype.cloneNode.call(e.target),a=e.submitter;if(((a==null?void 0:a.formMethod)||r.method)!=="get")return;const i=new URL((a==null?void 0:a.hasAttribute("formaction"))&&(a==null?void 0:a.formAction)||r.action);if(it(i,P))return;const s=e.target,c=Z(s);if(c.reload)return;e.preventDefault(),e.stopPropagation();const l=new FormData(s),u=a==null?void 0:a.getAttribute("name");u&&l.append(u,(a==null?void 0:a.getAttribute("value"))??""),i.search=new URLSearchParams(l).toString(),W({type:"form",url:i,keepfocus:c.keepfocus,noscroll:c.noscroll,replace_state:c.replace_state??i.href===location.href})}),addEventListener("popstate",async e=>{var r;if((r=e.state)!=null&&r[U]){const a=e.state[U];if(q={},a===E)return;const o=j[a],i=e.state[ot]??{},s=new URL(e.state[At]??location.href),c=e.state[O],l=mt(location)===mt(y.url);if(c===R&&(Pt||l)){t(s),j[E]=Rt(),o&&scrollTo(o.x,o.y),i!==k.state&&(k={...k,state:i},H.$set({page:k})),E=a;return}const h=a-E;await W({type:"popstate",url:s,popped:{state:i,scroll:o,delta:h},accept:()=>{E=a,R=c},block:()=>{history.go(-h)},nav_token:q})}else if(!M){const a=new URL(location.href);t(a)}}),addEventListener("hashchange",()=>{M&&(M=!1,history.replaceState({...history.state,[U]:++E,[O]:R},"",location.href))});for(const e of document.querySelectorAll("link"))e.rel==="icon"&&(e.href=e.href);addEventListener("pageshow",e=>{e.persisted&&x.navigating.set(null)});function t(e){y.url=e,x.page.set({...k,url:e}),x.page.notify()}}async function nn(t,{status:n=200,error:e,node_ids:r,params:a,route:o,data:i,form:s}){Lt=!0;const c=new URL(location.href);({params:a={},route:o={id:null}}=dt(c,!1)||{});let l;try{const u=r.map(async(d,_)=>{const f=i[_];return f!=null&&f.uses&&(f.uses=ue(f.uses)),xt({loader:G.nodes[d],url:c,params:a,route:o,parent:async()=>{const m={};for(let b=0;b<_;b+=1)Object.assign(m,(await u[b]).data);return m},server_data_node:Nt(f)})}),h=await Promise.all(u),g=ft.find(({id:d})=>d===o.id);if(g){const d=g.layouts;for(let _=0;_<d.length;_++)d[_]||h.splice(_,0,void 0)}l=at({url:c,params:a,branch:h,status:n,error:e,form:s,route:g??null})}catch(u){if(u instanceof te){await F(new URL(u.location,location.href));return}l=await ut({status:Q(u),error:await V(u,{url:c,params:a,route:o}),url:c,route:o})}l.props.page&&(l.props.page.state={}),se(l,t,!0)}async function fe(t,n){var a;const e=new URL(t);e.pathname=ke(t.pathname),t.pathname.endsWith("/")&&e.searchParams.append(Ke,"1"),e.searchParams.append(Be,n.map(o=>o?"1":"0").join(""));const r=await zt(e.href);if(!r.ok){let o;throw(a=r.headers.get("content-type"))!=null&&a.includes("application/json")?o=await r.json():r.status===404?o="Not Found":r.status===500&&(o="Internal Error"),new ct(r.status,o)}return new Promise(async o=>{var h;const i=new Map,s=r.body.getReader(),c=new TextDecoder;function l(g){return Ge(g,{Promise:d=>new Promise((_,f)=>{i.set(d,{fulfil:_,reject:f})})})}let u="";for(;;){const{done:g,value:d}=await s.read();if(g&&!u)break;for(u+=!d&&u?`
`:c.decode(d,{stream:!0});;){const _=u.indexOf(`
`);if(_===-1)break;const f=JSON.parse(u.slice(0,_));if(u=u.slice(_+1),f.type==="redirect")return o(f);if(f.type==="data")(h=f.nodes)==null||h.forEach(m=>{(m==null?void 0:m.type)==="data"&&(m.uses=ue(m.uses),m.data=l(m.data))}),o(f);else if(f.type==="chunk"){const{id:m,data:b,error:I}=f,w=i.get(m);i.delete(m),I?w.reject(l(I)):w.fulfil(l(b))}}}})}function ue(t){return{dependencies:new Set((t==null?void 0:t.dependencies)??[]),params:new Set((t==null?void 0:t.params)??[]),parent:!!(t!=null&&t.parent),route:!!(t!=null&&t.route),url:!!(t!=null&&t.url),search_params:new Set((t==null?void 0:t.search_params)??[])}}function rn(){const t=document.querySelector("[autofocus]");if(t)t.focus();else{const n=document.body,e=n.getAttribute("tabindex");n.tabIndex=-1,n.focus({preventScroll:!0,focusVisible:!1}),e!==null?n.setAttribute("tabindex",e):n.removeAttribute("tabindex");const r=getSelection();if(r&&r.type!=="None"){const a=[];for(let o=0;o<r.rangeCount;o+=1)a.push(r.getRangeAt(o));setTimeout(()=>{if(r.rangeCount===a.length){for(let o=0;o<r.rangeCount;o+=1){const i=a[o],s=r.getRangeAt(o);if(i.commonAncestorContainer!==s.commonAncestorContainer||i.startContainer!==s.startContainer||i.endContainer!==s.endContainer||i.startOffset!==s.startOffset||i.endOffset!==s.endOffset)return}r.removeAllRanges()}})}}}function de(t,n,e,r){var c,l;let a,o;const i=new Promise((u,h)=>{a=u,o=h});return i.catch(()=>{}),{navigation:{from:{params:t.params,route:{id:((c=t.route)==null?void 0:c.id)??null},url:t.url},to:e&&{params:(n==null?void 0:n.params)??null,route:{id:((l=n==null?void 0:n.route)==null?void 0:l.id)??null},url:e},willUnload:!n,type:r,complete:i},fulfil:a,reject:o}}export{ct as H,te as R,on as a,tn as g,sn as i,cn as p,ln as r,x as s,St as w};
