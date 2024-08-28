import { Injectable } from "@nestjs/common";
import { baseAccount } from "./baseAccount.model";

@Injectable()
export default class currentAccount extends baseAccount{
    _limitChequeEspecial: number;

    constructor(accountId:string,accountNumber:string,amount:number,initDate:string,limitChequeEspecial:number,isActive){
        super(accountId,amount,initDate,accountNumber,isActive)
        this._limitChequeEspecial = limitChequeEspecial
    }

    deposit(amount: number): void {
        if (amount <= 0) throw new Error('Deposit amount must be positive');
        this._balance += amount;
    }

    withdraw(amount: number): void {
        if (amount <= 0) throw new Error('Withdrawal amount must be positive');
        if (amount > this._balance + this._limitChequeEspecial) throw new Error('Insufficient funds');
        this._balance -= amount;
    }

    setLimitChequeEspecial(limit: number): void {
        this._limitChequeEspecial = limit;
    }

    getLimitChequeEspecial(): number {
        return this._limitChequeEspecial;
    }

}