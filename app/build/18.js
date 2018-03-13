webpackJsonp([18],{

/***/ 815:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CadastroPageModule", function() { return CadastroPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cadastro__ = __webpack_require__(840);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CadastroPageModule = (function () {
    function CadastroPageModule() {
    }
    CadastroPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__cadastro__["a" /* CadastroPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__cadastro__["a" /* CadastroPage */]),
            ],
        })
    ], CadastroPageModule);
    return CadastroPageModule;
}());

//# sourceMappingURL=cadastro.module.js.map

/***/ }),

/***/ 840:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CadastroPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_auth_auth__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_validate_validate__ = __webpack_require__(470);
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




var CadastroPage = (function () {
    function CadastroPage(navCtrl, navParams, loadingCtrl, auth) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.auth = auth;
        // Inicia a variavel de erros
        this.erro = '';
        // Inicia o formulario de cadastro
        this.initForm();
    }
    /**
     * initForm
     *
     * Inicializa o formulario de cadastro
     */
    CadastroPage.prototype.initForm = function () {
        // Cria o loading e mostra na tela
        var loading = this.loadingCtrl.create({});
        loading.present();
        // Instancia um novo validador
        this.validate = new __WEBPACK_IMPORTED_MODULE_1__providers_validate_validate__["a" /* ValidateProvider */]();
        // Seta as regras de validação
        var rules = {
            name: 'required',
            email: 'required|valid_email',
            password: 'required|maxLength[18]|minLength[6]|matches[confirm]',
            confirm: 'required|maxLength[18]|minLength[6]|matches[password]'
        };
        // Seta o formulario
        this.registerForm = this.validate.set_form(rules);
        // Tira o loading
        loading.dismiss();
    };
    /**
     * cadastrar
     *
     * Faz o cadastro do usuario
     */
    CadastroPage.prototype.signup = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var loading, dados;
            return __generator(this, function (_a) {
                loading = this.loadingCtrl.create({});
                loading.present();
                dados = JSON.parse(JSON.stringify(this.registerForm.value));
                // Tenta cadastrar o usuario
                this.auth.signup(dados)
                    .then(function (user) {
                    _this.auth.login(dados)
                        .then(function () { })
                        .catch(function () { })
                        .then(function () {
                        // Redireciona para a pagina de feed
                        _this.navCtrl.push('FeedPage');
                    });
                })
                    .catch(function (err) {
                    // Seta os erros
                    _this.erro = err;
                })
                    .then(function () { return loading.dismiss(); });
                return [2 /*return*/];
            });
        });
    };
    /**
     * back
     *
     * volta para a pagina anterior
     */
    CadastroPage.prototype.back = function () {
        this.navCtrl.pop();
    };
    CadastroPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["m" /* Component */])({
            selector: 'page-cadastro',template:/*ion-inline-start:"/var/www/html/SimpleNews/simplenews-app/src/pages/cadastro/cadastro.html"*/'<ion-header>\n  <ion-toolbar color="primary">\n    <ion-buttons left>\n      <button ion-button icon-only (click)="back()">\n        <ion-icon name="arrow-back"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>Cadastrar</ion-title>\n  </ion-toolbar>\n</ion-header>\n  \n<ion-content>\n  <h1>Faça aqui o seu cadastro no aplicativo!</h1>\n\n  <form id="cadastro-form" [formGroup]="registerForm">\n    \n    <ion-item no-padding>\n      <ion-label floating>Nome</ion-label>\n      <ion-input type="text" formControlName="name"></ion-input>\n    </ion-item>\n    <div class="alert-erros" *ngIf="validate.errors( \'name\' )" margin-top>\n      <span *ngFor="let msg of validate.errors( \'name\' )">{{ msg }}<br></span>\n    </div>\n\n    <ion-item no-padding>\n      <ion-label floating>E-mail</ion-label>\n      <ion-input type="email" formControlName="email"></ion-input>\n    </ion-item>\n    <div class="alert-erros" *ngIf="validate.errors( \'email\' )" margin-top>\n      <span *ngFor="let msg of validate.errors( \'email\' )">{{ msg }}<br></span>\n    </div>\n  \n    <ion-item no-padding>\n      <ion-label floating>Senha</ion-label>\n      <ion-input type="password" formControlName="password"></ion-input>\n    </ion-item>\n    <div class="alert-erros" *ngIf="validate.errors( \'password\' )" margin-top>\n      <span *ngFor="let msg of validate.errors( \'password\' )">{{ msg }}<br></span>\n    </div>\n\n    <ion-item no-padding>\n      <ion-label floating>Confirmar Senha</ion-label>\n      <ion-input type="password" formControlName="confirm"></ion-input>\n    </ion-item>\n    <div class="alert-erros" *ngIf="validate.errors( \'confirm\' )" margin-top>\n      <span *ngFor="let msg of validate.errors( \'confirm\' )">{{ msg }}<br></span>\n    </div>\n    \n    <!-- erros -->\n    <div class="alert-erros" *ngIf="erro" [innerHTML]="erro"></div>\n\n    <button ion-button block margin-top (click)="signup()" [disabled]="!registerForm.valid">Cadastrar</button>\n  </form>\n</ion-content>\n  '/*ion-inline-end:"/var/www/html/SimpleNews/simplenews-app/src/pages/cadastro/cadastro.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["n" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["o" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["j" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_0__providers_auth_auth__["a" /* AuthProvider */]])
    ], CadastroPage);
    return CadastroPage;
}());

//# sourceMappingURL=cadastro.js.map

/***/ })

});
//# sourceMappingURL=18.js.map