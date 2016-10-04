"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var contacttype_model_1 = require('./contacttype.model');
var ng_custom_widgets_1 = require('ng_custom_widgets');
var ContactTypeComponent = (function () {
    function ContactTypeComponent(contactTypeService, commonsValidatorService) {
        this.contactTypeService = contactTypeService;
        this.commonsValidatorService = commonsValidatorService;
        this.contactTypeModel = new contacttype_model_1.ContactTypeModel('', '', '', '', '');
        this.contactType = new ng_custom_widgets_1.TextInputConfiguration(false, false, false, true, '0', '128', 'Please enter contact type');
        this.contactTypeDesc = new ng_custom_widgets_1.TextAreaInputConfiguration(false, false, false, true, '', '', 'Please enter Contact Type Description');
        this.contactTypeIcon = new ng_custom_widgets_1.TextInputConfiguration(false, false, false, true, '0', '128', 'Please enter Contact Type Icon');
        this.save = new ng_custom_widgets_1.SimpleButtonConfiguration(false, false);
        this.update = new ng_custom_widgets_1.SimpleButtonConfiguration(true, false);
        this.reset = new ng_custom_widgets_1.SimpleButtonConfiguration(false, false);
        var contactTypeGridcolumns = [];
        contactTypeGridcolumns.push({ text: 'Contact Type Id', dataIndex: 'contactTypeId', hidden: true });
        contactTypeGridcolumns.push({ text: 'Contact Type', dataIndex: 'contactType', hidden: false });
        contactTypeGridcolumns.push({ text: 'Contact Type Description', dataIndex: 'contactTypeDesc', hidden: false });
        contactTypeGridcolumns.push({ text: 'Contact Type Icon', dataIndex: 'contactTypeIcon', hidden: false });
        contactTypeGridcolumns.push({ text: 'createdBy', dataIndex: 'createdBy', hidden: true });
        contactTypeGridcolumns.push({ text: 'createdDate', dataIndex: 'createdDate', hidden: true });
        contactTypeGridcolumns.push({ text: 'updatedBy', dataIndex: 'updatedBy', hidden: true });
        contactTypeGridcolumns.push({ text: 'updatedDate', dataIndex: 'updatedDate', hidden: true });
        contactTypeGridcolumns.push({ text: 'versionId', dataIndex: 'versionId', hidden: true });
        contactTypeGridcolumns.push({ text: 'activeStatus', dataIndex: 'activeStatus', hidden: true });
        contactTypeGridcolumns.push({ text: 'txnAccessCode', dataIndex: 'txnAccessCode', hidden: true });
        this.contactTypeGrid = new ng_custom_widgets_1.DataGridConfiguration(contactTypeGridcolumns);
        this.contactTypeGridData = [];
    }
    ContactTypeComponent.prototype.onSaveClick = function () {
        var requestData = {};
        var componentArray = [this.contactType, this.contactTypeDesc, this.contactTypeIcon];
        if (this.commonsValidatorService.validateAndShowErrorMessages(componentArray)) {
            return;
        }
        requestData.contactType = this.contactTypeModel.contactType;
        requestData.contactTypeDesc = this.contactTypeModel.contactTypeDesc;
        requestData.contactTypeIcon = this.contactTypeModel.contactTypeIcon;
        this.contactTypeService.onSaveClick_callContactTypeService_saveOperation(this, 'onSaveClick_callContactTypeService_saveOperationComplete', requestData);
        this.contactTypeModel.contactTypeId = null;
        this.contactTypeModel.contactType = null;
        this.contactTypeModel.contactTypeDesc = null;
        this.contactTypeModel.contactTypeIcon = null;
        this.contactTypeModel.versionId = null;
    };
    ContactTypeComponent.prototype.onSaveClick_callContactTypeService_saveOperationComplete = function (responseData) {
        if (responseData.response.success) {
            toastr.info(responseData.response.message);
        }
        else {
            toastr.error(responseData.response.message);
        }
    };
    ContactTypeComponent.prototype.onUpdateClick = function () {
        var requestData = {};
        var componentArray = [this.contactType, this.contactTypeDesc, this.contactTypeIcon];
        if (this.commonsValidatorService.validateAndShowErrorMessages(componentArray)) {
            return;
        }
        requestData.contactTypeId = this.contactTypeModel.contactTypeId;
        requestData.contactType = this.contactTypeModel.contactType;
        requestData.contactTypeDesc = this.contactTypeModel.contactTypeDesc;
        requestData.contactTypeIcon = this.contactTypeModel.contactTypeIcon;
        requestData.versionId = this.contactTypeModel.versionId;
        this.contactTypeService.onUpdateClick_callContactTypeService_updateOperation(this, 'onUpdateClick_callContactTypeService_updateOperationComplete', requestData);
        this.contactTypeModel.contactTypeId = null;
        this.contactTypeModel.contactType = null;
        this.contactTypeModel.contactTypeDesc = null;
        this.contactTypeModel.contactTypeIcon = null;
        this.contactTypeModel.versionId = null;
        this.save.hidden = false;
        this.update.hidden = true;
    };
    ContactTypeComponent.prototype.onUpdateClick_callContactTypeService_updateOperationComplete = function (responseData) {
        if (responseData.response.success) {
            toastr.info(responseData.response.message);
        }
        else {
            toastr.error(responseData.response.message);
        }
    };
    ContactTypeComponent.prototype.onResetClick = function () {
        this.contactTypeModel.contactTypeId = null;
        this.contactTypeModel.contactType = null;
        this.contactTypeModel.contactTypeDesc = null;
        this.contactTypeModel.contactTypeIcon = null;
        this.contactTypeModel.versionId = null;
        this.save.hidden = false;
        this.update.hidden = true;
    };
    ContactTypeComponent.prototype.onContactTypeGridRowClick = function (data) {
        var requestData = {};
        requestData.findKey = data.contactTypeId;
        this.contactTypeService.onContactTypeGridRowClick_callContactType_findByIdOperation(this, 'onContactTypeGridRowClick_callContactType_findByIdOperationComplete', requestData);
    };
    ContactTypeComponent.prototype.onContactTypeGridRowClick_callContactType_findByIdOperationComplete = function (responseData) {
        var data = responseData.response.data;
        this.contactTypeModel.contactTypeId = data.contactTypeId;
        this.contactTypeModel.contactType = data.contactType;
        this.contactTypeModel.contactTypeDesc = data.contactTypeDesc;
        this.contactTypeModel.contactTypeIcon = data.contactTypeIcon;
        this.contactTypeModel.versionId = data.versionId;
        this.save.hidden = true;
        this.update.hidden = false;
    };
    ContactTypeComponent = __decorate([
        core_1.Component({
            selector: 'contacttype-component',
            templateUrl: 'app/organization/contactmanagement/contacttype/contacttype.template.html'
        })
    ], ContactTypeComponent);
    return ContactTypeComponent;
}());
exports.ContactTypeComponent = ContactTypeComponent;
