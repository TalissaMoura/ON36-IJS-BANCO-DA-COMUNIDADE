import { baseAccount } from "./baseAccount.model";
export default class currentAccount extends baseAccount {
    _limitChequeEspecial: number;
    constructor(accountId: string, accountNumber: string, amount: number, initDate: string, limitChequeEspecial: number, isActive: any);
    deposit(amount: number): void;
    withdraw(amount: number): void;
    setLimitChequeEspecial(limit: number): void;
    getLimitChequeEspecial(): number;
}
