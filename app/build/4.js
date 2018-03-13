webpackJsonp([4],{

/***/ 825:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoticiasSalvasPageModule", function() { return NoticiasSalvasPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__noticias_salvas__ = __webpack_require__(850);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_post_noticia_post_noticias_module__ = __webpack_require__(834);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var NoticiasSalvasPageModule = (function () {
    function NoticiasSalvasPageModule() {
    }
    NoticiasSalvasPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__noticias_salvas__["a" /* NoticiasSalvasPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__noticias_salvas__["a" /* NoticiasSalvasPage */]),
                __WEBPACK_IMPORTED_MODULE_3__components_post_noticia_post_noticias_module__["a" /* PostNoticiaModule */]
            ],
        })
    ], NoticiasSalvasPageModule);
    return NoticiasSalvasPageModule;
}());

//# sourceMappingURL=noticias-salvas.module.js.map

/***/ }),

/***/ 834:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostNoticiaModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__post_noticia__ = __webpack_require__(835);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PostNoticiaModule = (function () {
    function PostNoticiaModule() {
    }
    PostNoticiaModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_0__post_noticia__["a" /* PostNoticiaComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicModule */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_0__post_noticia__["a" /* PostNoticiaComponent */]
            ]
        })
    ], PostNoticiaModule);
    return PostNoticiaModule;
}());

//# sourceMappingURL=post-noticias.module.js.map

/***/ }),

/***/ 835:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostNoticiaComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PostNoticiaComponent = (function () {
    /**
     * Método construtor
     *
     * @param navCtrl
     * @param popoverCtrl
     */
    function PostNoticiaComponent(navCtrl, popoverCtrl) {
        this.navCtrl = navCtrl;
        this.popoverCtrl = popoverCtrl;
        /**
         * Noticia que está sendo exibida
         *
         */
        this.selectedNotice = {};
        /**
         * Se deve mostrar o link para o gateway
         *
         */
        this.showGatewayLink = true;
        /**
         * Imagem da noticia
         *
         */
        this.imageRef = 'assets/imgs/empty.jpg';
    }
    Object.defineProperty(PostNoticiaComponent.prototype, "notice", {
        /**
         * Noticia que será exibida
         *
         */
        set: function (notice) {
            var _this = this;
            // Seta a noticia selecionada
            this.selectedNotice = notice;
            // Verifica se possui uma imagem
            if (!notice.image_link)
                return;
            // Cria uma imagem
            var tempImage = new Image();
            tempImage.src = notice.image_link;
            // Quando a imagem original carregar, substitui a padrão
            tempImage.onload = function (img) {
                _this.imageRef = tempImage.src;
            };
            tempImage.onerror = function (img) {
                _this.selectedNotice['image_link'] = false;
            };
        },
        enumerable: true,
        configurable: true
    });
    ;
    /**
     * Abre o perfil da noticia
     *
     */
    PostNoticiaComponent.prototype.perfilNoticia = function (id) {
        this.navCtrl.push('PerfilNoticiaPage', { id: id });
    };
    /**
     * Abre o detalhe da noticia
     *
     * @param url
     */
    PostNoticiaComponent.prototype.openNotice = function () {
        this.navCtrl.push('NoticePage', { notice_id: this.selectedNotice['id'] });
    };
    /**
     * Abre o popover
     *
     * @param event
     */
    PostNoticiaComponent.prototype.presentPopover = function (event) {
        var popover = this.popoverCtrl.create('NoticiaPopoverPage', { notice: this.selectedNotice });
        popover.present({
            ev: event
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], PostNoticiaComponent.prototype, "notice", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], PostNoticiaComponent.prototype, "showGatewayLink", void 0);
    PostNoticiaComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'post-noticia',template:/*ion-inline-start:"/var/www/html/SimpleNews/simplenews-app/src/components/post-noticia/post-noticia.html"*/'<ion-card class="noticia-card">\n\n  <!-- IMG DA NOTICIA -->\n  <img *ngIf="selectedNotice[\'image_link\']" [src]="imageRef" (click)="openNotice()">\n\n  <!-- INFORMAÇÕES DA NOTICIA -->\n  <ion-card-content>\n    <h1 margin-bottom class="title" (click)="openNotice()">{{ selectedNotice[\'title\'] }}</h1>\n\n    <ion-row class="actions" no-padding>\n      <ion-col col-10 no-padding>\n        <h2 *ngIf="showGatewayLink" (click)="perfilNoticia( selectedNotice[\'gateway_id\'] )">\n          {{ selectedNotice[\'gateway_url\'] }}\n        </h2>\n        <p>&bull; {{ selectedNotice[\'created\'] }}</p>\n      </ion-col>\n      <ion-col col-2 text-center no-padding>\n        <button ion-button icon-only item-end clear small (click)="presentPopover( $event )">\n          <ion-icon name="more"></ion-icon>\n        </button>\n      </ion-col>\n    </ion-row>\n\n    <p class="description" *ngIf="selectedNotice[\'description\']">{{ selectedNotice[\'description\'] }}</p>\n  </ion-card-content>\n</ion-card>'/*ion-inline-end:"/var/www/html/SimpleNews/simplenews-app/src/components/post-noticia/post-noticia.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["n" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["q" /* PopoverController */]])
    ], PostNoticiaComponent);
    return PostNoticiaComponent;
}());

