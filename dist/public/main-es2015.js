(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/login/login.component */ "./src/app/pages/login/login.component.ts");
/* harmony import */ var _pages_panel_panel_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/panel/panel.component */ "./src/app/pages/panel/panel.component.ts");
/* harmony import */ var _pages_main_main_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/main/main.component */ "./src/app/pages/main/main.component.ts");
/* harmony import */ var _guards_user_guard_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./guards/user-guard.service */ "./src/app/guards/user-guard.service.ts");








const appRoutes = [
    { path: '', component: _pages_login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"] },
    {
        path: 'panel', component: _pages_panel_panel_component__WEBPACK_IMPORTED_MODULE_3__["PanelComponent"],
        canActivate: [_guards_user_guard_service__WEBPACK_IMPORTED_MODULE_5__["UserGuard"]]
    },
    {
        path: 'main', component: _pages_main_main_component__WEBPACK_IMPORTED_MODULE_4__["MainComponent"],
        canActivate: [_guards_user_guard_service__WEBPACK_IMPORTED_MODULE_5__["UserGuard"]]
    },
    { path: '**', component: _pages_login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"] }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(appRoutes)
        ],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(appRoutes)
                ],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_websocket_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/websocket.service */ "./src/app/services/websocket.service.ts");
/* harmony import */ var _services_chat_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/chat.service */ "./src/app/services/chat.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");





class AppComponent {
    constructor(wsService, chatService) {
        this.wsService = wsService;
        this.chatService = chatService;
        this.title = 'auction web';
    }
    ngOnInit() {
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_websocket_service__WEBPACK_IMPORTED_MODULE_1__["WebsocketService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_chat_service__WEBPACK_IMPORTED_MODULE_2__["ChatService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], function () { return [{ type: _services_websocket_service__WEBPACK_IMPORTED_MODULE_1__["WebsocketService"] }, { type: _services_chat_service__WEBPACK_IMPORTED_MODULE_2__["ChatService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var ngx_socket_io__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-socket-io */ "./node_modules/ngx-socket-io/__ivy_ngcc__/fesm2015/ngx-socket-io.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _components_list_users_list_users_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/list-users/list-users.component */ "./src/app/components/list-users/list-users.component.ts");
/* harmony import */ var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/login/login.component */ "./src/app/pages/login/login.component.ts");
/* harmony import */ var _pages_panel_panel_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/panel/panel.component */ "./src/app/pages/panel/panel.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _pages_main_main_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/main/main.component */ "./src/app/pages/main/main.component.ts");
/* harmony import */ var _pages_product_list_product_list_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/product-list/product-list.component */ "./src/app/pages/product-list/product-list.component.ts");
/* harmony import */ var _pages_product_row_product_row_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pages/product-row/product-row.component */ "./src/app/pages/product-row/product-row.component.ts");
/* harmony import */ var _pages_subasta_list_subasta_list_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pages/subasta-list/subasta-list.component */ "./src/app/pages/subasta-list/subasta-list.component.ts");
/* harmony import */ var _pages_subasta_row_subasta_row_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pages/subasta-row/subasta-row.component */ "./src/app/pages/subasta-row/subasta-row.component.ts");
/* harmony import */ var _pages_subasta_subasta_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./pages/subasta/subasta.component */ "./src/app/pages/subasta/subasta.component.ts");
/* harmony import */ var ngx_countdown__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ngx-countdown */ "./node_modules/ngx-countdown/__ivy_ngcc__/fesm2015/ngx-countdown.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/progress-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-bar.js");























