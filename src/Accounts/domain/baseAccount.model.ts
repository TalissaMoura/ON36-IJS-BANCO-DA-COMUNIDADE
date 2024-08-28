export abstract class baseAccount {
    _accountId: string
    _accountNumber: string
    _balance: number
    _initDate: string
    _isActive: boolean

    constructor(id: string, initialBalance: number, initDate:string, accountNumber: string,isActive:boolean) {
        this._accountId = id;
        this._balance = initialBalance;
        this._initDate = initDate;
        this._accountNumber = accountNumber;
        this._isActive = isActive
    }

    abstract deposit(amount: number): void;
    abstract withdraw(amount: number): void;
}
