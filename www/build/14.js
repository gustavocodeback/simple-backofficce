webpackJsonp([14],{

/***/ 820:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiltrarModalPageModule", function() { return FiltrarModalPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pipes_pipes_module__ = __webpack_require__(473);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__filtrar_modal__ = __webpack_require__(845);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var FiltrarModalPageModule = (function () {
    function FiltrarModalPageModule() {
    }
    FiltrarModalPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__filtrar_modal__["a" /* FiltrarModalPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__pipes_pipes_module__["a" /* PipesModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__filtrar_modal__["a" /* FiltrarModalPage */]),
            ],
        })
    ], FiltrarModalPageModule);
    return FiltrarModalPageModule;
}());

//# sourceMappingURL=filtrar-modal.module.js.map

/***/ }),

/***/ 845:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FiltrarModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_region_region__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_category_category__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular_components_loading_loading_controller__ = __webpack_require__(153);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var FiltrarModalPage = (function () {
    /**
     * Método construtor
     *
     * @param navCtrl
     * @param navParams
     * @param categoryProvider
     * @param viewCtrl
     */
    function FiltrarModalPage(navCtrl, navParams, modalCtrl, loadingCtrl, regionProvider, events, categoryProvider, viewCtrl, alertCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.regionProvider = regionProvider;
        this.events = events;
        this.categoryProvider = categoryProvider;
        this.viewCtrl = viewCtrl;
        this.alertCtrl = alertCtrl;
        /**
         * Categorias do sistema
         *
         */
        this.categories = [];
        /**
         * Regiões do sistema
         *
         */
        this.regions = [];
        /**
         * Regiao ativa
         *
         */
        this.activedRegion = '';
        /**
         * Indica se é a primeira vez organizando o feed
         *
         */
        this.firstTime = false;
        /**
         * Categorias no item ALL
         *
         */
        this.inAllCategories = [];
        // Verifica se é a primeira vez
        this.firstTime = !localStorage.getItem('already-opened') ? true : false;
        if (localStorage.getItem('categories'))
            localStorage.setItem('is_open', 'false');
        if (this.firstTime) {
            var modal = modalCtrl.create('BoasVindasPage');
            modal.present();
        }
        // Se inscreve no evento
        this.events.subscribe('update:categories', function () {
            _this.ionViewWillEnter();
        });
    }
    /**
     * Lista as catgorias salvas no sistema
     *
     */
    FiltrarModalPage.prototype.ionViewWillEnter = function () {
        // Pega as categorias
        this.categories = this.categoryProvider.listFromStorage();
        this.regions = this.regionProvider.listFromStorage();
        // Pega a regiao ativa
        var region = this.regionProvider.getActivedRegion();
        this.activedRegion = region ? region.sigla : null;
    };
    /**
     * Muda o status do actived
     *
     *
     * @param index
     */
    FiltrarModalPage.prototype.toggledActived = function (index) {
        this.categories[index].actived = !this.categories[index].actived;
    };
    /**
     * Reordena a lista de acordo com a posicao atual
     *
     * @param indexes
     */
    FiltrarModalPage.prototype.reorderList = function (indexes) {
        var element = this.categories[indexes.from];
        this.categories.splice(indexes.from, 1);
        this.categories.splice(indexes.to, 0, element);
    };
    /**
     * Quando for sair da página
     *
     */
    FiltrarModalPage.prototype.salvarAlteracoes = function () {
        // Mostra o loading
        var loading = this.loadingCtrl.create({ content: 'Salvando itens...' });
        loading.present();
        // Seta a ordem
        for (var index in this.categories) {
            this.categories[index].order = index;
        }
        // Salva no localstorage
        this.categoryProvider.saveCategoriesOnStore(this.categories);
        // Esconde o loading
        loading.dismiss();
    };
    /**
     * Abre a lista de veiculos para a categoria
     *
     * @param category
     */
    FiltrarModalPage.prototype.openList = function (category) {
        this.navCtrl.push('VeiculosPage', { category: category });
    };
    /**
     * Mostra mensagem de alerta
     *
     */
    FiltrarModalPage.prototype.showAlert = function () {
        var alert = this.alertCtrl.create({
            title: 'Informe uma categoria!',
            subTitle: 'Por gentileza, informe ao menos uma categoria para ter acesso ás notícias!',
            buttons: ['OK']
        });
        alert.present();
    };
    /**
     * Fecha o modal
     *
     */
    FiltrarModalPage.prototype.close = function () {
        // Busca alguma categoria ativa
        var aux = false;
        var inAll = 0;
        for (var _i = 0, _a = this.categories; _i < _a.length; _i++) {
            var category = _a[_i];
            if (category.actived == true) {
                aux = true;
            }
            if (category.showInAll) {
                inAll++;
            }
        }
        // verifica se existe algum para tudo
        if (inAll == 0 && aux) {
            for (var c in this.categories) {
                if (this.categories[c].actived == true) {
                    this.categories[c].showInAll = true;
                }
            }
        }
        // Executa a ação
        if (aux) {
            localStorage.setItem('already-opened', 'true');
            this.salvarAlteracoes();
            if (this.firstTime) {
                this.navCtrl.setRoot('FeedPage');
            }
            else
                this.viewCtrl.dismiss();
        }
        else {
            this.showAlert();
        }
    };
    /**
     * Quando a regiao for alterada
     *
     */
    FiltrarModalPage.prototype.changedRegion = function () {
        this.regionProvider.setActivedRegion(this.activedRegion);
    };
    FiltrarModalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-filtrar-modal',template:/*ion-inline-start:"/var/www/html/SimpleNews/simplenews-app/src/pages/filtrar-modal/filtrar-modal.html"*/'<ion-content>\n    <ion-list>\n      <h1 *ngIf="firstTime" text-center style="font-weight: 300; padding: 15px">\n        Selecione os assuntos que te interessam\n      </h1>\n      <ion-list-header>\n        Categorias\n        <span *ngIf="!firstTime" float-right [ngClass]="firstTime ? \'\' : \'with-margin\'">\n          Em tudo\n        </span>\n      </ion-list-header>\n\n      <ion-item-group reorder="true" (ionItemReorder)="reorderList($event)" side="start">\n        \n        <ion-item *ngFor="let category of categories; let i = index">\n          <ion-label>\n              <button class="button-filter" \n                      [outline]="!category.actived" \n                      (click)="toggledActived( i )"\n                      small\n                      ion-button round>\n                {{ category.name | translate }}\n              </button>\n          </ion-label>\n        \n          <ion-toggle *ngIf="!firstTime" class="btn-enable" [(ngModel)]="category.showInAll" float-right checked="false"></ion-toggle>\n          <ion-icon *ngIf="!firstTime" (click)="openList( category )" name="arrow-forward" item-end></ion-icon>\n        </ion-item>\n\n      </ion-item-group>\n\n    </ion-list>\n\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar>\n      <ion-select [(ngModel)]="activedRegion" (ionChange)="changedRegion()" style="float: left">\n        <ion-option *ngFor="let r of regions" [value]="r.sigla">\n          {{ r.name }}\n        </ion-option>\n      </ion-select>\n\n      <ion-buttons end>\n        <button ion-button color="primary" (click)="close()" round>\n          Pronto!\n        </button>\n      </ion-buttons>\n  </ion-toolbar>\n</ion-footer>\n'/*ion-inline-end:"/var/www/html/SimpleNews/simplenews-app/src/pages/filtrar-modal/filtrar-modal.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_3__providers_category_category__["a" /* CategoryProvider */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["n" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["o" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular_components_loading_loading_controller__["a" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_0__providers_region_region__["a" /* RegionProvider */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* Events */],
            __WEBPACK_IMPORTED_MODULE_3__providers_category_category__["a" /* CategoryProvider */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["r" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* AlertController */]])
    ], FiltrarModalPage);
    return FiltrarModalPage;
}());

// End of file
//# sourceMappingURL=filtrar-modal.js.map

/***/ })

});
//# sourceMappingURL=14.js.map