webpackJsonp([7],{

/***/ 833:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VeiculosPageModule", function() { return VeiculosPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pipes_pipes_module__ = __webpack_require__(473);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__veiculos__ = __webpack_require__(860);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var VeiculosPageModule = (function () {
    function VeiculosPageModule() {
    }
    VeiculosPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__veiculos__["a" /* VeiculosPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__pipes_pipes_module__["a" /* PipesModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__veiculos__["a" /* VeiculosPage */]),
            ],
        })
    ], VeiculosPageModule);
    return VeiculosPageModule;
}());

//# sourceMappingURL=veiculos.module.js.map

/***/ }),

/***/ 860:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VeiculosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular_components_loading_loading_controller__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_auth_auth__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_gateway_gateway__ = __webpack_require__(472);
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





var VeiculosPage = (function () {
    /**
     * Método constructor
     *
     * @param navCtrl
     * @param modalCtrl
     * @param navParams
     */
    function VeiculosPage(navCtrl, modalCtrl, gatewayProvider, navParams, authProvider, app, auth, loadingCtrl, events) {
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.gatewayProvider = gatewayProvider;
        this.navParams = navParams;
        this.authProvider = authProvider;
        this.app = app;
        this.auth = auth;
        this.loadingCtrl = loadingCtrl;
        this.events = events;
        /**
         * Categoria sendo pesquisada
         *
         */
        this.category = null;
        /**
         * Gateways encontrados
         *
         */
        this.gateways = [];
        /**
         * Gateways seguidos
         *
         */
        this.following = [];
        /**
         * Gateways nao seguindos
         *
         */
        this.notFollowing = [];
        /**
         * Indica se algum request esta sendo feita
         *
         */
        this.onRequest = false;
        /**
         * Query de busca
         *
         */
        this.query = '';
        /**
         * Página atual
         *
         */
        this.currentPage = 1;
        /**
         * Total de páginas
         *
         */
        this.totalPages = 1;
        // Obtem a categoria de pesquisa
        this.category = this.navParams.get('category');
        if (!this.category)
            this.back();
    }
    /**
     * Quando entrar na view
     *
     */
    VeiculosPage.prototype.ionViewDidEnter = function () {
        this.updateList(true);
    };
    /**
     * Pega os itens
     *
     */
    VeiculosPage.prototype.updateList = function (reset) {
        var _this = this;
        if (reset === void 0) { reset = false; }
        if (this.onRequest)
            return;
        this.onRequest = true;
        // Verifica se deve resetar
        if (reset) {
            this.currentPage = 1;
            this.totalPages = 1;
        }
        // Seta a página a ser carregada
        var p = reset ? 1 : parseInt(this.currentPage.toString()) + 1;
        // Faz a requisição
        this.gatewayProvider.getGatewayByCategory(this.query, this.category.id, p)
            .then(function (gateways) {
            // Seta os parametros
            _this.currentPage = gateways.page;
            _this.totalPages = gateways.total_pages;
            // Verifica se deve resetar ou não
            if (reset) {
                _this.gateways = gateways.data;
            }
            else {
                for (var _i = 0, _a = gateways.data; _i < _a.length; _i++) {
                    var gateway = _a[_i];
                    _this.gateways.push(gateway);
                }
            }
            // Seta od feeds
            _this.following = _this.gateways.filter(function (value) { return !value.muted; });
            _this.notFollowing = _this.gateways.filter(function (value) { return value.muted; });
        })
            .catch(function (e) { return console.log(e); })
            .then(function () { return _this.onRequest = false; });
    };
    /**
     * Abre o perfil da notícia
     *
     */
    VeiculosPage.prototype.perfilNoticia = function (id) {
        this.navCtrl.push("PerfilNoticiaPage", { id: id });
    };
    /**
     * Fecha a pagina
     *
     */
    VeiculosPage.prototype.back = function () {
        if (this.navCtrl.canGoBack()) {
            this.navCtrl.pop();
        }
        else
            this.navCtrl.push('FeedPage');
    };
    /**
     * Segue o veiculo
     *
     * @param gateway
     */
    VeiculosPage.prototype.follow = function (gateway) {
        var _this = this;
        // verifica está logado
        var user = this.authProvider.user();
        // verifica se veio user
        if (user) {
            var modal = this.modalCtrl.create('FollowModalPage', { gateway: gateway });
            modal.onDidDismiss(function (data) {
                // Verifica se salvou
                if (data)
                    _this.updateList(true);
            });
            modal.present();
        }
        else {
            this.navCtrl.push("LoginPage", { redirectPage: true });
        }
    };
    /**
     * Deixa de seguir o veiculo
     *
     * @param gateway_id
     */
    VeiculosPage.prototype.unfollow = function (gateway_id) {
        var _this = this;
        // Mostra o loading
        var loading = this.loadingCtrl.create({ content: 'Retirando inscrição...' });
        loading.present();
        // Faz a chamada
        this.gatewayProvider.unfollow(gateway_id)
            .then(function (success) {
            // Faz as atualizações
            _this.updateList(true);
            _this.events.publish('atualizar');
        })
            .catch(function (err) { return console.log(false); })
            .then(function () { return loading.dismiss(); });
    };
    /**
     * Muda o status
     *
     */
    VeiculosPage.prototype.toggleMuted = function (gateway) {
        return __awaiter(this, void 0, void 0, function () {
            var user, loading, method, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        user = this.auth.user();
                        if (!user) return [3 /*break*/, 5];
                        loading = this.loadingCtrl.create({
                            content: gateway['muted'] ? 'Habilidatando função' : 'Desabilitando função'
                        });
                        loading.present();
                        method = gateway['muted'] ? 'unmute' : 'mute';
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.gatewayProvider[method](gateway['id'])];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        error_1 = _a.sent();
                        console.log(error_1);
                        return [3 /*break*/, 4];
                    case 4:
                        // Esconde o loading
                        loading.dismiss();
                        this.updateList(true);
                        return [3 /*break*/, 6];
                    case 5:
                        this.navCtrl.push("LoginPage", { redirectPage: true });
                        _a.label = 6;
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    VeiculosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["m" /* Component */])({
            selector: 'page-veiculos',template:/*ion-inline-start:"/var/www/html/SimpleNews/simplenews-app/src/pages/veiculos/veiculos.html"*/'<ion-header>\n  <ion-toolbar color="primary">\n    <ion-title *ngIf="category">{{ category.name | translate }}</ion-title>\n    <ion-buttons left>\n      <button ion-button icon-only (click)="back()">\n        <ion-icon name=\'arrow-back\'></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n  <ion-toolbar color="primary">\n    <ion-searchbar [(ngModel)]="query"\n                    (ionInput)="updateList( true )"></ion-searchbar>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class="categories-veicles">\n\n    <!-- SEGUINDO -->\n    <ion-list *ngIf="following.length > 0">\n      <ion-list-header class="title-list">\n        Fontes Selecionadas\n      </ion-list-header>\n      <ion-item class="font-item" *ngFor="let gateway of following">\n        <div no-padding (click)="perfilNoticia( gateway[\'id\'] )" ion-item>\n          <ion-thumbnail item-start class="img-fonts">\n            <img [src]="gateway[\'image\']">\n          </ion-thumbnail>\n          <h2 margin-left>{{ gateway[\'name\'] }}</h2>\n          <p margin-left>{{ gateway[\'subscriptions\'] }} leitores</p>\n        </div>\n\n        <ion-icon style="margin-right: 20px" *ngIf="gateway[\'status\'] == \'U\'" item-end name="add" color="dark-grey" (click)="follow( gateway )"></ion-icon>\n        <ion-icon style="margin-right: 20px" *ngIf="gateway[\'status\'] == \'F\'" item-end name="remove" color="dark-grey" (click)="unfollow( gateway[\'id\'] )"></ion-icon>\n        <ion-icon item-end name="eye-off" color="dark-grey" (click)="toggleMuted( gateway )"></ion-icon>\n      </ion-item>\n    </ion-list>\n\n    <!-- NÃO SEGUINDO -->\n    <ion-list *ngIf="notFollowing.length > 0">\n      <ion-list-header class="title-list">\n        Outras Fontes\n      </ion-list-header>\n      <ion-item class="font-item" *ngFor="let gateway of notFollowing">\n        <div no-padding (click)="perfilNoticia( gateway[\'id\'] )" ion-item>\n          <ion-thumbnail item-start class="img-fonts">\n            <img [src]="gateway[\'image\']">\n          </ion-thumbnail>\n          <h2 margin-left>{{ gateway[\'name\'] }}</h2>\n          <p margin-left>{{ gateway[\'subscriptions\'] }} leitores</p>\n        </div>\n\n        <ion-icon style="margin-right: 20px" *ngIf="gateway[\'status\'] == \'U\'" item-end name="add" color="dark-grey" (click)="follow( gateway )"></ion-icon>\n        <ion-icon style="margin-right: 20px" *ngIf="gateway[\'status\'] == \'F\'" item-end name="remove" color="dark-grey" (click)="unfollow( gateway[\'id\'] )"></ion-icon>\n        <ion-icon item-end name="eye" color="dark-grey" (click)="toggleMuted( gateway )"></ion-icon>\n      </ion-item>\n    </ion-list>\n  \n  </div>\n  <div margin-top class="load-more" *ngIf="totalPages == 0">\n    <span>Nenhum veículo encontrado</span>\n  </div>\n  <div class="load-more" *ngIf="totalPages > 0" (click)="updateList()">\n    <span *ngIf="!onRequest && currentPage != totalPages">Carregar mais</span>\n    <ion-spinner *ngIf="onRequest"></ion-spinner>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/var/www/html/SimpleNews/simplenews-app/src/pages/veiculos/veiculos.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["n" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["l" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_gateway_gateway__["a" /* GatewayProvider */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["o" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1__providers_auth_auth__["a" /* AuthProvider */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["c" /* App */],
            __WEBPACK_IMPORTED_MODULE_1__providers_auth_auth__["a" /* AuthProvider */],
            __WEBPACK_IMPORTED_MODULE_0_ionic_angular_components_loading_loading_controller__["a" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["e" /* Events */]])
    ], VeiculosPage);
    return VeiculosPage;
}());

// End of file
//# sourceMappingURL=veiculos.js.map

/***/ })

});
//# sourceMappingURL=7.js.map