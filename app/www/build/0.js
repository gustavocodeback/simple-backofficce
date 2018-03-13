webpackJsonp([0],{

/***/ 819:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedPageModule", function() { return FeedPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_post_ads_post_ads_module__ = __webpack_require__(836);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pipes_pipes_module__ = __webpack_require__(473);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_post_noticia_post_noticias_module__ = __webpack_require__(834);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__feed__ = __webpack_require__(844);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__directives_directives_module__ = __webpack_require__(474);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var FeedPageModule = (function () {
    function FeedPageModule() {
    }
    FeedPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__feed__["a" /* FeedPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_5__feed__["a" /* FeedPage */]),
                __WEBPACK_IMPORTED_MODULE_2__components_post_noticia_post_noticias_module__["a" /* PostNoticiaModule */],
                __WEBPACK_IMPORTED_MODULE_0__components_post_ads_post_ads_module__["a" /* PostAdsModule */],
                __WEBPACK_IMPORTED_MODULE_1__pipes_pipes_module__["a" /* PipesModule */],
                __WEBPACK_IMPORTED_MODULE_6__directives_directives_module__["a" /* DirectivesModule */]
            ],
        })
    ], FeedPageModule);
    return FeedPageModule;
}());

//# sourceMappingURL=feed.module.js.map

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

/***/ 836:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostAdsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__post_ads__ = __webpack_require__(837);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PostAdsModule = (function () {
    function PostAdsModule() {
    }
    PostAdsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_0__post_ads__["a" /* PostAdsComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicModule */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_0__post_ads__["a" /* PostAdsComponent */]
            ]
        })
    ], PostAdsModule);
    return PostAdsModule;
}());

// End of file
//# sourceMappingURL=post-ads.module.js.map

/***/ }),

/***/ 837:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostAdsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_app_config__ = __webpack_require__(838);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PostAdsComponent = (function () {
    /**
     * Método constructor
     *
     */
    function PostAdsComponent() {
        this.publishAdd();
        this.id = this.guid();
    }
    /**
     * Quando tiverem alterações
     *
     * @param changes
     */
    PostAdsComponent.prototype.ngOnChanges = function (changes) {
        var _this = this;
        if (this.content) {
            this.content.ionScroll.subscribe(function (data) {
                _this.updateXY(data.scrollLeft, data.scrollTop);
            });
        }
    };
    /**
     * Gera um id aleatorio
     *
     */
    PostAdsComponent.prototype.guid = function () {
        var s4 = function () {
            return Math.floor((1 + Math.random()) * 0x10000)
                .toString(16)
                .substring(1);
        };
        return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
    };
    /**
     * Seta a area clicavel
     *
     * @param top
     */
    PostAdsComponent.prototype.updateXY = function (left, top) {
        var d = document.getElementById(this.id);
        if (!d)
            return;
        var w = document.getElementById(this.id).clientWidth;
        var h = document.getElementById(this.id).clientHeight;
        var x = d.offsetLeft - left;
        var y = d.offsetTop - top;
        console.log('chamou');
        if (FacebookAds)
            FacebookAds.setNativeAdClickArea(__WEBPACK_IMPORTED_MODULE_1__app_app_config__["a" /* AppConfig */].AddMobId, x, y, w, h);
    };
    ;
    /**
    * Adiciona uma Propaganda
    *
    */
    PostAdsComponent.prototype.publishAdd = function () {
        var _this = this;
        document.addEventListener("onAdLoaded", function (data) {
            if (_this.nativeAdd)
                return;
            var temp = JSON.parse(JSON.stringify(data));
            if (temp.adType == "native") {
                _this.nativeAdd = temp['adRes'];
                /* document.getElementById('adIcon').setAttribute("src", temp.adRes.icon.url);
                document.getElementById('adCover').setAttribute("src", temp.adRes.coverImage.url);
                document.getElementById('adTitle').innerHTML = temp.adRes.title;
                document.getElementById('adBody').innerHTML = temp.adRes.body;
                document.getElementById('adSocialContext').innerHTML = temp.adRes.socialContext;
                document.getElementById('adBtn').innerHTML = temp.adRes.buttonText; */
            }
        });
        if (FacebookAds) {
            FacebookAds.createNativeAd(__WEBPACK_IMPORTED_MODULE_1__app_app_config__["a" /* AppConfig */].AddMobId);
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], PostAdsComponent.prototype, "content", void 0);
    PostAdsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'post-ads',template:/*ion-inline-start:"/var/www/html/SimpleNews/simplenews-app/src/components/post-ads/post-ads.html"*/'<ion-card *ngIf="nativeAdd" [id]="id">\n  <img *ngIf="nativeAdd.coverImage" [src]="nativeAdd.coverImage.url" style="max-width: 100%; height: auto;" />\n  <ion-card-content text-wrap>\n    <ion-item>\n      <ion-avatar item-left>\n        <img  *ngIf="nativeAdd.icon" [src]="nativeAdd.icon.url" />\n      </ion-avatar>\n      <h2>\n        {{ nativeAdd.title }}\n      </h2>\n      <p>\n        {{ nativeAdd.body }}\n      </p>\n    </ion-item>\n    <ion-row>\n      <ion-col center text-left width-70 small style="font-size: x-small;">\n        <span small>\n          {{ nativeAdd.socialContext }}\n        </span>\n      </ion-col>\n      <ion-col center text-right width-30>\n        <button ion-button small color="secondary">\n          {{ nativeAdd.buttonText }}\n        </button>\n      </ion-col>\n    </ion-row>\n  </ion-card-content>\n</ion-card>\n'/*ion-inline-end:"/var/www/html/SimpleNews/simplenews-app/src/components/post-ads/post-ads.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], PostAdsComponent);
    return PostAdsComponent;
}());

// End of file
//# sourceMappingURL=post-ads.js.map

/***/ }),

