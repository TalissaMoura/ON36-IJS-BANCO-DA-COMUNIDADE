import { bankManagerService } from './bankManager.service';
import BankManager from './bankManager.model';
export declare class bankManagerController {
    private readonly bankManagerService;
    constructor(bankManagerService: bankManagerService);
    createBankManager(name: string, cpf: string, initDate: string, state: string, city: string): BankManager;
    findByID(id: string): BankManager;
    updateBankManager(name: string, cpf: string, initDate: string, state: string, city: string): BankManager;
    deactiveBankManager(id: string): void;
}
