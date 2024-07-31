import baseAccount from "../baseAccount/baseAccount.model";
import Client from "../client/client.model";
import { v4 as uuidv4 } from 'uuid';

export default class PoupancaAccount extends baseAccount{
    _client: Client
    _isActive: boolean
    _initDate: string 
    _poupancaAccountID: number
    _poupancaAccountNumber:number
    _poupancaRendimento: number
    _amount: number

    constructor(
        client:Client,
        isActive:boolean,
        initDate:string,
        poupancaAccountNumber:number,
        poupancaRendimento:number){
        super(client,isActive,initDate)
        this._client=client
        this._isActive = isActive
        this._initDate = initDate
        this._poupancaAccountID = uuidv4()
        this._poupancaAccountNumber = poupancaAccountNumber
        this._poupancaRendimento = poupancaRendimento
    }

    get amount(){
        return this._amount
    }
    get poupancaAccountNumber(){
        return this._poupancaAccountNumber
    }

    get isActive() {
        return this._isActive
    }
    get poupancaRendimento(){
        return this._poupancaRendimento
    }
    set isActive(new_active: boolean) {
        this._isActive = new_active
    }
    set poupancaRendimento(new_rendimento:number){
        this._poupancaRendimento = new_rendimento
    }
    set amount(new_amount:number){
        this._amount = new_amount
    }
}