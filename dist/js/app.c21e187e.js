(function(e){function t(t){for(var n,c,l=t[0],s=t[1],i=t[2],d=0,b=[];d<l.length;d++)c=l[d],Object.prototype.hasOwnProperty.call(a,c)&&a[c]&&b.push(a[c][0]),a[c]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n]);u&&u(t);while(b.length)b.shift()();return o.push.apply(o,i||[]),r()}function r(){for(var e,t=0;t<o.length;t++){for(var r=o[t],n=!0,l=1;l<r.length;l++){var s=r[l];0!==a[s]&&(n=!1)}n&&(o.splice(t--,1),e=c(c.s=r[0]))}return e}var n={},a={app:0},o=[];function c(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,c),r.l=!0,r.exports}c.m=e,c.c=n,c.d=function(e,t,r){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(c.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)c.d(r,n,function(t){return e[t]}.bind(null,n));return r},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],s=l.push.bind(l);l.push=t,l=l.slice();for(var i=0;i<l.length;i++)t(l[i]);var u=s;o.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"3bd3":function(e,t,r){},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("7a23"),a={class:"mx-auto lg:w-2/3"},o={key:0,class:"mx-2 my-4 bg-white drop-shadow-md rounded-xl dark:bg-gray-800"},c={class:"container px-6 py-4 mx-auto md:flex md:justify-between md:items-center"},l={class:"flex items-center justify-between"},s=Object(n["g"])(" Network"),i=Object(n["f"])("button",{type:"button",class:"text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400","aria-label":"toggle menu"},[Object(n["f"])("svg",{viewBox:"0 0 24 24",class:"w-6 h-6 fill-current"},[Object(n["f"])("path",{"fill-rule":"evenodd",d:"M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"})])],-1),u=[i],d={class:"items-center md:flex"},b=Object(n["g"])("Payments"),f=Object(n["g"])("Add Payment"),m=Object(n["g"])("Register"),p=Object(n["g"])(" Logout "),g={class:"mx-1 mb-6 md:mx-4"};function x(e,t,r,i,x,j){var O=Object(n["w"])("ion-icon"),h=Object(n["w"])("router-link"),y=Object(n["w"])("router-view");return Object(n["r"])(),Object(n["e"])("div",a,[j.isLoggedIn?(Object(n["r"])(),Object(n["e"])("nav",o,[Object(n["f"])("div",c,[Object(n["f"])("div",l,[Object(n["f"])("div",null,[Object(n["h"])(h,{class:"inline-flex items-center text-xl font-bold text-gray-800 transition-colors duration-200 transform dark:text-white hover:text-gray-700 dark:hover:text-gray-300",to:"/"},{default:Object(n["D"])((function(){return[Object(n["h"])(O,{name:"wifi-sharp"}),s]})),_:1})]),Object(n["f"])("div",{class:"flex md:hidden",onClick:t[0]||(t[0]=function(e){return x.isOpen=!x.isOpen})},u)]),Object(n["f"])("div",d,[Object(n["f"])("div",{class:Object(n["n"])(["flex flex-col md:flex-row md:mx-6",[x.isOpen?"block":"hidden",e.hidden]])},[Object(n["h"])(h,{to:"/",class:"my-1 text-sm font-medium text-gray-700 transition-colors duration-200 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0"},{default:Object(n["D"])((function(){return[b]})),_:1}),Object(n["h"])(h,{class:"my-1 text-sm font-medium text-gray-700 transition-colors duration-200 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0",to:"/add"},{default:Object(n["D"])((function(){return[f]})),_:1}),Object(n["h"])(h,{class:"my-1 text-sm font-medium text-gray-700 transition-colors duration-200 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0",to:"/register"},{default:Object(n["D"])((function(){return[m]})),_:1})],2),Object(n["f"])("div",{class:Object(n["n"])(["flex lg:justify-center md:block",[x.isOpen?"block":"hidden",e.hidden]])},[Object(n["f"])("div",{class:"flex my-1 text-sm font-medium text-gray-700 cursor-pointer transition-colors duration-200 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0",onClick:t[1]||(t[1]=function(){return j.logout&&j.logout.apply(j,arguments)})},[p,Object(n["h"])(O,{name:"log-out"})])],2)])])])):Object(n["d"])("",!0),Object(n["f"])("div",g,[Object(n["h"])(y)])])}var j=r("1da1"),O=(r("96cf"),{name:"App",data:function(){return{isOpen:!0}},methods:{logout:function(){var e=this;return Object(j["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$store.dispatch("LogOut",null);case 2:e.$router.push("/login");case 3:case"end":return t.stop()}}),t)})))()}},computed:{isLoggedIn:function(){return this.$store.getters.isAuthenticated}}}),h=r("6b0d"),y=r.n(h);const v=y()(O,[["render",x]]);var w=v,_=r("9483");Object(_["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});r("d3b7");var k=r("6c02"),D={class:"p-4 bg-white border border-gray-300 drop-shadow-lg rounded-2xl"},E={class:"flex flex-col justify-center border-b-2 border-gray-300 md:justify-between md:flex-row"},R=Object(n["f"])("h1",{class:"pl-1 mb-4 text-xl font-semibold text-center text-gray-600 md:text-left"},"Listado de Pagos",-1),U={class:"inline-flex items-center justify-center mb-4 text-center text-gray-600 md:justify-start md:text-left"},B=Object(n["g"])(" Dollar Price: "),P={class:"max-w-full overflow-x-auto"},S={class:"w-full text-center"},A=Object(n["f"])("thead",null,[Object(n["f"])("tr",{class:"text-gray-600 border-t-0 border-b bg-gray-50 md:text-md"},[Object(n["f"])("th",{class:"text-md"},"Monto en Bs"),Object(n["f"])("th",{class:"text-md"},"Monto en USD"),Object(n["f"])("th",{class:"text-md"},"Dollar Price"),Object(n["f"])("th",{class:"text-md"},"Fecha"),Object(n["f"])("th")])],-1),C={class:"py-5 text-sm border-b border-gray-200 md:px-5"},L={class:"py-5 text-sm border-b border-gray-200 md:px-5"},F={class:"py-5 text-sm font-bold text-green-600 border-b border-gray-200 md:px-5"},M={class:"py-5 text-sm border-b border-gray-200 md:px-5"},V={class:"flex flex-col justify-center py-5 text-sm border-b border-gray-200 md:flex-row md:px-5 gap-1"},$=["onClick"],I={class:"bg-gray-100"},q=Object(n["f"])("td",null,null,-1),z=Object(n["f"])("td",null,null,-1),N=Object(n["f"])("td",null,null,-1);function Y(e,t,r,a,o,c){var l=Object(n["w"])("ion-icon"),s=Object(n["w"])("router-link"),i=Object(n["w"])("ModalDollarPrice");return Object(n["r"])(),Object(n["e"])(n["a"],null,[Object(n["f"])("div",D,[Object(n["f"])("div",E,[R,Object(n["E"])(Object(n["f"])("input",{type:"month",onChange:t[0]||(t[0]=function(e){return c.changeMonth()}),"onUpdate:modelValue":t[1]||(t[1]=function(e){return o.current_date=e}),class:"inline-flex items-center px-2 mx-auto mb-4 border md:mx-0 rounded-xl focus:border-gray-200"},null,544),[[n["B"],o.current_date]]),Object(n["f"])("div",U,[B,Object(n["f"])("span",{onClick:t[2]||(t[2]=function(e){return o.show_modal=!o.show_modal}),class:"px-2 py-1 bg-green-500 cursor-pointer hover:bg-green-600 rounded-xl text-gray-50"},Object(n["y"])(o.dollar_price)+" Bs",1)])]),Object(n["f"])("div",P,[Object(n["f"])("table",S,[A,Object(n["f"])("tbody",null,[(Object(n["r"])(!0),Object(n["e"])(n["a"],null,Object(n["v"])(o.payments,(function(t,r){return Object(n["r"])(),Object(n["e"])("tr",{key:r,class:Object(n["n"])(["text-gray-500",{"bg-gray-50":r%2!=0}])},[Object(n["f"])("td",C,Object(n["y"])(parseFloat(t.bs_amount).toLocaleString("eu",{minimumFractionDigits:2,maximumFractionDigits:2}))+" Bs ",1),Object(n["f"])("td",L,Object(n["y"])(parseFloat(t.usd_amount).toLocaleString("en-US",{minimumFractionDigits:2,maximumFractionDigits:2}))+" USD ",1),Object(n["f"])("td",F,Object(n["y"])(parseFloat(t.dollar_price).toLocaleString("eu",{minimumFractionDigits:2,maximumFractionDigits:2}))+" Bs ",1),Object(n["f"])("td",M,Object(n["y"])(c.formatDate(t.created)),1),Object(n["f"])("td",V,[Object(n["h"])(s,{to:{name:"Edit",params:{ref:t.ref}},class:"items-center p-1 font-bold text-gray-500 hover:text-green-500 md:inline-flex",onClick:function(r){e.edit(t.ref)}},{default:Object(n["D"])((function(){return[Object(n["h"])(l,{name:"create-outline",id:"icon-table"})]})),_:2},1032,["to","onClick"]),Object(n["f"])("button",{onClick:function(e){c.remove(t.ref)},class:"inline-flex items-center p-1 font-semibold text-gray-500 hover:text-red-400 hover:font-bold"},[Object(n["h"])(l,{name:"trash-outline"})],8,$)])],2)})),128))]),Object(n["f"])("tfoot",null,[Object(n["f"])("tr",I,[Object(n["f"])("td",null,Object(n["y"])(parseFloat(c.totalBs).toLocaleString("eu",{minimumFractionDigits:2,maximumFractionDigits:2}))+" Bs ",1),Object(n["f"])("td",null,Object(n["y"])(parseFloat(c.totalUsd).toLocaleString("en-US",{minimumFractionDigits:2,maximumFractionDigits:2}))+" USD",1),q,z,N])])])])]),Object(n["h"])(i,{dollar_price:o.dollar_price,onChange_dollar_price:c.updateDollar,onClose_modal:c.close_modal,show_modal:o.show_modal},null,8,["dollar_price","onChange_dollar_price","onClose_modal","show_modal"])],64)}var H=r("5530"),T=(r("ac1f"),r("1276"),r("159b"),r("4de4"),r("d9e2"),r("e71f")),J=r("5502"),K=r("260b"),Q=(Object(K["a"])({apiKey:"AIzaSyCWYgQ_n0XEpSCoFgDCmH5b0mUx6F0jNlE",authDomain:"money-net-7f3f7.firebaseapp.com",projectId:"money-net-7f3f7",storageBucket:"money-net-7f3f7.appspot.com",messagingSenderId:"445792487219"}),Object(T["g"])()),W=Q,X={class:"max-w-2xl mx-auto"},G={class:"relative w-full h-full max-w-md px-4 md:h-auto"},Z={class:"relative mt-5 bg-white rounded-lg shadow md:mt-0 dark:bg-gray-700"},ee={class:"flex justify-end p-2"},te=Object(n["f"])("svg",{class:"w-5 h-5",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},[Object(n["f"])("path",{"fill-rule":"evenodd",d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z","clip-rule":"evenodd"})],-1),re=[te],ne=Object(n["f"])("h3",{class:"text-xl font-medium text-gray-900 dark:text-white"},"Dollar Price Update",-1),ae=Object(n["f"])("label",{for:"price",class:"block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"},"Price",-1),oe=Object(n["f"])("div",{class:"flex justify-end"},[Object(n["f"])("button",{type:"submit",class:"text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"}," Update ")],-1);function ce(e,t,r,a,o,c){return Object(n["r"])(),Object(n["e"])("div",X,[Object(n["f"])("div",{id:"authentication-modal","aria-hidden":"true",class:Object(n["n"])(["fixed items-center justify-center w-full h-full overflow-x-hidden overflow-y-auto bg-gray-400 bg-opacity-75 top-4 md:inset-0",[r.show_modal?"flex":"hidden",e.hidden]])},[Object(n["f"])("div",G,[Object(n["f"])("div",Z,[Object(n["f"])("div",ee,[Object(n["f"])("button",{type:"button",onClick:t[0]||(t[0]=function(t){return e.$emit("close_modal")}),class:"text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white","data-modal-toggle":"authentication-modal"},re)]),Object(n["f"])("form",{class:"px-6 pb-4 space-y-6 lg:px-8 sm:pb-6 xl:pb-8",onSubmit:t[2]||(t[2]=function(){return c.submit&&c.submit.apply(c,arguments)}),action:"javascript:;"},[ne,Object(n["f"])("div",null,[ae,Object(n["E"])(Object(n["f"])("input",{type:"number",step:"any","onUpdate:modelValue":t[1]||(t[1]=function(e){return o.price=e}),class:"bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white",placeholder:"Dollar Price",required:""},null,512),[[n["B"],o.price]])]),oe],32)])])],2)])}var le={name:"ModalDollarPrice",props:["show_modal","dollar_price"],emits:["close_modal","change_dollar_price"],data:function(){return{price:this.dollar_price}},methods:{submit:function(){this.$emit("change_dollar_price",this.price)}},created:function(){var e=this;return Object(j["a"])(regeneratorRuntime.mark((function t(){var r,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(T["f"])(Object(T["b"])(W,"dollar_price"));case 2:if(r=t.sent,n={},r.forEach((function(t){e.dollar_ref=t.id,n=t.data()})),""!=e.dollar_ref){t.next=8;break}return t.next=8,Object(T["a"])(Object(T["b"])(W,"dollar_price"),{dollar_price:1});case 8:e.price=n.dollar_price;case 9:case"end":return t.stop()}}),t)})))()}};const se=y()(le,[["render",ce]]);var ie=se,ue=["01","02","03","04","05","06","07","08","09","10","11","12"],de={name:"List",components:{ModalDollarPrice:ie},data:function(){return{payments:[],current_date:"",show_modal:!1,dollar_price:0}},methods:{formatDate:function(e){var t=e.split("-");return t[1]+"-"+t[2]+"-"+t[0]},loadData:function(){var e=this;return Object(j["a"])(regeneratorRuntime.mark((function t(){var r,n,a,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=[],n={},console.log(e.current_date),a=Object(T["i"])(Object(T["b"])(W,"payments"),Object(T["k"])("created",">",e.current_date+"-01"),Object(T["k"])("created","<",e.current_date+"-31"),Object(T["h"])("created")),t.next=6,Object(T["f"])(a);case 6:o=t.sent,o.forEach((function(e){n=e.data(),n.ref=e.id,r.push(n)})),e.payments=r;case 9:case"end":return t.stop()}}),t)})))()},remove:function(e){var t=this;this.$swal.fire({title:"Are you sure?",text:"You won't be able to revert this!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!"}).then(function(){var r=Object(j["a"])(regeneratorRuntime.mark((function r(n){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(!n.isConfirmed){r.next=5;break}return r.next=3,Object(T["c"])(Object(T["d"])(W,"payments",e));case 3:t.payments=t.payments.filter((function(t){return t.ref!=e})),t.$swal.fire("Deleted!","Your file has been deleted.","success");case 5:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}())},changeMonth:function(){this.loadData()},close_modal:function(){this.show_modal=!1},updateDollar:function(e){var t=this;return Object(j["a"])(regeneratorRuntime.mark((function r(){var n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,n=Object(T["d"])(W,"dollar_price",t.dollar_ref),r.next=4,Object(T["j"])(n,{dollar_price:e});case 4:t.dollar_price=e,t.show_modal=!1,r.next=11;break;case 8:throw r.prev=8,r.t0=r["catch"](0),new Error(r.t0);case 11:case"end":return r.stop()}}),r,null,[[0,8]])})))()}},created:function(){var e=this;return Object(j["a"])(regeneratorRuntime.mark((function t(){var r,n,a,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=new Date,n=ue[r.getMonth()],e.current_date=r.getFullYear()+"-"+n,e.loadData(),t.next=6,Object(T["f"])(Object(T["b"])(W,"dollar_price"));case 6:if(a=t.sent,o={},a.forEach((function(t){e.dollar_ref=t.id,o=t.data()})),""!=e.dollar_ref){t.next=12;break}return t.next=12,Object(T["a"])(Object(T["b"])(W,"dollar_price"),{dollar_price:1});case 12:e.dollar_price=o.dollar_price;case 13:case"end":return t.stop()}}),t)})))()},computed:Object(H["a"])(Object(H["a"])({},Object(J["c"])({Posts:"StatePosts",User:"StateUser"})),{},{totalUsd:function(){return this.payments.reduce((function(e,t){return parseFloat(e)+parseFloat(t.usd_amount)}),0)},totalBs:function(){return this.payments.reduce((function(e,t){return parseFloat(e)+parseFloat(t.bs_amount)}),0)}})};r("71b5");const be=y()(de,[["render",Y]]);var fe=be,me={class:"p-3 mx-auto mt-4 bg-gray-50 rounded-2xl drop-shadow-xl"},pe=Object(n["f"])("h2",{class:"pl-1 mt-2 mb-4 text-lg font-semibold text-gray-600 border-b-2 border-gray-400"}," Add Payment ",-1),ge={class:"flex flex-col mx-auto md:w-3/4 gap-4"},xe={class:"flex flex-col"},je=Object(n["f"])("label",{for:"amount",class:"text-gray-500"},"Amount",-1),Oe={class:"flex flex-col mt-5"},he={for:"dollar_price",class:"text-green-500"},ye=Object(n["g"])("Dollar Price"),ve={class:"flex flex-col mt-5"},we=Object(n["f"])("label",{for:"date",class:"text-gray-500"},"Date",-1),_e={class:"flex flex-col mt-5"},ke=Object(n["f"])("label",{for:"type",class:"text-gray-500"},"Currency",-1),De=Object(n["f"])("option",{value:""},"Select...",-1),Ee=Object(n["f"])("option",{value:"usd"},"Dollar American",-1),Re=Object(n["f"])("option",{value:"bs"},"Bolivares",-1),Ue=[De,Ee,Re],Be={class:"flex justify-end mt-5"},Pe=Object(n["g"])(" Add ");function Se(e,t,r,a,o,c){var l=Object(n["w"])("ion-icon");return Object(n["r"])(),Object(n["e"])("div",me,[pe,Object(n["f"])("div",ge,[Object(n["f"])("div",xe,[je,Object(n["E"])(Object(n["f"])("input",{type:"text","onUpdate:modelValue":t[0]||(t[0]=function(e){return o.amount=e}),class:"p-1 border border-gray-400 rounded-lg focus:border-indigo-500",placeholder:"Amount"},null,512),[[n["B"],o.amount]])]),Object(n["f"])("div",Oe,[Object(n["f"])("label",he,[Object(n["h"])(l,{name:"logo-usd"}),ye]),Object(n["E"])(Object(n["f"])("input",{type:"text","onUpdate:modelValue":t[1]||(t[1]=function(e){return o.dollar_price=e}),class:"p-1 border-2 border-green-400 rounded-lg focus:border-indigo-500",placeholder:"Dollar Price"},null,512),[[n["B"],o.dollar_price]])]),Object(n["f"])("div",ve,[we,Object(n["E"])(Object(n["f"])("input",{type:"date","onUpdate:modelValue":t[2]||(t[2]=function(e){return o.created=e}),class:"p-1 border border-gray-400 rounded-lg focus:border-indigo-500",placeholder:"Date"},null,512),[[n["B"],o.created]])]),Object(n["f"])("div",_e,[ke,Object(n["E"])(Object(n["f"])("select",{class:"p-1 border border-gray-400 rounded-lg focus:border-indigo-500","onUpdate:modelValue":t[3]||(t[3]=function(e){return o.type=e})},Ue,512),[[n["A"],o.type]])]),Object(n["f"])("div",Be,[Object(n["f"])("button",{onClick:t[4]||(t[4]=function(){return c.add&&c.add.apply(c,arguments)}),class:"inline-flex items-center px-4 py-2 text-white bg-indigo-600 rounded-2xl hover:bg-indigo-500 drop-shadow-2xl hover:drop-shadow-none"},[Object(n["h"])(l,{name:"add-circle-outline"}),Pe])])])])}r("5319"),r("25f0");var Ae={name:"Add",data:function(){return{amount:0,created:(new Date).toISOString().split("T")[0],type:"bs",dollar_price:0}},methods:{add:function(){var e=this;return Object(j["a"])(regeneratorRuntime.mark((function t(){var r,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=e.amount,n=e.amount,"bs"==e.type?r=e.amount/e.dollar_price:n=e.amount*e.dollar_price,t.prev=3,t.next=6,Object(T["a"])(Object(T["b"])(W,"payments"),{id:e.getId,bs_amount:n,usd_amount:r,created:e.created,type:e.type,dollar_price:e.dollar_price});case 6:e.$router.push("/"),t.next=12;break;case 9:throw t.prev=9,t.t0=t["catch"](3),new Error(t.t0);case 12:case"end":return t.stop()}}),t,null,[[3,9]])})))()}},computed:{getId:function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(e){var t=16*Math.random()|0,r="x"==e?t:3&t|8;return r.toString(16)}))}},created:function(){var e=this;return Object(j["a"])(regeneratorRuntime.mark((function t(){var r,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(T["f"])(Object(T["b"])(W,"dollar_price"));case 2:r=t.sent,n={},r.forEach((function(t){e.dollar_ref=t.id,n=t.data()})),e.dollar_price=n.dollar_price,console.log(e.dollar_price);case 7:case"end":return t.stop()}}),t)})))()}};const Ce=y()(Ae,[["render",Se]]);var Le=Ce,Fe={class:"p-3 mx-auto mt-4 bg-white rounded-2xl drop-shadow-xl"},Me=Object(n["f"])("h2",{class:"pl-1 mt-2 mb-4 text-lg font-semibold text-gray-600 border-b-2 border-gray-400"}," Edit Payment ",-1),Ve={class:"flex flex-col mx-auto md:w-3/4 gap-4"},$e={class:"flex flex-col"},Ie=Object(n["f"])("label",{for:"amount",class:"text-gray-500"},"Amount",-1),qe={class:"flex flex-col mt-5"},ze={for:"dollar_price",class:"text-green-600"},Ne=Object(n["g"])("Dollar Price"),Ye={class:"flex flex-col mt-5"},He=Object(n["f"])("label",{for:"date",class:"text-gray-500"},"Date",-1),Te={class:"flex flex-col mt-5"},Je=Object(n["f"])("label",{for:"type",class:"text-gray-500"},"Currency",-1),Ke=Object(n["f"])("option",{value:""},"Select...",-1),Qe=Object(n["f"])("option",{value:"usd"},"Dollar American",-1),We=Object(n["f"])("option",{value:"bs"},"Bolivares",-1),Xe=[Ke,Qe,We],Ge={class:"flex justify-end mt-5"},Ze=Object(n["g"])(" Update ");function et(e,t,r,a,o,c){var l=Object(n["w"])("ion-icon");return Object(n["r"])(),Object(n["e"])("div",Fe,[Me,Object(n["f"])("div",Ve,[Object(n["f"])("div",$e,[Ie,Object(n["E"])(Object(n["f"])("input",{type:"text","onUpdate:modelValue":t[0]||(t[0]=function(e){return o.payment.amount=e}),class:"p-1 border border-gray-400 rounded-lg focus:border-indigo-500",placeholder:"Amount"},null,512),[[n["B"],o.payment.amount]])]),Object(n["f"])("div",qe,[Object(n["f"])("label",ze,[Object(n["h"])(l,{name:"logo-usd"}),Ne]),Object(n["E"])(Object(n["f"])("input",{type:"text","onUpdate:modelValue":t[1]||(t[1]=function(e){return o.payment.dollar_price=e}),class:"p-1 border-2 border-green-600 rounded-lg focus:border-indigo-500",placeholder:"Dollar Price"},null,512),[[n["B"],o.payment.dollar_price]])]),Object(n["f"])("div",Ye,[He,Object(n["E"])(Object(n["f"])("input",{type:"date","onUpdate:modelValue":t[2]||(t[2]=function(e){return o.payment.created=e}),class:"p-1 border border-gray-400 rounded-lg focus:border-indigo-500",placeholder:"Date"},null,512),[[n["B"],o.payment.created]])]),Object(n["f"])("div",Te,[Je,Object(n["E"])(Object(n["f"])("select",{class:"p-1 border border-gray-400 rounded-lg focus:border-indigo-500","onUpdate:modelValue":t[3]||(t[3]=function(e){return o.payment.type=e})},Xe,512),[[n["A"],o.payment.type]])]),Object(n["f"])("div",Ge,[Object(n["f"])("button",{onClick:t[4]||(t[4]=function(){return c.update&&c.update.apply(c,arguments)}),class:"inline-flex items-center px-4 py-2 text-white bg-green-600 rounded-2xl drop-shadow-2xl hover:drop-shadow-none hover:bg-green-500"},[Object(n["h"])(l,{name:"sync"}),Ze])])])])}var tt={name:"Add",data:function(){return{payment:{amount:0,created:"",type:"",dollar_price:0}}},methods:{update:function(){var e=this;return Object(j["a"])(regeneratorRuntime.mark((function t(){var r,n,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=e.payment.amount,n=e.payment.amount,"bs"==e.payment.type?r=e.payment.amount/e.payment.dollar_price:n=e.payment.amount*e.payment.dollar_price,t.prev=3,a=Object(T["d"])(W,"payments",e.$route.params.ref),t.next=7,Object(T["j"])(a,{bs_amount:n,usd_amount:r,created:e.payment.created,type:e.payment.type,dollar_price:e.payment.dollar_price});case 7:e.$router.push("/"),t.next=13;break;case 10:throw t.prev=10,t.t0=t["catch"](3),new Error(t.t0);case 13:case"end":return t.stop()}}),t,null,[[3,10]])})))()}},created:function(){var e=this;return Object(j["a"])(regeneratorRuntime.mark((function t(){var r,n,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r={},n=Object(T["d"])(W,"payments",e.$route.params.ref),t.next=4,Object(T["e"])(n);case 4:a=t.sent,r=a.data(),e.payment.type=r.type,e.payment.created=r.created,e.payment.dollar_price=r.dollar_price,"usd"==r.type?(e.payment.amount=r.usd_amount,console.log(r)):e.payment.amount=r.bs_amount;case 10:case"end":return t.stop()}}),t)})))()}};const rt=y()(tt,[["render",et]]);var nt=rt,at={class:"p-4 mx-auto mt-6 bg-white border-2 border-gray-300 md:w-2/4 drop-shadow-lg rounded-2xl"},ot=Object(n["f"])("h1",{class:"pt-6 text-3xl font-bold text-center text-green-700 capitalize"},"add money network",-1),ct=Object(n["f"])("h1",{class:"pt-3 pb-6 text-3xl font-bold text-center text-green-700"}," {..Login..} ",-1),lt={key:0,class:"px-2 py-2 text-center text-white bg-red-400 rounded-xl"},st={class:"flex flex-col"},it=Object(n["f"])("label",{class:"text-gray-500",for:"email"},"Email",-1),ut={class:"flex flex-col"},dt=Object(n["f"])("label",{class:"text-gray-500",for:"password"},"Password",-1),bt=Object(n["f"])("div",{class:"flex justify-end"},[Object(n["f"])("button",{type:"submit",class:"inline-flex items-center px-4 py-2 text-white bg-blue-500 rounded-xl hover:bg-blue-600"}," Login ")],-1);function ft(e,t,r,a,o,c){return Object(n["r"])(),Object(n["e"])("div",at,[ot,ct,Object(n["f"])("form",{class:"flex flex-col mx-auto md:w-3/4 gap-4",action:"javascript:;",onSubmit:t[2]||(t[2]=function(){return c.login&&c.login.apply(c,arguments)})},[o.show_error?(Object(n["r"])(),Object(n["e"])("p",lt," Usuario invalido ")):Object(n["d"])("",!0),Object(n["f"])("div",st,[it,Object(n["E"])(Object(n["f"])("input",{type:"email",placeholder:"Email","onUpdate:modelValue":t[0]||(t[0]=function(e){return o.email=e}),class:"p-2 border border-green-600 rounded-xl focus:ring-blue-500 focus:border-blue-500 bg-gray-50"},null,512),[[n["B"],o.email]])]),Object(n["f"])("div",ut,[dt,Object(n["E"])(Object(n["f"])("input",{type:"password",placeholder:"Password","onUpdate:modelValue":t[1]||(t[1]=function(e){return o.password=e}),class:"p-2 border border-green-600 rounded-xl focus:ring-blue-500 focus:border-blue-500 bg-gray-50"},null,512),[[n["B"],o.password]])]),bt],32)])}var mt=r("ea7b"),pt={name:"Login",data:function(){return{show_error:!1,email:"",password:"",error_message:""}},methods:Object(H["a"])(Object(H["a"])({},Object(J["b"])(["LogIn"])),{},{login:function(){var e=this;return Object(j["a"])(regeneratorRuntime.mark((function t(){var r,n,a,o,c;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,r=Object(mt["b"])(),t.next=4,Object(mt["c"])(r,e.email,e.password);case 4:return n=t.sent,a=n.user,t.next=8,e.LogIn({email:e.email,password:e.password});case 8:e.show_error=!1,e.$router.push("/"),console.log(a),t.next=18;break;case 13:t.prev=13,t.t0=t["catch"](0),o=t.t0.code,c=t.t0.message,"auth/wrong-password"==o&&(e.error_message=c,e.show_error=!0);case 18:case"end":return t.stop()}}),t,null,[[0,13]])})))()}})};const gt=y()(pt,[["render",ft]]);var xt=gt,jt=(r("b0c0"),{class:"p-4 bg-gray-100 border-2 border-gray-300 drop-shadow-lg rounded-2xl"}),Ot=Object(n["f"])("h1",{class:"mt-6 mb-2 text-3xl font-bold text-center text-gray-500 capitalize"},"register user",-1),ht={class:"flex flex-col"},yt=Object(n["f"])("label",{class:"text-gray-500",for:"name"},"Name",-1),vt={class:"flex flex-col"},wt=Object(n["f"])("label",{class:"text-gray-500",for:"email"},"Email",-1),_t={class:"flex flex-col"},kt=Object(n["f"])("label",{class:"text-gray-500",for:"password"},"Password",-1),Dt=Object(n["f"])("div",{class:"flex justify-end"},[Object(n["f"])("button",{type:"submit",class:"inline-flex items-center px-4 py-2 text-white bg-green-600 rounded-xl hover:bg-green-700"},"Register")],-1);function Et(e,t,r,a,o,c){return Object(n["r"])(),Object(n["e"])("div",jt,[Ot,Object(n["f"])("form",{class:"flex flex-col w-3/4 mx-auto gap-4",action:"javascript:;",onSubmit:t[3]||(t[3]=function(){return c.submit&&c.submit.apply(c,arguments)})},[Object(n["f"])("div",ht,[yt,Object(n["E"])(Object(n["f"])("input",{type:"text",placeholder:"Name","onUpdate:modelValue":t[0]||(t[0]=function(e){return o.user.name=e}),class:"p-2 border border-blue-500 rounded-xl focus:ring-blue-500 focus:border-blue-500 bg-gray-50"},null,512),[[n["B"],o.user.name]])]),Object(n["f"])("div",vt,[wt,Object(n["E"])(Object(n["f"])("input",{type:"email",placeholder:"Email","onUpdate:modelValue":t[1]||(t[1]=function(e){return o.user.email=e}),class:"p-2 border border-blue-500 rounded-xl focus:ring-blue-500 focus:border-blue-500 bg-gray-50"},null,512),[[n["B"],o.user.email]])]),Object(n["f"])("div",_t,[kt,Object(n["E"])(Object(n["f"])("input",{type:"password",placeholder:"Password","onUpdate:modelValue":t[2]||(t[2]=function(e){return o.user.password=e}),class:"p-2 border border-blue-500 rounded-xl focus:ring-blue-500 focus:border-blue-500 bg-gray-50"},null,512),[[n["B"],o.user.password]])]),Dt],32)])}var Rt={name:"Register",data:function(){return{user:{name:"",password:"",email:""}}},methods:Object(H["a"])(Object(H["a"])({},Object(J["b"])(["Register"])),{},{submit:function(){var e=this;return Object(j["a"])(regeneratorRuntime.mark((function t(){var r,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,r=Object(mt["b"])(),t.next=4,Object(mt["a"])(r,e.user.email,e.user.password);case 4:return n=t.sent,t.next=7,e.Register(e.user);case 7:e.$router.push("/"),console.log(n.user),t.next=14;break;case 11:throw t.prev=11,t.t0=t["catch"](0),new Error(t.t0);case 14:case"end":return t.stop()}}),t,null,[[0,11]])})))()}})};const Ut=y()(Rt,[["render",Et]]);var Bt=Ut,Pt=r("0e44"),St={user:null},At={isAuthenticated:function(e){return!!e.user},StateUser:function(e){return e.user}},Ct={LogIn:function(e,t){return Object(j["a"])(regeneratorRuntime.mark((function r(){var n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return n=e.commit,r.next=3,n("setUser",t);case 3:case"end":return r.stop()}}),r)})))()},LogOut:function(e){return Object(j["a"])(regeneratorRuntime.mark((function t(){var r,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:r=e.commit,n=null,r("LogOut",n);case 3:case"end":return t.stop()}}),t)})))()}},Lt={setUser:function(e,t){e.user=t},LogOut:function(e){e.user=null}},Ft={state:St,getters:At,actions:Ct,mutations:Lt},Mt=Object(J["a"])({state:{},mutations:{},actions:{},modules:{auth:Ft},plugins:[Object(Pt["a"])()]}),Vt=[{path:"/",name:"List",component:fe,meta:{requiresAuth:!0}},{path:"/login",name:"Login",component:xt,meta:{guest:!0}},{path:"/register",name:"Register",component:Bt,meta:{requiresAuth:!0}},{path:"/add",name:"Add",component:Le,meta:{requiresAuth:!0}},{path:"/edit/:ref",name:"Edit",component:nt,meta:{requiresAuth:!0}}],$t=Object(k["a"])({history:Object(k["b"])("/"),routes:Vt});$t.beforeEach((function(e,t,r){if(e.matched.some((function(e){return e.meta.requiresAuth}))){if(Mt.getters.isAuthenticated)return void r();r("/login")}else r()})),$t.beforeEach((function(e,t,r){if(e.matched.some((function(e){return e.meta.guest}))){if(Mt.getters.isAuthenticated)return void r("/");r()}else r()}));var It=$t,qt=r("f9d5"),zt=r.n(qt),Nt=(r("4413"),r("7d05"),r("0ff2"));Object(n["c"])(w).use(Mt).use(It).use(Nt).use(zt.a).mount("#app")},"71b5":function(e,t,r){"use strict";r("3bd3")},"7d05":function(e,t,r){}});
//# sourceMappingURL=app.c21e187e.js.map