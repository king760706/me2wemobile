(function(t){function e(e){for(var i,l,s=e[0],r=e[1],c=e[2],f=0,p=[];f<s.length;f++)l=s[f],o[l]&&p.push(o[l][0]),o[l]=0;for(i in r)Object.prototype.hasOwnProperty.call(r,i)&&(t[i]=r[i]);u&&u(e);while(p.length)p.shift()();return n.push.apply(n,c||[]),a()}function a(){for(var t,e=0;e<n.length;e++){for(var a=n[e],i=!0,s=1;s<a.length;s++){var r=a[s];0!==o[r]&&(i=!1)}i&&(n.splice(e--,1),t=l(l.s=a[0]))}return t}var i={},o={index:0},n=[];function l(e){if(i[e])return i[e].exports;var a=i[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,l),a.l=!0,a.exports}l.m=t,l.c=i,l.d=function(t,e,a){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(l.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)l.d(a,i,function(e){return t[e]}.bind(null,i));return a},l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],r=s.push.bind(s);s.push=e,s=s.slice();for(var c=0;c<s.length;c++)e(s[c]);var u=r;n.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"0550":function(t,e,a){},"0fcd":function(t,e,a){t.exports=a.p+"img/photo3.31d1c9ea.jpg"},"355c":function(t,e,a){},"3b56":function(t,e,a){t.exports=a.p+"img/bg.2caf9888.jpg"},"44ae":function(t,e,a){t.exports=a.p+"img/photo2.6d072f39.jpg"},"4f87":function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("cadf"),a("551c"),a("097d");var i=a("2b0e"),o=a("2f62");i["a"].use(o["a"]);var n=new o["a"].Store({state:{},mutations:{},actions:{}}),l=a("d42c"),s=a("6baf"),r=a("23bb"),c=a.n(r),u=(a("82c1"),a("9e46"),a("4f87"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("f7-app",{attrs:{params:t.f7params}},[a("f7-statusbar"),a("f7-panel",{attrs:{left:"",reveal:"","theme-dark":""}},[a("f7-view",{attrs:{url:"/panel-left/"}})],1),a("f7-panel",{attrs:{right:"",cover:"","theme-dark":""}},[a("f7-view",{attrs:{url:"/panel-right/"}})],1),a("f7-view",{attrs:{id:"main-view",url:"/",main:""}}),a("f7-popup",{attrs:{id:"popup"}},[a("f7-view",[a("f7-page",[a("f7-navbar",{attrs:{title:"Popup"}},[a("f7-nav-right",[a("f7-link",{attrs:{"popup-close":""}},[t._v("Close")])],1)],1),a("f7-block",[t._v("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque, architecto. Cupiditate laudantium rem nesciunt numquam, ipsam. Voluptates omnis, a inventore atque ratione aliquam. Omnis iusto nemo quos ullam obcaecati, quod.")])],1)],1)],1),a("f7-login-screen",{attrs:{id:"login-screen"}},[a("f7-view",[a("f7-page",{attrs:{"login-screen":""}},[a("f7-login-screen-title",[t._v("Login")]),a("f7-list",{attrs:{form:""}},[a("f7-list-item",[a("f7-label",[t._v("Username")]),a("f7-input",{attrs:{name:"username",placeholder:"Username",type:"text"}})],1),a("f7-list-item",[a("f7-label",[t._v("Password")]),a("f7-input",{attrs:{name:"password",type:"password",placeholder:"Password"}})],1)],1),a("f7-list",[a("f7-list-button",{attrs:{title:"Sign In","login-screen-close":""}}),a("f7-block-footer",[a("p",[t._v("Click Sign In to close Login Screen")])])],1)],1)],1)],1)],1)}),f=[],p=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("f7-page",[i("f7-navbar",[i("f7-nav-left",[i("f7-link",{attrs:{"icon-if-ios":"f7:menu","icon-if-md":"material:menu","panel-open":"left"}})],1),i("f7-nav-title",{staticClass:"logo"},[i("img",{attrs:{src:a("cf05"),alt:"Me2We"}})])],1),i("f7-toolbar",{attrs:{tabbar:"",labels:""}},[i("f7-link",{attrs:{"icon-f7":"favorites",text:"活動介紹","tab-link":"#tab1","tab-link-active":""}}),i("f7-link",{attrs:{"icon-f7":"images",text:"活動相簿","tab-link":"#tab2"}}),i("f7-link",{attrs:{"icon-f7":"film",text:"互動設定","tab-link":"#tab3"}}),i("f7-link",{attrs:{"icon-f7":"flag",text:"遊戲設定","tab-link":"#tab4"}})],1),i("f7-tabs",{attrs:{swipeable:""}},[i("f7-tab",{attrs:{id:"tab1","tab-active":""}},[i("About")],1),i("f7-tab",{attrs:{id:"tab2"}},[i("Album")],1),i("f7-tab",{attrs:{id:"tab3"}},[i("Interactive")],1),i("f7-tab",{attrs:{id:"tab4"}},[t._v("Tab 4 content...")])],1)],1)},m=[],d=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("f7-page",[i("div",{staticClass:"about",style:{backgroundImage:"url("+a("3b56")+")"}},[i("div",{staticClass:"about-area"},[i("div",{staticClass:"about-area-detail"},[i("h1",[t._v("浪漫婚禮")]),i("span",{staticClass:"line"}),i("p",[t._v("日期：2018-12-8")]),i("p",[t._v("時間：12:30")]),i("p",[t._v("地點：高雄國賓大飯店")])])])])])},b=[],h={name:"About",created:function(){},mounted:function(){}},v=h,g=(a("b3d2"),a("2877")),k=Object(g["a"])(v,d,b,!1,null,"302e8354",null),w=k.exports,_=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("f7-page",{attrs:{infinite:"","infinite-distance":50,"infinite-preloader":t.showPreloader},on:{infinite:t.loadMore}},[a("div",{staticClass:"album"},[a("f7-photo-browser",{ref:"pb",attrs:{photos:t.photoList,theme:"dark",type:"standalone",exposition:!0,lazyLoading:!0,backLinkText:"Close"}}),a("f7-block-title",[t._v("婚紗藝廊")]),a("p",{staticClass:"album-description"},[t._v("熊大與麗莎的奇幻精彩婚禮歷程")]),a("f7-block",[a("f7-row",{attrs:{"no-gap":""}},t._l(t.photoList,function(e,i){return a("f7-col",{key:i,staticClass:"album-item",style:{backgroundImage:"url("+e.url+")"},attrs:{width:"33"},on:{click:function(e){t.openPhotoBrowser(i)}}})}),1)],1)],1)])},A=[],C={name:"Album",data:function(){return{photoList:[{url:a("b10b"),caption:"Picture 1"},{url:a("44ae"),caption:"Picture 2"},{url:a("0fcd"),caption:"Picture 3"},{url:a("d914"),caption:"Picture 4"},{url:a("6b25"),caption:"Picture 5"},{url:a("eef1"),caption:"Picture 6"},{url:a("b10b"),caption:"Picture 7"},{url:a("44ae"),caption:"Picture 8"},{url:a("0fcd"),caption:"Picture 9"},{url:a("d914"),caption:"Picture 10"},{url:a("6b25"),caption:"Picture 11"},{url:a("eef1"),caption:"Picture 12"},{url:a("b10b"),caption:"Picture 13"},{url:a("44ae"),caption:"Picture 14"},{url:a("0fcd"),caption:"Picture 15"}],allowInfinite:!0,showPreloader:!1}},methods:{openPhotoBrowser:function(t){this.$refs.pb.open(t)},loadMore:function(){var t=this,e=60,a=500;t.allowInfinite&&(t.allowInfinite=!1,t.showPreloader=!0,setTimeout(function(){t.photoList.length>=e?t.showPreloader=!1:(t.photoList=t.photoList.concat(t.photoList.slice(0,15)),t.$refs.pb.f7PhotoBrowser.params.photos=t.photoList,t.allowInfinite=!0)},a))}},created:function(){},mounted:function(){}},P=C,L=(a("d6dc"),Object(g["a"])(P,_,A,!1,null,"53861581",null)),S=L.exports,y=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("f7-page",[a("div",{staticClass:"interactive"},[a("f7-segmented",[a("f7-button",{class:{"button-active":t.isShow},on:{click:function(e){t.filterShow(!0)}}},[t._v("已顯示")]),a("f7-button",{class:{"button-active":!t.isShow},on:{click:function(e){t.filterShow(!1)}}},[t._v("已關閉")])],1),a("f7-page",{attrs:{infinite:"","infinite-distance":50,"infinite-preloader":t.showPreloader},on:{infinite:t.loadMore}},[a("transition",{attrs:{name:"fade"}},[t.listShow?a("ul",t._l(t.filterUploadPhotoList,function(e,i){return a("li",{key:i},[a("div",{staticClass:"photo",style:{backgroundImage:"url("+e.url+")"}}),a("div",{staticClass:"interactive-area"},[a("div",{staticClass:"content"},[a("h1",{domProps:{textContent:t._s(e.name)}}),a("pre",{domProps:{textContent:t._s(e.message)}})]),a("div",{staticClass:"buttons"},[a("a",{class:t.isShow?"show on":"show off",attrs:{href:"#"},on:{click:function(a){t.setOnOff(e)}}}),a("a",{staticClass:"rotate",attrs:{href:"/editphoto/"+e.id+"/"}})])])])}),0):t._e()])],1)],1)])},I=[],R={name:"Interactive",data:function(){return{uploadPhotoList:[{id:1,url:a("b10b"),name:"唯美浪漫",message:"祝福新人百年好\r\n永浴愛河~~",isShow:!0},{id:2,url:a("44ae"),name:"海上太空漫步",message:"夕陽下的海岸險得格外漂亮、美麗呢",isShow:!0},{id:3,url:a("0fcd"),name:"詭異的花籃",message:"椅子旁只有這一個花籃",isShow:!0},{id:4,url:a("d914"),name:"甜蜜蜜的一對新人",message:"浪漫到不要不要的，很羨慕呢\r\n~~~",isShow:!0},{id:5,url:a("b10b"),name:"唯美浪漫",message:"祝福新人百年好\r\n永浴愛河~~",isShow:!0},{id:6,url:a("44ae"),name:"海上太空漫步",message:"夕陽下的海岸險得格外漂亮、美麗呢",isShow:!1},{id:7,url:a("0fcd"),name:"詭異的花籃",message:"椅子旁只有這一個花籃",isShow:!0},{id:8,url:a("d914"),name:"甜蜜蜜的一對新人",message:"浪漫到不要不要的，很羨慕呢\r\n~~~",isShow:!1}],isShow:!0,listShow:!0,allowInfinite:!0,showPreloader:!1}},methods:{filterShow:function(t){var e=this,a=200;e.isShow=t,e.listShow=!1,e.allowInfinite=!1,e.uploadPhotoList=e.uploadPhotoList.slice(0,8),setTimeout(function(){e.listShow=!0,e.allowInfinite=!0,e.showPreloader=!1},a)},setOnOff:function(t){t.isShow=!this.isShow},loadMore:function(){var t=this,e=30,a=500;t.allowInfinite&&(t.allowInfinite=!1,t.showPreloader=!0,setTimeout(function(){t.uploadPhotoList.length>=e?t.showPreloader=!1:(t.uploadPhotoList=t.uploadPhotoList.concat(t.uploadPhotoList.slice(0,8)),t.allowInfinite=!0)},a))}},computed:{filterUploadPhotoList:function(){var t=this;return t.uploadPhotoList.filter(function(e){return e.isShow==t.isShow})}},created:function(){},mounted:function(){}},B=R,x=(a("9523"),Object(g["a"])(B,y,I,!1,null,"157b0f81",null)),E=x.exports,O={name:"Home",components:{About:w,Album:S,Interactive:E},created:function(){},mounted:function(){}},F=O,j=Object(g["a"])(F,p,m,!1,null,null,null),D=j.exports,T=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("f7-page",[i("f7-navbar",[i("f7-nav-left",{attrs:{"back-link":"Back"}}),i("f7-nav-title",{staticClass:"page-title"},[t._v("旋轉照片")])],1),i("f7-page",{staticClass:"edit-photo"},[i("div",{staticClass:"edit-photo-img"},[i("img",{attrs:{src:a("d914"),alt:"photo"}})]),i("div",{staticClass:"edit-photo-content"},[i("h1",[t._v("甜蜜蜜的一對新人")]),i("pre",[t._v("浪漫到不要不要的，很羨慕呢\n~~~")])])]),i("div",{staticClass:"edit-photo-bottom"},[i("a",{staticClass:"link",attrs:{href:"#"}},[i("i",{staticClass:"f7-icons"},[t._v("reload")]),i("span",[t._v("旋轉照片")])]),i("a",{staticClass:"link",attrs:{href:"#"},on:{click:function(e){t.$f7router.back()}}},[i("i",{staticClass:"f7-icons"},[t._v("check")]),i("span",[t._v("完 成")])])])],1)},M=[],J={name:"EditPhoto",data:function(){return{photoId:""}},created:function(){var t=this;t.photoId=t.$f7route.params.photoId,console.log(t.photoId)},mounted:function(){}},Y=J,q=(a("ea96"),Object(g["a"])(Y,T,M,!1,null,"e7f97606",null)),N=q.exports,U=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("f7-page",[a("f7-navbar",[a("f7-nav-left",[a("f7-link",{attrs:{"icon-if-ios":"f7:menu","icon-if-md":"material:menu","panel-open":"left"}})],1),a("f7-nav-title",[t._v("My App")]),a("f7-nav-right",[a("f7-link",{attrs:{"icon-if-ios":"f7:menu","icon-if-md":"material:menu","panel-open":"right"}})],1)],1),a("f7-toolbar",[a("f7-link",[t._v("Left Link")]),a("f7-link",[t._v("Right Link")])],1),a("f7-block",{attrs:{strong:""}},[a("p",[t._v("Here is your blank Framework7 app. Let's see what we have here.")])]),a("f7-block-title",[t._v("Navigation")]),a("f7-list",[a("f7-list-item",{attrs:{link:"/about/",title:"About"}}),a("f7-list-item",{attrs:{link:"/form/",title:"Form"}})],1),a("f7-block-title",[t._v("Modals")]),a("f7-block",{attrs:{strong:""}},[a("f7-row",[a("f7-col",{attrs:{width:"50"}},[a("f7-button",{attrs:{fill:"",raised:"","popup-open":"#popup"}},[t._v("Popup")])],1),a("f7-col",{attrs:{width:"50"}},[a("f7-button",{attrs:{fill:"",raised:"","login-screen-open":"#login-screen"}},[t._v("Login Screen")])],1)],1)],1),a("f7-block-title",[t._v("Panels")]),a("f7-block",{attrs:{strong:""}},[a("f7-row",[a("f7-col",{attrs:{width:"50"}},[a("f7-button",{attrs:{fill:"",raised:"","panel-open":"left"}},[t._v("Left Panel")])],1),a("f7-col",{attrs:{width:"50"}},[a("f7-button",{attrs:{fill:"",raised:"","panel-open":"right"}},[t._v("Right Panel")])],1)],1)],1),a("f7-list",[a("f7-list-item",{attrs:{link:"/dynamic-route/blog/45/post/125/?foo=bar#about",title:"Dynamic Route"}}),a("f7-list-item",{attrs:{link:"/load-something-that-doesnt-exist/",title:"Default Route (404)"}})],1)],1)},Z=[],G={},z=G,Q=Object(g["a"])(z,U,Z,!1,null,null,null),V=(Q.exports,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("f7-page",[a("f7-navbar",{attrs:{title:"About","back-link":"Back"}}),a("f7-block-title",[t._v("About My App")]),a("f7-block",{attrs:{strong:""}},[a("p",[t._v("Here is About page!")]),a("p",[t._v("You can go "),a("f7-link",{attrs:{back:""}},[t._v("back")]),t._v(".")],1),a("p",[t._v("Mauris posuere sit amet metus id venenatis. Ut ante dolor, tempor nec commodo rutrum, varius at sem. Nullam ac nisi non neque ornare pretium. Nulla mauris mauris, consequat et elementum sit amet, egestas sed orci. In hac habitasse platea dictumst.")]),a("p",[t._v("Fusce eros lectus, accumsan eget mi vel, iaculis tincidunt felis. Nulla tincidunt pharetra sagittis. Fusce in felis eros. Nulla sit amet aliquam lorem, et gravida ipsum. Mauris consectetur nisl non sollicitudin tristique. Praesent vitae metus ac quam rhoncus mattis vel et nisi. Aenean aliquet, felis quis dignissim iaculis, lectus quam tincidunt ligula, et venenatis turpis risus sed lorem. Morbi eu metus elit. Ut vel diam dolor.")])])],1)}),H=[],X={},K=X,W=Object(g["a"])(K,V,H,!1,null,null,null),$=W.exports,tt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("f7-page",[a("f7-navbar",{attrs:{title:"Form","back-link":"Back"}}),a("f7-block-title",[t._v("Form Example")]),a("f7-list",{attrs:{form:""}},[a("f7-list-item",[a("f7-label",[t._v("Name")]),a("f7-input",{attrs:{type:"text",placeholder:"Name"}})],1),a("f7-list-item",[a("f7-label",[t._v("E-mail")]),a("f7-input",{attrs:{type:"email",placeholder:"E-mail"}})],1),a("f7-list-item",[a("f7-label",[t._v("URL")]),a("f7-input",{attrs:{type:"url",placeholder:"URL"}})],1),a("f7-list-item",[a("f7-label",[t._v("Password")]),a("f7-input",{attrs:{type:"password",placeholder:"Password"}})],1),a("f7-list-item",[a("f7-label",[t._v("Phone")]),a("f7-input",{attrs:{type:"tel",placeholder:"Phone"}})],1),a("f7-list-item",[a("f7-label",[t._v("Gender")]),a("f7-input",{attrs:{type:"select"}},[a("option",{attrs:{selected:""}},[t._v("Male")]),a("option",[t._v("Female")])])],1),a("f7-list-item",[a("f7-label",[t._v("Birth date")]),a("f7-input",{attrs:{type:"date",placeholder:"Birth date",value:"2014-04-30"}})],1),a("f7-list-item",{attrs:{title:"Toggle"}},[a("f7-toggle",{attrs:{slot:"after"},slot:"after"})],1),a("f7-list-item",[a("f7-label",[t._v("Slider")]),a("f7-input",[a("f7-range",{attrs:{min:"0",max:"100",value:"50",step:"1",label:!0}})],1)],1),a("f7-list-item",[a("f7-label",[t._v("Textarea")]),a("f7-input",{attrs:{type:"textarea",placeholder:"Bio"}})],1),a("f7-list-item",[a("f7-label",[t._v("Resizable")]),a("f7-input",{attrs:{type:"textarea",placeholder:"Bio",resizable:""}})],1)],1),a("f7-block-title",[t._v("Checkbox group")]),a("f7-list",{attrs:{form:""}},t._l(3,function(t){return a("f7-list-item",{key:t,attrs:{checkbox:"",name:"my-checkbox",value:t,title:"Checkbox "+t}})}),1),a("f7-block-title",[t._v("Radio buttons group")]),a("f7-list",{attrs:{form:""}},t._l(3,function(t){return a("f7-list-item",{key:t,attrs:{radio:"",name:"my-radio",checked:1===t,value:t,title:"Radio "+t}})}),1),a("f7-block-title",[t._v("Buttons")]),a("f7-block",{attrs:{strong:""}},[a("f7-row",{attrs:{tag:"p"}},[a("f7-button",{staticClass:"col"},[t._v("Button")]),a("f7-button",{staticClass:"col",attrs:{fill:""}},[t._v("Fill")])],1),a("f7-row",{attrs:{tag:"p"}},[a("f7-button",{staticClass:"col",attrs:{raised:""}},[t._v("Raised")]),a("f7-button",{staticClass:"col",attrs:{raised:"",fill:""}},[t._v("Raised Fill")])],1),a("f7-row",{attrs:{tag:"p"}},[a("f7-button",{staticClass:"col",attrs:{round:""}},[t._v("Round")]),a("f7-button",{staticClass:"col",attrs:{round:"",fill:""}},[t._v("Round Fill")])],1),a("f7-row",{attrs:{tag:"p"}},[a("f7-button",{staticClass:"col",attrs:{outline:""}},[t._v("Outline")]),a("f7-button",{staticClass:"col",attrs:{round:"",outline:""}},[t._v("Outline Round")])],1),a("f7-row",{attrs:{tag:"p"}},[a("f7-button",{staticClass:"col",attrs:{small:"",outline:""}},[t._v("Small")]),a("f7-button",{staticClass:"col",attrs:{small:"",round:"",outline:""}},[t._v("Small Round")])],1),a("f7-row",{attrs:{tag:"p"}},[a("f7-button",{staticClass:"col",attrs:{small:"",fill:""}},[t._v("Small")]),a("f7-button",{staticClass:"col",attrs:{small:"",round:"",fill:""}},[t._v("Small Round")])],1),a("f7-row",{attrs:{tag:"p"}},[a("f7-button",{staticClass:"col",attrs:{big:"",raised:""}},[t._v("Big")]),a("f7-button",{staticClass:"col",attrs:{big:"",fill:"",raised:""}},[t._v("Big Fill")])],1),a("f7-row",{attrs:{tag:"p"}},[a("f7-button",{staticClass:"col",attrs:{big:"",fill:"",raised:"",color:"red"}},[t._v("Big Red")]),a("f7-button",{staticClass:"col",attrs:{big:"",fill:"",raised:"",color:"green"}},[t._v("Big Green")])],1)],1)],1)},et=[],at={},it=at,ot=Object(g["a"])(it,tt,et,!1,null,null,null),nt=ot.exports,lt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("f7-page",[a("f7-navbar",{attrs:{title:"Dynamic Route","back-link":"Back"}}),a("f7-block",{attrs:{strong:""}},[a("ul",[a("li",[a("b",[t._v("Url:")]),t._v(" "+t._s(t.$f7route.url))]),a("li",[a("b",[t._v("Path:")]),t._v(" "+t._s(t.$f7route.path))]),a("li",[a("b",[t._v("Hash:")]),t._v(" "+t._s(t.$f7route.hash))]),a("li",[a("b",[t._v("Params:")]),a("ul",t._l(t.$f7route.params,function(e,i){return a("li",{key:i},[a("b",[t._v(t._s(i)+":")]),t._v(" "+t._s(e))])}),0)]),a("li",[a("b",[t._v("Query:")]),a("ul",t._l(t.$f7route.query,function(e,i){return a("li",{key:i},[a("b",[t._v(t._s(i)+":")]),t._v(" "+t._s(e))])}),0)]),a("li",[a("b",[t._v("Route:")]),t._v(" "+t._s(t.$f7route.route))])])]),a("f7-block",{attrs:{strong:""}},[a("f7-link",{on:{click:function(e){t.$f7router.back()}}},[t._v("Go back via Router API")])],1)],1)},st=[],rt={},ct=rt,ut=Object(g["a"])(ct,lt,st,!1,null,null,null),ft=ut.exports,pt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("f7-page",[a("f7-navbar",{attrs:{title:"Not found","back-link":"Back"}}),a("f7-block",{attrs:{strong:""}},[a("p",[t._v("Sorry")]),a("p",[t._v("Requested content not found.")])])],1)},mt=[],dt={},bt=dt,ht=Object(g["a"])(bt,pt,mt,!1,null,null,null),vt=ht.exports,gt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("f7-page",[a("f7-navbar",{attrs:{title:"Left Panel"}}),a("f7-block",{attrs:{strong:""}},[a("p",[t._v("Left panel content goes here")])]),a("f7-block-title",[t._v("Load page in panel")]),a("f7-list",[a("f7-list-item",{attrs:{link:"/about/",title:"About"}}),a("f7-list-item",{attrs:{link:"/form/",title:"Form"}})],1),a("f7-block-title",[t._v("Load page in main view")]),a("f7-list",[a("f7-list-item",{attrs:{link:"/about/",title:"About",view:"#main-view","panel-close":""}}),a("f7-list-item",{attrs:{link:"/form/",title:"Form",view:"#main-view","panel-close":""}})],1)],1)},kt=[],wt={},_t=wt,At=Object(g["a"])(_t,gt,kt,!1,null,null,null),Ct=At.exports,Pt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("f7-page",[a("f7-navbar",{attrs:{title:"Right Panel"}}),a("f7-block",{attrs:{strong:""}},[a("p",[t._v("Right panel content goes here")])]),a("f7-block-title",[t._v("Load page in panel")]),a("f7-list",[a("f7-list-item",{attrs:{link:"/about/",title:"About"}}),a("f7-list-item",{attrs:{link:"/form/",title:"Form"}})],1),a("f7-block-title",[t._v("Load page in main view")]),a("f7-list",[a("f7-list-item",{attrs:{link:"/about/",title:"About",view:"#main-view","panel-close":""}}),a("f7-list-item",{attrs:{link:"/form/",title:"Form",view:"#main-view","panel-close":""}})],1)],1)},Lt=[],St={},yt=St,It=Object(g["a"])(yt,Pt,Lt,!1,null,null,null),Rt=It.exports,Bt=[{path:"/",component:D},{path:"/editphoto/:photoId/",component:N},{path:"/panel-left/",component:Ct},{path:"/panel-right/",component:Rt},{path:"/about/",component:$},{path:"/form/",component:nt},{path:"/dynamic-route/blog/:blogId/post/:postId/",component:ft},{path:"(.*)",component:vt}],xt=[{id:"slide1",picture:'<div class="tutorialicon"></div>'},{id:"slide2",picture:'<div class="tutorialicon"></div>'},{id:"slide3",picture:'<div class="tutorialicon"></div>',text:'<a href="#" class="tutorial-close-btn close-welcomescreen">Enter</a>'}],Et={bgcolor:"#222",fontcolor:"#5AC7C7",closeButton:!1,open:!0},Ot={name:"App",data:function(){return{f7params:{id:"io.framework7.me2we",name:"Framework7",theme:"ios",routes:Bt,welcomescreen:{slides:xt,options:Et}}}},created:function(){},mounted:function(){}},Ft=Ot,jt=Object(g["a"])(Ft,u,f,!1,null,null,null),Dt=jt.exports;i["a"].config.productionTip=!1,l["a"].use(s["a"]),l["a"].use(c.a),new i["a"]({store:n,render:function(t){return t(Dt)}}).$mount("#app")},"6b25":function(t,e,a){t.exports=a.p+"img/photo5.3b079ab5.jpg"},9523:function(t,e,a){"use strict";var i=a("0550"),o=a.n(i);o.a},"9e46":function(t,e,a){},a7ef:function(t,e,a){},b10b:function(t,e,a){t.exports=a.p+"img/photo1.747efb12.jpg"},b3d2:function(t,e,a){"use strict";var i=a("355c"),o=a.n(i);o.a},bfe6:function(t,e,a){},cf05:function(t,e){t.exports="data:image/png;base64,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"},d6dc:function(t,e,a){"use strict";var i=a("bfe6"),o=a.n(i);o.a},d914:function(t,e,a){t.exports=a.p+"img/photo4.c35f96c5.jpg"},ea96:function(t,e,a){"use strict";var i=a("a7ef"),o=a.n(i);o.a},eef1:function(t,e,a){t.exports=a.p+"img/photo6.d9ef9339.jpg"}});
//# sourceMappingURL=index.60a7ae80.js.map