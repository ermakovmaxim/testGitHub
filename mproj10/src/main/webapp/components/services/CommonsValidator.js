"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * Created by pratik on 28/9/16.
 */
var core_1 = require('@angular/core');
var CommonsValidatorService = (function () {
    function CommonsValidatorService() {
    }
    CommonsValidatorService.prototype.validateAndShowErrorMessages = function (componentConfigArray) {
        var invalidComponentsArray = [];
        componentConfigArray.forEach(function (componentConfig) {
            if (!document.getElementById(componentConfig.elementId).validity.valid) {
                invalidComponentsArray.push(componentConfig);
            }
        });
        if (invalidComponentsArray.length > 0) {
            var combinedErrorMessage = this.getCombinedErrorMessage(invalidComponentsArray);
            toastr.error(combinedErrorMessage);
            return true;
        }
        return false;
    };
    CommonsValidatorService.prototype.getCombinedErrorMessage = function (invalidComponentsArray) {
        var combinedErrorMessage = 'Please validate following fields : <br><br>';
        invalidComponentsArray.forEach(function (invalidCmpConfig) {
            if (!invalidCmpConfig.hidden) {
                combinedErrorMessage += (invalidCmpConfig.errorMessage ? (': ' + invalidCmpConfig.errorMessage) : '') + '<br>';
            }
        });
        return combinedErrorMessage;
    };
    CommonsValidatorService = __decorate([
        core_1.Injectable()
    ], CommonsValidatorService);
    return CommonsValidatorService;
}());
exports.CommonsValidatorService = CommonsValidatorService;
