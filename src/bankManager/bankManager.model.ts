import ClientAccount from "../clientAccount/clientAccount.model"
import { v4 as uuidv4 } from 'uuid';

export default class BankManager {
    _bankManagerID: string
    _name: string
    _cpf: string
    _initDate: string
    _state: string
    _city: string
    _clientAccount: ClientAccount[]
    _isActive: boolean

    constructor(
        name:string,
        cpf:string,
        initDate:string,
        state:string,
        city:string
        ){
            this._bankManagerID = uuidv4()
            this._name = name
            this._cpf = cpf
            this._initDate = initDate
            this._state = state
            this._city = city
            this._clientAccount = [],
            this._isActive = true
        }
}