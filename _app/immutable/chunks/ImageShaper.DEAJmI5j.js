const m=`<svg width="50" height="58" viewBox="0 0 50 58" fill="none" xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink">
  <g filter="url(#filter0_d_1215_8322)">
    <path fill-rule="evenodd" clip-rule="evenodd"
      d="M43 24.0345C43 25.4836 42.8384 26.8948 42.5322 28.2511C39.9336 41.6768 27.2737 51.0001 24 51.0001C20.7263 51.0001 8.06645 41.6768 5.46782 28.2511C5.16163 26.8948 5 25.4836 5 24.0345C5 23.9377 5.00072 23.8411 5.00216 23.7447C5.00072 23.6356 5 23.5263 5 23.4167H5.00982C5.33529 13.1902 13.7129 5 24 5C34.2871 5 42.6647 13.1902 42.9902 23.4167H43C43 23.5263 42.9993 23.6356 42.9978 23.7447C42.9993 23.8411 43 23.9377 43 24.0345Z"
      fill="white" />
    <rect x="8.1665" y="8.17188" width="31.6667" height="31.7241" rx="15.8333"
      fill="#D9D9D9" />
    <rect x="8.1665" y="8.17188" width="31.6667" height="31.7241" rx="15.8333"
      fill="url(#pattern_img)" />
  </g>
  <defs>
    <filter id="filter0_d_1215_8322" x="0" y="0" width="50" height="58" filterUnits="userSpaceOnUse"
      color-interpolation-filters="sRGB">
      <feFlood flood-opacity="0" result="BackgroundImageFix" />
      <feColorMatrix in="SourceAlpha" type="matrix"
        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
      <feOffset dx="1" dy="1" />
      <feGaussianBlur stdDeviation="3" />
      <feComposite in2="hardAlpha" operator="out" />
      <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
      <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1215_8322" />
      <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1215_8322" result="shape" />
    </filter>
    <pattern id="pattern_img" width="1" height="1">
      <image width="31.6667" height="31.7241"
        xlink:href="dataURL"
        preserveAspectRatio="xMidYMid slice" />
    </pattern>
  </defs>
</svg>`,c=document.createElement("canvas");c.style.display="none";const e=c.getContext("2d"),p="image/jpeg",w="image/png",h=5,g=1.5;async function v(l,i){return new Promise(async(a,n)=>{const s=new Image;s.crossOrigin="anonymous",s.onload=async function(){if(!e)return;const t=i*g;c.width=t,c.height=t;const d=(t-h*2)/2;e.beginPath(),e.arc(t/2,t/2,d,0,2*Math.PI),e.shadowBlur=h,e.shadowColor="rgba(0, 0, 0, 0.5)",e.shadowOffsetX=1,e.shadowOffsetY=1,e.fill(),e.shadowBlur=0,e.shadowOffsetX=0,e.shadowOffsetY=0,e.clip(),e.drawImage(s,0,0,t,t),e.lineWidth=10,e.strokeStyle="white",e.stroke();const f=c.toDataURL(w);e.clearRect(0,0,t,t),a(f)},s.src=l})}async function y(l){const i=await x(l),a=m.replace("dataURL",i),n=new Blob([a],{type:"image/svg+xml"});return URL.createObjectURL(n)}async function C(l,i=204,a=224.4){return new Promise(async(n,s)=>{const t=new Image;t.crossOrigin="anonymous",t.onload=async function(){if(!e)return;i*=g,a*=g,c.width=i,c.height=a;const d=i-h,f=a-h,o=d/200,r=f/220;e.beginPath(),e.moveTo(100*o,220*r),e.lineTo(32*o,154*r),e.bezierCurveTo(5*o,128*r,-5*o,76*r,29*o,36*r),e.bezierCurveTo(63*o,-5*r,137*o,-5*r,171*o,36*r),e.bezierCurveTo(205*o,76*r,195*o,128*r,168*o,154*r),e.closePath(),e.shadowBlur=h,e.shadowColor="rgba(0, 0, 0, 0.5)",e.shadowOffsetX=1,e.shadowOffsetY=1,e.fill(),e.shadowBlur=0,e.shadowOffsetX=0,e.shadowOffsetY=0,e.clip(),e.drawImage(t,0,0,d,f),e.lineWidth=10,e.strokeStyle="white",e.stroke();const u=c.toDataURL(w);e.clearRect(0,0,i,a),n(u)},t.src=l})}function x(l){return new Promise((i,a)=>{const n=new Image;n.crossOrigin="anonymous",n.onload=()=>{const s=document.createElement("canvas"),t=s.getContext("2d");if(!t)return a("context not found");s.width=n.width,s.height=n.height,t.drawImage(n,0,0,n.width,n.height);const d=s.toDataURL(p,.3);i(d)},n.onerror=a,n.src=l})}export{C as a,y as b,v as c};
