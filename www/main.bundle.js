webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
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
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_jwt__ = __webpack_require__("../../../../angular2-jwt/angular2-jwt.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angular2_jwt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_app_app_component__ = __webpack_require__("../../../../../src/app/components/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_header_header_component__ = __webpack_require__("../../../../../src/app/components/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_login_login_component__ = __webpack_require__("../../../../../src/app/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_list_list_component__ = __webpack_require__("../../../../../src/app/components/list/list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_auth_auth_service__ = __webpack_require__("../../../../../src/app/services/auth/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_bookmark_bookmark_service__ = __webpack_require__("../../../../../src/app/services/bookmark/bookmark.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_user_user_service__ = __webpack_require__("../../../../../src/app/services/user/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__guards_auth_guard__ = __webpack_require__("../../../../../src/app/guards/auth.guard.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_8__components_login_login_component__["a" /* LoginComponent */], },
    { path: 'bookmarks', component: __WEBPACK_IMPORTED_MODULE_9__components_list_list_component__["a" /* ListComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_13__guards_auth_guard__["a" /* AuthGuard */]] },
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__components_app_app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_8__components_login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_9__components_list_list_component__["a" /* ListComponent */],
            __WEBPACK_IMPORTED_MODULE_7__components_header_header_component__["a" /* HeaderComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["HttpModule"],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* RouterModule */].forRoot(routes)
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_10__services_auth_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_11__services_bookmark_bookmark_service__["a" /* BookmarkService */],
            __WEBPACK_IMPORTED_MODULE_12__services_user_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_5_angular2_jwt__["JwtHelper"],
            __WEBPACK_IMPORTED_MODULE_13__guards_auth_guard__["a" /* AuthGuard */]
        ],
        bootstrap: [
            __WEBPACK_IMPORTED_MODULE_6__components_app_app_component__["a" /* AppComponent */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/components/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n\n<div class=\"container\">\n    <router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/components/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/header/header.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "img {\n    position: absolute;\n    top: -12.5px;\n    left: calc( 50% - ( 215px / 2 ) );\n    height: 85px;\n}\n\nnav.navbar {\n    height: 56px !important;\n}\n\n.bg-dark {\n    background: #2c3e50 !important;\n    color: #bdc3c7;\n}\n\n.active {\n    color: #ecf0f1;\n}\n\n.nav-link {\n    cursor: pointer;\n}\n\nli.nav-item {\n    font-size: 18px;\n    position: relative;\n    top: 8px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-dark bg-dark fixed-top\">\n    <div class=\"container\">\n        <a class=\"navbar-brand mr-auto\">\n            <img src=\"assets/img/logo.svg\"/>\n        </a>\n        <div class=\"collapse navbar-collapse\">\n            <ul class=\"navbar-nav ml-auto\">\n                <ng-container *ngIf=\"_authService.isAuthenticated()\">\n                    <li class=\"nav-item\">\n                        <p class=\"nav-link\" >Welcome {{ _userService.fetchUser().forename }}</p>\n                    </li>\n                    <li class=\"nav-item\">\n                        <a class=\"nav-link\" (click)=\"_authService.logOut()\">Log out</a>\n                    </li>\n                </ng-container>\n            </ul>\n        </div>\n    </div>\n</nav>\n  \n"

/***/ }),

/***/ "../../../../../src/app/components/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_auth_service__ = __webpack_require__("../../../../../src/app/services/auth/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_user_service__ = __webpack_require__("../../../../../src/app/services/user/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HeaderComponent = (function () {
    function HeaderComponent(_authService, _userService) {
        this._authService = _authService;
        this._userService = _userService;
        this.user = {};
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    return HeaderComponent;
}());
HeaderComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-header',
        template: __webpack_require__("../../../../../src/app/components/header/header.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/header/header.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_user_user_service__["a" /* UserService */]) === "function" && _b || Object])
], HeaderComponent);

var _a, _b;
//# sourceMappingURL=header.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/list/list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "div.row {\n    margin-top: 15px;\n}\n\ndiv.no-bookmarks {\n    width: 50vw;\n    height: 50vh;\n    position: absolute;\n    top: 25vh;\n    left: 25vw;\n    color: #95a5a6;\n    text-align: center;\n}\n\n.no-bookmarks h3 {\n    font-size: 18pt;\n}\n\n.no-bookmarks i {\n    font-size: 70pt !important;\n}\n\n.invisibutton {\n    color: inherit;\n    background: transparent;\n    border: none;\n    font-weight: normal;\n    padding: none;\n    margin: none;\n}\n\ndiv.bookmark {\n    background: #f9f9f9;\n    border-radius: 3px;\n    border-bottom: 5px solid #95a5a6;\n    position: relative;\n    margin-bottom: 15px;\n    overflow: scroll;\n    transition: linear all 0.2s;\n    -webkit-transition: linear all 0.2s;\n    -moz-transition: linear all 0.2s;\n}\n\ndiv.bookmark:hover {\n    -webkit-transform: translateY( -2.5px );\n            transform: translateY( -2.5px );\n    box-shadow: 2px 5px 10px 0px rgba(153,153,153,1);\n    border-bottom: 5px solid #1abc9c;\n    transition: linear all 0.2s;\n    -webkit-transition: linear all 0.2s;\n    -moz-transition: linear all 0.2s;\n}\n\ndiv.img-container {\n    position: relative;\n    top: 0;\n    left: 0;\n    height: 25%;\n    width: 100%;\n    overflow: none;\n}\n\ndiv.img-container img {\n    transition: linear all 0.2s;\n    -webkit-transition: linear all 0.2s;\n    -moz-transition: linear all 0.2s;\n}\n\ndiv.img-container:hover img {\n    -webkit-filter: blur( 1.5px );\n            filter: blur( 1.5px );\n    transition: linear all 0.2s;\n    -webkit-transition: linear all 0.2s;\n    -moz-transition: linear all 0.2s;\n}\n\ndiv.img-container .ctas {\n    position: absolute;\n    top: calc( 50% - 30px );\n    left: calc( 50% - ( 30px * 3) - ( 5px * 3) );\n    display: none;\n    transition: linear all 0.2s;\n    -webkit-transition: linear all 0.2s;\n    -moz-transition: linear all 0.2s;\n}\n\n.btn-circle {\n    width: 60px;\n    height: 60px;\n    line-height: 1.33;\n    border-radius: 50%;\n    margin-left: 5px;\n    background-color: rgba( 0,0,0,0.5 );\n    text-align: center;\n    transition: linear all 0.2s;\n    -webkit-transition: linear all 0.2s;\n    -moz-transition: linear all 0.2s;\n}\n\n.icon-add {\n    background-color: #2ecc71;\n    position: fixed;\n    padding: 10px;\n    font-size: 20px !important;\n    border-radius: 100%;\n    bottom: 35px;\n    right: 35px;\n    text-align: center;\n    color: #ecf0f1 !important;\n}\n\n.icon-add:hover {\n    color: #fff !important;\n}\n\n.btn-circle:active,\n.btn-circle:focus {\n    outline: none !important;\n    border: none !important;\n    box-shadow: none !important;\n}\n\n.btn-circle i {\n    font-size: 25px !important;\n    color: #c0c0c0 !important;\n    position: relative;\n    transition: linear all 0.2s;\n    -webkit-transition: linear all 0.2s;\n    -moz-transition: linear all 0.2s;\n}\n\ndiv.img-container .ctas .cta:hover * {\n    color: #fff !important;\n    transition: linear all 0.2s;\n    -webkit-transition: linear all 0.2s;\n    -moz-transition: linear all 0.2s;\n}\n\ndiv.img-container:hover .ctas {\n    display: block;\n    transition: linear all 0.2s;\n}\n\ndiv.bookmark * {\n    text-decoration: none;\n    color: #999;\n    font-size: 10pt;\n    font-weight: 300;\n}\n\ndiv.bookmark .body {\n    position: relative;\n    padding: 15px;\n}\n\ndiv.bookmark .body h3 {\n    font-weight: 400;\n    color: #666;\n    font-size: 11pt;\n}\n\ndiv.bookmark .body .sub i {\n    margin-right: 10px;\n}\n\ndiv.bookmark img {\n    width: 100%;\n    height: auto;\n}\n\na.tag {\n    padding: 3px;\n    padding-left: 5px;\n    padding-right: 5px;\n    margin-left: 5px;\n    background: #efefef;\n    border: 1px solid rgba( 127, 127, 127, 0.2 );\n    border-radius: 3px;\n    transition: linear all 0.2s;\n    -webkit-transition: linear all 0.2s;\n    -moz-transition: linear all 0.2s;\n    cursor: pointer;\n}\n\na.tag:hover {\n    background: #f9f9f9;\n    transition: linear all 0.2s;\n    -webkit-transition: linear all 0.2s;\n    -moz-transition: linear all 0.2s;\n}\n\ndiv.form {\n    padding-top: 5px;\n    padding-bottom: 5px;\n    padding-left: 10px;\n    padding-right: 10px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/list/list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"col-xl-11 col-lg-11 col-md-11 col-sm-11\">\n            <h1 class=\"title\">Your bookmarks</h1>\n        </div>\n    </div>\n    <div class=\"row justify-content-center\">\n        <div class=\"no-bookmarks\" *ngIf=\"data.length === 0 || !data\">\n            <i class=\"icon-bookmark-outline\"></i>\n            <h3>No bookmarks found - why not <button class=\"invisibutton\" data-toggle=\"modal\" data-target=\"#createModal\">create one?</button></h3>\n        </div>\n        <div class=\"col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xs-12\" *ngFor=\"let bookmark of data\">\n            <div class=\"bookmark\" (hover)=\"setBookmark( bookmark._id )\">\n                <div class=\"img-container\">\n                    <img src=\"{{ bookmark.image }}\" alt=\"\" class=\"hero\">\n                    <div class=\"ctas\">\n                        <button class=\"btn btn-circle cta\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Go to this bookmark\">\n                            <a href=\"{{ bookmark.url }}\" target=\"_blank\"><i class=\"icon-link\"></i></a>\n                        </button>\n                        <button class=\"btn btn-circle cta\" data-toggle=\"modal\" data-target=\"#editModal\" (click)=\"setTarget( bookmark )\">\n                            <i class=\"icon-edit\"></i>\n                        </button>\n                        <button class=\"btn btn-circle cta\" data-toggle=\"modal\" data-target=\"#deleteModal\" (click)=\"setTarget( bookmark )\">\n                            <i class=\"icon-cancel\"></i>\n                        </button>\n                    </div>\n                </div>\n                <div class=\"body\">\n                    <h3>{{ bookmark.title }}</h3>\n                    <h5 class=\"sub\">\n                        <i class=\"icon-calendar\"></i>\n                        <ng-container *ngIf=\"!bookmark.date_edited\">\n                            Created on {{ bookmark.date_created | date : 'dd/MM/yyyy' }}\n                        </ng-container>\n                        <ng-container *ngIf=\"bookmark.date_editied\">\n                            Edited on {{ bookmark.date_edited | date : 'dd/MM/yyyy' }}\n                        </ng-container>\n                    </h5>\n                    <h5 class=\"sub\">\n                        <a href=\"{{ bookmark.url }}\" target=\"_blank\">\n                            <i class=\"icon-link\"></i>  {{ bookmark.url }}\n                        </a>\n                    </h5>\n                    <h5 class=\"sub\">\n                        <i class=\"icon-descr\"></i>  {{ bookmark.description }}\n                    </h5>\n                    <hr>\n                    <div class=\"tags\">\n                        <i class=\"icon-tags\"></i>\n                        <ng-container *ngFor=\"let tag of bookmark.tags\">\n                            <a (click)=\"filterList(tag)\" class=\"tag\">{{ tag }}</a>\n                        </ng-container>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n<div class=\"modal fade\" id=\"deleteModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"deleteModalLabel\" aria-hidden=\"true\">\n    <div class=\"modal-dialog\" role=\"document\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <h5 class=\"modal-title\" id=\"deleteModalLabel\">Are you sure?</h5>\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                <span aria-hidden=\"true\">&times;</span>\n                </button>\n            </div>\n            <div class=\"modal-body\">\n                Are you sure you want to delete this bookmark?  This action cannot be undone.\n            </div>\n            <div class=\"modal-footer\">\n                <button type=\"button\" class=\"btn btn-light\" data-dismiss=\"modal\">No, cancel</button>\n                <button type=\"button\" class=\"btn btn-danger\" (click)=\"deleteBookmark()\" data-dismiss=\"modal\">Yes, delete</button>\n            </div>\n        </div>\n    </div>\n</div>\n\n<div class=\"modal fade\" id=\"editModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"editModalLabel\" aria-hidden=\"true\">\n    <div class=\"modal-dialog modal-lg\" role=\"document\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <h4 class=\"modal-title\" id=\"editModalLabel\">Edit Bookmark</h4>\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                <span aria-hidden=\"true\">&times;</span>\n                </button>\n            </div>\n            <div class=\"modal-body\">\n                <h5>Edit bookmark</h5>\n                <h6>Update your bookmark using the form below</h6>\n                <hr>\n                <div class=\"form\">\n                    <div class=\"form-group\">\n                        <label for=\"title\">Title</label>\n                        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"bookmark.title\" id=\"title\" placeholder=\"e.g. My first Bookmark\" aria-label=\"title\">\n                    </div>\n                    <div class=\"form-group\">\n                        <label for=\"description\">Description</label>\n                        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"bookmark.description\" id=\"description\" placeholder=\"e.g. Google - a well known search engine\" aria-label=\"description\">\n                    </div>\n                    <div class=\"form-group\">\n                        <label for=\"url\">URL</label>\n                        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"bookmark.url\" id=\"url\" placeholder=\"e.g. https://www.google.co.uk\" aria-label=\"url\">\n                    </div>\n                    <div class=\"form-group\">\n                        <label for=\"image\">Image URL</label>\n                        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"bookmark.image\" id=\"image\" placeholder=\"e.g. https://i.imgur.com/Q3dsGFB.jpg\" aria-label=\"url\">\n                    </div>\n                    <div class=\"form-group\">\n                        <label for=\"tags\">Tags</label>\n                        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"bookmark.tags\" id=\"url\" placeholder=\"Comma-separated list of up to 5 tags - e.g. electric, boogaloo, sundial\" aria-label=\"tags\">\n                    </div>\n                </div>\n            </div>\n            <div class=\"modal-footer\">\n                <button type=\"button\" class=\"btn btn-light\" data-dismiss=\"modal\">Cancel</button>\n                <button type=\"button\" class=\"btn btn-success\" (click)=\"editBookmark( bookmark )\" data-dismiss=\"modal\">Save</button>\n            </div>\n        </div>\n    </div>\n</div>\n\n<div class=\"modal fade\" id=\"createModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"createModalLabel\" aria-hidden=\"true\">\n    <div class=\"modal-dialog modal-lg\" role=\"document\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <h4 class=\"modal-title\" id=\"createModalLabel\">Create Bookmark</h4>\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                <span aria-hidden=\"true\">&times;</span>\n                </button>\n            </div>\n            <div class=\"modal-body\">\n                <h5>Add bookmark</h5>\n                <h6>Please fill out the below form to create a new bookmark</h6>\n                <hr>\n                <div class=\"form\">\n                    <div class=\"form-group\">\n                        <label for=\"title\">Title</label>\n                        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"bookmark.title\" id=\"title\" placeholder=\"e.g. My first Bookmark\" aria-label=\"title\">\n                    </div>\n                    <div class=\"form-group\">\n                        <label for=\"description\">Description</label>\n                        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"bookmark.description\" id=\"description\" placeholder=\"e.g. Google - a well known search engine\" aria-label=\"description\">\n                    </div>\n                    <div class=\"form-group\">\n                        <label for=\"url\">URL</label>\n                        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"bookmark.url\" id=\"url\" placeholder=\"e.g. https://www.google.co.uk\" aria-label=\"url\">\n                    </div>\n                    <div class=\"form-group\">\n                        <label for=\"image\">Image URL</label>\n                        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"bookmark.image\" id=\"image\" placeholder=\"e.g. https://i.imgur.com/Q3dsGFB.jpg\" aria-label=\"url\">\n                    </div>\n                    <div class=\"form-group\">\n                        <label for=\"tags\">Tags</label>\n                        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"bookmark.tags\" id=\"url\" placeholder=\"Comma-separated list of up to 5 tags - e.g. electric, boogaloo, sundial\" aria-label=\"tags\">\n                    </div>\n                </div>\n            </div>\n            <div class=\"modal-footer\">\n                <button type=\"button\" class=\"btn btn-light\" data-dismiss=\"modal\">Cancel</button>\n                <button type=\"button\" class=\"btn btn-success\" (click)=\"createBookmark()\" data-dismiss=\"modal\">Create</button>\n            </div>\n        </div>\n    </div>\n</div>\n\n<i class=\"icon-add\" data-toggle=\"modal\" data-target=\"#createModal\"></i>"

/***/ }),

/***/ "../../../../../src/app/components/list/list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_bookmark_bookmark_service__ = __webpack_require__("../../../../../src/app/services/bookmark/bookmark.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_user_service__ = __webpack_require__("../../../../../src/app/services/user/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ListComponent = (function () {
    function ListComponent(_bookmarkService, _userService) {
        var _this = this;
        this._bookmarkService = _bookmarkService;
        this._userService = _userService;
        this.data = [];
        this.bookmark = {
            _id: '',
            creator: this._userService.fetchUser().username,
            title: '',
            description: '',
            url: '',
            image: '',
            date_created: new Date(),
            tags: ''
        };
        /**
         * Get all bookmarks for the active user
         */
        this.getData = function () {
            var user = _this._userService.fetchUser();
            _this._bookmarkService.getBookmarksByCreator(user.username).subscribe(function (data) {
                console.log(data);
                _this.data = data.bookmarks;
            });
        };
        /**
         * Set the target bookmark for any CRUD operations (mainly the U & D operations)
         * @param {string} bookmarkId - the bookmark to target
         */
        this.setTarget = function (bookmark) {
            _this.bookmark = bookmark;
        };
        /**
         * Create a new bookmark
         */
        this.createBookmark = function () {
            _this._bookmarkService.createBookmark(_this.bookmark).subscribe(function () {
                _this.getData();
                _this.clearBookmark();
            });
        };
        /**
         * Edit an existing bookmark
         * @param {string} bookmarkId - the bookmark to edit
         * @param {Object} bookmark - the new content
         */
        this.editBookmark = function (bookmark) {
            console.log(bookmark);
            _this._bookmarkService.updateBookmark(bookmark._id, bookmark).subscribe(function () {
                _this.getData();
                _this.clearBookmark();
            });
        };
        /**
         * Delete an existing event
         * @param {string} bookmarkId - the bookmark to delete
         */
        this.deleteBookmark = function () {
            _this._bookmarkService.deleteBookmark(_this.bookmark._id).subscribe(function () {
                _this.getData();
                _this.clearBookmark();
            });
        };
        /**
         * Reset the targeted bookmark
         */
        this.clearBookmark = function () {
            _this.bookmark = {
                _id: '',
                creator: _this._userService.fetchUser().username,
                title: '',
                description: '',
                url: '',
                image: '',
                date_created: new Date(),
                tags: ''
            };
        };
    }
    ListComponent.prototype.ngOnInit = function () {
        this.getData();
    };
    return ListComponent;
}());
ListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-list',
        template: __webpack_require__("../../../../../src/app/components/list/list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/list/list.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_bookmark_bookmark_service__["a" /* BookmarkService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_bookmark_bookmark_service__["a" /* BookmarkService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_user_user_service__["a" /* UserService */]) === "function" && _b || Object])
], ListComponent);

