webpackJsonp([1],{

/***/ 823:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoticePageModule", function() { return NoticePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_post_ads_post_ads_module__ = __webpack_require__(836);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__notice__ = __webpack_require__(848);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__directives_directives_module__ = __webpack_require__(474);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var NoticePageModule = (function () {
    function NoticePageModule() {
    }
    NoticePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__notice__["a" /* NoticePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__notice__["a" /* NoticePage */]),
                __WEBPACK_IMPORTED_MODULE_4__directives_directives_module__["a" /* DirectivesModule */],
                __WEBPACK_IMPORTED_MODULE_0__components_post_ads_post_ads_module__["a" /* PostAdsModule */]
            ],
        })
    ], NoticePageModule);
    return NoticePageModule;
}());

//# sourceMappingURL=notice.module.js.map

/***/ }),

/***/ 836:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostAdsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__post_ads__ = __webpack_require__(837);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PostAdsModule = (function () {
    function PostAdsModule() {
    }
    PostAdsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_0__post_ads__["a" /* PostAdsComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicModule */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_0__post_ads__["a" /* PostAdsComponent */]
            ]
        })
    ], PostAdsModule);
    return PostAdsModule;
}());

// End of file
//# sourceMappingURL=post-ads.module.js.map

/***/ }),

/***/ 837:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostAdsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_app_config__ = __webpack_require__(838);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PostAdsComponent = (function () {
    /**
     * Método constructor
     *
     */
    function PostAdsComponent() {
        this.publishAdd();
        this.id = this.guid();
    }
    /**
     * Quando tiverem alterações
     *
     * @param changes
     */
    PostAdsComponent.prototype.ngOnChanges = function (changes) {
        var _this = this;
        if (this.content) {
            this.content.ionScroll.subscribe(function (data) {
                _this.updateXY(data.scrollLeft, data.scrollTop);
            });
        }
    };
    /**
     * Gera um id aleatorio
     *
     */
    PostAdsComponent.prototype.guid = function () {
        var s4 = function () {
            return Math.floor((1 + Math.random()) * 0x10000)
                .toString(16)
                .substring(1);
        };
        return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
    };
    /**
     * Seta a area clicavel
     *
     * @param top
     */
    PostAdsComponent.prototype.updateXY = function (left, top) {
        var d = document.getElementById(this.id);
        if (!d)
            return;
        var w = document.getElementById(this.id).clientWidth;
        var h = document.getElementById(this.id).clientHeight;
        var x = d.offsetLeft - left;
        var y = d.offsetTop - top;
        console.log('chamou');
        if (FacebookAds)
            FacebookAds.setNativeAdClickArea(__WEBPACK_IMPORTED_MODULE_1__app_app_config__["a" /* AppConfig */].AddMobId, x, y, w, h);
    };
    ;
    /**
    * Adiciona uma Propaganda
    *
    */
    PostAdsComponent.prototype.publishAdd = function () {
        var _this = this;
        document.addEventListener("onAdLoaded", function (data) {
            if (_this.nativeAdd)
                return;
            var temp = JSON.parse(JSON.stringify(data));
            if (temp.adType == "native") {
                _this.nativeAdd = temp['adRes'];
                /* document.getElementById('adIcon').setAttribute("src", temp.adRes.icon.url);
                document.getElementById('adCover').setAttribute("src", temp.adRes.coverImage.url);
                document.getElementById('adTitle').innerHTML = temp.adRes.title;
                document.getElementById('adBody').innerHTML = temp.adRes.body;
                document.getElementById('adSocialContext').innerHTML = temp.adRes.socialContext;
                document.getElementById('adBtn').innerHTML = temp.adRes.buttonText; */
            }
        });
        if (FacebookAds) {
            FacebookAds.createNativeAd(__WEBPACK_IMPORTED_MODULE_1__app_app_config__["a" /* AppConfig */].AddMobId);
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], PostAdsComponent.prototype, "content", void 0);
    PostAdsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'post-ads',template:/*ion-inline-start:"/var/www/html/SimpleNews/simplenews-app/src/components/post-ads/post-ads.html"*/'<ion-card *ngIf="nativeAdd" [id]="id">\n  <img *ngIf="nativeAdd.coverImage" [src]="nativeAdd.coverImage.url" style="max-width: 100%; height: auto;" />\n  <ion-card-content text-wrap>\n    <ion-item>\n      <ion-avatar item-left>\n        <img  *ngIf="nativeAdd.icon" [src]="nativeAdd.icon.url" />\n      </ion-avatar>\n      <h2>\n        {{ nativeAdd.title }}\n      </h2>\n      <p>\n        {{ nativeAdd.body }}\n      </p>\n    </ion-item>\n    <ion-row>\n      <ion-col center text-left width-70 small style="font-size: x-small;">\n        <span small>\n          {{ nativeAdd.socialContext }}\n        </span>\n      </ion-col>\n      <ion-col center text-right width-30>\n        <button ion-button small color="secondary">\n          {{ nativeAdd.buttonText }}\n        </button>\n      </ion-col>\n    </ion-row>\n  </ion-card-content>\n</ion-card>\n'/*ion-inline-end:"/var/www/html/SimpleNews/simplenews-app/src/components/post-ads/post-ads.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], PostAdsComponent);
    return PostAdsComponent;
}());

// End of file
//# sourceMappingURL=post-ads.js.map

/***/ }),

