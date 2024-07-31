import baseAccount from "../baseClasses/baseAccount";
import Client from "../Clients/Client";
export default class PoupancaAccount extends baseAccount {
    _client: Client;
    _isActive: boolean;
    _initDate: string;
    _poupancaAccountID: number;
    _poupancaAccountNumber: number;
    _poupancaRendimento: number;
    _amount: number;
    constructor(client: Client, isActive: boolean, initDate: string, poupancaAccountNumber: number, poupancaRendimento: number);
    get amount(): number;
    get poupancaAccountNumber(): number;
    get isActive(): boolean;
    get poupancaRendimento(): number;
    set isActive(new_active: boolean);
    set poupancaRendimento(new_rendimento: number);
    set amount(new_amount: number);
}
