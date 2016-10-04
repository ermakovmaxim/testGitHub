"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var AddressTypeService = (function () {
    function AddressTypeService(_http) {
        this._http = _http;
    }
    AddressTypeService.prototype.onSaveClick_callAddressTypeService_saveOperation = function (parentRef, callBackFunctionName, requestJson) {
        var _this = this;
        this.parentRef = parentRef;
        this.callBackFunctionName = callBackFunctionName;
        var headers = new http_1.Headers({ 'Content-Type': 'application/json;charset=UTF-8' });
        var options = new http_1.RequestOptions({ headers: headers, method: 'post' });
        this._http.post('secure/AddressType/', requestJson, options).subscribe(function (response) {
            _this.responseData = response.json();
        }, function (error) {
        }, function () {
            _this.onSaveClick_callAddressTypeService_saveOperationComplete();
        });
    };
    AddressTypeService.prototype.onSaveClick_callAddressTypeService_saveOperationComplete = function () {
        this.parentRef.onSaveClick_callAddressTypeService_saveOperationComplete(this.responseData);
    };
    AddressTypeService.prototype.onUpdateClick_callAddressTypeService_updateOperation = function (parentRef, callBackFunctionName, requestJson) {
        var _this = this;
        this.parentRef = parentRef;
        this.callBackFunctionName = callBackFunctionName;
        var headers = new http_1.Headers({ 'Content-Type': 'application/json;charset=UTF-8' });
        var options = new http_1.RequestOptions({ headers: headers, method: 'put' });
        this._http.post('secure/AddressType/', requestJson, options).subscribe(function (response) {
            _this.responseData = response.json();
        }, function (error) {
        }, function () {
            _this.onUpdateClick_callAddressTypeService_updateOperationComplete();
        });
    };
    AddressTypeService.prototype.onUpdateClick_callAddressTypeService_updateOperationComplete = function () {
        this.parentRef.onUpdateClick_callAddressTypeService_updateOperationComplete(this.responseData);
    };
    AddressTypeService.prototype.onAddressTypeGridRowClick_callAddressType_findByIdOperation = function (parentRef, callBackFunctionName, requestJson) {
        var _this = this;
        this.parentRef = parentRef;
        this.callBackFunctionName = callBackFunctionName;
        var headers = new http_1.Headers({ 'Content-Type': 'application/json;charset=UTF-8' });
        var options = new http_1.RequestOptions({ headers: headers, method: 'post' });
        this._http.post('secure/AddressType/findById', requestJson, options).subscribe(function (response) {
            _this.responseData = response.json();
        }, function (error) {
        }, function () {
            _this.onAddressTypeGridRowClick_callAddressType_findByIdOperationComplete();
        });
    };
    AddressTypeService.prototype.onAddressTypeGridRowClick_callAddressType_findByIdOperationComplete = function () {
        this.parentRef.onAddressTypeGridRowClick_callAddressType_findByIdOperationComplete(this.responseData);
    };
    AddressTypeService = __decorate([
        core_1.Injectable()
    ], AddressTypeService);
    return AddressTypeService;
}());
exports.AddressTypeService = AddressTypeService;
