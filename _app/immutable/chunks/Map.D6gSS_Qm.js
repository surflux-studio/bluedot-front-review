import{s as P,w as I,e as y,c as M,b as D,f as b,m as w,H as B,i as z,x as A,r as S,z as k,A as T,B as V,u as N,k as X,E as Y,G as j,l as q}from"./scheduler.Bw1HVZ4I.js";import{S as Z,i as F,t as U,b as G}from"./index.B-tLs4nj.js";import{a as H,m as h}from"./Chip.svelte_svelte_type_style_lang.BBfr2pbM.js";import{e as _}from"./units.CgGDbivZ.js";import{g as O}from"./search.Co1DayWv.js";import{p as W}from"./stores.lzYO7dCz.js";import{g as J}from"./entry.BUpUrWeW.js";import{s as K}from"./searchParams.BvL-fHFp.js";/* empty css                                            *//* empty css                                           */import"./heic2any.CYmZVgVk.js";/* empty css                                                    *//* empty css                                                  *//* empty css                                                     *//* empty css                                          */function Q(e,n=500,i=10){let r,f,p;const s=u=>{const{clientX:m,clientY:v}=u instanceof MouseEvent?u:u.touches[0];f=m,p=v,r=setTimeout(()=>{e.dispatchEvent(new CustomEvent("longpress",{detail:u}))},n)},o=u=>{const{clientX:m,clientY:v}=u instanceof MouseEvent?u:u.touches[0],g=Math.abs(m-f),E=Math.abs(v-p);(g>i||E>i)&&clearTimeout(r)},a=()=>{clearTimeout(r)};return e.addEventListener("mousedown",s),e.addEventListener("mousemove",o),e.addEventListener("mouseup",a),e.addEventListener("mouseleave",a),e.addEventListener("touchstart",s),e.addEventListener("touchmove",o),e.addEventListener("touchend",a),e.addEventListener("touchcancel",a),{destroy(){e.removeEventListener("mousedown",s),e.removeEventListener("mousemove",o),e.removeEventListener("mouseup",a),e.removeEventListener("mouseleave",a),e.removeEventListener("touchstart",s),e.removeEventListener("touchmove",o),e.removeEventListener("touchend",a),e.removeEventListener("touchcancel",a)}}}function R(e){let n,i,r,f;const p=e[4].default,s=I(p,e,e[3],null);return{c(){n=y("div"),s&&s.c(),this.h()},l(o){n=M(o,"DIV",{id:!0,class:!0});var a=D(n);s&&s.l(a),a.forEach(b),this.h()},h(){w(n,"id","map"),w(n,"class",B("absolute w-full h-full z-[1]")+" svelte-mehtzq")},m(o,a){z(o,n,a),s&&s.m(n,null),e[5](n),i=!0,r||(f=[A(Q.call(null,n,500)),S(n,"longpress",e[6])],r=!0)},p(o,[a]){s&&s.p&&(!i||a&8)&&k(s,p,o,o[3],i?V(p,o[3],a,null):T(o[3]),null)},i(o){i||(U(s,o),i=!0)},o(o){G(s,o),i=!1},d(o){o&&b(n),s&&s.d(o),e[5](null),r=!1,N(f)}}}function x(e){e.preventDefault()}function $(e,n,i){let r;X(e,W,t=>i(2,r=t));let{$$slots:f={},$$scope:p}=n,{onSelect:s=void 0}=n;H.refresh();let o;async function a(){try{o&&o.abort("new request");const t=r.url.searchParams.get("tags");if(!t)return;o=new AbortController,(await O({tags:t,bbox:h.getView().calculateExtent().join(),abortController:o})).forEach(c=>{const d={idx:c.idx,coordinate:c.location.replace("POINT(","").replace(")","").split(" ").map(Number),image:`https://picsum.photos/112/116?random=${c.idx}`,shape:"waterdrop",type:"place",link:`/places/${c.idx}`,rank:3,name:c.name,width:56,height:61};_.emit("addIcon",d)})}catch(t){(t==null?void 0:t.name)==="AbortError"?console.log("이전 explorePlaces 요청이 취소되었습니다."):console.error("explorePlaces 중 에러 발생:",t)}}h.on("moveend",u);function u(){a(),K({location:h.getView().getCenter().map(t=>t.toFixed(5)).join(","),zoom:h.getView().getZoom().toFixed(2)})}a();let m;Y(()=>{h.setTarget(m),m.addEventListener("contextmenu",x),r.url.searchParams.has("location")&&v(),r.url.searchParams.has("placeIdx")&&g(r.url.searchParams.get("placeIdx"))}),j(()=>{h.un("moveend",u),m.removeEventListener("contextmenu",x)});function v(){const t=r.url.searchParams.get("location"),l=r.url.searchParams.get("zoom"),c=t==null?void 0:t.split(","),d=c[0],C=c[1];d&&C&&h.getView().setCenter([Number(d),Number(C)]),l&&h.getView().setZoom(Number(l))}_.on("addIconByPlaceIdx",g);async function g(t){const l=await fetch(`https://azit.surflux.studio/places/${t}`).then(d=>d.json()).then(d=>d.data).catch(d=>{console.error(d)}),c={idx:l.placeIdx,coordinate:[l.longitude,l.latitude],image:`https://picsum.photos/112/116?random=${l.placeIdx}`,shape:"waterdrop",type:"place",link:`/places/${l.placeIdx}`,rank:5,name:l.name,width:56,height:61};_.emit("addIcon",c)}function E(t){q[t?"unshift":"push"](()=>{m=t,i(1,m)})}const L=t=>{const[l,c]=h.getEventCoordinate(t.detail);r.url.pathname!=="/map/edit"?J(`/map/edit?longitude=${l}&latitude=${c}`):s&&s(l,c)};return e.$$set=t=>{"onSelect"in t&&i(0,s=t.onSelect),"$$scope"in t&&i(3,p=t.$$scope)},[s,m,r,p,f,E,L]}class fe extends Z{constructor(n){super(),F(this,n,$,R,P,{onSelect:0})}}export{fe as M};
