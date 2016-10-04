"use strict";
var TitleModel = (function () {
    function TitleModel(titles, titleId, versionId) {
        this._titles = titles;
        this._titleId = titleId;
        this._versionId = versionId;
    }
    Object.defineProperty(TitleModel.prototype, "titles", {
        get: function () { return this._titles; },
        set: function (value) { this._titles = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TitleModel.prototype, "titleId", {
        get: function () { return this._titleId; },
        set: function (value) { this._titleId = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TitleModel.prototype, "versionId", {
        get: function () { return this._versionId; },
        set: function (value) { this._versionId = value; },
        enumerable: true,
        configurable: true
    });
    return TitleModel;
}());
exports.TitleModel = TitleModel;
