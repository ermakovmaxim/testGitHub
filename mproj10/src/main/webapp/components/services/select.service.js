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
/**
 * Service Class that provides with the data for select element. Requires Instance of the Directive.
 */
var SelectService = (function () {
    // DI for getting HTTP class instance
    function SelectService(_http) {
        this._http = _http;
    }
    /**
     * Calls the service and assigns the returned JSON data to caller.data
     * @param parentRef : Refrence of the directive class calling the service
     * @param serviceUrl : URL of the service to be called
     */
    SelectService.prototype.getSelectOptionData = function (parentRef, serviceUrl) {
        var _this = this;
        this._http.get(serviceUrl)
            .subscribe(function (res) {
            // On Successfully receiving data
            parentRef.data = res.json();
            parentRef.filteredData = parentRef.data;
        }, function (err) {
            //on Error?
            console.error('Error Occured on Select Service Classname : ' + _this.constructor.name);
        }, function () {
            //on complete?
            console.log('Completed');
        });
    };
    SelectService = __decorate([
        core_1.Injectable()
    ], SelectService);
    return SelectService;
}());
exports.SelectService = SelectService;
