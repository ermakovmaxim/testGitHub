"use strict";
var ContactTypeModel = (function () {
    function ContactTypeModel(contactType, contactTypeDesc, contactTypeIcon, contactTypeId, versionId) {
        this._contactType = contactType;
        this._contactTypeDesc = contactTypeDesc;
        this._contactTypeIcon = contactTypeIcon;
        this._contactTypeId = contactTypeId;
        this._versionId = versionId;
    }
    Object.defineProperty(ContactTypeModel.prototype, "contactType", {
        get: function () { return this._contactType; },
        set: function (value) { this._contactType = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ContactTypeModel.prototype, "contactTypeDesc", {
        get: function () { return this._contactTypeDesc; },
        set: function (value) { this._contactTypeDesc = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ContactTypeModel.prototype, "contactTypeIcon", {
        get: function () { return this._contactTypeIcon; },
        set: function (value) { this._contactTypeIcon = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ContactTypeModel.prototype, "contactTypeId", {
        get: function () { return this._contactTypeId; },
        set: function (value) { this._contactTypeId = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ContactTypeModel.prototype, "versionId", {
        get: function () { return this._versionId; },
        set: function (value) { this._versionId = value; },
        enumerable: true,
        configurable: true
    });
    return ContactTypeModel;
}());
exports.ContactTypeModel = ContactTypeModel;
