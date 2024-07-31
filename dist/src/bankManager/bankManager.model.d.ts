import ClientAccount from "../clientAccount/clientAccount.model";
export default class BankManager {
    _bankManagerID: string;
    _name: string;
    _cpf: string;
    _initDate: string;
    _state: string;
    _city: string;
    _clientAccount: ClientAccount[];
    _isActive: boolean;
    constructor(name: string, cpf: string, initDate: string, state: string, city: string);
}
