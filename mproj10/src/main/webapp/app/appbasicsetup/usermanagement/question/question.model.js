"use strict";
var QuestionModel = (function () {
    function QuestionModel(levelid, question, questionDetails, questionIcon, questionId, versionId) {
        this._levelid = levelid;
        this._question = question;
        this._questionDetails = questionDetails;
        this._questionIcon = questionIcon;
        this._questionId = questionId;
        this._versionId = versionId;
    }
    Object.defineProperty(QuestionModel.prototype, "levelid", {
        get: function () { return this._levelid; },
        set: function (value) { this._levelid = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QuestionModel.prototype, "question", {
        get: function () { return this._question; },
        set: function (value) { this._question = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QuestionModel.prototype, "questionDetails", {
        get: function () { return this._questionDetails; },
        set: function (value) { this._questionDetails = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QuestionModel.prototype, "questionIcon", {
        get: function () { return this._questionIcon; },
        set: function (value) { this._questionIcon = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QuestionModel.prototype, "questionId", {
        get: function () { return this._questionId; },
        set: function (value) { this._questionId = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QuestionModel.prototype, "versionId", {
        get: function () { return this._versionId; },
        set: function (value) { this._versionId = value; },
        enumerable: true,
        configurable: true
    });
    return QuestionModel;
}());
exports.QuestionModel = QuestionModel;
