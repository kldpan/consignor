(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-62af6214"],{"59bf":function(t,e,a){},"634a":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{ref:"nodes",staticClass:"delivery"},[a("div",{staticClass:"dispatch"},[a("div",{staticClass:"send-n1 clearfix"},[t._m(0),a("div",{staticClass:"send-n1-address fl"},[a("div",{staticClass:"send-n1-big-area",on:{click:function(e){return t.toLoadMap()}}},[t._v(t._s(t.origin.district))]),a("div",{staticClass:"send-n1-small-area"},[t._v(t._s(t.origin.street))])]),a("div",{staticClass:"sendMore-n1 fr"},[a("span",{directives:[{name:"show",rawName:"v-show",value:!t.bool,expression:"!bool"}],staticClass:"sendMore-n1-span"})])]),a("div",{staticClass:"receive-n1 clearfix"},[t._m(1),a("div",{staticClass:"receive-n1-address fl"},[a("div",{staticClass:"receive-n1-big-area",on:{click:function(e){return t.toUnloadMap()}}},[t._v(t._s(t.destination.district))]),a("div",{staticClass:"receive-n1-small-area"},[t._v(t._s(t.destination.street))])]),a("div",{staticClass:"receiveMore-n1 fr"},[a("span",{directives:[{name:"show",rawName:"v-show",value:!t.showNum,expression:"!showNum"}],staticClass:"receiveMore-n1-span"})])]),a("div",{staticClass:"n3 clearfix"},[a("div",{staticClass:"length fl"},[a("p",[t._v("运输距离 : "+t._s(this.$store.state.order.distance)+"公里")])]),a("div",{staticClass:"loadway fr",on:{click:function(e){return t.selectLoadway()}}},[a("span",{staticClass:"add"},[t._v("+")]),a("span",{staticClass:"loadwaymore"},[t._v(t._s(t.userSelectLoadWay||"一装一卸"))])])]),a("div",{directives:[{name:"show",rawName:"v-show",value:t.isLoadwayModalShow,expression:"isLoadwayModalShow"}],staticClass:"loadwayModal"},[a("div",{staticClass:"cancelArea",on:{click:function(e){return t.closeLoadwayModal()}}}),a("div",{staticClass:"selectArea"},[a("div",{staticClass:"title"},[a("span",{staticClass:"cancel",on:{click:function(e){return t.closeLoadwayModal()}}},[t._v("取消")]),a("span",{staticClass:"titlename"},[t._v("几装几卸")]),a("span",{staticClass:"submit",on:{click:function(e){return t.submitLoadway()}}},[t._v("完成")])]),a("ul",t._l(t.loadway,(function(e,s){return a("li",{key:s,class:t.num===s?"selectedWay":"otherLoadWay",on:{click:function(a){return t.changeLoadWay(e,s)}}},[a("span",[t._v(t._s(e))])])})),0)])])]),a("div",{staticClass:"publish",on:{click:function(e){return t.publish()}}},[a("button",[t._v("发布")])]),a("div",{staticClass:"permanent"},[a("div",{staticClass:"header clearfix"},[a("div",{staticClass:"option fl"},[t._v("常发货源")]),a("div",{staticClass:"option-info fl",on:{click:function(e){return t.goPermanent()}}},[a("div",{staticClass:"allPermanent"},[t._v("全部常发货源")]),a("span")])]),0!==t.$store.state.cargoSources.length?a("div",{staticClass:"permanentdata"},[a("ul",t._l(t.$store.state.cargoSources,(function(e,s){return a("li",{key:s},[a("p",[t._v(t._s(t._f("toCityName")(e.origin))+" "+t._s(t._f("toCityName")(e.destination)))])])})),0)]):a("div",{staticClass:"permanent-content"},[a("p",[t._v("您尚未保存任何常发货源")])])]),a("div",{directives:[{name:"show",rawName:"v-show",value:t.modelShow,expression:"modelShow"}],staticClass:"model"},[a("div",{staticClass:"model-control",on:{click:function(e){return e.stopPropagation(),t.closeModel()}}}),a("div",{staticClass:"car"},[a("div",{staticClass:"title"},[a("span",{staticClass:"cancel",on:{click:function(e){return e.stopPropagation(),t.closeModel()}}},[t._v("取消")]),a("span",{staticClass:"titlename"},[t._v("车型车长")]),a("span",{staticClass:"submit"},[t._v("完成")])]),a("div",{staticClass:"carlength"},[t._m(2),a("div",{ref:"userCarLength",staticClass:"floor-n2"},[a("ul",t._l(t.carLength,(function(e,s){return a("li",{key:s,class:!0===e.bool?"selected-carlength fl":"noselected-carlength fl",on:{click:function(a){return a.stopPropagation(),t.selectCarLength(e,s)}}},[t._v(t._s(e.carLength))])})),0)])]),a("div",{staticClass:"cartype"},[t._m(3),a("div",{ref:"userCarType",staticClass:"floor-n2"},[a("ul",t._l(t.carType,(function(e,s){return a("li",{key:s,class:t.carTypeNum===s?"selected-cartype fl":"noselected-cartype fl",on:{click:function(a){return a.stopPropagation(),t.selectCarType(e,s)}}},[t._v(t._s(e))])})),0)])])])])])},n=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"send-n1-left fl"},[a("div",{staticClass:"sendIcon-n1"},[t._v("装")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"receive-n1-left fl"},[a("div",{staticClass:"receiveIcon-n1"},[t._v("卸")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"floor-n1"},[a("span",{staticClass:"length"},[t._v("车长")]),a("span",{staticClass:"notice"},[t._v("(必填，最多填3项)")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"floor-n1"},[a("span",{staticClass:"type"},[t._v("车型")]),a("span",{staticClass:"notice"},[t._v("(必填，最多填3项)")])])}],i=(a("c975"),a("a434"),a("96cf"),a("1da1")),o=(a("76a0"),a("ed08")),r={name:"delivery",data:function(){return{popupVisible:!1,bool:!1,showNum:0,num:0,carLengthNum:0,carTypeNum:0,modelShow:!1,isSelected:[],loadway:["一装一卸","两装一卸","一装两卸","两装两卸"],loadwayBool:!1,userSelectLoadWay:"一装一卸",isLoadwayModalShow:!1,permanentData:"",carLength:[{carLength:8.7,bool:!1},{carLength:9.6,bool:!1},{carLength:11.7,bool:!1},{carLength:12.5,bool:!1},{carLength:13,bool:!1},{carLength:13.7,bool:!1},{carLength:15,bool:!1},{carLength:16,bool:!1},{carLength:17.5,bool:!1}],carType:["平板","高栏","厢式","集装箱","自卸","冷藏","保温","高低板","面包车","棉被车","爬梯车","飞翼车"],userCarLength:[],userCarType:[],current:{},testData:[],currentPosition:"",loadCityArea:"填写城市 / 区域",loadDetailAddress:"点击输入详细地址",sendBackInfo:{},toastInstanse:{}}},created:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$store.dispatch("fetchCargoSources");case 2:case"end":return e.stop()}}),e)})))()},computed:{origin:function(){var t=this.$store.state.order.consignor;return t&&t.adcode?Object(o["a"])(t):{district:"填写城市/区域",street:"请输入详细地址"}},destination:function(){var t=this.$store.state.order.consignee;return t&&t.adcode?Object(o["a"])(t):{district:"填写城市/区域",street:"请输入详细地址"}}},methods:{changeLoadWay:function(t,e){this.num=e,this.userSelectLoadWay=t,this.$store.commit("getLoadWay",this.userSelectLoadWay),0===e?this.loadwayBool=!1:1===e?this.loadwayBool=!0:2===e?this.loadwayBool=!1:3===e&&(this.loadwayBool=!this.loadwayBool)},setBool:function(){this.bool=!this.bool},setShowNum:function(t){this.showNum=t},toLoadMap:function(){this.toPath("/loadmap")},toUnloadMap:function(){this.$router.push("/unloadmap")},toPath:function(t){this.$router.push(t)},closeModel:function(){this.modelShow=!1},selectCarLength:function(t,e){if(t.bool=!t.bool,t.bool?this.userCarLength.push(t):this.userCarLength.splice(this.userCarLength.indexOf(t),1),this.userCarLength>3)for(var a=0;a<this.userCarLength.length;a++)e!==a&&(this.userCarLength[a].bool=!1);console.log(this.userCarLength)},selectCarType:function(t,e){this.carTypeNum=e,this.userCarType.push(t)},isModelShow:function(){this.modelShow=!this.modelShow},goPermanent:function(){this.toPath("/index/permanent"),this.$parent.$parent.num=3},selectLoadway:function(){this.isLoadwayModalShow=!0},submitLoadway:function(){this.isLoadwayModalShow=!1},closeLoadwayModal:function(){this.isLoadwayModalShow=!1,this.userSelectLoadWay="一装一卸",this.num=0,this.$store.commit("getLoadWay",this.userSelectLoadWay)},publish:function(){this.$router.push({path:"/order/details"})}}},c=r,l=(a("a8ae"),a("2877")),d=Object(l["a"])(c,s,n,!1,null,"1f353e26",null);e["default"]=d.exports},a434:function(t,e,a){"use strict";var s=a("23e7"),n=a("23cb"),i=a("a691"),o=a("50c4"),r=a("7b0b"),c=a("65f0"),l=a("8418"),d=a("1dde"),u=a("ae40"),h=d("splice"),f=u("splice",{ACCESSORS:!0,0:0,1:2}),v=Math.max,p=Math.min,C=9007199254740991,m="Maximum allowed length exceeded";s({target:"Array",proto:!0,forced:!h||!f},{splice:function(t,e){var a,s,d,u,h,f,w=r(this),g=o(w.length),y=n(t,g),_=arguments.length;if(0===_?a=s=0:1===_?(a=0,s=g-y):(a=_-2,s=p(v(i(e),0),g-y)),g+a-s>C)throw TypeError(m);for(d=c(w,s),u=0;u<s;u++)h=y+u,h in w&&l(d,u,w[h]);if(d.length=s,a<s){for(u=y;u<g-s;u++)h=u+s,f=u+a,h in w?w[f]=w[h]:delete w[f];for(u=g;u>g-s+a;u--)delete w[u-1]}else if(a>s)for(u=g-s;u>y;u--)h=u+s-1,f=u+a-1,h in w?w[f]=w[h]:delete w[f];for(u=0;u<a;u++)w[u+y]=arguments[u+2];return w.length=g-s+a,d}})},a8ae:function(t,e,a){"use strict";var s=a("59bf"),n=a.n(s);n.a},c975:function(t,e,a){"use strict";var s=a("23e7"),n=a("4d64").indexOf,i=a("a640"),o=a("ae40"),r=[].indexOf,c=!!r&&1/[1].indexOf(1,-0)<0,l=i("indexOf"),d=o("indexOf",{ACCESSORS:!0,1:0});s({target:"Array",proto:!0,forced:c||!l||!d},{indexOf:function(t){return c?r.apply(this,arguments)||0:n(this,t,arguments.length>1?arguments[1]:void 0)}})}}]);
//# sourceMappingURL=chunk-62af6214.df8c8938.js.map