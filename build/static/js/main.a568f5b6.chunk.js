(this["webpackJsonpcovid-19"]=this["webpackJsonpcovid-19"]||[]).push([[0],{118:function(e,t,c){},120:function(e,t,c){},121:function(e,t,c){},126:function(e,t,c){},127:function(e,t,c){},235:function(e,t,c){"use strict";c.r(t);var n=c(0),a=c.n(n),s=c(7),r=c.n(s),o=(c(118),c(27)),i=c.n(o),l=c(45),u=c(12),d=c(273),j=c(274),f=c(275),h=c(264),b=c(268),p=c(272),x=(c(120),c(121),c(25)),O=c(269),v=c(15),m=c.n(v),g=c(3);var y=function(e){var t=e.title,c=e.cases,n=e.isRed,a=e.active,s=e.total,r=Object(x.a)(e,["title","cases","isRed","active","total"]);return Object(g.jsx)(h.a,{onClick:r.onClick,className:"infoBox ".concat(a?"infoBox--selected":""," ").concat(n?"infoBox--red":""),last:"Deaths"===t?"yes":"no",rec:"Recovered"===t?"yes":"no",children:Object(g.jsxs)(b.a,{children:[Object(g.jsxs)(O.a,{className:"infoBox__title",color:"textSecondary",children:[" ",t," "]}),Object(g.jsxs)("h2",{className:"infoBox__cases ".concat(n?"":"infoBox__cases--green"),children:[" ",c," "]}),Object(g.jsxs)(O.a,{className:"infoBox__total",color:"textSecondary",children:[" ",m()(s).format("0,0")," Total"]})]})})},C=(c(126),c(271)),N=c(277),_=c(10),k=c(276),w=c(270),S=function(e){var t=Object(_.a)(e);return t.sort((function(e,t){return e.cases>t.cases?-1:1})),t},R=function(e){return e?"+".concat(m()(e).format("0,0a")):"+0"},I={cases:{multiplier:200},recovered:{multiplier:400},deaths:{multiplier:1200}},T=function(e,t,c){return e.map((function(e){return Object(g.jsx)(k.a,{center:[e.countryInfo.lat,e.countryInfo.long],fillOpacity:.4,pathOptions:{color:c,fillColor:c},radius:Math.sqrt(e[t])*I[t].multiplier,children:Object(g.jsx)(w.a,{children:Object(g.jsxs)("div",{className:"info-container",children:[Object(g.jsx)("div",{className:"info-flag",style:{backgroundImage:"url(".concat(e.countryInfo.flag,")")}}),Object(g.jsx)("div",{className:"info-name",children:e.country}),Object(g.jsxs)("div",{className:"info-confirmed",children:["Cases: ",Object(g.jsx)("strong",{children:m()(e.cases).format("0,0")})]}),Object(g.jsxs)("div",{className:"info-recovered",children:["Recovered: ",Object(g.jsx)("strong",{children:m()(e.recovered).format("0,0")})]}),Object(g.jsxs)("div",{className:"info-deaths",children:["Deaths:",Object(g.jsxs)("strong",{children:[" ",m()(e.deaths).format("0,0")]})]})]})})})}))};var B=function(e){var t=e.countries,c=e.casesType,n=e.color,a=e.center,s=e.zoom;return Object(g.jsx)("div",{className:"map",children:Object(g.jsxs)(C.a,{center:a,zoom:s,children:[Object(g.jsx)(N.a,{url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",attribution:'\xa9 <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'}),T(t,c,n)]})})};c(127);var D=function(e){var t=e.countries;return Object(g.jsx)("div",{className:"table",children:t.map((function(e,t){var c=e.country,n=e.cases,a=e.countryInfo;return Object(g.jsxs)("tr",{children:[Object(g.jsx)("td",{children:Object(g.jsx)("img",{src:a.flag,className:"table__flag"})}),Object(g.jsx)("td",{children:c}),Object(g.jsx)("td",{children:Object(g.jsx)("strong",{children:m()(n).format("0,0")})})]},t)}))})},E=c(107),W={legent:{display:!1},elements:{point:{radius:0}},maintainAspectRatio:!1,tooltips:{mode:"index",intersect:!1,callbacks:{label:function(e,t){return m()(e.value).format("+0,0")}}},scales:{xAxes:[{type:"time",time:{format:"MM/DD/YY",tooltipFormat:"ll"}}],yAxes:[{gridlines:{display:!1},ticks:{callback:function(e,t,c){return m()(e).format("0a")}}}]}};var F=function(e){var t=e.casesType,c=void 0===t?"cases":t,a=e.color,s=Object(n.useState)({}),r=Object(u.a)(s,2),o=r[0],d=r[1],j=function(e){var t,n=[];for(var a in e[c]){if(t){var s={x:a,y:e[c][a]-t};n.push(s)}t=e[c][a]}return n};return Object(n.useEffect)((function(){(function(){var e=Object(l.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://disease.sh/v3/covid-19/historical/all?lastdays=120").then((function(e){return e.json()})).then((function(e){var t=j(e);d(t)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[c]),Object(g.jsx)("div",{className:"graph",children:(null===o||void 0===o?void 0:o.length)>0&&Object(g.jsx)(E.a,{data:{datasets:[{data:o,backgroundColor:a,borderColor:a,label:"Covid-19 ".concat(c)}]},options:W,height:250})})},M=(c(234),Object(p.a)((function(e){return{formControl:{margin:e.spacing(1),minWidth:120,backgroundColor:"#fff",boxShadow:"0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)",borderRadius:"4px"},selectEmpty:{marginTop:e.spacing(2)},flag:{width:28,height:22,marginRight:10}}}))),z={cases:{hex:"#cc1034"},recovered:{hex:"#7dd71d"},deaths:{hex:"#fb4443"}};var A=function(){var e=M(),t=Object(n.useState)("worldwide"),c=Object(u.a)(t,2),a=c[0],s=c[1],r=Object(n.useState)([]),o=Object(u.a)(r,2),p=o[0],x=o[1],O=Object(n.useState)({}),v=Object(u.a)(O,2),m=v[0],C=v[1],N=Object(n.useState)([]),_=Object(u.a)(N,2),k=_[0],w=_[1],I=Object(n.useState)({lat:34.80746,lng:-40.4796}),T=Object(u.a)(I,2),E=T[0],W=T[1],A=Object(n.useState)(3),L=Object(u.a)(A,2),J=L[0],P=L[1],Y=Object(n.useState)([]),q=Object(u.a)(Y,2),K=q[0],V=q[1],G=Object(n.useState)("cases"),H=Object(u.a)(G,2),Q=H[0],U=H[1],X=Object(n.useState)("#cc1034"),Z=Object(u.a)(X,2),$=Z[0],ee=Z[1];Object(n.useEffect)((function(){ee(z[Q].hex)}),[Q]),Object(n.useEffect)((function(){fetch("https://disease.sh/v3/covid-19/all").then((function(e){return e.json()})).then((function(e){return C(e)}))}),[]),Object(n.useEffect)((function(){(function(){var e=Object(l.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://disease.sh/v3/covid-19/countries").then((function(e){return e.json()})).then((function(e){var t=e.map((function(e){return{name:e.country,value:e.countryInfo}})),c=S(e);w(c),V(e),x(t)})).catch((function(e){return console.log(e)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var te=function(){var e=Object(l.a)(i.a.mark((function e(t){var c,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=t.target.value,n="worldwide"===c?"https://disease.sh/v3/covid-19/all":"https://disease.sh/v3/covid-19/countries/".concat(c),e.next=4,fetch(n).then((function(e){return e.json()})).then((function(e){s(c),C(e),W([e.countryInfo.lat,e.countryInfo.long]),P(4)})).catch((function(e){return console.log(e)}));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(g.jsxs)("div",{className:"app",children:[Object(g.jsxs)("div",{className:"app__left",children:[Object(g.jsxs)("div",{className:"app__header",children:[Object(g.jsx)("h1",{children:"COVID-19 TRACKER"}),Object(g.jsx)(d.a,{className:e.formControl,children:Object(g.jsxs)(j.a,{variant:"outlined",labelId:"demo-simple-select-label",id:"demo-simple-select",value:a,onChange:te,children:[Object(g.jsx)(f.a,{value:"worldwide",style:{paddingLeft:55,fontWeight:600},children:"WorldWide"}),p.map((function(t,c){return Object(g.jsxs)(f.a,{value:t.value.iso2,children:[Object(g.jsx)("img",{src:t.value.flag,className:e.flag}),t.name]},c)}))]})})]}),Object(g.jsxs)("div",{className:"app__stats",children:[Object(g.jsx)(y,{isRed:!0,active:"cases"===Q,onClick:function(e){return U("cases")},title:"Coronavirus Cases",cases:R(m.todayCases),total:m.cases}),Object(g.jsx)(y,{active:"recovered"===Q,onClick:function(e){return U("recovered")},title:"Recovered",cases:R(m.todayRecovered),total:m.recovered}),Object(g.jsx)(y,{isRed:!0,active:"deaths"===Q,onClick:function(e){return U("deaths")},className:"lastBox",title:"Deaths",cases:R(m.todayDeaths),total:m.deaths})]}),Object(g.jsx)(B,{countries:K,center:E,zoom:J,casesType:Q,color:$})]}),Object(g.jsx)(h.a,{className:"app__right",children:Object(g.jsxs)(b.a,{children:[Object(g.jsx)("h3",{children:"Live cases by country"}),Object(g.jsx)(D,{countries:k}),Object(g.jsxs)("h3",{style:{paddingTop:"10px",borderTop:"1px solid black"},children:["WorldWide ",Q]}),Object(g.jsx)(F,{casesType:Q,color:$})]})})]})},L=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,279)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,s=t.getLCP,r=t.getTTFB;c(e),n(e),a(e),s(e),r(e)}))};r.a.render(Object(g.jsx)(a.a.StrictMode,{children:Object(g.jsx)(A,{})}),document.getElementById("root")),L()}},[[235,1,2]]]);
//# sourceMappingURL=main.a568f5b6.chunk.js.map