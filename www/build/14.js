webpackJsonp([14],{792:function(l,n,u){"use strict";function t(l){return o._21(0,[(l()(),o.Z(0,0,null,null,1,"h1",[["text-center",""]],null,null,null,null,null)),(l()(),o._19(-1,null,["Termos"]))],null,null)}function a(l){return o._21(0,[(l()(),o.Z(0,0,null,null,0,"div",[],[[8,"innerHTML",1]],null,null,null,null))],null,function(l,n){l(n,0,0,n.component.terms)})}function r(l){return o._21(0,[(l()(),o.Z(0,0,null,null,1,"span",[["class","err-message"]],null,null,null,null,null)),(l()(),o._19(-1,null,["Houve um erro ao tentar buscar os termos de uso"]))],null,null)}function e(l){return o._21(0,[(l()(),o.Z(0,0,null,null,16,"ion-header",[],null,null,null,null,null)),o.Y(1,16384,null,0,Y.a,[Z.a,o.j,o.z,[2,j.a]],null,null),(l()(),o._19(-1,null,["\n  "])),(l()(),o.Z(3,0,null,null,12,"ion-toolbar",[["class","toolbar"],["color","primary"]],[[2,"statusbar-padding",null]],null,null,k.b,k.a)),o.Y(4,49152,null,0,y.a,[Z.a,o.j,o.z],{color:[0,"color"]},null),(l()(),o._19(-1,3,["\n    "])),(l()(),o.Z(6,0,null,0,8,"button",[["icon-only",""],["ion-button",""],["menuToggle",""]],[[8,"hidden",0]],[[null,"click"]],function(l,n,u){var t=!0;if("click"===n){t=!1!==o._13(l,8).toggle()&&t}return t},I.b,I.a)),o.Y(7,1097728,[[1,4]],0,T.a,[[8,""],Z.a,o.j,o.z],null,null),o.Y(8,1064960,null,0,C.a,[P.a,[2,j.a],[2,T.a],[2,z.a]],{menuToggle:[0,"menuToggle"]},null),o.Y(9,16384,null,1,F.a,[Z.a,o.j,o.z,[2,y.a],[2,z.a]],null,null),o._17(603979776,1,{_buttons:1}),(l()(),o._19(-1,0,["\n      "])),(l()(),o.Z(12,0,null,0,1,"ion-icon",[["name","menu"],["role","img"]],[[2,"hide",null]],null,null,null,null)),o.Y(13,147456,null,0,w.a,[Z.a,o.j,o.z],{name:[0,"name"]},null),(l()(),o._19(-1,0,["\n    "])),(l()(),o._19(-1,3,["\n  "])),(l()(),o._19(-1,null,["\n"])),(l()(),o._19(-1,null,["\n  \n"])),(l()(),o.Z(18,0,null,null,18,"ion-content",[["padding",""]],[[2,"statusbar-padding",null],[2,"has-refresher",null]],null,null,H.b,H.a)),o.Y(19,4374528,null,0,M.a,[Z.a,U.a,q.a,o.j,o.z,x.a,A.a,o.u,[2,j.a],[2,X.a]],null,null),(l()(),o._19(-1,1,["\n  "])),(l()(),o.U(16777216,null,1,1,null,t)),o.Y(22,16384,null,0,J.i,[o.I,o.F],{ngIf:[0,"ngIf"]},null),(l()(),o._19(-1,1,["\n\n  "])),(l()(),o.Z(24,0,null,1,4,"div",[["text-justify",""]],null,null,null,null,null)),(l()(),o._19(-1,null,["\n    "])),(l()(),o.U(16777216,null,null,1,null,a)),o.Y(27,16384,null,0,J.i,[o.I,o.F],{ngIf:[0,"ngIf"]},null),(l()(),o._19(-1,null,["\n  "])),(l()(),o._19(-1,1,["\n\n  "])),(l()(),o.Z(30,0,null,1,5,"ion-row",[["class","row"]],null,null,null,null,null)),o.Y(31,16384,null,0,L.a,[],null,null),(l()(),o._19(-1,null,["\n    "])),(l()(),o.U(16777216,null,null,1,null,r)),o.Y(34,16384,null,0,J.i,[o.I,o.F],{ngIf:[0,"ngIf"]},null),(l()(),o._19(-1,null,["      \n  "])),(l()(),o._19(-1,1,["\n"])),(l()(),o._19(-1,null,["\n  "]))],function(l,n){var u=n.component;l(n,4,0,"primary");l(n,8,0,"");l(n,13,0,"menu");l(n,22,0,u.terms);l(n,27,0,u.terms);l(n,34,0,u.err)},function(l,n){l(n,3,0,o._13(n,4)._sbPadding);l(n,6,0,o._13(n,8).isHidden);l(n,12,0,o._13(n,13)._hidden);l(n,18,0,o._13(n,19).statusbarPadding,o._13(n,19)._hasRefresher)})}Object.defineProperty(n,"__esModule",{value:!0});var o=u(2),s=(u(0),u(39),u(83)),i=function(){function l(l,n,u,t){this.navCtrl=l,this.navParams=n,this.settingsProvider=u,this.loadingCtrl=t,this.terms="",this.err=!1,this.getTerms()}return l.prototype.getTerms=function(){var l=this,n=this.loadingCtrl.create({});n.present(),this.settingsProvider.getTerms("terms").then(function(n){return l.terms=n}).catch(function(n){return l.err=!0}).then(function(){return n.dismiss()})},l}(),c=function(){return function(){}}(),_=u(470),d=u(471),g=u(472),f=u(473),m=u(474),b=u(475),h=u(476),p=u(477),v=u(478),Y=u(171),Z=u(4),j=u(8),k=u(795),y=u(76),I=u(51),T=u(29),C=u(183),P=u(34),z=u(57),F=u(170),w=u(52),H=u(479),M=u(31),U=u(7),q=u(14),x=u(13),A=u(37),X=u(30),J=u(25),L=u(172),N=u(17),O=u(115),R=o.X({encapsulation:2,styles:[],data:{}}),S=o.V("page-termos",i,function(l){return o._21(0,[(l()(),o.Z(0,0,null,null,1,"page-termos",[],null,null,null,e,R)),o.Y(1,49152,null,0,i,[X.a,N.a,s.a,O.a],null,null)],null,null)},{},{},[]),V=u(26),W=u(169),B=u(53);u.d(n,"TermosPageModuleNgFactory",function(){return D});var D=o.W(c,[],function(l){return o._10([o._11(512,o.i,o.S,[[8,[_.a,d.a,g.a,f.a,m.a,b.a,h.a,p.a,v.a,S]],[3,o.i],o.s]),o._11(4608,J.k,J.j,[o.r,[2,J.s]]),o._11(4608,V.r,V.r,[]),o._11(4608,V.d,V.d,[]),o._11(512,J.b,J.b,[]),o._11(512,V.p,V.p,[]),o._11(512,V.h,V.h,[]),o._11(512,V.n,V.n,[]),o._11(512,W.a,W.a,[]),o._11(512,W.b,W.b,[]),o._11(512,c,c,[]),o._11(256,B.a,i,[])])})},795:function(l,n,u){"use strict";function t(l){return a._21(2,[(l()(),a.Z(0,0,null,null,1,"div",[["class","toolbar-background"]],null,null,null,null,null)),a.Y(1,278528,null,0,r.g,[a.p,a.q,a.j,a.A],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),a._12(null,0),a._12(null,1),a._12(null,2),(l()(),a.Z(5,0,null,null,2,"div",[["class","toolbar-content"]],null,null,null,null,null)),a.Y(6,278528,null,0,r.g,[a.p,a.q,a.j,a.A],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),a._12(null,3)],function(l,n){var u=n.component;l(n,1,0,"toolbar-background","toolbar-background-"+u._mode);l(n,6,0,"toolbar-content","toolbar-content-"+u._mode)},null)}u.d(n,"a",function(){return e}),n.b=t;var a=u(2),r=u(25),e=(u(4),a.X({encapsulation:2,styles:[],data:{}}))}});