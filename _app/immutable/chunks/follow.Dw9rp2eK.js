import{A as o,g as c,e as i}from"./sign.C9vOT0h0.js";async function u({targetTable:s="users",targetIdx:t,subjectTable:r="users",subjectIdx:n}){const a=new URL(`${o}/auth/followers`);a.searchParams.append("targetTable",s),a.searchParams.append("targetIdx",t.toString()),a.searchParams.append("subjectTable",r),a.searchParams.append("subjectIdx",n.toString());const e=await fetch(a.href,{method:"PUT",headers:{"Content-Type":"application/json",Authorization:`Bearer ${c()}`}});return e.ok||i.emit("pushSnackbar",{message:"팔로우에 실패했습니다."}),await e.json()}async function l({targetTable:s="users",targetIdx:t,subjectTable:r="users",subjectIdx:n}){const a=new URL(`${o}/auth/followers`);a.searchParams.append("targetTable",s),a.searchParams.append("targetIdx",String(t)),a.searchParams.append("subjectTable",r),a.searchParams.append("subjectIdx",String(n));const e=await fetch(a.href,{method:"DELETE",headers:{"Content-Type":"application/json",Authorization:`Bearer ${c()}`}});return e.ok||i.emit("pushSnackbar",{message:"언팔로우에 실패했습니다."}),await e.json()}async function m({targetTable:s="users",targetIdx:t,subjectTable:r="users",subjectIdx:n}){const a=new URL(`${o}/auth/followers`);return a.searchParams.append("targetTable",s),a.searchParams.append("targetIdx",String(t)),a.searchParams.append("subjectTable",r),a.searchParams.append("subjectIdx",String(n)),(await(await fetch(a.href,{method:"GET",headers:{"Content-Type":"application/json",Authorization:`Bearer ${c()}`}})).json()).data.length>0}export{u as f,m as i,l as u};
