import baseAccount from "../baseClasses/baseAccount";
import Client from "../Client/client";
import Card from "../Card/cardClass";


export default class PoupancaAccount implements baseAccount{
    _client: Client
    _card: Card
    _isActive: boolean
    _initDate: string 
    _currentAccountID: number
    _poupancaAccountNumber:number
    _poupancaRendimento: number

    getIsActive() {
        return this._isActive
    }
    getPoupancaRendimento(){
        return this._poupancaRendimento
    }
    setIsActive(new_active: boolean) {
        this._isActive = new_active
    }
    setPoupancaRendimento(new_rendimento:number){
        this._poupancaRendimento = new_rendimento
    }
}