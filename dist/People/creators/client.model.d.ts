import currentAccount from "../../Accounts/domain/currentAccount.model";
import iPeople from "../factory/iPeople.model";
import poupancaAccount from "../../Accounts/domain/poupancaAccount.model";
import createClient from "../products/Client/createClient.model";
import deactivateClient from "../products/Client/deactivateClient.model";
export default class Client implements iPeople {
    _peopleID: string;
    _name: string;
    _cpf: string;
    _isActive: boolean;
    _bankManagerID: string;
    _currentAccount: currentAccount[];
    _poupancaAccount: poupancaAccount[];
    createAccount(): createClient;
    deactivateAccount(): deactivateClient;
    addCurrentAccount(currentAccount: currentAccount): void;
    addPoupancaAccount(poupancaAccount: poupancaAccount): void;
}
