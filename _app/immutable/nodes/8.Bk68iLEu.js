import{g as k}from"../chunks/entry.RcmwbxGf.js";import{s as B,a as I,D as P,g as N,i as x,f as d,k as E,y as L,B as D,e as O,t as V,c as j,b as H,d as T,v as U,h as q,n as z}from"../chunks/scheduler.CIbz-4tf.js";import{S as A,i as C,c as h,d as b,m as w,t as $,a as g,f as v}from"../chunks/index.gvaMc9LH.js";import{F as K}from"../chunks/IconLocation.jehxdxar.js";import{H as R}from"../chunks/Header.BBN6IUSm.js";import{M as X}from"../chunks/Map.C6nWjyjx.js";import{N as Z}from"../chunks/NavigationBar.DpgCmbT4.js";import{s as _,v as G}from"../chunks/map.sv3KRmWZ.js";import{p as J}from"../chunks/stores.OtNRuzR7.js";import{I as S,e as Q}from"../chunks/store.BzckxxOx.js";import{f as W}from"../chunks/proj.DXH8zrwl.js";import{s as F}from"../chunks/s32cloudfront.B2Ym_IS4.js";import{i as Y}from"../chunks/isVideoFile.DGBlGWVm.js";import{U as tt}from"../chunks/_FindMeButton.Dm49kq8l.js";const et=async({params:f,parent:e})=>{var r;if(f.idx==="-1")return k("/boxes");const t=await e();return t.error||!t.data?k("/boxes"):(r=t.data)!=null&&r.hasPermission?t.data:k(`/boxes/${f.idx}`)},vt=Object.freeze(Object.defineProperty({__proto__:null,load:et},Symbol.toStringTag,{value:"Module"}));function at(f){let e,o=(f[0].name??"")+"",t;return{c(){e=O("p"),t=V(o),this.h()},l(r){e=j(r,"P",{class:!0});var s=H(e);t=T(s,o),s.forEach(d),this.h()},h(){U(e,"class","font-semibold text-[15px] leading-[18px] text-black")},m(r,s){x(r,e,s),q(e,t)},p:z,d(r){r&&d(e)}}}function nt(f){let e,o;return e=new tt({}),{c(){h(e.$$.fragment)},l(t){b(e.$$.fragment,t)},m(t,r){w(e,t,r),o=!0},i(t){o||($(e.$$.fragment,t),o=!0)},o(t){g(e.$$.fragment,t),o=!1},d(t){v(e,t)}}}function rt(f){let e,o;return e=new Z({}),{c(){h(e.$$.fragment)},l(t){b(e.$$.fragment,t)},m(t,r){w(e,t,r),o=!0},i(t){o||($(e.$$.fragment,t),o=!0)},o(t){g(e.$$.fragment,t),o=!1},d(t){v(e,t)}}}function ot(f){let e,o,t,r,s,u,p,l;e=new R({props:{position:"fixed",leftBack:S?"":"black",$$slots:{default:[at]},$$scope:{ctx:f}}}),t=new X({}),s=new K({props:{position:"fixed",$$slots:{right:[nt]},$$scope:{ctx:f}}});let m=!S&&rt();return{c(){h(e.$$.fragment),o=I(),h(t.$$.fragment),r=I(),h(s.$$.fragment),u=I(),m&&m.c(),p=P()},l(a){b(e.$$.fragment,a),o=N(a),b(t.$$.fragment,a),r=N(a),b(s.$$.fragment,a),u=N(a),m&&m.l(a),p=P()},m(a,n){w(e,a,n),x(a,o,n),w(t,a,n),x(a,r,n),w(s,a,n),x(a,u,n),m&&m.m(a,n),x(a,p,n),l=!0},p(a,[n]){const i={};n&256&&(i.$$scope={dirty:n,ctx:a}),e.$set(i);const c={};n&256&&(c.$$scope={dirty:n,ctx:a}),s.$set(c)},i(a){l||($(e.$$.fragment,a),$(t.$$.fragment,a),$(s.$$.fragment,a),$(m),l=!0)},o(a){g(e.$$.fragment,a),g(t.$$.fragment,a),g(s.$$.fragment,a),g(m),l=!1},d(a){a&&(d(o),d(r),d(u),d(p)),v(e,a),v(t,a),v(s,a),m&&m.d(a)}}}const y=60;function it(f,e,o){let t;E(f,J,n=>o(3,t=n));let{data:r}=e,s=r.box,u=r.places;L(async()=>{await m()}),D(()=>{_.un("change",a)});const p=[];let l=[];async function m(){var n;if(u.length!==0){l=u.filter(i=>!i.longitude||!i.latitude||p.includes(i.idx)?!1:(p.push(i.idx),!0)),!t.url.searchParams.get("location")&&l.length>0&&_.on("change",a);for await(let i of l){let c=(n=i.media)==null?void 0:n.at(0);if(!String(c).includes("youtu")){const M=F(c);await Y(M)&&(c=c+"-thumbnail")}i.thumbnail=c}Q.emit("addIcons",l.map(i=>({idx:Number(i.idx),coordinate:W([i.longitude,i.latitude]),image:F(i.thumbnail||"",500),shape:"point",type:"place",link:`/places/${i.idx}?boxIdx=${s.idx}`,rank:1,name:i.name,width:38,height:46})))}}function a(){if(_.getFeatures().length!==l.length)return;_.un("change",a);const n=_.getExtent();G.fit(n,{padding:[y,y,y,y],duration:500,maxZoom:16})}return f.$$set=n=>{"data"in n&&o(1,r=n.data)},[s,r]}class yt extends A{constructor(e){super(),C(this,e,it,ot,B,{data:1})}}export{yt as component,vt as universal};
