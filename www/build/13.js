webpackJsonp([13],{

/***/ 821:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FollowModalPageModule", function() { return FollowModalPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__follow_modal__ = __webpack_require__(846);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var FollowModalPageModule = (function () {
    function FollowModalPageModule() {
    }
    FollowModalPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__follow_modal__["a" /* FollowModalPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__follow_modal__["a" /* FollowModalPage */]),
            ],
        })
    ], FollowModalPageModule);
    return FollowModalPageModule;
}());

//# sourceMappingURL=follow-modal.module.js.map

/***/ }),

/***/ 846:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FollowModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_gateway_gateway__ = __webpack_require__(472);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_auth_auth__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_personal_category_personal_category__ = __webpack_require__(478);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_validate_validate__ = __webpack_require__(470);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular__ = __webpack_require__(33);
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






var FollowModalPage = (function () {
    /**
     * Método construtor
     *
     * @param navCtrl
     * @param navParams
     * @param viewCtrl
     * @param loadingCtrl
     * @param personalCategory
     * @param auth
     * @param gate
     */
    function FollowModalPage(navCtrl, navParams, viewCtrl, loadingCtrl, personalCategory, auth, gate, events) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.loadingCtrl = loadingCtrl;
        this.personalCategory = personalCategory;
        this.auth = auth;
        this.gate = gate;
        this.events = events;
        // categorias exemplo
        this.categorias = [];
        // veiculo
        this.gateway = {};
        // Se deseja criar uma nova categoria
        this.criar = false;
        // pega o id do veiculo
        this.gateway = this.navParams.get('gateway');
    }
    /**
     * Quando entrar na pagina
     *
     */
    FollowModalPage.prototype.ionViewDidEnter = function () {
        return __awaiter(this, void 0, void 0, function () {
            var loading, _a, error_1;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        loading = this.loadingCtrl.create({ content: 'Carregando categorias pessoais...' });
                        loading.present();
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 3, , 4]);
                        // Pega as categorias pessoais
                        _a = this;
                        return [4 /*yield*/, this.personalCategory.list()];
                    case 2:
                        // Pega as categorias pessoais
                        _a.categorias = _b.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        error_1 = _b.sent();
                        console.log(error_1);
                        return [3 /*break*/, 4];
                    case 4:
                        // Esconde o loading
                        loading.dismiss();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * saveFollow
     *
     * salva o follow do usuario
     */
    FollowModalPage.prototype.saveFollow = function (personalCategoryId) {
        var _this = this;
        if (personalCategoryId === void 0) { personalCategoryId = false; }
        // salva o follow
        this.gate.follow(this.gateway['id'], personalCategoryId)
            .then(function (success) {
            // Fecha o modal
            _this.viewCtrl.dismiss({ 'saved': true });
            // Dispara o evento
            _this.events.publish('atualizar');
        })
            .catch(function (err) {
            console.log(err);
            _this.viewCtrl.dismiss({ 'saved': false });
        });
    };
    /**
     * saveCategory
     */
    FollowModalPage.prototype.saveCategory = function () {
        var _this = this;
        // Verifica se o usuário está logado
        if (!this.auth.user()) {
            this.navCtrl.push('LoginPage');
            return;
        }
        // recebe os dados do formulario
        var dados = JSON.parse(JSON.stringify(this.categoryForm.value));
        dados.user_id = this.auth.user().id;
        // tenta salvar a categoria
        this.personalCategory.saveCategory(dados)
            .then(function (personalCategory) {
            // Esconde o formulário
            _this.categoryForm.reset();
            _this.criar = false;
            _this.categorias.push(personalCategory);
            _this.saveFollow(personalCategory['id']);
            return;
        })
            .catch(function (err) {
            console.log(err);
            _this.viewCtrl.dismiss({ 'saved': false });
        });
    };
    /**
     * __initForm
     *
     * Inicia o formulario de nova categoria
     */
    FollowModalPage.prototype.__initForm = function () {
        // instancia um novo validador
        this.validate = new __WEBPACK_IMPORTED_MODULE_3__providers_validate_validate__["a" /* ValidateProvider */]();
        // seta as regras de validação
        var rules = {
            name: 'required|valid_email',
        };
        // seta o formulario
        this.categoryForm = this.validate.set_form(rules);
    };
    /**
     * criarCategoria
     *
     * cria uma nova categoria pessoal
     */
    FollowModalPage.prototype.criarCategoria = function () {
        if (this.criar == false) {
            this.criar = true;
            this.__initForm();
        }
        else {
            this.criar = false;
        }
    };
    /**
     * cancel
     *
     * cancela a ação
     */
    FollowModalPage.prototype.cancel = function () {
        this.viewCtrl.dismiss();
    };
    FollowModalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["m" /* Component */])({
            selector: 'page-follow-modal',template:/*ion-inline-start:"/var/www/html/SimpleNews/simplenews-app/src/pages/follow-modal/follow-modal.html"*/'<ion-content class="content-modal">\n  <h1>Seguir {{ gateway[\'name\'] }}</h1>\n  <small>Selecione ou crie uma coleção</small>\n\n  <!-- categoria que o veiculo pertence -->\n  <ion-list no-lines margin-top *ngIf="gateway[\'category\']">\n    <button ion-item (click)="saveFollow()">\n      <ion-icon name="return-right"></ion-icon>\n      {{ gateway[\'category\'] }}\n    </button> \n  </ion-list>\n\n  <!-- categorias que o usuario ja possui -->\n  <ion-list no-lines>\n    <ion-list-header>\n      Categorias pessoais\n    </ion-list-header>\n    <div ion-item *ngFor="let categoria of categorias" (click)="saveFollow( categoria.id )">\n      <ion-icon name="return-right"></ion-icon>\n      {{ categoria.name }}\n    </div> \n    <button ion-item text-center *ngIf="!criar" (click)="criarCategoria()">\n      Criar nova categoria\n    </button>\n    <div *ngIf="criar" [formGroup]="categoryForm">\n        <ion-input class="input-category" type="text" formControlName="name"></ion-input>\n        <button class="button-create" ion-button (click)="saveCategory()">Criar</button>\n    </div>\n  </ion-list>\n\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar>\n    <ion-buttons start>\n      <button ion-button (click)="cancel()">\n        Cancelar\n      </button> \n    </ion-buttons>\n  </ion-toolbar>\n</ion-footer>'/*ion-inline-end:"/var/www/html/SimpleNews/simplenews-app/src/pages/follow-modal/follow-modal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5_ionic_angular__["n" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["o" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["r" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["j" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_personal_category_personal_category__["a" /* PersonalCategoryProvider */],
            __WEBPACK_IMPORTED_MODULE_1__providers_auth_auth__["a" /* AuthProvider */],
            __WEBPACK_IMPORTED_MODULE_0__providers_gateway_gateway__["a" /* GatewayProvider */],
            __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["e" /* Events */]])
    ], FollowModalPage);
    return FollowModalPage;
}());

// End of file
//# sourceMappingURL=follow-modal.js.map

/***/ })

});
//# sourceMappingURL=13.js.map