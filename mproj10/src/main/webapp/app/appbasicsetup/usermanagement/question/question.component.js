"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var question_model_1 = require('./question.model');
var ng_custom_widgets_1 = require('ng_custom_widgets');
var QuestionComponent = (function () {
    function QuestionComponent(questionService, commonsValidatorService) {
        this.questionService = questionService;
        this.commonsValidatorService = commonsValidatorService;
        this.questionModel = new question_model_1.QuestionModel(null, '', '', '', '', '');
        this.levelid = new ng_custom_widgets_1.NumberInputConfiguration(false, false, false, true, '0', '11', 'Level Id must be between 0 and 11');
        this.question = new ng_custom_widgets_1.TextInputConfiguration(false, false, false, true, '0', '256', 'Please enter Question');
        this.questionDetails = new ng_custom_widgets_1.TextAreaInputConfiguration(false, false, false, true, '', '', 'Please enter Details');
        this.questionIcon = new ng_custom_widgets_1.TextInputConfiguration(false, false, false, true, '0', '64', 'Please enter Icon');
        this.save = new ng_custom_widgets_1.SimpleButtonConfiguration(false, false);
        this.update = new ng_custom_widgets_1.SimpleButtonConfiguration(true, false);
        this.reset = new ng_custom_widgets_1.SimpleButtonConfiguration(false, false);
        var questionGridcolumns = [];
        questionGridcolumns.push({ text: 'Question Id', dataIndex: 'questionId', hidden: true });
        questionGridcolumns.push({ text: 'Level Id', dataIndex: 'levelid', hidden: false });
        questionGridcolumns.push({ text: 'Question', dataIndex: 'question', hidden: false });
        questionGridcolumns.push({ text: 'Details', dataIndex: 'questionDetails', hidden: false });
        questionGridcolumns.push({ text: 'Icon', dataIndex: 'questionIcon', hidden: false });
        questionGridcolumns.push({ text: 'createdBy', dataIndex: 'createdBy', hidden: true });
        questionGridcolumns.push({ text: 'createdDate', dataIndex: 'createdDate', hidden: true });
        questionGridcolumns.push({ text: 'updatedBy', dataIndex: 'updatedBy', hidden: true });
        questionGridcolumns.push({ text: 'updatedDate', dataIndex: 'updatedDate', hidden: true });
        questionGridcolumns.push({ text: 'versionId', dataIndex: 'versionId', hidden: true });
        questionGridcolumns.push({ text: 'activeStatus', dataIndex: 'activeStatus', hidden: true });
        questionGridcolumns.push({ text: 'txnAccessCode', dataIndex: 'txnAccessCode', hidden: true });
        this.questionGrid = new ng_custom_widgets_1.DataGridConfiguration(questionGridcolumns);
        this.questionGridData = [];
    }
    QuestionComponent.prototype.onSaveClick = function () {
        var requestData = {};
        var componentArray = [this.levelid, this.question, this.questionDetails, this.questionIcon];
        if (this.commonsValidatorService.validateAndShowErrorMessages(componentArray)) {
            return;
        }
        requestData.levelid = this.questionModel.levelid;
        requestData.question = this.questionModel.question;
        requestData.questionDetails = this.questionModel.questionDetails;
        requestData.questionIcon = this.questionModel.questionIcon;
        this.questionService.onSaveClick_callQuestionService_saveOperation(this, 'onSaveClick_callQuestionService_saveOperationComplete', requestData);
        this.questionModel.questionId = null;
        this.questionModel.levelid = null;
        this.questionModel.question = null;
        this.questionModel.questionDetails = null;
        this.questionModel.questionIcon = null;
        this.questionModel.versionId = null;
    };
    QuestionComponent.prototype.onSaveClick_callQuestionService_saveOperationComplete = function (responseData) {
        if (responseData.response.success) {
            toastr.info(responseData.response.message);
        }
        else {
            toastr.error(responseData.response.message);
        }
    };
    QuestionComponent.prototype.onUpdateClick = function () {
        var requestData = {};
        var componentArray = [this.levelid, this.question, this.questionDetails, this.questionIcon];
        if (this.commonsValidatorService.validateAndShowErrorMessages(componentArray)) {
            return;
        }
        requestData.questionId = this.questionModel.questionId;
        requestData.levelid = this.questionModel.levelid;
        requestData.question = this.questionModel.question;
        requestData.questionDetails = this.questionModel.questionDetails;
        requestData.questionIcon = this.questionModel.questionIcon;
        requestData.versionId = this.questionModel.versionId;
        this.questionService.onUpdateClick_callQuestionService_updateOperation(this, 'onUpdateClick_callQuestionService_updateOperationComplete', requestData);
        this.questionModel.questionId = null;
        this.questionModel.levelid = null;
        this.questionModel.question = null;
        this.questionModel.questionDetails = null;
        this.questionModel.questionIcon = null;
        this.questionModel.versionId = null;
        this.save.hidden = false;
        this.update.hidden = true;
    };
    QuestionComponent.prototype.onUpdateClick_callQuestionService_updateOperationComplete = function (responseData) {
        if (responseData.response.success) {
            toastr.info(responseData.response.message);
        }
        else {
            toastr.error(responseData.response.message);
        }
    };
    QuestionComponent.prototype.onResetClick = function () {
        this.questionModel.questionId = null;
        this.questionModel.levelid = null;
        this.questionModel.question = null;
        this.questionModel.questionDetails = null;
        this.questionModel.questionIcon = null;
        this.questionModel.versionId = null;
        this.save.hidden = false;
        this.update.hidden = true;
    };
    QuestionComponent.prototype.onQuestionGridRowClick = function (data) {
        var requestData = {};
        requestData.findKey = data.questionId;
        this.questionService.onQuestionGridRowClick_callQuestion_findByIdOperation(this, 'onQuestionGridRowClick_callQuestion_findByIdOperationComplete', requestData);
    };
    QuestionComponent.prototype.onQuestionGridRowClick_callQuestion_findByIdOperationComplete = function (responseData) {
        var data = responseData.response.data;
        this.questionModel.questionId = data.questionId;
        this.questionModel.levelid = data.levelid;
        this.questionModel.question = data.question;
        this.questionModel.questionDetails = data.questionDetails;
        this.questionModel.questionIcon = data.questionIcon;
        this.questionModel.versionId = data.versionId;
        this.save.hidden = true;
        this.update.hidden = false;
    };
    QuestionComponent = __decorate([
        core_1.Component({
            selector: 'question-component',
            templateUrl: 'app/appbasicsetup/usermanagement/question/question.template.html'
        })
    ], QuestionComponent);
    return QuestionComponent;
}());
exports.QuestionComponent = QuestionComponent;
