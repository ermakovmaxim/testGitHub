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
    useExisting: core_2.forwardRef(function () { return FileUploadInput; }),
    multi: true
});
var FileUploadInput = (function () {
    function FileUploadInput() {
        // --- CUSTOM VALUE ACCESSOR CODE ---
        //The internal data model
        this._value = '';
        //Placeholders for the callbacks
        this._onTouchedCallback = noop;
        this._onChangeCallback = noop;
    }
    FileUploadInput.prototype.ngOnInit = function () {
        this.widgetStyleClassName = style_constants_1.BASIC_WIDGETSTYLE_CLASS + this.column;
        this.elementId = style_constants_1.FILEUPLOAD_INPUT_PREFIX + Math.floor(Math.random() * 90000) + 10000;
    };
    FileUploadInput.prototype.ngAfterViewInit = function () {
    };
    Object.defineProperty(FileUploadInput.prototype, "value", {
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
    FileUploadInput.prototype.onTouched = function () {
        this._onTouchedCallback();
    };
    //From ControlValueAccessor interface
    FileUploadInput.prototype.writeValue = function (value) {
        this._value = value;
    };
    //From ControlValueAccessor interface
    FileUploadInput.prototype.registerOnChange = function (fn) {
        this._onChangeCallback = fn;
    };
    //From ControlValueAccessor interface
    FileUploadInput.prototype.registerOnTouched = function (fn) {
        this._onTouchedCallback = fn;
    };
    __decorate([
        core_1.Input()
    ], FileUploadInput.prototype, "label");
    __decorate([
        core_1.Input()
    ], FileUploadInput.prototype, "regex");
    __decorate([
        core_1.Input()
    ], FileUploadInput.prototype, "column");
    __decorate([
        core_1.Input()
    ], FileUploadInput.prototype, "widgetConfig");
    FileUploadInput = __decorate([
        core_1.Component({
            selector: 'fileupload-input',
            template: "              \n              <div [class]=\"widgetStyleClassName\" [ngClass]=\"{'hiddendiv': widgetConfig.hidden , '':!widgetConfig.hidden}\">\n                <div class=\"file-field\">\n                    <div class=\"btn btn-primary\">\n                        <span>{{label}}</span>\n                        <input type=\"file\" '+ widgetConfig.multiple+ '>         <!-- TODO : FilePicker [(ngModel)]=\"binding\" ?? -->\n                    </div>\n                    <div class=\"file-path-wrapper\">\n                       <input class=\"file-path validate\" type=\"text\" placeholder=\"Upload your file\">\n                    </div>\n                </div>\n              </div>\n",
            directives: [forms_1.FORM_DIRECTIVES],
            providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR]
        })
    ], FileUploadInput);
    return FileUploadInput;
}());
exports.FileUploadInput = FileUploadInput;
var FileUploadInputConfiguration = (function () {
    function FileUploadInputConfiguration(hidden, disabled) {
        this.multiple = 'multiple';
        this.hidden = hidden;
        this.disabled = disabled;
    }
    return FileUploadInputConfiguration;
}());
exports.FileUploadInputConfiguration = FileUploadInputConfiguration;
