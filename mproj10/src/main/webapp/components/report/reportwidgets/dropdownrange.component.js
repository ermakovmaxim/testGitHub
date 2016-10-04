"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var selectfield_select_1 = require("../../../../components/selectinput/selectfield.select");
var RangeDropDownComponent = (function () {
    function RangeDropDownComponent() {
        this.fromData = [];
        this.toData = [];
        this.widgetConfig = {
            "xtype": "dropdownrange",
            "fromName": "cityName",
            "toName": "cityName1",
            "datatype": "INT",
            "fromFieldLabel": "cityName",
            "toFieldLabel": "cityName",
            "displayField": "primaryDisplay",
            "valueField": "primaryKey",
            "widgetId": 7,
            "serviceId": "1D6CBFD8-0890-40E5-87D8-EDF7F7147FFB",
            "serviceOpId": "C52FC1FA-812C-4578-B076-D013FC213E5F",
            "defaultValue": "",
            "toDefaultValue": "",
            "parentWidget": 0,
            "serviceUrl": "secure/City/findAll",
            "index": ""
        };
        this.fromData = [];
        this.toData = [];
        this.fromConfig = new selectfield_select_1.SelectFieldInputConfiguration(this.widgetConfig.displayField, this.widgetConfig.valueField, false, false, true, 'Please select ' + this.widgetConfig.fromName);
        this.toConfig = new selectfield_select_1.SelectFieldInputConfiguration(this.widgetConfig.displayField, this.widgetConfig.valueField, false, false, true, 'Please select ' + this.widgetConfig.toName);
    }
    RangeDropDownComponent.prototype.ngOnInit = function () {
        this.queryCriteriaModelJson = this.queryCriteriaModel.toJson();
    };
    RangeDropDownComponent.prototype.getFromValue = function (value) {
    };
    RangeDropDownComponent.prototype.getToValue = function (value) {
    };
    __decorate([
        core_1.Input()
    ], RangeDropDownComponent.prototype, "queryCriteriaModel");
    RangeDropDownComponent = __decorate([
        core_1.Component({
            selector: 'report-dropdownrange-component',
            template: "\n  \n  {{widgetConfig.fromFieldLabel}} : \n  <select-field  [serviceurl]=\"widgetConfig.serviceUrl\" \n            [methodType]=\"'get'\"\n            [column]=\"'6'\" \n            [label]=\"From\" \n            [widgetConfig]=\"fromConfig\" \n            (selectedData)=\"getFromValue($event)\" \n            [ddata] =\"fromData\"\n            [(ngModel)]=\"queryCriteriaModel[widgetConfig.fromName]\"\n            >\n\n  </select-field>\n  <select-field  [serviceurl]=\"widgetConfig.serviceUrl\" \n            [methodType]=\"'get'\"\n            [column]=\"'6'\" \n            [label]=\"To\" \n            [widgetConfig]=\"toConfig\" \n            (selectedData)=\"getToValue($event)\" \n            [ddata] =\"toData\"\n            [(ngModel)]=\"queryCriteriaModel[widgetConfig.toName]\"\n   >\n  </select-field>\n   ",
            directives: [],
            styles: []
        })
    ], RangeDropDownComponent);
    return RangeDropDownComponent;
}());
exports.RangeDropDownComponent = RangeDropDownComponent;
