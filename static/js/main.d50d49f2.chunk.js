(this.webpackJsonpinstagram=this.webpackJsonpinstagram||[]).push([[0],{41:function(e,c,t){},42:function(e,c,t){},53:function(e,c,t){"use strict";t.r(c);var s=t(2),a=t(31),i=t.n(a),n=(t(41),t(42),t(9)),j=t(57),l=t(54),d=(t(26),t(18)),m=t(6),r=t(1),o=function(e){var c=Object(s.useState)(e.likes),t=Object(d.a)(c,2),a=t[0],i=t[1],n=Object(s.useState)(!0),j=Object(d.a)(n,2),l=j[0],o=j[1],b=Object(s.useState)(e.heart),h=Object(d.a)(b,2),x=h[0],O=h[1],g=function(){l&&(i(a+1),O(Object(r.jsx)(m.a,{})),document.getElementById(e.id).style.color="rgb(235,7,96)"),o(!1)};return Object(r.jsxs)("div",{className:"particular-post",children:[Object(r.jsxs)("div",{className:"heading d-flex",children:[Object(r.jsx)("img",{src:e.src,height:"45",width:"45",alt:""}),Object(r.jsxs)("div",{className:"content",children:[Object(r.jsx)("h6",{children:e.name}),Object(r.jsx)("p",{children:"Location and other"})]}),Object(r.jsx)("i",{className:"ml-auto",children:e.more})]}),Object(r.jsx)("div",{className:"mainphoto",children:Object(r.jsx)("img",{src:e.src,onDoubleClick:g,alt:""},e.id)}),Object(r.jsxs)("div",{className:"icons",children:[Object(r.jsx)("i",{id:e.id,onClick:g,children:x}),Object(r.jsx)("span",{children:a}),Object(r.jsx)("i",{children:e.comment}),Object(r.jsx)("span",{children:e.comments}),Object(r.jsx)("i",{children:e.share}),Object(r.jsx)("i",{className:"ml-auto",children:e.save})]})]},e.id)},b=function(e){return Object(r.jsx)("div",{className:"posts",id:"posts",children:Object(r.jsxs)("div",{className:"all-posts",children:[Object(r.jsx)("div",{className:"stories pt-2",children:Object(r.jsx)(j.a,{spaceBetween:0,slidesPerView:7,breakpoints:{300:{width:400,slidesPerView:4}},children:e.value.map((function(e){return Object(r.jsxs)(l.a,{className:"slide",children:[Object(r.jsx)("img",{src:e.img,className:e.classname,alt:".."}),Object(r.jsx)("h6",{children:e.name})]},e.id)}))})}),e.post.map((function(e){return Object(r.jsx)(o,{id:e.id,src:e.img,name:e.name,likes:e.likes,comments:e.comments,heart:e.heartIcon,comment:e.commentIcon,share:e.shareIcon,save:e.saveIcon,more:e.moreIcon})}))]})})},h=function(e){return Object(r.jsx)(r.Fragment,{children:Object(r.jsx)(b,{value:e.dataStorie,post:e.dataPost,idMain:e.mainId})})},x=t.p+"static/media/1.8545789f.jpg",O=t.p+"static/media/2.741e250e.jpg",g=t.p+"static/media/4.89dad70a.jpg",u=t.p+"static/media/5.c2aff6b6.jpg",v=t.p+"static/media/7.8cfde26b.jpg",p=t.p+"static/media/Janmashtami.6843c7c8.mp4",f=t.p+"static/media/Ganesha Chaturthi.c9bfdbad.mp4",N=function(){return Object(r.jsxs)("div",{className:"searchSection",children:[Object(r.jsx)("div",{class:"input-group",children:Object(r.jsx)("input",{type:"search",class:"form-control rounded",placeholder:"Search","aria-label":"Search","aria-describedby":"search-addon"})}),Object(r.jsxs)("div",{className:"wrraper-1",children:[Object(r.jsx)("div",{className:"image",children:Object(r.jsx)("img",{src:x,alt:".."})}),Object(r.jsx)("div",{className:"video",children:Object(r.jsx)("video",{autoPlay:!0,muted:!0,loop:!0,children:Object(r.jsx)("source",{src:p})})})]}),Object(r.jsxs)("div",{className:"wrraper-2",children:[Object(r.jsx)("div",{className:"image",children:Object(r.jsx)("img",{src:g,alt:".."})}),Object(r.jsx)("div",{className:"image",children:Object(r.jsx)("img",{src:u,alt:".."})})]}),Object(r.jsxs)("div",{className:"wrraper-2",children:[Object(r.jsx)("div",{className:"image",children:Object(r.jsx)("img",{src:v,alt:".."})}),Object(r.jsx)("div",{className:"image",children:Object(r.jsx)("img",{src:O,alt:".."})})]}),Object(r.jsxs)("div",{className:"wrraper-1",children:[Object(r.jsx)("div",{className:"image",children:Object(r.jsx)("img",{src:x,alt:".."})}),Object(r.jsx)("div",{className:"video",children:Object(r.jsx)("video",{autoPlay:!0,muted:!0,loop:!0,children:Object(r.jsx)("source",{src:f})})})]})]})},I=t.p+"static/media/photo-1.174672af.jpg",k=t.p+"static/media/photo-5.815f1d09.jpg",y=t.p+"static/media/photo-3.3a2529e4.jpg",w=t.p+"static/media/photo-7.5f8b50a8.jpg",S=t(12),E=t(10),P=t(8),D=function(e){var c=Object(s.useState)(e.like),t=Object(d.a)(c,2),a=t[0],i=t[1],n=Object(s.useState)(!0),j=Object(d.a)(n,2),l=j[0],o=j[1],b=Object(s.useState)(Object(r.jsx)(m.d,{})),h=Object(d.a)(b,2),x=h[0],O=h[1],g=function(){l&&(i(a+1),O(Object(r.jsx)(m.a,{})),document.getElementById(e.id).style.color="rgb(235,7,96)"),o(!1)};return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("video",{autoPlay:!0,muted:!0,loop:!0,onDoubleClick:g,children:Object(r.jsx)("source",{src:e.video})}),Object(r.jsxs)("div",{className:"overlay",keys:e.id,children:[Object(r.jsxs)("div",{className:"profile-detail",children:[Object(r.jsx)("img",{src:e.img,height:"50",width:"50",alt:".."}),Object(r.jsxs)("h6",{className:"mr-2",children:[e.name," -"]}),Object(r.jsx)("a",{href:"/",className:"",children:"Follow"})]}),Object(r.jsx)("p",{children:e.desc}),Object(r.jsxs)("div",{className:"icons d-flex flex-column",children:[Object(r.jsxs)("i",{className:"icon",children:[Object(r.jsx)("i",{id:e.id,onClick:g,children:x}),Object(r.jsx)("h6",{children:a})]}),Object(r.jsxs)("i",{children:[Object(r.jsx)(S.c,{}),Object(r.jsx)("h6",{children:e.comment})]}),Object(r.jsx)("i",{children:Object(r.jsx)(E.e,{})}),Object(r.jsx)("i",{children:Object(r.jsx)(P.f,{className:"mt-4"})})]})]})]})},C=t(56),B=t(55);t(30);C.a.use([B.a]);var L=function(e){return Object(r.jsx)("div",{className:"reels",children:Object(r.jsx)("div",{className:"container-fluid",children:Object(r.jsxs)(j.a,{spaceBetween:0,slidesPerView:1,direction:"vertical",className:"slider",children:[Object(r.jsx)(l.a,{className:"slide",children:Object(r.jsx)(D,{id:1,video:p,img:I,like:200,comment:"10",name:"harshit gajjar",desc:"I love it.. #love #gujarati #insta #india"})}),Object(r.jsx)(l.a,{className:"slide",children:Object(r.jsx)(D,{id:2,video:f,img:k,like:400,comment:"20",name:"harsh gohel",desc:"Very Nice......... #love #gujarati #insta #india"})}),Object(r.jsx)(l.a,{className:"slide",children:Object(r.jsx)(D,{id:3,video:p,img:y,like:880,comment:"45",name:"vatsal dendpara",desc:"Cool .... #love #insta #gujarati"})}),Object(r.jsx)(l.a,{className:"slide",children:Object(r.jsx)(D,{id:4,video:f,img:w,like:110,comment:"24",name:"nitant joshi",desc:".......... #ganpati #love #fav"})})]})})})};C.a.use([B.a]);var M=function(){return Object(r.jsx)("div",{className:"igtv",children:Object(r.jsx)("div",{className:"container-fluid",children:Object(r.jsxs)(j.a,{spaceBetween:0,slidesPerView:1,direction:"horizontal",className:"slider",children:[Object(r.jsx)(l.a,{className:"slide",children:Object(r.jsx)(D,{id:1,video:p,img:I,like:200,comment:"10",name:"harshit gajjar",desc:"I love it.. #love #gujarati #insta #india"})}),Object(r.jsx)(l.a,{className:"slide",children:Object(r.jsx)(D,{id:2,video:f,img:k,like:400,comment:"20",name:"harsh gohel",desc:"Very Nice......... #love #gujarati #insta #india"})}),Object(r.jsx)(l.a,{className:"slide",children:Object(r.jsx)(D,{id:3,video:p,img:y,like:880,comment:"45",name:"vatsal dendpara",desc:"Cool .... #love #insta #gujarati"})}),Object(r.jsx)(l.a,{className:"slide",children:Object(r.jsx)(D,{id:4,video:f,img:w,like:110,comment:"24",name:"nitant joshi",desc:".......... #ganpati #love #fav"})})]})})})},A=function(e){return Object(r.jsxs)("div",{className:"follow-item d-flex",children:[Object(r.jsx)("img",{src:e.img,height:"50",width:"50",alt:".."}),Object(r.jsx)("div",{className:"content ml-2",children:Object(r.jsxs)("h6",{className:"name",children:[e.name,Object(r.jsx)("p",{className:"mt-1",children:e.content})]})}),Object(r.jsx)("div",{className:"btn",children:"Follow"})]})},H=function(e){return Object(r.jsxs)("div",{className:"following-item d-flex",children:[Object(r.jsx)("img",{src:e.img,height:"50",width:"50",alt:".."}),Object(r.jsxs)("div",{className:"content ml-2",children:[Object(r.jsx)("p",{className:"one mb-4",children:e.name}),Object(r.jsx)("p",{className:"sec",children:e.content})]})]})},F=function(e){return Object(r.jsxs)("div",{className:"suggesion-item d-flex",children:[Object(r.jsx)("img",{src:e.img,height:"50",width:"50",alt:".."}),Object(r.jsxs)("div",{className:"content ml-2 mt-1",children:[Object(r.jsx)("p",{className:"one pb-1",children:e.name}),Object(r.jsx)("p",{className:"sec",children:e.nickname})]}),Object(r.jsx)("div",{className:"btn ml-auto",children:"Follow"})]})},J=function(){return Object(r.jsx)("div",{className:"activity",children:Object(r.jsxs)("div",{className:"container-fluid",children:[Object(r.jsx)("h6",{children:"Activity"}),Object(r.jsxs)("div",{className:"follow-request d-flex",children:[Object(r.jsx)("div",{className:"profiles text-light",children:"2"}),Object(r.jsxs)("div",{className:"content ml-2",children:[Object(r.jsx)("h6",{children:"Follow Request"}),Object(r.jsx)("p",{children:"Approve or ignore request"})]})]}),Object(r.jsx)("h6",{children:"Today"}),Object(r.jsx)(A,{img:I,name:"harshit gajjar",content:"who you might know,is on instagram"}),Object(r.jsx)(H,{img:y,name:"Harsh Gohel",content:"started following you."}),Object(r.jsx)("h6",{children:"This Month"}),Object(r.jsx)(A,{img:I,name:"Harshit Gajjar",content:"who you might know,is on instagram"}),Object(r.jsx)("h6",{children:"Earlier"}),Object(r.jsx)(A,{img:I,name:"Harshit Gajjar",content:"who you might know,is on instagram"}),Object(r.jsx)(A,{img:k,name:"Nitant Joshi",content:"who you might know,is on instagram"}),Object(r.jsx)(A,{img:w,name:"Vatsal Dendpara",content:"who you might know,is on instagram"}),Object(r.jsx)("h6",{children:"Suggestions for you"}),Object(r.jsx)(F,{img:I,name:"David Brooks",nickname:"David  "}),Object(r.jsx)(F,{img:y,name:"Matthew Hinkle",nickname:"Mathhew"}),Object(r.jsx)(F,{img:k,name:"Ed Morris",nickname:"Ed"}),Object(r.jsx)(F,{img:w,name:"Paul Pinnock",nickname:"Paul"})]})})},V=t(32),G=t(15),_=t(16),T=function(e){Object(s.useEffect)((function(){var e=document.getElementById("theme");"true"===localStorage.getItem("dark")?e.checked=!0:e.checked=!1}));return Object(r.jsx)("div",{className:"settings",children:Object(r.jsxs)("div",{className:"container-fluid",children:[Object(r.jsx)("h5",{children:"Settings"}),Object(r.jsxs)("div",{className:"content-1",children:[Object(r.jsxs)("h6",{children:[Object(r.jsx)("i",{children:Object(r.jsx)(P.e,{})}),"Follows and Invite Friends"]}),Object(r.jsxs)("h6",{children:[Object(r.jsx)("i",{children:Object(r.jsx)(V.a,{})}),"Notification"]}),Object(r.jsxs)("h6",{children:[Object(r.jsx)("i",{children:Object(r.jsx)(P.c,{})}),"Privacy"]}),Object(r.jsxs)("h6",{children:[Object(r.jsx)("i",{children:Object(r.jsx)(m.h,{})}),"Security"]}),Object(r.jsxs)("h6",{children:[Object(r.jsx)("i",{children:Object(r.jsx)(G.b,{})}),"Ads"]}),Object(r.jsxs)("h6",{children:[Object(r.jsx)("i",{children:Object(r.jsx)(E.a,{})}),"Account"]}),Object(r.jsxs)("h6",{children:[Object(r.jsx)("i",{children:Object(r.jsx)(S.a,{})}),"Help"]}),Object(r.jsxs)("h6",{children:[Object(r.jsx)("i",{children:Object(r.jsx)(m.f,{})}),"About"]}),Object(r.jsxs)("h6",{children:[Object(r.jsx)("i",{children:Object(r.jsx)(m.b,{})}),"Theme",Object(r.jsxs)("label",{class:"switch",children:[Object(r.jsx)("input",{type:"checkbox",id:"theme",onChange:function(){var e=document.getElementById("theme");"false"===localStorage.getItem("dark")?(e.checked="false"===localStorage.getItem("dark"),localStorage.setItem("dark","true"),document.documentElement.style.setProperty("--background_color","rgb(28,28,28)"),document.documentElement.style.setProperty("--content_div","rgb(48,48,48)"),document.documentElement.style.setProperty("--text_color","#fff")):(e.checked="true"!==localStorage.getItem("dark"),localStorage.setItem("dark","false"),document.documentElement.style.setProperty("--background_color","#fff"),document.documentElement.style.setProperty("--content_div","#f7f7f7"),document.documentElement.style.setProperty("--text_color","#000"))}}),Object(r.jsx)("span",{class:"slider round"})]})]})]}),Object(r.jsx)("h5",{children:"Logins"}),Object(r.jsxs)("div",{className:"content-2 d-flex flex-column",children:[Object(r.jsxs)("a",{href:"/",children:[Object(r.jsx)("i",{children:Object(r.jsx)(E.b,{})}),"Add account"]}),Object(r.jsxs)("a",{href:"/",children:[Object(r.jsx)("i",{children:Object(r.jsx)(_.b,{})}),"Log Out"]})]})]})})},z=(t(44),t(21)),R=t.p+"static/media/photo-2.0d1c9b74.jpg",q=function(e){var c=function(){window.screen.width<1100&&(document.getElementById(e.mainId).style.marginLeft="-100%")};return Object(r.jsx)("div",{className:"sidebar",id:"sidebar",children:Object(r.jsxs)("div",{className:"container",children:[Object(r.jsx)("i",{className:"arrowLeft",onClick:c,children:Object(r.jsx)(P.a,{})}),Object(r.jsxs)("div",{className:"profile-details",children:[Object(r.jsx)("img",{src:R,height:"90",width:"90",alt:".."}),Object(r.jsxs)("div",{className:"content",children:[Object(r.jsx)("h6",{children:"Jani Dean"}),Object(r.jsx)("p",{children:"Hello,How are you?"})]}),Object(r.jsxs)("div",{className:"follows d-flex",children:[Object(r.jsxs)("div",{className:"total-post",children:[Object(r.jsx)("p",{children:"50"}),Object(r.jsx)("p",{children:"posts"})]}),Object(r.jsxs)("div",{className:"followers",children:[Object(r.jsx)("p",{children:"1k"}),Object(r.jsx)("p",{children:"followers"})]}),Object(r.jsxs)("div",{className:"following",children:[Object(r.jsx)("p",{children:"1k"}),Object(r.jsx)("p",{children:"following"})]})]})]}),Object(r.jsx)("div",{className:"nav d-flex flex-column",children:e.value.map((function(e){return Object(r.jsxs)(z.b,{className:"item nav-link",to:e.path,activeClassName:"active",exact:!0,onClick:c,children:[Object(r.jsx)("i",{children:e.icon}),e.name]},e.id)}))})]})})},W=t(34),Y=function(e){return Object(r.jsxs)("div",{className:"chatBox",id:e.id,children:[Object(r.jsxs)("div",{className:"topbar d-flex",children:[Object(r.jsx)("i",{className:"leftarrow",children:Object(r.jsx)(P.a,{onClick:function(){document.getElementById(e.id).style.right="-50%"}})}),Object(r.jsx)("img",{src:e.img,height:"40",width:"40",alt:".."}),Object(r.jsx)("label",{className:"nameLabel",children:e.name}),Object(r.jsxs)("div",{className:"call ml-auto",children:[Object(r.jsx)("i",{children:Object(r.jsx)(W.a,{})}),Object(r.jsx)("i",{children:Object(r.jsx)(P.b,{})})]})]}),Object(r.jsx)("div",{className:"middleChat",children:Object(r.jsxs)("div",{className:"chat",children:[Object(r.jsxs)("div",{className:"left d-flex",children:[Object(r.jsx)("img",{src:e.img,height:"30",width:"30",alt:".."}),Object(r.jsx)("label",{className:"left-label",children:"hello"})]}),Object(r.jsxs)("div",{className:"right d-flex",children:[Object(r.jsx)("label",{className:"left-label",children:"How are you?"}),Object(r.jsx)("img",{src:R,height:"30",width:"30",alt:".."})]}),Object(r.jsxs)("div",{className:"left d-flex",children:[Object(r.jsx)("img",{src:e.img,height:"30",width:"30",alt:".."}),Object(r.jsx)("label",{className:"left-label",children:"I am fine"})]}),Object(r.jsxs)("div",{className:"right d-flex",children:[Object(r.jsx)("label",{className:"left-label",children:"Good"}),Object(r.jsx)("img",{src:R,height:"30",width:"30",alt:".."})]})]})}),Object(r.jsxs)("div",{className:"bottombar",children:[Object(r.jsx)("i",{className:"camera",children:Object(r.jsx)(m.c,{})}),Object(r.jsx)("input",{type:"text",class:"form-control ",placeholder:"Message.."}),Object(r.jsx)("i",{className:"mic",children:Object(r.jsx)(P.d,{})}),Object(r.jsx)("i",{className:"img",children:Object(r.jsx)(S.b,{})})]})]})},K=function(e){return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)("div",{className:"item d-flex",onClick:function(){document.getElementById(e.name).style.right="0"},children:[Object(r.jsx)("img",{src:e.img,height:"50",width:"50",alt:".."}),Object(r.jsxs)("div",{className:"content mt-2",children:[Object(r.jsx)("p",{className:"title",children:e.name}),Object(r.jsx)("p",{className:"share",children:"Shared Post By Fashion_0007 "})]}),Object(r.jsx)("i",{children:e.icon})]}),Object(r.jsx)(Y,{id:e.name,img:e.img,name:e.name})]})},Q=function(e){return Object(r.jsx)("div",{className:"list",children:e.itemData.map((function(e){return Object(r.jsx)(r.Fragment,{children:Object(r.jsx)(K,{id:e.id,name:e.name,img:e.img,icon:e.icon})})}))})},U=function(e){return Object(r.jsxs)("div",{className:"messagebar",children:[Object(r.jsxs)("div",{className:"top",children:[Object(r.jsxs)("div",{className:"title d-flex",children:[Object(r.jsx)("i",{className:"arrowLeft",onClick:function(){document.getElementById(e.mainId).style.marginLeft="-100%"},children:Object(r.jsx)(P.a,{})}),Object(r.jsx)("h6",{className:"",children:"Messages"})]}),Object(r.jsxs)("div",{class:"input-group",children:[Object(r.jsx)(m.g,{className:"search"}),Object(r.jsx)("input",{type:"search",class:"form-control rounded",placeholder:"Search","aria-label":"Search","aria-describedby":"search-addon"})]})]}),Object(r.jsx)(Q,{itemData:e.value})]})},X=t(35),Z=t.p+"static/media/photo-4.fa12dd85.jpg",$=t.p+"static/media/photo-6.954c1cb3.jpg",ee=t.p+"static/media/photo-8.4b8cac9b.jpg",ce=t.p+"static/media/photo-9.bd6b0d67.jpg",te=t(36),se=function(){localStorage.setItem("dark",!1);var e={navData:[{id:1,name:"Home",path:"/instagram",icon:Object(r.jsx)(m.e,{})},{id:2,name:"Search",path:"/Search",icon:Object(r.jsx)(m.g,{})},{id:3,name:"Reels",path:"/Reels",icon:Object(r.jsx)(X.a,{})},{id:4,name:"IGTV",path:"/IGTV",icon:Object(r.jsx)(E.d,{})},{id:5,name:"Activity",path:"/Activity",icon:Object(r.jsx)(m.d,{})},{id:5,name:"Settings",path:"/Settings",icon:Object(r.jsx)(m.i,{})}],StorieData:[{id:1,name:"Your Story",img:R,classname:"own"},{id:2,name:"Jane Doe",img:I,classname:"active"},{id:3,name:"Matthew Hinkle",img:y,classname:"active"},{id:4,name:"Amy Smith",img:Z,classname:"active"},{id:5,name:"Ed Morris",img:k,classname:"active"},{id:6,name:"Carolyn Duncan",img:$,classname:"active"},{id:7,name:"Paul Pinnock",img:w,classname:"active"},{id:8,name:"Elizabeth Wong",img:ee,classname:"active"},{id:9,name:"James Lathrop",img:ce,classname:"active"}],postData:[{id:1,name:"Jane Doe",img:R,likes:1743,comments:49,heartIcon:Object(r.jsx)(m.d,{}),commentIcon:Object(r.jsx)(S.c,{}),shareIcon:Object(r.jsx)(E.e,{}),saveIcon:Object(r.jsx)(G.a,{}),moreIcon:Object(r.jsx)(P.f,{})},{id:2,name:"David Brooks",img:I,likes:1364,comments:43,heartIcon:Object(r.jsx)(m.d,{}),commentIcon:Object(r.jsx)(S.c,{}),shareIcon:Object(r.jsx)(E.e,{}),saveIcon:Object(r.jsx)(G.a,{}),moreIcon:Object(r.jsx)(P.f,{})},{id:3,name:"Matthew Hinkle",img:y,likes:1200,comments:64,heartIcon:Object(r.jsx)(m.d,{}),commentIcon:Object(r.jsx)(S.c,{}),shareIcon:Object(r.jsx)(E.e,{}),saveIcon:Object(r.jsx)(G.a,{}),moreIcon:Object(r.jsx)(P.f,{})},{id:4,name:"Amy Smith",img:Z,likes:2021,comments:77,heartIcon:Object(r.jsx)(m.d,{}),commentIcon:Object(r.jsx)(S.c,{}),shareIcon:Object(r.jsx)(E.e,{}),saveIcon:Object(r.jsx)(G.a,{}),moreIcon:Object(r.jsx)(P.f,{})},{id:5,name:"Ed Morris",img:k,likes:3234,comments:564,heartIcon:Object(r.jsx)(m.d,{}),commentIcon:Object(r.jsx)(S.c,{}),shareIcon:Object(r.jsx)(E.e,{}),saveIcon:Object(r.jsx)(G.a,{}),moreIcon:Object(r.jsx)(P.f,{})},{id:6,name:"Carolyn Duncan",img:$,likes:1456,comments:58,heartIcon:Object(r.jsx)(m.d,{}),commentIcon:Object(r.jsx)(S.c,{}),shareIcon:Object(r.jsx)(E.e,{}),saveIcon:Object(r.jsx)(G.a,{}),moreIcon:Object(r.jsx)(P.f,{})},{id:7,name:"Paul Pinnock",img:w,likes:560,comments:20,heartIcon:Object(r.jsx)(m.d,{}),commentIcon:Object(r.jsx)(S.c,{}),shareIcon:Object(r.jsx)(E.e,{}),saveIcon:Object(r.jsx)(G.a,{}),moreIcon:Object(r.jsx)(P.f,{})},{id:8,name:"Elizabeth Wong",img:ee,likes:2300,comments:150,heartIcon:Object(r.jsx)(m.d,{}),commentIcon:Object(r.jsx)(S.c,{}),shareIcon:Object(r.jsx)(E.e,{}),saveIcon:Object(r.jsx)(G.a,{}),moreIcon:Object(r.jsx)(P.f,{})},{id:9,name:"James Lathrop",img:ce,likes:1250,comments:70,heartIcon:Object(r.jsx)(m.d,{}),commentIcon:Object(r.jsx)(S.c,{}),shareIcon:Object(r.jsx)(E.e,{}),saveIcon:Object(r.jsx)(G.a,{}),moreIcon:Object(r.jsx)(P.f,{})}],messageData:[{id:1,name:"David brooks",img:I,icon:Object(r.jsx)(_.a,{})},{id:2,name:"Jane Doe",img:R,icon:Object(r.jsx)(_.a,{})},{id:3,name:"Matthew Hinkle",img:y,icon:Object(r.jsx)(_.a,{})},{id:4,name:"Amy Smith",img:Z,icon:Object(r.jsx)(_.a,{})},{id:5,name:"Ed Morris",img:k,icon:Object(r.jsx)(_.a,{})},{id:6,name:"Carolyn Duncan",img:$,icon:Object(r.jsx)(_.a,{})},{id:7,name:"Paul Pinnock",img:w,icon:Object(r.jsx)(_.a,{})},{id:8,name:"Elizabeth Wong",img:ee,icon:Object(r.jsx)(_.a,{})},{id:9,name:"James Lathrop",img:ce,icon:Object(r.jsx)(_.a,{})}]};return Object(r.jsxs)("div",{className:"main",id:"main",children:[Object(r.jsx)(q,{value:e.navData,id:"sidebar",mainId:"main"}),Object(r.jsxs)("div",{className:"topbar-for-mobile",children:[Object(r.jsx)("i",{onClick:function(){document.getElementById("main").style.marginLeft="0%"},children:Object(r.jsx)(te.a,{})}),Object(r.jsx)("h6",{className:"ml-auto",children:"Instagram"}),Object(r.jsx)("i",{className:"ml-auto",onClick:function(){document.getElementById("main").style.marginLeft="-200%"},children:Object(r.jsx)(E.c,{})})]}),Object(r.jsxs)(n.c,{children:[Object(r.jsx)(n.a,{path:"/instagram",component:function(){return Object(r.jsx)(h,{dataStorie:e.StorieData,dataPost:e.postData,mainId:"main"})},exact:!0}),Object(r.jsx)(n.a,{exact:!0,path:"/Search",component:N}),Object(r.jsx)(n.a,{exact:!0,path:"/Reels",component:L}),Object(r.jsx)(n.a,{exact:!0,path:"/IGTV",component:M}),Object(r.jsx)(n.a,{exact:!0,path:"/Activity",component:J}),Object(r.jsx)(n.a,{exact:!0,path:"/Settings",component:function(){return Object(r.jsx)(T,{})}})]}),Object(r.jsx)(U,{value:e.messageData,mainId:"main"})]})};i.a.render(Object(r.jsx)(z.a,{children:Object(r.jsx)(se,{})}),document.getElementById("root"))}},[[53,1,2]]]);
//# sourceMappingURL=main.d50d49f2.chunk.js.map