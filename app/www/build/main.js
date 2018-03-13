webpackJsonp([20],{

/***/ 152:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(33);
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



var AuthProvider = (function () {
    /**
     * Método construtor
     * @param api
     */
    function AuthProvider(api, events) {
        this.api = api;
        this.events = events;
    }
    /**
     * Faz o logout
     *
     */
    AuthProvider.prototype.logout = function () {
        localStorage.removeItem('auth-id');
        localStorage.removeItem('auth-name');
        localStorage.removeItem('auth-email');
        localStorage.removeItem('auth-token');
        localStorage.removeItem('feed-id');
        this.events.publish('logout');
    };
    /**
     * user
     *
     * busca o usuario no localstorage
     */
    AuthProvider.prototype.user = function () {
        var user = localStorage.getItem('auth-id');
        if (user) {
            return {
                name: localStorage.getItem('auth-name'),
                email: localStorage.getItem('auth-email'),
                id: localStorage.getItem('auth-id'),
                token: localStorage.getItem('auth-token')
            };
        }
        else
            return null;
    };
    /**
     * signup
     *
     * faz o cadastro do usuario
     *
     * @param dados
     */
    AuthProvider.prototype.signup = function (dados) {
        var _this = this;
        // retorna a promessa
        return new Promise(function (resolve, reject) {
            _this.api.post('/auth/signup', { name: dados['name'],
                email: dados['email'],
                password: dados['password'],
                confirm: dados['confirm'] })
                .then(function (user) {
                // seta o nome no local storage
                localStorage.setItem('auth-name', user['name']);
                // seta o email no local storage
                localStorage.setItem('auth-email', user['email']);
                // seta o id no local storage
                localStorage.setItem('auth-id', user['id']);
                // retorna o usuario
                resolve(_this.user);
            }).catch(function (err) { return reject(err); });
        });
    };
    /**
     * login
     *
     * realiza o login do usuario
     *
     * @param dados
     */
    AuthProvider.prototype.login = function (dados) {
        var _this = this;
        // retorna a promessa
        return new Promise(function (resolve, reject) {
            // busca os estados na api
            _this.api.post('/auth/login/', { email: dados['email'], password: dados['password'] })
                .then(function (user) {
                // seta o nome no local storage
                localStorage.setItem('auth-name', user['name']);
                // seta o email no local storage
                localStorage.setItem('auth-email', user['email']);
                // seta o token no local storage
                localStorage.setItem('auth-token', user['token_api']);
                // seta o id no local storage
                localStorage.setItem('auth-id', user['id']);
                // Dispara o evento
                _this.events.publish('login');
                // retorna o usuario
                resolve(_this.user);
            }).catch(function (err) { return reject(err); });
        });
    };
    /**
     * Reseta a senha
     * @param dados
     */
    AuthProvider.prototype.forgotPassword = function (dados) {
        var _this = this;
        // retorna a promessa
        return new Promise(function (resolve, reject) {
            // busca os estados na api
            _this.api.post('/auth/forgot_password/', { email: dados['email'] })
                .then(function (successo) { return resolve(successo); })
                .catch(function (err) { return reject(err); });
        });
    };
    /**
     * Atualiza os dados do usuario
     * @param dados
     */
    AuthProvider.prototype.updateProfile = function (dados) {
        var _this = this;
        return this.api.post('/auth/update_profile/', { name: (dados['name']) ? dados['name'] : '',
            email: (dados['email']) ? dados['email'] : '',
            password: (dados['password']) ? dados['password'] : '',
            image: (dados['image']) ? dados['image'] : '' })
            .then(function (user) {
            // seta o nome no local storage
            localStorage.setItem('auth-name', user['name']);
            // seta o email no local storage
            localStorage.setItem('auth-email', user['email']);
            // seta o token no local storage
            localStorage.setItem('auth-token', user['token_api']);
            // seta o id no local storage
            localStorage.setItem('auth-id', user['id']);
            return _this.user();
        })
            .catch(function (err) { return err; });
    };
    /**
     * Busca aimagem do usuario
     */
    AuthProvider.prototype.getUserImage = function () {
        return this.api.get('/auth/get_user_image')
            .then(function (image) { return image; })
            .catch(function (err) { return err; });
    };
    AuthProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__api_api__["a" /* ApiProvider */], __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["e" /* Events */]])
    ], AuthProvider);
    return AuthProvider;
}());

// End of file
//# sourceMappingURL=auth.js.map

/***/ }),

/***/ 154:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoryProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(33);
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



var CategoryProvider = (function () {
    /**
     * Método construtor
     *
     * @param api
     */
    function CategoryProvider(api, events) {
        this.api = api;
        this.events = events;
    }
    /**
     * Faz as listagem das categorias buscando na api
     *
     */
    CategoryProvider.prototype.listApi = function () {
        // Faz a requisicao
        return this.api.get('/category/list')
            .then(function (res) {
            // Verifica se existe uma respose
            if (res) {
                return res;
            }
            else
                return [];
        })
            .catch(function (err) { return err; });
    };
    /**
     * Verifica se a lista deve ser atualizada
     *
     */
    CategoryProvider.prototype.shouldUpdate = function () {
        return __awaiter(this, void 0, void 0, function () {
            var savedUpdatedDate, lastUpdatedDate, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        savedUpdatedDate = localStorage.getItem('updated-date');
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.api.get('/category/last_update')];
                    case 2:
                        lastUpdatedDate = _a.sent();
                        // Verifica se já existe uma data setada
                        if (savedUpdatedDate) {
                            // Verifica se a data esta diferente
                            if (savedUpdatedDate != lastUpdatedDate) {
                                // seta no local storage 
                                localStorage.setItem('updated-date', lastUpdatedDate);
                                return [2 /*return*/, true];
                            }
                            else
                                return [2 /*return*/, false];
                        }
                        else {
                            // seta no local storage 
                            localStorage.setItem('updated-date', lastUpdatedDate);
                            return [2 /*return*/, true];
                        }
                        return [3 /*break*/, 4];
                    case 3:
                        error_1 = _a.sent();
                        return [2 /*return*/, true];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Pega as categorias do localstorage
     *
     */
    CategoryProvider.prototype.listFromStorage = function () {
        // Pega as categorias
        var categories = localStorage.getItem('categories');
        if (categories) {
            // Transforma os dados em json
            var catJson = JSON.parse(categories);
            catJson = catJson.map(function (item) {
                if (typeof item.order == 'undefined')
                    item.order = 0;
                return item;
            });
            // Retorna o valor encontrado
            return catJson;
        }
        return [];
    };
    /**
     * Salva as categorias
     *
     * @param categories
     */
    CategoryProvider.prototype.saveCategoriesOnStore = function (categories, update) {
        if (update === void 0) { update = false; }
        // Verifica se já existem categorias salvas no storage
        var cats = localStorage.getItem('categories');
        // Verifica se é uma atualização
        if (update && cats) {
            // Seta as configurações do usuario
            var catJson = JSON.parse(cats);
            for (var index in categories) {
                if (catJson[index]) {
                    categories[index].showInAll = catJson[index].showInAll;
                    categories[index].actived = catJson[index].actived;
                }
            }
        }
        else {
            // Verifica se existe o index
            categories = categories.map(function (item) {
                item.showInAll = item.showInAll ? item.showInAll : false;
                item.actived = item.actived ? item.actived : false;
                item.actived = !cats ? false : item.actived;
                return item;
            });
        }
        // Salve no localstorage
        localStorage.setItem('categories', JSON.stringify(categories));
        this.events.publish('update:categories');
    };
    /**
     * Lista as categorias ativas
     *
     */
    CategoryProvider.prototype.listActived = function () {
        var categories = this.listFromStorage();
        categories = categories.filter(function (item) {
            return item.actived;
        });
        // Arruma o array de acordo com a ordem salva
        categories.sort(function (a, b) {
            if (!a.order)
                a.order = "0";
            if (!b.order)
                b.order = "0";
            return parseInt(a.order.toString()) - parseInt(b.order.toString());
        });
        return categories;
    };
    /**
     * Categorias que estão no item TODOS
     *
     */
    CategoryProvider.prototype.listInAll = function () {
        var categories = this.listFromStorage();
        categories = categories.filter(function (item) {
            return item.showInAll;
        });
        // Arruma o array de acordo com a ordem salva
        categories.sort(function (a, b) {
            if (!a.order)
                a.order = "0";
            if (!b.order)
                b.order = "0";
            return parseInt(a.order.toString()) - parseInt(b.order.toString());
        });
        return categories;
    };
    /**
     * Faz o update dos registros
     *
     */
    CategoryProvider.prototype.updateDate = function (categoriesParam) {
        if (categoriesParam === void 0) { categoriesParam = null; }
        return __awaiter(this, void 0, void 0, function () {
            var shouldUpdate, categories, _a, storedCategories, catIds, catStoredIds, index, ind, index;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.shouldUpdate()];
                    case 1:
                        shouldUpdate = _b.sent();
                        if (!shouldUpdate) return [3 /*break*/, 5];
                        if (!categoriesParam) return [3 /*break*/, 2];
                        _a = categoriesParam;
                        return [3 /*break*/, 4];
                    case 2: return [4 /*yield*/, this.listApi()];
                    case 3:
                        _a = _b.sent();
                        _b.label = 4;
                    case 4:
                        categories = _a;
                        storedCategories = this.listFromStorage();
                        catIds = categories.map(function (value) { return value.id; });
                        catStoredIds = storedCategories.map(function (value) { return value.id; });
                        // Percorre as categorias recebida
                        for (index in catIds) {
                            // Verifica se já existe
                            if (catStoredIds.indexOf(catIds[index]) !== -1) {
                                ind = catStoredIds.indexOf(catIds[index]);
                                // Salva no array
                                if (categories[index]) {
                                    categories[index].order = storedCategories[ind].order;
                                    storedCategories[ind] = categories[index];
                                }
                            }
                            else {
                                if (categories[index])
                                    storedCategories.push(categories[index]);
                            }
                        }
                        // Percorre as categorias armazenadas
                        for (index in catStoredIds) {
                            // Verifica se existem nos itens recebidos
                            if (catIds.indexOf(catStoredIds[index]) === -1) {
                                // Remove a categoria
                                storedCategories.splice(parseInt(index), -1);
                            }
                        }
                        // Guarda no localhost
                        this.saveCategoriesOnStore(storedCategories, true);
                        return [2 /*return*/, true];
                    case 5: return [2 /*return*/, false];
                }
            });
        });
    };
    CategoryProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__api_api__["a" /* ApiProvider */], __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["e" /* Events */]])
    ], CategoryProvider);
    return CategoryProvider;
}());

// End of file
//# sourceMappingURL=category.js.map

/***/ }),

/***/ 155:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(33);
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



