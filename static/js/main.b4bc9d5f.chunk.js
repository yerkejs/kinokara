(this.webpackJsonpkinokara=this.webpackJsonpkinokara||[]).push([[0],{32:function(e,t,a){e.exports=a(66)},42:function(e,t,a){},50:function(e,t,a){},51:function(e,t,a){},52:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAABYgAAAWIBXyfQUwAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAOtSURBVHic7Zvfb5NVHMY/37dbt5ESmIlrAm5GhKDZBgs3eKEXDpgyp07idmfEhWUJ/wPNNkIk/gf+iIRLhrEJIV4Y74g6EozOSYS13kD2mg1D11iQrm7HC/aWZrRr5/v2/Xbb+7lqetpznud5zznvOad9hQIGJgbC/9T9OyQwaMS0Ay1sDuaB30TMRONi+MLlwcuLToE4L3rj/V0h+MrAiyoS/SOJkfevnohPwUoAvfH+LguuARFVaf7xt2Utv3rl3Su/yvFvjjfUZRtuboErv5pEU66+wwo9avxoC5oH2PewPnfSEhjUVqKFwKBlxBzQFqJIpwU8o61CkWctCm6FWxCxtBVoEwSgLUCbIABtAdoEAWgL0CYIQFuANkEA2gK02ZAB7I7s4lBLF9vD213XVeeBHt8QhA9f/oC397yFIGRyGT6+8Qm/37/1v+vcMD1AEEY6T/HOnj5kZQMbqY9wqn3IVb0bIgDHfE/bsafKotvcndzXfABrmQf45d6Uq/prOoBy5mczNp/f/NJVGzUbgCAMdwyVNG8/sIlNjpHOpl21U5MBOObffP6NouX2A5szP46RyqZct1VzAfhpHjxcBzTVNdH3Qi/RbS38PD/F93/+sO46Ho/5YXrajhYtn83YxK6PksouuJWbx5MAQhJi7HCMvTsf/8DU/dzrdN5p59PpLzCYiuqo2Pwj78yDR0Pgpeb9efMOPW3HOH1gBJHyp+5PJrzi5p0Jz2vz4FEApa7ykdZuTneuHYLfY341ngRwOzVDcuGPomVHWrsZ6RjOL18Lcbp9KfOzGZszk6NVMw8eBbBkljh34zx3M3eLlve0HX1qOGh2+0I8uw2ms2lik+MlQygcDtrdvhDpi/dXNk1XSHPjTsYPj7I7sqto+bd3vgPwfbYvhecBAOxo2MH4KzFaI63r+p6fV96hKivBcsOhGBrmoYpL4fWEoGUeqrwXqCQETfPgw2ZorRC0zYNPu8F0Ns3o9bMkFpL59xILyaovciqhKneBUoQkxL7mvQDMpBIsm2W/mi6Jr8fiS2aJW/dv+9lkWWruQMRvggC0BWgTBKAtQJsgAG0B2gQBaAvQJghAW4A2FlT4083mxFjAX9oqFJm3gGltFYpMWyJmQluFFiLmktW4GL4AJMt+evMxY89FLwpA39fvHUTMNcD9Pw83BvlHZy2AqyfiUxh5DUgoC/ODGcc8rHpkbmBiIPywPndy5WnSDiCqobAKzAHTIuaSPRe9+NPIZzmn4D8bgGmhOPBhVgAAAABJRU5ErkJggg=="},53:function(e,t,a){},55:function(e,t,a){},56:function(e,t,a){},57:function(e,t,a){},58:function(e,t,a){},59:function(e,t,a){},60:function(e,t,a){},61:function(e,t,a){},63:function(e,t,a){},64:function(e,t,a){},65:function(e,t,a){},66:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(18),c=a.n(s),o=a(14),i=a(2),l=a(12),m=a(21),u=a(7),d={trending:null,bestMovies:null,bestShows:null,myList:[]};var p=Object(l.b)({user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_TRENDING":return Object(u.a)(Object(u.a)({},e),{},{trending:t.trending});case"SET_BEST_MOVIES":return Object(u.a)(Object(u.a)({},e),{},{bestMovies:t.bestMovies});case"SET_BEST_SHOWS":return Object(u.a)(Object(u.a)({},e),{},{bestShows:t.bestShows});case"SET_LIST":return t.isAdd?Object(u.a)(Object(u.a)({},e),{},{myList:[].concat(Object(m.a)(e.myList),[t.data])}):Object(u.a)(Object(u.a)({},e),{},{myList:e.myList.filter((function(e){return e!=t.data}))});case"INIT_LIST":return Object(u.a)(Object(u.a)({},e),{},{myList:t.myList});default:return e}}}),h=a(15),v=a(3),f=a.n(v),E=a(9),g=a(10),b=a(13),N=a(17),_=a(16),y=(a(42),new function e(){var t=this;Object(g.a)(this,e),this.get=function(e){var a=t.baseUrl+e+t.defaultUrlEnd;return console.log("get",a),fetch(a).then((function(e){return e.json()})).then((function(e){return e.results})).catch((function(e){throw e}))},this.getRecommendations=function(e){var a=[];return e.forEach((function(e){var n=(void 0!==e.video?"movie":"tv")+"/"+e.id+"/recommendations?",r=t.baseUrl+n+t.defaultUrlEnd;a.push(fetch(r))})),Promise.all(a)},this.loadGenres=function(){var e=[];return["tv","movie"].forEach((function(a){var n=t.baseUrl+"genre/"+a+"/list?"+t.defaultUrlEnd;e.push(fetch(n))})),Promise.all(e)};this.baseUrl="https://api.themoviedb.org/3/",this.defaultUrlEnd="api_key=bcd3c6393606f8cd9ab1c236f6d4e0ea&language=ru-RU"}),w=a(31),S=a.n(w),A=(a(50),a(51),function(e){return r.a.createElement("div",{className:"Movie",onClick:function(){e.onMovieSelect(e.isSelected)}},e.isSelected&&r.a.createElement("div",{className:"overlay"},r.a.createElement("img",{src:a(52)})),r.a.createElement("div",{className:"hero__wrapper"},r.a.createElement("img",{className:"hero",src:"https://image.tmdb.org/t/p/w220_and_h330_face"+e.data.poster_path})),r.a.createElement("div",{className:"bottom"},r.a.createElement("label",{className:"title"},e.data.title||e.data.name)))}),O=(a(53),function(e){return r.a.createElement("div",{className:"SearchBar"},r.a.createElement("div",{className:"column1"},r.a.createElement("input",{value:e.search,placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0444\u0438\u043b\u044c\u043c",onChange:e.onInputChange}),r.a.createElement("div",{className:"list__count"},r.a.createElement("label",null,e.listCount))),r.a.createElement("div",{className:"column1"},r.a.createElement("button",{id:"option",onClick:function(){return e.onSearch(!0)}},"\u041d\u0430\u0439\u0442\u0438 \u0441\u0435\u0440\u0438\u0430\u043b"),r.a.createElement("button",{id:"option",onClick:function(){return e.onSearch()}},"\u041d\u0430\u0439\u0442\u0438 \u0444\u0438\u043b\u044c\u043c")))}),k=function(e,t){return 0!=e.filter((function(e){return e.id==t.id})).length},j=function(e){return r.a.createElement("div",{className:"SectionHorizontal",key:e.index},e.data&&e.data.map((function(t,a){return r.a.createElement(A,{list:e.myList,data:t,isSelected:k(e.myList,t),onMovieSelect:function(n){e.onMovieSelect(a,n,t)}})})))},L=function(e){Object(N.a)(a,e);var t=Object(_.a)(a);function a(e){var n;return Object(g.a)(this,a),(n=t.call(this,e)).onSearch=function(){var e=Object(E.a)(f.a.mark((function e(t){var a,r,s;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.setState({results:null}),""==(a=n.state.search).trim()){e.next=14;break}return e.prev=3,r=t?"tv":"movie",e.next=7,y.get("search/"+r+"?query="+a+"&");case 7:s=e.sent,n.setState({results:s.filter((function(e){return null!=e.poster_path}))}),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(3),n.showError(e.t0);case 14:case"end":return e.stop()}}),e,null,[[3,11]])})));return function(t){return e.apply(this,arguments)}}(),n.showError=function(e){console.log("[Home] error occured",e.message)},n.state={search:"",results:!1,loading:!1},n}return Object(b.a)(a,[{key:"render",value:function(){var e=this,t=this.state.results;return r.a.createElement("div",{className:"MovieLayout"},r.a.createElement(O,{search:this.state.search,loading:this.state.loading,onSearch:this.onSearch,listCount:this.props.myList.length,onInputChange:function(t){return e.setState({search:t.target.value})}}),!1!==t&&(null===t||t.length>0?r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"\u041d\u0430\u0439\u0434\u0435\u043d\u043e"),r.a.createElement(j,{index:1,data:t,myList:this.props.myList,onMovieSelect:this.props.onMovieSelect})):r.a.createElement("div",null,"\u041d\u0438\u0447\u0435\u0433\u043e \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u043e")),r.a.createElement("h1",null,"\u0412 \u0442\u0440\u0435\u043d\u0434\u0435"),r.a.createElement(j,{index:2,data:this.props.trending,myList:this.props.myList,onMovieSelect:this.props.onMovieSelect}),r.a.createElement("h1",null,"\u041f\u043e\u043f\u0443\u043b\u044f\u0440\u043d\u044b\u0435 \u0444\u0438\u043b\u044c\u043c\u044b"),r.a.createElement(j,{index:3,data:this.props.bestMovies,myList:this.props.myList,onMovieSelect:this.props.onMovieSelect}),r.a.createElement("h1",null,"\u041f\u043e\u043f\u0443\u043b\u044f\u0440\u043d\u044b\u0435 \u0441\u0435\u0440\u0438\u0430\u043b\u044b"),r.a.createElement(j,{index:3,data:this.props.bestShows,myList:this.props.myList,onMovieSelect:this.props.onMovieSelect}),r.a.createElement(o.b,{to:"/",className:this.props.myList.length>=1?"ready ready__active":"ready ready__disabled",onClick:Object(E.a)(f.a.mark((function t(){return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,localStorage.setItem("list",JSON.stringify(e.props.myList));case 2:case"end":return t.stop()}}),t)})))},"\u0413\u043e\u0442\u043e\u0432\u043e"))}}]),a}(r.a.Component),M=(a(55),a(56),function(e){return r.a.createElement("div",{class:"moving-mouse-holder"},r.a.createElement("div",{class:"mouse"},r.a.createElement("div",{class:"mouse-button"},"\xa0")))}),x=function(e){return r.a.createElement("div",{className:"MainScreen"},r.a.createElement("div",{className:"dark_overlay"}),r.a.createElement("img",{className:"wall",src:"https://image.tmdb.org/t/p/w1920_and_h800_multi_faces/3lBDg3i6nn5R2NKFCJ6oKyUo2j5.jpg"}),r.a.createElement("div",{className:"nav"},r.a.createElement("div",{className:"logo"},r.a.createElement("label",{className:"letter"},"K")),r.a.createElement("div",{className:"buttons"},r.a.createElement("button",{className:"nav_btn",onClick:function(){e.scrollTo("about")}},"\u041e \u041d\u0410\u0421"),r.a.createElement("button",{className:"nav_btn",onClick:function(){e.scrollTo("movies")}},"\u0424\u0418\u041b\u042c\u041c\u042b"),r.a.createElement("button",{className:"nav_btn",onClick:function(){e.scrollTo("authors")}},"\u0410\u0412\u0422\u041e\u0420\u042b"))),r.a.createElement("div",{className:"main"},r.a.createElement("label",{className:"title_top"},"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0432\u0430\u0448\u0438 \u043b\u044e\u0431\u0438\u043c\u044b\u0435"),r.a.createElement("label",{className:"title_main"},"\u0424\u0418\u041b\u042c\u041c\u042b"),r.a.createElement("button",{className:"next_btn",onClick:function(){e.scrollTo("movies")}},"\u041f\u0435\u0440\u0435\u0439\u0442\u0438"),r.a.createElement("div",{className:"mouse-wrapper"},r.a.createElement(M,null))))},B=(a(57),function(e){return r.a.createElement("div",{className:"About"},r.a.createElement("h1",null,"\u041e \u043d\u0430\u0441"),r.a.createElement("p",null,"KinoKara - \u044d\u0442\u043e \u0441\u0435\u0440\u0432\u0438\u0441, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u0441\u043e\u0441\u0442\u0430\u0432\u043b\u044f\u0435\u0442 \u0441\u043f\u0438\u0441\u043e\u043a \u0444\u0438\u043b\u044c\u043c\u043e\u0432 \u0434\u043b\u044f \u043f\u0440\u043e\u0441\u043c\u043e\u0442\u0440\u0430 \u0430\u043d\u0430\u043b\u0438\u0437\u0438\u0440\u0443\u044f \u043f\u043e\u043d\u0440\u0430\u0432\u0448\u0438\u0435\u0441\u044f \u0432\u0430\u043c \u0444\u0438\u043b\u044c\u043c\u044b. \u0412\u0430\u043c \u043d\u0443\u0436\u043d\u043e \u0432\u044b\u0431\u0440\u0430\u0442\u044c \u0444\u0438\u043b\u044c\u043c\u044b \u043b\u0438\u0431\u043e \u0441\u0435\u0440\u0438\u0430\u043b\u044b \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0432\u044b \u0443\u0436\u0435 \u0441\u043c\u043e\u0442\u0440\u0435\u043b\u0438 \u0438 \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0432\u0430\u043c \u043e\u0447\u0435\u043d\u044c \u043f\u043e\u043d\u0440\u0430\u0432\u0438\u043b\u0438\u0441\u044c. \u0417\u0430\u0442\u0435\u043c \u0441\u0438\u0441\u0442\u0435\u043c\u0430 \u043f\u043e\u0434\u0431\u0438\u0440\u0430\u0435\u0442 \u043f\u0435\u0440\u0441\u043e\u043d\u0430\u043b\u0438\u0437\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u0439 \u0441\u043f\u0438\u0441\u043e\u043a \u0444\u0438\u043b\u044c\u043c\u043e\u0432 \u0438 \u0441\u0435\u0440\u0438\u0430\u043b\u043e\u0432 \u0438\u0437 \u043d\u0430\u0448\u0435\u0439 \u0431\u0430\u0437\u044b."))}),T=(a(58),function(e){return r.a.createElement("div",{className:"person"},r.a.createElement("img",{className:"person__photo",src:e.img}),r.a.createElement("div",{className:"info"},r.a.createElement("label",{className:"person__name"},e.name),r.a.createElement("a",{target:"_blank",className:"person__link",href:e.insta},"Instagram")))}),I=function(e){return r.a.createElement("div",{className:"Footer"},r.a.createElement("label",{className:"footer__name"},"KinoKara"),r.a.createElement("div",{className:"authors"},r.a.createElement("label",{className:"authors__name"},"\u0410\u0432\u0442\u043e\u0440\u044b \u043f\u0440\u043e\u0435\u043a\u0442\u0430"),r.a.createElement("div",{className:"content"},r.a.createElement(T,{img:"https://instagram.ftse3-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s640x640/84449281_125554528984219_4812661297301412849_n.jpg?_nc_ht=instagram.ftse3-1.fna.fbcdn.net&_nc_cat=107&_nc_ohc=9W5_eT6WHrAAX-EybKE&oh=8e2c3efda2aa898ea23d6c8704c20f68&oe=5F25ECF1",name:"Yelzhan Yerkebulan",insta:"https://instagram.com/yerkejs"}),r.a.createElement(T,{img:"https://sun9-17.userapi.com/c851036/v851036372/1c5b99/L164-8aoK_k.jpg",name:"Bekbolat Azamat",insta:"https://instagram.com/drop_west"}))))},C=function(e){Object(N.a)(a,e);var t=Object(_.a)(a);function a(){var e;Object(g.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).loadTrending=Object(E.a)(f.a.mark((function t(){var a;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,y.get("trending/all/day?");case 3:a=t.sent,e.props.dispatch({type:"SET_TRENDING",trending:a}),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),e.showError(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])}))),e.loadBestMovies=Object(E.a)(f.a.mark((function t(){var a;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,y.get("movie/top_rated?");case 3:a=t.sent,console.log("movies",a),e.props.dispatch({type:"SET_BEST_MOVIES",bestMovies:a}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),e.showError(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])}))),e.loadBestShows=Object(E.a)(f.a.mark((function t(){var a;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,y.get("tv/top_rated?");case 3:a=t.sent,console.log("shows",a),e.props.dispatch({type:"SET_BEST_SHOWS",bestShows:a}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),e.showError(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])}))),e.showError=function(e){console.log("[Home] error occured",e.message)},e.scrollToElement=function(t){var a={about:e.About,movies:e.Movies,authors:e.Authors};S()(a[t],{offset:0,align:"top",duration:1e3})},e}return Object(b.a)(a,[{key:"componentWillMount",value:function(){this.props.dispatch({type:"INIT_LIST",myList:[]})}},{key:"componentDidMount",value:function(){var e=this.props,t=e.trending,a=e.bestMovies,n=e.bestShows;null===t&&this.loadTrending(),null===a&&this.loadBestMovies(),null===n&&this.loadBestShows()}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"Home"},r.a.createElement(x,{scrollTo:this.scrollToElement}),r.a.createElement(L,{ref:function(t){return e.Movies=t},trending:this.props.trending,bestMovies:this.props.bestMovies,bestShows:this.props.bestShows,myList:this.props.myList,onMovieSelect:function(t,a,n){e.props.dispatch({type:"SET_LIST",data:n,isAdd:!a,index:t})}}),r.a.createElement("div",{className:"Wrapper",ref:function(t){return e.About=t}},r.a.createElement(B,null)),r.a.createElement("div",{className:"Wrapper",ref:function(t){return e.Authors=t}},r.a.createElement(I,null)))}}]),a}(r.a.Component),H=Object(h.b)((function(e){return{trending:e.user.trending,bestMovies:e.user.bestMovies,bestShows:e.user.bestShows,myList:e.user.myList}}))(C),U=(a(59),a(60),a(61),a(26)),z=(a(62),a(63),function(e){return r.a.createElement("div",{className:"Progress"},r.a.createElement(U.a,{value:e.value,text:"".concat(e.value,"%"),background:!0,styles:Object(U.b)({rotation:.25,strokeLinecap:"round",textSize:"24px",pathTransitionDuration:.5,textColor:"#fff",trailColor:"#b0d1f5",backgroundColor:"#10355e"})}))}),P=function(e){var t=e.header,a=t?"_header":"";return r.a.createElement("div",{className:"MovieView"+a+" MovieView"},r.a.createElement("img",{className:"poster"+a,src:(t?"https://image.tmdb.org/t/p/w440_and_h660_face":"https://image.tmdb.org/t/p/w220_and_h330_face")+e.poster_path}),r.a.createElement("div",{className:"details"+a+" details"},r.a.createElement("label",{className:"title"},e.name||e.title),r.a.createElement("label",{className:"subtitle"},e.first_air_date||"",r.a.createElement("span",{className:"genres"}," \u25cf "+e.genre)),r.a.createElement("div",{className:"progress__wrapper"},r.a.createElement(z,{value:Math.round(10*e.vote_average)}),r.a.createElement("label",{className:"hint"},"\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c\u0441\u043a\u0430\u044f \u043e\u0446\u0435\u043d\u043a\u0430")),e.overview&&r.a.createElement(r.a.Fragment,null,r.a.createElement("label",{className:"little__title"},"\u041e\u0431\u0437\u043e\u0440"),r.a.createElement("p",null,e.overview)),r.a.createElement("div",{className:"index"},r.a.createElement("label",null,e.index+1))))},W=function(e,t){var a="";return e.map((function(n,r){e.length-1!=r?a+=t[n]+", ":a+=t[n]})),a},F=function(e){return r.a.createElement("div",{className:"MovieList"},e.data&&e.data.map((function(t,a){return r.a.createElement(P,Object.assign({},t,{index:a,genre:W(t.genre_ids,e.genres)}))})))},R=(a(64),function(e,t){var a="";return e.map((function(n,r){e.length-1!=r?a+=t[n]+", ":a+=t[n]})),a}),D=function(e){return r.a.createElement("div",{className:"Header"},r.a.createElement("div",{className:"big_overlay"}),r.a.createElement("img",{className:"big_poster",src:"https://image.tmdb.org/t/p/w1920_and_h800_multi_faces/"+e.backdrop_path}),r.a.createElement("label",{className:"large"},"\u041d\u0430\u0448\u0438 \u0440\u0435\u043a\u043e\u043c\u0435\u043d\u0434\u0430\u0446\u0438\u0438:"),r.a.createElement("div",{className:"content"},r.a.createElement(P,Object.assign({},e,{index:0,header:!0,genre:R(e.genre_ids,e.genres)}))))},G=(a(65),function(){return r.a.createElement("div",{className:"Loading"},r.a.createElement("div",{class:"lds-ring"},r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null)))}),J=function(e,t){return 0!=e.filter((function(e){return e.id==t.id})).length},V=function(e,t){var a=e.vote_count;return a/(a+500)*e.vote_average+500/(a+500)*t},K=function(e){Object(N.a)(a,e);var t=Object(_.a)(a);function a(e){var n;return Object(g.a)(this,a),(n=t.call(this)).findRecommendations=function(){var e=Object(E.a)(f.a.mark((function e(t){var a,r;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n.setState({loading:!0}),e.next=4,y.getRecommendations(t);case 4:a=e.sent,r=[],a.map((function(e,t){e.json().then((function(e){r.push(e.results),t==a.length-1&&n.setState({data:n.normalizeArray(r)},(function(){n.loadGenres()}))}))})),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),alert(e.t0.message);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}(),n.loadGenres=Object(E.a)(f.a.mark((function e(){var t,a;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,y.loadGenres();case 3:t=e.sent,a=[],t.map((function(e,r){e.json().then((function(e){a.push.apply(a,Object(m.a)(e.genres)),r==t.length-1&&n.setState({genres:n.normalizeGenres(a),loading:!1})}))})),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),alert(e.t0.message);case 11:case"end":return e.stop()}}),e,null,[[0,8]])}))),n.normalizeGenres=function(e){var t={};return e.map((function(e,a){t[e.id]=e.name})),t},n.normalizeArray=function(e){console.log(n.props.myList);var t=0,a=[];e.forEach((function(e){e.forEach((function(e){J(a,e)||J(n.props.myList,e)||(t+=e.vote_average,a.push(e))}))}));var r=a.filter((function(e){return null!=e.poster_path})),s=t/r.length;return r.sort((function(e,t){return e.overview&&t.overview?V(e,s)<V(t,s):e.overview?-1:1})),r},n.state={loading:!1,data:[],genres:[],limit:25},n}return Object(b.a)(a,[{key:"componentWillMount",value:function(){var e=Object(E.a)(f.a.mark((function e(){var t,a;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:(t=localStorage.getItem("list"))?(a=JSON.parse(t),this.props.dispatch({type:"INIT_LIST",myList:a}),this.findRecommendations(a)):window.location.href="/list";case 2:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return this.state.loading?r.a.createElement(G,null):r.a.createElement("div",{className:"Recommendations"},r.a.createElement(D,Object.assign({},this.state.data[0],{genres:this.state.genres})),r.a.createElement("div",{className:"movies"},r.a.createElement(o.b,{className:"home_btn",to:"/list"},"\u0414\u043e\u043c\u043e\u0439"),r.a.createElement(F,{data:this.state.data,genres:this.state.genres,limit:this.state.limit,onLoadMore:function(){e.setState({limit:e.state.limit+25})}})))}}]),a}(r.a.Component),Y=Object(h.b)((function(e){return{myList:e.user.myList}}))(K),Q=Object(l.c)(p);var q=function(){return r.a.createElement(h.a,{store:Q},r.a.createElement(o.a,null,r.a.createElement(i.c,null,r.a.createElement(i.a,{exact:!0,path:"/",component:Y}),r.a.createElement(i.a,{exact:!0,path:"/list",component:H}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(q,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[32,1,2]]]);
//# sourceMappingURL=main.b4bc9d5f.chunk.js.map