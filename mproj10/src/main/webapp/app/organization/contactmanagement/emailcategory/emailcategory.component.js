"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var emailcategory_model_1 = require('./emailcategory.model');
var ng_custom_widgets_1 = require('ng_custom_widgets');
var EmailCategoryComponent = (function () {
    function EmailCategoryComponent(emailCategoryService, commonsValidatorService) {
        this.emailCategoryService = emailCategoryService;
        this.commonsValidatorService = commonsValidatorService;
        this.emailCategoryModel = new emailcategory_model_1.EmailCategoryModel('', '', '');
        this.emailCatName = new ng_custom_widgets_1.TextInputConfiguration(false, false, false, true, '1', '256', 'Please enter Email Category Name');
        this.save = new ng_custom_widgets_1.SimpleButtonConfiguration(false, false);
        this.update = new ng_custom_widgets_1.SimpleButtonConfiguration(true, false);
        this.reset = new ng_custom_widgets_1.SimpleButtonConfiguration(false, false);
        var emailCategoryGridcolumns = [];
        emailCategoryGridcolumns.push({ text: 'Email  Category Id', dataIndex: 'emailCatId', hidden: true });
        emailCategoryGridcolumns.push({ text: 'Email Category Name', dataIndex: 'emailCatName', hidden: false });
        emailCategoryGridcolumns.push({ text: 'createdBy', dataIndex: 'createdBy', hidden: true });
        emailCategoryGridcolumns.push({ text: 'createdDate', dataIndex: 'createdDate', hidden: true });
        emailCategoryGridcolumns.push({ text: 'updatedBy', dataIndex: 'updatedBy', hidden: true });
        emailCategoryGridcolumns.push({ text: 'updatedDate', dataIndex: 'updatedDate', hidden: true });
        emailCategoryGridcolumns.push({ text: 'versionId', dataIndex: 'versionId', hidden: true });
        emailCategoryGridcolumns.push({ text: 'activeStatus', dataIndex: 'activeStatus', hidden: true });
        emailCategoryGridcolumns.push({ text: 'txnAccessCode', dataIndex: 'txnAccessCode', hidden: true });
        this.emailCategoryGrid = new ng_custom_widgets_1.DataGridConfiguration(emailCategoryGridcolumns);
        this.emailCategoryGridData = [];
    }
    EmailCategoryComponent.prototype.onSaveClick = function () {
        var requestData = {};
        var componentArray = [this.emailCatName];
        if (this.commonsValidatorService.validateAndShowErrorMessages(componentArray)) {
            return;
        }
        requestData.emailCatName = this.emailCategoryModel.emailCatName;
        this.emailCategoryService.onSaveClick_callEmailCategoryService_saveOperation(this, 'onSaveClick_callEmailCategoryService_saveOperationComplete', requestData);
        this.emailCategoryModel.emailCatId = null;
        this.emailCategoryModel.emailCatName = null;
        this.emailCategoryModel.versionId = null;
    };
    EmailCategoryComponent.prototype.onSaveClick_callEmailCategoryService_saveOperationComplete = function (responseData) {
        if (responseData.response.success) {
            toastr.info(responseData.response.message);
        }
        else {
            toastr.error(responseData.response.message);
        }
    };
    EmailCategoryComponent.prototype.onUpdateClick = function () {
        var requestData = {};
        var componentArray = [this.emailCatName];
        if (this.commonsValidatorService.validateAndShowErrorMessages(componentArray)) {
            return;
        }
        requestData.emailCatId = this.emailCategoryModel.emailCatId;
        requestData.emailCatName = this.emailCategoryModel.emailCatName;
        requestData.versionId = this.emailCategoryModel.versionId;
        this.emailCategoryService.onUpdateClick_callEmailCategoryService_updateOperation(this, 'onUpdateClick_callEmailCategoryService_updateOperationComplete', requestData);
        this.emailCategoryModel.emailCatId = null;
        this.emailCategoryModel.emailCatName = null;
        this.emailCategoryModel.versionId = null;
        this.save.hidden = false;
        this.update.hidden = true;
    };
    EmailCategoryComponent.prototype.onUpdateClick_callEmailCategoryService_updateOperationComplete = function (responseData) {
        if (responseData.response.success) {
            toastr.info(responseData.response.message);
        }
        else {
            toastr.error(responseData.response.message);
        }
    };
    EmailCategoryComponent.prototype.onResetClick = function () {
        this.emailCategoryModel.emailCatId = null;
        this.emailCategoryModel.emailCatName = null;
        this.emailCategoryModel.versionId = null;
        this.save.hidden = false;
        this.update.hidden = true;
    };
    EmailCategoryComponent.prototype.onEmailCategoryGridRowClick = function (data) {
        var requestData = {};
        requestData.findKey = data.emailCatId;
        this.emailCategoryService.onEmailCategoryGridRowClick_callEmailCategory_findByIdOperation(this, 'onEmailCategoryGridRowClick_callEmailCategory_findByIdOperationComplete', requestData);
    };
    EmailCategoryComponent.prototype.onEmailCategoryGridRowClick_callEmailCategory_findByIdOperationComplete = function (responseData) {
        var data = responseData.response.data;
        this.emailCategoryModel.emailCatId = data.emailCatId;
        this.emailCategoryModel.emailCatName = data.emailCatName;
        this.emailCategoryModel.versionId = data.versionId;
        this.save.hidden = true;
        this.update.hidden = false;
    };
    EmailCategoryComponent = __decorate([
        core_1.Component({
            selector: 'emailcategory-component',
            templateUrl: 'app/organization/contactmanagement/emailcategory/emailcategory.template.html'
        })
    ], EmailCategoryComponent);
    return EmailCategoryComponent;
}());
exports.EmailCategoryComponent = EmailCategoryComponent;