var SettingsProvider = (function () {
    function SettingsProvider(api, events) {
        var _this = this;
        this.api = api;
        this.events = events;
        // Busca a tradução
        this.events.subscribe('translate', function (regions) {
            _this.translate(regions)
                .then(function (retorno) { return localStorage.setItem('translate', JSON.stringify(retorno)); })
                .catch(function (err) { return err; });
        });
    }
    /**
     * Pega os termos
     *
     */
    SettingsProvider.prototype.getTerms = function (key) {
        // Retorna uma promessa
        return this.api.get("/settings/get_terms/" + key)
            .then(function (terms) { return terms; })
            .catch(function (err) { return err; });
    };
    /**
     * Busca a tradução
     *
     * @param regions
     */
    SettingsProvider.prototype.translate = function (regions) {
        return this.api.post('/settings/get_category', { regions: regions })
            .then(function (translate) { return translate; })
            .catch(function (err) { return err; });
    };
    SettingsProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__api_api__["a" /* ApiProvider */],
            __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["e" /* Events */]])
    ], SettingsProvider);
    return SettingsProvider;
}());

// End of file
//# sourceMappingURL=settings.js.map

/***/ }),

/***/ 156:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FeedPessoalProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__api_api__ = __webpack_require__(30);
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


var FeedPessoalProvider = (function () {
    function FeedPessoalProvider(api) {
        this.api = api;
    }
    /**
     * Busca o feed pessoal
     */
    FeedPessoalProvider.prototype.get = function () {
        return this.api.get('/feed_pessoal/get_user_follows')
            .then(function (feedPessoal) { return feedPessoal; })
            .catch(function (err) { return err; });
    };
    FeedPessoalProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__api_api__["a" /* ApiProvider */]])
    ], FeedPessoalProvider);
    return FeedPessoalProvider;
}());

//# sourceMappingURL=feed-pessoal.js.map

/***/ }),

/***/ 169:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 169;

/***/ }),

/***/ 213:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/boas-vindas/boas-vindas.module": [
		814,
		19
	],
	"../pages/cadastro/cadastro.module": [
		815,
		18
	],
	"../pages/editar-categoria-pessoal/editar-categoria-pessoal.module": [
		816,
		17
	],
	"../pages/esqueci-senha/esqueci-senha.module": [
		817,
		16
	],
	"../pages/explorar/explorar.module": [
		818,
		15
	],
	"../pages/feed/feed.module": [
		819,
		0
	],
	"../pages/filtrar-modal/filtrar-modal.module": [
		820,
		14
	],
	"../pages/follow-modal/follow-modal.module": [
		821,
		13
	],
	"../pages/login/login.module": [
		822,
		12
	],
	"../pages/notice/notice.module": [
		823,
		1
	],
	"../pages/noticia-popover/noticia-popover.module": [
		824,
		11
	],
	"../pages/noticias-salvas/noticias-salvas.module": [
		825,
		4
	],
	"../pages/perfil-noticia/perfil-noticia.module": [
		826,
		3
	],
	"../pages/perfil-usuario/perfil-usuario.module": [
		827,
		6
	],
	"../pages/pesquisar-veiculo/pesquisar-veiculo.module": [
		828,
		10
	],
	"../pages/pesquisar/pesquisar.module": [
		829,
		2
	],
	"../pages/suporte/suporte.module": [
		830,
		5
	],
	"../pages/tabs-navigation/tabs-navigation.module": [
		831,
		9
	],
	"../pages/termos/termos.module": [
		832,
		8
	],
	"../pages/veiculos/veiculos.module": [
		833,
		7
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 213;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 30:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__region_region__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_toPromise__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__api_config__ = __webpack_require__(506);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ApiProvider = (function () {
    /**
     * constructor
     *
     * método construtor
     *
     */
    function ApiProvider(http, events, regionsProvider) {
        this.http = http;
        this.events = events;
        this.regionsProvider = regionsProvider;
        // pega a url
        this.url = __WEBPACK_IMPORTED_MODULE_6__api_config__["a" /* ApiConfig */].url;
    }
    /**
     * getHeaders
     *
     * pega os headers que vao ser enviados
     *
     * @return {RequestOptionsArgs}
     */
    ApiProvider.prototype.getHeaders = function () {
        // pega os itens salvos no localstorage
        var email = localStorage.getItem('auth-email');
        var token = localStorage.getItem('auth-token');
        var id = localStorage.getItem('auth-id');
        var region = this.regionsProvider.getActivedRegion();
        region = region ? region.sigla : null;
        var category = localStorage.getItem('feed-id');
        // seta os headers
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/json',
            'Auth-Id': id,
            'Auth-Email': email,
            'Auth-Token': token,
            'App-Region': region,
            'Api-key': 'N8I7exPlkVC0fTp9JEDDTz0POor8D2zK',
            'App-Feed-Id': category
        });
        // volta o objt
        return { headers: headers };
    };
    /**
     * get
     *
     * envia um get ao servidor
     *
     * @param {string} url url da requisicao
     *
     */
    ApiProvider.prototype.get = function (url) {
        return this.__call(url, {}, 'get');
    };
    /**
     * post
     *
     * envia um post para o servidor
     *
     * @param {string} url url da requisicao
     * @param {Object} data dados que serao enviados ao servidor
     *
     */
    ApiProvider.prototype.post = function (url, data) {
        return this.__call(url, data, 'post');
    };
    /**
     * __call
     *
     * faz uma requisicao ao servidor
     *
     * @param {string} requestUrl url da requisicao
     * @param {Object} data os dados a serem enviados
     * @param {string} method o metodo usado na request
     *
     */
    ApiProvider.prototype.__call = function (requestUrl, data, method) {
        var _this = this;
        // Retorna a promessa
        return new Promise(function (resolve, reject) {
            // seta a url
            requestUrl = _this.url + requestUrl;
            // Monta os dados
            var body = JSON.stringify(data);
            // seta as opcoes
            var options = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* RequestOptions */](_this.getHeaders());
            // Se recebeu o metodo (POST)
            var req = (method === 'post') ? _this.http.post(requestUrl, body, options) : _this.http.get(requestUrl, options);
            // pega a resposta
            req.toPromise().then(function (data) {
                // pega a resposta
                var body = data.json();
                // pega a resposta
                if (!body.status) {
                    reject('Erro na resposta da requisicao');
                    return;
                }
                // verifica o código
                switch (body.status) {
                    case 500:
                        reject(body.data.message);
                        break;
                    case 200:
                        resolve(body.data);
                        break;
                    case 403:
                        localStorage.removeItem('auth-id');
                        localStorage.removeItem('auth-name');
                        localStorage.removeItem('auth-email');
                        localStorage.removeItem('auth-token');
                        localStorage.removeItem('feed-id');
                        _this.events.publish('logout');
                        resolve('Acesso negado');
                        break;
                }
            })
                .catch(function (error) { return reject(error); });
        });
    };
    ApiProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["e" /* Events */],
            __WEBPACK_IMPORTED_MODULE_1__region_region__["a" /* RegionProvider */]])
    ], ApiProvider);
    return ApiProvider;
}());

// End of file
//# sourceMappingURL=api.js.map

/***/ }),

/***/ 467:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SyncService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_category_category__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_region_region__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_api_api__ = __webpack_require__(30);
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




var SyncService = (function () {
    /**
     * Método construtor
     *
     */
    function SyncService(api, categoryProvider, regionProvider) {
        this.api = api;
        this.categoryProvider = categoryProvider;
        this.regionProvider = regionProvider;
    }
    /**
     * Pega a quantidade de publicidade
     *
     */
    SyncService.prototype.get_publicity = function (slug) {
        return __awaiter(this, void 0, void 0, function () {
            var publicity;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.api.get("/settings/get_by_slug/" + slug)];
                    case 1:
                        publicity = _a.sent();
                        return [2 /*return*/, publicity];
                }
            });
        });
    };
    /**
     * Verifica se existe alguma atualização a ser baixada do servidor
     *
     */
    SyncService.prototype.checkForUpdates = function () {
        return __awaiter(this, void 0, void 0, function () {
            var timestamp, ts, publicity;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        timestamp = localStorage.getItem('synced-timestamp');
                        if (!timestamp)
                            return [2 /*return*/, true];
                        return [4 /*yield*/, this.api.get('/sync/get_date_update')];
                    case 1:
                        ts = _a.sent();
                        return [4 /*yield*/, this.get_publicity('publicidade')];
                    case 2:
                        publicity = _a.sent();
                        if (publicity) {
                            localStorage.setItem('publicity', JSON.stringify(publicity));
                        }
                        // Verifica se existem atualizações ou não
                        return [2 /*return*/, (ts > timestamp) ? true : false];
                }
            });
        });
    };
    /**
     * Salva as atualizações no localstorage
     *
     */
    SyncService.prototype.saveUpdatesIntoStorage = function () {
        return __awaiter(this, void 0, void 0, function () {
            var updates;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.api.get('/sync/get_data_to_sync')];
                    case 1:
                        updates = _a.sent();
                        // Verifica se recebeu os itens
                        if (updates['regions'])
                            this.regionProvider.saveOnStorage(updates['regions']);
                        if (updates['categories'])
                            this.categoryProvider.updateDate(updates['categories']);
                        if (updates['timestamp'])
                            localStorage.setItem('synced-timestamp', updates['timestamp']);
                        // Volta true por padrão
                        return [2 /*return*/, true];
                }
            });
        });
    };
    SyncService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__providers_api_api__["a" /* ApiProvider */],
            __WEBPACK_IMPORTED_MODULE_0__providers_category_category__["a" /* CategoryProvider */],
            __WEBPACK_IMPORTED_MODULE_1__providers_region_region__["a" /* RegionProvider */]])
    ], SyncService);
    return SyncService;
}());

// End of file
//# sourceMappingURL=sync.service.js.map

/***/ }),