const config = { url: src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].wsUrl, options: {} };
class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            ngx_countdown__WEBPACK_IMPORTED_MODULE_17__["CountdownModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            ngx_socket_io__WEBPACK_IMPORTED_MODULE_4__["SocketIoModule"].forRoot(config),
            _app_routing_module__WEBPACK_IMPORTED_MODULE_10__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_18__["BrowserAnimationsModule"],
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_19__["MatProgressSpinnerModule"],
            _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_20__["MatProgressBarModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
        _components_list_users_list_users_component__WEBPACK_IMPORTED_MODULE_7__["ListUsersComponent"],
        _pages_login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"],
        _pages_panel_panel_component__WEBPACK_IMPORTED_MODULE_9__["PanelComponent"],
        _pages_product_list_product_list_component__WEBPACK_IMPORTED_MODULE_12__["ProductListComponent"],
        _pages_product_row_product_row_component__WEBPACK_IMPORTED_MODULE_13__["ProductRowComponent"],
        _pages_main_main_component__WEBPACK_IMPORTED_MODULE_11__["MainComponent"],
        _pages_subasta_list_subasta_list_component__WEBPACK_IMPORTED_MODULE_14__["SubastaListComponent"],
        _pages_subasta_row_subasta_row_component__WEBPACK_IMPORTED_MODULE_15__["SubastaRowComponent"],
        _pages_subasta_subasta_component__WEBPACK_IMPORTED_MODULE_16__["SubastaComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        ngx_countdown__WEBPACK_IMPORTED_MODULE_17__["CountdownModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], ngx_socket_io__WEBPACK_IMPORTED_MODULE_4__["SocketIoModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_10__["AppRoutingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_18__["BrowserAnimationsModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_19__["MatProgressSpinnerModule"],
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_20__["MatProgressBarModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                    _components_list_users_list_users_component__WEBPACK_IMPORTED_MODULE_7__["ListUsersComponent"],
                    _pages_login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"],
                    _pages_panel_panel_component__WEBPACK_IMPORTED_MODULE_9__["PanelComponent"],
                    _pages_product_list_product_list_component__WEBPACK_IMPORTED_MODULE_12__["ProductListComponent"],
                    _pages_product_row_product_row_component__WEBPACK_IMPORTED_MODULE_13__["ProductRowComponent"],
                    _pages_main_main_component__WEBPACK_IMPORTED_MODULE_11__["MainComponent"],
                    _pages_subasta_list_subasta_list_component__WEBPACK_IMPORTED_MODULE_14__["SubastaListComponent"],
                    _pages_subasta_row_subasta_row_component__WEBPACK_IMPORTED_MODULE_15__["SubastaRowComponent"],
                    _pages_subasta_subasta_component__WEBPACK_IMPORTED_MODULE_16__["SubastaComponent"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    ngx_countdown__WEBPACK_IMPORTED_MODULE_17__["CountdownModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                    ngx_socket_io__WEBPACK_IMPORTED_MODULE_4__["SocketIoModule"].forRoot(config),
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_10__["AppRoutingModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_18__["BrowserAnimationsModule"],
                    _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_19__["MatProgressSpinnerModule"],
                    _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_20__["MatProgressBarModule"],
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/classes/user.ts":
/*!*********************************!*\
  !*** ./src/app/classes/user.ts ***!
  \*********************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
class User {
    constructor(name) {
        this.name = name;
    }
}


/***/ }),

/***/ "./src/app/components/list-users/list-users.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/list-users/list-users.component.ts ***!
  \***************************************************************/
/*! exports provided: ListUsersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListUsersComponent", function() { return ListUsersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var src_app_services_chat_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/chat.service */ "./src/app/services/chat.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");





function ListUsersComponent_li_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const us_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", us_r1.username, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", us_r1.points, "");
} }
class ListUsersComponent {
    constructor(chat) {
        this.chat = chat;
    }
    ngOnInit() {
        this.activeusers = this.chat.getactiveusers()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((x) => x.filter(z => z.username != 'admin')));
        this.chat.emitactiveusers();
    }
}
ListUsersComponent.ɵfac = function ListUsersComponent_Factory(t) { return new (t || ListUsersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_chat_service__WEBPACK_IMPORTED_MODULE_2__["ChatService"])); };
ListUsersComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ListUsersComponent, selectors: [["app-list-users"]], decls: 3, vars: 3, consts: [[1, "list-group"], ["class", "list-group-item", 4, "ngFor", "ngForOf"], [1, "list-group-item"], [1, "badge", "badge-danger"]], template: function ListUsersComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ListUsersComponent_li_1_Template, 5, 2, "li", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, ctx.activeusers));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["AsyncPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbGlzdC11c2Vycy9saXN0LXVzZXJzLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ListUsersComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-list-users',
                templateUrl: './list-users.component.html',
                styleUrls: ['./list-users.component.css']
            }]
    }], function () { return [{ type: src_app_services_chat_service__WEBPACK_IMPORTED_MODULE_2__["ChatService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/guards/user-guard.service.ts":
/*!**********************************************!*\
  !*** ./src/app/guards/user-guard.service.ts ***!
  \**********************************************/
/*! exports provided: UserGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserGuard", function() { return UserGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_websocket_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/websocket.service */ "./src/app/services/websocket.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




class UserGuard {
    constructor(wsService, router) {
        this.wsService = wsService;
        this.router = router;
    }
    canActivate() {
        if (this.wsService.getUser()) {
            return true;
        }
        else {
            this.router.navigateByUrl('/');
            return false;
        }
    }
}
UserGuard.ɵfac = function UserGuard_Factory(t) { return new (t || UserGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_websocket_service__WEBPACK_IMPORTED_MODULE_1__["WebsocketService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
UserGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: UserGuard, factory: UserGuard.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _services_websocket_service__WEBPACK_IMPORTED_MODULE_1__["WebsocketService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/login/login.component.ts":
/*!************************************************!*\
  !*** ./src/app/pages/login/login.component.ts ***!
  \************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var src_app_services_websocket_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/websocket.service */ "./src/app/services/websocket.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");








class LoginComponent {
    constructor(wsService, router, http) {
        this.wsService = wsService;
        this.router = router;
        this.http = http;
        this.name = '';
        this.bodyTag = document.getElementsByTagName('body')[0];
    }
    ngOnInit() {
        this.bodyTag.classList.add('my-container');
    }
    loggin() {
        let body = new URLSearchParams();
        body.set('username', this.name);
        let options = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set('Content-Type', 'application/x-www-form-urlencoded')
        };
        this.http
            .post('https://auction-sockets.herokuapp.com/checkifexists', body.toString(), options)
            .subscribe((response) => {
            if (response.length > 0) {
                return sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire('Oops...', 'That user is connected. Choose another.', 'error');
            }
            else {
                this.wsService.loginWS(this.name)
                    .then(() => {
                    if (this.name === 'admin') {
                        this.router.navigateByUrl('/main');
                    }
                    else {
                        this.router.navigateByUrl('/panel');
                    }
                });
            }
        });
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_websocket_service__WEBPACK_IMPORTED_MODULE_3__["WebsocketService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 9, vars: 2, consts: [[2, "color", "white"], [1, "row", "justify-content-center"], [1, "col-9"], [1, "p-4", 3, "ngSubmit"], ["type", "text", "name", "name", "placeholder", "Write your nickname", "autofocus", "", 1, "input-container", 3, "ngModel", "ngModelChange"], [1, "btnlogin", 3, "disabled"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Online Auction System");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_5_listener() { return ctx.loggin(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_6_listener($event) { return ctx.name = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Start ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.name.trim().length === 0);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"]], styles: [".btnlogin {\r\n\tborder: 0;\r\n\tbackground: none;\r\n\tdisplay: block;\r\n\tmargin: 20px auto;\r\n\ttext-align: center;\r\n\tborder: 2px solid #2ecc71;\r\n\tpadding: 14px 40px;\r\n\toutline: none;\r\n\tcolor: white;\r\n\tborder-radius: 24px;\r\n    transition: 0.25s;\r\n    cursor: pointer;\r\n    background: #191919;\r\n}\r\n.input-container {\r\n    border: 0;\r\n    background: none;\r\n    display: block;\r\n    margin: 20px auto;\r\n    text-align: center;\r\n    border: 2px solid #3498db;\r\n    padding: 14px 10px;\r\n    width: 200px;\r\n    outline: none;\r\n    color: white;\r\n    border-radius: 24px;\r\n    transition: 0.25s;\r\n}\r\n.input-container:hover\r\n{\r\n\tbackground: #2ecc71;\r\n}\r\n.input-container:focus{\r\n\twidth: 280px;\r\n\tborder-color: #2ecc71;\r\n}\r\n.my-container  {\r\n    background-color:#34495e;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtDQUNDLFNBQVM7Q0FDVCxnQkFBZ0I7Q0FDaEIsY0FBYztDQUNkLGlCQUFpQjtDQUNqQixrQkFBa0I7Q0FDbEIseUJBQXlCO0NBQ3pCLGtCQUFrQjtDQUNsQixhQUFhO0NBQ2IsWUFBWTtDQUNaLG1CQUFtQjtJQUNoQixpQkFBaUI7SUFDakIsZUFBZTtJQUNmLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksU0FBUztJQUNULGdCQUFnQjtJQUNoQixjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQix5QkFBeUI7SUFDekIsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixhQUFhO0lBQ2IsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixpQkFBaUI7QUFDckI7QUFDQTs7Q0FFQyxtQkFBbUI7QUFDcEI7QUFDQTtDQUNDLFlBQVk7Q0FDWixxQkFBcUI7QUFDdEI7QUFDQTtJQUNJLHdCQUF3QjtBQUM1QiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnRubG9naW4ge1xyXG5cdGJvcmRlcjogMDtcclxuXHRiYWNrZ3JvdW5kOiBub25lO1xyXG5cdGRpc3BsYXk6IGJsb2NrO1xyXG5cdG1hcmdpbjogMjBweCBhdXRvO1xyXG5cdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRib3JkZXI6IDJweCBzb2xpZCAjMmVjYzcxO1xyXG5cdHBhZGRpbmc6IDE0cHggNDBweDtcclxuXHRvdXRsaW5lOiBub25lO1xyXG5cdGNvbG9yOiB3aGl0ZTtcclxuXHRib3JkZXItcmFkaXVzOiAyNHB4O1xyXG4gICAgdHJhbnNpdGlvbjogMC4yNXM7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMTkxOTE5O1xyXG59XHJcbi5pbnB1dC1jb250YWluZXIge1xyXG4gICAgYm9yZGVyOiAwO1xyXG4gICAgYmFja2dyb3VuZDogbm9uZTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luOiAyMHB4IGF1dG87XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjMzQ5OGRiO1xyXG4gICAgcGFkZGluZzogMTRweCAxMHB4O1xyXG4gICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDI0cHg7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjI1cztcclxufVxyXG4uaW5wdXQtY29udGFpbmVyOmhvdmVyXHJcbntcclxuXHRiYWNrZ3JvdW5kOiAjMmVjYzcxO1xyXG59XHJcbi5pbnB1dC1jb250YWluZXI6Zm9jdXN7XHJcblx0d2lkdGg6IDI4MHB4O1xyXG5cdGJvcmRlci1jb2xvcjogIzJlY2M3MTtcclxufVxyXG4ubXktY29udGFpbmVyICB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiMzNDQ5NWU7XHJcbn0iXX0= */"], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-login',
                templateUrl: './login.component.html',
                styleUrls: ['./login.component.css'],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
            }]
    }], function () { return [{ type: src_app_services_websocket_service__WEBPACK_IMPORTED_MODULE_3__["WebsocketService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/main/main.component.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/main/main.component.ts ***!
  \**********************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var src_app_services_websocket_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/websocket.service */ "./src/app/services/websocket.service.ts");
/* harmony import */ var _product_list_product_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../product-list/product-list.component */ "./src/app/pages/product-list/product-list.component.ts");







class MainComponent {
    constructor(http, wsService) {
        this.http = http;
        this.wsService = wsService;
        this.bodyTag = document.getElementsByTagName('body')[0];
    }
    ngOnInit() {
        this.bodyTag.classList.add('my-container');
        this.getData();
        this.statusitem();
    }
    getData() {
        this.http.get('https://auction-sockets.herokuapp.com/productlist').subscribe((product) => {
            this.products = product[0].data;
        });
    }
    statusitem() {
        this.wsService.listen('change-state').subscribe((product) => {
            this.products = product[0].data;
        });
    }
    exit() {
        let body = new URLSearchParams();
        body.set('username', 'admin');
        let options = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set('Content-Type', 'application/x-www-form-urlencoded')
        };
        this.http
            .post('https://auction-sockets.herokuapp.com/logout', body.toString(), options)
            .subscribe((response) => {
        });
        this.wsService.logoutWS();
    }
}
MainComponent.ɵfac = function MainComponent_Factory(t) { return new (t || MainComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_websocket_service__WEBPACK_IMPORTED_MODULE_2__["WebsocketService"])); };
MainComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MainComponent, selectors: [["app-main"]], decls: 5, vars: 1, consts: [[1, "btnlogin", "btn-danger", 3, "click"], [1, "inventory-app"], [3, "productList"]], template: function MainComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MainComponent_Template_button_click_0_listener() { return ctx.exit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Log Out\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-product-list", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("productList", ctx.products);
    } }, directives: [_product_list_product_list_component__WEBPACK_IMPORTED_MODULE_3__["ProductListComponent"]], styles: [".btnlogin {\r\n\tborder: 0;\r\n\tbackground: none;\r\n\tdisplay: block;\r\n\tmargin: 20px auto;\r\n\ttext-align: center;\r\n\tborder: 2px solid #2ecc71;\r\n\tpadding: 14px 40px;\r\n\toutline: none;\r\n\tcolor: white;\r\n\tborder-radius: 24px;\r\n    transition: 0.25s;\r\n    cursor: pointer;\r\n    background: #191919;\r\n}\r\n.my-container {\r\n    background-color:#34495e;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbWFpbi9tYWluLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Q0FDQyxTQUFTO0NBQ1QsZ0JBQWdCO0NBQ2hCLGNBQWM7Q0FDZCxpQkFBaUI7Q0FDakIsa0JBQWtCO0NBQ2xCLHlCQUF5QjtDQUN6QixrQkFBa0I7Q0FDbEIsYUFBYTtDQUNiLFlBQVk7Q0FDWixtQkFBbUI7SUFDaEIsaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLHdCQUF3QjtBQUM1QiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL21haW4vbWFpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJ0bmxvZ2luIHtcclxuXHRib3JkZXI6IDA7XHJcblx0YmFja2dyb3VuZDogbm9uZTtcclxuXHRkaXNwbGF5OiBibG9jaztcclxuXHRtYXJnaW46IDIwcHggYXV0bztcclxuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0Ym9yZGVyOiAycHggc29saWQgIzJlY2M3MTtcclxuXHRwYWRkaW5nOiAxNHB4IDQwcHg7XHJcblx0b3V0bGluZTogbm9uZTtcclxuXHRjb2xvcjogd2hpdGU7XHJcblx0Ym9yZGVyLXJhZGl1czogMjRweDtcclxuICAgIHRyYW5zaXRpb246IDAuMjVzO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgYmFja2dyb3VuZDogIzE5MTkxOTtcclxufVxyXG4ubXktY29udGFpbmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IzM0NDk1ZTtcclxufSJdfQ== */"], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MainComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-main',
                templateUrl: './main.component.html',
                styleUrls: ['./main.component.css'],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }, { type: src_app_services_websocket_service__WEBPACK_IMPORTED_MODULE_2__["WebsocketService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/panel/panel.component.ts":
/*!************************************************!*\
  !*** ./src/app/pages/panel/panel.component.ts ***!
  \************************************************/
/*! exports provided: PanelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PanelComponent", function() { return PanelComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var src_app_services_websocket_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/websocket.service */ "./src/app/services/websocket.service.ts");
/* harmony import */ var src_app_services_chat_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/chat.service */ "./src/app/services/chat.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _components_list_users_list_users_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/list-users/list-users.component */ "./src/app/components/list-users/list-users.component.ts");
/* harmony import */ var _subasta_subasta_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../subasta/subasta.component */ "./src/app/pages/subasta/subasta.component.ts");










function PanelComponent_button_6_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PanelComponent_button_6_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r1.AuctionStart(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Buy item ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class PanelComponent {
    constructor(wsService, http, chatService, cdref) {
        this.wsService = wsService;
        this.http = http;
        this.chatService = chatService;
        this.cdref = cdref;
        this.isOn = false;
        this.bodyTag = document.getElementsByTagName('body')[0];
    }
    ngOnInit() {
        this.bodyTag.classList.add('my-container');
        this.getData();
        this.listen();
    }
    ngAfterContentChecked() {
        this.cdref.detectChanges();
    }
    getData() {
        this.http.get('https://auction-sockets.herokuapp.com/auctionlist').subscribe((product) => {
            if (product[0].data.length > 0) {
                this.isOn = true;
            }
            else {
                this.isOn = false;
            }
        });
    }
    listen() {
        this.wsService.listen('auction-products').subscribe((product) => {
            console.log('auction-products');
            console.log(product);
            if (product[0].data.length > 0) {
                if (product[0].data[0].price == 0) {
                    this.isOn = false;
                }
                else {
                    this.isOn = true;
                }
            }
            else {
                this.isOn = false;
            }
        });
    }
    out() {
        let body = new URLSearchParams();
        body.set('username', this.wsService.user.name);
        let options = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set('Content-Type', 'application/x-www-form-urlencoded')
        };
        this.http
            .post('https://auction-sockets.herokuapp.com/logout', body.toString(), options)
            .subscribe((response) => {
        });
        this.wsService.logoutWS();
    }
    AuctionStart() {
        this.wsService.AuctionStart();
    }
}
PanelComponent.ɵfac = function PanelComponent_Factory(t) { return new (t || PanelComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_websocket_service__WEBPACK_IMPORTED_MODULE_2__["WebsocketService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_chat_service__WEBPACK_IMPORTED_MODULE_3__["ChatService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"])); };
PanelComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PanelComponent, selectors: [["app-panel"]], decls: 13, vars: 2, consts: [[2, "color", "white"], [1, "btnlogin", "btn-danger", 3, "click"], ["class", "btnlogin btn-success", 3, "click", 4, "ngIf"], [1, "row"], [1, "col-6"], [1, "btnlogin", "btn-success", 3, "click"]], template: function PanelComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Connected: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PanelComponent_Template_button_click_4_listener() { return ctx.out(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Log Out ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, PanelComponent_button_6_Template, 2, 0, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "app-list-users");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "app-subasta");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.wsService.user.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isOn);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _components_list_users_list_users_component__WEBPACK_IMPORTED_MODULE_5__["ListUsersComponent"], _subasta_subasta_component__WEBPACK_IMPORTED_MODULE_6__["SubastaComponent"]], styles: [".btnlogin {\r\n\tborder: 0;\r\n\tbackground: none;\r\n\tdisplay: block;\r\n\tmargin: 20px auto;\r\n\ttext-align: center;\r\n\tborder: 2px solid #2ecc71;\r\n\tpadding: 14px 40px;\r\n\toutline: none;\r\n\tcolor: white;\r\n\tborder-radius: 24px;\r\n    transition: 0.25s;\r\n    cursor: pointer;\r\n    background: #191919;\r\n}\r\n.my-container {\r\n    background-color:#34495e;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcGFuZWwvcGFuZWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtDQUNDLFNBQVM7Q0FDVCxnQkFBZ0I7Q0FDaEIsY0FBYztDQUNkLGlCQUFpQjtDQUNqQixrQkFBa0I7Q0FDbEIseUJBQXlCO0NBQ3pCLGtCQUFrQjtDQUNsQixhQUFhO0NBQ2IsWUFBWTtDQUNaLG1CQUFtQjtJQUNoQixpQkFBaUI7SUFDakIsZUFBZTtJQUNmLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksd0JBQXdCO0FBQzVCIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcGFuZWwvcGFuZWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5idG5sb2dpbiB7XHJcblx0Ym9yZGVyOiAwO1xyXG5cdGJhY2tncm91bmQ6IG5vbmU7XHJcblx0ZGlzcGxheTogYmxvY2s7XHJcblx0bWFyZ2luOiAyMHB4IGF1dG87XHJcblx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdGJvcmRlcjogMnB4IHNvbGlkICMyZWNjNzE7XHJcblx0cGFkZGluZzogMTRweCA0MHB4O1xyXG5cdG91dGxpbmU6IG5vbmU7XHJcblx0Y29sb3I6IHdoaXRlO1xyXG5cdGJvcmRlci1yYWRpdXM6IDI0cHg7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjI1cztcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGJhY2tncm91bmQ6ICMxOTE5MTk7XHJcbn1cclxuLm15LWNvbnRhaW5lciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiMzNDQ5NWU7XHJcbn0iXX0= */"], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PanelComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-panel',
                templateUrl: './panel.component.html',
                styleUrls: ['./panel.component.css'],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
            }]
    }], function () { return [{ type: src_app_services_websocket_service__WEBPACK_IMPORTED_MODULE_2__["WebsocketService"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }, { type: src_app_services_chat_service__WEBPACK_IMPORTED_MODULE_3__["ChatService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/product-list/product-list.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/pages/product-list/product-list.component.ts ***!
  \**************************************************************/
/*! exports provided: ProductListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductListComponent", function() { return ProductListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var src_app_services_websocket_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/websocket.service */ "./src/app/services/websocket.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _product_row_product_row_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../product-row/product-row.component */ "./src/app/pages/product-row/product-row.component.ts");








function ProductListComponent_div_1_button_3_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductListComponent_div_1_button_3_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const p_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.start(p_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "i", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " gavel ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProductListComponent_div_1_button_4_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductListComponent_div_1_button_4_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const p_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.stop(p_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProductListComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ProductListComponent_div_1_button_3_Template, 3, 0, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ProductListComponent_div_1_button_4_Template, 2, 0, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-product-row", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const p_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", p_r1.bidding === false && p_r1.status === "" && ctx_r0.selling === false);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", p_r1.bidding === true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("product", p_r1);
} }
class ProductListComponent {
    constructor(http, wsService) {
        this.http = http;
        this.wsService = wsService;
        this.selling = false;
        this.onProductSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
        this.listen();
    }
    listen() {
        this.wsService.listen('auction-products').subscribe((product) => {
            if (product[0].data.length == 0) {
                this.selling = false;
            }
        });
    }
    start(product) {
        this.http.get('https://auction-sockets.herokuapp.com/checklogged').subscribe((res) => {
            if (res.length === 0) {
                return sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire('Oops...', 'There are no active users!', 'error');
            }
            else if (res.length === 1) {
                return sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire('Oops...', 'There is only 1 user!', 'error');
            }
            else {
                this.currentProduct = product;
                let body = new URLSearchParams();
                body.set('sku', product.sku);
                body.set('bidding', "1");
                let options = {
                    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set('Content-Type', 'application/x-www-form-urlencoded')
                };
                this.http
                    .post('https://auction-sockets.herokuapp.com/updatestate', body.toString(), options)
                    .subscribe(response => {
                    this.selling = true;
                });
            }
        });
    }
    stop(product) {
        this.currentProduct = product;
        let body = new URLSearchParams();
        body.set('sku', product.sku);
        body.set('bidding', "0");
        let options = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set('Content-Type', 'application/x-www-form-urlencoded')
        };
        this.http
            .post('https://auction-sockets.herokuapp.com/updatestate', body.toString(), options)
            .subscribe(response => {
            this.selling = false;
        });
    }
}
ProductListComponent.ɵfac = function ProductListComponent_Factory(t) { return new (t || ProductListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_websocket_service__WEBPACK_IMPORTED_MODULE_3__["WebsocketService"])); };
ProductListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProductListComponent, selectors: [["app-product-list"]], inputs: { productList: "productList" }, outputs: { onProductSelected: "onProductSelected" }, decls: 2, vars: 1, consts: [[1, "row"], ["class", "col-md-4 layout-row", 4, "ngFor", "ngForOf"], [1, "col-md-4", "layout-row"], [1, "col-6"], ["color", "accent", "mat-button", "", 3, "click", 4, "ngIf"], ["type", "button", "class", "btnlogin btn-sm btn-outline-secondary product-btn", 3, "click", 4, "ngIf"], [3, "product"], ["color", "accent", "mat-button", "", 3, "click"], [1, "material-icons"], ["type", "button", 1, "btnlogin", "btn-sm", "btn-outline-secondary", "product-btn", 3, "click"]], template: function ProductListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProductListComponent_div_1_Template, 7, 3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.productList);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _product_row_product_row_component__WEBPACK_IMPORTED_MODULE_5__["ProductRowComponent"]], styles: [".selected[_ngcontent-%COMP%] {background:#008fb4}\r\n\r\n.layout-row[_ngcontent-%COMP%]{\r\n\r\n    display: flex;\r\n    align-items: stretch;\r\n\r\n}\r\n\r\n.bm--card-equal-height[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: row;\r\n    height: 100%;\r\n }\r\n\r\n.bm--card-equal-height[_ngcontent-%COMP%]   .card-footer[_ngcontent-%COMP%] {\r\n    margin-top: auto;\r\n }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcHJvZHVjdC1saXN0L3Byb2R1Y3QtbGlzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFdBQVcsa0JBQWtCOztBQUU3Qjs7SUFFSSxhQUFhO0lBQ2Isb0JBQW9COztBQUV4Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsWUFBWTtDQUNmOztBQUNBO0lBQ0csZ0JBQWdCO0NBQ25CIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcHJvZHVjdC1saXN0L3Byb2R1Y3QtbGlzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNlbGVjdGVkIHtiYWNrZ3JvdW5kOiMwMDhmYjR9XHJcblxyXG4ubGF5b3V0LXJvd3tcclxuXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XHJcblxyXG59XHJcblxyXG4uYm0tLWNhcmQtZXF1YWwtaGVpZ2h0IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gfVxyXG4gLmJtLS1jYXJkLWVxdWFsLWhlaWdodCAuY2FyZC1mb290ZXIge1xyXG4gICAgbWFyZ2luLXRvcDogYXV0bztcclxuIH1cclxuXHJcbiAiXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-product-list',
                templateUrl: './product-list.component.html',
                styleUrls: ['./product-list.component.css']
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }, { type: src_app_services_websocket_service__WEBPACK_IMPORTED_MODULE_3__["WebsocketService"] }]; }, { productList: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], onProductSelected: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/pages/product-row/product-row.component.ts":
/*!************************************************************!*\
  !*** ./src/app/pages/product-row/product-row.component.ts ***!
  \************************************************************/
