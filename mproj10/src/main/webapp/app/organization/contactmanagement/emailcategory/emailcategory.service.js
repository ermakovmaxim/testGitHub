"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var EmailCategoryService = (function () {
    function EmailCategoryService(_http) {
        this._http = _http;
    }
    EmailCategoryService.prototype.onSaveClick_callEmailCategoryService_saveOperation = function (parentRef, callBackFunctionName, requestJson) {
        var _this = this;
        this.parentRef = parentRef;
        this.callBackFunctionName = callBackFunctionName;
        var headers = new http_1.Headers({ 'Content-Type': 'application/json;charset=UTF-8' });
        var options = new http_1.RequestOptions({ headers: headers, method: 'post' });
        this._http.post('secure/EmailCategory/', requestJson, options).subscribe(function (response) {
            _this.responseData = response.json();
        }, function (error) {
        }, function () {
            _this.onSaveClick_callEmailCategoryService_saveOperationComplete();
        });
    };
    EmailCategoryService.prototype.onSaveClick_callEmailCategoryService_saveOperationComplete = function () {
        this.parentRef.onSaveClick_callEmailCategoryService_saveOperationComplete(this.responseData);
    };
    EmailCategoryService.prototype.onUpdateClick_callEmailCategoryService_updateOperation = function (parentRef, callBackFunctionName, requestJson) {
        var _this = this;
        this.parentRef = parentRef;
        this.callBackFunctionName = callBackFunctionName;
        var headers = new http_1.Headers({ 'Content-Type': 'application/json;charset=UTF-8' });
        var options = new http_1.RequestOptions({ headers: headers, method: 'put' });
        this._http.post('secure/EmailCategory/', requestJson, options).subscribe(function (response) {
            _this.responseData = response.json();
        }, function (error) {
        }, function () {
            _this.onUpdateClick_callEmailCategoryService_updateOperationComplete();
        });
    };
    EmailCategoryService.prototype.onUpdateClick_callEmailCategoryService_updateOperationComplete = function () {
        this.parentRef.onUpdateClick_callEmailCategoryService_updateOperationComplete(this.responseData);
    };
    EmailCategoryService.prototype.onEmailCategoryGridRowClick_callEmailCategory_findByIdOperation = function (parentRef, callBackFunctionName, requestJson) {
        var _this = this;
        this.parentRef = parentRef;
        this.callBackFunctionName = callBackFunctionName;
        var headers = new http_1.Headers({ 'Content-Type': 'application/json;charset=UTF-8' });
        var options = new http_1.RequestOptions({ headers: headers, method: 'post' });
        this._http.post('secure/EmailCategory/findById', requestJson, options).subscribe(function (response) {
            _this.responseData = response.json();
        }, function (error) {
        }, function () {
            _this.onEmailCategoryGridRowClick_callEmailCategory_findByIdOperationComplete();
        });
    };
    EmailCategoryService.prototype.onEmailCategoryGridRowClick_callEmailCategory_findByIdOperationComplete = function () {
        this.parentRef.onEmailCategoryGridRowClick_callEmailCategory_findByIdOperationComplete(this.responseData);
    };
    EmailCategoryService = __decorate([
        core_1.Injectable()
    ], EmailCategoryService);
    return EmailCategoryService;
}());
exports.EmailCategoryService = EmailCategoryService;
