(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{1276:function(t,e,a){"use strict";var n=a("d784"),i=a("44e7"),r=a("825a"),o=a("1d80"),c=a("4840"),l=a("8aa5"),s=a("50c4"),u=a("14c3"),d=a("9263"),p=a("d039"),f=[].push,g=Math.min,h=4294967295,v=!p((function(){return!RegExp(h,"y")}));n("split",2,(function(t,e,a){var n;return n="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,a){var n=String(o(this)),r=void 0===a?h:a>>>0;if(0===r)return[];if(void 0===t)return[n];if(!i(t))return e.call(n,t,r);var c,l,s,u=[],p=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),g=0,v=new RegExp(t.source,p+"g");while(c=d.call(v,n)){if(l=v.lastIndex,l>g&&(u.push(n.slice(g,c.index)),c.length>1&&c.index<n.length&&f.apply(u,c.slice(1)),s=c[0].length,g=l,u.length>=r))break;v.lastIndex===c.index&&v.lastIndex++}return g===n.length?!s&&v.test("")||u.push(""):u.push(n.slice(g)),u.length>r?u.slice(0,r):u}:"0".split(void 0,0).length?function(t,a){return void 0===t&&0===a?[]:e.call(this,t,a)}:e,[function(e,a){var i=o(this),r=void 0==e?void 0:e[t];return void 0!==r?r.call(e,i,a):n.call(String(i),e,a)},function(t,i){var o=a(n,t,this,i,n!==e);if(o.done)return o.value;var d=r(t),p=String(this),f=c(d,RegExp),b=d.unicode,m=(d.ignoreCase?"i":"")+(d.multiline?"m":"")+(d.unicode?"u":"")+(v?"y":"g"),y=new f(v?d:"^(?:"+d.source+")",m),x=void 0===i?h:i>>>0;if(0===x)return[];if(0===p.length)return null===u(y,p)?[p]:[];var O=0,k=0,w=[];while(k<p.length){y.lastIndex=v?k:0;var S,j=u(y,v?p:p.slice(k));if(null===j||(S=g(s(y.lastIndex+(v?0:k)),p.length))===O)k=l(p,k,b);else{if(w.push(p.slice(O,k)),w.length===x)return w;for(var E=1;E<=j.length-1;E++)if(w.push(j[E]),w.length===x)return w;k=O=S}}return w.push(p.slice(O)),w}]}),!v)},"14c3":function(t,e,a){var n=a("c6b6"),i=a("9263");t.exports=function(t,e){var a=t.exec;if("function"===typeof a){var r=a.call(t,e);if("object"!==typeof r)throw TypeError("RegExp exec method returned something other than an Object or null");return r}if("RegExp"!==n(t))throw TypeError("RegExp#exec called on incompatible receiver");return i.call(t,e)}},"188f":function(t,e,a){},"2d3b":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",[a("TopBar",{attrs:{currentTop:"dianying"}})],1),a("div",{staticStyle:{padding:"104px 24px 0","min-height":"600px"}},[a("VideoList",{attrs:{videos:t.listData}})],1),a("div",{staticStyle:{"text-align":"center",padding:"20px 0 40px 0"}},[a("el-pagination",{attrs:{background:"","current-page":t.current,"page-size":24,total:t.total},on:{"current-change":t.handleCurrentChange}})],1),a("div",[a("BottomContent")],1)])},i=[],r=a("ade3"),o=a("d4ec"),c=a("bee2"),l=a("262e"),s=a("2caf"),u=(a("d3b7"),a("25f0"),a("b0c0"),a("9ab4")),d=a("b043"),p=a("64b8"),f=a("0d52"),g=a("6a54"),h=a("94d6"),v=a("a2c5"),b=a.n(v),m=a("5f72"),y=a("1b40"),x=function(t){Object(l["a"])(a,t);var e=Object(s["a"])(a);function a(){var t;return Object(o["a"])(this,a),t=e.apply(this,arguments),t.listData=[],t.current=1,t.total=0,t.keyword="",t}return Object(c["a"])(a,[{key:"created",value:function(){var t,e,a;console.log(this.$route.query),this.current=parseInt(null===(t=this.$route.query.page)||void 0===t?void 0:t.toString())||1,this.keyword=(null===(e=this.$route.query)||void 0===e||null===(a=e.keyword)||void 0===a?void 0:a.toString())||"",this.fetchData()}},{key:"handleCurrentChange",value:function(t){console.log("当前页: ".concat(t)),window.location.href="/#/search?page="+t+"&keyword="+this.keyword}},{key:"fetchData",value:function(){var t=b.a.enc.Utf8.parse("38383838363636363232323238383838"),e={size:24,keyword:this.keyword,current:new String(24*(this.current-1))},a=b.a.AES.encrypt(JSON.stringify(e),t,{mode:b.a.mode.ECB,padding:b.a.pad.Pkcs7}),n=this;g["a"].get(h["a"].movie_urls.movie_list,{params:{p:a.ciphertext.toString()}}).then((function(t){n.$nextTick((function(){n.total=t.data.data.total,n.listData=t.data.data.list}))})).catch((function(t){console.log(t)}))}}]),a}(y["d"]);x=Object(u["a"])([Object(y["a"])({components:Object(r["a"])({VideoList:f["a"],TopBar:d["a"],BottomContent:p["a"]},m["Pagination"].name,m["Pagination"])})],x);var O=x,k=O,w=a("2877"),S=Object(w["a"])(k,n,i,!1,null,"f0e5cda8",null);e["default"]=S.exports},"44e7":function(t,e,a){var n=a("861d"),i=a("c6b6"),r=a("b622"),o=r("match");t.exports=function(t){var e;return n(t)&&(void 0!==(e=t[o])?!!e:"RegExp"==i(t))}},"5f6c":function(t,e,a){"use strict";a("188f")},"8aa5":function(t,e,a){"use strict";var n=a("6547").charAt;t.exports=function(t,e,a){return e+(a?n(t,e).length:1)}},"8d6e":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",[a("TopBar",{attrs:{currentTop:"dianying"}})],1),a("div",{staticStyle:{padding:"104px 24px 0","min-height":"600px"}},[a("VideoList",{attrs:{videos:t.listData}})],1),a("div",{staticStyle:{"text-align":"center",padding:"20px 0 40px 0"}},[a("el-pagination",{attrs:{background:"","current-page":t.current,"page-size":24,total:t.total},on:{"current-change":t.handleCurrentChange}})],1),a("div",[a("BottomContent")],1)])},i=[],r=a("ade3"),o=a("d4ec"),c=a("bee2"),l=a("262e"),s=a("2caf"),u=(a("d3b7"),a("25f0"),a("b0c0"),a("9ab4")),d=a("b043"),p=a("64b8"),f=a("0d52"),g=a("6a54"),h=a("94d6"),v=a("a2c5"),b=a.n(v),m=a("5f72"),y=a("1b40"),x=function(t){Object(l["a"])(a,t);var e=Object(s["a"])(a);function a(){var t;return Object(o["a"])(this,a),t=e.apply(this,arguments),t.listData=[],t.current=1,t.total=0,t}return Object(c["a"])(a,[{key:"created",value:function(){console.log(this.$route.query),this.current=parseInt(this.$route.query.page.toString())||1,this.fetchData()}},{key:"handleCurrentChange",value:function(t){console.log("当前页: ".concat(t)),window.location.href="/#/dianying?page="+t}},{key:"fetchData",value:function(){var t=b.a.enc.Utf8.parse("38383838363636363232323238383838"),e={size:24,videoType:"电影",current:new String(24*(this.current-1))},a=b.a.AES.encrypt(JSON.stringify(e),t,{mode:b.a.mode.ECB,padding:b.a.pad.Pkcs7}),n=this;g["a"].get(h["a"].movie_urls.movie_list,{params:{p:a.ciphertext.toString()}}).then((function(t){n.$nextTick((function(){n.total=t.data.data.total,n.listData=t.data.data.list}))})).catch((function(t){console.log(t)}))}}]),a}(y["d"]);x=Object(u["a"])([Object(y["a"])({components:Object(r["a"])({VideoList:f["a"],TopBar:d["a"],BottomContent:p["a"]},m["Pagination"].name,m["Pagination"])})],x);var O=x,k=O,w=a("2877"),S=Object(w["a"])(k,n,i,!1,null,"a1483178",null);e["default"]=S.exports},9263:function(t,e,a){"use strict";var n=a("ad6d"),i=a("9f7f"),r=RegExp.prototype.exec,o=String.prototype.replace,c=r,l=function(){var t=/a/,e=/b*/g;return r.call(t,"a"),r.call(e,"a"),0!==t.lastIndex||0!==e.lastIndex}(),s=i.UNSUPPORTED_Y||i.BROKEN_CARET,u=void 0!==/()??/.exec("")[1],d=l||u||s;d&&(c=function(t){var e,a,i,c,d=this,p=s&&d.sticky,f=n.call(d),g=d.source,h=0,v=t;return p&&(f=f.replace("y",""),-1===f.indexOf("g")&&(f+="g"),v=String(t).slice(d.lastIndex),d.lastIndex>0&&(!d.multiline||d.multiline&&"\n"!==t[d.lastIndex-1])&&(g="(?: "+g+")",v=" "+v,h++),a=new RegExp("^(?:"+g+")",f)),u&&(a=new RegExp("^"+g+"$(?!\\s)",f)),l&&(e=d.lastIndex),i=r.call(p?a:d,v),p?i?(i.input=i.input.slice(h),i[0]=i[0].slice(h),i.index=d.lastIndex,d.lastIndex+=i[0].length):d.lastIndex=0:l&&i&&(d.lastIndex=d.global?i.index+i[0].length:e),u&&i&&i.length>1&&o.call(i[0],a,(function(){for(c=1;c<arguments.length-2;c++)void 0===arguments[c]&&(i[c]=void 0)})),i}),t.exports=c},"9f7f":function(t,e,a){"use strict";var n=a("d039");function i(t,e){return RegExp(t,e)}e.UNSUPPORTED_Y=n((function(){var t=i("a","y");return t.lastIndex=2,null!=t.exec("abcd")})),e.BROKEN_CARET=n((function(){var t=i("^r","gy");return t.lastIndex=2,null!=t.exec("str")}))},ac1f:function(t,e,a){"use strict";var n=a("23e7"),i=a("9263");n({target:"RegExp",proto:!0,forced:/./.exec!==i},{exec:i})},c84b:function(t,e,a){"use strict";a.r(e);var n,i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",[a("TopBar",{attrs:{currentTop:""}})],1),a("div",{staticStyle:{padding:"104px 24px 0","min-height":"1000px"}},[a("div",{staticStyle:{"text-align":"center","font-size":"14px","padding-bottom":"10px"}},[t._v(t._s(t.title||"")+"-"+t._s(t.episode||""))]),t.framgeFlag?a("iframe",{attrs:{width:"100%",height:"480px",src:t.url,frameborder:"0",border:"0",marginwidth:"0",marginheight:"0",scrolling:"no",allowfullscreen:"allowfullscreen",mozallowfullscreen:"mozallowfullscreen",msallowfullscreen:"msallowfullscreen",oallowfullscreen:"oallowfullscreen",webkitallowfullscreen:"webkitallowfullscreen"}}):a("div",{staticStyle:{width:"100%",height:"480px"},attrs:{id:"vs"}}),a("div",[a("el-tabs",{model:{value:t.activeName,callback:function(e){t.activeName=e},expression:"activeName"}},[a("el-tab-pane",{attrs:{label:"简介",name:"first"}},[a("el-form",{ref:"form",attrs:{"label-width":"80px"}},[a("el-form-item",{attrs:{label:"名称"}},[t._v(" "+t._s(t.group.name||"")+" ")]),a("el-form-item",{attrs:{label:"导演"}},[t._v(" "+t._s(t.group.director||"")+" ")]),a("el-form-item",{attrs:{label:"演员"}},[t._v(" "+t._s(t.group.actor||"")+" ")]),a("el-form-item",{attrs:{label:"描述"}},[t._v(" "+t._s(t.group.remark||"")+" ")])],1)],1),t._l(t.playList,(function(e,n){return a("el-tab-pane",{key:"tab-"+(n+1),attrs:{label:"源"+(n+1),name:"tab-"+(n+1)}},[a("el-row",{staticStyle:{"padding-top":"10px"},attrs:{gutter:20}},t._l(e,(function(e,i){return a("el-col",{key:"tab"+n+"-col-"+i,attrs:{span:3}},[a("div",{class:t.url==e.url?"detailBtnActive":"detailBtn",on:{click:function(a){return t.handlePlayBtnClick(e.url,e.name)}}},[t._v(t._s(e.name))])])})),1)],1)}))],2)],1)]),a("div",[a("BottomContent")],1)])},r=[],o=a("ade3"),c=a("d4ec"),l=a("bee2"),s=a("262e"),u=a("2caf"),d=(a("d3b7"),a("25f0"),a("b0c0"),a("1276"),a("ac1f"),a("9ab4")),p=a("b043"),f=a("64b8"),g=a("0d52"),h=a("6a54"),v=a("94d6"),b=a("a2c5"),m=a.n(b),y=a("96ff"),x=a.n(y),O=a("5f72"),k=a("1b40"),w=function(t){Object(s["a"])(a,t);var e=Object(u["a"])(a);function a(){var t;return Object(c["a"])(this,a),t=e.apply(this,arguments),t.id="",t.title="",t.activeName="first",t.episode="",t.url="",t.playList=[],t.group={name:"",actor:"",director:"",remark:""},t.framgeFlag=!1,t}return Object(l["a"])(a,[{key:"created",value:function(){var t,e,a,n;this.id=(null===(t=this.$route.query)||void 0===t||null===(e=t.id)||void 0===e?void 0:e.toString())||"1",this.title=null===(a=this.$route.query)||void 0===a||null===(n=a.name)||void 0===n?void 0:n.toString(),this.fetchData()}},{key:"beforeDestroy",value:function(){this.vplayer&&(this.vplayer.pause(),this.vplayer.destroy())}},{key:"handlePlayBtnClick",value:function(t,e){if(this.url=t,this.episode=e,this.url.split("http").length-1>1)this.framgeFlag=!0;else if(this.framgeFlag=!1,this.vplayer)this.vplayer.src=t;else{var a=new x.a({id:"vs",url:t,width:"100%",height:"480px",autoplay:!0,controlsList:["volume","playbackRate"],playbackRate:[.5,.75,1,1.5,2]});this.vplayer=a}}},{key:"fetchData",value:function(){var t=m.a.enc.Utf8.parse("38383838363636363232323238383838"),e={groupId:this.id},a=m.a.AES.encrypt(JSON.stringify(e),t,{mode:m.a.mode.ECB,padding:m.a.pad.Pkcs7}),n=this;h["a"].get(v["a"].movie_urls.movie_detail,{params:{p:a.ciphertext.toString()}}).then((function(t){var e=t.data.data;n.$nextTick((function(){if(n.group=e.group,n.playList=e.videos.list,n.url=e.videos.list[0][0].url,n.episode=e.videos.list[0][0].name,n.url.split("http").length-1>1)n.framgeFlag=!0;else{n.framgeFlag=!1;var t=new x.a({id:"vs",url:e.videos.list[0][0].url,width:"100%",height:"480px",autoplay:!0,controlsList:["volume","playbackRate"],playbackRate:[.5,.75,1,1.5,2]});n.vplayer=t}}))})).catch((function(t){console.log(t)}))}}]),a}(k["d"]);w=Object(d["a"])([Object(k["a"])({components:(n={VideoList:g["a"],TopBar:p["a"],BottomContent:f["a"]},Object(o["a"])(n,O["Tabs"].name,O["Tabs"]),Object(o["a"])(n,O["TabPane"].name,O["TabPane"]),Object(o["a"])(n,O["Form"].name,O["Form"]),Object(o["a"])(n,O["FormItem"].name,O["FormItem"]),Object(o["a"])(n,O["Row"].name,O["Row"]),Object(o["a"])(n,O["Col"].name,O["Col"]),n)})],w);var S=w,j=S,E=(a("5f6c"),a("2877")),C=Object(E["a"])(j,i,r,!1,null,null,null);e["default"]=C.exports},d784:function(t,e,a){"use strict";a("ac1f");var n=a("6eeb"),i=a("d039"),r=a("b622"),o=a("9263"),c=a("9112"),l=r("species"),s=!i((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")})),u=function(){return"$0"==="a".replace(/./,"$0")}(),d=r("replace"),p=function(){return!!/./[d]&&""===/./[d]("a","$0")}(),f=!i((function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var a="ab".split(t);return 2!==a.length||"a"!==a[0]||"b"!==a[1]}));t.exports=function(t,e,a,d){var g=r(t),h=!i((function(){var e={};return e[g]=function(){return 7},7!=""[t](e)})),v=h&&!i((function(){var e=!1,a=/a/;return"split"===t&&(a={},a.constructor={},a.constructor[l]=function(){return a},a.flags="",a[g]=/./[g]),a.exec=function(){return e=!0,null},a[g](""),!e}));if(!h||!v||"replace"===t&&(!s||!u||p)||"split"===t&&!f){var b=/./[g],m=a(g,""[t],(function(t,e,a,n,i){return e.exec===o?h&&!i?{done:!0,value:b.call(e,a,n)}:{done:!0,value:t.call(a,e,n)}:{done:!1}}),{REPLACE_KEEPS_$0:u,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:p}),y=m[0],x=m[1];n(String.prototype,t,y),n(RegExp.prototype,g,2==e?function(t,e){return x.call(t,this,e)}:function(t){return x.call(t,this)})}d&&c(RegExp.prototype[g],"sham",!0)}},e00b:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",[a("TopBar",{attrs:{currentTop:"dianshi"}})],1),a("div",{staticStyle:{padding:"104px 24px 0","min-height":"600px"}},[a("VideoList",{attrs:{videos:t.listData}})],1),a("div",{staticStyle:{"text-align":"center",padding:"20px 0 40px 0"}},[a("el-pagination",{attrs:{background:"","current-page":t.current,"page-size":24,total:t.total},on:{"current-change":t.handleCurrentChange}})],1),a("div",[a("BottomContent")],1)])},i=[],r=a("ade3"),o=a("d4ec"),c=a("bee2"),l=a("262e"),s=a("2caf"),u=(a("d3b7"),a("25f0"),a("b0c0"),a("9ab4")),d=a("b043"),p=a("64b8"),f=a("0d52"),g=a("6a54"),h=a("94d6"),v=a("a2c5"),b=a.n(v),m=a("5f72"),y=a("1b40"),x=function(t){Object(l["a"])(a,t);var e=Object(s["a"])(a);function a(){var t;return Object(o["a"])(this,a),t=e.apply(this,arguments),t.listData=[],t.current=1,t.total=0,t}return Object(c["a"])(a,[{key:"created",value:function(){console.log(this.$route.query),this.current=parseInt(this.$route.query.page.toString())||1,this.fetchData()}},{key:"handleCurrentChange",value:function(t){console.log("当前页: ".concat(t)),window.location.href="/#/dianshi?page="+t}},{key:"fetchData",value:function(){var t=b.a.enc.Utf8.parse("38383838363636363232323238383838"),e={size:24,videoType:"电视",current:new String(24*(this.current-1))},a=b.a.AES.encrypt(JSON.stringify(e),t,{mode:b.a.mode.ECB,padding:b.a.pad.Pkcs7}),n=this;g["a"].get(h["a"].movie_urls.movie_list,{params:{p:a.ciphertext.toString()}}).then((function(t){n.$nextTick((function(){n.total=t.data.data.total,n.listData=t.data.data.list}))})).catch((function(t){console.log(t)}))}}]),a}(y["d"]);x=Object(u["a"])([Object(y["a"])({components:Object(r["a"])({VideoList:f["a"],TopBar:d["a"],BottomContent:p["a"]},m["Pagination"].name,m["Pagination"])})],x);var O=x,k=O,w=a("2877"),S=Object(w["a"])(k,n,i,!1,null,"69258d9d",null);e["default"]=S.exports},e4b0:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",[a("TopBar",{attrs:{currentTop:"dongman"}})],1),a("div",{staticStyle:{padding:"104px 24px 0","min-height":"600px"}},[a("VideoList",{attrs:{videos:t.listData}})],1),a("div",{staticStyle:{"text-align":"center",padding:"20px 0 40px 0"}},[a("el-pagination",{attrs:{background:"","current-page":t.current,"page-size":24,total:t.total},on:{"current-change":t.handleCurrentChange}})],1),a("div",[a("BottomContent")],1)])},i=[],r=a("ade3"),o=a("d4ec"),c=a("bee2"),l=a("262e"),s=a("2caf"),u=(a("d3b7"),a("25f0"),a("b0c0"),a("9ab4")),d=a("b043"),p=a("64b8"),f=a("0d52"),g=a("6a54"),h=a("94d6"),v=a("a2c5"),b=a.n(v),m=a("5f72"),y=a("1b40"),x=function(t){Object(l["a"])(a,t);var e=Object(s["a"])(a);function a(){var t;return Object(o["a"])(this,a),t=e.apply(this,arguments),t.listData=[],t.current=1,t.total=0,t}return Object(c["a"])(a,[{key:"created",value:function(){console.log(this.$route.query),this.current=parseInt(this.$route.query.page.toString())||1,this.fetchData()}},{key:"handleCurrentChange",value:function(t){console.log("当前页: ".concat(t)),window.location.href="/#/dongman?page="+t}},{key:"fetchData",value:function(){var t=b.a.enc.Utf8.parse("38383838363636363232323238383838"),e={size:24,videoType:"动漫",current:new String(24*(this.current-1))},a=b.a.AES.encrypt(JSON.stringify(e),t,{mode:b.a.mode.ECB,padding:b.a.pad.Pkcs7}),n=this;g["a"].get(h["a"].movie_urls.movie_list,{params:{p:a.ciphertext.toString()}}).then((function(t){n.$nextTick((function(){n.total=t.data.data.total,n.listData=t.data.data.list}))})).catch((function(t){console.log(t)}))}}]),a}(y["d"]);x=Object(u["a"])([Object(y["a"])({components:Object(r["a"])({VideoList:f["a"],TopBar:d["a"],BottomContent:p["a"]},m["Pagination"].name,m["Pagination"])})],x);var O=x,k=O,w=a("2877"),S=Object(w["a"])(k,n,i,!1,null,"4be04c6f",null);e["default"]=S.exports},ffef:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",[a("TopBar",{attrs:{currentTop:"zongyi"}})],1),a("div",{staticStyle:{padding:"104px 24px 0","min-height":"600px"}},[a("VideoList",{attrs:{videos:t.listData}})],1),a("div",{staticStyle:{"text-align":"center",padding:"20px 0 40px 0"}},[a("el-pagination",{attrs:{background:"","current-page":t.current,"page-size":24,total:t.total},on:{"current-change":t.handleCurrentChange}})],1),a("div",[a("BottomContent")],1)])},i=[],r=a("ade3"),o=a("d4ec"),c=a("bee2"),l=a("262e"),s=a("2caf"),u=(a("d3b7"),a("25f0"),a("b0c0"),a("9ab4")),d=a("b043"),p=a("64b8"),f=a("0d52"),g=a("6a54"),h=a("94d6"),v=a("a2c5"),b=a.n(v),m=a("5f72"),y=a("1b40"),x=function(t){Object(l["a"])(a,t);var e=Object(s["a"])(a);function a(){var t;return Object(o["a"])(this,a),t=e.apply(this,arguments),t.listData=[],t.current=1,t.total=0,t}return Object(c["a"])(a,[{key:"created",value:function(){console.log(this.$route.query),this.current=parseInt(this.$route.query.page.toString())||1,this.fetchData()}},{key:"handleCurrentChange",value:function(t){console.log("当前页: ".concat(t)),window.location.href="/#/zongyi?page="+t}},{key:"fetchData",value:function(){var t=b.a.enc.Utf8.parse("38383838363636363232323238383838"),e={size:24,videoType:"综艺",current:new String(24*(this.current-1))},a=b.a.AES.encrypt(JSON.stringify(e),t,{mode:b.a.mode.ECB,padding:b.a.pad.Pkcs7}),n=this;g["a"].get(h["a"].movie_urls.movie_list,{params:{p:a.ciphertext.toString()}}).then((function(t){n.$nextTick((function(){n.total=t.data.data.total,n.listData=t.data.data.list}))})).catch((function(t){console.log(t)}))}}]),a}(y["d"]);x=Object(u["a"])([Object(y["a"])({components:Object(r["a"])({VideoList:f["a"],TopBar:d["a"],BottomContent:p["a"]},m["Pagination"].name,m["Pagination"])})],x);var O=x,k=O,w=a("2877"),S=Object(w["a"])(k,n,i,!1,null,"ea2455b4",null);e["default"]=S.exports}}]);
//# sourceMappingURL=about.979f73d3.js.map