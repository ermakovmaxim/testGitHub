/**
 * Created by prasad on 7/9/16.
 */
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var http_1 = require("@angular/http");
var constant_1 = require("../constant");
var FirstService = (function () {
    function FirstService(_http) {
        this._http = _http;
        this.mainScreenMenuUrl = constant_1.AppUrl + 'secure/MenuService/findMainScreenMenus';
    }
    FirstService.prototype.getMainScreenMenu = function () {
        return this._http.post(this.mainScreenMenuUrl, null, { jsonData: {}, headers: new http_1.Headers({ 'Content-Type': 'application/json;charset=UTF-8' }) });
    };
    FirstService = __decorate([
        core_1.Injectable()
    ], FirstService);
    return FirstService;
}());
exports.FirstService = FirstService;
