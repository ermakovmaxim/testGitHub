"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * Created by pratik on 16/5/16.
 */
var core_1 = require('@angular/core');
var common_1 = require('@angular/common');
var RADIO_VALUE_ACCESSOR = new core_1.Provider(common_1.NG_VALUE_ACCESSOR, { useExisting: core_1.forwardRef(function () { return RadioControlValueAccessor; }), multi: true });
/**
 * The accessor for writing a value and listening to changes on a radio input element.
 *
 *  ### Example
 *  ```
 *  <input type="radio" ngModel="radioModel">
 *  ```
 */
var RadioControlValueAccessor = (function () {
    function RadioControlValueAccessor(_renderer, _elementRef) {
        this._renderer = _renderer;
        this._elementRef = _elementRef;
        this.onChange = function (_) { };
        this.onTouched = function () { };
    }
    RadioControlValueAccessor.prototype.writeValue = function (value) {
        this._renderer.setElementProperty(this._elementRef, 'checked', value == this._elementRef.nativeElement.value);
    };
    RadioControlValueAccessor.prototype.registerOnChange = function (fn) { this.onChange = fn; };
    RadioControlValueAccessor.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
    RadioControlValueAccessor = __decorate([
        core_1.Directive({
            selector: 'input[type=radio][ngControl],input[type=radio][ngFormControl],input[type=radio][ngModel]',
            host: { '(change)': 'onChange($event.target.value)', '(blur)': 'onTouched()' },
            bindings: [RADIO_VALUE_ACCESSOR]
        })
    ], RadioControlValueAccessor);
    return RadioControlValueAccessor;
}());
exports.RadioControlValueAccessor = RadioControlValueAccessor;
