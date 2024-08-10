import iAccount from "../factories/iAccount.model";
import depositCurrentAccount from "../products/currentAccount/depositCurrentAccount.model"
import transferCurrentAccount from "../products/currentAccount/transferCurrentAccount.model";
import withdrawnCurrentAccount from "../products/currentAccount/withdrawnCurrentAccount.model";
import openCurrentAccount from "../products/currentAccount/openCurrentAccount.model";
import { UnauthorizedException } from "@nestjs/common";
import deactivateCurrentAccount from "../products/currentAccount/deactivateCurrentAccount.model";

export default class currentAccount implements iAccount {
    _accountID: string 
    _accountNumber: string 
    _amount: number
    _isActive: boolean
    _initDate: string
    _limitChequeEspecial:number
    
    private validateOperation(isBankManager:boolean){
        if(!isBankManager){
            return false
        }
        return true
    }

    createOpenAccount(isBankManager:boolean):openCurrentAccount{
        if(!this.validateOperation(isBankManager)){
            throw new UnauthorizedException("Unauthorized operation")
        }
        return  new openCurrentAccount()
    }

    createDeposit(): depositCurrentAccount {
        return new depositCurrentAccount()
    }
    createTransfer(): transferCurrentAccount {
        return new transferCurrentAccount()
    }
    createWithdrawn(): withdrawnCurrentAccount {
        return new withdrawnCurrentAccount()
    }
    startDeactivate():deactivateCurrentAccount{
        return new deactivateCurrentAccount()
    }

    updateLimitChequeEspecial(isBankManager:boolean,limitValue:number):void{
        if(!this.validateOperation(isBankManager)){
            throw new UnauthorizedException("Unauthorized operation")
        }
        this._limitChequeEspecial = limitValue
    }
}

