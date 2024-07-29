import iTransactions from "../baseClasses/iTransactions"
import ClientAccount from "../Clients/ClientAccount"
import { v4 as uuidv4 } from 'uuid';

export default class Deposit implements iTransactions {
    _transactionID: string 
    _transaction_name: string
    _transaction_date: string
    _transaction_amount: number
    _clientAccount:ClientAccount
    _statusTransaction: 'Processing' | 'Cancelled' | 'Complete'
    _type: string

    constructor(
        client: ClientAccount,
        deposit_date:string,
        deposit_amount: number,
    ){
        this._transactionID = uuidv4()
        this._transaction_date = deposit_date
        this._transaction_amount = deposit_amount
        this._type = "Credit"
        this._transaction_name = "Deposit"
        this._statusTransaction = "Processing"
        this._clientAccount = client

        console.log("Processing Deposit")
    }

    private createDepositContaCorrente(currentAccountNumber:number):string{
        const account = this._clientAccount._currentAccount.find(cc => cc._currentAccountNumber === currentAccountNumber)
        if (!account?.isActive){
            this._statusTransaction = 'Cancelled'
            return this._statusTransaction
        }
        const new_amount = (account._amount ?? 0) + this._transaction_amount

        account._amount = new_amount 

        this._statusTransaction = "Complete"

        return this._statusTransaction

    }

    private createDepositContaPoupanca(poupancaAccountNumber:number):string{
        const account = this._clientAccount._poupancaAccount.find(cc => cc._poupancaAccountNumber === poupancaAccountNumber)
        if (!account?.isActive){
            this._statusTransaction = 'Cancelled'
            return this._statusTransaction
        }
        const new_amount = (account._amount ?? 0) + this._transaction_amount

        account._amount = new_amount 

        this._statusTransaction = "Complete"


        return this._statusTransaction

    }

    private addDepositInClientAccount():void{

        this._clientAccount.addDeposit(this)

    }

    private outputOperationResult(result:string){
        if (result !== "Complete"){
            console.log("Operation cancelled")
        }
        else{
            console.log("Operation Complete")
        }
    }
    
     public processDeposit(type:"Conta corrente"|"Conta poupanca",accountNumber:number):void|string{

        if(type!=="Conta corrente" && type!=="Conta poupanca"){
            return "Operation invalid"
        }

        else if (type == "Conta corrente"){
            const res = this.createDepositContaCorrente(accountNumber)

            this.outputOperationResult(res)

            if (res == "Complete"){
                this.addDepositInClientAccount()
    
                console.log("Add deposit in ClientAccount")
            }
        }

        else if (type == "Conta poupanca"){
            const res = this.createDepositContaPoupanca(accountNumber)

            this.outputOperationResult(res)

            if (res == "Complete"){
                this.addDepositInClientAccount()
    
                console.log("Add deposit in ClientAccount")
            }
        }
        
    
    }

        
}
        
        

