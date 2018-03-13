webpackJsonp([5],{

/***/ 830:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SuportePageModule", function() { return SuportePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__suporte__ = __webpack_require__(856);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SuportePageModule = (function () {
    function SuportePageModule() {
    }
    SuportePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__suporte__["a" /* SuportePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__suporte__["a" /* SuportePage */]),
            ],
        })
    ], SuportePageModule);
    return SuportePageModule;
}());

//# sourceMappingURL=suporte.module.js.map

/***/ }),

/***/ 856:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SuportePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_suport_suport__ = __webpack_require__(857);
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




var SuportePage = (function () {
    function SuportePage(navCtrl, navParams, loadingCtrl, suportProvider, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.suportProvider = suportProvider;
        this.alertCtrl = alertCtrl;
        // Inicializa os erros
        this.erros = '';
        this.initForm();
    }
    /**
     * Prepara o formulario
     */
    SuportePage.prototype.initForm = function () {
        // Cria o loading
        var loading = this.loadingCtrl.create();
        loading.present();
        // Inicia o validador
        this.validate = new __WEBPACK_IMPORTED_MODULE_1__providers_validate_validate__["a" /* ValidateProvider */]();
        // Seta as regras de validação
        var rules = {
            subject: 'required',
            message: 'required'
        };
        // Seta o formulario
        this.suportForm = this.validate.set_form(rules);
        // Tira o loadind
        loading.dismiss();
    };
    /**
     * Salva a mensagem
     */
    SuportePage.prototype.send = function () {
        var _this = this;
        // Gera o loading
        var loading = this.loadingCtrl.create({ content: 'Enviando sua mensagem...' });
        loading.present();
        // Pega os valores do formulario
        var dados = JSON.parse(JSON.stringify(this.suportForm.value));
        // Tenta realizar a ação
        this.suportProvider.save(dados)
            .then(function (success) {
            _this.presentAlert(true);
        })
            .catch(function (err) { return _this.presentAlert(false); })
            .then(function () { return loading.dismiss(); });
    };
    /**
     * Mensagem de alerta
     * @param sucesso
     */
    SuportePage.prototype.presentAlert = function (sucesso) {
        var _this = this;
        // Cria a mensagem
        var alert = this.alertCtrl.create({
            title: sucesso ? 'Sucesso' : 'Erro',
            subTitle: sucesso ? 'Mensagem enviada com sucesso'
                : 'Erro ao eviar sua mensagem, tente de novo mais tarde!',
            buttons: [{
                    text: 'Ok',
                    handler: function () { if (sucesso)
                        _this.suportForm.reset(); }
                }]
        });
        alert.present();
    };
    SuportePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["m" /* Component */])({
            selector: 'page-suporte',template:/*ion-inline-start:"/var/www/html/SimpleNews/simplenews-app/src/pages/suporte/suporte.html"*/'<ion-header>\n  <ion-toolbar color="primary">\n    <ion-buttons left>\n      <button ion-button menuToggle icon-only>\n        <ion-icon name=\'menu\'></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>Suporte e Sugestão</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <h1 text-center>Faça aqui sua sugestão ou tire suas dúvidas sobre o aplicativo!</h1>\n\n  <form id="form" [formGroup]="suportForm">\n    <ion-item>\n      <ion-label floating>Assunto</ion-label>\n      <ion-input type="text" formControlName="subject"></ion-input>\n    </ion-item>\n\n    <div class="alert-erros" *ngIf="validate.errors( \'subject\' )" margin-top>\n      <span *ngFor="let msg of validate.errors( \'subject\' )">{{ msg }}<br></span>\n    </div>\n\n    <ion-item>\n      <ion-label floating>Mensagem</ion-label>\n      <ion-textarea rows="10" formControlName="message"></ion-textarea>\n    </ion-item>\n\n    <div class="alert-erros" *ngIf="validate.errors( \'message\' )" margin-top>\n      <span *ngFor="let msg of validate.errors( \'message\' )">{{ msg }}<br></span>\n    </div>\n\n    <button ion-button block margin-top [disabled]="!suportForm.valid" (click)="send()">Enviar</button>\n  </form>\n</ion-content>\n'/*ion-inline-end:"/var/www/html/SimpleNews/simplenews-app/src/pages/suporte/suporte.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_0__providers_suport_suport__["a" /* SuportProvider */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["n" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["o" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["j" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_0__providers_suport_suport__["a" /* SuportProvider */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["b" /* AlertController */]])
    ], SuportePage);
    return SuportePage;
}());

//# sourceMappingURL=suporte.js.map

/***/ }),

/***/ 857:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SuportProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__auth_auth__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_api__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SuportProvider = (function () {
    function SuportProvider(api, auth) {
        this.api = api;
        this.auth = auth;
    }
    /**
     * Salva a mensagem
     */
    SuportProvider.prototype.save = function (dados) {
        // Retorna uma promessa
        return this.api.post('/suport/save', { subject: dados['subject'],
            message: dados['message'] })
            .then(function (success) { return success; })
            .catch(function (err) { return err; });
    };
    SuportProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__api_api__["a" /* ApiProvider */],
            __WEBPACK_IMPORTED_MODULE_0__auth_auth__["a" /* AuthProvider */]])
    ], SuportProvider);
    return SuportProvider;
}());

//# sourceMappingURL=suport.js.map

/***/ })

});
//# sourceMappingURL=5.js.map