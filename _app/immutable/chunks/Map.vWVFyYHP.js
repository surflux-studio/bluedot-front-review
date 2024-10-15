import{_ as y}from"./preload-helper.D6kgxu3v.js";import{s as T,n as x,c as M,o as O,a as j,b as k}from"./scheduler.mTkvHAFM.js";import{S,i as V,e as N,s as R,q as w,c as F,a as z,d as h,f as U,r as D,g}from"./index.DrH1dKcj.js";import{s as Z,m as u,g as q,a as L}from"./search.C-BpKLUa.js";import{e as l}from"./store.BxWZvLVq.js";import{p as J}from"./stores.BgOxvm63.js";function G(n){let a,o,i;return{c(){a=N("div"),o=R(),i=w(),this.h()},l(t){a=F(t,"DIV",{id:!0,class:!0}),z(a).forEach(h),o=U(t),i=w(),this.h()},h(){D(a,"id","map"),D(a,"class","svelte-4dod2t")},m(t,c){g(t,a,c),n[6](a),g(t,o,c),g(t,i,c)},p(t,[c]){},i:x,o:x,d(t){t&&(h(a),h(o),h(i)),n[6](null)}}}function H(n,a,o){let i;M(n,J,e=>o(9,i=e));let{onMark:t=!1}=a;async function c(){const{default:e}=await y(async()=>{const{default:r}=await import("./feed_read.LNY5rkFx.js");return{default:r}},[],import.meta.url);l.emit("addIcon",{image:"https://github.githubassets.com/assets/video-thumbnail-22873af1c902.jpg",shape:"circle",type:"feed",link:"/boxes?feed=true&type=feed",rank:2,name:"읽은 피드의 장소명",width:62,height:67,backgroundImage:e,displacement:[0,3.5]})}async function E(){const{default:e}=await y(async()=>{const{default:r}=await import("./feed_unread.BwN6XzLy.js");return{default:r}},[],import.meta.url);l.emit("addIcon",{coordinate:[126.97785,37.578019],image:"https://github.githubassets.com/assets/video-thumbnail-22873af1c902.jpg",shape:"circle",type:"feed",link:"/boxes?feed=true&type=feed",rank:1,name:"안읽은 피드의 장소명",width:62,height:67,backgroundImage:e,displacement:[0,3.5]})}async function I(){l.emit("addIcon",{coordinate:[126.97685,37.576519],image:"https://github.githubassets.com/assets/video-thumbnail-22873af1c902.jpg",shape:"waterdrop",type:"place",link:"/boxes?feed=true&type=feed",rank:3,name:"장소명",width:56,height:61})}let d;function A(){if(d){const e=u.getView().getZoom()||0;o(0,d.innerText=`ZOOM: ${e.toString()}`,d)}}Z.refresh();function B(){const e=u.getView().calculateExtent(u.getSize()),r=q(e),s=Number(r[0].toFixed(6)),f=Number(r[1].toFixed(6));l.emit("addIcon",{coordinate:[s,f],image:"https://github.githubassets.com/assets/video-thumbnail-22873af1c902.jpg",shape:"waterdrop",type:"place",link:"/boxes?feed=true&type=feed",rank:1,name:"추가된 장소",width:56,height:61}),fetch("https://azit.surflux.studio/places",{method:"POST",body:JSON.stringify([{name:"testname",location:{lon:s,lat:f}}])}).then(async C=>{console.log(await C.json())}).catch(C=>{console.log(C)})}let m;async function b(){try{m&&m.abort();const e=i.url.searchParams.get("tags");if(!e)return;m=new AbortController,(await L({tags:e,bbox:u.getView().calculateExtent().join(),abortController:m})).forEach(s=>{const f={idx:s.idx,coordinate:s.location.replace("POINT(","").replace(")","").split(" ").map(Number),image:`https://picsum.photos/112/116?random=${s.idx}`,shape:"waterdrop",type:"place",link:`/places/${s.idx}`,rank:3,name:s.name,width:56,height:61};l.emit("addIcon",f)})}catch(e){(e==null?void 0:e.name)==="AbortError"?console.log("이전 explorePlaces 요청이 취소되었습니다."):console.error("explorePlaces 중 에러 발생:",e)}}function _(){A(),b()}u.on("moveend",_),b();let p;O(()=>{u.setTarget(p)}),j(()=>{u.un("moveend",_)});function v(e){k[e?"unshift":"push"](()=>{p=e,o(1,p)})}function P(e){k[e?"unshift":"push"](()=>{d=e,o(0,d)})}return n.$$set=e=>{"onMark"in e&&o(5,t=e.onMark)},n.$$.update=()=>{n.$$.dirty&32&&t&&(o(5,t=!1),B())},[d,p,c,E,I,t,v,P]}class ee extends S{constructor(a){super(),V(this,a,H,G,T,{onMark:5})}}export{ee as M};
