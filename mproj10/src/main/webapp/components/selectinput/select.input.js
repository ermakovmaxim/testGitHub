"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var style_constants_1 = require("../style.constants");
var forms_1 = require("@angular/forms");
var select_input_service_1 = require("./select.input.service");
var noop = function () { };
var CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR = new core_1.Provider(forms_1.NG_VALUE_ACCESSOR, {
    useExisting: core_1.forwardRef(function () { return SelectInput; }),
    multi: true
});
var SelectInput = (function () {
    function SelectInput(selectFieldService) {
        this.selectFieldService = selectFieldService;
        this.selectedData = new core_1.EventEmitter();
        // --- CUSTOM VALUE ACCESSOR CODE ---
        //The internal data model
        this._value = '';
        //Placeholders for the callbacks
        this._onTouchedCallback = noop;
        this._onChangeCallback = noop;
    }
    SelectInput.prototype.ngOnChanges = function (change) {
        var data = change['localdata'].currentValue;
        if (data && data.response) {
            this.setData(change['localdata'].currentValue);
        }
    };
    SelectInput.prototype.ngOnInit = function () {
        this.widgetStyleClassName = style_constants_1.BASIC_WIDGETSTYLE_CLASS + this.column;
        this.materialSelectClass = style_constants_1.SELECT_BASE_CLASS;
        this.elementId = Math.floor(Math.random() * 90000) + 10000;
        this.widgetConfig.elementId = this.elementId;
    };
    SelectInput.prototype.ngAfterViewInit = function () {
        if (this.serviceurl != null)
            this.loadData();
    };
    SelectInput.prototype.loadData = function () {
        this.selectFieldService.getData(this, "setData", this.serviceurl, "get");
    };
    SelectInput.prototype.setData = function (data) {
        this.response = data;
        this.rows = data.response.data;
    };
    SelectInput.prototype.setRowData = function (row) {
        this.selectedRow = row;
    };
    /**
     * Checks the validity of the input field
     * @param event
     */
    SelectInput.prototype.validateInput = function (event) {
        var _this = this;
        if (document.getElementById(this.elementId).validity.valid) {
            this.widgetConfig.validState = true;
            var valueField_1 = this.widgetConfig.valueField;
            this.rows.forEach(function (row) {
                if (row[valueField_1] == event.target.value)
                    _this.selectedRow = row;
            });
            this.selectedData.emit({ value: event.target.value, data: this.selectedRow, rows: this.rows });
        }
        else {
            toastr.error(this.widgetConfig.errorMessage);
            this.widgetConfig.validState = false;
        }
    };
    Object.defineProperty(SelectInput.prototype, "value", {
        //get accessor
        get: function () { return this._value; },
        //set accessor including call the onchange callback
        set: function (v) {
            if (v !== this._value) {
                this._value = v;
                this._onChangeCallback(v);
            }
        },
        enumerable: true,
        configurable: true
    });
    ;
    //Set touched on blur
    SelectInput.prototype.onTouched = function (event) {
        this.validateInput(event);
        this._onTouchedCallback();
    };
    //From ControlValueAccessor interface
    SelectInput.prototype.writeValue = function (value) {
        var _this = this;
        if (value != null) {
            var valueField_2 = this.widgetConfig.valueField;
            this.rows.forEach(function (row) {
                if (row[valueField_2] == value)
                    _this.selectedRow = row;
            });
            this.selectedData.emit({ value: value, data: this.selectedRow });
        }
        this._value = value;
    };
    //From ControlValueAccessor interface
    SelectInput.prototype.registerOnChange = function (fn) {
        this._onChangeCallback = fn;
    };
    //From ControlValueAccessor interface
    SelectInput.prototype.registerOnTouched = function (fn) {
        this._onTouchedCallback = fn;
    };
    __decorate([
        core_1.Input()
    ], SelectInput.prototype, "label");
    __decorate([
        core_1.Input()
    ], SelectInput.prototype, "column");
    __decorate([
        core_1.Input()
    ], SelectInput.prototype, "widgetConfig");
    __decorate([
        core_1.Output()
    ], SelectInput.prototype, "selectedData");
    __decorate([
        core_1.Input()
    ], SelectInput.prototype, "localdata");
    __decorate([
        core_1.Input()
    ], SelectInput.prototype, "serviceurl");
    __decorate([
        core_1.Input()
    ], SelectInput.prototype, "methodType");
    SelectInput = __decorate([
        core_1.Component({
            selector: 'select-input',
            template: "\n                 <div [class]=\"widgetStyleClassName\" [ngClass]=\"{'hiddendiv': widgetConfig.hidden , '':!widgetConfig.hidden}\" >\n                    <label  [ngClass]=\"{'active': value , '': value}\" [attr.for]=\"elementId\">{{label}}</label>\n                    <div class=\"custom-select\">\n                    <select  class=\"browser-default\"  (change)=\"validateInput($event)\" [attr.id]=\"elementId\" [(ngModel)]=\"value\" (blur)=\"onTouched($event)\" [attr.disabled]=\"widgetConfig.disabled ? true : null\" [required]=\"widgetConfig.required ? true: null\" >\n                        <option value=\"\" disabled selected>Choose your option</option>\n                        <option  *ngFor=\"let row of rows let rowIndex = index \" value = \"{{row[widgetConfig.valueField]}}\" (click)=\"setRowData(row)\" > {{row[widgetConfig.displayField]}}</option>\n                    </select>\n                    </div>                      \n                  </div>\n",
            directives: [forms_1.FORM_DIRECTIVES],
            providers: [http_1.HTTP_PROVIDERS, select_input_service_1.SelectInputService, CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR]
        })
    ], SelectInput);
    return SelectInput;
}());
exports.SelectInput = SelectInput;
/**
 * Used to configure Widgets changable properties
 * Constructor sequence 1. disbaled 2.Hidden 3.required 4. readOnly 5. minLength 6. maxLength 7.error message
 */
var SelectInputConfiguration = (function () {
    function SelectInputConfiguration(hidden, disabled, required, errorMessage, displayField, valueField) {
        this.hidden = hidden;
        this.disabled = disabled;
        this.required = required;
        this.errorMessage = errorMessage;
        this.displayField = displayField;
        this.valueField = valueField;
    }
    return SelectInputConfiguration;
}());
exports.SelectInputConfiguration = SelectInputConfiguration;
/**
 *

 <select-field [(ngModel)]="stateModel.countryId" [serviceurl]="'secure/Country/findAll'" [methodType]="'get'"
 name="stateModel.countryId" [column]="'4'" [label]="'Country'" [widgetConfig]="countryIdConfig" (selectedData)="selectCountryData($event)" [ddata] ="countryIdddata" ></select-field>

 <select-field [(ngModel)]="stateModel.stateIds"
 name="stateModel.stateIds" [column]="'4'" [label]="'States'" [widgetConfig]="stateIdsConfig" (selectedData)="selectStateData($event)" [ddata] ="stateIdddata" ></select-field>

 *
 */
