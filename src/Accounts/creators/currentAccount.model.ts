import { UnauthorizedException } from "@nestjs/common";
import poupancaAccount from "./poupancaAccount.model";
import iDeposit from "../products/iDeposit.model";
import iWithdrawn from "../products/iWithdrawn.model";
import iTransfer from "../products/iTransfer.model";
import iDeactivateAccount from "../products/iDeactivateAccount.model";
import iAccount from "../products/iAccount.model";
import { v4 as uuidv4 } from 'uuid';


export default class currentAccount implements iAccount, iDeposit,iWithdrawn,iTransfer,iDeactivateAccount {
    _accountID: string 
    _accountNumber: string 
    _amount: number
    _isActive: boolean
    _initDate: string
    _limitChequeEspecial:number

    constructor(amount:number,initDate:string){
        this._isActive = true 
        this._initDate = initDate
        this._amount = amount 
        this._accountID = uuidv4()
        this._accountNumber = uuidv4()
    }
    
    private validateOperation(isBankManager:boolean){
        if(!isBankManager){
            return false
        }
        return true
    }
    processDeposit(amountDeposit: number): void {
        if(!this._isActive){
            throw new UnauthorizedException("Invalid operation")
        }
        const new_amount = (this._amount?? 0) + amountDeposit

        this._amount = new_amount
    }
    processTransfer(
        amountTransfer:number,
        accountToTransfer:poupancaAccount|currentAccount): void {
            if(!this._isActive && !accountToTransfer._isActive){
                throw new UnauthorizedException("Invalid operation")
            }
            else if (this._amount < amountTransfer){
                throw new UnauthorizedException("Invalid operation")
            }
            const newAmountAccountToTransfer = (accountToTransfer._amount??0) + amountTransfer
            const newAmountAccountMakeTransfer = (this._amount??0) - amountTransfer
    
            accountToTransfer._amount = newAmountAccountToTransfer
            this._amount = newAmountAccountMakeTransfer
    }
    processWithdrawn(amountWithdrawn:number): void {
        if(!this._isActive){
            throw new UnauthorizedException("Invalid operation")
        }
        else if (this._amount < amountWithdrawn){
            throw new UnauthorizedException("Invalid operation")
        }
        const new_amount = this._amount - amountWithdrawn 
        
        this._amount = new_amount
    }
    processDeactivate(): void {
        this._isActive = false
    }
    updateLimitChequeEspecial(isBankManager:boolean,limitValue:number):void{
        if(!this.validateOperation(isBankManager)){
            throw new UnauthorizedException("Unauthorized operation")
        }
        this._limitChequeEspecial = limitValue
    }
}

