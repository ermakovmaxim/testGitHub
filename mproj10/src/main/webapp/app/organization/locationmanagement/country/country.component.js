"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var country_model_1 = require('./country.model');
var ng_custom_widgets_1 = require('ng_custom_widgets');
var CountryComponent = (function () {
    function CountryComponent(countryService, commonsValidatorService) {
        this.countryService = countryService;
        this.commonsValidatorService = commonsValidatorService;
        this.countryModel = new country_model_1.CountryModel('', '', '', '', '', '', '', '', null, null, null, '', '');
        this.countryName = new ng_custom_widgets_1.TextInputConfiguration(false, false, false, true, '0', '128', 'Please enter Name');
        this.countryCode1 = new ng_custom_widgets_1.TextInputConfiguration(false, false, false, true, '0', '3', 'Please enter Code 1');
        this.countryCode2 = new ng_custom_widgets_1.TextInputConfiguration(false, false, false, true, '0', '3', 'Please enter Code 2');
        this.countryFlag = new ng_custom_widgets_1.TextInputConfiguration(false, false, false, true, '0', '64', 'Please enter Flag');
        this.capital = new ng_custom_widgets_1.TextInputConfiguration(false, false, false, true, '0', '32', 'Please enter Capital');
        this.currencyCode = new ng_custom_widgets_1.TextInputConfiguration(false, false, false, true, '0', '3', 'Please enter Currency Code');
        this.currencyName = new ng_custom_widgets_1.TextInputConfiguration(false, false, false, true, '0', '128', 'Please enter Currency Name');
        this.currencySymbol = new ng_custom_widgets_1.TextInputConfiguration(false, false, false, true, '0', '32', 'Please enter Currency Symbol');
        this.capitalLatitude = new ng_custom_widgets_1.NumberInputConfiguration(false, false, false, true, '0', '11', 'Capital Latitude must be between 0 and 11');
        this.capitalLongitude = new ng_custom_widgets_1.NumberInputConfiguration(false, false, false, true, '0', '11', 'Capital Longitude must be between 0 and 11');
        this.isoNumeric = new ng_custom_widgets_1.NumberInputConfiguration(false, false, false, true, '0', '1000', 'ISO Numeric must be between 0 and 1000');
        this.save = new ng_custom_widgets_1.SimpleButtonConfiguration(false, false);
        this.update = new ng_custom_widgets_1.SimpleButtonConfiguration(true, false);
        this.reset = new ng_custom_widgets_1.SimpleButtonConfiguration(false, false);
        var countryGridcolumns = [];
        countryGridcolumns.push({ text: 'Country Code', dataIndex: 'countryId', hidden: true });
        countryGridcolumns.push({ text: 'Name', dataIndex: 'countryName', hidden: false });
        countryGridcolumns.push({ text: 'Code 1', dataIndex: 'countryCode1', hidden: false });
        countryGridcolumns.push({ text: 'Code 2', dataIndex: 'countryCode2', hidden: false });
        countryGridcolumns.push({ text: 'Flag', dataIndex: 'countryFlag', hidden: false });
        countryGridcolumns.push({ text: 'Capital', dataIndex: 'capital', hidden: false });
        countryGridcolumns.push({ text: 'Currency Code', dataIndex: 'currencyCode', hidden: false });
        countryGridcolumns.push({ text: 'Currency Name', dataIndex: 'currencyName', hidden: false });
        countryGridcolumns.push({ text: 'Currency Symbol', dataIndex: 'currencySymbol', hidden: false });
        countryGridcolumns.push({ text: 'Capital Latitude', dataIndex: 'capitalLatitude', hidden: false });
        countryGridcolumns.push({ text: 'Capital Longitude', dataIndex: 'capitalLongitude', hidden: false });
        countryGridcolumns.push({ text: 'ISO Numeric', dataIndex: 'isoNumeric', hidden: false });
        countryGridcolumns.push({ text: 'createdBy', dataIndex: 'createdBy', hidden: true });
        countryGridcolumns.push({ text: 'createdDate', dataIndex: 'createdDate', hidden: true });
        countryGridcolumns.push({ text: 'updatedBy', dataIndex: 'updatedBy', hidden: true });
        countryGridcolumns.push({ text: 'updatedDate', dataIndex: 'updatedDate', hidden: true });
        countryGridcolumns.push({ text: 'versionId', dataIndex: 'versionId', hidden: true });
        countryGridcolumns.push({ text: 'activeStatus', dataIndex: 'activeStatus', hidden: true });
        countryGridcolumns.push({ text: 'txnAccessCode', dataIndex: 'txnAccessCode', hidden: true });
        this.countryGrid = new ng_custom_widgets_1.DataGridConfiguration(countryGridcolumns);
        this.countryGridData = [];
    }
    CountryComponent.prototype.onSaveClick = function () {
        var requestData = {};
        var componentArray = [this.countryName, this.countryCode1, this.countryCode2, this.countryFlag, this.capital, this.currencyCode, this.currencyName, this.currencySymbol, this.capitalLatitude, this.capitalLongitude, this.isoNumeric];
        if (this.commonsValidatorService.validateAndShowErrorMessages(componentArray)) {
            return;
        }
        requestData.countryName = this.countryModel.countryName;
        requestData.countryCode1 = this.countryModel.countryCode1;
        requestData.countryCode2 = this.countryModel.countryCode2;
        requestData.countryFlag = this.countryModel.countryFlag;
        requestData.capital = this.countryModel.capital;
        requestData.currencyCode = this.countryModel.currencyCode;
        requestData.currencyName = this.countryModel.currencyName;
        requestData.currencySymbol = this.countryModel.currencySymbol;
        requestData.capitalLatitude = this.countryModel.capitalLatitude;
        requestData.capitalLongitude = this.countryModel.capitalLongitude;
        requestData.isoNumeric = this.countryModel.isoNumeric;
        this.countryService.onSaveClick_callCountryService_saveOperation(this, 'onSaveClick_callCountryService_saveOperationComplete', requestData);
        this.countryModel.countryId = null;
        this.countryModel.countryName = null;
        this.countryModel.countryCode1 = null;
        this.countryModel.countryCode2 = null;
        this.countryModel.countryFlag = null;
        this.countryModel.capital = null;
        this.countryModel.currencyCode = null;
        this.countryModel.currencyName = null;
        this.countryModel.currencySymbol = null;
        this.countryModel.capitalLatitude = null;
        this.countryModel.capitalLongitude = null;
        this.countryModel.isoNumeric = null;
        this.countryModel.versionId = null;
    };
    CountryComponent.prototype.onSaveClick_callCountryService_saveOperationComplete = function (responseData) {
        if (responseData.response.success) {
            toastr.info(responseData.response.message);
        }
        else {
            toastr.error(responseData.response.message);
        }
    };
    CountryComponent.prototype.onUpdateClick = function () {
        var requestData = {};
        var componentArray = [this.countryName, this.countryCode1, this.countryCode2, this.countryFlag, this.capital, this.currencyCode, this.currencyName, this.currencySymbol, this.capitalLatitude, this.capitalLongitude, this.isoNumeric];
        if (this.commonsValidatorService.validateAndShowErrorMessages(componentArray)) {
            return;
        }
        requestData.countryId = this.countryModel.countryId;
        requestData.countryName = this.countryModel.countryName;
        requestData.countryCode1 = this.countryModel.countryCode1;
        requestData.countryCode2 = this.countryModel.countryCode2;
        requestData.countryFlag = this.countryModel.countryFlag;
        requestData.capital = this.countryModel.capital;
        requestData.currencyCode = this.countryModel.currencyCode;
        requestData.currencyName = this.countryModel.currencyName;
        requestData.currencySymbol = this.countryModel.currencySymbol;
        requestData.capitalLatitude = this.countryModel.capitalLatitude;
        requestData.capitalLongitude = this.countryModel.capitalLongitude;
        requestData.isoNumeric = this.countryModel.isoNumeric;
        requestData.versionId = this.countryModel.versionId;
        this.countryService.onUpdateClick_callCountryService_updateOperation(this, 'onUpdateClick_callCountryService_updateOperationComplete', requestData);
        this.countryModel.countryId = null;
        this.countryModel.countryName = null;
        this.countryModel.countryCode1 = null;
        this.countryModel.countryCode2 = null;
        this.countryModel.countryFlag = null;
        this.countryModel.capital = null;
        this.countryModel.currencyCode = null;
        this.countryModel.currencyName = null;
        this.countryModel.currencySymbol = null;
        this.countryModel.capitalLatitude = null;
        this.countryModel.capitalLongitude = null;
        this.countryModel.isoNumeric = null;
        this.countryModel.versionId = null;
        this.save.hidden = false;
        this.update.hidden = true;
    };
    CountryComponent.prototype.onUpdateClick_callCountryService_updateOperationComplete = function (responseData) {
        if (responseData.response.success) {
            toastr.info(responseData.response.message);
        }
        else {
            toastr.error(responseData.response.message);
        }
    };
    CountryComponent.prototype.onResetClick = function () {
        this.countryModel.countryId = null;
        this.countryModel.countryName = null;
        this.countryModel.countryCode1 = null;
        this.countryModel.countryCode2 = null;
        this.countryModel.countryFlag = null;
        this.countryModel.capital = null;
        this.countryModel.currencyCode = null;
        this.countryModel.currencyName = null;
        this.countryModel.currencySymbol = null;
        this.countryModel.capitalLatitude = null;
        this.countryModel.capitalLongitude = null;
        this.countryModel.isoNumeric = null;
        this.countryModel.versionId = null;
        this.save.hidden = false;
        this.update.hidden = true;
    };
    CountryComponent.prototype.onCountryGridRowClick = function (data) {
        var requestData = {};
        requestData.findKey = data.countryId;
        this.countryService.onCountryGridRowClick_callCountry_findByIdOperation(this, 'onCountryGridRowClick_callCountry_findByIdOperationComplete', requestData);
    };
    CountryComponent.prototype.onCountryGridRowClick_callCountry_findByIdOperationComplete = function (responseData) {
        var data = responseData.response.data;
        this.countryModel.countryId = data.countryId;
        this.countryModel.countryName = data.countryName;
        this.countryModel.countryCode1 = data.countryCode1;
        this.countryModel.countryCode2 = data.countryCode2;
        this.countryModel.countryFlag = data.countryFlag;
        this.countryModel.capital = data.capital;
        this.countryModel.currencyCode = data.currencyCode;
        this.countryModel.currencyName = data.currencyName;
        this.countryModel.currencySymbol = data.currencySymbol;
        this.countryModel.capitalLatitude = data.capitalLatitude;
        this.countryModel.capitalLongitude = data.capitalLongitude;
        this.countryModel.isoNumeric = data.isoNumeric;
        this.countryModel.versionId = data.versionId;
        this.save.hidden = true;
        this.update.hidden = false;
    };
    CountryComponent = __decorate([
        core_1.Component({
            selector: 'country-component',
            templateUrl: 'app/organization/locationmanagement/country/country.template.html'
        })
    ], CountryComponent);
    return CountryComponent;
}());
exports.CountryComponent = CountryComponent;
