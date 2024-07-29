"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var uuid_1 = require("uuid");
var ClientAccount = /** @class */ (function () {
    function ClientAccount(client, bankManager, state, city) {
        this._clientAccountID = (0, uuid_1.v4)();
        this._client = client;
        this._bankManager = bankManager;
        this._state = state;
        this._city = city;
        this._poupancaAccount = [];
        this._currentAccount = [];
        this._withdraw = [];
        this._deposit = [];
        this._payments = [];
        this._transfer = [];
    }
    Object.defineProperty(ClientAccount.prototype, "client", {
        get: function () {
            return this._client;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ClientAccount.prototype, "currentAccounts", {
        get: function () {
            return this._currentAccount;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ClientAccount.prototype, "poupancaAccount", {
        get: function () {
            return this._poupancaAccount;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ClientAccount.prototype, "withdraw", {
        get: function () {
            return this._withdraw;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ClientAccount.prototype, "deposit", {
        get: function () {
            return this._deposit;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ClientAccount.prototype, "payments", {
        get: function () {
            return this._payments;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ClientAccount.prototype, "transfer", {
        get: function () {
            return this._transfer;
        },
        enumerable: false,
        configurable: true
    });
    ClientAccount.prototype.addcurrentAccount = function (newCurrentAccount) {
        this._currentAccount.push(newCurrentAccount);
    };
    ClientAccount.prototype.addpoupancaAccount = function (newPoupancaAccount) {
        this._poupancaAccount.push(newPoupancaAccount);
    };
    ClientAccount.prototype.addWithdrawn = function (newWithdrawn) {
        this._withdraw.push(newWithdrawn);
    };
    ClientAccount.prototype.addDeposit = function (newDeposit) {
        this._deposit.push(newDeposit);
    };
    ClientAccount.prototype.addTransfer = function (newTransfer) {
        this._transfer.push(newTransfer);
    };
    return ClientAccount;
}());
exports.default = ClientAccount;
