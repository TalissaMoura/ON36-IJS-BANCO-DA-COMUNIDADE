import iAccount from "../factories/iAccount.model";
import depositCurrentAccount from "../products/currentAccount/depositCurrentAccount.model";
import transferCurrentAccount from "../products/currentAccount/transferCurrentAccount.model";
import withdrawnCurrentAccount from "../products/currentAccount/withdrawnCurrentAccount.model";
import openCurrentAccount from "../products/currentAccount/openCurrentAccount.model";
import deactivateCurrentAccount from "../products/currentAccount/deactivateCurrentAccount.model";
export default class currentAccount implements iAccount {
    _accountID: string;
    _accountNumber: string;
    _amount: number;
    _isActive: boolean;
    _initDate: string;
    _limitChequeEspecial: number;
    private validateOperation;
    createOpenAccount(isBankManager: boolean): openCurrentAccount;
    createDeposit(): depositCurrentAccount;
    createTransfer(): transferCurrentAccount;
    createWithdrawn(): withdrawnCurrentAccount;
    startDeactivate(): deactivateCurrentAccount;
    updateLimitChequeEspecial(isBankManager: boolean, limitValue: number): void;
}
