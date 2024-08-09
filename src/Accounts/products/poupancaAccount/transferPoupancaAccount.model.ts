import poupancaAccount from "src/Accounts/creators/poupancaAccount.model.js"
import iTransfer from "../interfaces/iTransfer.model.js"
import iAccount from "src/Accounts/factories/iAccount.model.js"
import { UnauthorizedException } from "@nestjs/common"

export default class transferPoupancaAccount implements iTransfer {
    
    processTransfer(amountTransfer:number,poupancaAccountMakeTransfer:poupancaAccount,accountToTransfer:iAccount){
        if(!poupancaAccountMakeTransfer._isActive && !accountToTransfer._isActive){
            throw new UnauthorizedException("Invalid operation")
        }
        else if (poupancaAccountMakeTransfer._amount < amountTransfer){
            throw new UnauthorizedException("Invalid operation")
        }
        const newAmountAccountToTransfer = (accountToTransfer._amount??0) + amountTransfer
        const newAmountAccountMakeTransfer = (poupancaAccountMakeTransfer._amount??0) - amountTransfer

        accountToTransfer._amount = newAmountAccountToTransfer
        poupancaAccountMakeTransfer._amount = newAmountAccountMakeTransfer
    }
}