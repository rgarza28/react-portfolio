(this["webpackJsonpmy-portfolio"]=this["webpackJsonpmy-portfolio"]||[]).push([[0],{130:function(e,t,a){e.exports=a(351)},135:function(e,t,a){},351:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(12),o=a.n(l),c=a(49),i=a(11),m=(a(135),a(41)),s=a(76),u=a(120),p=a(374),E=a(390),h=a(391),d=a(392),g=a(380),v=a(381),b=a(394),f=a(382),y=a(383),C=a(384),I=a(385),k=a(386),w=a(65),x=a(375),j=a(377),N=a(378),O=a(379),P=a(387),S=a(60),T=a.n(S),F=Object(p.a)((function(e){return{menuSliderContainer:{width:250,background:"#511",height:"100"},avatar:{display:"block",margin:"0.5rem auto",width:e.spacing(13),height:e.spacing(13)},listItem:{color:"tan"}}})),H=[{listIcon:r.a.createElement(x.a,null),listText:"Home",listPath:"/react-portfolio"},{listIcon:r.a.createElement(j.a,null),listText:"Resume",listPath:"/resume"},{listIcon:r.a.createElement(N.a,null),listText:"Portfolio",listPath:"/portfolio"},{listIcon:r.a.createElement(O.a,null),listText:"Contacts",listPath:"/contact"}],L=function(){var e,t=Object(n.useState)({right:!1}),a=Object(u.a)(t,2),l=a[0],o=a[1],i=function(e,t){return function(){o(Object(s.a)(Object(s.a)({},l),{},Object(m.a)({},e,t)))}},p=F();return r.a.createElement(r.a.Fragment,null,r.a.createElement(h.a,{component:"nav"},r.a.createElement(C.a,{position:"static",style:{background:"#222"}},r.a.createElement(I.a,null,r.a.createElement(k.a,{onClick:i("right",!0)},r.a.createElement(P.a,{style:{color:"red"}})),r.a.createElement(w.a,{variant:"h5",style:{color:"tan"}},"Menu"),r.a.createElement(E.a,{anchor:"left",open:l.right,onClose:i("right",!1)},(e="right",r.a.createElement(h.a,{className:p.menuSliderContainer,component:"div",onClick:i(e,!1)},r.a.createElement(d.a,{className:p.avatar,src:T.a,alt:"My Head Icon"}),r.a.createElement(g.a,null),r.a.createElement(v.a,null,H.map((function(e,t){return r.a.createElement(b.a,{button:!0,key:t,component:c.b,to:e.listPath},r.a.createElement(f.a,{className:p.listItem},e.listIcon),r.a.createElement(y.a,{className:p.listItem,primary:e.listText}))}))))))))))},R=a(388),z=a(79),A=a.n(z),M=Object(p.a)((function(e){return{avatar:{width:e.spacing(15),height:e.spacing(15),margin:e.spacing(1)},title:{color:"red"},subtitle:{color:"tan",marginBottom:"3rem"},typedContainer:{position:"absolute",top:"30%",width:"100vw",textAlign:"center",zIndex:1}}})),B=function(){var e=M();return r.a.createElement(h.a,{className:e.typedContainer},r.a.createElement(R.a,{container:!0,justify:"center"},r.a.createElement(d.a,{className:e.avatar,src:T.a,alt:"Icon of ME"})),r.a.createElement(w.a,{className:e.title,variant:"h4"},r.a.createElement(A.a,{strings:["Robert Garza Portfolio"],typeSpeed:100})),r.a.createElement("br",null),r.a.createElement(w.a,{className:e.subtitle,variant:"h4"},r.a.createElement(A.a,{strings:["HTML/CSS","JAVASCRIPT","SQL","NOSQL","NODE","REACT"],typeSpeed:60,loop:!0})))},J=a(119),W=a.n(J),_=a(354),Q=Object(_.a)({particlesCanvas:{position:"absolute"}}),D=function(){var e=Q();return r.a.createElement(r.a.Fragment,null,r.a.createElement(L,null),r.a.createElement(B,null),r.a.createElement(W.a,{canvasClassName:e.particlesCanvas,params:{particles:{number:{value:45,density:{enable:!0,value_area:900}},shape:{type:"star",stroke:{width:1,color:"red"}},size:{value:1,random:!0,anim:{enable:!0,speed:7,size_min:.1,sync:!0}},opacity:{value:1,random:!0,anim:{enable:!0,speed:1,opacity_min:.1,sync:!0}}}}}))},G=a(389),V=Object(p.a)((function(e){return{mainContainer:{background:"#233"},timeLine:Object(m.a)({position:"relative",padding:"1rem",margin:"0 auto","&:before":{content:"''",position:"absolute",height:"100%",border:"1px solid tan",right:"40px",top:0},"&:after":{content:"''",display:"table",clear:"both"}},e.breakpoints.up("md"),{padding:"2rem","&:before":{left:"calc(50% - 1px)",right:"auto"}})}})),$=function(){var e=V();return r.a.createElement(r.a.Fragment,null,r.a.createElement(L,null),r.a.createElement("h2",null,"Resume Component"),r.a.createElement(h.a,{component:"header",className:e.mainContainer},r.a.createElement(w.a,{variant:"h4",align:"center"},"Work Experience"),r.a.createElement(h.a,{component:"div",className:e.timeLine},r.a.createElement(w.a,{variant:"h2"},"2019"))))},q=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(L,null),r.a.createElement("h2",null,"Contact Component"),r.a.createElement(h.a,{component:"header"},r.a.createElement(w.a,{variant:"h4",align:"center"},"Contact Information"),r.a.createElement(h.a,{component:"div"},r.a.createElement(w.a,{variant:"h2"},"Insert Contact Info Here"))))},K=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(L,null),r.a.createElement("h2",null,"Portfolio Component"),r.a.createElement(h.a,{component:"header"},r.a.createElement(w.a,{variant:"h4",align:"center"},"Projects"),r.a.createElement(h.a,{component:"div"},r.a.createElement(w.a,{variant:"h2"},"Insert Projects Here"))))};var U=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(G.a,null),r.a.createElement(i.a,{exact:!0,path:"/react-portfolio",component:D}),r.a.createElement(i.a,{path:"/resume",component:$}),r.a.createElement(i.a,{path:"/contact",component:q}),r.a.createElement(i.a,{path:"/portfolio",component:K}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(c.a,null,r.a.createElement(U,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},60:function(e,t,a){e.exports=a.p+"static/media/avatar.bcb163e2.png"}},[[130,1,2]]]);
//# sourceMappingURL=main.fc7cc75f.chunk.js.map