"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var GenderService = (function () {
    function GenderService(_http) {
        this._http = _http;
    }
    GenderService.prototype.onSaveClick_callGenderService_saveOperation = function (parentRef, callBackFunctionName, requestJson) {
        var _this = this;
        this.parentRef = parentRef;
        this.callBackFunctionName = callBackFunctionName;
        var headers = new http_1.Headers({ 'Content-Type': 'application/json;charset=UTF-8' });
        var options = new http_1.RequestOptions({ headers: headers, method: 'post' });
        this._http.post('secure/Gender/', requestJson, options).subscribe(function (response) {
            _this.responseData = response.json();
        }, function (error) {
        }, function () {
            _this.onSaveClick_callGenderService_saveOperationComplete();
        });
    };
    GenderService.prototype.onSaveClick_callGenderService_saveOperationComplete = function () {
        this.parentRef.onSaveClick_callGenderService_saveOperationComplete(this.responseData);
    };
    GenderService.prototype.onUpdateClick_callGenderService_updateOperation = function (parentRef, callBackFunctionName, requestJson) {
        var _this = this;
        this.parentRef = parentRef;
        this.callBackFunctionName = callBackFunctionName;
        var headers = new http_1.Headers({ 'Content-Type': 'application/json;charset=UTF-8' });
        var options = new http_1.RequestOptions({ headers: headers, method: 'put' });
        this._http.post('secure/Gender/', requestJson, options).subscribe(function (response) {
            _this.responseData = response.json();
        }, function (error) {
        }, function () {
            _this.onUpdateClick_callGenderService_updateOperationComplete();
        });
    };
    GenderService.prototype.onUpdateClick_callGenderService_updateOperationComplete = function () {
        this.parentRef.onUpdateClick_callGenderService_updateOperationComplete(this.responseData);
    };
    GenderService.prototype.onGenderGridRowClick_callGender_findByIdOperation = function (parentRef, callBackFunctionName, requestJson) {
        var _this = this;
        this.parentRef = parentRef;
        this.callBackFunctionName = callBackFunctionName;
        var headers = new http_1.Headers({ 'Content-Type': 'application/json;charset=UTF-8' });
        var options = new http_1.RequestOptions({ headers: headers, method: 'post' });
        this._http.post('secure/Gender/findById', requestJson, options).subscribe(function (response) {
            _this.responseData = response.json();
        }, function (error) {
        }, function () {
            _this.onGenderGridRowClick_callGender_findByIdOperationComplete();
        });
    };
    GenderService.prototype.onGenderGridRowClick_callGender_findByIdOperationComplete = function () {
        this.parentRef.onGenderGridRowClick_callGender_findByIdOperationComplete(this.responseData);
    };
    GenderService = __decorate([
        core_1.Injectable()
    ], GenderService);
    return GenderService;
}());
exports.GenderService = GenderService;