/*! exports provided: ProductRowComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductRowComponent", function() { return ProductRowComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




class ProductRowComponent {
    constructor(http) {
        this.http = http;
        this.cssCLass = 'item';
    }
    ngOnInit() {
    }
}
ProductRowComponent.ɵfac = function ProductRowComponent_Factory(t) { return new (t || ProductRowComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
ProductRowComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProductRowComponent, selectors: [["app-product-row"]], hostVars: 1, hostBindings: function ProductRowComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("class", ctx.cssCLass);
    } }, inputs: { product: "product" }, decls: 14, vars: 9, consts: [[1, "product"], [1, "product-image", 3, "src"], [1, "product-details"], [1, "product-details__name"], [1, "product-info-container"], [1, "product-details__price"], [1, "product-description"], [2, "color", "red", "font-weight", "bold"]], template: function ProductRowComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.product.imageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.product.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Price: ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind4"](9, 4, ctx.product.price, "USD", "symbol", "1.2-2"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.product.status, " ");
    } }, pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CurrencyPipe"]], styles: [".product-img[_ngcontent-%COMP%] {display:inline-block}\r\n\r\n.product-info-container[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    padding: 4px;\r\n    margin: 0px;\r\n    background-color: #dfdfdf;\r\n}\r\n\r\n.price[_ngcontent-%COMP%] {\r\n    padding: 0;\r\n    margin: 0px;\r\n    color: #42b449;\r\n    font-size: 20px;\r\n    letter-spacing: 2px;\r\n    font-weight: bolder;\r\n}\r\n\r\n.img[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    max-width: 250px;\r\n    height: auto;\r\n}\r\n\r\n.product[_ngcontent-%COMP%] {\r\n    box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.2);\r\n    border-radius: 5px;\r\n    margin: 0 15px 30px 0;\r\n    width: 286px;\r\n    max-height: 440px;\r\n    height: 430px;\r\n    background: white;\r\n}\r\n\r\n.product-image[_ngcontent-%COMP%] {\r\n    \r\n    \r\n    max-width: 100%;\r\n    width: 300px;\r\n    border-top-right-radius: 5px;\r\n    border-top-left-radius: 5px;\r\n    height:300px;\r\n    display: block;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    -o-object-fit: cover;\r\n       object-fit: cover;\r\n}\r\n\r\n.product-details[_ngcontent-%COMP%] {    \r\n  display: flex;\r\n  justify-content: space-between;\r\n  padding: 8px 15px;\r\n\r\n}\r\n\r\n.product-details__name[_ngcontent-%COMP%] {\r\n    opacity: 0.9;\r\n    font-weight: 600;\r\n    margin: 0;\r\n}\r\n\r\n.product-details__price[_ngcontent-%COMP%] {\r\n  font-weight: 600;\r\n  color: #88C058;\r\n  opacity: 0.7;\r\n  font-size: 15px;\r\n  letter-spacing: 1px;\r\n  margin: 0;\r\n}\r\n\r\n.product-description[_ngcontent-%COMP%] {\r\n    \r\n    padding: 10px 15px;\r\n\r\n}\r\n\r\n.product-description-p[_ngcontent-%COMP%] {\r\n    \r\n\r\n    opacity: 0.5;\r\n    margin: 0;\r\n    font-size: 15px;\r\n\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcHJvZHVjdC1yb3cvcHJvZHVjdC1yb3cuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxjQUFjLG9CQUFvQjs7QUFFbEM7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLFdBQVc7SUFDWCx5QkFBeUI7QUFDN0I7O0FBQ0E7SUFDSSxVQUFVO0lBQ1YsV0FBVztJQUNYLGNBQWM7SUFDZCxlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsWUFBWTtBQUNoQjs7QUFJQTtJQUNJLDBDQUEwQztJQUMxQyxrQkFBa0I7SUFDbEIscUJBQXFCO0lBQ3JCLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsYUFBYTtJQUNiLGlCQUFpQjtBQUNyQjs7QUFDQTs7O0lBR0ksZUFBZTtJQUNmLFlBQVk7SUFDWiw0QkFBNEI7SUFDNUIsMkJBQTJCO0lBQzNCLFlBQVk7SUFDWixjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixvQkFBaUI7T0FBakIsaUJBQWlCO0FBQ3JCOztBQUNBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixpQkFBaUI7O0FBRW5COztBQUNBO0lBQ0ksWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixTQUFTO0FBQ2I7O0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLFlBQVk7RUFDWixlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLFNBQVM7QUFDWDs7QUFDQTs7SUFFSSxrQkFBa0I7O0FBRXRCOztBQUNBOzs7SUFHSSxZQUFZO0lBQ1osU0FBUztJQUNULGVBQWU7O0FBRW5CIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcHJvZHVjdC1yb3cvcHJvZHVjdC1yb3cuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wcm9kdWN0LWltZyB7ZGlzcGxheTppbmxpbmUtYmxvY2t9XHJcblxyXG4ucHJvZHVjdC1pbmZvLWNvbnRhaW5lciB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDRweDtcclxuICAgIG1hcmdpbjogMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RmZGZkZjtcclxufVxyXG4ucHJpY2Uge1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIG1hcmdpbjogMHB4O1xyXG4gICAgY29sb3I6ICM0MmI0NDk7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxufVxyXG5cclxuLmltZyB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1heC13aWR0aDogMjUwcHg7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbn1cclxuXHJcblxyXG5cclxuLnByb2R1Y3Qge1xyXG4gICAgYm94LXNoYWRvdzogMCAxcHggMXB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgbWFyZ2luOiAwIDE1cHggMzBweCAwO1xyXG4gICAgd2lkdGg6IDI4NnB4O1xyXG4gICAgbWF4LWhlaWdodDogNDQwcHg7XHJcbiAgICBoZWlnaHQ6IDQzMHB4O1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbn1cclxuLnByb2R1Y3QtaW1hZ2Uge1xyXG4gICAgXHJcbiAgICBcclxuICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgIHdpZHRoOiAzMDBweDtcclxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA1cHg7XHJcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA1cHg7XHJcbiAgICBoZWlnaHQ6MzAwcHg7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbn1cclxuLnByb2R1Y3QtZGV0YWlscyB7ICAgIFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIHBhZGRpbmc6IDhweCAxNXB4O1xyXG5cclxufVxyXG4ucHJvZHVjdC1kZXRhaWxzX19uYW1lIHtcclxuICAgIG9wYWNpdHk6IDAuOTtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBtYXJnaW46IDA7XHJcbn1cclxuLnByb2R1Y3QtZGV0YWlsc19fcHJpY2Uge1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgY29sb3I6ICM4OEMwNTg7XHJcbiAgb3BhY2l0eTogMC43O1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG4ucHJvZHVjdC1kZXNjcmlwdGlvbiB7XHJcbiAgICBcclxuICAgIHBhZGRpbmc6IDEwcHggMTVweDtcclxuXHJcbn1cclxuLnByb2R1Y3QtZGVzY3JpcHRpb24tcCB7XHJcbiAgICBcclxuXHJcbiAgICBvcGFjaXR5OiAwLjU7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcblxyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductRowComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-product-row',
                templateUrl: './product-row.component.html',
                styleUrls: ['./product-row.component.css']
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, { product: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], cssCLass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['attr.class']
        }] }); })();


/***/ }),

