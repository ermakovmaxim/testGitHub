"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * Created by pratik on 24/5/16.
 */
var core_1 = require('@angular/core');
/**
 * Service class that returns data for Dynamic Radio group to build
  */
var RadioService = (function () {
    // DI for getting HTTP class instance
    function RadioService(_http) {
        this._http = _http;
    }
    /**
     * Class that call the service url fetched the JSON to generate the Radio Group buttons
     * @param parentRef -> Component Class Reference
     * @param serviceUrl -> Service URL to call.
     */
    RadioService.prototype.getRadioOptionData = function (parentRef, serviceUrl) {
        var _this = this;
        this._http.get(serviceUrl)
            .subscribe(function (res) {
            // On Successfully receiving data
            parentRef.radioServiceObject = res.json();
            parentRef.radioGroups = parentRef.radioServiceObject.fields; // Set the field name
            parentRef.groupName = parentRef.radioServiceObject.radio; // Set the group name
        }, function (err) {
            //on Error?
            console.error('Error Occured on Select Service Classname : ' + _this.constructor.name);
        }, function () {
            //on complete?
            // console.log('Completed');
        });
    };
    RadioService = __decorate([
        core_1.Injectable()
    ], RadioService);
    return RadioService;
}());
exports.RadioService = RadioService;
