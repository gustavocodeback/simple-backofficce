webpackJsonp([16],{

/***/ 818:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EsqueciSenhaPageModule", function() { return EsqueciSenhaPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__esqueci_senha__ = __webpack_require__(843);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var EsqueciSenhaPageModule = (function () {
    function EsqueciSenhaPageModule() {
    }
    EsqueciSenhaPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__esqueci_senha__["a" /* EsqueciSenhaPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__esqueci_senha__["a" /* EsqueciSenhaPage */]),
            ],
        })
    ], EsqueciSenhaPageModule);
    return EsqueciSenhaPageModule;
}());

//# sourceMappingURL=esqueci-senha.module.js.map

/***/ }),

/***/ 843:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EsqueciSenhaPage; });
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




var EsqueciSenhaPage = (function () {
    function EsqueciSenhaPage(navCtrl, navParams, loadingCtrl, auth, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.auth = auth;
        this.alertCtrl = alertCtrl;
        // erros
        this.erro = '';
        // inicia o formulario
        this.initForm();
    }
    /**
     * initForm
     *
     * inicia o formulario
     */
    EsqueciSenhaPage.prototype.initForm = function () {
        // cria o loading
        var loading = this.loadingCtrl.create({});
        loading.present();
        // inicia um novo validador
        this.validate = new __WEBPACK_IMPORTED_MODULE_1__providers_validate_validate__["a" /* ValidateProvider */]();
        // seta as regras de validação
        var rules = {
            email: 'required|valid_email'
        };
        // seta o formulario
        this.forgotPasswordForm = this.validate.set_form(rules);
        // tira o loading
        loading.dismiss();
    };
    /**
     * forgotPassword
     *
     * faz a recuperação de senha do usuario
     */
    EsqueciSenhaPage.prototype.forgotPassword = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var loading, dados;
            return __generator(this, function (_a) {
                loading = this.loadingCtrl.create({});
                loading.dismiss();
                dados = JSON.parse(JSON.stringify(this.forgotPasswordForm.value));
                // tenta realizar a ação
                this.auth.forgotPassword(dados)
                    .then(function (successo) {
                    // redireciona pro login
                    _this.navCtrl.push('LoginPage');
                    // mostra mensagem de alerta na tela
                    _this.showAlert(successo);
                })
                    .catch(function (err) {
                    _this.erro = err;
                })
                    .then(function () { return loading.dismiss(); });
                return [2 /*return*/];
            });
        });
    };
    /**
     * showAlert
     *
     * mostra mensagem de alerta na tela
     *
     * @param msg
     */
    EsqueciSenhaPage.prototype.showAlert = function (msg) {
        var alert = this.alertCtrl.create({
            title: 'Sucesso',
            subTitle: msg,
            buttons: ['OK']
        });
        alert.present();
    };
    /**
     * back
     *
     * volta para a pagina anterior
     */
    EsqueciSenhaPage.prototype.back = function () {
        this.navCtrl.pop();
    };
    EsqueciSenhaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["m" /* Component */])({
            selector: 'page-esqueci-senha',template:/*ion-inline-start:"/var/www/html/SimpleNews/simplenews-app/src/pages/esqueci-senha/esqueci-senha.html"*/'<ion-header>\n  <ion-toolbar color="primary">\n    <ion-buttons left>\n      <button ion-button icon-only (click)="back()">\n        <ion-icon name="arrow-back"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>Recuperar senha</ion-title>\n  </ion-toolbar>\n</ion-header>\n  \n<ion-content>\n  <h1>Informe seu e-mail para recuperar sua senha!</h1>\n\n  <form id="cadastro-form" [formGroup]="forgotPasswordForm">\n\n    <ion-item no-padding>\n      <ion-label floating>E-mail</ion-label>\n      <ion-input type="email" formControlName="email"></ion-input>\n    </ion-item>\n    <div class="alert-erros" *ngIf="validate.errors( \'email\' )" margin-top>\n      <span *ngFor="let msg of validate.errors( \'email\' )">{{ msg }}<br></span>\n    </div>\n    \n    <!-- erros -->\n    <div class="alert-erros" *ngIf="erro" [innerHTML]="erro"></div>\n\n    <button ion-button block margin-top (click)="forgotPassword()" [disabled]="!forgotPasswordForm.valid">Enviar</button>\n  </form>\n</ion-content>\n  '/*ion-inline-end:"/var/www/html/SimpleNews/simplenews-app/src/pages/esqueci-senha/esqueci-senha.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["n" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["o" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["j" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_0__providers_auth_auth__["a" /* AuthProvider */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["b" /* AlertController */]])
    ], EsqueciSenhaPage);
    return EsqueciSenhaPage;
}());

//# sourceMappingURL=esqueci-senha.js.map

/***/ })

});
//# sourceMappingURL=16.js.map