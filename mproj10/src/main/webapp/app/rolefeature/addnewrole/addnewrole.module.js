"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * Created by prasad on 19/9/16.
 */
var core_1 = require('@angular/core');
var router_1 = require("@angular/router");
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var http_1 = require("@angular/http");
var addnewrole_component_1 = require("./addnewrole.component");
var menuTreeStructure_component_1 = require("./menuTreeStructure.component");
var addnewrole_service_1 = require("./addnewrole.service");
var widget_shared_module_1 = require("../../../components/widget.shared.module");
var AddNewRoleModule = (function () {
    function AddNewRoleModule() {
    }
    AddNewRoleModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, router_1.RouterModule, forms_1.FormsModule, http_1.HttpModule, widget_shared_module_1.WidgetModule,
                router_1.RouterModule.forChild([
                    { path: '', component: addnewrole_component_1.AddNewRoleComponent }
                ])
            ],
            providers: [addnewrole_service_1.RoleFeatureServices],
            declarations: [addnewrole_component_1.AddNewRoleComponent, menuTreeStructure_component_1.AllFeatureComponent]
        })
    ], AddNewRoleModule);
    return AddNewRoleModule;
}());
exports.AddNewRoleModule = AddNewRoleModule;
