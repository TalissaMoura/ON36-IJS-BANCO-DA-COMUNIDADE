import iAccount from "src/Accounts/factories/iAccount.model";

export default interface iWithdrawn {
    processWithdrawn(amountWithdrawn:number,account:iAccount)
}