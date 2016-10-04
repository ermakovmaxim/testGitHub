"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var login_model_1 = require("./login.model");
var LoginComponent = (function () {
    function LoginComponent(authObj, router) {
        this.authObj = authObj;
        this.router = router;
        this.checkArray = [];
        this.logincredentials = new login_model_1.loginCredentials('', '', '', '');
    }
    LoginComponent.prototype.ngOnInit = function () { };
    LoginComponent.prototype.authenticteUser = function () {
        var _this = this;
        console.warn('check');
        console.log(this.logincredentials);
        this.authObj.loginServiceAuthenticateUser(this.logincredentials).subscribe(function (response) {
        }, function (error) {
            console.log('error');
            document.getElementById("errorMsg").style.display = "block";
            document.getElementById("progressBar").style.display = "none";
            //  setTimeout(()=>{ document.getElementById("errorMsg").style.display = "none";this.fieldControl = null},1000);
        }, function () {
            document.getElementById("progressBar").style.display = "block";
            _this.fieldControl = true;
            _this.router.navigate(['/mainpage']);
        });
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'login',
            templateUrl: 'app/login/login.html'
        })
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
