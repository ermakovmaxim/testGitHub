"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var addresstype_model_1 = require('./addresstype.model');
var ng_custom_widgets_1 = require('ng_custom_widgets');
var AddressTypeComponent = (function () {
    function AddressTypeComponent(addressTypeService, commonsValidatorService) {
        this.addressTypeService = addressTypeService;
        this.commonsValidatorService = commonsValidatorService;
        this.addressTypeModel = new addresstype_model_1.AddressTypeModel('', '', '', '', '');
        this.addressType = new ng_custom_widgets_1.TextInputConfiguration(false, false, false, true, '0', '128', 'Please enter address type');
        this.addressTypeDesc = new ng_custom_widgets_1.TextAreaInputConfiguration(false, false, false, true, '', '', 'Please enter Address Type Desc');
        this.addressTypeIcon = new ng_custom_widgets_1.TextInputConfiguration(false, false, false, true, '0', '128', 'Please enter Address Type Icon');
        this.save = new ng_custom_widgets_1.SimpleButtonConfiguration(false, false);
        this.update = new ng_custom_widgets_1.SimpleButtonConfiguration(true, false);
        this.reset = new ng_custom_widgets_1.SimpleButtonConfiguration(false, false);
        var addressTypeGridcolumns = [];
        addressTypeGridcolumns.push({ text: 'Address Type Id', dataIndex: 'addressTypeId', hidden: true });
        addressTypeGridcolumns.push({ text: 'Address Type', dataIndex: 'addressType', hidden: false });
        addressTypeGridcolumns.push({ text: 'Address Type Desc', dataIndex: 'addressTypeDesc', hidden: false });
        addressTypeGridcolumns.push({ text: 'Address Type Icon', dataIndex: 'addressTypeIcon', hidden: false });
        addressTypeGridcolumns.push({ text: 'createdBy', dataIndex: 'createdBy', hidden: true });
        addressTypeGridcolumns.push({ text: 'createdDate', dataIndex: 'createdDate', hidden: true });
        addressTypeGridcolumns.push({ text: 'updatedBy', dataIndex: 'updatedBy', hidden: true });
        addressTypeGridcolumns.push({ text: 'updatedDate', dataIndex: 'updatedDate', hidden: true });
        addressTypeGridcolumns.push({ text: 'versionId', dataIndex: 'versionId', hidden: true });
        addressTypeGridcolumns.push({ text: 'activeStatus', dataIndex: 'activeStatus', hidden: true });
        addressTypeGridcolumns.push({ text: 'txnAccessCode', dataIndex: 'txnAccessCode', hidden: true });
        this.addressTypeGrid = new ng_custom_widgets_1.DataGridConfiguration(addressTypeGridcolumns);
        this.addressTypeGridData = [];
    }
    AddressTypeComponent.prototype.onSaveClick = function () {
        var requestData = {};
        var componentArray = [this.addressType, this.addressTypeDesc, this.addressTypeIcon];
        if (this.commonsValidatorService.validateAndShowErrorMessages(componentArray)) {
            return;
        }
        requestData.addressType = this.addressTypeModel.addressType;
        requestData.addressTypeDesc = this.addressTypeModel.addressTypeDesc;
        requestData.addressTypeIcon = this.addressTypeModel.addressTypeIcon;
        this.addressTypeService.onSaveClick_callAddressTypeService_saveOperation(this, 'onSaveClick_callAddressTypeService_saveOperationComplete', requestData);
        this.addressTypeModel.addressTypeId = null;
        this.addressTypeModel.addressType = null;
        this.addressTypeModel.addressTypeDesc = null;
        this.addressTypeModel.addressTypeIcon = null;
        this.addressTypeModel.versionId = null;
    };
    AddressTypeComponent.prototype.onSaveClick_callAddressTypeService_saveOperationComplete = function (responseData) {
        if (responseData.response.success) {
            toastr.info(responseData.response.message);
        }
        else {
            toastr.error(responseData.response.message);
        }
    };
    AddressTypeComponent.prototype.onUpdateClick = function () {
        var requestData = {};
        var componentArray = [this.addressType, this.addressTypeDesc, this.addressTypeIcon];
        if (this.commonsValidatorService.validateAndShowErrorMessages(componentArray)) {
            return;
        }
        requestData.addressTypeId = this.addressTypeModel.addressTypeId;
        requestData.addressType = this.addressTypeModel.addressType;
        requestData.addressTypeDesc = this.addressTypeModel.addressTypeDesc;
        requestData.addressTypeIcon = this.addressTypeModel.addressTypeIcon;
        requestData.versionId = this.addressTypeModel.versionId;
        this.addressTypeService.onUpdateClick_callAddressTypeService_updateOperation(this, 'onUpdateClick_callAddressTypeService_updateOperationComplete', requestData);
        this.addressTypeModel.addressTypeId = null;
        this.addressTypeModel.addressType = null;
        this.addressTypeModel.addressTypeDesc = null;
        this.addressTypeModel.addressTypeIcon = null;
        this.addressTypeModel.versionId = null;
        this.save.hidden = false;
        this.update.hidden = true;
    };
    AddressTypeComponent.prototype.onUpdateClick_callAddressTypeService_updateOperationComplete = function (responseData) {
        if (responseData.response.success) {
            toastr.info(responseData.response.message);
        }
        else {
            toastr.error(responseData.response.message);
        }
    };
    AddressTypeComponent.prototype.onResetClick = function () {
        this.addressTypeModel.addressTypeId = null;
        this.addressTypeModel.addressType = null;
        this.addressTypeModel.addressTypeDesc = null;
        this.addressTypeModel.addressTypeIcon = null;
        this.addressTypeModel.versionId = null;
        this.save.hidden = false;
        this.update.hidden = true;
    };
    AddressTypeComponent.prototype.onAddressTypeGridRowClick = function (data) {
        var requestData = {};
        requestData.findKey = data.addressTypeId;
        this.addressTypeService.onAddressTypeGridRowClick_callAddressType_findByIdOperation(this, 'onAddressTypeGridRowClick_callAddressType_findByIdOperationComplete', requestData);
    };
    AddressTypeComponent.prototype.onAddressTypeGridRowClick_callAddressType_findByIdOperationComplete = function (responseData) {
        var data = responseData.response.data;
        this.addressTypeModel.addressTypeId = data.addressTypeId;
        this.addressTypeModel.addressType = data.addressType;
        this.addressTypeModel.addressTypeDesc = data.addressTypeDesc;
        this.addressTypeModel.addressTypeIcon = data.addressTypeIcon;
        this.addressTypeModel.versionId = data.versionId;
        this.save.hidden = true;
        this.update.hidden = false;
    };
    AddressTypeComponent = __decorate([
        core_1.Component({
            selector: 'addresstype-component',
            templateUrl: 'app/organization/locationmanagement/addresstype/addresstype.template.html'
        })
    ], AddressTypeComponent);
    return AddressTypeComponent;
}());
exports.AddressTypeComponent = AddressTypeComponent;
