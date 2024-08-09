import iAccount from "../factories/iAccount.model";
import openPoupancaAccount from "../products/poupancaAccount/openPoupancaAccount.model"
import depositPoupancaAccount from "../products/poupancaAccount/depositPoupancaAccount.model"
import transferPoupancaAccount from "../products/poupancaAccount/transferPoupancaAccount.model";
import withdrawnPoupancaAccount from "../products/poupancaAccount/withdrawnPoupancaAccount.model";
import { UnauthorizedException } from "@nestjs/common";
import deactivatePoupancaAccount from "../products/poupancaAccount/deactivatePoupancaAccount.model";

export default class poupancaAccount implements iAccount {
    _accountID: string 
    _accountNumber: string 
    _amount: number
    _isActive: boolean
    _initDate: string
    _rendimento:number
    

    private validateOperation(isBankManager:boolean){
        if(!isBankManager){
            return false
        }
        return true
    }

    createOpenAccount(isBankManager:boolean):openPoupancaAccount{
        if(!this.validateOperation(isBankManager)){
            throw new UnauthorizedException("Unauthorized operation")
        }
        return new openPoupancaAccount()
    }

    createDeposit(): depositPoupancaAccount {
        return new depositPoupancaAccount()
    }
    createTransfer(): transferPoupancaAccount {
        return new transferPoupancaAccount()
    }
    createWithdrawn(): withdrawnPoupancaAccount {
        return new withdrawnPoupancaAccount()
    }
    startDeactivate(): deactivatePoupancaAccount {
        return new deactivatePoupancaAccount()
    }
    updateRendimento(isBankManager:boolean,rendimento:number):void {
        this._rendimento = rendimento
    }
}

