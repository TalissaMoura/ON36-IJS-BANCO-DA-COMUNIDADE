import Client from "../client/client.model";
import PoupancaAccount from "src/poupancaAccount/poupancaAccount.model";
import CurrentAccount from "src/currentAccount/currentAccount.model";
import BankManager from "../bankManager/bankManager.model";
import { v4 as uuidv4 } from 'uuid';

export default class ClientAccount {
    _clientAccountID: string
    _client: Client
    _bankManager: BankManager
    _state: string
    _city: string
    _poupancaAccount: PoupancaAccount[]
    _currentAccount: CurrentAccount[]

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
        }
}