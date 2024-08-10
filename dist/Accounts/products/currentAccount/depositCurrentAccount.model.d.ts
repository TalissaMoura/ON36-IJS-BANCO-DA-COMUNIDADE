import currentAccount from "src/Accounts/creators/currentAccount.model.js";
import iDeposit from "../interfaces/iDeposit.model.js";
export default class depositCurrentAccount implements iDeposit {
    processDeposit(amountDeposit: number, currentAccount: currentAccount): void;
}
