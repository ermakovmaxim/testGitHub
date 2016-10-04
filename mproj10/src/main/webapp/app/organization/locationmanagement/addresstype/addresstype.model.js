"use strict";
var AddressTypeModel = (function () {
    function AddressTypeModel(addressType, addressTypeDesc, addressTypeIcon, addressTypeId, versionId) {
        this._addressType = addressType;
        this._addressTypeDesc = addressTypeDesc;
        this._addressTypeIcon = addressTypeIcon;
        this._addressTypeId = addressTypeId;
        this._versionId = versionId;
    }
    Object.defineProperty(AddressTypeModel.prototype, "addressType", {
        get: function () { return this._addressType; },
        set: function (value) { this._addressType = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AddressTypeModel.prototype, "addressTypeDesc", {
        get: function () { return this._addressTypeDesc; },
        set: function (value) { this._addressTypeDesc = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AddressTypeModel.prototype, "addressTypeIcon", {
        get: function () { return this._addressTypeIcon; },
        set: function (value) { this._addressTypeIcon = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AddressTypeModel.prototype, "addressTypeId", {
        get: function () { return this._addressTypeId; },
        set: function (value) { this._addressTypeId = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AddressTypeModel.prototype, "versionId", {
        get: function () { return this._versionId; },
        set: function (value) { this._versionId = value; },
        enumerable: true,
        configurable: true
    });
    return AddressTypeModel;
}());
exports.AddressTypeModel = AddressTypeModel;
