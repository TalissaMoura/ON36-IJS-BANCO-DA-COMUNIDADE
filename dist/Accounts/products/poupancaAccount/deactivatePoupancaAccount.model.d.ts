import poupancaAccount from "src/Accounts/creators/poupancaAccount.model";
import iDeactivateAccount from "../interfaces/iDeactivateAccount.model";
export default class deactivatePoupancaAccount implements iDeactivateAccount {
    deactivate(poupancaAccount: poupancaAccount): poupancaAccount;
}
