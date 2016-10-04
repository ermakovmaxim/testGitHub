"use strict";
var First = (function () {
    function First() {
        this.email = '';
        this.password = '';
    }
    Object.defineProperty(First.prototype, "email", {
        get: function () {
            return this._email;
        },
        set: function (email) {
            this._email = email;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(First.prototype, "password", {
        get: function () {
            return this._password;
        },
        set: function (password) {
            this._password = password;
        },
        enumerable: true,
        configurable: true
    });
    return First;
}());
exports.First = First;
