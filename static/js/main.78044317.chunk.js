(this.webpackJsonpmovie_app=this.webpackJsonpmovie_app||[]).push([[0],{19:function(e,a,t){e.exports=t(44)},42:function(e,a,t){},43:function(e,a,t){},44:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),s=t(12),i=t.n(s),c=t(2),o=t.n(c),m=t(13),l=t(14),u=t(15),v=t(18),d=t(17),p=t(16),g=t.n(p);t(42);var y=function(e){e.id;var a=e.year,t=e.title,n=e.summary,s=e.poster,i=e.genres;return r.a.createElement("div",{className:"movie"},r.a.createElement("img",{src:s,alt:t,title:t}),r.a.createElement("div",{className:"movie_data"},r.a.createElement("h3",{className:"movie_title"},t),r.a.createElement("h5",{className:"movie_year"},a),r.a.createElement("ul",{className:"genres"},i.map((function(e,a){return r.a.createElement("li",{key:a,className:"genres_genre"},e)}))),r.a.createElement("p",{className:"movie_summary"},n.slice(0,180)," ... ")))},E=(t(43),function(e){Object(v.a)(t,e);var a=Object(d.a)(t);function t(){var e;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=a.call.apply(a,[this].concat(r))).state={isLoading:!0,movies:[]},e.getMovies=Object(m.a)(o.a.mark((function a(){var t,n;return o.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,g.a.get("https://yts.mx/api/v2/list_movies.json?sort_by=rating");case 2:t=a.sent,n=t.data.data.movies,console.log(n),e.setState({movies:n,isLoading:!1});case 6:case"end":return a.stop()}}),a)}))),e}return Object(u.a)(t,[{key:"componentDidMount",value:function(){this.getMovies()}},{key:"render",value:function(){var e=this.state,a=e.isLoading,t=e.movies;return r.a.createElement("section",{className:"container"},a?r.a.createElement("div",{className:"loader"},r.a.createElement("span",{className:"loader_text"},"Loading...")):r.a.createElement("div",{className:"movies"},t.map((function(e){return r.a.createElement(y,{key:e.id,id:e.id,year:e.year,title:e.title,summary:e.summary,poster:e.medium_cover_image,genres:e.genres})}))))}}]),t}(r.a.Component));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(E,null)),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.78044317.chunk.js.map