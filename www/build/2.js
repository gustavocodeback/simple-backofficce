webpackJsonp([2],{

/***/ 829:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PesquisarPageModule", function() { return PesquisarPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_post_noticia_post_noticias_module__ = __webpack_require__(834);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pesquisar__ = __webpack_require__(855);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__directives_directives_module__ = __webpack_require__(474);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var PesquisarPageModule = (function () {
    function PesquisarPageModule() {
    }
    PesquisarPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__pesquisar__["a" /* PesquisarPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__pesquisar__["a" /* PesquisarPage */]),
                __WEBPACK_IMPORTED_MODULE_0__components_post_noticia_post_noticias_module__["a" /* PostNoticiaModule */],
                __WEBPACK_IMPORTED_MODULE_4__directives_directives_module__["a" /* DirectivesModule */]
            ],
        })
    ], PesquisarPageModule);
    return PesquisarPageModule;
}());

//# sourceMappingURL=pesquisar.module.js.map

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

/***/ 855:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PesquisarPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_notice_notice__ = __webpack_require__(471);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(33);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PesquisarPage = (function () {
    function PesquisarPage(navCtrl, navParams, viewCtrl, modalCtrl, notice) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.modalCtrl = modalCtrl;
        this.notice = notice;
        // Ativo
        this.ativo = false;
        // Total de paginas
        this.totalPages = 1;
        // Pagina atual
        this.actualPage = 0;
        // Se está um um request
        this.isOnRequest = false;
        // Notocias
        this.notices = [];
        // Itens
        this.totalItens = 1;
        this.text = '';
    }
    /**
     * Busca noticias
     *
     * @param event
     */
    PesquisarPage.prototype.search = function (event) {
        // Busca a string
        var string = event.target.value;
        // Verfica se veio algum dado
        if (string) {
            // salva a string globalmente
            this.text = string;
            // Faz a busca
            this.loadNews(false, true);
        }
        else
            this.notices = [];
    };
    /**
     * Carrega novas noticias
     *
     * @param event
     * @param reset
     */
    PesquisarPage.prototype.loadNews = function (event, reset) {
        var _this = this;
        if (event === void 0) { event = false; }
        if (reset === void 0) { reset = false; }
        // Verifica se está e uma request
        if (this.isOnRequest)
            return;
        this.isOnRequest = true;
        // Verifica se deve resetar
        if (reset) {
            this.actualPage = 0;
            this.totalPages = 1;
        }
        // busca as noticias
        this.notice.searchNotice(this.text, parseInt(this.actualPage) + 1)
            .then(function (notices) {
            // verifica se deve resetar
            if (!reset) {
                for (var _i = 0, _a = notices.data; _i < _a.length; _i++) {
                    var notice = _a[_i];
                    _this.notices.push(notice);
                }
            }
            else {
                _this.notices = notices.data;
            }
            // seta as paginações
            _this.totalPages = notices.total_pages;
            _this.actualPage = notices.page;
            _this.totalItens = notices.total_itens;
        })
            .then(function () {
            // Indica que não está mais em um request
            _this.isOnRequest = false;
            // Verifica se existe um evento
            if (event)
                event.complete();
        });
    };
    /**
     * close
     */
    PesquisarPage.prototype.close = function () {
        if (this.navCtrl.canGoBack()) {
            this.navCtrl.pop();
        }
        else
            this.navCtrl.setRoot('FeedPage');
    };
    /**
    * addFilter
    */
    PesquisarPage.prototype.addFilter = function () {
        this.ativo = true;
    };
    /**
     * removeFilter
     */
    PesquisarPage.prototype.removeFilter = function () {
        this.ativo = false;
    };
    PesquisarPage.prototype.filtrarModal = function () {
        var modal = this.modalCtrl.create('FiltrarModalPage');
        modal.present();
    };
    PesquisarPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-pesquisar',template:/*ion-inline-start:"/var/www/html/SimpleNews/simplenews-app/src/pages/pesquisar/pesquisar.html"*/'<ion-header>\n  <ion-toolbar scroll-hide-translate color="primary">\n    <ion-title>Pesquisar</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="close()">\n        <ion-icon name="close"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n\n  <ion-toolbar scroll-hide-translate color="primary">\n      <ion-searchbar placeholder="Pesquisar por notícia" (ionInput)="search( $event )"></ion-searchbar>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content style="background: #f1f1f1" [scroll-hide]="viewCtrl">\n\n  <ion-refresher (ionRefresh)="loadNews($event, true )" *ngIf="!isOnRequest">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n\n  <post-noticia *ngFor="let notice of notices" [notice]="notice"></post-noticia>\n  \n  <div class="load-more" *ngIf="totalItens == 0">\n    <br>\n    <span>Não foi encontrado nenhuma notícia</span>\n  </div>\n\n  <div class="load-more" *ngIf="notices.length == 0 && totalItens != 0">\n    <br>\n    Pesquise aqui por uma notícia\n  </div>\n\n  <ion-infinite-scroll (ionInfinite)="loadNews( $event )" *ngIf="actualPage != totalPages">\n    <ion-infinite-scroll-content></ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n</ion-content>'/*ion-inline-end:"/var/www/html/SimpleNews/simplenews-app/src/pages/pesquisar/pesquisar.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["n" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["o" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["r" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_0__providers_notice_notice__["a" /* NoticeProvider */]])
    ], PesquisarPage);
    return PesquisarPage;
}());

//# sourceMappingURL=pesquisar.js.map

/***/ })

});
//# sourceMappingURL=2.js.map