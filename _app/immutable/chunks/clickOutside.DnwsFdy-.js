function c(t){function e(i){const n=i.target;n&&!t.contains(n)&&t.dispatchEvent(new CustomEvent("outsideclick"))}return window.addEventListener("click",e),{destroy(){window.removeEventListener("click",e)}}}export{c};