/***/ "./src/app/pages/subasta-list/subasta-list.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/pages/subasta-list/subasta-list.component.ts ***!
  \**************************************************************/
/*! exports provided: SubastaListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubastaListComponent", function() { return SubastaListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");
/* harmony import */ var _subasta_row_subasta_row_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../subasta-row/subasta-row.component */ "./src/app/pages/subasta-row/subasta-row.component.ts");





function SubastaListComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mat-progress-spinner", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SubastaListComponent_app_subasta_row_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-subasta-row", 6);
} if (rf & 2) {
    const p_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("item", p_r4);
} }
function SubastaListComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r2.customCss);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.contador);
} }
function SubastaListComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.contador);
} }
class SubastaListComponent {
    constructor(cdref) {
        this.cdref = cdref;
        this.cantidaditems = 0;
        this.soldout = false;
    }
    ngOnInit() {
    }
    ngAfterContentChecked() {
        if (Number.isInteger(Number(this.contador))) {
            this.soldout = false;
        }
        this.cdref.detectChanges();
    }
    get customCss() {
        if (Number.isInteger(Number(this.contador))) {
            if (Number(this.contador) <= 5) {
                return 'blink_five';
            }
            if (Number(this.contador) <= 10) {
                return 'blink_me';
            }
            if (Number(this.contador) > 10) {
                return 'mayor';
            }
        }
        else {
            if (this.contador) {
                this.soldout = true;
                setTimeout(function () {
                    document.getElementById('loading').style.display = 'none';
                }, 10000);
            }
        }
    }
}
SubastaListComponent.ɵfac = function SubastaListComponent_Factory(t) { return new (t || SubastaListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"])); };
SubastaListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SubastaListComponent, selectors: [["app-subasta-list"]], inputs: { itemList: "itemList", cantidaditems: "cantidaditems", contador: "contador" }, decls: 6, vars: 4, consts: [[1, "ui", "items"], ["id", "spinloading", 4, "ngIf"], [3, "item", 4, "ngFor", "ngForOf"], [4, "ngIf"], ["id", "spinloading"], ["mode", "indeterminate"], [3, "item"], ["id", "myHeader", 3, "ngClass"], ["id", "loading", 1, "flash"]], template: function SubastaListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SubastaListComponent_div_1_Template, 2, 0, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SubastaListComponent_app_subasta_row_2_Template, 1, 1, "app-subasta-row", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, SubastaListComponent_div_4_Template, 3, 2, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, SubastaListComponent_div_5_Template, 3, 1, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.cantidaditems === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.itemList);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.soldout === false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.soldout === true);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_2__["MatProgressSpinner"], _subasta_row_subasta_row_component__WEBPACK_IMPORTED_MODULE_3__["SubastaRowComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"]], styles: [".flash[_ngcontent-%COMP%] {\r\n    -webkit-animation-name: flash;\r\n            animation-name: flash;\r\n     -webkit-animation-duration: 0.2s;\r\n             animation-duration: 0.2s;\r\n     -webkit-animation-timing-function: linear;\r\n             animation-timing-function: linear;\r\n     -webkit-animation-iteration-count: infinite;\r\n             animation-iteration-count: infinite;\r\n     -webkit-animation-direction: alternate;\r\n             animation-direction: alternate;\r\n     -webkit-animation-play-state: running;\r\n             animation-play-state: running;\r\n     \r\n }\r\n \r\n @-webkit-keyframes flash {\r\n     from {color: red;}\r\n     to {color: white;}\r\n }\r\n \r\n @keyframes flash {\r\n     from {color: red;}\r\n     to {color: white;}\r\n }\r\n \r\n .blink_me[_ngcontent-%COMP%] {\r\n    -webkit-animation: blinker 1s linear infinite;\r\n            animation: blinker 1s linear infinite;\r\n    color:white;\r\n  }\r\n \r\n .mayor[_ngcontent-%COMP%] {\r\n     color:white;\r\n   }\r\n \r\n @-webkit-keyframes blinker {\r\n    50% {\r\n      opacity: 0;\r\n    }\r\n  }\r\n \r\n @keyframes blinker {\r\n    50% {\r\n      opacity: 0;\r\n    }\r\n  }\r\n \r\n .blink_five[_ngcontent-%COMP%] {\r\n     -webkit-animation: blinker 1s linear infinite;\r\n             animation: blinker 1s linear infinite;\r\n     color: red;\r\n   }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc3ViYXN0YS1saXN0L3N1YmFzdGEtbGlzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksNkJBQXFCO1lBQXJCLHFCQUFxQjtLQUNwQixnQ0FBd0I7YUFBeEIsd0JBQXdCO0tBQ3hCLHlDQUFpQzthQUFqQyxpQ0FBaUM7S0FDakMsMkNBQW1DO2FBQW5DLG1DQUFtQztLQUNuQyxzQ0FBOEI7YUFBOUIsOEJBQThCO0tBQzlCLHFDQUE2QjthQUE3Qiw2QkFBNkI7O0NBRWpDOztDQUVBO0tBQ0ksTUFBTSxVQUFVLENBQUM7S0FDakIsSUFBSSxZQUFZLENBQUM7Q0FDckI7O0NBSEE7S0FDSSxNQUFNLFVBQVUsQ0FBQztLQUNqQixJQUFJLFlBQVksQ0FBQztDQUNyQjs7Q0FFQTtJQUNHLDZDQUFxQztZQUFyQyxxQ0FBcUM7SUFDckMsV0FBVztFQUNiOztDQUNBO0tBQ0csV0FBVztHQUNiOztDQUVEO0lBQ0U7TUFDRSxVQUFVO0lBQ1o7RUFDRjs7Q0FKQTtJQUNFO01BQ0UsVUFBVTtJQUNaO0VBQ0Y7O0NBRUE7S0FDRyw2Q0FBcUM7YUFBckMscUNBQXFDO0tBQ3JDLFVBQVU7R0FDWiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3N1YmFzdGEtbGlzdC9zdWJhc3RhLWxpc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mbGFzaCB7XHJcbiAgICBhbmltYXRpb24tbmFtZTogZmxhc2g7XHJcbiAgICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjJzO1xyXG4gICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGxpbmVhcjtcclxuICAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcclxuICAgICBhbmltYXRpb24tZGlyZWN0aW9uOiBhbHRlcm5hdGU7XHJcbiAgICAgYW5pbWF0aW9uLXBsYXktc3RhdGU6IHJ1bm5pbmc7XHJcbiAgICAgXHJcbiB9XHJcbiBcclxuIEBrZXlmcmFtZXMgZmxhc2gge1xyXG4gICAgIGZyb20ge2NvbG9yOiByZWQ7fVxyXG4gICAgIHRvIHtjb2xvcjogd2hpdGU7fVxyXG4gfVxyXG5cclxuIC5ibGlua19tZSB7XHJcbiAgICBhbmltYXRpb246IGJsaW5rZXIgMXMgbGluZWFyIGluZmluaXRlO1xyXG4gICAgY29sb3I6d2hpdGU7XHJcbiAgfVxyXG4gIC5tYXlvciB7XHJcbiAgICAgY29sb3I6d2hpdGU7XHJcbiAgIH1cclxuICBcclxuICBAa2V5ZnJhbWVzIGJsaW5rZXIge1xyXG4gICAgNTAlIHtcclxuICAgICAgb3BhY2l0eTogMDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5ibGlua19maXZlIHtcclxuICAgICBhbmltYXRpb246IGJsaW5rZXIgMXMgbGluZWFyIGluZmluaXRlO1xyXG4gICAgIGNvbG9yOiByZWQ7XHJcbiAgIH1cclxuICAgIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SubastaListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-subasta-list',
                templateUrl: './subasta-list.component.html',
                styleUrls: ['./subasta-list.component.css']
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }]; }, { itemList: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], cantidaditems: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], contador: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/pages/subasta-row/subasta-row.component.ts":
/*!************************************************************!*\
  !*** ./src/app/pages/subasta-row/subasta-row.component.ts ***!
  \************************************************************/
