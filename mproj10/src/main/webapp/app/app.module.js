"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * Created by prasad on 18/8/16.
 */
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var app_component_1 = require("./app.component");
var http_1 = require("@angular/http");
var router_1 = require("@angular/router");
var app_route_1 = require("./app.route");
var login_component_1 = require("./login/login.component");
var authentication_service_1 = require("./login/authentication.service");
var mainpage_module_1 = require("./mainpage/mainpage.module");
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, router_1.RouterModule, forms_1.FormsModule, app_route_1.routing, http_1.HttpModule, mainpage_module_1.MainPageModule],
            declarations: [app_component_1.AppComponent, login_component_1.LoginComponent],
            bootstrap: [app_component_1.AppComponent],
            providers: [authentication_service_1.AuthenticationService]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;