var _a, _b;
//# sourceMappingURL=list.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "div.jumbotron {\n    text-align: center;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -ms-flex-line-pack: center;\n        align-content: center;\n    margin-top: 20px;\n    padding-top: 32px;\n    padding-bottom: 32px;\n}\n\nimg {\n    display: block;\n    margin: 20px auto;\n}\n\n.btn-group {\n    margin: 20px;\n    width: 80%;\n    margin-left: 10%;\n    margin-right: 10%;\n}\n.btn-group .btn {\n    width: 50%;\n    border: 1px solid rgba( 0,0,0,0.15 );\n}\n.btn-group .btn.focus {\n    background-color: #bdc3c7;\n}\n\ndiv.form {\n    margin-top: 20px;\n}\ndiv.form h3 {\n    margin-bottom: 1em;\n}\n\ndiv.alert {\n    margin-top: 1em;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"col-lg-12\">\n        <div class=\"jumbotron\">\n            <img src=\"assets/img/logo-dark.svg\" alt=\"logo\" height=\"150px\">\n            <div class=\"btn-group\" role=\"group\" aria-label=\"Log in or Sign up\" data-toggle=\"buttons\">\n                <button type=\"button\" class=\"btn btn-light\" (click)=\"toggleForm()\">\n                    Log in\n                </button> \n                <button type=\"button\" class=\"btn btn-light\" (click)=\"toggleForm()\">\n                    Sign up\n                </button> \n            </div>\n            <div class=\"form\" *ngIf=\"!registering\">\n                <h3>Please sign in using the form below</h3>\n                <div class=\"form-group form-group-lg\">\n                    <div class=\"input-group\">\n                        <span class=\"input-group-addon\"><i class=\"icon-user\"></i></span>\n                        <input type=\"text\" class=\"form-control\" id=\"username\" placeholder=\"Username\" [(ngModel)]=\"login.username\" aria-label=\"Username\">\n                    </div>\n                </div>\n                <div class=\"form-group form-group-lg\">\n                    <div class=\"input-group\">\n                        <span class=\"input-group-addon\"><i class=\"icon-lock\"></i></span>\n                        <input type=\"password\" class=\"form-control\" id=\"password\" placeholder=\"Password\" [(ngModel)]=\"login.password\">\n                    </div>\n                </div>\n            </div>\n            <div class=\"form\" *ngIf=\"registering\">\n                <h3>Welcome!<br/>Please sign up using the form below</h3>\n                <div class=\"form-group\">\n                    <input type=\"text\" class=\"form-control\" id=\"forename\" placeholder=\"Forename\" [(ngModel)]=\"register.forename\" aria-label=\"Forename\">\n                </div>\n                <div class=\"form-group\">\n                    <input type=\"text\" class=\"form-control\" id=\"surname\" placeholder=\"Surname\" [(ngModel)]=\"register.surname\" aria-label=\"Surname\">\n                </div>\n                <div class=\"form-group\">\n                    <input type=\"text\" class=\"form-control\" id=\"username\" placeholder=\"Username\" [(ngModel)]=\"register.username\" aria-label=\"Username\">\n                </div>\n                <div class=\"form-group\">\n                    <input type=\"password\" class=\"form-control\" id=\"passwordA\" placeholder=\"Password\" [(ngModel)]=\"register.password.a\" aria-label=\"Password\">                \n                </div>\n                <div class=\"form-group\">\n                    <input type=\"password\" class=\"form-control\" id=\"passwordB\" placeholder=\"Confirm password\" [(ngModel)]=\"register.password.b\" aria-label=\"Password\">\n                </div>\n            </div>\n            <button class=\"btn btn-dark btn-block btn-lg\" type=\"button\" (click)=\"onSubmit()\">{{ !registering ? 'SIGN IN' : 'REGISTER' }}</button>\n            <div class=\"alert alert-danger alert-dismissible fade show\" role=\"alert\" *ngIf=\"!valid && message\">\n                <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\n                    <span aria-hidden=\"true\">&times;</span>\n                </button>\n                <strong>Error: </strong> {{ message }}\n            </div>\n            <div class=\"alert alert-success alert-dismissible fade show\" role=\"alert\" *ngIf=\"valid && message\">\n                <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\n                    <span aria-hidden=\"true\">&times;</span>\n                </button>\n                <strong>Success: </strong> {{ message }}\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_auth_service__ = __webpack_require__("../../../../../src/app/services/auth/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt__ = __webpack_require__("../../../../angular2-jwt/angular2-jwt.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = (function () {
    function LoginComponent(_auth, _router, _jwt) {
        var _this = this;
        this._auth = _auth;
        this._router = _router;
        this._jwt = _jwt;
        this.login = {
            username: '',
            password: ''
        };
        this.register = {
            password: {
                a: '',
                b: ''
            },
            username: '',
            forename: '',
            surname: ''
        };
        this.registering = false;
        this.valid = true;
        this.message = '';
        /**
         * Switch which form is displayed
         */
        this.toggleForm = function () {
            _this.registering = !_this.registering;
        };
        /**
         * Sign in to the app
         */
        this.signIn = function (data) {
            _this._auth.authenticate(data).subscribe(function (response) {
                // on good response
                if (response.success) {
                    localStorage.clear();
                    localStorage.setItem('accessToken', response.token);
                    localStorage.setItem('userInfo', JSON.stringify(response.user));
                    _this._router.navigate(['/bookmarks']);
                }
                else {
                    _this.valid = false;
                    _this.message = response.msg;
                }
            });
        };
        /**
         * Sign up for the app
         */
        this.signUp = function (data) {
            console.log(data);
            if (data.password.a === data.password.b) {
                _this.valid = true;
                _this.message = '';
                data.password = data.password.a;
                _this._auth.registerUser(data).subscribe(function (response) {
                    if (response.success) {
                        _this.toggleForm();
                        _this.valid = true;
                        _this.message = 'Account created!  Please sign in now';
                    }
                    else {
                        _this.valid = false;
                        _this.message = response.message;
                        _this.register.password = { a: '', b: '' };
                    }
                });
            }
            else {
                _this.valid = false;
                _this.message = 'Passwords don\'t match';
            }
        };
    }
    /**
     * Submit the form
     */
    LoginComponent.prototype.onSubmit = function () {
        var submitted;
        !this.registering ? submitted = this.login : submitted = this.register;
        !this.registering ? this.signIn(this.login) : this.signUp(this.register);
    };
    ;
    return LoginComponent;
}());
LoginComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'login',
        template: __webpack_require__("../../../../../src/app/components/login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/login/login.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_jwt__["JwtHelper"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_jwt__["JwtHelper"]) === "function" && _c || Object])
], LoginComponent);

