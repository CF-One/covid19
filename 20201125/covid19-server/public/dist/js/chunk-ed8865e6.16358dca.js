(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ed8865e6"],{"9b93":function(e,n,t){"use strict";t.r(n);var a=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[t("div",{ref:"map"})])},o=[],r=(t("d81d"),t("d3b7"),t("f269")),c=t("f4c8"),i={name:"Dimensional",data:function(){return{el:null,scene:null,layer:null,provinceData:[]}},created:function(){var e=this;this.$nextTick((function(){e.el=e.$refs.map,e.scene=new r["Scene"]({id:e.el,map:new c["a"]({style:"dark",pitch:58.5,center:[111.8759,30.6942],rotation:.519,zoom:3.6116})}),e.scene.on("loaded",(function(){fetch("http://127.0.0.1:1024/getGeoJson").then((function(e){return e.json()})).then((function(n){console.log(n.data),e.layer=new r["HeatmapLayer"]({}).source(n.data).size("totalCured",[1,5]).shape("heatmap3D").style({intensity:5,radius:20,opacity:1,rampColors:{colors:["#2E8AE6","#69D1AB","#DAF291","#FFD591","#FF7A45","#CF1D49"],positions:[0,.1,.2,.3,.4,.5]}}),e.scene.addLayer(e.layer)}))}))}))}},s=i,d=t("2877"),l=Object(d["a"])(s,a,o,!1,null,"aed2b7d2",null);n["default"]=l.exports},d81d:function(e,n,t){"use strict";var a=t("23e7"),o=t("b727").map,r=t("1dde"),c=t("ae40"),i=r("map"),s=c("map");a({target:"Array",proto:!0,forced:!i||!s},{map:function(e){return o(this,e,arguments.length>1?arguments[1]:void 0)}})}}]);
//# sourceMappingURL=chunk-ed8865e6.16358dca.js.map