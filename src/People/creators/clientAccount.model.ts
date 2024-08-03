import currentAccount from "src/currentAccount/currentAccount.model";
import iPeople from "../factory/iPeople.model";
import { v4 as uuidv4 } from 'uuid';
import PoupancaAccount from "src/poupancaAccount/poupancaAccount.model";
import iCreatePeopleType from "../products/interfaces/iCreatePeopleType.model";

export default class clientAccount implements iPeople {
    _peopleID: string 
    _name: string
    _cpf: string
    _isActive: boolean
    _bankManagerID: string
    _currentAccount = currentAccount[]
    _poupancaAccount = PoupancaAccount[]

    constructor(
        name:string,
        cpf:string,
        bankManagerID:string
    ){
        this._name = name 
        this._cpf = cpf 
        this._isActive = false
        this._peopleID = uuidv4()
        this._currentAccount = []
        this._poupancaAccount = []
    }

    private validadeOperation(isBankManager:boolean){
        if(!isBankManager){
            return false
        }
        return true
    }

    confirmAccount(isBankManager:boolean,bankManagerID:string){
        if(!this.validadeOperation(isBankManager)){
            return "Failed activate account"
        }
        this._isActive = true
        this._bankManagerID = bankManagerID

    }

    openCurrentAccount(isBankManager:boolean)

    
}