/*! exports provided: SubastaRowComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubastaRowComponent", function() { return SubastaRowComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class SubastaRowComponent {
    constructor(cdref) {
        this.cdref = cdref;
    }
    ngOnInit() {
    }
    ngAfterContentChecked() {
        this.cdref.detectChanges();
    }
}
SubastaRowComponent.ɵfac = function SubastaRowComponent_Factory(t) { return new (t || SubastaRowComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"])); };
SubastaRowComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SubastaRowComponent, selectors: [["app-subasta-row"]], inputs: { item: "item" }, decls: 12, vars: 4, consts: [[1, "content"], ["width", "200", 1, "product-img", 3, "src"], [1, "header"], [2, "color", "white", "font-weight", "bold"], [1, "meta"], [1, "product-sku"]], template: function SubastaRowComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.item.imageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.item.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("SKU #", ctx.item.sku, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Price: ", ctx.item.price, "");
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3N1YmFzdGEtcm93L3N1YmFzdGEtcm93LmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SubastaRowComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-subasta-row',
                templateUrl: './subasta-row.component.html',
                styleUrls: ['./subasta-row.component.css']
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }]; }, { item: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/pages/subasta/subasta.component.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/subasta/subasta.component.ts ***!
  \****************************************************/
/*! exports provided: SubastaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubastaComponent", function() { return SubastaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var src_app_services_websocket_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/websocket.service */ "./src/app/services/websocket.service.ts");
/* harmony import */ var _subasta_list_subasta_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../subasta-list/subasta-list.component */ "./src/app/pages/subasta-list/subasta-list.component.ts");





