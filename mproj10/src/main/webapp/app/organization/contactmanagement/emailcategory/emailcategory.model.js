"use strict";
var EmailCategoryModel = (function () {
    function EmailCategoryModel(emailCatName, emailCatId, versionId) {
        this._emailCatName = emailCatName;
        this._emailCatId = emailCatId;
        this._versionId = versionId;
    }
    Object.defineProperty(EmailCategoryModel.prototype, "emailCatName", {
        get: function () { return this._emailCatName; },
        set: function (value) { this._emailCatName = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EmailCategoryModel.prototype, "emailCatId", {
        get: function () { return this._emailCatId; },
        set: function (value) { this._emailCatId = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EmailCategoryModel.prototype, "versionId", {
        get: function () { return this._versionId; },
        set: function (value) { this._versionId = value; },
        enumerable: true,
        configurable: true
    });
    return EmailCategoryModel;
}());
exports.EmailCategoryModel = EmailCategoryModel;
