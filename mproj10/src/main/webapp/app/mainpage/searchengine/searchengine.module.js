"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * Created by viral on 7/9/16.
 */
var core_1 = require('@angular/core');
var router_1 = require("@angular/router");
var searchresult_1 = require("./searchresult");
var appchart_1 = require("./appchart");
var forms_1 = require("@angular/forms");
var platform_browser_1 = require("@angular/platform-browser");
var http_1 = require("@angular/http");
var searchengine_service_1 = require("./searchengine.service");
var common_1 = require("@angular/common");
var do_you_mean_text_1 = require("./do-you-mean-text");
var SearchEngieModule = (function () {
    function SearchEngieModule() {
    }
    SearchEngieModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, platform_browser_1.BrowserModule, router_1.RouterModule, forms_1.FormsModule, http_1.HttpModule,
                router_1.RouterModule.forChild([
                    { path: '', redirectTo: 'searchengine', pathMatch: 'full' },
                    { path: '', component: searchresult_1.SearchResult }
                ])
            ],
            providers: [searchengine_service_1.SearchEngineService],
            declarations: [searchresult_1.SearchResult, appchart_1.AppChart, do_you_mean_text_1.DoYouMeanText]
        })
    ], SearchEngieModule);
    return SearchEngieModule;
}());
exports.SearchEngieModule = SearchEngieModule;
