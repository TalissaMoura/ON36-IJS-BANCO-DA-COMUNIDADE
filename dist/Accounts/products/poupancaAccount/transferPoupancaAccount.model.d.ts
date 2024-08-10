import poupancaAccount from "src/Accounts/creators/poupancaAccount.model.js";
import iTransfer from "../interfaces/iTransfer.model.js";
import iAccount from "src/Accounts/factories/iAccount.model.js";
export default class transferPoupancaAccount implements iTransfer {
    processTransfer(amountTransfer: number, poupancaAccountMakeTransfer: poupancaAccount, accountToTransfer: iAccount): void;
}
