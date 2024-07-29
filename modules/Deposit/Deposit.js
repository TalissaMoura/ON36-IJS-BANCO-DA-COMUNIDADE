"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var uuid_1 = require("uuid");
var Deposit = /** @class */ (function () {
    function Deposit(client, deposit_date, deposit_amount) {
        this._transactionID = (0, uuid_1.v4)();
        this._transaction_date = deposit_date;
        this._transaction_amount = deposit_amount;
        this._type = "Credit";
        this._transaction_name = "Deposit";
        this._statusTransaction = "Processing";
        this._clientAccount = client;
        console.log("Processing Deposit");
    }
    Deposit.prototype.createDepositContaCorrente = function (currentAccountNumber) {
        var _a;
        var account = this._clientAccount._currentAccount.find(function (cc) { return cc._currentAccountNumber === currentAccountNumber; });
        if (!(account === null || account === void 0 ? void 0 : account.isActive)) {
            this._statusTransaction = 'Cancelled';
            return this._statusTransaction;
        }
        var new_amount = ((_a = account._amount) !== null && _a !== void 0 ? _a : 0) + this._transaction_amount;
        account._amount = new_amount;
        this._statusTransaction = "Complete";
        return this._statusTransaction;
    };
    Deposit.prototype.createDepositContaPoupanca = function (poupancaAccountNumber) {
        var _a;
        var account = this._clientAccount._poupancaAccount.find(function (cc) { return cc._poupancaAccountNumber === poupancaAccountNumber; });
        if (!(account === null || account === void 0 ? void 0 : account.isActive)) {
            this._statusTransaction = 'Cancelled';
            return this._statusTransaction;
        }
        var new_amount = ((_a = account._amount) !== null && _a !== void 0 ? _a : 0) + this._transaction_amount;
        account._amount = new_amount;
        this._statusTransaction = "Complete";
        return this._statusTransaction;
    };
    Deposit.prototype.addDepositInClientAccount = function () {
        this._clientAccount.addDeposit(this);
    };
    Deposit.prototype.outputOperationResult = function (result) {
        if (result !== "Complete") {
            console.log("Operation cancelled");
        }
        else {
            console.log("Operation Complete");
        }
    };
    Deposit.prototype.processDeposit = function (type, accountNumber) {
        if (type !== "Conta corrente" && type !== "Conta poupanca") {
            return "Operation invalid";
        }
        else if (type == "Conta corrente") {
            var res = this.createDepositContaCorrente(accountNumber);
            this.outputOperationResult(res);
            if (res == "Complete") {
                this.addDepositInClientAccount();
                console.log("Add deposit in ClientAccount");
            }
        }
        else if (type == "Conta poupanca") {
            var res = this.createDepositContaPoupanca(accountNumber);
            this.outputOperationResult(res);
            if (res == "Complete") {
                this.addDepositInClientAccount();
                console.log("Add deposit in ClientAccount");
            }
        }
    };
    return Deposit;
}());
exports.default = Deposit;
