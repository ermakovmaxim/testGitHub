"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var date_input_1 = require("../../../../components/dateinput/date.input");
var ReportDateRangeComponent = (function () {
    function ReportDateRangeComponent() {
        this.fromConfig = new date_input_1.DateInputConfiguration(false, false, true, false, "Please select From date", false);
        this.toConfig = new date_input_1.DateInputConfiguration(false, false, true, false, "Please select To date", false);
    }
    ReportDateRangeComponent.prototype.ngOnInit = function () {
    };
    ReportDateRangeComponent.prototype.getFromValue = function (value) {
        console.log("From Date" + value);
    };
    ReportDateRangeComponent.prototype.getToValue = function (value) {
        console.log("From Date" + value);
    };
    __decorate([
        core_1.Input()
    ], ReportDateRangeComponent.prototype, "queryCriteriaModel");
    ReportDateRangeComponent = __decorate([
        core_1.Component({
            selector: 'report-daterange-component',
            template: "<div>\n       \n        <date-input\n            [column]=\"'6'\" \n            [label]=\"From\" \n            [widgetConfig]=\"fromConfig\" \n            (selectedvalue)=\"getFromValue($event)\" \n            \n        > </date-input>\n         <date-input\n            [column]=\"'6'\" \n            [label]=\"To\" \n            [widgetConfig]=\"toConfig\" \n            (selectedvalue)=\"getToValue($event)\" \n            \n        > </date-input>\n</div>"
        })
    ], ReportDateRangeComponent);
    return ReportDateRangeComponent;
}());
exports.ReportDateRangeComponent = ReportDateRangeComponent;
