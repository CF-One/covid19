(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-edc01d48"],{"23e8":function(e,n,a){"use strict";a.r(n);var t=function(){var e=this,n=e.$createElement,a=e._self._c||n;return a("div",[a("div",{ref:"map"})])},o=[],c=(a("99af"),a("d81d"),a("f269")),i=a("11aa"),r=a("f4c8"),l=a("bc3a"),d=a.n(l),s={name:"EpidemicMap",data:function(){return{scene:null,el:null,layer:null,ProvinceData:[]}},created:function(){var e=this;d.a.get("http://127.0.0.1:1024/getCovid19Data").then((function(n){e.ProvinceData=n.data.data.provinceArray})),this.$nextTick((function(){e.el=e.$refs.map,e.scene=new c["Scene"]({id:e.el,map:new r["a"]({center:[116.2825,39.9],pitch:0,style:"light",zoom:4,minZoom:1,maxZoom:10})}),e.scene.on("loaded",(function(){e.layer=new i["a"](e.scene,{data:e.ProvinceData,joinBy:["NAME_CHN","childStatistic"],depth:1,fill:{color:"rgba(201,203,204,0.36)"},bubble:{enable:!0,size:{field:"totalConfirmed",values:[10,30]},color:{field:"totalConfirmed",values:function(e){return e<100?"#ffde5d":e<1e3?"#ff6e40":e<5e3?"#ff0003":e<1e4?"#cd0904":"#6A0400"}},style:{opacity:1}},popup:{enable:!0,Html:function(e){return"<span>".concat(e.NAME_CHN,":</span><br/>\n                            <span>确诊人数：").concat(e.totalConfirmed,"</span><br/>\n                            <span>死亡人数：").concat(e.totalDeath,"</span><br/>\n                            <span>治愈人数：").concat(e.totalCured,"</span>")}}})}))}))},methods:{}},p=s,f=a("2877"),u=Object(f["a"])(p,t,o,!1,null,"765871b9",null);n["default"]=u.exports},d81d:function(e,n,a){"use strict";var t=a("23e7"),o=a("b727").map,c=a("1dde"),i=a("ae40"),r=c("map"),l=i("map");t({target:"Array",proto:!0,forced:!r||!l},{map:function(e){return o(this,e,arguments.length>1?arguments[1]:void 0)}})}}]);
//# sourceMappingURL=chunk-edc01d48.c1396751.js.map