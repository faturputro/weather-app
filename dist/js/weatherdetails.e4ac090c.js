(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["weatherdetails"],{"529d":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"weather-details--card rounded-bl-xl rounded-br-xl pt-8 text-white"},[s("div",{staticClass:"w-1/3 mx-auto mb-8"},[s("w-switch",{attrs:{"on-label":"Celcius","off-label":"Fahrenheit"},on:{change:t.changeHandler},model:{value:t.isCelcius,callback:function(e){t.isCelcius=e},expression:"isCelcius"}})],1),t._m(0),s("h1",{staticClass:"text-6xl text-center mb-8"},[t._v(" "+t._s(t.details.main.temp)+"° ")]),s("p",{staticClass:"text-center text-xl"},[t._v(" "+t._s(t.details.coord.lat)+", "+t._s(t.details.coord.lon)+" ")]),s("h3",{staticClass:"text-5xl text-center my-8 font-semibold"},[t._v(" "+t._s(t.details.weather[0].main)+" ")]),s("p",{staticClass:"text-center text-xl"},[t._v(" "+t._s(t.currentDate)+" ")])]),s("section",{staticClass:"s-detail mx-6 mt-6"},[s("p",{staticClass:"text-lg mb-4"},[t._v("Details")]),s("div",{staticClass:"grid grid-cols-2 gap-2"},[s("div",{staticClass:"rounded-2xl px-4 flex items-center bg-gray-100 p-6"},[s("h1",{staticClass:"text-6xl flex items-center p-2 mr-2"},[s("eva-icon",{attrs:{name:"thermometer-outline",fill:"#3C6FD1"}})],1),s("div",[s("p",{staticClass:"text-3xl"},[t._v(t._s(t.details.main.temp)+"°")]),s("p",{staticClass:"text-lg opacity-75"},[t._v(" "+t._s(t.isCelcius?"Celcius":"Fahrenheit")+" ")])])]),s("div",{staticClass:"rounded-2xl px-4 flex items-center bg-gray-100 p-6"},[s("h1",{staticClass:"text-6xl flex items-center p-2 mr-2"},[s("eva-icon",{attrs:{name:"arrowhead-right-outline",fill:"#3C6FD1"}})],1),s("div",[s("p",{staticClass:"text-3xl"},[t._v(t._s(t.details.wind.speed)+" mp/h")]),s("p",{staticClass:"text-lg opacity-75"},[t._v(" Pressure ")])])]),s("div",{staticClass:"rounded-2xl px-4 flex items-center bg-gray-100 p-6"},[s("h1",{staticClass:"text-6xl flex items-center p-2 mr-2"},[s("eva-icon",{attrs:{name:"sun-outline",fill:"#3C6FD1"}})],1),s("div",[s("p",{staticClass:"text-3xl"},[t._v(t._s(t.details.main.feels_like))]),s("p",{staticClass:"text-lg opacity-75"},[t._v(" UV Index ")])])]),s("div",{staticClass:"rounded-2xl px-4 flex items-center bg-gray-100 p-6"},[s("h1",{staticClass:"text-6xl flex items-center p-2 mr-2"},[s("eva-icon",{attrs:{name:"droplet-outline",fill:"#3C6FD1"}})],1),s("div",[s("p",{staticClass:"text-3xl"},[t._v(t._s(t.details.main.humidity)+"%")]),s("p",{staticClass:"text-lg opacity-75"},[t._v(" Humidity ")])])])])]),t._m(1)])},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"w-1/3 mx-auto"},[a("img",{attrs:{src:s("9c9c"),alt:""}})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"s-detail mx-6 mt-6"},[s("p",{staticClass:"text-lg mb-4"},[t._v("Tips")]),s("div",{staticClass:"rounded-2xl px-4 flex items-center bg-gray-100 p-6"},[s("h1",{staticClass:"text-5xl flex items-center p-2 mr-2"},[t._v(" ✨ ")]),s("div",[s("p",{staticClass:"text-2xl"},[t._v("Its ok to hangout with your friend!")])])])])}],l=s("1da1"),c=s("5530"),n=(s("96cf"),s("2f62")),r=s("dde5"),o={data:function(){return{isCelcius:!1,details:{name:"",coord:{lon:0,lat:0},main:{temp:0},wind:{speed:0},weather:[]}}},computed:Object(c["a"])(Object(c["a"])({},Object(n["b"])("geolocation",["currentLocation"])),{},{currentDate:function(){return new Date}}),created:function(){this.fetchWeatherData()},methods:{changeHandler:function(t){this.isCelcius=t,this.fetchWeatherData()},fetchWeatherData:function(){var t=this;return Object(l["a"])(regeneratorRuntime.mark((function e(){var s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,s={lat:t.currentLocation.lat,lon:t.currentLocation.long,units:t.isCelcius?"metrics":"imperial"},e.next=4,r["a"].fetchWeather(s);case 4:t.details=e.sent,e.next=9;break;case 7:e.prev=7,e.t0=e["catch"](0);case 9:case"end":return e.stop()}}),e,null,[[0,7]])})))()}}},d=o,x=s("2877"),u=Object(x["a"])(d,a,i,!1,null,null,null);e["default"]=u.exports}}]);
//# sourceMappingURL=weatherdetails.e4ac090c.js.map