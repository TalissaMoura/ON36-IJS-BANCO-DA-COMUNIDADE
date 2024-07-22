import baseAccount from "../baseClasses/baseAccount"
import Card from "../Card/cardClass"
import Client from "../Clients/Client"

export default class CurrentAccount implements baseAccount {
    _client:Client
    _card: Card;
    _initDate: string
    _isActive: boolean
    _currentAccountID:number
    _currentAccountNumber:number
    // _loans: Loans[]
    // _creditCardAccount: CreditCardAccount 
    _limitChequeEspecial: number

    getCurrentAccountNumber(){
        return this._currentAccountNumber
    }
    getIsActive() {
        return this._isActive
    }
    getlimitChequeEspecial(){
        return this._currentAccountNumber
    }
    setLimitChequeEspecial(new_limit:number){
        this._limitChequeEspecial = new_limit
    }
    setIsActive(new_active:boolean) {
        this._isActive = new_active
    }
}