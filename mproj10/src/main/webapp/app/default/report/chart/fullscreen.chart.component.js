"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var ReportChartFullScreenComponent = (function () {
    function ReportChartFullScreenComponent() {
    }
    ReportChartFullScreenComponent.prototype.ngOnInit = function () {
        this.chartId = Math.random();
        new WOW().init();
    };
    ReportChartFullScreenComponent.prototype.ngAfterViewInit = function () {
    };
    ReportChartFullScreenComponent.prototype.getChartTitle = function () {
        return (this.chartJson && this.chartJson.chartTitle) ? this.chartJson.chartTitle : "Chart Title";
    };
    ReportChartFullScreenComponent.prototype.openChartInFullscreen = function (chartJson) {
        this.chartJson = chartJson;
        this.chartJson["renderAt"] = "chartContainer" + this.chartId;
        chartJson.width = "1000";
        chartJson.height = "800";
        var reportChart = new FusionCharts(this.chartJson);
        reportChart.render();
        $(chartFullScreenModal).modal('show');
    };
    __decorate([
        core_1.Input()
    ], ReportChartFullScreenComponent.prototype, "reportComponent");
    __decorate([
        core_1.Input()
    ], ReportChartFullScreenComponent.prototype, "chartTitle");
    ReportChartFullScreenComponent = __decorate([
        core_1.Component({
            selector: 'report-chart-fullscreen-component',
            template: "\n\n    <div class=\"modal fade\" id=\"chartFullScreenModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\n    <div class=\"modal-dialog modal-lg\" role=\"document\">\n        <!--Content-->\n        <div class=\"modal-content\" >\n            <!--Header-->\n            <div class=\"modal-header\">\n                {{chartId}}\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                    <span aria-hidden=\"true\">&times;</span>\n                </button>\n            </div>\n            <div  class=\"card\" style=\"height: auto;width: auto;\" id=\"chartContainer{{chartId}}\" class=\"wow\"></div>\n        </div>\n    </div>\n    </div>\n",
            stylesUrl: ['app/../components/report/report.css']
        })
    ], ReportChartFullScreenComponent);
    return ReportChartFullScreenComponent;
}());
exports.ReportChartFullScreenComponent = ReportChartFullScreenComponent;
