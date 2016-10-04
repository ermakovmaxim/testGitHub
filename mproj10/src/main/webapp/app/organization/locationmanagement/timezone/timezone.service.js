"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var TimezoneService = (function () {
    function TimezoneService(_http) {
        this._http = _http;
    }
    TimezoneService.prototype.onSaveClick_callTimezoneService_saveOperation = function (parentRef, callBackFunctionName, requestJson) {
        var _this = this;
        this.parentRef = parentRef;
        this.callBackFunctionName = callBackFunctionName;
        var headers = new http_1.Headers({ 'Content-Type': 'application/json;charset=UTF-8' });
        var options = new http_1.RequestOptions({ headers: headers, method: 'post' });
        this._http.post('secure/Timezone/', requestJson, options).subscribe(function (response) {
            _this.responseData = response.json();
        }, function (error) {
        }, function () {
            _this.onSaveClick_callTimezoneService_saveOperationComplete();
        });
    };
    TimezoneService.prototype.onSaveClick_callTimezoneService_saveOperationComplete = function () {
        this.parentRef.onSaveClick_callTimezoneService_saveOperationComplete(this.responseData);
    };
    TimezoneService.prototype.onUpdateClick_callTimezoneService_updateOperation = function (parentRef, callBackFunctionName, requestJson) {
        var _this = this;
        this.parentRef = parentRef;
        this.callBackFunctionName = callBackFunctionName;
        var headers = new http_1.Headers({ 'Content-Type': 'application/json;charset=UTF-8' });
        var options = new http_1.RequestOptions({ headers: headers, method: 'put' });
        this._http.post('secure/Timezone/', requestJson, options).subscribe(function (response) {
            _this.responseData = response.json();
        }, function (error) {
        }, function () {
            _this.onUpdateClick_callTimezoneService_updateOperationComplete();
        });
    };
    TimezoneService.prototype.onUpdateClick_callTimezoneService_updateOperationComplete = function () {
        this.parentRef.onUpdateClick_callTimezoneService_updateOperationComplete(this.responseData);
    };
    TimezoneService.prototype.onTimezoneGridRowClick_callTimezone_findByIdOperation = function (parentRef, callBackFunctionName, requestJson) {
        var _this = this;
        this.parentRef = parentRef;
        this.callBackFunctionName = callBackFunctionName;
        var headers = new http_1.Headers({ 'Content-Type': 'application/json;charset=UTF-8' });
        var options = new http_1.RequestOptions({ headers: headers, method: 'post' });
        this._http.post('secure/Timezone/findById', requestJson, options).subscribe(function (response) {
            _this.responseData = response.json();
        }, function (error) {
        }, function () {
            _this.onTimezoneGridRowClick_callTimezone_findByIdOperationComplete();
        });
    };
    TimezoneService.prototype.onTimezoneGridRowClick_callTimezone_findByIdOperationComplete = function () {
        this.parentRef.onTimezoneGridRowClick_callTimezone_findByIdOperationComplete(this.responseData);
    };
    TimezoneService = __decorate([
        core_1.Injectable()
    ], TimezoneService);
    return TimezoneService;
}());
exports.TimezoneService = TimezoneService;
