"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var ContactTypeService = (function () {
    function ContactTypeService(_http) {
        this._http = _http;
    }
    ContactTypeService.prototype.onSaveClick_callContactTypeService_saveOperation = function (parentRef, callBackFunctionName, requestJson) {
        var _this = this;
        this.parentRef = parentRef;
        this.callBackFunctionName = callBackFunctionName;
        var headers = new http_1.Headers({ 'Content-Type': 'application/json;charset=UTF-8' });
        var options = new http_1.RequestOptions({ headers: headers, method: 'post' });
        this._http.post('secure/ContactType/', requestJson, options).subscribe(function (response) {
            _this.responseData = response.json();
        }, function (error) {
        }, function () {
            _this.onSaveClick_callContactTypeService_saveOperationComplete();
        });
    };
    ContactTypeService.prototype.onSaveClick_callContactTypeService_saveOperationComplete = function () {
        this.parentRef.onSaveClick_callContactTypeService_saveOperationComplete(this.responseData);
    };
    ContactTypeService.prototype.onUpdateClick_callContactTypeService_updateOperation = function (parentRef, callBackFunctionName, requestJson) {
        var _this = this;
        this.parentRef = parentRef;
        this.callBackFunctionName = callBackFunctionName;
        var headers = new http_1.Headers({ 'Content-Type': 'application/json;charset=UTF-8' });
        var options = new http_1.RequestOptions({ headers: headers, method: 'put' });
        this._http.post('secure/ContactType/', requestJson, options).subscribe(function (response) {
            _this.responseData = response.json();
        }, function (error) {
        }, function () {
            _this.onUpdateClick_callContactTypeService_updateOperationComplete();
        });
    };
    ContactTypeService.prototype.onUpdateClick_callContactTypeService_updateOperationComplete = function () {
        this.parentRef.onUpdateClick_callContactTypeService_updateOperationComplete(this.responseData);
    };
    ContactTypeService.prototype.onContactTypeGridRowClick_callContactType_findByIdOperation = function (parentRef, callBackFunctionName, requestJson) {
        var _this = this;
        this.parentRef = parentRef;
        this.callBackFunctionName = callBackFunctionName;
        var headers = new http_1.Headers({ 'Content-Type': 'application/json;charset=UTF-8' });
        var options = new http_1.RequestOptions({ headers: headers, method: 'post' });
        this._http.post('secure/ContactType/findById', requestJson, options).subscribe(function (response) {
            _this.responseData = response.json();
        }, function (error) {
        }, function () {
            _this.onContactTypeGridRowClick_callContactType_findByIdOperationComplete();
        });
    };
    ContactTypeService.prototype.onContactTypeGridRowClick_callContactType_findByIdOperationComplete = function () {
        this.parentRef.onContactTypeGridRowClick_callContactType_findByIdOperationComplete(this.responseData);
    };
    ContactTypeService = __decorate([
        core_1.Injectable()
    ], ContactTypeService);
    return ContactTypeService;
}());
exports.ContactTypeService = ContactTypeService;
