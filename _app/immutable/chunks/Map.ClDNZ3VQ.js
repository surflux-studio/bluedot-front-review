import{s as A,m as M,e as G,c as k,b as j,f as x,v as w,i as L,E as N,A as z,u as Z,o as F,p as q,F as O,k as R,w as T,x as U,y as W}from"./scheduler.D0BZyuSu.js";import{S as H,i as J,t as K,a as Q}from"./index.ChpzTwUX.js";import{a as v,m as l}from"./map.BZUbaCFT.js";import{e as C,A as X}from"./sign.B6YKytVz.js";import{g as Y}from"./search.BFsKSsdA.js";import{p as $}from"./stores.Cmd67Ly2.js";import{l as ee}from"./longPress.C9F0mLoM.js";import{g as te}from"./entry.AgxjcCCu.js";import{s as oe}from"./searchParams.vba8wOMQ.js";import{a as P,f as I}from"./proj.DXH8zrwl.js";import{s as S}from"./s32cloudfront.CDDYvCRR.js";function ne(s){let n,r,i,g;const d=s[5].default,a=M(d,s,s[4],null);return{c(){n=G("div"),a&&a.c(),this.h()},l(o){n=k(o,"DIV",{id:!0,class:!0});var c=j(n);a&&a.l(c),c.forEach(x),this.h()},h(){w(n,"id","map"),w(n,"class","absolute w-full h-full z-[1] bg-[#BDDBF3]")},m(o,c){L(o,n,c),a&&a.m(n,null),s[6](n),r=!0,i||(g=[N(ee.call(null,n,500)),z(n,"longpress",s[7])],i=!0)},p(o,[c]){a&&a.p&&(!r||c&16)&&Z(a,d,o,o[4],r?q(d,o[4],c,null):F(o[4]),null)},i(o){r||(K(a,o),r=!0)},o(o){Q(a,o),r=!1},d(o){o&&x(n),a&&a.d(o),s[6](null),i=!1,O(g)}}}function y(s){s.preventDefault()}function ae(s,n,r){let i;R(s,$,e=>r(2,i=e));let{$$slots:g={},$$scope:d}=n,{onSelect:a=()=>{}}=n,{onMoveend:o=()=>{}}=n;v.refresh(),C.on("explorePlaces",_);let c="",h;async function _(){var e;if(!(l.getView().getZoom()<16))try{h&&h.abort("new request");const t=(e=window.location.search.split("tags=")[1])==null?void 0:e.split("&")[0];if(!t)return;const u=decodeURIComponent(t);if(!u)return;c!==u&&(v.refresh(),c=u),h=new AbortController;const m=await Y({tags:c,bbox:P(l.getView().calculateExtent(),"EPSG:3857","EPSG:4326").join(),abortController:h});C.emit("addIcons",m.map(p=>({idx:p.idx,coordinate:I(p.location.replace("POINT(","").replace(")","").split(" ").map(Number)),image:S(p.thumbnail,500)||"",shape:"point",type:"place",link:`/places/${p.idx}`,rank:3,name:p.name,width:38,height:46,onlyMain:!0})))}catch(t){(t==null?void 0:t.name)==="AbortError"?console.log("이전 explorePlaces 요청이 취소되었습니다."):console.error("explorePlaces 중 에러 발생:",t)}}l.on("moveend",b);function b(){var e,t;_(),oe({location:((e=l.getView().getCenter())==null?void 0:e.join(","))??"",zoom:((t=l.getView().getZoom())==null?void 0:t.toFixed(2))??""}),o(P(l.getView().calculateExtent(),"EPSG:3857","EPSG:4326").join())}_();let f;T(()=>{l.setTarget(f),f.addEventListener("contextmenu",y),i.url.searchParams.has("location")&&D(),i.url.searchParams.has("placeIdx")&&E(i.url.searchParams.get("placeIdx")),o(P(l.getView().calculateExtent(),"EPSG:3857","EPSG:4326").join())}),U(()=>{l.un("moveend",b),f.removeEventListener("contextmenu",y)});function D(){const e=i.url.searchParams.get("location"),t=i.url.searchParams.get("zoom"),u=e==null?void 0:e.split(",").map(Number);u&&l.getView().setCenter(u),t&&l.getView().setZoom(Number(t))}C.on("addIconByPlaceIdx",E);async function E(e){const t=await fetch(`${X}/places/${e}`).then(m=>m.json()).then(m=>m.data).catch(m=>{console.error(m)}),u={idx:t.placeIdx,coordinate:I([t.longitude,t.latitude]),image:S(t.thumbnail,500)||"",shape:"point",type:"place",link:`/places/${t.placeIdx}`,rank:5,name:t.name,width:38,height:46};C.emit("addIcon",u)}function B(e){W[e?"unshift":"push"](()=>{f=e,r(1,f)})}const V=e=>{const t=l.getEventCoordinate(e.detail);i.url.pathname!=="/map/edit"?te(`/map/edit?location=${t[0]},${t[1]}`):a(t)};return s.$$set=e=>{"onSelect"in e&&r(0,a=e.onSelect),"onMoveend"in e&&r(3,o=e.onMoveend),"$$scope"in e&&r(4,d=e.$$scope)},[a,f,i,o,d,g,B,V]}class he extends H{constructor(n){super(),J(this,n,ae,ne,A,{onSelect:0,onMoveend:3})}}export{he as M};
