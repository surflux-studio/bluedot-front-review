const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./web.DgHDM2y7.js","./emitter.PJNP4wAS.js","./preload-helper.D6kgxu3v.js","./entry.DYdHKLY6.js","./scheduler.DH3jNSXp.js"])))=>i.map(i=>d[i]);
import{_ as dt}from"./preload-helper.D6kgxu3v.js";import{r as lt}from"./emitter.PJNP4wAS.js";function P(t){if(typeof t!="string"||!t)throw new Error("expected a non-empty string, got: "+t)}function Y(t){if(typeof t!="number")throw new Error("expected a number, got: "+t)}const ft=1,mt=1,O="emoji",$="keyvalue",ue="favorites",pt="tokens",Ce="tokens",ht="unicode",Ie="count",gt="group",bt="order",Ae="group-order",re="eTag",W="url",ye="skinTone",M="readonly",de="readwrite",Le="skinUnicodes",yt="skinUnicodes",kt="https://cdn.jsdelivr.net/npm/emoji-picker-element-data@^1/en/emojibase/data.json",Et="en";function vt(t,e){const n=new Set,r=[];for(const i of t){const o=e(i);n.has(o)||(n.add(o),r.push(i))}return r}function ke(t){return vt(t,e=>e.unicode)}function wt(t){function e(n,r,i){const o=r?t.createObjectStore(n,{keyPath:r}):t.createObjectStore(n);if(i)for(const[a,[f,m]]of Object.entries(i))o.createIndex(a,f,{multiEntry:m});return o}e($),e(O,ht,{[Ce]:[pt,!0],[Ae]:[[gt,bt]],[Le]:[yt,!0]}),e(ue,void 0,{[Ie]:[""]})}const ie={},G={},V={};function Oe(t,e,n){n.onerror=()=>e(n.error),n.onblocked=()=>e(new Error("IDB blocked")),n.onsuccess=()=>t(n.result)}async function Tt(t){const e=await new Promise((n,r)=>{const i=indexedDB.open(t,ft);ie[t]=i,i.onupgradeneeded=o=>{o.oldVersion<mt&&wt(i.result)},Oe(n,r,i)});return e.onclose=()=>le(t),e}function jt(t){return G[t]||(G[t]=Tt(t)),G[t]}function A(t,e,n,r){return new Promise((i,o)=>{const a=t.transaction(e,n,{durability:"relaxed"}),f=typeof e=="string"?a.objectStore(e):e.map(u=>a.objectStore(u));let m;r(f,a,u=>{m=u}),a.oncomplete=()=>i(m),a.onerror=()=>o(a.error)})}function le(t){const e=ie[t],n=e&&e.result;if(n){n.close();const r=V[t];if(r)for(const i of r)i()}delete ie[t],delete G[t],delete V[t]}function St(t){return new Promise((e,n)=>{le(t);const r=indexedDB.deleteDatabase(t);Oe(e,n,r)})}function xt(t,e){let n=V[t];n||(n=V[t]=[]),n.push(e)}const _t=new Set([":D","XD",":'D","O:)",":X",":P",";P","XP",":L",":Z",":j","8D","XO","8)",":B",":O",":S",":'o","Dx","X(","D:",":C",">0)",":3","</3","<3","\\M/",":E","8#"]);function D(t){return t.split(/[\s_]+/).map(e=>!e.match(/\w/)||_t.has(e)?e.toLowerCase():e.replace(/[)(:,]/g,"").replace(/’/g,"'").toLowerCase()).filter(Boolean)}const Ct=2;function De(t){return t.filter(Boolean).map(e=>e.toLowerCase()).filter(e=>e.length>=Ct)}function It(t){return t.map(({annotation:n,emoticon:r,group:i,order:o,shortcodes:a,skins:f,tags:m,emoji:u,version:d})=>{const h=[...new Set(De([...(a||[]).map(D).flat(),...(m||[]).map(D).flat(),...D(n),r]))].sort(),l={annotation:n,group:i,order:o,tags:m,tokens:h,unicode:u,version:d};if(r&&(l.emoticon=r),a&&(l.shortcodes=a),f){l.skinTones=[],l.skinUnicodes=[],l.skinVersions=[];for(const{tone:g,emoji:w,version:j}of f)l.skinTones.push(g),l.skinUnicodes.push(w),l.skinVersions.push(j)}return l})}function $e(t,e,n,r){t[e](n).onsuccess=i=>r&&r(i.target.result)}function L(t,e,n){$e(t,"get",e,n)}function Me(t,e,n){$e(t,"getAll",e,n)}function fe(t){t.commit&&t.commit()}function At(t,e){let n=t[0];for(let r=1;r<t.length;r++){const i=t[r];e(n)>e(i)&&(n=i)}return n}function Fe(t,e){const n=At(t,i=>i.length),r=[];for(const i of n)t.some(o=>o.findIndex(a=>e(a)===e(i))===-1)||r.push(i);return r}async function Lt(t){return!await me(t,$,W)}async function Ot(t,e,n){const[r,i]=await Promise.all([re,W].map(o=>me(t,$,o)));return r===n&&i===e}async function Dt(t,e){return A(t,O,M,(r,i,o)=>{let a;const f=()=>{r.getAll(a&&IDBKeyRange.lowerBound(a,!0),50).onsuccess=m=>{const u=m.target.result;for(const d of u)if(a=d.unicode,e(d))return o(d);if(u.length<50)return o();f()}};f()})}async function Be(t,e,n,r){try{const i=It(e);await A(t,[O,$],de,([o,a],f)=>{let m,u,d=0;function h(){++d===2&&l()}function l(){if(!(m===r&&u===n)){o.clear();for(const g of i)o.put(g);a.put(r,re),a.put(n,W),fe(f)}}L(a,re,g=>{m=g,h()}),L(a,W,g=>{u=g,h()})})}finally{}}async function $t(t,e){return A(t,O,M,(n,r,i)=>{const o=IDBKeyRange.bound([e,0],[e+1,0],!1,!0);Me(n.index(Ae),o,i)})}async function Re(t,e){const n=De(D(e));return n.length?A(t,O,M,(r,i,o)=>{const a=[],f=()=>{a.length===n.length&&m()},m=()=>{const u=Fe(a,d=>d.unicode);o(u.sort((d,h)=>d.order<h.order?-1:1))};for(let u=0;u<n.length;u++){const d=n[u],h=u===n.length-1?IDBKeyRange.bound(d,d+"￿",!1,!0):IDBKeyRange.only(d);Me(r.index(Ce),h,l=>{a.push(l),f()})}}):[]}async function Mt(t,e){const n=await Re(t,e);return n.length?n.filter(r=>(r.shortcodes||[]).map(o=>o.toLowerCase()).includes(e.toLowerCase()))[0]||null:await Dt(t,i=>(i.shortcodes||[]).includes(e.toLowerCase()))||null}async function Ft(t,e){return A(t,O,M,(n,r,i)=>L(n,e,o=>{if(o)return i(o);L(n.index(Le),e,a=>i(a||null))}))}function me(t,e,n){return A(t,e,M,(r,i,o)=>L(r,n,o))}function Bt(t,e,n,r){return A(t,e,de,(i,o)=>{i.put(r,n),fe(o)})}function Rt(t,e){return A(t,ue,de,(n,r)=>L(n,e,i=>{n.put((i||0)+1,e),fe(r)}))}function Nt(t,e,n){return n===0?[]:A(t,[ue,O],M,([r,i],o,a)=>{const f=[];r.index(Ie).openCursor(void 0,"prev").onsuccess=m=>{const u=m.target.result;if(!u)return a(f);function d(g){if(f.push(g),f.length===n)return a(f);u.continue()}const h=u.primaryKey,l=e.byName(h);if(l)return d(l);L(i,h,g=>{if(g)return d(g);u.continue()})}})}const z="";function Pt(t,e){const n=new Map;for(const i of t){const o=e(i);for(const a of o){let f=n;for(let u=0;u<a.length;u++){const d=a.charAt(u);let h=f.get(d);h||(h=new Map,f.set(d,h)),f=h}let m=f.get(z);m||(m=[],f.set(z,m)),m.push(i)}}return(i,o)=>{let a=n;for(let u=0;u<i.length;u++){const d=i.charAt(u),h=a.get(d);if(h)a=h;else return[]}if(o)return a.get(z)||[];const f=[],m=[a];for(;m.length;){const d=[...m.shift().entries()].sort((h,l)=>h[0]<l[0]?-1:1);for(const[h,l]of d)h===z?f.push(...l):m.push(l)}return f}}const zt=["name","url"];function Ut(t){const e=t&&Array.isArray(t),n=e&&t.length&&(!t[0]||zt.some(r=>!(r in t[0])));if(!e||n)throw new Error("Custom emojis are in the wrong format")}function Ee(t){Ut(t);const e=(l,g)=>l.name.toLowerCase()<g.name.toLowerCase()?-1:1,n=t.sort(e),i=Pt(t,l=>{const g=new Set;if(l.shortcodes)for(const w of l.shortcodes)for(const j of D(w))g.add(j);return g}),o=l=>i(l,!0),a=l=>i(l,!1),f=l=>{const g=D(l),w=g.map((j,C)=>(C<g.length-1?o:a)(j));return Fe(w,j=>j.name).sort(e)},m=new Map,u=new Map;for(const l of t){u.set(l.name.toLowerCase(),l);for(const g of l.shortcodes||[])m.set(g.toLowerCase(),l)}return{all:n,search:f,byShortcode:l=>m.get(l.toLowerCase()),byName:l=>u.get(l.toLowerCase())}}const Gt=typeof wrappedJSObject<"u";function B(t){if(!t)return t;if(Gt&&(t=structuredClone(t)),delete t.tokens,t.skinTones){const e=t.skinTones.length;t.skins=Array(e);for(let n=0;n<e;n++)t.skins[n]={tone:t.skinTones[n],unicode:t.skinUnicodes[n],version:t.skinVersions[n]};delete t.skinTones,delete t.skinUnicodes,delete t.skinVersions}return t}function Ne(t){t||console.warn("emoji-picker-element is more efficient if the dataSource server exposes an ETag header.")}const Kt=["annotation","emoji","group","order","version"];function Wt(t){if(!t||!Array.isArray(t)||!t[0]||typeof t[0]!="object"||Kt.some(e=>!(e in t[0])))throw new Error("Emoji data is in the wrong format")}function Pe(t,e){if(Math.floor(t.status/100)!==2)throw new Error("Failed to fetch: "+e+":  "+t.status)}async function Vt(t){const e=await fetch(t,{method:"HEAD"});Pe(e,t);const n=e.headers.get("etag");return Ne(n),n}async function se(t){const e=await fetch(t);Pe(e,t);const n=e.headers.get("etag");Ne(n);const r=await e.json();return Wt(r),[n,r]}function Ht(t){for(var e="",n=new Uint8Array(t),r=n.byteLength,i=-1;++i<r;)e+=String.fromCharCode(n[i]);return e}function qt(t){for(var e=t.length,n=new ArrayBuffer(e),r=new Uint8Array(n),i=-1;++i<e;)r[i]=t.charCodeAt(i);return n}async function ze(t){const e=JSON.stringify(t);let n=qt(e);const r=await crypto.subtle.digest("SHA-1",n),i=Ht(r);return btoa(i)}async function Xt(t,e){let n,r=await Vt(e);if(!r){const i=await se(e);r=i[0],n=i[1],r||(r=await ze(n))}await Ot(t,e,r)||(n||(n=(await se(e))[1]),await Be(t,n,e,r))}async function Yt(t,e){let[n,r]=await se(e);n||(n=await ze(r)),await Be(t,r,e,n)}class Zt{constructor({dataSource:e=kt,locale:n=Et,customEmoji:r=[]}={}){this.dataSource=e,this.locale=n,this._dbName=`emoji-picker-element-${this.locale}`,this._db=void 0,this._lazyUpdate=void 0,this._custom=Ee(r),this._clear=this._clear.bind(this),this._ready=this._init()}async _init(){const e=this._db=await jt(this._dbName);xt(this._dbName,this._clear);const n=this.dataSource;await Lt(e)?await Yt(e,n):this._lazyUpdate=Xt(e,n)}async ready(){const e=async()=>(this._ready||(this._ready=this._init()),this._ready);await e(),this._db||await e()}async getEmojiByGroup(e){return Y(e),await this.ready(),ke(await $t(this._db,e)).map(B)}async getEmojiBySearchQuery(e){P(e),await this.ready();const n=this._custom.search(e),r=ke(await Re(this._db,e)).map(B);return[...n,...r]}async getEmojiByShortcode(e){P(e),await this.ready();const n=this._custom.byShortcode(e);return n||B(await Mt(this._db,e))}async getEmojiByUnicodeOrName(e){P(e),await this.ready();const n=this._custom.byName(e);return n||B(await Ft(this._db,e))}async getPreferredSkinTone(){return await this.ready(),await me(this._db,$,ye)||0}async setPreferredSkinTone(e){return Y(e),await this.ready(),Bt(this._db,$,ye,e)}async incrementFavoriteEmojiCount(e){return P(e),await this.ready(),Rt(this._db,e)}async getTopFavoriteEmoji(e){return Y(e),await this.ready(),(await Nt(this._db,this._custom,e)).map(B)}set customEmoji(e){this._custom=Ee(e)}get customEmoji(){return this._custom.all}async _shutdown(){await this.ready();try{await this._lazyUpdate}catch{}}_clear(){this._db=this._ready=this._lazyUpdate=void 0}async close(){await this._shutdown(),await le(this._dbName)}async delete(){await this._shutdown(),await St(this._dbName)}}const ae=[[-1,"✨","custom"],[0,"😀","smileys-emotion"],[1,"👋","people-body"],[3,"🐱","animals-nature"],[4,"🍎","food-drink"],[5,"🏠️","travel-places"],[6,"⚽","activities"],[7,"📝","objects"],[8,"⛔️","symbols"],[9,"🏁","flags"]].map(([t,e,n])=>({id:t,emoji:e,name:n})),Z=ae.slice(1),Jt=2,ve=6,Ue=typeof requestIdleCallback=="function"?requestIdleCallback:setTimeout;function we(t){return t.unicode.includes("‍")}const Qt={"🫩":16,"🫨":15.1,"🫠":14,"🥲":13.1,"🥻":12.1,"🥰":11,"🤩":5,"👱‍♀️":4,"🤣":3,"👁️‍🗨️":2,"😀":1,"😐️":.7,"😃":.6},en=1e3,tn="🖐️",nn=8,on=["😊","😒","❤️","👍️","😍","😂","😭","☺️","😔","😩","😏","💕","🙌","😘"],Ge='"Twemoji Mozilla","Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji","EmojiOne Color","Android Emoji",sans-serif',rn=(t,e)=>t<e?-1:t>e?1:0,Te=(t,e)=>{const n=document.createElement("canvas");n.width=n.height=1;const r=n.getContext("2d",{willReadFrequently:!0});return r.textBaseline="top",r.font=`100px ${Ge}`,r.fillStyle=e,r.scale(.01,.01),r.fillText(t,0,0),r.getImageData(0,0,1,1).data},sn=(t,e)=>{const n=[...t].join(","),r=[...e].join(",");return n===r&&!n.startsWith("0,0,0,")};function an(t){const e=Te(t,"#000"),n=Te(t,"#fff");return e&&n&&sn(e,n)}function cn(){const t=Object.entries(Qt);try{for(const[e,n]of t)if(an(e))return n}catch{}finally{}return t[0][1]}let J;const Q=()=>(J||(J=new Promise(t=>Ue(()=>t(cn())))),J),ce=new Map,un="️",dn="\uD83C",ln="‍",fn=127995,mn=57339;function pn(t,e){if(e===0)return t;const n=t.indexOf(ln);return n!==-1?t.substring(0,n)+String.fromCodePoint(fn+e-1)+t.substring(n):(t.endsWith(un)&&(t=t.substring(0,t.length-1)),t+dn+String.fromCodePoint(mn+e-1))}function I(t){t.preventDefault(),t.stopPropagation()}function ee(t,e,n){return e+=t?-1:1,e<0?e=n.length-1:e>=n.length&&(e=0),e}function Ke(t,e){const n=new Set,r=[];for(const i of t){const o=e(i);n.has(o)||(n.add(o),r.push(i))}return r}function hn(t,e){const n=r=>{const i={};for(const o of r)typeof o.tone=="number"&&o.version<=e&&(i[o.tone]=o.unicode);return i};return t.map(({unicode:r,skins:i,shortcodes:o,url:a,name:f,category:m,annotation:u})=>({unicode:r,name:f,shortcodes:o,url:a,category:m,annotation:u,id:r||f,skins:i&&n(i)}))}const K=requestAnimationFrame;let gn=typeof ResizeObserver=="function";function bn(t,e,n){let r;gn?(r=new ResizeObserver(n),r.observe(t)):K(n),e.addEventListener("abort",()=>{r&&r.disconnect()})}function je(t){{const e=document.createRange();return e.selectNode(t.firstChild),e.getBoundingClientRect().width}}let te;function yn(t,e,n){let r=!0;for(const i of t){const o=n(i),a=je(o);typeof te>"u"&&(te=je(e));const f=a/1.8<te;ce.set(i.unicode,f),f||(r=!1)}return r}function kn(t){return Ke(t,e=>e)}function En(t){t&&(t.scrollTop=0)}function R(t,e,n){let r=t.get(e);return r||(r=n(),t.set(e,r)),r}function Se(t){return""+t}function vn(t){const e=document.createElement("template");return e.innerHTML=t,e}const wn=new WeakMap,Tn=new WeakMap,jn=Symbol("un-keyed"),Sn="replaceChildren"in Element.prototype;function xn(t,e){Sn?t.replaceChildren(...e):(t.innerHTML="",t.append(...e))}function _n(t,e){let n=t.firstChild,r=0;for(;n;){if(e[r]!==n)return!0;n=n.nextSibling,r++}return r!==e.length}function Cn(t,e){const{targetNode:n}=e;let{targetParentNode:r}=e,i=!1;r?i=_n(r,t):(i=!0,e.targetNode=void 0,e.targetParentNode=r=n.parentNode),i&&xn(r,t)}function In(t,e){for(const n of e){const{targetNode:r,currentExpression:i,binding:{expressionIndex:o,attributeName:a,attributeValuePre:f,attributeValuePost:m}}=n,u=t[o];if(i!==u)if(n.currentExpression=u,a)r.setAttribute(a,f+Se(u)+m);else{let d;Array.isArray(u)?Cn(u,n):u instanceof Element?(d=u,r.replaceWith(d)):r.nodeValue=Se(u),d&&(n.targetNode=d)}}}function An(t){let e="",n=!1,r=!1,i=-1;const o=new Map,a=[];for(let m=0,u=t.length;m<u;m++){const d=t[m];if(e+=d,m===u-1)break;for(let S=0;S<d.length;S++)switch(d.charAt(S)){case"<":{d.charAt(S+1)==="/"?a.pop():(n=!0,a.push(++i));break}case">":{n=!1,r=!1;break}case"=":{r=!0;break}}const h=a[a.length-1],l=R(o,h,()=>[]);let g,w,j;if(r){const S=/(\S+)="?([^"=]*)$/.exec(d);g=S[1],w=S[2],j=/^[^">]*/.exec(t[m+1])[0]}const C={attributeName:g,attributeValuePre:w,attributeValuePost:j,expressionIndex:m};l.push(C),!n&&!r&&(e+=" ")}return{template:vn(e),elementsToBindings:o}}function xe(t,e,n){for(let r=0;r<t.length;r++){const i=t[r],o=i.attributeName?e:e.firstChild,a={binding:i,targetNode:o,targetParentNode:void 0,currentExpression:void 0};n.push(a)}}function Ln(t,e){const n=[];let r;if(e.size===1&&(r=e.get(0)))xe(r,t,n);else{const i=document.createTreeWalker(t,NodeFilter.SHOW_ELEMENT);let o=t,a=-1;do{const f=e.get(++a);f&&xe(f,o,n)}while(o=i.nextNode())}return n}function On(t){const{template:e,elementsToBindings:n}=R(wn,t,()=>An(t)),r=e.cloneNode(!0).content.firstElementChild,i=Ln(r,n);return function(a){return In(a,i),r}}function Dn(t){const e=R(Tn,t,()=>new Map);let n=jn;function r(o,...a){const f=R(e,o,()=>new Map);return R(f,n,()=>On(o))(a)}function i(o,a,f){return o.map((m,u)=>{const d=n;n=f(m);try{return a(m,u)}finally{n=d}})}return{map:i,html:r}}function $n(t,e,n,r,i,o,a,f,m){const{labelWithSkin:u,titleForEmoji:d,unicodeWithSkin:h}=n,{html:l,map:g}=Dn(e);function w(y,k,T){return g(y,(x,F)=>l`<button role="${k?"option":"menuitem"}" aria-selected="${k?F===e.activeSearchItem:""}" aria-label="${u(x,e.currentSkinTone)}" title="${d(x)}" class="${"emoji"+(k&&F===e.activeSearchItem?" active":"")+(x.unicode?"":" custom-emoji")}" id="${`${T}-${x.id}`}" style="${x.unicode?"":`--custom-emoji-background: url(${JSON.stringify(x.url)})`}">${x.unicode?h(x,e.currentSkinTone):""}</button>`,x=>`${T}-${x.id}`)}const C=l`<section data-ref="rootElement" class="picker" aria-label="${e.i18n.regionLabel}" style="${e.pickerStyle||""}"><div class="pad-top"></div><div class="search-row"><div class="search-wrapper"><input id="search" class="search" type="search" role="combobox" enterkeyhint="search" placeholder="${e.i18n.searchLabel}" autocapitalize="none" autocomplete="off" spellcheck="true" aria-expanded="${!!(e.searchMode&&e.currentEmojis.length)}" aria-controls="search-results" aria-describedby="search-description" aria-autocomplete="list" aria-activedescendant="${e.activeSearchItemId?`emo-${e.activeSearchItemId}`:""}" data-ref="searchElement" data-on-input="onSearchInput" data-on-keydown="onSearchKeydown"><label class="sr-only" for="search">${e.i18n.searchLabel}</label> <span id="search-description" class="sr-only">${e.i18n.searchDescription}</span></div><div class="skintone-button-wrapper ${e.skinTonePickerExpandedAfterAnimation?"expanded":""}"><button id="skintone-button" class="emoji ${e.skinTonePickerExpanded?"hide-focus":""}" aria-label="${e.skinToneButtonLabel}" title="${e.skinToneButtonLabel}" aria-describedby="skintone-description" aria-haspopup="listbox" aria-expanded="${e.skinTonePickerExpanded}" aria-controls="skintone-list" data-on-click="onClickSkinToneButton">${e.skinToneButtonText||""}</button></div><span id="skintone-description" class="sr-only">${e.i18n.skinToneDescription}</span><div data-ref="skinToneDropdown" id="skintone-list" class="skintone-list hide-focus ${e.skinTonePickerExpanded?"":"hidden no-animate"}" style="transform:translateY(${e.skinTonePickerExpanded?0:"calc(-1 * var(--num-skintones) * var(--total-emoji-size))"})" role="listbox" aria-label="${e.i18n.skinTonesLabel}" aria-activedescendant="skintone-${e.activeSkinTone}" aria-hidden="${!e.skinTonePickerExpanded}" tabIndex="-1" data-on-focusout="onSkinToneOptionsFocusOut" data-on-click="onSkinToneOptionsClick" data-on-keydown="onSkinToneOptionsKeydown" data-on-keyup="onSkinToneOptionsKeyup">${g(e.skinTones,(y,k)=>l`<div id="skintone-${k}" class="emoji ${k===e.activeSkinTone?"active":""}" aria-selected="${k===e.activeSkinTone}" role="option" title="${e.i18n.skinTones[k]}" aria-label="${e.i18n.skinTones[k]}">${y}</div>`,y=>y)}</div></div><div class="nav" role="tablist" style="grid-template-columns:repeat(${e.groups.length},1fr)" aria-label="${e.i18n.categoriesLabel}" data-on-keydown="onNavKeydown" data-on-click="onNavClick">${g(e.groups,y=>l`<button role="tab" class="nav-button" aria-controls="tab-${y.id}" aria-label="${e.i18n.categories[y.name]}" aria-selected="${!e.searchMode&&e.currentGroup.id===y.id}" title="${e.i18n.categories[y.name]}" data-group-id="${y.id}"><div class="nav-emoji emoji">${y.emoji}</div></button>`,y=>y.id)}</div><div class="indicator-wrapper"><div class="indicator" style="transform:translateX(${(e.isRtl?-1:1)*e.currentGroupIndex*100}%)"></div></div><div class="message ${e.message?"":"gone"}" role="alert" aria-live="polite">${e.message||""}</div><div data-ref="tabpanelElement" class="tabpanel ${!e.databaseLoaded||e.message?"gone":""}" role="${e.searchMode?"region":"tabpanel"}" aria-label="${e.searchMode?e.i18n.searchResultsLabel:e.i18n.categories[e.currentGroup.name]}" id="${e.searchMode?"":`tab-${e.currentGroup.id}`}" tabIndex="0" data-on-click="onEmojiClick"><div data-action="calculateEmojiGridStyle">${g(e.currentEmojisWithCategories,(y,k)=>l`<div><div id="menu-label-${k}" class="category ${e.currentEmojisWithCategories.length===1&&e.currentEmojisWithCategories[0].category===""?"gone":""}" aria-hidden="true">${e.searchMode?e.i18n.searchResultsLabel:y.category?y.category:e.currentEmojisWithCategories.length>1?e.i18n.categories.custom:e.i18n.categories[e.currentGroup.name]}</div><div class="emoji-menu ${k!==0&&!e.searchMode&&e.currentGroup.id===-1?"visibility-auto":""}" style="${`--num-rows: ${Math.ceil(y.emojis.length/e.numColumns)}`}" data-action="updateOnIntersection" role="${e.searchMode?"listbox":"menu"}" aria-labelledby="menu-label-${k}" id="${e.searchMode?"search-results":""}">${w(y.emojis,e.searchMode,"emo")}</div></div>`,y=>y.category)}</div></div><div class="favorites onscreen emoji-menu ${e.message?"gone":""}" role="menu" aria-label="${e.i18n.favoritesLabel}" data-on-click="onEmojiClick">${w(e.currentFavorites,!1,"fav")}</div><button data-ref="baselineEmoji" aria-hidden="true" tabindex="-1" class="abs-pos hidden emoji baseline-emoji">😀</button></section>`,S=(y,k)=>{for(const T of t.querySelectorAll(`[${y}]`))k(T,T.getAttribute(y))};if(m){t.appendChild(C);for(const y of["click","focusout","input","keydown","keyup"])S(`data-on-${y}`,(k,T)=>{k.addEventListener(y,r[T])});S("data-ref",(y,k)=>{o[k]=y}),a.addEventListener("abort",()=>{t.removeChild(C)})}S("data-action",(y,k)=>{let T=f.get(k);T||f.set(k,T=new WeakSet),T.has(y)||(T.add(y),i[k](y))})}const H=typeof queueMicrotask=="function"?queueMicrotask:t=>Promise.resolve().then(t);function Mn(t){let e=!1,n;const r=new Map,i=new Set;let o;const a=()=>{if(e)return;const u=[...i];i.clear();try{for(const d of u)d()}finally{o=!1,i.size&&(o=!0,H(a))}},f=new Proxy({},{get(u,d){if(n){let h=r.get(d);h||(h=new Set,r.set(d,h)),h.add(n)}return u[d]},set(u,d,h){if(u[d]!==h){u[d]=h;const l=r.get(d);if(l){for(const g of l)i.add(g);o||(o=!0,H(a))}}return!0}}),m=u=>{const d=()=>{const h=n;n=d;try{return u()}finally{n=h}};return d()};return t.addEventListener("abort",()=>{e=!0}),{state:f,createEffect:m}}function ne(t,e,n){if(t.length!==e.length)return!1;for(let r=0;r<t.length;r++)if(!n(t[r],e[r]))return!1;return!0}const _e=new WeakMap;function Fn(t,e,n){{const r=t.closest(".tabpanel");let i=_e.get(r);i||(i=new IntersectionObserver(n,{root:r,rootMargin:"50% 0px 50% 0px",threshold:0}),_e.set(r,i),e.addEventListener("abort",()=>{i.disconnect()})),i.observe(t)}}const oe=[],{assign:U}=Object;function Bn(t,e){const n={},r=new AbortController,i=r.signal,{state:o,createEffect:a}=Mn(i),f=new Map;U(o,{skinToneEmoji:void 0,i18n:void 0,database:void 0,customEmoji:void 0,customCategorySorting:void 0,emojiVersion:void 0}),U(o,e),U(o,{initialLoad:!0,currentEmojis:[],currentEmojisWithCategories:[],rawSearchText:"",searchText:"",searchMode:!1,activeSearchItem:-1,message:void 0,skinTonePickerExpanded:!1,skinTonePickerExpandedAfterAnimation:!1,currentSkinTone:0,activeSkinTone:0,skinToneButtonText:void 0,pickerStyle:void 0,skinToneButtonLabel:"",skinTones:[],currentFavorites:[],defaultFavoriteEmojis:void 0,numColumns:nn,isRtl:!1,currentGroupIndex:0,groups:Z,databaseLoaded:!1,activeSearchItemId:void 0}),a(()=>{o.currentGroup!==o.groups[o.currentGroupIndex]&&(o.currentGroup=o.groups[o.currentGroupIndex])});const m=s=>{t.getElementById(s).focus()},u=s=>t.getElementById(`emo-${s.id}`),d=(s,c)=>{n.rootElement.dispatchEvent(new CustomEvent(s,{detail:c,bubbles:!0,composed:!0}))},h=(s,c)=>s.id===c.id,l=(s,c)=>{const{category:p,emojis:b}=s,{category:E,emojis:v}=c;return p!==E?!1:ne(b,v,h)},g=s=>{ne(o.currentEmojis,s,h)||(o.currentEmojis=s)},w=s=>{o.searchMode!==s&&(o.searchMode=s)},j=s=>{ne(o.currentEmojisWithCategories,s,l)||(o.currentEmojisWithCategories=s)},C=(s,c)=>c&&s.skins&&s.skins[c]||s.unicode,k={labelWithSkin:(s,c)=>kn([s.name||C(s,c),s.annotation,...s.shortcodes||oe].filter(Boolean)).join(", "),titleForEmoji:s=>s.annotation||(s.shortcodes||oe).join(", "),unicodeWithSkin:C},T={onClickSkinToneButton:it,onEmojiClick:ot,onNavClick:tt,onNavKeydown:nt,onSearchKeydown:et,onSkinToneOptionsClick:rt,onSkinToneOptionsFocusOut:ct,onSkinToneOptionsKeydown:st,onSkinToneOptionsKeyup:at,onSearchInput:ut},x={calculateEmojiGridStyle:qe,updateOnIntersection:Xe};let F=!0;a(()=>{$n(t,o,k,T,x,n,i,f,F),F=!1}),o.emojiVersion||Q().then(s=>{s||(o.message=o.i18n.emojiUnsupportedMessage)}),a(()=>{async function s(){let c=!1;const p=setTimeout(()=>{c=!0,o.message=o.i18n.loadingMessage},en);try{await o.database.ready(),o.databaseLoaded=!0}catch(b){console.error(b),o.message=o.i18n.networkErrorMessage}finally{clearTimeout(p),c&&(c=!1,o.message="")}}o.database&&s()}),a(()=>{o.pickerStyle=`
      --num-groups: ${o.groups.length}; 
      --indicator-opacity: ${o.searchMode?0:1}; 
      --num-skintones: ${ve};`}),a(()=>{o.customEmoji&&o.database&&pe()}),a(()=>{o.customEmoji&&o.customEmoji.length?o.groups!==ae&&(o.groups=ae):o.groups!==Z&&(o.currentGroupIndex&&o.currentGroupIndex--,o.groups=Z)}),a(()=>{async function s(){o.databaseLoaded&&(o.currentSkinTone=await o.database.getPreferredSkinTone())}s()}),a(()=>{o.skinTones=Array(ve).fill().map((s,c)=>pn(o.skinToneEmoji,c))}),a(()=>{o.skinToneButtonText=o.skinTones[o.currentSkinTone]}),a(()=>{o.skinToneButtonLabel=o.i18n.skinToneLabel.replace("{skinTone}",o.i18n.skinTones[o.currentSkinTone])}),a(()=>{async function s(){const{database:c}=o,p=(await Promise.all(on.map(b=>c.getEmojiByUnicodeOrName(b)))).filter(Boolean);o.defaultFavoriteEmojis=p}o.databaseLoaded&&s()});function pe(){const{customEmoji:s,database:c}=o,p=s||oe;c.customEmoji!==p&&(c.customEmoji=p)}a(()=>{async function s(){pe();const{database:c,defaultFavoriteEmojis:p,numColumns:b}=o,E=await c.getTopFavoriteEmoji(b),v=await q(Ke([...E,...p],_=>_.unicode||_.name).slice(0,b));o.currentFavorites=v}o.databaseLoaded&&o.defaultFavoriteEmojis&&s()});function qe(s){bn(s,i,()=>{{const c=getComputedStyle(n.rootElement),p=parseInt(c.getPropertyValue("--num-columns"),10),b=c.getPropertyValue("direction")==="rtl";o.numColumns=p,o.isRtl=b}})}function Xe(s){Fn(s,i,c=>{for(const{target:p,isIntersecting:b}of c)p.classList.toggle("onscreen",b)})}a(()=>{async function s(){const{searchText:c,currentGroup:p,databaseLoaded:b,customEmoji:E}=o;if(!b)o.currentEmojis=[],o.searchMode=!1;else if(c.length>=Jt){const v=await Qe(c);o.searchText===c&&(g(v),w(!0))}else{const{id:v}=p;if(v!==-1||E&&E.length){const _=await Je(v);o.currentGroup.id===v&&(g(_),w(!1))}}}s()});const he=()=>{K(()=>En(n.tabpanelElement))};a(()=>{const{currentEmojis:s,emojiVersion:c}=o,p=s.filter(b=>b.unicode).filter(b=>we(b)&&!ce.has(b.unicode));if(!c&&p.length)g(s),K(()=>Ye(p));else{const b=c?s:s.filter(Ze);g(b),he()}});function Ye(s){yn(s,n.baselineEmoji,u)?he():o.currentEmojis=[...o.currentEmojis]}function Ze(s){return!s.unicode||!we(s)||ce.get(s.unicode)}async function ge(s){const c=o.emojiVersion||await Q();return s.filter(({version:p})=>!p||p<=c)}async function q(s){return hn(s,o.emojiVersion||await Q())}async function Je(s){const c=s===-1?o.customEmoji:await o.database.getEmojiByGroup(s);return q(await ge(c))}async function Qe(s){return q(await ge(await o.database.getEmojiBySearchQuery(s)))}a(()=>{}),a(()=>{function s(){const{searchMode:p,currentEmojis:b}=o;if(p)return[{category:"",emojis:b}];const E=new Map;for(const v of b){const _=v.category||"";let N=E.get(_);N||(N=[],E.set(_,N)),N.push(v)}return[...E.entries()].map(([v,_])=>({category:v,emojis:_})).sort((v,_)=>o.customCategorySorting(v.category,_.category))}const c=s();j(c)}),a(()=>{o.activeSearchItemId=o.activeSearchItem!==-1&&o.currentEmojis[o.activeSearchItem].id}),a(()=>{const{rawSearchText:s}=o;Ue(()=>{o.searchText=(s||"").trim(),o.activeSearchItem=-1})});function et(s){if(!o.searchMode||!o.currentEmojis.length)return;const c=p=>{I(s),o.activeSearchItem=ee(p,o.activeSearchItem,o.currentEmojis)};switch(s.key){case"ArrowDown":return c(!1);case"ArrowUp":return c(!0);case"Enter":if(o.activeSearchItem===-1)o.activeSearchItem=0;else return I(s),be(o.currentEmojis[o.activeSearchItem].id)}}function tt(s){const{target:c}=s,p=c.closest(".nav-button");if(!p)return;const b=parseInt(p.dataset.groupId,10);n.searchElement.value="",o.rawSearchText="",o.searchText="",o.activeSearchItem=-1,o.currentGroupIndex=o.groups.findIndex(E=>E.id===b)}function nt(s){const{target:c,key:p}=s,b=E=>{E&&(I(s),E.focus())};switch(p){case"ArrowLeft":return b(c.previousElementSibling);case"ArrowRight":return b(c.nextElementSibling);case"Home":return b(c.parentElement.firstElementChild);case"End":return b(c.parentElement.lastElementChild)}}async function be(s){const c=await o.database.getEmojiByUnicodeOrName(s),p=[...o.currentEmojis,...o.currentFavorites].find(E=>E.id===s),b=p.unicode&&C(p,o.currentSkinTone);await o.database.incrementFavoriteEmojiCount(s),d("emoji-click",{emoji:c,skinTone:o.currentSkinTone,...b&&{unicode:b},...p.name&&{name:p.name}})}async function ot(s){const{target:c}=s;if(!c.classList.contains("emoji"))return;I(s);const p=c.id.substring(4);be(p)}function X(s){o.currentSkinTone=s,o.skinTonePickerExpanded=!1,m("skintone-button"),d("skin-tone-change",{skinTone:s}),o.database.setPreferredSkinTone(s)}function rt(s){const{target:{id:c}}=s,p=c&&c.match(/^skintone-(\d)/);if(!p)return;I(s);const b=parseInt(p[1],10);X(b)}function it(s){o.skinTonePickerExpanded=!o.skinTonePickerExpanded,o.activeSkinTone=o.currentSkinTone,o.skinTonePickerExpanded&&(I(s),K(()=>m("skintone-list")))}a(()=>{o.skinTonePickerExpanded?n.skinToneDropdown.addEventListener("transitionend",()=>{o.skinTonePickerExpandedAfterAnimation=!0},{once:!0}):o.skinTonePickerExpandedAfterAnimation=!1});function st(s){if(!o.skinTonePickerExpanded)return;const c=async p=>{I(s),o.activeSkinTone=p};switch(s.key){case"ArrowUp":return c(ee(!0,o.activeSkinTone,o.skinTones));case"ArrowDown":return c(ee(!1,o.activeSkinTone,o.skinTones));case"Home":return c(0);case"End":return c(o.skinTones.length-1);case"Enter":return I(s),X(o.activeSkinTone);case"Escape":return I(s),o.skinTonePickerExpanded=!1,m("skintone-button")}}function at(s){if(o.skinTonePickerExpanded)switch(s.key){case" ":return I(s),X(o.activeSkinTone)}}async function ct(s){const{relatedTarget:c}=s;(!c||c.id!=="skintone-list")&&(o.skinTonePickerExpanded=!1)}function ut(s){o.rawSearchText=s.target.value}return{$set(s){U(o,s)},$destroy(){r.abort()}}}const Rn="https://cdn.jsdelivr.net/npm/emoji-picker-element-data@^1/en/emojibase/data.json",Nn="en";var Pn={categoriesLabel:"Categories",emojiUnsupportedMessage:"Your browser does not support color emoji.",favoritesLabel:"Favorites",loadingMessage:"Loading…",networkErrorMessage:"Could not load emoji.",regionLabel:"Emoji picker",searchDescription:"When search results are available, press up or down to select and enter to choose.",searchLabel:"Search",searchResultsLabel:"Search results",skinToneDescription:"When expanded, press up or down to select and enter to choose.",skinToneLabel:"Choose a skin tone (currently {skinTone})",skinTonesLabel:"Skin tones",skinTones:["Default","Light","Medium-Light","Medium","Medium-Dark","Dark"],categories:{custom:"Custom","smileys-emotion":"Smileys and emoticons","people-body":"People and body","animals-nature":"Animals and nature","food-drink":"Food and drink","travel-places":"Travel and places",activities:"Activities",objects:"Objects",symbols:"Symbols",flags:"Flags"}},zn=':host{--emoji-size:1.375rem;--emoji-padding:0.5rem;--category-emoji-size:var(--emoji-size);--category-emoji-padding:var(--emoji-padding);--indicator-height:3px;--input-border-radius:0.5rem;--input-border-size:1px;--input-font-size:1rem;--input-line-height:1.5;--input-padding:0.25rem;--num-columns:8;--outline-size:2px;--border-size:1px;--border-radius:0;--skintone-border-radius:1rem;--category-font-size:1rem;display:flex;width:min-content;height:400px}:host,:host(.light){color-scheme:light;--background:#fff;--border-color:#e0e0e0;--indicator-color:#385ac1;--input-border-color:#999;--input-font-color:#111;--input-placeholder-color:#999;--outline-color:#999;--category-font-color:#111;--button-active-background:#e6e6e6;--button-hover-background:#d9d9d9}:host(.dark){color-scheme:dark;--background:#222;--border-color:#444;--indicator-color:#5373ec;--input-border-color:#ccc;--input-font-color:#efefef;--input-placeholder-color:#ccc;--outline-color:#fff;--category-font-color:#efefef;--button-active-background:#555555;--button-hover-background:#484848}@media (prefers-color-scheme:dark){:host{color-scheme:dark;--background:#222;--border-color:#444;--indicator-color:#5373ec;--input-border-color:#ccc;--input-font-color:#efefef;--input-placeholder-color:#ccc;--outline-color:#fff;--category-font-color:#efefef;--button-active-background:#555555;--button-hover-background:#484848}}:host([hidden]){display:none}button{margin:0;padding:0;border:0;background:0 0;box-shadow:none;-webkit-tap-highlight-color:transparent}button::-moz-focus-inner{border:0}input{padding:0;margin:0;line-height:1.15;font-family:inherit}input[type=search]{-webkit-appearance:none}:focus{outline:var(--outline-color) solid var(--outline-size);outline-offset:calc(-1*var(--outline-size))}:host([data-js-focus-visible]) :focus:not([data-focus-visible-added]){outline:0}:focus:not(:focus-visible){outline:0}.hide-focus{outline:0}*{box-sizing:border-box}.picker{contain:content;display:flex;flex-direction:column;background:var(--background);border:var(--border-size) solid var(--border-color);border-radius:var(--border-radius);width:100%;height:100%;overflow:hidden;--total-emoji-size:calc(var(--emoji-size) + (2 * var(--emoji-padding)));--total-category-emoji-size:calc(var(--category-emoji-size) + (2 * var(--category-emoji-padding)))}.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);border:0}.hidden{opacity:0;pointer-events:none}.abs-pos{position:absolute;left:0;top:0}.gone{display:none!important}.skintone-button-wrapper,.skintone-list{background:var(--background);z-index:3}.skintone-button-wrapper.expanded{z-index:1}.skintone-list{position:absolute;inset-inline-end:0;top:0;z-index:2;overflow:visible;border-bottom:var(--border-size) solid var(--border-color);border-radius:0 0 var(--skintone-border-radius) var(--skintone-border-radius);will-change:transform;transition:transform .2s ease-in-out;transform-origin:center 0}@media (prefers-reduced-motion:reduce){.skintone-list{transition-duration:.001s}}@supports not (inset-inline-end:0){.skintone-list{right:0}}.skintone-list.no-animate{transition:none}.tabpanel{overflow-y:auto;scrollbar-gutter:stable;-webkit-overflow-scrolling:touch;will-change:transform;min-height:0;flex:1;contain:content}.emoji-menu{display:grid;grid-template-columns:repeat(var(--num-columns),var(--total-emoji-size));justify-content:space-around;align-items:flex-start;width:100%}.emoji-menu.visibility-auto{content-visibility:auto;contain-intrinsic-size:calc(var(--num-columns)*var(--total-emoji-size)) calc(var(--num-rows)*var(--total-emoji-size))}.category{padding:var(--emoji-padding);font-size:var(--category-font-size);color:var(--category-font-color)}.emoji,button.emoji{font-size:var(--emoji-size);display:flex;align-items:center;justify-content:center;border-radius:100%;height:var(--total-emoji-size);width:var(--total-emoji-size);line-height:1;overflow:hidden;font-family:var(--emoji-font-family);cursor:pointer}@media (hover:hover) and (pointer:fine){.emoji:hover,button.emoji:hover{background:var(--button-hover-background)}}.emoji.active,.emoji:active,button.emoji.active,button.emoji:active{background:var(--button-active-background)}.onscreen .custom-emoji::after{content:"";width:var(--emoji-size);height:var(--emoji-size);background-repeat:no-repeat;background-position:center center;background-size:contain;background-image:var(--custom-emoji-background)}.nav,.nav-button{align-items:center}.nav{display:grid;justify-content:space-between;contain:content}.nav-button{display:flex;justify-content:center}.nav-emoji{font-size:var(--category-emoji-size);width:var(--total-category-emoji-size);height:var(--total-category-emoji-size)}.indicator-wrapper{display:flex;border-bottom:1px solid var(--border-color)}.indicator{width:calc(100%/var(--num-groups));height:var(--indicator-height);opacity:var(--indicator-opacity);background-color:var(--indicator-color);will-change:transform,opacity;transition:opacity .1s linear,transform .25s ease-in-out}@media (prefers-reduced-motion:reduce){.indicator{will-change:opacity;transition:opacity .1s linear}}.pad-top,input.search{background:var(--background);width:100%}.pad-top{height:var(--emoji-padding);z-index:3}.search-row{display:flex;align-items:center;position:relative;padding-inline-start:var(--emoji-padding);padding-bottom:var(--emoji-padding)}.search-wrapper{flex:1;min-width:0}input.search{padding:var(--input-padding);border-radius:var(--input-border-radius);border:var(--input-border-size) solid var(--input-border-color);color:var(--input-font-color);font-size:var(--input-font-size);line-height:var(--input-line-height)}input.search::placeholder{color:var(--input-placeholder-color)}.favorites{overflow-y:auto;scrollbar-gutter:stable;display:flex;flex-direction:row;border-top:var(--border-size) solid var(--border-color);contain:content}.message{padding:var(--emoji-padding)}';const We=["customEmoji","customCategorySorting","database","dataSource","i18n","locale","skinToneEmoji","emojiVersion"],Un=`:host{--emoji-font-family:${Ge}}`;class Ve extends HTMLElement{constructor(e){super(),this.attachShadow({mode:"open"});const n=document.createElement("style");n.textContent=zn+Un,this.shadowRoot.appendChild(n),this._ctx={locale:Nn,dataSource:Rn,skinToneEmoji:tn,customCategorySorting:rn,customEmoji:null,i18n:Pn,emojiVersion:null,...e};for(const r of We)r!=="database"&&Object.prototype.hasOwnProperty.call(this,r)&&(this._ctx[r]=this[r],delete this[r]);this._dbFlush()}connectedCallback(){this._cmp||(this._cmp=Bn(this.shadowRoot,this._ctx))}disconnectedCallback(){H(()=>{if(!this.isConnected&&this._cmp){this._cmp.$destroy(),this._cmp=void 0;const{database:e}=this._ctx;e.close().catch(n=>console.error(n))}})}static get observedAttributes(){return["locale","data-source","skin-tone-emoji","emoji-version"]}attributeChangedCallback(e,n,r){this._set(e.replace(/-([a-z])/g,(i,o)=>o.toUpperCase()),e==="emoji-version"?parseFloat(r):r)}_set(e,n){this._ctx[e]=n,this._cmp&&this._cmp.$set({[e]:n}),["locale","dataSource"].includes(e)&&this._dbFlush()}_dbCreate(){const{locale:e,dataSource:n,database:r}=this._ctx;(!r||r.locale!==e||r.dataSource!==n)&&this._set("database",new Zt({locale:e,dataSource:n}))}_dbFlush(){H(()=>this._dbCreate())}}const He={};for(const t of We)He[t]={get(){return t==="database"&&this._dbCreate(),this._ctx[t]},set(e){if(t==="database")throw new Error("database is read-only");this._set(t,e)}};Object.defineProperties(Ve.prototype,He);customElements.get("emoji-picker")||customElements.define("emoji-picker",Ve);const Wn=lt("SplashScreen",{web:()=>dt(()=>import("./web.DgHDM2y7.js"),__vite__mapDeps([0,1,2,3,4]),import.meta.url).then(t=>new t.SplashScreenWeb)});export{Ve as P,Wn as S};