/***/ 470:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValidateProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_forms__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_moment__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ValidateProvider = (function () {
    function ValidateProvider() {
        /**
         * loading
         *
         * @public
         * @type {Boolean}
         */
        this.loading = false;
        /**
         * fBuilder
         *
         * @public
         * @type {FormBuilder}
         */
        this.fBuilder = new __WEBPACK_IMPORTED_MODULE_0__angular_forms__["a" /* FormBuilder */]();
        /**
         * __customRules
         *
         * @private
         * @type {Array<string>}
         */
        this.__customRules = ['valid_email',
            'matches',
            'valid_facebook',
            'older_than',
            'valid_cpf'];
        /**
         * __controllers
         *
         * @private
         * @type {Object}
         */
        this.__controllers = new Object();
        /**
         * error_messages
         *
         * @public
         * @type {Object}
         */
        this.error_messages = {
            required: 'Esse campo é obrigatório',
            minlength: 'Campo muito curto',
            matches: 'Esse campo precisa ser igual ao outro',
            valid_email: 'O e-mail digitado não é válido',
            maxlength: 'Valor maior que o permitido',
            valid_facebook: 'A url do facebook está incorreta',
            valid_cpf: 'O CPF está incorreto',
            older_than: 'Idade minima não alcançada'
        };
        /**
         * submited
         *
         * @public
         * @type {Boolean}
         */
        this.submited = false;
    }
    /**
     * valid_cpf
     *
     * regra de validacao para cpf
     *
     * @private
     * @author Gustavo Vilas Boas
     * @since 02-2017
     * @param {FormControl} control FormControl do angular
     */
    ValidateProvider.prototype.valid_cpf = function (control) {
        // verifica se existe um valor
        if (control.value) {
            // declara as variaveis
            var strCPF = JSON.parse(JSON.stringify(control.value));
            var Soma = 0;
            var Resto = void 0;
            // verifica se o valor é zero
            if (strCPF == "00000000000")
                return { valid_cpf: true };
            // faz a soma das partes
            for (var i = 1; i <= 9; i++) {
                Soma = Soma + parseInt(strCPF.substring(i - 1, i)) * (11 - i);
            }
            // calcula o resto
            Resto = (Soma * 10) % 11;
            // verifica se o resto é 11 ou 10
            if ((Resto == 10) || (Resto == 11))
                Resto = 0;
            // verifica se o resto é igual ao cpf
            if (Resto != parseInt(strCPF.substring(9, 10)))
                return { valid_cpf: true };
            // reseta a soma
            Soma = 0;
            // soma os numeros novamente
            for (var i = 1; i <= 10; i++) {
                Soma = Soma + parseInt(strCPF.substring(i - 1, i)) * (12 - i);
            }
            // calcula o resto
            Resto = (Soma * 10) % 11;
            // verifica o resto
            if ((Resto == 10) || (Resto == 11))
                Resto = 0;
            if (Resto != parseInt(strCPF.substring(10, 11)))
                return { valid_cpf: true };
            ;
            return null;
        }
        else
            return null;
    };
    /**
     * older_than
     *
     * regra de validacao para limite de idade
     *
     * @private
     * @author Gustavo Vilas Boas
     * @since 02-2017
     * @param {FormControl} control FormControl do angular
     */
    ValidateProvider.prototype.older_than = function (age) {
        // seta a mensagem customizada de erro
        this.error_messages['older_than'] = "Voc\u00EA precisa ter mais de " + age + " anos para se cadastrar";
        // retorna o callback de resposta
        return function (control) {
            // verifica se existe um valor
            if (!control.value)
                return null;
            // transforma a data em anos
            var years = __WEBPACK_IMPORTED_MODULE_2_moment__().diff(control.value, 'years');
            console.log(parseInt(age));
            // verifica se é maior que a idade
            if (years < parseInt(age)) {
                console.log('entrou aquiiii');
                return { older_than: true };
            }
            ;
            // volta null por padrao
            return null;
        };
    };
    /**
     * valid_facebook
     *
     * regra de validacao do facebook
     *
     * @private
     * @author Gustavo Vilas Boas
     * @since 02-2017
     * @param {FormControl} control FormControl do angular
     */
    ValidateProvider.prototype.valid_facebook = function (control) {
        // verifica se existe um valor
        if (control.value) {
            // regex
            var regex = /^(https?:\/\/)?((w{3}\.)?)facebook.com\/.*/i;
            // se der match
            if (control.value.match(regex)) {
                return null;
            }
            else
                return { valid_facebook: true };
        }
        else
            return null;
    };
    /**
     * valid_email
     *
     * regra para validacao de email
     *
     * @private
     * @author Gustavo Vilas Boas
     * @since 02-2017
     * @param {FormControl} control FormControl do angular
     */
    ValidateProvider.prototype.valid_email = function (control) {
        // verificia se existe um valor
        if (control.value) {
            // regex
            var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            // se der match
            if (control.value.match(regex)) {
                return null;
            }
            else
                return { valid_email: true };
        }
        else
            return null;
    };
    /**
     * matches
     *
     * verifica se o valor de um campo é igual o outro
     *
     * @private
     * @author Gustavo Vilas Boas
     * @since 02-2017
     * @param {FormControl} control FormControl do angular
     */
    ValidateProvider.prototype.matches = function (field) {
        var _this = this;
        return function (control) {
            // verifica se existe um valor
            if (control.value) {
                // check if there is a value
                if (_this.item(field)) {
                    // verifica se os valores sao iguais
                    if (_this.item(field).valueOf() !== control.value.valueOf()) {
                        return { matches: true };
                    }
                    else
                        return null;
                }
                else
                    return null;
            }
            else
                return null;
        };
    };
    /**
     * set_form
     *
     * cria um novo form group com o form builder
     *
     * @public
     * @author Gustavo Vilas Boas
     * @since 02-2017
     * @param {Array<Object>} rules all rules
     */
    ValidateProvider.prototype.set_form = function (rules) {
        return this.fBuilder.group(this.__setRules(rules));
    };
    /**
     * item
     *
     * retorna o valor de um item especifico do formulário
     *
     * @public
     * @author Gustavo Vilas Boas
     * @since 02-2017
     * @param {string} key nome do item do formulário
     */
    ValidateProvider.prototype.item = function (key) {
        return (this.__controllers[key]) ? this.__controllers[key].value : null;
    };
    /**
     * control
     *
     * retorna um controller especifico do formulario
     *
     * @public
     * @author Gustavo Vilas Boas
     * @since 02-2017
     * @param {string} key nome do item do formulário
     */
    ValidateProvider.prototype.control = function (key) {
        return (this.__controllers[key]) ? this.__controllers[key] : null;
    };
    /**
     * errors
     *
     * retorna os erros existentes em um campo
     *
     * @public
     * @author Gustavo Vilas Boas
     * @since 02-2017
     * @param {string} key nome do item do formulário
     */
    ValidateProvider.prototype.errors = function (key, optional_messages) {
        if (optional_messages === void 0) { optional_messages = new Object(); }
        // pega o controlador
        var fControl = this.__controllers[key];
        // se ele existir
        if (fControl) {
            // verifica se existem errors
            if (fControl.errors && fControl.invalid && fControl.dirty && fControl.touched) {
                // seta o array de retorno
                var retorno = new Array();
                // percorre todos os erros
                for (var e in fControl.errors) {
                    var msg = (this.error_messages[e]) ? this.error_messages[e] : "Nenhuma mensagem encontrada para o erro " + e;
                    msg = (optional_messages[e]) ? optional_messages[e] : msg;
                    retorno.push(msg);
                }
                // volta as mensagens
                return retorno;
            }
            else
                return false;
        }
        else
            return false;
    };
    /**
     * __getValidatorsArray
     *
     * seta uma array de validadores customizados
     *
     * @private
     * @author Gustavo Vilas Boas
     * @since 02-2017
     * @param {string} rules all rules
     */
    ValidateProvider.prototype.__getValidatorsArray = function (rules, field) {
        // verifica se existem regras
        if (!rules)
            return new Array();
        // separa as regras de validação
        var rulesArray = rules.split('|');
        // declara o array de retorno
        var retorno = new Array();
        // percorre todas as regras
        for (var r in rulesArray) {
            // verifica se existe []
            if (rulesArray[r].indexOf('[') !== -1 && rulesArray[r].indexOf(']') !== -1) {
                // separa a string
                var parts = rulesArray[r].split(/[[\]]{1,2}/);
                parts.length--;
                if (this.__customRules.indexOf(parts[0]) === -1) {
                    // adiciona o validador
                    retorno.push(__WEBPACK_IMPORTED_MODULE_0__angular_forms__["g" /* Validators */][parts[0]](parts[1]));
                }
                else {
                    // adiciona o validador customizado
                    retorno.push(this[parts[0]](parts[1]));
                }
            }
            else {
                // verifica se é uma regra customizada
                if (this.__customRules.indexOf(rulesArray[r]) !== -1) {
                    // adiciona o validador customizado
                    retorno.push(this[rulesArray[r]]);
                }
                else {
                    // adiciona o validador
                    retorno.push(__WEBPACK_IMPORTED_MODULE_0__angular_forms__["g" /* Validators */][rulesArray[r]]);
                }
            }
        }
        // retorna as regras
        return retorno;
    };
    /**
     * set_rules
     *
     * seta as regras para o formulário atual
     *
     * @public
     * @author Gustavo Vilas Boas
     * @since 02-2017
     * @param {Array<Object>} rules all rules
     */
    ValidateProvider.prototype.__setRules = function (rules) {
        // objeto que contera os forms controller
        var formControlObject = new Object;
        // percorre todas as regras
        for (var r in rules) {
            // pega o array de validadores
            var validatorsArray = this.__getValidatorsArray(rules[r], r);
            // adiciona um novo FormControl
            formControlObject[r] = new __WEBPACK_IMPORTED_MODULE_0__angular_forms__["b" /* FormControl */](null, validatorsArray);
            // seta os controladores
            this.__controllers = formControlObject;
        }
        // retorna o objeto de formControl
        return formControlObject;
    };
    ValidateProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])()
    ], ValidateProvider);
    return ValidateProvider;
}());

//# sourceMappingURL=validate.js.map

/***/ }),

/***/ 471:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NoticeProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__api_api__ = __webpack_require__(30);
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


var NoticeProvider = (function () {
    function NoticeProvider(api) {
        this.api = api;
    }
    /**
     * busca todas as noticias
     *
     * @param page
     */
    NoticeProvider.prototype.getNotices = function (page, categories) {
        if (page === void 0) { page = 1; }
        if (categories === void 0) { categories = []; }
        var categories_ids = categories.map(function (item) { return item.id; });
        return this.api.post("/notice/get_notices/" + page, { categories_ids: categories_ids })
            .then(function (notices) { return notices; })
            .catch(function (err) { return err; });
    };
    /**
     * Salva a noticia para ler depois
     *
     * @param notice_id
     */
    NoticeProvider.prototype.saveForLater = function (notice_id) {
        return this.api.get("/notice/save_for_later/" + notice_id)
            .then(function (success) { return success; })
            .catch(function (err) { return err; });
    };
    /**
     * Desmarca o ver depois
     */
    NoticeProvider.prototype.unsaveForLater = function (notice_id) {
        return this.api.get("/notice/unsave_for_later/" + notice_id)
            .then(function (success) { return success; })
            .catch(function (err) { return err; });
    };
    /**
     * Pega as noticias salvas
     *
     * @param page
     */
    NoticeProvider.prototype.getSavedNotices = function (page) {
        if (page === void 0) { page = 1; }
        return this.api.get("/notice/get_saved_notices/" + page)
            .then(function (notices) { return notices; })
            .catch(function (err) { return err; });
    };
    /**
     * Pega as noticias do veiculo
     */
    NoticeProvider.prototype.getGatewayNotices = function (gateway_id, page) {
        if (page === void 0) { page = 1; }
        return this.api.get("/notice/get_gateway_notices/" + gateway_id + "/" + page)
            .then(function (notices) { return notices; })
            .catch(function (err) { return err; });
    };
    /**
     * Denuncia uma noticia
     */
    NoticeProvider.prototype.report = function (notice_id) {
        return this.api.get("/notice/report/" + notice_id)
            .then(function (success) { return success; })
            .catch(function (err) { return err; });
    };
    /**
     * Faz a busca de uma noticia pelo titulo
     */
    NoticeProvider.prototype.searchNotice = function (string, page) {
        if (page === void 0) { page = 1; }
        return this.api.get("/notice/search_notice/" + string + "/" + page)
            .then(function (notices) { return notices; })
            .catch(function (err) { return err; });
    };
    /**
     * Busca uma noticia pelo id
     * @param notice_id
     */
    NoticeProvider.prototype.getById = function (notice_id) {
        return this.api.get("/notice/get/" + notice_id)
            .then(function (notice) { return notice; })
            .catch(function (err) { return err; });
    };
    NoticeProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__api_api__["a" /* ApiProvider */]])
    ], NoticeProvider);
    return NoticeProvider;
}());

