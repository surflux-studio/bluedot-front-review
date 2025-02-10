import{n as de,s as ut,U as dt}from"./scheduler.5W7zuegH.js";import{H as re,S as ve,R as He}from"./control.CYgJF_JY.js";new URL("sveltekit-internal://");function ht(e,n){return e==="/"||n==="ignore"?e:n==="never"?e.endsWith("/")?e.slice(0,-1):e:n==="always"&&!e.endsWith("/")?e+"/":e}function pt(e){return e.split("%25").map(decodeURI).join("%25")}function gt(e){for(const n in e)e[n]=decodeURIComponent(e[n]);return e}function he({href:e}){return e.split("#")[0]}const mt=["href","pathname","search","toString","toJSON"];function _t(e,n,t){const a=new URL(e);Object.defineProperty(a,"searchParams",{value:new Proxy(a.searchParams,{get(r,o){if(o==="get"||o==="getAll"||o==="has")return i=>(t(i),r[o](i));n();const s=Reflect.get(r,o);return typeof s=="function"?s.bind(r):s}}),enumerable:!0,configurable:!0});for(const r of mt)Object.defineProperty(a,r,{get(){return n(),e[r]},enumerable:!0,configurable:!0});return a}const yt="/__data.json",wt=".html__data.json";function vt(e){return e.endsWith(".html")?e.replace(/\.html$/,wt):e.replace(/\/$/,"")+yt}function bt(...e){let n=5381;for(const t of e)if(typeof t=="string"){let a=t.length;for(;a;)n=n*33^t.charCodeAt(--a)}else if(ArrayBuffer.isView(t)){const a=new Uint8Array(t.buffer,t.byteOffset,t.byteLength);let r=a.length;for(;r;)n=n*33^a[--r]}else throw new TypeError("value must be a string or TypedArray");return(n>>>0).toString(36)}function kt(e){const n=atob(e),t=new Uint8Array(n.length);for(let a=0;a<n.length;a++)t[a]=n.charCodeAt(a);return t.buffer}const Me=window.fetch;window.fetch=(e,n)=>((e instanceof Request?e.method:(n==null?void 0:n.method)||"GET")!=="GET"&&H.delete(be(e)),Me(e,n));const H=new Map;function Et(e,n){const t=be(e,n),a=document.querySelector(t);if(a!=null&&a.textContent){let{body:r,...o}=JSON.parse(a.textContent);const s=a.getAttribute("data-ttl");return s&&H.set(t,{body:r,init:o,ttl:1e3*Number(s)}),a.getAttribute("data-b64")!==null&&(r=kt(r)),Promise.resolve(new Response(r,o))}return window.fetch(e,n)}function St(e,n,t){if(H.size>0){const a=be(e,t),r=H.get(a);if(r){if(performance.now()<r.ttl&&["default","force-cache","only-if-cached",void 0].includes(t==null?void 0:t.cache))return new Response(r.body,r.init);H.delete(a)}}return window.fetch(n,t)}function be(e,n){let a=`script[data-sveltekit-fetched][data-url=${JSON.stringify(e instanceof Request?e.url:e)}]`;if(n!=null&&n.headers||n!=null&&n.body){const r=[];n.headers&&r.push([...new Headers(n.headers)].join(",")),n.body&&(typeof n.body=="string"||ArrayBuffer.isView(n.body))&&r.push(n.body),a+=`[data-hash="${bt(...r)}"]`}return a}const At=/^(\[)?(\.\.\.)?(\w+)(?:=(\w+))?(\])?$/;function Rt(e){const n=[];return{pattern:e==="/"?/^\/$/:new RegExp(`^${Lt(e).map(a=>{const r=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(a);if(r)return n.push({name:r[1],matcher:r[2],optional:!1,rest:!0,chained:!0}),"(?:/(.*))?";const o=/^\[\[(\w+)(?:=(\w+))?\]\]$/.exec(a);if(o)return n.push({name:o[1],matcher:o[2],optional:!0,rest:!1,chained:!0}),"(?:/([^/]+))?";if(!a)return;const s=a.split(/\[(.+?)\](?!\])/);return"/"+s.map((c,l)=>{if(l%2){if(c.startsWith("x+"))return pe(String.fromCharCode(parseInt(c.slice(2),16)));if(c.startsWith("u+"))return pe(String.fromCharCode(...c.slice(2).split("-").map(f=>parseInt(f,16))));const u=At.exec(c),[,h,g,d,_]=u;return n.push({name:d,matcher:_,optional:!!h,rest:!!g,chained:g?l===1&&s[0]==="":!1}),g?"(.*?)":h?"([^/]*)?":"([^/]+?)"}return pe(c)}).join("")}).join("")}/?$`),params:n}}function It(e){return!/^\([^)]+\)$/.test(e)}function Lt(e){return e.slice(1).split("/").filter(It)}function Pt(e,n,t){const a={},r=e.slice(1),o=r.filter(i=>i!==void 0);let s=0;for(let i=0;i<n.length;i+=1){const c=n[i];let l=r[i-s];if(c.chained&&c.rest&&s&&(l=r.slice(i-s,i+1).filter(u=>u).join("/"),s=0),l===void 0){c.rest&&(a[c.name]="");continue}if(!c.matcher||t[c.matcher](l)){a[c.name]=l;const u=n[i+1],h=r[i+1];u&&!u.rest&&u.optional&&h&&c.chained&&(s=0),!u&&!h&&Object.keys(a).length===o.length&&(s=0);continue}if(c.optional&&c.chained){s++;continue}return}if(!s)return a}function pe(e){return e.normalize().replace(/[[\]]/g,"\\$&").replace(/%/g,"%25").replace(/\//g,"%2[Ff]").replace(/\?/g,"%3[Ff]").replace(/#/g,"%23").replace(/[.*+?^${}()|\\]/g,"\\$&")}function Ut({nodes:e,server_loads:n,dictionary:t,matchers:a}){const r=new Set(n);return Object.entries(t).map(([i,[c,l,u]])=>{const{pattern:h,params:g}=Rt(i),d={id:i,exec:_=>{const f=h.exec(_);if(f)return Pt(f,g,a)},errors:[1,...u||[]].map(_=>e[_]),layouts:[0,...l||[]].map(s),leaf:o(c)};return d.errors.length=d.layouts.length=Math.max(d.errors.length,d.layouts.length),d});function o(i){const c=i<0;return c&&(i=~i),[c,e[i]]}function s(i){return i===void 0?i:[r.has(i),e[i]]}}function Be(e,n=JSON.parse){try{return n(sessionStorage[e])}catch{}}function Ne(e,n,t=JSON.stringify){const a=t(n);try{sessionStorage[e]=a}catch{}}const O=[];function ke(e,n=de){let t;const a=new Set;function r(i){if(ut(e,i)&&(e=i,t)){const c=!O.length;for(const l of a)l[1](),O.push(l,e);if(c){for(let l=0;l<O.length;l+=2)O[l][0](O[l+1]);O.length=0}}}function o(i){r(i(e))}function s(i,c=de){const l=[i,c];return a.add(l),a.size===1&&(t=n(r,o)||de),i(e),()=>{a.delete(l),a.size===0&&t&&(t(),t=null)}}return{set:r,update:o,subscribe:s}}var qe;const P=((qe=globalThis.__sveltekit_1mkvo9p)==null?void 0:qe.base)??"";var Ge;const Tt=((Ge=globalThis.__sveltekit_1mkvo9p)==null?void 0:Ge.assets)??P,xt="1739162779228",Ke="sveltekit:snapshot",ze="sveltekit:scroll",Ye="sveltekit:states",Nt="sveltekit:pageurl",D="sveltekit:history",B="sveltekit:navigation",J={tap:1,hover:2,viewport:3,eager:4,off:-1,false:-1},Y=location.origin;function We(e){if(e instanceof URL)return e;let n=document.baseURI;if(!n){const t=document.getElementsByTagName("base");n=t.length?t[0].href:document.URL}return new URL(e,n)}function Ee(){return{x:pageXOffset,y:pageYOffset}}function j(e,n){return e.getAttribute(`data-sveltekit-${n}`)}const Oe={...J,"":J.hover};function Je(e){let n=e.assignedSlot??e.parentNode;return(n==null?void 0:n.nodeType)===11&&(n=n.host),n}function Xe(e,n){for(;e&&e!==n;){if(e.nodeName.toUpperCase()==="A"&&e.hasAttribute("href"))return e;e=Je(e)}}function _e(e,n){let t;try{t=new URL(e instanceof SVGAElement?e.href.baseVal:e.href,document.baseURI)}catch{}const a=e instanceof SVGAElement?e.target.baseVal:e.target,r=!t||!!a||oe(t,n)||(e.getAttribute("rel")||"").split(/\s+/).includes("external"),o=(t==null?void 0:t.origin)===Y&&e.hasAttribute("download");return{url:t,external:r,target:a,download:o}}function X(e){let n=null,t=null,a=null,r=null,o=null,s=null,i=e;for(;i&&i!==document.documentElement;)a===null&&(a=j(i,"preload-code")),r===null&&(r=j(i,"preload-data")),n===null&&(n=j(i,"keepfocus")),t===null&&(t=j(i,"noscroll")),o===null&&(o=j(i,"reload")),s===null&&(s=j(i,"replacestate")),i=Je(i);function c(l){switch(l){case"":case"true":return!0;case"off":case"false":return!1;default:return}}return{preload_code:Oe[a??"off"],preload_data:Oe[r??"off"],keepfocus:c(n),noscroll:c(t),reload:c(o),replace_state:c(s)}}function je(e){const n=ke(e);let t=!0;function a(){t=!0,n.update(s=>s)}function r(s){t=!1,n.set(s)}function o(s){let i;return n.subscribe(c=>{(i===void 0||t&&c!==i)&&s(i=c)})}return{notify:a,set:r,subscribe:o}}function Ot(){const{set:e,subscribe:n}=ke(!1);let t;async function a(){clearTimeout(t);try{const r=await fetch(`${Tt}/_app/version.json`,{headers:{pragma:"no-cache","cache-control":"no-cache"}});if(!r.ok)return!1;const s=(await r.json()).version!==xt;return s&&(e(!0),clearTimeout(t)),s}catch{return!1}}return{subscribe:n,check:a}}function oe(e,n){return e.origin!==Y||!e.pathname.startsWith(n)}const jt=-1,$t=-2,Dt=-3,Ct=-4,Vt=-5,Ft=-6;function qt(e,n){if(typeof e=="number")return r(e,!0);if(!Array.isArray(e)||e.length===0)throw new Error("Invalid input");const t=e,a=Array(t.length);function r(o,s=!1){if(o===jt)return;if(o===Dt)return NaN;if(o===Ct)return 1/0;if(o===Vt)return-1/0;if(o===Ft)return-0;if(s)throw new Error("Invalid input");if(o in a)return a[o];const i=t[o];if(!i||typeof i!="object")a[o]=i;else if(Array.isArray(i))if(typeof i[0]=="string"){const c=i[0],l=n==null?void 0:n[c];if(l)return a[o]=l(r(i[1]));switch(c){case"Date":a[o]=new Date(i[1]);break;case"Set":const u=new Set;a[o]=u;for(let d=1;d<i.length;d+=1)u.add(r(i[d]));break;case"Map":const h=new Map;a[o]=h;for(let d=1;d<i.length;d+=2)h.set(r(i[d]),r(i[d+1]));break;case"RegExp":a[o]=new RegExp(i[1],i[2]);break;case"Object":a[o]=Object(i[1]);break;case"BigInt":a[o]=BigInt(i[1]);break;case"null":const g=Object.create(null);a[o]=g;for(let d=1;d<i.length;d+=2)g[i[d]]=r(i[d+1]);break;default:throw new Error(`Unknown type ${c}`)}}else{const c=new Array(i.length);a[o]=c;for(let l=0;l<i.length;l+=1){const u=i[l];u!==$t&&(c[l]=r(u))}}else{const c={};a[o]=c;for(const l in i){const u=i[l];c[l]=r(u)}}return a[o]}return r(0)}const Ze=new Set(["load","prerender","csr","ssr","trailingSlash","config"]);[...Ze];const Gt=new Set([...Ze]);[...Gt];function Ht(e){return e.filter(n=>n!=null)}const Mt="x-sveltekit-invalidated",Bt="x-sveltekit-trailing-slash";function Z(e){return e instanceof re||e instanceof ve?e.status:500}function Kt(e){return e instanceof ve?e.text:"Internal Error"}const N=Be(ze)??{},K=Be(Ke)??{},T={url:je({}),page:je({}),navigating:ke(null),updated:Ot()};function Se(e){N[e]=Ee()}function zt(e,n){let t=e+1;for(;N[t];)delete N[t],t+=1;for(t=n+1;K[t];)delete K[t],t+=1}function V(e){return location.href=e.href,new Promise(()=>{})}function $e(){}let ie,ye,Q,U,we,q;const ee=[],te=[];let R=null;const Qe=[],Yt=[];let $=[],y={branch:[],error:null,url:null},Ae=!1,ne=!1,De=!0,z=!1,G=!1,et=!1,Re=!1,se,S,L,I,F;const M=new Set;let ge;async function sn(e,n,t){var r,o;document.URL!==location.href&&(location.href=location.href),q=e,ie=Ut(e),U=document.documentElement,we=n,ye=e.nodes[0],Q=e.nodes[1],ye(),Q(),S=(r=history.state)==null?void 0:r[D],L=(o=history.state)==null?void 0:o[B],S||(S=L=Date.now(),history.replaceState({...history.state,[D]:S,[B]:L},""));const a=N[S];a&&(history.scrollRestoration="manual",scrollTo(a.x,a.y)),t?await nn(we,t):en(location.href,{replaceState:!0}),tn()}async function Wt(){if(await(ge||(ge=Promise.resolve())),!ge)return;ge=null;const e=le(y.url,!0);R=null;const n=F={},t=e&&await Ue(e);if(!(!t||n!==F)){if(t.type==="redirect")return Ie(new URL(t.location,y.url).href,{},1,n);t.props.page&&(I=t.props.page),y=t.state,tt(),se.$set(t.props)}}function tt(){ee.length=0,Re=!1}function nt(e){te.some(n=>n==null?void 0:n.snapshot)&&(K[e]=te.map(n=>{var t;return(t=n==null?void 0:n.snapshot)==null?void 0:t.capture()}))}function at(e){var n;(n=K[e])==null||n.forEach((t,a)=>{var r,o;(o=(r=te[a])==null?void 0:r.snapshot)==null||o.restore(t)})}function Ce(){Se(S),Ne(ze,N),nt(L),Ne(Ke,K)}async function Ie(e,n,t,a){return W({type:"goto",url:We(e),keepfocus:n.keepFocus,noscroll:n.noScroll,replace_state:n.replaceState,state:n.state,redirect_count:t,nav_token:a,accept:()=>{n.invalidateAll&&(Re=!0)}})}async function Jt(e){if(e.id!==(R==null?void 0:R.id)){const n={};M.add(n),R={id:e.id,token:n,promise:Ue({...e,preload:n}).then(t=>(M.delete(n),t.type==="loaded"&&t.state.error&&(R=null),t))}}return R.promise}async function me(e){const n=ie.find(t=>t.exec(ot(e)));n&&await Promise.all([...n.layouts,n.leaf].map(t=>t==null?void 0:t[1]()))}function rt(e,n,t){var o;y=e.state;const a=document.querySelector("style[data-sveltekit]");a&&a.remove(),I=e.props.page,se=new q.root({target:n,props:{...e.props,stores:T,components:te},hydrate:t}),at(L);const r={from:null,to:{params:y.params,route:{id:((o=y.route)==null?void 0:o.id)??null},url:new URL(location.href)},willUnload:!1,type:"enter",complete:Promise.resolve()};$.forEach(s=>s(r)),ne=!0}function ae({url:e,params:n,branch:t,status:a,error:r,route:o,form:s}){let i="never";if(P&&(e.pathname===P||e.pathname===P+"/"))i="always";else for(const d of t)(d==null?void 0:d.slash)!==void 0&&(i=d.slash);e.pathname=ht(e.pathname,i),e.search=e.search;const c={type:"loaded",state:{url:e,params:n,branch:t,error:r,route:o},props:{constructors:Ht(t).map(d=>d.node.component),page:I}};s!==void 0&&(c.props.form=s);let l={},u=!I,h=0;for(let d=0;d<Math.max(t.length,y.branch.length);d+=1){const _=t[d],f=y.branch[d];(_==null?void 0:_.data)!==(f==null?void 0:f.data)&&(u=!0),_&&(l={...l,..._.data},u&&(c.props[`data_${h}`]=l),h+=1)}return(!y.url||e.href!==y.url.href||y.error!==r||s!==void 0&&s!==I.form||u)&&(c.props.page={error:r,params:n,route:{id:(o==null?void 0:o.id)??null},state:{},status:a,url:new URL(e),form:s??null,data:u?l:I.data}),c}async function Le({loader:e,parent:n,url:t,params:a,route:r,server_data_node:o}){var u,h,g;let s=null,i=!0;const c={dependencies:new Set,params:new Set,parent:!1,route:!1,url:!1,search_params:new Set},l=await e();if((u=l.universal)!=null&&u.load){let d=function(...f){for(const m of f){const{href:b}=new URL(m,t);c.dependencies.add(b)}};const _={route:new Proxy(r,{get:(f,m)=>(i&&(c.route=!0),f[m])}),params:new Proxy(a,{get:(f,m)=>(i&&c.params.add(m),f[m])}),data:(o==null?void 0:o.data)??null,url:_t(t,()=>{i&&(c.url=!0)},f=>{i&&c.search_params.add(f)}),async fetch(f,m){let b;f instanceof Request?(b=f.url,m={body:f.method==="GET"||f.method==="HEAD"?void 0:await f.blob(),cache:f.cache,credentials:f.credentials,headers:f.headers,integrity:f.integrity,keepalive:f.keepalive,method:f.method,mode:f.mode,redirect:f.redirect,referrer:f.referrer,referrerPolicy:f.referrerPolicy,signal:f.signal,...m}):b=f;const A=new URL(b,t);return i&&d(A.href),A.origin===t.origin&&(b=A.href.slice(t.origin.length)),ne?St(b,A.href,m):Et(b,m)},setHeaders:()=>{},depends:d,parent(){return i&&(c.parent=!0),n()},untrack(f){i=!1;try{return f()}finally{i=!0}}};s=await l.universal.load.call(null,_)??null}return{node:l,loader:e,server:o,universal:(h=l.universal)!=null&&h.load?{type:"data",data:s,uses:c}:null,data:s??(o==null?void 0:o.data)??null,slash:((g=l.universal)==null?void 0:g.trailingSlash)??(o==null?void 0:o.slash)}}function Ve(e,n,t,a,r,o){if(Re)return!0;if(!r)return!1;if(r.parent&&e||r.route&&n||r.url&&t)return!0;for(const s of r.search_params)if(a.has(s))return!0;for(const s of r.params)if(o[s]!==y.params[s])return!0;for(const s of r.dependencies)if(ee.some(i=>i(new URL(s))))return!0;return!1}function Pe(e,n){return(e==null?void 0:e.type)==="data"?e:(e==null?void 0:e.type)==="skip"?n??null:null}function Xt(e,n){if(!e)return new Set(n.searchParams.keys());const t=new Set([...e.searchParams.keys(),...n.searchParams.keys()]);for(const a of t){const r=e.searchParams.getAll(a),o=n.searchParams.getAll(a);r.every(s=>o.includes(s))&&o.every(s=>r.includes(s))&&t.delete(a)}return t}function Fe({error:e,url:n,route:t,params:a}){return{type:"loaded",state:{error:e,url:n,route:t,params:a,branch:[]},props:{page:I,constructors:[]}}}async function Ue({id:e,invalidating:n,url:t,params:a,route:r,preload:o}){if((R==null?void 0:R.id)===e)return M.delete(R.token),R.promise;const{errors:s,layouts:i,leaf:c}=r,l=[...i,c];s.forEach(p=>p==null?void 0:p().catch(()=>{})),l.forEach(p=>p==null?void 0:p[1]().catch(()=>{}));let u=null;const h=y.url?e!==y.url.pathname+y.url.search:!1,g=y.route?r.id!==y.route.id:!1,d=Xt(y.url,t);let _=!1;const f=l.map((p,v)=>{var x;const k=y.branch[v],E=!!(p!=null&&p[0])&&((k==null?void 0:k.loader)!==p[1]||Ve(_,g,h,d,(x=k.server)==null?void 0:x.uses,a));return E&&(_=!0),E});if(f.some(Boolean)){try{u=await ct(t,f)}catch(p){const v=await C(p,{url:t,params:a,route:{id:e}});return M.has(o)?Fe({error:v,url:t,params:a,route:r}):ce({status:Z(p),error:v,url:t,route:r})}if(u.type==="redirect")return u}const m=u==null?void 0:u.nodes;let b=!1;const A=l.map(async(p,v)=>{var fe;if(!p)return;const k=y.branch[v],E=m==null?void 0:m[v];if((!E||E.type==="skip")&&p[1]===(k==null?void 0:k.loader)&&!Ve(b,g,h,d,(fe=k.universal)==null?void 0:fe.uses,a))return k;if(b=!0,(E==null?void 0:E.type)==="error")throw E;return Le({loader:p[1],url:t,params:a,route:r,parent:async()=>{var xe;const Te={};for(let ue=0;ue<v;ue+=1)Object.assign(Te,(xe=await A[ue])==null?void 0:xe.data);return Te},server_data_node:Pe(E===void 0&&p[0]?{type:"skip"}:E??null,p[0]?k==null?void 0:k.server:void 0)})});for(const p of A)p.catch(()=>{});const w=[];for(let p=0;p<l.length;p+=1)if(l[p])try{w.push(await A[p])}catch(v){if(v instanceof He)return{type:"redirect",location:v.location};if(M.has(o))return Fe({error:await C(v,{params:a,url:t,route:{id:r.id}}),url:t,params:a,route:r});let k=Z(v),E;if(m!=null&&m.includes(v))k=v.status??k,E=v.error;else if(v instanceof re)E=v.body;else{if(await T.updated.check())return await V(t);E=await C(v,{params:a,url:t,route:{id:r.id}})}const x=await Zt(p,w,s);return x?ae({url:t,params:a,branch:w.slice(0,x.idx).concat(x.node),status:k,error:E,route:r}):await st(t,{id:r.id},E,k)}else w.push(void 0);return ae({url:t,params:a,branch:w,status:200,error:null,route:r,form:n?void 0:null})}async function Zt(e,n,t){for(;e--;)if(t[e]){let a=e;for(;!n[a];)a-=1;try{return{idx:a+1,node:{node:await t[e](),loader:t[e],data:{},server:null,universal:null}}}catch{continue}}}async function ce({status:e,error:n,url:t,route:a}){const r={};let o=null;if(q.server_loads[0]===0)try{const l=await ct(t,[!0]);if(l.type!=="data"||l.nodes[0]&&l.nodes[0].type!=="data")throw 0;o=l.nodes[0]??null}catch{(t.origin!==Y||t.pathname!==location.pathname||Ae)&&await V(t)}const i=await Le({loader:ye,url:t,params:r,route:a,parent:()=>Promise.resolve({}),server_data_node:Pe(o)}),c={node:await Q(),loader:Q,universal:null,server:null,data:null};return ae({url:t,params:r,branch:[i,c],status:e,error:n,route:null})}function le(e,n){if(!e||oe(e,P))return;let t;try{t=q.hooks.reroute({url:new URL(e)})??e.pathname}catch{return}const a=ot(t);for(const r of ie){const o=r.exec(a);if(o)return{id:e.pathname+e.search,invalidating:n,route:r,params:gt(o),url:e}}}function ot(e){return pt(e.slice(P.length)||"/")}function it({url:e,type:n,intent:t,delta:a}){let r=!1;const o=ft(y,t,e,n);a!==void 0&&(o.navigation.delta=a);const s={...o.navigation,cancel:()=>{r=!0,o.reject(new Error("navigation cancelled"))}};return z||Qe.forEach(i=>i(s)),r?null:o}async function W({type:e,url:n,popped:t,keepfocus:a,noscroll:r,replace_state:o,state:s={},redirect_count:i=0,nav_token:c={},accept:l=$e,block:u=$e}){const h=le(n,!1),g=it({url:n,type:e,delta:t==null?void 0:t.delta,intent:h});if(!g){u();return}const d=S,_=L;l(),z=!0,ne&&T.navigating.set(g.navigation),F=c;let f=h&&await Ue(h);if(!f){if(oe(n,P))return await V(n);f=await st(n,{id:null},await C(new ve(404,"Not Found",`Not found: ${n.pathname}`),{url:n,params:{},route:{id:null}}),404)}if(n=(h==null?void 0:h.url)||n,F!==c)return g.reject(new Error("navigation aborted")),!1;if(f.type==="redirect")if(i>=20)f=await ce({status:500,error:await C(new Error("Redirect loop"),{url:n,params:{},route:{id:null}}),url:n,route:{id:null}});else return Ie(new URL(f.location,n).href,{},i+1,c),!1;else f.props.page.status>=400&&await T.updated.check()&&await V(n);if(tt(),Se(d),nt(_),f.props.page.url.pathname!==n.pathname&&(n.pathname=f.props.page.url.pathname),s=t?t.state:s,!t){const w=o?0:1,p={[D]:S+=w,[B]:L+=w,[Ye]:s};(o?history.replaceState:history.pushState).call(history,p,"",n),o||zt(S,L)}if(R=null,f.props.page.state=s,ne){y=f.state,f.props.page&&(f.props.page.url=n);const w=(await Promise.all(Yt.map(p=>p(g.navigation)))).filter(p=>typeof p=="function");if(w.length>0){let p=function(){$=$.filter(v=>!w.includes(v))};w.push(p),$.push(...w)}se.$set(f.props),et=!0}else rt(f,we,!1);const{activeElement:m}=document;await dt();const b=t?t.scroll:r?Ee():null;if(De){const w=n.hash&&document.getElementById(decodeURIComponent(n.hash.slice(1)));b?scrollTo(b.x,b.y):w?w.scrollIntoView():scrollTo(0,0)}const A=document.activeElement!==m&&document.activeElement!==document.body;!a&&!A&&an(),De=!0,f.props.page&&(I=f.props.page),z=!1,e==="popstate"&&at(L),g.fulfil(void 0),$.forEach(w=>w(g.navigation)),T.navigating.set(null)}async function st(e,n,t,a){return e.origin===Y&&e.pathname===location.pathname&&!Ae?await ce({status:a,error:t,url:e,route:n}):await V(e)}function Qt(){let e;U.addEventListener("mousemove",o=>{const s=o.target;clearTimeout(e),e=setTimeout(()=>{a(s,2)},20)});function n(o){a(o.composedPath()[0],1)}U.addEventListener("mousedown",n),U.addEventListener("touchstart",n,{passive:!0});const t=new IntersectionObserver(o=>{for(const s of o)s.isIntersecting&&(me(s.target.href),t.unobserve(s.target))},{threshold:0});function a(o,s){const i=Xe(o,U);if(!i)return;const{url:c,external:l,download:u}=_e(i,P);if(l||u)return;const h=X(i);if(!h.reload)if(s<=h.preload_data){const g=le(c,!1);g&&Jt(g)}else s<=h.preload_code&&me(c.pathname)}function r(){t.disconnect();for(const o of U.querySelectorAll("a")){const{url:s,external:i,download:c}=_e(o,P);if(i||c)continue;const l=X(o);l.reload||(l.preload_code===J.viewport&&t.observe(o),l.preload_code===J.eager&&me(s.pathname))}}$.push(r),r()}function C(e,n){if(e instanceof re)return e.body;const t=Z(e),a=Kt(e);return q.hooks.handleError({error:e,event:n,status:t,message:a})??{message:a}}function en(e,n={}){return e=We(e),e.origin!==Y?Promise.reject(new Error("goto: invalid URL")):Ie(e,n,0)}function cn(e){if(typeof e=="function")ee.push(e);else{const{href:n}=new URL(e,location.href);ee.push(t=>t.href===n)}return Wt()}function tn(){var n;history.scrollRestoration="manual",addEventListener("beforeunload",t=>{let a=!1;if(Ce(),!z){const r=ft(y,void 0,null,"leave"),o={...r.navigation,cancel:()=>{a=!0,r.reject(new Error("navigation cancelled"))}};Qe.forEach(s=>s(o))}a?(t.preventDefault(),t.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{document.visibilityState==="hidden"&&Ce()}),(n=navigator.connection)!=null&&n.saveData||Qt(),U.addEventListener("click",async t=>{var g;if(t.button||t.which!==1||t.metaKey||t.ctrlKey||t.shiftKey||t.altKey||t.defaultPrevented)return;const a=Xe(t.composedPath()[0],U);if(!a)return;const{url:r,external:o,target:s,download:i}=_e(a,P);if(!r)return;if(s==="_parent"||s==="_top"){if(window.parent!==window)return}else if(s&&s!=="_self")return;const c=X(a);if(!(a instanceof SVGAElement)&&r.protocol!==location.protocol&&!(r.protocol==="https:"||r.protocol==="http:")||i)return;if(o||c.reload){it({url:r,type:"link"})?z=!0:t.preventDefault();return}const[u,h]=r.href.split("#");if(h!==void 0&&u===he(location)){const[,d]=y.url.href.split("#");if(d===h){t.preventDefault(),h===""||h==="top"&&a.ownerDocument.getElementById("top")===null?window.scrollTo({top:0}):(g=a.ownerDocument.getElementById(h))==null||g.scrollIntoView();return}if(G=!0,Se(S),e(r),!c.replace_state)return;G=!1}t.preventDefault(),await new Promise(d=>{requestAnimationFrame(()=>{setTimeout(d,0)}),setTimeout(d,100)}),W({type:"link",url:r,keepfocus:c.keepfocus,noscroll:c.noscroll,replace_state:c.replace_state??r.href===location.href})}),U.addEventListener("submit",t=>{if(t.defaultPrevented)return;const a=HTMLFormElement.prototype.cloneNode.call(t.target),r=t.submitter;if(((r==null?void 0:r.formMethod)||a.method)!=="get")return;const s=new URL((r==null?void 0:r.hasAttribute("formaction"))&&(r==null?void 0:r.formAction)||a.action);if(oe(s,P))return;const i=t.target,c=X(i);if(c.reload)return;t.preventDefault(),t.stopPropagation();const l=new FormData(i),u=r==null?void 0:r.getAttribute("name");u&&l.append(u,(r==null?void 0:r.getAttribute("value"))??""),s.search=new URLSearchParams(l).toString(),W({type:"form",url:s,keepfocus:c.keepfocus,noscroll:c.noscroll,replace_state:c.replace_state??s.href===location.href})}),addEventListener("popstate",async t=>{var a;if((a=t.state)!=null&&a[D]){const r=t.state[D];if(F={},r===S)return;const o=N[r],s=t.state[Ye]??{},i=new URL(t.state[Nt]??location.href),c=t.state[B],l=he(location)===he(y.url);if(c===L&&(et||l)){e(i),N[S]=Ee(),o&&scrollTo(o.x,o.y),s!==I.state&&(I={...I,state:s},se.$set({page:I})),S=r;return}const h=r-S;await W({type:"popstate",url:i,popped:{state:s,scroll:o,delta:h},accept:()=>{S=r,L=c},block:()=>{history.go(-h)},nav_token:F})}else if(!G){const r=new URL(location.href);e(r)}}),addEventListener("hashchange",()=>{G&&(G=!1,history.replaceState({...history.state,[D]:++S,[B]:L},"",location.href))});for(const t of document.querySelectorAll("link"))t.rel==="icon"&&(t.href=t.href);addEventListener("pageshow",t=>{t.persisted&&T.navigating.set(null)});function e(t){y.url=t,T.page.set({...I,url:t}),T.page.notify()}}async function nn(e,{status:n=200,error:t,node_ids:a,params:r,route:o,data:s,form:i}){Ae=!0;const c=new URL(location.href);({params:r={},route:o={id:null}}=le(c,!1)||{});let l;try{const u=a.map(async(d,_)=>{const f=s[_];return f!=null&&f.uses&&(f.uses=lt(f.uses)),Le({loader:q.nodes[d],url:c,params:r,route:o,parent:async()=>{const m={};for(let b=0;b<_;b+=1)Object.assign(m,(await u[b]).data);return m},server_data_node:Pe(f)})}),h=await Promise.all(u),g=ie.find(({id:d})=>d===o.id);if(g){const d=g.layouts;for(let _=0;_<d.length;_++)d[_]||h.splice(_,0,void 0)}l=ae({url:c,params:r,branch:h,status:n,error:t,form:i,route:g??null})}catch(u){if(u instanceof He){await V(new URL(u.location,location.href));return}l=await ce({status:Z(u),error:await C(u,{url:c,params:r,route:o}),url:c,route:o})}l.props.page&&(l.props.page.state={}),rt(l,e,!0)}async function ct(e,n){var r;const t=new URL(e);t.pathname=vt(e.pathname),e.pathname.endsWith("/")&&t.searchParams.append(Bt,"1"),t.searchParams.append(Mt,n.map(o=>o?"1":"0").join(""));const a=await Me(t.href);if(!a.ok){let o;throw(r=a.headers.get("content-type"))!=null&&r.includes("application/json")?o=await a.json():a.status===404?o="Not Found":a.status===500&&(o="Internal Error"),new re(a.status,o)}return new Promise(async o=>{var h;const s=new Map,i=a.body.getReader(),c=new TextDecoder;function l(g){return qt(g,{Promise:d=>new Promise((_,f)=>{s.set(d,{fulfil:_,reject:f})})})}let u="";for(;;){const{done:g,value:d}=await i.read();if(g&&!u)break;for(u+=!d&&u?`
`:c.decode(d,{stream:!0});;){const _=u.indexOf(`
`);if(_===-1)break;const f=JSON.parse(u.slice(0,_));if(u=u.slice(_+1),f.type==="redirect")return o(f);if(f.type==="data")(h=f.nodes)==null||h.forEach(m=>{(m==null?void 0:m.type)==="data"&&(m.uses=lt(m.uses),m.data=l(m.data))}),o(f);else if(f.type==="chunk"){const{id:m,data:b,error:A}=f,w=s.get(m);s.delete(m),A?w.reject(l(A)):w.fulfil(l(b))}}}})}function lt(e){return{dependencies:new Set((e==null?void 0:e.dependencies)??[]),params:new Set((e==null?void 0:e.params)??[]),parent:!!(e!=null&&e.parent),route:!!(e!=null&&e.route),url:!!(e!=null&&e.url),search_params:new Set((e==null?void 0:e.search_params)??[])}}function an(){const e=document.querySelector("[autofocus]");if(e)e.focus();else{const n=document.body,t=n.getAttribute("tabindex");n.tabIndex=-1,n.focus({preventScroll:!0,focusVisible:!1}),t!==null?n.setAttribute("tabindex",t):n.removeAttribute("tabindex");const a=getSelection();if(a&&a.type!=="None"){const r=[];for(let o=0;o<a.rangeCount;o+=1)r.push(a.getRangeAt(o));setTimeout(()=>{if(a.rangeCount===r.length){for(let o=0;o<a.rangeCount;o+=1){const s=r[o],i=a.getRangeAt(o);if(s.commonAncestorContainer!==i.commonAncestorContainer||s.startContainer!==i.startContainer||s.endContainer!==i.endContainer||s.startOffset!==i.startOffset||s.endOffset!==i.endOffset)return}a.removeAllRanges()}})}}}function ft(e,n,t,a){var c,l;let r,o;const s=new Promise((u,h)=>{r=u,o=h});return s.catch(()=>{}),{navigation:{from:{params:e.params,route:{id:((c=e.route)==null?void 0:c.id)??null},url:e.url},to:t&&{params:(n==null?void 0:n.params)??null,route:{id:((l=n==null?void 0:n.route)==null?void 0:l.id)??null},url:t},willUnload:!n,type:a,complete:s},fulfil:r,reject:o}}export{sn as a,en as g,cn as i,T as s,ke as w};
