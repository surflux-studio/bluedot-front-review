import{A as p}from"./store.CPTkvk8U.js";import{e as i}from"./emitter.BcHy5OTs.js";import{g as h}from"./sign.BcpGJUxZ.js";async function w({targetTable:s="users",targetIdx:o,subjectTable:a="users",subjectIdx:n}){const e=h();if(!e)throw i.emit("showSignInModal",{removable:!0}),new Error("로그인이 필요합니다.");const r=new URL(`${p}/auth/followers`);r.searchParams.append("targetTable",s),r.searchParams.append("targetIdx",o.toString()),r.searchParams.append("subjectTable",a),r.searchParams.append("subjectIdx",n.toString());const t=await fetch(r.href,{method:"PUT",headers:{"Content-Type":"application/json",Authorization:`Bearer ${e}`}});return t.ok||i.emit("pushSnackbar",{message:"팔로우에 실패했습니다."}),await t.json()}async function g({targetTable:s="users",targetIdx:o,subjectTable:a="users",subjectIdx:n,useMessage:e=!0}){const r=h();if(!r)throw i.emit("showSignInModal",{removable:!0}),new Error("로그인이 필요합니다.");const t=new URL(`${p}/auth/followers`);t.searchParams.append("targetTable",s),t.searchParams.append("targetIdx",String(o)),t.searchParams.append("subjectTable",a),t.searchParams.append("subjectIdx",String(n));const c=await fetch(t.href,{method:"DELETE",headers:{"Content-Type":"application/json",Authorization:`Bearer ${r}`}});if(!c.ok&&e)throw i.emit("pushSnackbar",{message:"언팔로우에 실패했습니다."}),new Error("언팔로우 실패");return await c.json()}async function f({targetTable:s="users",targetIdx:o}){const a=new URL(`${p}/auth/followers`);return a.searchParams.append("targetTable",s),a.searchParams.append("targetIdx",String(o)),a.searchParams.append("count","true"),(await(await fetch(a.href,{method:"GET",headers:{"Content-Type":"application/json",Authorization:`Bearer ${h()}`}})).json()).data.count}async function b({targetTable:s="users",targetIdx:o,subjectTable:a="users",subjectIdx:n}){const e=new URL(`${p}/auth/followers`);return e.searchParams.append("targetTable",s),e.searchParams.append("targetIdx",String(o)),e.searchParams.append("subjectTable",a),e.searchParams.append("subjectIdx",String(n)),(await(await fetch(e.href,{method:"GET",headers:{"Content-Type":"application/json",Authorization:`Bearer ${h()}`}})).json()).data.length>0}export{w as f,f as g,b as i,g as u};
