function j(){}const et=t=>t;function M(t,e){for(const n in e)t[n]=e[n];return t}function W(t){return t()}function nt(){return Object.create(null)}function B(t){t.forEach(W)}function L(t){return typeof t=="function"}function it(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let h;function rt(t,e){return t===e?!0:(h||(h=document.createElement("a")),h.href=e,t===h.href)}function ct(t){return Object.keys(t).length===0}function O(t,...e){if(t==null){for(const i of e)i(void 0);return j}const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function ot(t,e,n){t.$$.on_destroy.push(O(e,n))}function st(t,e,n,i){if(t){const r=C(t,e,n,i);return t[0](r)}}function C(t,e,n,i){return t[1]&&i?M(n.ctx.slice(),t[1](i(e))):n.ctx}function lt(t,e,n,i){if(t[2]&&i){const r=t[2](i(n));if(e.dirty===void 0)return r;if(typeof r=="object"){const s=[],c=Math.max(e.dirty.length,r.length);for(let l=0;l<c;l+=1)s[l]=e.dirty[l]|r[l];return s}return e.dirty|r}return e.dirty}function ut(t,e,n,i,r,s){if(r){const c=C(e,n,i,s);t.p(c,r)}}function at(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}function ft(t){return t??""}function dt(t,e,n){return t.set(n),e}function _t(t){return t&&L(t.destroy)?t.destroy:j}let y=!1;function ht(){y=!0}function pt(){y=!1}function T(t,e,n,i){for(;t<e;){const r=t+(e-t>>1);n(r)<=i?t=r+1:e=r}return t}function H(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const o=[];for(let u=0;u<e.length;u++){const a=e[u];a.claim_order!==void 0&&o.push(a)}e=o}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let r=0;for(let o=0;o<e.length;o++){const u=e[o].claim_order,a=(r>0&&e[n[r]].claim_order<=u?r+1:T(1,r,I=>e[n[I]].claim_order,u))-1;i[o]=n[a]+1;const N=a+1;n[N]=o,r=Math.max(N,r)}const s=[],c=[];let l=e.length-1;for(let o=n[r]+1;o!=0;o=i[o-1]){for(s.push(e[o-1]);l>=o;l--)c.push(e[l]);l--}for(;l>=0;l--)c.push(e[l]);s.reverse(),c.sort((o,u)=>o.claim_order-u.claim_order);for(let o=0,u=0;o<c.length;o++){for(;u<s.length&&c[o].claim_order>=s[u].claim_order;)u++;const a=u<s.length?s[u]:null;t.insertBefore(c[o],a)}}function D(t,e){t.appendChild(e)}function R(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function mt(t){const e=k("style");return e.textContent="/* empty */",F(R(t),e),e.sheet}function F(t,e){return D(t.head||t,e),e.sheet}function U(t,e){if(y){for(H(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function yt(t,e,n){y&&!n?U(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function G(t){t.parentNode&&t.parentNode.removeChild(t)}function bt(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function k(t){return document.createElement(t)}function J(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function E(t){return document.createTextNode(t)}function gt(){return E(" ")}function wt(){return E("")}function A(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function xt(t){return function(e){return e.preventDefault(),t.call(this,e)}}function vt(t){return function(e){return e.stopPropagation(),t.call(this,e)}}function kt(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function Et(t){return t.dataset.svelteH}function Nt(t){return Array.from(t.childNodes)}function K(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function q(t,e,n,i,r=!1){K(t);const s=(()=>{for(let c=t.claim_info.last_index;c<t.length;c++){const l=t[c];if(e(l)){const o=n(l);return o===void 0?t.splice(c,1):t[c]=o,r||(t.claim_info.last_index=c),l}}for(let c=t.claim_info.last_index-1;c>=0;c--){const l=t[c];if(e(l)){const o=n(l);return o===void 0?t.splice(c,1):t[c]=o,r?o===void 0&&t.claim_info.last_index--:t.claim_info.last_index=c,l}}return i()})();return s.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,s}function z(t,e,n,i){return q(t,r=>r.nodeName===e,r=>{const s=[];for(let c=0;c<r.attributes.length;c++){const l=r.attributes[c];n[l.name]||s.push(l.name)}s.forEach(c=>r.removeAttribute(c))},()=>i(e))}function At(t,e,n){return z(t,e,n,k)}function St(t,e,n){return z(t,e,n,J)}function Q(t,e){return q(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>E(e),!0)}function jt(t){return Q(t," ")}function Ct(t,e){e=""+e,t.data!==e&&(t.data=e)}function Dt(t,e){t.value=e??""}function qt(t,e,n,i){n==null?t.style.removeProperty(e):t.style.setProperty(e,n,"")}function zt(t,e,n){for(let i=0;i<t.options.length;i+=1){const r=t.options[i];if(r.__value===e){r.selected=!0;return}}(!n||e!==void 0)&&(t.selectedIndex=-1)}function Pt(t){const e=t.querySelector(":checked");return e&&e.__value}let p;function V(){if(p===void 0){p=!1;try{typeof window<"u"&&window.parent&&window.parent.document}catch{p=!0}}return p}function It(t,e){getComputedStyle(t).position==="static"&&(t.style.position="relative");const i=k("iframe");i.setAttribute("style","display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; overflow: hidden; border: 0; opacity: 0; pointer-events: none; z-index: -1;"),i.setAttribute("aria-hidden","true"),i.tabIndex=-1;const r=V();let s;return r?(i.src="data:text/html,<script>onresize=function(){parent.postMessage(0,'*')}<\/script>",s=A(window,"message",c=>{c.source===i.contentWindow&&e()})):(i.src="about:blank",i.onload=()=>{s=A(i.contentWindow,"resize",e),e()}),D(t,i),()=>{(r||s&&i.contentWindow)&&s(),G(i)}}function Mt(t,e,n){t.classList.toggle(e,!!n)}function X(t,e,{bubbles:n=!1,cancelable:i=!1}={}){return new CustomEvent(t,{detail:e,bubbles:n,cancelable:i})}function Wt(t,e){return new t(e)}let m;function g(t){m=t}function b(){if(!m)throw new Error("Function called outside component initialization");return m}function Bt(t){b().$$.on_mount.push(t)}function Lt(t){b().$$.after_update.push(t)}function Ot(t){b().$$.on_destroy.push(t)}function Tt(){const t=b();return(e,n,{cancelable:i=!1}={})=>{const r=t.$$.callbacks[e];if(r){const s=X(e,n,{cancelable:i});return r.slice().forEach(c=>{c.call(t,s)}),!s.defaultPrevented}return!0}}function Ht(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach(i=>i.call(this,e))}const _=[],S=[];let d=[];const x=[],P=Promise.resolve();let v=!1;function Y(){v||(v=!0,P.then($))}function Rt(){return Y(),P}function Z(t){d.push(t)}function Ft(t){x.push(t)}const w=new Set;let f=0;function $(){if(f!==0)return;const t=m;do{try{for(;f<_.length;){const e=_[f];f++,g(e),tt(e.$$)}}catch(e){throw _.length=0,f=0,e}for(g(null),_.length=0,f=0;S.length;)S.pop()();for(let e=0;e<d.length;e+=1){const n=d[e];w.has(n)||(w.add(n),n())}d.length=0}while(_.length);for(;x.length;)x.pop()();v=!1,w.clear(),g(t)}function tt(t){if(t.fragment!==null){t.update(),B(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(Z)}}function Ut(t){const e=[],n=[];d.forEach(i=>t.indexOf(i)===-1?e.push(i):n.push(i)),n.forEach(i=>i()),d=e}export{g as $,ft as A,Dt as B,L as C,ut as D,at as E,lt as F,rt as G,Mt as H,Z as I,zt as J,Ht as K,Pt as L,Ft as M,bt as N,Rt as O,qt as P,Lt as Q,Wt as R,R as S,mt as T,X as U,et as V,nt as W,$ as X,ct as Y,Ut as Z,m as _,gt as a,W as a0,_ as a1,Y as a2,ht as a3,pt as a4,vt as a5,xt as a6,It as a7,Tt as a8,dt as a9,Nt as b,At as c,Q as d,k as e,G as f,jt as g,U as h,yt as i,Ct as j,ot as k,kt as l,Et as m,j as n,Bt as o,J as p,St as q,B as r,it as s,E as t,wt as u,_t as v,A as w,Ot as x,S as y,st as z};