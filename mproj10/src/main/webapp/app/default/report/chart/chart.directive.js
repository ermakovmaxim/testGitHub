"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var ChartDirective = (function () {
    function ChartDirective(_viewContainer, _componentFectoryResolver) {
        this._viewContainer = _viewContainer;
        this._componentFectoryResolver = _componentFectoryResolver;
    }
    ChartDirective.prototype.createChartView = function (chartComponent) {
        this._viewContainer.clear();
        var compResolverFectory = this._componentFectoryResolver.resolveComponentFactory(chartComponent);
        var chartComponentRef = this._viewContainer.createComponent(compResolverFectory);
        chartComponentRef.instance.close.subscribe(function () {
            chartComponentRef.destroy();
        });
        return chartComponentRef;
    };
    ChartDirective = __decorate([
        core_1.Directive({
            selector: '[chartDirective]'
        })
    ], ChartDirective);
    return ChartDirective;
}());
exports.ChartDirective = ChartDirective;
