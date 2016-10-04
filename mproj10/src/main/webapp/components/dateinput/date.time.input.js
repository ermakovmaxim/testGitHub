"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * Created by pratik on 16/9/16.
 */
var core_1 = require('@angular/core');
var forms_1 = require("@angular/forms");
var core_2 = require("@angular/core");
var forms_2 = require("@angular/forms");
var style_constants_1 = require("../style.constants");
var noop = function () { };
var CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR = new core_2.Provider(forms_2.NG_VALUE_ACCESSOR, {
    useExisting: core_2.forwardRef(function () { return DateTimeInput; }),
    multi: true
});
var DateTimeInput = (function () {
    function DateTimeInput() {
        // --- CUSTOM VALUE ACCESSOR CODE ---
        //The internal data model
        this._value = '';
        //Placeholders for the callbacks
        this._onTouchedCallback = noop;
        this._onChangeCallback = noop;
    }
    DateTimeInput.prototype.ngOnInit = function () {
        this.widgetStyleClassName = style_constants_1.BASIC_WIDGETSTYLE_CLASS + this.column;
    };
    /**
     * Will remove attributes of pattern matching if null
     */
    DateTimeInput.prototype.ngAfterViewInit = function () {
    };
    /**
     * Checks the validity of the input field
     * @param event
     */
    DateTimeInput.prototype.validateInput = function (event) {
        if (document.getElementById(this.elementId).validity.valid) {
            this.widgetConfig.validState = true;
        }
        else {
            // toastr.warning(this.widgetConfig.errorMessage);
            this.widgetConfig.validState = false;
        }
    };
    Object.defineProperty(DateTimeInput.prototype, "value", {
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
    DateTimeInput.prototype.onTouched = function () {
        this._onTouchedCallback();
    };
    //From ControlValueAccessor interface
    DateTimeInput.prototype.writeValue = function (value) {
        this._value = value;
    };
    //From ControlValueAccessor interface
    DateTimeInput.prototype.registerOnChange = function (fn) {
        this._onChangeCallback = fn;
    };
    //From ControlValueAccessor interface
    DateTimeInput.prototype.registerOnTouched = function (fn) {
        this._onTouchedCallback = fn;
    };
    __decorate([
        core_1.Input()
    ], DateTimeInput.prototype, "label");
    __decorate([
        core_1.Input()
    ], DateTimeInput.prototype, "elementId");
    __decorate([
        core_1.Input()
    ], DateTimeInput.prototype, "column");
    __decorate([
        core_1.Input()
    ], DateTimeInput.prototype, "widgetConfig");
    DateTimeInput = __decorate([
        core_1.Component({
            selector: 'date-time-input',
            template: "              \n              <div [class]=\"widgetStyleClassName\" [ngClass]=\"{'hiddendiv': widgetConfig.hidden , '':!widgetConfig.hidden}\">\n                <div class=\"md-form form-group\">\n                    <input type=\"datetime-local\"  [(ngModel)]=\"value\" class=\"form-control validate\" (blur)=\"onTouched()\"  [attr.id]=\"elementId\" [attr.disabled]=\"widgetConfig.disabled ? true : null\" autocomplete=\"off\"  [required]=\"widgetConfig.required ? true: null\" [readonly]=\"widgetConfig.readOnly ? true : false\" (change)=\"validateInput($event)\">\n                    <label class=\"active\" [attr.for]=\"elementId\" >{{label}}</label>\n                </div>\n              </div>\n",
            directives: [forms_1.FORM_DIRECTIVES],
            providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR]
        })
    ], DateTimeInput);
    return DateTimeInput;
}());
exports.DateTimeInput = DateTimeInput;
/**
 * Used to configure Widgets changable properties
 */
var DateTimeInputConfiguration = (function () {
    function DateTimeInputConfiguration(hidden, disabled, readOnly, required, errorMessage) {
        this.hidden = hidden;
        this.disabled = disabled;
        this.readOnly = readOnly;
        this.required = required;
        this.errorMessage = errorMessage;
    }
    return DateTimeInputConfiguration;
}());
exports.DateTimeInputConfiguration = DateTimeInputConfiguration;
/**
 *   Usage , Date is represented in yyyy/mm/dd, can be binded to a String. i.e Modal Class Will have type string
 *               <date-time-input [label]="'Pick'" [elementId]="'mydatepicker'" [column]="'6'" [widgetConfig]="dateTimeConfig"   [(ngModel)]="userdate" name="userdate"></date-time-input>
 **/
