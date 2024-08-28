export declare abstract class baseAccount {
    _accountId: string;
    _accountNumber: string;
    _balance: number;
    _initDate: string;
    _isActive: boolean;
    constructor(id: string, initialBalance: number, initDate: string, accountNumber: string, isActive: boolean);
    abstract deposit(amount: number): void;
    abstract withdraw(amount: number): void;
}
