import{w as a}from"./entry.CtRq8kOV.js";import{i as c}from"./device.Dtp4J0Ng.js";const r="https://basemap.surflux.studio/geoserver",u=`${r}/gwc/service/tms/1.0.0/bluedot:base_building@EPSG%3A900913@pbf/{z}/{x}/{-y}.pbf`,d="https://bluedot-subway.s3.ap-northeast-2.amazonaws.com/base_subway_railway_900913_241127.json",_="https://bluedot-subway.s3.ap-northeast-2.amazonaws.com/base_subway_station_900913_241127.json",m="https://bluedot-subway.s3.ap-northeast-2.amazonaws.com/base_subway_entrance_900913_241127.json";var i=(s=>(s[s.MobileS=320]="MobileS",s[s.MobileM=375]="MobileM",s[s.MobileL=425]="MobileL",s[s.Tablet=768]="Tablet",s[s.Laptop=1024]="Laptop",s[s.LaptopL=1440]="LaptopL",s[s.FourK=2560]="FourK",s))(i||{});const f="https://api.bluedot.land",w="https://d1egcbbnpo4gtd.cloudfront.net",I={public:"공개",follower:"팔로워 공개",private:"비공개"},g={owner:"소유자",manager:"관리 권한",writer:"편집 권한",reader:"읽기 권한",none:"권한 없음"},h=!c,L={POST:"1",BOX:"0",PLACE:"0",EMBEDDING:"0"};function l(s){return{all:s=s||new Map,on:function(o,e){var t=s.get(o);t?t.push(e):s.set(o,[e])},off:function(o,e){var t=s.get(o);t&&(e?t.splice(t.indexOf(e)>>>0,1):s.set(o,[]))},emit:function(o,e){var t=s.get(o);t&&t.slice().map(function(n){n(e)}),(t=s.get("*"))&&t.slice().map(function(n){n(o,e)})}}}const M=l(),A=a(void 0),y=a(i.MobileM),O=a([]),v=a(void 0),B=a(!1),G=a([]),U=a([]),j=a(!1),x=a([]),k=a(!1),z=a(!0),D=a(!0),F=a(!1);export{f as A,w as C,r as G,h as I,u as P,i as S,x as a,L as b,G as c,F as d,M as e,j as f,O as g,v as h,z as i,g as j,I as k,k as l,D as m,B as n,y as o,A as p,d as q,_ as r,U as s,m as t};
