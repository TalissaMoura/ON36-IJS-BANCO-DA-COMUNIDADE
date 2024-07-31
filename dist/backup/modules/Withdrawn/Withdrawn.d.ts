import iTransactions from "../baseClasses/iTransactions";
import ClientAccount from "../Clients/ClientAccount";
export default class Withdrawn implements iTransactions {
    _transactionID: string;
    _transaction_name: string;
    _transaction_date: string;
    _transaction_amount: number;
    _clientAccount: ClientAccount;
    _statusTransaction: 'Processing' | 'Cancelled' | 'Complete';
    _type: string;
    constructor(client: ClientAccount, withdrawn_date: string, withdrawn_amount: number);
    private createWithdrawnContaCorrente;
    private createWithdrawnContaPoupanca;
    private addWithdrawnInClientAccount;
    private outputOperationResult;
    processWithdrawn(type: "Conta corrente" | "Conta poupanca", accountNumber: number): void | string;
}
