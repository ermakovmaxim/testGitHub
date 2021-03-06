"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * Created by patrick on 15/9/16.
 */
var core_1 = require('@angular/core');
var http_1 = require("@angular/http");
var CheckBoxGroupService = (function () {
    function CheckBoxGroupService(_http) {
        this._http = _http;
    }
    CheckBoxGroupService.prototype.getData = function (parentRef, callBackFunctionName, serviceUrl, methodType) {
        var _this = this;
        debugger;
        this.parentRef = parentRef;
        this.callBackFunctionName = callBackFunctionName;
        var requestJson = {};
        var headers = new http_1.Headers({ 'Content-Type': 'application/json;charset=UTF-8' });
        var options = new http_1.RequestOptions({ headers: headers, method: methodType });
        if (methodType == "post") {
            this._http.post(serviceUrl, requestJson, options).subscribe(function (response) {
                _this.responseData = response.json();
            }, function (error) {
            }, function () {
                _this.setData();
            });
        }
        else if (methodType == "get") {
            this._http.get(serviceUrl, options).subscribe(function (response) {
                _this.responseData = response.json();
            }, function (error) {
            }, function () {
                _this.setData();
            });
        }
    };
    CheckBoxGroupService.prototype.setData = function () {
        this.parentRef.setData(this.responseData);
    };
    CheckBoxGroupService = __decorate([
        core_1.Injectable()
    ], CheckBoxGroupService);
    return CheckBoxGroupService;
}());
exports.CheckBoxGroupService = CheckBoxGroupService;
