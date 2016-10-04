"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var socialcategory_model_1 = require('./socialcategory.model');
var ng_custom_widgets_1 = require('ng_custom_widgets');
var SocialCategoryComponent = (function () {
    function SocialCategoryComponent(socialCategoryService, commonsValidatorService) {
        this.socialCategoryService = socialCategoryService;
        this.commonsValidatorService = commonsValidatorService;
        this.socialCategoryModel = new socialcategory_model_1.SocialCategoryModel('', '', '');
        this.socialCatName = new ng_custom_widgets_1.TextInputConfiguration(false, false, false, true, '1', '256', 'Please enter Social Category Name');
        this.save = new ng_custom_widgets_1.SimpleButtonConfiguration(false, false);
        this.update = new ng_custom_widgets_1.SimpleButtonConfiguration(true, false);
        this.reset = new ng_custom_widgets_1.SimpleButtonConfiguration(false, false);
        var socialCategoryGridcolumns = [];
        socialCategoryGridcolumns.push({ text: 'Social Category Id', dataIndex: 'socialCatId', hidden: true });
        socialCategoryGridcolumns.push({ text: 'Social Category Name', dataIndex: 'socialCatName', hidden: false });
        socialCategoryGridcolumns.push({ text: 'createdBy', dataIndex: 'createdBy', hidden: true });
        socialCategoryGridcolumns.push({ text: 'createdDate', dataIndex: 'createdDate', hidden: true });
        socialCategoryGridcolumns.push({ text: 'updatedBy', dataIndex: 'updatedBy', hidden: true });
        socialCategoryGridcolumns.push({ text: 'updatedDate', dataIndex: 'updatedDate', hidden: true });
        socialCategoryGridcolumns.push({ text: 'versionId', dataIndex: 'versionId', hidden: true });
        socialCategoryGridcolumns.push({ text: 'activeStatus', dataIndex: 'activeStatus', hidden: true });
        socialCategoryGridcolumns.push({ text: 'txnAccessCode', dataIndex: 'txnAccessCode', hidden: true });
        this.socialCategoryGrid = new ng_custom_widgets_1.DataGridConfiguration(socialCategoryGridcolumns);
        this.socialCategoryGridData = [];
    }
    SocialCategoryComponent.prototype.onSaveClick = function () {
        var requestData = {};
        var componentArray = [this.socialCatName];
        if (this.commonsValidatorService.validateAndShowErrorMessages(componentArray)) {
            return;
        }
        requestData.socialCatName = this.socialCategoryModel.socialCatName;
        this.socialCategoryService.onSaveClick_callSocialCategoryService_saveOperation(this, 'onSaveClick_callSocialCategoryService_saveOperationComplete', requestData);
        this.socialCategoryModel.socialCatId = null;
        this.socialCategoryModel.socialCatName = null;
        this.socialCategoryModel.versionId = null;
    };
    SocialCategoryComponent.prototype.onSaveClick_callSocialCategoryService_saveOperationComplete = function (responseData) {
        if (responseData.response.success) {
            toastr.info(responseData.response.message);
        }
        else {
            toastr.error(responseData.response.message);
        }
    };
    SocialCategoryComponent.prototype.onUpdateClick = function () {
        var requestData = {};
        var componentArray = [this.socialCatName];
        if (this.commonsValidatorService.validateAndShowErrorMessages(componentArray)) {
            return;
        }
        requestData.socialCatId = this.socialCategoryModel.socialCatId;
        requestData.socialCatName = this.socialCategoryModel.socialCatName;
        requestData.versionId = this.socialCategoryModel.versionId;
        this.socialCategoryService.onUpdateClick_callSocialCategoryService_updateOperation(this, 'onUpdateClick_callSocialCategoryService_updateOperationComplete', requestData);
        this.socialCategoryModel.socialCatId = null;
        this.socialCategoryModel.socialCatName = null;
        this.socialCategoryModel.versionId = null;
        this.save.hidden = false;
        this.update.hidden = true;
    };
    SocialCategoryComponent.prototype.onUpdateClick_callSocialCategoryService_updateOperationComplete = function (responseData) {
        if (responseData.response.success) {
            toastr.info(responseData.response.message);
        }
        else {
            toastr.error(responseData.response.message);
        }
    };
    SocialCategoryComponent.prototype.onResetClick = function () {
        this.socialCategoryModel.socialCatId = null;
        this.socialCategoryModel.socialCatName = null;
        this.socialCategoryModel.versionId = null;
        this.save.hidden = false;
        this.update.hidden = true;
    };
    SocialCategoryComponent.prototype.onSocialCategoryGridRowClick = function (data) {
        var requestData = {};
        requestData.findKey = data.socialCatId;
        this.socialCategoryService.onSocialCategoryGridRowClick_callSocialCategory_findByIdOperation(this, 'onSocialCategoryGridRowClick_callSocialCategory_findByIdOperationComplete', requestData);
    };
    SocialCategoryComponent.prototype.onSocialCategoryGridRowClick_callSocialCategory_findByIdOperationComplete = function (responseData) {
        var data = responseData.response.data;
        this.socialCategoryModel.socialCatId = data.socialCatId;
        this.socialCategoryModel.socialCatName = data.socialCatName;
        this.socialCategoryModel.versionId = data.versionId;
        this.save.hidden = true;
        this.update.hidden = false;
    };
    SocialCategoryComponent = __decorate([
        core_1.Component({
            selector: 'socialcategory-component',
            templateUrl: 'app/organization/contactmanagement/socialcategory/socialcategory.template.html'
        })
    ], SocialCategoryComponent);
    return SocialCategoryComponent;
}());
exports.SocialCategoryComponent = SocialCategoryComponent;
