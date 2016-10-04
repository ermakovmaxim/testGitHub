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
    useExisting: core_2.forwardRef(function () { return DatePicker; }),
    multi: true
});
//TODO : Problem accessing the DatePicker's Value as assigned from other JS.
var DatePicker = (function () {
    function DatePicker() {
        // --- CUSTOM VALUE ACCESSOR CODE ---
        //The internal data model
        this._value = '';
        //Placeholders for the callbacks
        this._onTouchedCallback = noop;
        this._onChangeCallback = noop;
    }
    DatePicker.prototype.ngOnInit = function () {
        this.widgetStyleClassName = style_constants_1.INPUT_MD_FORM + this.column;
        console.warn(this.widgetStyleClassName);
    };
    DatePicker.prototype.ngAfterViewInit = function () {
        try {
        }
        catch (e) {
            console.log('Date Widget : Picker js problem');
        }
    };
    DatePicker.prototype.setDate = function () {
        console.log('Date set is');
        console.log(this.datepicker.nativeElement.value);
    };
    Object.defineProperty(DatePicker.prototype, "value", {
        //get accessor
        get: function () { return this._value; },
        //set accessor including call the onchange callback
        set: function (v) {
            console.log('Calling set value');
            if (v !== this._value) {
                console.log('Field isnt empty');
                this._value = v;
                this._onChangeCallback(v);
            }
        },
        enumerable: true,
        configurable: true
    });
    ;
    //Set touched on blur
    DatePicker.prototype.onTouched = function () {
        this._onTouchedCallback();
    };
    //From ControlValueAccessor interface
    DatePicker.prototype.writeValue = function (value) {
        this._value = value;
    };
    //From ControlValueAccessor interface
    DatePicker.prototype.registerOnChange = function (fn) {
        this._onChangeCallback = fn;
    };
    //From ControlValueAccessor interface
    DatePicker.prototype.registerOnTouched = function (fn) {
        this._onTouchedCallback = fn;
    };
    __decorate([
        core_1.Input()
    ], DatePicker.prototype, "label");
    __decorate([
        core_1.Input()
    ], DatePicker.prototype, "elementId");
    __decorate([
        core_1.Input()
    ], DatePicker.prototype, "regex");
    __decorate([
        core_1.Input()
    ], DatePicker.prototype, "column");
    __decorate([
        core_1.Input()
    ], DatePicker.prototype, "widgetConfig");
    __decorate([
        core_1.ViewChild('datepicker')
    ], DatePicker.prototype, "datepicker");
    DatePicker = __decorate([
        core_1.Component({
            selector: 'date-picker',
            template: "      \n           <div [class]=\"widgetStyleClassName\">\n             <div class=\"md-form\">\n                <input type=\"text\" [(ngModel)]=\"value\" [attr.id]=\"elementId\" (blur)=\"onTouched()\" class=\"form-control\" #datepicker>\n                <label [attr.for]=\"elementId\">{{label}}</label>\n             </div>\n           </div>   \n\n",
            directives: [forms_1.FORM_DIRECTIVES],
            providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR]
        })
    ], DatePicker);
    return DatePicker;
}());
exports.DatePicker = DatePicker;
/**
 * Used to configure Widgets changable properties
 * Constructor sequence 1. disbaled 2.Hidden 3.required 4. readOnly 5. minLength 6. maxLength
 */
var NumberInputConfiguration = (function () {
    function NumberInputConfiguration(disabled, required, readOnly, minLength, maxLength, errorMessage) {
        this.disabled = disabled;
        this.required = required;
        this.readOnly = readOnly;
        this.minLength = minLength;
        this.maxLength = maxLength;
        this.errorMessage = errorMessage;
    }
    return NumberInputConfiguration;
}());
exports.NumberInputConfiguration = NumberInputConfiguration;
