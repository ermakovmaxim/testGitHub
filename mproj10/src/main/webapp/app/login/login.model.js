"use strict";
var loginCredentials = (function () {
    function loginCredentials(loginId, password, latitude, longitude) {
        this.loginId = loginId;
        this.password = password;
        this.latitude = latitude;
        this.longitude = longitude;
    }
    Object.defineProperty(loginCredentials.prototype, "loginId", {
        get: function () {
            return this._loginId;
        },
        set: function (loginId) {
            this._loginId = loginId;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(loginCredentials.prototype, "password", {
        get: function () {
            return this._password;
        },
        set: function (paasword) {
            this._password = paasword;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(loginCredentials.prototype, "latitude", {
        get: function () {
            return this._latitude;
        },
        set: function (latitude) {
            this._latitude = latitude;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(loginCredentials.prototype, "longitude", {
        get: function () {
            return this._longitude;
        },
        set: function (longitude) {
            this._longitude = longitude;
        },
        enumerable: true,
        configurable: true
    });
    return loginCredentials;
}());
exports.loginCredentials = loginCredentials;
