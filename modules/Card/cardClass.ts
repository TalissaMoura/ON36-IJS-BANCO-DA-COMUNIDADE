export default class Card {
    _cardID: number
    _cardNumber: number
    _cardPassword: number 

    getCardNumber(){
        return this._cardID
    }
    getCardPassword(){
        return this._cardNumber
    }
    setCardPassword(password:number){
        this._cardPassword = password
    }
}