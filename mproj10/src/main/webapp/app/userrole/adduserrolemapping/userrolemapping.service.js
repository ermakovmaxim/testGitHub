/**
 * Created by prasad on 23/9/16.
 */
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var http_1 = require("@angular/http");
var UserRoleService = (function () {
    function UserRoleService(_http) {
        this._http = _http;
    }
    UserRoleService.prototype.findListOfUser = function (parentRef, callBackFunctionName, serviceUrl, methodType, requestJson) {
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
                _this.setUserData();
            });
        }
        else if (methodType == "get") {
            this._http.get(serviceUrl, options).subscribe(function (response) {
                _this.responseData = response.json();
            }, function (error) {
            }, function () {
                _this.setUserData();
            });
        }
    };
    UserRoleService.prototype.setUserData = function () {
        this.parentRef.getUserData(this.responseData);
    };
    UserRoleService.prototype.findListOfRole = function (parentRef, callBackFunctionName, serviceUrl, methodType, requestJson) {
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
    UserRoleService.prototype.setData = function () {
        this.parentRef.setRoleListData(this.responseData);
    };
    UserRoleService.prototype.saveRoleMappedData = function (parentRef, callBackFunctionName, serviceUrl, methodType, requestJson) {
        var _this = this;
        this.parentRef = parentRef;
        this.callBackFunctionName = callBackFunctionName;
        // let headers = new Headers({ 'Content-Type': 'application/json;charset=UTF-8'  });
        var headers = new http_1.Headers({ isArray: true });
        var options = new http_1.RequestOptions({ headers: headers, method: methodType });
        if (methodType == "post") {
            this._http.post(serviceUrl, requestJson, options).subscribe(function (response) {
                _this.responseData = response.json();
            }, function (error) {
            }, function () {
                _this.getSaveResponse();
            });
        }
        else if (methodType == "get") {
            this._http.get(serviceUrl, options).subscribe(function (response) {
                _this.responseData = response.json();
            }, function (error) {
            }, function () {
                _this.getSaveResponse();
            });
        }
    };
    UserRoleService.prototype.getSaveResponse = function () {
        this.parentRef.getSaveMappedRoleResponse(this.responseData);
    };
    UserRoleService = __decorate([
        core_1.Injectable()
    ], UserRoleService);
    return UserRoleService;
}());
exports.UserRoleService = UserRoleService;
