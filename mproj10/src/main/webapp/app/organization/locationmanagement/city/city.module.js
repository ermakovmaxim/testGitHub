"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var http_1 = require('@angular/http');
var widget_shared_module_1 = require('../../../../components/widget.shared.module');
var city_component_1 = require('./city.component');
var city_service_1 = require('./city.service');
var CityModule = (function () {
    function CityModule() {
    }
    CityModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, http_1.HttpModule, widget_shared_module_1.WidgetModule,
                router_1.RouterModule.forChild([{ path: '', component: city_component_1.CityComponent }])
            ],
            declarations: [city_component_1.CityComponent],
            providers: [city_service_1.CityService]
        })
    ], CityModule);
    return CityModule;
}());
exports.CityModule = CityModule;
