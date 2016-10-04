"use strict";
/**
 * Created by pratik on 12/8/16.
 */
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var AbstractValueAccessor = (function () {
    function AbstractValueAccessor() {
        this._value = '';
        this.onChange = function (_) { };
        this.onTouched = function () { };
    }
    Object.defineProperty(AbstractValueAccessor.prototype, "value", {
        get: function () { return this._value; },
        set: function (v) {
            if (v !== this._value) {
                this._value = v;
                this.onChange(v);
            }
        },
        enumerable: true,
        configurable: true
    });
    ;
    AbstractValueAccessor.prototype.writeValue = function (value) {
        this._value = value;
        this.onChange(value);
    };
    AbstractValueAccessor.prototype.registerOnChange = function (fn) { this.onChange = fn; };
    AbstractValueAccessor.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
    return AbstractValueAccessor;
}());
exports.AbstractValueAccessor = AbstractValueAccessor;
function MakeProvider(type) {
    return new core_1.Provider(common_1.NG_VALUE_ACCESSOR, {
        useExisting: core_1.forwardRef(function () { return type; }),
        multi: true
    });
}
exports.MakeProvider = MakeProvider;
