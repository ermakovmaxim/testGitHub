"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var TitleService = (function () {
    function TitleService(_http) {
        this._http = _http;
    }
    TitleService.prototype.onSaveClick_callTitleService_saveOperation = function (parentRef, callBackFunctionName, requestJson) {
        var _this = this;
        this.parentRef = parentRef;
        this.callBackFunctionName = callBackFunctionName;
        var headers = new http_1.Headers({ 'Content-Type': 'application/json;charset=UTF-8' });
        var options = new http_1.RequestOptions({ headers: headers, method: 'post' });
        this._http.post('secure/Title/', requestJson, options).subscribe(function (response) {
            _this.responseData = response.json();
        }, function (error) {
        }, function () {
            _this.onSaveClick_callTitleService_saveOperationComplete();
        });
    };
    TitleService.prototype.onSaveClick_callTitleService_saveOperationComplete = function () {
        this.parentRef.onSaveClick_callTitleService_saveOperationComplete(this.responseData);
    };
    TitleService.prototype.onUpdateClick_callTitleService_updateOperation = function (parentRef, callBackFunctionName, requestJson) {
        var _this = this;
        this.parentRef = parentRef;
        this.callBackFunctionName = callBackFunctionName;
        var headers = new http_1.Headers({ 'Content-Type': 'application/json;charset=UTF-8' });
        var options = new http_1.RequestOptions({ headers: headers, method: 'put' });
        this._http.post('secure/Title/', requestJson, options).subscribe(function (response) {
            _this.responseData = response.json();
        }, function (error) {
        }, function () {
            _this.onUpdateClick_callTitleService_updateOperationComplete();
        });
    };
    TitleService.prototype.onUpdateClick_callTitleService_updateOperationComplete = function () {
        this.parentRef.onUpdateClick_callTitleService_updateOperationComplete(this.responseData);
    };
    TitleService.prototype.onTitleGridRowClick_callTitle_findByIdOperation = function (parentRef, callBackFunctionName, requestJson) {
        var _this = this;
        this.parentRef = parentRef;
        this.callBackFunctionName = callBackFunctionName;
        var headers = new http_1.Headers({ 'Content-Type': 'application/json;charset=UTF-8' });
        var options = new http_1.RequestOptions({ headers: headers, method: 'post' });
        this._http.post('secure/Title/findById', requestJson, options).subscribe(function (response) {
            _this.responseData = response.json();
        }, function (error) {
        }, function () {
            _this.onTitleGridRowClick_callTitle_findByIdOperationComplete();
        });
    };
    TitleService.prototype.onTitleGridRowClick_callTitle_findByIdOperationComplete = function () {
        this.parentRef.onTitleGridRowClick_callTitle_findByIdOperationComplete(this.responseData);
    };
    TitleService = __decorate([
        core_1.Injectable()
    ], TitleService);
    return TitleService;
}());
exports.TitleService = TitleService;
