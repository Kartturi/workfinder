(function(t){function n(n){for(var o,r,a=n[0],c=n[1],l=n[2],d=0,f=[];d<a.length;d++)r=a[d],i[r]&&f.push(i[r][0]),i[r]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(t[o]=c[o]);u&&u(n);while(f.length)f.shift()();return s.push.apply(s,l||[]),e()}function e(){for(var t,n=0;n<s.length;n++){for(var e=s[n],o=!0,a=1;a<e.length;a++){var c=e[a];0!==i[c]&&(o=!1)}o&&(s.splice(n--,1),t=r(r.s=e[0]))}return t}var o={},i={app:0},s=[];function r(n){if(o[n])return o[n].exports;var e=o[n]={i:n,l:!1,exports:{}};return t[n].call(e.exports,e,e.exports,r),e.l=!0,e.exports}r.m=t,r.c=o,r.d=function(t,n,e){r.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:e})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,n){if(1&n&&(t=r(t)),8&n)return t;if(4&n&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(r.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var o in t)r.d(e,o,function(n){return t[n]}.bind(null,o));return e},r.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(n,"a",n),n},r.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},r.p="/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],c=a.push.bind(a);a.push=n,a=a.slice();for(var l=0;l<a.length;l++)n(a[l]);var u=c;s.push([0,"chunk-vendors"]),e()})({0:function(t,n,e){t.exports=e("56d7")},"034f":function(t,n,e){"use strict";var o=e("64a9"),i=e.n(o);i.a},2539:function(t,n,e){"use strict";var o=e("bfb1"),i=e.n(o);i.a},"418f":function(t,n,e){"use strict";var o=e("56b0"),i=e.n(o);i.a},"438a":function(t,n,e){"use strict";var o=e("b33e"),i=e.n(o);i.a},4666:function(t,n,e){"use strict";var o=e("e3ee"),i=e.n(o);i.a},"56b0":function(t,n,e){},"56d7":function(t,n,e){"use strict";e.r(n);e("cadf"),e("551c"),e("f751"),e("097d");var o=e("2b0e"),i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{attrs:{id:"app"}},[e("div",{attrs:{id:"nav"}}),e("router-view")],1)},s=[],r=(e("034f"),e("2877")),a={},c=Object(r["a"])(a,i,s,!1,null,null,null),l=c.exports,u=e("8c4f"),d=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"home"},[e("back-to-top",{staticClass:"scroll-to-top",attrs:{visibleoffset:"450"}},[e("button",{staticClass:"btn-to-top",attrs:{type:"button"}},[e("font-awesome-icon",{attrs:{icon:"arrow-up"}})],1)]),e("ownbutton",{on:{"change-page":t.changePage}}),t.showOwnlist?t._e():e("div",[e("h1",[t._v("Workfinder")]),e("h3",[t._v("Löydä unelmien työsi")]),e("searchBar",{on:{clicked:t.getJobs}}),t.isLoading?e("loadingspinner"):t._e(),t.jobs?e("p",[t._v("Duunitori:"+t._s(t.resLength.duuni)+" Oikotie:"+t._s(t.resLength.oikotie)+" Monsteri:"+t._s(t.resLength.monster))]):t._e(),e("div",{staticClass:"joblist-container"},[e("joblist",{attrs:{jobs:t.jobs,ownlist:t.showOwnlist}}),t.jobs?e("sorting",{on:{"sorting-event":t.sortList}}):t._e()],1)],1),t.showOwnlist?e("div",[e("ownlist")],1):t._e()],1)},f=[],m=(e("6762"),function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("form",[e("span",{staticClass:"deleteicon"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.form.job,expression:"form.job"}],staticClass:"search-input",attrs:{placeholder:"Työ",type:"text",value:"siivooja"},domProps:{value:t.form.job},on:{input:function(n){n.target.composing||t.$set(t.form,"job",n.target.value)}}}),t.form.job?e("span",{staticClass:"deleteicon-span",on:{click:t.clearValueJob}},[e("font-awesome-icon",{attrs:{icon:"times"}})],1):t._e()]),e("span",{staticClass:"deleteicon"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.form.location,expression:"form.location"}],staticClass:"search-input",attrs:{placeholder:"Kaupunki"},domProps:{value:t.form.location},on:{input:function(n){n.target.composing||t.$set(t.form,"location",n.target.value)}}}),t.form.location?e("span",{staticClass:"deleteicon-span",on:{click:t.clearLocationJob}},[e("font-awesome-icon",{attrs:{icon:"times"}})],1):t._e()]),e("button",{staticClass:"find-btn",on:{click:t.getValues}},[t._v("Etsi")])]),e("p",[t._v(t._s(t.error))])])}),b=[],h={data:function(){return{form:{job:"",location:""},error:null}},methods:{clearValueJob:function(){this.form.job=""},clearLocationJob:function(){this.form.location=""},getValues:function(t){if(t.preventDefault(),!this.form.job)return this.error="You need to specify the job my man";this.error=null,this.$emit("clicked",{job:this.form.job,location:this.form.location})}}},p=h,g=(e("418f"),Object(r["a"])(p,m,b,!1,null,null,null)),v=g.exports,j=e("bc3a"),k=e.n(j),_=function(){var t=this,n=t.$createElement,e=t._self._c||n;return t.jobs?e("ul",{staticClass:"jobs-ul"},t._l(t.jobs,function(n,o){return e("li",{key:o+"-"+n.id},[e("joblistitem",t._b({},"joblistitem",{job:n,ownlist:t.ownlist,deleteJob:t.deleteJob},!1))],1)}),0):t._e()},w=[],y=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"joblist-items"},[e("div",{staticClass:"joblist-item joblist-item-host"},[e("h6",[t._v(t._s(t.job.host))])]),e("div",{staticClass:"joblist-item joblist-item-info"},[e("h3",[t._v(t._s(t.job.title))]),e("p",[t._v(t._s(t.job.desc))]),e("p",[t._v(t._s(t.job.location))])]),e("div",{staticClass:"joblist-item joblist-item-link"},[e("a",{attrs:{href:t.job.link,target:"_blank",rel:"nofollow"}},[e("font-awesome-icon",{attrs:{icon:"arrow-right"}})],1)]),e("div",{staticClass:"joblist-item joblist-item-own"},[t.ownlist?t._e():e("p",[e("font-awesome-icon",{staticClass:"ownlist-btn",class:{active:t.clicked},attrs:{icon:"plus"},on:{click:t.handlePlusClick}})],1),t.ownlist?e("p",[e("font-awesome-icon",{staticClass:"ownlist-btn",class:{active_minus:t.clickedMinus},attrs:{icon:"minus"},on:{click:t.handleMinusClick}})],1):t._e()])])},O=[],C={data:function(){return{clicked:!1,clickedMinus:!1}},props:["job","ownlist","deleteJob"],methods:{handleMinusClick:function(t){var n=this;this.clickedMinus=!0;var e=JSON.parse(localStorage.getItem("jobs")),o=e.filter(function(t){return t.id!==n.job.id});return this.deleteJob(o),localStorage.setItem("jobs",JSON.stringify(o))},handlePlusClick:function(t){if(!this.clicked){this.clicked=!0;var n=localStorage.getItem("jobs");if(!n)return localStorage.setItem("jobs",JSON.stringify([this.job]));var e=JSON.parse(localStorage.getItem("jobs"));e.push(this.job),localStorage.setItem("jobs",JSON.stringify(e))}}},created:function(){}},x=C,J=(e("5fa6"),Object(r["a"])(x,y,O,!1,null,null,null)),$=J.exports,L={props:["jobs","ownlist","deleteJob"],components:{joblistitem:$},created:function(){}},S=L,P=(e("6604"),Object(r["a"])(S,_,w,!1,null,null,null)),A=P.exports,M=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"list-sorting"},[e("div",{staticClass:"list-sorting-item"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.sorting.duuni,expression:"sorting.duuni"}],attrs:{"data-box":"duuni",type:"checkbox"},domProps:{checked:Array.isArray(t.sorting.duuni)?t._i(t.sorting.duuni,null)>-1:t.sorting.duuni},on:{click:t.sortingClick,change:function(n){var e=t.sorting.duuni,o=n.target,i=!!o.checked;if(Array.isArray(e)){var s=null,r=t._i(e,s);o.checked?r<0&&t.$set(t.sorting,"duuni",e.concat([s])):r>-1&&t.$set(t.sorting,"duuni",e.slice(0,r).concat(e.slice(r+1)))}else t.$set(t.sorting,"duuni",i)}}}),e("span",[t._v("Duuni")])]),e("div",{staticClass:"list-sorting-item"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.sorting.oikotie,expression:"sorting.oikotie"}],attrs:{"data-box":"oikotie",type:"checkbox"},domProps:{checked:Array.isArray(t.sorting.oikotie)?t._i(t.sorting.oikotie,null)>-1:t.sorting.oikotie},on:{click:t.sortingClick,change:function(n){var e=t.sorting.oikotie,o=n.target,i=!!o.checked;if(Array.isArray(e)){var s=null,r=t._i(e,s);o.checked?r<0&&t.$set(t.sorting,"oikotie",e.concat([s])):r>-1&&t.$set(t.sorting,"oikotie",e.slice(0,r).concat(e.slice(r+1)))}else t.$set(t.sorting,"oikotie",i)}}}),e("span",[t._v("Oikotie")])]),e("div",{staticClass:"list-sorting-item"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.sorting.monsteri,expression:"sorting.monsteri"}],attrs:{"data-box":"monsteri",type:"checkbox"},domProps:{checked:Array.isArray(t.sorting.monsteri)?t._i(t.sorting.monsteri,null)>-1:t.sorting.monsteri},on:{click:t.sortingClick,change:function(n){var e=t.sorting.monsteri,o=n.target,i=!!o.checked;if(Array.isArray(e)){var s=null,r=t._i(e,s);o.checked?r<0&&t.$set(t.sorting,"monsteri",e.concat([s])):r>-1&&t.$set(t.sorting,"monsteri",e.slice(0,r).concat(e.slice(r+1)))}else t.$set(t.sorting,"monsteri",i)}}}),e("span",[t._v("Monsteri")])]),e("div",{staticClass:"list-sorting-item"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.sorting.random,expression:"sorting.random"}],attrs:{"data-box":"random",type:"checkbox"},domProps:{checked:Array.isArray(t.sorting.random)?t._i(t.sorting.random,null)>-1:t.sorting.random},on:{click:t.sortingClick,change:function(n){var e=t.sorting.random,o=n.target,i=!!o.checked;if(Array.isArray(e)){var s=null,r=t._i(e,s);o.checked?r<0&&t.$set(t.sorting,"random",e.concat([s])):r>-1&&t.$set(t.sorting,"random",e.slice(0,r).concat(e.slice(r+1)))}else t.$set(t.sorting,"random",i)}}}),e("span",[t._v("Random")])])])},E=[],N={data:function(){return{sorting:{duuni:!1,oikotie:!1,monsteri:!1,random:!0}}},methods:{sortingClick:function(t){this.sorting[t.target.dataset.box]=!this.sorting[t.target.dataset.box],this.$emit("sorting-event",this.sorting)}}},U=N,I=(e("2539"),Object(r["a"])(U,M,E,!1,null,null,null)),T=I.exports;function V(t){for(var n=t.length-1;n>0;n--){var e=Math.floor(Math.random()*(n+1)),o=t[n];t[n]=t[e],t[e]=o}}var D=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("button",{staticClass:"own-button",on:{click:t.changePage}},[t._v(t._s(t.showOwnList?"Etsi":"Oma lista"))])},B=[],W={data:function(){return{showOwnList:!1}},methods:{changePage:function(){this.showOwnList=!this.showOwnList,this.$emit("change-page",this.showOwnList)}}},K=W,R=(e("5a6d"),Object(r["a"])(K,D,B,!1,null,null,null)),Y=R.exports,q=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"home"},[e("h1",[t._v("Workfinder")]),e("h3",[t._v("Sinun listasi")]),e("div",{staticClass:"joblist-container-own"},[e("joblist",t._b({},"joblist",{jobs:t.jobs,ownlist:t.showOwnList,deleteJob:t.deleteJob},!1))],1)])},z=[],F={name:"home",data:function(){return{backUpJobs:null,jobs:null,test:"",errors:[],showOwnList:!0}},components:{joblist:A,sorting:T},methods:{deleteJob:function(t){this.jobs=t}},created:function(){var t=JSON.parse(localStorage.getItem("jobs"));t&&(this.jobs=t)}},G=F,H=(e("4666"),Object(r["a"])(G,q,z,!1,null,null,null)),Q=H.exports,X=function(){var t=this,n=t.$createElement;t._self._c;return t._m(0)},Z=[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"lds-ripple"},[e("div"),e("div")])}],tt=(e("438a"),{}),nt=Object(r["a"])(tt,X,Z,!1,null,null,null),et=nt.exports,ot={name:"home",data:function(){return{backUpJobs:null,jobs:null,test:"",errors:[],showOwnlist:!1,resLength:{},isLoading:!1}},components:{sorting:T,searchBar:v,joblist:A,ownbutton:Y,ownlist:Q,loadingspinner:et},methods:{changePage:function(t){this.showOwnlist=t},getJobs:function(t){var n=this;this.isLoading=!0;var e="/job/".concat(t.job,"/").concat(t.location?t.location:"empty");k.a.get(e).then(function(t){n.isLoading=!1;var e=t.data;n.resLength["duuni"]=e.filter(function(t){return"duuni"===t.host}).length,n.resLength["oikotie"]=e.filter(function(t){return"oikotie"===t.host}).length,n.resLength["monster"]=e.filter(function(t){return"monsteri"===t.host}).length;var o=e.map(function(t){return t});return V(o),n.backUpJobs=e,n.jobs=o}).catch(function(t){return console.log(t)})},sortList:function(t){if(console.log("click"),t.duuni&&t.oikotie&&t.monsteri&&t.random){var n=this.backUpJobs.map(function(t){return t});return V(n),this.jobs=n}if(!t.duuni&&!t.oikotie&&!t.monsteri&&!t.random)return this.jobs=this.backUpJobs.map(function(t){return t});if(!t.duuni&&!t.oikotie&&!t.monsteri&&t.random){var e=this.backUpJobs.map(function(t){return t});return V(e),this.jobs=e}var o=[];return t.duuni&&o.push("duuni"),t.oikotie&&o.push("oikotie"),t.monsteri&&o.push("monsteri"),console.log(o,"from info"),console.log(this.backUpJobs.filter(function(t){return o.includes(t.host)})),this.jobs=this.backUpJobs.filter(function(t){return o.includes(t.host)})}}},it=ot,st=(e("cccb"),Object(r["a"])(it,d,f,!1,null,null,null)),rt=st.exports;o["a"].use(u["a"]);var at=new u["a"]({mode:"history",base:"/",routes:[{path:"/",name:"home",component:rt}]}),ct=e("ecee"),lt=e("c074"),ut=e("ad3d"),dt=e("6afc");o["a"].use(dt["a"]),o["a"].config.productionTip=!1,ct["c"].add(lt["a"],lt["d"],lt["c"],lt["e"],lt["b"]),o["a"].component("font-awesome-icon",ut["a"]),new o["a"]({router:at,render:function(t){return t(l)}}).$mount("#app")},"5a6d":function(t,n,e){"use strict";var o=e("76b6"),i=e.n(o);i.a},"5bac":function(t,n,e){},"5fa6":function(t,n,e){"use strict";var o=e("5bac"),i=e.n(o);i.a},"64a9":function(t,n,e){},6604:function(t,n,e){"use strict";var o=e("6af9"),i=e.n(o);i.a},"6af9":function(t,n,e){},"76b6":function(t,n,e){},b33e:function(t,n,e){},bfb1:function(t,n,e){},cccb:function(t,n,e){"use strict";var o=e("d563"),i=e.n(o);i.a},d563:function(t,n,e){},e3ee:function(t,n,e){}});
//# sourceMappingURL=app.30eb895c.js.map