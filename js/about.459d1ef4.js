(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{"188f":function(t,e,a){},"2d3b":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",[a("TopBar",{attrs:{currentTop:"dianying"}})],1),a("div",{staticStyle:{padding:"104px 24px 0","min-height":"600px"}},[a("VideoList",{attrs:{videos:t.listData}})],1),a("div",{staticStyle:{"text-align":"center",padding:"20px 0 40px 0"}},[a("el-pagination",{attrs:{background:"","current-page":t.current,"page-size":24,total:t.total},on:{"current-change":t.handleCurrentChange}})],1),a("div",[a("BottomContent")],1)])},i=[],r=a("ade3"),o=a("d4ec"),c=a("bee2"),l=a("262e"),s=a("2caf"),d=(a("d3b7"),a("25f0"),a("b0c0"),a("9ab4")),u=a("b043"),p=a("64b8"),g=a("0d52"),h=a("6a54"),v=a("94d6"),f=a("a2c5"),b=a.n(f),m=a("5f72"),y=a("1b40"),x=function(t){Object(l["a"])(a,t);var e=Object(s["a"])(a);function a(){var t;return Object(o["a"])(this,a),t=e.apply(this,arguments),t.listData=[],t.current=1,t.total=0,t.keyword="",t}return Object(c["a"])(a,[{key:"created",value:function(){var t,e,a;console.log(this.$route.query),this.current=parseInt(null===(t=this.$route.query.page)||void 0===t?void 0:t.toString())||1,this.keyword=(null===(e=this.$route.query)||void 0===e||null===(a=e.keyword)||void 0===a?void 0:a.toString())||"",this.fetchData()}},{key:"handleCurrentChange",value:function(t){console.log("当前页: ".concat(t)),window.location.href="/web/search?page="+t+"&keyword="+this.keyword}},{key:"fetchData",value:function(){var t=b.a.enc.Utf8.parse("38383838363636363232323238383838"),e={size:24,keyword:this.keyword,current:new String(24*(this.current-1))},a=b.a.AES.encrypt(JSON.stringify(e),t,{mode:b.a.mode.ECB,padding:b.a.pad.Pkcs7}),n=this;h["a"].get(v["a"].movie_urls.movie_list,{params:{p:a.ciphertext.toString()}}).then((function(t){n.$nextTick((function(){n.total=t.data.data.total,n.listData=t.data.data.list}))})).catch((function(t){console.log(t)}))}}]),a}(y["d"]);x=Object(d["a"])([Object(y["a"])({components:Object(r["a"])({VideoList:g["a"],TopBar:u["a"],BottomContent:p["a"]},m["Pagination"].name,m["Pagination"])})],x);var O=x,k=O,j=a("2877"),S=Object(j["a"])(k,n,i,!1,null,"2edf64db",null);e["default"]=S.exports},"5f6c":function(t,e,a){"use strict";a("188f")},"8d6e":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",[a("TopBar",{attrs:{currentTop:"dianying"}})],1),a("div",{staticStyle:{padding:"104px 24px 0","min-height":"600px"}},[a("VideoList",{attrs:{videos:t.listData}})],1),a("div",{staticStyle:{"text-align":"center",padding:"20px 0 40px 0"}},[a("el-pagination",{attrs:{background:"","current-page":t.current,"page-size":24,total:t.total},on:{"current-change":t.handleCurrentChange}})],1),a("div",[a("BottomContent")],1)])},i=[],r=a("ade3"),o=a("d4ec"),c=a("bee2"),l=a("262e"),s=a("2caf"),d=(a("d3b7"),a("25f0"),a("b0c0"),a("9ab4")),u=a("b043"),p=a("64b8"),g=a("0d52"),h=a("6a54"),v=a("94d6"),f=a("a2c5"),b=a.n(f),m=a("5f72"),y=a("1b40"),x=function(t){Object(l["a"])(a,t);var e=Object(s["a"])(a);function a(){var t;return Object(o["a"])(this,a),t=e.apply(this,arguments),t.listData=[],t.current=1,t.total=0,t}return Object(c["a"])(a,[{key:"created",value:function(){console.log(this.$route.query),this.current=parseInt(this.$route.query.page.toString())||1,this.fetchData()}},{key:"handleCurrentChange",value:function(t){console.log("当前页: ".concat(t)),window.location.href="/web/dianying?page="+t}},{key:"fetchData",value:function(){var t=b.a.enc.Utf8.parse("38383838363636363232323238383838"),e={size:24,videoType:"电影",current:new String(24*(this.current-1))},a=b.a.AES.encrypt(JSON.stringify(e),t,{mode:b.a.mode.ECB,padding:b.a.pad.Pkcs7}),n=this;h["a"].get(v["a"].movie_urls.movie_list,{params:{p:a.ciphertext.toString()}}).then((function(t){n.$nextTick((function(){n.total=t.data.data.total,n.listData=t.data.data.list}))})).catch((function(t){console.log(t)}))}}]),a}(y["d"]);x=Object(d["a"])([Object(y["a"])({components:Object(r["a"])({VideoList:g["a"],TopBar:u["a"],BottomContent:p["a"]},m["Pagination"].name,m["Pagination"])})],x);var O=x,k=O,j=a("2877"),S=Object(j["a"])(k,n,i,!1,null,"9fe88e16",null);e["default"]=S.exports},c84b:function(t,e,a){"use strict";a.r(e);var n,i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",[a("TopBar",{attrs:{currentTop:""}})],1),a("div",{staticStyle:{padding:"104px 24px 0","min-height":"1000px"}},[a("div",{staticStyle:{"text-align":"center","font-size":"14px","padding-bottom":"10px"}},[t._v(t._s(t.title||"")+"-"+t._s(t.episode||""))]),a("div",{staticStyle:{width:"100%",height:"480px"},attrs:{id:"vs"}}),a("div",[a("el-tabs",{model:{value:t.activeName,callback:function(e){t.activeName=e},expression:"activeName"}},[a("el-tab-pane",{attrs:{label:"简介",name:"first"}},[a("el-form",{ref:"form",attrs:{"label-width":"80px"}},[a("el-form-item",{attrs:{label:"名称"}},[t._v(" "+t._s(t.group.name||"")+" ")]),a("el-form-item",{attrs:{label:"导演"}},[t._v(" "+t._s(t.group.director||"")+" ")]),a("el-form-item",{attrs:{label:"演员"}},[t._v(" "+t._s(t.group.actor||"")+" ")]),a("el-form-item",{attrs:{label:"描述"}},[t._v(" "+t._s(t.group.remark||"")+" ")])],1)],1),t._l(t.playList,(function(e,n){return a("el-tab-pane",{key:"tab-"+(n+1),attrs:{label:"源"+(n+1),name:"tab-"+(n+1)}},[a("el-row",{staticStyle:{"padding-top":"10px"},attrs:{gutter:20}},t._l(e,(function(e,i){return a("el-col",{key:"tab"+n+"-col-"+i,attrs:{span:3}},[a("div",{class:t.url==e.url?"detailBtnActive":"detailBtn",on:{click:function(a){return t.handlePlayBtnClick(e.url,e.name)}}},[t._v(t._s(e.name))])])})),1)],1)}))],2)],1)]),a("div",[a("BottomContent")],1)])},r=[],o=a("ade3"),c=a("d4ec"),l=a("bee2"),s=a("262e"),d=a("2caf"),u=(a("d3b7"),a("25f0"),a("b0c0"),a("9ab4")),p=a("b043"),g=a("64b8"),h=a("0d52"),v=a("6a54"),f=a("94d6"),b=a("a2c5"),m=a.n(b),y=a("96ff"),x=a.n(y),O=a("5f72"),k=a("1b40"),j=function(t){Object(s["a"])(a,t);var e=Object(d["a"])(a);function a(){var t;return Object(c["a"])(this,a),t=e.apply(this,arguments),t.id="",t.title="",t.activeName="first",t.episode="",t.url="",t.playList=[],t.group={name:"",actor:"",director:"",remark:""},t}return Object(l["a"])(a,[{key:"created",value:function(){var t,e,a,n;this.id=(null===(t=this.$route.query)||void 0===t||null===(e=t.id)||void 0===e?void 0:e.toString())||"1",this.title=null===(a=this.$route.query)||void 0===a||null===(n=a.name)||void 0===n?void 0:n.toString(),this.fetchData()}},{key:"handlePlayBtnClick",value:function(t,e){if(this.url=t,this.episode=e,this.vplayer)this.vplayer.src=t;else{var a=new x.a({id:"vs",url:t,width:"100%",height:"480px",autoplay:!0,controlsList:["volume","playbackRate"],playbackRate:[.5,.75,1,1.5,2]});this.vplayer=a}}},{key:"fetchData",value:function(){var t=m.a.enc.Utf8.parse("38383838363636363232323238383838"),e={groupId:this.id},a=m.a.AES.encrypt(JSON.stringify(e),t,{mode:m.a.mode.ECB,padding:m.a.pad.Pkcs7}),n=this;v["a"].get(f["a"].movie_urls.movie_detail,{params:{p:a.ciphertext.toString()}}).then((function(t){var e=t.data.data;n.$nextTick((function(){n.group=e.group,n.playList=e.videos.list;var t=new x.a({id:"vs",url:e.videos.list[0][0].url,width:"100%",height:"480px",autoplay:!0,controlsList:["volume","playbackRate"],playbackRate:[.5,.75,1,1.5,2]});n.vplayer=t,n.url=e.videos.list[0][0].url,n.episode=e.videos.list[0][0].name}))})).catch((function(t){console.log(t)}))}}]),a}(k["d"]);j=Object(u["a"])([Object(k["a"])({components:(n={VideoList:h["a"],TopBar:p["a"],BottomContent:g["a"]},Object(o["a"])(n,O["Tabs"].name,O["Tabs"]),Object(o["a"])(n,O["TabPane"].name,O["TabPane"]),Object(o["a"])(n,O["Form"].name,O["Form"]),Object(o["a"])(n,O["FormItem"].name,O["FormItem"]),Object(o["a"])(n,O["Row"].name,O["Row"]),Object(o["a"])(n,O["Col"].name,O["Col"]),n)})],j);var S=j,w=S,C=(a("5f6c"),a("2877")),_=Object(C["a"])(w,i,r,!1,null,null,null);e["default"]=_.exports},e00b:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",[a("TopBar",{attrs:{currentTop:"dianshi"}})],1),a("div",{staticStyle:{padding:"104px 24px 0","min-height":"600px"}},[a("VideoList",{attrs:{videos:t.listData}})],1),a("div",{staticStyle:{"text-align":"center",padding:"20px 0 40px 0"}},[a("el-pagination",{attrs:{background:"","current-page":t.current,"page-size":24,total:t.total},on:{"current-change":t.handleCurrentChange}})],1),a("div",[a("BottomContent")],1)])},i=[],r=a("ade3"),o=a("d4ec"),c=a("bee2"),l=a("262e"),s=a("2caf"),d=(a("d3b7"),a("25f0"),a("b0c0"),a("9ab4")),u=a("b043"),p=a("64b8"),g=a("0d52"),h=a("6a54"),v=a("94d6"),f=a("a2c5"),b=a.n(f),m=a("5f72"),y=a("1b40"),x=function(t){Object(l["a"])(a,t);var e=Object(s["a"])(a);function a(){var t;return Object(o["a"])(this,a),t=e.apply(this,arguments),t.listData=[],t.current=1,t.total=0,t}return Object(c["a"])(a,[{key:"created",value:function(){console.log(this.$route.query),this.current=parseInt(this.$route.query.page.toString())||1,this.fetchData()}},{key:"handleCurrentChange",value:function(t){console.log("当前页: ".concat(t)),window.location.href="/web/dianshi?page="+t}},{key:"fetchData",value:function(){var t=b.a.enc.Utf8.parse("38383838363636363232323238383838"),e={size:24,videoType:"电视",current:new String(24*(this.current-1))},a=b.a.AES.encrypt(JSON.stringify(e),t,{mode:b.a.mode.ECB,padding:b.a.pad.Pkcs7}),n=this;h["a"].get(v["a"].movie_urls.movie_list,{params:{p:a.ciphertext.toString()}}).then((function(t){n.$nextTick((function(){n.total=t.data.data.total,n.listData=t.data.data.list}))})).catch((function(t){console.log(t)}))}}]),a}(y["d"]);x=Object(d["a"])([Object(y["a"])({components:Object(r["a"])({VideoList:g["a"],TopBar:u["a"],BottomContent:p["a"]},m["Pagination"].name,m["Pagination"])})],x);var O=x,k=O,j=a("2877"),S=Object(j["a"])(k,n,i,!1,null,"4667578c",null);e["default"]=S.exports},e4b0:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",[a("TopBar",{attrs:{currentTop:"dongman"}})],1),a("div",{staticStyle:{padding:"104px 24px 0","min-height":"600px"}},[a("VideoList",{attrs:{videos:t.listData}})],1),a("div",{staticStyle:{"text-align":"center",padding:"20px 0 40px 0"}},[a("el-pagination",{attrs:{background:"","current-page":t.current,"page-size":24,total:t.total},on:{"current-change":t.handleCurrentChange}})],1),a("div",[a("BottomContent")],1)])},i=[],r=a("ade3"),o=a("d4ec"),c=a("bee2"),l=a("262e"),s=a("2caf"),d=(a("d3b7"),a("25f0"),a("b0c0"),a("9ab4")),u=a("b043"),p=a("64b8"),g=a("0d52"),h=a("6a54"),v=a("94d6"),f=a("a2c5"),b=a.n(f),m=a("5f72"),y=a("1b40"),x=function(t){Object(l["a"])(a,t);var e=Object(s["a"])(a);function a(){var t;return Object(o["a"])(this,a),t=e.apply(this,arguments),t.listData=[],t.current=1,t.total=0,t}return Object(c["a"])(a,[{key:"created",value:function(){console.log(this.$route.query),this.current=parseInt(this.$route.query.page.toString())||1,this.fetchData()}},{key:"handleCurrentChange",value:function(t){console.log("当前页: ".concat(t)),window.location.href="/web/dongman?page="+t}},{key:"fetchData",value:function(){var t=b.a.enc.Utf8.parse("38383838363636363232323238383838"),e={size:24,videoType:"动漫",current:new String(24*(this.current-1))},a=b.a.AES.encrypt(JSON.stringify(e),t,{mode:b.a.mode.ECB,padding:b.a.pad.Pkcs7}),n=this;h["a"].get(v["a"].movie_urls.movie_list,{params:{p:a.ciphertext.toString()}}).then((function(t){n.$nextTick((function(){n.total=t.data.data.total,n.listData=t.data.data.list}))})).catch((function(t){console.log(t)}))}}]),a}(y["d"]);x=Object(d["a"])([Object(y["a"])({components:Object(r["a"])({VideoList:g["a"],TopBar:u["a"],BottomContent:p["a"]},m["Pagination"].name,m["Pagination"])})],x);var O=x,k=O,j=a("2877"),S=Object(j["a"])(k,n,i,!1,null,"a1699d44",null);e["default"]=S.exports},ffef:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",[a("TopBar",{attrs:{currentTop:"zongyi"}})],1),a("div",{staticStyle:{padding:"104px 24px 0","min-height":"600px"}},[a("VideoList",{attrs:{videos:t.listData}})],1),a("div",{staticStyle:{"text-align":"center",padding:"20px 0 40px 0"}},[a("el-pagination",{attrs:{background:"","current-page":t.current,"page-size":24,total:t.total},on:{"current-change":t.handleCurrentChange}})],1),a("div",[a("BottomContent")],1)])},i=[],r=a("ade3"),o=a("d4ec"),c=a("bee2"),l=a("262e"),s=a("2caf"),d=(a("d3b7"),a("25f0"),a("b0c0"),a("9ab4")),u=a("b043"),p=a("64b8"),g=a("0d52"),h=a("6a54"),v=a("94d6"),f=a("a2c5"),b=a.n(f),m=a("5f72"),y=a("1b40"),x=function(t){Object(l["a"])(a,t);var e=Object(s["a"])(a);function a(){var t;return Object(o["a"])(this,a),t=e.apply(this,arguments),t.listData=[],t.current=1,t.total=0,t}return Object(c["a"])(a,[{key:"created",value:function(){console.log(this.$route.query),this.current=parseInt(this.$route.query.page.toString())||1,this.fetchData()}},{key:"handleCurrentChange",value:function(t){console.log("当前页: ".concat(t)),window.location.href="/web/zongyi?page="+t}},{key:"fetchData",value:function(){var t=b.a.enc.Utf8.parse("38383838363636363232323238383838"),e={size:24,videoType:"综艺",current:new String(24*(this.current-1))},a=b.a.AES.encrypt(JSON.stringify(e),t,{mode:b.a.mode.ECB,padding:b.a.pad.Pkcs7}),n=this;h["a"].get(v["a"].movie_urls.movie_list,{params:{p:a.ciphertext.toString()}}).then((function(t){n.$nextTick((function(){n.total=t.data.data.total,n.listData=t.data.data.list}))})).catch((function(t){console.log(t)}))}}]),a}(y["d"]);x=Object(d["a"])([Object(y["a"])({components:Object(r["a"])({VideoList:g["a"],TopBar:u["a"],BottomContent:p["a"]},m["Pagination"].name,m["Pagination"])})],x);var O=x,k=O,j=a("2877"),S=Object(j["a"])(k,n,i,!1,null,"110e7b52",null);e["default"]=S.exports}}]);
//# sourceMappingURL=about.459d1ef4.js.map