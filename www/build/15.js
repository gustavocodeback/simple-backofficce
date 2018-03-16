webpackJsonp([15],{

/***/ 817:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExplorarPageModule", function() { return ExplorarPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pipes_pipes_module__ = __webpack_require__(473);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__explorar__ = __webpack_require__(842);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ExplorarPageModule = (function () {
    function ExplorarPageModule() {
    }
    ExplorarPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__explorar__["a" /* ExplorarPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__pipes_pipes_module__["a" /* PipesModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__explorar__["a" /* ExplorarPage */]),
            ],
        })
    ], ExplorarPageModule);
    return ExplorarPageModule;
}());

//# sourceMappingURL=explorar.module.js.map

/***/ }),

/***/ 842:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExplorarPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_region_region__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_category_category__ = __webpack_require__(154);
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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




var ExplorarPage = (function () {
    /**
     * Método constructor
     *
     * @param navCtrl
     * @param navParams
     * @param modalCtrl
     * @param categoryProvider
     */
    function ExplorarPage(navCtrl, navParams, modalCtrl, regionsProvider, categoryProvider, events) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.regionsProvider = regionsProvider;
        this.categoryProvider = categoryProvider;
        this.events = events;
        // Array grande
        this.categoriesBig = [];
        // Array menor
        this.categoriesSmall = [];
        /**
         * Regioes do sistema
         *
         */
        this.regions = [];
    }
    /**
     * Quando a view entrar
     *
     */
    ExplorarPage.prototype.ionViewDidEnter = function () {
        return __awaiter(this, void 0, void 0, function () {
            var categories;
            return __generator(this, function (_a) {
                categories = this.categoryProvider.listFromStorage();
                this.regions = this.regionsProvider.listFromStorage();
                // Verifica se existem categorias pequenas
                if (categories.length <= 2) {
                    this.categoriesBig = categories;
                }
                else {
                    this.categoriesBig = categories.slice(0, 2);
                    this.categoriesSmall = categories.slice(2, categories.length);
                }
                return [2 /*return*/];
            });
        });
    };
    /**
     * pesquisar
     */
    ExplorarPage.prototype.pesquisar = function () {
        var modal = this.modalCtrl.create("PesquisarPage");
        modal.present();
    };
    /**
     * click
     */
    ExplorarPage.prototype.openList = function (category) {
        this.navCtrl.push('VeiculosPage', { category: category });
    };
    /**
     * Seta a regiao ativa
     *
     * @param r
     */
    ExplorarPage.prototype.setRegion = function (r) {
        // Seta a regiao no localstorage
        this.regionsProvider.setActivedRegion(this.regions[r].sigla);
        // Retira o actived de todos os outros itens
        this.regions = this.regions.map(function (item) {
            item.actived = false;
            return item;
        });
        // Seta o actived do item atual
        this.regions[r].actived = true;
    };
    /**
     * Abre o modal de pesquisa
     *
     */
    ExplorarPage.prototype.search = function () {
        var modal = this.modalCtrl.create('PesquisarVeiculoPage');
        modal.present();
    };
    ExplorarPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["m" /* Component */])({
            selector: 'page-explorar',template:/*ion-inline-start:"/var/www/html/SimpleNews/simplenews-app/src/pages/explorar/explorar.html"*/'<ion-header>\n  <ion-toolbar color="primary">\n    <ion-buttons left>\n      <button ion-button menuToggle icon-only>\n        <ion-icon name=\'menu\'></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>Explorar</ion-title>\n    <ion-buttons right>\n      <button ion-button icon-only (click)="search()">\n        <ion-icon name=\'search\'></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n  \n<ion-content class="light-bg">\n\n  <!-- TELA 1 -->\n  <div class="explore-content">\n    <h2>Explore</h2>\n\n    <div class="card-background-page">\n      <ion-card class="card-explore" (click)="openList( categoryBig )" *ngFor="let categoryBig of categoriesBig">\n        <img [src]="categoryBig.midia">\n        <div class="titles"></div>\n        <div class="card-title">{{ categoryBig.name | translate }}</div>\n      </ion-card>\n    </div><!-- categorias grandes -->\n\n    <div *ngFor="let smCat of categoriesSmall" (click)="openList( smCat )" class="small-cat">\n      <img [src]="smCat.midia">\n      <div class="title-content">\n        <span class="title">\n          {{ smCat.name | translate }}\n        </span>\n      </div>\n    </div><!-- categorias pequenas -->\n\n    <ul class="buttons-actions">\n      <li *ngFor="let r of regions; let i = index" (click)="setRegion( i )" [ngClass]="r.actived ? \'active\' : \'\'">\n        {{ r.sigla }}\n      </li>\n    </ul>\n\n  </div>\n</ion-content>  '/*ion-inline-end:"/var/www/html/SimpleNews/simplenews-app/src/pages/explorar/explorar.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_1__providers_category_category__["a" /* CategoryProvider */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["n" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["o" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["l" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_0__providers_region_region__["a" /* RegionProvider */],
            __WEBPACK_IMPORTED_MODULE_1__providers_category_category__["a" /* CategoryProvider */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["e" /* Events */]])
    ], ExplorarPage);
    return ExplorarPage;
}());

// End of file
//# sourceMappingURL=explorar.js.map

/***/ })

});
//# sourceMappingURL=15.js.map