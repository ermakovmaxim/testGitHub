"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var title_model_1 = require('./title.model');
var ng_custom_widgets_1 = require('ng_custom_widgets');
var TitleComponent = (function () {
    function TitleComponent(titleService, commonsValidatorService) {
        this.titleService = titleService;
        this.commonsValidatorService = commonsValidatorService;
        this.titleModel = new title_model_1.TitleModel('', '', '');
        this.titles = new ng_custom_widgets_1.TextInputConfiguration(false, false, false, true, '0', '256', 'Please enter title');
        this.save = new ng_custom_widgets_1.SimpleButtonConfiguration(false, false);
        this.update = new ng_custom_widgets_1.SimpleButtonConfiguration(true, false);
        this.reset = new ng_custom_widgets_1.SimpleButtonConfiguration(false, false);
        var titleGridcolumns = [];
        titleGridcolumns.push({ text: 'Id', dataIndex: 'titleId', hidden: true });
        titleGridcolumns.push({ text: 'Title', dataIndex: 'titles', hidden: false });
        titleGridcolumns.push({ text: 'createdBy', dataIndex: 'createdBy', hidden: true });
        titleGridcolumns.push({ text: 'createdDate', dataIndex: 'createdDate', hidden: true });
        titleGridcolumns.push({ text: 'updatedBy', dataIndex: 'updatedBy', hidden: true });
        titleGridcolumns.push({ text: 'updatedDate', dataIndex: 'updatedDate', hidden: true });
        titleGridcolumns.push({ text: 'versionId', dataIndex: 'versionId', hidden: true });
        titleGridcolumns.push({ text: 'activeStatus', dataIndex: 'activeStatus', hidden: true });
        titleGridcolumns.push({ text: 'txnAccessCode', dataIndex: 'txnAccessCode', hidden: true });
        this.titleGrid = new ng_custom_widgets_1.DataGridConfiguration(titleGridcolumns);
        this.titleGridData = [];
    }
    TitleComponent.prototype.onSaveClick = function () {
        var requestData = {};
        var componentArray = [this.titles];
        if (this.commonsValidatorService.validateAndShowErrorMessages(componentArray)) {
            return;
        }
        requestData.titles = this.titleModel.titles;
        this.titleService.onSaveClick_callTitleService_saveOperation(this, 'onSaveClick_callTitleService_saveOperationComplete', requestData);
        this.titleModel.titleId = null;
        this.titleModel.titles = null;
        this.titleModel.versionId = null;
    };
    TitleComponent.prototype.onSaveClick_callTitleService_saveOperationComplete = function (responseData) {
        if (responseData.response.success) {
            toastr.info(responseData.response.message);
        }
        else {
            toastr.error(responseData.response.message);
        }
    };
    TitleComponent.prototype.onUpdateClick = function () {
        var requestData = {};
        var componentArray = [this.titles];
        if (this.commonsValidatorService.validateAndShowErrorMessages(componentArray)) {
            return;
        }
        requestData.titleId = this.titleModel.titleId;
        requestData.titles = this.titleModel.titles;
        requestData.versionId = this.titleModel.versionId;
        this.titleService.onUpdateClick_callTitleService_updateOperation(this, 'onUpdateClick_callTitleService_updateOperationComplete', requestData);
        this.titleModel.titleId = null;
        this.titleModel.titles = null;
        this.titleModel.versionId = null;
        this.save.hidden = false;
        this.update.hidden = true;
    };
    TitleComponent.prototype.onUpdateClick_callTitleService_updateOperationComplete = function (responseData) {
        if (responseData.response.success) {
            toastr.info(responseData.response.message);
        }
        else {
            toastr.error(responseData.response.message);
        }
    };
    TitleComponent.prototype.onResetClick = function () {
        this.titleModel.titleId = null;
        this.titleModel.titles = null;
        this.titleModel.versionId = null;
        this.save.hidden = false;
        this.update.hidden = true;
    };
    TitleComponent.prototype.onTitleGridRowClick = function (data) {
        var requestData = {};
        requestData.findKey = data.titleId;
        this.titleService.onTitleGridRowClick_callTitle_findByIdOperation(this, 'onTitleGridRowClick_callTitle_findByIdOperationComplete', requestData);
    };
    TitleComponent.prototype.onTitleGridRowClick_callTitle_findByIdOperationComplete = function (responseData) {
        var data = responseData.response.data;
        this.titleModel.titleId = data.titleId;
        this.titleModel.titles = data.titles;
        this.titleModel.versionId = data.versionId;
        this.save.hidden = true;
        this.update.hidden = false;
    };
    TitleComponent = __decorate([
        core_1.Component({
            selector: 'title-component',
            templateUrl: 'app/organization/contactmanagement/title/title.template.html'
        })
    ], TitleComponent);
    return TitleComponent;
}());
exports.TitleComponent = TitleComponent;
