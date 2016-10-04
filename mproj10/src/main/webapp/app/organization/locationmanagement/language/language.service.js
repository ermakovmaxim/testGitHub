"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var LanguageService = (function () {
    function LanguageService(_http) {
        this._http = _http;
    }
    LanguageService.prototype.onSaveClick_callLanguageService_saveOperation = function (parentRef, callBackFunctionName, requestJson) {
        var _this = this;
        this.parentRef = parentRef;
        this.callBackFunctionName = callBackFunctionName;
        var headers = new http_1.Headers({ 'Content-Type': 'application/json;charset=UTF-8' });
        var options = new http_1.RequestOptions({ headers: headers, method: 'post' });
        this._http.post('secure/Language/', requestJson, options).subscribe(function (response) {
            _this.responseData = response.json();
        }, function (error) {
        }, function () {
            _this.onSaveClick_callLanguageService_saveOperationComplete();
        });
    };
    LanguageService.prototype.onSaveClick_callLanguageService_saveOperationComplete = function () {
        this.parentRef.onSaveClick_callLanguageService_saveOperationComplete(this.responseData);
    };
    LanguageService.prototype.onUpdateClick_callLanguageService_updateOperation = function (parentRef, callBackFunctionName, requestJson) {
        var _this = this;
        this.parentRef = parentRef;
        this.callBackFunctionName = callBackFunctionName;
        var headers = new http_1.Headers({ 'Content-Type': 'application/json;charset=UTF-8' });
        var options = new http_1.RequestOptions({ headers: headers, method: 'put' });
        this._http.post('secure/Language/', requestJson, options).subscribe(function (response) {
            _this.responseData = response.json();
        }, function (error) {
        }, function () {
            _this.onUpdateClick_callLanguageService_updateOperationComplete();
        });
    };
    LanguageService.prototype.onUpdateClick_callLanguageService_updateOperationComplete = function () {
        this.parentRef.onUpdateClick_callLanguageService_updateOperationComplete(this.responseData);
    };
    LanguageService.prototype.onLanguageGridRowClick_callLanguage_findByIdOperation = function (parentRef, callBackFunctionName, requestJson) {
        var _this = this;
        this.parentRef = parentRef;
        this.callBackFunctionName = callBackFunctionName;
        var headers = new http_1.Headers({ 'Content-Type': 'application/json;charset=UTF-8' });
        var options = new http_1.RequestOptions({ headers: headers, method: 'post' });
        this._http.post('secure/Language/findById', requestJson, options).subscribe(function (response) {
            _this.responseData = response.json();
        }, function (error) {
        }, function () {
            _this.onLanguageGridRowClick_callLanguage_findByIdOperationComplete();
        });
    };
    LanguageService.prototype.onLanguageGridRowClick_callLanguage_findByIdOperationComplete = function () {
        this.parentRef.onLanguageGridRowClick_callLanguage_findByIdOperationComplete(this.responseData);
    };
    LanguageService = __decorate([
        core_1.Injectable()
    ], LanguageService);
    return LanguageService;
}());
exports.LanguageService = LanguageService;
