import iDeposit from "../products/interfaces/iDeposit.model";
import iTransfer from "../products/interfaces/iTransfer.model";
import iWithdrawn from "../products/interfaces/iWithdrawn.model";
import iOpenAccount from "../products/interfaces/iOpenAccount.model";
import iDeactivateAccount from "../products/interfaces/iDeactivateAccount.model";
export default interface iAccount {
    _accountID: string;
    _accountNumber: string;
    _amount: number;
    _isActive: boolean;
    _initDate: string;
    createOpenAccount(isBankManager: boolean): iOpenAccount;
    createDeposit(): iDeposit;
    createTransfer(): iTransfer;
    createWithdrawn(): iWithdrawn;
    startDeactivate(): iDeactivateAccount;
}
