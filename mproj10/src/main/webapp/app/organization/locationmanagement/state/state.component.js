"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var state_model_1 = require('./state.model');
var ng_custom_widgets_1 = require('ng_custom_widgets');
var StateComponent = (function () {
    function StateComponent(stateService, commonsValidatorService) {
        this.stateService = stateService;
        this.commonsValidatorService = commonsValidatorService;
        this.stateModel = new state_model_1.StateModel(null, '', null, '', '', '', '', '', null, null, '', '');
        this.countryIdData = [];
        this.countryId = new ng_custom_widgets_1.SelectInputConfiguration(false, false, true, 'Please select Country Code', 'primaryDisplay', 'primaryKey');
        this.stateName = new ng_custom_widgets_1.TextInputConfiguration(false, false, false, true, '0', '256', 'Please enter State Name');
        this.stateCode = new ng_custom_widgets_1.NumberInputConfiguration(false, false, false, true, '0', '2', 'State Code must be between 0 and 2');
        this.stateCodeChar2 = new ng_custom_widgets_1.TextInputConfiguration(false, false, false, true, '0', '32', 'Please enter State Code 2');
        this.stateCodeChar3 = new ng_custom_widgets_1.TextInputConfiguration(false, false, false, true, '0', '32', 'Please enter State Code 3');
        this.stateDescription = new ng_custom_widgets_1.TextAreaInputConfiguration(false, false, false, true, '', '', 'Please enter State Description');
        this.stateFlag = new ng_custom_widgets_1.TextInputConfiguration(false, false, false, true, '0', '128', 'Please enter Flag');
        this.stateCapital = new ng_custom_widgets_1.TextInputConfiguration(false, false, false, true, '0', '128', 'Please enter Capital');
        this.stateCapitalLatitude = new ng_custom_widgets_1.NumberInputConfiguration(false, false, false, true, '0', '11', 'Capitial Latitude must be between 0 and 11');
        this.stateCapitalLongitude = new ng_custom_widgets_1.NumberInputConfiguration(false, false, false, true, '0', '11', 'Capitial Longitude must be between 0 and 11');
        this.save = new ng_custom_widgets_1.SimpleButtonConfiguration(false, false);
        this.update = new ng_custom_widgets_1.SimpleButtonConfiguration(true, false);
        this.reset = new ng_custom_widgets_1.SimpleButtonConfiguration(false, false);
        var stateGridcolumns = [];
        stateGridcolumns.push({ text: 'State Id', dataIndex: 'stateId', hidden: true });
        stateGridcolumns.push({ text: 'Country Code', dataIndex: 'countryId', hidden: false });
        stateGridcolumns.push({ text: 'State Name', dataIndex: 'stateName', hidden: false });
        stateGridcolumns.push({ text: 'State Code', dataIndex: 'stateCode', hidden: false });
        stateGridcolumns.push({ text: 'State Code 2', dataIndex: 'stateCodeChar2', hidden: false });
        stateGridcolumns.push({ text: 'State Code 3', dataIndex: 'stateCodeChar3', hidden: false });
        stateGridcolumns.push({ text: 'State Description', dataIndex: 'stateDescription', hidden: false });
        stateGridcolumns.push({ text: 'Flag', dataIndex: 'stateFlag', hidden: false });
        stateGridcolumns.push({ text: 'Capital', dataIndex: 'stateCapital', hidden: false });
        stateGridcolumns.push({ text: 'Capitial Latitude', dataIndex: 'stateCapitalLatitude', hidden: false });
        stateGridcolumns.push({ text: 'Capitial Longitude', dataIndex: 'stateCapitalLongitude', hidden: false });
        stateGridcolumns.push({ text: 'createdBy', dataIndex: 'createdBy', hidden: true });
        stateGridcolumns.push({ text: 'createdDate', dataIndex: 'createdDate', hidden: true });
        stateGridcolumns.push({ text: 'updatedBy', dataIndex: 'updatedBy', hidden: true });
        stateGridcolumns.push({ text: 'updatedDate', dataIndex: 'updatedDate', hidden: true });
        stateGridcolumns.push({ text: 'versionId', dataIndex: 'versionId', hidden: true });
        stateGridcolumns.push({ text: 'activeStatus', dataIndex: 'activeStatus', hidden: true });
        stateGridcolumns.push({ text: 'txnAccessCode', dataIndex: 'txnAccessCode', hidden: true });
        this.stateGrid = new ng_custom_widgets_1.DataGridConfiguration(stateGridcolumns);
        this.stateGridData = [];
    }
    StateComponent.prototype.onSaveClick = function () {
        var requestData = {};
        var componentArray = [this.countryId, this.stateName, this.stateCode, this.stateCodeChar2, this.stateCodeChar3, this.stateDescription, this.stateFlag, this.stateCapital, this.stateCapitalLatitude, this.stateCapitalLongitude];
        if (this.commonsValidatorService.validateAndShowErrorMessages(componentArray)) {
            return;
        }
        requestData.countryId = this.stateModel.countryId;
        requestData.stateName = this.stateModel.stateName;
        requestData.stateCode = this.stateModel.stateCode;
        requestData.stateCodeChar2 = this.stateModel.stateCodeChar2;
        requestData.stateCodeChar3 = this.stateModel.stateCodeChar3;
        requestData.stateDescription = this.stateModel.stateDescription;
        requestData.stateFlag = this.stateModel.stateFlag;
        requestData.stateCapital = this.stateModel.stateCapital;
        requestData.stateCapitalLatitude = this.stateModel.stateCapitalLatitude;
        requestData.stateCapitalLongitude = this.stateModel.stateCapitalLongitude;
        this.stateService.onSaveClick_callStateService_saveOperation(this, 'onSaveClick_callStateService_saveOperationComplete', requestData);
        this.stateModel.stateId = null;
        this.stateModel.countryId = null;
        this.stateModel.stateName = null;
        this.stateModel.stateCode = null;
        this.stateModel.stateCodeChar2 = null;
        this.stateModel.stateCodeChar3 = null;
        this.stateModel.stateDescription = null;
        this.stateModel.stateFlag = null;
        this.stateModel.stateCapital = null;
        this.stateModel.stateCapitalLatitude = null;
        this.stateModel.stateCapitalLongitude = null;
        this.stateModel.versionId = null;
    };
    StateComponent.prototype.onSaveClick_callStateService_saveOperationComplete = function (responseData) {
        if (responseData.response.success) {
            toastr.info(responseData.response.message);
        }
        else {
            toastr.error(responseData.response.message);
        }
    };
    StateComponent.prototype.onUpdateClick = function () {
        var requestData = {};
        var componentArray = [this.countryId, this.stateName, this.stateCode, this.stateCodeChar2, this.stateCodeChar3, this.stateDescription, this.stateFlag, this.stateCapital, this.stateCapitalLatitude, this.stateCapitalLongitude];
        if (this.commonsValidatorService.validateAndShowErrorMessages(componentArray)) {
            return;
        }
        requestData.stateId = this.stateModel.stateId;
        requestData.countryId = this.stateModel.countryId;
        requestData.stateName = this.stateModel.stateName;
        requestData.stateCode = this.stateModel.stateCode;
        requestData.stateCodeChar2 = this.stateModel.stateCodeChar2;
        requestData.stateCodeChar3 = this.stateModel.stateCodeChar3;
        requestData.stateDescription = this.stateModel.stateDescription;
        requestData.stateFlag = this.stateModel.stateFlag;
        requestData.stateCapital = this.stateModel.stateCapital;
        requestData.stateCapitalLatitude = this.stateModel.stateCapitalLatitude;
        requestData.stateCapitalLongitude = this.stateModel.stateCapitalLongitude;
        requestData.versionId = this.stateModel.versionId;
        this.stateService.onUpdateClick_callStateService_updateOperation(this, 'onUpdateClick_callStateService_updateOperationComplete', requestData);
        this.stateModel.stateId = null;
        this.stateModel.countryId = null;
        this.stateModel.stateName = null;
        this.stateModel.stateCode = null;
        this.stateModel.stateCodeChar2 = null;
        this.stateModel.stateCodeChar3 = null;
        this.stateModel.stateDescription = null;
        this.stateModel.stateFlag = null;
        this.stateModel.stateCapital = null;
        this.stateModel.stateCapitalLatitude = null;
        this.stateModel.stateCapitalLongitude = null;
        this.stateModel.versionId = null;
        this.save.hidden = false;
        this.update.hidden = true;
    };
    StateComponent.prototype.onUpdateClick_callStateService_updateOperationComplete = function (responseData) {
        if (responseData.response.success) {
            toastr.info(responseData.response.message);
        }
        else {
            toastr.error(responseData.response.message);
        }
    };
    StateComponent.prototype.onResetClick = function () {
        this.stateModel.stateId = null;
        this.stateModel.countryId = null;
        this.stateModel.stateName = null;
        this.stateModel.stateCode = null;
        this.stateModel.stateCodeChar2 = null;
        this.stateModel.stateCodeChar3 = null;
        this.stateModel.stateDescription = null;
        this.stateModel.stateFlag = null;
        this.stateModel.stateCapital = null;
        this.stateModel.stateCapitalLatitude = null;
        this.stateModel.stateCapitalLongitude = null;
        this.stateModel.versionId = null;
        this.save.hidden = false;
        this.update.hidden = true;
    };
    StateComponent.prototype.onStateGridRowClick = function (data) {
        var requestData = {};
        requestData.findKey = data.stateId;
        this.stateService.onStateGridRowClick_callState_findByIdOperation(this, 'onStateGridRowClick_callState_findByIdOperationComplete', requestData);
    };
    StateComponent.prototype.onStateGridRowClick_callState_findByIdOperationComplete = function (responseData) {
        var data = responseData.response.data;
        this.stateModel.stateId = data.stateId;
        this.stateModel.countryId = data.countryId;
        this.stateModel.stateName = data.stateName;
        this.stateModel.stateCode = data.stateCode;
        this.stateModel.stateCodeChar2 = data.stateCodeChar2;
        this.stateModel.stateCodeChar3 = data.stateCodeChar3;
        this.stateModel.stateDescription = data.stateDescription;
        this.stateModel.stateFlag = data.stateFlag;
        this.stateModel.stateCapital = data.stateCapital;
        this.stateModel.stateCapitalLatitude = data.stateCapitalLatitude;
        this.stateModel.stateCapitalLongitude = data.stateCapitalLongitude;
        this.stateModel.versionId = data.versionId;
        this.save.hidden = true;
        this.update.hidden = false;
    };
    StateComponent = __decorate([
        core_1.Component({
            selector: 'state-component',
            templateUrl: 'app/organization/locationmanagement/state/state.template.html'
        })
    ], StateComponent);
    return StateComponent;
}());
exports.StateComponent = StateComponent;
