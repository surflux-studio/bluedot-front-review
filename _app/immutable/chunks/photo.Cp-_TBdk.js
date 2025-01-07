import{F as v,h as F,t as f}from"./heic2any.BN35W5Yp.js";import{e as m,A as I,i as S,a as w,b as y}from"./sign.C9vOT0h0.js";import{g as P}from"./searchParams.Bja4WamP.js";const C=async()=>{try{return(await v.pickMedia({limit:1})).files[0]}catch(t){throw t}},b=async t=>{let o;if(t.type==="image/heic"||t.type==="image/heif"||t.name.endsWith(".heic")||t.name.endsWith(".heif")||t.name.endsWith(".HEIC")||t.name.endsWith(".HEIF")){console.log("HEIC/HEIF 이미지를 JPEG로 변환합니다.");try{const e=await F({blob:t,toType:"image/jpeg",quality:.9});o=new File([e],t.name.replace(/\.[^/.]+$/,".jpg"),{type:"image/jpeg",lastModified:t.lastModified})}catch(e){throw console.error("HEIC를 JPEG로 변환하는 중 오류 발생:",e),e}}else{console.log("다른 이미지 형식을 JPEG로 변환합니다.");try{const e=await x(t);o=new File([e],t.name.replace(/\.[^/.]+$/,".jpg"),{type:"image/jpeg",lastModified:t.lastModified})}catch(e){throw console.error("이미지를 JPEG로 변환하는 중 오류 발생:",e),e}}return o};async function B({multiple:t=!1}){return new Promise((o,e)=>{m.emit("loading",!0);const a=document.createElement("input");a.type="file",a.multiple=t,a.style.display="none",a.accept="image/*,.heic,.heif",document.body.appendChild(a),a.addEventListener("change",async u=>{const d=u.target.files,i=new FormData,r=[];if(d&&d.length>0){for await(const l of Array.from(d)){let c,p={gps:{longitude:0,latitude:0},exif:null};try{c=await f.gps(l),c&&(p.gps={longitude:c.longitude,latitude:c.latitude});const h=await f.parse(l);h&&(p.exif=h)}catch(h){console.error("메타데이터 추출 오류:",h)}const E=await b(l);console.log("converted done"),i.append("media",E),r.push(p)}i.append("metadata",JSON.stringify(r));const s=await fetch(`${I}/posts/media`,{method:"POST",body:i,headers:{Authorization:"Bearer "+window.sessionStorage.getItem("jwt")}}).catch(l=>{throw console.error("S3 업로드 중 오류 발생:",l),m.emit("pushSnackbar",{message:"사진 업로드 중 오류가 발생했습니다."}),m.emit("loading",!1),l});m.emit("loading",!1);const g=await s.json();return o(g.data.media)}document.body.removeChild(a)}),a.click()})}const J=async(t,o)=>{if(!S()){m.emit("showSignInModal",{removable:!0});return}w.set([]),y.set(!1);const e=document.createElement("input");e.type="file",e.multiple=!0,e.style.display="none",e.accept="image/*,.heic,.heif",document.body.appendChild(e),e.addEventListener("change",async a=>{const n=a.target.files,d=new FormData,i=[];if(n&&n.length>0){for await(const r of Array.from(n)){let s,g={gps:{longitude:0,latitude:0},exif:null};try{s=await f.gps(r),s&&(g.gps={longitude:s.longitude,latitude:s.latitude});const c=await f.parse(r);c&&(g.exif=c)}catch(c){console.error("메타데이터 추출 오류:",c)}const l=await b(r);console.log("converted done"),d.append("media",l),i.push(g),await A(l).then(c=>{w.update(p=>[...p,c])})}d.append("metadata",JSON.stringify(i)),P("/viewer/edit",{type:"post",placeIdx:String(t),placeName:o},{replaceState:!1,invalidateAll:!1}),fetch(`${I}/posts/media`,{method:"POST",body:d,headers:{Authorization:"Bearer "+window.sessionStorage.getItem("jwt")}}).then(async r=>{const s=await r.json();w.set(s.data.media),y.set(!0)}).catch(r=>{console.error("S3 업로드 중 오류 발생:",r),m.emit("pushSnackbar",{message:"사진 업로드 중 오류가 발생했습니다.",buttonText:"뒤로",keep:!0,urgent:!0,uuid:"upload-error",callback:()=>{history.back()}}),y.set(!1)})}document.body.removeChild(e)}),e.click()};async function x(t){if(!(t instanceof Blob))throw new Error("전달된 인자가 File/Blob 타입이 아닙니다.");return new Promise((o,e)=>{const a=new FileReader;a.onload=u=>{var d;const n=new Image;n.onload=()=>{const i=document.createElement("canvas");i.width=n.width,i.height=n.height;const r=i.getContext("2d");if(!r){e(new Error("캔버스 컨텍스트를 가져올 수 없습니다."));return}r.drawImage(n,0,0),i.toBlob(s=>{s?o(s):e(new Error("캔버스가 비어 있습니다."))},"image/jpeg",.9)},n.onerror=()=>{e(new Error("이미지를 로드하는 데 실패했습니다."))},n.src=(d=u.target)==null?void 0:d.result},a.onerror=()=>{e(new Error("파일을 읽는 데 실패했습니다."))},a.readAsDataURL(t)})}function A(t){const o=new FileReader;return new Promise((e,a)=>{o.onload=()=>{e(o.result)},o.onerror=a,o.readAsDataURL(t)})}export{J as a,b as c,C as g,B as u};
