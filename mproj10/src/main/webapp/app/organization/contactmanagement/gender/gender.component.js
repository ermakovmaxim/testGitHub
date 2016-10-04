"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var gender_model_1 = require('./gender.model');
var ng_custom_widgets_1 = require('ng_custom_widgets');
var GenderComponent = (function () {
    function GenderComponent(genderService, commonsValidatorService) {
        this.genderService = genderService;
        this.commonsValidatorService = commonsValidatorService;
        this.genderModel = new gender_model_1.GenderModel('', '', '');
        this.gender = new ng_custom_widgets_1.TextInputConfiguration(false, false, false, true, '0', '256', 'Please enter gender');
        this.save = new ng_custom_widgets_1.SimpleButtonConfiguration(false, false);
        this.update = new ng_custom_widgets_1.SimpleButtonConfiguration(true, false);
        this.reset = new ng_custom_widgets_1.SimpleButtonConfiguration(false, false);
        var genderGridcolumns = [];
        genderGridcolumns.push({ text: 'Id', dataIndex: 'genderId', hidden: true });
        genderGridcolumns.push({ text: 'Gender', dataIndex: 'gender', hidden: false });
        genderGridcolumns.push({ text: 'createdBy', dataIndex: 'createdBy', hidden: true });
        genderGridcolumns.push({ text: 'createdDate', dataIndex: 'createdDate', hidden: true });
        genderGridcolumns.push({ text: 'updatedBy', dataIndex: 'updatedBy', hidden: true });
        genderGridcolumns.push({ text: 'updatedDate', dataIndex: 'updatedDate', hidden: true });
        genderGridcolumns.push({ text: 'versionId', dataIndex: 'versionId', hidden: true });
        genderGridcolumns.push({ text: 'activeStatus', dataIndex: 'activeStatus', hidden: true });
        genderGridcolumns.push({ text: 'txnAccessCode', dataIndex: 'txnAccessCode', hidden: true });
        this.genderGrid = new ng_custom_widgets_1.DataGridConfiguration(genderGridcolumns);
        this.genderGridData = [];
    }
    GenderComponent.prototype.onSaveClick = function () {
        var requestData = {};
        var componentArray = [this.gender];
        if (this.commonsValidatorService.validateAndShowErrorMessages(componentArray)) {
            return;
        }
        requestData.gender = this.genderModel.gender;
        this.genderService.onSaveClick_callGenderService_saveOperation(this, 'onSaveClick_callGenderService_saveOperationComplete', requestData);
        this.genderModel.genderId = null;
        this.genderModel.gender = null;
        this.genderModel.versionId = null;
    };
    GenderComponent.prototype.onSaveClick_callGenderService_saveOperationComplete = function (responseData) {
        if (responseData.response.success) {
            toastr.info(responseData.response.message);
        }
        else {
            toastr.error(responseData.response.message);
        }
    };
    GenderComponent.prototype.onUpdateClick = function () {
        var requestData = {};
        var componentArray = [this.gender];
        if (this.commonsValidatorService.validateAndShowErrorMessages(componentArray)) {
            return;
        }
        requestData.genderId = this.genderModel.genderId;
        requestData.gender = this.genderModel.gender;
        requestData.versionId = this.genderModel.versionId;
        this.genderService.onUpdateClick_callGenderService_updateOperation(this, 'onUpdateClick_callGenderService_updateOperationComplete', requestData);
        this.genderModel.genderId = null;
        this.genderModel.gender = null;
        this.genderModel.versionId = null;
        this.save.hidden = false;
        this.update.hidden = true;
    };
    GenderComponent.prototype.onUpdateClick_callGenderService_updateOperationComplete = function (responseData) {
        if (responseData.response.success) {
            toastr.info(responseData.response.message);
        }
        else {
            toastr.error(responseData.response.message);
        }
    };
    GenderComponent.prototype.onResetClick = function () {
        this.genderModel.genderId = null;
        this.genderModel.gender = null;
        this.genderModel.versionId = null;
        this.save.hidden = false;
        this.update.hidden = true;
    };
    GenderComponent.prototype.onGenderGridRowClick = function (data) {
        var requestData = {};
        requestData.findKey = data.genderId;
        this.genderService.onGenderGridRowClick_callGender_findByIdOperation(this, 'onGenderGridRowClick_callGender_findByIdOperationComplete', requestData);
    };
    GenderComponent.prototype.onGenderGridRowClick_callGender_findByIdOperationComplete = function (responseData) {
        var data = responseData.response.data;
        this.genderModel.genderId = data.genderId;
        this.genderModel.gender = data.gender;
        this.genderModel.versionId = data.versionId;
        this.save.hidden = true;
        this.update.hidden = false;
    };
    GenderComponent = __decorate([
        core_1.Component({
            selector: 'gender-component',
            templateUrl: 'app/organization/contactmanagement/gender/gender.template.html'
        })
    ], GenderComponent);
    return GenderComponent;
}());
exports.GenderComponent = GenderComponent;
