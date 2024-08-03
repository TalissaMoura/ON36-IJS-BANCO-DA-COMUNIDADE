import iAccount from "../factories/iAccount.model";
import { v4 as uuidv4 } from 'uuid';
import depositPoupancaAccount from "../products/poupancaAccount/depositPoupancaAccount.model"
import transferPoupancaAccount from "../products/poupancaAccount/transferPoupancaAccount.model";
import withdrawnPoupancaAccount from "../products/poupancaAccount/withdrawnPoupancaAccount.model";

class poupancaAccount implements iAccount {
    _accountID: string 
    _accountNumber: string 
    _amount: number
    _isActive: boolean
    _initDate: string
    _rendimento:number
    

    constructor(
        accountNumber: string,
        amount: number,
        isActive: boolean,
        initDate: string,
        rendimento:number
    ){
        this._accountID = uuidv4()
        this._accountNumber = accountNumber 
        this._amount = amount 
        this._isActive = isActive 
        this._initDate = initDate
        this._rendimento = rendimento
    }

    createAccount():poupancaAccount{
        return new poupancaAccount()
    }

    createDeposit(): depositPoupancaAccount {
        return new depositPoupancaAccount()
    }
    createTransfer(): transferPoupancaAccount {
        return new transferPoupancaAccount()
    }
    createWithdrawn(): withdrawnPoupancaAccount {
        return new withdrawnPoupancatAccount()
    }
}

