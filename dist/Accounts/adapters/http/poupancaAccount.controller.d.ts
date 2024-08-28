import poupancaAccount from '../../domain/poupancaAccount.model';
import { PoupancaAccountsService } from '../../../Accounts/application/poupanca-accounts.service';
export declare class poupancaAccountController {
    private readonly poupancaAccountService;
    constructor(poupancaAccountService: PoupancaAccountsService);
    createPoupancaAccount(isBankManager: boolean, amount: number, initDate: string, accountNumber: string): Promise<poupancaAccount>;
    findpoupancaAccountByID(id: string): Promise<poupancaAccount>;
    updatepoupancaAccountById(id: string, initDate: string, amount: number, accountNumber: string): Promise<poupancaAccount>;
    deactivateClientByID(id: string): Promise<poupancaAccount>;
}
