"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var http_1 = require("@angular/http");
var constant_1 = require("../../constant");
var RoleFeatureServices = (function () {
    function RoleFeatureServices(_http) {
        this._http = _http;
        this.mainScreenMenuUrl = constant_1.AppUrl + 'secure/RoleFeatureService/findMainScreenMenus';
    }
    /*getMainScreenMenu(){

        return this._http.post(this.mainScreenMenuUrl,null,{ jsonData : {}, headers : new Headers({ 'Content-Type': 'application/json;charset=UTF-8' })  })

    }*/
    RoleFeatureServices.prototype.findListOfRole = function (parentRef, callBackFunctionName, serviceUrl, methodType, requestJson) {
        var _this = this;
        this.parentRef = parentRef;
        this.callBackFunctionName = callBackFunctionName;
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
    RoleFeatureServices.prototype.setData = function () {
        this.parentRef.setRoleListData(this.responseData);
    };
    RoleFeatureServices.prototype.getMenus = function (parentRef, callBackFunctionName, serviceUrl, methodType, requestJson) {
        var _this = this;
        this.parentRef = parentRef;
        this.callBackFunctionName = callBackFunctionName;
        var headers = new http_1.Headers({ 'Content-Type': 'application/json;charset=UTF-8' });
        var options = new http_1.RequestOptions({ headers: headers, method: methodType });
        if (methodType == "post") {
            return this._http.post(serviceUrl, requestJson, options);
        }
        else if (methodType == "get") {
            this._http.get(serviceUrl, options).subscribe(function (response) {
                _this.responseData = response.json();
            }, function (error) {
            }, function () {
            });
        }
    };
    RoleFeatureServices.prototype.saveUser = function (parentRef, callBackFunctionName, serviceUrl, methodType, requestJson) {
        var _this = this;
        debugger;
        this.parentRef = parentRef;
        this.callBackFunctionName = callBackFunctionName;
        var headers = new http_1.Headers({ 'Content-Type': 'application/json;charset=UTF-8' });
        var options = new http_1.RequestOptions({ headers: headers, method: methodType });
        if (methodType == "post") {
            this._http.post(serviceUrl, requestJson, options).subscribe(function (response) {
                _this.responseData = response.json();
            }, function (error) {
            }, function () {
                _this.saveData();
            });
        }
        else if (methodType == "get") {
            this._http.get(serviceUrl, options).subscribe(function (response) {
                _this.responseData = response.json();
            }, function (error) {
            }, function () {
                _this.saveData();
            });
        }
    };
    RoleFeatureServices.prototype.saveData = function () {
        this.parentRef.SaveResponseData(this.responseData);
    };
    RoleFeatureServices = __decorate([
        core_1.Injectable()
    ], RoleFeatureServices);
    return RoleFeatureServices;
}());
exports.RoleFeatureServices = RoleFeatureServices;
