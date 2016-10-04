"use strict";
var CountryModel = (function () {
    function CountryModel(countryName, countryCode1, countryCode2, countryFlag, capital, currencyCode, currencyName, currencySymbol, capitalLatitude, capitalLongitude, isoNumeric, countryId, versionId) {
        this._countryName = countryName;
        this._countryCode1 = countryCode1;
        this._countryCode2 = countryCode2;
        this._countryFlag = countryFlag;
        this._capital = capital;
        this._currencyCode = currencyCode;
        this._currencyName = currencyName;
        this._currencySymbol = currencySymbol;
        this._capitalLatitude = capitalLatitude;
        this._capitalLongitude = capitalLongitude;
        this._isoNumeric = isoNumeric;
        this._countryId = countryId;
        this._versionId = versionId;
    }
    Object.defineProperty(CountryModel.prototype, "countryName", {
        get: function () { return this._countryName; },
        set: function (value) { this._countryName = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CountryModel.prototype, "countryCode1", {
        get: function () { return this._countryCode1; },
        set: function (value) { this._countryCode1 = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CountryModel.prototype, "countryCode2", {
        get: function () { return this._countryCode2; },
        set: function (value) { this._countryCode2 = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CountryModel.prototype, "countryFlag", {
        get: function () { return this._countryFlag; },
        set: function (value) { this._countryFlag = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CountryModel.prototype, "capital", {
        get: function () { return this._capital; },
        set: function (value) { this._capital = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CountryModel.prototype, "currencyCode", {
        get: function () { return this._currencyCode; },
        set: function (value) { this._currencyCode = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CountryModel.prototype, "currencyName", {
        get: function () { return this._currencyName; },
        set: function (value) { this._currencyName = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CountryModel.prototype, "currencySymbol", {
        get: function () { return this._currencySymbol; },
        set: function (value) { this._currencySymbol = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CountryModel.prototype, "capitalLatitude", {
        get: function () { return this._capitalLatitude; },
        set: function (value) { this._capitalLatitude = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CountryModel.prototype, "capitalLongitude", {
        get: function () { return this._capitalLongitude; },
        set: function (value) { this._capitalLongitude = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CountryModel.prototype, "isoNumeric", {
        get: function () { return this._isoNumeric; },
        set: function (value) { this._isoNumeric = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CountryModel.prototype, "countryId", {
        get: function () { return this._countryId; },
        set: function (value) { this._countryId = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CountryModel.prototype, "versionId", {
        get: function () { return this._versionId; },
        set: function (value) { this._versionId = value; },
        enumerable: true,
        configurable: true
    });
    return CountryModel;
}());
exports.CountryModel = CountryModel;
