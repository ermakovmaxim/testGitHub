"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var forms_1 = require("@angular/forms");
var core_2 = require("@angular/core");
var forms_2 = require("@angular/forms");
var style_constants_1 = require("../style.constants");
var noop = function () { };
var CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR = new core_2.Provider(forms_2.NG_VALUE_ACCESSOR, {
    useExisting: core_2.forwardRef(function () { return RangeInput; }),
    multi: true
});
var RangeInput = (function () {
    function RangeInput() {
        // --- CUSTOM VALUE ACCESSOR CODE ---
        //The internal data model
        this._value = '';
        //Placeholders for the callbacks
        this._onTouchedCallback = noop;
        this._onChangeCallback = noop;
    }
    RangeInput.prototype.ngOnInit = function () {
        this.widgetStyleClassName = style_constants_1.INPUT_RANGE_SELECTOR + this.column;
        this.elementId = style_constants_1.RANGE_INPUT_PREFIX + Math.floor(Math.random() * 90000) + 10000;
    };
    RangeInput.prototype.ngAfterViewInit = function () {
    };
    Object.defineProperty(RangeInput.prototype, "value", {
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
    RangeInput.prototype.onTouched = function (event) {
        this.validateInput(event);
        this._onTouchedCallback();
    };
    //From ControlValueAccessor interface
    RangeInput.prototype.writeValue = function (value) {
        this._value = value;
    };
    //From ControlValueAccessor interface
    RangeInput.prototype.registerOnChange = function (fn) {
        this._onChangeCallback = fn;
    };
    //From ControlValueAccessor interface
    RangeInput.prototype.registerOnTouched = function (fn) {
        this._onTouchedCallback = fn;
    };
    __decorate([
        core_1.Input()
    ], RangeInput.prototype, "label");
    __decorate([
        core_1.Input()
    ], RangeInput.prototype, "minRange");
    __decorate([
        core_1.Input()
    ], RangeInput.prototype, "maxRange");
    __decorate([
        // TODO : from object or static ?
        core_1.Input()
    ], RangeInput.prototype, "rangeStep");
    __decorate([
        core_1.Input()
    ], RangeInput.prototype, "column");
    __decorate([
        core_1.Input()
    ], RangeInput.prototype, "widgetConfig");
    RangeInput = __decorate([
        core_1.Component({
            selector: 'range-input',
            template: "              \n              <div [class]=\"widgetStyleClassName\" [ngClass]=\"{'hiddendiv': widgetConfig.hidden , '':!widgetConfig.hidden}\">\n                    <label [attr.for]=\"elementId\">{{label}}</label>\n                    <input type=\"range\"  [(ngModel)]=\"value\" class=\"form-control validate\" (blur)=\"onTouched($event)\"  [attr.id]=\"elementId\" [attr.min]=\"minRange\" [attr.disabled]=\"widgetConfig.disabled ? true : null\"  [attr.max]=\"maxRange\" [attr.step]=\"rangeStep\">\n              </div>\n",
            directives: [forms_1.FORM_DIRECTIVES],
            providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR]
        })
    ], RangeInput);
    return RangeInput;
}());
exports.RangeInput = RangeInput;
/**
 * Used to configure Widgets changable properties
 *
 */
var RangeInputConfiguration = (function () {
    function RangeInputConfiguration(hidden, disabled, minRange, maxRange, rangeStep) {
        this.hidden = hidden;
        this.disabled = disabled;
        this.minRange = minRange;
        this.maxRange = maxRange;
        this.rangeStep = rangeStep;
    }
    return RangeInputConfiguration;
}());
exports.RangeInputConfiguration = RangeInputConfiguration;
