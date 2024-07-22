import Card from "../Card/cardClass"
import Client from "../Clients/Client"

export default interface baseAccount {
    _client: Client
    _card: Card
    _isActive: boolean
    _initDate: string 

     getIsActive()
     setIsActive(new_active:boolean)
}