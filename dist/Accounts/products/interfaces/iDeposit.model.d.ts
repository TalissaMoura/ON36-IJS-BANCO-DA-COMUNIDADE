import iAccount from "src/Accounts/factories/iAccount.model";
export default interface iDeposit {
    processDeposit(amountDeposit: number, account: iAccount): void;
}
