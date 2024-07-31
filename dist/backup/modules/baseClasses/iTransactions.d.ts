export default interface iTransactions {
    _transaction_amount: number;
    _type: string;
    _transactionID: string;
    _transaction_name: string;
    _transaction_date: string;
    _statusTransaction: 'Processing' | 'Cancelled' | 'Complete';
}
