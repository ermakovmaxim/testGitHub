"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var ReportIndividualChartComponent = (function () {
    function ReportIndividualChartComponent() {
        // @Input() reportComponent:Object;
        // @Input() chartComponent:Object;
        this.fullScreenEmitter = new core_1.EventEmitter();
    }
    ReportIndividualChartComponent.prototype.ngOnInit = function () {
        this.chartId = Math.random();
        new WOW().init();
    };
    ReportIndividualChartComponent.prototype.ngAfterViewInit = function () {
        if (this.chartJson) {
            this.chartJson["renderAt"] = "chartContainer" + this.chartId;
            var reportChart = new FusionCharts(this.chartJson);
            reportChart.setChartAttribute("width", "100%");
            reportChart.setChartAttribute("height", "100%");
            reportChart.render();
        }
    };
    ReportIndividualChartComponent.prototype.onFullScreenClick = function () {
        this.fullScreenEmitter.emit(this.chartJson);
        //this.reportComponent.reportChartFullScreenComponent.openChartInFullscreen(this.chartJson);
        //this.chartComponent.openChartInFullscreen(this.chartJson);
    };
    __decorate([
        core_1.Input()
    ], ReportIndividualChartComponent.prototype, "chartJson");
    __decorate([
        core_1.Output()
    ], ReportIndividualChartComponent.prototype, "fullScreenEmitter");
    ReportIndividualChartComponent = __decorate([
        core_1.Component({
            selector: 'report-individual-chart-component',
            template: "\n    <div class=\"col-lg-6\">\n<div class=\"card\">\n    \n    <div class=\"card-block\">\n    \n          <!--  data-toggle=\"modal\" data-target=\"#chartFullScreenModal\" -->\n       <!-- <h4 class=\"card-title\"><b>{{chartJson.chartTitle}}</b></h4>\n           --> <span style=\"float: right;\"><a class =\"open-AddBookDialog\" idNo = \"0929\" (click)=\"onFullScreenClick()\"><i class=\"fa fa-arrows\"></i></a></span>\n\n    <div class=\"view overlay hm-white-slight\">\n       <div  class=\"card\" id=\"chartContainer{{chartId}}\" class=\"wow fadeInUp\"></div>   \n        <a>\n            <div class=\"mask\"></div>\n        </a>\n    </div>\n     </div>\n    \n</div>\n\n</div>\n\n",
            directives: []
        })
    ], ReportIndividualChartComponent);
    return ReportIndividualChartComponent;
}());
exports.ReportIndividualChartComponent = ReportIndividualChartComponent;
