import currentAccount from "src/Accounts/creators/currentAccount.model.js"
import iDeposit from "../interfaces/iDeposit.model.js"
import { UnauthorizedException } from "@nestjs/common"

export default class depositCurrentAccount implements iDeposit {
    
    processDeposit(amountDeposit:number,currentAccount:currentAccount){
        if(!currentAccount._isActive){
            throw new UnauthorizedException("Invalid operation")
        }
        const new_amount = (currentAccount._amount?? 0) + amountDeposit

        currentAccount._amount = new_amount
    }
}