class SubastaComponent {
    constructor(http, wsService) {
        this.http = http;
        this.wsService = wsService;
        this.items = [];
        this.list = [];
        this.cantidaditems = 0;
        this.cantidad = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
        this.cantidaditems = Number(this.items.length);
        this.getData();
        this.listenbidSocket();
        this.startCounter();
        if (localStorage.getItem("user") === null) {
            this.wsService.logoutWS();
        }
    }
    getData() {
        this.getSubscription = this.http.get('https://auction-sockets.herokuapp.com/auctionlist').subscribe((product) => {
            this.items = product[0].data;
            this.cantidaditems = Number(this.items.length);
        });
    }
    ngOnDestroy() {
        this.getSubscription.unsubscribe();
        this.bidderSubscription.unsubscribe();
        this.countdownSubscription.unsubscribe();
    }
    listenbidSocket() {
        this.bidderSubscription = this.wsService.listen('auction-products').subscribe((product) => {
            this.items = product[0].data;
            this.cantidaditems = Number(this.items.length);
        });
    }
    startCounter() {
        this.countdownSubscription = this.wsService.listen('counter').subscribe((product) => {
            this.counter = product;
        });
    }
}
SubastaComponent.ɵfac = function SubastaComponent_Factory(t) { return new (t || SubastaComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_websocket_service__WEBPACK_IMPORTED_MODULE_2__["WebsocketService"])); };
SubastaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SubastaComponent, selectors: [["app-subasta"]], outputs: { cantidad: "cantidad" }, decls: 2, vars: 3, consts: [[1, "inventory-app"], [3, "itemList", "contador", "cantidaditems"]], template: function SubastaComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-subasta-list", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("itemList", ctx.items)("contador", ctx.counter)("cantidaditems", ctx.cantidaditems);
    } }, directives: [_subasta_list_subasta_list_component__WEBPACK_IMPORTED_MODULE_3__["SubastaListComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3N1YmFzdGEvc3ViYXN0YS5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SubastaComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-subasta',
                templateUrl: './subasta.component.html',
                styleUrls: ['./subasta.component.css']
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }, { type: src_app_services_websocket_service__WEBPACK_IMPORTED_MODULE_2__["WebsocketService"] }]; }, { cantidad: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/services/chat.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/chat.service.ts ***!
  \******************************************/
/*! exports provided: ChatService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatService", function() { return ChatService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _websocket_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./websocket.service */ "./src/app/services/websocket.service.ts");



