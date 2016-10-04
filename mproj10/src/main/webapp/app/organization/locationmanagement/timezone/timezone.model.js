"use strict";
var TimezoneModel = (function () {
    function TimezoneModel(utcdifference, gmtLabel, timeZoneLabel, country, cities, timeZoneId, versionId) {
        this._utcdifference = utcdifference;
        this._gmtLabel = gmtLabel;
        this._timeZoneLabel = timeZoneLabel;
        this._country = country;
        this._cities = cities;
        this._timeZoneId = timeZoneId;
        this._versionId = versionId;
    }
    Object.defineProperty(TimezoneModel.prototype, "utcdifference", {
        get: function () { return this._utcdifference; },
        set: function (value) { this._utcdifference = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TimezoneModel.prototype, "gmtLabel", {
        get: function () { return this._gmtLabel; },
        set: function (value) { this._gmtLabel = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TimezoneModel.prototype, "timeZoneLabel", {
        get: function () { return this._timeZoneLabel; },
        set: function (value) { this._timeZoneLabel = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TimezoneModel.prototype, "country", {
        get: function () { return this._country; },
        set: function (value) { this._country = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TimezoneModel.prototype, "cities", {
        get: function () { return this._cities; },
        set: function (value) { this._cities = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TimezoneModel.prototype, "timeZoneId", {
        get: function () { return this._timeZoneId; },
        set: function (value) { this._timeZoneId = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TimezoneModel.prototype, "versionId", {
        get: function () { return this._versionId; },
        set: function (value) { this._versionId = value; },
        enumerable: true,
        configurable: true
    });
    return TimezoneModel;
}());
exports.TimezoneModel = TimezoneModel;
