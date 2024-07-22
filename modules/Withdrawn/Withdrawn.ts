import ClientAccount from "../Clients/ClientAccount"
import Transactions from "../Transactions/Transactions"

export default class Withdrawn {
    _transactions: Transactions
    _withdrawnID: number
    _withdrawn_Amount: number
    _withdrawn_date: string
    _clientAccount:ClientAccount
    _status: string

     private processWithdrawn(withdrawn:Withdrawn) {
     }
}