var _a, _b, _c;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/guards/auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_auth_service__ = __webpack_require__("../../../../../src/app/services/auth/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = (function () {
    function AuthGuard(_authService, _router) {
        this._authService = _authService;
        this._router = _router;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        var url = JSON.stringify(state.url);
        console.log(url);
        // login, authenticated -> bookmarks
        // if( url === '/login' && this._authService.isAuthenticated() ) {
        //     this._router.navigate( [ '/bookmarks' ] );
        //     return true;
        // }
        // // bookmark, authenticated -> bookmarks
        // if( url === '/bookmarks' && this._authService.isAuthenticated() ) {
        //     return true;
        // }
        // if (url !== 'login' && !this._authService.isAuthenticated() ) {
        //     return true;
        // } else {
        //     return false
        // }
        return this._authService.isAuthenticated();
    };
    return AuthGuard;
}());
AuthGuard = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _b || Object])
], AuthGuard);

var _a, _b;
//# sourceMappingURL=auth.guard.js.map

/***/ }),

/***/ "../../../../../src/app/services/auth/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt__ = __webpack_require__("../../../../angular2-jwt/angular2-jwt.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AuthService = (function () {
    function AuthService(_http, _router) {
        var _this = this;
        this._http = _http;
        this._router = _router;
        this.development = false;
        /**
         * Generate an endpoint depending on the environment
         * @param {string} url
         */
        this.prepareEndpoint = function (url) {
            return (_this.development ? url : "http://localhost:8080/" + url);
        };
        /**
         * Fetch the auth token from local storage
         */
        this.loadToken = function () {
            _this.token = localStorage.getItem('token');
        };
        /**
         * Create a new user
         * @param {User} user
         */
        this.registerUser = function (user) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
            headers.append('Content-Type', 'application/json');
            var endpoint = _this.prepareEndpoint('users/register');
            return _this._http.post(endpoint, user, { headers: headers }).map(function (response) { return response.json(); });
        };
        /**
         * Attempt to log the user in
         * @param {User} user
         */
        this.authenticate = function (user) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
            headers.append('Content-Type', 'application/json');
            var endpoint = _this.prepareEndpoint('users/auth');
            return _this._http.post(endpoint, user, { headers: headers }).map(function (response) { return response.json(); });
        };
        /**
         * Fetch the profile information for the stored token
         */
        this.getProfile = function () {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
            _this.loadToken();
            headers.append('Content-Type', 'application/json');
            headers.append('Authorization', _this.token);
            var endpoint = _this.prepareEndpoint('users/profile');
            return _this._http.get(endpoint, { headers: headers }).map(function (response) { return response.json(); });
        };
        /**
         * Store the user's auth token & information in local storage
         * @param {string} token
         * @param {User} user
         */
        this.store = function (token, user) {
            localStorage.setItem('token', token);
            localStorage.setItem('user', JSON.stringify(user));
            _this.token = token;
            _this.user = user;
        };
        /**
         * Check for an active authentication token
         */
        this.isAuthenticated = function () {
            return Object(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__["tokenNotExpired"])('accessToken');
        };
        /**
         * Clear our the information stored against the user
         */
        this.logOut = function () {
            delete _this.token;
            delete _this.user;
            localStorage.clear();
            _this._router.navigate(['/login']);
        };
        this.development = __WEBPACK_IMPORTED_MODULE_5__environments_environment__["a" /* environment */].production;
    }
    return AuthService;
}());
AuthService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */]) === "function" && _b || Object])
], AuthService);

