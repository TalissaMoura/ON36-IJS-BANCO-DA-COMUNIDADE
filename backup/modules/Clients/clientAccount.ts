import Client from "./Client"
import BankManager from "../BankManager/bankManager"
import CurrentAccount from  "../Accounts/currentAccount"
import PoupancaAccount from "../Accounts/poupancaAccount"
import Withdrawn from "../Withdrawn/Withdrawn"
import Deposit from "../Deposit/Deposit"
import Payments from "../Payments/Payments"
import Transfer from "../Transfer/Transfer"
import { v4 as uuidv4 } from 'uuid';

export default class ClientAccount {
    _clientAccountID: string
    _client: Client
    _bankManager: BankManager
    _state: string
    _city: string
    _poupancaAccount: PoupancaAccount[]
    _currentAccount: CurrentAccount[]
    _withdraw:Withdrawn[]
    _deposit: Deposit[]
    _payments: Payments[]
    _transfer: Transfer[]

    constructor(
        client:Client,
        bankManager:BankManager,
        state:string,
        city:string,
        ){
            this._clientAccountID = uuidv4()
            this._client = client 
            this._bankManager = bankManager
            this._state = state
            this._city = city 
            this._poupancaAccount = []
            this._currentAccount = []
            this._withdraw = []
            this._deposit = []
            this._payments =[]
            this._transfer = []
        }

    get client():Client{
        return this._client
    }
    
    get currentAccounts(){
        return this._currentAccount
    }
    get poupancaAccount(){
        return this._poupancaAccount
    }
    get withdraw(){
        return this._withdraw
    }
    get deposit(){
        return this._deposit
    }
    get payments(){
        return this._payments
    }
    get transfer(){
        return this._transfer
    }

    addcurrentAccount(newCurrentAccount:CurrentAccount){
        this._currentAccount.push(newCurrentAccount)
    }
    addpoupancaAccount(newPoupancaAccount:PoupancaAccount){
        this._poupancaAccount.push(newPoupancaAccount)
    }
    addWithdrawn(newWithdrawn:Withdrawn){
        this._withdraw.push(newWithdrawn)
    }
    addDeposit(newDeposit:Deposit){
        this._deposit.push(newDeposit)
    }
    addTransfer(newTransfer:Transfer){
        this._transfer.push(newTransfer)
    }
}
