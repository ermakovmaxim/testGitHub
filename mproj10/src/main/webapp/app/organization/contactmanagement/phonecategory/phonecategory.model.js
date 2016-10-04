"use strict";
var PhoneCategoryModel = (function () {
    function PhoneCategoryModel(phoneCatName, phoneCatId, versionId) {
        this._phoneCatName = phoneCatName;
        this._phoneCatId = phoneCatId;
        this._versionId = versionId;
    }
    Object.defineProperty(PhoneCategoryModel.prototype, "phoneCatName", {
        get: function () { return this._phoneCatName; },
        set: function (value) { this._phoneCatName = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PhoneCategoryModel.prototype, "phoneCatId", {
        get: function () { return this._phoneCatId; },
        set: function (value) { this._phoneCatId = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PhoneCategoryModel.prototype, "versionId", {
        get: function () { return this._versionId; },
        set: function (value) { this._versionId = value; },
        enumerable: true,
        configurable: true
    });
    return PhoneCategoryModel;
}());
exports.PhoneCategoryModel = PhoneCategoryModel;
