import { Inject, Injectable } from '@nestjs/common';
import { BaseAccountService } from './baseAccounts.service';
import { AccountRepository } from '../adapters/persistence/accounts.repository';
import currentAccount from '../domain/currentAccount.model';
import { ICurrentAccountUseCases } from './ports/in/current-account.use-cases';
import accountFactory from '../domain/factories/accountFactory.model';
import { BaseAccountRepository } from './ports/out/accounts.repository';


@Injectable()
export class CurrentAccountsService extends BaseAccountService implements ICurrentAccountUseCases {
  constructor(
    private readonly accountRepositoryCC: AccountRepository,
    private readonly accountFactoryCC: accountFactory
  ) {
    super(accountRepositoryCC,accountFactoryCC)
  }

  async setLimitChequeEspecial(accountId: string, limit: number): Promise<currentAccount> {
        const account = await this.accountRepositoryCC.searchById(accountId) as currentAccount;
        if (!account) throw new Error('Account not found');
        account.setLimitChequeEspecial(limit);
        const updatedAccount = await this.accountRepositoryCC.save(account)
        return updatedAccount as currentAccount
    }
}
