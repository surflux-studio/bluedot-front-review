var h=Object.defineProperty;var y=(e,t,a)=>t in e?h(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a;var o=(e,t,a)=>y(e,typeof t!="symbol"?t+"":t,a);import{C as m}from"./sign.DV4XVC12.js";import{G as s,P as i}from"./index.C_5f9VY-.js";let n={latitude:0,longitude:0,accuracy:0,altitudeAccuracy:void 0,altitude:null,speed:null,heading:null};class w{static async getCurrentOrLastLocation(){const t=m.isNativePlatform()?await this.checkAndRequestGeolocationPermission():{location:"granted"};if((t==null?void 0:t.location)==="granted")try{const a=await s.getCurrentPosition({maximumAge:2e3}),{latitude:c,longitude:r,accuracy:l,altitudeAccuracy:u,altitude:L,speed:d,heading:g}=a.coords;return n={latitude:c,longitude:r,accuracy:l,altitudeAccuracy:u,altitude:L,speed:d,heading:g},this.saveLastKnownLocation(n),n}catch(a){return console.warn(a),this.getLastKnownLocation()}else return this.getLastKnownLocation()}static async checkAndRequestGeolocationPermission(){try{return await s.requestPermissions({permissions:["location"]})}catch{return null}}static saveLastKnownLocation(t){i.set({key:this.LAST_LOCATION_KEY,value:JSON.stringify(t)})}static async getLastKnownLocation(){const{value:t}=await i.get({key:this.LAST_LOCATION_KEY});return t?JSON.parse(t):null}}o(w,"LAST_LOCATION_KEY","last_known_location");export{w as L};
