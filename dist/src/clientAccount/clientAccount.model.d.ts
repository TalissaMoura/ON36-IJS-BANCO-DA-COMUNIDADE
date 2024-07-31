import Client from "../client/client.model";
import PoupancaAccount from "src/poupancaAccount/poupancaAccount.model";
import CurrentAccount from "src/currentAccount/currentAccount.model";
import BankManager from "../bankManager/bankManager.model";
export default class ClientAccount {
    _clientAccountID: string;
    _client: Client;
    _bankManager: BankManager;
    _state: string;
    _city: string;
    _poupancaAccount: PoupancaAccount[];
    _currentAccount: CurrentAccount[];
    constructor(client: Client, bankManager: BankManager, state: string, city: string);
}
