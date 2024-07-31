import ClientAccount from "../Clients/clientAccount";
export default class BankManager {
    _bankManagerID: string;
    _name: string;
    _cpf: string;
    _initDate: string;
    _state: string;
    _city: string;
    _clientAccount: ClientAccount[];
    constructor(name: string, cpf: string, initDate: string, state: string, city: string);
    get clientAccounts(): ClientAccount[];
    addClientAccount(newClienAccount: ClientAccount): void;
    deactivateCurrentAccount(clientAccount: ClientAccount, currentAccountNumber: number): void;
    deactivatePoupancaAccount(clientAccount: ClientAccount, poupancaAccountNumber: number): void;
}