/***/ 838:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppConfig; });
var AppConfig = {
    AddMobId: '176263959826303_176264093159623'
};
// End of file
//# sourceMappingURL=app.config.js.map

/***/ }),

/***/ 844:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FeedPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_notice_notice__ = __webpack_require__(471);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_category_category__ = __webpack_require__(154);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FeedPage = (function () {
    /**
     * Método construtor
     *
     * @param navCtrl
     * @param navParams
     * @param modalCtrl
     * @param notice
     * @param categoryProvider
     */
    function FeedPage(navCtrl, navParams, modalCtrl, notice, viewCtrl, events, categoryProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.notice = notice;
        this.viewCtrl = viewCtrl;
        this.events = events;
        this.categoryProvider = categoryProvider;
        /**
         * Indica se esta ativo
         */
        this.ativo = false;
        /**
         * Total de paginas
         *
         */
        this.totalPages = 1;
        /**
         * Pagina atual
         *
         */
        this.actualPage = 0;
        /**
         * Inidica se esta no request ou nao
         *
         */
        this.isOnRequest = false;
        /**
         * Categorias e filtros
         *
         */
        this.categories = [];
        /**
         * Categorias no item ALL
         *
         */
        this.inAllCategories = [];
        /**
         * Noticias sendo listadas
         *
         */
        this.notices = [];
        /**
         * Filtro selecionado
         *
         */
        this.currentFilter = null;
        /**
         * Feed pessoal
         *
         */
        this.feedPessoalName = '';
        // Seta o nome do feed pessoal
        this.feedPessoalName = (this.navParams.get('name')) ?
            this.navParams.get('name') : '';
    }
    /**
     * Carrega as primeiras noticias
     *
     */
    FeedPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        // carrega as noticias
        this.loadNews(false, true);
        // Se inscreve no evento
        this.events.subscribe('update:categories', function () {
            _this.categories = _this.categoryProvider.listActived();
            _this.inAllCategories = _this.categoryProvider.listInAll();
        });
        // Pega as categorias
        this.categories = this.categoryProvider.listActived();
        this.inAllCategories = this.categoryProvider.listInAll();
    };
    /**
     * Seta a categoria ativa
     *
     * @param id
     */
    FeedPage.prototype.setActivedCategory = function (id) {
        this.currentFilter = id;
        this.loadNews(false, true);
    };
    /**
     * Carrega novas noticias
     *
     * @param event
     * @param reset
     */
    FeedPage.prototype.loadNews = function (event, reset) {
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
        // Seta as categorias de busca
        var cats = this.inAllCategories;
        if (this.currentFilter) {
            cats = [{ id: this.currentFilter }];
        }
        // Caso nao venha nenhuma categoria
        if (cats.length == 0) {
            cats = this.categoryProvider.listInAll();
        }
        // busca as noticias
        this.notice.getNotices(parseInt(this.actualPage) + 1, cats)
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
                _this.content.scrollToTop();
            }
            // seta as paginações
            _this.totalPages = notices.total_pages;
            _this.actualPage = notices.page;
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
     * Abre a pagina de pesquisa
     *
     */
    FeedPage.prototype.pesquisar = function () {
        this.navCtrl.push('PesquisarPage');
    };
    /**
     * Abre o modal de filtro
     *
     */
    FeedPage.prototype.filtrarModal = function (is_first_time) {
        var _this = this;
        if (is_first_time === void 0) { is_first_time = false; }
        var modal = this.modalCtrl.create('FiltrarModalPage', { is_first_time: is_first_time });
        modal.present();
        modal.onDidDismiss(function (data) {
            _this.loadNews(false, true);
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* Content */])
    ], FeedPage.prototype, "content", void 0);
    FeedPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-feed',template:/*ion-inline-start:"/var/www/html/SimpleNews/simplenews-app/src/pages/feed/feed.html"*/'<ion-header>\n  <ion-toolbar scroll-hide-shrink color="primary">\n    <ion-buttons left>\n      <button ion-button menuToggle icon-only>\n        <ion-icon name=\'menu\'></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>Simple</ion-title>\n    <ion-buttons right>\n      <button ion-button icon-only (click)="loadNews(false, true )">\n        <ion-icon [ngClass]=" isOnRequest ? \'rotate-it\' : \'\'" name="refresh"></ion-icon>\n      </button>\n      <button ion-button icon-only (click)="pesquisar()">\n        <ion-icon name="search"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n\n  <ion-toolbar class="feed-pessoal" *ngIf="feedPessoalName">\n    <div *ngIf="feedPessoalName">\n      <h1 class="title">{{ feedPessoalName }}</h1>\n    </div>\n  </ion-toolbar>\n\n  <ion-toolbar scroll-hide-translate *ngIf="!feedPessoalName">\n    <div class="scroll-filter">\n      <button class="button-filter" small outline ion-button round (click)="filtrarModal()">\n          <ion-icon name="add"></ion-icon>\n      </button>\n      <button [outline]="currentFilter != null" \n              class="button-filter" \n              small \n              (click)="setActivedCategory( null )"\n              ion-button round>\n          Tudo\n      </button>\n      <button *ngFor="let category of categories" \n              class="button-filter" \n              ion-button\n              small\n              [outline]="!currentFilter || currentFilter != category.id"\n              round\n              (click)="setActivedCategory( category.id )">\n        {{ category.name | translate }}\n      </button>\n    </div>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class="light-bg" [scroll-hide]="viewCtrl">   \n  \n  <div class="load-more" *ngIf="totalPages == 0">\n    <br>\n    <span>Nenhum veículo selecionado</span>\n  </div>\n  <div class="load-more" *ngIf="isOnRequest">\n    <br>\n    <ion-spinner></ion-spinner>\n  </div>\n\n  <div  *ngFor="let notice of notices">\n    <post-noticia *ngIf="!notice[\'isAdd\']" [notice]="notice"></post-noticia>\n    <post-ads  *ngIf="notice[\'isAdd\']"  [content]="content"></post-ads>\n  </div>\n\n  <ion-infinite-scroll (ionInfinite)="loadNews( $event )" *ngIf="actualPage != totalPages">\n    <ion-infinite-scroll-content  loadingSpinner="bubbles"\n                                  loadingText="Carregando mais notícias...">\n    </ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n</ion-content>\n'/*ion-inline-end:"/var/www/html/SimpleNews/simplenews-app/src/pages/feed/feed.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_3__providers_category_category__["a" /* CategoryProvider */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["n" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["o" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_0__providers_notice_notice__["a" /* NoticeProvider */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["r" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* Events */],
            __WEBPACK_IMPORTED_MODULE_3__providers_category_category__["a" /* CategoryProvider */]])
    ], FeedPage);
    return FeedPage;
}());

// End of file 
//# sourceMappingURL=feed.js.map

/***/ })

});
//# sourceMappingURL=0.js.map