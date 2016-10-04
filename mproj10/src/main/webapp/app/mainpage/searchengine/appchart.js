"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * Created by viral on 7/9/16.
 */
var core_1 = require('@angular/core');
var AppChart = (function () {
    function AppChart() {
    }
    AppChart.prototype.ngOnInit = function () {
        this.chartId = Math.random();
        new WOW().init();
    };
    AppChart.prototype.ngAfterViewInit = function () {
        if (this.chartData != null && this.chartData.chartJson != null) {
            var dataSource = {
                chart: this.chartData.chartJson.dataSource.chart,
                data: this.chartData.chartJson.dataSource.data,
                categories: this.chartData.chartJson.dataSource.categories,
                dataset: this.chartData.chartJson.dataSource.dataset
            };
            var dataJson = {
                "type": this.chartData.chartJson.type,
                "renderAt": "chartContainer" + this.chartId,
                "width": "330",
                "height": this.chartData.chartJson.height,
                "dataFormat": "json",
                "dataSource": dataSource
            };
            var revenueChart = new FusionCharts(dataJson);
            revenueChart.render();
        }
    };
    __decorate([
        core_1.Input()
    ], AppChart.prototype, "chartData");
    AppChart = __decorate([
        core_1.Component({
            selector: 'app-chart',
            template: "   \n          \n    <div class=\"col-lg-6\">\n        <div  class=\"card\" id=\"chartContainer{{chartId}}\" class=\"wow fadeInUp\"></div>              \n    </div>\n\n"
        })
    ], AppChart);
    return AppChart;
}());
exports.AppChart = AppChart;
