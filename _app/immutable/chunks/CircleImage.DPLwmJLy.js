import{s as A,e as M,q as v,c as P,b as d,r as _,f,v as e,i as R,h as m,A as W,n as b,L as q}from"./scheduler.5W7zuegH.js";import{S as B,i as I}from"./index.6ch9Ev20.js";/* empty css                                                  */function S(c){let r,i,n,h,a,u,s,t,k,g,p,C;return{c(){r=M("div"),i=v("svg"),n=v("defs"),h=v("clipPath"),a=v("circle"),s=v("image"),t=v("circle"),this.h()},l(l){r=P(l,"DIV",{class:!0,style:!0});var o=d(r);i=_(o,"svg",{viewBox:!0,preserveAspectRatio:!0});var w=d(i);n=_(w,"defs",{});var E=d(n);h=_(E,"clipPath",{id:!0});var y=d(h);a=_(y,"circle",{cx:!0,cy:!0,r:!0}),d(a).forEach(f),y.forEach(f),E.forEach(f),s=_(w,"image",{href:!0,width:!0,height:!0,preserveAspectRatio:!0,"clip-path":!0}),d(s).forEach(f),t=_(w,"circle",{cx:!0,cy:!0,r:!0,fill:!0,stroke:!0,"stroke-width":!0}),d(t).forEach(f),w.forEach(f),o.forEach(f),this.h()},h(){e(a,"cx","100"),e(a,"cy","100"),e(a,"r",u=100-c[3]/2),e(h,"id","circle-clip"),e(s,"href",c[1]),e(s,"width","100%"),e(s,"height","100%"),e(s,"preserveAspectRatio","xMidYMid slice"),e(s,"clip-path","url(#circle-clip)"),e(t,"cx","100"),e(t,"cy","100"),e(t,"r",k=100-c[3]/2),e(t,"fill","none"),e(t,"stroke",c[2]),e(t,"stroke-width",c[3]),e(i,"viewBox","0 0 200 200"),e(i,"preserveAspectRatio","xMinYMin slice"),e(r,"class","circle-container svelte-9vih5u"),e(r,"style",g=`width: ${c[0]}`)},m(l,o){R(l,r,o),m(r,i),m(i,n),m(n,h),m(h,a),m(i,s),m(i,t),p||(C=W(r,"click",c[4]),p=!0)},p(l,[o]){o&8&&u!==(u=100-l[3]/2)&&e(a,"r",u),o&2&&e(s,"href",l[1]),o&8&&k!==(k=100-l[3]/2)&&e(t,"r",k),o&4&&e(t,"stroke",l[2]),o&8&&e(t,"stroke-width",l[3]),o&1&&g!==(g=`width: ${l[0]}`)&&e(r,"style",g)},i:b,o:b,d(l){l&&f(r),p=!1,C()}}}function Y(c,r,i){let{width:n="200px"}=r,{src:h="graydot.png"}=r,{strokeColor:a="black"}=r,{strokeWidth:u="10"}=r;function s(t){q.call(this,c,t)}return c.$$set=t=>{"width"in t&&i(0,n=t.width),"src"in t&&i(1,h=t.src),"strokeColor"in t&&i(2,a=t.strokeColor),"strokeWidth"in t&&i(3,u=t.strokeWidth)},[n,h,a,u,s]}class j extends B{constructor(r){super(),I(this,r,Y,S,A,{width:0,src:1,strokeColor:2,strokeWidth:3})}}export{j as C};
