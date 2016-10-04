"use strict";
var LanguageModel = (function () {
    function LanguageModel(language, languageType, languageDescription, languageIcon, alpha2, alpha3, alpha4, alpha4parentid, languageId, versionId) {
        this._language = language;
        this._languageType = languageType;
        this._languageDescription = languageDescription;
        this._languageIcon = languageIcon;
        this._alpha2 = alpha2;
        this._alpha3 = alpha3;
        this._alpha4 = alpha4;
        this._alpha4parentid = alpha4parentid;
        this._languageId = languageId;
        this._versionId = versionId;
    }
    Object.defineProperty(LanguageModel.prototype, "language", {
        get: function () { return this._language; },
        set: function (value) { this._language = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LanguageModel.prototype, "languageType", {
        get: function () { return this._languageType; },
        set: function (value) { this._languageType = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LanguageModel.prototype, "languageDescription", {
        get: function () { return this._languageDescription; },
        set: function (value) { this._languageDescription = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LanguageModel.prototype, "languageIcon", {
        get: function () { return this._languageIcon; },
        set: function (value) { this._languageIcon = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LanguageModel.prototype, "alpha2", {
        get: function () { return this._alpha2; },
        set: function (value) { this._alpha2 = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LanguageModel.prototype, "alpha3", {
        get: function () { return this._alpha3; },
        set: function (value) { this._alpha3 = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LanguageModel.prototype, "alpha4", {
        get: function () { return this._alpha4; },
        set: function (value) { this._alpha4 = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LanguageModel.prototype, "alpha4parentid", {
        get: function () { return this._alpha4parentid; },
        set: function (value) { this._alpha4parentid = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LanguageModel.prototype, "languageId", {
        get: function () { return this._languageId; },
        set: function (value) { this._languageId = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LanguageModel.prototype, "versionId", {
        get: function () { return this._versionId; },
        set: function (value) { this._versionId = value; },
        enumerable: true,
        configurable: true
    });
    return LanguageModel;
}());
exports.LanguageModel = LanguageModel;
