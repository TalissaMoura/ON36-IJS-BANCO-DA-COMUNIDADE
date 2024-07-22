import ClientAccount from "../Clients/ClientAccount"
import Transactions from "../Transactions/Transactions"

export default class Deposit {
    _transactions: Transactions
    _depositID: number
    _deposit_date: string
    _deposit_amount: number
    _ClientAccount:ClientAccount
    _status: string
    
     private processDeposit(deposit:Deposit) {
     }
}