"use strict";
var SocialCategoryModel = (function () {
    function SocialCategoryModel(socialCatName, socialCatId, versionId) {
        this._socialCatName = socialCatName;
        this._socialCatId = socialCatId;
        this._versionId = versionId;
    }
    Object.defineProperty(SocialCategoryModel.prototype, "socialCatName", {
        get: function () { return this._socialCatName; },
        set: function (value) { this._socialCatName = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SocialCategoryModel.prototype, "socialCatId", {
        get: function () { return this._socialCatId; },
        set: function (value) { this._socialCatId = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SocialCategoryModel.prototype, "versionId", {
        get: function () { return this._versionId; },
        set: function (value) { this._versionId = value; },
        enumerable: true,
        configurable: true
    });
    return SocialCategoryModel;
}());
exports.SocialCategoryModel = SocialCategoryModel;
