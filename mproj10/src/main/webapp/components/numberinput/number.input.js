"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var forms_2 = require("@angular/forms");
var style_constants_1 = require("../style.constants");
var noop = function () { };
var CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR = new core_1.Provider(forms_2.NG_VALUE_ACCESSOR, {
    useExisting: core_1.forwardRef(function () { return NumberInput; }),
    multi: true
});
var NumberInput = (function () {
    function NumberInput() {
        // --- CUSTOM VALUE ACCESSOR CODE ---
        //The internal data model
        this._value = '';
        //Placeholders for the callbacks
        this._onTouchedCallback = noop;
        this._onChangeCallback = noop;
    }
    NumberInput.prototype.ngOnInit = function () {
        this.widgetStyleClassName = style_constants_1.BASIC_WIDGETSTYLE_CLASS + this.column;
        this.elementId = style_constants_1.NUMBER_INPUT_PREFIX + Math.floor(Math.random() * 90000) + 10000;
        this.widgetConfig.elementId = this.elementId;
    };
    /**
     * Will remove attributes of pattern matching if null
     */
    NumberInput.prototype.ngAfterViewInit = function () {
        if (this.regex == null || this.regex == '') {
            document.getElementById(this.elementId).removeAttribute("pattern");
        }
        if (this.widgetConfig.minLength == '' || this.widgetConfig.minLength == null) {
            document.getElementById(this.elementId).removeAttribute("minlength");
        }
        if (this.widgetConfig.maxLength == '' || this.widgetConfig.maxLength == null) {
            document.getElementById(this.elementId).removeAttribute("maxlength");
        }
    };
    /**
     * Checks the validity of the input field
     * @param event
     */
    NumberInput.prototype.validateInput = function (event) {
        if (document.getElementById(this.elementId).validity.valid) {
            this.widgetConfig.validState = true;
        }
        else {
            toastr.error(this.widgetConfig.errorMessage);
            this.widgetConfig.validState = false;
        }
    };
    Object.defineProperty(NumberInput.prototype, "value", {
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
    NumberInput.prototype.onTouched = function (event) {
        this.validateInput(event);
        this._onTouchedCallback();
    };
    //From ControlValueAccessor interface
    NumberInput.prototype.writeValue = function (value) {
        this._value = value;
    };
    //From ControlValueAccessor interface
    NumberInput.prototype.registerOnChange = function (fn) {
        this._onChangeCallback = fn;
    };
    //From ControlValueAccessor interface
    NumberInput.prototype.registerOnTouched = function (fn) {
        this._onTouchedCallback = fn;
    };
    __decorate([
        core_1.Input()
    ], NumberInput.prototype, "label");
    __decorate([
        core_1.Input()
    ], NumberInput.prototype, "regex");
    __decorate([
        core_1.Input()
    ], NumberInput.prototype, "column");
    __decorate([
        core_1.Input()
    ], NumberInput.prototype, "widgetConfig");
    NumberInput = __decorate([
        core_1.Component({
            selector: 'number-input',
            template: "              \n              <div [class]=\"widgetStyleClassName\" [ngClass]=\"{'hiddendiv': widgetConfig.hidden , '':!widgetConfig.hidden}\">\n                <div class=\"md-form form-group\">\n                    <input type=\"number\"  [(ngModel)]=\"value\" class=\"form-control validate\" (blur)=\"onTouched($event)\"  [attr.id]=\"elementId\" [attr.disabled]=\"widgetConfig.disabled ? true : null\" autocomplete=\"off\" [attr.max]=\"widgetConfig.maxLength\" [attr.min]=\"widgetConfig.minLength\" [required]=\"widgetConfig.required ? true: null\" [readonly]=\"widgetConfig.readOnly ? true : false\" [pattern]=\"regex\" (change)=\"validateInput($event)\">\n                    <label [ngClass]=\"{'active': value , '': value}\" [attr.for]=\"elementId\">{{label}}</label>\n                </div>\n              </div>\n",
            directives: [forms_1.FORM_DIRECTIVES],
            providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR]
        })
    ], NumberInput);
    return NumberInput;
}());
exports.NumberInput = NumberInput;
/**
 * Used to configure Widgets changable properties
 */
var NumberInputConfiguration = (function () {
    function NumberInputConfiguration(hidden, disabled, readOnly, required, minLength, maxLength, errorMessage) {
        this.hidden = hidden;
        this.disabled = disabled;
        this.readOnly = readOnly;
        this.required = required;
        this.minLength = minLength;
        this.maxLength = maxLength;
        this.errorMessage = errorMessage;
    }
    return NumberInputConfiguration;
}());
exports.NumberInputConfiguration = NumberInputConfiguration;
