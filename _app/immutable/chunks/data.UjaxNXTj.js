import{w as t}from"./index.v6QpH2UE.js";const g="/Cesium/",i=5e8,d=2e3,u=700,y=85,b=20,w=100,R=3,r="https://azit.surflux.studio/geoserver",c="https://basemap.surflux.studio/geoserver",o=`${r}/wfs?service=wfs&version=2.0.0&request=GetFeature&outputFormat=application/json&srsname=EPSG:4326`,n=`${c}/wfs?service=wfs&version=2.0.0&request=GetFeature&outputFormat=application/json&srsname=EPSG:4326`,S=`${o}&typeNames=bluedot:base_administrative`,f=`${o}&typeNames=bluedot:multipolygon_test`,D=`${o}&typeNames=bluedot:base_building_240412`,h=`${n}&typeNames=bluedot:base_subway_railway`,A=`${n}&typeNames=bluedot:base_subway_station`,N=`${n}&typeNames=bluedot:base_subway_entrance`;var m=(a=>(a[a.LEV1=45]="LEV1",a[a.LEV2=267]="LEV2",a[a.LEV3=1e3]="LEV3",a[a.LEV4=1970]="LEV4",a[a.LEV5=3300]="LEV5",a[a.LEV6=5170]="LEV6",a[a.LEV7=9300]="LEV7",a[a.LEV8=15500]="LEV8",a[a.LEV9=35400]="LEV9",a[a.LEV10=162e3]="LEV10",a[a.LEV11=389e3]="LEV11",a[a.LEV12=588e3]="LEV12",a[a.LEV13=821e3]="LEV13",a[a.LEV14=1072e3]="LEV14",a[a.LEV15=1726e3]="LEV15",a[a.LEV16=i]="LEV16",a))(m||{});const _=t(!0),U=t(!1),j=t(),W=t({lon:0,lat:0}),z=t(!1),F=t("세상을 탐험하고, 경험을 나누세요"),x=t(0),B=t(m.LEV16),O=t(void 0);async function v(a){return await fetch(a).then(l=>l.json())}const C={images1:[{alt:"erbology",src:"https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg"},{alt:"shoes",src:"https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg"},{alt:"small bag",src:"https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg"}],images2:[{alt:"plants",src:"https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg"},{alt:"watch",src:"https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg"},{alt:"shoe",src:"https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg"}],images3:[{alt:"cream",src:"https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg"},{alt:"small bag",src:"https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg"},{alt:"lamp",src:"https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg"}],images4:[{alt:"toiletbag",src:"https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg"},{alt:"playstation",src:"https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg"},{alt:"bag",src:"https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg"}]},V={albums:[{index:1,title:"마곡나루 점심 맛집"},{index:2,title:"영등포 점심 맛집"},{index:3,title:"강남 점심 맛집"},{index:4,title:"종로 점심 맛집"},{index:5,title:"경복궁 점심 맛집"},{index:6,title:"캠핑"},{index:7,title:"여행"},{index:8,title:"차박하기 좋은곳"}]},s=new Date;s.setDate(s.getDate()-1);const e=new Date;s.setHours(9),s.setHours(10),s.setHours(12,30),s.setHours(12,30),s.setHours(13,30),s.setHours(13,30),s.setHours(20,20),s.setHours(20,20),e.setHours(9,10),e.setHours(9,10),e.setHours(12,40),e.setHours(12,40),e.setHours(14,50,10),e.setHours(14,50,10),e.setHours(15,30);export{d as B,g as C,w as D,u as E,c as G,m as H,i as R,b as S,R as V,f as W,C as a,D as b,z as c,h as d,U as e,A as f,v as g,N as h,j as i,B as j,O as k,S as l,x as m,y as n,_ as o,r as p,F as q,V as s,W as t};