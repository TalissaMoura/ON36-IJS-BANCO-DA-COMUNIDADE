import { Injectable } from "@nestjs/common";
import { baseAccount } from "./baseAccount.model";

@Injectable()
export default class poupancaAccount extends baseAccount {
    _rendimento: number;

    constructor(accountId:string,accountNumber:string,amount:number,initDate:string,rendimento:number,isActive:boolean){
        super(accountId,amount,initDate,accountNumber,isActive)
        this._rendimento = rendimento
    }

    deposit(amount: number): void {
        if (amount <= 0) throw new Error('Deposit amount must be positive');
        this._balance += amount;
    }

    withdraw(amount: number): void {
        if (amount <= 0) throw new Error('Withdrawal amount must be positive');
        if (amount > this._balance) throw new Error('Insufficient funds');
        this._balance -= amount;
    }

    setRendimento(rendimento: number): void {
        this._rendimento = rendimento;
    }

    getRendimento(): number {
        return this._rendimento;
    }

}