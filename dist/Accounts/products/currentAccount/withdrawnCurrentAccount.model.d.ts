import currentAccount from "src/Accounts/creators/currentAccount.model.js";
import iWithdrawn from "../interfaces/iWithdrawn.model.js";
export default class withdrawnCurrentAccount implements iWithdrawn {
    processWithdrawn(amountWithdrawn: number, account: currentAccount): void;
}
