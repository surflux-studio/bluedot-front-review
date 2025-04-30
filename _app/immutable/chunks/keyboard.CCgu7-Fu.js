import{r as m,i as c}from"./store.D90ABXMK.js";var b;(function(e){e.Dark="DARK",e.Light="LIGHT",e.Default="DEFAULT"})(b||(b={}));var y;(function(e){e.Body="body",e.Ionic="ionic",e.Native="native",e.None="none"})(y||(y={}));const f=m("Keyboard"),r={listeners:{},addListener:(e,t)=>{if(r.listeners[e]||(r.listeners[e]=[]),r.listeners[e].push(t),!window.mockKeyboard){const o=document.createElement("div");o.setAttribute("data-mock-keyboard",""),o.style.cssText=`
        position: fixed;
        bottom: -300px;
        left: 0;
        right: 0;
        height: 300px;
        background-color: #cccccc;
        transition: bottom 0.3s;
        z-index: 9999;
      `,document.body.appendChild(o),window.mockKeyboard={triggerKeyboardEvent:i=>{const n=document.querySelector("[data-mock-keyboard]"),l=r.listeners[i]||[];i==="keyboardWillShow"&&n?(n.style.bottom="0px",l.forEach(d=>d({keyboardHeight:300}))):i==="keyboardWillHide"&&n&&(n.style.bottom="-300px",l.forEach(d=>d({keyboardHeight:0})))}}}return{remove:()=>{var i;const o=(i=r.listeners[e])==null?void 0:i.indexOf(t);o!==void 0&&o!==-1&&r.listeners[e].splice(o,1)}}},removeAllListeners:()=>{r.listeners={};const e=document.querySelector("[data-mock-keyboard]"),t=document.querySelector("[data-mock-keyboard-controls]");e==null||e.remove(),t==null||t.remove(),delete window.mockKeyboard}},a=c?f:r;let s=!1;function k(e){window.mockKeyboard&&e.metaKey&&e.code==="KeyK"&&(s?(window.mockKeyboard.triggerKeyboardEvent("keyboardWillHide"),s=!1):(window.mockKeyboard.triggerKeyboardEvent("keyboardWillShow"),s=!0))}function u(e,t,o){c||window.addEventListener("keydown",k),e(),a.addListener("keyboardWillShow",i=>{t(i)}),a.addListener("keyboardWillHide",()=>{o()})}function K(){c||window.removeEventListener("keydown",k),a.removeAllListeners()}export{K as a,u as o};
