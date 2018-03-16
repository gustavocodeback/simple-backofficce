webpackJsonp([12],{

/***/ 822:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login__ = __webpack_require__(847);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var LoginPageModule = (function () {
    function LoginPageModule() {
    }
    LoginPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */]),
            ],
        })
    ], LoginPageModule);
    return LoginPageModule;
}());

//# sourceMappingURL=login.module.js.map

/***/ }),

/***/ 847:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
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




var LoginPage = (function () {
    function LoginPage(navCtrl, navParams, loadingCtrl, auth, events) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.auth = auth;
        this.events = events;
        // inicia os erros
        this.erro = "";
        // Pega a pagina de redirecionamento
        this.redirectPage = this.navParams.get('redirectPage') ? true : false;
        // inicia o formulario
        this.initForm();
    }
    /**
     * initForm
     *
     * Inicia o formulario de login
     */
    LoginPage.prototype.initForm = function () {
        // cria o loading
        var loading = this.loadingCtrl.create({});
        loading.present();
        // instancia um novo validador
        this.validate = new __WEBPACK_IMPORTED_MODULE_1__providers_validate_validate__["a" /* ValidateProvider */]();
        // seta as regras de validação
        var rules = {
            email: 'required|valid_email',
            password: 'required|maxLength[18]|minLength[6]'
        };
        // seta o formulario
        this.loginForm = this.validate.set_form(rules);
        // tira o loading
        loading.dismiss();
    };
    /**
     * doLogin
     *
     * faz o login no aplicativo
     */
    LoginPage.prototype.login = function () {
        var _this = this;
        // cria o loading
        var loading = this.loadingCtrl.create({});
        loading.present();
        // pega os valores do formulario
        var dados = JSON.parse(JSON.stringify(this.loginForm.value));
        // tenta fazer o login
        this.auth.login(dados)
            .then(function (user) {
            // redireciona para as tabs
            if (_this.redirectPage) {
                _this.navCtrl.pop();
            }
            else
                _this.navCtrl.setRoot('FeedPage');
            // Dispara o evento
            _this.events.publish('atualizar:true');
            _this.events.publish('login');
        })
            .catch(function (err) {
            // seta os erros
            _this.erro = err;
        })
            .then(function () { return loading.dismiss(); });
    };
    /**
     * goToRegisterPage
     *
     * redireciona para a pagina de cadastro
     */
    LoginPage.prototype.goToRegisterPage = function () {
        this.navCtrl.push("CadastroPage");
    };
    /**
     * goToForgotPassword
     *
     * redireciona para a pagina de esqueci minha senha
     */
    LoginPage.prototype.goToForgotPasswordPage = function () {
        this.navCtrl.push("EsqueciSenhaPage");
    };
    LoginPage.prototype.back = function () {
        if (this.navCtrl.canGoBack()) {
            this.navCtrl.pop();
        }
        else
            this.navCtrl.push('FeedPage');
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"/var/www/html/SimpleNews/simplenews-app/src/pages/login/login.html"*/'<ion-content class="login-content">\n\n  <div class="logo">\n    <img src="assets/imgs/logo.png" width="100px">\n  </div>\n\n  <h1>Faça login para aproveitar ao máximo o aplicativo!</h1>\n\n  <ion-list class="form" [formGroup]="loginForm">\n      \n    <ion-item>\n      <ion-input type="email" placeholder="E-mail" formControlName="email"></ion-input>\n    </ion-item>\n    <div class="alert-erros" *ngIf="validate.errors( \'email\' )" margin-top margin-bottom>\n      <span *ngFor="let msg of validate.errors( \'email\' )">{{ msg }}<br></span>\n    </div>\n  \n    <ion-item>\n      <ion-input type="password" placeholder="Senha" formControlName="password"></ion-input>\n    </ion-item>\n    <div class="alert-erros" *ngIf="validate.errors( \'password\' )" margin-top>\n      <span *ngFor="let msg of validate.errors( \'password\' )">{{ msg }}<br></span>\n    </div>\n\n    <!-- erros -->\n    <div class="alert-erros" *ngIf="erro" [innerHTML]="erro"></div>\n    \n    <button ion-button block color="primary" margin-top margin-bottom (click)="login()">Entrar</button>\n\n    <ion-row>\n      <ion-col text-left>\n          <a (click)="back()">Voltar</a>\n      </ion-col>\n      <ion-col text-right>\n          <a (click)="goToForgotPasswordPage()">Esqueci minha senha</a>\n      </ion-col>\n    </ion-row>\n    \n    \n    \n  </ion-list>\n\n  <a class="link" (click)="goToRegisterPage()">Cadastre-se!</a>\n</ion-content>\n'/*ion-inline-end:"/var/www/html/SimpleNews/simplenews-app/src/pages/login/login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["n" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["o" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["j" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_0__providers_auth_auth__["a" /* AuthProvider */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["e" /* Events */]])
    ], LoginPage);
    return LoginPage;
}());

// End of file 
//# sourceMappingURL=login.js.map

/***/ })

});
//# sourceMappingURL=12.js.map