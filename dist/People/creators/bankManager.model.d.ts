import iPeople from "../factory/iPeople.model";
import createBankManager from "../products/BankManager/createBankManager.model";
import deactivateBankManager from "../products/BankManager/deactivateBankManager.model";
export default class bankManager implements iPeople {
    _peopleID: string;
    _name: string;
    _cpf: string;
    _isActive: boolean;
    _bankManagerToken: string;
    createAccount(): createBankManager;
    deactivateAccount(): deactivateBankManager;
}
