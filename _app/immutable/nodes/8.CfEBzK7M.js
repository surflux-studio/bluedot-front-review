import{g as I}from"../chunks/entry.DYdHKLY6.js";import{s as L,a as P,g as N,i as v,f as p,k as V,w as C,B as D,e as M,t as H,c as O,b as T,d as q,v as S,h as z,n as j,y as U}from"../chunks/scheduler.DH3jNSXp.js";import{S as Z,i as A,c as g,b as h,m as _,t as x,a as b,e as w}from"../chunks/index.DhGy8j-A.js";import{F as G,I as J}from"../chunks/IconLocation.B7_Clugu.js";import{H as K}from"../chunks/Header.BryJQSZL.js";import{M as Q}from"../chunks/Map.DZRADKzR.js";import{N as R}from"../chunks/NavigationBar.Cbfqfbyn.js";import{s as $,v as W}from"../chunks/map.B_Tw2_5D.js";import{p as X}from"../chunks/stores.BDyTB2hx.js";import{e as B}from"../chunks/emitter.PJNP4wAS.js";import{f as Y}from"../chunks/proj.DXH8zrwl.js";import{s as F}from"../chunks/s32cloudfront.BOEqMi5t.js";import{i as tt}from"../chunks/isVideoFile.DGBlGWVm.js";const et=async({params:l,parent:e})=>{var a;if(l.idx==="-1")return I("/boxes");const n=await e();return n.error||!n.data?I("/boxes"):(a=n.data)!=null&&a.hasPermission?n.data:I(`/boxes/${l.idx}`)},bt=Object.freeze(Object.defineProperty({__proto__:null,load:et},Symbol.toStringTag,{value:"Module"}));function nt(l){let e,o=(l[0].name??"")+"",n;return{c(){e=M("p"),n=H(o),this.h()},l(a){e=O(a,"P",{class:!0});var r=T(e);n=q(r,o),r.forEach(p),this.h()},h(){S(e,"class","font-semibold text-[15px] leading-[18px] text-black")},m(a,r){v(a,e,r),z(e,n)},p:j,d(a){a&&p(e)}}}function at(l){let e,o,n,a,r;return o=new J({}),{c(){e=M("button"),g(o.$$.fragment),this.h()},l(s){e=O(s,"BUTTON",{slot:!0,class:!0});var m=T(e);h(o.$$.fragment,m),m.forEach(p),this.h()},h(){S(e,"slot","right"),S(e,"class","flex justify-center items-center w-10 h-10 rounded-full bg-[rgba(56,56,56,0.7)] pointer-events-auto")},m(s,m){v(s,e,m),_(o,e,null),n=!0,a||(r=U(e,"click",l[2]),a=!0)},p:j,i(s){n||(x(o.$$.fragment,s),n=!0)},o(s){b(o.$$.fragment,s),n=!1},d(s){s&&p(e),w(o),a=!1,r()}}}function ot(l){let e,o,n,a,r,s,m,c;return e=new K({props:{position:"fixed",leftBack:"black",$$slots:{default:[nt]},$$scope:{ctx:l}}}),n=new Q({}),r=new G({props:{position:"fixed",$$slots:{right:[at]},$$scope:{ctx:l}}}),m=new R({}),{c(){g(e.$$.fragment),o=P(),g(n.$$.fragment),a=P(),g(r.$$.fragment),s=P(),g(m.$$.fragment)},l(t){h(e.$$.fragment,t),o=N(t),h(n.$$.fragment,t),a=N(t),h(r.$$.fragment,t),s=N(t),h(m.$$.fragment,t)},m(t,i){_(e,t,i),v(t,o,i),_(n,t,i),v(t,a,i),_(r,t,i),v(t,s,i),_(m,t,i),c=!0},p(t,[i]){const y={};i&512&&(y.$$scope={dirty:i,ctx:t}),e.$set(y);const u={};i&512&&(u.$$scope={dirty:i,ctx:t}),r.$set(u)},i(t){c||(x(e.$$.fragment,t),x(n.$$.fragment,t),x(r.$$.fragment,t),x(m.$$.fragment,t),c=!0)},o(t){b(e.$$.fragment,t),b(n.$$.fragment,t),b(r.$$.fragment,t),b(m.$$.fragment,t),c=!1},d(t){t&&(p(o),p(a),p(s)),w(e,t),w(n,t),w(r,t),w(m,t)}}}const k=60;function rt(l,e,o){let n;V(l,X,u=>o(4,n=u));let{data:a}=e,r=a.box,s=a.places;C(async()=>{await t()}),D(()=>{$.un("change",i)});const m=[];let c=[];async function t(){var u;if(s.length!==0){c=s.filter(f=>!f.longitude||!f.latitude||m.includes(f.idx)?!1:(m.push(f.idx),!0)),!n.url.searchParams.get("location")&&c.length>0&&$.on("change",i);for await(let f of c){let d=(u=f.media)==null?void 0:u.at(0);if(!String(d).includes("youtu")){const E=F(d);await tt(E)&&(d=d+"-thumbnail")}f.thumbnail=d}B.emit("addIcons",c.map(f=>({idx:Number(f.idx),coordinate:Y([f.longitude,f.latitude]),image:F(f.thumbnail||"",500),shape:"point",type:"place",link:`/places/${f.idx}?boxIdx=${r.idx}`,rank:1,name:f.name,width:38,height:46})))}}function i(){if($.getFeatures().length!==c.length)return;$.un("change",i);const u=$.getExtent();W.fit(u,{padding:[k,k,k,k],duration:500,maxZoom:16})}const y=()=>{B.emit("flyToCurrentPosition")};return l.$$set=u=>{"data"in u&&o(1,a=u.data)},[r,a,y]}class wt extends Z{constructor(e){super(),A(this,e,rt,ot,L,{data:1})}}export{wt as component,bt as universal};
