"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var SocialCategoryService = (function () {
    function SocialCategoryService(_http) {
        this._http = _http;
    }
    SocialCategoryService.prototype.onSaveClick_callSocialCategoryService_saveOperation = function (parentRef, callBackFunctionName, requestJson) {
        var _this = this;
        this.parentRef = parentRef;
        this.callBackFunctionName = callBackFunctionName;
        var headers = new http_1.Headers({ 'Content-Type': 'application/json;charset=UTF-8' });
        var options = new http_1.RequestOptions({ headers: headers, method: 'post' });
        this._http.post('secure/SocialCategory/', requestJson, options).subscribe(function (response) {
            _this.responseData = response.json();
        }, function (error) {
        }, function () {
            _this.onSaveClick_callSocialCategoryService_saveOperationComplete();
        });
    };
    SocialCategoryService.prototype.onSaveClick_callSocialCategoryService_saveOperationComplete = function () {
        this.parentRef.onSaveClick_callSocialCategoryService_saveOperationComplete(this.responseData);
    };
    SocialCategoryService.prototype.onUpdateClick_callSocialCategoryService_updateOperation = function (parentRef, callBackFunctionName, requestJson) {
        var _this = this;
        this.parentRef = parentRef;
        this.callBackFunctionName = callBackFunctionName;
        var headers = new http_1.Headers({ 'Content-Type': 'application/json;charset=UTF-8' });
        var options = new http_1.RequestOptions({ headers: headers, method: 'put' });
        this._http.post('secure/SocialCategory/', requestJson, options).subscribe(function (response) {
            _this.responseData = response.json();
        }, function (error) {
        }, function () {
            _this.onUpdateClick_callSocialCategoryService_updateOperationComplete();
        });
    };
    SocialCategoryService.prototype.onUpdateClick_callSocialCategoryService_updateOperationComplete = function () {
        this.parentRef.onUpdateClick_callSocialCategoryService_updateOperationComplete(this.responseData);
    };
    SocialCategoryService.prototype.onSocialCategoryGridRowClick_callSocialCategory_findByIdOperation = function (parentRef, callBackFunctionName, requestJson) {
        var _this = this;
        this.parentRef = parentRef;
        this.callBackFunctionName = callBackFunctionName;
        var headers = new http_1.Headers({ 'Content-Type': 'application/json;charset=UTF-8' });
        var options = new http_1.RequestOptions({ headers: headers, method: 'post' });
        this._http.post('secure/SocialCategory/findById', requestJson, options).subscribe(function (response) {
            _this.responseData = response.json();
        }, function (error) {
        }, function () {
            _this.onSocialCategoryGridRowClick_callSocialCategory_findByIdOperationComplete();
        });
    };
    SocialCategoryService.prototype.onSocialCategoryGridRowClick_callSocialCategory_findByIdOperationComplete = function () {
        this.parentRef.onSocialCategoryGridRowClick_callSocialCategory_findByIdOperationComplete(this.responseData);
    };
    SocialCategoryService = __decorate([
        core_1.Injectable()
    ], SocialCategoryService);
    return SocialCategoryService;
}());
exports.SocialCategoryService = SocialCategoryService;
