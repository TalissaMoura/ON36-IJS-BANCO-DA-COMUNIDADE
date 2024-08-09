import currentAccount from "src/Accounts/creators/currentAccount.model.js"
import iWithdrawn from "../interfaces/iWithdrawn.model.js"
import { UnauthorizedException } from "@nestjs/common"

export default class withdrawnCurrentAccount implements iWithdrawn {
    
    processWithdrawn(amountWithdrawn:number,account:currentAccount){
        if(!account._isActive){
            throw new UnauthorizedException("Invalid operation")
        }
        else if (account._amount < amountWithdrawn){
            throw new UnauthorizedException("Invalid operation")
        }
        const new_amount = account._amount - amountWithdrawn 
        
        account._amount = new_amount
    }
}