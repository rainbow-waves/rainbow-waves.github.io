(function(t){function e(e){for(var n,i,c=e[0],l=e[1],s=e[2],f=0,v=[];f<c.length;f++)i=c[f],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&v.push(r[i][0]),r[i]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);u&&u(e);while(v.length)v.shift()();return o.push.apply(o,s||[]),a()}function a(){for(var t,e=0;e<o.length;e++){for(var a=o[e],n=!0,c=1;c<a.length;c++){var l=a[c];0!==r[l]&&(n=!1)}n&&(o.splice(e--,1),t=i(i.s=a[0]))}return t}var n={},r={app:0},o=[];function i(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=t,i.c=n,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(a,n,function(e){return t[e]}.bind(null,n));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=e,c=c.slice();for(var s=0;s<c.length;s++)e(c[s]);var u=l;o.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";var n=a("85ec"),r=a.n(n);r.a},1564:function(t,e,a){"use strict";var n=a("b475"),r=a.n(n);r.a},"2db0":function(t,e,a){"use strict";var n=a("f000"),r=a.n(n);r.a},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("div",{staticClass:"select-wrap"},[a("div",{staticClass:"title"},[t._v("Canvas")]),a("div",{staticClass:"rainbow-wrap"},[t._l([{label:"width",value:"width"},{label:"height",value:"height"},{label:"background-color",value:"backgroundColor"}],(function(e){return a("div",{key:e.label,staticClass:"item"},[a("div",{staticClass:"label"},[t._v(t._s(e.label))]),a("el-input",{model:{value:t.config[e.value],callback:function(a){t.$set(t.config,e.value,a)},expression:"config[i.value]"}})],1)})),a("el-button",{attrs:{type:"primary",round:""},on:{click:t.a}},[t._v("Add waves")])],2),a("div",{staticClass:"title"},[t._v("Waves")]),a("div",{staticClass:"waves-wrap"},t._l(t.config.waves,(function(e,n){return a("div",{key:n,staticClass:"wave"},[t._l(e,(function(e,r,o){return a("div",{key:o,staticClass:"item"},[a("div",{staticClass:"label"},[t._v(t._s(t.obj[r]))]),a("el-input",{class:"color"===r&&"color",attrs:{value:e},on:{input:function(e){return t.c(n,r,e)}}})],1)})),a("el-button",{attrs:{type:"danger",icon:"el-icon-delete",circle:""},on:{click:function(e){return t.d(n)}}})],2)})),0)]),a("div",{staticClass:"show-wrap"},[a("rainbow-waves",{attrs:{config:t.config}})],1)])},o=[],i=(a("99af"),a("a434"),a("b680"),a("5dc9")),c={name:"App",components:{"rainbow-waves":i["a"]},data:function(){return{obj:{color:"wave-color",jitter:"jitter",restore:"restore",waveGap:"wave-gap",waterGap:"water-gap",waveUps:"wave-ups",waveHeight:"wave-height"},config:{el:"rainbow-waves",width:1920,height:1e3,backgroundColor:"#fff",waves:[{color:"rgba(255,0,0,0.4)",jitter:.04,restore:.03,waveGap:80,waterGap:20,waveUps:6,waveHeight:.45}]}}},methods:{r:function(){var t=Math.floor(256*Math.random()),e=Math.floor(256*Math.random()),a=Math.floor(256*Math.random()),n=Math.random().toFixed(1);return"rgb(".concat(t,",").concat(e,",").concat(a,",").concat(n,")")},d:function(t){this.config.waves.splice(t,1)},a:function(){var t=this.r(),e=(Math.random()/10).toFixed(2),a=(Math.random()/10).toFixed(2),n=Math.ceil(100*Math.random()),r=Math.ceil(100*Math.random()),o=Math.ceil(10*Math.random()),i=.45;this.config.waves.push({color:t,jitter:e,restore:a,waveGap:n,waterGap:r,waveUps:o,waveHeight:i})},c:function(t,e,a){this.config["waves"][t][e]=a}}},l=c,s=(a("034f"),a("2db0"),a("1564"),a("2877")),u=Object(s["a"])(l,r,o,!1,null,"14fb4b81",null),f=u.exports,v=a("5c96");a("0fae");n["default"].use(v["Button"]),n["default"].use(v["Input"]),n["default"].config.productionTip=!1,new n["default"]({render:function(t){return t(f)}}).$mount("#app")},"85ec":function(t,e,a){},b475:function(t,e,a){},f000:function(t,e,a){}});
//# sourceMappingURL=app.105ea129.js.map