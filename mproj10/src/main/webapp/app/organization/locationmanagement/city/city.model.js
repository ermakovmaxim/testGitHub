"use strict";
var CityModel = (function () {
    function CityModel(countryId, stateId, cityName, cityCodeChar2, cityCode, cityDescription, cityFlag, cityLatitude, cityLongitude, cityId, versionId) {
        this._countryId = countryId;
        this._stateId = stateId;
        this._cityName = cityName;
        this._cityCodeChar2 = cityCodeChar2;
        this._cityCode = cityCode;
        this._cityDescription = cityDescription;
        this._cityFlag = cityFlag;
        this._cityLatitude = cityLatitude;
        this._cityLongitude = cityLongitude;
        this._cityId = cityId;
        this._versionId = versionId;
    }
    Object.defineProperty(CityModel.prototype, "countryId", {
        get: function () { return this._countryId; },
        set: function (value) { this._countryId = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CityModel.prototype, "stateId", {
        get: function () { return this._stateId; },
        set: function (value) { this._stateId = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CityModel.prototype, "cityName", {
        get: function () { return this._cityName; },
        set: function (value) { this._cityName = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CityModel.prototype, "cityCodeChar2", {
        get: function () { return this._cityCodeChar2; },
        set: function (value) { this._cityCodeChar2 = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CityModel.prototype, "cityCode", {
        get: function () { return this._cityCode; },
        set: function (value) { this._cityCode = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CityModel.prototype, "cityDescription", {
        get: function () { return this._cityDescription; },
        set: function (value) { this._cityDescription = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CityModel.prototype, "cityFlag", {
        get: function () { return this._cityFlag; },
        set: function (value) { this._cityFlag = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CityModel.prototype, "cityLatitude", {
        get: function () { return this._cityLatitude; },
        set: function (value) { this._cityLatitude = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CityModel.prototype, "cityLongitude", {
        get: function () { return this._cityLongitude; },
        set: function (value) { this._cityLongitude = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CityModel.prototype, "cityId", {
        get: function () { return this._cityId; },
        set: function (value) { this._cityId = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CityModel.prototype, "versionId", {
        get: function () { return this._versionId; },
        set: function (value) { this._versionId = value; },
        enumerable: true,
        configurable: true
    });
    return CityModel;
}());
exports.CityModel = CityModel;
