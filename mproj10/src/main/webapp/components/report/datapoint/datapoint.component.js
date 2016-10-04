"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var http_1 = require("@angular/http");
var datapoint_service_1 = require("./datapoint.service");
var ReportDataPointComponent = (function () {
    function ReportDataPointComponent(reportDataPointService) {
        this.reportDataPointService = reportDataPointService;
        this.dataPointStyle = ["btn-success", "btn-orange", "btn-deep-purple", "btn-yellow", "btn-amber", "btn-orange", "btn-danger"];
    }
    ReportDataPointComponent.prototype.ngOnInit = function () {
    };
    ReportDataPointComponent.prototype.ngAfterViewInit = function () {
    };
    ReportDataPointComponent.prototype.loadcomponent = function () {
        this.reportDataPointService.getDataPoints(this, this.reportId);
    };
    __decorate([
        core_1.Input()
    ], ReportDataPointComponent.prototype, "dataPointData");
    __decorate([
        core_1.Input()
    ], ReportDataPointComponent.prototype, "reportId");
    ReportDataPointComponent = __decorate([
        core_1.Component({
            selector: 'report-datapoint-component',
            template: "  <div class=\"col-lg-12\">\n           \n<span  *ngFor=\"let dp of dataPointData; let j = index;\">\n         <div><b>{{dp.label}}</b></div>\n        <span class=\"datapoint-panel\" *ngFor=\"let val of dp.value;let i = index\">\n            <span>\n            <button type=\"button\" class=\"btn {{dataPointStyle[i]}}\"> <b>{{val.statistic}}</b><br>{{val.description}} </button>\n            </span>\n        </span>\n    </span>\n    </div>\n    ",
            providers: [http_1.HTTP_PROVIDERS, datapoint_service_1.ReportDataPointService]
        })
    ], ReportDataPointComponent);
    return ReportDataPointComponent;
}());
exports.ReportDataPointComponent = ReportDataPointComponent;
