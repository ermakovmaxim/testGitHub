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
    useExisting: core_2.forwardRef(function () { return CheckBoxInput; }),
    multi: true
});
var CheckBoxInput = (function () {
    function CheckBoxInput() {
        // --- CUSTOM VALUE ACCESSOR CODE ---
        //The internal data model
        this._value = '';
        //Placeholders for the callbacks
        this._onTouchedCallback = noop;
        this._onChangeCallback = noop;
    }
    CheckBoxInput.prototype.ngOnInit = function () {
        this.widgetStyleClassName = style_constants_1.BASIC_WIDGETSTYLE_CLASS + this.column;
        this.elementId = Math.floor(Math.random() * 90000) + 10000;
        this.widgetConfig.elementId = this.elementId;
    };
    /**
     * Will remove attributes of pattern matching if null
     */
    CheckBoxInput.prototype.ngAfterViewInit = function () {
        //
    };
    /**
     * Checks the validity of the input field
     * @param event
     */
    CheckBoxInput.prototype.validateInput = function (event) {
        if (document.getElementById(this.elementId).validity.valid) {
            this.widgetConfig.validState = true;
        }
        else {
            toastr.error(this.widgetConfig.errorMessage);
            this.widgetConfig.validState = false;
        }
    };
    Object.defineProperty(CheckBoxInput.prototype, "value", {
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
    CheckBoxInput.prototype.onTouched = function (event) {
        this.validateInput(event);
        this._onTouchedCallback();
    };
    //From ControlValueAccessor interface
    CheckBoxInput.prototype.writeValue = function (value) {
        this._value = value;
    };
    //From ControlValueAccessor interface
    CheckBoxInput.prototype.registerOnChange = function (fn) {
        this._onChangeCallback = fn;
    };
    //From ControlValueAccessor interface
    CheckBoxInput.prototype.registerOnTouched = function (fn) {
        this._onTouchedCallback = fn;
    };
    __decorate([
        core_1.Input()
    ], CheckBoxInput.prototype, "label");
    __decorate([
        core_1.Input()
    ], CheckBoxInput.prototype, "column");
    __decorate([
        core_1.Input()
    ], CheckBoxInput.prototype, "widgetConfig");
    CheckBoxInput = __decorate([
        core_1.Component({
            selector: 'checkbox-input',
            template: "              \n              <div [class]=\"widgetStyleClassName\" [ngClass]=\"{'hiddendiv': widgetConfig.hidden , '':!widgetConfig.hidden}\">\n                <div class=\"md-form form-group\">\n                    <input type=\"checkbox\"  [(ngModel)]=\"value\" class=\"form-control validate\" (blur)=\"onTouched($event)\" class=\"filled-in\"  [attr.id]=\"elementId\" [attr.disabled]=\"widgetConfig.disabled ? true : null\" autocomplete=\"off\" [required]=\"widgetConfig.required ? true: null\" [readonly]=\"widgetConfig.readOnly ? true : false\" (change)=\"validateInput($event)\" [checked]=\"widgetConfig.checked\">\n                    <label [attr.for]=\"elementId\" >{{label}}</label>\n                </div>\n              </div>\n",
            directives: [forms_1.FORM_DIRECTIVES],
            providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR]
        })
    ], CheckBoxInput);
    return CheckBoxInput;
}());
exports.CheckBoxInput = CheckBoxInput;
/**
 * Used to configure Widgets changable properties
 */
var CheckboxInputConfiguration = (function () {
    function CheckboxInputConfiguration(hidden, disabled, required, checked, errorMessage) {
        this.errorMessage = errorMessage;
        this.hidden = hidden;
        this.disabled = disabled;
        this.required = required;
        this.checked = checked;
    }
    return CheckboxInputConfiguration;
}());
exports.CheckboxInputConfiguration = CheckboxInputConfiguration;
