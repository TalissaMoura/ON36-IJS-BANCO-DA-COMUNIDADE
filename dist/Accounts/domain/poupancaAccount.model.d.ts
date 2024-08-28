import { baseAccount } from "./baseAccount.model";
export default class poupancaAccount extends baseAccount {
    _rendimento: number;
    constructor(accountId: string, accountNumber: string, amount: number, initDate: string, rendimento: number, isActive: boolean);
    deposit(amount: number): void;
    withdraw(amount: number): void;
    setRendimento(rendimento: number): void;
    getRendimento(): number;
}
