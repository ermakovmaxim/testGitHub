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
    useExisting: core_2.forwardRef(function () { return DateInputComponent; }),
    multi: true
});
var DateInputComponent = (function () {
    function DateInputComponent() {
        this.selectedvalue = new core_1.EventEmitter();
        // --- CUSTOM VALUE ACCESSOR CODE ---
        //The internal data model
        this._value = '';
        //Placeholders for the callbacks
        this._onTouchedCallback = noop;
        this._onChangeCallback = noop;
    }
    DateInputComponent.prototype.ngOnChanges = function (change) {
        if (change['currentdate'] && this.picker != null) {
            var datestring = change['currentdate'].currentValue;
            console.log(datestring.constructor.name);
            debugger;
            var dateObj = new Date(datestring);
            this.picker.setDate(dateObj);
        }
    };
    DateInputComponent.prototype.ngOnInit = function () {
        this.widgetStyleClassName = style_constants_1.BASIC_WIDGETSTYLE_CLASS + this.column;
        this.elementId = Math.floor(Math.random() * 90000) + 10000;
        this.widgetConfig.elementId = this.elementId;
        /*if(this.currentdate.constructor.name == 'String'){
            //
        }*/
    };
    /**
     * Will remove attributes of pattern matching if null
     */
    DateInputComponent.prototype.ngAfterViewInit = function () {
        this.picker = new Pikaday({ field: document.getElementById(this.elementId) });
    };
    /**
     * Checks the validity of the input field
     * @param event
     */
    DateInputComponent.prototype.validateInput = function (event) {
        if (document.getElementById(this.elementId).validity.valid) {
            this.widgetConfig.validState = true;
            this.selectedvalue.emit(new Date(event.target.value));
        }
        else {
            // toastr.warning(this.widgetConfig.errorMessage);
            this.widgetConfig.validState = false;
        }
    };
    Object.defineProperty(DateInputComponent.prototype, "value", {
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
    DateInputComponent.prototype.onTouched = function (event) {
        this.validateInput(event);
        this._onTouchedCallback();
    };
    //From ControlValueAccessor interface
    DateInputComponent.prototype.writeValue = function (value) {
        this._value = value;
    };
    //From ControlValueAccessor interface
    DateInputComponent.prototype.registerOnChange = function (fn) {
        this._onChangeCallback = fn;
    };
    //From ControlValueAccessor interface
    DateInputComponent.prototype.registerOnTouched = function (fn) {
        this._onTouchedCallback = fn;
    };
    __decorate([
        core_1.Input()
    ], DateInputComponent.prototype, "label");
    __decorate([
        core_1.Input()
    ], DateInputComponent.prototype, "column");
    __decorate([
        core_1.Input()
    ], DateInputComponent.prototype, "widgetConfig");
    __decorate([
        core_1.Output()
    ], DateInputComponent.prototype, "selectedvalue");
    __decorate([
        core_1.Input()
    ], DateInputComponent.prototype, "currentdate");
    DateInputComponent = __decorate([
        core_1.Component({
            selector: 'date-input',
            template: "              \n              <div [class]=\"widgetStyleClassName\" [ngClass]=\"{'hiddendiv': widgetConfig.hidden , '':!widgetConfig.hidden}\">\n                <div class=\"md-form form-group\">\n                    <input type=\"text\"  [(ngModel)]=\"value\" class=\"form-control validate\" (blur)=\"onTouched($event)\" placeholder=\"{{label}}\"  [attr.id]=\"elementId\" [attr.disabled]=\"widgetConfig.disabled ? true : null\" autocomplete=\"off\"  [required]=\"widgetConfig.required ? true: null\" [readonly]=\"widgetConfig.readOnly ? true : false\" (change)=\"validateInput($event)\">\n                </div>\n              </div>\n",
            directives: [forms_1.FORM_DIRECTIVES],
            providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR]
        })
    ], DateInputComponent);
    return DateInputComponent;
}());
exports.DateInputComponent = DateInputComponent;
/**
 * Used to configure Widgets changable properties
 */
var DateInputConfiguration = (function () {
    function DateInputConfiguration(hidden, disabled, readOnly, required, errorMessage) {
        this.hidden = hidden;
        this.disabled = disabled;
        this.readOnly = readOnly;
        this.required = required;
        this.errorMessage = errorMessage;
    }
    return DateInputConfiguration;
}());
exports.DateInputConfiguration = DateInputConfiguration;
/**
 *   Usage , Date is represented in yyyy/mm/dd, can be binded to a String or done by using Date() i.e Modal Class Will have type date
 *   <date-input [label]="'Pick'" [elementId]="'mydatepicker'" [column]="'6'" [widgetConfig]="dateConfig"   [(ngModel)]="userdate" name="userdate"></date-input>
 **/
