import{n as $,U as _,R as C}from"./scheduler.BVPf9D5l.js";import{n as w,l as R,h as B,j as S}from"./index.CyEs2R8T.js";import{c as q}from"./ActionSheet.Bs52Pc5H.js";function F(s,t,n,o){if(!t)return $;const e=s.getBoundingClientRect();if(t.left===e.left&&t.right===e.right&&t.top===e.top&&t.bottom===e.bottom)return $;const{delay:f=0,duration:c=300,easing:p=_,start:r=w()+f,end:u=r+c,tick:h=$,css:a}=n(s,{from:t,to:e},o);let y=!0,i=!1,l;function m(){a&&(l=B(s,0,1,c,f,p,a)),f||(i=!0)}function d(){a&&S(s,l),y=!1}return R(g=>{if(!i&&g>=r&&(i=!0),i&&g>=u&&(h(1,0),d()),!y)return!1;if(i){const x=g-r,b=0+1*p(x/c);h(b,1-b)}return!0}),m(),h(0,1),d}function U(s){const t=getComputedStyle(s);if(t.position!=="absolute"&&t.position!=="fixed"){const{width:n,height:o}=t,e=s.getBoundingClientRect();s.style.position="absolute",s.style.width=n,s.style.height=o,M(s,e)}}function M(s,t){const n=s.getBoundingClientRect();if(t.left!==n.left||t.top!==n.top){const o=getComputedStyle(s),e=o.transform==="none"?"":o.transform;s.style.transform=`${e} translate(${t.left-n.left}px, ${t.top-n.top}px)`}}function v(s,{from:t,to:n},o={}){const e=getComputedStyle(s),f=e.transform==="none"?"":e.transform,[c,p]=e.transformOrigin.split(" ").map(parseFloat),r=t.left+t.width*c/n.width-(n.left+c),u=t.top+t.height*p/n.height-(n.top+p),{delay:h=0,duration:a=i=>Math.sqrt(i)*120,easing:y=q}=o;return{delay:h,duration:C(a)?a(Math.sqrt(r*r+u*u)):a,easing:y,css:(i,l)=>{const m=l*r,d=l*u,g=i+l*t.width/n.width,x=i+l*t.height/n.height;return`transform: ${f} translate(${m}px, ${d}px) scale(${g}, ${x});`}}}export{v as a,M as b,F as c,U as f};