//# sourceMappingURL=notice.js.map

/***/ }),

/***/ 472:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GatewayProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__api_api__ = __webpack_require__(30);
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


var GatewayProvider = (function () {
    function GatewayProvider(api) {
        this.api = api;
    }
    /**
     * getGatewayById
     *
     * @param id
     */
    GatewayProvider.prototype.get = function (id) {
        // busca as noticias na api
        return this.api.get("/gateway/get/" + id)
            .then(function (gateway) { return gateway; })
            .catch(function (err) { return err; });
    };
    /**
     * saveFollow
     *
     * salva o follow
     *
     * @param dados
     */
    GatewayProvider.prototype.follow = function (gateway_id, personalCapegoryId) {
        if (personalCapegoryId === void 0) { personalCapegoryId = false; }
        return this.api.get("/gateway/follow/" + gateway_id + "/" + personalCapegoryId)
            .then(function (success) { return success; })
            .catch(function (err) { return err; });
    };
    /**
     * Deixa de seguir um veiculo
     *
     * @param dados
     */
    GatewayProvider.prototype.unfollow = function (gateway_id) {
        return this.api.get("/gateway/unfollow/" + gateway_id)
            .then(function (success) { return success; })
            .catch(function (err) { return err; });
    };
    /**
     * Deica de seguir varios veiculos
     *
     */
    GatewayProvider.prototype.unfollowMany = function (gateways_id) {
        return this.api.post('/gateway/unfollow_many', { gateways_id: gateways_id })
            .then(function (success) { return success; })
            .catch(function (err) { return err; });
    };
    /**
     * Silencia um veiculo
     *
     * @param dados
     */
    GatewayProvider.prototype.mute = function (gateway_id) {
        return this.api.get("/gateway/mute/" + gateway_id)
            .then(function (success) { return success; })
            .catch(function (err) { return err; });
    };
    /**
     * Silencia um veiculo
     *
     * @param dados
     */
    GatewayProvider.prototype.unmute = function (gateway_id) {
        return this.api.get("/gateway/unmute/" + gateway_id)
            .then(function (success) { return success; })
            .catch(function (err) { return err; });
    };
    /**
     * Denuncia um veiculo
     *
     * @param gateway_id
     */
    GatewayProvider.prototype.report = function (gateway_id) {
        return this.api.get("/gateway/report/" + gateway_id)
            .then(function (success) { return success; })
            .catch(function (err) { return err; });
    };
    /**
     * Busca a inscrições pela categoria
     * @param category_id
     */
    GatewayProvider.prototype.getSubscriptionByCategory = function (category_id) {
        return this.api.get("/gateway/get_subscription_by_category/" + category_id)
            .then(function (subscriptions) { return subscriptions; })
            .catch(function (err) { return err; });
    };
    /**
     * Obtem os gateways por categoria
     *
     * @param category_id
     * @param page
     */
    GatewayProvider.prototype.getGatewayByCategory = function (query, category_id, page) {
        if (query === void 0) { query = ''; }
        if (page === void 0) { page = 1; }
        var q = encodeURI(query);
        var uri = "/gateway/get_by_category/" + category_id + "/" + page + "?query=" + q;
        return this.api.get(uri)
            .then(function (gateways) { return gateways; })
            .catch(function (err) { return err; });
    };
    /**
     * Busca as inscrições ordenadas
     */
    GatewayProvider.prototype.getOrderedSubscriptions = function () {
        return this.api.get('/gateway/get_ordered_subscriptions')
            .then(function (subscriptions) { return subscriptions; })
            .catch(function (err) { return err; });
    };
    /**
     * Busca o gateway pela query
     * @param query
     */
    GatewayProvider.prototype.searchAll = function (query, page) {
        if (query === void 0) { query = ''; }
        if (page === void 0) { page = 1; }
        var q = encodeURI(query);
        var uri = "/gateway/search_all/" + page + "?query=" + q;
        return this.api.get(uri)
            .then(function (gateways) { return gateways; })
            .catch(function (err) { return err; });
    };
    GatewayProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__api_api__["a" /* ApiProvider */]])
    ], GatewayProvider);
    return GatewayProvider;
}());

// End of file 
//# sourceMappingURL=gateway.js.map

/***/ }),

/***/ 473:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PipesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__translate_translate__ = __webpack_require__(486);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var PipesModule = (function () {
    function PipesModule() {
    }
    PipesModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_1__translate_translate__["a" /* TranslatePipe */]],
            imports: [],
            exports: [__WEBPACK_IMPORTED_MODULE_1__translate_translate__["a" /* TranslatePipe */]],
        })
    ], PipesModule);
    return PipesModule;
}());

//# sourceMappingURL=pipes.module.js.map

/***/ }),

/***/ 474:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DirectivesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__scroll_hide_scroll_hide__ = __webpack_require__(509);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var DirectivesModule = (function () {
    function DirectivesModule() {
    }
    DirectivesModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_1__scroll_hide_scroll_hide__["a" /* ScrollHide */]],
            imports: [],
            exports: [__WEBPACK_IMPORTED_MODULE_1__scroll_hide_scroll_hide__["a" /* ScrollHide */]]
        })
    ], DirectivesModule);
    return DirectivesModule;
}());

//# sourceMappingURL=directives.module.js.map

/***/ }),

/***/ 478:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PersonalCategoryProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__api_api__ = __webpack_require__(30);
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


var PersonalCategoryProvider = (function () {
    function PersonalCategoryProvider(api) {
        this.api = api;
    }
    /**
     * saveCategory
     *
     * faz o cadastro da categoria
     *
     * @param dados
     */
    PersonalCategoryProvider.prototype.saveCategory = function (dados) {
        var _this = this;
        // retorna a promessa
        return new Promise(function (resolve, reject) {
            _this.api.post('/personal_category/save_category', { name: dados['name'],
                user_id: dados['user_id'] })
                .then(function (success) {
                // verifica se salvou
                if (success) {
                    resolve(success);
                }
                else {
                    reject('Erro ao salvar no localStorage');
                }
            }).catch(function (err) { return reject(err); });
        });
    };
    /**
     * Lista as categorias pessoais
     *
     */
    PersonalCategoryProvider.prototype.list = function () {
        return this.api.get('/personal_category/list')
            .then(function (cats) { return cats; })
            .catch(function (err) { return err; });
    };
    /**
     * Deleta uma categoria pessoal
     *
     * @param personal_category_id
     */
    PersonalCategoryProvider.prototype.delete = function (personal_category_id) {
        return this.api.get("/personal_category/delete/" + personal_category_id)
            .then(function (success) { return success; })
            .catch(function (err) { return err; });
    };
    PersonalCategoryProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__api_api__["a" /* ApiProvider */]])
    ], PersonalCategoryProvider);
    return PersonalCategoryProvider;
}());

// End of file 
//# sourceMappingURL=personal-category.js.map

/***/ }),

/***/ 480:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(481);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(485);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 485:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pipes_pipes_module__ = __webpack_require__(473);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_settings_settings__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__directives_directives_module__ = __webpack_require__(474);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_region_region__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_sync_sync_service__ = __webpack_require__(467);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_auth_auth__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_api_api__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_validate_validate__ = __webpack_require__(470);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_notice_notice__ = __webpack_require__(471);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_gateway_gateway__ = __webpack_require__(472);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_personal_category_personal_category__ = __webpack_require__(478);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_feed_pessoal_feed_pessoal__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_platform_browser__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_splash_screen__ = __webpack_require__(468);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_status_bar__ = __webpack_require__(469);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_native_in_app_browser__ = __webpack_require__(476);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__app_component__ = __webpack_require__(813);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__angular_http__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__ionic_native_safari_view_controller__ = __webpack_require__(475);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__ionic_native_social_sharing__ = __webpack_require__(477);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__ionic_native_camera__ = __webpack_require__(479);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__providers_category_category__ = __webpack_require__(154);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




// Services

// Providers







// Modules









// Plugins