// End of file
//# sourceMappingURL=post-noticia.js.map

/***/ }),

/***/ 850:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NoticiasSalvasPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_auth_auth__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_notice_notice__ = __webpack_require__(471);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(33);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NoticiasSalvasPage = (function () {
    function NoticiasSalvasPage(navCtrl, navParams, notice, auth) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.notice = notice;
        this.auth = auth;
        // Total de paginas
        this.totalPages = 1;
        // Pagina atual
        this.actualPage = 0;
        // Está em um request
        this.isOnRequest = false;
        // Usuario
        this.logged = false;
        // Noticas salvas
        this.notices = [];
    }
    /**
     * Carrega as primeiras noticias
     */
    NoticiasSalvasPage.prototype.ionViewDidLoad = function () {
        this.loadNews(false, true);
    };
    /**
     * Carrega as noticias
     */
    NoticiasSalvasPage.prototype.loadNews = function (event, reset) {
        var _this = this;
        if (event === void 0) { event = false; }
        if (reset === void 0) { reset = false; }
        // busca o usuario
        if (!this.auth.user())
            return;
        this.logged = true;
        // Verifica se está em um request
        if (this.isOnRequest)
            return;
        this.isOnRequest = true;
        // Verifica se deve resetar
        if (reset) {
            this.actualPage = 0;
            this.totalPages = 1;
        }
        // Busca as noticias
        this.notice.getSavedNotices(parseInt(this.actualPage) + 1)
            .then(function (notices) {
            // Verifica se deve resetar
            if (!reset) {
                for (var _i = 0, _a = notices.data; _i < _a.length; _i++) {
                    var notice = _a[_i];
                    _this.notices.push(notice);
                }
            }
            else {
                _this.notices = notices.data;
            }
            // Seta as paginações
            _this.totalPages = notices.total_pages;
            _this.actualPage = notices.page;
        })
            .catch(function (err) { return console.log(err); })
            .then(function () {
            // Indica que não está mais em um request
            _this.isOnRequest = false;
            // Verifica se existe um evento
            if (event)
                event.complete();
        });
    };
    NoticiasSalvasPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["m" /* Component */])({
            selector: 'page-noticias-salvas',template:/*ion-inline-start:"/var/www/html/SimpleNews/simplenews-app/src/pages/noticias-salvas/noticias-salvas.html"*/'<ion-header>\n  <ion-toolbar color="primary">\n    <ion-buttons left>\n      <button ion-button menuToggle icon-only>\n        <ion-icon name=\'menu\'></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>Ler depois</ion-title>\n    <ion-buttons right>\n      <button ion-button (click)="loadNews( false, true )" icon-only>\n        <ion-icon [ngClass]="isOnRequest ? \'rotate-it\' : \'\'" name="refresh"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n  \n<ion-content class="light-bg">\n\n  <post-noticia *ngFor="let notice of notices" [notice]="notice"></post-noticia>\n  \n  <div class="load-more" *ngIf="isOnRequest">\n    <br>    \n    <ion-spinner></ion-spinner>\n  </div>\n\n  <div class="load-more">\n    <br>\n    <span *ngIf="!notices && logged">Não há noticias salvas</span>\n    <span *ngIf="!logged">Faça login no aplicativo</span>\n  </div><!-- mensagens de alerta -->\n\n  <ion-infinite-scroll (ionInfinite)="loadNews( $event )" *ngIf="actualPage != totalPages && !isOnRequest">\n    <ion-infinite-scroll-content></ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n</ion-content>\n  '/*ion-inline-end:"/var/www/html/SimpleNews/simplenews-app/src/pages/noticias-salvas/noticias-salvas.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["n" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["o" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1__providers_notice_notice__["a" /* NoticeProvider */],
            __WEBPACK_IMPORTED_MODULE_0__providers_auth_auth__["a" /* AuthProvider */]])
    ], NoticiasSalvasPage);
    return NoticiasSalvasPage;
}());

//# sourceMappingURL=noticias-salvas.js.map

/***/ })

});
//# sourceMappingURL=4.js.map