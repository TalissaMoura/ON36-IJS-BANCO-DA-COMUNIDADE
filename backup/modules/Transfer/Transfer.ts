import iTransactions from "../baseClasses/iTransactions";
import ClientAccount from "../Clients/clientAccount";
import { v4 as uuidv4 } from 'uuid';

export default class Transfer implements iTransactions {
    _transactionID: string
    _transaction_name: string
    _transaction_amount: number
    _transaction_date: string;
    _statusTransaction: "Processing" | "Cancelled" | "Complete";
    _type: string;
    _accountToTransfer: ClientAccount
    _clientAccount: ClientAccount

    constructor(
        client: ClientAccount,
        accountToTransfer:ClientAccount,
        transfer_date:string,
        transfer_amount: number,
    ){
        this._transactionID = uuidv4()
        this._transaction_date = transfer_date
        this._transaction_amount = transfer_amount
        this._statusTransaction = "Processing"
        this._type = "Debt"
        this._transaction_name = "Transfer"
        this._clientAccount = client
        this._accountToTransfer = accountToTransfer
    
        console.log("Processing Transfer")
    }

    private validateContaCorrenteTransfer(currentAccountNumberMakeTransfer:number,currentAccountNumberToTransfer:number){
        const account = this._clientAccount._currentAccount.find(cc => cc._currentAccountNumber === currentAccountNumberMakeTransfer)
        const accountToTransfer = this._accountToTransfer._currentAccount.find(cc => cc._currentAccountNumber === currentAccountNumberToTransfer)
        if (account && accountToTransfer && (!account.isActive || !accountToTransfer.isActive || account.amount < this._transaction_amount)){
            this._statusTransaction = 'Cancelled'
            return this._statusTransaction
        }

        return this._statusTransaction


    }


    private validateContaPoupancaTransfer(poupancaAccountNumberMakeTransfer:number,poupancaAccountNumberToTransfer:number){
        const account = this._clientAccount._poupancaAccount.find(cc => cc._poupancaAccountNumber === poupancaAccountNumberMakeTransfer)
        const accountToTransfer = this._accountToTransfer._poupancaAccount.find(cc => cc._poupancaAccountNumber === poupancaAccountNumberToTransfer)
        if (account && accountToTransfer && (!account.isActive || !accountToTransfer.isActive || account.amount < this._transaction_amount)){
            this._statusTransaction = 'Cancelled'
            console.log("aqui!")
            return this._statusTransaction
        }

        return this._statusTransaction


    }

    private createTransferContaCorrente(currentAccountNumber:number,currentAccountNumberToTransfer:number):string{

        if (this.validateContaCorrenteTransfer(currentAccountNumber,currentAccountNumberToTransfer) == "Cancelled"){
            return this._statusTransaction
        }


        const accountToTransfer = this._accountToTransfer._currentAccount.find(cc => cc._currentAccountNumber === currentAccountNumberToTransfer)

        const newAmount =  (accountToTransfer?.amount ?? 0) + this._transaction_amount
        if (accountToTransfer){
            accountToTransfer.amount = newAmount
            this._statusTransaction = "Complete"
            return this._statusTransaction
        }

        return this._statusTransaction

    }

    private createTransferContaPoupanca(poupancaAccountNumber:number,poupancaAccountNumberToTransfer:number):string{

        if (this.validateContaPoupancaTransfer(poupancaAccountNumber,poupancaAccountNumberToTransfer) == "Cancelled"){
            return this._statusTransaction
        }

        const accountToTransfer = this._accountToTransfer._poupancaAccount.find(cc => cc._poupancaAccountNumber === poupancaAccountNumberToTransfer)

        const newAmount =  (accountToTransfer?.amount ?? 0) + this._transaction_amount
        if (accountToTransfer){
            accountToTransfer.amount = newAmount
            this._statusTransaction = "Complete"
            return this._statusTransaction
        }

        return this._statusTransaction

    }

    private addTransferInClientAccount():void{

        this._clientAccount.addTransfer(this)

    }

    private outputOperationResult(result:string){
        if (result !== "Complete"){
            console.log("Operation cancelled")
        }
        else{
            console.log("Operation Complete")
        }
    }
    
     public processTransfer(type:"Conta corrente"|"Conta poupanca",accountNumber:number,accountNumberToTransfer:number):void|string{

        if(type!=="Conta corrente" && type!=="Conta poupanca"){
            return "Operation invalid"
        }

        else if (type == "Conta corrente"){
            const res = this.createTransferContaCorrente(accountNumber,accountNumberToTransfer)

            this.outputOperationResult(res)

            if (res == "Complete"){
                this.addTransferInClientAccount()
    
                console.log("Add Tranfer in ClientAccount")
            }
        }

        else if (type == "Conta poupanca"){
            const res = this.createTransferContaPoupanca(accountNumber,accountNumberToTransfer)

            this.outputOperationResult(res)
    
            if (res == "Complete"){
                this.addTransferInClientAccount()
    
                console.log("Add Transfer in ClientAccount")
            }
        }
        
    
    }
}