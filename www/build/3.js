webpackJsonp([3],{

/***/ 826:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PerfilNoticiaPageModule", function() { return PerfilNoticiaPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__directives_directives_module__ = __webpack_require__(474);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_post_noticia_post_noticias_module__ = __webpack_require__(834);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__perfil_noticia__ = __webpack_require__(851);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var PerfilNoticiaPageModule = (function () {
    function PerfilNoticiaPageModule() {
    }
    PerfilNoticiaPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__perfil_noticia__["a" /* PerfilNoticiaPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_4__perfil_noticia__["a" /* PerfilNoticiaPage */]),
                __WEBPACK_IMPORTED_MODULE_1__components_post_noticia_post_noticias_module__["a" /* PostNoticiaModule */],
                __WEBPACK_IMPORTED_MODULE_0__directives_directives_module__["a" /* DirectivesModule */],
            ],
        })
    ], PerfilNoticiaPageModule);
    return PerfilNoticiaPageModule;
}());

//# sourceMappingURL=perfil-noticia.module.js.map

/***/ }),

/***/ 834:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostNoticiaModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__post_noticia__ = __webpack_require__(835);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PostNoticiaModule = (function () {
    function PostNoticiaModule() {
    }
    PostNoticiaModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_0__post_noticia__["a" /* PostNoticiaComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicModule */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_0__post_noticia__["a" /* PostNoticiaComponent */]
            ]
        })
    ], PostNoticiaModule);
    return PostNoticiaModule;
}());

//# sourceMappingURL=post-noticias.module.js.map

/***/ }),

/***/ 835:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostNoticiaComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PostNoticiaComponent = (function () {
    /**
     * Método construtor
     *
     * @param navCtrl
     * @param popoverCtrl
     */
    function PostNoticiaComponent(navCtrl, popoverCtrl) {
        this.navCtrl = navCtrl;
        this.popoverCtrl = popoverCtrl;
        /**
         * Noticia que está sendo exibida
         *
         */
        this.selectedNotice = {};
        /**
         * Se deve mostrar o link para o gateway
         *
         */
        this.showGatewayLink = true;
        /**
         * Imagem da noticia
         *
         */
        this.imageRef = 'assets/imgs/empty.jpg';
    }
    Object.defineProperty(PostNoticiaComponent.prototype, "notice", {
        /**
         * Noticia que será exibida
         *
         */
        set: function (notice) {
            var _this = this;
            // Seta a noticia selecionada
            this.selectedNotice = notice;
            // Verifica se possui uma imagem
            if (!notice.image_link)
                return;
            // Cria uma imagem
            var tempImage = new Image();
            tempImage.src = notice.image_link;
            // Quando a imagem original carregar, substitui a padrão
            tempImage.onload = function (img) {
                _this.imageRef = tempImage.src;
            };
            tempImage.onerror = function (img) {
                _this.selectedNotice['image_link'] = false;
            };
        },
        enumerable: true,
        configurable: true
    });
    ;
    /**
     * Abre o perfil da noticia
     *
     */
    PostNoticiaComponent.prototype.perfilNoticia = function (id) {
        this.navCtrl.push('PerfilNoticiaPage', { id: id });
    };
    /**
     * Abre o detalhe da noticia
     *
     * @param url
     */
    PostNoticiaComponent.prototype.openNotice = function () {
        this.navCtrl.push('NoticePage', { notice_id: this.selectedNotice['id'] });
    };
    /**
     * Abre o popover
     *
     * @param event
     */
    PostNoticiaComponent.prototype.presentPopover = function (event) {
        var popover = this.popoverCtrl.create('NoticiaPopoverPage', { notice: this.selectedNotice });
        popover.present({
            ev: event
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], PostNoticiaComponent.prototype, "notice", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], PostNoticiaComponent.prototype, "showGatewayLink", void 0);
    PostNoticiaComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'post-noticia',template:/*ion-inline-start:"/var/www/html/SimpleNews/simplenews-app/src/components/post-noticia/post-noticia.html"*/'<ion-card class="noticia-card">\n\n  <!-- IMG DA NOTICIA -->\n  <img *ngIf="selectedNotice[\'image_link\']" [src]="imageRef" (click)="openNotice()">\n\n  <!-- INFORMAÇÕES DA NOTICIA -->\n  <ion-card-content>\n    <h1 margin-bottom class="title" (click)="openNotice()">{{ selectedNotice[\'title\'] }}</h1>\n\n    <ion-row class="actions" no-padding>\n      <ion-col col-10 no-padding>\n        <h2 *ngIf="showGatewayLink" (click)="perfilNoticia( selectedNotice[\'gateway_id\'] )">\n          {{ selectedNotice[\'gateway_url\'] }}\n        </h2>\n        <p>&bull; {{ selectedNotice[\'created\'] }}</p>\n      </ion-col>\n      <ion-col col-2 text-center no-padding>\n        <button ion-button icon-only item-end clear small (click)="presentPopover( $event )">\n          <ion-icon name="more"></ion-icon>\n        </button>\n      </ion-col>\n    </ion-row>\n\n    <p class="description" *ngIf="selectedNotice[\'description\']">{{ selectedNotice[\'description\'] }}</p>\n  </ion-card-content>\n</ion-card>'/*ion-inline-end:"/var/www/html/SimpleNews/simplenews-app/src/components/post-noticia/post-noticia.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["n" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["q" /* PopoverController */]])
    ], PostNoticiaComponent);
    return PostNoticiaComponent;
}());

