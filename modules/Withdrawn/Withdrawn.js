"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var uuid_1 = require("uuid");
var Withdrawn = /** @class */ (function () {
    function Withdrawn(client, withdrawn_date, withdrawn_amount) {
        this._transactionID = (0, uuid_1.v4)();
        this._transaction_date = withdrawn_date;
        this._transaction_amount = withdrawn_amount;
        this._statusTransaction = "Processing";
        this._type = "Credit";
        this._transaction_name = "Withdrawn";
        this._clientAccount = client;
        console.log("Processing withdrawn");
    }
    Withdrawn.prototype.createWithdrawnContaCorrente = function (currentAccountNumber) {
        var _a;
        var account = this._clientAccount._currentAccount.find(function (cc) { return cc._currentAccountNumber === currentAccountNumber; });
        if (account && !account.isActive && account.amount < this._transaction_amount) {
            this._statusTransaction = 'Cancelled';
            return this._statusTransaction;
        }
        var new_amount = ((_a = account === null || account === void 0 ? void 0 : account.amount) !== null && _a !== void 0 ? _a : 0) - this._transaction_amount;
        if (new_amount > 0 && account) {
            account.amount = new_amount;
            this._statusTransaction = "Complete";
            return this._statusTransaction;
        }
        this._statusTransaction = "Cancelled";
        return this._statusTransaction;
    };
    Withdrawn.prototype.createWithdrawnContaPoupanca = function (poupancaAccountNumber) {
        var _a;
        var account = this._clientAccount._poupancaAccount.find(function (cc) { return cc._poupancaAccountNumber === poupancaAccountNumber; });
        if (account && (!account.isActive || account.amount < this._transaction_amount)) {
            this._statusTransaction = 'Cancelled';
            return this._statusTransaction;
        }
        var new_amount = ((_a = account === null || account === void 0 ? void 0 : account.amount) !== null && _a !== void 0 ? _a : 0) - this._transaction_amount;
        if (new_amount > 0 && account) {
            account.amount = new_amount;
            this._statusTransaction = "Complete";
            return this._statusTransaction;
        }
        this._statusTransaction = "Cancelled";
        return this._statusTransaction;
    };
    Withdrawn.prototype.addWithdrawnInClientAccount = function () {
        this._clientAccount.addWithdrawn(this);
    };
    Withdrawn.prototype.outputOperationResult = function (result) {
        if (result !== "Complete") {
            console.log("Operation cancelled");
        }
        else {
            console.log("Operation complete");
        }
    };
    Withdrawn.prototype.processWithdrawn = function (type, accountNumber) {
        if (type !== "Conta corrente" && type !== "Conta poupanca") {
            return "Operation invalid";
        }
        else if (type == "Conta corrente") {
            var res = this.createWithdrawnContaCorrente(accountNumber);
            this.outputOperationResult(res);
            if (res == "Complete") {
                this.addWithdrawnInClientAccount();
                console.log("Add Withdrawn in ClientAccount");
            }
        }
        else if (type == "Conta poupanca") {
            var res = this.createWithdrawnContaPoupanca(accountNumber);
            this.outputOperationResult(res);
            if (res == "Complete") {
                this.addWithdrawnInClientAccount();
                console.log("Add Withdrawn in ClientAccount");
            }
        }
    };
    return Withdrawn;
}());
exports.default = Withdrawn;
