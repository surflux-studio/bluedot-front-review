const d=`<svg
  width="56"
  height="58"
  viewBox="0 0 56 58"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink"
>
  <g clip-path="url(#clip0_5384_125731)">
    <g filter="url(#filter0_d_5384_125731)">
      <path
        d="M43.1568 38.1549L27.6001 52.7999L12.0434 38.1549C8.96671 35.2584 6.87153 31.5681 6.02275 27.5507C5.17397 23.5332 5.60971 19.369 7.27487 15.5847C8.94003 11.8004 11.7598 8.5659 15.3777 6.29023C18.9955 4.01456 23.249 2.79993 27.6001 2.79993C31.9512 2.79993 36.2047 4.01456 39.8225 6.29023C43.4404 8.5659 46.2602 11.8004 47.9253 15.5847C49.5905 19.369 50.0262 23.5332 49.1774 27.5507C48.3287 31.5681 46.2335 35.2584 43.1568 38.1549Z"
        fill="url(#pattern0_5384_125731)"
        shape-rendering="crispEdges"
      />
      <path
        d="M43.1568 38.1549L27.6001 52.7999L12.0434 38.1549C8.96671 35.2584 6.87153 31.5681 6.02275 27.5507C5.17397 23.5332 5.60971 19.369 7.27487 15.5847C8.94003 11.8004 11.7598 8.5659 15.3777 6.29023C18.9955 4.01456 23.249 2.79993 27.6001 2.79993C31.9512 2.79993 36.2047 4.01456 39.8225 6.29023C43.4404 8.5659 46.2602 11.8004 47.9253 15.5847C49.5905 19.369 50.0262 23.5332 49.1774 27.5507C48.3287 31.5681 46.2335 35.2584 43.1568 38.1549Z"
        stroke="white"
        stroke-width="3"
        shape-rendering="crispEdges"
      />
    </g>
  </g>
  <defs>
    <filter
      id="filter0_d_5384_125731"
      x="1.1001"
      y="-0.700073"
      width="53"
      height="59.5601"
      filterUnits="userSpaceOnUse"
      color-interpolation-filters="sRGB"
    >
      <feFlood flood-opacity="0" result="BackgroundImageFix" />
      <feColorMatrix
        in="SourceAlpha"
        type="matrix"
        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        result="hardAlpha"
      />
      <feOffset dy="1" />
      <feGaussianBlur stdDeviation="1.5" />
      <feComposite in2="hardAlpha" operator="out" />
      <feColorMatrix
        type="matrix"
        values="0 0 0 0 0.0235294 0 0 0 0 0.0745098 0 0 0 0 0.121569 0 0 0 0.25 0"
      />
      <feBlend
        mode="normal"
        in2="BackgroundImageFix"
        result="effect1_dropShadow_5384_125731"
      />
      <feBlend
        mode="normal"
        in="SourceGraphic"
        in2="effect1_dropShadow_5384_125731"
        result="shape"
      />
    </filter>
    <pattern
      id="pattern0_5384_125731"
      width="1"
      height="1"
    >
      <use
        xlink:href="#image0_5384_125731"
        x="0" y="0" width="56" height="58"
      />
    </pattern>
    <clipPath id="clip0_5384_125731">
      <rect width="56" height="58" fill="white" />
    </clipPath>
    <image id="image0_5384_125731" width="56" height="58" xlink:href="dataURL" />
  </defs>
</svg>`,h=`<svg width="44" height="48" viewBox="0 0 44 48" fill="none" xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink">
  <path
    d="M21.2839 0.684838C21.7305 0.438387 22.2695 0.438387 22.7161 0.684838L42.7161 11.7219C43.1974 11.9875 43.5 12.5 43.5 13.0605V34.9395C43.5 35.5 43.1974 36.0125 42.7161 36.2781L22.7161 47.3152C22.2695 47.5616 21.7305 47.5616 21.2839 47.3152L1.28388 36.2781C0.802571 36.0125 0.5 35.5 0.5 34.9395V13.0605C0.5 12.5 0.802571 11.9875 1.28388 11.7219L21.2839 0.684838Z"
    fill="url(#pattern0_6044_63526)" />
  <path
    d="M21.2839 0.684838C21.7305 0.438387 22.2695 0.438387 22.7161 0.684838L42.7161 11.7219C43.1974 11.9875 43.5 12.5 43.5 13.0605V34.9395C43.5 35.5 43.1974 36.0125 42.7161 36.2781L22.7161 47.3152C22.2695 47.5616 21.7305 47.5616 21.2839 47.3152L1.28388 36.2781C0.802571 36.0125 0.5 35.5 0.5 34.9395V13.0605C0.5 12.5 0.802571 11.9875 1.28388 11.7219L21.2839 0.684838Z"
    stroke="#EAEEF5" />
  <defs>
    <pattern id="pattern0_6044_63526" width="1" height="1">
      <image width="44" height="48" xlink:href="dataURL" preserveAspectRatio="xMidYMid slice" />
    </pattern>

  </defs>
</svg>
  `,i=document.createElement("canvas");i.style.display="none";const n=i.getContext("2d"),g="image/jpeg";async function w(r,t){return new Promise(async(o,e)=>{const a=new Image;a.crossOrigin="anonymous",a.onload=async function(){if(!n)return;i.width=t,i.height=t,n.beginPath(),n.arc(t/2,t/2,t/2,0,2*Math.PI),n.clip(),n.drawImage(a,0,0,t,t);const s=i.toDataURL();n.clearRect(0,0,t,t),o(s)},a.src=r})}async function f(r){const t=await c(r),o=d.replace("dataURL",t),e=new Blob([o],{type:"image/svg+xml"});return URL.createObjectURL(e)}async function p(r){return new Promise(async(t,o)=>{const e=new Image;e.crossOrigin="anonymous",e.onload=async function(){if(!n)return;i.width=204,i.height=224.4,n.beginPath(),n.moveTo(100,220),n.lineTo(32,154),n.bezierCurveTo(5,128,-5,76,29,36),n.bezierCurveTo(63,-5,137,-5,171,36),n.bezierCurveTo(205,76,195,128,168,154),n.closePath(),n.shadowBlur=5,n.shadowColor="rgba(0, 0, 0, 0.5)",n.shadowOffsetX=1,n.shadowOffsetY=1,n.fill(),n.shadowBlur=0,n.shadowOffsetX=0,n.shadowOffsetY=0,n.beginPath(),n.moveTo(100,220),n.lineTo(32,154),n.bezierCurveTo(5,128,-5,76,29,36),n.bezierCurveTo(63,-5,137,-5,171,36),n.bezierCurveTo(205,76,195,128,168,154),n.closePath(),n.clip(),n.drawImage(e,0,0,200,220);const a=i.toDataURL();n.clearRect(0,0,204,224.4),t(a)},e.src=r})}async function m(r){const t=await c(r),o=h.replace("dataURL",t),e=new Blob([o],{type:"image/svg+xml"});return URL.createObjectURL(e)}function c(r){return new Promise((t,o)=>{const e=new Image;e.crossOrigin="anonymous",e.onload=()=>{const a=document.createElement("canvas"),s=a.getContext("2d");if(!s)return o("context not found");a.width=e.width,a.height=e.height,s.drawImage(e,0,0,e.width,e.height);const l=a.toDataURL(g,.3);t(l)},e.onerror=o,e.src=r})}export{w as a,f as b,p as c,m as d};
