import BankManager from './bankManager.model';
import ClientAccount from 'src/clientAccount/clientAccount.model';
export declare class bankManagerService {
    private readonly filePath;
    constructor();
    private readBankManagerAccounts;
    private writeBankManagerAccounts;
    createBankManager(name: string, cpf: string, initDate: string, state: string, city: string): BankManager;
    findById(id: string): BankManager;
    updateBankManager(bankManagerUpdated: BankManager): BankManager;
    deactiveBankManagerByID(bankManagerID: string): void;
    addClientAccountByID(bankManagerID: string, newClientAccount: ClientAccount): void;
    updateClientAccount(bankManagerID: string, clientAccountUpdated: ClientAccount): ClientAccount;
    deactivateCurrentAccountByID(bankManagerID: string, clientAccountID: string, currentAccountNumber: number): void;
    deactivatePoupancaAccountByID(bankManagerID: string, clientAccountID: string, poupancaAccountNumber: number): void;
}
