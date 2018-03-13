webpackJsonp([17],{

/***/ 816:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditarCategoriaPessoalPageModule", function() { return EditarCategoriaPessoalPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__editar_categoria_pessoal__ = __webpack_require__(841);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var EditarCategoriaPessoalPageModule = (function () {
    function EditarCategoriaPessoalPageModule() {
    }
    EditarCategoriaPessoalPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__editar_categoria_pessoal__["a" /* EditarCategoriaPessoalPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__editar_categoria_pessoal__["a" /* EditarCategoriaPessoalPage */]),
            ],
        })
    ], EditarCategoriaPessoalPageModule);
    return EditarCategoriaPessoalPageModule;
}());

//# sourceMappingURL=editar-categoria-pessoal.module.js.map

/***/ }),

/***/ 841:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditarCategoriaPessoalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_gateway_gateway__ = __webpack_require__(472);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_feed_pessoal_feed_pessoal__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular_components_loading_loading_controller__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(33);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var EditarCategoriaPessoalPage = (function () {
    function EditarCategoriaPessoalPage(navCtrl, navParams, loadingCtrl, viewCtrl, events, feedPessoalProvider, gatewayProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.viewCtrl = viewCtrl;
        this.events = events;
        this.feedPessoalProvider = feedPessoalProvider;
        this.gatewayProvider = gatewayProvider;
        /**
         * Feed pessoal
         */
        this.feedPessoal = [];
        /**
         * Veículos
         */
        this.gatewaysId = [];
        /**
         * Checado
         */
        this.checked = false;
    }
    /**
     * Busca o feed pessoal
     *
     */
    EditarCategoriaPessoalPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.feedPessoalProvider.get()
            .then(function (feed) {
            // Verifica se tem o feed
            if (feed.length > 0) {
                // Seta a propriedade para abrir
                feed = feed.map(function (item) {
                    item.open = false;
                    return item;
                });
                // Seta os feeds
                _this.feedPessoal = feed;
                console.log(_this.feedPessoal);
            }
            else {
                _this.feedPessoal = [];
            }
        })
            .catch(function (err) { return console.log(err); });
    };
    /**
     * Abre e fecha as categorias do menu
     * @param index
     * @param status
     */
    EditarCategoriaPessoalPage.prototype.openCategory = function (item) {
        if (this.feedPessoal)
            item.open = !item.open;
    };
    /**
     * Volta para a pagina anterior
     *
     */
    EditarCategoriaPessoalPage.prototype.back = function () {
        this.viewCtrl.dismiss();
    };
    /**
     * Pega os gateways
     *
     * @param gateway
     */
    EditarCategoriaPessoalPage.prototype.push = function (gateway) {
        // Verifica se foi selecionado
        if (gateway.checked) {
            // guarda o veiculo
            this.gatewaysId.push(gateway.id);
        }
        else
            this.gatewaysId.splice(this.gatewaysId.indexOf(gateway.id), 1);
    };
    /**
     * Remove veiculos do feed pessoal
     *
     */
    EditarCategoriaPessoalPage.prototype.remove = function () {
        var _this = this;
        // Mostra o loading
        var loading = this.loadingCtrl.create({ content: 'Retirando inscrição...' });
        loading.present();
        // Faz a chamada
        this.gatewayProvider.unfollowMany(this.gatewaysId)
            .then(function (success) {
            _this.events.publish('atualizar');
            _this.back();
        })
            .catch(function (err) { return console.log(err); })
            .then(function () { return loading.dismiss(); });
    };
    EditarCategoriaPessoalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["m" /* Component */])({
            selector: 'page-editar-categoria-pessoal',template:/*ion-inline-start:"/var/www/html/SimpleNews/simplenews-app/src/pages/editar-categoria-pessoal/editar-categoria-pessoal.html"*/'<ion-header>\n  <ion-toolbar color="primary">\n    <ion-buttons left>\n      <button ion-button icon-only (click)="back()">\n        <ion-icon name="arrow-back"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>Editar conteúdo</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <p margin-left>Feed pessoal</p>\n  <!-- FEEDS -->\n  <ion-list class="category" *ngIf="feedPessoal.length > 0">\n\n    <div *ngFor="let item of feedPessoal">\n      <div padding-right>\n        <ion-item inset class="category-item" (click)="openCategory( item )">\n          <ion-icon [name]=" ( item.open ) ? \'ios-arrow-down\' : \'ios-arrow-forward\'"></ion-icon>\n          <h2 class="category-name" margin-left>{{ item.categoria.name }}</h2>\n        </ion-item>\n      </div>\n      <!-- Categoria -->\n\n      <ion-list inset class="gateways" *ngIf="item.open" margin-left>\n        <ion-item *ngFor="let gateway of item.gateways">\n          <ion-label>{{ gateway.name }}</ion-label>\n          <ion-checkbox [(ngModel)]="gateway.checked" (click)="push( gateway )"></ion-checkbox>\n        </ion-item>\n      </ion-list>\n      <!-- Veiculos -->\n    </div>\n  </ion-list>\n\n  <ion-row>\n    <ion-col text-center>\n      <button ion-button color="danger" outline block (click)="remove()">\n        Remover\n        {{ ( gatewaysId.length > 0 ) ? \'(\' + gatewaysId.length + \')\' : \'\' }}\n      </button>\n    </ion-col>\n    <ion-col text-center>\n      <button ion-button color="dark" outline block (click)="back()">Cancelar</button>\n    </ion-col>\n  </ion-row>\n</ion-content>\n'/*ion-inline-end:"/var/www/html/SimpleNews/simplenews-app/src/pages/editar-categoria-pessoal/editar-categoria-pessoal.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_1__providers_feed_pessoal_feed_pessoal__["a" /* FeedPessoalProvider */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["n" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["o" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular_components_loading_loading_controller__["a" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["r" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["e" /* Events */],
            __WEBPACK_IMPORTED_MODULE_1__providers_feed_pessoal_feed_pessoal__["a" /* FeedPessoalProvider */],
            __WEBPACK_IMPORTED_MODULE_0__providers_gateway_gateway__["a" /* GatewayProvider */]])
    ], EditarCategoriaPessoalPage);
    return EditarCategoriaPessoalPage;
}());

// End of file
//# sourceMappingURL=editar-categoria-pessoal.js.map

/***/ })

});
//# sourceMappingURL=17.js.map