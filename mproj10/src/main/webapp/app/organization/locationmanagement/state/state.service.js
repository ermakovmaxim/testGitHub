"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var StateService = (function () {
    function StateService(_http) {
        this._http = _http;
    }
    StateService.prototype.onSaveClick_callStateService_saveOperation = function (parentRef, callBackFunctionName, requestJson) {
        var _this = this;
        this.parentRef = parentRef;
        this.callBackFunctionName = callBackFunctionName;
        var headers = new http_1.Headers({ 'Content-Type': 'application/json;charset=UTF-8' });
        var options = new http_1.RequestOptions({ headers: headers, method: 'post' });
        this._http.post('secure/State/', requestJson, options).subscribe(function (response) {
            _this.responseData = response.json();
        }, function (error) {
        }, function () {
            _this.onSaveClick_callStateService_saveOperationComplete();
        });
    };
    StateService.prototype.onSaveClick_callStateService_saveOperationComplete = function () {
        this.parentRef.onSaveClick_callStateService_saveOperationComplete(this.responseData);
    };
    StateService.prototype.onUpdateClick_callStateService_updateOperation = function (parentRef, callBackFunctionName, requestJson) {
        var _this = this;
        this.parentRef = parentRef;
        this.callBackFunctionName = callBackFunctionName;
        var headers = new http_1.Headers({ 'Content-Type': 'application/json;charset=UTF-8' });
        var options = new http_1.RequestOptions({ headers: headers, method: 'put' });
        this._http.post('secure/State/', requestJson, options).subscribe(function (response) {
            _this.responseData = response.json();
        }, function (error) {
        }, function () {
            _this.onUpdateClick_callStateService_updateOperationComplete();
        });
    };
    StateService.prototype.onUpdateClick_callStateService_updateOperationComplete = function () {
        this.parentRef.onUpdateClick_callStateService_updateOperationComplete(this.responseData);
    };
    StateService.prototype.onStateGridRowClick_callState_findByIdOperation = function (parentRef, callBackFunctionName, requestJson) {
        var _this = this;
        this.parentRef = parentRef;
        this.callBackFunctionName = callBackFunctionName;
        var headers = new http_1.Headers({ 'Content-Type': 'application/json;charset=UTF-8' });
        var options = new http_1.RequestOptions({ headers: headers, method: 'post' });
        this._http.post('secure/State/findById', requestJson, options).subscribe(function (response) {
            _this.responseData = response.json();
        }, function (error) {
        }, function () {
            _this.onStateGridRowClick_callState_findByIdOperationComplete();
        });
    };
    StateService.prototype.onStateGridRowClick_callState_findByIdOperationComplete = function () {
        this.parentRef.onStateGridRowClick_callState_findByIdOperationComplete(this.responseData);
    };
    StateService = __decorate([
        core_1.Injectable()
    ], StateService);
    return StateService;
}());
exports.StateService = StateService;
