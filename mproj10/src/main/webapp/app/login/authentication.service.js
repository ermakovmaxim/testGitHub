"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var http_1 = require("@angular/http");
var constant_1 = require("../constant");
var AuthenticationService = (function () {
    function AuthenticationService(_http) {
        this._http = _http;
        this.loginAuthenticationUrl = constant_1.AppUrl + 'secure/Authentication/authenticate';
        this.logoutAuthenticationUrl = constant_1.AppUrl + 'secure/Logout';
    }
    /*  let body = { 'loginId' : loginId, 'password' : password, latitude : '', longitude : '' };*/
    AuthenticationService.prototype.loginServiceAuthenticateUser = function (loginModel) {
        var body = { 'loginId': loginModel.loginId, 'password': loginModel.password, latitude: loginModel.latitude, longitude: loginModel.longitude };
        ;
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers, method: 'post' });
        try {
            return this._http.post(this.loginAuthenticationUrl, body, options);
        }
        catch (e) {
            console.log('invalid auth');
        }
    };
    AuthenticationService.prototype.logOutServiceAuthenticateUser = function () {
        return this._http.post(this.logoutAuthenticationUrl, null, { jsonData: {}, headers: new http_1.Headers({ 'Content-Type': 'application/json;charset=UTF-8' }) });
    };
    AuthenticationService = __decorate([
        core_1.Injectable()
    ], AuthenticationService);
    return AuthenticationService;
}());
exports.AuthenticationService = AuthenticationService;
