import{s as D,x as B,e as T,c as A,b as V,f as w,q as L,v as G,i as k,y as j,r as z,A as N,B as q,C as X,D as Y,k as U,o as Z,l as O,m as R}from"./scheduler.BnheM4g2.js";import{S as F,i as W,t as H,b as J}from"./index.CP53dWnj.js";import{a as x,m as u}from"./map.C6dq56jG.js";import{e as C,A as K}from"./Header.Q8hql9dc.js";import{g as Q}from"./search.Cd2I1Zre.js";import{p as $}from"./stores.Bge6LoLs.js";import{g as ee}from"./entry.BHzSL6Cn.js";import{s as te}from"./searchParams.DR-MvU20.js";import{a as P,f as I}from"./location.CJEux266.js";/* empty css                                          */function oe(e,r=500,c=10){let i,h,m;const a=l=>{if(l instanceof TouchEvent&&l.touches.length>=2)return clearTimeout(i);const{clientX:p,clientY:g}=l instanceof MouseEvent?l:l.touches[0];h=p,m=g,i=setTimeout(()=>{e.dispatchEvent(new CustomEvent("longpress",{detail:l}))},r)},t=l=>{if(l instanceof TouchEvent&&l.touches.length>=2)return clearTimeout(i);const{clientX:p,clientY:g}=l instanceof MouseEvent?l:l.touches[0],d=Math.abs(p-h),_=Math.abs(g-m);(d>c||_>c)&&clearTimeout(i)},s=()=>{clearTimeout(i)};return e.addEventListener("mousedown",a),e.addEventListener("mousemove",t),e.addEventListener("mouseup",s),e.addEventListener("mouseleave",s),e.addEventListener("touchstart",a),e.addEventListener("touchmove",t),e.addEventListener("touchend",s),e.addEventListener("touchcancel",s),{destroy(){e.removeEventListener("mousedown",a),e.removeEventListener("mousemove",t),e.removeEventListener("mouseup",s),e.removeEventListener("mouseleave",s),e.removeEventListener("touchstart",a),e.removeEventListener("touchmove",t),e.removeEventListener("touchend",s),e.removeEventListener("touchcancel",s)}}}function ne(e){let r,c,i,h;const m=e[5].default,a=B(m,e,e[4],null);return{c(){r=T("div"),a&&a.c(),this.h()},l(t){r=A(t,"DIV",{id:!0,class:!0});var s=V(r);a&&a.l(s),s.forEach(w),this.h()},h(){L(r,"id","map"),L(r,"class",G("absolute w-full h-full z-[1]")+" svelte-mehtzq")},m(t,s){k(t,r,s),a&&a.m(r,null),e[6](r),c=!0,i||(h=[j(oe.call(null,r,500)),z(r,"longpress",e[7])],i=!0)},p(t,[s]){a&&a.p&&(!c||s&16)&&N(a,m,t,t[4],c?X(m,t[4],s,null):q(t[4]),null)},i(t){c||(H(a,t),c=!0)},o(t){J(a,t),c=!1},d(t){t&&w(r),a&&a.d(t),e[6](null),i=!1,Y(h)}}}function M(e){e.preventDefault()}function ae(e,r,c){let i;U(e,$,o=>c(2,i=o));let{$$slots:h={},$$scope:m}=r,{onSelect:a=()=>{}}=r,{onMoveend:t=()=>{}}=r;x.refresh(),C.on("explorePlaces",p);let s="",l;async function p(){var o;try{l&&l.abort("new request");const n=(o=window.location.search.split("tags=")[1])==null?void 0:o.split("&")[0];if(!n)return;const f=decodeURIComponent(n);if(!f)return;s!==f&&(x.refresh(),s=f),l=new AbortController;const v=await Q({tags:s,bbox:P(u.getView().calculateExtent(),"EPSG:3857","EPSG:4326").join(),abortController:l});C.emit("addIcons",v.map(E=>({idx:E.idx,coordinate:I(E.location.replace("POINT(","").replace(")","").split(" ").map(Number)),image:"",shape:"waterdrop",type:"place",link:`/places/${E.idx}`,rank:3,name:E.name,width:56,height:61,onlyMain:!0})))}catch(n){(n==null?void 0:n.name)==="AbortError"?console.log("이전 explorePlaces 요청이 취소되었습니다."):console.error("explorePlaces 중 에러 발생:",n)}}u.on("moveend",g);function g(){var o,n;p(),te({location:((o=u.getView().getCenter())==null?void 0:o.join(","))??"",zoom:((n=u.getView().getZoom())==null?void 0:n.toFixed(2))??""}),t(P(u.getView().calculateExtent(),"EPSG:3857","EPSG:4326").join())}p();let d;Z(()=>{u.setTarget(d),d.addEventListener("contextmenu",M),i.url.searchParams.has("location")&&_(),i.url.searchParams.has("placeIdx")&&b(i.url.searchParams.get("placeIdx")),t(P(u.getView().calculateExtent(),"EPSG:3857","EPSG:4326").join())}),O(()=>{u.un("moveend",g),d.removeEventListener("contextmenu",M)});function _(){const o=i.url.searchParams.get("location"),n=i.url.searchParams.get("zoom"),f=o==null?void 0:o.split(",").map(Number);f&&u.getView().setCenter(f),n&&u.getView().setZoom(Number(n))}C.on("addIconByPlaceIdx",b);async function b(o){const n=await fetch(`${K}/places/${o}`).then(v=>v.json()).then(v=>v.data).catch(v=>{console.error(v)}),f={idx:n.placeIdx,coordinate:I([n.longitude,n.latitude]),image:"",shape:"waterdrop",type:"place",link:`/places/${n.placeIdx}`,rank:5,name:n.name,width:56,height:61};C.emit("addIcon",f)}function y(o){R[o?"unshift":"push"](()=>{d=o,c(1,d)})}const S=o=>{const n=u.getEventCoordinate(o.detail);i.url.pathname!=="/map/edit"?ee(`/map/edit?location=${n[0]},${n[1]}`):a(n)};return e.$$set=o=>{"onSelect"in o&&c(0,a=o.onSelect),"onMoveend"in o&&c(3,t=o.onMoveend),"$$scope"in o&&c(4,m=o.$$scope)},[a,d,i,t,m,h,y,S]}class pe extends F{constructor(r){super(),W(this,r,ae,ne,D,{onSelect:0,onMoveend:3})}}export{pe as M};
