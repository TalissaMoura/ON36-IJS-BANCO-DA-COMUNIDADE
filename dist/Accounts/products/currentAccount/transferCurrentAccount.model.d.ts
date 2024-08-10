import iAccount from "src/Accounts/factories/iAccount.model.js";
import iTransfer from "../interfaces/iTransfer.model.js";
import currentAccount from "src/Accounts/creators/currentAccount.model.js";
export default class transferCurrentAccount implements iTransfer {
    processTransfer(amountTransfer: number, currentAccountMakeTransfer: currentAccount, accountToTransfer: iAccount): void;
}
