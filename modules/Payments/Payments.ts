import ClientAccount from "../Clients/ClientAccount"
import Transactions from "../Transactions/transactions"

export default class Payments {
    _transactions: Transactions
    _paymentID: number
    _payment_date: string
    _payment_amount: number
    _ClientAccount:ClientAccount
    _cpf: String
    _cnpj: String
    _status: string
     private processPayment(payment:Payments) {
     }
}