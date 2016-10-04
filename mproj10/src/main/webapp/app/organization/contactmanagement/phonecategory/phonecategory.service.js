"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var PhoneCategoryService = (function () {
    function PhoneCategoryService(_http) {
        this._http = _http;
    }
    PhoneCategoryService.prototype.onSaveClick_callPhoneCategoryService_saveOperation = function (parentRef, callBackFunctionName, requestJson) {
        var _this = this;
        this.parentRef = parentRef;
        this.callBackFunctionName = callBackFunctionName;
        var headers = new http_1.Headers({ 'Content-Type': 'application/json;charset=UTF-8' });
        var options = new http_1.RequestOptions({ headers: headers, method: 'post' });
        this._http.post('secure/PhoneCategory/', requestJson, options).subscribe(function (response) {
            _this.responseData = response.json();
        }, function (error) {
        }, function () {
            _this.onSaveClick_callPhoneCategoryService_saveOperationComplete();
        });
    };
    PhoneCategoryService.prototype.onSaveClick_callPhoneCategoryService_saveOperationComplete = function () {
        this.parentRef.onSaveClick_callPhoneCategoryService_saveOperationComplete(this.responseData);
    };
    PhoneCategoryService.prototype.onUpdateClick_callPhoneCategoryService_updateOperation = function (parentRef, callBackFunctionName, requestJson) {
        var _this = this;
        this.parentRef = parentRef;
        this.callBackFunctionName = callBackFunctionName;
        var headers = new http_1.Headers({ 'Content-Type': 'application/json;charset=UTF-8' });
        var options = new http_1.RequestOptions({ headers: headers, method: 'put' });
        this._http.post('secure/PhoneCategory/', requestJson, options).subscribe(function (response) {
            _this.responseData = response.json();
        }, function (error) {
        }, function () {
            _this.onUpdateClick_callPhoneCategoryService_updateOperationComplete();
        });
    };
    PhoneCategoryService.prototype.onUpdateClick_callPhoneCategoryService_updateOperationComplete = function () {
        this.parentRef.onUpdateClick_callPhoneCategoryService_updateOperationComplete(this.responseData);
    };
    PhoneCategoryService.prototype.onPhoneCategoryGridRowClick_callPhoneCategory_findByIdOperation = function (parentRef, callBackFunctionName, requestJson) {
        var _this = this;
        this.parentRef = parentRef;
        this.callBackFunctionName = callBackFunctionName;
        var headers = new http_1.Headers({ 'Content-Type': 'application/json;charset=UTF-8' });
        var options = new http_1.RequestOptions({ headers: headers, method: 'post' });
        this._http.post('secure/PhoneCategory/findById', requestJson, options).subscribe(function (response) {
            _this.responseData = response.json();
        }, function (error) {
        }, function () {
            _this.onPhoneCategoryGridRowClick_callPhoneCategory_findByIdOperationComplete();
        });
    };
    PhoneCategoryService.prototype.onPhoneCategoryGridRowClick_callPhoneCategory_findByIdOperationComplete = function () {
        this.parentRef.onPhoneCategoryGridRowClick_callPhoneCategory_findByIdOperationComplete(this.responseData);
    };
    PhoneCategoryService = __decorate([
        core_1.Injectable()
    ], PhoneCategoryService);
    return PhoneCategoryService;
}());
exports.PhoneCategoryService = PhoneCategoryService;
