"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var router_1 = require("@angular/router");
var first_component_1 = require("./first.component");
var password_input_1 = require("../../components/passwordinput/password.input");
var email_input_1 = require("../../components/emailinput/email.input");
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var http_1 = require("@angular/http");
var first_service_1 = require("./first.service");
var FirstModule = (function () {
    function FirstModule() {
    }
    FirstModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, router_1.RouterModule, forms_1.FormsModule, http_1.HttpModule,
                router_1.RouterModule.forChild([
                    { path: '', component: first_component_1.FirstComponent }
                ])
            ],
            providers: [first_service_1.FirstService],
            declarations: [first_component_1.FirstComponent, email_input_1.EmailInput, password_input_1.PasswordInput]
        })
    ], FirstModule);
    return FirstModule;
}());
exports.FirstModule = FirstModule;
