import { UnauthorizedException } from "@nestjs/common"
import currentAccount from "../creators/currentAccount.model"
import poupancaAccount from "../creators/poupancaAccount.model"

export default interface iWithdrawn {
    processWithdrawn(amountWithdrawn:number):void
}