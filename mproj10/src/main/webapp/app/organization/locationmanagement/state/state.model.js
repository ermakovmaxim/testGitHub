"use strict";
var StateModel = (function () {
    function StateModel(countryId, stateName, stateCode, stateCodeChar2, stateCodeChar3, stateDescription, stateFlag, stateCapital, stateCapitalLatitude, stateCapitalLongitude, stateId, versionId) {
        this._countryId = countryId;
        this._stateName = stateName;
        this._stateCode = stateCode;
        this._stateCodeChar2 = stateCodeChar2;
        this._stateCodeChar3 = stateCodeChar3;
        this._stateDescription = stateDescription;
        this._stateFlag = stateFlag;
        this._stateCapital = stateCapital;
        this._stateCapitalLatitude = stateCapitalLatitude;
        this._stateCapitalLongitude = stateCapitalLongitude;
        this._stateId = stateId;
        this._versionId = versionId;
    }
    Object.defineProperty(StateModel.prototype, "countryId", {
        get: function () { return this._countryId; },
        set: function (value) { this._countryId = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StateModel.prototype, "stateName", {
        get: function () { return this._stateName; },
        set: function (value) { this._stateName = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StateModel.prototype, "stateCode", {
        get: function () { return this._stateCode; },
        set: function (value) { this._stateCode = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StateModel.prototype, "stateCodeChar2", {
        get: function () { return this._stateCodeChar2; },
        set: function (value) { this._stateCodeChar2 = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StateModel.prototype, "stateCodeChar3", {
        get: function () { return this._stateCodeChar3; },
        set: function (value) { this._stateCodeChar3 = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StateModel.prototype, "stateDescription", {
        get: function () { return this._stateDescription; },
        set: function (value) { this._stateDescription = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StateModel.prototype, "stateFlag", {
        get: function () { return this._stateFlag; },
        set: function (value) { this._stateFlag = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StateModel.prototype, "stateCapital", {
        get: function () { return this._stateCapital; },
        set: function (value) { this._stateCapital = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StateModel.prototype, "stateCapitalLatitude", {
        get: function () { return this._stateCapitalLatitude; },
        set: function (value) { this._stateCapitalLatitude = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StateModel.prototype, "stateCapitalLongitude", {
        get: function () { return this._stateCapitalLongitude; },
        set: function (value) { this._stateCapitalLongitude = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StateModel.prototype, "stateId", {
        get: function () { return this._stateId; },
        set: function (value) { this._stateId = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StateModel.prototype, "versionId", {
        get: function () { return this._versionId; },
        set: function (value) { this._versionId = value; },
        enumerable: true,
        configurable: true
    });
    return StateModel;
}());
exports.StateModel = StateModel;
