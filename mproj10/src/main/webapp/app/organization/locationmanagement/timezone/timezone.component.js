"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var timezone_model_1 = require('./timezone.model');
var ng_custom_widgets_1 = require('ng_custom_widgets');
var TimezoneComponent = (function () {
    function TimezoneComponent(timezoneService, commonsValidatorService) {
        this.timezoneService = timezoneService;
        this.commonsValidatorService = commonsValidatorService;
        this.timezoneModel = new timezone_model_1.TimezoneModel(null, '', '', '', '', '', '');
        this.utcdifference = new ng_custom_widgets_1.NumberInputConfiguration(false, false, false, true, '0', '11', 'UTC Difference must be between 0 and 11');
        this.gmtLabel = new ng_custom_widgets_1.TextInputConfiguration(false, false, false, true, '0', '256', 'Please enter GMT');
        this.timeZoneLabel = new ng_custom_widgets_1.TextInputConfiguration(false, false, false, true, '0', '256', 'Please enter Time Zone');
        this.country = new ng_custom_widgets_1.TextInputConfiguration(false, false, false, true, '0', '256', 'Please enter Country');
        this.cities = new ng_custom_widgets_1.TextInputConfiguration(false, false, false, true, '0', '256', 'Please enter City');
        this.save = new ng_custom_widgets_1.SimpleButtonConfiguration(false, false);
        this.update = new ng_custom_widgets_1.SimpleButtonConfiguration(true, false);
        this.reset = new ng_custom_widgets_1.SimpleButtonConfiguration(false, false);
        var timezoneGridcolumns = [];
        timezoneGridcolumns.push({ text: 'Time Zone Id', dataIndex: 'timeZoneId', hidden: true });
        timezoneGridcolumns.push({ text: 'UTC Difference', dataIndex: 'utcdifference', hidden: false });
        timezoneGridcolumns.push({ text: 'GMT', dataIndex: 'gmtLabel', hidden: false });
        timezoneGridcolumns.push({ text: 'Time Zone', dataIndex: 'timeZoneLabel', hidden: false });
        timezoneGridcolumns.push({ text: 'Country', dataIndex: 'country', hidden: false });
        timezoneGridcolumns.push({ text: 'City', dataIndex: 'cities', hidden: false });
        timezoneGridcolumns.push({ text: 'createdBy', dataIndex: 'createdBy', hidden: true });
        timezoneGridcolumns.push({ text: 'createdDate', dataIndex: 'createdDate', hidden: true });
        timezoneGridcolumns.push({ text: 'updatedBy', dataIndex: 'updatedBy', hidden: true });
        timezoneGridcolumns.push({ text: 'updatedDate', dataIndex: 'updatedDate', hidden: true });
        timezoneGridcolumns.push({ text: 'versionId', dataIndex: 'versionId', hidden: true });
        timezoneGridcolumns.push({ text: 'activeStatus', dataIndex: 'activeStatus', hidden: true });
        timezoneGridcolumns.push({ text: 'txnAccessCode', dataIndex: 'txnAccessCode', hidden: true });
        this.timezoneGrid = new ng_custom_widgets_1.DataGridConfiguration(timezoneGridcolumns);
        this.timezoneGridData = [];
    }
    TimezoneComponent.prototype.onSaveClick = function () {
        var requestData = {};
        var componentArray = [this.utcdifference, this.gmtLabel, this.timeZoneLabel, this.country, this.cities];
        if (this.commonsValidatorService.validateAndShowErrorMessages(componentArray)) {
            return;
        }
        requestData.utcdifference = this.timezoneModel.utcdifference;
        requestData.gmtLabel = this.timezoneModel.gmtLabel;
        requestData.timeZoneLabel = this.timezoneModel.timeZoneLabel;
        requestData.country = this.timezoneModel.country;
        requestData.cities = this.timezoneModel.cities;
        this.timezoneService.onSaveClick_callTimezoneService_saveOperation(this, 'onSaveClick_callTimezoneService_saveOperationComplete', requestData);
        this.timezoneModel.timeZoneId = null;
        this.timezoneModel.utcdifference = null;
        this.timezoneModel.gmtLabel = null;
        this.timezoneModel.timeZoneLabel = null;
        this.timezoneModel.country = null;
        this.timezoneModel.cities = null;
        this.timezoneModel.versionId = null;
    };
    TimezoneComponent.prototype.onSaveClick_callTimezoneService_saveOperationComplete = function (responseData) {
        if (responseData.response.success) {
            toastr.info(responseData.response.message);
        }
        else {
            toastr.error(responseData.response.message);
        }
    };
    TimezoneComponent.prototype.onUpdateClick = function () {
        var requestData = {};
        var componentArray = [this.utcdifference, this.gmtLabel, this.timeZoneLabel, this.country, this.cities];
        if (this.commonsValidatorService.validateAndShowErrorMessages(componentArray)) {
            return;
        }
        requestData.timeZoneId = this.timezoneModel.timeZoneId;
        requestData.utcdifference = this.timezoneModel.utcdifference;
        requestData.gmtLabel = this.timezoneModel.gmtLabel;
        requestData.timeZoneLabel = this.timezoneModel.timeZoneLabel;
        requestData.country = this.timezoneModel.country;
        requestData.cities = this.timezoneModel.cities;
        requestData.versionId = this.timezoneModel.versionId;
        this.timezoneService.onUpdateClick_callTimezoneService_updateOperation(this, 'onUpdateClick_callTimezoneService_updateOperationComplete', requestData);
        this.timezoneModel.timeZoneId = null;
        this.timezoneModel.utcdifference = null;
        this.timezoneModel.gmtLabel = null;
        this.timezoneModel.timeZoneLabel = null;
        this.timezoneModel.country = null;
        this.timezoneModel.cities = null;
        this.timezoneModel.versionId = null;
        this.save.hidden = false;
        this.update.hidden = true;
    };
    TimezoneComponent.prototype.onUpdateClick_callTimezoneService_updateOperationComplete = function (responseData) {
        if (responseData.response.success) {
            toastr.info(responseData.response.message);
        }
        else {
            toastr.error(responseData.response.message);
        }
    };
    TimezoneComponent.prototype.onResetClick = function () {
        this.timezoneModel.timeZoneId = null;
        this.timezoneModel.utcdifference = null;
        this.timezoneModel.gmtLabel = null;
        this.timezoneModel.timeZoneLabel = null;
        this.timezoneModel.country = null;
        this.timezoneModel.cities = null;
        this.timezoneModel.versionId = null;
        this.save.hidden = false;
        this.update.hidden = true;
    };
    TimezoneComponent.prototype.onTimezoneGridRowClick = function (data) {
        var requestData = {};
        requestData.findKey = data.timeZoneId;
        this.timezoneService.onTimezoneGridRowClick_callTimezone_findByIdOperation(this, 'onTimezoneGridRowClick_callTimezone_findByIdOperationComplete', requestData);
    };
    TimezoneComponent.prototype.onTimezoneGridRowClick_callTimezone_findByIdOperationComplete = function (responseData) {
        var data = responseData.response.data;
        this.timezoneModel.timeZoneId = data.timeZoneId;
        this.timezoneModel.utcdifference = data.utcdifference;
        this.timezoneModel.gmtLabel = data.gmtLabel;
        this.timezoneModel.timeZoneLabel = data.timeZoneLabel;
        this.timezoneModel.country = data.country;
        this.timezoneModel.cities = data.cities;
        this.timezoneModel.versionId = data.versionId;
        this.save.hidden = true;
        this.update.hidden = false;
    };
    TimezoneComponent = __decorate([
        core_1.Component({
            selector: 'timezone-component',
            templateUrl: 'app/organization/locationmanagement/timezone/timezone.template.html'
        })
    ], TimezoneComponent);
    return TimezoneComponent;
}());
exports.TimezoneComponent = TimezoneComponent;