var _a, _b;
//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/bookmark/bookmark.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookmarkService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BookmarkService = (function () {
    function BookmarkService(_http) {
        var _this = this;
        this._http = _http;
        /**
         * Generate an endpoint depending on the environment
         * @param {string} url
         */
        this.prepareEndpoint = function (url) {
            return (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production ? url : "http://localhost:8080/" + url);
        };
        /**
         * Create a new bookmark
         * @param {Object} bookmark - the bookmark to create
         */
        this.createBookmark = function (bookmark) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
            headers.append('Content-Type', 'application/json');
            return _this._http.post(_this.prepareEndpoint('bookmarks'), bookmark, { headers: headers });
        };
        /**
         * Delete a bookmark
         * @param {string} bookmarkId
         */
        this.deleteBookmark = function (bookmarkId) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
            headers.append('Content-Type', 'application/json');
            return _this._http.delete(_this.prepareEndpoint("bookmarks/" + bookmarkId));
        };
        /**
         * Call the API to get a bookmark
         * @param {string} bookmarkId - the id of the bookmark to fetch
         */
        this.getBookmark = function (bookmarkId) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
            headers.append('Content-Type', 'application/json');
            return _this._http.get(_this.prepareEndpoint("bookmarks/" + bookmarkId), { headers: headers }).map(function (response) { return response.json(); });
        };
        /**
         * Call the API to fetch all bookmarks by a given creator
         * @param {string} creatorId - the creator's username
         */
        this.getBookmarksByCreator = function (creatorId) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
            headers.append('Content-Type', 'application/json');
            return _this._http.get(_this.prepareEndpoint("bookmarks/creator/" + creatorId), { headers: headers }).map(function (response) { return response.json(); });
        };
        /**
         * Call the API to update a bookmark
         * @param {string} bookmarkId - the id of the bookmark to update
         * @param {Object} bookmark - the new content of the bookmark
         */
        this.updateBookmark = function (bookmarkId, bookmark) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
            headers.append('Content-Type', 'application/json');
            console.log(bookmark);
            return _this._http.put(_this.prepareEndpoint("bookmarks/" + bookmarkId), JSON.stringify(bookmark), { headers: headers }).map(function (response) { return response.json(); });
        };
    }
    return BookmarkService;
}());
BookmarkService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object])
], BookmarkService);

var _a;
//# sourceMappingURL=bookmark.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/user/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UserService = (function () {
    function UserService() {
        /**
         * Fetch the user information from localStorage
         */
        this.fetchUser = function () {
            var user = JSON.parse(localStorage.getItem('userInfo'));
            return {
                username: user.username,
                forename: user.forename,
                surname: user.surname
            };
        };
        /**
         * Set the userInfo object in localStorage
         * @param {Object} user - what to set
         */
        this.setUser = function (user) {
            localStorage.setItem('userInfo', JSON.stringify(user));
        };
    }
    return UserService;
}());
UserService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], UserService);

//# sourceMappingURL=user.service.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map