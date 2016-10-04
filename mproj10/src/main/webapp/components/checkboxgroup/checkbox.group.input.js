"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * Created by patrick on 15/9/16.
 */
var core_1 = require('@angular/core');
var style_constants_1 = require("../style.constants");
var CheckBoxGroupComponent = (function () {
    function CheckBoxGroupComponent(checkboxService) {
        this.checkboxService = checkboxService;
        this.selectedData = new core_1.EventEmitter();
        this.groupClassId = Math.floor(Math.random() * 90000) + 10000;
        this.selectedCheckBoxes = [];
    }
    CheckBoxGroupComponent.prototype.ngOnInit = function () {
        this.widgetStyleClassName = style_constants_1.BASIC_WIDGETSTYLE_CLASS + this.column;
    };
    CheckBoxGroupComponent.prototype.ngOnChanges = function (change) {
        var data = change['localData'].currentValue;
        if (data && data.response) {
            this.setData(change['localData'].currentValue);
        }
        if (change['preSelected']) {
            var defaultselected = change['preSelected'].currentValue;
            if (defaultselected != null)
                this.setDefaultSelected();
        }
    };
    CheckBoxGroupComponent.prototype.ngAfterViewInit = function () {
        if (this.serviceurl != null)
            this.loadData();
        if (this.preSelected != null)
            this.setDefaultSelected();
    };
    CheckBoxGroupComponent.prototype.setData = function (responseData) {
        this.response = responseData.response;
        this.rows = this.response.data;
    };
    CheckBoxGroupComponent.prototype.loadData = function () {
        this.checkboxService.getData(this, "setData", this.serviceurl, "get");
    };
    CheckBoxGroupComponent.prototype.setSelectedValue = function (row) {
        // Need to maintain an array of pushed checks
        var checkboxes = document.getElementsByClassName('filled-in ' + this.groupClassId);
        this.selectedCheckBoxes = [];
        if (checkboxes != null) {
            for (var i = 0; i < checkboxes.length; i++) {
                if (checkboxes[i].checked)
                    this.selectedCheckBoxes.push((_a = {}, _a[this.widgetConfig.valueField] = checkboxes[i].value, _a));
            }
        }
        this.selectedData.emit(this.selectedCheckBoxes);
        var _a;
    };
    CheckBoxGroupComponent.prototype.setDefaultSelected = function () {
        console.log('Checked');
        var checkboxes = document.getElementsByClassName('filled-in ' + this.groupClassId);
        this.preSelected.forEach(function (value) {
            for (var i = 0; i < checkboxes.length; i++) {
                if (checkboxes[i].value == value) {
                    console.log(checkboxes[i]);
                    checkboxes[i].setAttribute('checked', true);
                }
            }
        });
    };
    __decorate([
        core_1.Input()
    ], CheckBoxGroupComponent.prototype, "column");
    __decorate([
        core_1.Input()
    ], CheckBoxGroupComponent.prototype, "widgetConfig");
    __decorate([
        core_1.Input()
    ], CheckBoxGroupComponent.prototype, "methodType");
    __decorate([
        core_1.Input()
    ], CheckBoxGroupComponent.prototype, "serviceurl");
    __decorate([
        core_1.Input()
    ], CheckBoxGroupComponent.prototype, "localData");
    __decorate([
        core_1.Input()
    ], CheckBoxGroupComponent.prototype, "preSelected");
    __decorate([
        core_1.Output()
    ], CheckBoxGroupComponent.prototype, "selectedData");
    CheckBoxGroupComponent = __decorate([
        core_1.Component({
            selector: 'checkbox-group',
            template: "\n\n    <div [class]=\"widgetStyleClassName\">\n           <span  *ngFor=\"let row of rows let rowIndex = index\">\n           <div [class]=\"widgetStyleClassName\">\n                    <input type=\"checkbox\" class=\"filled-in {{groupClassId}}\" id=\"{{rowIndex}}{{row[widgetConfig.valueField]}}{{row[widgetConfig.displayField]}}\" [attr.value] =\"row[widgetConfig.valueField]\" (change)=\"setSelectedValue(row)\">\n                    <label [attr.for]=\"rowIndex+row[widgetConfig.valueField]+row[widgetConfig.displayField]\">{{row[widgetConfig.displayField]}}</label>            \n           </div>\n           </span>\n     </div>\n\n"
        })
    ], CheckBoxGroupComponent);
    return CheckBoxGroupComponent;
}());
exports.CheckBoxGroupComponent = CheckBoxGroupComponent;
var CheckBoxGroupConfiguration = (function () {
    function CheckBoxGroupConfiguration(displayField, valueField, hidden, disabled, required, errorMessage) {
        this.displayField = displayField;
        this.valueField = valueField;
        this.hidden = hidden;
        this.disabled = disabled;
        this.required = required;
        this.errorMessage = errorMessage;
    }
    return CheckBoxGroupConfiguration;
}());
exports.CheckBoxGroupConfiguration = CheckBoxGroupConfiguration;
/**
 * Usage
 *  <checkbox-group [serviceurl]="'secure/Title/findAll'" [methodType]="'get'" [column]="'6'" [widgetConfig]="checkboxConfig" [localData]="checkBoxData" [preSelected]="checkBoxData"></checkbox-group>-->
 **/
