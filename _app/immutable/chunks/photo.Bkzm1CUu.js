import{g as d}from"./entry.Z5ixVeuu.js";import{F as g,t as m,h as p}from"./heic2any.CdeiGWSs.js";import{c as h,e as f}from"./emitter.ayfdCPcU.js";const F=async()=>{try{return(await g.pickMedia({limit:1})).files[0]}catch(t){throw t}},I=async()=>{if(!h()){f.emit("showSignInModal",{removable:!0});return}const t=document.createElement("input");t.type="file",t.multiple=!0,t.style.display="none",t.accept="image/*,.heic,.heif",document.body.appendChild(t),t.addEventListener("change",async l=>{const i=l.target.files,c=new FormData;if(i&&i.length>0){console.log("Selected files:",i);let r="";for(const e of Array.from(i)){let a=e,n;try{n=await m.gps(e),n&&(console.log(n),r=`&location=${n.longitude.toFixed(5)},${n.latitude.toFixed(5)}`)}catch(o){console.error("GPS 데이터 추출 오류:",o)}if(d(`/map/search?type=post${r}`),e.type==="image/heic"||e.type==="image/heif"||e.name.endsWith(".heic")||e.name.endsWith(".heif"))try{const o=await p({blob:e,toType:"image/jpeg",quality:.9});a=new File([o],e.name.replace(/\.[^/.]+$/,".jpg"),{type:"image/jpeg",lastModified:e.lastModified})}catch(o){console.error("HEIC를 JPEG로 변환하는 중 오류 발생:",o);continue}else try{const o=await u(e);a=new File([o],e.name.replace(/\.[^/.]+$/,".jpg"),{type:"image/jpeg",lastModified:e.lastModified})}catch(o){console.error("이미지를 JPEG로 변환하는 중 오류 발생:",o);continue}console.log("converted done"),c.append("media",a)}fetch("https://azit.surflux.studio/posts/media",{method:"POST",body:c,headers:{Authorization:"Bearer "+window.sessionStorage.getItem("jwt")}}).then(async e=>{const a=await e.json();sessionStorage.setItem("postMedia",JSON.stringify(a.data.media))})}document.body.removeChild(t)}),t.click()};async function u(t){return new Promise((l,s)=>{const i=new FileReader;i.onload=c=>{var e;const r=new Image;r.onload=()=>{const a=document.createElement("canvas");a.width=r.width,a.height=r.height;const n=a.getContext("2d");if(!n){s(new Error("캔버스 컨텍스트를 가져올 수 없습니다."));return}n.drawImage(r,0,0),a.toBlob(o=>{o?l(o):s(new Error("캔버스가 비어 있습니다."))},"image/jpeg",.9)},r.onerror=()=>{s(new Error("이미지를 로드하는 데 실패했습니다."))},r.src=(e=c.target)==null?void 0:e.result},i.onerror=()=>{s(new Error("파일을 읽는 데 실패했습니다."))},i.readAsDataURL(t)})}export{I as a,F as g};
