(this.webpackJsonpfeatherkraken=this.webpackJsonpfeatherkraken||[]).push([[0],{180:function(e,t,a){e.exports=a(316)},280:function(e,t){},312:function(e,t,a){},316:function(e,t,a){"use strict";a.r(t);var n,r,i=a(1),l=a(25),o=a(68),s=a(166),c=a(178),u=a(167),d=a(179),m=a(87),h=a.n(m),p=a(11),v=a.n(p),f=a(326),g=a(320),E=a(325),y=a(321),b=a(75),k=a(176),F=a(173),D=a(322),M=a(323),Y=a(177),C=a(71),q=a(324),N=a(41),T=a(60),x=(a(273),a(311),a(61)),R=(a(312),a(319)),S=a(89);function w(e){if(e.flight){var t=e.flight;return i.createElement("div",null,t.route?t.route.map((function(e,t){var a,n,r,l;return i.createElement(R.a,{key:t},i.createElement(g.a,{className:"mb-1"},i.createElement("div",null,i.createElement("big",null,i.createElement(S.b,null)," "),e.departure?v()(e.departure).format("ddd D MMM"):"",0!==v()(e.departure).diff(e.arrival,"days")?" - ".concat(v()(e.arrival).format("ddd D MMM")):"")),i.createElement(g.a,{className:"mb-3"},i.createElement(F.a,{sm:1},i.createElement(S.a,null)),i.createElement(F.a,{className:"border rounded"},i.createElement("div",{className:"p-2"},i.createElement("div",null,i.createElement("strong",{title:v()(e.departure).format("ddd D MMM")},e.departure?v()(e.departure).format("HH:mm"):"")," ",null===(a=e.source)||void 0===a?void 0:a.displayName," ",null===(n=e.source)||void 0===n?void 0:n.name),i.createElement("div",null,i.createElement("strong",{title:v()(e.arrival).format("ddd D MMM")},e.arrival?v()(e.arrival).format("HH:mm"):"")," ",null===(r=e.target)||void 0===r?void 0:r.displayName," ",null===(l=e.target)||void 0===l?void 0:l.name))),i.createElement(F.a,{sm:3},i.createElement("img",{className:"border rounded",alt:"Airline ".concat(e.airline),src:"https://images.kiwi.com/airlines/64/".concat(e.airline,".png")}))))})):"")}return i.createElement("div",null)}function A(e){return e.trips?i.createElement("div",null,e.trips.map((function(e,t){var a;return i.createElement(R.a,{className:"mb-3 border-bottom border-5",key:t},i.createElement(g.a,null,i.createElement(F.a,null,i.createElement("div",{className:"mb-2"},i.createElement("b",null,"DEPARTURE")," Duration: ",null===(a=e.outwardFlight)||void 0===a?void 0:a.duration),i.createElement(w,{flight:e.outwardFlight})),e.returnFlight?i.createElement(F.a,null,i.createElement("div",{className:"mb-2"},i.createElement("b",null,"RETURN")," Duration: ",e.returnFlight.duration),i.createElement(w,{flight:e.returnFlight})):"",i.createElement(F.a,{sm:1},i.createElement(g.a,null,i.createElement("h2",null,e.price,"\xa0\u20ac")),i.createElement(g.a,{className:"mt-3"},i.createElement("a",{href:e.link,target:"_blank",rel:"noopener noreferrer"},i.createElement(C.a,{variant:"success"},"Book"))))))}))):i.createElement("div",null)}!function(e){e.Economy="Economy",e.PremiumEconomy="Premium Economy",e.Business="Business",e.FirstClass="First class"}(n||(n={})),function(e){e.RoundTrip="Round trip",e.OneWay="One-way"}(r||(r={}));var I=function e(){Object(o.a)(this,e),this.limit=10,this.tripType=r.RoundTrip,this.classType=n.Economy,this.mixClasses=!0,this.passengers=1,this.source=void 0,this.radius=void 0,this.target=void 0,this.departure=void 0,this.return=void 0,this.stops=void 0},O="http://localhost:8080/featherkraken/rest",P=[];for(var B in r)P.push(r[B]);var j=[];for(var G in n)j.push(n[G]);var H=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={request:new I,searching:!1,allowNew:!1,isLoading:!1,multiple:!1,options:[],departureFlexible:!1,departureFocused:!1,departureSpanFocused:null,returnFlexible:!1,returnFocused:!1,returnSpanFocused:null,airlineFilter:{},airportFilter:{}},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"changeRequest",value:function(e,t){var a=this.state.request;a[e]=t,this.setState({request:a})}},{key:"performSearch",value:function(){var e=this;this.setState({searching:!0}),h.a.post("".concat(O,"/flights"),this.state.request).then((function(t){e.setState({result:t.data,searching:!1,filteredTrips:t.data.trips}),e.initTripFilters()})).catch((function(t){console.error(t),e.setState({searching:!1})}))}},{key:"getAirports",value:function(e){var t=this;h.a.get("".concat(O,"/airports?query=").concat(e)).then((function(e){t.setState({options:e.data})})).catch((function(e){console.error(e)}))}},{key:"getPassengerTitle",value:function(){if(!this.state.request.passengers)return"Passengers";var e=+this.state.request.passengers;return"".concat(e," Passenger").concat(1===e?"":"s")}},{key:"dateToMoment",value:function(e){return e?v()(e,"DD.MM.YYYY"):v()(new Date)}},{key:"initReturnDate",value:function(){var e,t,a=this.dateToMoment(null===(e=this.state.request.departure)||void 0===e?void 0:e.from),n=this.dateToMoment(null===(t=this.state.request.return)||void 0===t?void 0:t.from);a.isAfter(n)&&this.changeRequest("return",this.state.request.departure)}},{key:"initTripFilters",value:function(){var e,t,a=null===(e=this.state.result)||void 0===e?void 0:e.trips;if(a){var n=[],r={};a.forEach((function(e){e.airlines&&e.airlines.forEach((function(e){n.includes(e)||(n.push(e),r[e]=!0)}))})),this.setState({foundAirlines:n,airlineFilter:r})}var i=null===(t=this.state.result)||void 0===t?void 0:t.sourceAirports;if(i){var l={};i.forEach((function(e){e.name&&(l[e.name]=!0)})),this.setState({airportFilter:l})}}},{key:"filterTrips",value:function(){var e,t=null===(e=this.state.result)||void 0===e?void 0:e.trips,a=this.state.airlineFilter,n=this.state.airportFilter;if(t&&a){var r=[];t.forEach((function(e){var t,i,l,o=!0;null===(t=e.airlines)||void 0===t||t.forEach((function(e){a[e]||(o=!1)}));var s=null===(i=e.outwardFlight)||void 0===i?void 0:i.route;if(s){var c,u=null===(c=s[0].source)||void 0===c?void 0:c.name;u&&(o=o&&n[u])}var d=null===(l=e.returnFlight)||void 0===l?void 0:l.route;if(d){var m,h=null===(m=d[d.length-1].target)||void 0===m?void 0:m.name;h&&(o=o&&n[h])}o&&r.push(e)})),this.setState({filteredTrips:r})}}},{key:"render",value:function(){var e,t,a,n,l,o,s,c,u,d,m,h,p,v,R=this;return i.createElement("div",null,i.createElement(f.a,{className:"shadow"},i.createElement(f.a.Brand,{href:"#home"},i.createElement(g.a,null,i.createElement("img",{alt:"Featherkraken",src:"./logo512.png",width:"50",height:"50",className:"d-inline-block align-top ml-3 mr-3"}),i.createElement("h2",null,"Featherkraken")))),i.createElement(E.a,{className:"m-5"},i.createElement(g.a,{className:"ml-3"},i.createElement(y.a,{variant:"outline",id:"tripType",title:this.state.request.tripType,className:"mr-1",onSelect:function(e){R.changeRequest("tripType",e)}},P.map((function(e){return i.createElement(b.a.Item,{key:P.indexOf(e),eventKey:e},e)}))),i.createElement(y.a,{variant:"outline",id:"passengers",title:this.getPassengerTitle(),className:"mr-1"},i.createElement(E.a.Control,{type:"number",min:"1",defaultValue:"1",onChange:function(e){R.changeRequest("passengers",e.target.value)}})),i.createElement(y.a,{variant:"outline",id:"classType",title:this.state.request.classType,onSelect:function(e){R.changeRequest("classType",e)}},j.map((function(e){return i.createElement(b.a.Item,{key:j.indexOf(e),eventKey:e},e)})),i.createElement(b.a.Divider,null),i.createElement(E.a.Check,{type:"checkbox",name:"mixClasses",label:"Mix classes",className:"ml-1",defaultChecked:!0,onChange:function(e){return R.changeRequest("mixClasses",e.target.checked)}})),i.createElement(y.a,{variant:"outline",id:"stops",title:"Filter stops",className:"mr-1"},i.createElement(k.a,{className:"ml-3",vertical:!0},i.createElement(E.a.Check,{type:"radio",name:"stops",label:"Any",defaultChecked:!0,onChange:function(){R.changeRequest("stops",null)}}),i.createElement(E.a.Check,{type:"radio",name:"stops",label:"Non-stop",onChange:function(){R.changeRequest("stops",0)}}),i.createElement(E.a.Check,{type:"radio",name:"stops",label:"Up to 1 stop",onChange:function(){R.changeRequest("stops",1)}}),i.createElement(E.a.Check,{type:"radio",name:"stops",label:"Up to 2 stops",onChange:function(){R.changeRequest("stops",2)}}))),i.createElement(y.a,{variant:"outline",id:"stops",title:"".concat(this.state.request.limit," Results"),className:"mr-1"},i.createElement(E.a.Control,{type:"number",min:"0",max:"1000",step:25,defaultValue:this.state.request.limit,onChange:function(e){R.changeRequest("limit",e.target.value)}}))),i.createElement(g.a,{className:"mt-3 ml-3 mr-3"},i.createElement(E.a.Group,{as:F.a,controlId:"source"},i.createElement(N.a,Object.assign({},this.state,{id:"source",labelKey:function(e){return"".concat(e.displayName," ").concat(e.name)},placeholder:"Source",minLength:2,onSearch:function(e){return R.getAirports(e)},onChange:function(e){R.changeRequest("source",e[0])},renderMenu:function(e,t){return i.createElement(N.b,t,e.map((function(e,t){return i.createElement(N.c,{option:e,position:t,key:t},e.displayName," ",e.name)})))}}))),i.createElement(E.a.Group,{as:F.a,controlId:"distance",lg:"2"},i.createElement(D.a,null,i.createElement(E.a.Control,{type:"number",min:"0",step:100,defaultValue:this.state.request.radius,onChange:function(e){R.changeRequest("radius",e.target.value)}}),i.createElement(D.a.Append,null,i.createElement(D.a.Text,{id:"km-addon"},"km")))),i.createElement(E.a.Group,{as:F.a,controlId:"target"},i.createElement(N.a,Object.assign({},this.state,{id:"target",labelKey:function(e){return"".concat(e.displayName," ").concat(e.name)},placeholder:"Target location",minLength:2,onSearch:function(e){return R.getAirports(e)},onChange:function(e){R.changeRequest("target",e[0])},renderMenu:function(e,t){return i.createElement(N.b,t,e.map((function(e,t){return i.createElement(N.c,{option:e,position:t,key:t},e.displayName," ",e.name)})))}}))),i.createElement(E.a.Group,{as:F.a,controlId:"departure",className:"mr-3 border rounded",lg:"2"},i.createElement(M.a,{type:"checkbox",onChange:function(e){R.setState({departureFlexible:e.indexOf("departureFlexible")>-1})}},i.createElement(Y.a,{variant:"light",type:"checkbox",value:"departureFlexible"},this.state.departureFlexible?i.createElement(x.a,{title:"Exact date"}):i.createElement(x.b,{title:"Flexible date"}))),this.state.departureFlexible?i.createElement(T.DateRangePicker,{startDate:this.dateToMoment(null===(e=this.state.request)||void 0===e?void 0:null===(t=e.departure)||void 0===t?void 0:t.from),startDateId:"departureFrom",endDate:this.dateToMoment(null===(a=this.state.request)||void 0===a?void 0:null===(n=a.departure)||void 0===n?void 0:n.to),endDateId:"departureTo",onDatesChange:function(e){var t=e.startDate,a=e.endDate,n={from:null===t||void 0===t?void 0:t.format("DD.MM.YYYY"),to:null===a||void 0===a?void 0:a.format("DD.MM.YYYY")};R.changeRequest("departure",n)},focusedInput:this.state.departureSpanFocused,onFocusChange:function(e){return R.setState({departureSpanFocused:e})},displayFormat:"DD.MM.YYYY",noBorder:!0}):i.createElement(T.SingleDatePicker,{id:"departure",date:this.dateToMoment(null===(l=this.state.request)||void 0===l?void 0:null===(o=l.departure)||void 0===o?void 0:o.from),focused:this.state.departureFocused,onFocusChange:function(e){return R.setState({departureFocused:e.focused})},onDateChange:function(e){var t={from:null===e||void 0===e?void 0:e.format("DD.MM.YYYY")};R.changeRequest("departure",t)},displayFormat:"DD.MM.YYYY",noBorder:!0})),this.state.request.tripType===r.RoundTrip?i.createElement(E.a.Group,{as:F.a,controlId:"return",lg:"2",className:"mr-3 border rounded"},i.createElement(M.a,{type:"checkbox",onChange:function(e){R.setState({returnFlexible:e.indexOf("returnFlexible")>-1})}},i.createElement(Y.a,{variant:"light",type:"checkbox",value:"returnFlexible"},this.state.returnFlexible?i.createElement(x.a,{title:"Exact date"}):i.createElement(x.b,{title:"Flexible date"}))),this.state.returnFlexible?i.createElement(T.DateRangePicker,{startDate:this.dateToMoment(null===(s=this.state.request)||void 0===s?void 0:null===(c=s.return)||void 0===c?void 0:c.from),startDateId:"returnFrom",endDate:this.dateToMoment(null===(u=this.state.request)||void 0===u?void 0:null===(d=u.return)||void 0===d?void 0:d.to),endDateId:"returnTo",onDatesChange:function(e){var t=e.startDate,a=e.endDate,n={from:null===t||void 0===t?void 0:t.format("DD.MM.YYYY"),to:null===a||void 0===a?void 0:a.format("DD.MM.YYYY")};R.changeRequest("return",n)},focusedInput:this.state.returnSpanFocused,onFocusChange:function(e){e&&R.initReturnDate(),R.setState({returnSpanFocused:e})},displayFormat:"DD.MM.YYYY",noBorder:!0}):i.createElement(T.SingleDatePicker,{id:"return",date:this.dateToMoment(null===(m=this.state.request)||void 0===m?void 0:null===(h=m.return)||void 0===h?void 0:h.from),focused:this.state.returnFocused,onFocusChange:function(e){e.focused&&R.initReturnDate(),R.setState({returnFocused:e.focused})},onDateChange:function(e){var t={from:null===e||void 0===e?void 0:e.format("DD.MM.YYYY")};R.changeRequest("return",t)},displayFormat:"DD.MM.YYYY",noBorder:!0})):""),i.createElement(g.a,{className:"justify-content-md-center mt-3"},i.createElement(C.a,{variant:"primary",onClick:function(){return R.performSearch()}},"Search")),this.state.searching?i.createElement(q.a,{className:"m-3",animated:!0,now:100}):"",i.createElement(g.a,null,(null===(p=this.state.result)||void 0===p?void 0:p.sourceAirports)&&this.state.result.sourceAirports.length>1?i.createElement(y.a,{variant:"outline",id:"sourceAirports",title:"Filter airports",className:"ml-3"},null===(v=this.state.result.sourceAirports)||void 0===v?void 0:v.map((function(e,t){return i.createElement(E.a.Check,{className:"ml-3",id:"cb-".concat(e.name),key:t,type:"checkbox",name:e.name,label:"".concat(e.displayName," ").concat(e.name),defaultChecked:!0,onChange:function(e){var t=R.state.airportFilter;t[e.target.name]=e.target.checked,R.setState({airportFilter:t}),R.filterTrips()}})}))):"",this.state.foundAirlines&&this.state.foundAirlines.length>1?i.createElement(y.a,{variant:"outline",id:"airlineFilter",title:"Filter airlines",className:"ml-3"},this.state.foundAirlines.map((function(e,t){return i.createElement(g.a,{className:"ml-1",key:"row-".concat(e)},i.createElement(F.a,null,i.createElement(E.a.Check,{type:"checkbox",name:e,label:e,defaultChecked:!0,onChange:function(e){var t=R.state.airlineFilter;t[e.target.name]=e.target.checked,R.setState({airlineFilter:t}),R.filterTrips()}})),i.createElement(F.a,null,i.createElement("img",{alt:"Airline ".concat(e),src:"https://images.kiwi.com/airlines/64/".concat(e,".png"),height:"20px"})))}))):"")),i.createElement(A,{trips:this.state.filteredTrips}))}}]),t}(i.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.render(i.createElement(H,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[180,1,2]]]);
//# sourceMappingURL=main.565dded2.chunk.js.map