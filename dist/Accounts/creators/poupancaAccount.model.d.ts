import iAccount from "../factories/iAccount.model";
import openPoupancaAccount from "../products/poupancaAccount/openPoupancaAccount.model";
import depositPoupancaAccount from "../products/poupancaAccount/depositPoupancaAccount.model";
import transferPoupancaAccount from "../products/poupancaAccount/transferPoupancaAccount.model";
import withdrawnPoupancaAccount from "../products/poupancaAccount/withdrawnPoupancaAccount.model";
import deactivatePoupancaAccount from "../products/poupancaAccount/deactivatePoupancaAccount.model";
export default class poupancaAccount implements iAccount {
    _accountID: string;
    _accountNumber: string;
    _amount: number;
    _isActive: boolean;
    _initDate: string;
    _rendimento: number;
    private validateOperation;
    createOpenAccount(isBankManager: boolean): openPoupancaAccount;
    createDeposit(): depositPoupancaAccount;
    createTransfer(): transferPoupancaAccount;
    createWithdrawn(): withdrawnPoupancaAccount;
    startDeactivate(): deactivatePoupancaAccount;
    updateRendimento(isBankManager: boolean, rendimento: number): void;
}
