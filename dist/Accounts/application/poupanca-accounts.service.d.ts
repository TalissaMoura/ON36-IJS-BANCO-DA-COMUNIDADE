import { AccountRepository } from "../adapters/persistence/accounts.repository";
import poupancaAccount from "../domain/poupancaAccount.model";
import { BaseAccountService } from "./baseAccounts.service";
import { IPoupancaAccountUseCases } from "./ports/in/poupanca-account.use-cases";
import accountFactory from "../domain/factories/accountFactory.model";
export declare class PoupancaAccountsService extends BaseAccountService implements IPoupancaAccountUseCases {
    private readonly accountRepositoryP;
    private readonly accountFactoryP;
    constructor(accountRepositoryP: AccountRepository, accountFactoryP: accountFactory);
    setRendimento(accountId: string, rendimento: number): Promise<poupancaAccount>;
}
