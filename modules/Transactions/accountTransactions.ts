import Transactions from "../Transactions/Transactions"
import ClientAccount from "../Clients/ClientAccount"
import baseTransactions from "../baseClasses/baseTransactions"

export default class accountTransactions implements baseTransactions {
        _transactions: Transactions
        _accountTransactionsId: number
        _ClientAccount: ClientAccount
        _amount: number
        _type: string
        _transaction_name: string
        _transaction_date: string
        _status: string

        processTransaction() {
            
        }

    
}