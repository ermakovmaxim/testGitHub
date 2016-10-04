"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var CityService = (function () {
    function CityService(_http) {
        this._http = _http;
    }
    CityService.prototype.onCountryIdSelect_callStateService_findByCountryIdOperation = function (parentRef, callBackFunctionName, requestJson) {
        var _this = this;
        this.parentRef = parentRef;
        this.callBackFunctionName = callBackFunctionName;
        var headers = new http_1.Headers({ 'Content-Type': 'application/json;charset=UTF-8' });
        var options = new http_1.RequestOptions({ headers: headers, method: 'post' });
        this._http.post('secure/State/findByCountryId', requestJson, options).subscribe(function (response) {
            _this.responseData = response.json();
        }, function (error) {
        }, function () {
            _this.onCountryIdSelect_callStateService_findByCountryIdOperationComplete();
        });
    };
    CityService.prototype.onCountryIdSelect_callStateService_findByCountryIdOperationComplete = function () {
        this.parentRef.onCountryIdSelect_callStateService_findByCountryIdOperationComplete(this.responseData);
    };
    CityService.prototype.onSaveClick_callCityService_saveOperation = function (parentRef, callBackFunctionName, requestJson) {
        var _this = this;
        this.parentRef = parentRef;
        this.callBackFunctionName = callBackFunctionName;
        var headers = new http_1.Headers({ 'Content-Type': 'application/json;charset=UTF-8' });
        var options = new http_1.RequestOptions({ headers: headers, method: 'post' });
        this._http.post('secure/City/', requestJson, options).subscribe(function (response) {
            _this.responseData = response.json();
        }, function (error) {
        }, function () {
            _this.onSaveClick_callCityService_saveOperationComplete();
        });
    };
    CityService.prototype.onSaveClick_callCityService_saveOperationComplete = function () {
        this.parentRef.onSaveClick_callCityService_saveOperationComplete(this.responseData);
    };
    CityService.prototype.onUpdateClick_callCityService_updateOperation = function (parentRef, callBackFunctionName, requestJson) {
        var _this = this;
        this.parentRef = parentRef;
        this.callBackFunctionName = callBackFunctionName;
        var headers = new http_1.Headers({ 'Content-Type': 'application/json;charset=UTF-8' });
        var options = new http_1.RequestOptions({ headers: headers, method: 'put' });
        this._http.post('secure/City/', requestJson, options).subscribe(function (response) {
            _this.responseData = response.json();
        }, function (error) {
        }, function () {
            _this.onUpdateClick_callCityService_updateOperationComplete();
        });
    };
    CityService.prototype.onUpdateClick_callCityService_updateOperationComplete = function () {
        this.parentRef.onUpdateClick_callCityService_updateOperationComplete(this.responseData);
    };
    CityService.prototype.onCityGridRowClick_callCity_findByIdOperation = function (parentRef, callBackFunctionName, requestJson) {
        var _this = this;
        this.parentRef = parentRef;
        this.callBackFunctionName = callBackFunctionName;
        var headers = new http_1.Headers({ 'Content-Type': 'application/json;charset=UTF-8' });
        var options = new http_1.RequestOptions({ headers: headers, method: 'post' });
        this._http.post('secure/City/findById', requestJson, options).subscribe(function (response) {
            _this.responseData = response.json();
        }, function (error) {
        }, function () {
            _this.onCityGridRowClick_callCity_findByIdOperationComplete();
        });
    };
    CityService.prototype.onCityGridRowClick_callCity_findByIdOperationComplete = function () {
        this.parentRef.onCityGridRowClick_callCity_findByIdOperationComplete(this.responseData);
    };
    CityService = __decorate([
        core_1.Injectable()
    ], CityService);
    return CityService;
}());
exports.CityService = CityService;
