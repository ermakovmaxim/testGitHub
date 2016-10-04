"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var QuestionService = (function () {
    function QuestionService(_http) {
        this._http = _http;
    }
    QuestionService.prototype.onSaveClick_callQuestionService_saveOperation = function (parentRef, callBackFunctionName, requestJson) {
        var _this = this;
        this.parentRef = parentRef;
        this.callBackFunctionName = callBackFunctionName;
        var headers = new http_1.Headers({ 'Content-Type': 'application/json;charset=UTF-8' });
        var options = new http_1.RequestOptions({ headers: headers, method: 'post' });
        this._http.post('secure/Question/', requestJson, options).subscribe(function (response) {
            _this.responseData = response.json();
        }, function (error) {
        }, function () {
            _this.onSaveClick_callQuestionService_saveOperationComplete();
        });
    };
    QuestionService.prototype.onSaveClick_callQuestionService_saveOperationComplete = function () {
        this.parentRef.onSaveClick_callQuestionService_saveOperationComplete(this.responseData);
    };
    QuestionService.prototype.onUpdateClick_callQuestionService_updateOperation = function (parentRef, callBackFunctionName, requestJson) {
        var _this = this;
        this.parentRef = parentRef;
        this.callBackFunctionName = callBackFunctionName;
        var headers = new http_1.Headers({ 'Content-Type': 'application/json;charset=UTF-8' });
        var options = new http_1.RequestOptions({ headers: headers, method: 'put' });
        this._http.post('secure/Question/', requestJson, options).subscribe(function (response) {
            _this.responseData = response.json();
        }, function (error) {
        }, function () {
            _this.onUpdateClick_callQuestionService_updateOperationComplete();
        });
    };
    QuestionService.prototype.onUpdateClick_callQuestionService_updateOperationComplete = function () {
        this.parentRef.onUpdateClick_callQuestionService_updateOperationComplete(this.responseData);
    };
    QuestionService.prototype.onQuestionGridRowClick_callQuestion_findByIdOperation = function (parentRef, callBackFunctionName, requestJson) {
        var _this = this;
        this.parentRef = parentRef;
        this.callBackFunctionName = callBackFunctionName;
        var headers = new http_1.Headers({ 'Content-Type': 'application/json;charset=UTF-8' });
        var options = new http_1.RequestOptions({ headers: headers, method: 'post' });
        this._http.post('secure/Question/findById', requestJson, options).subscribe(function (response) {
            _this.responseData = response.json();
        }, function (error) {
        }, function () {
            _this.onQuestionGridRowClick_callQuestion_findByIdOperationComplete();
        });
    };
    QuestionService.prototype.onQuestionGridRowClick_callQuestion_findByIdOperationComplete = function () {
        this.parentRef.onQuestionGridRowClick_callQuestion_findByIdOperationComplete(this.responseData);
    };
    QuestionService = __decorate([
        core_1.Injectable()
    ], QuestionService);
    return QuestionService;
}());
exports.QuestionService = QuestionService;
