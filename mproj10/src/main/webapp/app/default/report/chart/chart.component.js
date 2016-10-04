"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var chart_service_1 = require("./chart.service");
var http_1 = require("@angular/http");
var individualchart_component_1 = require("./individualchart.component");
var ReportChartComponent = (function () {
    //  @Input() reportComponent:Object;
    function ReportChartComponent(reportChartService) {
        this.reportChartService = reportChartService;
    }
    ReportChartComponent.prototype.ngOnInit = function () {
    };
    ReportChartComponent.prototype.ngAfterViewInit = function () {
        this.chartId = Math.random();
        new WOW().init();
    };
    ReportChartComponent.prototype.loadcomponent = function () {
        this.reportChartService.getCharts(this, this.reportId);
    };
    ReportChartComponent.prototype.openChartInFullscreen = function (chartJson) {
        chartJson["renderAt"] = "chartFullScreenContainer";
        chartJson.width = "1000";
        chartJson.height = "800";
        var reportChart = new FusionCharts(chartJson);
        reportChart.render();
        $(chartFullScreenModalWindow).modal('show');
    };
    __decorate([
        core_1.Input()
    ], ReportChartComponent.prototype, "reportId");
    ReportChartComponent = __decorate([
        core_1.Component({
            selector: 'report-chart-component',
            template: "  \n    \n <div class=\"modal fade\" id=\"chartFullScreenModalWindow\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\n    <div class=\"modal-dialog modal-lg\" role=\"document\">\n        <!--Content-->\n        <div class=\"modal-content\" >\n            <!--Header-->\n            <div class=\"modal-header\">\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                    <span aria-hidden=\"true\">&times;</span>\n                </button>\n            </div>\n            <div  class=\"card\" style=\"height: auto;width: auto;\" id=\"chartFullScreenContainer\" class=\"wow\"></div>\n        </div>\n    </div>\n    </div>\n    \n     <div *ngFor=\"let ch of chartData\" >\n        <report-individual-chart-component  [chartJson]=\"ch\" (fullScreenEmitter)=\"openChartInFullscreen($event)\"></report-individual-chart-component>\n    </div>\n    \n    ",
            directives: [individualchart_component_1.ReportIndividualChartComponent],
            providers: [http_1.HTTP_PROVIDERS, chart_service_1.ReportChartService]
        })
    ], ReportChartComponent);
    return ReportChartComponent;
}());
exports.ReportChartComponent = ReportChartComponent;
