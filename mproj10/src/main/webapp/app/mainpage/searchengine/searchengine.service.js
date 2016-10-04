"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * Created by sagar on 6/9/16.
 */
var core_1 = require('@angular/core');
var http_1 = require("@angular/http");
var SearchEngineService = (function () {
    function SearchEngineService(_http, router) {
        this._http = _http;
        this.router = router;
        this.searchParamter = 'secure/SearchEngineService/getSearchResult?searchString=';
    }
    SearchEngineService.prototype.sendSearchData = function (searchParamter, languageValue) {
        var data = this.searchParamter + searchParamter + '&oprationType=' + languageValue;
        var body = {};
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers, method: 'get' });
        try {
            return this._http.get(data, body, options);
        }
        catch (e) {
            console.log('invalid search');
        }
    };
    SearchEngineService.prototype.getAvailableLanguages = function () {
        var data = 'secure/SearchEngineService/getAvailableLanguages';
        var body = {};
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers, method: 'get' });
        try {
            return this._http.get(data, body, options);
        }
        catch (e) {
            console.log('gettting language error');
        }
    };
    SearchEngineService = __decorate([
        core_1.Injectable()
    ], SearchEngineService);
    return SearchEngineService;
}());
exports.SearchEngineService = SearchEngineService;
