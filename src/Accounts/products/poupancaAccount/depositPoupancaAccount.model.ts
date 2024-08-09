import poupancaAccount from "src/Accounts/creators/poupancaAccount.model.js"
import iDeposit from "../interfaces/iDeposit.model.js"
import { UnauthorizedException } from "@nestjs/common"

export default class depositPoupancaAccount implements iDeposit {
    
    processDeposit(depositAmount:number,account:poupancaAccount){
        if(!account._isActive){
            throw new UnauthorizedException("Invalid operation")
        }
        const new_amount = (account._amount?? 0) + depositAmount

        account._amount = new_amount
    }
}