var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_13__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_18__app_component__["a" /* MyApp */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_12__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_19__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_2__directives_directives_module__["a" /* DirectivesModule */],
                __WEBPACK_IMPORTED_MODULE_0__pipes_pipes_module__["a" /* PipesModule */],
                __WEBPACK_IMPORTED_MODULE_14_ionic_angular__["h" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_18__app_component__["a" /* MyApp */], {
                    tabsHideOnSubPages: true,
                }, {
                    links: [
                        { loadChildren: '../pages/boas-vindas/boas-vindas.module#BoasVindasPageModule', name: 'BoasVindasPage', segment: 'boas-vindas', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/cadastro/cadastro.module#CadastroPageModule', name: 'CadastroPage', segment: 'cadastro', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/editar-categoria-pessoal/editar-categoria-pessoal.module#EditarCategoriaPessoalPageModule', name: 'EditarCategoriaPessoalPage', segment: 'editar-categoria-pessoal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/esqueci-senha/esqueci-senha.module#EsqueciSenhaPageModule', name: 'EsqueciSenhaPage', segment: 'esqueci-senha', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/explorar/explorar.module#ExplorarPageModule', name: 'ExplorarPage', segment: 'explorar', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/feed/feed.module#FeedPageModule', name: 'FeedPage', segment: 'feed', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/filtrar-modal/filtrar-modal.module#FiltrarModalPageModule', name: 'FiltrarModalPage', segment: 'filtrar-modal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/follow-modal/follow-modal.module#FollowModalPageModule', name: 'FollowModalPage', segment: 'follow-modal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/notice/notice.module#NoticePageModule', name: 'NoticePage', segment: 'notice', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/noticia-popover/noticia-popover.module#NoticiaPopoverPageModule', name: 'NoticiaPopoverPage', segment: 'noticia-popover', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/noticias-salvas/noticias-salvas.module#NoticiasSalvasPageModule', name: 'NoticiasSalvasPage', segment: 'noticias-salvas', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/perfil-noticia/perfil-noticia.module#PerfilNoticiaPageModule', name: 'PerfilNoticiaPage', segment: 'perfil-noticia', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/perfil-usuario/perfil-usuario.module#PerfilUsuarioPageModule', name: 'PerfilUsuarioPage', segment: 'perfil-usuario', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/pesquisar-veiculo/pesquisar-veiculo.module#PesquisarVeiculoPageModule', name: 'PesquisarVeiculoPage', segment: 'pesquisar-veiculo', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/pesquisar/pesquisar.module#PesquisarPageModule', name: 'PesquisarPage', segment: 'pesquisar', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/suporte/suporte.module#SuportePageModule', name: 'SuportePage', segment: 'suporte', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tabs-navigation/tabs-navigation.module#TabsNavigationPageModule', name: 'TabsNavigationPage', segment: 'tabs-navigation', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/termos/termos.module#TermosPageModule', name: 'TermosPage', segment: 'termos', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/veiculos/veiculos.module#VeiculosPageModule', name: 'VeiculosPage', segment: 'veiculos', priority: 'low', defaultHistory: [] }
                    ]
                }),
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_14_ionic_angular__["f" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_18__app_component__["a" /* MyApp */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_16__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_15__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_13__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_14_ionic_angular__["g" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_22__ionic_native_camera__["a" /* Camera */],
                __WEBPACK_IMPORTED_MODULE_7__providers_validate_validate__["a" /* ValidateProvider */],
                __WEBPACK_IMPORTED_MODULE_6__providers_api_api__["a" /* ApiProvider */],
                __WEBPACK_IMPORTED_MODULE_5__providers_auth_auth__["a" /* AuthProvider */],
                __WEBPACK_IMPORTED_MODULE_8__providers_notice_notice__["a" /* NoticeProvider */],
                __WEBPACK_IMPORTED_MODULE_17__ionic_native_in_app_browser__["a" /* InAppBrowser */],
                __WEBPACK_IMPORTED_MODULE_21__ionic_native_social_sharing__["a" /* SocialSharing */],
                __WEBPACK_IMPORTED_MODULE_9__providers_gateway_gateway__["a" /* GatewayProvider */],
                __WEBPACK_IMPORTED_MODULE_10__providers_personal_category_personal_category__["a" /* PersonalCategoryProvider */],
                __WEBPACK_IMPORTED_MODULE_11__providers_feed_pessoal_feed_pessoal__["a" /* FeedPessoalProvider */],
                __WEBPACK_IMPORTED_MODULE_4__services_sync_sync_service__["a" /* SyncService */],
                __WEBPACK_IMPORTED_MODULE_14_ionic_angular__["e" /* Events */],
                __WEBPACK_IMPORTED_MODULE_23__providers_category_category__["a" /* CategoryProvider */],
                __WEBPACK_IMPORTED_MODULE_1__providers_settings_settings__["a" /* SettingsProvider */],
                __WEBPACK_IMPORTED_MODULE_3__providers_region_region__["a" /* RegionProvider */],
                __WEBPACK_IMPORTED_MODULE_20__ionic_native_safari_view_controller__["a" /* SafariViewController */],
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 486:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TranslatePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

/**
 * Generated class for the TranslatePipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
var TranslatePipe = (function () {
    function TranslatePipe() {
        /**
         * Ultima regiao filtrada
         *
         */
        this.lastRegion = null;
    }
    /**
     * Pega a listagem das regioes salvas
     *
     */
    TranslatePipe.prototype.listFromStorage = function () {
        // Pega no localstorage
        var regions = localStorage.getItem('synced-regions');
        // Volta a listagem
        return regions ? JSON.parse(regions) : [];
    };
    /**
     * Pega a regiao ativa
     *
     */
    TranslatePipe.prototype.getActivedRegion = function () {
        // Pega todas as regioes
        var reg = this.listFromStorage();
        if (!reg)
            return null;
        // Verifica se existe algum ativo
        for (var r in reg) {
            if (reg[r].actived)
                return reg[r];
        }
    };
    /**
     * Takes a value and makes it lowercase.
     */
    TranslatePipe.prototype.transform = function (value) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        // Obtem o regiao ativa
        var region = this.getActivedRegion();
        if (!region)
            return value;
        if (this.lastRegion && this.lastRegion == region.id)
            return value;
        this.lastRegion = region.id;
        // Obtem as configuracoes
        var config = localStorage.getItem('translate');
        if (!config)
            return value;
        // Seta o objeto
        var obj = JSON.parse(config);
        if (obj[region.sigla]) {
            var words = obj[region.sigla];
            var word = words.find(function (elem) {
                return (elem.key === value);
            });
            if (word)
                return word.val;
        }
        return value;
    };
    TranslatePipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Pipe */])({
            name: 'translate',
            pure: false
        })
    ], TranslatePipe);
    return TranslatePipe;
}());

// End of file
//# sourceMappingURL=translate.js.map

/***/ }),

/***/ 506:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiConfig; });
// valores constants
var ApiConfig = {
    // 'url': "https://getsimple.com.br/api"
    'url': 'http://getsimple.com.br/android'
};
// End of file
//# sourceMappingURL=api.config.js.map

/***/ }),

/***/ 508:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 217,
	"./af.js": 217,
	"./ar": 218,
	"./ar-dz": 219,
	"./ar-dz.js": 219,
	"./ar-kw": 220,
	"./ar-kw.js": 220,
	"./ar-ly": 221,
	"./ar-ly.js": 221,
	"./ar-ma": 222,
	"./ar-ma.js": 222,
	"./ar-sa": 223,
	"./ar-sa.js": 223,
	"./ar-tn": 224,
	"./ar-tn.js": 224,
	"./ar.js": 218,
	"./az": 225,
	"./az.js": 225,
	"./be": 226,
	"./be.js": 226,
	"./bg": 227,
	"./bg.js": 227,
	"./bm": 228,
	"./bm.js": 228,
	"./bn": 229,
	"./bn.js": 229,
	"./bo": 230,
	"./bo.js": 230,
	"./br": 231,
	"./br.js": 231,
	"./bs": 232,
	"./bs.js": 232,
	"./ca": 233,
	"./ca.js": 233,
	"./cs": 234,
	"./cs.js": 234,
	"./cv": 235,
	"./cv.js": 235,
	"./cy": 236,
	"./cy.js": 236,
	"./da": 237,
	"./da.js": 237,
	"./de": 238,
	"./de-at": 239,
	"./de-at.js": 239,
	"./de-ch": 240,
	"./de-ch.js": 240,
	"./de.js": 238,
	"./dv": 241,
	"./dv.js": 241,
	"./el": 242,
	"./el.js": 242,
	"./en-au": 243,
	"./en-au.js": 243,
	"./en-ca": 244,
	"./en-ca.js": 244,
	"./en-gb": 245,
	"./en-gb.js": 245,
	"./en-ie": 246,
	"./en-ie.js": 246,
	"./en-nz": 247,
	"./en-nz.js": 247,
	"./eo": 248,
	"./eo.js": 248,
	"./es": 249,
	"./es-do": 250,
	"./es-do.js": 250,
	"./es-us": 251,
	"./es-us.js": 251,
	"./es.js": 249,
	"./et": 252,
	"./et.js": 252,
	"./eu": 253,
	"./eu.js": 253,
	"./fa": 254,
	"./fa.js": 254,
	"./fi": 255,
	"./fi.js": 255,
	"./fo": 256,
	"./fo.js": 256,
	"./fr": 257,
	"./fr-ca": 258,
	"./fr-ca.js": 258,
	"./fr-ch": 259,
	"./fr-ch.js": 259,
	"./fr.js": 257,
	"./fy": 260,
	"./fy.js": 260,
	"./gd": 261,
	"./gd.js": 261,
	"./gl": 262,
	"./gl.js": 262,
	"./gom-latn": 263,
	"./gom-latn.js": 263,
	"./gu": 264,
	"./gu.js": 264,
	"./he": 265,
	"./he.js": 265,
	"./hi": 266,
	"./hi.js": 266,
	"./hr": 267,
	"./hr.js": 267,
	"./hu": 268,
	"./hu.js": 268,
	"./hy-am": 269,
	"./hy-am.js": 269,
	"./id": 270,
	"./id.js": 270,
	"./is": 271,
	"./is.js": 271,
	"./it": 272,
	"./it.js": 272,
	"./ja": 273,
	"./ja.js": 273,
	"./jv": 274,
	"./jv.js": 274,
	"./ka": 275,
	"./ka.js": 275,
	"./kk": 276,
	"./kk.js": 276,
	"./km": 277,
	"./km.js": 277,
	"./kn": 278,
	"./kn.js": 278,
	"./ko": 279,
	"./ko.js": 279,
	"./ky": 280,
	"./ky.js": 280,
	"./lb": 281,
	"./lb.js": 281,
	"./lo": 282,
	"./lo.js": 282,
	"./lt": 283,
	"./lt.js": 283,
	"./lv": 284,
	"./lv.js": 284,
	"./me": 285,
	"./me.js": 285,
	"./mi": 286,
	"./mi.js": 286,
	"./mk": 287,
	"./mk.js": 287,
	"./ml": 288,
	"./ml.js": 288,
	"./mr": 289,
	"./mr.js": 289,
	"./ms": 290,
	"./ms-my": 291,
	"./ms-my.js": 291,
	"./ms.js": 290,
	"./mt": 292,
	"./mt.js": 292,
	"./my": 293,
	"./my.js": 293,
	"./nb": 294,
	"./nb.js": 294,
	"./ne": 295,
	"./ne.js": 295,
	"./nl": 296,
	"./nl-be": 297,
	"./nl-be.js": 297,
	"./nl.js": 296,
	"./nn": 298,
	"./nn.js": 298,
	"./pa-in": 299,
	"./pa-in.js": 299,
	"./pl": 300,
	"./pl.js": 300,
	"./pt": 301,
	"./pt-br": 302,
	"./pt-br.js": 302,
	"./pt.js": 301,
	"./ro": 303,
	"./ro.js": 303,
	"./ru": 304,
	"./ru.js": 304,
	"./sd": 305,
	"./sd.js": 305,
	"./se": 306,
	"./se.js": 306,
	"./si": 307,
	"./si.js": 307,
	"./sk": 308,
	"./sk.js": 308,
	"./sl": 309,
	"./sl.js": 309,
	"./sq": 310,
	"./sq.js": 310,
	"./sr": 311,
	"./sr-cyrl": 312,
	"./sr-cyrl.js": 312,
	"./sr.js": 311,
	"./ss": 313,
	"./ss.js": 313,
	"./sv": 314,
	"./sv.js": 314,
	"./sw": 315,
	"./sw.js": 315,
	"./ta": 316,
	"./ta.js": 316,
	"./te": 317,
	"./te.js": 317,
	"./tet": 318,
	"./tet.js": 318,
	"./th": 319,
	"./th.js": 319,
	"./tl-ph": 320,
	"./tl-ph.js": 320,
	"./tlh": 321,
	"./tlh.js": 321,
	"./tr": 322,
	"./tr.js": 322,
	"./tzl": 323,
	"./tzl.js": 323,
	"./tzm": 324,
	"./tzm-latn": 325,
	"./tzm-latn.js": 325,
	"./tzm.js": 324,
	"./uk": 326,
	"./uk.js": 326,
	"./ur": 327,
	"./ur.js": 327,
	"./uz": 328,
	"./uz-latn": 329,
	"./uz-latn.js": 329,
	"./uz.js": 328,
	"./vi": 330,
	"./vi.js": 330,
	"./x-pseudo": 331,
	"./x-pseudo.js": 331,
	"./yo": 332,
	"./yo.js": 332,
	"./zh-cn": 333,
	"./zh-cn.js": 333,
	"./zh-hk": 334,
	"./zh-hk.js": 334,
	"./zh-tw": 335,
	"./zh-tw.js": 335
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 508;

/***/ }),

/***/ 509:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScrollHide; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__(510);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_jquery__ = __webpack_require__(792);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_jquery__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




