var h=Object.defineProperty;var y=(e,t,a)=>t in e?h(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a;var o=(e,t,a)=>y(e,typeof t!="symbol"?t+"":t,a);import{C as w}from"./sign.D2LB2NXZ.js";import{G as s,P as i}from"./index.zUwNAOZE.js";let n={latitude:0,longitude:0,accuracy:0,altitudeAccuracy:void 0,altitude:null,speed:null,heading:null};class A{static async getCurrentOrLastLocation(){const t=w.isNativePlatform()?await this.checkAndRequestGeolocationPermission():{location:"granted"};if((t==null?void 0:t.location)==="granted")try{const a=await s.getCurrentPosition(),{latitude:c,longitude:r,accuracy:l,altitudeAccuracy:u,altitude:L,speed:d,heading:g}=a.coords;return n={latitude:c,longitude:r,accuracy:l,altitudeAccuracy:u,altitude:L,speed:d,heading:g},this.saveLastKnownLocation(n),n}catch(a){return console.warn(a),this.getLastKnownLocation()}else return this.getLastKnownLocation()}static async checkAndRequestGeolocationPermission(){try{return await s.requestPermissions({permissions:["location"]})}catch{return null}}static saveLastKnownLocation(t){i.set({key:this.LAST_LOCATION_KEY,value:JSON.stringify(t)})}static async getLastKnownLocation(){const{value:t}=await i.get({key:this.LAST_LOCATION_KEY});return t?JSON.parse(t):null}}o(A,"LAST_LOCATION_KEY","last_known_location");export{A as L};
