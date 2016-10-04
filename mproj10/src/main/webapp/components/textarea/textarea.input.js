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
    useExisting: core_1.forwardRef(function () { return TextAreaInput; }),
    multi: true
});
var TextAreaInput = (function () {
    function TextAreaInput() {
        // --- CUSTOM VALUE ACCESSOR CODE ---
        //The internal data model
        this._value = '';
        //Placeholders for the callbacks
        this._onTouchedCallback = noop;
        this._onChangeCallback = noop;
    }
    TextAreaInput.prototype.ngOnInit = function () {
        this.widgetStyleClassName = style_constants_1.BASIC_WIDGETSTYLE_CLASS + this.column;
        this.elementId = style_constants_1.TEXTAREA_INPUT_PREFIX + Math.floor(Math.random() * 90000) + 10000;
        this.widgetConfig.elementId = this.elementId;
    };
    /**
     * Checks the validity of the input field
     * @param event
     */
    TextAreaInput.prototype.validateInput = function (event) {
        if (document.getElementById(this.elementId).validity.valid) {
            this.widgetConfig.validState = true;
        }
        else {
            toastr.error(this.widgetConfig.errorMessage);
            this.widgetConfig.validState = false;
        }
    };
    Object.defineProperty(TextAreaInput.prototype, "value", {
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
    TextAreaInput.prototype.onTouched = function (event) {
        this.validateInput(event);
        this._onTouchedCallback();
    };
    //From ControlValueAccessor interface
    TextAreaInput.prototype.writeValue = function (value) {
        this._value = value;
    };
    //From ControlValueAccessor interface
    TextAreaInput.prototype.registerOnChange = function (fn) {
        this._onChangeCallback = fn;
    };
    //From ControlValueAccessor interface
    TextAreaInput.prototype.registerOnTouched = function (fn) {
        this._onTouchedCallback = fn;
    };
    __decorate([
        core_1.Input()
    ], TextAreaInput.prototype, "label");
    __decorate([
        core_1.Input()
    ], TextAreaInput.prototype, "column");
    __decorate([
        core_1.Input()
    ], TextAreaInput.prototype, "widgetConfig");
    TextAreaInput = __decorate([
        core_1.Component({
            selector: 'textarea-input',
            template: "      \n           <div [class]=\"widgetStyleClassName\" [ngClass]=\"{'hiddendiv': widgetConfig.hidden , '':!widgetConfig.hidden}\">\n             <div class=\"md-form\">\n                <textarea type=\"text\" [(ngModel)]=\"value\" [attr.id]=\"elementId\" class=\"md-textarea\" autocomplete=\"off\" (blur)=\"onTouched($event)\" [required]=\"widgetConfig.required ? true: null\" [readonly]=\"widgetConfig.readOnly ? true : false\" [attr.disabled]=\"widgetConfig.disabled ? true : null\" (change)=\"validateInput($event)\"></textarea>\n                <label [ngClass]=\"{'active': value , '': value}\"  [attr.for]=\"elementId\">{{label}}</label>\n             </div>\n           </div>   \n\n",
            directives: [forms_1.FORM_DIRECTIVES],
            providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR]
        })
    ], TextAreaInput);
    return TextAreaInput;
}());
exports.TextAreaInput = TextAreaInput;
/**
 * Used to configure Widgets changable properties
 */
var TextAreaInputConfiguration = (function () {
    function TextAreaInputConfiguration(hidden, disabled, readOnly, required, minLength, maxLength, errorMessage) {
        this.hidden = hidden;
        this.disabled = disabled;
        this.readOnly = readOnly;
        this.required = required;
        this.minLength = minLength;
        this.maxLength = maxLength;
        this.errorMessage = errorMessage;
    }
    return TextAreaInputConfiguration;
}());
exports.TextAreaInputConfiguration = TextAreaInputConfiguration;
