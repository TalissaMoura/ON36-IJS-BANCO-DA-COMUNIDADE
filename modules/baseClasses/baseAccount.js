"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var baseAccount = /** @class */ (function () {
    function baseAccount(client, isActive, initDate) {
        this._client = client;
        this._isActive = isActive;
        this._initDate = initDate;
    }
    return baseAccount;
}());
exports.default = baseAccount;