function constrain(val, min, max) {
    return Math.min(max, Math.max(val, min));
}
var ItemType;
(function (ItemType) {
    ItemType[ItemType["Navbar"] = 0] = "Navbar";
    ItemType[ItemType["Toolbar"] = 1] = "Toolbar";
    ItemType[ItemType["Tabbar"] = 2] = "Tabbar";
})(ItemType || (ItemType = {}));
var TransitionType;
(function (TransitionType) {
    TransitionType[TransitionType["Static"] = 0] = "Static";
    TransitionType[TransitionType["Translate"] = 1] = "Translate";
    TransitionType[TransitionType["Shrink"] = 2] = "Shrink";
})(TransitionType || (TransitionType = {}));
/*
 * 	  startY		   EndY
 *    shrinkStart	TransitionStart		MoveStart
 *		| ------------- | ---------------- | ---------->
 *			Shrink			Translate
 *
 *
 * 	 transitionStart	transitionEnd
 *			| ------------- | ---------->
 *		 		Shrink
 *
 * 	 transitionStart	transitionEnd
 *			| ------------- | ---------->
 *		 		Translate
 *
 */
var Item = (function () {
    function Item(ele) {
        this.ele = ele;
        this.transition = { type: 0, start: 0, end: 0, interval: 0 };
        this.scrollShrinkVal = 0;
        if (ele.classList.contains("tabbar")) {
            this.type = ItemType.Tabbar;
        }
        else if (ele.tagName === "ION-NAVBAR") {
            this.type = ItemType.Navbar;
        }
        else {
            this.type = ItemType.Toolbar;
        }
        this.height = ele.offsetHeight;
        __WEBPACK_IMPORTED_MODULE_2_rxjs__["Subscription"];
        var shrinkable = ele.hasAttribute("scroll-hide-shrink");
        var translatable = ele.hasAttribute("scroll-hide-translate");
        if (shrinkable) {
            this.transition.type = TransitionType.Shrink;
            var scrollShrinkVal = parseFloat(ele.getAttribute("scroll-hide-shrink"));
            if (isNaN(scrollShrinkVal))
                scrollShrinkVal = 1;
            this.scrollShrinkVal = scrollShrinkVal;
        }
        else if (translatable) {
            this.transition.type = TransitionType.Translate;
        }
        else {
            this.transition.type = TransitionType.Static;
        }
        if (this.type === ItemType.Tabbar) {
            this.transition.type = TransitionType.Shrink;
            this.scrollShrinkVal = 0.5;
            //this.transition.type = TransitionType.Translate;
            //this.transition.type = TransitionType.Static;
        }
    }
    return Item;
}());
var ScrollHide = (function () {
    //---------------------------------
    function ScrollHide(content, renderer) {
        this.content = content;
        this.renderer = renderer;
        this.headerItems = [];
        this.footerItems = [];
        //---------------------------------
        this.defaultDelay = 400 * 2;
        this.defaultDuration = 400;
        this.defaultEnd = 0;
        this.y = 0;
        this.yPrev = 0;
        this.scrollTopPrev = 0;
        this.initiated = false;
        this.viewEntered = false;
        //---------------------------------
        this.subscriptions = [];
        /*cachedTabbarStayle: {
            top: string;
            height?: string;
            webkitTransform: string;
        };
        private storeTabbarStyle() {
            console.log("storeTabbarStyle()");
    
            this.headerItems.forEach((item) => {
                if(item.type === ItemType.Tabbar) {
                    this.cachedTabbarStayle = {
                        top: 			 $(item.ele).css("top"),
                        height: 		 $(item.ele).css("height"),
                        webkitTransform: $(item.ele).css("webkitTransform")
                    };
                }
            });
            this.footerItems.forEach((item) => {
                if(item.type === ItemType.Tabbar) {
                    this.cachedTabbarStayle = {
                        top: 			 $(item.ele).css("top"),
                        webkitTransform: $(item.ele).css("webkitTransform")
                    };
                }
            });
            console.log("this.cachedTabbarStayle:", this.cachedTabbarStayle);
        }
        private resetTabbarStyle() {
            console.log("resetTabbarStyle()");
            
            this.headerItems.forEach((item) => {
                if(item.type === ItemType.Tabbar) {
                    $(item.ele).css("overflow", "");
                    $(item.ele).children().css("align-self", "center");
    
                    $(item.ele).css("height", "");
                    $(item.ele).css("min-height", "");
                    $(item.ele).css("webkitTransform", "");
                }
            });
            this.footerItems.forEach((item) => {
                if(item.type === ItemType.Tabbar) {
                    $(item.ele).css("webkitTransform", "");
                }
            });
        }
        private appplyStoredTabbarStyle() {
            console.log("appplyStoredTabbarStyle()");
    
            this.headerItems.forEach((item) => {
                if(item.type === ItemType.Tabbar) {
                    $(item.ele).css("overflow", "hidden");
                    $(item.ele).children().css("align-self", "flex-end");
                    $(item.ele).css("min-height", "0");
    
                    $(item.ele).css("top", this.cachedTabbarStayle.top);
                    $(item.ele).css("height", this.cachedTabbarStayle.height);
                    $(item.ele).css("webkitTransform", this.cachedTabbarStayle.webkitTransform);
                }
            });
            this.footerItems.forEach((item) => {
                if(item.type === ItemType.Tabbar) {
                    $(item.ele).css("top", this.cachedTabbarStayle.top);
                    $(item.ele).css("webkitTransform", this.cachedTabbarStayle.webkitTransform);
                }
            });
        }*/
        this.hasStopMoving = false;
        this.hasClearStopMoving = false;
        this.extendBottom = false;
        this.hasReachBottomBefore = false;
        this.hasBeyondMaxScrollTop = false;
    }
    ScrollHide.prototype.ngOnInit = function () {
        var _this = this;
        this.content.fullscreen = true;
        // ViewCtrl LifeCycle
        this.subscriptions.push(this.viewCtrl.didEnter.subscribe(function () {
            _this.init();
        }));
        this.subscriptions.push(this.viewCtrl.willLeave.subscribe(function () {
            _this.resetStyle();
        }));
        // Content Scroll Event
        var prevEndTimestep = 0;
        this.subscriptions.push(this.content.ionScroll.subscribe(function (event) {
            if (event) {
                if (event.timeStamp > prevEndTimestep + 200) {
                    _this.onContentScroll(event, false);
                }
            }
        }));
        this.subscriptions.push(this.content.ionScrollEnd.subscribe(function (event) {
            if (event) {
                if (event.timeStamp > prevEndTimestep + 200) {
                    _this.onContentScroll(event, true);
                }
                prevEndTimestep = event.timeStamp;
            }
        }));
    };
    ScrollHide.prototype.ngOnDestroy = function () {
        console.log("ngOnDestroy()");
        this.resetStyle();
        this.viewCtrl = null;
        this.headerItems = null;
        this.footerItems = null;
        this.headerEle = null;
        this.footerEle = null;
        this.subscriptions.forEach(function (sub) { return sub.unsubscribe(); });
        this.subscriptions = null;
    };
    ScrollHide.prototype.init = function () {
        this.y = 0;
        this.yPrev = 0;
        this.scrollTopPrev = this.content.scrollTop;
        this.content.resize();
        var contentEle = this.content.getNativeElement();
        var headerEle = contentEle.parentElement.querySelector("ion-header");
        var footerEle = contentEle.parentElement.querySelector("ion-footer");
        if (headerEle) {
            this.headerItems = __WEBPACK_IMPORTED_MODULE_3_jquery__(headerEle)
                .children()
                .toArray().map(function (ele) { return new Item(ele); });
        }
        else {
            this.headerItems = [];
        }
        if (footerEle) {
            this.footerItems = __WEBPACK_IMPORTED_MODULE_3_jquery__(footerEle)
                .children()
                .toArray().map(function (ele) { return new Item(ele); });
        }
        else {
            this.footerItems = [];
        }
        var hasTabbar = (this.content._tabs !== null);
        if (hasTabbar) {
            //this.tabbarEle = this.content._tabs._tabbar.nativeElement;
            var fix = this.content._tabs;
            if (fix) {
                var tabbarEle = fix._tabbar.nativeElement;
                if (this.content._tabsPlacement === "bottom") {
                    this.footerItems.push(new Item(tabbarEle));
                }
                else {
                    this.headerItems.push(new Item(tabbarEle));
                }
            }
        }
        this.headerItems = this.headerItems.reverse();
        this.footerItems = this.footerItems.reverse();
        var headerHeight = 0, footerHeight = 0;
        //console.group("headerItems")
        var shrinkableHeightSum = 0;
        this.headerItems.forEach(function (item, index) {
            headerHeight += item.ele.offsetHeight;
            // Navbar would not be raised without setting position to relative			
            if (item.type === ItemType.Navbar) {
                __WEBPACK_IMPORTED_MODULE_3_jquery__(item.ele).css("position", "relative");
            }
            // Prevent overlapping of bottom element
            if (item.type === ItemType.Tabbar) {
                __WEBPACK_IMPORTED_MODULE_3_jquery__(item.ele).css("overflow", "hidden");
                __WEBPACK_IMPORTED_MODULE_3_jquery__(item.ele).children().css("align-self", "flex-end");
            }
            else {
                __WEBPACK_IMPORTED_MODULE_3_jquery__(item.ele).css("z-index", index + 1);
            }
            // For shrinking
            //$(item.ele).css("padding-top", "0");			
            //$(item.ele).css("padding-bottom", "0");
            __WEBPACK_IMPORTED_MODULE_3_jquery__(item.ele).css("min-height", "0");
            __WEBPACK_IMPORTED_MODULE_3_jquery__(item.ele).css("height", item.height + "px");
            switch (item.transition.type) {
                case TransitionType.Shrink:
                    var shrinkHeight = (item.height * item.scrollShrinkVal);
                    item.transition.start = (shrinkableHeightSum);
                    item.transition.end = (shrinkableHeightSum + shrinkHeight);
                    item.transition.interval = (shrinkHeight);
                    shrinkableHeightSum += (shrinkHeight);
                    break;
                case TransitionType.Translate:
                    item.transition.start = (shrinkableHeightSum);
                    item.transition.end = (shrinkableHeightSum + item.height);
                    item.transition.interval = (item.height);
                    shrinkableHeightSum += (item.height);
                    break;
                case TransitionType.Static:
                    item.transition.start = (shrinkableHeightSum);
                    item.transition.end = (shrinkableHeightSum);
                    item.transition.interval = (0);
                    break;
            }
            //console.log(item, item.ele.offsetHeight);
        });
        this.headerHeight = headerHeight;
        this.defaultEnd = this.headerHeight * 2;
        this.endY = shrinkableHeightSum;
        //console.groupEnd();
        //console.group("footerItems")
        this.footerItems.forEach(function (item) {
            footerHeight += item.ele.offsetHeight;
            //console.log(item.ele, item.ele.offsetHeight);
        });
        this.footerHeight = footerHeight;
        //console.groupEnd();
        //console.log("headerHeight:", headerHeight, ", footerHeight:", footerHeight, ", endY:", this.endY);
        /*
        ion-header {
            pointer-events: none;
        }

        ion-header > * {
            pointer-events: all;
        }*/
        if (headerEle) {
            __WEBPACK_IMPORTED_MODULE_3_jquery__(headerEle).css("pointer-events", "none");
            __WEBPACK_IMPORTED_MODULE_3_jquery__(headerEle).children().css("pointer-events", "all");
        }
        if (footerEle) {
            __WEBPACK_IMPORTED_MODULE_3_jquery__(footerEle).css("pointer-events", "none");
            __WEBPACK_IMPORTED_MODULE_3_jquery__(footerEle).children().css("pointer-events", "all");
        }
        this.headerEle = headerEle;
        this.footerEle = footerEle;
    };
    ScrollHide.prototype.resetStyle = function () {
        this.headerItems.forEach(function (item, index) {
            if (item.type === ItemType.Navbar) {
                __WEBPACK_IMPORTED_MODULE_3_jquery__(item.ele).css("position", "");
            }
            if (item.type === ItemType.Tabbar) {
                __WEBPACK_IMPORTED_MODULE_3_jquery__(item.ele).css("overflow", "");
                __WEBPACK_IMPORTED_MODULE_3_jquery__(item.ele).children().css("align-self", "center");
            }
            else {
                __WEBPACK_IMPORTED_MODULE_3_jquery__(item.ele).css("z-index", "");
            }
        });
        if (this.headerEle) {
            __WEBPACK_IMPORTED_MODULE_3_jquery__(this.headerEle).css("pointer-events", "none");
            __WEBPACK_IMPORTED_MODULE_3_jquery__(this.headerEle).children().css("pointer-events", "all");
        }
        if (this.footerEle) {
            __WEBPACK_IMPORTED_MODULE_3_jquery__(this.footerEle).css("pointer-events", "none");
            __WEBPACK_IMPORTED_MODULE_3_jquery__(this.footerEle).children().css("pointer-events", "all");
        }
        // Header Items
        this.headerItems.forEach(function (item) {
            __WEBPACK_IMPORTED_MODULE_3_jquery__(item.ele).css("height", "");
            __WEBPACK_IMPORTED_MODULE_3_jquery__(item.ele).css("min-height", "");
            __WEBPACK_IMPORTED_MODULE_3_jquery__(item.ele).css("webkitTransform", "");
            if (item.type !== ItemType.Tabbar) {
                __WEBPACK_IMPORTED_MODULE_3_jquery__(item.ele).css("marginBottom", "");
                if (item.transition.type === TransitionType.Shrink) {
                    // Shrinking
                    __WEBPACK_IMPORTED_MODULE_3_jquery__(item.ele).children().not(".toolbar-background, .toolbar-content")
                        .each(function (index, navbarChild) {
                        __WEBPACK_IMPORTED_MODULE_3_jquery__(navbarChild).css("transform", "");
                    });
                    __WEBPACK_IMPORTED_MODULE_3_jquery__(item.ele).children(".toolbar-content").children()
                        .each(function (index, navbarChild) {
                        __WEBPACK_IMPORTED_MODULE_3_jquery__(navbarChild).css("transform", "");
                    });
                }
                else {
                    // Translating
                    __WEBPACK_IMPORTED_MODULE_3_jquery__(item.ele).children().not(".toolbar-background")
                        .each(function (index, navbarChild) {
                        __WEBPACK_IMPORTED_MODULE_3_jquery__(navbarChild).css("opacity", "");
                    });
                }
            }
        });
        // Footer Items
        this.footerItems.forEach(function (item) {
            __WEBPACK_IMPORTED_MODULE_3_jquery__(item.ele).css("webkitTransform", "");
        });
        // Content
        this.content.setScrollElementStyle("padding-bottom", (this.content._pBottom) + "px");
    };
    ScrollHide.prototype.onContentScroll = function (event, isMoveEnd) {
        // For Ionic 3
        var maxScrollTop = this.content._scrollContent.nativeElement.scrollHeight - (event.contentTop + event.contentHeight + event.contentBottom) - (this.extendBottom ? this.footerHeight : 0);
        // For Ionic 2
        // let maxScrollTop = this.content._scrollEle.scrollHeight - (event.contentTop + event.contentHeight + event.contentBottom) - (this.extendBottom ? this.footerHeight : 0); // For ionic2
        var duration = 0;
        var scrollTopDiff = event.scrollTop - this.scrollTopPrev;
        var y = (event.scrollTop >= 0) ? constrain(this.yPrev + scrollTopDiff, 0, this.defaultEnd) : 0;
        //console.log(event.scrollTop + ", maxScrollTop: " + maxScrollTop + ", isMoveEnd: " + isMoveEnd);
        //----------------------------------------------------------------------------------------
        if (event.scrollTop >= maxScrollTop) {
            if (this.hasReachBottomBefore) {
                //console.log("--> 1 show");				
                y = 0;
                duration = this.defaultDuration;
            }
            if (isMoveEnd) {
                //console.log("--> 1 extend padding-bottom");
                this.hasReachBottomBefore = true;
                this.extendBottom = true;
            }
        }
        // Reset bottom
        if (event.scrollTop < maxScrollTop - 40) {
            this.hasReachBottomBefore = false;
            this.extendBottom = false;
            //console.log("--> reset padding-bottom");
        }
        // Set bottom height
        if (this.extendBottom) {
            this.content.setScrollElementStyle("padding-bottom", (this.content._pBottom + this.footerHeight) + "px");
        }
        else {
            this.content.setScrollElementStyle("padding-bottom", (this.content._pBottom) + "px");
        }
        //----------------------------------------------------------------------------------------
        //if previous and current y are the same, no need to continue
        if (this.yPrev !== y) {
            //this.modifyDom(y, duration, event.domWrite);
            var yDiff = y - this.yPrev;
            if (-30 < yDiff && yDiff < 30) {
                this.modifyDom(y, duration, event.domWrite);
            }
            else {
                this.modifyDom(y, 50, event.domWrite);
            }
        }
        //console.log({ y: y, scrollTop: event.scrollTop, maxScrollTop: maxScrollTop});
        this.yPrev = y;
        this.scrollTopPrev = event.scrollTop;
    };
    ScrollHide.prototype.modifyDom = function (y, duration, dowWrite) {
        var _this = this;
        dowWrite(function () {
            y = constrain(y, 0, _this.endY);
            // Header Items
            _this.headerItems.forEach(function (item) {
                var dy_transit = constrain((y - item.transition.start), 0, item.transition.interval);
                var dy_move = constrain((y - item.transition.end), 0, Infinity);
                //console.log(y, "dy_transit:", dy_transit, "dy_move:", dy_move, TransitionType[item.transition.type]);
                if (item.type === ItemType.Tabbar) {
                    constrain((dy_transit / item.height), 0, 1);
                    __WEBPACK_IMPORTED_MODULE_3_jquery__(item.ele).css({
                        height: item.height - dy_transit,
                    });
                    _this.translateElementY(item.ele, -dy_move, duration);
                }
                else {
                    if (item.transition.type === TransitionType.Shrink) {
                        // Shrinking
                        var val_1 = constrain((dy_transit / item.height), 0, 1);
                        __WEBPACK_IMPORTED_MODULE_3_jquery__(item.ele).css({
                            height: item.height - dy_transit,
                            marginBottom: 0,
                        });
                        _this.translateElementY(item.ele, 0, duration);
                        __WEBPACK_IMPORTED_MODULE_3_jquery__(item.ele).children().not(".toolbar-background, .toolbar-content")
                            .each(function (index, navbarChild) {
                            __WEBPACK_IMPORTED_MODULE_3_jquery__(navbarChild).css("transform", "scale(" + (1 - val_1) + ")");
                        });
                        __WEBPACK_IMPORTED_MODULE_3_jquery__(item.ele).children(".toolbar-content").children()
                            .each(function (index, navbarChild) {
                            __WEBPACK_IMPORTED_MODULE_3_jquery__(navbarChild).css("transform", "scale(" + (1 - val_1) + ")");
                        });
                    }
                    else {
                        // Translating
                        var val_2 = constrain((dy_transit / item.height), 0, 1);
                        __WEBPACK_IMPORTED_MODULE_3_jquery__(item.ele).css({
                            height: item.height,
                            marginBottom: -dy_transit,
                        });
                        _this.translateElementY(item.ele, -dy_transit, duration);
                        __WEBPACK_IMPORTED_MODULE_3_jquery__(item.ele).children().not(".toolbar-background")
                            .each(function (index, navbarChild) {
                            __WEBPACK_IMPORTED_MODULE_3_jquery__(navbarChild).css("opacity", 1 - val_2);
                        });
                    }
                }
            });
            // Footer Items
            _this.footerItems.forEach(function (item) {
                _this.translateElementY(item.ele, y, duration);
            });
        });
    };
    ScrollHide.prototype.translateElementY = function (ele, y, duration) {
        this.renderer.setElementStyle(ele, "webkitTransform", "translate3d(0, " + y + "px,0)");
        if (duration && !ele.style.transitionDuration) {
            ele.style.transitionDuration = duration + "ms";
            setTimeout(function () {
                ele.style.transitionDuration = "";
            }, this.defaultDelay);
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])("scroll-hide"),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* ViewController */])
    ], ScrollHide.prototype, "viewCtrl", void 0);
    ScrollHide = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* Directive */])({
            selector: '[scroll-hide]' // Attribute selector
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Content */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* Renderer */]])
    ], ScrollHide);
    return ScrollHide;
}());

