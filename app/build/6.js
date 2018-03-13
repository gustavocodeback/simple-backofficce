webpackJsonp([6],{

/***/ 827:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PerfilUsuarioPageModule", function() { return PerfilUsuarioPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__perfil_usuario__ = __webpack_require__(852);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PerfilUsuarioPageModule = (function () {
    function PerfilUsuarioPageModule() {
    }
    PerfilUsuarioPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__perfil_usuario__["a" /* PerfilUsuarioPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__perfil_usuario__["a" /* PerfilUsuarioPage */]),
            ],
        })
    ], PerfilUsuarioPageModule);
    return PerfilUsuarioPageModule;
}());

//# sourceMappingURL=perfil-usuario.module.js.map

/***/ }),

/***/ 852:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PerfilUsuarioPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_picture_picture__ = __webpack_require__(853);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_validate_validate__ = __webpack_require__(470);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__ = __webpack_require__(152);
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





var PerfilUsuarioPage = (function () {
    function PerfilUsuarioPage(navCtrl, navParams, authProvider, loadingCtrl, pictureProvider, events) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.authProvider = authProvider;
        this.loadingCtrl = loadingCtrl;
        this.pictureProvider = pictureProvider;
        this.events = events;
        // Usuario
        this.user = [];
        // Tocado
        this.touched = false;
        // Erros
        this.erro = '';
        // busca o usuario
        this.user = this.authProvider.user() ? this.authProvider.user() : [];
        // Busca a imagem do usuario logado
        if (this.user)
            this.getImageUserFromApi();
        // Inicializa o formulario
        this.initForm();
    }
    PerfilUsuarioPage.prototype.initForm = function () {
        // cria o loading
        var loading = this.loadingCtrl.create({});
        loading.present();
        // Inicia um novo validator
        this.validate = new __WEBPACK_IMPORTED_MODULE_1__providers_validate_validate__["a" /* ValidateProvider */]();
        // Seta as regras de validação
        var rules = {
            name: '',
            email: 'valid_email',
            password: 'maxLength[18]|minLength[6]|matches[confirm]',
            confirm: 'maxLength[18]|minLength[6]|matches[password]'
        };
        // Seta o formulario
        this.profileForm = this.validate.set_form(rules);
        // Tira o loading
        loading.dismiss();
    };
    /**
     * Atualiza as informações do usuario
     */
    PerfilUsuarioPage.prototype.updateProfile = function () {
        var _this = this;
        // Cria o loading
        var loading = this.loadingCtrl.create({});
        loading.present();
        // Pega os dados do formulario
        var dados = JSON.parse(JSON.stringify(this.profileForm.value));
        // Busca a foto
        if (this.user.image && this.touched) {
            dados.image = this.user.image;
        }
        // Atualiza o perfil
        this.authProvider.updateProfile(dados)
            .then(function (user) {
            _this.erro = '';
            if (user == 'E-mail ja cadastrado no sistema') {
                _this.erro = user;
                return;
            }
            // Atualiza o usuario e a imagem
            _this.user = user;
            // Imagem
            _this.getImageUserFromApi();
            // Disparo o evento
            _this.events.publish('profile');
        })
            .catch(function (err) { return _this.erro = err; })
            .then(function () { return loading.dismiss(); });
    };
    /**
     * Faz o upload da imagem
     */
    PerfilUsuarioPage.prototype.getImage = function () {
        var _this = this;
        this.pictureProvider.get()
            .then(function (image) {
            _this.user.image = image;
            _this.touched = true;
        })
            .catch(function (err) { return console.log(err); });
    };
    /**
     * Busca a imagem do usuario pela api
     *
     */
    PerfilUsuarioPage.prototype.getImageUserFromApi = function () {
        var _this = this;
        this.authProvider.getUserImage()
            .then(function (image) { return _this.user.image = image; })
            .catch(function (err) { return console.log(err); });
    };
    PerfilUsuarioPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["m" /* Component */])({
            selector: 'page-perfil-usuario',template:/*ion-inline-start:"/var/www/html/SimpleNews/simplenews-app/src/pages/perfil-usuario/perfil-usuario.html"*/'<ion-header>\n  <ion-toolbar color="primary">\n    <ion-buttons left>\n      <button ion-button menuToggle icon-only>\n        <ion-icon name=\'menu\'></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>Meu Perfil</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <!-- Foto do user -->\n  <ion-row id="image-user">\n    <ion-col text-center>\n      <div *ngIf="user.image" \n            class="user" \n            (click)="getImage()"\n            [style.background-image]=" ( user.image ) ? \n                                   \'url(\' + user.image + \')\' : \n                                   \'url( assets/imgs/empty.jpg )\'">\n        <ion-icon color="primary" name="md-create"></ion-icon>\n      </div>\n    </ion-col>\n  </ion-row>\n\n  <!-- Formulario -->\n  <ion-list id="formulario" [formGroup]="profileForm">\n    <ion-item no-padding>\n      <ion-label stacked>Nome</ion-label>\n      <ion-input *ngIf="user && user.name" formControlName="name" type="text" placeholder="{{ user.name }}"></ion-input>\n    </ion-item><!-- Nome -->\n\n    <div class="alert-erros" *ngIf="validate.errors( \'name\' )" margin-top>\n      <span *ngFor="let msg of validate.errors( \'name\' )">{{ msg }}<br></span>\n    </div><!-- Erros nome -->\n\n    <ion-item no-padding>\n      <ion-label stacked>E-mail</ion-label>\n      <ion-input *ngIf="user && user.email" formControlName="email" type="text" placeholder="{{ user.email }}"></ion-input>\n    </ion-item><!-- Email -->\n\n    <div class="alert-erros" *ngIf="validate.errors( \'email\' )" margin-top>\n      <span *ngFor="let msg of validate.errors( \'email\' )">{{ msg }}<br></span>\n    </div><!-- Erros email -->\n    <div class="alert-erros" *ngIf="erro" margin-top>\n      <span>{{ erro }}<br></span>\n    </div><!-- Erros email -->\n\n    <ion-item no-padding>\n      <ion-label stacked>Senha</ion-label>\n      <ion-input type="password" formControlName="password" placeholder="******"></ion-input>\n    </ion-item><!-- Senha -->\n\n    <div class="alert-erros" *ngIf="validate.errors( \'password\' )" margin-top>\n      <span *ngFor="let msg of validate.errors( \'password\' )">{{ msg }}<br></span>\n    </div><!-- Erros senha -->\n\n    <ion-item no-padding>\n      <ion-label stacked>Confirmar Senha</ion-label>\n      <ion-input type="password" formControlName="confirm" placeholder="******"></ion-input>\n    </ion-item><!-- Confirmar senha -->\n\n    <div class="alert-erros" *ngIf="validate.errors( \'confirm\' )" margin-top>\n      <span *ngFor="let msg of validate.errors( \'confirm\' )">{{ msg }}<br></span>\n    </div><!-- Erros confirmar senha -->\n\n    <button ion-button block margin-top (click)="updateProfile()" [disabled]="!profileForm.valid">Salvar</button>\n  </ion-list>\n</ion-content>'/*ion-inline-end:"/var/www/html/SimpleNews/simplenews-app/src/pages/perfil-usuario/perfil-usuario.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_0__providers_picture_picture__["a" /* PictureProvider */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["n" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["o" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__["a" /* AuthProvider */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["j" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_0__providers_picture_picture__["a" /* PictureProvider */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["e" /* Events */]])
    ], PerfilUsuarioPage);
    return PerfilUsuarioPage;
}());

//# sourceMappingURL=perfil-usuario.js.map

/***/ }),

