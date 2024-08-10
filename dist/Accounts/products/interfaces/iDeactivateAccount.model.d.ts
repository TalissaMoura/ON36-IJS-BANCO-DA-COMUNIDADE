import iAccount from "src/Accounts/factories/iAccount.model";
export default interface deactivateAccount {
    deactivate(account: iAccount): any;
}
