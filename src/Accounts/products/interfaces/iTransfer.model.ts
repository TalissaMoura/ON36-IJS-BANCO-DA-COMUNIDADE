import iAccount from "src/Accounts/factories/iAccount.model";

export default interface iTransfer {
    processTransfer(amountTransfer:number,accountMakeTransfer:iAccount,accountToTransfer:iAccount)
}