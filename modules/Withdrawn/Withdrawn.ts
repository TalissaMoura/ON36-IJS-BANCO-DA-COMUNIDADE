import iTransactions from "../baseClasses/iTransactions"
import ClientAccount from "../Clients/ClientAccount"
import { v4 as uuidv4 } from 'uuid';

export default class Withdrawn implements iTransactions{
    _transactionID: string 
    _transaction_name: string
    _transaction_date: string
    _transaction_amount: number
    _clientAccount:ClientAccount
    _statusTransaction: 'Processing' | 'Cancelled' | 'Complete'
    _type: string

    constructor(
        client: ClientAccount,
        withdrawn_date:string,
        withdrawn_amount: number,
    ){
        this._transactionID = uuidv4()
        this._transaction_date = withdrawn_date
        this._transaction_amount = withdrawn_amount
        this._statusTransaction = "Processing"
        this._type = "Credit"
        this._transaction_name = "Withdrawn"
        this._clientAccount = client

        console.log("Processing withdrawn")
    }

    private createWithdrawnContaCorrente(currentAccountNumber:number):string{
        const account = this._clientAccount._currentAccount.find(cc => cc._currentAccountNumber === currentAccountNumber)
        if (account && !account.isActive && account.amount < this._transaction_amount){
            this._statusTransaction = 'Cancelled'
            return this._statusTransaction
        }

        const new_amount = (account?.amount ?? 0) - this._transaction_amount

        if (new_amount > 0 && account){
            account.amount = new_amount
            this._statusTransaction = "Complete"
            return this._statusTransaction
        }
        
        this._statusTransaction = "Cancelled"

        return this._statusTransaction

    }

    private createWithdrawnContaPoupanca(poupancaAccountNumber:number):string{
        const account = this._clientAccount._poupancaAccount.find(cc => cc._poupancaAccountNumber === poupancaAccountNumber)
        if (account && (!account.isActive || account.amount < this._transaction_amount)){
            this._statusTransaction = 'Cancelled'
            return this._statusTransaction
        }
        const new_amount = (account?.amount ?? 0) - this._transaction_amount

        if (new_amount > 0 && account){
            account.amount = new_amount
            this._statusTransaction = "Complete"
            return this._statusTransaction
        }

        this._statusTransaction = "Cancelled"

        return this._statusTransaction


    }

    private addWithdrawnInClientAccount():void{

        this._clientAccount.addWithdrawn(this)

    }

    private outputOperationResult(result:string){
        if (result !== "Complete"){
           console.log("Operation cancelled")
        }
        else{
            console.log("Operation complete")
        }
    }
    
     public processWithdrawn(type:"Conta corrente"|"Conta poupanca",accountNumber:number):void|string{

        if(type!=="Conta corrente" && type!=="Conta poupanca"){
            return "Operation invalid"
        }

        else if (type == "Conta corrente"){
            const res = this.createWithdrawnContaCorrente(accountNumber)

            this.outputOperationResult(res)

            if (res == "Complete"){
                this.addWithdrawnInClientAccount()
    
                console.log("Add Withdrawn in ClientAccount")
            }
        }

        else if (type == "Conta poupanca"){
            const res = this.createWithdrawnContaPoupanca(accountNumber)

            this.outputOperationResult(res)

            if (res == "Complete"){
                this.addWithdrawnInClientAccount()
    
                console.log("Add Withdrawn in ClientAccount")
            }
        }

        
    
    }

}