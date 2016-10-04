"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * Created by pratik on 16/9/16.
 */
var core_1 = require('@angular/core');
var style_constants_1 = require("../style.constants");
var RadioGroupInputComponent = (function () {
    function RadioGroupInputComponent(groupDataService) {
        this.groupDataService = groupDataService;
        this.selectedData = new core_1.EventEmitter();
        this.groupClassId = Math.floor(Math.random() * 90000) + 10000;
    }
    RadioGroupInputComponent.prototype.ngOnInit = function () {
        this.widgetStyleClassName = style_constants_1.BASIC_WIDGETSTYLE_CLASS + this.column;
    };
    RadioGroupInputComponent.prototype.ngOnChanges = function (change) {
        var data = change['localData'].currentValue;
        if (data != null) {
            this.setData(change['localData'].currentValue);
        }
        debugger;
        var pre = change['preSelected'].currentValue;
        if (pre != null) {
            this.setDefault = true;
        }
    };
    RadioGroupInputComponent.prototype.ngAfterViewInit = function () {
        if (this.serviceurl != null)
            this.loadData();
        if (this.setDefault)
            this.setDefaultSelected();
    };
    RadioGroupInputComponent.prototype.loadData = function () {
        this.groupDataService.getData(this, "setData", this.serviceurl, this.methodType);
    };
    RadioGroupInputComponent.prototype.setSelectedValue = function (row) {
        var valueFieldKey = this.widgetConfig.valueField;
        var result = (_a = {}, _a[valueFieldKey] = row[this.widgetConfig.valueField], _a);
        this.selectedData.emit(result);
        var _a;
    };
    RadioGroupInputComponent.prototype.setData = function (data) {
        this.response = data;
        this.rows = data.response.data;
    };
    RadioGroupInputComponent.prototype.setDefaultSelected = function () {
        var radios = document.getElementsByClassName('with-gap ' + this.groupClassId);
        for (var i = 0; i < radios.length; i++) {
            if (radios[i].value == this.preSelected) {
                radios[i].setAttribute('checked', 'checked');
            }
        }
    };
    __decorate([
        core_1.Input()
    ], RadioGroupInputComponent.prototype, "column");
    __decorate([
        core_1.Input()
    ], RadioGroupInputComponent.prototype, "widgetConfig");
    __decorate([
        core_1.Input()
    ], RadioGroupInputComponent.prototype, "groupName");
    __decorate([
        core_1.Input()
    ], RadioGroupInputComponent.prototype, "methodType");
    __decorate([
        core_1.Input()
    ], RadioGroupInputComponent.prototype, "serviceurl");
    __decorate([
        core_1.Input()
    ], RadioGroupInputComponent.prototype, "localData");
    __decorate([
        core_1.Input()
    ], RadioGroupInputComponent.prototype, "preSelected");
    __decorate([
        core_1.Output()
    ], RadioGroupInputComponent.prototype, "selectedData");
    RadioGroupInputComponent = __decorate([
        core_1.Component({
            selector: 'radio-group-input',
            template: "\n    \n     <div [class]=\"widgetStyleClassName\">\n           <span  *ngFor=\"let row of rows let rowIndex = index\">\n                    <input [attr.name]=\"groupName\" type=\"radio\" class=\"with-gap {{groupClassId}}\" id=\"{{rowIndex}}{{row[widgetConfig.valueField]}}{{row[widgetConfig.displayField]}}\" [attr.value] =\"row[widgetConfig.valueField]\" (change)=\"setSelectedValue(row)\">\n                    <label [attr.for]=\"rowIndex+row[widgetConfig.valueField]+row[widgetConfig.displayField]\">{{row[widgetConfig.displayField]}}</label>            \n           </span>\n     </div>\n     \n"
        })
    ], RadioGroupInputComponent);
    return RadioGroupInputComponent;
}());
exports.RadioGroupInputComponent = RadioGroupInputComponent;
var RadioGroupInputConfiguration = (function () {
    function RadioGroupInputConfiguration(displayField, valueField, hidden, disabled, required, errorMessage) {
        this.displayField = displayField;
        this.valueField = valueField;
        this.hidden = hidden;
        this.disabled = disabled;
        this.required = required;
        this.errorMessage = errorMessage;
    }
    return RadioGroupInputConfiguration;
}());
exports.RadioGroupInputConfiguration = RadioGroupInputConfiguration;
/**
 * Usage
 * <radio-group-input [column]="'12'" [widgetConfig]="radioGroupConfig" [groupName]="'transport'" (selectedData)="transportMode = $event" [serviceurl]="'secure/Country/findAll'" [methodType]="'get'" [localData]="countryData"></radio-group-input>
 * <radio-group-input [groupName]="gender" (selectedData)="userData.genderId = $event" [column]="'6'" [widgetConfig]="radioGroupConfig" [localData]="radioObject"  ></radio-group-input>
 */
