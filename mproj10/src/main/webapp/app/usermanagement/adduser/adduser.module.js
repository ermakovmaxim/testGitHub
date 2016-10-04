"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var router_1 = require("@angular/router");
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var http_1 = require("@angular/http");
var adduser_component_1 = require("./adduser.component");
var viewuser_component_1 = require("../viewuser/viewuser.component");
var adduser_service_1 = require("./adduser.service");
var widget_shared_module_1 = require("../../../components/widget.shared.module");
var AddUserModule = (function () {
    function AddUserModule() {
    }
    AddUserModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, router_1.RouterModule, forms_1.FormsModule, http_1.HttpModule, widget_shared_module_1.WidgetModule,
                router_1.RouterModule.forChild([
                    { path: '', component: adduser_component_1.AddUserComponent }
                ])
            ],
            providers: [adduser_service_1.AddUserService],
            declarations: [adduser_component_1.AddUserComponent, viewuser_component_1.ViewUserComponent]
        })
    ], AddUserModule);
    return AddUserModule;
}());
exports.AddUserModule = AddUserModule;