/***/ 838:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppConfig; });
var AppConfig = {
    AddMobId: '176263959826303_176264093159623'
};
// End of file
//# sourceMappingURL=app.config.js.map

/***/ }),

/***/ 848:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NoticePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_safari_view_controller__ = __webpack_require__(475);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_notice_notice__ = __webpack_require__(471);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_in_app_browser__ = __webpack_require__(476);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__(1);
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





var NoticePage = (function () {
    /**
     * Método construtor
     *
     * @param navCtrl
     * @param navParams
     * @param viewCtrl
     * @param popoverCtrl
     * @param noticeProvider
     * @param loadingCtrl
     * @param iab
     */
    function NoticePage(navCtrl, navParams, viewCtrl, popoverCtrl, noticeProvider, loadingCtrl, iab, safariViewController) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.popoverCtrl = popoverCtrl;
        this.noticeProvider = noticeProvider;
        this.loadingCtrl = loadingCtrl;
        this.iab = iab;
        this.safariViewController = safariViewController;
        /**
         * Noticia em exibição
         *
         */
        this.notice = {};
        var notice_id = this.navParams.get('notice_id');
        if (!notice_id) {
            this.close();
        }
        else
            this.loadNotice(notice_id);
    }
    /**
     * Carrega a notica
     *
     * @param notice_id
     */
    NoticePage.prototype.loadNotice = function (notice_id) {
        return __awaiter(this, void 0, void 0, function () {
            var loading, notice, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        loading = this.loadingCtrl.create({ content: 'Buscando notítica...' });
                        loading.present();
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.noticeProvider.getById(notice_id)];
                    case 2:
                        notice = _a.sent();
                        // Seta a noticia
                        this.notice = notice;
                        return [3 /*break*/, 4];
                    case 3:
                        e_1 = _a.sent();
                        // Feha o modal
                        this.close();
                        return [3 /*break*/, 4];
                    case 4:
                        // Tira o loading
                        loading.dismiss();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Fecha o modal
     *
     */
    NoticePage.prototype.close = function () {
        this.navCtrl.pop();
    };
    /**
     * Abre o popover
     *
     * @param event
     */
    NoticePage.prototype.presentPopover = function (event) {
        var popover = this.popoverCtrl.create('NoticiaPopoverPage', { notice: this.notice });
        popover.present({
            ev: event
        });
    };
    /**
     * Abre a noticia no site
     *
     */
    NoticePage.prototype.verMais = function () {
        var _this = this;
        this.safariViewController.isAvailable()
            .then(function (available) {
            if (available) {
                _this.safariViewController.show({
                    url: _this.notice['link'],
                    hidden: false,
                    animated: false,
                    transition: 'curl',
                    tintColor: '#ff000'
                })
                    .subscribe(function (result) {
                    if (result.event === 'opened')
                        console.log('Opened');
                    else if (result.event === 'loaded')
                        console.log('Loaded');
                    else if (result.event === 'closed')
                        console.log('Closed');
                }, function (error) { return console.log(error); });
            }
            else {
                _this.iab.create(_this.notice['link'], '_system');
            }
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["d" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["d" /* Content */])
    ], NoticePage.prototype, "content", void 0);
    NoticePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["m" /* Component */])({
            selector: 'page-notice',template:/*ion-inline-start:"/var/www/html/SimpleNews/simplenews-app/src/pages/notice/notice.html"*/'<ion-header>\n  <ion-toolbar color="primary" scroll-hide-shrink>\n    <ion-buttons left>\n      <button ion-button icon-only item-end clear small (click)="presentPopover($event)">\n        <ion-icon name="more"></ion-icon>\n      </button>\n    </ion-buttons>\n\n    <ion-title>Notícia</ion-title>\n\n    <ion-buttons right>\n      <button ion-button icon-only (click)="close()">\n        <ion-icon name="close"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n\n</ion-header>\n\n<ion-content [scroll-hide]="viewCtrl">\n\n  <div *ngIf="notice[\'cover\']" class="image-wrapper">\n    <img width="100%" [src]="notice[\'cover\']">\n  </div>\n\n  <div class="notice-title" *ngIf="notice[\'title\']">\n    {{ notice[\'title\'] }}\n  </div>\n\n  <div class="notice-description" *ngIf="notice[\'description\']">\n    {{ notice[\'description\'] }}\n  </div>\n\n  <p class="notice-text" *ngFor="let part of notice[\'text_parts\']">\n    {{ part }}\n  </p>\n\n  <ion-row padding>\n    <button ion-button block (click)="verMais()" outline color="secondary">\n      Ver original\n    </button>\n  </ion-row>\n\n  <post-ads [content]="content"></post-ads>\n</ion-content>\n'/*ion-inline-end:"/var/www/html/SimpleNews/simplenews-app/src/pages/notice/notice.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["n" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["o" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["r" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["q" /* PopoverController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_notice_notice__["a" /* NoticeProvider */],
            __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["j" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_in_app_browser__["a" /* InAppBrowser */],
            __WEBPACK_IMPORTED_MODULE_1__ionic_native_safari_view_controller__["a" /* SafariViewController */]])
    ], NoticePage);
    return NoticePage;
}());

// End of file
//# sourceMappingURL=notice.js.map

/***/ })

});
//# sourceMappingURL=1.js.map