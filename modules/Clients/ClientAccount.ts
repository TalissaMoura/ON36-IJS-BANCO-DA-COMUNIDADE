import Client from "./Client.js"
import BankManager from "../BankManager/bankmanager.js"
import CurrentAccount from  "../Accounts/currentAccount.js"
import PoupancaAccount from "../Accounts/poupancaAccount.js"
import Withdraw from "../Withdrawn/Withdrawn.js"
import Deposit from "../Deposit/Deposit.js"
import Payments from "../Payments/Payments.js"

export default class ClientAccount {
    _clientAccountID: number
    _client: Client
    _bankManager: BankManager
    _state: String
    _city: String
    _clientUsername:string
    _clientPassword: string
    _poupancaAccount: PoupancaAccount[]
    _currentAccount: CurrentAccount[]
    _withdraw:Withdraw[]
    _deposit: Deposit[]
    _payments: Payments[]

    
}
