import baseAccount from "../baseAccount/baseAccount.model";
import Client from "../client/client.model";
export default class CurrentAccount extends baseAccount {
    _client: Client;
    _initDate: string;
    _isActive: boolean;
    _currentAccountID: string;
    _currentAccountNumber: number;
    _amount: number;
    _limitChequeEspecial: number;
    constructor(client: Client, initDate: string, isActive: boolean, currentAccountNumber: number, limitChequeEspecial: number);
    get amount(): number;
    get currentAccountNumber(): number;
    get isActive(): boolean;
    get limitChequeEspecial(): number;
    set LimitChequeEspecial(new_limit: number);
    set isActive(newActive: boolean);
    set amount(new_amount: number);
}
