"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var phonecategory_model_1 = require('./phonecategory.model');
var ng_custom_widgets_1 = require('ng_custom_widgets');
var PhoneCategoryComponent = (function () {
    function PhoneCategoryComponent(phoneCategoryService, commonsValidatorService) {
        this.phoneCategoryService = phoneCategoryService;
        this.commonsValidatorService = commonsValidatorService;
        this.phoneCategoryModel = new phonecategory_model_1.PhoneCategoryModel('', '', '');
        this.phoneCatName = new ng_custom_widgets_1.TextInputConfiguration(false, false, false, true, '1', '256', 'Please enter Phone Category Name');
        this.save = new ng_custom_widgets_1.SimpleButtonConfiguration(false, false);
        this.update = new ng_custom_widgets_1.SimpleButtonConfiguration(true, false);
        this.reset = new ng_custom_widgets_1.SimpleButtonConfiguration(false, false);
        var phoneCategoryGridcolumns = [];
        phoneCategoryGridcolumns.push({ text: 'Phone Category Id', dataIndex: 'phoneCatId', hidden: true });
        phoneCategoryGridcolumns.push({ text: 'Phone Category Name', dataIndex: 'phoneCatName', hidden: false });
        phoneCategoryGridcolumns.push({ text: 'createdBy', dataIndex: 'createdBy', hidden: true });
        phoneCategoryGridcolumns.push({ text: 'createdDate', dataIndex: 'createdDate', hidden: true });
        phoneCategoryGridcolumns.push({ text: 'updatedBy', dataIndex: 'updatedBy', hidden: true });
        phoneCategoryGridcolumns.push({ text: 'updatedDate', dataIndex: 'updatedDate', hidden: true });
        phoneCategoryGridcolumns.push({ text: 'versionId', dataIndex: 'versionId', hidden: true });
        phoneCategoryGridcolumns.push({ text: 'activeStatus', dataIndex: 'activeStatus', hidden: true });
        phoneCategoryGridcolumns.push({ text: 'txnAccessCode', dataIndex: 'txnAccessCode', hidden: true });
        this.phoneCategoryGrid = new ng_custom_widgets_1.DataGridConfiguration(phoneCategoryGridcolumns);
        this.phoneCategoryGridData = [];
    }
    PhoneCategoryComponent.prototype.onSaveClick = function () {
        var requestData = {};
        var componentArray = [this.phoneCatName];
        if (this.commonsValidatorService.validateAndShowErrorMessages(componentArray)) {
            return;
        }
        requestData.phoneCatName = this.phoneCategoryModel.phoneCatName;
        this.phoneCategoryService.onSaveClick_callPhoneCategoryService_saveOperation(this, 'onSaveClick_callPhoneCategoryService_saveOperationComplete', requestData);
        this.phoneCategoryModel.phoneCatId = null;
        this.phoneCategoryModel.phoneCatName = null;
        this.phoneCategoryModel.versionId = null;
    };
    PhoneCategoryComponent.prototype.onSaveClick_callPhoneCategoryService_saveOperationComplete = function (responseData) {
        if (responseData.response.success) {
            toastr.info(responseData.response.message);
        }
        else {
            toastr.error(responseData.response.message);
        }
    };
    PhoneCategoryComponent.prototype.onUpdateClick = function () {
        var requestData = {};
        var componentArray = [this.phoneCatName];
        if (this.commonsValidatorService.validateAndShowErrorMessages(componentArray)) {
            return;
        }
        requestData.phoneCatId = this.phoneCategoryModel.phoneCatId;
        requestData.phoneCatName = this.phoneCategoryModel.phoneCatName;
        requestData.versionId = this.phoneCategoryModel.versionId;
        this.phoneCategoryService.onUpdateClick_callPhoneCategoryService_updateOperation(this, 'onUpdateClick_callPhoneCategoryService_updateOperationComplete', requestData);
        this.phoneCategoryModel.phoneCatId = null;
        this.phoneCategoryModel.phoneCatName = null;
        this.phoneCategoryModel.versionId = null;
        this.save.hidden = false;
        this.update.hidden = true;
    };
    PhoneCategoryComponent.prototype.onUpdateClick_callPhoneCategoryService_updateOperationComplete = function (responseData) {
        if (responseData.response.success) {
            toastr.info(responseData.response.message);
        }
        else {
            toastr.error(responseData.response.message);
        }
    };
    PhoneCategoryComponent.prototype.onResetClick = function () {
        this.phoneCategoryModel.phoneCatId = null;
        this.phoneCategoryModel.phoneCatName = null;
        this.phoneCategoryModel.versionId = null;
        this.save.hidden = false;
        this.update.hidden = true;
    };
    PhoneCategoryComponent.prototype.onPhoneCategoryGridRowClick = function (data) {
        var requestData = {};
        requestData.findKey = data.phoneCatId;
        this.phoneCategoryService.onPhoneCategoryGridRowClick_callPhoneCategory_findByIdOperation(this, 'onPhoneCategoryGridRowClick_callPhoneCategory_findByIdOperationComplete', requestData);
    };
    PhoneCategoryComponent.prototype.onPhoneCategoryGridRowClick_callPhoneCategory_findByIdOperationComplete = function (responseData) {
        var data = responseData.response.data;
        this.phoneCategoryModel.phoneCatId = data.phoneCatId;
        this.phoneCategoryModel.phoneCatName = data.phoneCatName;
        this.phoneCategoryModel.versionId = data.versionId;
        this.save.hidden = true;
        this.update.hidden = false;
    };
    PhoneCategoryComponent = __decorate([
        core_1.Component({
            selector: 'phonecategory-component',
            templateUrl: 'app/organization/contactmanagement/phonecategory/phonecategory.template.html'
        })
    ], PhoneCategoryComponent);
    return PhoneCategoryComponent;
}());
exports.PhoneCategoryComponent = PhoneCategoryComponent;
