import currentAccount from "../../creators/currentAccount.model";
import iOpenAccount from "../interfaces/iOpenAccount.model";
export default class openCurrentAccount implements iOpenAccount {
    create(accountNumber: string, amount: number, initDate: string): currentAccount;
}
