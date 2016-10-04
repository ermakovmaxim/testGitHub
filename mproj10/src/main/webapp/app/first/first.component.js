"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var first_model_1 = require("./first.model");
var email_input_1 = require("../../components/emailinput/email.input");
var password_input_1 = require("../../components/passwordinput/password.input");
var FirstComponent = (function () {
    function FirstComponent(FirstService) {
        this.FirstService = FirstService;
        this.firstDetails = [];
        this.first = new first_model_1.First();
        this.emailConfig = new email_input_1.EmailInputConfiguration(false, false, false, false, '5', '20', '');
        this.passwordConfig = new password_input_1.PasswordInputConfiguration(false, false, false, false, '4', '20', '');
        this.FirstService.getMainScreenMenu().subscribe(function (response) {
            var res = response.json();
            var check = JSON.parse(res.response.data);
            console.log('first json');
        }, function (error) {
            console.log('first error');
        }, function () {
            console.log('first Submit');
        });
    }
    FirstComponent.prototype.ngOnInit = function () { };
    FirstComponent.prototype.ngAfterViewInit = function () {
        $(document).ready(function () {
            $('.mdb-select').material_select();
        });
        new WOW().init();
    };
    FirstComponent.prototype.submit = function () {
        this.firstDetails.push(this.first);
        console.log(this.firstDetails);
    };
    FirstComponent = __decorate([
        core_1.Component({
            selector: 'info-one',
            templateUrl: 'app/first/first.html'
        })
    ], FirstComponent);
    return FirstComponent;
}());
exports.FirstComponent = FirstComponent;
