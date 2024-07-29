"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var baseAccount_1 = require("../baseClasses/baseAccount");
var uuid_1 = require("uuid");
var CurrentAccount = /** @class */ (function (_super) {
    __extends(CurrentAccount, _super);
    function CurrentAccount(client, initDate, isActive, currentAccountNumber, limitChequeEspecial) {
        var _this = _super.call(this, client, isActive, initDate) || this;
        _this._client = client;
        _this._isActive = isActive;
        _this._currentAccountID = (0, uuid_1.v4)();
        _this._currentAccountNumber = currentAccountNumber;
        _this._limitChequeEspecial = limitChequeEspecial;
        return _this;
    }
    Object.defineProperty(CurrentAccount.prototype, "amount", {
        get: function () {
            return this._amount;
        },
        set: function (new_amount) {
            this._amount = new_amount;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CurrentAccount.prototype, "currentAccountNumber", {
        get: function () {
            return this._currentAccountNumber;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CurrentAccount.prototype, "isActive", {
        get: function () {
            return this._isActive;
        },
        set: function (newActive) {
            this._isActive = newActive;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CurrentAccount.prototype, "limitChequeEspecial", {
        get: function () {
            return this._currentAccountNumber;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CurrentAccount.prototype, "LimitChequeEspecial", {
        set: function (new_limit) {
            this._limitChequeEspecial = new_limit;
        },
        enumerable: false,
        configurable: true
    });
    return CurrentAccount;
}(baseAccount_1.default));
exports.default = CurrentAccount;
