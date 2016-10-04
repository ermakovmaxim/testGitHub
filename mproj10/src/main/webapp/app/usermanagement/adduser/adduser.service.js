/**
 * Created by prasad on 14/9/16.
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
var AddUserService = (function () {
    function AddUserService(_http) {
        this._http = _http;
    }
    AddUserService.prototype.findByCountryIdData = function (parentRef, callBackFunctionName, serviceUrl, methodType, requestJson) {
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
    AddUserService.prototype.setData = function () {
        this.parentRef.setfindByCountryIdData(this.responseData);
    };
    AddUserService.prototype.findByStateIdData = function (parentRef, callBackFunctionName, serviceUrl, methodType, requestJson) {
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
                _this.setCityData();
            });
        }
        else if (methodType == "get") {
            this._http.get(serviceUrl, options).subscribe(function (response) {
                _this.responseData = response.json();
            }, function (error) {
            }, function () {
                _this.setCityData();
            });
        }
    };
    AddUserService.prototype.setCityData = function () {
        this.parentRef.setfindByStateIdData(this.responseData);
    };
    AddUserService.prototype.checkValidityOfLoginId = function (parentRef, callBackFunctionName, serviceUrl, methodType, requestJson) {
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
                _this.setLoginData();
            });
        }
        else if (methodType == "get") {
            this._http.get(serviceUrl, options).subscribe(function (response) {
                _this.responseData = response.json();
            }, function (error) {
            }, function () {
                _this.setLoginData();
            });
        }
    };
    AddUserService.prototype.setLoginData = function () {
        this.parentRef.checkValidityLoginData(this.responseData);
    };
    AddUserService.prototype.LoginData = function (parentRef, callBackFunctionName, serviceUrl, methodType, requestJson) {
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
                _this.getLoginData();
            });
        }
        else if (methodType == "get") {
            this._http.get(serviceUrl, options).subscribe(function (response) {
                _this.responseData = response.json();
            }, function (error) {
            }, function () {
                _this.getLoginData();
            });
        }
    };
    AddUserService.prototype.getLoginData = function () {
        this.parentRef.loginDataResponse(this.responseData);
    };
    AddUserService.prototype.passworsGenerator = function (parentRef, callBackFunctionName, serviceUrl, methodType, requestJson) {
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
                _this.getpassworsGeneratorData();
            });
        }
        else if (methodType == "get") {
            this._http.get(serviceUrl, options).subscribe(function (response) {
                _this.responseData = response.json();
            }, function (error) {
            }, function () {
                _this.getpassworsGeneratorData();
            });
        }
    };
    AddUserService.prototype.getpassworsGeneratorData = function () {
        this.parentRef.getpassworsGeneratorDataResponse(this.responseData);
    };
    AddUserService.prototype.loginFindAll = function (parentRef, callBackFunctionName, serviceUrl, methodType, requestJson) {
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
                _this.response();
            });
        }
        else if (methodType == "get") {
            this._http.get(serviceUrl, options).subscribe(function (response) {
                _this.responseData = response.json();
            }, function (error) {
            }, function () {
                _this.response();
            });
        }
    };
    AddUserService.prototype.response = function () {
        this.parentRef.loginResponse(this.responseData);
    };
    AddUserService = __decorate([
        core_1.Injectable()
    ], AddUserService);
    return AddUserService;
}());
exports.AddUserService = AddUserService;