/***/ 853:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PictureProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_camera__ = __webpack_require__(479);
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



var PictureProvider = (function () {
    // método contrutor
    function PictureProvider(actionSheet, camera) {
        this.actionSheet = actionSheet;
        this.camera = camera;
    }
    // pega a foto
    PictureProvider.prototype._getPicture = function (sourceType) {
        var _this = this;
        // define as opcoes da camera
        var options = {
            sourceType: sourceType,
            allowEdit: true,
            targetWidth: 200,
            targetHeight: 200,
            quality: 50,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
        };
        // retorna uma nova promessa
        return new Promise(function (resolve, reject) {
            _this.camera.getPicture(options).then(function (pic) {
                if (pic) {
                    resolve("data:image/jpeg;base64," + pic);
                }
                else {
                    reject(false);
                }
            })
                .catch(function (err) {
                console.log(err);
                reject(err);
            });
        });
    };
    // pega uma imagem do usuário
    PictureProvider.prototype.get = function () {
        var _this = this;
        // retorna uma nova promessa
        return new Promise(function (resolve, reject) {
            var opt = {
                title: 'Foto de perfil',
                buttons: [{
                        text: 'Galeria',
                        handler: function () { return _this._getPicture(0).then(function (pic) { return resolve(pic); }).catch(function (err) { return reject(err); }); }
                    }, {
                        text: 'Câmera',
                        handler: function () { return _this._getPicture(1).then(function (pic) { return resolve(pic); }).catch(function (err) { return reject(err); }); }
                    }, {
                        text: 'Cancel',
                        role: 'cancel',
                        handler: function () { return reject(false); }
                    }]
            };
            // define o action sheet
            var actionSheet = _this.actionSheet.create(opt);
            // mostra o action sheet
            actionSheet.present();
        });
    };
    PictureProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_1__ionic_native_camera__["a" /* Camera */]])
    ], PictureProvider);
    return PictureProvider;
}());

//# sourceMappingURL=picture.js.map

/***/ })

});
//# sourceMappingURL=6.js.map