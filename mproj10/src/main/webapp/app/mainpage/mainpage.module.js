"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * Created by prasad on 26/8/16.
 */
/**
 * Created by prasad on 18/8/16.
 */
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var http_1 = require("@angular/http");
var router_1 = require("@angular/router");
var mainpage_component_1 = require("./mainpage.component");
var mainpage_route_1 = require("./mainpage.route");
var menuTree_component_1 = require("./sidemenu/menuTree.component");
var menuTree_service_1 = require("./sidemenu/menuTree.service");
var searchengine_1 = require("./searchengine/searchengine");
var searchengine_service_1 = require("./searchengine/searchengine.service");
var MainPageModule = (function () {
    function MainPageModule() {
    }
    MainPageModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, router_1.RouterModule, forms_1.FormsModule, http_1.HttpModule, mainpage_route_1.mainPageRouting],
            declarations: [mainpage_component_1.MainPageComponent, menuTree_component_1.MenuTreeComponent, searchengine_1.SearchEngine],
            exports: [mainpage_component_1.MainPageComponent],
            providers: [menuTree_service_1.MenuService, searchengine_service_1.SearchEngineService]
        })
    ], MainPageModule);
    return MainPageModule;
}());
exports.MainPageModule = MainPageModule;
