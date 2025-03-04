import{V as y}from"./scheduler.ChiloVl_.js";function m(t){const o=t-1;return o*o*o+1}function $(t){return Math.sin(-13*(t+1)*Math.PI/2)*Math.pow(2,-10*t)+1}function g(t,{delay:o=0,duration:n=400,easing:s=y}={}){const c=+getComputedStyle(t).opacity;return{delay:o,duration:n,easing:s,css:a=>`opacity: ${a*c}`}}function h(t,{delay:o=0,duration:n=400,easing:s=m,start:c=0,opacity:a=0}={}){const e=getComputedStyle(t),r=+e.opacity,f=e.transform==="none"?"":e.transform,u=1-c,p=r*(1-a);return{delay:o,duration:n,easing:s,css:(d,i)=>`
			transform: ${f} scale(${1-u*i});
			opacity: ${r-p*i}
		`}}export{m as c,$ as e,g as f,h as s};
