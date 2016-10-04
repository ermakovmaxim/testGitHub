"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var CountryService = (function () {
    function CountryService(_http) {
        this._http = _http;
    }
    CountryService.prototype.onSaveClick_callCountryService_saveOperation = function (parentRef, callBackFunctionName, requestJson) {
        var _this = this;
        this.parentRef = parentRef;
        this.callBackFunctionName = callBackFunctionName;
        var headers = new http_1.Headers({ 'Content-Type': 'application/json;charset=UTF-8' });
        var options = new http_1.RequestOptions({ headers: headers, method: 'post' });
        this._http.post('secure/Country/', requestJson, options).subscribe(function (response) {
            _this.responseData = response.json();
        }, function (error) {
        }, function () {
            _this.onSaveClick_callCountryService_saveOperationComplete();
        });
    };
    CountryService.prototype.onSaveClick_callCountryService_saveOperationComplete = function () {
        this.parentRef.onSaveClick_callCountryService_saveOperationComplete(this.responseData);
    };
    CountryService.prototype.onUpdateClick_callCountryService_updateOperation = function (parentRef, callBackFunctionName, requestJson) {
        var _this = this;
        this.parentRef = parentRef;
        this.callBackFunctionName = callBackFunctionName;
        var headers = new http_1.Headers({ 'Content-Type': 'application/json;charset=UTF-8' });
        var options = new http_1.RequestOptions({ headers: headers, method: 'put' });
        this._http.post('secure/Country/', requestJson, options).subscribe(function (response) {
            _this.responseData = response.json();
        }, function (error) {
        }, function () {
            _this.onUpdateClick_callCountryService_updateOperationComplete();
        });
    };
    CountryService.prototype.onUpdateClick_callCountryService_updateOperationComplete = function () {
        this.parentRef.onUpdateClick_callCountryService_updateOperationComplete(this.responseData);
    };
    CountryService.prototype.onCountryGridRowClick_callCountry_findByIdOperation = function (parentRef, callBackFunctionName, requestJson) {
        var _this = this;
        this.parentRef = parentRef;
        this.callBackFunctionName = callBackFunctionName;
        var headers = new http_1.Headers({ 'Content-Type': 'application/json;charset=UTF-8' });
        var options = new http_1.RequestOptions({ headers: headers, method: 'post' });
        this._http.post('secure/Country/findById', requestJson, options).subscribe(function (response) {
            _this.responseData = response.json();
        }, function (error) {
        }, function () {
            _this.onCountryGridRowClick_callCountry_findByIdOperationComplete();
        });
    };
    CountryService.prototype.onCountryGridRowClick_callCountry_findByIdOperationComplete = function () {
        this.parentRef.onCountryGridRowClick_callCountry_findByIdOperationComplete(this.responseData);
    };
    CountryService = __decorate([
        core_1.Injectable()
    ], CountryService);
    return CountryService;
}());
exports.CountryService = CountryService;
