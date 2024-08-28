import { typeAccount } from '../../../enum/account.enum';
import currentAccount from '../currentAccount.model';
import poupancaAccount from '../poupancaAccount.model';
export default class accountFactory {
    private validateOperation;
    createAccount(isBankManager: boolean, type: typeAccount, accountNumber: string, amount: number, initDate: string): currentAccount | poupancaAccount;
}
