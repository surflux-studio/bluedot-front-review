function C(){}const nt=t=>t;function T(t,e){for(const n in e)t[n]=e[n];return t}function it(t){return!!t&&(typeof t=="object"||typeof t=="function")&&typeof t.then=="function"}function W(t){return t()}function rt(){return Object.create(null)}function B(t){t.forEach(W)}function I(t){return typeof t=="function"}function ct(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let h;function ot(t,e){return t===e?!0:(h||(h=document.createElement("a")),h.href=e,t===h.href)}function st(t){return Object.keys(t).length===0}function S(t,...e){if(t==null){for(const i of e)i(void 0);return C}const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function lt(t){let e;return S(t,n=>e=n)(),e}function at(t,e,n){t.$$.on_destroy.push(S(e,n))}function ut(t,e,n,i){if(t){const r=D(t,e,n,i);return t[0](r)}}function D(t,e,n,i){return t[1]&&i?T(n.ctx.slice(),t[1](i(e))):n.ctx}function ft(t,e,n,i){if(t[2]&&i){const r=t[2](i(n));if(e.dirty===void 0)return r;if(typeof r=="object"){const s=[],c=Math.max(e.dirty.length,r.length);for(let l=0;l<c;l+=1)s[l]=e.dirty[l]|r[l];return s}return e.dirty|r}return e.dirty}function _t(t,e,n,i,r,s){if(r){const c=D(e,n,i,s);t.p(c,r)}}function dt(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}function ht(t){return t??""}function mt(t,e,n){return t.set(n),e}function pt(t){return t&&I(t.destroy)?t.destroy:C}let y=!1;function yt(){y=!0}function bt(){y=!1}function O(t,e,n,i){for(;t<e;){const r=t+(e-t>>1);n(r)<=i?t=r+1:e=r}return t}function H(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const o=[];for(let a=0;a<e.length;a++){const u=e[a];u.claim_order!==void 0&&o.push(u)}e=o}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let r=0;for(let o=0;o<e.length;o++){const a=e[o].claim_order,u=(r>0&&e[n[r]].claim_order<=a?r+1:O(1,r,M=>e[n[M]].claim_order,a))-1;i[o]=n[u]+1;const N=u+1;n[N]=o,r=Math.max(N,r)}const s=[],c=[];let l=e.length-1;for(let o=n[r]+1;o!=0;o=i[o-1]){for(s.push(e[o-1]);l>=o;l--)c.push(e[l]);l--}for(;l>=0;l--)c.push(e[l]);s.reverse(),c.sort((o,a)=>o.claim_order-a.claim_order);for(let o=0,a=0;o<c.length;o++){for(;a<s.length&&c[o].claim_order>=s[a].claim_order;)a++;const u=a<s.length?s[a]:null;t.insertBefore(c[o],u)}}function z(t,e){t.appendChild(e)}function R(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function gt(t){const e=k("style");return e.textContent="/* empty */",F(R(t),e),e.sheet}function F(t,e){return z(t.head||t,e),e.sheet}function U(t,e){if(y){for(H(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function wt(t,e,n){y&&!n?U(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function G(t){t.parentNode&&t.parentNode.removeChild(t)}function xt(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function k(t){return document.createElement(t)}function J(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function E(t){return document.createTextNode(t)}function vt(){return E(" ")}function kt(){return E("")}function A(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function Et(t){return function(e){return e.preventDefault(),t.call(this,e)}}function Nt(t){return function(e){return e.stopPropagation(),t.call(this,e)}}function K(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function At(t,e,n){const i=e.toLowerCase();i in t?t[i]=typeof t[i]=="boolean"&&n===""?!0:n:e in t?t[e]=typeof t[e]=="boolean"&&n===""?!0:n:K(t,e,n)}function jt(t){return t.dataset.svelteH}function Ct(t){return Array.from(t.childNodes)}function Q(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function P(t,e,n,i,r=!1){Q(t);const s=(()=>{for(let c=t.claim_info.last_index;c<t.length;c++){const l=t[c];if(e(l)){const o=n(l);return o===void 0?t.splice(c,1):t[c]=o,r||(t.claim_info.last_index=c),l}}for(let c=t.claim_info.last_index-1;c>=0;c--){const l=t[c];if(e(l)){const o=n(l);return o===void 0?t.splice(c,1):t[c]=o,r?o===void 0&&t.claim_info.last_index--:t.claim_info.last_index=c,l}}return i()})();return s.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,s}function q(t,e,n,i){return P(t,r=>r.nodeName===e,r=>{const s=[];for(let c=0;c<r.attributes.length;c++){const l=r.attributes[c];n[l.name]||s.push(l.name)}s.forEach(c=>r.removeAttribute(c))},()=>i(e))}function St(t,e,n){return q(t,e,n,k)}function Dt(t,e,n){return q(t,e,n,J)}function V(t,e){return P(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>E(e),!0)}function zt(t){return V(t," ")}function Pt(t,e){e=""+e,t.data!==e&&(t.data=e)}function qt(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function Lt(t,e){t.value=e??""}function Mt(t,e,n,i){n==null?t.style.removeProperty(e):t.style.setProperty(e,n,"")}let m;function X(){if(m===void 0){m=!1;try{typeof window<"u"&&window.parent&&window.parent.document}catch{m=!0}}return m}function Tt(t,e){getComputedStyle(t).position==="static"&&(t.style.position="relative");const i=k("iframe");i.setAttribute("style","display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; overflow: hidden; border: 0; opacity: 0; pointer-events: none; z-index: -1;"),i.setAttribute("aria-hidden","true"),i.tabIndex=-1;const r=X();let s;return r?(i.src="data:text/html,<script>onresize=function(){parent.postMessage(0,'*')}<\/script>",s=A(window,"message",c=>{c.source===i.contentWindow&&e()})):(i.src="about:blank",i.onload=()=>{s=A(i.contentWindow,"resize",e),e()}),z(t,i),()=>{(r||s&&i.contentWindow)&&s(),G(i)}}function Wt(t,e,n){t.classList.toggle(e,!!n)}function Y(t,e,{bubbles:n=!1,cancelable:i=!1}={}){return new CustomEvent(t,{detail:e,bubbles:n,cancelable:i})}function Bt(t,e){return new t(e)}let p;function g(t){p=t}function b(){if(!p)throw new Error("Function called outside component initialization");return p}function It(t){b().$$.on_mount.push(t)}function Ot(t){b().$$.after_update.push(t)}function Ht(t){b().$$.on_destroy.push(t)}function Rt(){const t=b();return(e,n,{cancelable:i=!1}={})=>{const r=t.$$.callbacks[e];if(r){const s=Y(e,n,{cancelable:i});return r.slice().forEach(c=>{c.call(t,s)}),!s.defaultPrevented}return!0}}function Ft(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach(i=>i.call(this,e))}const d=[],j=[];let _=[];const x=[],L=Promise.resolve();let v=!1;function Z(){v||(v=!0,L.then(tt))}function Ut(){return Z(),L}function $(t){_.push(t)}function Gt(t){x.push(t)}const w=new Set;let f=0;function tt(){if(f!==0)return;const t=p;do{try{for(;f<d.length;){const e=d[f];f++,g(e),et(e.$$)}}catch(e){throw d.length=0,f=0,e}for(g(null),d.length=0,f=0;j.length;)j.pop()();for(let e=0;e<_.length;e+=1){const n=_[e];w.has(n)||(w.add(n),n())}_.length=0}while(d.length);for(;x.length;)x.pop()();v=!1,w.clear(),g(t)}function et(t){if(t.fragment!==null){t.update(),B(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach($)}}function Jt(t){const e=[],n=[];_.forEach(i=>t.indexOf(i)===-1?e.push(i):n.push(i)),n.forEach(i=>i()),_=e}export{T as $,A,Ht as B,Mt as C,kt as D,pt as E,B as F,Et as G,Nt as H,Ft as I,ht as J,Bt as K,xt as L,Wt as M,Lt as N,I as O,ot as P,mt as Q,Ot as R,Ut as S,At as T,qt as U,nt as V,it as W,b as X,g as Y,tt as Z,$ as _,vt as a,Tt as a0,R as a1,gt as a2,Y as a3,rt as a4,st as a5,Jt as a6,p as a7,W as a8,d as a9,Z as aa,yt as ab,bt as ac,Rt as ad,Ct as b,St as c,V as d,k as e,G as f,zt as g,U as h,wt as i,Pt as j,at as k,lt as l,ut as m,C as n,dt as o,ft as p,J as q,Dt as r,ct as s,E as t,_t as u,K as v,j as w,Gt as x,It as y,jt as z};
