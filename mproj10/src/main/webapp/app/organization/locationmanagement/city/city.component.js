"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var city_model_1 = require('./city.model');
var ng_custom_widgets_1 = require('ng_custom_widgets');
var CityComponent = (function () {
    function CityComponent(cityService, commonsValidatorService) {
        this.cityService = cityService;
        this.commonsValidatorService = commonsValidatorService;
        this.cityModel = new city_model_1.CityModel(null, null, '', '', null, '', '', null, null, '', '');
        this.countryIdData = [];
        this.countryId = new ng_custom_widgets_1.SelectInputConfiguration(false, false, true, 'Please select Country', 'primaryDisplay', 'primaryKey');
        this.stateIdData = [];
        this.stateId = new ng_custom_widgets_1.SelectInputConfiguration(false, false, true, 'Please select State', 'primaryDisplay', 'primaryKey');
        this.cityName = new ng_custom_widgets_1.TextInputConfiguration(false, false, false, true, '0', '256', 'Please enter City Name');
        this.cityCodeChar2 = new ng_custom_widgets_1.TextInputConfiguration(false, false, false, true, '0', '32', 'Please enter City Code');
        this.cityCode = new ng_custom_widgets_1.NumberInputConfiguration(false, false, false, true, '0', '3', 'City Code1 must be between 0 and 3');
        this.cityDescription = new ng_custom_widgets_1.TextAreaInputConfiguration(false, false, false, true, '', '', 'Please enter City Description');
        this.cityFlag = new ng_custom_widgets_1.TextInputConfiguration(false, false, false, true, '0', '128', 'Please enter Flag');
        this.cityLatitude = new ng_custom_widgets_1.NumberInputConfiguration(false, false, false, true, '0', '11', 'City Latitude must be between 0 and 11');
        this.cityLongitude = new ng_custom_widgets_1.NumberInputConfiguration(false, false, false, true, '0', '11', 'City Longitude must be between 0 and 11');
        this.save = new ng_custom_widgets_1.SimpleButtonConfiguration(false, false);
        this.update = new ng_custom_widgets_1.SimpleButtonConfiguration(true, false);
        this.reset = new ng_custom_widgets_1.SimpleButtonConfiguration(false, false);
        var cityGridcolumns = [];
        cityGridcolumns.push({ text: 'City Id', dataIndex: 'cityId', hidden: true });
        cityGridcolumns.push({ text: 'Country', dataIndex: 'countryId', hidden: false });
        cityGridcolumns.push({ text: 'State', dataIndex: 'stateId', hidden: false });
        cityGridcolumns.push({ text: 'City Name', dataIndex: 'cityName', hidden: false });
        cityGridcolumns.push({ text: 'City Code', dataIndex: 'cityCodeChar2', hidden: false });
        cityGridcolumns.push({ text: 'City Code1', dataIndex: 'cityCode', hidden: false });
        cityGridcolumns.push({ text: 'City Description', dataIndex: 'cityDescription', hidden: false });
        cityGridcolumns.push({ text: 'Flag', dataIndex: 'cityFlag', hidden: false });
        cityGridcolumns.push({ text: 'City Latitude', dataIndex: 'cityLatitude', hidden: false });
        cityGridcolumns.push({ text: 'City Longitude', dataIndex: 'cityLongitude', hidden: false });
        cityGridcolumns.push({ text: 'createdBy', dataIndex: 'createdBy', hidden: true });
        cityGridcolumns.push({ text: 'createdDate', dataIndex: 'createdDate', hidden: true });
        cityGridcolumns.push({ text: 'updatedBy', dataIndex: 'updatedBy', hidden: true });
        cityGridcolumns.push({ text: 'updatedDate', dataIndex: 'updatedDate', hidden: true });
        cityGridcolumns.push({ text: 'versionId', dataIndex: 'versionId', hidden: true });
        cityGridcolumns.push({ text: 'activeStatus', dataIndex: 'activeStatus', hidden: true });
        cityGridcolumns.push({ text: 'txnAccessCode', dataIndex: 'txnAccessCode', hidden: true });
        this.cityGrid = new ng_custom_widgets_1.DataGridConfiguration(cityGridcolumns);
        this.cityGridData = [];
    }
    CityComponent.prototype.onCountryIdSelect = function (data) {
        var requestData = {};
        var componentArray = [this.countryId];
        if (this.commonsValidatorService.validateAndShowErrorMessages(componentArray)) {
            return;
        }
        requestData.findKey = data.value;
        this.cityService.onCountryIdSelect_callStateService_findByCountryIdOperation(this, 'onCountryIdSelect_callStateService_findByCountryIdOperationComplete', requestData);
    };
    CityComponent.prototype.onCountryIdSelect_callStateService_findByCountryIdOperationComplete = function (responseData) {
        var data = responseData.response.data;
        this.stateIdData = responseData;
    };
    CityComponent.prototype.onSaveClick = function () {
        var requestData = {};
        var componentArray = [this.countryId, this.stateId, this.cityName, this.cityCodeChar2, this.cityCode, this.cityDescription, this.cityFlag, this.cityLatitude, this.cityLongitude];
        if (this.commonsValidatorService.validateAndShowErrorMessages(componentArray)) {
            return;
        }
        requestData.countryId = this.cityModel.countryId;
        requestData.stateId = this.cityModel.stateId;
        requestData.cityName = this.cityModel.cityName;
        requestData.cityCodeChar2 = this.cityModel.cityCodeChar2;
        requestData.cityCode = this.cityModel.cityCode;
        requestData.cityDescription = this.cityModel.cityDescription;
        requestData.cityFlag = this.cityModel.cityFlag;
        requestData.cityLatitude = this.cityModel.cityLatitude;
        requestData.cityLongitude = this.cityModel.cityLongitude;
        this.cityService.onSaveClick_callCityService_saveOperation(this, 'onSaveClick_callCityService_saveOperationComplete', requestData);
        this.cityModel.cityId = null;
        this.cityModel.countryId = null;
        this.cityModel.stateId = null;
        this.cityModel.cityName = null;
        this.cityModel.cityCodeChar2 = null;
        this.cityModel.cityCode = null;
        this.cityModel.cityDescription = null;
        this.cityModel.cityFlag = null;
        this.cityModel.cityLatitude = null;
        this.cityModel.cityLongitude = null;
        this.cityModel.versionId = null;
    };
    CityComponent.prototype.onSaveClick_callCityService_saveOperationComplete = function (responseData) {
        if (responseData.response.success) {
            toastr.info(responseData.response.message);
        }
        else {
            toastr.error(responseData.response.message);
        }
    };
    CityComponent.prototype.onUpdateClick = function () {
        var requestData = {};
        var componentArray = [this.countryId, this.stateId, this.cityName, this.cityCodeChar2, this.cityCode, this.cityDescription, this.cityFlag, this.cityLatitude, this.cityLongitude];
        if (this.commonsValidatorService.validateAndShowErrorMessages(componentArray)) {
            return;
        }
        requestData.cityId = this.cityModel.cityId;
        requestData.countryId = this.cityModel.countryId;
        requestData.stateId = this.cityModel.stateId;
        requestData.cityName = this.cityModel.cityName;
        requestData.cityCodeChar2 = this.cityModel.cityCodeChar2;
        requestData.cityCode = this.cityModel.cityCode;
        requestData.cityDescription = this.cityModel.cityDescription;
        requestData.cityFlag = this.cityModel.cityFlag;
        requestData.cityLatitude = this.cityModel.cityLatitude;
        requestData.cityLongitude = this.cityModel.cityLongitude;
        requestData.versionId = this.cityModel.versionId;
        this.cityService.onUpdateClick_callCityService_updateOperation(this, 'onUpdateClick_callCityService_updateOperationComplete', requestData);
        this.cityModel.cityId = null;
        this.cityModel.countryId = null;
        this.cityModel.stateId = null;
        this.cityModel.cityName = null;
        this.cityModel.cityCodeChar2 = null;
        this.cityModel.cityCode = null;
        this.cityModel.cityDescription = null;
        this.cityModel.cityFlag = null;
        this.cityModel.cityLatitude = null;
        this.cityModel.cityLongitude = null;
        this.cityModel.versionId = null;
        this.save.hidden = false;
        this.update.hidden = true;
    };
    CityComponent.prototype.onUpdateClick_callCityService_updateOperationComplete = function (responseData) {
        if (responseData.response.success) {
            toastr.info(responseData.response.message);
        }
        else {
            toastr.error(responseData.response.message);
        }
    };
    CityComponent.prototype.onResetClick = function () {
        this.cityModel.cityId = null;
        this.cityModel.countryId = null;
        this.cityModel.stateId = null;
        this.cityModel.cityName = null;
        this.cityModel.cityCodeChar2 = null;
        this.cityModel.cityCode = null;
        this.cityModel.cityDescription = null;
        this.cityModel.cityFlag = null;
        this.cityModel.cityLatitude = null;
        this.cityModel.cityLongitude = null;
        this.cityModel.versionId = null;
        this.save.hidden = false;
        this.update.hidden = true;
    };
    CityComponent.prototype.onCityGridRowClick = function (data) {
        var requestData = {};
        requestData.findKey = data.cityId;
        this.cityService.onCityGridRowClick_callCity_findByIdOperation(this, 'onCityGridRowClick_callCity_findByIdOperationComplete', requestData);
    };
    CityComponent.prototype.onCityGridRowClick_callCity_findByIdOperationComplete = function (responseData) {
        var data = responseData.response.data;
        this.cityModel.cityId = data.cityId;
        this.cityModel.countryId = data.countryId;
        this.cityModel.stateId = data.stateId;
        this.cityModel.cityName = data.cityName;
        this.cityModel.cityCodeChar2 = data.cityCodeChar2;
        this.cityModel.cityCode = data.cityCode;
        this.cityModel.cityDescription = data.cityDescription;
        this.cityModel.cityFlag = data.cityFlag;
        this.cityModel.cityLatitude = data.cityLatitude;
        this.cityModel.cityLongitude = data.cityLongitude;
        this.cityModel.versionId = data.versionId;
        this.save.hidden = true;
        this.update.hidden = false;
    };
    CityComponent = __decorate([
        core_1.Component({
            selector: 'city-component',
            templateUrl: 'app/organization/locationmanagement/city/city.template.html'
        })
    ], CityComponent);
    return CityComponent;
}());
exports.CityComponent = CityComponent;
