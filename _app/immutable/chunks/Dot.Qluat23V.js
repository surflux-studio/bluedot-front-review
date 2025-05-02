import{s as B,y as F,z as H}from"./scheduler.I7jjIWdo.js";import{S as R,i as V}from"./index.DN2oNe6D.js";import{c as Z,m as p,a as $,f as q,O as X}from"./Map.DlFsBmOO.js";import{A as Y}from"./store.DqdLFdOX.js";let J=50;function K(d=0){const r=document.createElement("div");return r.innerHTML=`<img class="dot-avatar" />
    <svg class="dot-spining-emoji" viewBox="0 0 100 100">
      <defs>
        <filter id="shadow-${d}">
          <feDropShadow
            dx="2"
            dy="2"
            stdDeviation="3"
            flood-color="#000000"
            flood-opacity="0.14"
          />
        </filter>
      </defs>
      <path
        id="text-path"
        d="M 50,50 m -30,0 a 30,30 0 1,1 60,0 a 30,30 0 1,1 -60,0"
        fill="none"
      />
      <text font-size="12" dy="-3" letter-spacing="10" filter="url(#shadow-${d})">
        <textPath href="#text-path" startOffset="0">
        </textPath>
      </text>
    </svg>
    `,r}function k(d,r){return d+Math.floor(Math.random()*(r+1-d))}function G(d,r){const v=d.getElement();if(!v)return;const y=v.querySelector("img");y&&y.setAttribute("src",r.image);const a=v.querySelector("textPath");a&&(a.innerHTML=r.emojis),v.className=`dot-emoji ${r.size}`}function Q(d){const r=["/dosisool.jpg","/eul.jpg","/face1.jpeg","/face2.jpeg","/face3.jpeg","/j.jpg","/oilh.jpg","/signin.png","/thumb1.jpeg","/thumb2.jpeg","/thumb3.jpeg","/thumb4.jpeg","/thumb5.jpeg"],v=r.length,y=Z(),a={},M=["w-[160px] h-[160px]","w-[100px] h-[100px]"],l=[];function A(){for(let o=0;o<J;o++)I(o)}function I(o,g){const f=new X({id:o,element:K(o),stopEvent:!1,positioning:"center-center",position:g,className:"overlay-dot-container"});p.addOverlay(f),l.push(f)}const S=[[128513,128591],[9986,10160],[128640,128704],[128512,128566],[128641,128709],[127757,128359]];function N(){const o=S[k(0,S.length-1)];return`&#${k(o[0],o[1])};`}function _(){let o="";const g=k(1,8);for(let f=0;f<g;f++)o+=N();return o}A(),F(()=>{p.on("moveend",T)});function T(){const o=p.getView().getZoom();if(!o)return;const g=p.getView().calculateExtent(p.getSize());l.forEach(h=>h.set("uncheck",!0));const f=[],P=Math.ceil(o);y.forEachTileCoord(g,P,h=>{let m=!0;const s=y.getTileCoordExtent(h);l.filter(e=>{const n=e.getPosition();return n?$(s,n):!1}).sort((e,n)=>(n.get("point")??0)-(e.get("point")??1)).forEach((e,n)=>{n===0?(e.set("uncheck",!1),m=!1):(e.set("idx",void 0),e.setPosition(void 0))}),m&&f.push(h)}),f.forEach(h=>{const m=y.getTileCoordExtent(h),[s,e,n]=h;if(!a[s])a[s]={[e]:{[n]:[]}};else if(!a[s][e])a[s][e]={[n]:[]};else if(!a[s][e][n])a[s][e][n]=[];else{const c=a[s][e][n].filter(i=>{const u=l.find(t=>t.get("idx")===i.point.idx);return u?(u.set("uncheck",!1),!1):!0}),j=l.filter(i=>i.get("uncheck")),E=l.filter(i=>!i.get("uncheck"));c.forEach((i,u)=>{const t=j[u];if(!t)return;const{idx:C,longitude:w,latitude:z}=i.point,O=q([w,z]);b(O,E)||(E.push(t),t.setPosition(O),t.set("idx",C),t.set("uncheck",!1),t.set("point",1/s),G(t,i))}),l.forEach(i=>{if(i.get("uncheck")!==!0)return;const u=i.getPosition();u&&$(m,u)&&(i.set("idx",void 0),i.set("uncheck",!1),i.setPosition(void 0))});return}fetch(`${Y}/places/${s}/${e}/${n}`).then(c=>c.json()).then(c=>{const j=c.data,E=[],i=l.filter(t=>t.get("uncheck")),u=l.filter(t=>!t.get("uncheck"));j.forEach((t,C)=>{const w=r[k(0,v-1)],z=M[k(0,M.length-1)],O=_(),D={point:t,image:w,size:z,emojis:O};E.push(D);const x=i[C];if(!x)return;const L=q([t.longitude,t.latitude]);b(L,u)||(u.push(x),x.setPosition(L),x.set("idx",t.idx),x.set("uncheck",!1),x.set("point",1/s),G(x,D))}),a[s][e][n]=E}).catch(c=>console.error(c)).finally(()=>{l.forEach(c=>{if(c.get("uncheck")!==!0)return;const j=c.getPosition();j&&$(m,j)&&(c.set("idx",void 0),c.set("uncheck",!1),c.setPosition(void 0))})})})}function b(o,g,f=226){const P=p.getPixelFromCoordinate(o);return g.some(h=>{const m=h.getPosition();if(!m)return!1;const s=p.getPixelFromCoordinate(m),e=P[0]-s[0],n=P[1]-s[1];return Math.sqrt(e*e+n*n)<f})}return H(()=>{p.un("moveend",T)}),[]}class oe extends R{constructor(r){super(),V(this,r,Q,null,B,{})}}export{oe as D};
