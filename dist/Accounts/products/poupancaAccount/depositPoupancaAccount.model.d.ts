import poupancaAccount from "src/Accounts/creators/poupancaAccount.model.js";
import iDeposit from "../interfaces/iDeposit.model.js";
export default class depositPoupancaAccount implements iDeposit {
    processDeposit(depositAmount: number, account: poupancaAccount): void;
}
