"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * Created by pratik on 16/8/16.
 */
var core_1 = require('@angular/core');
var forms_1 = require("@angular/forms");
var core_2 = require("@angular/core");
var forms_2 = require("@angular/forms");
var style_constants_1 = require("../style.constants");
var noop = function () { };
var CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR = new core_2.Provider(forms_2.NG_VALUE_ACCESSOR, {
    useExisting: core_2.forwardRef(function () { return TimeInput; }),
    multi: true
});
var TimeInput = (function () {
    function TimeInput() {
        // --- CUSTOM VALUE ACCESSOR CODE ---
        //The internal data model
        this._value = '';
        //Placeholders for the callbacks
        this._onTouchedCallback = noop;
        this._onChangeCallback = noop;
    }
    TimeInput.prototype.ngOnInit = function () {
        this.widgetStyleClassName = style_constants_1.BASIC_WIDGETSTYLE_CLASS + this.column;
    };
    TimeInput.prototype.ngAfterViewInit = function () {
        $('.timepicker').pickatime({
            twelvehour: true
        });
    };
    Object.defineProperty(TimeInput.prototype, "value", {
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
    TimeInput.prototype.onTouched = function () {
        this._onTouchedCallback();
    };
    //From ControlValueAccessor interface
    TimeInput.prototype.writeValue = function (value) {
        this._value = value;
    };
    //From ControlValueAccessor interface
    TimeInput.prototype.registerOnChange = function (fn) {
        this._onChangeCallback = fn;
    };
    //From ControlValueAccessor interface
    TimeInput.prototype.registerOnTouched = function (fn) {
        this._onTouchedCallback = fn;
    };
    __decorate([
        core_1.Input()
    ], TimeInput.prototype, "label");
    __decorate([
        core_1.Input()
    ], TimeInput.prototype, "elementId");
    __decorate([
        core_1.Input()
    ], TimeInput.prototype, "regex");
    __decorate([
        core_1.Input()
    ], TimeInput.prototype, "column");
    __decorate([
        core_1.Input()
    ], TimeInput.prototype, "widgetConfig");
    TimeInput = __decorate([
        core_1.Component({
            selector: 'time-input',
            template: "      \n           <div [class]=\"widgetStyleClassName\">\n             <div class=\"md-form\">\n                <input type=\"text\" [(ngModel)]=\"value\" [attr.id]=\"elementId\" class=\"form-control timepicker\">\n                <label [ngClass]=\"{'active': value , '': value}\" [attr.for]=\"elementId\">{{label}}</label>\n             </div>\n           </div>   \n\n",
            directives: [forms_1.FORM_DIRECTIVES],
            providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR]
        })
    ], TimeInput);
    return TimeInput;
}());
exports.TimeInput = TimeInput;
/**
 * Used to configure Widgets changable properties
 * Constructor sequence 1. disbaled 2.Hidden 3.required 4. readOnly 5. minLength 6. maxLength
 */
var TimeInputConfiguration = (function () {
    function TimeInputConfiguration(hidden, disabled, readOnly, required, minLength, maxLength, errorMessage) {
        this.hidden = hidden;
        this.disabled = disabled;
        this.readOnly = readOnly;
        this.required = required;
        this.minLength = minLength;
        this.maxLength = maxLength;
        this.errorMessage = errorMessage;
    }
    return TimeInputConfiguration;
}());
exports.TimeInputConfiguration = TimeInputConfiguration;
