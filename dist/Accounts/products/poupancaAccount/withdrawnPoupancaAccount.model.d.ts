import poupancaAccount from "src/Accounts/creators/poupancaAccount.model";
import iWithdrawn from "../interfaces/iWithdrawn.model";
export default class withdrawnPoupancaAccount implements iWithdrawn {
    processWithdrawn(amountWithdrawn: number, account: poupancaAccount): void;
}
