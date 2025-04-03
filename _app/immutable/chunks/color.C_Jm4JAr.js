function o(e){if(!e)return"hsl(200, 80%, 70%)";let t=0;for(let h=0;h<e.length;h++)t=e.charCodeAt(h)+((t<<5)-t);return`hsl(${Math.abs(t)%360}, 80%, 70%)`}export{o as g};
