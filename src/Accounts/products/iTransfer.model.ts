import currentAccount from "../creators/currentAccount.model";
import poupancaAccount from "../creators/poupancaAccount.model";

export default interface iTransfer {
    processTransfer(amountTransfer:number,
        accountToTransfer:poupancaAccount|currentAccount)
} 