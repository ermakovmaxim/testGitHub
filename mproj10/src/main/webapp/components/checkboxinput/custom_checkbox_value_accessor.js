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
var CHECKBOX_VALUE_ACCESSOR = new core_1.Provider(common_1.NG_VALUE_ACCESSOR, { useExisting: core_1.forwardRef(function () { return CheckboxControlValueAccessor; }), multi: true });
/**
 * Custom Directive for ngModel data binding on checkbox
 */
var CheckboxControlValueAccessor = (function () {
    function CheckboxControlValueAccessor(_renderer, _elementRef) {
        this._renderer = _renderer;
        this._elementRef = _elementRef;
        this.onChange = function (_) { };
        this.onTouched = function () { };
    }
    CheckboxControlValueAccessor.prototype.writeValue = function (value) {
        this._renderer.setElementProperty(this._elementRef.nativeElement, 'checked', value);
    };
    CheckboxControlValueAccessor.prototype.registerOnChange = function (fn) { this.onChange = fn; };
    CheckboxControlValueAccessor.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
    CheckboxControlValueAccessor = __decorate([
        core_1.Directive({
            selector: 'a-checkbox[ngControl],a-checkbox[ngFormControl],a-checkbox[ngModel]',
            host: {
                '(change)': 'onChange($event.target.checked)',
                '(blur)': 'onTouched()'
            },
            providers: [CHECKBOX_VALUE_ACCESSOR]
        })
    ], CheckboxControlValueAccessor);
    return CheckboxControlValueAccessor;
}());
exports.CheckboxControlValueAccessor = CheckboxControlValueAccessor;
