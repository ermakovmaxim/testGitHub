"use strict";
var GenderModel = (function () {
    function GenderModel(gender, genderId, versionId) {
        this._gender = gender;
        this._genderId = genderId;
        this._versionId = versionId;
    }
    Object.defineProperty(GenderModel.prototype, "gender", {
        get: function () { return this._gender; },
        set: function (value) { this._gender = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GenderModel.prototype, "genderId", {
        get: function () { return this._genderId; },
        set: function (value) { this._genderId = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GenderModel.prototype, "versionId", {
        get: function () { return this._versionId; },
        set: function (value) { this._versionId = value; },
        enumerable: true,
        configurable: true
    });
    return GenderModel;
}());
exports.GenderModel = GenderModel;