class ChatService {
    constructor(wsService) {
        this.wsService = wsService;
    }
    subastandosocket() {
        const payload = {
            from: this.wsService.getUser().name
        };
        this.wsService.emit('subastandosocket', payload);
    }
    getactiveusers() {
        return this.wsService.listen('active-users');
    }
    emitactiveusers() {
        this.wsService.emit('get-users');
    }
}
ChatService.ɵfac = function ChatService_Factory(t) { return new (t || ChatService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_websocket_service__WEBPACK_IMPORTED_MODULE_1__["WebsocketService"])); };
ChatService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ChatService, factory: ChatService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChatService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _websocket_service__WEBPACK_IMPORTED_MODULE_1__["WebsocketService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/websocket.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/websocket.service.ts ***!
  \***********************************************/
/*! exports provided: WebsocketService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebsocketService", function() { return WebsocketService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _classes_user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../classes/user */ "./src/app/classes/user.ts");
/* harmony import */ var ngx_socket_io__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-socket-io */ "./node_modules/ngx-socket-io/__ivy_ngcc__/fesm2015/ngx-socket-io.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");





class WebsocketService {
    constructor(socket, router) {
        this.socket = socket;
        this.router = router;
        this.socketStatus = false;
        this.user = null;
        this.points = 0;
        this.loadStorage();
        this.checkstatus();
    }
    logoutWS() {
        this.user = null;
        localStorage.clear();
        const payload = {
            name: 'no user'
        };
        this.emit('configure-user', payload, () => { });
        this.router.navigateByUrl('');
    }
    AuctionStart() {
        const payload = {
            from: this.getUser().name
        };
        this.emit('auctionstartsocket', payload);
    }
    getUser() {
        return this.user;
    }
    checkstatus() {
        this.socket.on('connect', () => {
            this.socketStatus = true;
            this.loadStorage();
        });
        this.socket.on('disconnect', () => {
            this.socketStatus = false;
        });
    }
    emit(evento, payload, callback) {
        this.socket.emit(evento, payload, callback);
    }
    listen(evento) {
        return this.socket.fromEvent(evento);
    }
    loginWS(name) {
        return new Promise((resolve, reject) => {
            this.emit('configure-user', { name }, (resp) => {
                this.points = resp.points;
                this.user = new _classes_user__WEBPACK_IMPORTED_MODULE_1__["User"](name);
                this.saveStorage();
                resolve();
            });
        });
    }
    saveStorage() {
        localStorage.setItem('user', JSON.stringify(this.user));
    }
    loadStorage() {
        if (localStorage.getItem('user')) {
            this.user = JSON.parse(localStorage.getItem('user'));
            this.loginWS(this.user.name);
        }
    }
}
WebsocketService.ɵfac = function WebsocketService_Factory(t) { return new (t || WebsocketService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](ngx_socket_io__WEBPACK_IMPORTED_MODULE_2__["Socket"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
WebsocketService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: WebsocketService, factory: WebsocketService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WebsocketService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: ngx_socket_io__WEBPACK_IMPORTED_MODULE_2__["Socket"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    wsUrl: 'https://auction-sockets.herokuapp.com/'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\user\Desktop\sample03\angularsockets\src\main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!********************!*\
  !*** ws (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map