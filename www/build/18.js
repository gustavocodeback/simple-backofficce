webpackJsonp([18],{785:function(n,t,l){"use strict";function e(n){return a._21(0,[(n()(),a.Z(0,0,null,null,9,"ion-item",[["class","item item-block"]],null,[[null,"click"]],function(n,t,l){var e=!0;if("click"===t){e=!1!==n.component.report()&&e}return e},L.b,L.a)),a.Y(1,1097728,null,3,Y.a,[P.a,j.a,a.j,a.z,[2,y.a]],null,null),a._17(335544320,7,{contentLabel:0}),a._17(603979776,8,{_buttons:1}),a._17(603979776,9,{_icons:1}),a.Y(5,16384,null,0,F.a,[],null,null),(n()(),a._19(-1,2,["\n      "])),(n()(),a.Z(7,0,null,0,1,"ion-icon",[["item-start",""],["name","megaphone"],["role","img"]],[[2,"hide",null]],null,null,null,null)),a.Y(8,147456,[[9,4]],0,Z.a,[j.a,a.j,a.z],{name:[0,"name"]},null),(n()(),a._19(-1,2,["\n      Denunciar\n    "]))],function(n,t){n(t,8,0,"megaphone")},function(n,t){n(t,7,0,a._13(t,8)._hidden)})}function i(n){return a._21(0,[(n()(),a.Z(0,0,null,null,34,"ion-content",[],[[2,"statusbar-padding",null],[2,"has-refresher",null]],null,null,z.b,z.a)),a.Y(1,4374528,null,0,w.a,[j.a,S.a,T.a,a.j,a.z,D.a,N.a,a.u,[2,I.a],[2,x.a]],null,null),(n()(),a._19(-1,1,["\n  "])),(n()(),a.Z(3,0,null,1,30,"ion-list",[],null,null,null,null,null)),a.Y(4,16384,null,0,M.a,[j.a,a.j,a.z,S.a,R.l,T.a],null,null),(n()(),a._19(-1,null,["\n    "])),(n()(),a.Z(6,0,null,null,9,"ion-item",[["class","item item-block"]],null,[[null,"click"]],function(n,t,l){var e=!0;if("click"===t){e=!1!==n.component.shareNotice()&&e}return e},L.b,L.a)),a.Y(7,1097728,null,3,Y.a,[P.a,j.a,a.j,a.z,[2,y.a]],null,null),a._17(335544320,1,{contentLabel:0}),a._17(603979776,2,{_buttons:1}),a._17(603979776,3,{_icons:1}),a.Y(11,16384,null,0,F.a,[],null,null),(n()(),a._19(-1,2,["\n      "])),(n()(),a.Z(13,0,null,0,1,"ion-icon",[["item-start",""],["name","share"],["role","img"]],[[2,"hide",null]],null,null,null,null)),a.Y(14,147456,[[3,4]],0,Z.a,[j.a,a.j,a.z],{name:[0,"name"]},null),(n()(),a._19(-1,2,["\n      Compartilhar\n    "])),(n()(),a._19(-1,null,["\n\n    "])),(n()(),a.Z(17,0,null,null,12,"ion-item",[["class","item item-block"]],null,[[null,"click"]],function(n,t,l){var e=!0,i=n.component;if("click"===t){e=!1!==i.toggleSaveForLater(i.notice.save_for_later)&&e}return e},L.b,L.a)),a.Y(18,1097728,null,3,Y.a,[P.a,j.a,a.j,a.z,[2,y.a]],null,null),a._17(335544320,4,{contentLabel:0}),a._17(603979776,5,{_buttons:1}),a._17(603979776,6,{_icons:1}),a.Y(22,16384,null,0,F.a,[],null,null),(n()(),a._19(-1,2,["\n      "])),(n()(),a.Z(24,0,null,0,1,"ion-icon",[["item-start",""],["role","img"]],[[2,"hide",null]],null,null,null,null)),a.Y(25,147456,[[6,4]],0,Z.a,[j.a,a.j,a.z],{name:[0,"name"]},null),(n()(),a._19(-1,2,["\n      "])),(n()(),a.Z(27,0,null,2,1,"span",[],null,null,null,null,null)),(n()(),a._19(28,null,["",""])),(n()(),a._19(-1,2,["  \n    "])),(n()(),a._19(-1,null,["\n\n    "])),(n()(),a.U(16777216,null,null,1,null,e)),a.Y(32,16384,null,0,E.i,[a.I,a.F],{ngIf:[0,"ngIf"]},null),(n()(),a._19(-1,null,["\n  "])),(n()(),a._19(-1,1,["\n"])),(n()(),a._19(-1,null,["\n"]))],function(n,t){var l=t.component;n(t,14,0,"share");n(t,25,0,"T"==l.notice.save_for_later?"bookmark":"ios-bookmark-outline");n(t,32,0,!l.notice.reported)},function(n,t){var l=t.component;n(t,0,0,a._13(t,1).statusbarPadding,a._13(t,1)._hasRefresher);n(t,13,0,a._13(t,14)._hidden);n(t,24,0,a._13(t,25)._hidden);n(t,28,0,"T"==l.notice.save_for_later?"Desmarcar":"Ler depois")})}Object.defineProperty(t,"__esModule",{value:!0});var a=l(2),o=(l(0),l(39),l(60)),r=l(77),u=l(175),s=l(189),c=l(115),h=function(){function n(n,t,l,e,i,a,o,r,u){this.navCtrl=n,this.loadingCtrl=t,this.navParams=l,this.socialSharing=e,this.viewCtrl=i,this.noticeProv=a,this.auth=o,this.alertCtrl=r,this.toastCtrl=u,this.notice=this.navParams.get("notice")}return n.prototype.shareNotice=function(){var n=this;this.socialSharing.share(this.notice.link?this.notice.link:this.notice.notice_link).then(function(){return n.viewCtrl.dismiss()})},n.prototype.toggleSaveForLater=function(n){"T"==n?this.unsaveForLater():this.saveForLater()},n.prototype.saveForLater=function(){var n=this;if(this.auth.user()){var t=this.loadingCtrl.create({content:"Salvando notícia..."});t.present(),this.noticeProv.saveForLater(this.notice.id).then(function(t){n.notice.save_for_later="T"}).catch(function(n){return console.log(n)}).then(function(){n.viewCtrl.dismiss(),t.dismiss()})}else this.navCtrl.push("LoginPage")},n.prototype.unsaveForLater=function(){var n=this,t=this.loadingCtrl.create({content:"Removendo notícia..."});t.present(),this.noticeProv.unsaveForLater(this.notice.id).then(function(t){n.notice.save_for_later="F"}).catch(function(n){return console.log(n)}).then(function(){n.viewCtrl.dismiss(),t.dismiss()})},n.prototype.report=function(){this.auth.user()?this.alertConfirm():this.navCtrl.push("LoginPage")},n.prototype.alertConfirm=function(){var n=this;this.alertCtrl.create({title:"Denunciar",message:"Deseja realmente denunciar essa noticia?",buttons:[{text:"Sim",handler:function(){n.reportConfirmed()}},{text:"Não",role:"cancel",handler:function(){n.viewCtrl.dismiss()}}]}).present()},n.prototype.presentToast=function(n){this.toastCtrl.create({message:n,duration:3e3,position:"bottom"}).present()},n.prototype.reportConfirmed=function(){var n=this,t=this.loadingCtrl.create({content:"Denunciando notícia..."});t.present(),this.noticeProv.report(this.notice.id).then(function(t){n.notice.reported=!0,n.presentToast("Denunciado")}).catch(function(t){console.log(t),n.presentToast("Erro ao tentar denunciar")}).then(function(){n.viewCtrl.dismiss(),t.dismiss()})},n}(),_=function(){return function(){}}(),p=l(470),f=l(471),m=l(472),d=l(473),v=l(474),g=l(475),b=l(476),C=l(477),k=l(478),L=l(174),Y=l(27),P=l(22),j=l(4),y=l(54),F=l(78),Z=l(52),z=l(479),w=l(31),S=l(7),T=l(14),D=l(13),N=l(37),I=l(8),x=l(30),M=l(58),R=l(11),E=l(25),J=l(17),O=l(119),U=a.X({encapsulation:2,styles:[],data:{}}),V=a.V("page-noticia-popover",h,function(n){return a._21(0,[(n()(),a.Z(0,0,null,null,1,"page-noticia-popover",[],null,null,null,i,U)),a.Y(1,49152,null,0,h,[x.a,c.a,J.a,s.a,I.a,u.a,r.a,O.a,o.a],null,null)],null,null)},{},{},[]),W=l(26),X=l(169),q=l(53);l.d(t,"NoticiaPopoverPageModuleNgFactory",function(){return A});var A=a.W(_,[],function(n){return a._10([a._11(512,a.i,a.S,[[8,[p.a,f.a,m.a,d.a,v.a,g.a,b.a,C.a,k.a,V]],[3,a.i],a.s]),a._11(4608,E.k,E.j,[a.r,[2,E.s]]),a._11(4608,W.r,W.r,[]),a._11(4608,W.d,W.d,[]),a._11(512,E.b,E.b,[]),a._11(512,W.p,W.p,[]),a._11(512,W.h,W.h,[]),a._11(512,W.n,W.n,[]),a._11(512,X.a,X.a,[]),a._11(512,X.b,X.b,[]),a._11(512,_,_,[]),a._11(256,q.a,h,[])])})}});