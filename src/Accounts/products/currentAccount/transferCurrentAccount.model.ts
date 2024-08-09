import iAccount from "src/Accounts/factories/iAccount.model.js"
import iTransfer from "../interfaces/iTransfer.model.js"
import { UnauthorizedException } from "@nestjs/common"
import currentAccount from "src/Accounts/creators/currentAccount.model.js"

export default class transferCurrentAccount implements iTransfer {
    
    processTransfer(amountTransfer:number,currentAccountMakeTransfer:currentAccount,accountToTransfer:iAccount){
        if(!currentAccountMakeTransfer._isActive && !accountToTransfer._isActive){
            throw new UnauthorizedException("Invalid operation")
        }
        else if (currentAccountMakeTransfer._amount < amountTransfer){
            throw new UnauthorizedException("Invalid operation")
        }
        const newAmountAccountToTransfer = (accountToTransfer._amount??0) + amountTransfer
        const newAmountAccountMakeTransfer = (currentAccountMakeTransfer._amount??0) - amountTransfer

        accountToTransfer._amount = newAmountAccountToTransfer
        currentAccountMakeTransfer._amount = newAmountAccountMakeTransfer
    }
}