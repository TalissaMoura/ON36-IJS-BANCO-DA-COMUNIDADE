import ClientAccount from "../Clients/clientAccount"
import { v4 as uuidv4 } from 'uuid';


export default class BankManager {
    _bankManagerID: string
    _name: string
    _cpf: string
    _initDate: string
    _state: string
    _city: string
    _clientAccount: ClientAccount[] 

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
            this._clientAccount = []
        }

    get clientAccounts(){
        return this._clientAccount
    }
    
    addClientAccount(newClienAccount:ClientAccount){
        this._clientAccount.push(newClienAccount)
    }

    deactivateCurrentAccount(clientAccount:ClientAccount,currentAccountNumber:number):void{

            const currentAccount = clientAccount._currentAccount.find(cc => cc.currentAccountNumber==currentAccountNumber)

            if (currentAccount){
                currentAccount.isActive = false
                console.log("Deactivate account")
            }
            else{
                console.log("Invalid Operation")
            }
        }

    

    deactivatePoupancaAccount(clientAccount:ClientAccount,poupancaAccountNumber:number):void{

        const poupancaAccount = clientAccount._poupancaAccount.find(cc => cc.poupancaAccountNumber==poupancaAccountNumber)


            if (poupancaAccount){
                poupancaAccount.isActive = false
                console.log("Deactivate account")
            }
            else{
                console.log("Invalid Operation")
            }
        }

}

