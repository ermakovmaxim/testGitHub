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
    useExisting: core_1.forwardRef(function () { return HiddenInput; }),
    multi: true
});
var HiddenInput = (function () {
    function HiddenInput() {
        // --- CUSTOM VALUE ACCESSOR CODE ---
        //The internal data model
        this._value = '';
        //Placeholders for the callbacks
        this._onTouchedCallback = noop;
        this._onChangeCallback = noop;
    }
    HiddenInput.prototype.ngOnInit = function () {
        this.widgetStyleClassName = style_constants_1.BASIC_WIDGETSTYLE_CLASS + this.column;
        this.elementId = style_constants_1.HIDDEN_INPUT_PREFIX + Math.floor(Math.random() * 90000) + 10000;
    };
    HiddenInput.prototype.ngAfterViewInit = function () {
    };
    Object.defineProperty(HiddenInput.prototype, "value", {
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
    HiddenInput.prototype.onTouched = function () {
        this._onTouchedCallback();
    };
    //From ControlValueAccessor interface
    HiddenInput.prototype.writeValue = function (value) {
        this._value = value;
    };
    //From ControlValueAccessor interface
    HiddenInput.prototype.registerOnChange = function (fn) {
        this._onChangeCallback = fn;
    };
    //From ControlValueAccessor interface
    HiddenInput.prototype.registerOnTouched = function (fn) {
        this._onTouchedCallback = fn;
    };
    __decorate([
        core_1.Input()
    ], HiddenInput.prototype, "column");
    __decorate([
        core_1.Input()
    ], HiddenInput.prototype, "hidden");
    HiddenInput = __decorate([
        core_1.Component({
            selector: 'hidden-input',
            template: "              \n                 <input type=\"hidden\"  [(ngModel)]=\"value\" class=\"form-control validate\" (blur)=\"onTouched()\"  [attr.id]=\"elementId\" autocomplete=\"off\">\n",
            directives: [forms_1.FORM_DIRECTIVES],
            providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR]
        })
    ], HiddenInput);
    return HiddenInput;
}());
exports.HiddenInput = HiddenInput;
