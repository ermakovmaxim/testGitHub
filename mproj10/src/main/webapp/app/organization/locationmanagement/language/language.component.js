"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var language_model_1 = require('./language.model');
var ng_custom_widgets_1 = require('ng_custom_widgets');
var LanguageComponent = (function () {
    function LanguageComponent(languageService, commonsValidatorService) {
        this.languageService = languageService;
        this.commonsValidatorService = commonsValidatorService;
        this.languageModel = new language_model_1.LanguageModel('', '', '', '', '', '', '', null, '', '');
        this.language = new ng_custom_widgets_1.TextInputConfiguration(false, false, false, true, '0', '256', 'Please enter Language');
        this.languageType = new ng_custom_widgets_1.TextInputConfiguration(false, false, false, true, '0', '32', 'Please enter Language Type');
        this.languageDescription = new ng_custom_widgets_1.TextAreaInputConfiguration(false, false, false, true, '', '', 'Please enter Description');
        this.languageIcon = new ng_custom_widgets_1.TextInputConfiguration(false, false, false, true, '0', '128', 'Please enter Icon');
        this.alpha2 = new ng_custom_widgets_1.TextInputConfiguration(false, false, false, true, '0', '2', 'Please enter Alpha 2');
        this.alpha3 = new ng_custom_widgets_1.TextInputConfiguration(false, false, false, true, '0', '3', 'Please enter Alpha 3');
        this.alpha4 = new ng_custom_widgets_1.TextInputConfiguration(false, false, false, true, '0', '4', 'Please enter Alpha 4');
        this.alpha4parentid = new ng_custom_widgets_1.NumberInputConfiguration(false, false, false, true, '0', '11', 'Aplha4 Parent Id must be between 0 and 11');
        this.save = new ng_custom_widgets_1.SimpleButtonConfiguration(false, false);
        this.update = new ng_custom_widgets_1.SimpleButtonConfiguration(true, false);
        this.reset = new ng_custom_widgets_1.SimpleButtonConfiguration(false, false);
        var languageGridcolumns = [];
        languageGridcolumns.push({ text: 'Language Id', dataIndex: 'languageId', hidden: true });
        languageGridcolumns.push({ text: 'Language', dataIndex: 'language', hidden: false });
        languageGridcolumns.push({ text: 'Language Type', dataIndex: 'languageType', hidden: false });
        languageGridcolumns.push({ text: 'Description', dataIndex: 'languageDescription', hidden: false });
        languageGridcolumns.push({ text: 'Icon', dataIndex: 'languageIcon', hidden: false });
        languageGridcolumns.push({ text: 'Alpha 2', dataIndex: 'alpha2', hidden: false });
        languageGridcolumns.push({ text: 'Alpha 3', dataIndex: 'alpha3', hidden: false });
        languageGridcolumns.push({ text: 'Alpha 4', dataIndex: 'alpha4', hidden: false });
        languageGridcolumns.push({ text: 'Aplha4 Parent Id', dataIndex: 'alpha4parentid', hidden: false });
        languageGridcolumns.push({ text: 'createdBy', dataIndex: 'createdBy', hidden: true });
        languageGridcolumns.push({ text: 'createdDate', dataIndex: 'createdDate', hidden: true });
        languageGridcolumns.push({ text: 'updatedBy', dataIndex: 'updatedBy', hidden: true });
        languageGridcolumns.push({ text: 'updatedDate', dataIndex: 'updatedDate', hidden: true });
        languageGridcolumns.push({ text: 'versionId', dataIndex: 'versionId', hidden: true });
        languageGridcolumns.push({ text: 'activeStatus', dataIndex: 'activeStatus', hidden: true });
        languageGridcolumns.push({ text: 'txnAccessCode', dataIndex: 'txnAccessCode', hidden: true });
        this.languageGrid = new ng_custom_widgets_1.DataGridConfiguration(languageGridcolumns);
        this.languageGridData = [];
    }
    LanguageComponent.prototype.onSaveClick = function () {
        var requestData = {};
        var componentArray = [this.language, this.languageType, this.languageDescription, this.languageIcon, this.alpha2, this.alpha3, this.alpha4, this.alpha4parentid];
        if (this.commonsValidatorService.validateAndShowErrorMessages(componentArray)) {
            return;
        }
        requestData.language = this.languageModel.language;
        requestData.languageType = this.languageModel.languageType;
        requestData.languageDescription = this.languageModel.languageDescription;
        requestData.languageIcon = this.languageModel.languageIcon;
        requestData.alpha2 = this.languageModel.alpha2;
        requestData.alpha3 = this.languageModel.alpha3;
        requestData.alpha4 = this.languageModel.alpha4;
        requestData.alpha4parentid = this.languageModel.alpha4parentid;
        this.languageService.onSaveClick_callLanguageService_saveOperation(this, 'onSaveClick_callLanguageService_saveOperationComplete', requestData);
        this.languageModel.languageId = null;
        this.languageModel.language = null;
        this.languageModel.languageType = null;
        this.languageModel.languageDescription = null;
        this.languageModel.languageIcon = null;
        this.languageModel.alpha2 = null;
        this.languageModel.alpha3 = null;
        this.languageModel.alpha4 = null;
        this.languageModel.alpha4parentid = null;
        this.languageModel.versionId = null;
    };
    LanguageComponent.prototype.onSaveClick_callLanguageService_saveOperationComplete = function (responseData) {
        if (responseData.response.success) {
            toastr.info(responseData.response.message);
        }
        else {
            toastr.error(responseData.response.message);
        }
    };
    LanguageComponent.prototype.onUpdateClick = function () {
        var requestData = {};
        var componentArray = [this.language, this.languageType, this.languageDescription, this.languageIcon, this.alpha2, this.alpha3, this.alpha4, this.alpha4parentid];
        if (this.commonsValidatorService.validateAndShowErrorMessages(componentArray)) {
            return;
        }
        requestData.languageId = this.languageModel.languageId;
        requestData.language = this.languageModel.language;
        requestData.languageType = this.languageModel.languageType;
        requestData.languageDescription = this.languageModel.languageDescription;
        requestData.languageIcon = this.languageModel.languageIcon;
        requestData.alpha2 = this.languageModel.alpha2;
        requestData.alpha3 = this.languageModel.alpha3;
        requestData.alpha4 = this.languageModel.alpha4;
        requestData.alpha4parentid = this.languageModel.alpha4parentid;
        requestData.versionId = this.languageModel.versionId;
        this.languageService.onUpdateClick_callLanguageService_updateOperation(this, 'onUpdateClick_callLanguageService_updateOperationComplete', requestData);
        this.languageModel.languageId = null;
        this.languageModel.language = null;
        this.languageModel.languageType = null;
        this.languageModel.languageDescription = null;
        this.languageModel.languageIcon = null;
        this.languageModel.alpha2 = null;
        this.languageModel.alpha3 = null;
        this.languageModel.alpha4 = null;
        this.languageModel.alpha4parentid = null;
        this.languageModel.versionId = null;
        this.save.hidden = false;
        this.update.hidden = true;
    };
    LanguageComponent.prototype.onUpdateClick_callLanguageService_updateOperationComplete = function (responseData) {
        if (responseData.response.success) {
            toastr.info(responseData.response.message);
        }
        else {
            toastr.error(responseData.response.message);
        }
    };
    LanguageComponent.prototype.onResetClick = function () {
        this.languageModel.languageId = null;
        this.languageModel.language = null;
        this.languageModel.languageType = null;
        this.languageModel.languageDescription = null;
        this.languageModel.languageIcon = null;
        this.languageModel.alpha2 = null;
        this.languageModel.alpha3 = null;
        this.languageModel.alpha4 = null;
        this.languageModel.alpha4parentid = null;
        this.languageModel.versionId = null;
        this.save.hidden = false;
        this.update.hidden = true;
    };
    LanguageComponent.prototype.onLanguageGridRowClick = function (data) {
        var requestData = {};
        requestData.findKey = data.languageId;
        this.languageService.onLanguageGridRowClick_callLanguage_findByIdOperation(this, 'onLanguageGridRowClick_callLanguage_findByIdOperationComplete', requestData);
    };
    LanguageComponent.prototype.onLanguageGridRowClick_callLanguage_findByIdOperationComplete = function (responseData) {
        var data = responseData.response.data;
        this.languageModel.languageId = data.languageId;
        this.languageModel.language = data.language;
        this.languageModel.languageType = data.languageType;
        this.languageModel.languageDescription = data.languageDescription;
        this.languageModel.languageIcon = data.languageIcon;
        this.languageModel.alpha2 = data.alpha2;
        this.languageModel.alpha3 = data.alpha3;
        this.languageModel.alpha4 = data.alpha4;
        this.languageModel.alpha4parentid = data.alpha4parentid;
        this.languageModel.versionId = data.versionId;
        this.save.hidden = true;
        this.update.hidden = false;
    };
    LanguageComponent = __decorate([
        core_1.Component({
            selector: 'language-component',
            templateUrl: 'app/organization/locationmanagement/language/language.template.html'
        })
    ], LanguageComponent);
    return LanguageComponent;
}());
exports.LanguageComponent = LanguageComponent;
