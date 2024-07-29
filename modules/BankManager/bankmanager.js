"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var uuid_1 = require("uuid");
var BankManager = /** @class */ (function () {
    function BankManager(name, cpf, initDate, state, city) {
        this._bankManagerID = (0, uuid_1.v4)();
        this._name = name;
        this._cpf = cpf;
        this._initDate = initDate;
        this._state = state;
        this._city = city;
        this._clientAccount = [];
    }
    Object.defineProperty(BankManager.prototype, "clientAccount", {
        get: function () {
            return this._clientAccount;
        },
        enumerable: false,
        configurable: true
    });
    BankManager.prototype.addClientAccount = function (newClienAccount) {
        this._clientAccount.push(newClienAccount);
    };
    BankManager.prototype.deactivateCurrentAccount = function (clientAccount, currentAccountNumber) {
        var currentAccount = clientAccount._currentAccount.find(function (cc) { return cc.currentAccountNumber == currentAccountNumber; });
        if (currentAccount) {
            currentAccount.isActive = false;
            console.log("Deactivate account");
        }
        else {
            console.log("Invalid Operation");
        }
    };
    BankManager.prototype.deactivatePoupancaAccount = function (clientAccount, poupancaAccountNumber) {
        var poupancaAccount = clientAccount._poupancaAccount.find(function (cc) { return cc.poupancaAccountNumber == poupancaAccountNumber; });
        if (poupancaAccount) {
            poupancaAccount.isActive = false;
            console.log("Deactivate account");
        }
        else {
            console.log("Invalid Operation");
        }
    };
    return BankManager;
}());
exports.default = BankManager;
