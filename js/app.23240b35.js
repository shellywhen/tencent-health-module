(function(t){function n(n){for(var i,a,c=n[0],s=n[1],l=n[2],d=0,p=[];d<c.length;d++)a=c[d],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&p.push(o[a][0]),o[a]=0;for(i in s)Object.prototype.hasOwnProperty.call(s,i)&&(t[i]=s[i]);u&&u(n);while(p.length)p.shift()();return r.push.apply(r,l||[]),e()}function e(){for(var t,n=0;n<r.length;n++){for(var e=r[n],i=!0,c=1;c<e.length;c++){var s=e[c];0!==o[s]&&(i=!1)}i&&(r.splice(n--,1),t=a(a.s=e[0]))}return t}var i={},o={app:0},r=[];function a(n){if(i[n])return i[n].exports;var e=i[n]={i:n,l:!1,exports:{}};return t[n].call(e.exports,e,e.exports,a),e.l=!0,e.exports}a.m=t,a.c=i,a.d=function(t,n,e){a.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:e})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,n){if(1&n&&(t=a(t)),8&n)return t;if(4&n&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(a.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var i in t)a.d(e,i,function(n){return t[n]}.bind(null,i));return e},a.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(n,"a",n),n},a.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},a.p="";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=n,c=c.slice();for(var l=0;l<c.length;l++)n(c[l]);var u=s;r.push([0,"chunk-vendors"]),e()})({0:function(t,n,e){t.exports=e("56d7")},2395:function(t,n,e){},"39ac":function(t,n,e){},"56d7":function(t,n,e){"use strict";e.r(n);e("e260"),e("e6cf"),e("cca6"),e("a79d");var i=e("2b0e"),o=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{attrs:{id:"app"}},[e("Mobile",{attrs:{id:"mobile"}})],1)},r=[],a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"outer-container",attrs:{id:"mobile-div"}},[e("div",{staticClass:"majorView"},[t._m(0),t._m(1),e("div",{staticClass:"content"},t._l(t.entries,(function(n){return e("div",{key:n.id,style:{display:t.display(n.index)},attrs:{id:n.id}},[e("div",{staticClass:"container",style:{backgroundColor:n.background},attrs:{href:n.link},on:{click:function(e){return t.changeUrl(n.link)}}},[e("div",{staticClass:"icon-wrapper"},[e("div",{staticClass:"fig-wrapper"},[e("img",{attrs:{src:n.imgsrc,height:"100%"}})])]),e("div",{staticClass:"text-wrapper"},[e("div",[e("h3",{style:{color:n.title}},[t._v(t._s(n.name))])]),e("div",[e("p",{style:{color:n.title}},[t._v(t._s(n.content))])])]),e("div",{staticClass:"icon-entry"},[e("div",{staticClass:"launch-wrapper fig-wrapper"},[e("img",{attrs:{src:n.launch}})])])])])})),0)]),t._m(2)])},c=[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"banner"},[e("img",{attrs:{src:"icons/banner.png",width:"100%"}})])},function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"title"},[e("div",{staticClass:"major-title"},[e("h2",[t._v("疫情深度分析")])])])},function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"footer"},[e("div",{staticStyle:{"text-align":"center",padding:"6vw 0 3.87vw 0"}},[e("p",[t._v("北京大学可视化与可视分析实验室出品")]),e("p",[e("img",{attrs:{src:"icons/mail.svg"}}),t._v(" pkuvis@pku.edu.cn")]),e("p",{staticStyle:{"margin-top":"1.6vw"}},[e("span",[t._v("©2020 PKU@VIS")])])])])}],s=(e("c975"),e("d81d"),e("a9e3"),e("d3b7"),e("ac1f"),e("1276"),e("ddb0"),e("5698")),l=[{id:"chinamap",link:"./chinamap/index.html",ucloud:"https://vis.ucloud365.com/ncov/barometermap/",imgsrc:"icons/chinamap.svg",name:"疫情晴雨地图",desktop:!1,mobile:!0,description:"全国累计确诊人数",content:"查看新冠肺炎疫情变化，交叉对比疫情演化规律",launch:"icons/launch_chinamap.svg",background:"#fff1e7",title:"#770101",index:0},{id:"barometer",link:"./barometer/index.html",ucloud:"https://vis.ucloud365.com/ncov/barometer",imgsrc:"icons/barometer.svg",name:"疫情晴雨表",mobile:!0,desktop:!0,description:"全国确诊人数变化",content:"概览各地疫情发展趋势，像素编码每日新增病例变幅",background:"#ecf5fd",launch:"icons/launch_barometer.svg",title:"#32445e",index:1},{id:"mortalityline",link:"./mortalityline/index.html",ucloud:"https://vis.ucloud365.com/ncov/mortalityline/",imgsrc:"icons/mortalityline.png",name:"疫情轨迹线",mobile:!0,desktop:!0,description:"多种传染病对比",content:"对比新冠肺炎与历史重大传染病，揭示疫情发展动态",launch:"icons/launch_mortalityline.svg",background:"#fbeef4",title:"#323f58",index:2},{id:"chinasupport",link:"./chinasupport/index.html",ucloud:"https://vis.ucloud365.com/ncov/china_support",imgsrc:"icons/chinasupport.svg",name:"对口支援图",desktop:!0,mobile:!0,description:"兄弟省市支援关系",content:"全国兄弟省市自治区白衣天使支援湖北省救治患者",launch:"icons/launch_chinasupport.svg",background:"#e0f9f5",title:"#2c4159",index:3},{id:"lifeline",link:"./lifeline/index.html",imgsrc:"icons/lifeline.svg",name:"疫情生命线",mobile:!0,desktop:!0,description:"病死率与治愈率",content:"各地累计确诊、治愈、死亡病例数及全国新增病例数",launch:"icons/launch_lifeline.svg",background:"#fff1e7",title:"#92312f",index:4}],u=e("0b16"),d={name:"Mobile",data:function(){return{entries:[]}},created:function(){this.init()},computed:{display:function(){return function(t){return this.setDisplayByUrl(t)}}},mounted:function(){this.entries=l,s["b"](".img-container").on("touchstart",(function(){var t=s["a"](this);t.on("mouseenter"),setTimeout((function(){t.on("mouseout")}),200)})),s["b"](".img-container").on("touchend",(function(){s["a"](this).on("mouseout")})),s["b"](".img-container").on("tap",(function(){var t=s["a"](this).attr("href");setTimeout((function(){window.location.href=t}),500)}))},methods:{init:function(){var t=this,n=t.forPhone;n=/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)||n,t.forPhone=n,s["a"](t.$el).classed("forPhone",n);var e=navigator.userAgent.toLowerCase(),i="Roboto, SourceHanSansCN, “思源黑体”, Noto Sans SC";/\(i[^;]+;( U;)? CPU.+Mac OS X/gi.test(e)&&(i="PingFang SC"),s["a"]("body").style("font-family",i)},updateEntries:function(t){this.entries=t},setDisplayByUrl:function(t){var n=u["parse"](document.location.href,!0).query;if(!("drop"in n))return"block";var e=n.drop.split("_").map((function(t){return Number(t)}));return console.log(t,e,e.indexOf(t)),-1!=e.indexOf(t)?"none":"block"},changeUrl:function(t){document.location.href=t}}},p=d,f=(e("5952"),e("2877")),m=Object(f["a"])(p,a,c,!1,null,null,null),v=m.exports,h={name:"App",components:{Mobile:v}},b=h,g=(e("7c55"),Object(f["a"])(b,o,r,!1,null,null,null)),y=g.exports;i["a"].config.productionTip=!1,new i["a"]({render:function(t){return t(y)}}).$mount("#app")},5952:function(t,n,e){"use strict";var i=e("39ac"),o=e.n(i);o.a},"7c55":function(t,n,e){"use strict";var i=e("2395"),o=e.n(i);o.a}});
//# sourceMappingURL=app.23240b35.js.map