// End of file
//# sourceMappingURL=post-noticia.js.map

/***/ }),

/***/ 851:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PerfilNoticiaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ionic_native_safari_view_controller__ = __webpack_require__(475);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular_components_toast_toast_controller__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_social_sharing__ = __webpack_require__(477);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_gateway_gateway__ = __webpack_require__(472);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_in_app_browser__ = __webpack_require__(476);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_notice_notice__ = __webpack_require__(471);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ionic_angular__ = __webpack_require__(33);
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









var PerfilNoticiaPage = (function () {
    /**
     * construtor
     *
     * Método construtor
     */
    function PerfilNoticiaPage(navCtrl, navParams, modalCtrl, notice, loadingCtrl, viewCtrl, iab, app, gate, socialSharing, auth, events, toastCtrl, alertCtrl, safariViewController) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.notice = notice;
        this.loadingCtrl = loadingCtrl;
        this.viewCtrl = viewCtrl;
        this.iab = iab;
        this.app = app;
        this.gate = gate;
        this.socialSharing = socialSharing;
        this.auth = auth;
        this.events = events;
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
        this.safariViewController = safariViewController;
        this.gateway = {};
        this.isFollowing = false;
        this.totalPages = 1;
        this.actualPage = 0;
        this.isOnRequest = false;
        this.notices = [];
        // pega o id do veiculo
        this.idGateway = this.navParams.get('id');
        if (!this.idGateway)
            this.back();
    }
    /**
     * __getGateway
     *
     * Busca os dados vo veículo de noticia
     */
    PerfilNoticiaPage.prototype.__getGateway = function () {
        var _this = this;
        // cria o loading
        var loading = this.loadingCtrl.create({});
        loading.present();
        // busca os dados do veiculo
        this.gate.get(this.idGateway)
            .then(function (gateway) {
            _this.gateway = gateway;
        })
            .catch(function (err) { return console.log(err); })
            .then(function () { return loading.dismiss(); });
    };
    /**
     * Carrega novas noticias
     *
     * @param event
     * @param reset
     */
    PerfilNoticiaPage.prototype.loadNews = function (event, reset) {
        if (event === void 0) { event = false; }
        if (reset === void 0) { reset = false; }
        return __awaiter(this, void 0, void 0, function () {
            var notices, _i, _a, notice, error_1;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        // Verifica se está e uma request
                        if (this.isOnRequest)
                            return [2 /*return*/];
                        this.isOnRequest = true;
                        // Verifica se deve resetar
                        if (reset) {
                            this.actualPage = 0;
                            this.totalPages = 1;
                        }
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.notice.getGatewayNotices(this.idGateway, parseInt(this.actualPage) + 1)
                            // verifica se deve resetar
                        ];
                    case 2:
                        notices = _b.sent();
                        // verifica se deve resetar
                        if (!reset) {
                            for (_i = 0, _a = notices.data; _i < _a.length; _i++) {
                                notice = _a[_i];
                                this.notices.push(notice);
                            }
                        }
                        else {
                            this.notices = notices.data;
                        }
                        // seta as paginações
                        this.totalPages = notices.total_pages;
                        this.actualPage = parseInt(notices.page);
                        // Indica que não está mais em um request
                        this.isOnRequest = false;
                        // Verifica se existe um evento
                        if (event)
                            event.complete();
                        return [3 /*break*/, 4];
                    case 3:
                        error_1 = _b.sent();
                        console.log(error_1);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Carrega as noticias do veículo
     *
     */
    PerfilNoticiaPage.prototype.ionViewDidEnter = function () {
        // carrega o veiculo de noticias
        this.__getGateway();
        // carrega as noticias
        this.loadNews(false, true);
    };
    /**
     * Mostra o toast
     *
     */
    PerfilNoticiaPage.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000,
            position: 'bottom'
        });
        toast.present();
    };
    /**
     * Faz o report
     *
     */
    PerfilNoticiaPage.prototype.reportConfirmed = function () {
        var _this = this;
        // Mostra o loading
        var loading = this.loadingCtrl.create({ content: 'Denunciando notícia...' });
        loading.present();
        // Salva o report
        this.gate.report(this.idGateway)
            .then(function (success) {
            _this.gateway['reported'] = true;
            _this.presentToast('Denunciado');
        })
            .catch(function (err) {
            console.log(err);
            _this.presentToast('Erro ao tentar denunciar');
        })
            .then(function () { return loading.dismiss(); });
    };
    /**
     * Mostra alerta de confirmação de report
     *
     */
    PerfilNoticiaPage.prototype.alertConfirm = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Denunciar',
            message: 'Deseja realmente denunciar essa noticia?',
            buttons: [{
                    text: 'Sim',
                    handler: function () {
                        _this.reportConfirmed();
                    }
                }, {
                    text: 'Não',
                    role: 'cancel'
                }]
        });
        alert.present();
    };
    /**
     * Denuncia o veiculo de noticia
     *
     */
    PerfilNoticiaPage.prototype.report = function () {
        // Verifica se o user esta logado
        if (!this.auth.user()) {
            this.navCtrl.push('LoginPage');
        }
        else {
            this.alertConfirm();
        }
    };
    /**
     * Abre pagina do veiculo na web
     *
     */
    PerfilNoticiaPage.prototype.visitSite = function () {
        var _this = this;
        this.safariViewController.isAvailable()
            .then(function (available) {
            if (available) {
                _this.safariViewController.show({
                    url: _this.gateway['url'],
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
                _this.iab.create(_this.gateway['url'], '_system');
            }
        });
    };
    /**
     * Compartilha a site com amigos
     *
     * @param url
     */
    PerfilNoticiaPage.prototype.shareGateway = function () {
        this.socialSharing.share(this.gateway['url'])
            .then(function () { return true; })
            .catch(function () { return false; });
    };
    /**
     * Segue um novo veiculo
     *
     */
    PerfilNoticiaPage.prototype.followVehicle = function () {
        var _this = this;
        // verifica está logado
        var user = this.auth.user();
        // verifica se veio user
        if (user) {
            var modal = this.modalCtrl.create('FollowModalPage', { gateway: this.gateway });
            modal.onDidDismiss(function (data) {
                // Verifica se salvou
                if (data)
                    _this.gateway['status'] = 'F';
            });
            modal.present();
        }
        else {
            this.navCtrl.push("LoginPage", { redirectPage: true });
        }
    };
    /**
     * Deixa de seguir o veiculo
     *
     */
    PerfilNoticiaPage.prototype.unfollowVehicle = function () {
        var _this = this;
        // Mostra o loading
        var loading = this.loadingCtrl.create({ content: 'Retirando inscrição...' });
        loading.present();
        // Faz a chamada
        this.gate.unfollow(this.idGateway)
            .then(function (success) {
            // Seta o status
            _this.gateway['status'] = 'U';
            // Dispara o evento
            _this.events.publish('atualizar');
        })
            .catch(function (err) { return console.log(false); })
            .then(function () { return loading.dismiss(); });
    };
    /**
     * Chama os métodos de seguir
     *
     */
    PerfilNoticiaPage.prototype.toggleFollow = function () {
        if (this.gateway['status'] == 'U') {
            this.followVehicle();
        }
        else {
            this.unfollowVehicle();
        }
    };
    /**
     * Muda o status
     *
     */
    PerfilNoticiaPage.prototype.toggleMuted = function () {
        return __awaiter(this, void 0, void 0, function () {
            var user, loading, method, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        user = this.auth.user();
                        if (!user) return [3 /*break*/, 5];
                        loading = this.loadingCtrl.create({
                            content: this.gateway['muted'] ? 'Habilidatando função' : 'Desabilitando função'
                        });
                        loading.present();
                        method = this.gateway['muted'] ? 'unmute' : 'mute';
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.gate[method](this.gateway['id'])];
                    case 2:
                        _a.sent();
                        this.gateway['muted'] = !this.gateway['muted'];
                        return [3 /*break*/, 4];
                    case 3:
                        error_2 = _a.sent();
                        console.log(error_2);
                        return [3 /*break*/, 4];
                    case 4:
                        // Esconde o loading
                        loading.dismiss();
                        return [3 /*break*/, 6];
                    case 5:
                        this.navCtrl.push("LoginPage", { redirectPage: true });
                        _a.label = 6;
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * back
     */
    PerfilNoticiaPage.prototype.back = function () {
        if (this.navCtrl.canGoBack()) {
            this.navCtrl.pop();
        }
        else
            this.navCtrl.setRoot('FeedPage');
    };
    PerfilNoticiaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_7__angular_core__["m" /* Component */])({
            selector: 'page-perfil-noticia',template:/*ion-inline-start:"/var/www/html/SimpleNews/simplenews-app/src/pages/perfil-noticia/perfil-noticia.html"*/'<ion-header id="perfil">\n  <img *ngIf="gateway[\'image\']" [src]="gateway[\'image\']" class="image-overlay">\n  \n  <ion-toolbar scroll-hide-translate color="transparent">\n    <ion-buttons left>\n      <button ion-button icon-only (click)="back()">\n        <ion-icon name=\'arrow-back\'></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>{{ gateway[\'name\'] }}</ion-title>\n    <ion-buttons right>\n      <button *ngIf="!gateway[\'reported\']" ion-button icon-only (click)="report()">\n        <ion-icon name="megaphone"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-toolbar><!-- toolbar e link para voltar -->\n\n  <ion-toolbar class="row-1" color="transparent">\n    <div class="image-user">\n      <img *ngIf="gateway[\'image\']" [src]="gateway[\'image\']">\n    </div>\n    <div class="info-wrap">\n      <h2>{{ gateway[\'name\'] }}</h2>\n      <small>{{ gateway[\'subscriptions\'] }} leitores</small>\n    </div>\n  </ion-toolbar><!-- dados do gateway -->\n\n  <ion-toolbar color="transparent" no-padding scroll-hide-translate>\n    <ion-row class="button-actions">\n\n      <ion-col class="call-action" text-center (click)="toggleFollow()">\n        <ion-icon [name]="gateway[\'status\'] == \'U\' ? \'md-create\' : \'md-close\'"></ion-icon>\n        <br>\n        <span class="name-button">{{ gateway[\'status\'] == \'U\' ? \'Seguir\' : \'Esquecer\' }}</span>\n      </ion-col><!-- button 1 -->\n\n      <ion-col class="call-action" text-center (click)="toggleMuted()">\n        <ion-icon [name]=" !gateway[\'muted\'] ? \'eye-off\' : \'eye\'"></ion-icon>\n        <br>\n        <span class="name-button">{{ gateway[\'muted\'] ? \'Visualizar\' : \'Silenciar\' }}</span>\n      </ion-col><!-- button 2 -->\n\n      <ion-col class="call-action" (click)="shareGateway()" class="call-action" text-center>\n        <ion-icon name="share"></ion-icon>\n        <br>\n        <span class="name-button">Compartilhar</span>\n      </ion-col><!-- button 3 -->\n      \n      <ion-col class="call-action" (click)="visitSite()" text-center>\n        <ion-icon name="globe"></ion-icon>\n        <br>\n        <span class="name-button">Ver site</span>\n      </ion-col><!-- button 4 -->\n\n    </ion-row>\n  </ion-toolbar><!-- botoes de ação -->\n\n</ion-header>\n\n<ion-content class="light-bg" [scroll-hide]="viewCtrl">\n\n  <ion-refresher (ionRefresh)="loadNews($event, true )" *ngIf="!isOnRequest">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher><!-- refresher quando puxar a pagina -->\n\n  <div class="load-more" *ngIf="totalPages == 0">\n    <br>\n    <span>Nenhuma notícia encontrada</span>\n  </div>\n\n  <post-noticia [showGatewayLink]="false" *ngFor="let notice of notices" [notice]="notice"></post-noticia>\n\n  <button (click)="loadNews()"ion-button block clear color="primary" *ngIf="actualPage != totalPages">\n    <span *ngIf="!isOnRequest">Carregar mais</span>\n    <ion-spinner *ngIf="isOnRequest"></ion-spinner>\n  </button><!-- botao para carregar mais -->\n  \n</ion-content>\n'/*ion-inline-end:"/var/www/html/SimpleNews/simplenews-app/src/pages/perfil-noticia/perfil-noticia.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_8_ionic_angular__["n" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_8_ionic_angular__["o" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_8_ionic_angular__["l" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_6__providers_notice_notice__["a" /* NoticeProvider */],
            __WEBPACK_IMPORTED_MODULE_8_ionic_angular__["j" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_8_ionic_angular__["r" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_in_app_browser__["a" /* InAppBrowser */],
            __WEBPACK_IMPORTED_MODULE_8_ionic_angular__["c" /* App */],
            __WEBPACK_IMPORTED_MODULE_4__providers_gateway_gateway__["a" /* GatewayProvider */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_social_sharing__["a" /* SocialSharing */],
            __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__["a" /* AuthProvider */],
            __WEBPACK_IMPORTED_MODULE_8_ionic_angular__["e" /* Events */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular_components_toast_toast_controller__["a" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_8_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_0__ionic_native_safari_view_controller__["a" /* SafariViewController */]])
    ], PerfilNoticiaPage);
    return PerfilNoticiaPage;
}());

// End of file
//# sourceMappingURL=perfil-noticia.js.map

/***/ })

});
//# sourceMappingURL=3.js.map