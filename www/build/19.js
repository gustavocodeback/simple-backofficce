webpackJsonp([19],{

/***/ 814:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoasVindasPageModule", function() { return BoasVindasPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__boas_vindas__ = __webpack_require__(839);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var BoasVindasPageModule = (function () {
    function BoasVindasPageModule() {
    }
    BoasVindasPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__boas_vindas__["a" /* BoasVindasPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__boas_vindas__["a" /* BoasVindasPage */]),
            ],
        })
    ], BoasVindasPageModule);
    return BoasVindasPageModule;
}());

//# sourceMappingURL=boas-vindas.module.js.map

/***/ }),

/***/ 839:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BoasVindasPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BoasVindasPage = (function () {
    /**
     * Método construtor
     *
     * @param navCtrl
     * @param navParams
     * @param modalCtrl
     * @param viewCtrl
     */
    function BoasVindasPage(navCtrl, navParams, modalCtrl, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.viewCtrl = viewCtrl;
    }
    /**
     * Esconde o modal
     *
     */
    BoasVindasPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    BoasVindasPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-boas-vindas',template:/*ion-inline-start:"/var/www/html/SimpleNews/simplenews-app/src/pages/boas-vindas/boas-vindas.html"*/'<ion-content class="login-content">\n\n  <div class="logo">\n    <img src="assets/imgs/logo.png" width="100px">\n  </div>\n\n  <div class="titles">\n    <h1>Bem Vindo(a) ao Simple!</h1>\n    <h2>O seu aplicativo de notícias</h2>\n    <p>Na tela a seguir informe os assuntos que deseja acompanhar. Depois você poderá alterar</p>\n  </div>\n  \n  <ion-row>\n    <ion-col text-center>\n      <button ion-button clear large (click)="dismiss()">\n        Continuar\n        <ion-icon margin-left name="arrow-forward"></ion-icon>\n      </button>  \n    </ion-col>\n  </ion-row>\n</ion-content>'/*ion-inline-end:"/var/www/html/SimpleNews/simplenews-app/src/pages/boas-vindas/boas-vindas.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* ViewController */]])
    ], BoasVindasPage);
    return BoasVindasPage;
}());

// End of file
//# sourceMappingURL=boas-vindas.js.map

/***/ })

});
//# sourceMappingURL=19.js.map