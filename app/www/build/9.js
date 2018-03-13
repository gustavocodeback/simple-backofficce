webpackJsonp([9],{

/***/ 831:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsNavigationPageModule", function() { return TabsNavigationPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tabs_navigation__ = __webpack_require__(858);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var TabsNavigationPageModule = (function () {
    function TabsNavigationPageModule() {
    }
    TabsNavigationPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__tabs_navigation__["a" /* TabsNavigationPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__tabs_navigation__["a" /* TabsNavigationPage */]),
            ]
        })
    ], TabsNavigationPageModule);
    return TabsNavigationPageModule;
}());

//# sourceMappingURL=tabs-navigation.module.js.map

/***/ }),

/***/ 858:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsNavigationPage; });
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


var TabsNavigationPage = (function () {
    function TabsNavigationPage(navCtrl) {
        this.navCtrl = navCtrl;
        this.feedRoot = 'FeedPage';
        this.explorarRoot = 'ExplorarPage';
        this.noticiasSalvasRoot = 'NoticiasSalvasPage';
        this.inscricoesRoot = 'InscricoesPage';
    }
    TabsNavigationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-tabs-navigation',template:/*ion-inline-start:"/var/www/html/SimpleNews/simplenews-app/src/pages/tabs-navigation/tabs-navigation.html"*/'<ion-tabs color="primary">\n    <ion-tab [root]="feedRoot" tabIcon="home"></ion-tab>\n    <ion-tab [root]="explorarRoot" tabIcon="compass"></ion-tab>\n    <ion-tab [root]="noticiasSalvasRoot" tabIcon="bookmark"></ion-tab>\n    <ion-tab [root]="inscricoesRoot" tabIcon="paper"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"/var/www/html/SimpleNews/simplenews-app/src/pages/tabs-navigation/tabs-navigation.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */]])
    ], TabsNavigationPage);
    return TabsNavigationPage;
}());

//# sourceMappingURL=tabs-navigation.js.map

/***/ })

});
//# sourceMappingURL=9.js.map