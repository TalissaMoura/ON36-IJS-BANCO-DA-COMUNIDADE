import { BaseAccountService } from './baseAccounts.service';
import { AccountRepository } from '../adapters/persistence/accounts.repository';
import currentAccount from '../domain/currentAccount.model';
import { ICurrentAccountUseCases } from './ports/in/current-account.use-cases';
import accountFactory from '../domain/factories/accountFactory.model';
export declare class CurrentAccountsService extends BaseAccountService implements ICurrentAccountUseCases {
    private readonly accountRepositoryCC;
    private readonly accountFactoryCC;
    constructor(accountRepositoryCC: AccountRepository, accountFactoryCC: accountFactory);
    setLimitChequeEspecial(accountId: string, limit: number): Promise<currentAccount>;
}
