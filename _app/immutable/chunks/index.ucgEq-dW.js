var J=Object.defineProperty;var K=(t,e,n)=>e in t?J(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var z=(t,e,n)=>K(t,typeof e!="symbol"?e+"":e,n);import{n as x,a3 as W,f as D,a4 as X,y as v,T as M,O as k,a5 as Y,Q as F,a6 as N,b as Z,a2 as tt,a7 as et,a8 as nt,a9 as it,a1 as B,aa as st,ab as rt,ac as at,ad as ot,ae as ft}from"./scheduler.Ds8JjPaX.js";const L=typeof window<"u";let Q=L?()=>window.performance.now():()=>Date.now(),I=L?t=>requestAnimationFrame(t):x;const w=new Set;function T(t){w.forEach(e=>{e.c(t)||(w.delete(e),e.f())}),w.size!==0&&I(T)}function U(t){let e;return w.size===0&&I(T),{promise:new Promise(n=>{w.add(e={c:t,f:n})}),abort(){w.delete(e)}}}const j=new Map;let C=0;function ut(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function ct(t,e){const n={stylesheet:X(e),rules:{}};return j.set(t,n),n}function A(t,e,n,i,u,f,c,s=0){const l=16.666/i;let r=`{
`;for(let $=0;$<=1;$+=l){const m=e+(n-e)*f($);r+=$*100+`%{${c(m,1-m)}}
`}const d=r+`100% {${c(n,1-n)}}
}`,o=`__svelte_${ut(d)}_${s}`,h=W(t),{stylesheet:g,rules:a}=j.get(h)||ct(h,t);a[o]||(a[o]=!0,g.insertRule(`@keyframes ${o} ${d}`,g.cssRules.length));const _=t.style.animation||"";return t.style.animation=`${_?`${_}, `:""}${o} ${i}ms linear ${u}ms 1 both`,C+=1,o}function V(t,e){const n=(t.style.animation||"").split(", "),i=n.filter(e?f=>f.indexOf(e)<0:f=>f.indexOf("__svelte")===-1),u=n.length-i.length;u&&(t.style.animation=i.join(", "),C-=u,C||lt())}function lt(){I(()=>{C||(j.forEach(t=>{const{ownerNode:e}=t.stylesheet;e&&D(e)}),j.clear())})}let b;function q(){return b||(b=Promise.resolve(),b.then(()=>{b=null})),b}function E(t,e,n){t.dispatchEvent(Y(`${e?"intro":"outro"}${n}`))}const O=new Set;let p;function yt(){p={r:0,c:[],p}}function wt(){p.r||v(p.c),p=p.p}function dt(t,e){t&&t.i&&(O.delete(t),t.i(e))}function xt(t,e,n,i){if(t&&t.o){if(O.has(t))return;O.add(t),p.c.push(()=>{O.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}const G={duration:0};function vt(t,e,n){const i={direction:"out"};let u=e(t,n,i),f=!0,c;const s=p;s.r+=1;let l;function r(){const{delay:d=0,duration:o=300,easing:h=F,tick:g=x,css:a}=u||G;a&&(c=A(t,1,0,o,d,h,a));const _=Q()+d,$=_+o;k(()=>E(t,!1,"start")),"inert"in t&&(l=t.inert,t.inert=!0),U(m=>{if(f){if(m>=$)return g(0,1),E(t,!1,"end"),--s.r||v(s.c),!1;if(m>=_){const y=h((m-_)/o);g(1-y,y)}}return f})}return M(u)?q().then(()=>{u=u(i),r()}):r(),{end(d){d&&"inert"in t&&(t.inert=l),d&&u.tick&&u.tick(1,0),f&&(c&&V(t,c),f=!1)}}}function bt(t,e,n,i){let f=e(t,n,{direction:"both"}),c=i?0:1,s=null,l=null,r=null,d;function o(){r&&V(t,r)}function h(a,_){const $=a.b-c;return _*=Math.abs($),{a:c,b:a.b,d:$,duration:_,start:a.start,end:a.start+_,group:a.group}}function g(a){const{delay:_=0,duration:$=300,easing:m=F,tick:y=x,css:P}=f||G,R={start:Q()+_,b:a};a||(R.group=p,p.r+=1),"inert"in t&&(a?d!==void 0&&(t.inert=d):(d=t.inert,t.inert=!0)),s||l?l=R:(P&&(o(),r=A(t,c,a,$,_,m,P)),a&&y(0,1),s=h(R,$),k(()=>E(t,a,"start")),U(S=>{if(l&&S>l.start&&(s=h(l,$),l=null,E(t,s.b,"start"),P&&(o(),r=A(t,c,s.b,s.duration,0,m,f.css))),s){if(S>=s.end)y(c=s.b,1-c),E(t,s.b,"end"),l||(s.b?o():--s.group.r||v(s.group.c)),s=null;else if(S>=s.start){const H=S-s.start;c=s.a+s.d*m(H/s.duration),y(c,1-c)}}return!!(s||l)}))}return{run(a){M(f)?q().then(()=>{f=f({direction:a?"in":"out"}),g(a)}):g(a)},end(){o(),s=l=null}}}function Et(t,e,n){const i=t.$$.props[e];i!==void 0&&(t.$$.bound[i]=n,n(t.$$.ctx[i]))}function St(t){t&&t.c()}function Ot(t,e){t&&t.l(e)}function _t(t,e,n){const{fragment:i,after_update:u}=t.$$;i&&i.m(e,n),k(()=>{const f=t.$$.on_mount.map(st).filter(M);t.$$.on_destroy?t.$$.on_destroy.push(...f):v(f),t.$$.on_mount=[]}),u.forEach(k)}function $t(t,e){const n=t.$$;n.fragment!==null&&(nt(n.after_update),v(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function ht(t,e){t.$$.dirty[0]===-1&&(rt.push(t),at(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function kt(t,e,n,i,u,f,c=null,s=[-1]){const l=it;B(t);const r=t.$$={fragment:null,ctx:[],props:f,update:x,not_equal:u,bound:N(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(l?l.$$.context:[])),callbacks:N(),dirty:s,skip_bound:!1,root:e.target||l.$$.root};c&&c(r.root);let d=!1;if(r.ctx=n?n(t,e.props||{},(o,h,...g)=>{const a=g.length?g[0]:h;return r.ctx&&u(r.ctx[o],r.ctx[o]=a)&&(!r.skip_bound&&r.bound[o]&&r.bound[o](a),d&&ht(t,o)),h}):[],r.update(),d=!0,v(r.before_update),r.fragment=i?i(r.ctx):!1,e.target){if(e.hydrate){ot();const o=Z(e.target);r.fragment&&r.fragment.l(o),o.forEach(D)}else r.fragment&&r.fragment.c();e.intro&&dt(t.$$.fragment),_t(t,e.target,e.anchor),ft(),tt()}B(l)}class jt{constructor(){z(this,"$$");z(this,"$$set")}$destroy(){$t(this,1),this.$destroy=x}$on(e,n){if(!M(n))return x;const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const u=i.indexOf(n);u!==-1&&i.splice(u,1)}}$set(e){this.$$set&&!et(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const gt="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(gt);export{jt as S,xt as a,Ot as b,St as c,$t as d,Et as e,wt as f,yt as g,bt as h,kt as i,A as j,V as k,U as l,_t as m,Q as n,vt as o,dt as t};
