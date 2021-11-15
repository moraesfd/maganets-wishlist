(function(t){function e(e){for(var r,i,s=e[0],c=e[1],u=e[2],l=0,f=[];l<s.length;l++)i=s[l],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&f.push(o[i][0]),o[i]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);d&&d(e);while(f.length)f.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],r=!0,i=1;i<n.length;i++){var c=n[i];0!==o[c]&&(r=!1)}r&&(a.splice(e--,1),t=s(s.s=n[0]))}return t}var r={},o={app:0},a=[];function i(t){return s.p+"js/"+({}[t]||t)+"."+{"chunk-2d2299e8":"768c4b49"}[t]+".js"}function s(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(t){var e=[],n=o[t];if(0!==n)if(n)e.push(n[2]);else{var r=new Promise((function(e,r){n=o[t]=[e,r]}));e.push(n[2]=r);var a,c=document.createElement("script");c.charset="utf-8",c.timeout=120,s.nc&&c.setAttribute("nonce",s.nc),c.src=i(t);var u=new Error;a=function(e){c.onerror=c.onload=null,clearTimeout(l);var n=o[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src;u.message="Loading chunk "+t+" failed.\n("+r+": "+a+")",u.name="ChunkLoadError",u.type=r,u.request=a,n[1](u)}o[t]=void 0}};var l=setTimeout((function(){a({type:"timeout",target:c})}),12e4);c.onerror=c.onload=a,document.head.appendChild(c)}return Promise.all(e)},s.m=t,s.c=r,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)s.d(n,r,function(e){return t[e]}.bind(null,r));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/maganets-wishlist/",s.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var d=u;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0eca":function(t,e,n){},"1fef":function(t,e,n){},"23ee":function(t,e,n){},"2ebb":function(t,e,n){},3586:function(t,e,n){"use strict";n("2ebb")},"3b8e":function(t,e,n){"use strict";n("5341")},"4e9c":function(t,e,n){"use strict";n("8427")},5341:function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},a=[],i=n("2877"),s={},c=Object(i["a"])(s,o,a,!1,null,null,null),u=c.exports,l=(n("d3b7"),n("3ca3"),n("ddb0"),n("8c4f")),d=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("AppLayout",[n("Breadcrumb",{attrs:{type:"home"}}),n("ProductList",{attrs:{type:"home",list:t.productsOnApi}})],1)],1)},f=[],p=n("1da1"),h=(n("4de4"),n("96cf"),n("bc3a")),m=n.n(h),g={baseUrl:"https://run.mocky.io/v3/66063904-d43c-49ed-9329-d69ad44b885e",getUrl:function(){return this.baseUrl},getData:function(t,e){var n=this;return Object(p["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,m.a.get(n.getUrl()).then((function(e){t(e.data)}),(function(t){e(t)}));case 2:case"end":return r.stop()}}),r)})))()},getProductsFiltered:function(t,e){var n=this;return Object(p["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,m.a.get(n.getUrl()).then((function(e){var n=e.data.products,r=[];n.filter((function(t){var e={id:t.id,title:t.title,image:t.image,price:t.price,wishlist:!1};r.push(e)})),t(r)}),(function(t){e(t)}));case 2:case"end":return r.stop()}}),r)})))()}},v=n("793d"),b=n("d815"),y=n("fbd2"),_={name:"Home",metaInfo:function(){return{title:"MagaNets - Home",meta:[{name:"description",content:"Teste de desenvolvimento Front-End realizado para a vaga no Luizalabs"},{property:"og:title",content:"MagaNets - Home"},{property:"og:site_name",content:"MagaNets"},{property:"og:type",content:"website"},{name:"robots",content:"index,follow"}]}},components:{AppLayout:v["a"],ProductList:b["a"],Breadcrumb:y["a"]},data:function(){return{productsOnApi:[]}},mounted:function(){this.getDataFromApi()},methods:{getDataFromApi:function(){var t=this;g.getProductsFiltered((function(e){t.productsOnApi=e}))}}},w=_,C=Object(i["a"])(w,d,f,!1,null,null,null),S=C.exports;r["a"].use(l["a"]);var O=[{path:"/",name:"Home",component:S},{path:"/wishlist",name:"Wishlist",component:function(){return n.e("chunk-2d2299e8").then(n.bind(null,"dde7"))}}],x=new l["a"]({mode:"history",base:"/maganets-wishlist/",routes:O}),j=x,k=n("58ca"),P=(n("def6"),n("ecee")),$=n("c074"),L=n("b702"),Q=n("ad3d");P["c"].add($["a"],$["d"],$["b"],$["c"],L["a"]),r["a"].component("font-awesome-icon",Q["a"]),r["a"].config.productionTip=!1,r["a"].use(k["a"]),new r["a"]({router:j,render:function(t){return t(u)}}).$mount("#app")},"601b":function(t,e,n){"use strict";n("ad92")},"60fc":function(t,e,n){"use strict";n("1fef")},"793d":function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("Header",{attrs:{company:"MagaNets"}}),t._t("default"),n("Footer",{attrs:{info:"Teste de desenvolvimento Front-End realizado para a vaga no Luizalabs. 2021."}})],2)},o=[],a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",[n("div",{staticClass:"header-container"},[n("router-link",{staticClass:"header-container__company",attrs:{to:"/"}},[t._v(" "+t._s(t.company)+" ")]),n("div",{staticClass:"header-container__menu"},[n("HeaderMenu")],1)],1)])},i=[],s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("HeaderLinks"),n("HeaderSearchBar")],1)},c=[],u=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",{staticClass:"links"},t._l(t.links,(function(e,r){return n("li",{key:r,staticClass:"links__item"},[n("router-link",{attrs:{to:e.url}},["heart"!=e.icon?n("font-awesome-icon",{attrs:{icon:e.icon}}):n("font-awesome-icon",{attrs:{icon:["fas",e.icon]}}),n("span",[t._v(t._s(e.text))])],1)],1)})),0)},l=[],d={name:"Links",data:function(){return{links:[{url:"/",icon:"map-marker-alt",text:"Cidade: São Paulo"},{url:"/",icon:"phone-alt",text:"Central de atendimento"},{url:"/wishlist",icon:"heart",text:"Lista de desejos"}]}}},f=d,p=(n("eabd"),n("2877")),h=Object(p["a"])(f,u,l,!1,null,null,null),m=h.exports,g=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"search-bar"},[n("span",[n("font-awesome-icon",{attrs:{icon:"search"}})],1),n("input",{directives:[{name:"model",rawName:"v-model",value:t.searchQuery,expression:"searchQuery"}],attrs:{type:"text",placeholder:"Busca"},domProps:{value:t.searchQuery},on:{input:[function(e){e.target.composing||(t.searchQuery=e.target.value)},t.sendQuery]}})])},v=[],b={name:"SearchBar",data:function(){return{searchQuery:null}},methods:{sendQuery:function(){this.$root.$emit("sendQuery",this.searchQuery)}}},y=b,_=(n("3b8e"),Object(p["a"])(y,g,v,!1,null,null,null)),w=_.exports,C={components:{HeaderSearchBar:w,HeaderLinks:m}},S=C,O=Object(p["a"])(S,s,c,!1,null,null,null),x=O.exports,j={name:"Header",props:{company:String},components:{HeaderMenu:x}},k=j,P=(n("3586"),Object(p["a"])(k,a,i,!1,null,null,null)),$=P.exports,L=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",[n("div",{staticClass:"footer-container"},[n("h1",{staticClass:"footer-container__info"},[t._v(t._s(t.info))])])])},Q=[],E={name:"Footer",props:{info:String}},H=E,I=(n("c026"),Object(p["a"])(H,L,Q,!1,null,null,null)),T=I.exports,A={name:"AppLayout",components:{Header:$,Footer:T}},M=A,B=Object(p["a"])(M,r,o,!1,null,null,null);e["a"]=B.exports},"800e":function(t,e,n){t.exports=n.p+"img/banner-arrow-down.595a4d04.svg"},8427:function(t,e,n){},8590:function(t,e,n){"use strict";n("0eca")},ad92:function(t,e,n){},c026:function(t,e,n){"use strict";n("d46c")},d46c:function(t,e,n){},d815:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"product-list"},["home"==t.type?n("ul",{staticClass:"product-list__list"},t._l(t.resultQueryHome,(function(e){return n("li",{key:e.id},[n("ProductCard",{attrs:{product:e,"default-toggle-state":t.verifyItemOnWishlist(e.id),type:t.type}})],1)})),0):"wishlist"==t.type?n("ul",{staticClass:"product-list__list"},t._l(t.resultQueryWishlist,(function(e){return n("li",{key:e.id},[n("ProductCard",{attrs:{product:e,"default-toggle-state":!0,type:t.type}})],1)})),0):t._e()])},o=[],a=n("2909"),i=(n("99af"),n("4de4"),n("d3b7"),n("ac1f"),n("1276"),n("caad"),n("2532"),n("e9c4"),{setStorage:function(t,e){localStorage.setItem(t,JSON.stringify(e))},getStorage:function(t){var e=localStorage.getItem(t);return JSON.parse(null!==e&&void 0!==e?e:"[]")},verifyStorage:function(t){return localStorage.getItem(t)}}),s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"product-card"},[n("div",{staticClass:"box"},[n("ProductToggleIcon",{attrs:{product:t.product,"default-state":t.defaultToggleState,type:t.type}})],1),n("img",{staticClass:"product-card__image",attrs:{src:t.product.image,alt:""}}),n("h3",{staticClass:"product-card__title"},[t._v(t._s(t.product.title))]),n("h4",{staticClass:"product-card__price"},[t._v("R$ "+t._s(t.product.price))])])},c=[],u=function(){var t=this,e=t.$createElement,n=t._self._c||e;return"home"==t.type?n("div",{staticClass:"product-toggle-icon on-home"},[t._m(0),n("button",{staticClass:"product-toggle-icon__button",class:{active:t.currentState},on:{click:function(e){return t.toggle(t.product)}}},[n("font-awesome-icon",{attrs:{icon:"heart"}})],1)]):n("div",{staticClass:"product-toggle-icon on-wishlist"},[n("button",{staticClass:"product-toggle-icon__button",on:{click:function(e){return t.toggle(t.product)}}},[n("font-awesome-icon",{attrs:{icon:["far","times-circle"]}})],1)])},l=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"product-toggle-icon__background"},[r("img",{attrs:{src:n("800e"),alt:""}})])}],d={name:"ProductToggleIcon",props:{product:Object,defaultState:{type:Boolean,default:!1},type:String},data:function(){return{currentState:this.defaultState}},methods:{toggle:function(t){this.currentState=!this.currentState;var e=t;e.wishlist=this.currentState,this.$root.$emit("updateWishlist",e)}}},f=d,p=(n("8590"),n("2877")),h=Object(p["a"])(f,u,l,!1,null,null,null),m=h.exports,g={name:"ProductCard",components:{ProductToggleIcon:m},props:{product:Object,defaultToggleState:Boolean,type:String}},v=g,b=(n("601b"),Object(p["a"])(v,s,c,!1,null,"59d281f0",null)),y=b.exports,_={name:"ProductList",props:{type:String,list:Array},components:{ProductCard:y},data:function(){return{searchQuery:null,wishlist:[],nameLocalStorage:"my-wishlist"}},mounted:function(){var t=this;this.wishlist=i.getStorage(this.nameLocalStorage),this.$root.$on("sendQuery",(function(e){t.searchQuery=e})),this.$root.$on("updateWishlist",(function(e){e.wishlist?t.addItem(e):t.removeItem(e.id)}))},methods:{addItem:function(t){this.wishlist=[].concat(Object(a["a"])(this.wishlist),[t])},removeItem:function(t){this.wishlist=this.wishlist.filter((function(e){return e.id!==t}))},verifyItemOnWishlist:function(t){return this.wishlist.filter((function(e){return e.id===t})).length>0}},watch:{wishlist:{handler:function(){i.setStorage(this.nameLocalStorage,this.wishlist)}}},computed:{resultQueryHome:function(){var t=this;return this.searchQuery?this.list.filter((function(e){return t.searchQuery.toLowerCase().split(" ").every((function(t){return e.title.toLowerCase().includes(t)}))})):this.list},resultQueryWishlist:function(){var t=this;return this.searchQuery?this.wishlist.filter((function(e){return t.searchQuery.toLowerCase().split(" ").every((function(t){return e.title.toLowerCase().includes(t)}))})):this.wishlist}}},w=_,C=(n("4e9c"),Object(p["a"])(w,r,o,!1,null,"15070788",null));e["a"]=C.exports},def6:function(t,e,n){},eabd:function(t,e,n){"use strict";n("23ee")},fbd2:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ol",{staticClass:"breadcrumb"},[n("li",{staticClass:"breadcrumb__item"},[n("router-link",{staticClass:"hover:underline",attrs:{to:"/"}},[t._v("Home")])],1),"wishlist"==t.type?n("li",{staticClass:"breadcrumb__arrow"},[t._v("›")]):t._e(),"wishlist"==t.type?n("li",{staticClass:"breadcrumb__item"},[n("router-link",{staticClass:"hover:underline",attrs:{to:"/wishlist"}},[t._v("Lista de desejos")])],1):t._e()])},o=[],a={name:"Breadcrumb",props:{type:String}},i=a,s=(n("60fc"),n("2877")),c=Object(s["a"])(i,r,o,!1,null,null,null);e["a"]=c.exports}});
//# sourceMappingURL=app.98de55f5.js.map