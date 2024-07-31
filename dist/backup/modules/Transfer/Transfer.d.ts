import iTransactions from "../baseClasses/iTransactions";
import ClientAccount from "../Clients/clientAccount";
export default class Transfer implements iTransactions {
    _transactionID: string;
    _transaction_name: string;
    _transaction_amount: number;
    _transaction_date: string;
    _statusTransaction: "Processing" | "Cancelled" | "Complete";
    _type: string;
    _accountToTransfer: ClientAccount;
    _clientAccount: ClientAccount;
    constructor(client: ClientAccount, accountToTransfer: ClientAccount, transfer_date: string, transfer_amount: number);
    private validateContaCorrenteTransfer;
    private validateContaPoupancaTransfer;
    private createTransferContaCorrente;
    private createTransferContaPoupanca;
    private addTransferInClientAccount;
    private outputOperationResult;
    processTransfer(type: "Conta corrente" | "Conta poupanca", accountNumber: number, accountNumberToTransfer: number): void | string;
}
