"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var style_constants_1 = require("../style.constants");
var ResetButton = (function () {
    function ResetButton() {
        this.onClick = new core_1.EventEmitter();
    }
    ResetButton.prototype.ngOnInit = function () {
        this.widgetStyleClassName = style_constants_1.BASIC_WIDGETSTYLE_CLASS + this.column;
        this.buttonStyleClassName = style_constants_1.BUTTON_BASE_CLASS + this.buttonStyle + ' ' + this.buttonSize;
        this.elementId = style_constants_1.BUTTON_INPUT_PREFIX + Math.floor(Math.random() * 90000) + 10000;
    };
    ResetButton.prototype.onButtonReset = function (event) {
        this.onClick.emit(event);
    };
    __decorate([
        core_1.Input()
    ], ResetButton.prototype, "label");
    __decorate([
        core_1.Input()
    ], ResetButton.prototype, "column");
    __decorate([
        core_1.Input()
    ], ResetButton.prototype, "buttonStyle");
    __decorate([
        core_1.Input()
    ], ResetButton.prototype, "buttonSize");
    __decorate([
        core_1.Input()
    ], ResetButton.prototype, "widgetConfig");
    __decorate([
        core_1.Output()
    ], ResetButton.prototype, "onClick");
    ResetButton = __decorate([
        core_1.Component({
            selector: 'reset-button',
            template: "\n          <div [class]=\"widgetStyleClassName\" [ngClass]=\"{'hiddendiv': widgetConfig.hidden , '':!widgetConfig.hidden}\">                 \n             <button type=\"reset\" [attr.class]=\"buttonStyleClassName\" [attr.id]=\"elementId\" [attr.disabled]=\"widgetConfig.disabled ? true : null\" (click)=\"onButtonReset($event)\">{{label}}</button>\n          </div>                 \n"
        })
    ], ResetButton);
    return ResetButton;
}());
exports.ResetButton = ResetButton;
var ResetButtonConfiguration = (function () {
    function ResetButtonConfiguration(hidden, disabled) {
        this.hidden = hidden;
        this.disabled = disabled;
    }
    return ResetButtonConfiguration;
}());
exports.ResetButtonConfiguration = ResetButtonConfiguration;
