webpackJsonp([11],{

/***/ 824:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoticiaPopoverPageModule", function() { return NoticiaPopoverPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__noticia_popover__ = __webpack_require__(849);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var NoticiaPopoverPageModule = (function () {
    function NoticiaPopoverPageModule() {
    }
    NoticiaPopoverPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__noticia_popover__["a" /* NoticiaPopoverPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__noticia_popover__["a" /* NoticiaPopoverPage */]),
            ],
        })
    ], NoticiaPopoverPageModule);
    return NoticiaPopoverPageModule;
}());

//# sourceMappingURL=noticia-popover.module.js.map

/***/ }),

/***/ 849:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NoticiaPopoverPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular_components_toast_toast_controller__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_auth_auth__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_notice_notice__ = __webpack_require__(471);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_social_sharing__ = __webpack_require__(477);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ionic_angular_components_loading_loading_controller__ = __webpack_require__(153);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var NoticiaPopoverPage = (function () {
    function NoticiaPopoverPage(navCtrl, loadingCtrl, navParams, socialSharing, viewCtrl, noticeProv, auth, alertCtrl, toastCtrl) {
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this.navParams = navParams;
        this.socialSharing = socialSharing;
        this.viewCtrl = viewCtrl;
        this.noticeProv = noticeProv;
        this.auth = auth;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.notice = this.navParams.get('notice');
    }
    /**
     * Compartilha a noticia nas redes sociais
     *
     * @param url
     */
    NoticiaPopoverPage.prototype.shareNotice = function () {
        var _this = this;
        var link = (this.notice.link) ? this.notice.link : this.notice.notice_link;
        this.socialSharing.share(link)
            .then(function () { return _this.viewCtrl.dismiss(); });
    };
    /**
     * Chama as funções relativas ao ler depois
     * @param status
     */
    NoticiaPopoverPage.prototype.toggleSaveForLater = function (status) {
        if (status == 'T') {
            this.unsaveForLater();
        }
        else {
            this.saveForLater();
        }
    };
    /**
     * Salva noticia para ler mais tarde
     */
    NoticiaPopoverPage.prototype.saveForLater = function () {
        var _this = this;
        // Verifica se o usuario esta logado
        if (!this.auth.user()) {
            this.navCtrl.push("LoginPage");
            return;
        }
        // Mostra o loading
        var loading = this.loadingCtrl.create({ content: 'Salvando notícia...' });
        loading.present();
        // Tenta salvar a noticia
        this.noticeProv.saveForLater(this.notice.id)
            .then(function (success) {
            _this.notice.save_for_later = 'T';
        })
            .catch(function (err) { return console.log(err); })
            .then(function () {
            _this.viewCtrl.dismiss();
            loading.dismiss();
        });
    };
    /**
     * Tira a noticia do ler depois
     */
    NoticiaPopoverPage.prototype.unsaveForLater = function () {
        var _this = this;
        // Mostra o loading
        var loading = this.loadingCtrl.create({ content: 'Removendo notícia...' });
        loading.present();
        this.noticeProv.unsaveForLater(this.notice.id)
            .then(function (success) {
            _this.notice.save_for_later = 'F';
        })
            .catch(function (err) { return console.log(err); })
            .then(function () {
            _this.viewCtrl.dismiss();
            loading.dismiss();
        });
    };
    /**
     * Denuncia a noticia
     */
    NoticiaPopoverPage.prototype.report = function () {
        // Verifica se o user esta logado
        if (!this.auth.user()) {
            this.navCtrl.push('LoginPage');
        }
        else
            this.alertConfirm();
    };
    /**
     * Mostra alerta de confirmação de report
     *
     */
    NoticiaPopoverPage.prototype.alertConfirm = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Denunciar',
            message: 'Deseja realmente denunciar essa noticia?',
            buttons: [{
                    text: 'Sim',
                    handler: function () {
                        _this.reportConfirmed();
                    }
                }, {
                    text: 'Não',
                    role: 'cancel',
                    handler: function () {
                        _this.viewCtrl.dismiss();
                    }
                }]
        });
        alert.present();
    };
    /**
     * Mostra o toast
     *
     */
    NoticiaPopoverPage.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000,
            position: 'bottom'
        });
        toast.present();
    };
    /**
     * Faz o report
     *
     */
    NoticiaPopoverPage.prototype.reportConfirmed = function () {
        var _this = this;
        // Mostra o loading
        var loading = this.loadingCtrl.create({ content: 'Denunciando notícia...' });
        loading.present();
        // Salva o report
        this.noticeProv.report(this.notice.id)
            .then(function (success) {
            _this.notice.reported = true;
            _this.presentToast('Denunciado');
        })
            .catch(function (err) {
            console.log(err);
            _this.presentToast('Erro ao tentar denunciar');
        })
            .then(function () {
            _this.viewCtrl.dismiss();
            loading.dismiss();
        });
    };
    NoticiaPopoverPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["m" /* Component */])({
            selector: 'page-noticia-popover',template:/*ion-inline-start:"/var/www/html/SimpleNews/simplenews-app/src/pages/noticia-popover/noticia-popover.html"*/'<ion-content>\n  <ion-list>\n    <ion-item (click)="shareNotice()">\n      <ion-icon name="share" item-start></ion-icon>\n      Compartilhar\n    </ion-item><!-- Compartilhar -->\n\n    <ion-item (click)="toggleSaveForLater( notice.save_for_later )">\n      <ion-icon [name]="notice.save_for_later == \'T\' ? \'bookmark\' : \'ios-bookmark-outline\'" item-start></ion-icon>\n      <span>{{ notice.save_for_later == \'T\' ? \'Desmarcar\' : \'Ler depois\' }}</span>  \n    </ion-item><!-- Ler mais tarde -->\n\n    <ion-item *ngIf="!notice.reported" (click)="report()">\n      <ion-icon name="megaphone" item-start></ion-icon>\n      Denunciar\n    </ion-item><!-- Denunciar -->\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/var/www/html/SimpleNews/simplenews-app/src/pages/noticia-popover/noticia-popover.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5_ionic_angular__["n" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_6_ionic_angular_components_loading_loading_controller__["a" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["o" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_social_sharing__["a" /* SocialSharing */],
            __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["r" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_notice_notice__["a" /* NoticeProvider */],
            __WEBPACK_IMPORTED_MODULE_1__providers_auth_auth__["a" /* AuthProvider */],
            __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_0_ionic_angular_components_toast_toast_controller__["a" /* ToastController */]])
    ], NoticiaPopoverPage);
    return NoticiaPopoverPage;
}());

// End of file 
//# sourceMappingURL=noticia-popover.js.map

/***/ })

});
//# sourceMappingURL=11.js.map