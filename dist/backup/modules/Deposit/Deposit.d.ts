import iTransactions from "../baseClasses/iTransactions";
import ClientAccount from "../Clients/ClientAccount";
export default class Deposit implements iTransactions {
    _transactionID: string;
    _transaction_name: string;
    _transaction_date: string;
    _transaction_amount: number;
    _clientAccount: ClientAccount;
    _statusTransaction: 'Processing' | 'Cancelled' | 'Complete';
    _type: string;
    constructor(client: ClientAccount, deposit_date: string, deposit_amount: number);
    private createDepositContaCorrente;
    private createDepositContaPoupanca;
    private addDepositInClientAccount;
    private outputOperationResult;
    processDeposit(type: "Conta corrente" | "Conta poupanca", accountNumber: number): void | string;
}
