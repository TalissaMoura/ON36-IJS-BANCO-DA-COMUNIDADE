import accountTransactions from "../Transactions/accountTransactions"
import baseTransactions from "../baseClasses/baseTransactions"

export default class Transactions implements baseTransactions {
        _transactionID: number
        _accountTransactions: accountTransactions
        _amount: number
        _type: string
        _transaction_name: string
        _transaction_date: string
        _status: string

        processTransaction() {
            
        }

    
}