import{W as t}from"./emitter.BcHy5OTs.js";class i extends t{constructor(){super(...arguments),this.PREFIX="cap_sec_",this.addPrefix=e=>this.PREFIX+e,this.removePrefix=e=>e.replace(this.PREFIX,"")}get(e){const r=localStorage.getItem(this.addPrefix(e.key));return r!==null?Promise.resolve({value:atob(r)}):Promise.reject("Item with given key does not exist")}set(e){return localStorage.setItem(this.addPrefix(e.key),btoa(e.value)),Promise.resolve({value:!0})}remove(e){return localStorage.getItem(this.addPrefix(e.key))?(localStorage.removeItem(this.addPrefix(e.key)),Promise.resolve({value:!0})):Promise.reject("Item with given key does not exist")}clear(){for(const e in localStorage)e.indexOf(this.PREFIX)===0&&localStorage.removeItem(e);return Promise.resolve({value:!0})}keys(){const e=Object.keys(localStorage).filter(r=>r.indexOf(this.PREFIX)===0).map(this.removePrefix);return Promise.resolve({value:e})}getPlatform(){return Promise.resolve({value:"web"})}}export{i as SecureStoragePluginWeb};