//# sourceMappingURL=scroll-hide.js.map

/***/ }),

/***/ 813:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_settings_settings__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_sync_sync_service__ = __webpack_require__(467);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_feed_pessoal_feed_pessoal__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__ = __webpack_require__(469);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_splash_screen__ = __webpack_require__(468);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ionic_angular_components_toast_toast_controller__ = __webpack_require__(86);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var MyApp = (function () {
    /**
     * Método construtor
     *
     * @param platform
     * @param statusBar
     * @param auth
     * @param events
     * @param feedPessoalProvider
     * @param splashScreen
     * @param menu
     */
    function MyApp(platform, statusBar, auth, events, syncService, toastCtrl, feedPessoalProvider, splashScreen, menu, modalCtrl, settingsProvider) {
        var _this = this;
        this.auth = auth;
        this.events = events;
        this.syncService = syncService;
        this.toastCtrl = toastCtrl;
        this.feedPessoalProvider = feedPessoalProvider;
        this.menu = menu;
        this.modalCtrl = modalCtrl;
        this.settingsProvider = settingsProvider;
        this.rootPage = 'FeedPage';
        /**
         * Usuario logado no app
         *
         */
        this.user = null;
        /**
         * Paginas do menu
         *
         */
        this.pages = [];
        /**
         * Feed pessoal
         *
         */
        this.feedPessoal = [];
        /**
         * Index do feed pessoal
         *
         */
        this.indexFeedPessoal = 5;
        // Quando a plataforma estiver pronta
        platform.ready().then(function () {
            statusBar.styleDefault();
            splashScreen.hide();
            _this.setPages();
            _this.getImageUser();
        });
        // Verifica se existem atualizações
        this.syncService.checkForUpdates()
            .then(function (ts) {
            // Verifica se existe um timestamp
            if (ts) {
                _this.syncService.saveUpdatesIntoStorage();
            }
        });
        // Seta a autenticacao
        this.user = this.auth.user();
        if (this.user)
            this.__getFeedPessoal();
        // Quando existe logout
        events.subscribe('logout', function () {
            _this.menu.close();
            _this.setPages();
            _this.user = null;
            _this.nav.setRoot('FeedPage');
            _this.feedPessoal = [];
        });
        // Toda vez que houver um follow novo
        events.subscribe('atualizar', function () {
            if (_this.user)
                _this.__getFeedPessoal();
        });
        // Atualiza o menu ao logar
        events.subscribe('login', function () {
            _this.user = _this.auth.user();
            _this.setPages();
            _this.getImageUser();
            _this.__getFeedPessoal();
        });
        // Atualiza o usuario
        events.subscribe('profile', function () {
            _this.user = _this.auth.user();
            _this.getImageUser();
        });
        // Verifica se é a primeira vez
        if (!localStorage.getItem('already-opened')) {
            this.rootPage = "FiltrarModalPage";
        }
    }
    /**
     * Busca a imagem do usuario
     */
    MyApp.prototype.getImageUser = function () {
        var _this = this;
        if (!this.user)
            return;
        this.auth.getUserImage()
            .then(function (image) { return _this.user.image = image; })
            .catch(function (err) { return console.log(err); });
    };
    /**
     * Busca o feed pessoal
     */
    MyApp.prototype.__getFeedPessoal = function () {
        var _this = this;
        this.feedPessoalProvider.get()
            .then(function (feed) {
            if (feed.length > 0) {
                // Seta a propriedade para abrir
                feed = feed.map(function (item) {
                    item.open = false;
                    return item;
                });
                // Seta od feeds
                _this.feedPessoal = feed;
            }
            else {
                _this.feedPessoal = [];
            }
        })
            .catch(function (err) {
            console.log(err);
        });
    };
    /**
     * Mostra mais ou menos feed
     *
     * @param length
     * @param index
     * @param feed
     */
    MyApp.prototype.toggleContent = function (length, index, feed) {
        if (index == length) {
            this.indexFeedPessoal = 5;
        }
        else
            this.indexFeedPessoal = length;
    };
    /**
     * Abre e fecha as categorias do menu
     * @param index
     * @param status
     */
    MyApp.prototype.openCategory = function (item) {
        if (this.feedPessoal)
            item.open = !item.open;
    };
    /**
     * Seta as paginas do menu
     *
     */
    MyApp.prototype.setPages = function () {
        // paginas
        this.pages = [
            {
                title: 'Entrar',
                icon: 'log-in',
                component: 'LoginPage',
                appear: !this.auth.user()
            }, {
                title: 'Ler depois',
                icon: 'bookmark',
                component: 'NoticiasSalvasPage',
                appear: this.auth.user()
            }, {
                title: 'Termos',
                icon: 'information-circle',
                component: 'TermosPage',
                appear: false
            }, {
                title: 'Suporte e Sugestão',
                icon: 'call',
                component: 'SuportePage',
                appear: true
            }
        ];
    };
    /**
     * openPage
     *
     * @param page
     */
    MyApp.prototype.openPage = function (page) {
        // close the menu when clicking a link from the menu
        this.menu.close();
        // navigate to the new page if it is not the current page
        this.nav.setRoot(page.component);
    };
    /**
     * Faz o logout do sistema
     *
     */
    MyApp.prototype.doLogout = function () {
        this.auth.logout();
    };
    /**
     * perfilUsuario
     */
    MyApp.prototype.perfilUsuario = function () {
        this.menu.close();
        this.nav.setRoot('PerfilUsuarioPage');
    };
    /**
     * explorar
     */
    MyApp.prototype.explorar = function () {
        this.menu.close();
        this.nav.setRoot('ExplorarPage');
    };
    /**
     * Abre a edição de feed pessoal
     *
     */
    MyApp.prototype.editContent = function () {
        var modal = this.modalCtrl.create('EditarCategoriaPessoalPage');
        modal.present();
    };
    /**
     * Abre o perfil do gateway
     */
    MyApp.prototype.openGateway = function (gateway_id) {
        this.nav.push('PerfilNoticiaPage', { id: gateway_id });
        this.menu.close();
    };
    /**
     * Seta a categoria no local storage
     *
     * @param feedType
     * @param id
     */
    MyApp.prototype.setFeed = function (item, feed) {
        if (feed === void 0) { feed = false; }
        // Redireciona pro feed padrao
        if (feed) {
            localStorage.removeItem('feed-id');
            this.nav.setRoot('FeedPage');
            this.menu.close();
            return;
        }
        // Verifica qual o tipo da categoria
        if (item.categoria.personal_category) {
            localStorage.setItem('feed-id', 'p-' + item.categoria.id);
        }
        else
            localStorage.setItem('feed-id', item.categoria.id);
        this.nav.setRoot('FeedPage', { name: item.categoria.name });
        this.menu.close();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_5_ionic_angular__["m" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["m" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/var/www/html/SimpleNews/simplenews-app/src/app/app.html"*/'<ion-menu [content]="content" [swipeEnabled]="false">\n  <ion-content class="menu-content">\n\n    <!-- user -->\n    <div id="user-content">\n      <div *ngIf="user" (click)="perfilUsuario()">\n        <div *ngIf="user.image" \n              class="user"\n              [style.background-image]=" ( user.image ) ? \n                                     \'url(\' + user.image + \')\' : \n                                     \'url( assets/imgs/empty.jpg )\'">\n        </div>\n        <h4 *ngIf="user">{{ user.name }}</h4>\n      </div>\n    </div>\n    <p margin-left>Feed pessoal</p>\n    <!-- FEEDS -->\n    <ion-list class="category" *ngIf="feedPessoal.length > 0">\n\n      <div *ngFor="let item of feedPessoal; let i = index">\n        <div *ngIf="i < indexFeedPessoal" padding-right>\n          <ion-item inset class="category-item">\n            <ion-icon [name]=" ( item.open ) ? \'ios-arrow-down\' : \'ios-arrow-forward\'" (click)="openCategory( item )"></ion-icon>\n            <h2 class="category-name" margin-left (click)="setFeed( item )">{{ item.categoria.name }}</h2>\n          </ion-item>\n        </div>\n        <!-- Categoria -->\n\n        <ion-list inset class="gateways" *ngIf="item.open && i < indexFeedPessoal" margin-left>\n          <ion-item *ngFor="let gateway of item.gateways" (click)="openGateway( gateway.id )">\n            <div class="image-gateway">\n              <img *ngIf="gateway.image" [src]="gateway.image">\n            </div>\n            {{ gateway.name }}\n          </ion-item>\n        </ion-list>\n        <!-- Veiculos -->\n      </div>\n\n      <button class="button-mostrar-mais" *ngIf="feedPessoal.length > 5" (click)="toggleContent( feedPessoal.length, indexFeedPessoal, \'pessoal\' )"\n        ion-button block round clear outline color="dark">\n        {{ ( indexFeedPessoal < feedPessoal.length ) ? \'Mostrar mais\' : \'Mostrar menos\' }}\n      </button>\n    </ion-list>\n\n    <div class="add-content-button" margin>\n      <button ion-button outline block (click)="explorar()">Adicionar conteúdo</button>\n    </div><!-- Botao explorar -->\n\n    <ion-list no-lines class="menu-list">\n\n      <div>\n        <button ion-item (click)="setFeed( false, true )">\n          <ion-icon name="home" item-left></ion-icon>\n          Inicio\n        </button>\n      </div>\n\n      <div>\n        <button ion-item *ngIf="user" (click)="editContent()">\n          <ion-icon name="create" item-left></ion-icon>\n          Editar conteúdo\n        </button>\n      </div>\n\n      <div *ngFor="let page of pages">\n        <button ion-item *ngIf="page.appear" (click)="openPage(page)">\n          <ion-icon *ngIf="page.icon" [name]="page.icon" item-left></ion-icon>\n          {{page.title}}\n        </button>\n      </div>\n\n      <button ion-item *ngIf="user" (click)="doLogout()">\n        <ion-icon name="log-out" item-left></ion-icon>\n        Sair\n      </button>\n    </ion-list>\n    <!-- MENU -->\n\n  </ion-content>\n</ion-menu>\n\n<ion-nav [root]="rootPage" #content swipe-back-enabled="false"></ion-nav>'/*ion-inline-end:"/var/www/html/SimpleNews/simplenews-app/src/app/app.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_2__providers_feed_pessoal_feed_pessoal__["a" /* FeedPessoalProvider */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5_ionic_angular__["p" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__["a" /* AuthProvider */],
            __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["e" /* Events */],
            __WEBPACK_IMPORTED_MODULE_1__services_sync_sync_service__["a" /* SyncService */],
            __WEBPACK_IMPORTED_MODULE_8_ionic_angular_components_toast_toast_controller__["a" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_feed_pessoal_feed_pessoal__["a" /* FeedPessoalProvider */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["k" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["l" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_0__providers_settings_settings__["a" /* SettingsProvider */]])
    ], MyApp);
    return MyApp;
}());

// End of file
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 85:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegionProvider; });
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


var RegionProvider = (function () {
    function RegionProvider(events) {
        this.events = events;
    }
    /**
     * Salva as regioes no localstorage
     *
     * @param region
     */
    RegionProvider.prototype.saveOnStorage = function (regions) {
        if (!localStorage.getItem('synced-regions')) {
            for (var r in regions) {
                if (regions[r].sigla.indexOf('br') !== -1) {
                    regions[r].actived = true;
                }
                else {
                    regions[r].actived = false;
                }
            }
        }
        localStorage.setItem('synced-regions', JSON.stringify(regions));
        // Dispara evento para tradução
        this.events.publish('translate', regions);
    };
    /**
     * Pega a listagem das regioes salvas
     *
     */
    RegionProvider.prototype.listFromStorage = function () {
        // Pega no localstorage
        var regions = localStorage.getItem('synced-regions');
        // Volta a listagem
        return regions ? JSON.parse(regions) : [];
    };
    /**
     * Seta a regiao ativa
     *
     * @param sigla
     */
    RegionProvider.prototype.setActivedRegion = function (sigla) {
        // Pega todos os itens
        var reg = this.listFromStorage();
        if (!reg)
            return null;
        for (var r in reg) {
            // Verifica se foi o selecionado
            if (reg[r].sigla == sigla) {
                reg[r].actived = true;
            }
            else {
                reg[r].actived = false;
            }
        }
        // Salva no storage
        this.saveOnStorage(reg);
    };
    /**
     * Pega a regiao ativa
     *
     */
    RegionProvider.prototype.getActivedRegion = function () {
        // Pega todas as regioes
        var reg = this.listFromStorage();
        if (!reg)
            return null;
        // Verifica se existe algum ativo
        for (var r in reg) {
            if (reg[r].actived)
                return reg[r];
        }
        // Retorna o brasil como ativo por padrao
        for (var r in reg) {
            if (reg[r].sigla.indexOf('BRL') !== -1) {
                reg[r].actived = true;
                return reg[r];
            }
        }
    };
    RegionProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["e" /* Events */]])
    ], RegionProvider);
    return RegionProvider;
}());

// End of file
//# sourceMappingURL=region.js.map

/***/ })

},[480]);
//# sourceMappingURL=main.js.map