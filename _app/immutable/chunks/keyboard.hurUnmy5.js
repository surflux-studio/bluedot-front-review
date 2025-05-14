import{i as l}from"./store.Lj_JrlvG.js";import{K as y}from"./index.-M_-XSbC.js";const i={listeners:{},addListener:(e,r)=>{if(i.listeners[e]||(i.listeners[e]=[]),i.listeners[e].push(r),!window.mockKeyboard){const o=document.createElement("div");o.setAttribute("data-mock-keyboard",""),o.style.cssText=`
        position: fixed;
        bottom: -300px;
        left: 0;
        right: 0;
        height: 300px;
        background-color: #cccccc;
        transition: bottom 0.3s;
        z-index: 9999;
      `,document.body.appendChild(o),window.mockKeyboard={triggerKeyboardEvent:t=>{const d=document.querySelector("[data-mock-keyboard]"),c=i.listeners[t]||[];t==="keyboardWillShow"&&d?(d.style.bottom="0px",c.forEach(n=>n({keyboardHeight:300}))):t==="keyboardWillHide"&&d&&(d.style.bottom="-300px",c.forEach(n=>n({keyboardHeight:0})))}}}return{remove:()=>{var t;const o=(t=i.listeners[e])==null?void 0:t.indexOf(r);o!==void 0&&o!==-1&&i.listeners[e].splice(o,1)}}},removeAllListeners:()=>{i.listeners={};const e=document.querySelector("[data-mock-keyboard]"),r=document.querySelector("[data-mock-keyboard-controls]");e==null||e.remove(),r==null||r.remove(),delete window.mockKeyboard}},a=l?y:i;let s=!1;function b(e){window.mockKeyboard&&e.metaKey&&e.code==="KeyK"&&(s?(window.mockKeyboard.triggerKeyboardEvent("keyboardWillHide"),s=!1):(window.mockKeyboard.triggerKeyboardEvent("keyboardWillShow"),s=!0))}function f(e,r,o){l||window.addEventListener("keydown",b),e(),a.addListener("keyboardWillShow",t=>{r(t)}),a.addListener("keyboardWillHide",()=>{o()})}function w(){l||window.removeEventListener("keydown",b),a.removeAllListeners()}export{w as a,f as o};
