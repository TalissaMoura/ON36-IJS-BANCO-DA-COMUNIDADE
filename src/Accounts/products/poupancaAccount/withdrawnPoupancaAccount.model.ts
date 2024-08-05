import poupancaAccount from "src/Accounts/creators/poupancaAccount.model";
import iWithdrawn from "../interfaces/iWithdrawn.model";
import { UnauthorizedException } from "@nestjs/common";

export default class withdrawnPoupancaAccount implements iWithdrawn{
    processWithdrawn(amountWithdrawn:number,account:poupancaAccount):void{
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