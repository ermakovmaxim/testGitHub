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
    useExisting: core_2.forwardRef(function () { return ToggleInput; }),
    multi: true
});
var ToggleInput = (function () {
    function ToggleInput() {
        // --- CUSTOM VALUE ACCESSOR CODE ---
        //The internal data model
        this._value = '';
        //Placeholders for the callbacks
        this._onTouchedCallback = noop;
        this._onChangeCallback = noop;
    }
    ToggleInput.prototype.ngOnInit = function () {
        this.widgetStyleClassName = style_constants_1.BASIC_WIDGETSTYLE_CLASS + this.column;
    };
    ToggleInput.prototype.ngAfterViewInit = function () {
    };
    Object.defineProperty(ToggleInput.prototype, "value", {
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
    ToggleInput.prototype.onTouched = function () {
        this._onTouchedCallback();
    };
    //From ControlValueAccessor interface
    ToggleInput.prototype.writeValue = function (value) {
        this._value = value;
    };
    //From ControlValueAccessor interface
    ToggleInput.prototype.registerOnChange = function (fn) {
        this._onChangeCallback = fn;
    };
    //From ControlValueAccessor interface
    ToggleInput.prototype.registerOnTouched = function (fn) {
        this._onTouchedCallback = fn;
    };
    __decorate([
        core_1.Input()
    ], ToggleInput.prototype, "label");
    __decorate([
        core_1.Input()
    ], ToggleInput.prototype, "regex");
    __decorate([
        core_1.Input()
    ], ToggleInput.prototype, "column");
    __decorate([
        core_1.Input()
    ], ToggleInput.prototype, "widgetConfig");
    ToggleInput = __decorate([
        core_1.Component({
            selector: 'toggle-input',
            template: "              \n              <div [class]=\"widgetStyleClassName\" [ngClass]=\"{'hiddendiv': widgetConfig.hidden , '':!widgetConfig.hidden}\">\n                   <div class=\"switch\">\n                    <label>\n                      Off\n                      <input type=\"checkbox\" [(ngModel)]=\"value\" (blur)=\"onTouched()\" [attr.disabled]=\"widgetConfig.disabled ? true : null\" [checked]=\"widgetConfig.checked\">\n                      <span class=\"lever\"></span>\n                      On\n                    </label>\n                   </div>\n              </div>\n",
            directives: [forms_1.FORM_DIRECTIVES],
            providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR]
        })
    ], ToggleInput);
    return ToggleInput;
}());
exports.ToggleInput = ToggleInput;
var ToggleInputConfiguration = (function () {
    function ToggleInputConfiguration(hidden, disabled, checked, required) {
        this.hidden = hidden;
        this.disabled = disabled;
        this.checked = checked;
        this.required = required;
    }
    return ToggleInputConfiguration;
}());
exports.ToggleInputConfiguration = ToggleInputConfiguration;
