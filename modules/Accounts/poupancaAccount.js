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
var PoupancaAccount = /** @class */ (function (_super) {
    __extends(PoupancaAccount, _super);
    function PoupancaAccount(client, isActive, initDate, poupancaAccountNumber, poupancaRendimento) {
        var _this = _super.call(this, client, isActive, initDate) || this;
        _this._client = client;
        _this._isActive = isActive;
        _this._initDate = initDate;
        _this._poupancaAccountID = (0, uuid_1.v4)();
        _this._poupancaAccountNumber = poupancaAccountNumber;
        _this._poupancaRendimento = poupancaRendimento;
        return _this;
    }
    Object.defineProperty(PoupancaAccount.prototype, "amount", {
        get: function () {
            return this._amount;
        },
        set: function (new_amount) {
            this._amount = new_amount;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PoupancaAccount.prototype, "poupancaAccountNumber", {
        get: function () {
            return this._poupancaAccountNumber;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PoupancaAccount.prototype, "isActive", {
        get: function () {
            return this._isActive;
        },
        set: function (new_active) {
            this._isActive = new_active;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PoupancaAccount.prototype, "poupancaRendimento", {
        get: function () {
            return this._poupancaRendimento;
        },
        set: function (new_rendimento) {
            this._poupancaRendimento = new_rendimento;
        },
        enumerable: false,
        configurable: true
    });
    return PoupancaAccount;
}(baseAccount_1.default));
exports.default = PoupancaAccount;
