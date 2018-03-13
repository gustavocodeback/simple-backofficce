webpackJsonp([8],{

/***/ 832:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TermosPageModule", function() { return TermosPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__termos__ = __webpack_require__(859);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var TermosPageModule = (function () {
    function TermosPageModule() {
    }
    TermosPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__termos__["a" /* TermosPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__termos__["a" /* TermosPage */]),
            ],
        })
    ], TermosPageModule);
    return TermosPageModule;
}());

//# sourceMappingURL=termos.module.js.map

/***/ }),

/***/ 859:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TermosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_settings_settings__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(33);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TermosPage = (function () {
    function TermosPage(navCtrl, navParams, settingsProvider, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.settingsProvider = settingsProvider;
        this.loadingCtrl = loadingCtrl;
        this.terms = '';
        this.err = false;
        this.getTerms();
    }
    /**
     * Busca os termos
     *
     */
    TermosPage.prototype.getTerms = function () {
        var _this = this;
        // Gera o loading
        var loading = this.loadingCtrl.create({});
        loading.present();
        this.settingsProvider.getTerms('terms')
            .then(function (terms) { return _this.terms = terms; })
            .catch(function (err) { return _this.err = true; })
            .then(function () { return loading.dismiss(); });
    };
    TermosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-termos',template:/*ion-inline-start:"/var/www/html/SimpleNews/simplenews-app/src/pages/termos/termos.html"*/'<ion-header>\n  <ion-toolbar color="primary">\n    <button ion-button menuToggle icon-only>\n      <ion-icon name=\'menu\'></ion-icon>\n    </button>\n  </ion-toolbar>\n</ion-header>\n  \n<ion-content padding>\n  <h1 text-center *ngIf="terms">Termos</h1>\n\n  <div text-justify>\n    <div *ngIf="terms" [innerHTML]="terms"></div>\n  </div>\n\n  <ion-row>\n    <span class="err-message" *ngIf="err">Houve um erro ao tentar buscar os termos de uso</span>      \n  </ion-row>\n</ion-content>\n  '/*ion-inline-end:"/var/www/html/SimpleNews/simplenews-app/src/pages/termos/termos.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["n" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["o" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_0__providers_settings_settings__["a" /* SettingsProvider */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* LoadingController */]])
    ], TermosPage);
    return TermosPage;
}());

//# sourceMappingURL=termos.js.map

/***/ })

});
//# sourceMappingURL=8.js.map