import poupancaAccount from "../../creators/poupancaAccount.model";
import iOpenAccount from "../interfaces/iOpenAccount.model";
export default class openPoupancaAccount implements iOpenAccount {
    create(accountNumber: string, amount: number, initDate: string): poupancaAccount;
}
